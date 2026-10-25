"use client";

/* ============================================================
   THE LEDGER — progress & mastery, at #/ledger.

   A local-first report of everything the reader has practiced:
   per-shelf accuracy, SM-2 mastery bars, due-card counts, the
   practice streak, and the recent-attempt log. Nothing here
   leaves the browser — the ledger reads the same localStorage
   stores the exam engine writes.

   From here a reader can launch a spaced-review session for
   any shelf with cards due (ReviewWindow reuses the exam
   engine, so review feels exactly like an exam window).
   ============================================================ */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  BookOpenCheck,
  CalendarCheck2,
  ClipboardList,
  CloudDownload,
  CloudUpload,
  Database,
  Download,
  Flame,
  HardDrive,
  Layers,
  ListChecks,
  Minus,
  Plus,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Timer,
  Trash2,
  Upload,
  WandSparkles,
  Zap,
} from "lucide-react";
import { SUBJECTS, type Subject } from "./subjects";
import { QUESTION_COUNTS } from "@/lib/question-counts";
import { SECTION_COUNTS, TOTAL_SECTIONS } from "@/lib/section-counts";
import { currentStreak, dayKeyFor, loadLedger, statsFor, type LedgerStore } from "@/lib/ledger";
import { dueCounts, dueLabel, masteryFor, troubleSpots, type SubjectMastery, type TroubleSpot } from "@/lib/sm2";
import { loadQuestionIndex } from "@/lib/question-lookup";
import { BADGES, computeSnapshot, earnedCount, type AtlasSnapshot } from "@/lib/achievements";
import { bumpGoal, GOAL_MAX, GOAL_MIN, goalStatus, type GoalStatus } from "@/lib/goal";
import { PracticeHeatmap, type DayHit } from "./PracticeHeatmap";
import { CardForge } from "./CardForge";
import { countCustomCardsByShelf } from "@/lib/custom-cards";
import { readProgressCounts } from "@/lib/progress";
import { useToast } from "@/hooks/use-toast";
import {
  applyBackup,
  backupFilename,
  eraseAllStores,
  exportBackup,
  parseBackup,
  type BackupBundle,
  type BackupSummary,
} from "@/lib/backup";

/* the review, drill and mock windows load their own subject chunks on demand */
const ReviewWindow = dynamic(() => import("@/components/notes/ReviewWindow").then((m) => m.ReviewWindow), {
  ssr: false,
  loading: () => null,
});
const DrillWindow = dynamic(() => import("@/components/notes/DrillWindow").then((m) => m.DrillWindow), {
  ssr: false,
  loading: () => null,
});
const MockWindow = dynamic(() => import("@/components/notes/MockWindow").then((m) => m.MockWindow), {
  ssr: false,
  loading: () => null,
});

interface ShelfRow {
  subject: Subject;
  stats: ReturnType<typeof statsFor>;
  mastery: SubjectMastery;
  due: number;
  read: number;
  readTotal: number;
}

interface ImportState {
  kind: "idle" | "ready" | "error";
  name?: string;
  summary?: BackupSummary;
  bundle?: BackupBundle;
  message?: string;
}

/* the inline "Your data" note — ok = green truth, warn = amber honesty */
type DataFlash = { msg: string; tone: "ok" | "warn" } | null;

/* ---------- sync-code helpers (pure, module scope) ---------- */

const SYNC_CODE_KEY = "atlas:sync-code:v1";
const SYNC_CODE_RE = /^[A-HJ-NP-Z2-9]{6}$/;
/** 32 unambiguous glyphs (no I, O, 0, 1) — 256 % 32 === 0, so
 *  crypto.getRandomValues needs no bias correction */
const SYNC_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function generateSyncCode(): string {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  let out = "";
  for (let i = 0; i < 6; i++) out += SYNC_ALPHABET[bytes[i] % 32];
  return out;
}

/** uppercase, keep only code glyphs, cap at six — typing "ab1o9" lands as "AB9" */
function formatSyncInput(raw: string): string {
  return raw
    .toUpperCase()
    .replace(/[^A-HJ-NP-Z2-9]/g, "")
    .slice(0, 6);
}

function fmtBytes(n: number): string {
  if (n >= 1024 ** 3) return `${(n / 1024 ** 3).toFixed(2)} GB`;
  if (n >= 1024 ** 2) return `${(n / 1024 ** 2).toFixed(1)} MB`;
  if (n >= 1024) return `${Math.round(n / 1024)} KB`;
  return `${n} B`;
}

/** the human tally a restore reports — forged cards and lab cells
 *  only speak up when the bundle actually carries them */
function tallyFor(s: BackupSummary): string {
  const forged = s.customCards > 0 ? `, ${s.customCards} forged card${s.customCards === 1 ? "" : "s"}` : "";
  const lab = s.labCells > 0 ? `, ${s.labCells} Python Lab cell${s.labCells === 1 ? "" : "s"}` : "";
  return `${s.cards} scheduled card${s.cards === 1 ? "" : "s"}, ${s.attempts} attempt${s.attempts === 1 ? "" : "s"}${forged}${lab}, ${s.sections} chapter${s.sections === 1 ? "" : "s"} read`;
}

/** the honest half-restore sentence — names the exact keys that refused */
function failedWritesMsg(prefix: string, result: { restored: number; failedKeys: string[] }): string {
  return `${prefix}Restored ${result.restored} store${result.restored === 1 ? "" : "s"} — but these failed to write (private browsing or storage quota?): ${result.failedKeys.join(", ")}`;
}

function fmtSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${String(s).padStart(2, "0")}s`;
}

function relDay(at: number): string {
  const now = new Date();
  const then = new Date(at);
  const days = Math.floor((now.setHours(0, 0, 0, 0) - new Date(then).setHours(0, 0, 0, 0)) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  return then.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function LedgerView({ onExitAtlas }: { onExitAtlas: () => void }) {
  const [store, setStore] = useState<LedgerStore | null>(null);
  const [rows, setRows] = useState<ShelfRow[]>([]);
  const [streak, setStreak] = useState(0);
  /* the weakest cards in the schedule — shown as "trouble spots";
     their question wording arrives from the banks a moment later */
  const [trouble, setTrouble] = useState<TroubleSpot[]>([]);
  const [troubleTexts, setTroubleTexts] = useState<Map<string, string> | null>(null);
  /* the ⌘K palette may have queued a review handoff ("review <subject>")
     before this view mounted — honor it once at init (client-only chunk) */
  const [reviewSubject, setReviewSubject] = useState<string | null>(() => {
    try {
      const queued = sessionStorage.getItem("atlas:review-subject");
      if (queued) {
        sessionStorage.removeItem("atlas:review-subject");
        return queued;
      }
    } catch {
      /* private mode — no handoff */
    }
    return null;
  });
  /* trouble-spot reviews pull their specific card forward even when
     it is not due until tomorrow — everything else reviews by due date */
  const [reviewForce, setReviewForce] = useState<string[]>([]);
  const openReview = useCallback((subject: string, force: string[] = []) => {
    setReviewForce(force);
    setReviewSubject(subject);
  }, []);

  /* the ⌘K palette can also queue a drill handoff ("quick drill")
     before this view mounts — honor it once at init */
  const [drillSubject, setDrillSubject] = useState<string | null>(() => {
    try {
      const queued = sessionStorage.getItem("atlas:drill-subject");
      if (queued) {
        sessionStorage.removeItem("atlas:drill-subject");
        return queued;
      }
    } catch {
      /* private mode — no handoff */
    }
    return null;
  });
  const openDrill = useCallback((subject: string) => setDrillSubject(subject), []);

  /* the ⌘K palette can also queue the mock-exam composer — same
     handoff contract as review/drill, no subject to carry */
  const [mockOpen, setMockOpen] = useState<boolean>(() => {
    try {
      const queued = sessionStorage.getItem("atlas:mock-open");
      if (queued) {
        sessionStorage.removeItem("atlas:mock-open");
        return queued === "1";
      }
    } catch {
      /* private mode — no handoff */
    }
    return false;
  });
  const openMock = useCallback(() => setMockOpen(true), []);

  /* the ⌘K palette can also queue the card forge — same handoff
     contract as review/drill/mock, no subject to carry */
  const [forgeOpen, setForgeOpen] = useState<boolean>(() => {
    try {
      const queued = sessionStorage.getItem("atlas:forge-open");
      if (queued) {
        sessionStorage.removeItem("atlas:forge-open");
        return queued === "1";
      }
    } catch {
      /* private mode — no handoff */
    }
    return false;
  });
  const openForge = useCallback(() => setForgeOpen(true), []);

  /* the daily goal + derived badges — both recomputed on every refresh */
  const [goal, setGoal] = useState<GoalStatus | null>(null);
  const [snap, setSnap] = useState<AtlasSnapshot | null>(null);

  const refresh = useCallback(() => {
    const ledger = loadLedger();
    const due = dueCounts();
    const reads = readProgressCounts();
    /* forged cards share the shelf's schedule — count them into the
       mastery denominator so the bar can never read above 100% */
    const customs = countCustomCardsByShelf();
    setStore(ledger);
    setStreak(currentStreak(ledger.days));
    setTrouble(troubleSpots());
    setGoal(goalStatus());
    setSnap(computeSnapshot());
    setRows(
      SUBJECTS.filter((s) => s.status === "live").map((subject) => ({
        subject,
        stats: statsFor(ledger, subject.id),
        mastery: masteryFor(
          subject.id,
          (QUESTION_COUNTS[subject.id as keyof typeof QUESTION_COUNTS] ?? 0) + (customs[subject.id] ?? 0)
        ),
        due: due[subject.id] ?? 0,
        read: reads[subject.id] ?? 0,
        readTotal: SECTION_COUNTS[subject.id] ?? 0,
      }))
    );
  }, []);

  useEffect(() => {
    /* rAF-deferred first read — avoids sync setState-in-effect */
    const raf = requestAnimationFrame(() => refresh());
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };
    /* live handoff — the palette fires this when the ledger is already open */
    const onReview = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (typeof id === "string") {
        setReviewForce([]);
        setReviewSubject(id);
        refresh();
      }
    };
    const onDrill = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (typeof id === "string") {
        setDrillSubject(id);
        refresh();
      }
    };
    const onMock = () => {
      setMockOpen(true);
      refresh();
    };
    const onForge = () => {
      setForgeOpen(true);
      refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("atlas:review-subject", onReview);
    window.addEventListener("atlas:drill-subject", onDrill);
    window.addEventListener("atlas:mock-open", onMock);
    window.addEventListener("atlas:forge-open", onForge);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("atlas:review-subject", onReview);
      window.removeEventListener("atlas:drill-subject", onDrill);
      window.removeEventListener("atlas:mock-open", onMock);
      window.removeEventListener("atlas:forge-open", onForge);
    };
  }, [refresh]);

  const totalAttempts = store?.attempts.length ?? 0;
  const totalAnswered = store?.attempts.reduce((n, a) => n + a.total, 0) ?? 0;
  const daysPracticed = store?.days.length ?? 0;
  const recent = (store?.attempts ?? []).slice(-10).reverse();
  const dueEverywhere = rows.reduce((n, r) => n + r.due, 0);
  const readEverywhere = rows.reduce((n, r) => n + r.read, 0);

  /* per-day attempt counts behind the practice heatmap */
  const perDay = useMemo(() => {
    const m = new Map<string, DayHit>();
    for (const a of store?.attempts ?? []) {
      const k = dayKeyFor(a.at);
      const cur = m.get(k) ?? { a: 0, q: 0 };
      cur.a += 1;
      cur.q += a.total;
      m.set(k, cur);
    }
    return m;
  }, [store]);

  /* weak cards exist → pull their wording from the banks once,
     lazily (the ~250KB of bank chunks stay out of the ledger path
     until there is something to say) */
  useEffect(() => {
    if (trouble.length === 0 || troubleTexts) return;
    let alive = true;
    void loadQuestionIndex().then((idx) => {
      if (alive) setTroubleTexts(idx);
    });
    return () => {
      alive = false;
    };
  }, [trouble, troubleTexts]);

  /* ---------- your-data panel state ---------- */
  const [imp, setImp] = useState<ImportState>({ kind: "idle" });
  const [dataFlash, setDataFlash] = useState<DataFlash>(null);
  const [eraseArm, setEraseArm] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  /* storage safety net — what the browser says we may use */
  const [storage, setStorage] = useState<{ usage: number; quota: number } | null>(null);

  /* ---------- sync-code state ---------- */
  const [syncCode, setSyncCode] = useState<string | null>(null);
  const [pullCode, setPullCode] = useState("");
  const [syncBusy, setSyncBusy] = useState<"push" | "pull" | "burn" | null>(null);
  const [burnArm, setBurnArm] = useState(false);
  const [syncUnavailable, setSyncUnavailable] = useState(false);

  /* the code is remembered on this device only — it is a pointer,
     not data; the bundles live behind it on the server */
  useEffect(() => {
    try {
      const held = window.localStorage.getItem(SYNC_CODE_KEY);
      if (held && SYNC_CODE_RE.test(held)) setSyncCode(held);
    } catch {
      /* localStorage unavailable — the code just won't be remembered */
    }
    if (typeof navigator !== "undefined" && navigator.storage?.estimate) {
      navigator.storage
        .estimate()
        .then((est) => {
          if (typeof est.usage === "number" && typeof est.quota === "number") {
            setStorage({ usage: est.usage, quota: est.quota });
          }
        })
        .catch(() => {
          /* best-effort estimate */
        });
    }
  }, []);

  const onExport = () => {
    try {
      const blob = new Blob([exportBackup()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = backupFilename();
      a.click();
      URL.revokeObjectURL(url);
      setDataFlash({ msg: `Backup downloaded — ${backupFilename()}`, tone: "ok" });
    } catch {
      setDataFlash({ msg: "The download failed — your browser blocked it. Try again.", tone: "warn" });
    }
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      const text = await file.text();
      const res = parseBackup(text);
      if (res.ok) {
        setImp({ kind: "ready", name: file.name, summary: res.summary, bundle: res.bundle });
      } else {
        setImp({ kind: "error", message: res.error });
      }
    } catch {
      setImp({ kind: "error", message: "That file could not be read." });
    }
  };

  const onImportApply = () => {
    if (imp.kind !== "ready" || !imp.bundle || !imp.summary) return;
    const result = applyBackup(imp.bundle);
    const s = imp.summary;
    setImp({ kind: "idle" });
    if (fileRef.current) fileRef.current.value = "";
    refresh();
    if (result.failedKeys.length > 0) {
      /* honesty first: name exactly which stores refused to write */
      const msg = failedWritesMsg("", result);
      setDataFlash({ msg, tone: "warn" });
      toast({ variant: "destructive", title: "Restore incomplete", description: msg });
    } else {
      setDataFlash({ msg: `Restored — ${tallyFor(s)}.`, tone: "ok" });
    }
  };

  const onErase = () => {
    if (!eraseArm) {
      setEraseArm(true);
      window.setTimeout(() => setEraseArm(false), 4000);
      return;
    }
    eraseAllStores();
    setEraseArm(false);
    setImp({ kind: "idle" });
    if (fileRef.current) fileRef.current.value = "";
    refresh();
    setDataFlash({ msg: "Every store erased — a fresh start. Export a backup first if you want this memory back.", tone: "ok" });
  };

  /* ---------- storage safety net ---------- */

  const onPersist = async () => {
    try {
      const granted = await navigator.storage.persist();
      if (granted) {
        setDataFlash({
          msg: "Persistent storage granted — the browser is now far less likely to sweep the atlas away under storage pressure.",
          tone: "ok",
        });
        toast({ title: "Persistent storage granted", description: "The atlas is pinned against automatic cleanup." });
      } else {
        setDataFlash({
          msg: "The browser declined persistent storage — cleanup stays in its hands. Regular exports are your safety net.",
          tone: "warn",
        });
        toast({ variant: "destructive", title: "Persistent storage declined", description: "Regular exports are your safety net." });
      }
    } catch {
      setDataFlash({
        msg: "This browser doesn't expose persistent storage — regular exports are your safety net.",
        tone: "warn",
      });
    }
  };

  /* ---------- sync codes ---------- */

  const rememberSyncCode = (code: string | null) => {
    setSyncCode(code);
    try {
      if (code) window.localStorage.setItem(SYNC_CODE_KEY, code);
      else window.localStorage.removeItem(SYNC_CODE_KEY);
    } catch {
      /* not remembered — the reader can regenerate next visit */
    }
  };

  const onGenerateCode = () => {
    const code = generateSyncCode();
    rememberSyncCode(code);
    setBurnArm(false);
    setDataFlash({
      msg: `Your sync code is ${code} — type it into “pull from the code” on the other device.`,
      tone: "ok",
    });
  };

  const onPush = async () => {
    if (!syncCode || syncBusy) return;
    setSyncBusy("push");
    try {
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: syncCode, payload: exportBackup() }),
      });
      if (res.ok) {
        setSyncUnavailable(false);
        setDataFlash({ msg: `Pushed to code ${syncCode} — pull it from any device running the atlas.`, tone: "ok" });
        toast({ title: "Pushed to the code", description: `${syncCode} now holds your latest backup.` });
      } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        if (res.status === 503) setSyncUnavailable(true);
        const msg = data?.error ?? "The push failed — try again.";
        setDataFlash({ msg, tone: "warn" });
        toast({ variant: "destructive", title: "Push failed", description: msg });
      }
    } catch {
      const msg = "The push failed — the network dropped. Export a file if you need it now.";
      setDataFlash({ msg, tone: "warn" });
      toast({ variant: "destructive", title: "Push failed", description: msg });
    } finally {
      setSyncBusy(null);
    }
  };

  const onPull = async () => {
    const code = pullCode.trim();
    if (!SYNC_CODE_RE.test(code) || syncBusy) return;
    setSyncBusy("pull");
    try {
      const res = await fetch(`/api/sync?code=${encodeURIComponent(code)}`);
      if (res.status === 404) {
        setDataFlash({ msg: `Nothing is parked under ${code} yet — push from the other device first.`, tone: "warn" });
      } else if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        if (res.status === 503) setSyncUnavailable(true);
        const msg = data?.error ?? "The pull failed — try again.";
        setDataFlash({ msg, tone: "warn" });
        toast({ variant: "destructive", title: "Pull failed", description: msg });
      } else {
        const data = (await res.json()) as { payload?: unknown };
        const parsed = parseBackup(typeof data.payload === "string" ? data.payload : "");
        if (!parsed.ok) {
          const msg = `The code holds a bundle this app can't accept — ${parsed.error}`;
          setDataFlash({ msg, tone: "warn" });
          toast({ variant: "destructive", title: "Pull failed", description: msg });
        } else {
          const result = applyBackup(parsed.bundle);
          refresh();
          if (result.failedKeys.length > 0) {
            const msg = failedWritesMsg(`Pulled from ${code} — `, result);
            setDataFlash({ msg, tone: "warn" });
            toast({ variant: "destructive", title: "Restore incomplete", description: msg });
          } else {
            setDataFlash({ msg: `Pulled from ${code} — ${tallyFor(parsed.summary)}.`, tone: "ok" });
            toast({ title: "Pulled from the code", description: `Restored — ${tallyFor(parsed.summary)}.` });
          }
        }
      }
    } catch {
      const msg = "The pull failed — the network dropped. Export a file if you need it now.";
      setDataFlash({ msg, tone: "warn" });
      toast({ variant: "destructive", title: "Pull failed", description: msg });
    } finally {
      setSyncBusy(null);
    }
  };

  const onBurn = async () => {
    if (!syncCode || syncBusy) return;
    if (!burnArm) {
      setBurnArm(true);
      window.setTimeout(() => setBurnArm(false), 4000);
      return;
    }
    setBurnArm(false);
    setSyncBusy("burn");
    const code = syncCode;
    try {
      const res = await fetch(`/api/sync?code=${encodeURIComponent(code)}`, { method: "DELETE" });
      if (res.ok) {
        rememberSyncCode(null);
        setDataFlash({ msg: `Code ${code} burned — nothing is parked under it anymore.`, tone: "ok" });
        toast({ title: "Code burned", description: `${code} no longer holds any data.` });
      } else {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        if (res.status === 503) setSyncUnavailable(true);
        const msg = data?.error ?? "The burn failed — try again.";
        setDataFlash({ msg, tone: "warn" });
        toast({ variant: "destructive", title: "Burn failed", description: msg });
      }
    } catch {
      const msg = "The burn failed — the network dropped. The code still works until it is burned.";
      setDataFlash({ msg, tone: "warn" });
      toast({ variant: "destructive", title: "Burn failed", description: msg });
    } finally {
      setSyncBusy(null);
    }
  };

  /* the daily-goal stepper — ± GOAL_STEP per press, clamped in the store */
  const onGoalBump = (delta: number) => {
    const g = bumpGoal(delta);
    setGoal((prev) => (prev ? { ...prev, target: g.target } : { target: g.target, done: 0, met: false }));
  };

  return (
    <div className="min-h-screen bg-[#070509] pb-20 text-[#f7ecdd]" id="top">
      {/* ------- top bar ------- */}
      <nav aria-label="Ledger" className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
        <div className="flex h-12 w-full max-w-3xl items-center gap-3 rounded-full border border-white/10 bg-[#0a0710]/60 py-2 pl-3 pr-4 shadow-[0_18px_50px_-22px_rgba(0,0,0,.85)] backdrop-blur-xl">
          <button
            type="button"
            onClick={onExitAtlas}
            aria-label="Back to the atlas"
            className="flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-3 text-[.68rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition hover:bg-white/[.12]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Atlas
          </button>
          <span className="font-display text-[1rem] font-black tracking-tight text-[#f7ecdd]">The Ledger</span>
          {dueEverywhere > 0 ? (
            <button
              type="button"
              onClick={() => openReview("all")}
              aria-label={`Review all ${dueEverywhere} due cards across every shelf`}
              className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889] transition hover:bg-[#f59e0b2a]"
            >
              <Sparkles className="h-3 w-3" />
              {dueEverywhere} due
            </button>
          ) : null}
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 pt-24 sm:px-6">
        {/* ------- hero ------- */}
        <motion.header initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.24em] text-[#8d7b63]">
            progress &amp; mastery — written by your own attempts
          </p>
          <h1 className="font-display mt-2 text-3xl font-black leading-tight md:text-4xl">
            Every answer leaves a <span className="atlas-sheen">mark</span>.
          </h1>
          <p className="mt-3 max-w-xl text-[.92rem] leading-relaxed text-[#c9b99f]">
            The ledger is local-first: exam windows grade your cards on an SM-2 schedule, and this page reports the
            damage. Nothing leaves your browser.
          </p>
        </motion.header>

        {/* ------- stat strip ------- */}
        <section aria-label="Practice summary" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard icon={Flame} label="streak" value={streak === 1 ? "1 day" : `${streak} days`} tone="#e4674a" />
          <StatCard icon={CalendarCheck2} label="days practiced" value={String(daysPracticed)} tone="#f5c889" />
          <StatCard icon={ListChecks} label="attempts" value={String(totalAttempts)} tone="#8fae5d" />
          <StatCard icon={BookOpenCheck} label="questions faced" value={String(totalAnswered)} tone="#8b5cf6" />
        </section>

        {/* ------- daily goal ------- */}
        {goal ? (
          <section aria-label="Daily goal" className="mt-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <GoalRing done={goal.done} target={goal.target} met={goal.met} />
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-[1.05rem] font-black">Daily goal</h2>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#a89a86]" role="status">
                  <strong className="text-[#c9b99f]">{goal.done}</strong> of <strong className="text-[#c9b99f]">{goal.target}</strong> answers faced today —{" "}
                  {goal.met ? "goal met, the streak is safe." : "every finished window and drill fills the ring."}
                </p>
              </div>
              <div className="flex items-center gap-2" role="group" aria-label="Adjust the daily goal">
                <button
                  type="button"
                  onClick={() => onGoalBump(-1)}
                  disabled={goal.target <= GOAL_MIN}
                  aria-label="Lower the daily goal by five"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[.05] text-[#e9d7bf] transition hover:bg-white/[.12] disabled:opacity-35"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="min-w-14 text-center font-mono text-[.68rem] font-bold uppercase tracking-[.14em] text-[#c9b99f]" aria-live="polite">
                  {goal.target}/day
                </span>
                <button
                  type="button"
                  onClick={() => onGoalBump(1)}
                  disabled={goal.target >= GOAL_MAX}
                  aria-label="Raise the daily goal by five"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[.05] text-[#e9d7bf] transition hover:bg-white/[.12] disabled:opacity-35"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {/* ------- practice heatmap ------- */}
        <section aria-label="Practice heatmap" className="mt-8">
          <h2 className="font-display text-xl font-black">Practice heatmap</h2>
          <p className="mt-1 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]">
            The last 17 weeks — one square per day, greener the more you finished.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
            <PracticeHeatmap hits={perDay} />
          </div>
        </section>

        {/* ------- per-shelf mastery ------- */}
        <section aria-label="Per-shelf mastery" className="mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 className="font-display text-xl font-black">Shelf by shelf</h2>
            <span className="font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]">
              <strong className="text-[#c9b99f]">{readEverywhere}</strong>/{TOTAL_SECTIONS} chapters read
            </span>
            <button
              type="button"
              onClick={openMock}
              aria-label="Mock exam — compose your own paper from any shelves"
              className="ml-auto flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]"
            >
              <ClipboardList className="h-3.5 w-3.5" style={{ color: "#f5c889" }} />
              mock exam
            </button>
            <button
              type="button"
              onClick={() => openDrill("all")}
              aria-label="Quick drill — a mixed handful from every shelf"
              className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]"
            >
              <Zap className="h-3.5 w-3.5" style={{ color: "#f5c889" }} />
              quick drill
            </button>
            <button
              type="button"
              onClick={openForge}
              aria-label="Card Forge — generate AI flashcards from any chapter"
              className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]"
            >
              <WandSparkles className="h-3.5 w-3.5" style={{ color: "#f5c889" }} />
              card forge
            </button>
            {dueEverywhere > 0 ? (
              <button
                type="button"
                onClick={() => openReview("all")}
                className="flex items-center gap-1.5 rounded-full border border-[#f59e0b55] bg-[#f59e0b14] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#f5c889] transition hover:bg-[#f59e0b2a]"
              >
                <Layers className="h-3.5 w-3.5" />
                review everything
              </button>
            ) : null}
          </div>
          <div className="mt-4 grid gap-3">
            {rows.map((row) => (
              <ShelfCard
                key={row.subject.id}
                row={row}
                onReview={() => openReview(row.subject.id)}
                onDrill={() => openDrill(row.subject.id)}
              />
            ))}
          </div>
        </section>

        {/* ------- trouble spots ------- */}
        {trouble.length > 0 ? (
          <section aria-label="Trouble spots" className="mt-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-display text-xl font-black">Trouble spots</h2>
              <span className="font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]">
                the cards that keep biting — answer them before the exam does
              </span>
            </div>
            <ul className="mt-4 grid gap-2">
              {trouble.map((t) => {
                const subject = SUBJECTS.find((s) => s.id === t.subject);
                const text = troubleTexts?.get(`${t.subject}:${t.id}`) ?? "Digging up the question…";
                return (
                  <motion.li
                    key={`${t.subject}:${t.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-[#c26d4a26] bg-[#c26d4a0d] px-4 py-3"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${subject?.accent ?? "#f59e0b"}22`, color: subject?.accent ?? "#f59e0b" }}
                      aria-hidden
                    >
                      {subject ? <subject.icon className="h-3.5 w-3.5" /> : <ListChecks className="h-3.5 w-3.5" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block line-clamp-2 text-[.82rem] font-bold leading-snug text-[#f0e2c8]">{text}</span>
                      <span className="mt-0.5 block font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]">
                        {subject?.short ?? t.subject} · easiness {t.ef.toFixed(2)} · {dueLabel(t.due)} · last graded{" "}
                        {relDay(t.last)}
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => openReview(t.subject, [t.id])}
                      aria-label={`Review this card from ${subject?.short ?? t.subject}`}
                      className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.64rem] font-black uppercase tracking-[.14em] transition hover:brightness-125"
                      style={{
                        borderColor: `${subject?.accent ?? "#f59e0b"}55`,
                        background: `${subject?.accent ?? "#f59e0b"}14`,
                        color: subject?.accent ?? "#f59e0b",
                      }}
                    >
                      <Sparkles className="h-3 w-3" />
                      review
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {/* ------- achievements — derived, never stored ------- */}
        {snap ? (
          <section aria-label="Achievements" className="mt-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-display text-xl font-black">Achievements</h2>
              <span className="font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]">
                <strong className="text-[#c9b99f]">{earnedCount(snap)}</strong>/{BADGES.length} unlocked — derived from your stores, never stored
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {BADGES.map((b) => {
                const earned = b.test(snap);
                return (
                  <li
                    key={b.id}
                    className={`rounded-xl border p-3.5 ${earned ? "border-white/15 bg-white/[.05]" : "border-white/[.06] bg-white/[.02] opacity-55"}`}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg"
                      style={earned ? { background: `${b.tone}1f`, color: b.tone } : { background: "#ffffff0d", color: "#77685a" }}
                    >
                      <b.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <p className="mt-2 text-[.8rem] font-black leading-tight text-[#f0e2c8]">
                      {b.title}
                      <span className="sr-only"> — {earned ? "unlocked" : "locked"}</span>
                    </p>
                    <p className="mt-0.5 text-[.68rem] leading-snug text-[#8d7b63]">{b.hint}</p>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        {/* ------- recent attempts ------- */}
        <section aria-label="Recent attempts" className="mt-10">
          <h2 className="font-display text-xl font-black">Recent attempts</h2>
          {recent.length === 0 ? (
            <p className="mt-3 rounded-2xl border border-white/10 bg-white/[.04] p-5 text-[.86rem] leading-relaxed text-[#a89a86]">
              No attempts yet. Open any shelf, press a “Test my knowledge” window, and your first report lands here —
              correct answers seed the review schedule automatically.
            </p>
          ) : (
            <ul className="mt-4 grid gap-2">
              {recent.map((a, i) => {
                const subject = SUBJECTS.find((s) => s.id === a.subject);
                const isReview = a.group.startsWith("review");
                const isDrill = a.group === "drill";
                const isMock = a.group === "mock";
                return (
                  <motion.li
                    key={`${a.at}-${i}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-white/10 bg-white/[.04] px-4 py-3"
                  >
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${subject?.accent ?? "#f59e0b"}22`, color: subject?.accent ?? "#f59e0b" }}
                      aria-hidden
                    >
                      {subject ? <subject.icon className="h-3.5 w-3.5" /> : <ListChecks className="h-3.5 w-3.5" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[.82rem] font-bold text-[#f0e2c8]">{a.title}</span>
                      <span className="block font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]">
                        {subject?.short ?? a.subject} · {isReview ? "spaced review" : isDrill ? "quick drill" : isMock ? "mock exam" : a.group} · {relDay(a.at)} ·{" "}
                        {fmtSeconds(a.seconds)}
                      </span>
                    </span>
                    <span
                      className="rounded-full px-2.5 py-1 text-[.7rem] font-extrabold"
                      style={
                        a.pct >= 60
                          ? { background: "#8fae5d22", color: "#a9c977" }
                          : a.pct >= 35
                          ? { background: "#e0a45e22", color: "#e0a45e" }
                          : { background: "#c26d4a22", color: "#d98a6b" }
                      }
                    >
                      {a.correct}/{a.total} · {a.pct}%
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </section>

        {/* ------- your data — export / import / erase ------- */}
        <section aria-label="Your data" className="mt-10">
          <h2 className="font-display text-xl font-black">Your data</h2>
          <p className="mt-1 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]">
            The whole atlas memory — review schedule, attempt ledger, chapters read, daily goal — lives in this browser and
            nowhere else. One JSON file carries it anywhere.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
            {dataFlash ? (
              <p
                role="status"
                className={`mb-4 rounded-xl border px-4 py-3 text-[.8rem] font-semibold leading-relaxed ${
                  dataFlash.tone === "warn"
                    ? "border-[#c26d4a40] bg-[#c26d4a14] text-[#d98a6b]"
                    : "border-[#8fae5d40] bg-[#8fae5d14] text-[#c4dba4]"
                }`}
              >
                {dataFlash.msg}
              </p>
            ) : null}

            {imp.kind === "error" ? (
              <p role="alert" className="mb-4 rounded-xl border border-[#c26d4a40] bg-[#c26d4a14] px-4 py-3 text-[.8rem] font-semibold leading-relaxed text-[#d98a6b]">
                {imp.message}
              </p>
            ) : null}

            {imp.kind === "ready" && imp.summary ? (
              <div className="mb-4 rounded-xl border border-[#f5c88940] bg-[#f5c88910] p-4">
                <p className="text-[.84rem] font-bold text-[#f0e2c8]">
                  {imp.name}
                  {imp.summary.exportedAt ? (
                    <span className="ml-2 font-mono text-[.6rem] font-normal uppercase tracking-[.14em] text-[#8d7b63]">
                      exported {relDay(Date.parse(imp.summary.exportedAt))}
                    </span>
                  ) : null}
                </p>
                <p className="mt-1 text-[.78rem] leading-relaxed text-[#c9b99f]">
                  {imp.summary.cards} scheduled card{imp.summary.cards === 1 ? "" : "s"} · {imp.summary.attempts} attempt{imp.summary.attempts === 1 ? "" : "s"} ·{" "}
                  {imp.summary.sections} chapter{imp.summary.sections === 1 ? "" : "s"} read · {imp.summary.days} practice day{imp.summary.days === 1 ? "" : "s"}
                  {imp.summary.labCells > 0
                    ? ` · ${imp.summary.labCells} Python Lab cell${imp.summary.labCells === 1 ? "" : "s"}`
                    : ""}
                </p>
                <p className="mt-2 text-[.78rem] font-semibold text-[#f5c889]">Importing replaces everything currently in this browser.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={onImportApply}
                    className="flex items-center gap-1.5 rounded-full bg-[#8fae5d] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#1c2408] transition hover:brightness-110"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    Replace my data
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setImp({ kind: "idle" });
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                    className="rounded-full border border-white/15 bg-white/[.05] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.1]"
                  >
                    Keep mine
                  </button>
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onExport}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]"
              >
                <Download className="h-4 w-4" style={{ color: "#f5c889" }} />
                Export backup
              </button>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]"
              >
                <Upload className="h-4 w-4" style={{ color: "#a9c977" }} />
                Import backup…
              </button>
              <button
                type="button"
                onClick={onErase}
                aria-label={eraseArm ? "Confirm: erase every store" : "Erase every store — first press arms, second press erases"}
                className={`ml-auto flex items-center gap-2 rounded-full border px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] transition ${
                  eraseArm
                    ? "border-[#c26d4a] bg-[#c26d4a] text-[#fff1e8]"
                    : "border-[#c26d4a40] bg-[#c26d4a0d] text-[#d98a6b] hover:bg-[#c26d4a1f]"
                }`}
              >
                <Trash2 className="h-4 w-4" />
                {eraseArm ? "sure? click again" : "erase everything"}
              </button>
            </div>
            {eraseArm ? (
              <p className="mt-2 text-[.74rem] font-semibold leading-relaxed text-[#d98a6b]">
                Everything goes — including your Python Lab notebooks. Export first if you want this memory back.
              </p>
            ) : null}
            <p className="mt-3 flex items-center gap-2 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]">
              <Database className="h-3 w-3" />
              export before switching laptops · import restores the whole schedule
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4">
              <p className="flex items-center gap-2 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]">
                <HardDrive className="h-3 w-3" />
                {storage ? `${fmtBytes(storage.usage)} of ${fmtBytes(storage.quota)} used` : "storage estimate unavailable here"}
              </p>
              <button
                type="button"
                onClick={() => void onPersist()}
                aria-label="Ask the browser to keep the atlas from being cleared under storage pressure"
                className="ml-auto flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2 text-[.62rem] font-black uppercase tracking-[.14em] text-[#e9d7bf] transition hover:bg-white/[.12]"
              >
                <ShieldCheck className="h-3.5 w-3.5" style={{ color: "#a9c977" }} />
                Request persistent storage
              </button>
            </div>
          </div>

          {/* ------- sync across devices — one code, two directions ------- */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
            <p className="flex items-center gap-2 font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]">
              <RefreshCw className="h-3.5 w-3.5" style={{ color: "#f5c889" }} />
              Sync across devices
            </p>
            <p className="mt-2 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]">
              One code moves your ledger, schedule, forged cards and progress between devices. Anyone with the code can pull your
              data — treat it like a password.
            </p>
            <p className="mt-1 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]">
              sync runs through the app's backend — export/import works fully offline
            </p>

            {syncUnavailable ? (
              <p
                role="alert"
                className="mt-3 rounded-xl border border-[#c26d4a40] bg-[#c26d4a14] px-4 py-3 text-[.8rem] font-semibold leading-relaxed text-[#d98a6b]"
              >
                Sync storage isn't available on this deployment — export/import still works.
              </p>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {syncCode ? (
                <>
                  <span
                    aria-label="Your sync code"
                    className="rounded-xl border border-[#f5c88940] bg-[#f5c88910] px-4 py-2 font-mono text-lg font-bold tracking-[.3em] text-[#f5c889]"
                  >
                    {syncCode}
                  </span>
                  <button
                    type="button"
                    onClick={onGenerateCode}
                    aria-label="Generate a fresh sync code"
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.04] px-3 py-2 text-[.62rem] font-black uppercase tracking-[.14em] text-[#c9b99f] transition hover:bg-white/[.1]"
                  >
                    <RefreshCw className="h-3 w-3" />
                    new code
                  </button>
                  <button
                    type="button"
                    onClick={() => void onPush()}
                    disabled={syncBusy !== null}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <CloudUpload className="h-4 w-4" style={{ color: "#a9c977" }} />
                    {syncBusy === "push" ? "pushing…" : "Push my data to the code"}
                  </button>
                  <button
                    type="button"
                    onClick={() => void onBurn()}
                    disabled={syncBusy !== null}
                    aria-label={burnArm ? "Confirm: burn this code — nothing will be parked under it anymore" : "Burn this code — first press arms, second press burns"}
                    className={`ml-auto flex items-center gap-2 rounded-full border px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] transition disabled:cursor-not-allowed disabled:opacity-50 ${
                      burnArm
                        ? "border-[#c26d4a] bg-[#c26d4a] text-[#fff1e8]"
                        : "border-[#c26d4a40] bg-[#c26d4a0d] text-[#d98a6b] hover:bg-[#c26d4a1f]"
                    }`}
                  >
                    <Flame className="h-4 w-4" />
                    {burnArm ? "sure? click again" : "Burn this code"}
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={onGenerateCode}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12]"
                >
                  <RefreshCw className="h-4 w-4" style={{ color: "#f5c889" }} />
                  Generate a sync code
                </button>
              )}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              <label className="sr-only" htmlFor="sync-pull-code">
                A sync code to pull data from
              </label>
              <input
                id="sync-pull-code"
                value={pullCode}
                onChange={(e) => setPullCode(formatSyncInput(e.target.value))}
                placeholder="type a code to pull"
                maxLength={6}
                autoCapitalize="characters"
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
                className="h-10 w-48 rounded-full border border-white/15 bg-white/[.05] px-4 font-mono text-[.8rem] font-bold uppercase tracking-[.24em] text-[#f0e2c8] placeholder:font-sans placeholder:text-[.66rem] placeholder:uppercase placeholder:tracking-[.14em] placeholder:text-[#5d5142] focus:border-[#f5c88960] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => void onPull()}
                disabled={!SYNC_CODE_RE.test(pullCode) || syncBusy !== null}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-4 py-2.5 text-[.7rem] font-black uppercase tracking-[.14em] text-[#f0e2c8] transition hover:bg-white/[.12] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <CloudDownload className="h-4 w-4" style={{ color: "#f5c889" }} />
                {syncBusy === "pull" ? "pulling…" : "Pull from the code"}
              </button>
            </div>
          </div>
        </section>

        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="sr-only"
          aria-hidden
          tabIndex={-1}
          onChange={(e) => {
            void onFile(e.target.files?.[0]);
          }}
        />

        <p className="mt-10 text-center font-mono text-[.6rem] uppercase tracking-[.2em] text-[#5d5142]">
          the ledger keeps itself — every finished window writes its own row
        </p>
      </main>

      {reviewSubject ? (
        <ReviewWindow
          subject={reviewSubject}
          forceIds={reviewForce}
          onClose={() => {
            setReviewSubject(null);
            setReviewForce([]);
            refresh();
          }}
        />
      ) : null}

      {drillSubject ? (
        <DrillWindow
          subject={drillSubject}
          onClose={() => {
            setDrillSubject(null);
            refresh();
          }}
        />
      ) : null}

      {mockOpen ? (
        <MockWindow
          onClose={() => {
            setMockOpen(false);
            refresh();
          }}
        />
      ) : null}

      {forgeOpen ? (
        <CardForge
          onClose={() => {
            setForgeOpen(false);
            refresh();
          }}
        />
      ) : null}
    </div>
  );
}

/* ---------------- pieces ---------------- */

function StatCard({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Flame;
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
      <span className="flex items-center gap-2 font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]">
        <Icon className="h-3.5 w-3.5" style={{ color: tone }} />
        {label}
      </span>
      <p className="font-display mt-2 text-2xl font-black text-[#f7ecdd]">{value}</p>
    </div>
  );
}

function ShelfCard({ row, onReview, onDrill }: { row: ShelfRow; onReview: () => void; onDrill: () => void }) {
  const { subject, stats, mastery, due, read, readTotal } = row;
  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : null;
  const started = mastery.total - mastery.unseen > 0;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[.04] p-5 transition-colors hover:border-white/20">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: `${subject.accent}1f`, color: subject.accent }}
          aria-hidden
        >
          <subject.icon className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0">
          <p className="text-[.95rem] font-black leading-tight text-[#f7ecdd]">{subject.title}</p>
          <p className="font-mono text-[.6rem] uppercase tracking-[.16em] text-[#8d7b63]">shelf {subject.shelf}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={onDrill}
            aria-label={`Quick drill ${subject.title} — a mixed handful, no schedule needed`}
            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[.66rem] font-black uppercase tracking-[.14em] text-[#c9b99f] transition hover:bg-white/[.1]"
          >
            <Zap className="h-3.5 w-3.5" style={{ color: subject.accent }} />
            drill
          </button>
          {due > 0 ? (
            <button
              type="button"
              onClick={onReview}
              className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.66rem] font-black uppercase tracking-[.14em] transition hover:brightness-125"
              style={{ borderColor: `${subject.accent}55`, background: `${subject.accent}14`, color: subject.accent }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              review {due} due
            </button>
          ) : (
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 font-mono text-[.58rem] font-bold uppercase tracking-[.14em] text-[#77685a]">
              {started ? <Timer className="h-3 w-3" /> : null}
              {started ? "schedule clear" : "no cards yet"}
            </span>
          )}
        </div>
      </div>

      {/* reading progress — chapters reached while scrolling the notes */}
      <div className="mt-4">
        <div className="flex items-center justify-between font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8d7b63]">
          <span className="flex items-center gap-1.5">
            <BookOpen className="h-3 w-3" style={{ color: subject.accent }} />
            chapters read
          </span>
          <span>
            <strong className="text-[#c9b99f]">{read}</strong> / {readTotal}
          </span>
        </div>
        <div
          className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/[.06]"
          role="img"
          aria-label={`Reading progress: ${read} of ${readTotal} chapters read`}
        >
          <span
            style={{ width: `${Math.min(100, (read / Math.max(1, readTotal)) * 100)}%`, background: subject.accent }}
            className="block h-full transition-[width] duration-500"
          />
        </div>
      </div>

      {/* mastery bar — mastered / learning / weak / unseen */}
      <div className="mt-4">
        <div
          className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/[.06]"
          role="img"
          aria-label={`Mastery: ${mastery.mastered} mastered, ${mastery.learning} learning, ${mastery.review} weak, ${mastery.unseen} unseen of ${mastery.total}`}
        >
          <Seg pct={(mastery.mastered / Math.max(1, mastery.total)) * 100} color="#8fae5d" />
          <Seg pct={(mastery.learning / Math.max(1, mastery.total)) * 100} color="#d9a441" />
          <Seg pct={(mastery.review / Math.max(1, mastery.total)) * 100} color="#c26d4a" />
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8d7b63]">
          <span>
            mastery <strong className="text-[#c9b99f]">{mastery.pct}%</strong> ({mastery.mastered}/{mastery.total})
          </span>
          <span>
            accuracy{" "}
            <strong className="text-[#c9b99f]">{accuracy === null ? "—" : `${accuracy}%`}</strong>
            {stats.attempts > 0 ? ` · best ${stats.bestPct}% · ${stats.attempts} attempt${stats.attempts === 1 ? "" : "s"}` : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

function Seg({ pct, color }: { pct: number; color: string }) {
  return pct <= 0 ? null : <span style={{ width: `${pct}%`, background: color }} className="block h-full" />;
}

/* the daily-goal ring — progress toward today's target */
function GoalRing({ done, target, met }: { done: number; target: number; met: boolean }) {
  const R = 26;
  const C = 2 * Math.PI * R;
  const p = Math.max(0, Math.min(1, target > 0 ? done / target : 0));
  const tone = met ? "#8fae5d" : "#f5c889";
  return (
    <div className="relative h-16 w-16 shrink-0" role="img" aria-label={`Daily goal: ${done} of ${target} answers today${met ? " — goal met" : ""}`}>
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={R} fill="none" stroke="#ffffff14" strokeWidth="5" />
        <circle
          cx="32"
          cy="32"
          r={R}
          fill="none"
          stroke={tone}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - p)}
          style={{ transition: "stroke-dashoffset .6s ease, stroke .3s ease" }}
        />
      </svg>
      <span className="font-display absolute inset-0 flex items-center justify-center text-[.95rem] font-black" style={{ color: met ? "#c4dba4" : "#f7ecdd" }}>
        {done}
      </span>
    </div>
  );
}
