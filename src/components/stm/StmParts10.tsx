"use client";

/* ============================================================
   Statistics for Managers — PART 10 (shelf 05 of The Atlas).
   The official-deck additions, part two:
   · #dist-recap — Lecture 13: the consolidation lap (the
     quiz brief, discrete distributions rebuilt from a
     200-day TV-sales ledger with a live Σf(x) verifier and
     the 1.2 → 5.2 E(X) swing, variance & SD, bivariate
     analysis, the binomial/Poisson/uniform family, and the
     Excel 7-step procedure)
   · #normal-practice — Lecture 14: the z-machine (sliders →
     live z with animated right-tail shading), the standard
     normal table, football weights, salary ranges, the
     reverse-probability reorder gauge (1.645 → 25 gallons),
     uniform & exponential, and the Poisson ↔ exponential
     pairing
   · #specialty-toys — Lecture 15: the Weather Teddy order
     dial (σ = 5,102 extracted from the 1.96 tail, live
     stockout probabilities, the four profit ladders, and
     the 70% service-level pick Q = 22,653)
   · #go-bananas — Lecture 16: the GIG quality-control bench
     (the threshold dial vs the 1% target line, the
     process-improvement p-ladder, three approaches to the
     shutdown rule, and the summary ledger)

   Kit shared with parts 1–9: StmReadStep, StmCallout,
   StmPanel, StmQuiz (all exported from StmParts1) + the
   notes/ui Section, SectionHead, Reveal, Takeaways.
   ============================================================ */

import React, { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Banana,
  BarChart3,
  Check,
  Dices,
  Factory,
  FlaskConical,
  Gauge,
  Package,
  ShoppingBag,
  Sigma,
  SlidersHorizontal,
  TrendingDown,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   Shared machine plumbing
   ============================================================ */

/* violet header strip every machine opens with */
function MachineHead({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        {text}
      </p>
      <span aria-hidden className="shrink-0">
        {icon}
      </span>
    </div>
  );
}

/* standard-normal CDF (Abramowitz–Stegun 26.2.17) — the engine
   behind the Specialty Toys stockout chip */
function normCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const poly = t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  const tail = 0.39894228 * Math.exp((-z * z) / 2) * poly;
  return z > 0 ? 1 - tail : tail;
}

/* signed money chip text: +$25,000 / −$8,000 */
function money(n: number): string {
  return `${n < 0 ? "−" : "+"}$${Math.abs(n).toLocaleString("en-US")}`;
}

/* ============================================================
   LECTURE 13 · DISTRIBUTIONS & STATISTICAL CONCEPTS (#dist-recap)
   ============================================================ */

/* the TV-sales machine — 200 observed days become f(x), with a
   live Σf(x) = 1.00 verifier and the 1.2 → 5.2 E(X) swing */
function TvDistribution() {
  const [swing, setSwing] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(boxRef, { once: true, margin: "0px 0px -36px 0px" });

  /* the lecture's ledger: 0→80 days, 1→50, 2→40, 3→10, 4→20;
     the swing hands those 80 zero-days to 10-unit days */
  const bars: { x: number; days: number }[] = swing
    ? [
        { x: 0, days: 0 },
        { x: 1, days: 50 },
        { x: 2, days: 40 },
        { x: 3, days: 10 },
        { x: 4, days: 20 },
        { x: 10, days: 80 },
      ]
    : [
        { x: 0, days: 80 },
        { x: 1, days: 50 },
        { x: 2, days: 40 },
        { x: 3, days: 10 },
        { x: 4, days: 20 },
      ];
  const total = bars.reduce((s, b) => s + b.days, 0); // 200
  const sumF = bars.reduce((s, b) => s + b.days / total, 0); // Σf(x) = 1.00
  const ex = bars.reduce((s, b) => s + b.x * (b.days / total), 0); // 1.2 → 5.2
  const slots = [0, 1, 2, 3, 4, 10];
  const BASE = 150;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <MachineHead
          icon={<BarChart3 className="h-4 w-4" style={{ color: STM_G[600] }} />}
          text="machine — the tv-sales distribution · 200 observed days"
        />
        <motion.span
          key={swing ? "on" : "off"}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[.66rem] font-bold tabular-nums"
          style={{ background: STM_G.soft, color: STM_G[700] }}
        >
          <Check className="h-3.5 w-3.5" /> Σf(x) = {sumF.toFixed(2)}
        </motion.span>
      </div>

      <div ref={boxRef} className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg viewBox="0 0 480 190" className="h-auto w-full" role="img" aria-label="Bar chart of the TV-sales probability distribution with an optional 10-unit bar">
          <line x1="18" y1={BASE} x2="466" y2={BASE} stroke={STM_G.border} strokeWidth="1.4" />
          {slots.map((s, i) => {
            const b = bars.find((v) => v.x === s);
            if (!b || b.days === 0) return <text key={s} x={37 + i * 76 + 23} y={BASE + 18} textAnchor="middle" fontSize="10" fill="#8a7fae">{s}</text>;
            const f = b.days / total;
            const h = f * 280;
            const lead = i === 0 || s === 10;
            return (
              <g key={s}>
                <motion.rect
                  x={37 + i * 76}
                  width="46"
                  rx="5"
                  fill={lead ? "#6d28d9" : "#c4b5fd"}
                  initial={{ height: 0, y: BASE }}
                  animate={inView ? { height: h, y: BASE - h } : { height: 0, y: BASE }}
                  transition={{ delay: i * 0.07, type: "spring", stiffness: 140, damping: 17 }}
                />
                <text x={37 + i * 76 + 23} y={BASE - h - 7} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4c1d95">
                  {f.toFixed(2)}
                </text>
                <text x={37 + i * 76 + 23} y={BASE + 18} textAnchor="middle" fontSize="10" fill="#8a7fae">
                  {s}
                </text>
              </g>
            );
          })}
          <text x="18" y="16" fontSize="10" fill="#8a7fae">f(x) — probability</text>
          <text x="466" y="186" textAnchor="end" fontSize="10" fill="#8a7fae">X — units sold per day</text>
        </svg>
      </div>

      <div className="mt-3 grid items-center gap-3 sm:grid-cols-[1fr_auto]">
        <div>
          <button
            type="button"
            onClick={() => setSwing((v) => !v)}
            aria-pressed={swing}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[.74rem] font-bold transition-all"
            style={{
              borderColor: swing ? STM_G[600] : STM_G.border,
              background: swing ? STM_G[600] : "#fff",
              color: swing ? "#fff" : STM_G[800],
            }}
          >
            <Sigma className="h-3.5 w-3.5" /> {swing ? "Added: 80 days of 10-unit sales" : "Add 80 days of 10-unit sales"}
          </button>
          <p className="mt-2 flex items-center gap-1.5 text-[.72rem] leading-relaxed text-neutral-500">
            <Dices className="h-3.5 w-3.5 shrink-0" style={{ color: STM_G[700] }} />
            Discrete values only — 0, 1, 2, 3, 4 … no 1.5 on a dice, and no half-sold TV. The 80 zero-days give way to the 10-unit days.
          </p>
        </div>
        <div className="text-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={ex.toFixed(1)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="rounded-xl px-5 py-3 font-mono text-3xl font-black tabular-nums"
              style={{ background: "#4c1d95", color: "#f5f3ff" }}
            >
              {ex.toFixed(1)}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1 text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">E(X) = Σ(X·f(x)) — units/day</p>
        </div>
      </div>
    </div>
  );
}

export function StmDistRecapSection() {
  return (
    <Section id="dist-recap">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 13 · Probability Distributions & Statistical Concepts — the Consolidation Lap"
          title={
            <>
              The <span className="grad-violet">consolidation lap</span>
            </>
          }
          lead="One live lap before the quiz: discrete distributions rebuilt from a 200-day sales ledger, expected value and variance as inventory tools, the binomial–Poisson–uniform family — and the Excel sheet that does all of it without watching another day of data."
        />

        <StmReadStep n="01" title="The quiz brief — chapter 6, best two of three" sub="Objective, conceptual, calculator allowed" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Quiz information">{`Syllabus: Chapter 6 — Continuous
Probability Distribution.

Format: objective questions only,
with a conceptual focus.

Duration: 15–20 minutes maximum.
Tools: calculator allowed.
Weightage: 20 marks per quiz.`}</StmPanel>
            <StmPanel label="Structure & notice">{`Two quizzes of 20 marks each,
plus one combined-syllabus quiz.

Best two out of three will be
counted toward the grade.

Notice: at least one week's
advance warning of the exact
date and mode.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why this structure is kind">
            Best-two-of-three means one bad day never defines the grade, and the one-week notice turns panic into preparation. The conceptual focus says it plainly: know what each distribution assumes and when it applies — the arithmetic is the easy part once the idea is honest.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="Discrete distributions — values that jump, not glide" sub="Dice, coins, TV units — and why formulas beat endless observing" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Definition & characteristics">{`Discrete distributions: random
variables that take fixed,
non-continuous values.

Examples: rolling a dice (1–6),
coin tosses (heads/tails), the
number of TV units sold.

Cannot assume values between
defined points — no 1.5 when
rolling a dice.

Sequences may be finite or
infinite.`}</StmPanel>
            <StmPanel label="Why convert observations to formulas">{`Traditional method: probability =
favorable outcomes ÷ total
outcomes — you must observe
every scenario.

Mathematical formula approach:
converts observed data into
functions — easier calculations,
no need to observe everything.

Managers estimate probabilities
without waiting for complete
datasets, and compute quickly
in Excel without all the
historical data.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="The TV-sales rebuild — 200 days into a distribution" sub="Define X, compute f(x), verify Σf(x) = 1, then read E(X)" />
        <Reveal>
          <TvDistribution />
        </Reveal>
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The conversion process">{`1. Define the random variable X —
   the number of units sold.

2. Calculate f(x) for each value:
   f(x) = favorable days ÷ total days

Observed over 200 days:
0 units → 80 days → f = 0.40
1 unit  → 50 days → f = 0.25
2 units → 40 days → f = 0.20
3 units → 10 days → f = 0.05
4 units → 20 days → f = 0.10`}</StmPanel>
            <StmPanel label="The example outcome">{`Add 80 days of 10-unit sales and
the expected value moves from
1.2 to 5.2 units per day.

E(X) = Σ(X × f(x)) — multiply
each value by its probability,
then sum.

The dramatic change illustrates
how distribution modifications
significantly impact business
decisions.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="What E(X) buys a manager">
            The expected value is the central location of the distribution — the mean value the business should plan around. It helps managers estimate future demand, enables inventory planning decisions, guides workforce hiring and firing, and supports business forecasting for the upcoming period.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Variance — because the mean alone under-stocks" sub="Σ[(X − μ)² · f(x)], and the square root that speaks demand units" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Need for variance measurement">{`Mean alone is insufficient:
average demand is 3 units, you
stock 3 — and shortages occur
on the 4-unit days.

Solution: measure the
variability / fluctuation in
demand.

Formula: Variance =
Σ[(X − μ)² × f(x)]

Why squaring: prevents negative
and positive deviations from
canceling each other out.`}</StmPanel>
            <StmPanel label="Standard deviation">{`Trap: simple addition of
deviations fails — overstock
days offset understock days,
masking actual variability.

SD = √variance — the same units
as the original data, so spread
becomes interpretable.

Variance is useful for
mathematical calculations;
standard deviation is better
for practical interpretation
and decision-making.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Bivariate analysis & the common discrete distributions" sub="Covariance, correlation, binomial, Poisson, uniform" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Bivariate analysis">{`Two variables that potentially
move together or against each
other: gold & silver prices,
the stocks of related companies.

Covariance: the calculative tool
showing relationship direction.

Correlation: the interpretative
measure providing clearer
relationship insights.`}</StmPanel>
            <StmPanel label="Binomial distribution">{`Four conditions for use:
1. identical trials
2. only two outcomes per trial
   (success / failure)
3. constant probability of
   success in each trial
4. independent trials

Applications: coin tosses,
product quality testing
(pass/fail).

Excel: BINOM.DIST(number_s,
trials, probability_s,
cumulative)`}</StmPanel>
            <StmPanel label="Poisson distribution">{`Key property: probability of
occurrence is the same for any
two equal-length intervals.

f(x) = (μ^x × e^(−μ)) ÷ x!

x — occurrences in the interval
μ — mean occurrences per interval
e — the exponential constant

Applications: queue management
in banks, airports, railways;
customer arrival modeling.`}</StmPanel>
            <StmPanel label="Uniform — and a note">{`Uniform distribution: equally
likely outcomes across the range.

Hypergeometric distribution:
not emphasized at this level.

Scientific formulas were
discovered after centuries of
observation and trial-and-error —
they eliminate the need to
continuously observe and
re-pattern data, and give
consistent estimation across
similar phenomena.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="06" title="The Excel 7-step procedure" sub="From raw days to SD without leaving the sheet" />
        <Reveal>
          <StmPanel label="Practical implementation in Excel">{`1. Create columns: X, Number of Days, f(x)
2. Calculate f(x) = Days ÷ Total Days for each value
3. Verify: the sum of all f(x) values must equal 1
4. Calculate X × f(x) for each row
5. Sum X × f(x) → the expected value
6. For variance: calculate (X − Mean)², multiply by f(x)
7. Sum the variance column → variance;
   take the square root → standard deviation`}</StmPanel>
        </Reveal>

        <StmQuiz
          q="The TV counter stocks exactly its average of 3 units a day, yet customers still walk away angry on some days. Which calculation does the lecture demand next — and what does each member of the pair are for?"
          options={[
            "Variance then SD — squaring stops +/− deviations canceling, and SD converts spread back into demand units for decisions",
            "The mode — the most frequent sales figure is the safest quantity to stock",
            "Covariance — TV demand must first be tested against gold and silver prices",
            "The range — MAX minus MIN already captures every demand scenario",
          ]}
          answer={0}
          explain="A mean of 3 with 3 units stocked still shorts the 4-unit days. Variance = Σ[(X − μ)² × f(x)] — squaring stops overstock days from offsetting understock days and masking variability. SD = √variance returns the spread in the original units: variance for math, SD for interpretation and risk decisions."
        />

        <Takeaways
          items={[
            <>Observation → formula: <b>f(x) = favorable days ÷ total days</b> turns a 200-day ledger into a working distribution.</>,
            <><b>E(X) = Σ(X·f(x))</b> is the central location — it guides inventory, workforce and resource-allocation planning.</>,
            <><b>SD reveals demand fluctuation</b> for risk management — variance for math, SD for decisions; the mean alone under-stocks.</>,
            <>The scenario dictates the distribution: <b>binomial</b> (two outcomes, constant p), <b>Poisson</b> (equal-length intervals), <b>uniform</b> (equally likely).</>,
            <>Excel&apos;s <b>7-step sheet</b> replaces manual calculation — and theory plus application together drive data-driven decisions.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 14 · NORMAL & CONTINUOUS DISTRIBUTIONS (#normal-practice)
   ============================================================ */

/* the z-machine — X, μ, σ sliders → live z with an animated
   right-tail shading under the standard normal curve */
function ZMachine() {
  const [x, setX] = useState(200);
  const [mu, setMu] = useState(150);
  const [sigma, setSigma] = useState(60);
  const z = (x - mu) / sigma;
  const zClamped = Math.max(-3.4, Math.min(3.4, z));
  const zx = (v: number) => 240 + v * 55;
  const tailX = zx(zClamped);

  const curve = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 68; i++) {
      const zv = -3.4 + i * 0.1;
      const px = 240 + zv * 55;
      const py = 142 - 118 * Math.exp((-zv * zv) / 2);
      pts.push(`${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`);
    }
    return pts.join(" ");
  }, []);
  const area = `${curve} L427,142 L53,142 Z`;

  const sanity =
    z > 0.005
      ? "Above the mean — the probability beyond z should be below 50%."
      : z < -0.005
        ? "Below the mean — the probability up to z should exceed 50%."
        : "At the mean — the distribution splits exactly 50 / 50.";

  const presets: { label: string; x: number; mu: number; sigma: number }[] = [
    { label: "Firm A — μ 150 · σ 60 · X 200", x: 200, mu: 150, sigma: 60 },
    { label: "Firm B — μ 1,500 · σ 600 · X 2,000", x: 2000, mu: 1500, sigma: 600 },
  ];

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <MachineHead
        icon={<SlidersHorizontal className="h-4 w-4" style={{ color: STM_G[600] }} />}
        text="machine — the z-machine · Z = (X − μ) / σ"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((p) => {
          const on = x === p.x && mu === p.mu && sigma === p.sigma;
          return (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setX(p.x);
                setMu(p.mu);
                setSigma(p.sigma);
              }}
              aria-pressed={on}
              className="rounded-full border px-3 py-1.5 text-[.7rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              {p.label}
            </button>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg viewBox="0 0 480 168" className="h-auto w-full" role="img" aria-label={`Standard normal curve with right-tail shading beginning at z = ${z.toFixed(2)}`}>
          <defs>
            <clipPath id="zm-tail-clip">
              <motion.rect
                x={tailX}
                y="0"
                height="150"
                width={Math.max(0, 432 - tailX)}
                animate={{ x: tailX, width: Math.max(0, 432 - tailX) }}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
              />
            </clipPath>
          </defs>
          <path d={area} fill="#ddd6fe" opacity="0.9" clipPath="url(#zm-tail-clip)" />
          <line x1="34" y1="142" x2="446" y2="142" stroke={STM_G.border} strokeWidth="1.4" />
          <line x1="240" y1="24" x2="240" y2="142" stroke={STM_G.border} strokeDasharray="4 4" />
          <motion.line
            y1="24"
            y2="142"
            stroke="#5b21b6"
            strokeWidth="1.6"
            strokeDasharray="3 3"
            x1={tailX}
            x2={tailX}
            animate={{ x1: tailX, x2: tailX }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <path d={curve} fill="none" stroke="#6d28d9" strokeWidth="2.4" />
          {[-3, -2, -1, 0, 1, 2, 3].map((t) => (
            <g key={t}>
              <line x1={zx(t)} y1="142" x2={zx(t)} y2="147" stroke={STM_G.border} strokeWidth="1.2" />
              <text x={zx(t)} y="158" textAnchor="middle" fontSize="9.5" fill="#8a7fae">
                {t > 0 ? `+${t}` : t}
              </text>
            </g>
          ))}
          <text x="240" y="14" textAnchor="middle" fontSize="9.5" fill="#8a7fae">the shaded right tail is what the table prices</text>
        </svg>
      </div>
      <div className="mt-3 grid items-center gap-3 sm:grid-cols-[1fr_auto]">
        <div className="grid gap-2 sm:grid-cols-3">
          <label className="block" htmlFor="zm-x">
            <span className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
              X <span className="tabular-nums">{x.toLocaleString("en-US")}</span>
            </span>
            <input id="zm-x" type="range" min={0} max={2000} step={5} value={x} onChange={(e) => setX(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </label>
          <label className="block" htmlFor="zm-mu">
            <span className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
              μ <span className="tabular-nums">{mu.toLocaleString("en-US")}</span>
            </span>
            <input id="zm-mu" type="range" min={0} max={1500} step={10} value={mu} onChange={(e) => setMu(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </label>
          <label className="block" htmlFor="zm-sigma">
            <span className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
              σ <span className="tabular-nums">{sigma}</span>
            </span>
            <input id="zm-sigma" type="range" min={10} max={600} step={5} value={sigma} onChange={(e) => setSigma(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </label>
        </div>
        <div className="text-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={z.toFixed(2)}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="rounded-xl px-5 py-3 font-mono text-2xl font-black tabular-nums"
              style={{ background: "#4c1d95", color: "#f5f3ff" }}
            >
              z = {z.toFixed(2)}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1 text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">the standardized score</p>
        </div>
      </div>
      <p className="mt-2 text-[.74rem] leading-relaxed text-neutral-600">{sanity}</p>
    </div>
  );
}

/* the reorder machine — tolerated stockout risk → table z →
   reorder point X = μ + Z·σ on a 15–30 gallon gauge */
function ReorderMachine() {
  const TAILS: { p: string; z: number; note: string }[] = [
    { p: "20%", z: 0.842, note: "≈ the status-quo stock of 20 gallons — a 1-in-5 stockout week" },
    { p: "15%", z: 1.036, note: "" },
    { p: "10%", z: 1.282, note: "" },
    { p: "5%", z: 1.645, note: "the lecture's target — the z that cuts off 0.05 in the right tail" },
    { p: "2.5%", z: 1.96, note: "" },
    { p: "1%", z: 2.326, note: "" },
  ];
  const [ti, setTi] = useState(3);
  const t = TAILS[ti];
  const reorder = 15 + t.z * 6;
  const gx = (v: number) => 40 + ((v - 15) / 15) * 400;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <MachineHead
        icon={<Gauge className="h-4 w-4" style={{ color: STM_G[600] }} />}
        text="machine — reverse probability · X = μ + Z·σ · μ 15 gal, σ 6"
      />
      <label className="mt-3 block" htmlFor="rm-tail">
        <span className="flex items-baseline justify-between text-[.74rem] font-bold text-neutral-700">
          Tolerated stockout probability <span className="tabular-nums" style={{ color: STM_G[700] }}>{t.p}</span>
        </span>
        <input id="rm-tail" type="range" min={0} max={5} step={1} value={ti} onChange={(e) => setTi(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
        <span className="mt-1 flex justify-between font-mono text-[.6rem] font-bold tabular-nums text-neutral-400">
          {TAILS.map((v) => (
            <span key={v.p}>{v.p}</span>
          ))}
        </span>
      </label>
      <div className="mt-2 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg viewBox="0 0 480 96" className="h-auto w-full" role="img" aria-label={`Reorder point gauge marking ${reorder.toFixed(2)} gallons on a 15 to 30 gallon scale`}>
          <line x1="40" y1="70" x2="440" y2="70" stroke={STM_G.border} strokeWidth="2" />
          {[15, 20, 25, 30].map((v) => (
            <g key={v}>
              <line x1={gx(v)} y1="64" x2={gx(v)} y2="76" stroke={STM_G.border} strokeWidth="1.4" />
              <text x={gx(v)} y="90" textAnchor="middle" fontSize="10" fill="#8a7fae">
                {v}
              </text>
            </g>
          ))}
          <text x="40" y="16" fontSize="10" fill="#8a7fae">gallons — reorder point X</text>
          <motion.g animate={{ x: gx(reorder) }} transition={{ type: "spring", stiffness: 140, damping: 18 }}>
            <line x1="0" y1="30" x2="0" y2="66" stroke="#5b21b6" strokeWidth="1.6" strokeDasharray="3 3" />
            <path d="M0,56 L-8,70 L8,70 Z" fill="#5b21b6" />
            <text x="0" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4c1d95">
              {reorder.toFixed(1)}
            </text>
          </motion.g>
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${t.p}-${reorder.toFixed(2)}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-lg px-3 py-1.5 font-mono text-[.74rem] font-bold tabular-nums"
            style={{ background: "#4c1d95", color: "#f5f3ff" }}
          >
            X = 15 + {t.z} × 6 = {reorder.toFixed(2)} ≈ {Math.round(reorder)} gallons
          </motion.span>
        </AnimatePresence>
        {t.note ? (
          <span className="text-[.72rem] font-semibold" style={{ color: STM_G[700] }}>
            {t.note}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export function StmNormalPracticeSection() {
  return (
    <Section id="normal-practice">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 14 · Normal & Continuous Probability Distributions — Solving with the Table"
          title={
            <>
              Solving with <span className="grad-violet">the table</span>
            </>
          }
          lead="Three inputs make every probability estimable: the distribution, the mean and the standard deviation. Convert to Z, read the standard normal table — then run the trick in reverse and set a reorder point that caps stockouts at 5% without guessing."
        />

        <StmReadStep n="01" title="Three requirements, any probability" sub="Distribution, mean, standard deviation — then ask anything" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The three requirements">{`1. Identify the underlying
   distribution — typically the
   normal for natural phenomena.

2. Determine the mean μ.

3. Determine the standard
   deviation σ.

With these two parameters, any
probability for any value can
be estimated.`}</StmPanel>
            <StmPanel label="Why two parameters are enough">{`The normal is the default model
for natural phenomena — heights,
weights, demand, salaries.

μ pins the centre of the curve;
σ pins the spread.

Every question reduces to a
distance-from-the-mean question
measured in σ units — which is
exactly what Z computes.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The Z conversion — one scale for every normal" sub="Z = (X − μ) / σ, and a table from −3.4 to +3.4" />
        <Reveal>
          <ZMachine />
        </Reveal>
        <Reveal>
          <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The standard normal table">{`Cumulative probabilities for z
from −3.4 to +3.4.

z = 0 → 0.50 (the mean divides
the distribution equally)

z = 2 → 0.9772

Negative z by symmetry:
P(Z ≤ −a) = P(Z ≥ a) = 1 − P(Z ≤ a)`}</StmPanel>
            <StmPanel label="The lecture's twin firms">{`Firm A: μ = 150, σ = 60,
asking P(X > 200).

Firm B: μ = 1,500, σ = 600,
asking P(X > 2,000).

Both computations result in
Z = 0.83 — standardization
erases the units, so one table
answers every normal question.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Football weights — reading the table" sub="μ = 200 lbs, σ = 25, and the 2.28% answer" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Worked example">{`Given: mean = 200 pounds,
standard deviation = 25 pounds.

Question: P(weight > 250)?

z = (250 − 200) / 25 = 2
table: P(Z ≤ 2) = 0.9772
answer: P(Z > 2) = 1 − 0.9772
= 0.0228 → 2.28%`}</StmPanel>
            <StmPanel label="The same move, twice">{`250 is two σ above 200 —
the table says 97.72% of
players weigh 250 or less.

So only the right sliver
remains: 2.28%.

Notice the shape of every
table problem: convert,
read the cumulative, take
the complement when the
question points right.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Intuitive sanity checks">
            Estimating a value below the mean? The probability should exceed 50%. Above the mean? Below 50%. Run this logic before trusting any answer — if the table reading violates it, the z was computed or read the wrong way round.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Ranges between two values" sub="P(a ≤ X ≤ b) = P(Z ≤ Z₂) − P(Z ≤ Z₁)" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The range rule">{`Calculate the z-score for both
boundaries, then:

P(a ≤ X ≤ b) = P(Z ≤ Z₂) − P(Z ≤ Z₁)

Salary range 34,000 to 46,000,
mean 40,000, σ = 5,000:

z₁ = (34,000 − 40,000) / 5,000 = −1.2
z₂ = (46,000 − 40,000) / 5,000 = +1.2`}</StmPanel>
            <StmPanel label="Symmetry finishes it">{`P(−1.2 ≤ Z ≤ 1.2)
= 2 × P(Z ≤ 1.2) − 1

Because the range is centered on
the mean, the two tails match —
subtract once, double the rest.

An off-center range keeps the
plain subtraction: cumulative
at the upper z minus cumulative
at the lower z.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Reverse probability — the reorder point" sub="X = μ + Z·σ, and the 25-gallon answer" />
        <Reveal>
          <ReorderMachine />
        </Reveal>
        <Reveal>
          <div className="mt-4 grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The reorder decision">{`Goal: limit stockout probability
to no more than 5%.

Find the z-value that cuts off
0.05 in the right tail — z ≈ 1.645.

Given mean = 15 gallons, σ = 6:
X = 15 + (1.645 × 6) = 24.87 ≈ 25 gallons

Raising stock from 20 to 25 gallons
cuts the stockout probability from
20% to 5% — fulfilling 15% more
demand.`}</StmPanel>
            <StmPanel label="Excel, when the sheet takes over">{`NORM.DIST(x, mean, SD,
cumulative) — cumulative TRUE
returns the probability
distribution value.

NORM.S.DIST(z, cumulative) —
works with z-scores directly.

Excel simplifies the arithmetic,
but understanding the z-table
remains essential for
conceptual comprehension.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="What the statistical approach is worth">
            It eliminates guesswork in inventory management. Overpurchasing bleeds storage costs, ties up capital and ends in spoilage; underpurchasing forfeits sales. One z-read from the table prices both mistakes — and turns customer satisfaction into a cost-optimised decision.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="Uniform & exponential — the continuous cousins" sub="f(x) = 1/(b−a), and the clock between events" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Uniform distribution">{`f(x) = 1 / (b − a)

Equal probability across all
values in the range.

Example: range 2 to 6 gives
probability density = 1/4.`}</StmPanel>
            <StmPanel label="Exponential distribution">{`Describes time between events
or time to complete tasks:

vehicle arrivals at toll booths,
time to complete tasks, distance
between defects on highways,
waiting times in service lines.

Mean equals standard deviation
(μ = σ); right-skewed with
skewness = 2.

f(x) = (1/μ) × e^(−x/μ)
P(X ≤ x) = 1 − e^(−x/μ)`}</StmPanel>
            <StmPanel label="The car-arrival example">{`Mean time between car arrivals
= 3 minutes.

P(time between arrivals ≤ 2 min)
= 1 − e^(−2/3) ≈ 48%.

Application: a petrol pump owner
plans staffing and break
schedules around that 48%.

Learning curve: improvement with
practice follows the exponential
pattern — "practice makes perfect."`}</StmPanel>
            <StmPanel label="Poisson ↔ exponential pairing">{`Poisson: the number of
occurrences WITHIN a specific
interval.

Exponential: the length of time
BETWEEN occurrences.

At a service station, use both —
estimate the duration until the
next customer, and the total
customers in a period.

Together they support waiting-line
systems, hospitals, resource
allocation and capacity planning.`}</StmPanel>
          </div>
        </Reveal>

        <StmQuiz
          q="Firm A (μ = 150, σ = 60) wants P(X > 200). Firm B (μ = 1,500, σ = 600) wants P(X > 2,000). A manager facing μ = 15 gallons, σ = 6 wants stockouts capped at 5%. What does the standard normal hand each of them?"
          options={[
            "Both firms get z = 0.83; the manager reorders at 15 + 1.645 × 6 ≈ 25 gallons",
            "Firm A gets z = 0.83 but firm B gets z = 8.33; the manager reorders at 20 gallons",
            "Both firms get z = 0.50; the manager reorders at 15 + 0.05 × 6 gallons",
            "The firms' z-scores cannot be compared — different units; the manager reorders at exactly 15 gallons",
          ]}
          answer={0}
          explain="Z = (X − μ)/σ standardizes every normal onto one table: (200 − 150)/60 = (2,000 − 1,500)/600 = 0.83. Reverse probability runs X = μ + Z·σ: the z cutting 0.05 off the right tail is ≈ 1.645, so X = 15 + 1.645 × 6 = 24.87 ≈ 25 gallons — the reorder point that drops stockouts from 20% to 5%."
        />

        <Takeaways
          items={[
            <>Three inputs — <b>distribution, μ, σ</b> — make any probability estimable; <b>Z = (X − μ)/σ</b> puts every normal on one −3.4 → +3.4 table.</>,
            <>Sanity first: <b>below the mean → above 50%</b>, above the mean → below 50%; z = 0 reads 0.50, z = 2 reads 0.9772.</>,
            <>Ranges subtract cumulatives: <b>P(a ≤ X ≤ b) = P(Z ≤ Z₂) − P(Z ≤ Z₁)</b>; centered ranges become 2 × P(Z ≤ 1.2) − 1.</>,
            <>Reverse probability <b>X = μ + Z·σ</b>: 1.645 turned 15 ± 6 gallons into a <b>25-gallon reorder point</b> — stockouts 20% → 5%, 15% more demand served.</>,
            <>Exponential times the gap <b>between</b> events (μ = σ, skewness 2); Poisson counts events <b>in</b> an interval — together they design waiting lines, hospitals and capacity.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 15 · SPECIALTY TOYS CASE (#specialty-toys)
   ============================================================ */

/* the order-quantity dial — five anchor quantities, live
   stockout probability (1 − NORM.DIST) and the three
   verbatim profit scenarios from the lecture */
function OrderMachine() {
  const ORDERS: { q: number; profits: [number, number, number]; tag: string }[] = [
    { q: 15000, profits: [25000, 120000, 120000], tag: "management suggestion" },
    { q: 18000, profits: [-8000, 168000, 168000], tag: "management suggestion" },
    { q: 22653, profits: [-59083, 130000, 181000], tag: "70% service-level pick" },
    { q: 24000, profits: [-74000, 116000, 192000], tag: "management suggestion" },
    { q: 28000, profits: [-100000, 72000, 200000], tag: "management suggestion" },
  ];
  const DEMANDS: { label: string; units: number }[] = [
    { label: "demand 10,000 — worst", units: 10000 },
    { label: "demand 20,000 — likely", units: 20000 },
    { label: "demand 30,000 — best", units: 30000 },
  ];
  const [k, setK] = useState(0);
  const o = ORDERS[k];
  const z = (o.q - 20000) / 5102;
  const service = normCdf(z) * 100;
  const risk = 100 - service;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <MachineHead
        icon={<ShoppingBag className="h-4 w-4" style={{ color: STM_G[600] }} />}
        text="machine — the weather teddy order dial · μ 20,000 · σ 5,102"
      />
      <label className="mt-3 block" htmlFor="om-q">
        <span className="flex items-baseline justify-between text-[.74rem] font-bold text-neutral-700">
          Order quantity Q <span className="tabular-nums" style={{ color: STM_G[700] }}>{o.q.toLocaleString("en-US")} units · {o.tag}</span>
        </span>
        <input id="om-q" type="range" min={0} max={4} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
        <span className="mt-1 flex justify-between font-mono text-[.6rem] font-bold tabular-nums text-neutral-400">
          {ORDERS.map((v) => (
            <span key={v.q}>{v.q.toLocaleString("en-US")}</span>
          ))}
        </span>
      </label>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {[
          { k: "Z = (Q − μ) / σ", v: z.toFixed(2) },
          { k: "NORM.DIST(Q, 20000, 5102, TRUE)", v: `${service.toFixed(2)}%` },
          { k: "stockout = 1 − result", v: `${risk.toFixed(2)}%` },
        ].map((c) => (
          <div key={c.k} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
            <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.1em]" style={{ color: STM_G[700] }}>
              {c.k}
            </p>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.p
                key={c.v}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="mt-1 font-mono text-[1.1rem] font-black tabular-nums"
                style={{ color: "#4c1d95" }}
              >
                {c.v}
              </motion.p>
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-2 h-2.5 overflow-hidden rounded-full" style={{ background: STM_G.soft }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#8b5cf6,#6d28d9)" }}
          animate={{ width: `${risk}%` }}
          transition={{ type: "spring", stiffness: 140, damping: 20 }}
        />
      </div>
      <p className="mt-1 text-[.64rem] font-bold uppercase tracking-[.12em] text-neutral-400">stockout risk meter — demand exceeding Q</p>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {DEMANDS.map((d, di) => {
          const p = o.profits[di];
          const good = p >= 0;
          return (
            <div key={d.units} className="rounded-xl border p-3" style={{ borderColor: good ? "#86efac" : "#fca5a5", background: good ? "#f0fdf4" : "#fef2f2" }}>
              <p className="text-[.64rem] font-bold uppercase tracking-[.1em] text-neutral-500">{d.label}</p>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.p
                  key={p}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="mt-1 flex items-center gap-1.5 font-mono text-[1rem] font-black tabular-nums"
                  style={{ color: good ? "#166534" : "#991b1b" }}
                >
                  {good ? <TrendingUp className="h-4 w-4 shrink-0" /> : <TrendingDown className="h-4 w-4 shrink-0" />}
                  {money(p)}
                </motion.p>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-[.72rem] leading-relaxed text-neutral-500">
        Orders 15,000 · 18,000 · 24,000 · 28,000 are the management suggestions; 22,653 is the risk-based pick for a 70% service level. Slide through all five and watch the trade: stockout risk falls as the low-demand loss deepens.
      </p>
    </div>
  );
}

export function StmSpecialtyToysSection() {
  return (
    <Section id="specialty-toys">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 15 · Applied Case — Normal Distribution in Inventory Management"
          title={
            <>
              The Weather Teddy <span className="grad-violet">order call</span>
            </>
          }
          lead="Specialty Toys commits in June or July and finds out in October. Weather Teddy's demand curve, four suggested order quantities — and one statistician's answer: extract σ from the 95% range, then let the normal curve price every order-quantity decision."
        />

        <StmReadStep n="01" title="The case — one shot before the holidays" sub="June/July orders for October shelves" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The business problem">{`Specialty Toys launches new
innovative toys during the
pre-holiday season.

One-time orders are placed with
manufacturers in June or July
for October delivery.

The decision: the optimal order
quantity for a new product with
no sales history.`}</StmPanel>
            <StmPanel label="The product — Weather Teddy">{`A new talking teddy bear with
a built-in barometer that
predicts the weather.

Five different weather-related
responses when a child presses
the bear's hand.

Predictions have been
surprisingly accurate in
testing.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The core dilemma">
            Order too few units and the season&apos;s demand walks away as lost sales. Order too many and the leftovers come back as unsold inventory that must be cleared at deep discounts. One order, one shot, two ways to bleed.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="Weather Teddy's financials & the demand picture" sub="$24 / $16 / $8 — and the $11 off-season hangover" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Pricing structure">{`Regular selling price: $24 per unit
Cost per unit: $16

Profit per unit (in-season): $8

Clearance / salvage price: $5
per unit

Loss per unit (off-season): $11`}</StmPanel>
            <StmPanel label="Demand information">{`Expected demand: 20,000 units

95% probability that demand
falls between 10,000 and
30,000 units.

Management suggestions for the
order quantity: 15,000 ·
18,000 · 24,000 · 28,000 units.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Setting up the normal" sub="2.5% tails, z = 1.96, and σ = 5,102 extracted from a forecast" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Establishing the curve">{`Mean: μ = 20,000 units
(expected demand)

Demand is normally distributed
and symmetric — 2.5% probability
on each tail of the 95% range.

Use z = 1.96 for the 97.5
percentile:

1.96 = (30,000 − 20,000) / σ
σ = 10,000 / 1.96 = 5,102 units`}</StmPanel>
            <StmPanel label="Stockout analysis">{`Stockout: demand exceeds the
order quantity.

Z = (order quantity − mean) / σ
Stockout probability =
1 − NORM.DIST result

Order 15,000 → ~16.35%
Order 18,000 → lower
Order 24,000 → lower still
Order 28,000 → minimal`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="04" title="The order-quantity machine" sub="Stockout risk and the three profit scenarios, live" />
        <Reveal>
          <OrderMachine />
        </Reveal>
        <Reveal>
          <StmPanel label="Profit ledger — the lecture's four suggestions × three demands">{`              demand 10,000   demand 20,000   demand 30,000
Q = 15,000      +$25,000        +$120,000       +$120,000 (capped by stock)
Q = 18,000       −$8,000        +$168,000       +$168,000
Q = 24,000      −$74,000        +$116,000       +$192,000
Q = 28,000     −$100,000         +$72,000       +$200,000`}</StmPanel>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Two readings, one chip pair">
            The ~16.35% the lecture quotes for the 15,000-unit order is the NORM.DIST cumulative reading at that quantity — and its complement, 1 − result, is the stockout leg that walks down from steep to minimal as Q climbs to 28,000. Read both chips together and the trade-off is unmistakable: every thousand units of upside insurance is bought with low-demand exposure.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Risk-based ordering — the 70% service level" sub="NORM.S.INV(0.70) = 0.52 → Q = 22,653" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The 70% service level">{`Scenario: accept a 30% stockout
tolerance.

Use NORM.S.INV(0.70) to find
the z-score = 0.52.

Order quantity formula:
Q = (Z × σ) + μ
Q = (0.52 × 5,102) + 20,000
= 22,653 units`}</StmPanel>
            <StmPanel label="Profit results at 22,653">{`Demand 10,000: −$59,083

Demand 20,000: +$130,000

Demand 30,000: +$181,000

Between the 18,000 and 24,000
suggestions — upside close to
the aggressive orders, downside
materially softer.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="06" title="The risk ledger" sub="Higher Q buys upside with downside — risk tolerance decides" />
        <Reveal>
          <StmCallout kind="insight" title="Trade-offs in the order quantity">
            Higher order quantities maximize profit potential but increase the risk of losses in low-demand scenarios; lower quantities reduce downside risk but cap the profit when demand is high. The optimal decision depends on management&apos;s risk tolerance — and higher profit potential may justify accepting a greater risk of stockout. Different managers can legitimately choose differently.
          </StmCallout>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The statistical advantage">
            Statistical analysis beats random guessing: probability distributions let managers quantify risks and expected outcomes, so the final choice is an informed one aligned with the business&apos;s risk appetite — and the framework supports multiple valid strategic approaches rather than a single verdict.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="Demand for Weather Teddy is normal with μ = 20,000, and 95% of demand falls between 10,000 and 30,000 units. Which derivation — and which 70% service-level order — follow from the lecture?"
          options={[
            "σ = 10,000 ÷ 1.96 = 5,102; Q = 20,000 + 0.52 × 5,102 = 22,653 units",
            "σ = 20,000 ÷ 1.96 = 10,204; Q = 20,000 + 1.96 × 5,102 units",
            "σ = 5,102; Q = 30,000 — ordering the best case makes stockouts impossible",
            "σ = 10,000 ÷ 0.95 = 10,526; Q = NORM.S.INV(0.70) × σ alone",
          ]}
          answer={0}
          explain="The 95% central range leaves 2.5% per tail, so the 97.5th percentile sits at z = 1.96: 1.96 = 10,000/σ → σ = 5,102. For a 70% service level (30% stockout tolerance), NORM.S.INV(0.70) = 0.52, and Q = (0.52 × 5,102) + 20,000 = 22,653 units — profits −$59,083 / +$130,000 / +$181,000 across the three demands."
        />

        <Takeaways
          items={[
            <>One-shot ordering: too few loses sales, too many forces <b>$5 clearance on $16 cost</b> — an <b>$11 per-unit</b> off-season hangover against $8 of in-season profit.</>,
            <>σ extracted from a probability: <b>10,000 ÷ 1.96 = 5,102</b> — the normal curve turns a forecast range into a working parameter.</>,
            <>Q is a risk dial: 15,000 caps upside at <b>$120,000</b>; 28,000 buys <b>$200,000</b> potential against a <b>−$100,000</b> worst case.</>,
            <>70% service level: <b>NORM.S.INV(0.70) = 0.52</b> → <b>Q = 22,653</b> (−$59,083 / +$130,000 / +$181,000).</>,
            <>Statistics beats guessing — distributions quantify risk, and <b>multiple valid strategies</b> survive; risk tolerance picks the winner.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 16 · GO BANANAS QUALITY CONTROL (#go-bananas)
   ============================================================ */

/* the threshold dial — shutdown rule 4→7 with the live
   false-alarm bar against the 1% target line */
function ThresholdDial() {
  const THRESH: { k: number; p: number; label: string; verdict: string }[] = [
    { k: 4, p: 13.5, label: "13.5%", verdict: "too high — more false alarms than the current rule" },
    { k: 5, p: 4.5, label: "4.5%", verdict: "the current rule — P(X ≥ 5) under normal operations" },
    { k: 6, p: 1.5, label: "1.5%", verdict: "closer, but still above the 1% goal" },
    { k: 7, p: 0.3, label: "0.2–0.3%", verdict: "meets the goal — with a caveat" },
  ];
  const [ti, setTi] = useState(1);
  const t = THRESH[ti];
  const BASE = 126;
  const SCALE = 14;
  const barH = (p: number) => (p / SCALE) * 108;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <MachineHead
        icon={<Factory className="h-4 w-4" style={{ color: STM_G[600] }} />}
        text="machine — the shutdown threshold dial · n = 25, p = 0.08"
      />
      <label className="mt-3 block" htmlFor="td-k">
        <span className="flex items-baseline justify-between text-[.74rem] font-bold text-neutral-700">
          Shutdown threshold (failures per weekly sample) <span className="tabular-nums" style={{ color: STM_G[700] }}>≥ {t.k} boxes</span>
        </span>
        <input id="td-k" type="range" min={0} max={3} step={1} value={ti} onChange={(e) => setTi(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
        <span className="mt-1 flex justify-between font-mono text-[.6rem] font-bold tabular-nums text-neutral-400">
          {THRESH.map((v) => (
            <span key={v.k}>{v.k}</span>
          ))}
        </span>
      </label>
      <div className="mt-2 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg viewBox="0 0 480 156" className="h-auto w-full" role="img" aria-label={`Bar chart of shutdown probability for thresholds 4 to 7, with the 1% target line`}>
          <line x1="30" y1={BASE} x2="460" y2={BASE} stroke={STM_G.border} strokeWidth="1.4" />
          <line x1="30" y1={BASE - barH(1)} x2="460" y2={BASE - barH(1)} stroke="#5b21b6" strokeWidth="1.4" strokeDasharray="5 4" />
          <text x="460" y={BASE - barH(1) - 5} textAnchor="end" fontSize="9.5" fontWeight="700" fill="#5b21b6">
            1% goal
          </text>
          {THRESH.map((v, i) => {
            const h = barH(v.p);
            const on = i === ti;
            return (
              <g key={v.k}>
                <motion.rect
                  x={52 + i * 106}
                  width="62"
                  rx="5"
                  fill={on ? "#6d28d9" : "#ddd6fe"}
                  initial={{ height: 0, y: BASE }}
                  animate={{ height: h, y: BASE - h }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                />
                <text x={52 + i * 106 + 31} y={BASE - h - 6} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4c1d95">
                  {v.label}
                </text>
                <text x={52 + i * 106 + 31} y={BASE + 17} textAnchor="middle" fontSize="10.5" fontWeight={on ? 800 : 400} fill={on ? "#4c1d95" : "#8a7fae"}>
                  {v.k}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[.74rem] font-bold"
          style={{ background: t.k === 7 ? "#f0fdf4" : STM_G.soft, color: t.k === 7 ? "#166534" : STM_G[800] }}
        >
          {t.k === 7 ? <Check className="h-3.5 w-3.5" /> : null} {t.verdict}
        </span>
      </div>
      {t.k === 7 ? (
        <p className="mt-2 rounded-xl border p-3 text-[.74rem] leading-relaxed" style={{ borderColor: "#e8a896", background: "#fbeae5", color: "#b3402c" }}>
          Caveat: allowing 7 of 25 boxes (28%) to fail may be too lenient and harm the product quality reputation.
        </p>
      ) : null}
    </div>
  );
}

/* the p-ladder — process failure rate 0.08 → 0.05 with the
   strict 5-failure rule intact */
function ProcessLadder() {
  const LADDER: { p: string; prob: number; label: string; verdict: string }[] = [
    { p: "0.08", prob: 4.5, label: "4.5%", verdict: "today's process — 8% of boxes outside spec" },
    { p: "0.07", prob: 2.7, label: "2.7%", verdict: "maintenance and calibration begin to bite" },
    { p: "0.06", prob: 1.5, label: "1.5%", verdict: "still above the 1% goal" },
    { p: "0.05", prob: 1.0, label: "~1%", verdict: "the goal is met — strict rule intact" },
  ];
  const [pi, setPi] = useState(0);
  const cur = LADDER[pi];
  const BASE = 126;
  const SCALE = 5;
  const barH = (p: number) => (p / SCALE) * 108;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <MachineHead
        icon={<Wrench className="h-4 w-4" style={{ color: STM_G[600] }} />}
        text="machine — the process-improvement p-ladder · threshold stays at 5"
      />
      <div className="mt-3 flex flex-wrap gap-2">
        {LADDER.map((v, i) => {
          const on = i === pi;
          return (
            <button
              key={v.p}
              type="button"
              onClick={() => setPi(i)}
              aria-pressed={on}
              className="rounded-full border px-3 py-1.5 font-mono text-[.7rem] font-bold tabular-nums transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              p = {v.p}
            </button>
          );
        })}
      </div>
      <div className="mt-2 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg viewBox="0 0 480 156" className="h-auto w-full" role="img" aria-label="Bar chart of shutdown probability falling as the process failure rate falls from 0.08 to 0.05">
          <line x1="30" y1={BASE} x2="460" y2={BASE} stroke={STM_G.border} strokeWidth="1.4" />
          <line x1="30" y1={BASE - barH(1)} x2="460" y2={BASE - barH(1)} stroke="#5b21b6" strokeWidth="1.4" strokeDasharray="5 4" />
          <text x="460" y={BASE - barH(1) - 5} textAnchor="end" fontSize="9.5" fontWeight="700" fill="#5b21b6">
            1% goal
          </text>
          {LADDER.map((v, i) => {
            const h = barH(v.prob);
            const on = i === pi;
            return (
              <g key={v.p}>
                <motion.rect
                  x={52 + i * 106}
                  width="62"
                  rx="5"
                  fill={on ? "#6d28d9" : "#ddd6fe"}
                  initial={{ height: 0, y: BASE }}
                  animate={{ height: h, y: BASE - h }}
                  transition={{ type: "spring", stiffness: 160, damping: 18 }}
                />
                <text x={52 + i * 106 + 31} y={BASE - h - 6} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4c1d95">
                  {v.label}
                </text>
                <text x={52 + i * 106 + 31} y={BASE + 17} textAnchor="middle" fontSize="10" fill={on ? "#4c1d95" : "#8a7fae"}>
                  {v.p}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <p className="mt-3 text-[.74rem] font-semibold" style={{ color: STM_G[800] }}>
        {cur.verdict}
      </p>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {[
          { icon: Wrench, t: "Machine maintenance & calibration" },
          { icon: Package, t: "Packaging system adjustments" },
          { icon: FlaskConical, t: "Quality control enhancements" },
        ].map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.t} className="flex items-center gap-2 rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <Icon className="h-4 w-4 shrink-0" style={{ color: STM_G[700] }} />
              <span className="text-[.72rem] font-bold leading-snug" style={{ color: STM_G[900] }}>
                {c.t}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function StmGoBananasSection() {
  return (
    <Section id="go-bananas">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 16 · Applied Case — Discrete Probability in Quality Control"
          title={
            <>
              Quality control at <span className="grad-violet">Go Bananas</span>
            </>
          }
          lead="GIG's new cereal mixes rice flakes with banana-flavored marshmallows — and a shutdown rule that fires at 5 failed boxes a week. Binomial probability prices the false alarms, then two dials — the threshold and the process failure rate — buy the way below 1%."
        />

        <StmReadStep n="01" title="The case — Go Bananas, 16 ounces at a time" sub="GIG, marshmallows 50–75 g, and a weekly sample of 25" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Company & product">{`Company: GIG (Go Great Indian
Grains Ltd.) — a breakfast
cereal manufacturer.

New product: "Go Bananas" — a
16-ounce box containing rice
flakes and banana-flavored
marshmallows.

Target specification: the
marshmallows must weigh between
50 and 75 grams per box.`}</StmPanel>
            <StmPanel label="Key parameters">{`Random sample: 25 boxes per week.

Current process failure rate:
8% — boxes outside specification.

Shutdown criteria: if 5 or more
boxes fail to meet the weight
standards, production stops
for inspection.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex items-center gap-2 rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
            <Banana className="h-5 w-5 shrink-0" style={{ color: STM_G[700] }} />
            <p className="text-[.78rem] leading-relaxed text-neutral-700">
              Two outcomes per box — pass or fail — with a constant failure probability and independent boxes: the binomial conditions from Lecture 13, met exactly. The question that follows is managerial, not mathematical: how often does a healthy process trip its own alarm?
            </p>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Problem 1 — the false-alarm probability" sub="n = 25, p = 0.08, P(X ≥ 5) → 4.5%" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Solution using Excel">{`Objective: probability that a
weekly sample triggers shutdown
even when the process works.

Binomial: two outcomes, n = 25,
p = 0.08. What is P(X ≥ 5)?

BINOM.DIST with cumulative =
FALSE gives individual
probabilities for 0 to 25
failures; sum 5 → 25.

Alternative: 1 − P(X ≤ 4).

Result: 4.5% — the shutdown
probability under normal
operations.`}</StmPanel>
            <StmPanel label="Key Excel techniques">{`Absolute cell references ($FF$1
in the lecture) lock the sample
size and probability values so
formulas copy without shifting.

Cumulative vs mass function:
FALSE = exact probability of a
specific outcome (the mass
function), TRUE = cumulative
probability up to that outcome.

Paste Special: "Paste as
Numbers" copies values without
the formulas.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Problem 2 — relaxing the threshold" sub="4 → 13.5%, 5 → 4.5%, 6 → 1.5%, 7 → 0.2–0.3%" />
        <Reveal>
          <ThresholdDial />
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The decision, then the doubt">
            To cut false alarms from 4.5% to no more than 1% while keeping n and p unchanged, the shutdown criteria moves from 5 boxes to 7 — threshold 6 still leaves 1.5%. But the caveat travels with the decision: allowing 7 of 25 boxes to fail means tolerating a 28% failure rate, which may be too lenient and harm the quality reputation.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Problem 3 — fix the process, keep the strict rule" sub="p: 0.08 → 0.07 → 0.06 → 0.05, threshold unmoved" />
        <Reveal>
          <ProcessLadder />
        </Reveal>
        <Reveal>
          <StmPanel label="Process improvement analysis">{`Objective: keep the shutdown
threshold at 5 boxes while
reducing the false alarm rate
to 1% or less — by improving
the production process.

At p = 0.08 → 4.5% shutdown
At p = 0.07 → 2.7% shutdown
At p = 0.06 → 1.5% shutdown
At p = 0.05 → ~1% shutdown
(achieves the goal)

Solution: reduce the process
failure rate from 8% to
approximately 5%.`}</StmPanel>
        </Reveal>

        <StmReadStep n="05" title="Three approaches & the impossible 100%" sub="Relax, improve, or sample more" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-3">
            <StmPanel label="1 · Relax inspection criteria">{`Increase acceptable failures
from 5 to 7 boxes.

Not recommended — damages
brand quality.`}</StmPanel>
            <StmPanel label="2 · Improve process capability">{`Reduce the failure rate from
8% to 5% through maintenance,
packaging and QC work.

Recommended — strengthens
operations.`}</StmPanel>
            <StmPanel label="3 · Increase sample size">{`Test more boxes per week.

Raises inspection costs —
more testing, same process.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The statistical impossibility">
            A 100% error-free process is statistically impossible. Management must balance quality goals with operational feasibility — accepting some baseline failure rate while implementing continuous process improvements.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="The summary ledger" sub="Three questions, three parameter changes, three answers" />
        <Reveal>
          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: STM_G.border }}>
            <table className="w-full text-left text-[.78rem]">
              <thead>
                <tr style={{ background: "#f1ecfd", color: STM_G[800] }}>
                  <th scope="col" className="px-4 py-2.5 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]">
                    Question
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]">
                    Scenario
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]">
                    Parameter changed
                  </th>
                  <th scope="col" className="px-4 py-2.5 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]">
                    Result
                  </th>
                </tr>
              </thead>
              <tbody className="text-neutral-700">
                {[
                  { q: "1", s: "Current shutdown rule", p: "n = 25, p = 0.08, threshold = 5", r: "4.5% shutdown rate" },
                  { q: "2", s: "Relax criteria", p: "n = 25, p = 0.08, threshold = 7", r: "0.3% shutdown rate" },
                  { q: "3", s: "Improve process", p: "n = 25, p = 0.05, threshold = 5", r: "~1% shutdown rate" },
                ].map((row) => (
                  <tr key={row.q} className="border-t" style={{ borderColor: STM_G.border }}>
                    <td className="px-4 py-2.5 font-bold" style={{ color: STM_G[800] }}>
                      {row.q}
                    </td>
                    <td className="px-4 py-2.5">{row.s}</td>
                    <td className="px-4 py-2.5 font-mono text-[.72rem] tabular-nums">{row.p}</td>
                    <td className="px-4 py-2.5 font-bold" style={{ color: STM_G[900] }}>
                      {row.r}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <StmQuiz
          q="GIG's weekly sample: n = 25, p = 0.08, and the shutdown rule fires at 5 failures — a 4.5% false-alarm rate. Management wants ≤ 1% without touching the sample size. Which route does the lecture recommend, and where does it land?"
          options={[
            "Improve the process to p = 0.05 — the strict 5-failure rule stays and shutdown risk falls to ~1%",
            "Raise the threshold to 7 — the lecture's first choice, with no downside",
            "Cut the sample to 20 boxes — fewer draws mean fewer false alarms with the same protection",
            "Push p to 0 — a 100% error-free process is achievable with better calibration",
          ]}
          answer={0}
          explain="Threshold 7 does hit 0.2–0.3%, but it tolerates 7 of 25 boxes failing (28%) — the lecture's caveat: too lenient, and it damages the quality reputation, so relaxing criteria is not recommended. Reducing p from 8% to ~5% (maintenance, packaging, QC) keeps the strict rule and lands at ~1% — recommended because it strengthens operations. And a 100% error-free process is statistically impossible."
        />

        <Takeaways
          items={[
            <>A quality rule is a binomial: <b>n = 25, p = 0.08, P(X ≥ 5) = 4.5%</b> — false alarms are priced in, not accidents.</>,
            <>Dial one — the threshold: 5 → 7 drops alarms to <b>0.2–0.3%</b>, but tolerating <b>28%</b> failures risks the brand.</>,
            <>Dial two — the process: <b>p 0.08 → 0.05</b> keeps the strict rule and meets <b>~1%</b> via maintenance, packaging and QC.</>,
            <>Excel: <b>BINOM.DIST</b> with $-locked n and p; <b>FALSE = mass, TRUE = cumulative</b>; 1 − P(X ≤ 4) ≡ Σ from 5 to 25.</>,
            <>A <b>100% error-free process is statistically impossible</b> — balance quality goals with operational feasibility.</>,
          ]}
        />
      </div>
    </Section>
  );
}
