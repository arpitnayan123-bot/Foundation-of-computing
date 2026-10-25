"use client";

/* ============================================================
   Statistics for Managers — PART 4 of 7 (shelf 05). Chapter 3:
   Descriptive Statistics — Numerical Measures. Measures of
   location (mean, median, mode, weighted mean, geometric mean,
   percentiles, quartiles) with the live Mean-vs-Median outlier
   machine; measures of variability (range, IQR, variance,
   standard deviation, coefficient of variation); distribution
   shape, z-scores, Chebyshev's theorem, the empirical rule and
   outlier detection; five-number summaries and the box plot.
   Every number is the apartment-rents laboratory from the deck:
   n = 70, Σx = 41,356, x̄ = 590.80, median 575, mode 550,
   s² = 2,996.16, s = 54.74.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Box, Calculator, Crosshair, Percent, ScissorsLineDashed } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 3 · MOVEMENT 1 — MEASURES OF LOCATION
   ============================================================ */

/* the living machine: add a lease, watch mean and median react */
const LAB_BASE = [525, 545, 550, 550, 575, 590, 625, 715];

function MeanMedianLab() {
  const [extra, setExtra] = useState(715);
  const vals = useMemo(() => [...LAB_BASE, extra].sort((a, b) => a - b), [extra]);
  const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
  const median = vals[Math.floor(vals.length / 2)]; // n = 9 → 5th value
  const maxV = 1600;
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The outlier machine — one new lease, two different stories</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em] text-[#6d28d9]">
          <ArrowLeftRight className="h-3 w-3" /> drag the slider
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {vals.map((v, i) => (
          <motion.span
            key={`${v}-${i}`}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`rounded-lg px-2 py-1 font-mono text-[.72rem] font-bold ${
              v === extra ? "text-white" : "bg-[#f1ecfd] text-[#5b21b6]"
            }`}
            style={v === extra ? { background: STM_BTN_GRAD } : undefined}
          >
            {v}
          </motion.span>
        ))}
      </div>

      <label htmlFor="lab-extra" className="mt-4 block text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
        A ninth tenant signs at <span className="font-mono text-[#6d28d9]">${extra}</span> / month
      </label>
      <input
        id="lab-extra"
        type="range"
        min={500}
        max={1500}
        step={5}
        value={extra}
        onChange={(e) => setExtra(Number(e.target.value))}
        className="mt-2 w-full accent-[#7c3aed]"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
          <p className="text-[.7rem] font-black uppercase tracking-[.16em] text-[#b3402c]">Mean — chases the extreme</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={mean.toFixed(2)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="font-mono text-3xl font-black text-[#8c2f2f]"
            >
              ${mean.toFixed(2)}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.7rem] font-black uppercase tracking-[.16em] text-[#6d28d9]">Median — holds the middle</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={median}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="font-mono text-3xl font-black"
              style={{ color: STM_G[800] }}
            >
              ${median}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        Drag toward $1,500 and the mean inflates while the median barely moves — exactly why,{" "}
        <b>whenever a data set has extreme values, the median is the preferred measure of
        central location</b>, and why the median is the measure most often reported for annual
        income and property value data.
      </p>
    </div>
  );
}

export function StmLocationSection() {
  return (
    <Section id="location">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 3 · Descriptive Statistics: Numerical Measures — 3.1"
          title={
            <>
              Measures of <span className="grad-violet">location</span>
            </>
          }
          lead="Where is the center of the data? Seven answers — and the apartment-rents laboratory (70 rents, Σx = 41,356) prices every one of them. Sample statistics estimate population parameters; a sample statistic is the point estimator of its parameter."
        />

        <StmReadStep n="01" title="Mean, median, mode" sub="x̄ = 590.80 · median = 575 · mode = 550 — three centers, one data set" />
        <MeanMedianLab />

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Mean — x̄ = Σxᵢ/n</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                Perhaps the <b>most important</b> measure of location; a measure of{" "}
                <b>central location</b>. For the rents: <b>41,356 / 70 = 590.80</b>.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                The sample mean <b>x̄</b> is the point estimator of the population mean{" "}
                <b>μ</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="card-warm h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Median</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                The value in the <b>middle when the data items are arranged in ascending
                order</b>.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Odd n: 7 observations 26, 18, 27, 12, 14, 27, 19 → sorted, the middle is{" "}
                <b>19</b>. Even n: 8 observations → (19 + 26)/2 = <b>22.5</b>. For the 70 rents:
                average the 35th and 36th values → (575 + 575)/2 = <b>575</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="card-warm h-full p-5">
              <p className="font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>Mode</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                The value that occurs with <b>greatest frequency</b> — <b>550</b> in the rents.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Greatest frequency can occur at two or more values: exactly two modes ={" "}
                <b>bimodal</b>; more than two = <b>multimodal</b>.
              </p>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="02" title="Weighted mean" sub="Σwᵢxᵢ / Σwᵢ — hours worked are the weights" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Worker</th>
                    <th>xᵢ ($/hr)</th>
                    <th>wᵢ (hours)</th>
                    <th>wᵢxᵢ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Carpenter", "21.60", "520", "11,232.0"],
                    ["Electrician", "28.72", "230", "6,605.6"],
                    ["Laborer", "11.80", "410", "4,838.0"],
                    ["Painter", "19.75", "270", "5,332.5"],
                    ["Plumber", "24.16", "160", "3,865.6"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      <td className="font-bold">{r[0]}</td>
                      <td className="font-mono">{r[1]}</td>
                      <td className="font-mono">{r[2]}</td>
                      <td className="font-mono">{r[3]}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">Total</td>
                    <td />
                    <td className="font-black font-mono">1,590</td>
                    <td className="font-black font-mono">31,873.7</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3">
              <StmPanel label="Construction wages — Ron Butler, home builder">{`x̄ = Σwᵢxᵢ / Σwᵢ
  = 31,873.7 / 1,590
  = 20.0464 ≈ $20.05

FYI — the equally-weighted (simple) mean
      of the five wage rates = $21.21`}</StmPanel>
              <StmCallout kind="why" title="Why the weights matter">
                Each observation gets a weight reflecting its <b>relative importance</b> — the
                choice of weights depends on the application: credit hours in a GPA, pounds,
                dollars, or volume. The laborer&rsquo;s 410 hours pull the average from $21.21
                down to $20.05.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Geometric mean" sub="The nth root of the product — growth rates done right" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Rate of return — five periods">{`Period  Return (%)   Growth factor
  1       −6.0          0.940
  2       −8.0          0.920
  3       −4.0          0.960
  4       +2.0          1.020
  5       +5.4          1.054

x̄g = [(0.94)(0.92)(0.96)(1.02)(1.054)]^(1/5)
   = (0.89254)^(1/5) = 0.97752

Average growth rate per period
= (0.97752 − 1)(100) = −2.248%`}</StmPanel>
            <StmCallout kind="insight" title="When to reach for it">
              Calculated by finding the <b>nth root of the product of n values</b> — often used
              in analyzing <b>growth rates in financial data</b>, where the arithmetic mean would
              mislead. Apply it anytime you want the <b>mean rate of change over several
              successive periods</b> (years, quarters, weeks…) — also populations of species,
              crop yields, pollution levels, birth and death rates.
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Percentiles & quartiles" sub="Lₚ = (p/100)(n + 1) — the rents' 80th percentile" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="The 80th percentile — step by step">{`Lₚ = (p/100)(n + 1)
L₈₀ = (80/100)(70 + 1) = 56.8

56th value = 635, 57th value = 649

80th percentile
= 635 + 0.8(649 − 635) = 646.2

Check the split:
56/70 = .80 → at least 80% of items ≤ 646.2
14/70 = .20 → at least 20% of items ≥ 646.2`}</StmPanel>
            <div className="space-y-3">
              <StmCallout kind="insight" title="What a percentile is">
                A percentile provides information about <b>how the data are spread over the
                interval from the smallest to the largest value</b> — admission test scores for
                colleges are frequently reported in percentiles. The pth percentile is a value
                such that <b>at least p percent</b> of the items take on this value or less, and{" "}
                <b>at least (100 − p) percent</b> take on this value or more.
              </StmCallout>
              <StmCallout kind="why" title="Quartiles are just percentiles">
                <b>Q1</b> = 25th percentile = <b>545</b> · <b>Q2</b> = 50th = median ={" "}
                <b>575</b> · <b>Q3</b> = 75th percentile = <b>625</b> (L₇₅ = (75/100)(71) = 53.25
                → 625 + 0.25(625 − 625) = 625).
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <Takeaways
          items={[
            <>With extreme values, prefer the <b>median</b>; report it for income and property values — few large incomes inflate the mean.</>,
            <>Weighted mean <b>Σwᵢxᵢ/Σwᵢ = $20.05</b> vs simple $21.21; geometric mean prices <b>multi-period growth</b> (−2.248%/period).</>,
            <>Percentile machine: <b>Lₚ = (p/100)(n+1)</b>, interpolate between neighbours → 80th = <b>646.2</b>; quartiles = 25/50/75th.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 3 · MOVEMENT 2 — VARIABILITY, SHAPE, OUTLIERS, BOXES
   ============================================================ */

function RentBoxPlot() {
  const X = (v: number) => 40 + ((v - 400) / 360) * 620;
  return (
    <svg viewBox="0 0 720 170" className="h-auto w-full" role="img" aria-label="Box plot of apartment rents: box from Q1 545 to Q3 625 with the median line at 575, whiskers reaching the smallest value 525 and largest value 715 inside the limits 425 and 745">
      <line x1={X(400)} y1="96" x2={X(780)} y2="96" stroke="#c9bbee" strokeWidth="1.6" />
      {[400, 450, 500, 550, 600, 650, 700, 750].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1="91" x2={X(t)} y2="101" stroke="#b3a6d9" />
          <text x={X(t)} y="118" textAnchor="middle" fontSize="11" fill="#8a7fae">{t}</text>
        </g>
      ))}
      {/* whiskers */}
      <motion.line
        x1={X(525)} y1="60" x2={X(545)} y2="60" stroke="#6d28d9" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      />
      <motion.line
        x1={X(625)} y1="60" x2={X(715)} y2="60" stroke="#6d28d9" strokeWidth="2"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
      />
      <line x1={X(525)} y1="48" x2={X(525)} y2="72" stroke="#6d28d9" strokeWidth="2" />
      <line x1={X(715)} y1="48" x2={X(715)} y2="72" stroke="#6d28d9" strokeWidth="2" />
      {/* the box */}
      <motion.rect
        x={X(545)} y="38" width={X(625) - X(545)} height="44" rx="6"
        fill="#f1ecfd" stroke="#6d28d9" strokeWidth="2.4"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        style={{ transformBox: "fill-box", transformOrigin: "left center" }}
      />
      <motion.line
        x1={X(575)} y1="38" x2={X(575)} y2="82" stroke="#5b21b6" strokeWidth="3"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, duration: 0.3 }}
      />
      {/* limits */}
      <line x1={X(425)} y1="26" x2={X(425)} y2="86" stroke="#b3402c" strokeWidth="1.6" strokeDasharray="4 4" />
      <line x1={X(745)} y1="26" x2={X(745)} y2="86" stroke="#b3402c" strokeWidth="1.6" strokeDasharray="4 4" />
      <text x={X(425)} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b3402c">lower limit 425</text>
      <text x={X(745)} y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b3402c">upper limit 745</text>
      <text x={X(545)} y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">Q1 = 545</text>
      <text x={X(575)} y="154" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">Q2 = 575</text>
      <text x={X(625)} y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="#5b21b6">Q3 = 625</text>
      <text x={X(525)} y="60" dy="-12" textAnchor="middle" fontSize="10.5" fill="#6f5c8f">min 525</text>
      <text x={X(715)} y="60" dy="-12" textAnchor="middle" fontSize="10.5" fill="#6f5c8f">max 715</text>
    </svg>
  );
}

/* tiny z-checker wired to the rents lab */
function ZChecker() {
  const [x, setX] = useState(715);
  const z = (x - 590.8) / 54.74;
  const verdict = Math.abs(z) > 3 ? "outlier candidate (|z| > 3)" : Math.abs(z) > 2 ? "unusual — beyond ±2σ" : "ordinary — within ±2σ";
  return (
    <div className="card-warm p-4">
      <p className="flex items-center gap-2 text-[.9rem] font-bold text-[#3e2c1d]">
        <Crosshair className="h-4 w-4" style={{ color: STM_G[700] }} /> z-score checker — rents edition
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <label htmlFor="z-x" className="text-[.74rem] font-bold uppercase tracking-[.12em] text-[#8a6d4f]">
          Rent $
        </label>
        <input
          id="z-x"
          type="number"
          min={300}
          max={1200}
          value={x}
          onChange={(e) => setX(Number(e.target.value) || 0)}
          className="w-24 rounded-lg border border-[#d9cdf8] bg-white px-3 py-1.5 font-mono text-[.9rem] font-bold text-[#3e2c1d] outline-none focus:border-[#8b5cf6]"
        />
        <span className="font-mono text-[.85rem] text-[#6f5c8f]">
          z = ({x} − 590.80) / 54.74 =
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={z.toFixed(2)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="rounded-lg px-2.5 py-1 font-mono text-[1rem] font-black text-white"
            style={{ background: STM_BTN_GRAD }}
          >
            {z.toFixed(2)}
          </motion.span>
        </AnimatePresence>
        <span className="text-[.78rem] font-semibold text-[#6f5438]">{verdict}</span>
      </div>
      <p className="mt-2 text-[.76rem] leading-relaxed text-muted-warm">
        In the real data the most extreme z-scores are <b>−1.20</b> (the 525 rent) and{" "}
        <b>2.27</b> — using |z| ≥ 3 as the criterion, there are <b>no outliers</b> in the rent
        data set.
      </p>
    </div>
  );
}

export function StmVariabilitySection() {
  return (
    <Section id="variability">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 3 · sections 3.2–3.4"
          title={
            <>
              Variability, shape &amp; the <span className="grad-violet">box plot</span>
            </>
          }
          lead="Choosing supplier A or supplier B means considering not only the average delivery time but also the variability in delivery time. Five spread measures, three shape stories, two protection theorems, and one box that summarises them all."
        />

        <StmReadStep n="01" title="The spread family" sub="Range → IQR → variance → standard deviation → coefficient of variation" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: ScissorsLineDashed, t: "Range", d: "Largest − smallest = 715 − 525 = 190. The simplest measure — and very sensitive to the smallest and largest values." },
            { i: Box, t: "Interquartile range", d: "IQR = Q3 − Q1 = 625 − 545 = 80 — the range of the middle 50%; overcomes the sensitivity to extreme data values." },
            { i: Calculator, t: "Variance", d: "Average of the SQUARED deviations from the mean. Sample: s² = Σ(xᵢ−x̄)²/(n−1) = 2,996.16. Population: σ² = Σ(xᵢ−μ)²/N." },
            { i: Crosshair, t: "Standard deviation", d: "s = √s² = √2,996.16 = 54.74 — the positive square root, measured in the same units as the data, so it is more easily interpreted." },
            { i: Percent, t: "Coefficient of variation", d: "(s/x̄)×100 = (54.74/590.80)×100 = 9.27% — how large the standard deviation is in relation to the mean." },
            { i: ArrowLeftRight, t: "Why bother?", d: "Two suppliers can share a mean delivery time and still behave completely differently — variability is the risk." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_BTN_GRAD }}>
                  <c.i className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <StmReadStep n="02" title="Shape: skewness" sub="Negative → symmetric → strongly positive" />
        <Reveal>
          <StmPanel label="Skewness — the sample formula">{`              n      ⎛ xᵢ − x̄ ⎞³
Skewness = ──────────── Σ ⎜ ─────── ⎟
          (n−1)(n−2)    ⎝    s    ⎠

Moderately skewed LEFT  → negative · mean < median
SYMMETRIC (no skew)     → zero · mean = median
Highly skewed RIGHT     → positive, often > 1.0 · mean > median

(Skewness can be easily computed using statistical software.)`}</StmPanel>
        </Reveal>

        <StmReadStep n="03" title="z-scores & the two protection theorems" sub="Relative location, Chebyshev for any distribution, the Empirical Rule for bell-shaped ones" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">z-scores — the standardized value</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                zᵢ = (xᵢ − x̄)/s denotes the <b>number of standard deviations</b> a data value is
                from the mean — a measure of the observation&rsquo;s <b>relative location</b>.
                Below the mean → negative z; above → positive; at the mean → zero.
              </p>
              <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">
                The smallest rent: z = (525 − 590.80)/54.74 = <b>−1.20</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">Chebyshev vs the Empirical Rule</p>
              <div className="mt-3 overflow-x-auto rounded-xl">
                <table className="warm-table">
                  <thead>
                    <tr>
                      <th>Within</th>
                      <th>Chebyshev (any data, z &gt; 1)</th>
                      <th>Empirical (bell-shaped)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="font-bold">±1σ</td><td className="font-mono">—</td><td className="font-mono">≈ 68%</td></tr>
                    <tr><td className="font-bold">±1.5σ</td><td className="font-mono">≥ 56%</td><td className="font-mono">—</td></tr>
                    <tr><td className="font-bold">±2σ</td><td className="font-mono">≥ 75%</td><td className="font-mono">≈ 95%</td></tr>
                    <tr><td className="font-bold">±3σ</td><td className="font-mono">≥ 89%</td><td className="font-mono">≈ 99.7%</td></tr>
                    <tr><td className="font-bold">±4σ</td><td className="font-mono">≥ 94%</td><td className="font-mono">—</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Chebyshev: at least <b>1 − 1/z²</b> of the values lie within z standard deviations
                — z need not be an integer. For the rents at z = 1.5: 56% between $509 and $673
                (actually 86% are).
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-4">
          <ZChecker />
        </div>

        <StmReadStep n="04" title="Five-number summary & box plot" sub="525 · 545 · 575 · 625 · 715 — and the 1.5×IQR fence" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="grid gap-2 sm:grid-cols-5">
              {[
                { l: "Smallest value", v: "525" },
                { l: "First quartile", v: "545" },
                { l: "Median", v: "575" },
                { l: "Third quartile", v: "625" },
                { l: "Largest value", v: "715" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border p-3 text-center"
                  style={{ borderColor: STM_G.border, background: i === 2 ? STM_G.wash : "#fffdf9" }}
                >
                  <p className="text-[.62rem] font-black uppercase tracking-[.12em] text-[#8a7fae]">{s.l}</p>
                  <p className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>{s.v}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5">
              <RentBoxPlot />
            </div>
            <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
              A <b>box plot</b> is a graphical display based on the five-number summary: a box
              with its ends at the first and third quartiles, a vertical line at the median.
              Limits are located (not drawn) using the IQR: lower = Q₁ − 1.5(IQR) = 545 − 1.5(80)
              = <b>425</b>; upper = Q₃ + 1.5(IQR) = 625 + 1.5(80) = <b>745</b>. Data outside the
              limits are outliers (marked ·). There are none in the rent data — 525 and 715 sit
              inside.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Concept checks — spread & boxes" sub="The deck's checks, answered" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Rents laboratory — self-check"
              q="The variance of the rents is 2,996.16. In one line: the standard deviation and the coefficient of variation are…"
              options={["s = 54.74 · CV = 9.27%", "s = 2,996.16 · CV = 54.74%", "s = 190 · CV = 575", "s = 80 · CV = 13.6%"]}
              answer={0}
              explain="s = √2,996.16 = 54.74 (same units as the data — dollars); CV = (54.74/590.80)×100 = 9.27% (unit-free, so it compares across variables)."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Outlier criterion — self-check"
              q="An observation is a candidate outlier when its z-score…"
              options={["is positive", "is less than −3 or greater than +3", "equals the mean", "is between −1 and +1"]}
              answer={1}
              explain="|z| > 3 flags unusually small or large values. An outlier might be an incorrectly recorded value, a value incorrectly included, or a correct value that belongs — investigate before deleting."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Range 190 is honest but fragile; <b>IQR = 80</b> guards the middle 50% and fences the box plot at <b>425 / 745</b>.</>,
            <><b>s² = 2,996.16 → s = 54.74 → CV = 9.27%</b>: squared units → dollars → percent of the mean.</>,
            <>Chebyshev works on <b>any</b> distribution (≥ 1 − 1/z²); the Empirical Rule needs <b>bell shape</b> (68 / 95 / 99.7).</>,
            <><b>|z| ≥ 3</b> flags outliers — the rents&rsquo; extremes (−1.20, 2.27) all pass.</>,
          ]}
        />
      </div>
    </Section>
  );
}
