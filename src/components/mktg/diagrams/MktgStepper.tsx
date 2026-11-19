"use client";

/* ============================================================
   MktgStepper — the ONE registered workflow machine for the
   marketing rebuild. Every lecture's data-bearing process flow
   renders through this component: state carries a real data
   trace from the corpus, and the final frame states the prose
   answer. Same UX grammar as the shelf's hand-built machines
   (play · next · reset, aria-live status).
   ============================================================ */

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { MK } from "./kit";

export interface StepDef {
  /** short step label */
  k: string;
  /** the step's prose line (corpus-grounded) */
  line: string;
  /** the data trace this state carries (numbers, names, outcomes) */
  trace?: string;
}

function useAutoStep(playing: boolean, step: number, max: number, ms: number, setStep: (f: (s: number) => number) => void, stop: () => void) {
  useEffect(() => {
    if (!playing) return;
    if (step >= max) {
      stop();
      return;
    }
    const t = window.setTimeout(() => setStep((s) => Math.min(s + 1, max)), ms);
    return () => window.clearTimeout(t);
  }, [playing, step, max, ms, setStep, stop]);
}

export function MktgStepper({
  title,
  chip,
  icon,
  steps,
  autoMs = 1600,
  traceLabel = "trace",
}: {
  title: string;
  chip?: string;
  icon: React.ReactNode;
  steps: StepDef[];
  autoMs?: number;
  traceLabel?: string;
}) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = useCallback(() => setPlaying(false), []);
  useAutoStep(playing, step, steps.length - 1, autoMs, setStep, stop);

  const cur = steps[step];
  const msg = `Step ${step + 1} of ${steps.length} · ${cur.k} — ${cur.line}${cur.trace ? ` · ${traceLabel}: ${cur.trace}` : ""}`;

  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg,rgba(15,118,110,.16),rgba(169,125,44,.10))", color: MK.teal }}
        >
          {icon}
        </span>
        <h3 className="text-xl font-bold md:text-2xl" style={{ color: MK.ink }}>
          {title}
        </h3>
        {chip ? <span className="chip">{chip}</span> : null}
      </div>

      <div className="mt-4 rounded-2xl p-4" style={{ background: "linear-gradient(165deg,#16211e 0%,#1f2b2b 60%,#1a2926 100%)", border: "1px solid rgba(15,118,110,.32)" }}>
        {/* step dots */}
        <div className="flex items-center gap-1.5 sm:gap-2" aria-hidden>
          {steps.map((s, i) => (
            <motion.span
              key={s.k}
              className="flex-1 basis-0 whitespace-nowrap rounded-md px-1 py-1 text-center text-[.58rem] font-extrabold uppercase tracking-wide sm:text-[.62rem]"
              animate={{
                scale: i === step ? 1.06 : 1,
                opacity: i <= step ? 1 : 0.45,
              }}
              style={
                i === step
                  ? { background: MK.gold, color: "#33260b" }
                  : { background: "rgba(15,118,110,.14)", color: i < step ? "#9fd8cd" : "#7ea99f" }
              }
            >
              {s.k}
            </motion.span>
          ))}
        </div>
        {/* progress */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(15,118,110,.18)" }} aria-hidden>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)" }}
            initial={false}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 160, damping: 24 }}
          />
        </div>
        {/* current frame */}
        <div className="mt-4 min-h-[6.6rem]">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <p className="text-xl font-bold md:text-2xl" style={{ color: "#e9f2ee" }}>
                {cur.k}
              </p>
              <p className="mt-1.5 max-w-xl text-[.92rem] leading-relaxed" style={{ color: "#9fbcb4" }}>
                {cur.line}
              </p>
              {cur.trace ? (
                <p className="mt-2.5 inline-block rounded-lg px-2.5 py-1.5 font-mono text-[.78rem] font-bold" style={{ background: "rgba(227,194,107,.12)", color: MK.gold }}>
                  {traceLabel}: {cur.trace}
                </p>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* controls */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => (playing ? setPlaying(false) : (setStep(0), setPlaying(true)))}
          aria-label={playing ? "Pause the workflow" : "Play the workflow"}
          className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg,#0f766e,#0b5d57)", color: "#f0fdfa" }}
        >
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}
          {playing ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          aria-label="Next step"
          className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: MK.paper, color: MK.ink, border: `1px solid ${MK.line}` }}
        >
          Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setStep(0);
          }}
          aria-label="Reset the workflow"
          className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          style={{ background: MK.paper, color: MK.ink, border: `1px solid ${MK.line}` }}
        >
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Reset
        </button>
      </div>
      <p aria-live="polite" className="mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 font-mono text-[.85rem] font-bold" style={{ background: "#edf5f2", border: "1px dashed #9fd0c6", color: MK.teal }}>
        {msg}
      </p>
    </div>
  );
}
