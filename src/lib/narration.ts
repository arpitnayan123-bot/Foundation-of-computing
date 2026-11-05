/* ============================================================
   THE NARRATOR'S ENGINE — client side of the Revision Radio.

   Everything the player needs that isn't React:
   · sentence splitting + TTS-bite grouping (whole sentences
     per bite, ≤950 chars — the studio API's sweet spot)
   · a two-layer audio cache (memory blob URLs over the
     browser Cache API) keyed by sha1(voice|text)
   · the device-voice fallback (Web Speech API) with the best
     available English voice — en-IN first, per the atlas's
     Indian-English ear
   · tiny preference store (speed + voice survive reloads)

   Nothing here touches the DOM; the radio owns the UI.
   ============================================================ */

export const NARRATOR_SPEEDS = [0.5, 1, 2] as const;
export type NarratorSpeed = (typeof NARRATOR_SPEEDS)[number];

export type NarratorMode = "explain" | "read";
export type NarratorEngine = "studio" | "device";

export interface RadioVoice {
  id: string;
  label: string;
  hint: string;
}

/** THE dial has one voice — TARA. She was QA'd against an ASR
    round-trip and won outright (reads English flawlessly and briskly:
    22s where the other candidates took 31s for the same script), so
    the whole dial is hers now. One host, one identity: the radio
    sounds like the same person in every shelf, every lecture. */
export const RADIO_VOICES: RadioVoice[] = [
  { id: "tongtong", label: "Tara", hint: "warm · Indian English · your host" },
];

export interface TtsBite {
  text: string;
  from: number; // sentence index this bite starts at
  to: number; // sentence index it ends at (inclusive)
}

/* ------------------------------------------------------------------ */
/* text work                                                           */
/* ------------------------------------------------------------------ */

export function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+(?=[A-Z0-9"'])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** absolute ceiling — even a single unbreakable token never rides past it */
function hardCut(word: string, max: number): string[] {
  const pieces: string[] = [];
  for (let i = 0; i < word.length; i += max) pieces.push(word.slice(i, i + max));
  return pieces;
}

/** whole sentences per bite, ≤ max chars — pause/resume land crisply.
    ~420 chars is the sweet spot: cold synthesis lands in seconds, so a
    bite is always ready before the previous one finishes playing.
    Hard guarantee: no bite ever exceeds max (monster sentences are
    word-split; the tail piece stands alone). */
export function groupBites(sentences: string[], max = 420): TtsBite[] {
  const bites: TtsBite[] = [];
  let cur = "";
  let from = 0;
  const flush = (toIdx: number) => {
    if (cur.trim()) bites.push({ text: cur.trim(), from, to: toIdx });
    cur = "";
  };
  const wordSplit = (s: string, idx: number) => {
    const words: string[] = [];
    for (const w0 of s.split(/\s+/)) {
      if (w0.length > max) words.push(...hardCut(w0, max)); // a single monster "word"
      else words.push(w0);
    }
    let piece = "";
    for (const w of words) {
      if (piece && (piece + " " + w).length > max) {
        bites.push({ text: piece.trim(), from: idx, to: idx });
        piece = w;
      } else {
        piece = piece ? `${piece} ${w}` : w;
      }
    }
    return piece.trim(); // tail piece (< max) — may still join later sentences
  };
  sentences.forEach((s, i) => {
    if (s.length > max) {
      flush(i - 1);
      cur = wordSplit(s, i);
      from = i;
      return;
    }
    const candidate = cur ? `${cur} ${s}` : s;
    if (cur && candidate.length > max) {
      flush(i - 1);
      cur = s;
      from = i;
    } else {
      cur = candidate;
    }
  });
  flush(sentences.length - 1);
  return bites;
}

/** page-prose bites for Read mode / the device engine — small, steer-able.
    Same hard guarantee: word-splits anything longer than max. */
export function readBites(text: string, max = 220): string[] {
  const sentences = text.split(/(?<=[.!?;:])\s+/);
  const bites: string[] = [];
  let cur = "";
  const flush = () => {
    if (cur.trim()) bites.push(cur.trim());
    cur = "";
  };
  for (const s of sentences) {
    if (s.length > max) {
      flush();
      let piece = "";
      const words: string[] = [];
      for (let w of s.split(/\s+/)) {
        if (w.length > max) words.push(...hardCut(w, max));
        else words.push(w);
      }
      for (const w of words) {
        if (piece && (piece + " " + w).length > max) {
          bites.push(piece.trim());
          piece = w;
        } else {
          piece = piece ? `${piece} ${w}` : w;
        }
      }
      cur = piece;
      continue;
    }
    if (cur && (cur + " " + s).length > max) {
      flush();
      cur = s;
    } else {
      cur = cur ? `${cur} ${s}` : s;
    }
  }
  flush();
  return bites;
}

/** lifts the current window's prose (nav, buttons, chrome all stripped) */
export function stripChrome(root: HTMLElement): string {
  const clone = root.cloneNode(true) as HTMLElement;
  clone
    .querySelectorAll(
      "nav, header, footer, button, a, svg, style, script, input, select, textarea, [aria-hidden='true'], [role='dialog'], [data-print='hide']",
    )
    .forEach((el) => el.remove());
  return (clone.innerText ?? clone.textContent ?? "").replace(/\s+/g, " ").trim();
}

/* ------------------------------------------------------------------ */
/* cache — memory blobs over the browser Cache API                     */
/* ------------------------------------------------------------------ */

async function sha1(text: string): Promise<string> {
  try {
    const data = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-1", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    /* subtle needs a secure context — any sandbox oddity still hashes */
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
    return `fnv${(h >>> 0).toString(16)}`;
  }
}

const CACHE_NAME = "atlas-narration-v3"; // v3 — re-warm: mastering chain upgraded server-side

/* ------------------------------------------------------------------ */
/* studio health latch                                                 */
/*   when the upstream synth is rate-limited, the server answers       */
/*   502/503 fast; the radio must NOT keep hammering it (every retry   */
/*   burns quota and delays the device voice that IS audible). The     */
/*   latch is shared module-wide: one failure silences the studio      */
/*   path for a cooldown window and the device voice takes the whole   */
/*   programme instantly. When the latch expires the studio returns    */
/*   on its own — no user action needed.                               */
/* ------------------------------------------------------------------ */

let studioLatchUntil = 0;

export function markStudioCooldown(ms: number) {
  studioLatchUntil = Math.max(studioLatchUntil, Date.now() + ms);
}

export function studioCooling(): boolean {
  return Date.now() < studioLatchUntil;
}

export function studioCooldownLeft(): number {
  return Math.max(0, studioLatchUntil - Date.now());
}

/** one studio request in flight at a time — bursts are what trip the
    synth's rate limiter and make the voice break mid-lecture */
class Lane {
  private tail: Promise<unknown> = Promise.resolve();
  run<T>(job: () => Promise<T>): Promise<T> {
    const next = this.tail.then(job, job);
    this.tail = next.catch(() => undefined);
    return next;
  }
}
const studioLane = new Lane();
const MEMORY_MAX = 24;
const DISK_MAX = 40;

export class NarrationAudioCache {
  private memory = new Map<string, string>(); // key → blob URL
  private inflight = new Map<string, Promise<string>>();

  /** fetch (or recall) one spoken bite as a playable blob URL.
      Studio hits ride one-at-a-time (the synth 429s under bursts —
      the polite queue is why the voice never breaks now). */
  async get(voice: string, text: string): Promise<string> {
    const key = await sha1(`v3\n${voice}\n${text}`);
    const url = `/api/narrate/tts?v=3&k=${key}`;
    const hit = this.memory.get(key);
    if (hit) {
      this.memory.delete(key);
      this.memory.set(key, hit); // LRU touch
      return hit;
    }
    const pending = this.inflight.get(key);
    if (pending) return pending;

    const job = (async () => {
      let blob: Blob | null = null;
      try {
        const disk = await caches.open(CACHE_NAME);
        const cached = await disk.match(url);
        if (cached) blob = await cached.blob();
      } catch {
        /* no Cache API — stream straight from the studio */
      }
      if (!blob) {
        await studioLane.run(async () => {
          /* ONE attempt, no client-side retry storm — the server already
             retries the synth internally, and every extra fetch against a
             rate-limited studio makes the outage longer, not shorter.
             A failure latches the studio off for a cooldown window and
             the device voice (which is always audible) takes over. */
          const res = await fetch("/api/narrate/tts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, voice }),
          });
          if (!res.ok) {
            const retryAfter = Number(res.headers.get("Retry-After"));
            if (res.status === 503) markStudioCooldown(retryAfter > 0 ? retryAfter * 1000 : 60_000);
            else if (res.status === 502) markStudioCooldown(90_000);
            else if (res.status === 429) markStudioCooldown(30_000);
            throw new Error(`studio ${res.status}`);
          }
          blob = await res.blob();
        });
        if (!blob) throw new Error("studio returned nothing");
        try {
          const disk = await caches.open(CACHE_NAME);
          await disk.put(url, new Response(blob));
          await this.trimDisk(disk);
        } catch {
          /* cache write is best-effort */
        }
      }
      const blobUrl = URL.createObjectURL(blob);
      this.memory.set(key, blobUrl);
      this.trimMemory();
      return blobUrl;
    })().finally(() => this.inflight.delete(key));

    this.inflight.set(key, job);
    return job;
  }

  /** warm the cache without playing — preflight for instant start */
  prefetch(voice: string, text: string): Promise<string> {
    if (!text || !text.trim()) return Promise.resolve(""); // nothing to warm
    return this.get(voice, text).catch(() => "");
  }

  private trimMemory() {
    while (this.memory.size > MEMORY_MAX) {
      const oldest = this.memory.keys().next().value;
      if (oldest === undefined) break;
      const url = this.memory.get(oldest);
      if (url) URL.revokeObjectURL(url);
      this.memory.delete(oldest);
    }
  }

  private async trimDisk(disk: Cache) {
    const keys = await disk.keys();
    if (keys.length <= DISK_MAX) return;
    for (const k of keys.slice(0, keys.length - DISK_MAX)) await disk.delete(k);
  }
}

/* ------------------------------------------------------------------ */
/* the device-voice fallback (Web Speech API)                          */
/* ------------------------------------------------------------------ */

export function deviceSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** best English voice on this device — friendly FEMALE Indian English first.
    The fallback should sound like the same warm host, not a different person. */
export function pickDeviceVoice(): SpeechSynthesisVoice | null {
  if (!deviceSpeechSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const en = voices.filter((v) => /^en([-_]|$)/i.test(v.lang));
  const female = (v: SpeechSynthesisVoice) =>
    /female|woman|tara|neerja|veena|heera|raveena|kalpana|aditi|asha|priya|sarika|swara|aria|jenny|zira|samantha|serena|karen|moira|tessa|fiona|sonia|libby/i.test(
      `${v.name} ${v.voiceURI}`,
    );
  const maleish = /male|ravi|prabhat|hemant|madhur|david|mark|george|ryan|guy/i;
  const pools = [
    en.filter((v) => /en[-_]in/i.test(v.lang) && female(v)), // Indian English · female
    en.filter((v) => /en[-_]in/i.test(v.lang) && !maleish.test(v.name)), // Indian English · not obviously male
    en.filter(female), // any female English voice
    en.filter((v) => /en[-_]gb/i.test(v.lang) && !maleish.test(v.name)),
    en.filter((v) => !maleish.test(v.name)),
    en,
  ];
  for (const pool of pools) {
    const googley = pool.find((v) => /google/i.test(v.name)) ?? pool[0];
    if (googley) return googley;
  }
  return voices[0] ?? null;
}

/** studio speeds map into the device engine's natural band */
export function deviceRateFor(speed: number): number {
  if (speed <= 0.5) return 0.78;
  if (speed <= 1) return 1.02;
  return 1.85;
}

/** Chrome loads its voice list async — give the engine a moment,
    then pick. Resolves null only if this device truly has no voice. */
export async function pickDeviceVoiceReady(maxWaitMs = 1600): Promise<SpeechSynthesisVoice | null> {
  if (!deviceSpeechSupported()) return null;
  const first = pickDeviceVoice();
  if (first) return first;
  const t0 = Date.now();
  while (Date.now() - t0 < maxWaitMs) {
    await new Promise((r) => setTimeout(r, 200));
    const v = pickDeviceVoice();
    if (v) return v;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/* preferences                                                         */
/* ------------------------------------------------------------------ */

const SPEED_KEY = "atlas:radio-speed";
/* v2 — the dial was re-cast around warm female voices; an old saved
   preference (e.g. "jam") should not outvote the new default host */
const VOICE_KEY = "atlas:radio-voice:v2";
const VOICE_DEFAULT = "tongtong";

export function loadSpeed(): NarratorSpeed {
  if (typeof window === "undefined") return 1;
  const raw = Number(window.localStorage.getItem(SPEED_KEY));
  return (NARRATOR_SPEEDS as readonly number[]).includes(raw) ? (raw as NarratorSpeed) : 1;
}

export function saveSpeed(speed: NarratorSpeed) {
  try {
    window.localStorage.setItem(SPEED_KEY, String(speed));
  } catch {
    /* private mode — the dial just doesn't persist */
  }
}

export function loadVoice(): string {
  if (typeof window === "undefined") return VOICE_DEFAULT;
  const raw = window.localStorage.getItem(VOICE_KEY);
  return RADIO_VOICES.some((v) => v.id === raw) ? (raw as string) : VOICE_DEFAULT;
}

export function saveVoice(id: string) {
  try {
    window.localStorage.setItem(VOICE_KEY, id);
  } catch {
    /* private mode */
  }
}
