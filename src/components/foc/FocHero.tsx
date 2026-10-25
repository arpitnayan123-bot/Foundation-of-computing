"use client";

/* ============================================================
   FocHero — shelf 01 of THE ATLAS.

   "Foundations of Computing" — the lecture sequence hero. Every
   lecture card carries its "Lecture N" eyebrow, and the notes
   below open with a matching "Foundations of Computing Lecture
   N" band (see FocLectureHead in FocApp). Palette: deep ember &
   gold on ivory paper. Thematic backdrop: the IPO pipeline —
   input → process → output — drawing itself across the hero.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Check, Compass, FlaskConical, PenLine, Search } from "lucide-react";
import { FOC_LECTURES, FOC_ALL_CHAPTER_IDS } from "@/components/foc/lectures";
import { EXAM_GROUPS } from "@/components/notes/questions";
import { Reveal } from "@/components/notes/ui";

const EMBER = "#c2410c";
const EMBER_BRIGHT = "#ea580c";
const GOLD = "#b45309";
const GOLD_LITE = "#f5c889";

export function FocHero({
  activeId,
  onSelect,
  onPractice,
  onOpenLab,
  seen,
  totalQuestions,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  onPractice: () => void;
  onOpenLab: () => void;
  seen: ReadonlySet<string>;
  totalQuestions: number;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) return FOC_LECTURES;
    return FOC_LECTURES.filter((l) => {
      const hay = [
        `lecture ${l.n}`,
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
      {/* ambient washes — ember & gold on ivory paper */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(234,88,12,.14)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(245,200,137,.20)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(194,65,12,.10)" }} />
      </div>

      {/* animated backdrop — the IPO pipeline drawing itself:
          input → process → output, with pulse nodes on the line */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M -30 480 C 140 465 190 395 260 380 C 360 358 460 345 560 335 C 700 322 840 235 960 205 C 1060 180 1140 172 1230 168"
          fill="none" stroke={GOLD} strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {[
          { x: 260, y: 380, label: "input", ly: 432 },
          { x: 560, y: 335, label: "process", ly: 387 },
          { x: 960, y: 205, label: "output", ly: 257 },
        ].map((p, i) => (
          <g key={p.label}>
            <motion.circle
              cx={p.x} cy={p.y} r={6} fill="none" stroke={EMBER} strokeWidth={2}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
              animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
            />
            <text
              x={p.x} y={p.ly} textAnchor="middle" fill={GOLD} fontSize={24} fontWeight={700}
              letterSpacing={5} opacity={0.42}
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto" style={{ background: "#f7ecdc" }}>
            <Compass className="h-3.5 w-3.5" />
            Shelf 01 · Foundations of Computing · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl">
            Foundations of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${EMBER_BRIGHT},${EMBER} 45%,${GOLD})` }}
            >
              Computing
            </span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b563d]">
            From the IPO model to object-oriented Python — input → process → output
            everywhere, four pillars under every solution, data climbed to wisdom, and
            CPython 3.12 running live in the page. Seventeen lectures, each drawn as
            machines you can run — not notes you memorise.
          </p>
        </Reveal>

        {/* THE LECTURE SEQUENCE — search it, pick a lecture, its notes appear below */}
        <Reveal delay={300}>
          <div className="mx-auto mt-8 w-full max-w-3xl text-left">
            <label htmlFor="foc-lecture-search" className="sr-only">
              Search the lecture sequence
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#b45309]" aria-hidden />
              <input
                id="foc-lecture-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the sequence — try “5”, “lists”, or “while”…"
                autoComplete="off"
                className="w-full rounded-2xl border border-[#ecd9bd] bg-[#fdf9f3]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#b45309] focus:outline-none focus:ring-2 focus:ring-[#ea580c]/40"
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
                            ? "border-[#c2410c] bg-white shadow-[0_16px_40px_-18px_rgba(194,65,12,.45)] ring-2 ring-[#ea580c]/25"
                            : "border-[#ecd9bd] bg-[#fdf9f3]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(62,44,29,.4)]"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`}
                          style={
                            isActive
                              ? { background: `linear-gradient(135deg,${EMBER_BRIGHT},${EMBER})`, boxShadow: "0 6px 14px -6px rgba(194,65,12,.6)" }
                              : { background: "#f7ecdc", color: EMBER }
                          }
                        >
                          {l.code}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <span className="text-[.58rem] font-extrabold uppercase tracking-[.18em]" style={{ color: GOLD }}>
                              Lecture {l.n}
                            </span>
                            {allRead ? (
                              <Check className="h-3.5 w-3.5" style={{ color: "#8fae5d" }} aria-label="Every chapter read" />
                            ) : null}
                            <span className="ml-auto font-mono text-[.6rem] font-bold text-[#b45309]">
                              {readCount}/{l.chapters.length} read
                            </span>
                          </span>
                          <span className={`mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#c2410c]" : "text-[#3e2c1d]"}`}>
                            {l.title}
                          </span>
                          <span className="mt-1 block text-[.76rem] leading-snug text-[#6b563d]">{l.blurb}</span>
                          <span className="mt-2 flex flex-wrap gap-1.5">
                            {l.chapters.map((c) => (
                              <span key={c.id} className="rounded-full border border-[#ecd9bd] bg-[#fbf0dd] px-2 py-0.5 text-[.62rem] font-bold text-[#8a4508]">
                                {c.label}
                              </span>
                            ))}
                          </span>
                        </span>
                        {isActive ? (
                          <span className="ml-0.5 shrink-0 self-center rounded-full bg-[#c2410c]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#c2410c]">
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
                className="mt-4 rounded-2xl border border-dashed border-[#ecd9bd] bg-[#fdf9f3]/70 p-4 text-center text-[.82rem] font-semibold text-[#a08568]"
                role="status"
              >
                No lecture matches “{query}” — try a number, a topic (“dictionaries”), or clear the search.
              </p>
            )}

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={onPractice}
                  title="The practice hub — pen-paper exam windows with instant checking"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#ecd9bd] bg-[#fdf9f3] px-7 py-3 text-sm font-bold text-[#8a4508] shadow-sm transition hover:bg-[#f9e8d2]"
                >
                  <PenLine className="h-4 w-4 text-[#c2410c] transition-transform duration-300 group-hover:-rotate-12" />
                  Test my knowledge
                </button>
                <button
                  type="button"
                  onClick={onOpenLab}
                  title="Open the Python Lab — real CPython 3.12, live in the page"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#e8b878] bg-transparent px-6 py-[.65rem] text-sm font-bold text-[#b45309] shadow-none transition hover:bg-[#fdf3e3] hover:text-[#c2410c]"
                >
                  <FlaskConical className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" style={{ color: EMBER }} />
                  Python Lab
                </button>
              </div>
              <span className="text-[.64rem] font-bold uppercase tracking-[.16em] text-[#a08568]">
                pen-paper practice · {totalQuestions} questions · {EXAM_GROUPS.length} exam windows
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={560}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              [String(FOC_LECTURES.length), "lectures"],
              [String(FOC_ALL_CHAPTER_IDS.length), "chapters"],
              [String(totalQuestions), "exam questions"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p
                  className="bg-clip-text text-3xl font-black text-transparent"
                  style={{ backgroundImage: `linear-gradient(120deg,${EMBER_BRIGHT},${EMBER} 55%,${GOLD})` }}
                >
                  {n}
                </p>
                <p className="text-[.72rem] font-bold uppercase tracking-[.18em] text-[#a08568]">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#notes-top" aria-label="Scroll to the lecture notes" className="anim-bob rounded-full border border-[#ecd9bd] bg-[#fdf9f3]/80 p-3 text-[#c2410c]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
