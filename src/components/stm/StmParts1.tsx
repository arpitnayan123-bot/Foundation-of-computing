"use client";

/* ============================================================
   Statistics for Managers — PART 1 of 6 (shelf 05 of The
   Atlas). The violet micro-kit + the hero + Chapter 1's first
   two movements: what statistics is (and the six business
   functions it already runs inside), and how data is measured
   (elements, variables, observations, the four scales).

   Interactive machines in this part:
   · ScaleLadder — click a rung, watch its properties stack up
   · DataAnatomy — one table, three lenses: elements,
     variables, observations
   · The time-series sketch — Figure 1.1 redrawn, animating in

   Also hosts the STM micro-kit (StmReadStep, StmCallout,
   StmPanel, StmQuiz) shared by parts 2–6: same mould as the
   FoC/ATB/FA/EBH pages, shelf 05's violet sigil.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  Database,
  GraduationCap,
  Layers,
  Lightbulb,
  LineChart,
  MousePointerClick,
  PenLine,
  Sigma,
  Sparkles,
  Store,
  ScrollText,
  Table2,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import {
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   STM violet micro-kit — the shared vocabulary of shelf 05
   ============================================================ */
export const STM_G = {
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6d28d9",
  800: "#5b21b6",
  soft: "#f5f3ff",
  border: "#d9cdf8",
  wash: "#f8f6ff",
  ink: "#4c3a80",
};

export const STM_BTN_GRAD = "linear-gradient(135deg,#8b5cf6,#6d28d9)";
export const STM_BTN_SHADOW = "0 14px 30px -12px rgba(109,40,217,.55)";

export function StmReadStep({ n, title, sub }: { n: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-5 mt-12 first:mt-0">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold text-white shadow-md"
          style={{ background: STM_BTN_GRAD, boxShadow: "0 4px 12px -3px rgba(109,40,217,.55)" }}
          aria-hidden
        >
          {n}
        </span>
        <div>
          <h3 className="text-xl font-bold leading-snug md:text-2xl text-[#3e2c1d]">{title}</h3>
          {sub ? <p className="text-[.82rem] text-muted-warm">{sub}</p> : null}
        </div>
      </div>
    </Reveal>
  );
}

const STM_CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode; label: string }> = {
  insight: { bg: "#f6f3fe", border: "#d9cdf8", icon: <Sparkles className="h-4 w-4" style={{ color: STM_G[700] }} />, label: STM_G[700] },
  why: { bg: "#f1edfd", border: "#cfc2f5", icon: <Lightbulb className="h-4 w-4" style={{ color: STM_G[800] }} />, label: STM_G[800] },
  warn: { bg: "#fbeae5", border: "#e8a896", icon: <AlertTriangle className="h-4 w-4" style={{ color: "#b3402c" }} />, label: "#b3402c" },
  story: { bg: "#f5f1e8", border: "#cec2a4", icon: <ScrollText className="h-4 w-4" style={{ color: "#7c6248" }} />, label: "#7c6248" },
};

export function StmCallout({
  kind = "insight",
  title,
  children,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
}) {
  const s = STM_CALLOUT_STYLES[kind];
  return (
    <div className="rounded-2xl p-5" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: s.label }}>
        {s.icon}
        <span>{title}</span>
      </div>
      <div className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">{children}</div>
    </div>
  );
}

/** mono panel — the ruled workhorse of the shelf (data tables,
 *  formulas, computation ledgers) */
export function StmPanel({ children, label, tone = "violet" }: { children: string; label?: string; tone?: "violet" | "sepia" }) {
  const line = tone === "violet" ? STM_G.border : "#cec2a4";
  const head = tone === "violet" ? "#f1ecfd" : "#f5f1e8";
  const ink = tone === "violet" ? STM_G[700] : "#7c6248";
  return (
    <div className="overflow-hidden rounded-2xl border" style={{ borderColor: line }}>
      {label ? (
        <p className="border-b px-4 py-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ borderColor: line, background: head, color: ink }}>
          {label}
        </p>
      ) : null}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[.84rem] leading-relaxed text-[#3a2d63]">{children}</pre>
    </div>
  );
}

/** interactive single-choice — the STM quiz, violet jacket */
export function StmQuiz({
  q,
  options,
  answer,
  explain,
  source,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  source?: string;
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const revealed = chosen !== null;
  return (
    <div className="card-warm p-5">
      <div className="flex items-start gap-2">
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: STM_G[700] }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#3e2c1d]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
              {source}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 grid gap-2">
        {options.map((opt, i) => {
          const isAnswer = i === answer;
          const cls = !revealed
            ? "quiz-opt"
            : isAnswer
            ? "quiz-opt correct"
            : i === chosen
            ? "quiz-opt wrong"
            : "quiz-opt";
          return (
            <button
              key={i}
              className={cls}
              disabled={revealed}
              onClick={() => setChosen(i)}
              aria-label={`Option ${i + 1}: ${opt}`}
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[.65rem] font-bold">
                {revealed && isAnswer ? (
                  <Check className="h-3 w-3" />
                ) : revealed && i === chosen ? (
                  <X className="h-3 w-3" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {revealed ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border p-3 text-[.85rem] leading-relaxed text-[#2b2014]"
            style={{ borderColor: STM_G.border, background: STM_G.wash }}
          >
            <strong style={{ color: chosen === answer ? STM_G[700] : "#b3402c" }}>
              {chosen === answer ? "Correct. " : "Not quite. "}
            </strong>
            {explain}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ============================================================
   HERO — the violet shelf
   ============================================================ */
const HERO_TOKENS = [
  { t: "x̄ = 590.80", top: "18%", left: "6%", dur: 7.4, delay: 0 },
  { t: "P(A | B)", top: "62%", left: "9%", dur: 8.6, delay: 0.9 },
  { t: "68 · 95 · 99.7", top: "20%", left: "87%", dur: 7.8, delay: 0.5 },
  { t: "E(x) = 1.20", top: "58%", left: "86%", dur: 9.0, delay: 1.5 },
  { t: "σ = 1", top: "40%", left: "3%", dur: 9.4, delay: 2.1 },
  { t: "z = 0.83", top: "82%", left: "48%", dur: 8.2, delay: 1.2 },
  { t: "Bayes → 0.34", top: "8%", left: "56%", dur: 8.8, delay: 2.6 },
  { t: "r = −0.9631", top: "74%", left: "24%", dur: 9.6, delay: 0.4 },
] as const;

function HeroToken({ b }: { b: (typeof HERO_TOKENS)[number] }) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute hidden sm:block"
      style={{ top: b.top, left: b.left, opacity: 0.55 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
    >
      <span
        className="inline-block rounded-lg border border-[#d9cdf8] bg-white/70 px-2.5 py-1 font-mono text-[.8rem] font-bold shadow-[0_6px_18px_-10px_rgba(109,40,217,.45)] backdrop-blur-sm"
        style={{ color: STM_G[800] }}
      >
        {b.t}
      </span>
    </motion.div>
  );
}

export function StmHero() {
  return (
    <header id="top" className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16">
      {/* ambient washes — violet + a whisper of warm parchment */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(139,92,246,.14)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(109,40,217,.12)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(124,98,72,.10)" }} />
      </div>

      {/* animated backdrop — the bell curve + its scatter of sample points */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        {[176, 182, 452, 458].map((y, i) => (
          <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="#cfc4ec" strokeWidth={i % 2 === 0 ? 1.4 : 0.8} opacity={0.5} />
        ))}
        {/* the bell */}
        <motion.path
          d="M 60 500 C 300 500, 420 500, 520 420 C 580 370, 590 190, 660 190 C 730 190, 740 370, 800 420 C 900 500, 1020 500, 1160 500"
          fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />
        {/* sample points scattering under the curve */}
        {[
          { x: 380, y: 490 }, { x: 470, y: 470 }, { x: 560, y: 430 },
          { x: 660, y: 405 }, { x: 750, y: 430 }, { x: 840, y: 470 }, { x: 930, y: 495 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke={STM_G[700]} strokeWidth={2}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.45 }}
          />
        ))}
        {/* the mean line */}
        <motion.line
          x1="660" y1="150" x2="660" y2="520"
          stroke="#6d28d9" strokeWidth="1.6" strokeDasharray="4 7"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.55, 0.3, 0.55] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        />
      </svg>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {HERO_TOKENS.map((b, i) => (
          <HeroToken key={i} b={b} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <Sigma className="h-3.5 w-3.5" />
            Shelf 05 · MSL1070 · B.S. in Management and Technology · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Statistics for <span className="grad-violet">Managers</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-warm">
            Every managerial decision is a bet on uncertainty — and statistics is how the bet
            gets <b>priced</b>. This course runs the whole loop: <b>collect</b> data, <b>describe</b>{" "}
            it in tables, charts and numbers, then <b>infer</b> from a sample to a population —
            every figure computed, not memorised.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#lens"
              className="rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]"
              style={{ background: STM_BTN_GRAD, boxShadow: STM_BTN_SHADOW }}
            >
              Start Chapter 1 <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
            <a
              href="#practice"
              title="Straight to the pen-paper windows — compute the statistic, name the distribution"
              className="group inline-flex items-center gap-2 rounded-full border border-[#d9cdf8] bg-[#fffdf9] px-7 py-3.5 text-sm font-bold text-[#5b21b6] transition hover:bg-[#f6f3fe]"
            >
              <PenLine className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" style={{ color: STM_G[700] }} />
              Test my knowledge
            </a>
          </div>
        </Reveal>

        {/* course meta — instructor / the one loop */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          <Reveal delay={360}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><User className="h-3.5 w-3.5" /> Instructor</span>
              <p className="mt-3 text-lg font-extrabold text-[#3e2c1d]">Dr. Deepak Srivastav</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
                PhD (IIM Kozhikode) — Assistant Professor, School of Management and
                Entrepreneurship
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a6b45]">
                Text: Anderson, Sweeney, Williams, Camm &amp; Cochran — <i>Statistics for
                Business &amp; Economics</i>, 14th ed. (Cengage, 2017) · quiz 40% + major 60%.
              </p>
              <p className="mt-1 text-[.78rem] font-semibold" style={{ color: STM_G[700] }}>IIT Jodhpur</p>
            </div>
          </Reveal>
          <Reveal delay={430}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><TrendingUp className="h-3.5 w-3.5" /> The one loop</span>
              <p className="mt-3 text-center font-mono text-2xl font-black tracking-tight" style={{ color: STM_G[800] }}>
                Data → Describe → Decide
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                Collect the facts and figures, summarise them in tables, charts and numbers,
                then use a sample to price the population. Descriptive statistics describes what
                has happened; inferential statistics turns it into better decisions.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   CHAPTER 1 · MOVEMENT 1 — WHAT IS STATISTICS?  (#lens)
   The two meanings, six business applications, data anatomy.
   ============================================================ */
const APPS = [
  { icon: ClipboardList, t: "Accounting", d: "Public accounting firms use statistical sampling procedures when conducting audits for their clients." },
  { icon: TrendingUp, t: "Economics", d: "Economists use statistical information in making forecasts about the future of the economy or some aspect of it." },
  { icon: Store, t: "Finance", d: "Financial advisors use price-earnings ratios and dividend yields to guide their investment advice." },
  { icon: BarChart3, t: "Marketing", d: "Electronic point-of-sale scanners at retail checkout counters collect data for a variety of marketing research applications." },
  { icon: Layers, t: "Production", d: "A variety of statistical quality control charts are used to monitor the output of a production process." },
  { icon: Database, t: "Information Systems", d: "Statistical information helps administrators assess the performance of computer networks." },
];

const COMPANIES = [
  { name: "Dataram", ex: "NQ", sales: "73.10", eps: "0.86" },
  { name: "EnergySouth", ex: "N", sales: "74.00", eps: "1.67" },
  { name: "Keystone", ex: "N", sales: "365.70", eps: "0.86" },
  { name: "LandCare", ex: "NQ", sales: "111.40", eps: "0.33" },
  { name: "Psychemedics", ex: "N", sales: "17.60", eps: "0.13" },
];

type AnatomyLens = "elements" | "variables" | "observation" | null;

function DataAnatomy() {
  const [lens, setLens] = useState<AnatomyLens>("elements");
  return (
    <div className="card-warm overflow-hidden p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        {(
          [
            { k: "elements", label: "Elements", hint: "rows — the entities" },
            { k: "variables", label: "Variables", hint: "columns — the characteristics" },
            { k: "observation", label: "Observation", hint: "one row's measurements" },
          ] as const
        ).map((b) => (
          <button
            key={b.k}
            type="button"
            onClick={() => setLens(lens === b.k ? null : b.k)}
            aria-pressed={lens === b.k}
            className={`rounded-full border px-3.5 py-1.5 text-[.72rem] font-bold transition-all duration-200 ${
              lens === b.k
                ? "border-transparent text-white shadow-md"
                : "border-[#d9cdf8] bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"
            }`}
            style={lens === b.k ? { background: STM_BTN_GRAD } : undefined}
          >
            {b.label}
            <span className={`ml-1.5 text-[.6rem] font-semibold ${lens === b.k ? "text-white/75" : "text-[#a08cc9]"}`}>
              {b.hint}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="warm-table min-w-[540px]">
          <thead>
            <tr>
              <th style={lens === "observation" ? { background: "linear-gradient(180deg,#5b21b6,#4c1d95)" } : undefined}>Company</th>
              <th style={lens === "variables" || lens === "observation" ? { background: "linear-gradient(180deg,#5b21b6,#4c1d95)" } : undefined}>Stock Exchange</th>
              <th style={lens === "variables" || lens === "observation" ? { background: "linear-gradient(180deg,#5b21b6,#4c1d95)" } : undefined}>Annual Sales ($M)</th>
              <th style={lens === "variables" || lens === "observation" ? { background: "linear-gradient(180deg,#5b21b6,#4c1d95)" } : undefined}>Earnings per Share ($)</th>
            </tr>
          </thead>
          <tbody>
            {COMPANIES.map((c, ri) => {
              const rowHit = lens === "elements";
              const obsHit = lens === "observation" && ri === 1;
              return (
                <tr key={c.name} style={rowHit || obsHit ? { background: "rgba(139,92,246,.10)" } : undefined}>
                  <td className="font-bold" style={rowHit || obsHit ? { color: STM_G[800] } : undefined}>{c.name}</td>
                  <td style={obsHit ? { color: STM_G[800], fontWeight: 700 } : undefined}>{c.ex}</td>
                  <td style={obsHit ? { color: STM_G[800], fontWeight: 700 } : undefined}>{c.sales}</td>
                  <td style={obsHit ? { color: STM_G[800], fontWeight: 700 } : undefined}>{c.eps}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={lens ?? "none"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="mt-3 text-[.85rem] leading-relaxed text-muted-warm"
        >
          {lens === "elements" && (
            <>The <b style={{ color: STM_G[800] }}>elements</b> are the entities on which data are collected — the five companies. A data set with <b>n elements contains n observations</b>, so this data set has 5.</>
          )}
          {lens === "variables" && (
            <>The <b style={{ color: STM_G[800] }}>variables</b> are the characteristics of interest for the elements — stock exchange, annual sales, earnings per share. Total data values = <b>elements × variables = 5 × 3 = 15</b>.</>
          )}
          {lens === "observation" && (
            <>An <b style={{ color: STM_G[800] }}>observation</b> is the set of measurements obtained for a particular element — EnergySouth&rsquo;s row: N, 74.00, 1.67. One row = one observation.</>
          )}
          {lens === null && <>Tap a lens — the same table is elements (rows), variables (columns), and observations (one element&rsquo;s full set of measurements) at once. This is the slide-9 example, verbatim.</>}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function StmLensSection() {
  return (
    <Section id="lens">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 1 · Data and Statistics — sections 1.1–1.2"
          title={
            <>
              What is <span className="grad-violet">statistics</span>?
            </>
          }
          lead="The word does double duty in this course — and the deck opens by separating the two jobs. One meaning is a pile of numbers; the other is the craft of making decisions with them."
        />

        {/* 1 · two meanings */}
        <StmReadStep n="01" title="Two meanings of one word" sub="Numerical facts — and the art & science of working with them" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Meaning 1 · numerical facts</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                <b>Statistics</b> can refer to <b>numerical facts</b> — averages, medians,
                percentages, and maximums that help us understand a variety of business and
                economic situations.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Meaning 2 · the craft</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                <b>Statistics</b> can also refer to the <b>art and science</b> of collecting,
                analyzing, presenting, and interpreting data.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 2 · applications */}
        <StmReadStep n="02" title="Applications in business" sub="Statistics already runs six functions you will manage" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((r, i) => (
            <Reveal key={r.t} delay={i * 70}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_BTN_GRAD }}>
                  <r.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 3 · data anatomy */}
        <StmReadStep n="03" title="Data, data sets, elements, variables, observations" sub="One table, three lenses — the vocabulary every chapter reuses" />
        <StmCallout kind="insight" title="The definitions">
          <b>Data</b> are the facts and figures collected, analyzed, and summarized for presentation
          and interpretation. All the data collected in a particular study are the{" "}
          <b>data set</b> for the study. <b>Elements</b> are the entities on which data are
          collected; a <b>variable</b> is a characteristic of interest for the elements; the set
          of measurements obtained for a particular element is an <b>observation</b>.
        </StmCallout>
        <div className="mt-4">
          <DataAnatomy />
        </div>

        {/* 4 · categorical vs quantitative */}
        <StmReadStep n="04" title="Categorical or quantitative?" sub="The fork every variable must go down — it decides which analyses are legal" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Categorical (qualitative)</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Labels or names identify an attribute of each element</li>
                <li>· Uses the nominal or ordinal scale</li>
                <li>· Can be numeric or nonnumeric</li>
                <li>· Appropriate statistical analyses are rather limited</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Quantitative</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Indicates <b>how many</b> or <b>how much</b></li>
                <li>· Always numeric</li>
                <li>· Ordinary arithmetic operations are meaningful</li>
                <li>· Uses the interval or ratio scale — and there are more alternatives for statistical analysis</li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* the fork tree — slide 18 */}
        <Reveal delay={120}>
          <div className="card-warm mt-4 overflow-hidden p-4 sm:p-6">
            <svg viewBox="0 0 760 300" className="h-auto w-full" role="img" aria-label="Data forks into categorical (numeric or non-numeric labels, nominal or ordinal scales) and quantitative (numeric, interval or ratio scales)">
              <rect x="320" y="14" width="120" height="40" rx="12" fill="#f1ecfd" stroke="#d9cdf8" strokeWidth="2" />
              <text x="380" y="40" textAnchor="middle" fontSize="15" fontWeight="800" fill="#5b21b6">Data</text>
              {/* branches */}
              <path d="M 380 54 L 380 84 M 200 84 L 560 84 M 200 84 L 200 108 M 560 84 L 560 108" stroke="#c9bbee" strokeWidth="2" fill="none" />
              <rect x="110" y="108" width="180" height="40" rx="12" fill="#fffdf6" stroke="#d9cdf8" strokeWidth="2" />
              <text x="200" y="133" textAnchor="middle" fontSize="14" fontWeight="800" fill="#3e2c1d">Categorical</text>
              <rect x="470" y="108" width="180" height="40" rx="12" fill="#fffdf6" stroke="#d9cdf8" strokeWidth="2" />
              <text x="560" y="133" textAnchor="middle" fontSize="14" fontWeight="800" fill="#3e2c1d">Quantitative</text>
              <path d="M 200 148 L 200 168 M 88 168 L 312 168 M 88 168 L 88 192 M 312 168 L 312 192 M 560 148 L 560 168 M 470 168 L 650 168 M 470 168 L 470 192 M 650 168 L 650 192" stroke="#c9bbee" strokeWidth="2" fill="none" />
              <rect x="40" y="192" width="96" height="34" rx="10" fill="#f6f3fe" stroke="#d9cdf8" />
              <text x="88" y="214" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">Numeric</text>
              <rect x="264" y="192" width="96" height="34" rx="10" fill="#f6f3fe" stroke="#d9cdf8" />
              <text x="312" y="214" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">Non-numeric</text>
              <rect x="422" y="192" width="96" height="34" rx="10" fill="#f6f3fe" stroke="#d9cdf8" />
              <text x="470" y="214" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5b21b6">Numeric</text>
              <path d="M 88 226 L 88 240 M 312 226 L 312 240 M 470 226 L 470 240 M 40 240 L 136 240 M 264 240 L 360 240 M 40 240 L 40 252 M 136 240 L 136 252 M 264 240 L 264 252 M 360 240 L 360 252 M 422 240 L 518 240 M 422 240 L 422 252 M 518 240 L 518 252" stroke="#c9bbee" strokeWidth="2" fill="none" />
              {[
                { x: 40, t: "Nominal" }, { x: 136, t: "Ordinal" },
                { x: 264, t: "Nominal" }, { x: 360, t: "Ordinal" },
                { x: 422, t: "Interval" }, { x: 518, t: "Ratio" },
              ].map((n) => (
                <g key={`${n.x}-${n.t}`}>
                  <rect x={n.x} y="252" width="96" height="32" rx="10" fill="#fff" stroke="#d9cdf8" />
                  <text x={n.x + 48} y="273" textAnchor="middle" fontSize="12" fontWeight="700" fill="#6d28d9">{n.t}</text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>

        <Takeaways
          items={[
            <>Statistics = <b>numerical facts</b> AND the <b>art &amp; science</b> of collecting, analyzing, presenting, interpreting data.</>,
            <>Data set anatomy: <b>n elements → n observations</b>; total values = <b>elements × variables</b> (5 × 3 = 15 in the companies table).</>,
            <>The <b>categorical vs quantitative</b> fork decides which analyses are appropriate — quantitative data open more doors.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 1 · MOVEMENT 2 — SCALES OF MEASUREMENT  (#scales)
   The four-scale ladder + cross-sectional vs time series.
   ============================================================ */
const SCALE_RUNGS = [
  {
    key: "nominal",
    name: "Nominal",
    props: ["Labels or names identify an attribute of the element", "A nonnumeric label or numeric code may be used"],
    example: "Students classified by the school they are enrolled in — Business, Humanities, Education… (or 1 = Business, 2 = Humanities, 3 = Education…)",
  },
  {
    key: "ordinal",
    name: "Ordinal",
    props: ["Has the properties of nominal data…", "…and the order or rank of the data is meaningful"],
    example: "Students classified by class standing — Freshman, Sophomore, Junior, Senior (or 1 = Freshman, 2 = Sophomore, and so on)",
  },
  {
    key: "interval",
    name: "Interval",
    props: ["Has the properties of ordinal data…", "…and the interval between observations is expressed in terms of a fixed unit of measure", "Interval data are always numeric"],
    example: "SAT scores — Melissa 1985, Kevin 1880 → Melissa scored 105 points more (a fixed unit: one point)",
  },
  {
    key: "ratio",
    name: "Ratio",
    props: ["Has all the properties of interval data…", "…and the ratio of two values is meaningful", "Ratio data are always numerical", "Zero value is included in the scale"],
    example: "Book price — $200 at the retail store vs $100 online → the ratio property shows retail charges twice the online price",
  },
] as const;

function ScaleLadder() {
  const [active, setActive] = useState(1); // default: ordinal lit
  const rung = SCALE_RUNGS[active];
  return (
    <div className="card-warm overflow-hidden p-4 sm:p-6">
      <p className="font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
        Click a rung — properties accumulate upward
      </p>
      <div className="mt-4 grid gap-2">
        {SCALE_RUNGS.map((s, i) => {
          const lit = i <= active;
          const isTop = i === active;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isTop}
              className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-left transition-all duration-300 ${
                lit ? "border-transparent text-white shadow-md" : "border-[#e6e0f8] bg-white text-[#8a7fae] hover:bg-[#f8f6ff]"
              }`}
              style={lit ? { background: `linear-gradient(135deg, ${i === active ? "#8b5cf6" : "#c4b5fd"}, ${i === active ? "#6d28d9" : "#ddd6fe"})` } : undefined}
            >
              <span className="flex items-center gap-3">
                <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-[.72rem] font-black ${lit ? "bg-white/25" : "bg-[#f1ecfd]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[.95rem] font-extrabold">{s.name} scale</span>
              </span>
              <span className={`text-[.62rem] font-bold uppercase tracking-[.14em] ${lit ? "text-white/80" : "text-[#b3a6d9]"}`}>
                {i + 1} property layer{s === SCALE_RUNGS[0] ? "" : "s+"}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={rung.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
          className="mt-4 rounded-2xl border p-4"
          style={{ borderColor: STM_G.border, background: STM_G.wash }}
        >
          <div className="flex flex-wrap gap-1.5">
            {rung.props.map((p) => (
              <span key={p} className="rounded-full bg-white px-2.5 py-1 text-[.7rem] font-semibold text-[#5b21b6] shadow-sm">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-3 text-[.85rem] leading-relaxed text-[#2b2014]">
            <b style={{ color: STM_G[800] }}>Example — </b>{rung.example}
          </p>
        </motion.div>
      </AnimatePresence>
      <StmCallout kind="why" title="Why the scale matters">
        The scale determines the <b>amount of information</b> contained in the data and indicates
        the data <b>summarization and statistical analyses</b> that are most appropriate. Ratio
        data can do everything interval data can — and more.
      </StmCallout>
    </div>
  );
}

/* the time-series sketch — Figure 1.1 (gasoline) redrawn */
const GAS_POINTS: [number, number][] = [
  [0, 158], [24, 142], [48, 118], [72, 96], [96, 104], [120, 112], [144, 108],
  [168, 100], [192, 92], [216, 84], [240, 66], [264, 52], [288, 58], [312, 70],
  [336, 64], [360, 56], [384, 62], [408, 58], [432, 66], [456, 72], [480, 66],
  [504, 58], [528, 64],
];
function gasPath(scale = 1): string {
  return GAS_POINTS.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x} ${y * scale}`).join(" ");
}

function TimeSeriesSketch() {
  return (
    <div className="card-warm overflow-hidden p-4 sm:p-6">
      <p className="text-[.9rem] font-bold text-[#3e2c1d]">
        Figure 1.1 — U.S. average price per gallon for conventional regular gasoline
      </p>
      <p className="mt-0.5 text-[.7rem] text-[#8a6b45]">
        Jan-09 → Apr-14 · source: Energy Information Administration, U.S. Department of Energy,
        March 2014 (redrawn)
      </p>
      <svg viewBox="0 0 560 210" className="mt-3 h-auto w-full" role="img" aria-label="A jagged time-series line rising from about $1.60 in January 2009 to peaks above $3.60 in 2011-2012, easing back to about $3.30 by 2014">
        {[40, 80, 120, 160].map((y) => (
          <line key={y} x1="34" y1={y} x2="544" y2={y} stroke="#e8e2f6" strokeWidth="1" />
        ))}
        {["$3.50", "$3.00", "$2.50", "$2.00"].map((t, i) => (
          <text key={t} x="4" y={44 + i * 40} fontSize="10" fill="#8a7fae">{t}</text>
        ))}
        <line x1="34" y1="176" x2="544" y2="176" stroke="#b3a6d9" strokeWidth="1.4" />
        <motion.path
          d={gasPath()}
          fill="none" stroke="#7c3aed" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {["Jan-09", "Jan-11", "Jan-13", "Apr-14"].map((t, i) => (
          <text key={t} x={34 + i * 168} y="194" fontSize="9.5" fill="#8a7fae">{t}</text>
        ))}
      </svg>
      <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
        Graphs of time series help analysts understand <b>what happened in the past</b>,{" "}
        <b>identify trends over time</b>, and <b>project future levels</b> for the series.
      </p>
    </div>
  );
}

export function StmScalesSection() {
  return (
    <Section id="scales">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 1 · sections 1.2–1.3 (scales) + time"
          title={
            <>
              Scales of <span className="grad-violet">measurement</span>
            </>
          }
          lead="Four rungs — nominal, ordinal, interval, ratio — and each one inherits everything below it while adding one new power. Then the clock: data collected at one instant, or across many."
        />

        <StmReadStep n="01" title="The four-scale ladder" sub="Each scale = all the properties below it, plus one more" />
        <ScaleLadder />

        <StmReadStep n="02" title="Cross-sectional vs time series" sub="Same instant, or several periods — two clocks for two questions" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <span className="chip"><Table2 className="h-3.5 w-3.5" /> Cross-sectional</span>
              <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
                Collected at the <b>same or approximately the same point in time</b>.
              </p>
              <p className="mt-2 rounded-xl p-3 text-[.8rem] leading-relaxed text-[#2b2014]" style={{ background: STM_G.wash, border: `1px solid ${STM_G.border}` }}>
                <b style={{ color: STM_G[800] }}>Example — </b>building permits issued in
                November 2013 in each of the counties of Ohio.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <span className="chip"><LineChart className="h-3.5 w-3.5" /> Time series</span>
              <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
                Collected <b>over several time periods</b>.
              </p>
              <p className="mt-2 rounded-xl p-3 text-[.8rem] leading-relaxed text-[#2b2014]" style={{ background: STM_G.wash, border: `1px solid ${STM_G.border}` }}>
                <b style={{ color: STM_G[800] }}>Example — </b>building permits issued in Lucas
                County, Ohio, in each of the last 36 months.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mt-4">
          <TimeSeriesSketch />
        </div>

        <Takeaways
          items={[
            <>Nominal → ordinal → interval → ratio: <b>each rung inherits the one below and adds one power</b> (rank → fixed intervals → meaningful ratios with a true zero).</>,
            <>Cross-sectional = <b>one point in time</b>; time series = <b>several periods</b> — past, trends, projections.</>,
            <>Categorical data live on nominal/ordinal scales; quantitative on interval/ratio.</>,
          ]}
        />
      </div>
    </Section>
  );
}
