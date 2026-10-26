"use client";

/* ============================================================
   EbhHero — shelf 04 of THE ATLAS.

   "Economic & Business History" — the lecture sequence hero.
   Every lecture card carries its "Lecture N" eyebrow, and the
   notes below open with a matching "Economic & Business History
   Lecture N" band (see EbhLectureHead in EbhApp). Palette:
   archive gold & ivory paper. Facts from the EBH course notes.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Check, Landmark, PenLine, Search } from "lucide-react";
import { EBH_LECTURES } from "@/components/ebh/lectures";
import { Reveal } from "@/components/notes/ui";
import type { ClarityStatus } from "@/lib/clarity";

/* archive gold, renamed from the MKTG teal/gold kit */
const BRASS = "#a16207";
const BRASS_BRIGHT = "#eab308";
const UMBER = "#854d0e";
const GOLD_LITE = "#ca8a4a";
const PAPER = "#faf7ef";
const PAPER_BORDER = "#e8e0cd";
const CHIP_BG = "#f2ecd9";

/* floating archive tokens — coin, charter, ledger, cog */
const HERO_TOKENS = [
  { kind: "coin", top: "14%", left: "5%", size: 54, dur: 7.4, delay: 0, rot: -10, color: BRASS },
  { kind: "charter", top: "66%", left: "8%", size: 48, dur: 8.6, delay: 0.8, rot: 8, color: UMBER },
  { kind: "cog", top: "18%", left: "88%", size: 52, dur: 7.9, delay: 0.4, rot: 6, color: GOLD_LITE },
  { kind: "ledger", top: "62%", left: "90%", size: 48, dur: 8.9, delay: 1.4, rot: -6, color: BRASS_BRIGHT },
  { kind: "coin", top: "40%", left: "3%", size: 40, dur: 9.3, delay: 2, rot: 5, color: UMBER },
  { kind: "charter", top: "82%", left: "46%", size: 40, dur: 8.1, delay: 1.1, rot: -8, color: BRASS_BRIGHT },
] as const;

function HeroToken({ b }: { b: (typeof HERO_TOKENS)[number] }) {
  const s = b.size;
  const paths: Record<string, React.ReactNode> = {
    coin: (
      <>
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.3} />
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.18} strokeDasharray="3 4" />
      </>
    ),
    charter: (
      <>
        <path d={`M ${s * 0.26} 4 h ${s * 0.42} a 3 3 0 0 1 3 3 v ${s * 0.5 - 10} a 3 3 0 0 1 -3 3 h -${s * 0.42} a 3 3 0 0 1 -3 -3 V 7 a 3 3 0 0 1 3 -3 Z`} />
        <line x1={s * 0.3} y1={s * 0.24} x2={s * 0.7} y2={s * 0.24} />
        <line x1={s * 0.3} y1={s * 0.36} x2={s * 0.7} y2={s * 0.36} />
        <line x1={s * 0.3} y1={s * 0.48} x2={s * 0.58} y2={s * 0.48} />
      </>
    ),
    cog: (
      <>
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.22} />
        <circle cx={s / 2} cy={s * 0.4} r={s * 0.08} />
        {[0, 60, 120].map((deg) => (
          <line
            key={deg}
            x1={s / 2 + s * 0.3 * Math.cos((deg * Math.PI) / 180)}
            y1={s * 0.4 + s * 0.3 * Math.sin((deg * Math.PI) / 180)}
            x2={s / 2 + s * 0.3 * Math.cos(((deg + 180) * Math.PI) / 180)}
            y2={s * 0.4 + s * 0.3 * Math.sin(((deg + 180) * Math.PI) / 180)}
          />
        ))}
      </>
    ),
    ledger: (
      <>
        <rect x={s * 0.22} y={s * 0.08} width={s * 0.56} height={s * 0.64} rx={2.5} />
        <line x1={s * 0.34} y1={s * 0.26} x2={s * 0.66} y2={s * 0.26} />
        <line x1={s * 0.34} y1={s * 0.4} x2={s * 0.66} y2={s * 0.4} />
        <line x1={s * 0.34} y1={s * 0.54} x2={s * 0.58} y2={s * 0.54} />
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
   (green = clear, amber = not-clear-yet) without stealing focus */
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
        background: clear ? "#8fae5d" : "#e0a274",
        boxShadow: clear
          ? "0 0 0 3px rgba(143,174,93,.18)"
          : "0 0 0 3px rgba(224,162,116,.18)",
      }}
    />
  );
}

export function EbhHero({
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
    if (words.length === 0) return EBH_LECTURES;
    return EBH_LECTURES.filter((l) => {
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
      {/* ambient washes — brass & sepia on ivory */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(234,179,8,.16)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(161,98,7,.15)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(124,98,72,.10)" }} />
      </div>

      {/* animated backdrop — a rising timeline, drawing itself left → right */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        {/* the archive's ruled baseline + era ticks */}
        <line x1="0" y1="508" x2="1200" y2="508" stroke="#dcc98e" strokeWidth={1.4} opacity={0.5} />
        {[120, 300, 480, 660, 840, 1020].map((x) => (
          <line key={x} x1={x} y1={502} x2={x} y2={514} stroke="#dcc98e" strokeWidth={1.2} opacity={0.4} />
        ))}
        {/* the century's rise, ruled in ink */}
        <motion.path
          d="M -30 470 C 180 430 320 468 540 380 C 760 296 900 330 1230 168"
          fill="none" stroke={UMBER} strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {/* three pulse points — scarcity, steam, empire */}
        {[
          { x: 180, y: 438 },
          { x: 540, y: 380 },
          { x: 940, y: 272 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={BRASS} strokeWidth={2}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
      </svg>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {HERO_TOKENS.map((b, i) => (
          <HeroToken key={i} b={b} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <Landmark className="h-3.5 w-3.5" />
            Shelf 04 · Economic &amp; Business History · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl">
            Economic &amp; Business{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(120deg,${BRASS_BRIGHT},${BRASS} 45%,${UMBER})` }}
            >
              History
            </span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto mt-4 h-px w-24" style={{ background: `linear-gradient(90deg,transparent,${BRASS},transparent)` }} />
        </Reveal>

        {/* THE LECTURE SEQUENCE — search it, pick a lecture, its notes appear below */}
        <Reveal delay={300}>
          <div className="mx-auto mt-6 w-full max-w-3xl text-left">
            <label htmlFor="ebh-lecture-search" className="sr-only">
              Search the lecture sequence
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#a16207]" aria-hidden />
              <input
                id="ebh-lecture-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the sequence — try “1886”, “guilds”, or “empire”…"
                autoComplete="off"
                className="w-full rounded-2xl border border-[#e8e0cd] bg-[#fbf8f0]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#a16207] focus:outline-none focus:ring-2 focus:ring-[#eab308]/40"
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
                            ? "border-[#a16207] bg-white shadow-[0_16px_40px_-18px_rgba(161,98,7,.5)] ring-2 ring-[#eab308]/25"
                            : "border-[#e8e0cd] bg-[#faf7ef]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(62,44,29,.4)]"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[.78rem] font-black tabular-nums ${isActive ? "text-white" : ""}`}
                          style={
                            isActive
                              ? { background: `linear-gradient(135deg,${BRASS_BRIGHT},${BRASS})`, boxShadow: "0 6px 14px -6px rgba(161,98,7,.6)" }
                              : { background: CHIP_BG, color: BRASS }
                          }
                        >
                          {l.n ?? "·"}
                        </span>
                        <span className={`min-w-0 flex-1 truncate text-[.86rem] font-bold leading-tight ${isActive ? "text-[#a16207]" : "text-[#3e2c1d]"}`}>
                          {l.title}
                        </span>
                        {mark ? <ClarityDot status={mark} /> : null}
                        {allRead ? (
                          <Check className="h-3.5 w-3.5 shrink-0" style={{ color: "#8fae5d" }} aria-label="Every chapter read" />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p
                className="mt-4 rounded-2xl border border-dashed border-[#e8e0cd] bg-[#faf7ef]/70 p-4 text-center text-[.82rem] font-semibold text-[#a1876a]"
                role="status"
              >
                No lecture matches “{query}” — try a number, a topic (“guilds”), or clear the search.
              </p>
            )}

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <button
                type="button"
                onClick={onPractice}
                title="The practice hub — pen-paper exam windows with instant checking"
                className="group inline-flex items-center gap-2 rounded-full border border-[#e8e0cd] bg-[#fdfbf4] px-7 py-3 text-sm font-bold text-[#854d0e] shadow-sm transition hover:bg-[#f5efdc]"
              >
                <PenLine className="h-4 w-4 text-[#a16207] transition-transform duration-300 group-hover:-rotate-12" />
                Test my knowledge
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#notes-top" aria-label="Scroll to the lecture notes" className="anim-bob rounded-full border border-[#e8e0cd] bg-[#fdfbf4]/80 p-3 text-[#a16207]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
