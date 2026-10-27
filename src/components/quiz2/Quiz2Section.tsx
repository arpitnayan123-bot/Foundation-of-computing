"use client";

/* ============================================================
   QUIZ 2 — the landing strip.

   A thin, premium one-row strip mounted ABOVE "Pick a shelf":
   a live countdown aimed at the NEXT paper, and the door into
   the war room (#/quiz2). Nothing else lives here — the full
   schedule, syllabus slivers and training all sit inside the
   war room, one click away. It reads nothing from the shelves
   and mutates nothing on them.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import { AlarmClock, ArrowRight, Flame, ListChecks } from "lucide-react";
import { useNextQuizCountdown, pad2 } from "./use-quiz2";

const EASE = [0.22, 1, 0.36, 1] as const;

function Unit({ v, l, urgent }: { v: string; l: string; urgent?: boolean }) {
  return (
    <span className="flex items-baseline gap-0.5">
      <span
        className={`font-mono text-[1.02rem] font-black leading-none tabular-nums sm:text-[1.15rem] ${
          urgent ? "text-[#ffb4a8]" : "text-[#f7ecdd]"
        }`}
      >
        {v}
      </span>
      <span className="text-[.56rem] font-extrabold uppercase tracking-[.14em] text-[#8d7b63]">{l}</span>
    </span>
  );
}

export function Quiz2Section() {
  const { parts: countdown, target: nextTarget } = useNextQuizCountdown();

  const label = nextTarget
    ? `${nextTarget.short} begins · ${nextTarget.dateLabel}, ${nextTarget.window}`
    : countdown.done
      ? "the window is open — go get it"
      : "Quiz 2";

  return (
    <section id="quiz2" aria-label="Quiz 2 — live countdown" className="relative mx-auto w-full max-w-5xl scroll-mt-20 px-4 pt-16 sm:px-6 md:pt-20">
      <motion.a
        href="#/quiz2"
        onClick={() => window.scrollTo(0, 0)}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="quiz2-strip group relative flex flex-wrap items-center gap-x-4 gap-y-2.5 overflow-hidden rounded-2xl border border-[#ef444426] bg-gradient-to-r from-[#170c0e]/95 via-[#110a0c]/95 to-[#0d0709]/95 px-4 py-3 shadow-[0_24px_70px_-42px_rgba(239,68,68,.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ef444455] hover:shadow-[0_30px_80px_-40px_rgba(239,68,68,.7)] sm:gap-x-5 sm:px-6 sm:py-3.5"
        aria-label={`Quiz 2 war room — ${label}. ${countdown.done ? "The window is open" : `${countdown.days} days ${countdown.hours} hours ${countdown.mins} minutes ${countdown.secs} seconds until the next paper`}. Enter the war room.`}
      >
        {/* hairline top light */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-70"
          style={{ background: "linear-gradient(90deg, transparent, #ef4444aa, transparent)" }}
        />
        {/* ambient wash */}
        <span aria-hidden className="pointer-events-none absolute -left-10 top-1/2 h-24 w-40 -translate-y-1/2 rounded-full bg-[#ef444412] blur-2xl" />

        {/* sigil */}
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "linear-gradient(135deg,#ef4444,#b91c1c)", boxShadow: "0 10px 26px -12px rgba(239,68,68,.9)" }}
        >
          <ListChecks className="h-4 w-4 text-[#fff5f0]" />
        </span>

        {/* the label */}
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="flex items-center gap-2 text-[.58rem] font-extrabold uppercase tracking-[.22em] text-[#fca5a5]">
            <span className="quiz2-pulse-dot h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
            quiz 2 · live countdown
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 truncate text-[.8rem] font-bold text-[#e9d7bf]">
            <AlarmClock aria-hidden className="h-3.5 w-3.5 shrink-0 text-[#ef4444]" />
            {label}
          </span>
        </span>

        {/* the clock */}
        <span className="ml-auto flex items-center gap-2.5" role="timer" aria-live="off">
          {countdown.done ? (
            <span className="flex items-center gap-1.5 rounded-full border border-[#ef444455] bg-[#ef444414] px-3 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.16em] text-[#ffb4a8]">
              <Flame aria-hidden className="h-3 w-3" />
              it&apos;s quiz time
            </span>
          ) : (
            <>
              <Unit v={String(countdown.days)} l="d" urgent />
              <span aria-hidden className="h-4 w-px bg-white/10" />
              <Unit v={pad2(countdown.hours)} l="h" urgent />
              <span aria-hidden className="h-4 w-px bg-white/10" />
              <Unit v={pad2(countdown.mins)} l="m" urgent />
              <span aria-hidden className="h-4 w-px bg-white/10" />
              <Unit v={pad2(countdown.secs)} l="s" urgent />
            </>
          )}
        </span>

        {/* the door */}
        <span className="quiz2-cta flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[.62rem] font-black uppercase tracking-[.16em] text-[#fff5f0] shadow-[0_12px_32px_-14px_rgba(239,68,68,.9)] transition-transform group-hover:scale-[1.04] group-active:scale-[.97]">
          War room
          <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </motion.a>
    </section>
  );
}
