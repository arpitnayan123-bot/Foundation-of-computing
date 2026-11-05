"use client";

/* ============================================================
   THE ATLAS — dark premium animated landing.

   Design language: a midnight gallery. Deep space canvas with
   film grain, aurora washes and ghost typography.

   THE SHELF LAW: each semester pours ONE shelf — a single
   dark frosted-glass case, not loose boxes. Inside, the
   subjects are LISTED as rows on the shelf; every row keeps
   its own sigil (icon + accent) and wakes one whisper of
   hover light. Semester 1 rides live; Semester 2 waits
   below as an empty, reserved bay.

   The router in src/app/page.tsx mounts this view for "#/atlas"
   and delegates to a subject app for "#/subject/<id>".
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Command as CommandIcon,
  FlaskConical,
  GraduationCap,
  Lock,
  Map as MapIcon,
  PenLine,
  Rocket,
  Waypoints,
} from "lucide-react";
import { SUBJECTS, SEMESTER_ONE, type Subject, type SubjectAmbience } from "./subjects";
import { OpenSignals } from "./OpenSignals";
import { dueCounts } from "@/lib/sm2";
import { goalStatus } from "@/lib/goal";
import Hero57 from "@/components/originkit/hero-57";

/* ---------------------------------------------- easing + reveal */
const EASE = [0.22, 1, 0.36, 1] as const;

export function Rise({
  children,
  delay = 0,
  className = "",
  y = 26,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------- floating glyphs */
const GLYPHS: { ch: string; left: string; top: string; size: string; delay: string }[] = [
  { ch: "0 1", left: "5%", top: "15%", size: "3.4rem", delay: "0s" },
  { ch: "λ", left: "89%", top: "19%", size: "3rem", delay: "1.2s" },
  { ch: "{ }", left: "82%", top: "63%", size: "2.6rem", delay: "2s" },
  { ch: "Σ", left: "8%", top: "71%", size: "2.8rem", delay: ".6s" },
  { ch: "→", left: "47%", top: "7%", size: "2.2rem", delay: "1.6s" },
  { ch: "π", left: "28%", top: "86%", size: "2.4rem", delay: "2.6s" },
  { ch: "Δ", left: "70%", top: "37%", size: "2rem", delay: "3.1s" },
];

/* ---------------------------------------------- count-up stat */
function Stat({
  value,
  render,
  label,
  delay = 0,
}: {
  value: number;
  render?: (n: number) => React.ReactNode;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      delay,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-display text-3xl font-black tracking-tight text-[#f7ecdd] md:text-4xl">
        {render ? render(n) : n}
      </span>
      <span className="text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]">{label}</span>
    </div>
  );
}

/* ============================================================
   SMALL SHARED PIECES — every card speaks the same language
   ============================================================ */

function ShelfTag({ children, color = "#b49a78" }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.28em]" style={{ color }}>
      {children}
    </p>
  );
}

function LiveBadge({ accent }: { accent: string }) {
  return (
    <span
      className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em]"
      style={{ borderColor: `${accent}55`, color: accent, background: `${accent}14` }}
    >
      <span
        className="atlas-live-dot h-1.5 w-1.5 rounded-full"
        style={{ background: accent, boxShadow: `0 0 0 3px ${accent}30` }}
      />
      live
    </span>
  );
}

function LockedBadge() {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.04] px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em] text-[#8d7b63]">
      <Lock className="h-2.5 w-2.5" />
      reserved
    </span>
  );
}

/* ============================================================
   THE AMBIENCE — the whispers of motion, one per surface.
   The shelf case takes the sweep; the reserved bay takes the
   scan — the rest sleep until a future surface calls for them.
   ============================================================ */

function Ambience({ kind, accent }: { kind: SubjectAmbience; accent: string }) {
  switch (kind) {
    /* 01 · FoC — a sheet of light glides across the frosted glass */
    case "sweep":
      return <span className="glass-sweep" aria-hidden />;

    /* 02 · ATB — one soft aura breathing behind the glass */
    case "aura":
      return (
        <span
          aria-hidden
          className="amb-breathe pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full"
          style={{ background: `${accent}30` }}
        />
      );

    /* 03 · scan — a thin sonar hairline sweeping down, "brewing" */
    case "scan":
      return <span aria-hidden className="amb-scan" style={{ ["--scan-color" as string]: accent }} />;

    /* 04 · spotlight — the light follows your cursor */
    case "spotlight":
      return (
        <span
          aria-hidden
          className="amb-spot"
          style={{ ["--spot-color" as string]: `${accent}26` }}
        />
      );

    /* 05 · shimmer — a foil hairline sliding along the top edge */
    case "shimmer":
      return (
        <span
          aria-hidden
          className="amb-shimmer"
          style={{ background: `linear-gradient(90deg, transparent 20%, ${accent} 50%, transparent 80%)` }}
        />
      );

    /* 06 · MKTG — a beacon: one pulsing ring + steady gold dot */
    case "beacon":
      return (
        <span aria-hidden className="pointer-events-none absolute -right-12 -top-14 h-52 w-52">
          <span
            className="amb-breathe absolute inset-6 rounded-full border-2"
            style={{ borderColor: `${accent}66` }}
          />
          <span
            className="amb-breathe absolute inset-14 rounded-full border"
            style={{ borderColor: `${accent}44`, animationDelay: "-1.6s" }}
          />
          <span
            className="absolute right-10 top-10 h-2.5 w-2.5 rounded-full anim-floaty"
            style={{ background: "#e3c26b" }}
          />
        </span>
      );

    /* 07 · drift — two warm coals slowly floating under the glass */
    case "drift":
      return (
        <>
          <span
            aria-hidden
            className="amb-glow anim-floaty h-36 w-36"
            style={{ background: accent, left: "-3rem", bottom: "-3rem", animationDelay: "0s" }}
          />
          <span
            aria-hidden
            className="amb-glow anim-floaty h-24 w-24"
            style={{ background: "#f5c889", right: "-2rem", top: "2rem", animationDelay: "-4s" }}
          />
        </>
      );
  }
}

/* ============================================================
   THE SHELF ROW — one mould, one row per subject. Every row
   on the shelf shares the same anatomy: spine number, sigil,
   title, one whisper of topics. Only the accent + icon differ.
   ============================================================ */

interface RowProps {
  subject: Subject;
  index: number;
  onEnter: (id: string) => void;
}

/* cards due for spaced review on this shelf — read once after mount so the
   first paint stays hydration-stable; renders nothing until the store says so */
function DueBadge({ subjectId }: { subjectId: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    /* rAF-deferred: keeps the first paint hydration-stable */
    const raf = requestAnimationFrame(() => setN(dueCounts()[subjectId] ?? 0));
    return () => cancelAnimationFrame(raf);
  }, [subjectId]);
  if (n <= 0) return null;
  return (
    <span
      className="glass-chip rounded-full px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.14em] text-[#f5c889]"
      title="Cards due for spaced review — open the ledger (⌘K → ledger)"
    >
      {n} due
    </span>
  );
}

function ShelfRow({ subject, index, onEnter }: RowProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.65, delay: 0.055 * index, ease: EASE }}
      className="relative"
    >
      <button
        type="button"
        onClick={() => onEnter(subject.id)}
        aria-label={`Open ${subject.title} notes`}
        className="group/row relative flex w-full items-center gap-3.5 px-5 py-4 text-left transition-colors duration-300 hover:bg-white/[.045] sm:gap-5 md:px-8 md:py-[1.1rem]"
      >
        {/* the spine lights up — a thin accent edge on hover */}
        <span
          aria-hidden
          className="absolute left-0 top-1/2 h-[14%] w-[3px] -translate-y-1/2 rounded-r-full transition-all duration-300 group-hover/row:h-[62%]"
          style={{ background: subject.accent, boxShadow: `0 0 14px ${subject.accent}80` }}
        />
        {/* a coal of light leaks from the spine on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-12 w-44 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover/row:opacity-20"
          style={{ background: subject.accent }}
        />

        {/* spine number */}
        <span
          className="w-8 shrink-0 font-mono text-[.74rem] font-black tracking-[.12em]"
          style={{ color: subject.accent }}
        >
          {subject.shelf}
        </span>

        {/* sigil */}
        <span className="glass-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-500 group-hover/row:scale-110 group-hover/row:-rotate-6 md:h-12 md:w-12">
          <subject.icon className="h-5 w-5" style={{ color: subject.accent }} />
        </span>

        {/* title + one whisper of topics */}
        <span className="min-w-0 flex-1">
          <span className="block truncate font-display text-[1.04rem] font-black leading-tight text-[#f7ecdd] md:text-lg">
            {subject.title}
          </span>
          <span className="mt-1 hidden truncate text-[.72rem] leading-snug text-[#8d7b63] sm:block">
            {subject.topics.slice(0, 4).join(" · ")}
          </span>
        </span>

        <DueBadge subjectId={subject.id} />

        {/* enter */}
        <span className="flex shrink-0 items-center gap-1.5 text-[.66rem] font-black uppercase tracking-[.16em] text-[#f5c889] transition-transform duration-300 group-hover/row:translate-x-1">
          <span className="hidden sm:inline">enter</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </button>
    </motion.li>
  );
}

/* ============================================================
   THE SEMESTER SHELF — one glass case per semester. Sem 1's
   case holds the six subjects, listed row by row on the shelf;
   a golden plank grounds the case. One mould, one whisper of
   sweep across the glass — the subjects light their own rows.
   ============================================================ */

function SemesterShelf({
  subjects,
  onEnter,
}: {
  subjects: Subject[];
  onEnter: (id: string) => void;
}) {
  return (
    <div className="card-glass group relative overflow-hidden rounded-[1.7rem]">
      <span className="glass-gloss" aria-hidden />
      {/* the shelf's one whisper — a sheet of light glides across the glass */}
      <Ambience kind="sweep" accent="#f5c889" />
      <span
        aria-hidden
        className="text-ghost pointer-events-none absolute -right-3 -top-9 select-none font-display text-[7.5rem] font-black leading-none"
      >
        S1
      </span>

      {/* shelf header */}
      <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-white/[.08] px-5 py-5 md:px-8">
        <h3 className="font-display text-lg font-black tracking-tight text-[#f7ecdd] md:text-xl">
          Semester 1
        </h3>
        <LiveBadge accent="#f59e0b" />
        <span className="h-px min-w-10 flex-1 bg-white/[.07]" aria-hidden />
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]">
          {subjects.length} subjects · in session
        </span>
      </div>

      {/* the subjects, listed row by row */}
      <ul className="relative divide-y divide-white/[.06]">
        {subjects.map((s, i) => (
          <ShelfRow key={s.id} subject={s} index={i} onEnter={onEnter} />
        ))}
      </ul>

      {/* the plank — a golden hairline grounding the shelf */}
      <div
        aria-hidden
        className="relative h-[3px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,200,137,.45) 18%, rgba(234,88,12,.7) 50%, rgba(245,200,137,.45) 82%, transparent)",
        }}
      />
    </div>
  );
}

/* today's daily-goal progress — a tiny hydration-safe ring that rides
   the pill nav; one click lands on the ledger where the ring lives */
function GoalChip() {
  const [goal, setGoal] = useState<{ done: number; target: number; met: boolean } | null>(null);
  useEffect(() => {
    /* rAF-deferred: keeps the first paint hydration-stable */
    const raf = requestAnimationFrame(() => {
      const g = goalStatus();
      setGoal({ done: g.done, target: g.target, met: g.met });
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  if (!goal) return null;
  const R = 7;
  const C = 2 * Math.PI * R;
  const p = Math.max(0, Math.min(1, goal.target > 0 ? goal.done / goal.target : 0));
  const tone = goal.met ? "#8fae5d" : "#f5c889";
  return (
    <button
      type="button"
      onClick={() => {
        window.location.hash = "#/ledger";
        window.scrollTo(0, 0);
      }}
      aria-label={`Daily goal: ${goal.done} of ${goal.target} answers today — open the ledger`}
      title={`Daily goal — ${goal.done}/${goal.target} answers today`}
      className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 font-mono text-[.6rem] font-bold tracking-wide text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
    >
      <svg viewBox="0 0 18 18" className="h-3.5 w-3.5 -rotate-90" aria-hidden>
        <circle cx="9" cy="9" r={R} fill="none" stroke="#ffffff1c" strokeWidth="2.4" />
        <circle
          cx="9"
          cy="9"
          r={R}
          fill="none"
          stroke={tone}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - p)}
        />
      </svg>
      {goal.done}/{goal.target}
    </button>
  );
}

/* ---------------------------------------------- the sigil — 3D animated logo
   The first thing the eye meets on the landing: the Atlas badge
   floating in 3D above the wordmark. The badge sways in perspective
   space (CSS) while its own SMIL globe spins inside; a gold aura
   breathes behind it and a ground shadow shrinks as it rises. */
function AtlasSigil() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72, y: -16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.05, duration: 0.9, ease: EASE }}
      className="atlas-sigil-stage"
      aria-hidden
    >
      <span className="atlas-sigil-aura" />
      <div className="atlas-sigil-float">
        <img src="/atlas-logo.svg" alt="" draggable={false} className="atlas-sigil" />
      </div>
      <span className="atlas-sigil-shadow" />
    </motion.div>
  );
}

/* ---------------------------------------------- semester bands
   The reserved band header — Semester 2's empty bay announces
   itself above its panel. Semester 1 carries its header inside
   the shelf case itself. */
function SemesterBand({ n, note, live = false }: { n: 1 | 2; note: string; live?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <h3 className="font-display text-lg font-black tracking-tight text-[#f7ecdd] md:text-xl">
        Semester {n}
      </h3>
      {live ? <LiveBadge accent="#f59e0b" /> : <LockedBadge />}
      <span className="h-px min-w-10 flex-1 bg-white/[.07]" aria-hidden />
      <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#8d7b63]">
        {note}
      </span>
    </div>
  );
}

/* the Semester 2 panel — one reserved bay in the same mould, honest
   about waiting: no invented subjects, just the sonar sweep brewing */
function ReservedSemesterPanel() {
  return (
    <div className="card-glass relative flex min-h-[10rem] w-full flex-col justify-center overflow-hidden rounded-[1.7rem] p-7 md:p-9">
      <span className="glass-gloss" aria-hidden />
      <Ambience kind="scan" accent="#f5c889" />
      <span
        aria-hidden
        className="text-ghost pointer-events-none absolute -right-3 -top-8 select-none font-display text-[7.5rem] font-black leading-none"
      >
        S2
      </span>
      <div className="relative flex flex-wrap items-center gap-5">
        <span className="glass-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
          <Lock className="h-5 w-5" style={{ color: "#b49a78" }} />
        </span>
        <div className="min-w-0">
          <ShelfTag>semester 2 · shelf reserved</ShelfTag>
          <h3 className="mt-2 font-display text-xl font-black text-[#cfc0a8] md:text-2xl">
            Waiting for the Semester 2 syllabus.
          </h3>
          <p className="mt-2 max-w-xl text-[.9rem] leading-relaxed text-[#a89a86]">
            The next shelf is poured from the same mould — the moment the
            PDFs drop, its subjects come alive right here. Same soul, new worlds.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   THE LANDING
   ============================================================ */

export function AtlasLanding({ onEnter }: { onEnter: (id: string) => void }) {
  const liveSubjects = SUBJECTS.filter((s) => s.status === "live");
  const liveCount = liveSubjects.length;

  const scrollToShelf = () => {
    document.getElementById("shelf")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="atlas-root">
      {/* ------- layered night background ------- */}
      <div className="atlas-bg" aria-hidden>
        <div className="atlas-grid" />
        {GLYPHS.map((g, i) => (
          <span
            key={i}
            className="atlas-glyph anim-floaty"
            style={{ left: g.left, top: g.top, fontSize: g.size, animationDelay: g.delay }}
          >
            {g.ch}
          </span>
        ))}
        <div className="atlas-noise" />
        <div className="atlas-vignette" />
      </div>

      {/* ------- floating pill nav ------- */}
      <nav aria-label="Atlas" className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
        <div className="flex h-12 w-full max-w-3xl items-center gap-2 rounded-full border border-white/10 bg-[#0a0710]/60 py-2 pl-3 pr-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,.85)] backdrop-blur-xl sm:gap-3 sm:pl-4">
          <span className="flex items-center gap-2.5">
            <img
              src="/atlas-logo.svg"
              alt=""
              aria-hidden
              className="h-7 w-7 rounded-lg shadow-[0_6px_18px_-6px_rgba(234,88,12,.7)]"
            />
            <span className="whitespace-nowrap font-display text-[1rem] font-black tracking-tight text-[#f7ecdd] min-[400px]:inline hidden">The Atlas</span>
          </span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("atlas:cmdk"))}
            aria-label="Open the command palette (Command K)"
            title="Command palette — ⌘K"
            className="ml-auto flex items-center gap-1 rounded-full border border-white/10 bg-white/[.05] px-2.5 py-1 font-mono text-[.6rem] font-bold tracking-wide text-[#cbb89a] transition hover:bg-white/[.12] hover:text-[#f5c889]"
          >
            <CommandIcon aria-hidden className="h-3 w-3" />
            K
          </button>
          <button
            type="button"
            onClick={() => {
              window.location.hash = "#/cockpit";
              window.scrollTo(0, 0);
            }}
            aria-label="Open the Cockpit — today's flight plan and ask the atlas"
            title="The Cockpit — today's flight plan + ask the atlas"
            className="flex items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-2.5 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.14em] text-[#f5c889] transition hover:bg-[#f59e0b2e]"
          >
            <Rocket aria-hidden className="h-3 w-3" />
            <span className="hidden sm:inline">Cockpit</span>
          </button>
          <GoalChip />
          <span
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889] min-[420px]:flex"
            title={`Semester 1 — all ${liveCount} subjects live`}
          >
            <span className="atlas-live-dot h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            {liveCount}/{SUBJECTS.length} live
          </span>
        </div>
      </nav>

      <main className="flex-1">
        {/* ------- hero — the scene IS the design; the badge + THE ATLAS ride it ------- */}
        <Hero57>
          <div className="relative flex w-full flex-col items-center px-4 text-center">
            {/* the sigil — the logo leads: 3D-animated, seated above everything */}
            <AtlasSigil />

            {/* eyebrow 1/2 — the institution, seated tight between sigil and type */}
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7, ease: EASE }}
              className="mt-3.5 flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#f5c889]/20 bg-[#0a0709]/55 px-4 py-1.5 text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#c9b99f] backdrop-blur-md sm:px-5"
            >
              <GraduationCap className="h-3.5 w-3.5 shrink-0" style={{ color: "#f5c889" }} />
              <span className="text-[#f7ecdd]">IIT Jodhpur</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
              <span>B.S. in Management and Technology</span>
            </motion.span>

            {/* wordmark — sun-kissed gradient fill, lit by the scene's key light.
                Minimized a step and seated clear of the planet's limb: sigil →
                eyebrow → type → tagline, one clean top-down hierarchy */}
            <h1
              aria-label="The Atlas"
              className="atlas-lit mt-3 font-display font-black leading-[.9] tracking-tight"
            >
              <span className="sr-only">The Atlas</span>
              <span aria-hidden className="block whitespace-nowrap text-[9.25vw] sm:text-[8.25vw] lg:text-[6.5rem]">
                {"THE".split("").map((ch, i) => (
                  <motion.span
                    key={`a-${i}`}
                    className="inline-block bg-gradient-to-b from-[#fff8ec] via-[#f7ecdd] to-[#eec27d] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.9, ease: EASE }}
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  &nbsp;
                </motion.span>
                {"ATLAS".split("").map((ch, i) => (
                  <motion.span
                    key={`b-${i}`}
                    className="inline-block bg-gradient-to-b from-[#fff8ec] via-[#f7ecdd] to-[#e8913f] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.45 + i * 0.06, duration: 0.9, ease: EASE }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* tagline 2/2 — the atlas' one-line promise, closing the head
                lockup; poured as a frosted chip (same glass as the eyebrow)
                so it stays readable over the planet's glare, with side
                rules that fade in from sm up */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
              className="mt-5 flex items-center justify-center gap-3"
            >
              <span aria-hidden className="hidden h-px w-7 bg-gradient-to-r from-transparent to-[#f5c889]/60 sm:block" />
              <span className="flex items-center rounded-full border border-white/10 bg-[#0a0709]/55 px-4 py-1.5 text-[.64rem] font-bold uppercase tracking-[.24em] text-[#e3d4bd] backdrop-blur-md sm:text-[.68rem] sm:tracking-[.28em]">
                Visual revision notes for everything
              </span>
              <span aria-hidden className="hidden h-px w-7 bg-gradient-to-l from-transparent to-[#f5c889]/60 sm:block" />
            </motion.p>
          </div>
        </Hero57>

        {/* ------- below the design — the words, on whole black ------- */}
        <section
          aria-label="The Atlas in one breath"
          className="relative px-4 pb-20 pt-16 text-center sm:px-6 md:pb-24 md:pt-20"
        >
          {/* bridge — the scene's asphalt melts its last warmth into true black */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#070509] to-transparent"
          />

          {/* the horizon, distilled — a sleek line of golden light born from a
              single point, drawn across the black, then dissolved into the page */}
          <div className="ember-line" aria-hidden />

          <div className="relative mx-auto mt-14 flex max-w-3xl flex-col items-center md:mt-16">
            {/* the crazy one-liner */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.8, ease: EASE }}
              className="mt-6 font-display text-xl font-black tracking-tight text-[#f7ecdd] sm:text-2xl md:text-[1.7rem]"
            >
              Six subjects. One map. <span className="atlas-sheen">Zero boring pages.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.82, duration: 0.8, ease: EASE }}
              className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-[#e3d4bd] md:text-lg"
            >
              This is not a notes site — it&apos;s your syllabus rebuilt as an experience:
              diagrams that move, machines you can poke, exams you can actually survive,
              a host named Tara who explains every lecture out loud, and a real CPython
              kernel living in this tab.{" "}
              <span className="text-[#f7ecdd]">Not PDFs. Atlas pages.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8, ease: EASE }}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
            >
              <button
                type="button"
                onClick={() => onEnter("foc")}
                className="group flex h-12 items-center gap-2.5 rounded-full px-7 text-[.78rem] font-black uppercase tracking-[.16em] text-[#1c0f04] transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg,#f5c889,#ea580c)",
                  boxShadow: "0 18px 44px -14px rgba(234,88,12,.65)",
                }}
              >
                Open Foundations of Computing
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                type="button"
                onClick={scrollToShelf}
                className="group flex h-12 items-center gap-2 rounded-full border border-white/15 bg-[#0a0709]/50 px-6 text-[.78rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] backdrop-blur-md transition-colors duration-300 hover:border-white/30 hover:bg-[#0a0709]/75"
              >
                Browse the shelf
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.9, ease: EASE }}
              className="mt-14 grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-14"
            >
              <Stat value={SUBJECTS.length} label="subjects" delay={0} />
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-3xl font-black tracking-tight text-[#f7ecdd] md:text-4xl">∞</span>
                <span className="text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]">live code runs</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------- marquee ------- */}
        <div className="relative overflow-hidden border-y border-white/[.06] py-3.5" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-14 pr-14">
                {[
                  "notes with a pulse",
                  "diagrams that dance",
                  "machines you can poke",
                  "exams you can survive",
                  "tara reads it out loud",
                  "zero pdf energy",
                  "built different",
                  "cpython 3.12 in your tab",
                  "read · sketch · run",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3.5 whitespace-nowrap font-mono text-[.64rem] font-bold uppercase tracking-[.26em] text-[#8d7b63]"
                  >
                    {t}
                    <span className="h-1 w-1 rounded-full bg-[#f59e0b]/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ------- the shelf, grouped by semester — Sem 1 on one shelf, Sem 2 empty ------- */}
        <section id="shelf" aria-label="The subject shelf" className="relative mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
          <Rise className="mb-12 md:mb-16">
            <span className="flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
              <span className="h-px w-8 bg-gradient-to-r from-[#ea580c] to-transparent" />
              the shelf
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-5xl">
              One shelf. <span className="atlas-sheen">Six worlds.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[.95rem] leading-relaxed text-[#a89a86] md:text-base">
              Semester 1 is live — one glass shelf, six subjects, every row lit by its
              own sigil and one tap away from explaining itself out loud. Semester 2
              sits reserved below, waiting for its syllabus.
            </p>
          </Rise>

          {/* ——— Semester 1 — one shelf, the six subjects listed ——— */}
          <Rise>
            <SemesterShelf subjects={SEMESTER_ONE} onEnter={onEnter} />
          </Rise>

          {/* ——— Semester 2 — separate band, empty & reserved ——— */}
          <Rise className="mb-7 mt-16 md:mt-24">
            <SemesterBand n={2} note="awaiting the syllabus drop" />
          </Rise>
          <Rise>
            <ReservedSemesterPanel />
          </Rise>
        </section>

        {/* ------- open signals — free public APIs, credited ------- */}
        <OpenSignals />

        {/* ------- why it hits different ------- */}
        <section aria-label="Why it hits different" className="relative border-t border-white/[.06]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
            <Rise className="mb-12 text-center md:mb-16">
              <span className="text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
                why it hits different
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-4xl">
                Notes, but make it <em className="italic">cinema.</em>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[.92rem] leading-relaxed text-[#a89a86]">
                Three obsessions separate an Atlas page from every PDF you&apos;ve ever
                suffered through.
              </p>
            </Rise>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {[
                {
                  n: "01",
                  icon: FlaskConical,
                  accent: "#f59e0b",
                  title: "Python that actually runs",
                  body: "Every snippet executes on a genuine CPython 3.12 kernel compiled to WebAssembly. Predict the output on paper, press ▶ Run, argue with the machine — it never gets tired.",
                },
                {
                  n: "02",
                  icon: PenLine,
                  accent: "#f43f5e",
                  title: "Exams you can survive",
                  body: "The end term is written on paper, so practice is too: written answers, model solutions, instant checking — an exam window built for every subject, not just the code ones.",
                },
                {
                  n: "03",
                  icon: Waypoints,
                  accent: "#84cc16",
                  title: "Diagrams that refuse to sit still",
                  body: "DIKW pyramids, CPU pipelines, memory boxes, decision flowcharts — concepts rendered as living machines you can click, hover and rewind instead of figures you squint at.",
                },
              ].map((f, i) => (
                <Rise key={f.n} delay={0.08 * i} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 md:p-7">
                    <span
                      aria-hidden
                      className="text-ghost pointer-events-none absolute -right-2 -top-6 select-none font-display text-[6.5rem] font-black leading-none"
                    >
                      {f.n}
                    </span>
                    <span
                      className="relative flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        background: `${f.accent}14`,
                        borderColor: `${f.accent}35`,
                        boxShadow: `0 10px 26px -12px ${f.accent}80`,
                      }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: f.accent }} />
                    </span>
                    <h3 className="relative mt-5 font-display text-lg font-black text-[#f7ecdd]">{f.title}</h3>
                    <p className="relative mt-2.5 text-[.88rem] leading-relaxed text-[#a89a86]">{f.body}</p>
                  </div>
                </Rise>
              ))}
            </div>
          </div>
        </section>

        {/* ------- the promise ------- */}
        <section aria-label="The Atlas promise" className="relative mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
          <Rise>
            <p className="font-display text-2xl font-medium italic leading-snug text-[#e9d7bf] md:text-[2.6rem] md:leading-[1.25]">
              “Built for the night before.{" "}
              <span className="atlas-sheen font-black not-italic">Remembered long after.</span>
              ”
            </p>
            <p className="mx-auto mt-6 max-w-xl text-[.9rem] leading-relaxed text-[#8d7b63]">
              That&apos;s the whole point of an Atlas page — it compresses the panic of
              revision into something you can watch, poke and run, so the syllabus
              finally sticks.
            </p>
          </Rise>
        </section>
      </main>

      {/* ------- footer — the atlas signs itself ------- */}
      <footer className="mt-auto border-t border-white/[.06] bg-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3.5 px-4 py-10 text-center sm:px-6">
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#070509]"
              style={{ background: "linear-gradient(135deg,#f5c889,#ea580c)" }}
            >
              <MapIcon className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <p className="font-display text-[.95rem] font-black text-[#f7ecdd]">The Atlas</p>
          </div>
          <p className="text-[1.02rem] font-black tracking-wide text-[#f7ecdd]">
            created by <span className="text-[#f5c889]">Arpit Nayan</span>
          </p>
          <p className="sig-colo text-center">
            next.js · react · tailwind · framer-motion · pyodide — mmxxvi
          </p>
        </div>
      </footer>
    </div>
  );
}
