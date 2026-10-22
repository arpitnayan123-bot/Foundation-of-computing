"use client";

/* ============================================================
   TEST MY KNOWLEDGE — a full-screen exam window per ATB chapter
   group. Pen-paper style question set (MCQ / write-the-output /
   short answer) with instant checking, model answers, a
   navigator, a timer and a results report.
   Adapted from the FoC ExamWindow — the ATB course is no-code,
   so the "write the code" question type does not exist here.
   ============================================================ */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  PenLine,
  ListChecks,
  RotateCcw,
  Trophy,
  Timer,
  GraduationCap,
  Check,
  Eye,
  Printer,
} from "lucide-react";
import { ATB_EXAM_BANKS, type AtbExamGroup, type AtbQuestionType } from "./questions";

type QStatus = "unattempted" | "correct" | "wrong" | "revealed";
interface QState {
  chosen?: number;
  typed?: string;
  revealed?: boolean;
  status: QStatus;
}

const TYPE_META: Record<AtbQuestionType, { label: string; color: string; bg: string }> = {
  mcq: { label: "Multiple choice", color: "#8a4508", bg: "#f9e8d2" },
  output: { label: "Write the output", color: "#7c2d12", bg: "#fdeadd" },
  short: { label: "Short answer", color: "#4d3319", bg: "#f3e8d2" },
};

function fmt(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function AtbExamWindow({ group, onClose }: { group: AtbExamGroup; onClose: () => void }) {
  const bank = ATB_EXAM_BANKS[group];
  const qs = bank.questions;

  const [idx, setIdx] = useState(0);
  const [states, setStates] = useState<Record<string, QState>>(() =>
    Object.fromEntries(bank.questions.map((q) => [q.id, { status: "unattempted" as QStatus }]))
  );
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  /* timer + scroll lock + esc */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      document.body.style.overflow = "";
      window.clearInterval(t);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const inTextarea = e.target instanceof HTMLTextAreaElement;
      if (e.key === "Escape" && !inTextarea) onClose();
      if (!finished && !inTextarea) {
        if (e.key === "ArrowRight") setIdx((i) => Math.min(i + 1, qs.length - 1));
        if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [finished, onClose, qs.length]);

  const q = qs[idx];
  const st = states[q.id];

  const patch = (id: string, p: Partial<QState>) =>
    setStates((prev) => ({ ...prev, [id]: { ...prev[id], ...p } }));

  /* scoring */
  const score = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    let answered = 0;
    const byType: Record<AtbQuestionType, { c: number; t: number }> = {
      mcq: { c: 0, t: 0 },
      output: { c: 0, t: 0 },
      short: { c: 0, t: 0 },
    };
    for (const qq of qs) {
      byType[qq.type].t += 1;
      const s = states[qq.id]?.status ?? "unattempted";
      if (s === "correct" || s === "wrong") answered += 1;
      if (s === "correct") {
        correct += 1;
        byType[qq.type].c += 1;
      }
      if (s === "wrong") wrong += 1;
    }
    return { correct, wrong, answered, byType, total: qs.length };
  }, [states, qs]);

  const pct = Math.round((score.correct / score.total) * 100);
  const verdict =
    pct >= 85
      ? { t: "Topper tier — you are pen-paper ready.", c: "#44621d" }
      : pct >= 60
      ? { t: "Solid. Rewrite the missed answers by hand and you are there.", c: "#8a5a06" }
      : pct >= 35
      ? { t: "Getting there — go back to the notes for the misses, then retake.", c: "#b45309" }
      : { t: "Read the chapter notes once more, then retake — you will crush it.", c: "#8c2f2f" };

  function chooseMCQ(i: number) {
    if (st.status === "correct" || st.status === "wrong") return;
    patch(q.id, {
      chosen: i,
      revealed: true,
      status: i === q.answer ? "correct" : "wrong",
    });
  }

  function selfCheck(ok: boolean) {
    patch(q.id, { status: ok ? "correct" : "wrong" });
  }

  function retake() {
    setStates(Object.fromEntries(qs.map((qq) => [qq.id, { status: "unattempted" as QStatus }])));
    setIdx(0);
    setSeconds(0);
    setFinished(false);
    bodyRef.current?.scrollTo({ top: 0 });
  }

  function go(i: number) {
    setIdx(i);
    bodyRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------- results view ---------------- */
  if (finished) {
    return (
      <ExamShell bank={bank} score={score} seconds={seconds} onClose={onClose} onExit={() => setFinished(false)} scrollRef={bodyRef}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="exam-result-card">
            <div className="exam-score-ring" style={{ borderColor: pct >= 60 ? "#8fae5d" : "#e0a45e" }}>
              <span className="exam-score-num">{pct}%</span>
              <span className="exam-score-sub">
                {score.correct} / {score.total}
              </span>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-[#2b1d10]">Result report</h3>
              <p className="mt-1 text-[.95rem] font-semibold" style={{ color: verdict.c }}>
                {verdict.t}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[.72rem] font-bold">
                <span className="exam-chip" style={{ background: "#eef4dd", color: "#44621d" }}>✓ {score.correct} correct</span>
                <span className="exam-chip" style={{ background: "#fdecec", color: "#8c2f2f" }}>✗ {score.wrong} wrong</span>
                <span className="exam-chip" style={{ background: "#f3e8d2", color: "#6f5438" }}>• {score.total - score.answered} unattempted</span>
                <span className="exam-chip" style={{ background: "#f9e8d2", color: "#8a4508" }}>
                  <Timer className="mr-1 inline h-3 w-3" />
                  {fmt(seconds)}
                </span>
              </div>
            </div>
          </div>

          {/* per-type breakdown */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(Object.keys(score.byType) as AtbQuestionType[]).map((t) => {
              const meta = TYPE_META[t];
              const d = score.byType[t];
              return (
                <div key={t} className="flex items-center justify-between rounded-xl border border-[#e8dcc0] bg-[#fffdf9] px-4 py-3">
                  <span className="text-[.8rem] font-bold" style={{ color: meta.color }}>
                    {meta.label}
                  </span>
                  <span className="text-[.8rem] font-extrabold text-[#2b1d10]">
                    {d.c} / {d.t}
                  </span>
                </div>
              );
            })}
          </div>

          {/* review the misses */}
          {score.correct < score.total ? (
            <div className="mt-6">
              <p className="exam-eyebrow">
                <Printer className="h-3.5 w-3.5" />
                Review &amp; rewrite these by hand
              </p>
              <div className="mt-3 grid gap-3">
                {qs.map((qq) => {
                  const s = states[qq.id]?.status ?? "unattempted";
                  if (s === "correct") return null;
                  const model =
                    qq.type === "mcq"
                      ? (qq.options?.[qq.answer ?? 0] ?? "")
                      : qq.answerText ?? "";
                  return (
                    <div key={qq.id} className="rounded-xl border border-[#e8dcc0] bg-[#fffdf9] p-4">
                      <p className="text-[.88rem] font-bold leading-snug text-[#2b1d10]">{qq.q}</p>
                      {qq.code ? <pre className="exam-code mt-2">{qq.code}</pre> : null}
                      <p className="mt-2 text-[.82rem] leading-relaxed" style={{ color: s === "wrong" ? "#8c2f2f" : "#6f5438" }}>
                        <strong>{s === "wrong" ? "Missed —" : "Unattempted —"}</strong>{" "}
                        <span className="whitespace-pre-wrap font-mono text-[.78rem] text-[#2f2013]">{model}</span>
                      </p>
                      {qq.explain ? <p className="mt-1 text-[.78rem] leading-relaxed text-[#6f5438]">{qq.explain}</p> : null}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={retake} className="exam-btn exam-btn-primary">
              <RotateCcw className="h-4 w-4" />
              Retake this test
            </button>
            <button type="button" onClick={() => setFinished(false)} className="exam-btn">
              <ListChecks className="h-4 w-4" />
              Back to questions
            </button>
          </div>
        </motion.div>
      </ExamShell>
    );
  }

  /* ---------------- question view ---------------- */
  const meta = TYPE_META[q.type];
  const mcqLocked = st.status === "correct" || st.status === "wrong";

  return (
    <ExamShell bank={bank} score={score} seconds={seconds} onClose={onClose} onExit={() => setFinished(true)} scrollRef={bodyRef}>
      <motion.div key={q.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.22, ease: "easeOut" }}>
        {/* type chip + counter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="exam-type-chip" style={{ color: meta.color, background: meta.bg }}>
            {meta.label}
          </span>
          <span className="text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a6d4f]">
            Question {idx + 1} of {qs.length}
          </span>
        </div>

        {/* question */}
        <h3 className="font-display mt-3 text-xl font-bold leading-snug text-[#2b1d10] md:text-[1.35rem]">{q.q}</h3>

        {q.code ? <pre className="exam-code mt-4">{q.code}</pre> : null}

        {/* answer area */}
        {q.type === "mcq" ? (
          <div className="mt-4 grid gap-2">
            {q.options?.map((opt, i) => {
              const isAnswer = i === q.answer;
              const chosen = st.chosen === i;
              let cls = "exam-opt";
              if (mcqLocked && isAnswer) cls += " exam-opt-correct";
              else if (mcqLocked && chosen) cls += " exam-opt-wrong";
              return (
                <button key={i} type="button" disabled={mcqLocked} onClick={() => chooseMCQ(i)} className={cls}>
                  <span className="exam-opt-letter">{String.fromCharCode(65 + i)}</span>
                  <span className="font-mono text-[.86rem]">{opt}</span>
                  {mcqLocked && isAnswer ? <Check className="ml-auto h-4 w-4" /> : null}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-4">
            <label htmlFor={`ta-${q.id}`} className="text-[.74rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
              Write it on paper first — then type your attempt to compare
            </label>
            <textarea
              id={`ta-${q.id}`}
              value={st.typed ?? ""}
              onChange={(e) => patch(q.id, { typed: e.target.value })}
              spellCheck={false}
              rows={q.type === "short" ? 4 : 6}
              placeholder={q.type === "output" ? "e.g. 62.0 then FIRST CLASS" : "your answer…"}
              className="exam-ta"
            />
            {!st.revealed ? (
              <button type="button" onClick={() => patch(q.id, { revealed: true })} className="exam-btn mt-2">
                <Eye className="h-4 w-4" />
                Reveal the model answer
              </button>
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-3">
                <div className="exam-answer">
                  <p className="exam-eyebrow">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Model answer
                  </p>
                  {q.answerText ? (
                    <p className="mt-2 whitespace-pre-wrap font-mono text-[.82rem] leading-relaxed text-[#2f2013]">
                      {q.answerText}
                    </p>
                  ) : null}
                  {q.explain ? <p className="mt-2 text-[.82rem] leading-relaxed text-[#6f5438]">{q.explain}</p> : null}
                </div>
                {st.status !== "correct" && st.status !== "wrong" ? (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-[.74rem] font-bold uppercase tracking-[.12em] text-[#8a6d4f]">Self-check:</span>
                    <button type="button" onClick={() => selfCheck(true)} className="exam-btn" style={{ color: "#44621d" }}>
                      <Check className="h-4 w-4" /> I got it
                    </button>
                    <button type="button" onClick={() => selfCheck(false)} className="exam-btn" style={{ color: "#8c2f2f" }}>
                      <X className="h-4 w-4" /> Not yet
                    </button>
                  </div>
                ) : null}
              </motion.div>
            )}
          </div>
        )}

        {/* MCQ explanation */}
        {q.type === "mcq" && mcqLocked && q.explain ? (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="exam-answer mt-3">
            <p className="text-[.88rem] font-bold" style={{ color: st.status === "correct" ? "#44621d" : "#8c2f2f" }}>
              {st.status === "correct" ? "Correct." : "Not quite."}
            </p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#2f2013]">{q.explain}</p>
          </motion.div>
        ) : null}

        {/* navigator */}
        <div className="exam-nav">
          <p className="exam-eyebrow">
            <ListChecks className="h-3.5 w-3.5" />
            Jump to a question
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {qs.map((qq, i) => {
              const s = states[qq.id]?.status ?? "unattempted";
              const cls =
                i === idx
                  ? "exam-dot exam-dot-current"
                  : s === "correct"
                  ? "exam-dot exam-dot-ok"
                  : s === "wrong"
                  ? "exam-dot exam-dot-bad"
                  : s === "revealed"
                  ? "exam-dot exam-dot-rev"
                  : "exam-dot";
              return (
                <button key={qq.id} type="button" onClick={() => go(i)} className={cls} aria-label={`Go to question ${i + 1}`}>
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* prev / next */}
        <div className="mt-6 flex items-center justify-between pb-2">
          <button type="button" onClick={() => go(Math.max(0, idx - 1))} disabled={idx === 0} className="exam-btn">
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          {idx < qs.length - 1 ? (
            <button type="button" onClick={() => go(idx + 1)} className="exam-btn exam-btn-primary">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="button" onClick={() => setFinished(true)} className="exam-btn exam-btn-primary">
              <Trophy className="h-4 w-4" />
              Finish &amp; see score
            </button>
          )}
        </div>
      </motion.div>
    </ExamShell>
  );
}

/* ---------------- shared shell (header + footer) ---------------- */
function ExamShell({
  bank,
  score,
  seconds,
  children,
  onClose,
  onExit,
  scrollRef,
}: {
  bank: (typeof ATB_EXAM_BANKS)[AtbExamGroup];
  score: { correct: number; total: number; answered: number };
  seconds: number;
  children: React.ReactNode;
  onClose: () => void;
  onExit: () => void;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-[80] flex flex-col"
      style={{ background: "linear-gradient(180deg,#f7eedf 0%,#f3e7d3 100%)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Test my knowledge — ${bank.title}`}
    >
      {/* header */}
      <div className="shrink-0 border-b border-black/20" style={{ background: "linear-gradient(160deg,#2b1b10,#402818)" }}>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}>
            <PenLine className="h-4.5 w-4.5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-[.95rem] font-black leading-tight text-[#ffe9c9]">Test my knowledge — {bank.title}</p>
            <p className="text-[.68rem] leading-tight text-[#c9a97e]">{bank.subtitle} · pen-paper practice</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#f0e2c8]">
              <Timer className="h-3 w-3" />
              {fmt(seconds)}
            </span>
            <span className="rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.62rem] font-extrabold uppercase tracking-[.12em] text-[#f0e2c8]">
              ✓ {score.correct}/{score.total}
            </span>
            <button type="button" onClick={onClose} aria-label="Close the exam window" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* body */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8">{children}</div>
      </div>

      {/* bottom bar */}
      <div className="shrink-0 border-t border-[#e5d3b6] bg-[#faf3e6]/90">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          <p className="hidden text-[.68rem] font-semibold text-[#8a6d4f] sm:block">
            Exam mode: write on real paper first — then check. That is exactly how the end-term works.
          </p>
          <button type="button" onClick={onExit} className="exam-btn ml-auto">
            <Trophy className="h-4 w-4" />
            Finish &amp; see score
          </button>
        </div>
      </div>
    </motion.div>
  );
}
