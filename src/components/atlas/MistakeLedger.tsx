"use client";

/* ============================================================
   THE MISTAKE LEDGER — 错题本 (cuòtí běn), at #/ledger.

   The gaokao tradition, rendered as a ledger section: every
   wrong answer the atlas catches (exam windows, drills, the
   cockpit's concept checks) is filed here automatically with
   the question, the correct answer and a three-colour diagnosis
   (concept gap / careless / misread).

   The close-the-loop ritual, exactly as toppers run it:
     - re-solve unlocks the day AFTER the miss (spaced)
     - "nailed it" books the next attempt two days out
     - two consecutive re-solves later the miss is closed
     - miss it again anywhere and the entry reopens, hits +1

   Reads lib/mistakes.ts — a localStorage store that backup.ts
   carries and the cockpit's RECHARGE move reads for its count.
   ============================================================ */

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BookMarked, Check, ChevronDown, ChevronUp, Eye, RotateCcw, Timer, X } from "lucide-react";
import { SUBJECTS } from "./subjects";
import {
  closedMistakes,
  loadMistakes,
  mistakeStats,
  openMistakes,
  recordResolve,
  setMistakeKind,
  type MissKind,
  type MistakeEntry,
} from "@/lib/mistakes";
import { dueLabel } from "@/lib/sm2";

const KIND_META: Record<MissKind, { label: string; hint: string; bg: string; color: string }> = {
  concept: { label: "concept gap", hint: "I never really had it", bg: "#e4674a1a", color: "#e4674a" },
  careless: { label: "careless", hint: "I knew it — slipped", bg: "#f5c8891a", color: "#f5c889" },
  misread: { label: "misread", hint: "I read it wrong", bg: "#8fb4f01a", color: "#8fb4f0" },
};

const AMBER = "#f5c889";
const GREEN = "#a9c977";
const RED = "#e4674a";

/* the re-solve state of one entry while the reader works it.
   reDueAt pins the state to the re-solve window it belongs to —
   when the entry's reDue moves (a fresh window, an edit on
   another device), the stale state is pruned and the notebook
   unlocks the question again. */
interface ResolveState {
  revealed: boolean;
  chosen?: number;
  done: "correct" | "wrong" | null;
  reDueAt?: number;
}

function shelfOf(id: string) {
  return SUBJECTS.find((s) => s.id === id);
}

export function MistakeLedger() {
  const [open, setOpen] = useState<MistakeEntry[]>([]);
  const [closed, setClosed] = useState<MistakeEntry[]>([]);
  const [stats, setStats] = useState({ open: 0, due: 0, closed: 0 });
  const [resolving, setResolving] = useState<Record<string, ResolveState>>({});
  const [showClosed, setShowClosed] = useState(false);

  const refresh = useCallback(() => {
    const opens = openMistakes();
    setOpen(opens);
    setClosed(closedMistakes());
    setStats(mistakeStats());
    setResolving((prev) => {
      const next: Record<string, ResolveState> = {};
      for (const [key, st] of Object.entries(prev)) {
        const e = opens.find((x) => `${x.subject}:${x.id}` === key);
        /* keep the state only while the re-solve window is the same one */
        if (e && (st.reDueAt === undefined || st.reDueAt === e.reDue)) next[key] = st;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => refresh());
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("atlas:mistakes-changed", refresh);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("atlas:mistakes-changed", refresh);
    };
  }, [refresh]);

  const patchResolve = (key: string, p: Partial<ResolveState>) =>
    setResolving((prev) => ({ ...prev, [key]: { revealed: false, done: null, ...prev[key], ...p } }));

  const resolveEntry = (entry: MistakeEntry, ok: boolean) => {
    const key = `${entry.subject}:${entry.id}`;
    recordResolve(entry.subject, entry.id, ok);
    /* the fresh copy carries the re-solve window this grade belongs to */
    const fresh = loadMistakes().entries.find((e) => e.subject === entry.subject && e.id === entry.id);
    patchResolve(key, { done: ok ? "correct" : "wrong", reDueAt: fresh?.reDue });
    try {
      window.dispatchEvent(new CustomEvent("atlas:mistakes-changed"));
    } catch {
      /* private mode — local refresh still happens below */
    }
    refresh();
  };

  const dueNow = (e: MistakeEntry) => e.reDue <= Date.now();

  return (
    <section id="mistake-ledger" aria-label="Mistake Ledger" className="mt-10 scroll-mt-24">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <h2 className="font-display text-xl font-black">
          The mistake ledger <span className="text-[#8d7b63]">·</span>{" "}
          <span lang="zh-Hans" className="text-[#c9b99f]">
            错题本
          </span>
        </h2>
        <span className="font-mono text-[.62rem] uppercase tracking-[.16em] text-[#8d7b63]">
          the gaokao notebook — every miss, re-solved until it never bites again
        </span>
      </div>
      <p className="mt-1 max-w-xl text-[.86rem] leading-relaxed text-[#a89a86]">
        Wrong answers file themselves here the moment they happen — from exam windows, drills and cockpit checks. Tag
        why it went wrong, re-solve it tomorrow, close the loop.
      </p>

      {/* stat strip */}
      <div className="mt-4 flex flex-wrap gap-2 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]">
        <span className="rounded-full border border-[#e4674a40] bg-[#e4674a14] px-3 py-1.5 text-[#e4674a]">
          {stats.open} open
        </span>
        <span className="rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1.5 text-[#f5c889]">
          {stats.due} due today
        </span>
        <span className="rounded-full border border-[#a9c97740] bg-[#a9c97714] px-3 py-1.5 text-[#a9c977]">
          {stats.closed} closed
        </span>
      </div>

      {/* the open notebook */}
      {open.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 text-[.86rem] text-[#a89a86]">
          <p className="flex items-center gap-2 font-semibold text-[#f0e2c8]">
            <BookMarked className="h-4 w-4" style={{ color: AMBER }} aria-hidden />
            The notebook is blank.
          </p>
          <p className="mt-1.5 leading-relaxed">
            No misses on file. The first wrong answer — anywhere in the atlas — opens page one.
          </p>
        </div>
      ) : (
        <ul className="mt-4 grid gap-3">
          {open.map((e) => {
            const key = `${e.subject}:${e.id}`;
            const subject = shelfOf(e.subject);
            const st = resolving[key] ?? { revealed: false, done: null };
            const canResolve = dueNow(e);
            const kind = KIND_META[e.kind] ?? KIND_META.concept;
            return (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-white/[.04] p-4 sm:p-5"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: `${subject?.accent ?? AMBER}22`, color: subject?.accent ?? AMBER }}
                    aria-hidden
                  >
                    {subject ? <subject.icon className="h-3.5 w-3.5" /> : <BookMarked className="h-3.5 w-3.5" />}
                  </span>
                  <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em] text-[#8d7b63]">
                    {subject?.short ?? e.subject} · missed ×{e.hits} · {rel(e.lastAt)}
                  </span>
                  {e.streak > 0 ? (
                    <span className="rounded-full border border-[#a9c97740] bg-[#a9c97714] px-2 py-0.5 font-mono text-[.58rem] font-bold uppercase tracking-[.12em] text-[#a9c977]">
                      re-solve streak {e.streak}/2
                    </span>
                  ) : null}
                  {/* the three-colour pen */}
                  <span className="ml-auto flex items-center gap-1" role="group" aria-label="Tag why this went wrong">
                    {(Object.keys(KIND_META) as MissKind[]).map((k) => {
                      const meta = KIND_META[k];
                      const active = e.kind === k;
                      return (
                        <button
                          key={k}
                          type="button"
                          title={meta.hint}
                          aria-pressed={active}
                          onClick={() => {
                            setMistakeKind(e.subject, e.id, k);
                            refresh();
                          }}
                          className="rounded-full border px-2 py-0.5 font-mono text-[.56rem] font-bold uppercase tracking-[.1em] transition"
                          style={
                            active
                              ? { borderColor: `${meta.color}66`, background: meta.bg, color: meta.color }
                              : { borderColor: "rgba(255,255,255,.1)", color: "#8d7b63" }
                          }
                        >
                          {meta.label}
                        </button>
                      );
                    })}
                  </span>
                </div>

                <p className="mt-3 text-[.9rem] font-bold leading-snug text-[#f0e2c8]">{e.q}</p>

                {/* re-solve area — MCQ fidelity when options exist */}
                {e.options && e.options.length > 1 && !st.revealed && !st.done ? (
                  <div className="mt-3 grid gap-1.5">
                    {e.options.map((opt, i) => {
                      const isAnswer = opt === e.answer;
                      const picked = st.chosen === i;
                      const show = st.chosen !== undefined;
                      return (
                        <button
                          key={i}
                          type="button"
                          disabled={!canResolve || show}
                          onClick={() => {
                            patchResolve(key, { chosen: i });
                            resolveEntry(e, isAnswer);
                          }}
                          className="flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-[.8rem] leading-snug transition disabled:opacity-50"
                          style={
                            show && picked
                              ? isAnswer
                                ? { borderColor: `${GREEN}66`, background: `${GREEN}14`, color: "#d9efb9" }
                                : { borderColor: `${RED}66`, background: `${RED}14`, color: "#f3b8a8" }
                              : { borderColor: "rgba(255,255,255,.1)", color: "#e9d7bf" }
                          }
                        >
                          <span className="font-mono text-[.6rem] font-bold text-[#8d7b63]">{i + 1}</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                {st.done === "correct" ? (
                  <p className="mt-3 flex items-center gap-1.5 font-mono text-[.64rem] font-bold uppercase tracking-[.12em]" style={{ color: GREEN }} role="status">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                    {e.streak >= 2 ? "Loop closed — this one is yours now." : "Nailed it — next re-solve booked."}
                  </p>
                ) : null}
                {st.done === "wrong" ? (
                  <div className="mt-3">
                    <p className="flex items-center gap-1.5 font-mono text-[.64rem] font-bold uppercase tracking-[.12em]" style={{ color: RED }} role="status">
                      <X className="h-3.5 w-3.5" aria-hidden />
                      Missed again — back for tomorrow.
                    </p>
                    <p className="mt-1.5 rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-[.8rem] leading-relaxed text-[#e9d7bf]">
                      <span className="font-mono text-[.6rem] uppercase tracking-[.14em] text-[#8d7b63]">correct · </span>
                      {e.answer}
                    </p>
                  </div>
                ) : null}

                {!st.done ? (
                  canResolve ? (
                    e.options && e.options.length > 1 ? null : (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {st.revealed ? (
                          <>
                            <button
                              type="button"
                              onClick={() => resolveEntry(e, true)}
                              className="flex items-center gap-1.5 rounded-full border border-[#a9c97755] bg-[#a9c97714] px-3.5 py-2 text-[.64rem] font-black uppercase tracking-[.12em] text-[#a9c977] transition hover:bg-[#a9c97726]"
                            >
                              <Check className="h-3.5 w-3.5" aria-hidden /> nailed it
                            </button>
                            <button
                              type="button"
                              onClick={() => resolveEntry(e, false)}
                              className="flex items-center gap-1.5 rounded-full border border-[#e4674a55] bg-[#e4674a14] px-3.5 py-2 text-[.64rem] font-black uppercase tracking-[.12em] text-[#e4674a] transition hover:bg-[#e4674a26]"
                            >
                              <RotateCcw className="h-3.5 w-3.5" aria-hidden /> missed again
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => patchResolve(key, { revealed: true })}
                            className="flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[.64rem] font-black uppercase tracking-[.12em] transition hover:brightness-125"
                            style={{ borderColor: `${AMBER}55`, background: `${AMBER}14`, color: AMBER }}
                          >
                            <Eye className="h-3.5 w-3.5" aria-hidden /> show the answer
                          </button>
                        )}
                      </div>
                    )
                  ) : (
                    <p className="mt-3 flex items-center gap-1.5 font-mono text-[.62rem] uppercase tracking-[.14em] text-[#8d7b63]">
                      <Timer className="h-3.5 w-3.5" aria-hidden />
                      re-solve {dueLabel(e.reDue)} — spaced, so it sticks
                    </p>
                  )
                ) : null}
              </motion.li>
            );
          })}
        </ul>
      )}

      {/* the closed shelf — the quiet trophy */}
      {closed.length > 0 ? (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowClosed((v) => !v)}
            aria-expanded={showClosed}
            className="flex items-center gap-1.5 font-mono text-[.62rem] font-bold uppercase tracking-[.14em] text-[#8d7b63] transition hover:text-[#c9b99f]"
          >
            {showClosed ? <ChevronUp className="h-3.5 w-3.5" aria-hidden /> : <ChevronDown className="h-3.5 w-3.5" aria-hidden />}
            {showClosed ? "hide" : "show"} the closed shelf ({stats.closed})
          </button>
          {showClosed ? (
            <ul className="mt-3 grid gap-2">
              {closed.map((e) => {
                const subject = shelfOf(e.subject);
                return (
                  <li
                    key={`${e.subject}:${e.id}`}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-[#a9c97726] bg-[#a9c97708] px-4 py-2.5"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0" style={{ color: GREEN }} aria-hidden />
                    <span className="min-w-0 flex-1 truncate text-[.78rem] text-[#c9b99f]">{e.q}</span>
                    <span className="font-mono text-[.58rem] uppercase tracking-[.14em] text-[#8d7b63]">
                      {subject?.short ?? e.subject} · ×{e.hits} · closed {rel(e.closedAt ?? 0)}
                    </span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

function rel(at: number): string {
  const now = new Date();
  const days = Math.floor((now.setHours(0, 0, 0, 0) - new Date(at).setHours(0, 0, 0, 0)) / 86_400_000);
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days}d ago`;
  return new Date(at).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}
