"use client";

/* ============================================================
   StmBlocks — the shared chapter vocabulary of shelf 05.

   · StmBlocks renders the VERBATIM corpus text generated into
     corpus.ts (from scripts/stm_lectures/L01-L33.md). The text
     is never altered by this renderer: block types only decide
     styling — and every string passes through inlineMaths, so
     σ_x̄, z(α/2), √[…], p̂ render as real markup while the data
     stays byte-identical.
   · StmQuiz, StmCallout, StmPanel migrate the deployed shelf's
     conventions intact, recoloured to violet/gold.
   · StmExamCallout carries the four assessment blocks (L03,
     L13, L23, L33) quoted exactly as stated — and the
     supersession variant marks L23 explicitly as superseding
     L13, so a revision reader sees the chain, not a merged answer.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Check,
  GraduationCap,
  Lightbulb,
  PenLine,
  ScrollText,
  Sparkles,
  X,
} from "lucide-react";
import { Reveal } from "@/components/notes/ui";
import { STM_CORPUS, type CorpusBlock } from "./corpus";
import { inlineMaths } from "./stm-math";
import { VIOLET, GOLD, GOLD_LITE, GREY, EDGE, PAPER } from "./diagrams/kit";

/* ------------------------------------------------------------
   the verbatim corpus renderer
   ------------------------------------------------------------ */
function DefRow({ s }: { s: string }) {
  const c = s.indexOf(":");
  if (c <= 0 || c > 60) {
    return <p className="max-w-3xl text-[.95rem] leading-relaxed text-[#4a4066]">{inlineMaths(s)}</p>;
  }
  return (
    <div className="flex flex-col gap-1 rounded-xl border px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3" style={{ borderColor: EDGE, background: PAPER }}>
      <span className="shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider" style={{ color: VIOLET }}>
        {s.slice(0, c)}:
      </span>
      <span className="text-[.9rem] leading-relaxed text-[#4a4066]">{inlineMaths(s.slice(c + 1).trim())}</span>
    </div>
  );
}

export function StmBlocks({ id }: { id: string }) {
  const blocks = STM_CORPUS[id];
  if (!blocks) return null;
  const out: React.ReactNode[] = [];
  let li: CorpusBlock[] = [];
  const flushLi = (key: string) => {
    if (li.length === 0) return;
    out.push(
      <ul key={key} className="ml-1 max-w-3xl space-y-1.5">
        {li.map((b, i) => (
          <li
            key={i}
            className={`flex items-start gap-2.5 text-[.92rem] leading-relaxed text-[#4a4066] ${b.t === "li2" ? "ml-5" : ""}`}
          >
            <span aria-hidden className="mt-[.55rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: b.t === "li2" ? GOLD_LITE : VIOLET }} />
            <span>{inlineMaths(b.s)}</span>
          </li>
        ))}
      </ul>
    );
    li = [];
  };
  blocks.forEach((b, i) => {
    if (b.t === "li" || b.t === "li2") {
      li.push(b);
      return;
    }
    flushLi(`li-${i}`);
    if (b.t === "sh") {
      out.push(
        <h3 key={i} className="mt-7 flex items-center gap-2.5 text-lg font-extrabold" style={{ color: VIOLET }}>
          <span aria-hidden className="h-4 w-1 rounded-full" style={{ background: GOLD }} />
          {inlineMaths(b.s)}
        </h3>
      );
    } else if (b.t === "def") {
      out.push(<DefRow key={i} s={b.s} />);
    } else {
      out.push(
        <p key={i} className="max-w-3xl text-[.95rem] leading-relaxed text-[#4a4066]">
          {inlineMaths(b.s)}
        </p>
      );
    }
  });
  flushLi("li-end");
  return (
    <div className="space-y-3.5">
      {out.map((node, i) => (
        <div key={`wrap-${i}`}>{node}</div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------
   StmReadStep — numbered reading-path heading (migrated).
   ------------------------------------------------------------ */
export function StmReadStep({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-5 mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md"
          style={{ background: "linear-gradient(135deg,#8b5cf6,#6d28d9)", boxShadow: "0 4px 12px -3px rgba(109,40,217,.5)" }}
          aria-hidden
        >
          {n}
        </span>
        <div>
          <h3 className="text-xl font-bold leading-snug md:text-2xl text-[#2b2150]">{title}</h3>
          {sub ? <p className="text-[.82rem] text-muted-warm">{sub}</p> : null}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------
   StmCallout — the insight note, violet edge.
   ------------------------------------------------------------ */
const STM_CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode; label: string }> = {
  insight: { bg: "#f8f5fd", border: VIOLET, icon: <Sparkles className="h-4 w-4" style={{ color: GOLD }} />, label: GOLD },
  why: { bg: "#f5f1fc", border: VIOLET, icon: <Lightbulb className="h-4 w-4" style={{ color: "#6d28d9" }} />, label: "#6d28d9" },
  warn: { bg: "#fbf7ea", border: GOLD, icon: <AlertTriangle className="h-4 w-4" style={{ color: GOLD }} />, label: "#a16207" },
  story: { bg: "#f7f5fa", border: GREY, icon: <ScrollText className="h-4 w-4" style={{ color: GREY }} />, label: GREY },
};

export function StmCallout({
  kind = "insight",
  title,
  children,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
}) {
  const s = STM_CALLOUT_STYLES[kind];
  return (
    <div className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: s.label }}>
        {s.icon}
        <span>{title}</span>
      </div>
      <div className="mt-2 text-[.92rem] leading-relaxed text-[#2b2150]">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------
   StmPanel — mono panel (migrated).
   ------------------------------------------------------------ */
export function StmPanel({ children, label }: { children: string; label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: VIOLET }}>
      {label ? (
        <p className="border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ borderColor: EDGE, background: "#f3effc", color: VIOLET }}>
          {label}
        </p>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#3d2f55]">{children}</pre>
    </div>
  );
}

/* ------------------------------------------------------------
   StmQuiz — interactive single-choice (migrated intact).
   ------------------------------------------------------------ */
export function StmQuiz({
  q,
  options,
  answer,
  explain,
  source,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  source?: string;
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const revealed = chosen !== null;
  return (
    <div className="card-warm p-5">
      <div className="flex items-start gap-2">
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: VIOLET }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#2b2150]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: VIOLET }}>
              {source}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 grid gap-2">
        {options.map((opt, i) => {
          const isAnswer = i === answer;
          const cls = !revealed
            ? "quiz-opt"
            : isAnswer
            ? "quiz-opt correct"
            : i === chosen
            ? "quiz-opt wrong"
            : "quiz-opt";
          return (
            <button
              key={i}
              className={cls}
              disabled={revealed}
              onClick={() => setChosen(i)}
              aria-label={`Option ${i + 1}: ${opt}`}
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[.65rem] font-bold">
                {revealed && isAnswer ? (
                  <Check className="h-3 w-3" />
                ) : revealed && i === chosen ? (
                  <X className="h-3 w-3" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {revealed ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border p-3 text-[.85rem] leading-relaxed text-[#2b2150]"
            style={{ borderColor: EDGE, background: "#f8f5fd" }}
          >
            <strong style={{ color: chosen === answer ? VIOLET : GREY }}>
              {chosen === answer ? "Correct. " : "Not quite. "}
            </strong>
            {explain}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------
   StmExamCallout — the four assessment blocks, quoted exactly
   as stated. kind "supersedes" marks L23's block as superseding
   L13's (the chain a revision reader follows), never a merge.
   ------------------------------------------------------------ */
export function StmExamCallout({
  kind,
  title,
  rows,
}: {
  kind: "quiz-brief" | "supersedes" | "endterm";
  title: string;
  rows: { k: string; v: string }[];
}) {
  const label =
    kind === "quiz-brief"
      ? "QUIZ PATTERN — AS THIS LECTURE STATES IT"
      : kind === "supersedes"
      ? "QUIZ PATTERN — SUPERSEDES L13'S SCHEME, AS STATED"
      : "END-TERM EXAMINATION — THE BRIEF, AS STATED";
  return (
    <div className="rounded-2xl border-2 p-5" style={{ borderColor: kind === "supersedes" ? GOLD : VIOLET, background: kind === "supersedes" ? "#fdf8e9" : "#f8f5fd" }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: kind === "supersedes" ? "#a16207" : VIOLET }}>
        <PenLine className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <p className="mt-2 text-[1.02rem] font-extrabold leading-snug text-[#2b2150]">{title}</p>
      <dl className="mt-3 grid gap-2">
        {rows.map((r) => (
          <div key={r.k} className="flex flex-col gap-0.5 rounded-xl border px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3" style={{ borderColor: EDGE, background: PAPER }}>
            <dt className="shrink-0 font-mono text-[.7rem] font-bold uppercase tracking-wider" style={{ color: VIOLET }}>
              {r.k}
            </dt>
            <dd className="text-[.9rem] leading-relaxed text-[#4a4066]">{inlineMaths(r.v)}</dd>
          </div>
        ))}
      </dl>
      {kind === "supersedes" ? (
        <p className="mt-3 text-[.78rem] leading-relaxed text-[#6b5620]">
          The chain: L03 stated three quizzes with the best two counted; L13 stated two 20-mark quizzes plus one combined-syllabus quiz, best two of three; this block supersedes both — two quizzes remain, best of two, Quiz 2 reaching Chapter 8. Nothing is merged: each lecture keeps its own words.
        </p>
      ) : null}
    </div>
  );
}

/* re-exports so chapter machines can import the table + stepper
   machinery alongside the prose vocabulary from one module */
export { StmDataTable, StmSteps, StmCurve } from "./diagrams/kit";

/* ------------------------------------------------------------
   StmEyebrow — the per-chapter eyebrow, DERIVED from the
   registry via eyebrowFor(<own id>). Scheme: `Module <N> ·
   Lecture <NN> · <short topic>`. Unknown ids throw — no
   fallback, no hard-coded eyebrows anywhere on the shelf.
   ------------------------------------------------------------ */
import { eyebrowFor } from "./lectures";

export function StmEyebrow({ id }: { id: string }) {
  return (
    <p
      className="font-mono text-[.62rem] font-extrabold uppercase tracking-[.18em]"
      style={{ color: "#a16207" }}
    >
      {eyebrowFor(id)}
    </p>
  );
}
