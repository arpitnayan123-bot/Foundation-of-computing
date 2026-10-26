"use client";

/* ============================================================
   Statistics for Managers — PART 9 (shelf 05 of The Atlas).
   The official-deck additions, part one:
   · #course-tools — Lecture 3: the live course briefing
     (format, textbook, the Excel + R toolkit, grading, the
     AI policy) with the WSJ data-value calculator
   · #scatter — Lecture 5: the scatter studio (trend-line
     lab, side-by-side vs stacked) + where the centre lives
   · #pelican — Lecture 8: the Pelican Stores case — 100
     transactions, COUNTIF, pivot tables, the 70% coupon
     cohort, and the weighted-mean grade machine

   Kit shared with parts 1–8: StmReadStep, StmCallout,
   StmPanel, StmQuiz (all exported from StmParts1) + the
   notes/ui Section, SectionHead, Reveal, Takeaways.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Calculator,
  Check,
  ChartPie,
  Cpu,
  FileSpreadsheet,
  GraduationCap,
  Laptop,
  MoveUpRight,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 3 · THE COURSE BRIEFING  (#course-tools)
   ============================================================ */

/* the WSJ data-value machine: 46 questions × n respondents */
function DataValueCalc() {
  const [n, setN] = useState(50);
  const questions = 46;
  const total = questions * n;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G[50] }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the wsj subscriber survey · 46 questions × n respondents
        </span>
        <Sparkles className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 grid items-center gap-4 sm:grid-cols-[1fr_auto]">
        <div>
          <label htmlFor="wsj-n" className="text-[.8rem] font-bold text-neutral-700">
            Respondents in the sample: <span className="tabular-nums">{n}</span>
          </label>
          <input
            id="wsj-n"
            type="range"
            min={10}
            max={150}
            step={5}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="mt-2 w-full accent-violet-600"
          />
          <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-500">
            The lecture surveys 50 subscribers. Slide the pool and watch the dataset grow — every respondent answers all 46 questions.
          </p>
        </div>
        <div className="text-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={total}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="rounded-xl px-5 py-3 font-mono text-2xl font-black tabular-nums"
              style={{ background: "#4c1d95", color: "#f5f3ff" }}
            >
              {total.toLocaleString()}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1 text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">total data values</p>
        </div>
      </div>
    </div>
  );
}

/* the toolkit checklist — install before session two */
function ToolkitChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const items = [
    { id: "excel", icon: FileSpreadsheet, name: "Microsoft Excel", note: "Any licensed version (365, 2021, or older) — Google Sheets works as a fallback." },
    { id: "r", icon: Cpu, name: "R — from cran.r-project.org", note: "Install R first; both Windows and Mac builds are free." },
    { id: "rstudio", icon: Laptop, name: "R Studio — from rstudio.com", note: "The interface for R, downloaded separately." },
    { id: "laptop", icon: Laptop, name: "A personal laptop", note: "Essential for the entire programme — phones and tablets are insufficient." },
    { id: "textbook", icon: BookOpen, name: "Anderson & Sweeney, 13th ed. +", note: '"Statistics for Business and Economics" — any recent edition, physical or digital.' },
  ];
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        machine — the pre-session-two checklist · tap to confirm
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => {
          const on = !!done[it.id];
          const Icon = it.icon;
          return (
            <li key={it.id}>
              <button
                type="button"
                onClick={() => setDone((p) => ({ ...p, [it.id]: !p[it.id] }))}
                aria-pressed={on}
                className={`flex w-full items-start gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-200 ${
                  on ? "" : "hover:-translate-y-0.5"
                }`}
                style={{
                  borderColor: on ? STM_G[300] : STM_G.border,
                  background: on ? STM_G[50] : "#fff",
                }}
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors"
                  style={{ background: on ? STM_G[600] : STM_G[100], color: on ? "#fff" : STM_G[700] }}
                >
                  {on ? <Check className="h-3.5 w-3.5" /> : <Icon className="h-3.5 w-3.5" />}
                </span>
                <span className="min-w-0">
                  <span className={`block text-[.84rem] font-bold ${on ? "line-through opacity-60" : ""}`} style={{ color: STM_G[900] }}>
                    {it.name}
                  </span>
                  <span className="block text-[.74rem] leading-relaxed text-neutral-500">{it.note}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-right font-mono text-[.66rem] font-bold tabular-nums" style={{ color: STM_G[700] }}>
        {Object.values(done).filter(Boolean).length}/{items.length} ready
      </p>
    </div>
  );
}

export function StmCourseToolsSection() {
  return (
    <Section id="course-tools">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 3 · The Live Briefing — Course Overview & Structure"
          title={
            <>
              The course & <span className="grad-violet">its tools</span>
            </>
          }
          lead="The first live session of the Statistics for Managers course at IIT Jodhpur: how each week runs, what to install, how the grade is built — and the AI policy that keeps every submitted number yours."
        />

        <StmReadStep n="01" title="The format — 30 + 10, flipped" sub="Application live, theory recorded" />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <StmPanel label="Each session">{`30 minutes of lecture
10 minutes of Q&A

Live sessions apply the
pre-recorded theory to
real problems.`}</StmPanel>
            <StmPanel label="The instructor">{`Prof. Deepak Silvastov
School of Management &
Entrepreneurship, IIT Jodhpur

3 years teaching (IIT Jodhpur,
Flame University) + 5 years
industry experience.`}</StmPanel>
            <StmPanel label="The rhythm">{`Live lectures alternate
weekly with dedicated
doubt-clearing sessions.

Post pre-prepared questions
on the LMS before each one.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The toolkit — install before the next live session" sub="Excel for the desk, R for the lab" />
        <Reveal>
          <ToolkitChecklist />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why a laptop, not a phone?">
            Management courses here are hands-on: freeze panes, auto-filters, pivot tables and R scripts need a real keyboard. Mobile devices and tablets are explicitly insufficient — the recommendation is a laptop or PC for the entire programme.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="Data grows fast — the WSJ survey" sub="46 questions × 50 respondents = one dataset" />
        <Reveal>
          <DataValueCalc />
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The element–variable math">
            Total data values in a dataset = number of elements × number of variables. The Wall Street Journal subscriber survey asks 46 questions of 50 respondents — 2,300 data points from one modest sample. Data accumulates multiplicatively, which is why the toolkit matters.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="The grade — two of three quizzes & a written end-term" sub="Assessment favours interpretation over recall" />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <StmPanel label="Quizzes">{`Three quizzes at regular
intervals, 20 marks each.
The best two scores count.

Objective questions with a
conceptual focus; calculator
allowed; one week's notice.`}</StmPanel>
            <StmPanel label="End-term">{`Written mode with both
subjective and objective
questions.

Scientific calculators are
permitted for the final exam
calculations.`}</StmPanel>
            <StmPanel label="The focus">{`Data collection and
interpretation skills —
not memorised formulas.

Recorded lectures come
first: the live sessions
assume you've watched.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="05" title="The AI policy — a supplement, never a substitute" sub="Use it to think better, not instead of thinking" />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: "#86efac", background: "#f0fdf4" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: "#166534" }}>
                <Check className="h-4 w-4" /> RECOMMENDED AI USE
              </p>
              <ul className="mt-2 space-y-1.5 text-[.8rem] leading-relaxed text-neutral-700">
                <li>· Concept clarification and alternative perspectives</li>
                <li>· Debugging code and quality checks</li>
                <li>· Sanity verification of your own calculations</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "#fca5a5", background: "#fef2f2" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: "#991b1b" }}>
                <ShieldCheck className="h-4 w-4" /> PROHIBITED
              </p>
              <ul className="mt-2 space-y-1.5 text-[.8rem] leading-relaxed text-neutral-700">
                <li>· AI as the sole source of information</li>
                <li>· Submitting AI-written assignments or code as your own</li>
                <li>· Sharing confidential or unpublished data with AI tools</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The integrity clause">
            Every AI output must be verified manually before you trust it. Passing off AI-generated work as entirely your own constitutes academic dishonesty — and violation may lead to candidature cancellation. AI is a supplementary tool, never the primary learning method.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="Where the course goes from here" sub="Foundation first, complexity compounds" />
        <Reveal>
          <StmCallout kind="insight" title="The engagement snapshot">
            Roughly 70% of participants had watched the recorded lectures before this session, and about half reported no fear of statistics. Feedback calls the recordings interactive and well-structured — though chart visibility during pop-up questions was flagged to the technical team. The warning that matters: the first chapter builds the foundation, and missing it makes every later session harder cumulatively.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="A marketing class surveys 46 questions to 50 respondents. How many total data values does the dataset hold — and which survey variable ('career stage' ratings, say) could never support averaging?"
          options={[
            "2,300 values; career stage is ordinal, so averages overstate precision",
            "2,300 values; career stage is nominal, so nothing may be computed",
            "96 values; each question is one data point",
            "46 values; only the question count matters",
          ]}
          answer={0}
          explain="46 × 50 = 2,300 total data values (elements × variables). Career-stage ratings are ordinal: order exists but differences aren't precisely measurable — so the mean is a shaky summary where a median or mode would speak honestly."
        />

        <Takeaways
          items={[
            <>Live sessions run <b>30 + 10</b> and apply pre-recorded theory — watch the recordings first, or the live hours compound against you.</>,
            <>Toolkit: <b>Excel (or Sheets) + R + R Studio + a real laptop</b>, and the Anderson &amp; Sweeney textbook (13th onwards).</>,
            <>Grading: <b>best two of three 20-mark quizzes</b> + a written end-term; interpretation skills are the target.</>,
            <>Total data values = <b>elements × variables</b> (46 × 50 = 2,300) — and the AI policy allows assistance, never authorship.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 5 · THE SCATTER STUDIO  (#scatter)
   ============================================================ */

/* trend-line lab — pick the relationship, watch the cloud morph */
function TrendLab() {
  const [mode, setMode] = useState<"pos" | "neg" | "none">("pos");
  const pts = useMemo(() => {
    if (mode === "pos")
      return [
        [8, 22], [14, 34], [20, 30], [26, 44], [32, 52], [38, 58], [44, 70], [50, 66], [56, 80], [62, 84],
      ];
    if (mode === "neg")
      return [
        [8, 82], [14, 74], [20, 78], [26, 58], [32, 54], [38, 44], [44, 40], [50, 30], [56, 26], [62, 18],
      ];
    return [
      [8, 48], [14, 30], [20, 62], [26, 44], [32, 70], [38, 28], [44, 56], [50, 38], [56, 64], [62, 46],
    ];
  }, [mode]);
  const X = (v: number) => 46 + (v / 70) * 400;
  const Y = (v: number) => 128 - (v / 100) * 96;
  const slope = mode === "pos" ? "+m" : mode === "neg" ? "−m" : "0";
  const label =
    mode === "pos"
      ? "Positive — interceptions vs points scored: both climb together"
      : mode === "neg"
        ? "Negative — price vs quantity consumed: the demand curve"
        : "No apparent relationship — slope zero, the cloud just drifts";
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        machine — the trend-line lab · y = mx + c
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(
          [
            { k: "pos", t: "Positive", icon: TrendingUp },
            { k: "neg", t: "Negative", icon: TrendingDown },
            { k: "none", t: "No relationship", icon: MoveUpRight },
          ] as const
        ).map((b) => {
          const Icon = b.icon;
          const on = mode === b.k;
          return (
            <button
              key={b.k}
              type="button"
              onClick={() => setMode(b.k)}
              aria-pressed={on}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.72rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              <Icon className="h-3.5 w-3.5" /> {b.t}
            </button>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G[50] }}>
        <svg viewBox="0 0 480 160" className="h-auto w-full" role="img" aria-label={`Scatter plot showing a ${label}`}>
          <line x1="36" y1="134" x2="470" y2="134" stroke={STM_G.border} strokeWidth="1.4" />
          <line x1="36" y1="14" x2="36" y2="134" stroke={STM_G.border} strokeWidth="1.4" />
          <motion.line
            x1={X(4)} y1={mode === "pos" ? Y(14) : mode === "neg" ? Y(92) : Y(48)}
            x2={X(66)} y2={mode === "pos" ? Y(88) : mode === "neg" ? Y(12) : Y(48)}
            stroke="#6d28d9" strokeWidth="2.4" strokeDasharray="5 5" strokeLinecap="round"
            animate={{ x1: X(4), x2: X(66), y1: mode === "pos" ? Y(14) : mode === "neg" ? Y(92) : Y(48), y2: mode === "pos" ? Y(88) : mode === "neg" ? Y(12) : Y(48) }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
          {pts.map(([x, y], i) => (
            <motion.circle
              key={`${mode}-${i}`}
              cx={X(x)} cy={Y(y)} r="4.2"
              fill={mode === "none" ? "#a78bfa" : "#7c3aed"} opacity="0.85"
              initial={{ cx: X(x), cy: Y(64), opacity: 0 }}
              animate={{ cx: X(x), cy: Y(y), opacity: 0.85 }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 160, damping: 16 }}
            />
          ))}
          <text x="240" y="152" textAnchor="middle" fontSize="10" fill="#8a7fae">x — the independent variable</text>
          <text x="14" y="76" textAnchor="middle" fontSize="10" fill="#8a7fae" transform="rotate(-90 14 76)">y — dependent</text>
          <text x="430" y="30" textAnchor="end" fontSize="12" fontWeight="800" fill="#4c1d95">slope {slope}</text>
        </svg>
      </div>
      <p className="mt-2 text-[.78rem] leading-relaxed text-neutral-600">{label}</p>
    </div>
  );
}

/* stacked vs side-by-side — the same homes, two lenses */
function StackedToggle() {
  const [stacked, setStacked] = useState(true);
  const data = [
    { q: "Excellent", cheap: 30, costly: 10 },
    { q: "Above avg", cheap: 40, costly: 30 },
    { q: "Average", cheap: 20, costly: 35 },
    { q: "Below avg", cheap: 8, costly: 20 },
    { q: "Poor", cheap: 2, costly: 5 },
  ];
  const X = (i: number, w = 56) => 52 + i * 74 + (56 - w) / 2;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — one table, two lenses · quality vs home price
        </p>
        <div className="flex gap-1.5">
          {(
            [
              { k: true, t: "Stacked" },
              { k: false, t: "Side-by-side" },
            ] as const
          ).map((b) => (
            <button
              key={String(b.k)}
              type="button"
              onClick={() => setStacked(b.k)}
              aria-pressed={stacked === b.k}
              className="rounded-full border px-3 py-1 text-[.68rem] font-bold transition-all"
              style={{
                borderColor: stacked === b.k ? STM_G[600] : STM_G.border,
                background: stacked === b.k ? STM_G[600] : "#fff",
                color: stacked === b.k ? "#fff" : STM_G[800],
              }}
            >
              {b.t}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G[50] }}>
        <svg viewBox="0 0 480 190" className="h-auto w-full" role="img" aria-label={stacked ? "Stacked bar chart of home quality for cheaper and costlier homes" : "Side-by-side bar chart of home quality for cheaper and costlier homes"}>
          <line x1="42" y1="152" x2="470" y2="152" stroke={STM_G.border} strokeWidth="1.4" />
          {data.map((d, i) => {
            const cheapH = (d.cheap / 70) * 116;
            const costlyH = (d.costly / 70) * 116;
            const totalH = ((d.cheap + d.costly) / 100) * 116;
            return (
              <g key={d.q}>
                {stacked ? (
                  <>
                    <motion.rect x={X(i)} width="56" y={152 - totalH} height={totalH} rx="4" fill="#ddd6fe" initial={{ height: 0, y: 152 }} animate={{ height: totalH, y: 152 - totalH }} transition={{ delay: i * 0.06, type: "spring", stiffness: 140, damping: 16 }} />
                    <motion.rect x={X(i)} width="56" y={152 - cheapH} height={cheapH} rx="4" fill="#6d28d9" initial={{ height: 0, y: 152 }} animate={{ height: cheapH, y: 152 - cheapH }} transition={{ delay: i * 0.06 + 0.12, type: "spring", stiffness: 140, damping: 16 }} />
                    <text x={X(i) + 28} y={152 - cheapH - 5} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4c1d95">{`${d.cheap + d.costly}`}</text>
                  </>
                ) : (
                  <>
                    <motion.rect x={X(i, 24)} width="24" y={152 - cheapH} height={cheapH} rx="3" fill="#6d28d9" initial={{ height: 0, y: 152 }} animate={{ height: cheapH, y: 152 - cheapH }} transition={{ delay: i * 0.05, type: "spring", stiffness: 140, damping: 16 }} />
                    <motion.rect x={X(i, 24) + 30} width="24" y={152 - costlyH} height={costlyH} rx="3" fill="#c4b5fd" initial={{ height: 0, y: 152 }} animate={{ height: costlyH, y: 152 - costlyH }} transition={{ delay: i * 0.05 + 0.06, type: "spring", stiffness: 140, damping: 16 }} />
                    <text x={X(i, 24) + 27} y={152 - Math.max(cheapH, costlyH) - 5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#6d28d9">{d.cheap}</text>
                    <text x={X(i, 24) + 41} y="164" textAnchor="middle" fontSize="8.5" fill="#8a7fae">{d.costly}</text>
                  </>
                )}
                <text x={X(i) + 28} y="178" textAnchor="middle" fontSize="9.5" fill="#8a7fae">{d.q}</text>
              </g>
            );
          })}
          <rect x="372" y="14" width="12" height="12" rx="3" fill="#6d28d9" />
          <text x="390" y="24" fontSize="10" fill="#6d28d9">cheaper</text>
          <rect x="372" y="32" width="12" height="12" rx="3" fill="#c4b5fd" />
          <text x="390" y="42" fontSize="10" fill="#8a7fae">costlier</text>
        </svg>
      </div>
      <p className="mt-2 text-[.78rem] leading-relaxed text-neutral-600">
        {stacked
          ? "Stacked: each bar is the full 100%, split into segments — proportions at a glance. With percentage frequencies every bar reaches the same height, which is what makes the comparison fair."
          : "Side-by-side: each quality level shows a cluster of two bars — cheaper vs costlier — so absolute frequencies stay readable without squinting."}
      </p>
    </div>
  );
}

export function StmScatterSection() {
  return (
    <Section id="scatter">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 5 · Graphical Displays for Summarizing Two Variables"
          title={
            <>
              The <span className="grad-violet">scatter studio</span>
            </>
          }
          lead="Tables force the reader to work; graphs carry the relationship in one glance. Two quantitative variables meet on a coordinate system — each point one observation, the cloud's shape the story — and a trend line signs it positive, negative, or none."
        />

        <StmReadStep n="01" title="The scatter diagram — one point per observation" sub="x on the horizontal, y on the vertical" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Structure">{`Definition: a graphical
representation of two
quantitative variables
plotted as points on a
coordinate system.

Structure: one variable on
the x-axis, the other on the
y-axis.

Interpretation: each point is
one observation; the pattern
of points reveals the
relationship.`}</StmPanel>
            <StmPanel label="The lecture's example">{`Age versus weight:

weight generally increases
with age until approximately
age 30,

after which it stabilises —
the cloud flattens instead of
climbing forever.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The trend line — sign the relationship" sub="Slope m in y = mx + c carries the verdict" />
        <Reveal>
          <TrendLab />
        </Reveal>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <StmPanel label="Positive">{`Both variables increase
together.

Slope of y = mx + c is
positive.

Lecture's example: number of
interceptions versus points
scored in football.`}</StmPanel>
            <StmPanel label="Negative">{`As x increases, y decreases.

Slope is negative.

Example: price of goods
versus quantity consumed —
the demand curve.`}</StmPanel>
            <StmPanel label="No relationship">{`Slope is zero; y stays
constant regardless of x.

No discernible pattern
between the variables —
the cloud just drifts.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Two categorical lenses — side-by-side & stacked" sub="Compressing a two-variable table into one honest picture" />
        <Reveal>
          <StackedToggle />
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Choosing between them">
            Side-by-side bars compare frequencies across clusters — each category gets a small group of bars, one per value of the second variable. Stacked bars show composition: the total as the full height, segments carrying the shares. When the stacked chart is drawn with percentage frequencies, all bars hit 100% and the proportional comparison becomes effortless — the lecture's cheaper-versus-costly-homes case.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="A coach plots interceptions (x) against points scored (y) and the cloud rises left-to-right. In y = mx + c terms, what is true — and what display would let her also see whether cheap homes are rated differently from costly ones?"
          options={[
            "m > 0; a side-by-side bar chart of quality by price class",
            "m > 0; a pie chart of interceptions",
            "m < 0; a cumulative frequency distribution",
            "m = 0; a stacked histogram",
          ]}
          answer={0}
          explain="A rising cloud means both variables increase together — the slope m is positive. Quality ratings across two price classes are two categorical dimensions: the side-by-side (clustered) bar chart is built exactly for that comparison, while the stacked version would show proportions within each price class."
        />

        <Takeaways
          items={[
            <>Scatter: <b>one point per observation</b>, x horizontal, y vertical — the cloud's shape is the relationship.</>,
            <>Trend line signs it: <b>positive (both rise)</b>, negative (demand curve), or zero slope (no pattern).</>,
            <>Side-by-side bars compare <b>clusters</b>; stacked bars show <b>composition</b> — at 100% they become pure proportions.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 8 · THE PELICAN STORES CASE  (#pelican)
   ============================================================ */

/* the payment-method machine — animated frequency bars */
function PaymentBars() {
  const rows = [
    { m: "Proprietary card", n: 70 },
    { m: "MasterCard", n: 14 },
    { m: "Visa", n: 10 },
    { m: "Discover", n: 3 },
    { m: "American Express", n: 2 },
  ];
  const max = 70;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        machine — how 100 transactions paid · COUNTIF on the method column
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <li key={r.m} className="flex items-center gap-3">
            <span className="w-36 shrink-0 text-[.74rem] font-bold" style={{ color: STM_G[900] }}>
              {r.m}
            </span>
            <span className="h-5 flex-1 overflow-hidden rounded-full" style={{ background: STM_G[50] }}>
              <motion.span
                className="block h-full rounded-full"
                style={{ background: i === 0 ? "linear-gradient(90deg,#8b5cf6,#6d28d9)" : "#c4b5fd" }}
                initial={{ width: 0 }}
                whileInView={{ width: `${(r.n / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
              />
            </span>
            <span className="w-8 text-right font-mono text-[.78rem] font-bold tabular-nums" style={{ color: STM_G[800] }}>
              {r.n}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[.72rem] leading-relaxed text-neutral-500">
        The store's own proprietary card carries 70 of 100 transactions — the frequency distribution managers actually read before the meeting.
      </p>
    </div>
  );
}

/* one labelled slider row — hoisted so it is never created during render */
function Slide({ label, v, set, max = 100 }: { label: string; v: number; set: (n: number) => void; max?: number }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
        {label} <span className="tabular-nums">{v}</span>
      </span>
      <input type="range" min={0} max={max} value={v} onChange={(e) => set(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
    </label>
  );
}

/* the weighted grade machine — midterm · final · viva */
function WeightedGrade() {
  const [wMid, setWMid] = useState(30);
  const [wFinal, setWFinal] = useState(50);
  const wViva = 100 - wMid - wFinal;
  const [sMid, setSMid] = useState(78);
  const [sFinal, setSFinal] = useState(85);
  const [sViva, setSViva] = useState(90);
  const grade = (wMid / 100) * sMid + (wFinal / 100) * sFinal + (wViva / 100) * sViva;
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the weighted mean · x̄w = Σ(wᵢxᵢ)/Σwᵢ
        </p>
        <div className="mt-3 space-y-3">
          <div>
            <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-neutral-500">weights (auto-balance to 100%)</p>
            <div className="mt-1 grid grid-cols-2 gap-2">
              <Slide label="Midterm" v={wMid} set={(n) => setWMid(Math.min(n, 100 - wFinal))} />
              <Slide label="Final" v={wFinal} set={(n) => setWFinal(Math.min(n, 100 - wMid))} />
            </div>
            <p className="mt-1 text-[.7rem] font-bold" style={{ color: STM_G[700] }}>
              VIVA gets the remaining {wViva}%
            </p>
          </div>
          <div>
            <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-neutral-500">your scores</p>
            <div className="mt-1 grid grid-cols-3 gap-2">
              <Slide label="Midterm" v={sMid} set={setSMid} />
              <Slide label="Final" v={sFinal} set={setSFinal} />
              <Slide label="Viva" v={sViva} set={setSViva} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center rounded-2xl border p-6 text-center" style={{ borderColor: STM_G[300], background: STM_G[50] }}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={grade.toFixed(1)}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="font-mono text-5xl font-black tabular-nums"
            style={{ color: "#4c1d95" }}
          >
            {grade.toFixed(1)}
          </motion.div>
        </AnimatePresence>
        <p className="mt-2 text-[.66rem] font-bold uppercase tracking-[.14em] text-neutral-500">weighted course grade</p>
        <p className="mt-2 max-w-[24ch] text-[.72rem] leading-relaxed text-neutral-600">
          The simple average of 78, 85 and 90 is {(((sMid + sFinal + sViva) / 3)).toFixed(1)} — the weights tell the honest story.
        </p>
      </div>
    </div>
  );
}

export function StmPelicanSection() {
  return (
    <Section id="pelican">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 8 · Case Study — Pelican Stores, Data Analysis Application"
          title={
            <>
              The <span className="grad-violet">Pelican ledger</span>
            </>
          }
          lead="Pelican Stores, a division of a national clothing chain, ran a promotional campaign with discount coupons. One hundred customer transactions from the promotion period — the dataset a manager actually receives — and the descriptive toolkit that turns it into decisions."
        />

        <StmReadStep n="01" title="The brief — was the promotion worth it?" sub="Incremental revenue or cannibalised sales?" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Business context">{`Organization: a division of a
national clothing chain
operating across the country.

Objective: evaluate the
effectiveness of the
promotional campaign that
used discount coupons.

Sample: 100 customer
transactions during the
promotion period.`}</StmPanel>
            <StmPanel label="The assumption & the goals">{`Assumption: sales from
promotional-coupon customers
represent incremental revenue
not otherwise made.

Manager's goals: understand
the customer profile and
demographics, judge whether
the promotion worked, find
patterns, optimise the next
campaign.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="What was collected per customer">
            Customer type (regular vs promotional), number of items purchased, net sales amount in dollars, gender, marital status, payment method, and age. Seven variables — a mix of categorical and quantitative — which is exactly why the case exercises every display and measure the course has built.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="Excel, part one — COUNTIF & the pivot table" sub="Frequencies without tears" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="COUNTIF">{`=COUNTIF(range, criteria)

Range: the column holding the
data to count.

Criteria: the specific value
to count.

Use absolute references ($) on
criteria cells so the formula
can be copied without the
target shifting.`}</StmPanel>
            <StmPanel label="Pivot tables">{`Function: summarise categorical
and quantitative data
automatically.

Steps: A. select the data range
B. Insert → Pivot Table
C. drag variables to Rows,
Columns, Values
D. analyse the aggregates.

Advantage: handles missing
data better and offers many
view options.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="The findings — the coupon cohort dominates" sub="70 of 100 customers answered the coupon" />
        <Reveal>
          <PaymentBars />
        </Reveal>
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <StmPanel label="Effectiveness">{`70% of customers were
promotional (70 of 100) —
a strong response to the
coupon campaign.`}</StmPanel>
            <StmPanel label="Purchase behaviour">{`Promotional customers
bought 266 items total —
about 4 per customer.

Regular customers bought
56 items — about 2 each.

Promotional spend runs
roughly double per
transaction.`}</StmPanel>
            <StmPanel label="Payment mix">{`Proprietary card 70,
MasterCard 14, Visa 10,
Discover 3, American
Express 2.

The store's own card is
the anchor of the
promotion.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Central tendency, at the desk" sub="AVERAGE · MEDIAN · MODE · MAX · MIN" />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { f: "=AVERAGE(range)", n: "Mean", d: "Uses every data point — but outliers pull it." },
              { f: "=MEDIAN(range)", n: "Median", d: "Robust to extremes; preferred when outliers lurk." },
              { f: "=MODE(range)", n: "Mode", d: "The only measure available for categorical variables; some datasets have none or several." },
              { f: "=MAX / =MIN", n: "Range ends", d: "Establishes the spread and flags candidate outliers." },
            ].map((c) => (
              <div key={c.n} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G[50] }}>
                <p className="font-mono text-[.7rem] font-bold" style={{ color: "#5b21b6" }}>
                  {c.f}
                </p>
                <p className="mt-1 text-[.8rem] font-black" style={{ color: STM_G[900] }}>
                  {c.n}
                </p>
                <p className="mt-1 text-[.7rem] leading-relaxed text-neutral-600">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Choosing the measure">
            Mean for symmetric data where every point counts equally; median for skewed distributions — income and housing prices, where extremes distort; mode for categorical data where the most common category is the whole story. Weighted means take over when importance varies, geometric means when values multiply — growth rates, returns, compounding.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="The weighted mean — grades with weights" sub="Midterm, final and the viva rarely count equally" />
        <Reveal>
          <WeightedGrade />
        </Reveal>

        <StmReadStep n="06" title="The scatter payoff — age buys more" sub="Two positive relationships in the case data" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="What the case found">{`Positive relationship between
customer age and per-item
sales value.

Positive relationship between
age and number of items
purchased.

Suggestion: older customers
tend to buy more items and
spend more per item.`}</StmPanel>
            <StmPanel label="The derived metric">{`Per-item sales value =
Net Sales ÷ Number of Items

Excel: =SalesColumn/ItemsColumn

Purpose: normalises spending
across different purchase
quantities for a fair
comparison — and flags
high-value customers
independent of quantity.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Formula-copying mechanics">
            Absolute references (e.g. $A$1) lock a cell while the rest of the formula drifts on copy; relative references follow the drag; and the double-click on the fill handle copies a formula down to the last data row automatically. Verify every calculation a second way — formulas versus pivot tables — before it reaches a manager.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="In the Pelican data, 70 of 100 transactions used the proprietary card. A junior analyst reports the average net sales including one $3,200 outlier, and calls it 'typical spend'. Which critique is faithful to the lecture?"
          options={[
            "The mean chases outliers — report the median too, and use =MEDIAN(range) for the robust number",
            "The mean is always the best measure — the outlier is real data and must be included",
            "The mode should replace the mean — it handles dollar amounts best",
            "The range should replace the mean — MAX minus MIN is the typical spend",
          ]}
          answer={0}
          explain="Net sales is right-skewed — a few large baskets pull the mean upward. The lecture's selection rule: mean for symmetric data, median when extreme values might distort (income, housing, transaction sizes), mode for categorical data. Reporting AVERAGE and MEDIAN together is the honest pair; the range only establishes spread."
        />

        <Takeaways
          items={[
            <>Pelican's verdict: <b>70% promotional customers</b>, roughly <b>double the spend</b> and twice the items of regulars — the coupon pulled incremental buyers.</>,
            <>Excel kit: <b>COUNTIF</b> for frequencies (lock criteria with <b>$</b>), <b>pivot tables</b> for multi-view summaries.</>,
            <>Measure choice is the analysis: <b>mean = symmetric, median = skewed, mode = categorical</b>; weighted and geometric means when importance or multiplication enters.</>,
            <>Per-item sales = <b>net sales ÷ items</b> — normalisation makes customers comparable, and age traced positive on both items and spend.</>,
          ]}
        />
      </div>
    </Section>
  );
}
