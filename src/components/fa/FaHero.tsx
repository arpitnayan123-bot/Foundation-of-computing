"use client";

/* ============================================================
   FaHero — shelf 03 of THE ATLAS.

   "Financial Accounting" — the lecture sequence hero. Each
   lecture is one compact row (number badge + title), and the
   notes below open with a matching "Financial Accounting
   Lecture N" band (see FaLectureHead in FaApp). Palette:
   emerald & sage on ivory paper. Sixteen lectures.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Check, PenLine, Scale, Search } from "lucide-react";
import { FA_LECTURES } from "@/components/fa/lectures";
import { Reveal } from "@/components/notes/ui";

const EMERALD = "#059669";
const EMERALD_BRIGHT = "#10b981";
const SAGE = "#6d9970";
const SAGE_LITE = "#a7d7b8";

/* floating ledger shapes — coin, ledger page, T-account, ring */
const HERO_SHAPES = [
  { kind: "coin", top: "14%", left: "5%", size: 56, dur: 7.4, delay: 0, rot: -10, color: EMERALD },
  { kind: "tacct", top: "66%", left: "8%", size: 50, dur: 8.6, delay: 0.8, rot: 8, color: SAGE },
  { kind: "ledger", top: "18%", left: "88%", size: 52, dur: 7.9, delay: 0.4, rot: 6, color: SAGE_LITE },
  { kind: "ring", top: "62%", left: "90%", size: 48, dur: 8.9, delay: 1.4, rot: -6, color: EMERALD_BRIGHT },
  { kind: "ledger", top: "40%", left: "3%", size: 42, dur: 9.3, delay: 2, rot: 5, color: SAGE },
  { kind: "coin", top: "82%", left: "46%", size: 40, dur: 8.1, delay: 1.1, rot: -8, color: EMERALD_BRIGHT },
] as const;

function HeroShape({ b }: { b: (typeof HERO_SHAPES)[number] }) {
  const s = b.size;
  const paths: Record<string, React.ReactNode> = {
    coin: (
      <>
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.3} />
        <path d={`M ${s / 2} ${s * 0.26} v ${s * 0.28}`} />
      </>
    ),
    tacct: (
      <>
        <path d={`M 3 5 h ${s - 6}`} />
        <path d={`M ${s / 2} 5 v ${s * 0.52}`} />
      </>
    ),
    ledger: (
      <>
        <rect x="4" y="3" width={s - 8} height={s * 0.62} rx="2.5" />
        <path d={`M ${s * 0.22} ${s * 0.24} h ${s * 0.56}`} />
        <path d={`M ${s * 0.22} ${s * 0.42} h ${s * 0.38}`} />
      </>
    ),
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

export function FaHero({
  activeId,
  onSelect,
  onPractice,
  seen,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  onPractice: () => void;
  seen: ReadonlySet<string>;
}) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    const words = q.split(/\s+/).filter(Boolean);
    if (words.length === 0) return FA_LECTURES;
    return FA_LECTURES.filter((l) => {
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
    <header id="top" className="relative flex min-h-[86vh] flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-16 sm:pb-16">
      {/* ambient washes — emerald & sage on ivory paper */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(16,185,129,.15)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(167,215,184,.20)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(5,150,105,.10)" }} />
      </div>

      {/* animated backdrop — a balance-scale beam that tilts, then levels */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        {/* pillar, fulcrum & base — the frame holds while the beam settles */}
        <g fill="none" stroke={SAGE} strokeWidth="2" strokeLinecap="round" opacity="0.55">
          <path d="M 588 216 L 600 192 L 612 216 Z" />
          <line x1="600" y1="216" x2="600" y2="430" />
          <line x1="546" y1="430" x2="654" y2="430" />
        </g>
        <motion.g
          style={{ transformBox: "fill-box", transformOrigin: "50% 18%" }}
          initial={{ rotate: -9 }}
          animate={{ rotate: [-9, 5, -2, 0] }}
          transition={{ duration: 2.8, ease: "easeInOut", delay: 0.5 }}
        >
          <g fill="none" stroke={SAGE} strokeWidth="2.5" strokeLinecap="round">
            <line x1="440" y1="210" x2="760" y2="210" />
            <line x1="440" y1="212" x2="440" y2="256" strokeWidth="1.6" />
            <line x1="760" y1="212" x2="760" y2="256" strokeWidth="1.6" />
            <path d="M 410 258 Q 440 284 470 258" strokeWidth="1.8" />
            <path d="M 730 258 Q 760 284 790 258" strokeWidth="1.8" />
          </g>
        </motion.g>
        {[
          { x: 440, y: 268 },
          { x: 600, y: 196 },
          { x: 760, y: 268 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={EMERALD} strokeWidth={2}
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
            <Scale className="h-3.5 w-3.5" />
            Shelf 03 · Financial Accounting · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl">
            Financial{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${EMERALD_BRIGHT},${EMERALD} 45%,${SAGE})` }}
            >
              Accounting
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto mt-4 h-px w-24" style={{ background: `linear-gradient(90deg,transparent,${EMERALD},transparent)` }} />
        </Reveal>

        {/* THE LECTURE SEQUENCE — search it, pick a lecture, its notes appear below */}
        <Reveal delay={300}>
          <div className="mx-auto mt-6 w-full max-w-3xl text-left">
            <label htmlFor="fa-lecture-search" className="sr-only">
              Search the lecture sequence
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#6d9970]" aria-hidden />
              <input
                id="fa-lecture-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the sequence — try “journal”, “Pearl”, or “8”…"
                autoComplete="off"
                className="w-full rounded-2xl border border-[#dbeae2] bg-[#f9fcfa]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#6d9970] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40"
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
                  return (
                    <li key={l.id} className="min-w-0">
                      <button
                        type="button"
                        onClick={() => onSelect(l.id)}
                        aria-pressed={isActive}
                        title={l.title}
                        className={`group flex w-full items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-all duration-200 ${
                          isActive
                            ? "border-[#059669] bg-white shadow-[0_12px_30px_-16px_rgba(5,150,105,.5)] ring-2 ring-[#10b981]/25"
                            : "border-[#dbeae2]/80 bg-[#f9fcfa]/70 hover:-translate-y-0.5 hover:border-[#c9dcd2] hover:bg-white hover:shadow-[0_10px_26px_-18px_rgba(62,44,29,.45)]"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[.78rem] font-black tabular-nums ${isActive ? "text-white" : ""}`}
                          style={
                            isActive
                              ? { background: `linear-gradient(135deg,${EMERALD_BRIGHT},${EMERALD})`, boxShadow: "0 5px 12px -5px rgba(5,150,105,.6)" }
                              : { background: "#e7f2ec", color: EMERALD }
                          }
                        >
                          {l.n ?? "·"}
                        </span>
                        <span className={`min-w-0 flex-1 truncate text-[.86rem] font-bold leading-tight ${isActive ? "text-[#047857]" : "text-[#3e2c1d]"}`}>
                          {l.title}
                        </span>
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
                className="mt-4 rounded-2xl border border-dashed border-[#dbeae2] bg-[#f9fcfa]/70 p-4 text-center text-[.82rem] font-semibold text-[#7d9a8b]"
                role="status"
              >
                No lecture matches “{query}” — try a number, a topic (“trial balance”), or clear the search.
              </p>
            )}

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={onPractice}
                title="The practice hub — pen-paper exam windows with instant checking"
                className="group inline-flex items-center gap-2 rounded-full border border-[#dbeae2] bg-[#f9fcfa] px-7 py-3 text-sm font-bold text-[#047857] shadow-sm transition hover:bg-[#e7f2ec]"
              >
                <PenLine className="h-4 w-4 text-[#059669] transition-transform duration-300 group-hover:-rotate-12" />
                Test my knowledge
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#notes-top" aria-label="Scroll to the lecture notes" className="anim-bob rounded-full border border-[#dbeae2] bg-[#f9fcfa]/80 p-3 text-[#059669]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
