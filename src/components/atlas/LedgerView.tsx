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

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpenCheck, CalendarCheck2, Flame, ListChecks, Sparkles, Timer } from "lucide-react";
import { SUBJECTS, type Subject } from "./subjects";
import { QUESTION_COUNTS } from "@/lib/question-counts";
import { currentStreak, loadLedger, statsFor, type LedgerStore } from "@/lib/ledger";
import { dueCounts, masteryFor, type SubjectMastery } from "@/lib/sm2";

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
    setStore(ledger);
    setStreak(currentStreak(ledger.days));
    setRows(
      SUBJECTS.filter((s) => s.status === "live").map((subject) => ({
        subject,
        stats: statsFor(ledger, subject.id),
        mastery: masteryFor(subject.id, QUESTION_COUNTS[subject.id as keyof typeof QUESTION_COUNTS] ?? 0),
        due: due[subject.id] ?? 0,
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
            <span className="ml-auto flex items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889]">
              <Sparkles className="h-3 w-3" />
              {dueEverywhere} due
            </span>
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
          <h2 className="font-display text-xl font-black">Shelf by shelf</h2>
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
  const { subject, stats, mastery, due } = row;
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
