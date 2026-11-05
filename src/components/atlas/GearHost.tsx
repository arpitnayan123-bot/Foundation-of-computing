"use client";

/* ============================================================
   THE RADIO MARK — the Revision Radio's face, kept deliberately
   simple. No characters, no dioramas, no costume changes: one
   clean equalizer that breathes while the atlas speaks.

   · idle      — a still AudioLines mark, softly lit
   · composing — a thinking shimmer (the briefing is being written)
   · speaking  — a five-bar equalizer, tempo follows the speed dial
   · paused    — the bars freeze mid-breath
   · done      — a quiet check

   prefers-reduced-motion stills everything; the state colour stays.
   Nothing here touches audio; the radio owns playback.
   ============================================================ */

import React from "react";
import { AudioLines, Check, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export type HostPhase = "idle" | "composing" | "speaking" | "paused" | "done";

const AMBER = "#f59e0b";
const DIM = "#8d7b63";

const STATUS: Record<HostPhase, { label: string; color: string }> = {
  idle: { label: "STANDING BY", color: DIM },
  composing: { label: "WRITING THE BRIEFING", color: AMBER },
  speaking: { label: "ON AIR", color: AMBER },
  paused: { label: "PAUSED", color: DIM },
  done: { label: "BRIEFING DONE", color: "#a3b18a" },
};

/* one equalizer bar — height oscillates only while speaking */
function Bar({
  i,
  speaking,
  speed,
  reduced,
}: {
  i: number;
  speaking: boolean;
  speed: number;
  reduced: boolean;
}) {
  const peaks = [0.45, 0.8, 1, 0.66, 0.38];
  const peak = peaks[i] ?? 0.6;
  const period = Math.max(0.36, (0.72 - i * 0.06) / Math.max(0.75, speed));
  return (
    <motion.span
      aria-hidden
      className="w-[3px] rounded-full"
      style={{ background: "linear-gradient(180deg,#f5c889,#ea580c)" }}
      animate={
        speaking && !reduced
          ? { height: [`${peak * 42}%`, `${peak * 100}%`, `${peak * 58}%`, `${peak * 100}%`, `${peak * 42}%`] }
          : { height: `${peak * 26}%` }
      }
      transition={
        speaking && !reduced
          ? { duration: period, repeat: Infinity, ease: "easeInOut", delay: i * 0.07 }
          : { duration: 0.25 }
      }
    />
  );
}

/* ------------------------------------------------------------------ */
/* the stage — one strip, equalizer + status; compact = the orb face   */
/* ------------------------------------------------------------------ */

export function RadioStage({
  phase,
  speed = 1,
  compact = false,
}: {
  phase: HostPhase;
  speed?: number;
  compact?: boolean; // compact = the collapsed orb portrait
}) {
  const reduced = useReducedMotion() ?? false;
  const speaking = phase === "speaking";
  const status = STATUS[phase] ?? STATUS.idle;

  if (compact) {
    /* the orb: one mark, centred — still when idle, alive on air */
    return (
      <div className="relative flex h-full w-full items-center justify-center" data-phase={phase}>
        {speaking ? (
          <div className="flex h-7 items-end justify-center gap-[3px]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Bar key={i} i={i} speaking={speaking} speed={speed} reduced={reduced} />
            ))}
          </div>
        ) : phase === "composing" ? (
          <motion.span
            animate={reduced ? undefined : { rotate: 360 }}
            transition={reduced ? undefined : { duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="text-[#f5c889]"
          >
            <Loader2 className="h-6 w-6" strokeWidth={2.2} />
          </motion.span>
        ) : phase === "done" ? (
          <Check className="h-6 w-6 text-[#a3b18a]" strokeWidth={2.4} />
        ) : (
          <AudioLines
            className="h-6 w-6"
            strokeWidth={2.1}
            style={{ color: phase === "paused" ? DIM : "#cbb89a" }}
          />
        )}
      </div>
    );
  }

  /* the expanded strip: equalizer left, status right */
  return (
    <div
      className="relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-white/[.07] bg-black/40 px-4 py-3"
      data-phase={phase}
    >
      {/* a faint amber breath behind the bars — the only ornament */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 120% at 18% 50%, rgba(245,158,11,.10), transparent 70%)",
        }}
        animate={speaking && !reduced ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.45 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex h-8 w-16 items-end justify-start gap-[4px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <Bar key={i} i={i} speaking={speaking} speed={speed} reduced={reduced} />
        ))}
      </div>
      <span
        className="relative font-mono text-[.56rem] font-black uppercase tracking-[.22em]"
        style={{ color: status.color }}
      >
        {speaking && !reduced ? (
          <motion.span
            key="live"
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {status.label}
          </motion.span>
        ) : (
          status.label
        )}
      </span>
    </div>
  );
}
