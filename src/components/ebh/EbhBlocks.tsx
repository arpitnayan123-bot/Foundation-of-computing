"use client";

/* ============================================================
   EbhBlocks — the shared chapter vocabulary of shelf 04.

   · EbhBlocks renders the VERBATIM corpus text generated into
     corpus.ts (from scripts/ebh_lectures/L01-L34.md). The text
     is never altered by this renderer: block types only decide
     styling. sh = subhead · p = paragraph · def = "X: Y" row ·
     li = list item · li2 = sub-item.
   · EbhQuiz, EbhCallout, EbhPanel, EbhReadStep migrate the
     deployed shelf's conventions intact (gold body, oxblood
     edges now per the shelf's colour law).
   · EbhExamCallout carries the two restored examination blocks:
     Quiz One on L14 and the major examination on L34 — both
     quoted exactly as stated.
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
import { EBH_CORPUS, type CorpusBlock } from "./corpus";
import { GOLD, GOLD_LITE, OX, EDGE, PAPER } from "./diagrams/kit";

export const EBH_G = {
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  soft: "#fefce8",
  border: "#e0cb84",
  wash: "#faf6e7",
  sepia: "#7c6248",
};

export const EBH_BTN_GRAD = "linear-gradient(135deg,#eab308,#a16207)";
export const EBH_BTN_SHADOW = "0 14px 30px -12px rgba(161,98,7,.55)";

/* ------------------------------------------------------------
   the verbatim corpus renderer
   ------------------------------------------------------------ */
function DefRow({ s }: { s: string }) {
  const c = s.indexOf(":");
  if (c <= 0 || c > 60) {
    return (
      <p className="max-w-3xl text-[.95rem] leading-relaxed text-[#4a3a26]">{s}</p>
    );
  }
  return (
    <div className="flex flex-col gap-1 rounded-xl border px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3" style={{ borderColor: EDGE, background: PAPER }}>
      <span className="shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider" style={{ color: OX }}>
        {s.slice(0, c)}:
      </span>
      <span className="text-[.9rem] leading-relaxed text-[#4a3a26]">{s.slice(c + 1).trim()}</span>
    </div>
  );
}

export function EbhBlocks({ id }: { id: string }) {
  const blocks = EBH_CORPUS[id];
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
            className={`flex items-start gap-2.5 text-[.92rem] leading-relaxed text-[#4a3a26] ${b.t === "li2" ? "ml-5" : ""}`}
          >
            <span aria-hidden className="mt-[.55rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: b.t === "li2" ? GOLD_LITE : GOLD }} />
            <span>{b.s}</span>
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
        <h3 key={i} className="mt-7 flex items-center gap-2.5 text-lg font-extrabold" style={{ color: OX }}>
          <span aria-hidden className="h-4 w-1 rounded-full" style={{ background: GOLD }} />
          {b.s}
        </h3>
      );
    } else if (b.t === "def") {
      out.push(<DefRow key={i} s={b.s} />);
    } else {
      out.push(
        <p key={i} className="max-w-3xl text-[.95rem] leading-relaxed text-[#4a3a26]">
          {b.s}
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
   EbhReadStep — numbered reading-path heading (migrated).
   ------------------------------------------------------------ */
export function EbhReadStep({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-5 mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md"
          style={{ background: EBH_BTN_GRAD, boxShadow: "0 4px 12px -3px rgba(161,98,7,.55)" }}
          aria-hidden
        >
          {n}
        </span>
        <div>
          <h3 className="text-xl font-bold leading-snug md:text-2xl text-[#3e2c1d]">{title}</h3>
          {sub ? <p className="text-[.82rem] text-muted-warm">{sub}</p> : null}
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------
   EbhCallout — the archive note; edges are oxblood per the
   shelf's colour law (migrated convention, recoloured edge).
   ------------------------------------------------------------ */
const EBH_CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode; label: string }> = {
  insight: { bg: "#fdfae9", border: OX, icon: <Sparkles className="h-4 w-4" style={{ color: GOLD }} />, label: GOLD },
  why: { bg: "#fbf4e4", border: OX, icon: <Lightbulb className="h-4 w-4" style={{ color: "#92400e" }} />, label: "#92400e" },
  warn: { bg: "#fbeae5", border: OX, icon: <AlertTriangle className="h-4 w-4" style={{ color: "#b3402c" }} />, label: "#b3402c" },
  story: { bg: "#f5f1e8", border: OX, icon: <ScrollText className="h-4 w-4" style={{ color: EBH_G.sepia }} />, label: EBH_G.sepia },
};

export function EbhCallout({
  kind = "insight",
  title,
  children,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
}) {
  const s = EBH_CALLOUT_STYLES[kind];
  return (
    <div className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: s.label }}>
        {s.icon}
        <span>{title}</span>
      </div>
      <div className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------
   EbhPanel — mono archive panel (migrated, oxblood edge).
   ------------------------------------------------------------ */
export function EbhPanel({ children, label, tone = "gold" }: { children: string; label?: string; tone?: "gold" | "sepia" }) {
  const head = tone === "gold" ? "#faf3d9" : "#f5f1e8";
  const ink = tone === "gold" ? GOLD : EBH_G.sepia;
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: OX }}>
      {label ? (
        <p className="border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ borderColor: EDGE, background: head, color: ink }}>
          {label}
        </p>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#54430f]">{children}</pre>
    </div>
  );
}

/* ------------------------------------------------------------
   EbhQuiz — interactive single-choice (migrated intact).
   ------------------------------------------------------------ */
export function EbhQuiz({
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
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: EBH_G[700] }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#3e2c1d]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>
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
            className="mt-3 rounded-xl border p-3 text-[.85rem] leading-relaxed text-[#2b2014]"
            style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
          >
            <strong style={{ color: chosen === answer ? EBH_G[700] : "#b3402c" }}>
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
   EbhExamCallout — the restored examination administration
   blocks, quoted exactly as stated. Oxblood edge, pen icon.
   ------------------------------------------------------------ */
export function EbhExamCallout({
  kind,
  title,
  rows,
}: {
  kind: "quiz" | "major";
  title: string;
  rows: { k: string; v: string }[];
}) {
  const label = kind === "quiz" ? "QUIZ ONE — THE SPECIFICATION, AS STATED" : "MAJOR EXAMINATION — THE BRIEF, AS STATED";
  return (
    <div className="rounded-2xl border-2 p-5" style={{ borderColor: OX, background: "#fdf6f3" }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: OX }}>
        <PenLine className="h-4 w-4" />
        <span>{label}</span>
      </div>
      <p className="mt-2 text-[1.02rem] font-extrabold leading-snug text-[#3e2c1d]">{title}</p>
      <dl className="mt-3 grid gap-2">
        {rows.map((r) => (
          <div key={r.k} className="flex flex-col gap-0.5 rounded-xl border px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3" style={{ borderColor: EDGE, background: PAPER }}>
            <dt className="shrink-0 font-mono text-[.7rem] font-bold uppercase tracking-wider" style={{ color: OX }}>
              {r.k}
            </dt>
            <dd className="text-[.9rem] leading-relaxed text-[#4a3a26]">{r.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
