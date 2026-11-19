"use client";

/* ============================================================
   ATB — the workflow stepper + figure kit.

   Two figure verbs live side by side on this shelf and NEVER
   convert into each other:
     · DIAGRAM — a hand-drawn InlineSVG answering "what is the
       shape?" (memory layout, tree anatomy, Venn, block
       anatomy, cost table). Rendered as plain <svg> wrapped in
       <AtbFigure>.
     · WORKFLOW — an AtbStepper answering "what happens next?".
       Its frames are DATA-BEARING: each step carries the actual
       array, stack contents or distance table so the trace is
       real, and the final frame equals the answer stated in the
       prose.

   Conventions wired in here:
     · olive #7c9a3e marks the working twin; neutral marks the
       broken one — never red (half this course is
       valid-versus-broken pairs)
     · array index 0 sits on the left, value and index on
       separate rows
     · bronze palette: #c2410c primary on #fffaf1 paper,
       #e9d7bf borders, #b45309 eyebrows
     · every stepper honours prefers-reduced-motion by rendering
       the final frame up front (with the full step list), is
       fully keyboard-reachable, and prints its whole trace
     · aria-pressed on the step toggles; aria-live frame caption
   ============================================================ */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, GitBranch, ZoomIn } from "lucide-react";

export const ATB_OLIVE = "#7c9a3e";
export const ATB_NEUTRAL = "#9aa7b5";
export const ATB_PAPER = "#fffaf1";
export const ATB_BORDER = "#e9d7bf";
export const ATB_INK = "#2b2014";
export const ATB_HEAD = "#7c4a12";
export const ATB_EYEBROW = "#b45309";
export const ATB_PRIMARY = "#c2410c";
export const ATB_SPINE = "#c99a5b";
export const ATB_CALLOUT = "#f5c889";

/* ============================================================
   AtbFigure — the one wrapper every figure gets. The figcaption
   says what to NOTICE, not what the picture is (the svg's
   aria-label already says that).
   ============================================================ */
export function AtbFigure({
  notice,
  children,
  className = "",
  dark = false,
}: {
  notice: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <figure className={`mt-8 ${className}`}>
      {children}
      <figcaption
        className={`mt-3 flex items-start gap-2 text-[.82rem] leading-relaxed ${dark ? "text-[#cbb392]" : "text-[#a16024]"}`}
      >
        <ZoomIn className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        <span>
          <strong className={`font-extrabold ${dark ? "text-[#e8cfa8]" : "text-[#8a4d12]"}`}>Notice:</strong> {notice}
        </span>
      </figcaption>
    </figure>
  );
}

/* ============================================================
   AtbStepper — the data-bearing workflow.
   ============================================================ */
export interface AtbStep {
  /** what just happened — the one-line trace caption */
  label: string;
  /** optional second line (why / what to carry forward) */
  detail?: string;
  /** the data-bearing visual for this step */
  frame: React.ReactNode;
}

function useReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

export function AtbStepper({
  title,
  steps,
  startAt = 0,
  className = "",
  dark = false,
}: {
  /** the question the trace answers, e.g. "What happens next?" */
  title: string;
  steps: AtbStep[];
  /** open on a specific step (reduced-motion rendering ignores this) */
  startAt?: number;
  className?: string;
  dark?: boolean;
}) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(reduce ? steps.length - 1 : startAt);
  const liveRef = useRef<HTMLParagraphElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const cur = steps[Math.min(idx, steps.length - 1)];

  const goto = (n: number) => setIdx(Math.max(0, Math.min(steps.length - 1, n)));

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goto(idx + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goto(idx - 1); }
    if (e.key === "Home") { e.preventDefault(); goto(0); }
    if (e.key === "End") { e.preventDefault(); goto(steps.length - 1); }
  };

  const frame = useMemo(() => cur.frame, [cur]);

  return (
    <div
      className={`card-warm mt-8 overflow-hidden ${className}`}
      style={dark ? { background: "rgba(20,12,4,.55)", borderColor: "rgba(233,215,191,.28)" } : undefined}
    >
      {/* header — the workflow verb chip */}
      <div
        className="flex items-center gap-2 px-5 pt-4"
        aria-hidden
      >
        <span
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[.6rem] font-black uppercase tracking-[.16em]"
          style={{ background: dark ? "rgba(245,200,137,.16)" : ATB_CALLOUT, color: ATB_HEAD }}
        >
          <GitBranch className="h-3 w-3" />
          Workflow
        </span>
        <p className={`text-[.9rem] font-extrabold ${dark ? "text-[#e8cfa8]" : "text-[#7c4a12]"}`}>{title}</p>
      </div>

      {/* the data-bearing frame */}
      <div className="px-5 pb-2 pt-3">{frame}</div>

      {/* live caption */}
      <p
        ref={liveRef}
        aria-live="polite"
        className={`px-5 text-[.86rem] font-bold leading-relaxed ${dark ? "text-[#e8cfa8]" : "text-[#a0410a]"}`}
      >
        <span className="font-mono-warm">[{idx + 1}/{steps.length}]</span> {cur.label}
        {cur.detail ? <span className={`block font-medium ${dark ? "text-[#cbb392]" : "text-[#7c4a12]"}`}>{cur.detail}</span> : null}
      </p>

      {/* controls — keyboard reachable, aria-pressed toggles */}
      <div
        ref={groupRef}
        role="group"
        aria-label={`${title} — step controls`}
        onKeyDown={onKey}
        className="flex flex-wrap items-center gap-2 px-5 pb-5 pt-3"
      >
        <button
          type="button"
          onClick={() => goto(idx - 1)}
          disabled={idx === 0}
          aria-label="Previous step"
          className="flex h-9 w-9 items-center justify-center rounded-xl border transition-transform duration-150 hover:-translate-y-0.5 disabled:opacity-40"
          style={{ borderColor: ATB_BORDER, background: dark ? "rgba(255,250,241,.08)" : ATB_PAPER, color: ATB_HEAD }}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <div className="flex flex-wrap items-center gap-1.5">
          {steps.map((s, i) => (
            <button
              key={i}
              type="button"
              aria-pressed={i === idx}
              aria-label={`Step ${i + 1}: ${s.label}`}
              onClick={() => goto(i)}
              className="h-8 min-w-8 rounded-lg px-2 font-mono-warm text-[.68rem] font-black transition-transform duration-150 hover:-translate-y-0.5"
              style={
                i === idx
                  ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
                  : { background: dark ? "rgba(255,250,241,.08)" : ATB_PAPER, color: ATB_HEAD, border: `1px solid ${ATB_BORDER}` }
              }
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goto(idx + 1)}
          disabled={idx === steps.length - 1}
          aria-label="Next step"
          className="flex h-9 w-9 items-center justify-center rounded-xl border transition-transform duration-150 hover:-translate-y-0.5 disabled:opacity-40"
          style={{ borderColor: ATB_BORDER, background: dark ? "rgba(255,250,241,.08)" : ATB_PAPER, color: ATB_HEAD }}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {/* reduced motion — the whole trace as a static list, final frame already shown */}
      {reduce ? (
        <ol role="list" className="border-t px-5 py-4 text-[.8rem]" style={{ borderColor: dark ? "rgba(233,215,191,.2)" : ATB_BORDER }}>
          {steps.map((s, i) => (
            <li key={i} role="listitem" className={`py-1 leading-relaxed ${dark ? "text-[#cbb392]" : "text-[#5b4a33]"}`}>
              <strong className="font-mono-warm">{i + 1}.</strong> {s.label}
            </li>
          ))}
        </ol>
      ) : null}

      {/* print — the entire trace, every frame, controls hidden */}
      <div className="atb-print-trace" aria-hidden>
        {steps.map((s, i) => (
          <div key={i} className="atb-print-frame">
            <p className="font-mono-warm text-[.72rem] font-black uppercase tracking-wider">Step {i + 1} — {s.label}</p>
            {s.frame}
          </div>
        ))}
      </div>

      <style jsx>{`
        .atb-print-trace { display: none; }
        @media print {
          .atb-print-trace { display: block; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   AtbExamCallout — the distinct assessment briefings (Quiz One,
   Quiz Two, the exam logistics). Never merged into one page.
   ============================================================ */
export function AtbExamCallout({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside
      className="card-warm mt-8 border-l-4 p-6"
      style={{ borderColor: ATB_PRIMARY, background: "linear-gradient(0deg, rgba(245,200,137,.16), rgba(245,200,137,.16)), #fffdf6" }}
      aria-label={`${tag} — ${title}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-2.5 py-1 text-[.6rem] font-black uppercase tracking-[.16em] text-white"
          style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
        >
          {tag}
        </span>
        <p className="text-[1.02rem] font-black text-[#7c4a12]">{title}</p>
      </div>
      <div className="mt-3 text-[.92rem] leading-relaxed text-[#2b2014]">{children}</div>
    </aside>
  );
}

/* ============================================================
   Shared frame primitives — the data-bearing cells every trace
   draws from. Array: index 0 left, value & index on separate rows.
   ============================================================ */
export type CellTone = "idle" | "active" | "done" | "compare" | "twin" | "broken" | "pivot" | "min" | "ghost";

const TONE_FILL: Record<CellTone, string> = {
  idle: "#fffdf6",
  active: "#f5c889",
  done: ATB_OLIVE,
  compare: "#f0e3cc",
  twin: ATB_OLIVE,
  broken: "#e7e0d4",
  pivot: "#df8a4f",
  min: "#f5c889",
  ghost: "transparent",
};
const TONE_INK: Record<CellTone, string> = {
  idle: ATB_INK,
  active: ATB_INK,
  done: "#ffffff",
  compare: ATB_INK,
  twin: "#ffffff",
  broken: "#8a8578",
  pivot: "#ffffff",
  min: ATB_INK,
  ghost: "#b3a68f",
};

export function AtbCells({
  values,
  tones,
  startIndex = 0,
  labels,
  size = "md",
}: {
  values: (string | number | null)[];
  tones?: CellTone[];
  startIndex?: number;
  /** per-cell footnote under the value row (e.g. pointer marks) */
  labels?: (string | null)[];
  size?: "sm" | "md";
}) {
  const w = size === "sm" ? 34 : 44;
  return (
    <div className="inline-flex flex-col gap-1" role="img" aria-label={`Array trace: ${values.map((v) => (v === null ? "empty" : v)).join(", ")}`}>
      {/* value row */}
      <div className="flex gap-1.5">
        {values.map((v, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-lg border font-mono-warm font-black ${size === "sm" ? "h-9 text-[.8rem]" : "h-11 text-[.95rem]"}`}
            style={{
              minWidth: w,
              background: TONE_FILL[tones?.[i] ?? "idle"],
              color: TONE_INK[tones?.[i] ?? "idle"],
              borderColor: ATB_BORDER,
            }}
          >
            {v === null ? "·" : v}
          </div>
        ))}
      </div>
      {/* index row — index 0 on the LEFT */}
      <div className="flex gap-1.5">
        {values.map((_, i) => (
          <div key={i} className="text-center font-mono-warm text-[.62rem] font-bold text-[#a16024]" style={{ minWidth: w }}>
            {startIndex + i}
          </div>
        ))}
      </div>
      {labels ? (
        <div className="flex gap-1.5">
          {labels.map((l, i) => (
            <div key={i} className="text-center text-[.66rem] font-extrabold text-[#7c9a3e]" style={{ minWidth: w }}>
              {l ?? ""}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** stack column — grows and shrinks ONLY at the top (top drawn at the top) */
export function AtbStackCol({
  items,
  note,
  tone = "active",
  height = 5,
}: {
  items: (string | number)[];
  note?: string;
  tone?: CellTone;
  height?: number;
}) {
  const pad = Math.max(0, height - items.length);
  return (
    <div className="inline-flex flex-col items-center gap-1" role="img" aria-label={`Stack from top: ${items.join(", ") || "empty"} — top of stack on top`}>
      <span className="text-[.62rem] font-black uppercase tracking-[.14em] text-[#b45309]">top ↓</span>
      <div className="flex flex-col gap-1">
        {items.map((v, i) => (
          <div
            key={i}
            className="flex h-10 items-center justify-center rounded-lg border font-mono-warm text-[.9rem] font-black"
            style={{
              minWidth: 76,
              background: i === items.length - 1 ? TONE_FILL[tone] : "#fffdf6",
              color: i === items.length - 1 ? TONE_INK[tone] : ATB_INK,
              borderColor: i === items.length - 1 ? ATB_PRIMARY : ATB_BORDER,
            }}
          >
            {v}
          </div>
        ))}
        {Array.from({ length: pad }).map((_, i) => (
          <div key={`p${i}`} className="h-10 rounded-lg border border-dashed" style={{ minWidth: 76, borderColor: ATB_BORDER }} />
        ))}
      </div>
      <span className="text-[.62rem] font-black uppercase tracking-[.14em] text-[#a16024]">base</span>
      {note ? <span className="mt-1 text-[.72rem] font-bold text-[#a16024]">{note}</span> : null}
    </div>
  );
}

/** queue row — enqueue at the REAR (right), dequeue at the FRONT (left); never rotated */
export function AtbQueueRow({
  items,
  tones,
  front = 0,
  size = "md",
}: {
  items: (string | number | null)[];
  tones?: CellTone[];
  /** index of the front pointer (dequeue happens here, leftmost) */
  front?: number;
  size?: "sm" | "md";
}) {
  const w = size === "sm" ? 34 : 44;
  return (
    <div className="inline-flex flex-col gap-1" role="img" aria-label={`Queue from front to rear: ${items.map((v) => (v === null ? "empty" : v)).join(", ")}`}>
      <div className="flex gap-1.5">
        {items.map((v, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-lg border font-mono-warm font-black ${size === "sm" ? "h-9 text-[.8rem]" : "h-11 text-[.95rem]"}`}
            style={{
              minWidth: w,
              background: TONE_FILL[tones?.[i] ?? (v === null ? "ghost" : "idle")],
              color: TONE_INK[tones?.[i] ?? (v === null ? "ghost" : "idle")],
              borderColor: i === front ? ATB_PRIMARY : ATB_BORDER,
            }}
          >
            {v === null ? "·" : v}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {items.map((_, i) => (
          <div key={i} className="text-center text-[.62rem] font-black" style={{ minWidth: w, color: i === front ? ATB_PRIMARY : "#a16024" }}>
            {i === front ? "front" : ""}
          </div>
        ))}
      </div>
      <div className="text-right text-[.62rem] font-black" style={{ color: "#a16024", alignSelf: "flex-end" }}>
        rear → enqueue
      </div>
    </div>
  );
}

/** a tiny stat pill used inside frames (e.g. comparisons: 3) */
export function AtbPill({ k, v, tone = "idle" }: { k: string; v: string | number; tone?: CellTone }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.7rem] font-extrabold"
      style={{
        borderColor: ATB_BORDER,
        background: tone === "active" ? ATB_CALLOUT : "#fffdf6",
        color: tone === "active" ? ATB_HEAD : "#5b4a33",
      }}
    >
      <span className="font-mono-warm opacity-60">{k}</span>
      <span className="font-mono-warm">{v}</span>
    </span>
  );
}
