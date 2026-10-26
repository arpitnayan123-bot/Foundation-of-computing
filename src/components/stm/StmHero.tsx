"use client";

/* ============================================================
   StmHero — shelf 05 of THE ATLAS.

   "Statistics for Managers" — the lecture sequence hero. One
   compact row per lecture: number badge, title, read-check.
   The notes below open with a matching "Statistics for
   Managers Lecture N" band (see StmLectureHead in StmApp).
   Palette: deep violet with a soft gold counterpoint on ivory
   paper. Every figure is computed, not memorised.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Check, PenLine, Search, Sigma } from "lucide-react";
import { STM_LECTURES } from "@/components/stm/lectures";
import { Reveal } from "@/components/notes/ui";
import type { ClarityStatus } from "@/lib/clarity";

const VIOLET = "#6d28d9";
const VIOLET_BRIGHT = "#8b5cf6";
const GOLD = "#ca8a04";
const GOLD_LITE = "#e6cd7f";
const CHIP_BG = "#efe9fa";

/* floating study shapes — tag, bubble, star, ring */
const HERO_SHAPES = [
  { kind: "tag", top: "14%", left: "5%", size: 56, dur: 7.4, delay: 0, rot: -10, color: VIOLET },
  { kind: "bubble", top: "66%", left: "8%", size: 50, dur: 8.6, delay: 0.8, rot: 8, color: GOLD },
  { kind: "star", top: "18%", left: "88%", size: 52, dur: 7.9, delay: 0.4, rot: 6, color: GOLD_LITE },
  { kind: "ring", top: "62%", left: "90%", size: 48, dur: 8.9, delay: 1.4, rot: -6, color: VIOLET_BRIGHT },
  { kind: "tag", top: "40%", left: "3%", size: 42, dur: 9.3, delay: 2, rot: 5, color: GOLD },
  { kind: "bubble", top: "82%", left: "46%", size: 40, dur: 8.1, delay: 1.1, rot: -8, color: VIOLET_BRIGHT },
] as const;

function HeroShape({ b }: { b: (typeof HERO_SHAPES)[number] }) {
  const s = b.size;
  const paths: Record<string, React.ReactNode> = {
    tag: (
      <>
        <path d={`M ${s * 0.42} 3 L ${s - 3} ${s * 0.12} L ${s * 0.88} ${s * 0.62} L ${s * 0.34} ${s * 0.5} Z`} />
        <circle cx={s * 0.74} cy={s * 0.26} r={2.4} />
      </>
    ),
    bubble: <path d={`M 4 5 h ${s - 8} v ${s * 0.42} h -${s * 0.42} l -${s * 0.16} ${s * 0.2} v -${s * 0.2} h -${s * 0.26} Z`} />,
    star: <path d={`M ${s / 2} 3 L ${s * 0.62} ${s * 0.34} L ${s - 3} ${s * 0.36} L ${s * 0.7} ${s * 0.58} L ${s * 0.8} ${s * 0.9} L ${s / 2} ${s * 0.7} L ${s * 0.2} ${s * 0.9} L ${s * 0.3} ${s * 0.58} L 3 ${s * 0.36} L ${s * 0.38} ${s * 0.34} Z`} />,
    ring: (
      <>
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.34} />
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.18} strokeDasharray="3 4" />
      </>
    ),
  };
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute"
      style={{ top: b.top, left: b.left, rotate: b.rot, opacity: 0.5 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
    >
      <svg width={s} height={s * 0.8} viewBox={`0 0 ${s} ${s * 0.8}`} fill="none" stroke={b.color} strokeWidth={2}>
        {paths[b.kind]}
      </svg>
    </motion.div>
  );
}

/* the hero's passive clarity dot — mirrors the band's pill
   (violet = clear, gold = not-clear-yet) without stealing focus */
function ClarityDot({ status }: { status: ClarityStatus }) {
  const clear = status === "clear";
  return (
    <motion.span
      role="img"
      aria-label={clear ? "Lecture marked clear" : "Lecture marked not-clear-yet"}
      title={clear ? "Marked clear — flip it on the lecture band" : "Marked not-clear-yet — flip it on the lecture band"}
      initial={{ scale: 0.4, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 340, damping: 18 }}
      className="h-2.5 w-2.5 shrink-0 rounded-full"
      style={{
        background: clear ? "#8b5cf6" : "#e0b64a",
        boxShadow: clear ? "0 0 0 3px rgba(139,92,246,.18)" : "0 0 0 3px rgba(224,182,74,.2)",
      }}
    />
  );
}

export function StmHero({
  activeId,
  onSelect,
  onPractice,
  seen,
  clarity,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  onPractice: () => void;
  seen: ReadonlySet<string>;
  clarity: Record<string, ClarityStatus>;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) return STM_LECTURES;
    return STM_LECTURES.filter((l) => {
      const hay = [
        `lecture ${l.n}`,
        l.code.toLowerCase(),
        l.title.toLowerCase(),
        ...l.chapters.map((c) => c.label.toLowerCase()),
      ].join(" ");
      return words.every((w) => hay.includes(w));
    });
  }, [q]);

  return (
    <header className="relative flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-16 sm:pb-16">
      {/* ambient washes — violet & gold on ivory */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(139,92,246,.16)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(202,138,4,.14)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(109,40,217,.10)" }} />
      </div>

      {/* animated backdrop — the bell curve drawing itself, pulse points at μ and μ±σ */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M -30 560 C 230 556 350 540 470 400 C 540 318 555 148 600 148 C 645 148 660 318 730 400 C 850 540 970 556 1230 560"
          fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {[
          { x: 470, y: 400 }, // μ−σ
          { x: 600, y: 148 }, // μ
          { x: 730, y: 400 }, // μ+σ
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={VIOLET_BRIGHT} strokeWidth={2}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
      </svg>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {HERO_SHAPES.map((b, i) => (
          <HeroShape key={i} b={b} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <Sigma className="h-3.5 w-3.5" />
            Shelf 05 · Statistics for Managers · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#2b1d42] md:text-7xl">
            Statistics for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${VIOLET_BRIGHT},${VIOLET} 45%,${GOLD})` }}
            >
              Managers
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto mt-4 h-px w-24" style={{ background: `linear-gradient(90deg,transparent,${VIOLET_BRIGHT},transparent)` }} />
        </Reveal>

        {/* THE LECTURE SEQUENCE — search it, pick a lecture, its notes appear below */}
        <Reveal delay={300}>
          <div className="mx-auto mt-6 w-full max-w-3xl text-left">
            <label htmlFor="stm-lecture-search" className="sr-only">
              Search the lecture sequence
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#ca8a04]" aria-hidden />
              <input
                id="stm-lecture-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the sequence — try “7”, “Bayes”, or “Marada”…"
                autoComplete="off"
                className="w-full rounded-2xl border border-[#e6e0f2] bg-[#f9f7fc]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#2b1d42] shadow-[0_10px_30px_-14px_rgba(43,29,66,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#ca8a04] focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/40"
              />
            </div>

            {filtered.length > 0 ? (
              <ol
                className="scrollbar-thin mt-3 grid max-h-[19rem] gap-1.5 overflow-y-auto pr-1 sm:grid-cols-2"
                aria-label="Lecture sequence — pick a lecture to open its notes below"
              >
                {filtered.map((l) => {
                  const isActive = l.id === activeId;
                  const readCount = l.chapters.filter((c) => seen.has(c.id)).length;
                  const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                  const mark = clarity[l.id];
                  return (
                    <li key={l.id} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => onSelect(l.id)}
                        aria-pressed={isActive}
                        title={l.title}
                        className={`group flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-all duration-200 ${
                          isActive
                            ? "border-[#6d28d9] bg-white shadow-[0_12px_30px_-16px_rgba(109,40,217,.5)] ring-2 ring-[#8b5cf6]/25"
                            : "border-[#e6e0f2]/80 bg-[#f9f7fc]/70 hover:-translate-y-0.5 hover:border-[#d4c8ec] hover:bg-white hover:shadow-[0_10px_26px_-18px_rgba(43,29,66,.45)]"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[.78rem] font-black tabular-nums ${isActive ? "text-white" : ""}`}
                          style={
                            isActive
                              ? { background: `linear-gradient(135deg,${VIOLET_BRIGHT},${VIOLET})`, boxShadow: "0 5px 12px -5px rgba(109,40,217,.6)" }
                              : { background: CHIP_BG, color: VIOLET }
                          }
                        >
                          {l.n ?? "·"}
                        </span>
                        <span className={`min-w-0 flex-1 truncate text-[.86rem] font-bold leading-tight ${isActive ? "text-[#6d28d9]" : "text-[#2b1d42]"}`}>
                          {l.title}
                        </span>
                        {mark ? <ClarityDot status={mark} /> : null}
                        {allRead ? (
                          <Check className="h-3.5 w-3.5 shrink-0" style={{ color: "#5f9e58" }} aria-label="Every chapter read" />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p
                className="mt-4 rounded-2xl border border-dashed border-[#e6e0f2] bg-[#f9f7fc]/70 p-4 text-center text-[.82rem] font-semibold text-[#8f7fa5]"
                role="status"
              >
                No lecture matches “{query}” — try a number, a topic (“Bayes”), or clear the search.
              </p>
            )}

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={onPractice}
                title="The practice hub — pen-paper exam windows with instant checking"
                className="group inline-flex items-center gap-2 rounded-full border border-[#e6e0f2] bg-[#f9f7fc] px-7 py-3 text-sm font-bold text-[#5b21b6] shadow-sm transition hover:bg-[#f1ecfa]"
              >
                <PenLine className="h-4 w-4 text-[#6d28d9] transition-transform duration-300 group-hover:-rotate-12" />
                Test my knowledge
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#notes-top" aria-label="Scroll to the lecture notes" className="anim-bob rounded-full border border-[#e6e0f2] bg-[#f9f7fc]/80 p-3 text-[#6d28d9]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
