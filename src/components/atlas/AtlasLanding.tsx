"use client";

/* ============================================================
   THE ATLAS — dark premium animated landing.

   Design language: a midnight gallery. Deep space canvas with
   film grain, aurora washes and ghost typography; the subject
   shelf is a bento of six boxes, each with its OWN material —
   glassmorphism (FoC), claymorphism (ATB), neomorphism,
   cursor spotlight, holo-foil and aurora mesh.

   The router in src/app/page.tsx mounts this view for "#/atlas"
   and delegates to a subject app for "#/subject/<id>".
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  FlaskConical,
  GraduationCap,
  Lock,
  Map as MapIcon,
  PenLine,
  Waypoints,
} from "lucide-react";
import { SUBJECTS, type Subject } from "./subjects";

/* ---------------------------------------------- easing + reveal */
const EASE = [0.22, 1, 0.36, 1] as const;

function Rise({
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

function ShelfTag({ children, color }: { children: React.ReactNode; color: string }) {
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

function LockedBadge({ tone = "muted" }: { tone?: "muted" | "light" }) {
  return (
    <span
      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em] ${
        tone === "light" ? "border-white/25 text-white/80" : "border-white/12 bg-white/[.04] text-[#8d7b63]"
      }`}
    >
      <Lock className="h-2.5 w-2.5" />
      reserved
    </span>
  );
}

function LiveFooter({
  subject,
  textClass,
  arrowClass,
}: {
  subject: Subject;
  textClass: string;
  arrowClass: string;
}) {
  return (
    <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-4">
      <span className={`font-mono text-[.64rem] uppercase tracking-[.16em] ${textClass}`}>
        {subject.chapters} chapters · {subject.questions} questions · {subject.examWindows} windows
      </span>
      <span
        className={`flex shrink-0 items-center gap-1 text-[.68rem] font-black uppercase tracking-[.16em] transition-transform duration-300 group-hover:translate-x-1 ${arrowClass}`}
      >
        enter <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

/* ============================================================
   01 · GLASSMORPHISM — frosted pane with a 3D tilt and a
   light sweep that slides across the glass on hover. (FoC)
   ============================================================ */

function GlassCard({ subject, index, onEnter }: CardProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const rotX = useSpring(rX, { stiffness: 140, damping: 18 });
  const rotY = useSpring(rY, { stiffness: 140, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rY.set(px * 6);
    rX.set(-py * 6);
  };
  const onLeave = () => {
    rX.set(0);
    rY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.85, delay: 0.05 * index, ease: EASE }}
      className="min-w-0 md:col-span-2"
    >
      <motion.button
        ref={ref}
        type="button"
        onClick={() => onEnter(subject.id)}
        aria-label={`Open ${subject.title} notes`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.35, ease: EASE }}
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1100 }}
        className="group card-glass relative flex h-full min-h-[21rem] w-full flex-col overflow-hidden rounded-[1.7rem] p-6 text-left md:p-8"
      >
        <span className="glass-gloss" aria-hidden />
        <span className="glass-sweep" aria-hidden />
        {/* ambient amber breath behind the glass */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `${subject.accent}30` }}
        />

        <div className="relative flex items-start justify-between gap-3">
          <span
            className="glass-chip flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ boxShadow: `0 12px 30px -12px ${subject.accent}aa` }}
          >
            <subject.icon className="h-5 w-5" style={{ color: subject.accent }} />
          </span>
          <LiveBadge accent={subject.accent} />
        </div>

        <div className="relative mt-6">
          <ShelfTag color="#b49a78">shelf {subject.shelf} — glassmorphism build</ShelfTag>
          <h3 className="mt-2 font-display text-2xl font-black leading-tight text-[#f7ecdd] md:text-3xl">
            {subject.title}
          </h3>
          <p className="mt-2.5 max-w-xl text-[.88rem] leading-relaxed text-[#c9b99f]">
            {subject.description}
          </p>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {subject.topics.slice(0, 5).map((t) => (
            <span key={t} className="glass-chip rounded-full px-2.5 py-1 text-[.66rem] font-semibold text-[#ecdcc2]">
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-6">
          <LiveFooter subject={subject} textClass="text-[#8d7b63]" arrowClass="text-[#f5c889]" />
        </div>
      </motion.button>
    </motion.div>
  );
}

/* ============================================================
   02 · CLAYMORPHISM — inflated soft-putty panel with floating
   blobs and a squishy spring press. (ATB)
   ============================================================ */

function ClayCard({ subject, index, onEnter }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.85, delay: 0.05 * index, ease: EASE }}
      className="min-w-0"
    >
      <motion.button
        type="button"
        onClick={() => onEnter(subject.id)}
        aria-label={`Open ${subject.title} notes`}
        whileHover={{ y: -7 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 17 }}
        className="group card-clay relative flex h-full min-h-[21rem] w-full flex-col overflow-hidden rounded-[2rem] p-6 text-left md:p-7"
      >
        {/* soft floating putty blobs */}
        <span aria-hidden className="clay-blob anim-floaty h-36 w-36" style={{ background: "#fecdd3", left: "-3rem", top: "-3rem", animationDelay: "0s" }} />
        <span aria-hidden className="clay-blob anim-floaty h-28 w-28" style={{ background: "#9f1239", right: "-2rem", bottom: "3rem", animationDelay: "-3s" }} />

        <div className="relative flex items-start justify-between gap-3">
          <span className="clay-tile flex h-12 w-12 items-center justify-center rounded-full text-white">
            <subject.icon className="h-5 w-5" />
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[.56rem] font-black uppercase tracking-[.18em] text-[#9f1239]">
            <span className="atlas-live-dot h-1.5 w-1.5 rounded-full bg-[#e11d48]" />
            live
          </span>
        </div>

        <div className="relative mt-6">
          <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.28em] text-white/70">
            shelf {subject.shelf} — claymorphism build
          </p>
          <h3 className="mt-2 font-display text-2xl font-black leading-tight text-white">
            {subject.title}
          </h3>
          <p className="mt-2.5 text-[.88rem] leading-relaxed text-white/80">{subject.description}</p>
        </div>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {subject.topics.slice(0, 4).map((t) => (
            <span key={t} className="clay-chip rounded-full px-2.5 py-1 text-[.66rem] font-semibold text-white">
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-6">
          <LiveFooter subject={subject} textClass="text-white/65" arrowClass="text-white" />
        </div>
      </motion.button>
    </motion.div>
  );
}

/* ============================================================
   03 · NEOMORPHISM — extruded dark surface that presses IN
   on hover, monochrome lime. (reserved shelf 03)
   ============================================================ */

function NeoCard({ subject, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.06 * index, ease: EASE }}
      className="min-w-0"
    >
      <div
        className="group card-neo relative flex h-full min-h-[19rem] flex-col rounded-[1.7rem] p-6 md:p-7"
        aria-label={`${subject.title} — awaiting syllabus`}
      >
        <div className="flex items-start justify-between">
          <span className="neo-well flex h-12 w-12 items-center justify-center rounded-2xl text-[#84cc16]">
            <subject.icon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <LockedBadge />
        </div>

        <div className="mt-6">
          <ShelfTag color="#5d6b3a">shelf {subject.shelf} — neomorphism build</ShelfTag>
          <h3 className="mt-2 font-display text-xl font-black leading-tight text-[#a89a86]">{subject.title}</h3>
          <p className="mt-2 text-[.86rem] leading-relaxed text-[#77685a]">{subject.tagline}</p>
        </div>

        <div className="mt-auto pt-6">
          <p className="font-mono text-[.62rem] uppercase tracking-[.2em] text-[#5d5142]">
            pen · paper · logic — same treatment, new subject
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   04 · SPOTLIGHT — cursor-tracked radial glow on the border
   and the fill. (reserved shelf 04)
   ============================================================ */

function SpotlightCard({ subject, index }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.06 * index, ease: EASE }}
      className="min-w-0"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        className="group relative h-full min-h-[19rem] rounded-[1.7rem]"
        aria-label={`${subject.title} — awaiting syllabus`}
      >
        <div className="card-spot relative flex h-full flex-col rounded-[1.7rem] p-6 md:p-7">
          <span className="spot-fill" aria-hidden />
          <span className="spot-border" aria-hidden />

          <div className="relative flex items-start justify-between">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl border"
              style={{
                borderColor: `${subject.accent}40`,
                background: `${subject.accent}10`,
                boxShadow: `0 0 0 1px ${subject.accent}14, 0 10px 30px -12px ${subject.accent}66`,
              }}
            >
              <subject.icon className="h-5 w-5" style={{ color: subject.accent }} strokeWidth={1.8} />
            </span>
            <LockedBadge />
          </div>

          <div className="relative mt-6">
            <ShelfTag color="#8a7440">shelf {subject.shelf} — spotlight build</ShelfTag>
            <h3 className="mt-2 font-display text-xl font-black leading-tight text-[#a89a86]">{subject.title}</h3>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#77685a]">{subject.tagline}</p>
          </div>

          <div className="relative mt-auto pt-6">
            <p className="font-mono text-[.62rem] uppercase tracking-[.2em] text-[#5d5142]">
              move your cursor — the light follows
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   05 · HOLO-FOIL — a slowly rotating iridescent ring frames
   the card; hover turns the foil up. (reserved shelf 05)
   ============================================================ */

function HoloCard({ subject, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.06 * index, ease: EASE }}
      className="min-w-0"
    >
      <div
        className="group relative h-full min-h-[19rem] rounded-[1.7rem]"
        aria-label={`${subject.title} — awaiting syllabus`}
      >
        {/* the foil — oversized rotating conic, clipped to the card edge */}
        <div className="absolute inset-0 overflow-hidden rounded-[1.7rem]" aria-hidden>
          <div
            className="holo-spin absolute left-1/2 top-1/2 aspect-square w-[260%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "conic-gradient(from 0deg, #2dd4bf, #a3e635, #fbbf24, #f43f5e, #c084fc, #2dd4bf)",
              filter: "blur(6px)",
            }}
          />
        </div>
        {/* the card face, inset 1.5px so a hairline of foil stays visible */}
        <div className="relative mx-[1.5px] flex h-[calc(100%-3px)] flex-col overflow-hidden rounded-[calc(1.7rem-1.5px)] bg-[#0a0d10] p-6 md:p-7">
          <div className="flex items-start justify-between">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl border"
              style={{ borderColor: `${subject.accent}35`, background: `${subject.accent}0e` }}
            >
              <subject.icon className="h-5 w-5" style={{ color: subject.accent }} strokeWidth={1.8} />
            </span>
            <LockedBadge />
          </div>

          <div className="mt-6">
            <ShelfTag color="#3f6b64">shelf {subject.shelf} — holo-foil build</ShelfTag>
            <h3 className="mt-2 font-display text-xl font-black leading-tight text-[#a89a86]">{subject.title}</h3>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#77685a]">{subject.tagline}</p>
          </div>

          <div className="mt-auto pt-6">
            <p className="font-mono text-[.62rem] uppercase tracking-[.2em] text-[#5d5142]">
              sealed in foil until the pdf drops
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   06 · AURORA MESH — warm light blobs drifting behind the
   content. (reserved shelf 06)
   ============================================================ */

function AuroraCard({ subject, index }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.06 * index, ease: EASE }}
      className="min-w-0"
    >
      <div
        className="group card-aurora relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-[1.7rem] p-6 md:p-7"
        aria-label={`${subject.title} — awaiting syllabus`}
      >
        <span aria-hidden className="aurora-blob anim-floaty h-40 w-40" style={{ background: "#fb923c", left: "-3.5rem", top: "-3rem", animationDelay: "0s" }} />
        <span aria-hidden className="aurora-blob anim-floaty h-32 w-32" style={{ background: "#f43f5e", right: "-2.5rem", bottom: "-2rem", animationDelay: "-3.4s" }} />
        <span aria-hidden className="aurora-blob anim-floaty h-24 w-24" style={{ background: "#f59e0b", right: "30%", top: "10%", animationDelay: "-6s" }} />

        <div className="relative flex items-start justify-between">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#fb923c30] bg-[#fb923c10]"
            style={{ boxShadow: "0 10px 30px -12px rgba(251,146,60,.5)" }}
          >
            <subject.icon className="h-5 w-5 text-[#fb923c]" strokeWidth={1.8} />
          </span>
          <LockedBadge />
        </div>

        <div className="relative mt-6">
          <ShelfTag color="#8a5c3a">shelf {subject.shelf} — aurora build</ShelfTag>
          <h3 className="mt-2 font-display text-xl font-black leading-tight text-[#a89a86]">{subject.title}</h3>
          <p className="mt-2 text-[.86rem] leading-relaxed text-[#77685a]">{subject.tagline}</p>
        </div>

        <div className="relative mt-auto pt-6">
          <p className="font-mono text-[.62rem] uppercase tracking-[.2em] text-[#5d5142]">
            brewing — light on the horizon
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------------------------------------- card dispatcher */

interface CardProps {
  subject: Subject;
  index: number;
  onEnter: (id: string) => void;
}

function SubjectCard({ subject, index, onEnter }: CardProps) {
  switch (subject.cardStyle) {
    case "glass":
      return <GlassCard subject={subject} index={index} onEnter={onEnter} />;
    case "clay":
      return <ClayCard subject={subject} index={index} onEnter={onEnter} />;
    case "neo":
      return <NeoCard subject={subject} index={index} onEnter={onEnter} />;
    case "spotlight":
      return <SpotlightCard subject={subject} index={index} onEnter={onEnter} />;
    case "holo":
      return <HoloCard subject={subject} index={index} onEnter={onEnter} />;
    case "aurora":
      return <AuroraCard subject={subject} index={index} onEnter={onEnter} />;
  }
}

/* ---------------------------------------------- next-shelf tile */

function NextShelfTile({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.8, delay: 0.06 * index, ease: EASE }}
      className="min-w-0 md:col-span-2"
    >
      <div className="group relative flex h-full min-h-[12rem] flex-col justify-between overflow-hidden rounded-[1.7rem] border border-dashed border-white/12 bg-white/[.02] p-6 md:p-8">
        {/* ghost numeral */}
        <span
          aria-hidden
          className="text-ghost pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] font-black leading-none"
        >
          03
        </span>

        <div className="relative">
          <ShelfTag color="#b49a78">next drop</ShelfTag>
          <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-black text-[#f7ecdd] md:text-3xl">
            Shelf 03 is loading
            <span className="flex items-end gap-1 pb-1.5" aria-hidden>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="dot-pulse h-1.5 w-1.5 rounded-full bg-[#f5c889]"
                  style={{ animationDelay: `${i * 0.22}s` }}
                />
              ))}
            </span>
          </h3>
          <p className="mt-2.5 max-w-md text-[.88rem] leading-relaxed text-[#a89a86]">
            The atlas grows one PDF at a time. Drop the next syllabus and this tile comes
            alive — distilled, animated, made runnable. Same treatment, every single time.
          </p>
        </div>

        <div className="relative mt-6">
          <div className="load-bar h-1 w-full max-w-xs rounded-full bg-white/[.07]" aria-hidden />
          <p className="mt-3 font-mono text-[.6rem] uppercase tracking-[.22em] text-[#6d5f4f]">
            awaiting syllabus · shelf 03 of 06
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   THE LANDING
   ============================================================ */

export function AtlasLanding({ onEnter }: { onEnter: (id: string) => void }) {
  const liveSubjects = SUBJECTS.filter((s) => s.status === "live");
  const liveCount = liveSubjects.length;
  const totalChapters = liveSubjects.reduce((n, s) => n + (s.chapters ?? 0), 0);
  const totalQuestions = liveSubjects.reduce((n, s) => n + (s.questions ?? 0), 0);

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
        <div className="flex h-12 w-full max-w-3xl items-center gap-3 rounded-full border border-white/10 bg-[#0a0710]/60 py-2 pl-4 pr-2 shadow-[0_18px_50px_-22px_rgba(0,0,0,.85)] backdrop-blur-xl">
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg text-[#070509]"
              style={{ background: "linear-gradient(135deg,#f5c889,#ea580c)", boxShadow: "0 6px 18px -6px rgba(234,88,12,.7)" }}
            >
              <MapIcon className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[1rem] font-black tracking-tight text-[#f7ecdd]">The Atlas</span>
          </span>
          <span className="ml-auto hidden font-mono text-[.56rem] uppercase tracking-[.2em] text-[#8d7b63] md:inline">
            mapped &amp; built by Arpit Nayan
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.58rem] font-bold uppercase tracking-[.16em] text-[#f5c889]"
            title={`${liveCount} shelves live — ${SUBJECTS.length - liveCount} reserved`}
          >
            <span className="atlas-live-dot h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            {liveCount}/{SUBJECTS.length} live
          </span>
        </div>
      </nav>

      <main className="flex-1">
        {/* ------- hero ------- */}
        <header className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-16 pt-28 text-center sm:px-6">
          {/* ghost outline word, drifting behind the wordmark */}
          <span
            aria-hidden
            className="text-ghost anim-drift pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[26vw] font-black leading-none"
          >
            ATLAS
          </span>

          <div className="relative z-10 flex flex-col items-center">
            {/* institution — sits directly above the wordmark */}
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-1.5 text-[.64rem] font-extrabold uppercase tracking-[.24em] text-[#c9b99f] backdrop-blur-sm sm:px-5"
            >
              <GraduationCap className="h-3.5 w-3.5 shrink-0" style={{ color: "#f5c889" }} />
              <span className="text-[#f7ecdd]">IIT Jodhpur</span>
              <span className="hidden h-3 w-px bg-white/15 sm:block" aria-hidden />
              <span>B.S. in Management and Technology</span>
            </motion.span>

            {/* wordmark */}
            <h1
              aria-label="The Atlas"
              className="mt-8 font-display font-black leading-[.92] tracking-tight"
            >
              <span className="sr-only">The Atlas</span>
              <span aria-hidden className="block whitespace-nowrap text-[13vw] sm:text-[13vw] lg:text-[10rem]">
                {"THE".split("").map((ch, i) => (
                  <motion.span
                    key={`a-${i}`}
                    className="inline-block text-[#f7ecdd]"
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
                    className={`inline-block ${i === 0 ? "atlas-sheen" : "text-[#f7ecdd]"}`}
                    initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.45 + i * 0.06, duration: 0.9, ease: EASE }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            </h1>

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
              className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-[#c9b99f] md:text-lg"
            >
              This is not a notes site — it&apos;s your syllabus rebuilt as an experience.
              Diagrams that move, machines you can poke, exams you can actually survive,
              and a real CPython kernel living in this tab.{" "}
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
                Enter shelf 01 — Foundations
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                type="button"
                onClick={scrollToShelf}
                className="group flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-6 text-[.78rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[.08]"
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
              className="mt-14 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4 sm:gap-x-14"
            >
              <Stat value={SUBJECTS.length} label="shelves" delay={0} />
              <Stat value={totalChapters} label="chapters live" delay={0.1} />
              <Stat value={totalQuestions} label="exam questions" delay={0.2} />
              <div className="flex flex-col items-center gap-1">
                <span className="font-display text-3xl font-black tracking-tight text-[#f7ecdd] md:text-4xl">∞</span>
                <span className="text-[.62rem] font-extrabold uppercase tracking-[.22em] text-[#8d7b63]">live code runs</span>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#shelf"
            aria-label="Scroll to the subject shelf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="anim-bob absolute bottom-7 text-[#8d7b63] transition-colors hover:text-[#f5c889]"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.a>
        </header>

        {/* ------- marquee ------- */}
        <div className="relative overflow-hidden border-y border-white/[.06] bg-white/[.02] py-3.5" aria-hidden>
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-14 pr-14">
                {[
                  "notes with a pulse",
                  "diagrams that dance",
                  "machines you can poke",
                  "exams you can survive",
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

        {/* ------- the shelf (bento of materials) ------- */}
        <section id="shelf" aria-label="The subject shelf" className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
          <Rise className="mb-12 md:mb-16">
            <span className="flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
              <span className="h-px w-8 bg-gradient-to-r from-[#ea580c] to-transparent" />
              the shelf
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-5xl">
              Pick a shelf. <span className="atlas-sheen">Enter a world.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[.95rem] leading-relaxed text-[#a89a86] md:text-base">
              Every box below is a full revision universe — live ones open on click, locked
              ones are brewing. Each one gets its own material, its own motion, its own
              personality. Same soul, every time.
            </p>
          </Rise>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {SUBJECTS.map((s, i) => (
              <SubjectCard key={s.id} subject={s} index={i} onEnter={onEnter} />
            ))}
            <NextShelfTile index={SUBJECTS.length} />
          </div>
        </section>

        {/* ------- why it hits different ------- */}
        <section aria-label="Why it hits different" className="relative border-t border-white/[.06] bg-white/[.015]">
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
                  body: "The end term is written by hand, so practice is too: write-the-output, trace-the-code, definitions and small programs — model answers and instant checking included.",
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
                  <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c0910]/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 md:p-7">
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

        {/* ------- manifesto ------- */}
        <section aria-label="The Atlas manifesto" className="relative mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32">
          <Rise>
            <p className="font-display text-2xl font-medium italic leading-snug text-[#e9d7bf] md:text-[2.6rem] md:leading-[1.25]">
              “Read it. Sketch it.{" "}
              <span className="atlas-sheen font-black not-italic">Run it.</span>
              ”
            </p>
            <p className="mx-auto mt-6 max-w-xl text-[.9rem] leading-relaxed text-[#8d7b63]">
              The atlas grows one PDF at a time — each subject gets the same treatment:
              distilled, animated, and made runnable until the whole syllabus lives here.
            </p>
          </Rise>
        </section>
      </main>

      {/* ------- footer (sticky-bottom pattern) ------- */}
      <footer className="mt-auto border-t border-white/[.06] bg-[#050308]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#070509]"
              style={{ background: "linear-gradient(135deg,#f5c889,#ea580c)" }}
            >
              <MapIcon className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <div>
              <p className="font-display text-[.95rem] font-black text-[#f7ecdd]">The Atlas</p>
              <p className="font-mono text-[.58rem] uppercase tracking-[.2em] text-[#8d7b63]">
                mapped &amp; built by Arpit Nayan
              </p>
            </div>
          </div>
          <p className="sig-colo text-center md:text-right">
            next.js · react · tailwind · framer-motion · pyodide — mmxxvi
          </p>
        </div>
      </footer>
    </div>
  );
}
