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

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  BookOpenCheck,
  CalendarCheck2,
  Database,
  Download,
  Flame,
  Layers,
  ListChecks,
  Sparkles,
  Timer,
  Trash2,
  Upload,
} from "lucide-react";
import { SUBJECTS, type Subject } from "./subjects";
import { QUESTION_COUNTS } from "@/lib/question-counts";
import { SECTION_COUNTS, TOTAL_SECTIONS } from "@/lib/section-counts";
import { currentStreak, loadLedger, statsFor, type LedgerStore } from "@/lib/ledger";
import { dueCounts, masteryFor, type SubjectMastery } from "@/lib/sm2";
import { readProgressCounts } from "@/lib/progress";
import {
  applyBackup,
  backupFilename,
  eraseAllStores,
  exportBackup,
  parseBackup,
  type BackupBundle,
  type BackupSummary,
} from "@/lib/backup";

/* the review window loads its own subject chunk on demand */
const ReviewWindow = dynamic(() => import("@/components/notes/ReviewWindow").then((m) => m.ReviewWindow), {
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

  const refresh = useCallback(() => {
    const ledger = loadLedger();
    const due = dueCounts();
    const reads = readProgressCounts();
    setStore(ledger);
    setStreak(currentStreak(ledger.days));
    setRows(
      SUBJECTS.filter((s) => s.status === "live").map((subject) => ({
        subject,
        stats: statsFor(ledger, subject.id),
        mastery: masteryFor(subject.id, QUESTION_COUNTS[subject.id as keyof typeof QUESTION_COUNTS] ?? 0),
        due: due[subject.id] ?? 0,
        read: reads[subject.id] ?? 0,
        readTotal: SECTION_COUNTS[subject.id] ?? subject.chapters ?? 0,
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
        setReviewSubject(id);
        refresh();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("atlas:review-subject", onReview);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("atlas:review-subject", onReview);
    };
  }, [refresh]);

  const totalAttempts = store?.attempts.length ?? 0;
  const totalAnswered = store?.attempts.reduce((n, a) => n + a.total, 0) ?? 0;
  const daysPracticed = store?.days.length ?? 0;
  const recent = (store?.attempts ?? []).slice(-10).reverse();
  const dueEverywhere = rows.reduce((n, r) => n + r.due, 0);
  const readEverywhere = rows.reduce((n, r) => n + r.read, 0);

  /* ---------- your-data panel state ---------- */
  const [imp, setImp] = useState<ImportState>({ kind: "idle" });
  const [dataFlash, setDataFlash] = useState<string | null>(null);
  const [eraseArm, setEraseArm] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const onExport = () => {
    try {
      const blob = new Blob([exportBackup()], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = backupFilename();
      a.click();
      URL.revokeObjectURL(url);
      setDataFlash(`Backup downloaded — ${backupFilename()}`);
    } catch {
      setDataFlash("The download failed — your browser blocked it. Try again.");
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
    applyBackup(imp.bundle);
    const s = imp.summary;
    setImp({ kind: "idle" });
    if (fileRef.current) fileRef.current.value = "";
    refresh();
    setDataFlash(`Restored — ${s.cards} scheduled card${s.cards === 1 ? "" : "s"}, ${s.attempts} attempt${s.attempts === 1 ? "" : "s"}, ${s.sections} chapter${s.sections === 1 ? "" : "s"} read.`);
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
    setDataFlash("Every store erased — a fresh start. Export a backup first if you want this memory back.");
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
              onClick={() => setReviewSubject("all")}
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

        {/* ------- per-shelf mastery ------- */}
        <section aria-label="Per-shelf mastery" className="mt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <h2 className="font-display text-xl font-black">Shelf by shelf</h2>
            <span className="font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]">
              <strong className="text-[#c9b99f]">{readEverywhere}</strong>/{TOTAL_SECTIONS} chapters read
            </span>
            {dueEverywhere > 0 ? (
              <button
                type="button"
                onClick={() => setReviewSubject("all")}
                className="ml-auto flex items-center gap-1.5 rounded-full border border-[#f59e0b55] bg-[#f59e0b14] px-4 py-2 text-[.66rem] font-black uppercase tracking-[.14em] text-[#f5c889] transition hover:bg-[#f59e0b2a]"
              >
                <Layers className="h-3.5 w-3.5" />
                review everything
              </button>
            ) : null}
          </div>
          <div className="mt-4 grid gap-3">
            {rows.map((row) => (
              <ShelfCard key={row.subject.id} row={row} onReview={() => setReviewSubject(row.subject.id)} />
            ))}
          </div>
        </section>

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
                        {subject?.short ?? a.subject} · {isReview ? "spaced review" : a.group} · {relDay(a.at)} ·{" "}
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
            The whole atlas memory — review schedule, attempt ledger, chapters read — lives in this browser and
            nowhere else. One JSON file carries it anywhere.
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
            {dataFlash ? (
              <p role="status" className="mb-4 rounded-xl border border-[#8fae5d40] bg-[#8fae5d14] px-4 py-3 text-[.8rem] font-semibold leading-relaxed text-[#c4dba4]">
                {dataFlash}
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
            <p className="mt-3 flex items-center gap-2 font-mono text-[.6rem] uppercase tracking-[.16em] text-[#77685a]">
              <Database className="h-3 w-3" />
              export before switching laptops · import restores the whole schedule
            </p>
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

      {reviewSubject ? <ReviewWindow subject={reviewSubject} onClose={() => { setReviewSubject(null); refresh(); }} /> : null}
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

function ShelfCard({ row, onReview }: { row: ShelfRow; onReview: () => void }) {
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
