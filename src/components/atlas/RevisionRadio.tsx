"use client";

/* ============================================================
   THE REVISION RADIO — the atlas speaks, v4.

   What changed: the radio no longer READS your page back to
   you like a robot. One voice hosts the dial — TARA, warm
   Indian English — and two programmes ride her voice:

   · EXPLAIN (default) — the studio voice. The lecture's own
     outline (title · blurb · chapters) plus the exact chapter
     prose from the notes travel to the script desk
     (/api/narrate/script), where a briefing is written the way
     a senior would explain it on the walk to class — then the
     studio (/api/narrate/tts) speaks it in Tara's warm voice.
     It explains what the lecture MEANS. It never recites the
     page.
   · READ ALONG — the classic tape: the window's own prose,
     hands-free.

   Craft notes:
   · speeds 0.5× / 1× / 2× — applied live via playbackRate with
     pitch preserved (one synthesis serves every speed)
   · bites are whole sentences, ≤950 chars, prefetched two
     ahead — the voice never breaks mid-thought
   · every bite is doubly cached (browser Cache API over the
     studio's disk cache) — the walk-to-class replay is free
   · if the studio is unreachable the radio falls back to the
     device's own speech engine, Indian English preferred —
     the button never breaks
   · captions run under the controls, karaoke-style
   · warms itself while you read: the briefing for the window
     you're on is composed and buffered before you press play
   · safe-area insets, 390px-safe, route change stops the tape
   · hidden on the landing — the hero is cinema, not a chapter
   ============================================================ */

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  AudioLines,
  BookOpenText,
  Pause,
  Play,
  Repeat2,
  Sparkles,
  Square,
  X,
} from "lucide-react";
import { SUBJECTS, SUBJECT_IDS } from "./subjects";
import { lectureTableFor, type RadioLecture } from "./lecture-tables";
import { RadioStage, type HostPhase } from "./GearHost";
import {
  NARRATOR_SPEEDS,
  RADIO_VOICES,
  NarrationAudioCache,
  deviceRateFor,
  deviceSpeechSupported,
  groupBites,
  loadSpeed,
  loadVoice,
  markStudioCooldown,
  pickDeviceVoiceReady,
  readBites,
  saveSpeed,
  studioCooling,
  stripChrome,
  type NarratorMode,
  type TtsBite,
} from "@/lib/narration";

type Phase = "idle" | "composing" | "speaking" | "paused" | "done";

interface RadioOutline {
  shelf: string;
  subject: string;
  scope: "subject" | "lecture";
  code?: string;
  n?: number;
  title: string;
  blurb?: string;
  chapters?: { id: string; label: string; desc: string }[];
}

interface Programme {
  label: string;
  mode: NarratorMode;
  sentences: string[]; // captions for the studio path
  bites: TtsBite[]; // studio path (whole sentences per bite)
  words: number;
}

/** silent 44-byte wav — played once inside the tap gesture to
    unlock HTMLAudio on iOS before the studio answers */
const UNLOCK_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";

const READ_CAP = 12_000; // page prose ceiling for Read mode

const audioCache = new NarrationAudioCache();

/* ============================================================
   THE HOST — one clean equalizer on a small stage (see
   GearHost.tsx): it breathes while the radio speaks, freezes
   mid-breath on pause, and turns into a quiet check when the
   briefing is done. Deliberately simple — no characters, no
   costume changes. The badge at the stage foot stays a
   slow-orbiting cycle: revision is a loop, the icon says so.
   ============================================================ */

function currentSubjectId(): string | null {
  if (typeof window === "undefined") return null;
  const h = window.location.hash;
  const prefix = "#/subject/";
  if (!h.startsWith(prefix)) return null;
  const id = h.slice(prefix.length);
  return SUBJECT_IDS.includes(id) ? id : null;
}

/** the "Lecture N · Title" hero band every reader opens with */
function scrapeLecture(): { n: number; title: string } | null {
  const root = document.querySelector("main");
  if (!root) return null;
  const headings = root.querySelectorAll("h2");
  for (const h of headings) {
    const t = (h.innerText ?? "").replace(/\s+/g, " ").trim();
    const m = t.match(/Lecture\s+(\d+)/i);
    if (m) {
      const after = t.split("·").slice(1).join("·").trim();
      return { n: Number(m[1]), title: after };
    }
  }
  return null;
}

async function buildOutline(): Promise<RadioOutline | null> {
  const subjectId = currentSubjectId();
  if (!subjectId) return null;
  const subject = SUBJECTS.find((s) => s.id === subjectId);
  const subjectName = subject?.title ?? subjectId;
  const table = await lectureTableFor(subjectId);
  const scraped = scrapeLecture();
  if (scraped && table) {
    const lec: RadioLecture | undefined = table.find((l) => l.n === scraped.n);
    if (lec) {
      return {
        shelf: subjectId,
        subject: subjectName,
        scope: "lecture",
        code: lec.code,
        n: lec.n,
        title: lec.title,
        blurb: lec.blurb,
        chapters: lec.chapters,
      };
    }
  }
  /* no band on stage — the course welcome briefing */
  const first = table?.[0];
  return {
    shelf: subjectId,
    subject: subjectName,
    scope: "subject",
    title: subjectName,
    blurb: first?.blurb,
    chapters: first?.chapters,
  };
}

/** the lifeboat script — composed on the device from the outline
    itself when the script desk can't be reached (network hiccup,
    cold server, blocked route). Not as warm as the studio's
    briefing, but the radio still SPEAKS instead of dead-ending
    with an error note — the button never breaks. */
function localBriefing(o: RadioOutline): { script: string; words: number } {
  const parts: string[] = [];
  if (o.scope === "lecture") {
    /* a title that already says "Welcome…" would double the greeting */
    parts.push(
      /^welcome/i.test(o.title)
        ? `Lecture ${o.n ?? ""} of ${o.subject} — ${o.title}.`
        : `Welcome to Lecture ${o.n ?? ""} of ${o.subject} — ${o.title}.`,
    );
  } else {
    parts.push(`Welcome to ${o.subject}.`);
  }
  if (o.blurb) parts.push(o.blurb);
  const chs = (o.chapters ?? []).slice(0, 6);
  if (chs.length === 1) {
    parts.push(`In this session we focus on ${chs[0].label} — ${chs[0].desc}.`);
  } else if (chs.length > 1) {
    const walk = chs.map((c) => `${c.label} — ${c.desc}`).join("; ");
    parts.push(`We will move through ${chs.length} stops: ${walk}.`);
  }
  if (o.scope === "lecture") {
    parts.push(
      "That is the shape of it. Play the briefing once, then read the lecture below — it will take half the time.",
    );
  } else {
    parts.push("Pick a lecture from the sequence and the radio will explain it before you read.");
  }
  const script = parts.join(" ").replace(/\s+/g, " ").trim();
  return { script, words: script.split(/\s+/).filter(Boolean).length };
}

export function RevisionRadio() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const [phase, setPhase] = useState<Phase>("idle");
  const [mode, setMode] = useState<NarratorMode>("explain");
  const [speed, setSpeed] = useState<number>(1);
  const [engine, setEngine] = useState<"studio" | "device">("studio");

  const [label, setLabel] = useState<string | null>(null);
  const [caption, setCaption] = useState<string | null>(null);
  const [prog, setProg] = useState({ idx: 0, total: 0, frac: 0 });
  const [note, setNote] = useState<string | null>(null);
  const [prewarmed, setPrewarmed] = useState(false);
  const [explainHere, setExplainHere] = useState(false);
  const [routeTick, setRouteTick] = useState(0);

  const sessionRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<Programme | null>(null);
  const biteIdxRef = useRef(0);
  const speedRef = useRef(1);
  /* one voice on the dial — Tara. loadVoice() still runs once at mount
     so an old saved dial position (v2 era) resolves harmlessly to her */
  const voiceRef = useRef(RADIO_VOICES[0].id);
  const phaseRef = useRef<Phase>("idle");
  const deviceTokenRef = useRef(0);
  const deviceIdxRef = useRef(0);
  const deviceQueueRef = useRef<string[]>([]);
  const prewarmKeyRef = useRef("");
  const programmeNRef = useRef<number | "course" | null>(null);

  const setPhaseSafe = useCallback((p: Phase) => {
    phaseRef.current = p;
    setPhase(p);
  }, []);

  /* ---------------------------------------------------- mount */
  useEffect(() => {
    setMounted(true);
    setSpeed(loadSpeed());
    speedRef.current = loadSpeed();
    voiceRef.current = loadVoice(); // "tongtong" — unknown stored ids fall to Tara
    /* warm the device-voice list — Chrome loads it async */
    if (deviceSpeechSupported()) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
    /* one cheap health check — if the studio is already cooling (its
       quota is resting), the radio knows before the first play and
       the device voice takes the first programme without a stumble */
    fetch("/api/narrate/tts")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { cooling?: boolean; cooldownEndsIn?: number } | null) => {
        if (d?.cooling && d.cooldownEndsIn) markStudioCooldown(d.cooldownEndsIn * 1000);
      })
      .catch(() => {});
    return () => {
      sessionRef.current += 1;
      deviceTokenRef.current += 1;
      if (deviceSpeechSupported()) window.speechSynthesis.cancel();
      audioRef.current?.pause();
      if (deviceSpeechSupported()) window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  /* ------------------------------------------ which window is on stage */
  /* (the route effect below must stay dep-free — it reads the hash
     itself and calls the stable stopTape) */
  const prevSubjectRef = useRef<string | null>(null);
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash;
      const prefix = "#/subject/";
      const subjectId = h.startsWith(prefix) && SUBJECT_IDS.includes(h.slice(prefix.length))
        ? h.slice(prefix.length)
        : null;
      const onLiveShelf =
        subjectId !== null || h === "#/cockpit" || h === "#/ledger";
      setHidden(!onLiveShelf);
      setExplainHere(subjectId !== null);
      setRouteTick((t) => t + 1);
      /* a new window is a new stage — no programme from the old room
         may keep its nameplate up (the stale "Lecture 1 · Introduction
         to Marketing" label surviving a shelf hop was exactly that) */
      setLabel(null);
      setCaption(null);
      setNote(null);
      if (!onLiveShelf) {
        /* the landing is cinema — the radio goes quiet and folds away */
        stopTape(true);
        setExpanded(false);
      } else {
        /* a new shelf is a new room — the tape stops instead of
           drifting over the next subject like a ghost voice */
        if (subjectId !== prevSubjectRef.current && prevSubjectRef.current !== null) {
          stopTape(true);
          setPrewarmed(false);
        }
        if (h !== prewarmKeyRef.current.split("|")[0]) setPrewarmed(false);
        if (!h.startsWith(prefix)) setMode("read");
        /* arriving on a subject from a non-subject window (cockpit,
           ledger, landing) re-arms the Explain dial — the hash is a
           same-document navigation, so state survives the hop */
        else if (subjectId !== null && prevSubjectRef.current === null) setMode("explain");
      }
      prevSubjectRef.current = subjectId;
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------------------------- the tape machine */
  const ensureAudio = useCallback((): HTMLAudioElement => {
    if (!audioRef.current) {
      const a = new Audio();
      a.preload = "auto";
      a.setAttribute("playsInline", "");
      a.setAttribute("data-print", "hide");
      a.setAttribute("aria-hidden", "true");
      /* ride in the DOM, unseen — some mobile engines pause detached media */
      a.style.display = "none";
      document.body.appendChild(a);
      a.preservesPitch = true;
      (a as unknown as { mozPreservesPitch?: boolean }).mozPreservesPitch = true;
      (a as unknown as { webkitPreservesPitch?: boolean }).webkitPreservesPitch = true;
      a.onended = () => {
        const token = sessionRef.current;
        const q = queueRef.current;
        if (!q || token !== sessionRef.current) return;
        const next = biteIdxRef.current + 1;
        if (next >= q.bites.length) {
          biteIdxRef.current = q.bites.length;
          setProg({ idx: q.bites.length, total: q.bites.length, frac: 1 });
          setCaption(null);
          setPhaseSafe("done");
          return;
        }
        void playBite(next);
      };
      a.onerror = () => {
        if (a.src && !a.src.startsWith("data:")) studioFailed();
      };
      a.ontimeupdate = () => {
        const q = queueRef.current;
        if (!q || phaseRef.current !== "speaking" || !a.duration || Number.isNaN(a.duration)) return;
        const bite = q.bites[biteIdxRef.current];
        if (!bite) return;
        const within = Math.min(1, a.currentTime / a.duration);
        const span = bite.to - bite.from;
        setProg((p) => ({ ...p, frac: within }));
        const idx = bite.from + Math.round(within * span);
        setCaption(q.sentences[idx] ?? bite.text);
      };
      audioRef.current = a;
    }
    return audioRef.current;
  }, [setPhaseSafe]);

  /** silence the studio element — never two voices at once */
  const hushAudio = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      a.onended = null;
      a.pause();
    }
  }, []);

  const stopTape = useCallback(
    (fullReset = false) => {
      sessionRef.current += 1;
      deviceTokenRef.current += 1;
      if (deviceSpeechSupported()) window.speechSynthesis.cancel();
      const a = audioRef.current;
      if (a) {
        a.onended = null;
        a.pause();
        a.removeAttribute("src");
      }
      queueRef.current = null;
      biteIdxRef.current = 0;
      deviceQueueRef.current = [];
      setCaption(null);
      setProg({ idx: 0, total: 0, frac: 0 });
      if (fullReset) setPhaseSafe("idle");
      else if (phaseRef.current !== "done") setPhaseSafe("idle");
    },
    [setPhaseSafe],
  );

  const studioFailed = useCallback(() => {
    if (phaseRef.current === "idle") return;
    /* ONE strike and the device voice takes the whole programme —
       no retry storm against a rate-limited studio (every extra
       request burns quota and delays the voice that IS audible).
       The latch expires on its own and the studio voice returns. */
    markStudioCooldown(90_000);
    hushAudio();
    setEngine("device");
    setNote("Studio voice is resting — your device voice carries this briefing.");
    const q = queueRef.current;
    if (!q) return;
    const sentence = q.bites[Math.min(biteIdxRef.current, q.bites.length - 1)]?.from ?? 0;
    startDevice(sentence);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hushAudio]);

  async function playBite(i: number) {
    const q = queueRef.current;
    const token = sessionRef.current;
    if (!q || i >= q.bites.length) return;
    biteIdxRef.current = i;
    setProg((p) => ({ ...p, idx: i, frac: 0 }));
    setCaption(q.sentences[q.bites[i].from] ?? null);
    setPhaseSafe("speaking");
    const bite = q.bites[i];
    let url: string;
    /* cold synthesis can take a few seconds — say so instead of silence */
    const warmTimer = i === 0
      ? window.setTimeout(() => setNote("Warming the studio voice — a few seconds…"), 1500)
      : 0;
    try {
      url = await audioCache.get(voiceRef.current, bite.text);
    } catch {
      window.clearTimeout(warmTimer);
      studioFailed();
      return;
    }
    window.clearTimeout(warmTimer);
    if (token !== sessionRef.current) return;
    setNote(null);
    const a = ensureAudio();
    a.src = url;
    a.playbackRate = speedRef.current;
    try {
      await a.play();
    } catch {
      studioFailed();
      return;
    }
    /* keep two bites ahead buffered — the voice never breaks */
    void audioCache.prefetch(voiceRef.current, q.bites[i + 1]?.text ?? "");
    void audioCache.prefetch(voiceRef.current, q.bites[i + 2]?.text ?? "");
  }

  /* ------------------------------------------- the device engine */
  function startDevice(fromSentence: number) {
    hushAudio(); // the studio element must be silent before the device speaks
    const q = queueRef.current;
    if (!q || !deviceSpeechSupported()) {
      if (!deviceSpeechSupported()) setNote("This browser has no voice engine — captions only.");
      setPhaseSafe("idle");
      return;
    }
    deviceTokenRef.current += 1;
    const token = deviceTokenRef.current;
    const rest = q.sentences.slice(fromSentence).join(" ") || q.label;
    deviceQueueRef.current = readBites(rest, 220);
    deviceIdxRef.current = 0;
    setProg({ idx: 0, total: deviceQueueRef.current.length, frac: 0 });
    setPhaseSafe("speaking");
    /* voices may still be loading — give the engine a beat, then speak */
    void (async () => {
      const v = await pickDeviceVoiceReady();
      if (token !== deviceTokenRef.current) return; // superseded mid-wait
      speakDeviceBite(0, token, v);
    })();
  }

  function speakDeviceBite(i: number, token: number, resolvedVoice?: SpeechSynthesisVoice | null) {
    const bite = deviceQueueRef.current[i];
    if (!bite) {
      setCaption(null);
      setPhaseSafe("done");
      return;
    }
    deviceIdxRef.current = i;
    setProg((p) => ({ ...p, idx: i, frac: 0 }));
    setCaption(bite.length > 180 ? `${bite.slice(0, 177)}…` : bite);
    const u = new SpeechSynthesisUtterance(bite);
    const v = resolvedVoice ?? (deviceSpeechSupported() ? window.speechSynthesis.getVoices()[0] ?? null : null);
    if (v) {
      u.voice = v;
      u.lang = v.lang;
    } else {
      u.lang = "en-IN";
    }
    u.rate = deviceRateFor(speedRef.current);
    u.pitch = 1.06; // a touch of warmth — the fallback host, not a robot receptionist
    /* the watchdog — if the engine never actually starts (some browsers
       mute speech in embedded/preview frames) say so instead of silence */
    let started = false;
    const watchdog = window.setTimeout(() => {
      if (!started && token === deviceTokenRef.current) {
        setNote("This browser is holding its voice back — tap play once more, or open the app in a full browser tab.");
      }
    }, 4000);
    u.onstart = () => {
      started = true;
      window.clearTimeout(watchdog);
      setNote(null);
    };
    u.onend = () => {
      window.clearTimeout(watchdog);
      if (token !== deviceTokenRef.current) return;
      const total = deviceQueueRef.current.length;
      if (i + 1 >= total) {
        setPhaseSafe("done");
        setCaption(null);
      } else {
        speakDeviceBite(i + 1, token);
      }
    };
    u.onerror = () => {
      window.clearTimeout(watchdog);
      if (token !== deviceTokenRef.current) return;
      setPhaseSafe("idle");
      setNote("The device voice stopped — tap play to retry.");
    };
    window.speechSynthesis.speak(u);
  }

  /* ---------------------------------------------------- start / stop */
  const start = useCallback(
    async (which: NarratorMode) => {
      const token = sessionRef.current + 1;
      sessionRef.current = token;
      deviceTokenRef.current += 1;
      if (deviceSpeechSupported()) window.speechSynthesis.cancel();
      const a = audioRef.current;
      if (a) a.pause();
      setNote(null);
      const cooling = studioCooling();
      setEngine(cooling ? "device" : "studio");
      setMode(which);
      setPhaseSafe("composing");
      setLabel(null);
      setCaption(which === "explain" ? "Composing the briefing…" : "Finding this page's voice…");

      let programme: Programme | null = null;
      try {
        if (which === "explain") {
          const outline = await buildOutline();
          if (!outline) throw new Error("no shelf");
          /* the script desk first; if it can't answer (network, cold
             server, blocked route) the device-composed lifeboat
             briefing takes the airtime — the play never dead-ends */
          let data: { script: string; sentences?: string[]; words?: number } | null = null;
          try {
            const res = await fetch("/api/narrate/script", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ outline }),
              /* a hung desk must not pin the play button — the
                 lifeboat briefing takes the airtime instead */
              signal: AbortSignal.timeout(35_000),
            });
            if (res.ok) {
              data = (await res.json()) as {
                script: string;
                sentences?: string[];
                words?: number;
              };
            }
          } catch {
            /* desk unreachable — lifeboat below */
          }
          if (!data || !data.script || !data.script.trim()) data = localBriefing(outline);
          const sentences =
            data.sentences && data.sentences.length
              ? data.sentences
              : data.script.split(/(?<=[.!?])\s+/).filter(Boolean);
          const bites = groupBites(sentences);
          if (!bites.length) throw new Error("empty briefing");
          programme = {
            label:
              outline.scope === "lecture"
                ? `Lecture ${outline.n} · ${outline.title}`
                : `${outline.subject} — the course`,
            mode: "explain",
            sentences,
            bites,
            words: data.words ?? sentences.join(" ").split(/\s+/).length,
          };
        } else {
          const root = document.querySelector("main");
          const text = root ? stripChrome(root as HTMLElement) : "";
          if (!text) throw new Error("nothing to read");
          const chunks = readBites(text.slice(0, READ_CAP), 420);
          if (!chunks.length) throw new Error("nothing to read");
          programme = {
            label: "Reading this window",
            mode: "read",
            sentences: chunks,
            bites: chunks.map((t, i) => ({ text: t, from: i, to: i })),
            words: text.split(/\s+/).length,
          };
        }
      } catch {
        if (token !== sessionRef.current) return;
        setPhaseSafe("idle");
        setCaption(null);
        setNote(
          which === "explain"
            ? "Could not compose the briefing — try Read along, or retry in a moment."
            : "Nothing readable on this window.",
        );
        return;
      }
      if (token !== sessionRef.current) return;
      queueRef.current = programme;
      programmeNRef.current = scrapeLecture()?.n ?? "course";
      setLabel(programme.label);
      setProg({ idx: 0, total: programme.bites.length, frac: 0 });
      if (cooling) {
        /* the studio is resting — the device voice takes it from here,
           instantly, instead of eight seconds of silence */
        startDevice(0);
        return;
      }
      await playBite(0);
    },
    [setPhaseSafe],
  );

  const pause = useCallback(() => {
    if (phaseRef.current !== "speaking") return;
    if (engine === "studio") {
      audioRef.current?.pause();
    } else {
      /* Android's speechSynthesis.pause() is unreliable (it often never
         resumes) — cancel instead; resume replays the current bite, a
         sentence at most, never the whole lecture */
      window.speechSynthesis.cancel();
    }
    setPhaseSafe("paused");
  }, [engine, setPhaseSafe]);

  const resume = useCallback(() => {
    if (phaseRef.current !== "paused") return;
    if (engine === "studio") {
      void audioRef.current?.play().catch(() => setPhaseSafe("idle"));
    } else {
      /* the pause cancelled the queue — speak the current bite again */
      const token = ++deviceTokenRef.current;
      speakDeviceBite(deviceIdxRef.current, token);
    }
    setPhaseSafe("speaking");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [engine, setPhaseSafe]);

  const stop = useCallback(() => {
    stopTape(true);
    setNote(null);
  }, [stopTape]);

  const armedRef = useRef(false);
  const armAudio = useCallback(() => {
    /* iOS wants audio wired inside the tap itself — one silent frame
       unlocks the element for the whole session */
    if (armedRef.current) return;
    armedRef.current = true;
    const a = ensureAudio();
    a.muted = true;
    a.src = UNLOCK_WAV;
    void a.play().catch(() => {});
    a.muted = false;
  }, [ensureAudio]);

  const onMainButton = useCallback(() => {
    armAudio();
    if (phaseRef.current === "speaking") {
      pause();
      return;
    }
    if (phaseRef.current === "paused") {
      resume();
      return;
    }
    if (phaseRef.current === "done" && queueRef.current) {
      /* replay from the top */
      void start(queueRef.current.mode);
      return;
    }
    void start(mode === "explain" && !explainHere ? "read" : mode);
  }, [armAudio, explainHere, mode, pause, resume, start]);

  /* ------------------------------------------------------- the dials */
  const changeSpeed = useCallback(
    (s: number) => {
      setSpeed(s);
      speedRef.current = s;
      saveSpeed(s as (typeof NARRATOR_SPEEDS)[number]);
      if (engine === "studio" && audioRef.current) {
        audioRef.current.playbackRate = s; // live — pitch preserved
      } else if (engine === "device" && phaseRef.current === "speaking") {
        const token = ++deviceTokenRef.current;
        window.speechSynthesis.cancel();
        speakDeviceBite(deviceIdxRef.current, token); // restart the bite at the new pace
      }
    },
    [engine],
  );

  /* --------------------------------------------- the one voice dial
     TARA hosts every shelf — no picker. Kept as a stable callback
     shape so a future guest voice can land without touching callers. */

  const seek = useCallback(
    (frac: number) => {
      const q = queueRef.current;
      if (!q || phaseRef.current === "composing") return;
      if (engine === "studio") {
        const i = Math.max(0, Math.min(q.bites.length - 1, Math.floor(frac * q.bites.length)));
        const token = ++sessionRef.current;
        audioRef.current?.pause();
        void (async () => {
          if (token !== sessionRef.current) return;
          await playBite(i);
        })();
      }
    },
    [],
  );

  /* ----------------------------------------------- the quiet prewarm
     composes the SCRIPT only — the server caches briefings on disk,
     so repeats are free. It never auto-synthesises audio: background
     TTS on every lecture open is exactly what burns the studio's
     quota dry and leaves manual plays with no voice at all. */
  useEffect(() => {
    if (hidden || phase !== "idle" || !explainHere) return;
    const key = `${window.location.hash}|${scrapeLecture()?.n ?? "course"}`;
    if (prewarmKeyRef.current === key) return;
    const t = window.setTimeout(async () => {
      prewarmKeyRef.current = key;
      try {
        const outline = await buildOutline();
        if (!outline) return;
        const res = await fetch("/api/narrate/script", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ outline }),
        });
        if (!res.ok) return;
        const data = (await res.json()) as { script: string; sentences?: string[] };
        const sentences =
          data.sentences && data.sentences.length
            ? data.sentences
            : data.script.split(/(?<=[.!?])\s+/).filter(Boolean);
        if (sentences.length) setPrewarmed(true);
      } catch {
        /* the prewarm is a gift, not a promise */
      }
    }, 2500);
    return () => window.clearTimeout(t);
  }, [hidden, phase, explainHere, routeTick]);

  /* --------------------------------------- the lecture-switch watcher
     the tape must never drift over a lecture switch inside the same
     shelf — the window changed, so the voice follows. While a tape is
     live, a quiet poll watches the lecture band on stage; the moment
     it is no longer the lecture being narrated, the tape stops. */
  useEffect(() => {
    if (phase === "idle" || phase === "done") {
      programmeNRef.current = null;
      return;
    }
    const t = window.setInterval(() => {
      const n = scrapeLecture()?.n ?? "course";
      if (programmeNRef.current !== null && n !== programmeNRef.current) {
        stopTape(true);
        setPrewarmed(false);
      }
    }, 1200);
    return () => window.clearInterval(t);
  }, [phase, stopTape]);

  /* ---------------------------------------------------- the chrome */
  if (!mounted || hidden) return null;

  const active = phase !== "idle" && phase !== "done";
  const speaking = phase === "speaking";
  const composing = phase === "composing";

  /* where the programme stands → which face the radio shows */
  const hostPhase = phase as HostPhase;

  const playPause = (
    <button
      type="button"
      onClick={onMainButton}
      aria-label={speaking ? "Pause" : phase === "paused" ? "Resume" : "Play"}
      title={speaking ? "Pause" : phase === "paused" ? "Resume" : "Play"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#ffe9c9] transition-transform hover:scale-105 active:scale-95"
      style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: "0 10px 24px -10px rgba(234,88,12,.7)" }}
    >
      {speaking ? <Pause className="h-4.5 w-4.5" /> : <Play className="h-4.5 w-4.5 translate-x-[1px]" />}
    </button>
  );

  const speedDial = (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-0.5" role="group" aria-label="Playback speed">
      {NARRATOR_SPEEDS.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => changeSpeed(s)}
          aria-pressed={speed === s}
          title={`Speed ${s}×`}
          className={`h-7 min-w-[2.1rem] rounded-full px-1 font-mono text-[.62rem] font-black transition-colors ${
            speed === s
              ? "bg-[#f59e0b]/25 text-[#f5c889] shadow-[inset_0_0_0_1px_rgba(245,158,11,.4)]"
              : "text-[#a89a86] hover:bg-white/8 hover:text-[#e9d7bf]"
          }`}
        >
          {s}×
        </button>
      ))}
    </div>
  );

  const modeDial = (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[.04] p-0.5" role="group" aria-label="Radio mode">
      <button
        type="button"
        onClick={() => setMode("explain")}
        disabled={!explainHere}
        aria-pressed={mode === "explain"}
        title={explainHere ? "A spoken briefing that explains — never recites" : "Explain lives inside a subject shelf"}
        className={`flex h-7 items-center gap-1 rounded-full px-2 text-[.6rem] font-black uppercase tracking-[.08em] transition-colors ${
          mode === "explain" && explainHere
            ? "bg-[#f59e0b]/25 text-[#f5c889] shadow-[inset_0_0_0_1px_rgba(245,158,11,.4)]"
            : "text-[#a89a86] hover:bg-white/8 hover:text-[#e9d7bf]"
        } ${!explainHere ? "cursor-not-allowed opacity-40" : ""}`}
      >
        <Sparkles className="h-3 w-3" />
        Explain
      </button>
      <button
        type="button"
        onClick={() => setMode("read")}
        aria-pressed={mode === "read"}
        title="Read this window's own words aloud"
        className={`flex h-7 items-center gap-1 rounded-full px-2 text-[.6rem] font-black uppercase tracking-[.08em] transition-colors ${
          mode === "read"
            ? "bg-[#f59e0b]/25 text-[#f5c889] shadow-[inset_0_0_0_1px_rgba(245,158,11,.4)]"
            : "text-[#a89a86] hover:bg-white/8 hover:text-[#e9d7bf]"
        }`}
      >
        <BookOpenText className="h-3 w-3" />
        Read
      </button>
    </div>
  );

  return (
    <div
      data-print="hide"
      role="region"
      aria-label="Revision radio — the atlas speaks"
      className="fixed z-40 flex flex-col items-end gap-2 print:hidden"
      style={{
        right: "calc(0.75rem + env(safe-area-inset-right, 0px))",
        bottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {expanded ? (
        <div
          className="w-[min(21rem,calc(100vw-1.5rem))] overflow-hidden rounded-3xl border border-white/12 bg-[#0a0710]/92 shadow-[0_30px_70px_-24px_rgba(0,0,0,.95)] backdrop-blur-2xl"
          onKeyDown={(e) => {
            if (e.key === "Escape") setExpanded(false);
          }}
        >
          {/* header */}
          <div className="flex items-center justify-between gap-2 px-4 pt-3">
            <p className="flex items-center gap-1.5 text-[.56rem] font-black uppercase tracking-[.22em] text-[#8d7b63]">
              <AudioLines className="h-3 w-3 text-[#f59e0b]" />
              Revision Radio
              <span className="rounded-full border border-white/10 bg-white/[.05] px-1.5 py-px text-[.5rem] tracking-[.14em] text-[#a89a86]">
                {engine === "studio" ? "STUDIO · TARA · EN-IN" : "DEVICE VOICE"}
              </span>
            </p>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              aria-label="Fold the radio away"
              title="Fold"
              className="flex h-6 w-6 items-center justify-center rounded-full text-[#8d7b63] transition-colors hover:bg-white/10 hover:text-[#e9d7bf]"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* programme label */}
          <p className="truncate px-4 pt-2 text-[.72rem] font-bold text-[#cbb89a]" title={label ?? undefined}>
            {label ?? (explainHere ? "The briefing for this window" : "This window, read aloud")}
          </p>

          {/* the radio mark — a quiet equalizer while the voice is on air */}
          <div className="px-3 pt-2">
            <RadioStage phase={hostPhase} speed={speed} />
          </div>

          {/* caption stage */}
          <div className="px-4 pt-2">
            <div
              role="status"
              aria-live="polite"
              className={`min-h-[3.4rem] rounded-2xl border border-white/[.07] bg-white/[.04] p-3 text-[.8rem] leading-snug text-[#f0e2c8] line-clamp-3 ${
                composing ? "atlas-sheen" : ""
              }`}
            >
              {composing
                ? "Composing the briefing…"
                : caption ??
                  (phase === "done"
                    ? "That's the briefing. Read along below — or replay it."
                    : "Press play — I'll explain this window in about a minute.")}
            </div>
          </div>

          {/* progress */}
          <div className="px-4 pt-2.5">
            <div
              className="h-1 w-full cursor-pointer overflow-hidden rounded-full bg-white/10"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                seek((e.clientX - rect.left) / rect.width);
              }}
              role="progressbar"
              aria-label="Programme progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(prog.total ? ((prog.idx + prog.frac) / prog.total) * 100 : 0)}
            >
              <div
                className="h-full rounded-full transition-[width] duration-300"
                style={{
                  width: `${prog.total ? ((prog.idx + prog.frac) / prog.total) * 100 : 0}%`,
                  background: "linear-gradient(90deg,#f59e0b,#f5c889)",
                }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[.54rem] font-bold uppercase tracking-[.14em] text-[#8d7b63]">
              <span>{prog.total ? `bite ${Math.min(prog.idx + 1, prog.total)}/${prog.total}` : "ready"}</span>
              {prewarmed && phase === "idle" ? <span className="text-[#f59e0b]">briefing ready ✓</span> : <span>{speed}× · pitch-true</span>}
            </div>
          </div>

          {/* transport */}
          <div className="flex items-center gap-2 px-4 pt-2.5">
            {playPause}
            {active ? (
              <button
                type="button"
                onClick={stop}
                aria-label="Stop"
                title="Stop"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#cbb89a] transition-colors hover:bg-white/10"
              >
                <Square className="h-3 w-3" />
              </button>
            ) : null}
            <div className="ml-auto">{speedDial}</div>
          </div>

          {/* mode */}
          <div className="px-4 pt-2.5">{modeDial}</div>

          {/* the voice — one host, every shelf */}
          {engine === "studio" ? (
            <div className="flex items-center gap-1.5 px-4 pb-3 pt-2.5">
              <span className="mr-1 text-[.54rem] font-black uppercase tracking-[.18em] text-[#8d7b63]">voice</span>
              <span
                title="Tara — warm, friendly, Indian English. The radio's one and only voice."
                className="inline-flex items-center gap-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/15 px-2 py-0.5 text-[.6rem] font-extrabold text-[#f5c889]"
              >
                <AudioLines className="h-3 w-3" aria-hidden />
                Tara · Indian English
              </span>
            </div>
          ) : (
            <div className="px-4 pb-3 pt-1" />
          )}

          {note ? (
            <p className="border-t border-white/[.06] px-4 py-2 text-[.64rem] font-semibold leading-snug text-[#f59e0b]">
              {note}
            </p>
          ) : null}
        </div>
      ) : null}

      {/* the orb — the runner's portrait stage, with a revision badge */}
      <button
        type="button"
        onClick={() => setExpanded((x) => !x)}
        aria-expanded={expanded}
        aria-label={expanded ? "Fold the revision radio" : "Open the revision radio"}
        title={expanded ? "Fold" : "Revision Radio — explain or read this window"}
        className="gear-orb-btn relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/12 shadow-[0_18px_50px_-18px_rgba(0,0,0,.9)] transition-transform hover:scale-105 active:scale-95"
      >
        <RadioStage phase={hostPhase} speed={speed} compact />
        {speaking ? (
          <span aria-hidden className="atlas-live-dot absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
        ) : null}
        {composing ? (
          <span aria-hidden className="radio-ring-ping absolute inset-0 rounded-[1.35rem] border border-[#f59e0b]/50" />
        ) : null}
        {/* the revision mark — a cycle, orbiting slow */}
        <span
          aria-hidden
          className="absolute -bottom-0.5 -right-0.5 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#1a0f06] text-[#f5c889] shadow-[0_2px_8px_rgba(0,0,0,.6)]"
        >
          <Repeat2 className="radio-badge-orbit h-3 w-3" />
        </span>
      </button>
    </div>
  );
}
