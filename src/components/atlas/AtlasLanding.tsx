"use client";

/* ============================================================
   THE ATLAS — dark premium animated landing.
   Six shelves: every university subject becomes a living set of
   revision notes. Shelf 01 (Foundations of Computing) is live;
   the rest fill in as their PDFs drop.

   The router in src/app/page.tsx mounts this view for "#/atlas"
   and delegates to a subject app for "#/subject/<id>".
   ============================================================ */

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
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
  { ch: "0 1", left: "6%", top: "16%", size: "3.4rem", delay: "0s" },
  { ch: "λ", left: "88%", top: "20%", size: "3rem", delay: "1.2s" },
  { ch: "{ }", left: "80%", top: "64%", size: "2.6rem", delay: "2s" },
  { ch: "Σ", left: "10%", top: "70%", size: "2.8rem", delay: ".6s" },
  { ch: "→", left: "48%", top: "8%", size: "2.2rem", delay: "1.6s" },
  { ch: "π", left: "30%", top: "84%", size: "2.4rem", delay: "2.6s" },
  { ch: "Δ", left: "68%", top: "38%", size: "2rem", delay: "3.1s" },
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

/* ---------------------------------------------- subject card */
function SubjectCard({
  subject,
  index,
  onEnter,
}: {
  subject: Subject;
  index: number;
  onEnter: (id: string) => void;
}) {
  const Icon = subject.icon;
  const live = subject.status === "live";

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.75, delay: 0.06 * index, ease: EASE }}
      className="min-w-0"
    >
      <div className="group relative h-full">
        {/* rotating conic ring, revealed on hover */}
        <div
          className="pointer-events-none absolute -inset-px overflow-hidden rounded-[1.3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div
            className="atlas-card-ring absolute left-1/2 top-1/2 aspect-square w-[220%] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${subject.accent}99 42deg, transparent 84deg, transparent 200deg, ${subject.accent2}55 236deg, transparent 274deg)`,
            }}
          />
        </div>

        {live ? (
          <button
            type="button"
            onClick={() => onEnter(subject.id)}
            aria-label={`Open ${subject.title} notes`}
            className="relative flex h-full w-full flex-col rounded-[1.3rem] border border-white/10 bg-[#0c0910]/95 p-6 text-left transition-transform duration-500 ease-out hover:-translate-y-1.5 md:p-7"
            style={{ boxShadow: "0 30px 60px -40px rgba(0,0,0,.9)" }}
          >
            <CardInner subject={subject} live />
            {/* hover glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.3rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{ boxShadow: `inset 0 0 0 1px ${subject.accent}40, 0 24px 70px -30px ${subject.accent2}66` }}
              aria-hidden
            />
          </button>
        ) : (
          <div
            className="relative flex h-full flex-col rounded-[1.3rem] border border-dashed border-white/12 bg-white/[.015] p-6 md:p-7"
            aria-label={`${subject.title} — awaiting syllabus`}
          >
            <CardInner subject={subject} live={false} />
          </div>
        )}
      </div>
    </motion.div>
  );
}

function CardInner({ subject, live }: { subject: Subject; live: boolean }) {
  const Icon = subject.icon;
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border text-white"
          style={{
            background: live
              ? `linear-gradient(135deg, ${subject.accent}, ${subject.accent2})`
              : "rgba(255,255,255,.04)",
            borderColor: live ? "transparent" : "rgba(255,255,255,.1)",
            boxShadow: live ? `0 10px 26px -10px ${subject.accent2}aa` : undefined,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: live ? "#fff7ec" : subject.accent }} />
        </span>
        {live ? (
          <span
            className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[.58rem] font-black uppercase tracking-[.18em]"
            style={{ borderColor: `${subject.accent}55`, color: subject.accent, background: `${subject.accent}14` }}
          >
            <span
              className="atlas-live-dot h-1.5 w-1.5 rounded-full"
              style={{ background: subject.accent, boxShadow: `0 0 0 3px ${subject.accent}30` }}
            />
            live
          </span>
        ) : (
          <span className="flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[.04] px-2.5 py-1 text-[.58rem] font-black uppercase tracking-[.18em] text-[#8d7b63]">
            <Lock className="h-2.5 w-2.5" />
            shelf {subject.shelf}
          </span>
        )}
      </div>

      <p className="mt-5 font-mono text-[.62rem] font-bold uppercase tracking-[.26em] text-[#8d7b63]">
        shelf {subject.shelf}
      </p>
      <h3
        className={`mt-1.5 font-display text-xl font-black leading-tight md:text-2xl ${
          live ? "text-[#f7ecdd]" : "text-[#a89a86]"
        }`}
      >
        {subject.title}
      </h3>
      <p className={`mt-2 text-[.86rem] leading-relaxed ${live ? "text-[#c9b99f]" : "text-[#77685a]"}`}>
        {live ? subject.description : subject.tagline}
      </p>

      {live ? (
        <>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {subject.topics.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/[.05] px-2 py-1 text-[.68rem] font-semibold text-[#d8c9ad]"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
            <span className="font-mono text-[.66rem] uppercase tracking-[.18em] text-[#8d7b63]">
              {subject.chapters} chapters · {subject.questions} questions
            </span>
            <span
              className="flex items-center gap-1 text-[.7rem] font-black uppercase tracking-[.16em] transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: subject.accent }}
            >
              enter <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </>
      ) : (
        <div className="mt-auto pt-5">
          <span className="font-mono text-[.64rem] uppercase tracking-[.2em] text-[#6d5f4f]">
            pen · paper · python — same treatment, new subject
          </span>
        </div>
      )}
    </>
  );
}

/* ---------------------------------------------- the landing */
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
        <div className="atlas-vignette" />
      </div>

      {/* ------- top bar ------- */}
      <nav aria-label="Atlas" className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#070509]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg text-[#070509]"
              style={{ background: "linear-gradient(135deg,#f5c889,#ea580c)", boxShadow: "0 6px 18px -6px rgba(234,88,12,.7)" }}
            >
              <MapIcon className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[1.02rem] font-black tracking-tight text-[#f7ecdd]">The Atlas</span>
          </span>
          <span className="ml-auto hidden font-mono text-[.6rem] uppercase tracking-[.22em] text-[#8d7b63] sm:inline">
            mapped &amp; built by Arpit Nayan
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full border border-[#f59e0b40] bg-[#f59e0b14] px-3 py-1 font-mono text-[.6rem] font-bold uppercase tracking-[.18em] text-[#f5c889]"
            title={`${liveCount} shelves live — ${SUBJECTS.length - liveCount} reserved`}
          >
            <span className="atlas-live-dot h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
            {liveCount}/{SUBJECTS.length} shelves live
          </span>
        </div>
      </nav>

      <main className="flex-1">
        {/* ------- hero ------- */}
        <header className="relative flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-24 text-center sm:px-6">
          {/* institution — sits directly above the wordmark */}
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-1.5 text-[.66rem] font-extrabold uppercase tracking-[.24em] text-[#c9b99f] sm:px-5"
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
            <span aria-hidden className="block whitespace-nowrap text-[11.5vw] sm:text-[12vw] lg:text-[9.5rem]">
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

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
            className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-[#c9b99f] md:text-lg"
          >
            Six university subjects, each rebuilt as{" "}
            <em className="font-display italic text-[#f5c889]">living notes</em> — animated diagrams,
            no-code visual labs, exam simulators, and (on shelf 01) a real CPython 3.12 kernel
            running right in this tab.
            Not PDFs. Not screenshots. <span className="text-[#f7ecdd]">Atlas pages.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
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
              className="group flex h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-6 text-[.78rem] font-black uppercase tracking-[.16em] text-[#e9d7bf] transition-colors duration-300 hover:border-white/25 hover:bg-white/[.08]"
            >
              Browse the shelf
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease: EASE }}
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

          <motion.a
            href="#shelf"
            aria-label="Scroll to the subject shelf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
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
                  "live python runtime",
                  "exam simulator",
                  "animated diagrams",
                  "pen-paper mode",
                  "trace the code",
                  "concept checks",
                  "cpython 3.12 · wasm",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-3.5 whitespace-nowrap font-mono text-[.66rem] font-bold uppercase tracking-[.26em] text-[#8d7b63]"
                  >
                    {t}
                    <span className="h-1 w-1 rounded-full bg-[#f59e0b]/70" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ------- the shelf ------- */}
        <section id="shelf" aria-label="The subject shelf" className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
          <Rise className="mb-12 md:mb-16">
            <span className="flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
              <span className="h-px w-8 bg-gradient-to-r from-[#ea580c] to-transparent" />
              the shelf
            </span>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-5xl">
              Six subjects. <span className="atlas-sheen">One atlas.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[.95rem] leading-relaxed text-[#a89a86] md:text-base">
              Every shelf is a complete revision world — chapters, concept checks, practice drills and an
              exam window per group. Click a live shelf to walk in; reserved shelves fill in as the PDFs drop.
            </p>
          </Rise>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {SUBJECTS.map((s, i) => (
              <SubjectCard key={s.id} subject={s} index={i} onEnter={onEnter} />
            ))}
          </div>
        </section>

        {/* ------- why it hits different ------- */}
        <section aria-label="Why it hits different" className="relative border-t border-white/[.06] bg-white/[.015]">
          <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
            <Rise className="mb-12 text-center">
              <span className="text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
                why it hits different
              </span>
              <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-black leading-tight text-[#f7ecdd] md:text-4xl">
                Notes that behave like the subject — <em className="italic">alive, inspectable, honest.</em>
              </h2>
            </Rise>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {[
                {
                  icon: FlaskConical,
                  accent: "#f59e0b",
                  title: "Real Python, not screenshots",
                  body: "Every snippet runs on a genuine CPython 3.12 kernel compiled to WebAssembly. Predict the output on paper, then press ▶ Run and check yourself — with edit, restore and traceback cleanup built in.",
                },
                {
                  icon: PenLine,
                  accent: "#f43f5e",
                  title: "An exam window per chapter group",
                  body: "The end term is written by hand, so practice is too: write-the-output, trace-the-code, definitions and small programs — 120 questions with model answers and instant checking.",
                },
                {
                  icon: Waypoints,
                  accent: "#84cc16",
                  title: "Diagrams that move",
                  body: "DIKW pyramids, CPU pipelines, dictionary drawers, argument matchers — concepts rendered as SVG machines you can click, hover and rewind instead of static figures you squint at.",
                },
              ].map((f, i) => (
                <Rise key={f.title} delay={0.08 * i} className="h-full">
                  <div className="h-full rounded-[1.3rem] border border-white/10 bg-[#0c0910]/80 p-6 transition-colors duration-300 hover:border-white/20 md:p-7">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        background: `${f.accent}14`,
                        borderColor: `${f.accent}35`,
                        boxShadow: `0 10px 26px -12px ${f.accent}80`,
                      }}
                    >
                      <f.icon className="h-5 w-5" style={{ color: f.accent }} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-black text-[#f7ecdd]">{f.title}</h3>
                    <p className="mt-2.5 text-[.88rem] leading-relaxed text-[#a89a86]">{f.body}</p>
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
