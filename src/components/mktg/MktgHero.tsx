"use client";

/* ============================================================
   MktgHero — shelf 06 of THE ATLAS.

   "Principles of Marketing" — the lecture sequence hero. Every
   lecture card carries its "Lecture N" eyebrow, and the notes
   below open with a matching "Principles of Marketing Lecture N"
   band (see MktgLectureHead in MktgApp). Palette: Boutique Teal
   & Champagne. All facts from /upload/marketing-lectures.txt.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, BookOpen, BookOpenCheck, Check, Megaphone, PenLine, Search, Users } from "lucide-react";
import { MKTG_LECTURES, MKTG_ALL_CHAPTER_IDS } from "@/components/mktg/lectures";
import { MKTG_EXAM_GROUPS } from "@/components/mktg/questions";
import { Reveal } from "@/components/notes/ui";

const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const GOLD = "#a97d2c";
const GOLD_LITE = "#e3c26b";

/* floating boutique shapes — tag, bubble, star, ring */
const HERO_SHAPES = [
  { kind: "tag", top: "14%", left: "5%", size: 56, dur: 7.4, delay: 0, rot: -10, color: TEAL },
  { kind: "bubble", top: "66%", left: "8%", size: 50, dur: 8.6, delay: 0.8, rot: 8, color: GOLD },
  { kind: "star", top: "18%", left: "88%", size: 52, dur: 7.9, delay: 0.4, rot: 6, color: GOLD_LITE },
  { kind: "ring", top: "62%", left: "90%", size: 48, dur: 8.9, delay: 1.4, rot: -6, color: TEAL_BRIGHT },
  { kind: "tag", top: "40%", left: "3%", size: 42, dur: 9.3, delay: 2, rot: 5, color: GOLD },
  { kind: "bubble", top: "82%", left: "46%", size: 40, dur: 8.1, delay: 1.1, rot: -8, color: TEAL_BRIGHT },
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

export function MktgHero({
  activeId,
  onSelect,
  onPractice,
  seen,
  totalQuestions,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  onPractice: () => void;
  seen: ReadonlySet<string>;
  totalQuestions: number;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) return MKTG_LECTURES;
    return MKTG_LECTURES.filter((l) => {
      const hay = [
        l.n ? `lecture ${l.n}` : "recap",
        l.code.toLowerCase(),
        l.title.toLowerCase(),
        l.blurb.toLowerCase(),
        ...l.chapters.map((c) => `${c.label} ${c.desc}`.toLowerCase()),
      ].join(" ");
      return words.every((w) => hay.includes(w));
    });
  }, [q]);

  return (
    <header id="top" className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16">
      {/* ambient washes — teal & champagne on ivory */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(20,184,166,.16)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(227,194,107,.18)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(15,118,110,.10)" }} />
      </div>

      {/* animated backdrop — a demand curve rising, with pulse points */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M -30 500 C 220 470 300 300 540 330 C 760 356 880 200 1230 140"
          fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {[
          { x: 300, y: 380 },
          { x: 540, y: 330 },
          { x: 940, y: 190 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={TEAL} strokeWidth={2}
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
            <Megaphone className="h-3.5 w-3.5" />
            Shelf 06 · Principles of Marketing · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#1f2b2b] md:text-7xl">
            Principles of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${TEAL_BRIGHT},${TEAL} 45%,${GOLD})` }}
            >
              Marketing
            </span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#5f7472]">
            Why do people buy — and why do they keep buying? From the chai counter to the messy
            middle of a purchase decision, from anticipation to the four cognitive biases: this
            course, drawn as living machines — value equations you can balance, gaps you can
            widen, biases you can watch fire.
          </p>
        </Reveal>

        {/* THE LECTURE SEQUENCE — search it, pick a lecture, its notes appear below */}
        <Reveal delay={300}>
          <div className="mx-auto mt-8 w-full max-w-3xl text-left">
            <label htmlFor="mktg-lecture-search" className="sr-only">
              Search the lecture sequence
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#a97d2c]" aria-hidden />
              <input
                id="mktg-lecture-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the sequence — try “5”, “STP”, or “biases”…"
                autoComplete="off"
                className="w-full rounded-2xl border border-[#e3ddcf] bg-[#fdfcfa]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#1f2b2b] shadow-[0_10px_30px_-14px_rgba(31,43,43,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#a97d2c] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]/40"
              />
            </div>

            {filtered.length > 0 ? (
              <ol
                className="scrollbar-thin mt-3 grid max-h-[23rem] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2"
                aria-label="Lecture sequence — pick a lecture to open its notes below"
              >
                {filtered.map((l) => {
                  const isActive = l.id === activeId;
                  const readCount = l.chapters.filter((c) => seen.has(c.id)).length;
                  const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                  return (
                    <li key={l.id} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => onSelect(l.id)}
                        aria-pressed={isActive}
                        className={`group flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${
                          isActive
                            ? "border-[#0f766e] bg-white shadow-[0_16px_40px_-18px_rgba(15,118,110,.45)] ring-2 ring-[#14b8a6]/25"
                            : "border-[#e3ddcf] bg-[#fdfcfa]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(31,43,43,.4)]"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`}
                          style={
                            isActive
                              ? { background: `linear-gradient(135deg,${TEAL_BRIGHT},${TEAL})`, boxShadow: "0 6px 14px -6px rgba(15,118,110,.6)" }
                              : { background: "#e7f2ef", color: TEAL }
                          }
                        >
                          {l.code}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="text-[.58rem] font-extrabold uppercase tracking-[.18em]" style={{ color: GOLD }}>
                              {l.n ? `Lecture ${l.n}` : "Recap"}
                            </span>
                            {allRead ? (
                              <Check className="h-3.5 w-3.5" style={{ color: "#5f9e58" }} aria-label="Every chapter read" />
                            ) : null}
                            <span className="ml-auto font-mono text-[.6rem] font-bold text-[#a97d2c]">
                              {readCount}/{l.chapters.length} read
                            </span>
                          </span>
                          <span className={`mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#0f766e]" : "text-[#1f2b2b]"}`}>
                            {l.title}
                          </span>
                          <span className="mt-1 block text-[.76rem] leading-snug text-[#5f7472]">{l.blurb}</span>
                          <span className="mt-2 flex flex-wrap gap-1.5">
                            {l.chapters.map((c) => (
                              <span key={c.id} className="rounded-full border border-[#dbeae5] bg-[#f4faf8] px-2 py-0.5 text-[.62rem] font-bold text-[#0f5f58]">
                                {c.label}
                              </span>
                            ))}
                          </span>
                        </span>
                        {isActive ? (
                          <span className="ml-0.5 shrink-0 self-center rounded-full bg-[#0f766e]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#0f766e]">
                            reading
                          </span>
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p
                className="mt-4 rounded-2xl border border-dashed border-[#dbeae5] bg-[#fdfcfa]/70 p-4 text-center text-[.82rem] font-semibold text-[#8aa09b]"
                role="status"
              >
                No lecture matches “{query}” — try a number, a topic (“positioning”), or clear the search.
              </p>
            )}

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={onPractice}
                title="The practice hub — pen-paper exam windows with instant checking"
                className="group inline-flex items-center gap-2 rounded-full border border-[#e3ddcf] bg-[#fdfcfa] px-7 py-3 text-sm font-bold text-[#0f5f58] shadow-sm transition hover:bg-[#eef7f4]"
              >
                <PenLine className="h-4 w-4 text-[#0f766e] transition-transform duration-300 group-hover:-rotate-12" />
                Test my knowledge
              </button>
              <span className="text-[.64rem] font-bold uppercase tracking-[.16em] text-[#8aa09b]">
                pen-paper practice · {totalQuestions} questions · {MKTG_EXAM_GROUPS.length} exam windows
              </span>
            </div>
          </div>
        </Reveal>

        {/* course meta — instructors / reference text */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          <Reveal delay={360}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><Users className="h-3.5 w-3.5" /> Instructors</span>
              <p className="mt-3 text-lg font-extrabold text-[#1f2b2b]">Dr. Anuj Kapoor · Dr. Anush Pal Kapoor</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#5f7472]">
                School of Management &amp; Entrepreneurship — IIT Jodhpur
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a7a5c]">
                Consumer insights, market research &amp; innovation · PhD in neuro-marketing and
                multi-sensory experience (FMS, University of Delhi)
              </p>
              <p className="mt-1 text-[.78rem] font-semibold text-[#0f766e]">
                six years of industry across HDFC, Michael Page &amp; Nokia
              </p>
            </div>
          </Reveal>
          <Reveal delay={430}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><BookOpen className="h-3.5 w-3.5" /> Reference</span>
              <p className="mt-3 text-lg font-extrabold leading-snug text-[#1f2b2b]">
                Kotler · Keller · Sheth — 2025 edition
              </p>
              <p className="mt-2 text-[.82rem] text-[#5f7472]">Marketing Management, Indian context</p>
              <p className="mt-3 text-[.78rem] leading-relaxed text-[#8a7a5c]">
                Every idea in this course is taught through brands you already know — from chai
                counters to Camellias.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={560}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              [String(MKTG_LECTURES.length), "lectures"],
              [String(MKTG_ALL_CHAPTER_IDS.length), "chapters"],
              [String(totalQuestions), "exam questions"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p
                  className="bg-clip-text text-3xl font-black text-transparent"
                  style={{ backgroundImage: `linear-gradient(120deg,${TEAL_BRIGHT},${TEAL} 55%,${GOLD})` }}
                >
                  {n}
                </p>
                <p className="text-[.72rem] font-bold uppercase tracking-[.18em] text-[#8a7a5c]">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#notes-top" aria-label="Scroll to the lecture notes" className="anim-bob rounded-full border border-[#dbeae5] bg-[#fdfcfa]/80 p-3 text-[#0f766e]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
