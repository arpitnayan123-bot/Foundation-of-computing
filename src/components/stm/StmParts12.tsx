"use client";

/* ============================================================
   Statistics for Managers — PART 12 (shelf 05 of The Atlas).
   The case-study + estimation stretch:
   · #marrian-dairies — Lecture 21: Marrian Dairies' StrawGurt
     call — P(x̄ ≤ 75) at n = 50 vs n = 150 with the live
     tail machine, the 84.2% extended range, Excel wiring
   · #interval-estimation — Lecture 22: Sahadri Retail Mart,
     point → interval, margin of error, the α-split machine
     and the income-interval confidence machine (90/95/99)
   · #sampling-excel — Lecture 23: the RANDBETWEEN walkthrough
     stepper, the √2 precision curve, proportions clustering
     on 0.40, and the distinctions that trip students

   Kit shared with parts 1–9: StmReadStep, StmCallout,
   StmPanel, StmQuiz (exported from StmParts1) + the
   notes/ui Section, SectionHead, Reveal, Takeaways.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownUp,
  Calculator,
  ClipboardPaste,
  Dices,
  FileSpreadsheet,
  ListOrdered,
  Scale,
  Sigma,
  Split,
  Target,
  TrendingDown,
  Users,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 21 · MARRIAN DAIRIES — THE STRAWGURT CALL
   ============================================================ */

type MarrianN = 50 | 150;

const MARRIAN_SCEN: Record<
  MarrianN,
  { se: string; z: string; zNum: number; p: string; chip: string; note: string; caption: string }
> = {
  50: {
    se: "3.5355",
    z: "−1.414",
    zNum: -1.414,
    p: "0.0786",
    chip: "7.86%",
    note: "the potential StrawGurt market",
    caption:
      "σ(x̄) = 25/√50 = 3.5355 · Z = (75 − 80)/3.5355 = −1.414 · P(X̄ ≤ 75) = P(Z ≤ −1.414) = 0.0786",
  },
  150: {
    se: "2.0412",
    z: "−2.45",
    zNum: -2.4495,
    p: "≈ 0.007",
    chip: "0.7%",
    note: "the tail nearly vanishes",
    caption:
      "σ(x̄) = 25/√150 = 2.0412 · Z = (75 − 80)/2.0412 ≈ −2.45 · P(X̄ ≤ 75) ≈ 0.007 — larger n, tighter curve, smaller tail",
  },
};

/* z → pixel on a standard-normal canvas (z ∈ [−4, 4]) */
const MARRIAN_XZ = (z: number) => 40 + ((z + 4) / 8) * 400;

/* the tail machine — sample size toggle, live SE / Z / probability */
function YogurtSampler() {
  const [n, setN] = useState<MarrianN>(50);
  const s = MARRIAN_SCEN[n];
  const zx = MARRIAN_XZ(s.zNum);
  const curve = useMemo(() => {
    let d = "";
    for (let i = 0; i <= 96; i++) {
      const z = -4 + (8 * i) / 96;
      const y = Math.exp(-(z * z) / 2);
      d += `${i === 0 ? "M" : "L"}${MARRIAN_XZ(z).toFixed(1)},${(158 - y * 128).toFixed(1)}`;
    }
    return d;
  }, []);
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the StrawGurt tail · P(x̄ ≤ 75) at two sample sizes
        </span>
        <TrendingDown className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {([50, 150] as const).map((v) => {
          const on = n === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setN(v)}
              aria-pressed={on}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.72rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              <Users className="h-3.5 w-3.5" /> n = {v} customers
            </button>
          );
        })}
        <span
          className="ml-auto inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[.68rem] font-bold"
          style={{ borderColor: STM_G.border, background: STM_G.wash, color: STM_G[800] }}
        >
          <Target className="h-3.5 w-3.5" /> customers rating &gt; 75 are likely to purchase
        </span>
      </div>

      <div className="mt-3 grid items-center gap-3 sm:grid-cols-3">
        <div className="rounded-xl border px-4 py-3" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">standard error — σ/√n</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={`se-${n}`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-1 font-mono text-lg font-black tabular-nums"
              style={{ color: STM_G[800] }}
            >
              25/√{n} = {s.se}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-xl border px-4 py-3" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">Z-score — (75 − 80)/σ(x̄)</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={`z-${n}`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-1 font-mono text-lg font-black tabular-nums"
              style={{ color: STM_G[800] }}
            >
              Z = {s.z}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="text-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={`p-${n}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="rounded-xl px-5 py-3 font-mono text-2xl font-black tabular-nums"
              style={{ background: "#4c1d95", color: "#f5f3ff" }}
            >
              {s.chip}
            </motion.div>
          </AnimatePresence>
          <p className="mt-1 text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">
            P(X̄ ≤ 75) = {s.p} — {s.note}
          </p>
        </div>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg
          viewBox="0 0 480 192"
          className="h-auto w-full"
          role="img"
          aria-label={`Normal curve of the sampling distribution of the mean; the shaded left tail below a mean score of 75 holds ${s.chip} of probability when n = ${n}`}
        >
          <defs>
            <clipPath id="stm12-tail">
              <motion.rect
                x="40"
                y="26"
                height="132"
                initial={false}
                animate={{ width: zx - 40 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              />
            </clipPath>
          </defs>
          {/* the shaded left tail — the potential StrawGurt market */}
          <path d={`${curve}L440,158L40,158Z`} fill="#ddd6fe" clipPath="url(#stm12-tail)" />
          <line x1="40" y1="158" x2="440" y2="158" stroke={STM_G.border} strokeWidth="1.4" />
          {[-4, -2, 0, 2, 4].map((zt) => (
            <g key={zt}>
              <line x1={MARRIAN_XZ(zt)} y1="158" x2={MARRIAN_XZ(zt)} y2="163" stroke={STM_G.border} strokeWidth="1.2" />
              <text x={MARRIAN_XZ(zt)} y="173" textAnchor="middle" fontSize="9" fill="#8a7fae">
                {zt}
              </text>
            </g>
          ))}
          <text x={MARRIAN_XZ(-1.414)} y="186" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5b21b6">
            75
          </text>
          <text x="240" y="186" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5b21b6">
            μ = 80
          </text>
          <text x={MARRIAN_XZ(1.414)} y="186" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5b21b6">
            85
          </text>
          <motion.line
            y1="24"
            y2="158"
            stroke="#4c1d95"
            strokeWidth="1.6"
            strokeDasharray="4 4"
            initial={false}
            animate={{ x1: zx, x2: zx }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
          <motion.g initial={false} animate={{ x: zx }} transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <text x="6" y="18" fontSize="10.5" fontWeight="800" fill="#4c1d95">
              Z = {s.z}
            </text>
          </motion.g>
          <path d={curve} fill="none" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={n}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="mt-2 font-mono text-[.72rem] leading-relaxed"
          style={{ color: STM_G.ink }}
        >
          {s.caption}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function StmMarrianSection() {
  return (
    <Section id="marrian-dairies">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 21 · Case Study — Marrian Dairies Yogurt Market Entry"
          title={
            <>
              The <span className="grad-violet">StrawGurt question</span>
            </>
          }
          lead="Marrian Dairies&rsquo; BlueGurt scored μ = 80 with σ = 25 — and marketing wants strawberry next. One question decides the launch: how much of the market actually rates BlueGurt at 75 or less? The sampling distribution of the mean answers with a single shaded tail."
        />

        <StmReadStep n="01" title="The background — one flavor already won" sub="BlueGurt works; the second flavor must expand, not cannibalize" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The BlueGurt ledger">{`Marrian Dairies successfully launched
BlueGurt — blueberry yogurt — and
it worked.

Consumer ratings: mean = 80,
SD = 25, on a 100-point scale.

Purchase rule: customers rating
> 75 are likely to purchase.`}</StmPanel>
            <StmPanel label="The StrawGurt proposal">{`The marketing department proposes
launching StrawGurt (strawberry)
to expand market share by
appealing to customers who
dislike BlueGurt.

The catch: avoid cannibalization —
never eat into existing BlueGurt
sales.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The question behind the question">
            The decision needs a probability, not a hunch: how likely is it that a random sample of customers rates BlueGurt at 75 or less? That number is the size of the dissatisfied segment — the potential StrawGurt market — and it decides whether a second flavor expands the brand or merely splits it.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="The statistical setup" sub="μ = 80 · σ = 25 · n = 50 · target x̄ ≤ 75" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Given information">{`μ = 80    population mean rating
σ = 25    population standard deviation
n = 50    sampled customers
x̄ ≤ 75    the target threshold`}</StmPanel>
            <StmPanel label="The research question">{`What is the probability that a
random sample of 50 customers
gives a mean score of 75 or less
for BlueGurt?

P(X̄ ≤ 75) = P(Z ≤ (75 − 80)/σ(x̄))`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="The analysis — one tail, two sample sizes" sub="Toggle n and watch the standard error steepen the curve" />
        <Reveal>
          <YogurtSampler />
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The tail is the market">
            7.86% is the chance that sampled customers rate BlueGurt at 75 or less — which is exactly the potential StrawGurt market: the customers the current flavor is not serving. Push n from 50 to 150 and the standard error falls from 3.5355 to 2.0412, Z steepens from −1.414 to −2.45, and the probability collapses to ≈ 0.007. Sample size is precision: larger samples converge on the true mean of 80 and shrink the tail.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Extended probability — and how parameters move it" sub="P(75 ≤ x̄ ≤ 85) = 84.2%, then the three levers" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Probability of score between 75 and 85">{`Lower limit x₁ = 75 → Z₁ = −1.414
Upper limit x₂ = 85 → Z₂ = +1.414

Probability = 84.2%

A symmetric window around μ = 80
captures most of the sampling
distribution.`}</StmPanel>
            <div className="grid gap-3">
              {[
                { k: "n increases", v: "probability ↑", d: "More concentrated distribution — a fixed range catches more of it." },
                { k: "range widens", v: "probability ↑", d: "Larger area under the curve falls inside the window." },
                { k: "range narrows", v: "probability ↓", d: "Smaller area under the curve — the window catches less." },
              ].map((r) => (
                <div key={r.k} className="rounded-xl border px-4 py-3" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
                  <p className="font-mono text-[.74rem] font-black" style={{ color: STM_G[800] }}>
                    {r.k} → {r.v}
                  </p>
                  <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-600">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Excel implementation — constants in cells" sub="Dynamic spreadsheets make sensitivity analysis instant" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Dynamic spreadsheet structure">{`Every constant lives in a referenced
cell: mean, standard deviation,
sample size, target values.

Formulas point at cells — change
a parameter and every result
auto-updates.

That is instant sensitivity
analysis: n = 50 vs 150 is a cell
edit, not a rebuild.`}</StmPanel>
            <StmPanel label="Key Excel functions">{`Standard error:  =σ/SQRT(n)

Z-score:         =(X - μ)/σx̄

Probability:     =NORM.DIST(value,
                  mean, std_dev, TRUE)`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="06" title="Business implications — reading 7.86% honestly" sub="A small dissatisfied segment argues caution" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="What 7.86% tells management">{`A relatively small segment of
dissatisfied customers.

This limited market suggests
caution in launching StrawGurt —
it may not significantly expand
total market share.`}</StmPanel>
            <StmPanel label="What the method gives">{`A data-driven foundation for the
product-launch decision.

Larger sample sizes provide more
reliable insights for management
decision-making.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Practical extensions">
            The same machinery stretches to calculating confidence intervals around sample means, determining optimal sample sizes for desired precision levels, assessing probabilities for various rating ranges, and supporting risk assessment in market-expansion strategies — every one of them a rerun of this tail calculation with different constants.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="Marrian Dairies finds P(x̄ ≤ 75) = 7.86% with n = 50 and calls it the potential StrawGurt market. If the study is re-run with n = 150, what happens — and why?"
          options={[
            "SE falls to 25/√150 = 2.0412, Z steepens to ≈ −2.45, and the probability shrinks to ≈ 0.007 (0.7%)",
            "SE doubles to ≈ 7.07, Z flattens to ≈ −0.71, and the probability grows to ≈ 24%",
            "The probability stays 7.86% — sample size changes precision, never probabilities",
            "The probability becomes exactly 0 — with 150 ratings the mean can never fall to 75",
          ]}
          answer={0}
          explain="σ(x̄) = σ/√n, so raising n from 50 to 150 cuts the standard error from 3.5355 to 2.0412; Z = (75 − 80)/2.0412 ≈ −2.45 and P(Z ≤ −2.45) ≈ 0.007. Larger samples concentrate x̄ nearer μ = 80, so the ≤ 75 tail nearly vanishes — sample size is precision."
        />

        <Takeaways
          items={[
            <>BlueGurt: <b>μ = 80, σ = 25</b>; customers rating <b>&gt; 75</b> are likely to purchase — StrawGurt targets the ≤ 75 crowd without cannibalizing sales.</>,
            <>σ(x̄) = <b>25/√50 = 3.5355</b> → Z = <b>−1.414</b> → P(X̄ ≤ 75) = <b>0.0786 = 7.86%</b> — the potential StrawGurt market.</>,
            <>n 50 → 150: SE <b>3.5355 → 2.0412</b> and the probability <b>7.86% → ≈ 0.7%</b> — larger samples, tighter estimates.</>,
            <>P(75 ≤ x̄ ≤ 85) = <b>84.2%</b> (Z₁ = −1.414, Z₂ = +1.414); ↑n in a fixed range ↑probability, wider ↑, narrower ↓.</>,
            <>Excel: <b>cell references for every constant</b> + <b>=NORM.DIST(value, mean, std_dev, TRUE)</b> = instant sensitivity analysis.</>,
            <>7.86% is a <b>small dissatisfied segment</b> — the limited market argues caution, and statistics gives the launch a data-driven foundation.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 22 · INTERVAL ESTIMATION — THE CONFIDENCE LEDGER
   ============================================================ */

type ConfLevel = 90 | 95 | 99;

const CONF_SPLIT: Record<ConfLevel, { alpha: string; half: string; z: string; alphaNum: number }> = {
  90: { alpha: "0.10", half: "0.05", z: "1.645", alphaNum: 0.1 },
  95: { alpha: "0.05", half: "0.025", z: "1.960", alphaNum: 0.05 },
  99: { alpha: "0.01", half: "0.005", z: "2.576", alphaNum: 0.01 },
};

/* the α-split machine — one error budget, two symmetric tails */
function AlphaSplit() {
  const [lv, setLv] = useState<ConfLevel>(95);
  const c = CONF_SPLIT[lv];
  const W = 440;
  const X0 = 20;
  const Y = 36;
  const H = 34;
  const tail = (c.alphaNum / 2) * W;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the α split · one error budget, two symmetric tails
        </p>
        <Split className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {([90, 95, 99] as const).map((v) => {
          const on = lv === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setLv(v)}
              aria-pressed={on}
              className="rounded-full border px-3 py-1.5 text-[.72rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              {v}% confidence
            </button>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg
          viewBox="0 0 480 104"
          className="h-auto w-full"
          role="img"
          aria-label={`At ${lv}% confidence, alpha ${c.alpha} splits into two tails of ${c.half} each, leaving the middle 1 minus alpha highlighted`}
        >
          <text x={X0} y="24" fontSize="9" fill="#8a7fae">
            below the true mean
          </text>
          <text x={X0 + W} y="24" textAnchor="end" fontSize="9" fill="#8a7fae">
            above the true mean
          </text>
          <motion.rect
            x={X0}
            y={Y}
            height={H}
            rx="4"
            fill="#c4b5fd"
            initial={false}
            animate={{ width: tail }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <motion.rect
            y={Y}
            height={H}
            rx="4"
            fill="#7c3aed"
            initial={false}
            animate={{ x: X0 + tail, width: W - 2 * tail }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <motion.rect
            y={Y}
            height={H}
            rx="4"
            fill="#c4b5fd"
            initial={false}
            animate={{ x: X0 + W - tail, width: tail }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <text x={X0 + W / 2} y={Y + H / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="#ffffff">
            1 − α = {(1 - c.alphaNum).toFixed(2)}
          </text>
          <motion.g initial={false} animate={{ x: tail / 2 }} transition={{ type: "spring", stiffness: 160, damping: 20 }}>
            <text x="0" y="88" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#6d28d9">
              α/2 = {c.half}
            </text>
          </motion.g>
          <motion.g initial={false} animate={{ x: W - tail / 2 }} transition={{ type: "spring", stiffness: 160, damping: 20 }}>
            <text x="0" y="88" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#6d28d9">
              α/2 = {c.half}
            </text>
          </motion.g>
        </svg>
      </div>
      <p className="mt-2 text-[.76rem] leading-relaxed text-neutral-600">
        α = {c.alpha} is the probability of error (0 to 1). By the symmetry of the normal distribution it splits equally: α/2 = {c.half} in each tail, leaving the highlighted middle (1 − α) — because the error is two-sided, above or below the true mean.
      </p>
    </div>
  );
}

const INCOME_CI: Record<ConfLevel, { z: string; moe: number; lo: number; hi: number }> = {
  90: { z: "1.645", moe: 1234, lo: 39866, hi: 42334 },
  95: { z: "1.960", moe: 1470, lo: 39630, hi: 42570 },
  99: { z: "2.576", moe: 1932, lo: 39168, hi: 43032 },
};

/* income axis: $38,850 → $43,350 mapped onto the number line */
const INCOME_X = (v: number) => 30 + ((v - 38850) / 4500) * 460;

/* the confidence machine — one sample, three confidence levels */
function ConfidenceMachine() {
  const [lv, setLv] = useState<ConfLevel>(95);
  const s = INCOME_CI[lv];
  const usd = (v: number) => `$${v.toLocaleString("en-US")}`;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the income interval · n = 36, x̄ = $41,100, σ = $4,500
        </p>
        <Scale className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {([90, 95, 99] as const).map((v) => {
          const on = lv === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setLv(v)}
              aria-pressed={on}
              className="rounded-full border px-3 py-1.5 text-[.72rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              {v}% confidence
            </button>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg
          viewBox="0 0 520 140"
          className="h-auto w-full"
          role="img"
          aria-label={`Number line of mean annual income: at ${lv}% confidence the interval stretches from ${usd(s.lo)} to ${usd(s.hi)} around the sample mean of $41,100`}
        >
          <text x="260" y="40" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4c1d95">
            x̄ = $41,100
          </text>
          <motion.rect
            y="56"
            height="26"
            rx="13"
            fill="#8b5cf6"
            fillOpacity="0.18"
            stroke="#7c3aed"
            strokeWidth="1.4"
            initial={false}
            animate={{ x: INCOME_X(s.lo), width: INCOME_X(s.hi) - INCOME_X(s.lo) }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
          />
          <motion.line
            y1="50"
            y2="88"
            stroke="#6d28d9"
            strokeWidth="2"
            initial={false}
            animate={{ x1: INCOME_X(s.lo), x2: INCOME_X(s.lo) }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
          />
          <motion.line
            y1="50"
            y2="88"
            stroke="#6d28d9"
            strokeWidth="2"
            initial={false}
            animate={{ x1: INCOME_X(s.hi), x2: INCOME_X(s.hi) }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
          />
          <line x1="260" y1="50" x2="260" y2="88" stroke="#4c1d95" strokeWidth="2" />
          <motion.g initial={false} animate={{ x: INCOME_X(s.lo) }} transition={{ type: "spring", stiffness: 160, damping: 22 }}>
            <text x="0" y="46" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5b21b6">
              {usd(s.lo)}
            </text>
          </motion.g>
          <motion.g initial={false} animate={{ x: INCOME_X(s.hi) }} transition={{ type: "spring", stiffness: 160, damping: 22 }}>
            <text x="0" y="46" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5b21b6">
              {usd(s.hi)}
            </text>
          </motion.g>
          <line x1="30" y1="94" x2="490" y2="94" stroke={STM_G.border} strokeWidth="1.4" />
          {[39000, 39500, 40000, 40500, 41000, 41500, 42000, 42500, 43000].map((t) => (
            <line key={t} x1={INCOME_X(t)} y1="94" x2={INCOME_X(t)} y2="99" stroke={STM_G.border} strokeWidth="1" />
          ))}
          {[39000, 40000, 41000, 42000, 43000].map((t) => (
            <text key={t} x={INCOME_X(t)} y="112" textAnchor="middle" fontSize="9" fill="#8a7fae">
              {`${(t / 1000).toFixed(0)}k`}
            </text>
          ))}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`z-${lv}`}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-full border px-3 py-1.5 font-mono text-[.74rem] font-bold tabular-nums"
            style={{ borderColor: STM_G.border, background: "#fff", color: STM_G[800] }}
          >
            z(α/2) = {s.z}
          </motion.span>
          <motion.span
            key={`moe-${lv}`}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-full border px-3 py-1.5 font-mono text-[.74rem] font-bold tabular-nums"
            style={{ borderColor: STM_G.border, background: "#fff", color: STM_G[800] }}
          >
            MoE = {s.z} × 750 = {s.moe.toLocaleString("en-US")}
          </motion.span>
          <motion.span
            key={`ci-${lv}`}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="rounded-full px-4 py-1.5 font-mono text-[.78rem] font-black tabular-nums"
            style={{ background: "#4c1d95", color: "#f5f3ff" }}
          >
            {usd(s.lo)} – {usd(s.hi)}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="mt-2 text-[.76rem] leading-relaxed text-neutral-600">
        SE = σ(x̄) = 4,500/√36 = 750 never moves — only the z-multiplier does, and wider brackets are the price of more confidence.
      </p>
    </div>
  );
}

export function StmIntervalSection() {
  return (
    <Section id="interval-estimation">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 22 · Understanding Interval Estimation — the Confidence Ledger"
          title={
            <>
              The confidence <span className="grad-violet">ledger</span>
            </>
          }
          lead="Sahadri Retail Mart must track cost changes across 1,000 supermarkets — without auditing every store. Interval estimation fixes the probability first and finds the range second: the ledger that turns one fragile point estimate into a decision-grade interval."
        />

        <StmReadStep n="01" title="Why intervals — the census nobody can afford" sub="Sahadri Retail Mart: 1,000 supermarkets, one cost question" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The census bill">{`Sahadri Retail Mart — 1,000
supermarkets across Western &
Southern India — must track
year-over-year cost changes in
personal care & beauty inventory.

A full census of every store:
massive financial cost (audit +
travel), months of time, large
HR allocation, and significant
disruption to daily operations.`}</StmPanel>
            <StmPanel label="The statistical solution">{`A random sample of 50 stores
captures the population&rsquo;s
diversity.

Cost falls to ≈ 5% of a full
census while accuracy holds.

Estimation replaces
enumeration.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="One teaspoon of rice">
            Testing a single teaspoon tells you whether the entire pot is cooked — no need to eat the whole pot. Sampling works the same way: a well-drawn 50-store sample delivers reliable population estimates at a fraction of the census cost.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="Point vs interval — precision gets attached" sub="Fix the probability first, then find the range" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Point estimate — the best single number">{`One sample mean: 1.015% cost
increase — the best estimate of
the true change.

But samples vary: other samples
give 1.013%, 1.016%, 1.014% — so
which is right?

A point estimate carries no
information about its own
precision.`}</StmPanel>
            <StmPanel label="Interval estimate — the fix">{`Fix the probability FIRST, then
determine the range — the reverse
of traditional probability
problems.

Result: 95% confidence the true
cost increase lies between 0.9%
and 2.1%.

Adds reliability and
interpretation flexibility.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Sample size narrows the story">
            Larger samples produce narrower confidence intervals — stretching the sample from 50 to 200 stores visibly shrinks the width. The business decision is a balance: precision needs on one side, sampling costs on the other.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="Margin of error, notation — and the α split" sub="MoE = z(α/2) × σ(x̄); Greek = population, Latin = sample" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Margin of error">{`The range added to and subtracted
from the point estimate.

MoE = z(α/2) × σ(x̄)

As n grows, MoE shrinks —
σ(x̄) = σ/√n.

When n equals the population
size, MoE = 0: a complete census.`}</StmPanel>
            <StmPanel label="The notation ledger">{`Greek letters — σ, μ — represent
population parameters.

Latin letters — s, x̄ — represent
sample statistics.

σ(x̄) = standard error of the mean
      = σ/√n`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <AlphaSplit />
        </Reveal>

        <StmReadStep n="04" title="When σ is known — the formula and its sources" sub="x̄ ± z(α/2) × (σ/√n), plus the 5% correction rule" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The σ-known formula">{`General form:  x̄ ± margin of error

When σ is known:
x̄ ± z(α/2) × (σ/√n)

Apply the population correction
factor if the sample size is
< 5% of the population.`}</StmPanel>
            <StmPanel label="When is σ known?">{`Historical data from previous
years.

Manufacturing specifications with
known machine limits.

Cases with good historical
estimates.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The probability statement">
            There is a (1 − α) probability that the sample mean provides a margin of error of z(α/2) × σ(x̄) or less. α is the probability of error — anywhere from 0 to 1 — and the error is two-sided: the sample mean can land above or below the true mean, which is exactly why α splits into two equal tails.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="The three working levels" sub="90% · 95% · 99% — and what a 90% interval really claims" />
        <Reveal>
          <StmPanel label="Confidence levels & z-values">{`confidence    α      α/2     z(α/2)
   90%       0.10   0.05    1.645
   95%       0.05   0.025   1.960
   99%       0.01   0.005   2.576`}</StmPanel>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Reading a 90% interval the right way">
            A 90% confidence interval means 90% of ALL intervals constructed with x̄ ± 1.645(σ/√n) will contain the true population mean — a statement about the method, not about one lucky interval. The confidence coefficient is simply the confidence level expressed as a decimal, and α splits equally on both sides thanks to the symmetry of the normal distribution.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="The worked machine — income around a new location" sub="260 outlets · n = 36 · x̄ = $41,100 · σ = $4,500" />
        <Reveal>
          <StmPanel label="Problem setup">{`An organization with 260 retail
outlets is evaluating a new
location; the decision rests on
the mean annual income in the
marketing area.

n = 36    x̄ = $41,100
σ = $4,500    confidence = 95%`}</StmPanel>
        </Reveal>
        <Reveal>
          <ConfidenceMachine />
        </Reveal>
        <Reveal>
          <StmPanel label="The ledger, all three rows">{`α = 1 − 0.95 = 0.05 → α/2 = 0.025 → z = 1.960
SE = 4,500/√36 = 750
95%:  MoE = 1.960 × 750 = 1,470 → [39,630, 42,570]
90%:  MoE = 1.645 × 750 = 1,234 → [39,866, 42,334]
99%:  MoE = 2.576 × 750 = 1,932 → [39,168, 43,032]`}</StmPanel>
        </Reveal>

        <StmReadStep n="07" title="The trade-off — and how big n must be" sub="Confidence buys width; skewness sets the sample size" />
        <Reveal>
          <StmCallout kind="why" title="The travel-planning trade-off">
            Higher confidence levels require larger margins of error: wider intervals provide greater certainty, and narrower intervals demand lower confidence — or larger samples. It is travel planning in statistics dress: leaving a bigger time margin raises the certainty of arriving on time.
          </StmCallout>
        </Reveal>
        <Reveal>
          <StmPanel label="Sample-size adequacy">{`n > 30  → generally adequate via the
          central limit theorem
≈ normal population      → n ≥ 15
symmetric, non-normal    → n ≥ 15
highly skewed (income!)  → n ≥ 50+
any scenario             → n ≥ 50
          ensures applicability

Skewness drives the requirement —
more equal distributions allow
smaller samples.`}</StmPanel>
        </Reveal>

        <StmQuiz
          q="The 260-outlet income study reports n = 36, x̄ = $41,100, σ = $4,500, with a 95% interval of [39,630, 42,570]. The board demands 99% confidence on the same data — what changes?"
          options={[
            "z rises to 2.576, the MoE widens to 1,932, and the interval stretches to [39,168, 43,032]",
            "z falls to 1.645, the MoE narrows to 1,234, and the interval tightens to [39,866, 42,334]",
            "The MoE is unchanged — only the interpretation of the same interval changes",
            "The SE grows to 4,500/√36 × 2.576, so the interval doubles in width",
          ]}
          answer={0}
          explain="SE stays 4,500/√36 = 750 — only the multiplier moves: 2.576 × 750 = 1,932, giving [39,168, 43,032]. Higher confidence buys certainty with width (the travel-planning trade-off); to gain width AND confidence you need a larger n."
        />

        <Takeaways
          items={[
            <>Census of 1,000 stores = <b>money, months, HR, disruption</b>; 50 random stores cost <b>≈ 5%</b> of it — the teaspoon-of-rice logic.</>,
            <>A point estimate (<b>1.015%</b>) carries no precision; intervals <b>fix the probability first, then find the range</b> — 95% confidence the true cost lies in 0.9%–2.1%.</>,
            <><b>MoE = z(α/2) × σ(x̄)</b> and σ(x̄) = σ/√n; when n equals the population, MoE = 0 — a census. Greek = parameters, Latin = statistics.</>,
            <>x̄ ± z(α/2)(σ/√n): 90/95/99% → z = <b>1.645 / 1.960 / 2.576</b>; α splits equally on both sides and the error is <b>two-sided</b>.</>,
            <>Income ledger: SE <b>750</b>; 95% MoE <b>1,470</b> → [39,630, 42,570]; 90% → [39,866, 42,334]; 99% → [39,168, 43,032].</>,
            <>Adequacy: <b>n &gt; 30</b> via the CLT, ≥ 15 for friendly shapes, <b>50+ when skewed (income!)</b>, and ≥ 50 works in any scenario.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 23 · SAMPLING DISTRIBUTION, BY HAND IN EXCEL
   ============================================================ */

const ROLL: number[] = [1837, 214, 976, 2305, 1583, 642, 2019, 87];

const SAMPLER_STEPS = [
  {
    t: "Generate",
    icon: Dices,
    d: "=RANDBETWEEN(1, 2500) copied down every row — each of the 2,500 employee IDs gets an equal chance of appearing.",
  },
  {
    t: "Freeze the values",
    icon: ClipboardPaste,
    d: "Copy → Paste Special → Values Only. Otherwise the random numbers keep changing on every recalculation.",
  },
  {
    t: "Sort ascending",
    icon: ArrowDownUp,
    d: "Use the filter to sort the frozen IDs from smallest to largest — the draw order becomes fixed.",
  },
  {
    t: "Take the first 50",
    icon: ListOrdered,
    d: "The first 50 values form the random sample (the mini-sheet here shows 8 of the 2,500 rows; the first cells are the sample).",
  },
  {
    t: "Average the sample",
    icon: Calculator,
    d: "=AVERAGE(B2:B51). Every independent sample yields its own mean — clustered ≈ 71,000–72,500 around the true 71,800.",
  },
] as const;

/* the RANDBETWEEN walkthrough — five animated steps */
function RandSampler() {
  const [step, setStep] = useState(0);
  const sorted = useMemo(() => [...ROLL].sort((a, b) => a - b), []);
  const ids = step >= 2 ? sorted : ROLL;
  const highlight = step >= 3;
  const StepIcon = SAMPLER_STEPS[step].icon;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the RANDBETWEEN walkthrough · from 2,500 rows to one mean of 50
        </p>
        <FileSpreadsheet className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[.66rem] font-bold uppercase tracking-[.12em]"
          style={{ background: STM_G.wash, color: STM_G[800] }}
        >
          <StepIcon className="h-3.5 w-3.5" /> step {step + 1}/5 — {SAMPLER_STEPS[step].t}
        </span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-8">
        {ids.map((id, i) => {
          const hot = highlight && i < 5;
          return (
            <motion.div
              key={id}
              layout
              initial={false}
              animate={step === 0 ? { y: [0, -3, 0] } : { y: 0 }}
              transition={
                step === 0
                  ? { repeat: Infinity, duration: 1.4, delay: i * 0.12 }
                  : { type: "spring", stiffness: 260, damping: 24 }
              }
              className="rounded-lg border px-1 py-2 text-center font-mono text-[.74rem] font-bold tabular-nums"
              style={{
                borderColor: hot ? STM_G[600] : step === 1 ? STM_G.border : "#c4b5fd",
                borderStyle: step === 0 ? "dashed" : "solid",
                background: hot ? "#ede9fe" : step === 1 ? STM_G.wash : "#fff",
                color: hot ? "#4c1d95" : STM_G[800],
                opacity: highlight && !hot ? 0.35 : 1,
              }}
            >
              {id}
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {step >= 1 ? (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[.62rem] font-bold uppercase tracking-[.14em]"
            style={{ background: "#ede9fe", color: "#5b21b6" }}
          >
            values only — the numbers are now static
          </motion.p>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {step === 4 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-3 flex flex-wrap items-center gap-3"
          >
            <span className="rounded-xl px-4 py-2 font-mono text-lg font-black" style={{ background: "#4c1d95", color: "#f5f3ff" }}>
              =AVERAGE(B2:B51)
            </span>
            <span className="max-w-[34ch] text-[.74rem] leading-relaxed text-neutral-600">
              one mean per sample — a fresh draw lands somewhere in ≈ 71,000–72,500, always circling the true 71,800.
            </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="mt-2 text-[.78rem] leading-relaxed text-neutral-600">{SAMPLER_STEPS[step].d}</p>
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((v) => Math.max(0, v - 1))}
          disabled={step === 0}
          aria-label="Previous step"
          className="rounded-full border px-4 py-1.5 text-[.72rem] font-bold transition-all disabled:opacity-40"
          style={{ borderColor: STM_G.border, color: STM_G[800], background: "#fff" }}
        >
          ← Back
        </button>
        <div className="flex gap-1.5">
          {SAMPLER_STEPS.map((s, i) => (
            <button
              key={s.t}
              type="button"
              onClick={() => setStep(i)}
              aria-label={`Go to step ${i + 1}: ${s.t}`}
              aria-current={step === i ? "step" : undefined}
              className="h-2.5 w-2.5 rounded-full transition-all"
              style={{ background: step === i ? STM_G[600] : "#ddd6fe", transform: step === i ? "scale(1.25)" : undefined }}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setStep((v) => Math.min(SAMPLER_STEPS.length - 1, v + 1))}
          disabled={step === SAMPLER_STEPS.length - 1}
          aria-label="Next step"
          className="rounded-full border px-4 py-1.5 text-[.72rem] font-bold transition-all disabled:opacity-40"
          style={{ borderColor: STM_G.border, color: "#fff", background: step === SAMPLER_STEPS.length - 1 ? "#c4b5fd" : STM_G[600] }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

/* SE in σ units (SE = σ/√n → 1/√n when σ = 1) */
const SE_XN = (n: number) => 36 + ((n - 10) / 190) * 400;
const SE_YS = (se: number) => 34 + (se / 0.32) * 136;

/* the precision curve — SE vs n, with the √2 law marked */
function SeCurve() {
  const [n, setN] = useState(50);
  const se = 1 / Math.sqrt(n);
  const curve = useMemo(() => {
    let d = "";
    for (let i = 0; i <= 100; i++) {
      const nn = 10 + (190 * i) / 100;
      d += `${i === 0 ? "M" : "L"}${SE_XN(nn).toFixed(1)},${SE_YS(1 / Math.sqrt(nn)).toFixed(1)}`;
    }
    return d;
  }, []);
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — SE = σ/√n · the precision curve, n from 10 to 200
        </span>
        <Sigma className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <label htmlFor="se-n" className="mt-3 block text-[.8rem] font-bold text-neutral-700">
        Sample size n: <span className="tabular-nums">{n}</span>
      </label>
      <input
        id="se-n"
        type="range"
        min={10}
        max={200}
        step={1}
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        className="mt-2 w-full accent-violet-600"
      />
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg
          viewBox="0 0 480 206"
          className="h-auto w-full"
          role="img"
          aria-label={`Standard error curve falling as sample size grows; the marker sits at n = ${n} with standard error ${se.toFixed(4)} sigma`}
        >
          <line x1="36" y1="178" x2="448" y2="178" stroke={STM_G.border} strokeWidth="1.4" />
          {[0.1, 0.2, 0.3].map((g) => (
            <g key={g}>
              <line x1="36" y1={SE_YS(g)} x2="448" y2={SE_YS(g)} stroke={STM_G.border} strokeWidth="0.6" strokeDasharray="2 4" />
              <text x="32" y={SE_YS(g) + 3} textAnchor="end" fontSize="8.5" fill="#8a7fae">
                {g.toFixed(2)}σ
              </text>
            </g>
          ))}
          {[50, 100].map((g) => (
            <g key={g}>
              <line x1={SE_XN(g)} y1={SE_YS(1 / Math.sqrt(g))} x2={SE_XN(g)} y2="178" stroke="#a78bfa" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x={SE_XN(g)} y="192" textAnchor="middle" fontSize="9" fontWeight="800" fill="#6d28d9">
                n = {g}
              </text>
            </g>
          ))}
          <motion.line
            y1="178"
            stroke="#4c1d95"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={false}
            animate={{ x1: SE_XN(n), x2: SE_XN(n), y2: SE_YS(se) }}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
          />
          <motion.line
            x1="36"
            stroke="#4c1d95"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={false}
            animate={{ x2: SE_XN(n), y1: SE_YS(se), y2: SE_YS(se) }}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
          />
          <motion.circle
            r="5.5"
            fill="#4c1d95"
            initial={false}
            animate={{ cx: SE_XN(n), cy: SE_YS(se) }}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
          />
          <path d={curve} fill="none" stroke="#6d28d9" strokeWidth="2.2" strokeLinecap="round" />
          <text x="242" y="204" textAnchor="middle" fontSize="9" fill="#8a7fae">
            n — sample size
          </text>
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`se-${n}`}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-full px-4 py-1.5 font-mono text-[.78rem] font-black tabular-nums"
            style={{ background: "#4c1d95", color: "#f5f3ff" }}
          >
            SE = 1/√{n} = {se.toFixed(4)}σ
          </motion.span>
        </AnimatePresence>
        <span className="rounded-full border px-3 py-1.5 font-mono text-[.72rem] font-bold tabular-nums" style={{ borderColor: STM_G.border, color: STM_G[800] }}>
          n = 50 → 0.1414σ
        </span>
        <span className="rounded-full border px-3 py-1.5 font-mono text-[.72rem] font-bold tabular-nums" style={{ borderColor: STM_G.border, color: STM_G[800] }}>
          ÷ √2 ≈ 1.414
        </span>
        <span className="rounded-full border px-3 py-1.5 font-mono text-[.72rem] font-bold tabular-nums" style={{ borderColor: STM_G.border, color: STM_G[800] }}>
          n = 100 → 0.1000σ
        </span>
      </div>
    </div>
  );
}

/* six student proportion estimates around the true 0.40 */
const PROP_SAMPLES = [0.36, 0.38, 0.39, 0.42, 0.45, 0.47];
const PROP_X = (p: number) => 40 + ((p - 0.3) / 0.25) * 400;

function ProportionDots() {
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        machine — six student samples · training &ldquo;No&rdquo; proportions vs the truth
      </p>
      <svg
        viewBox="0 0 480 118"
        className="mt-3 h-auto w-full"
        role="img"
        aria-label="Six student sample proportions 0.36, 0.38, 0.39, 0.42, 0.45 and 0.47 scattered around the true population proportion of 0.40"
      >
        <line x1="30" y1="64" x2="450" y2="64" stroke={STM_G.border} strokeWidth="1.4" />
        <line x1={PROP_X(0.4)} y1="40" x2={PROP_X(0.4)} y2="88" stroke="#4c1d95" strokeWidth="2" />
        <text x={PROP_X(0.4)} y="30" textAnchor="middle" fontSize="10" fontWeight="800" fill="#4c1d95">
          true p = 0.40
        </text>
        {PROP_SAMPLES.map((p, i) => (
          <g key={p}>
            <motion.circle
              cx={PROP_X(p)}
              cy="64"
              r="5"
              fill="#7c3aed"
              initial={{ cy: 34, opacity: 0 }}
              whileInView={{ cy: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, type: "spring", stiffness: 200, damping: 18 }}
            />
            <text x={PROP_X(p)} y="88" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#5b21b6">
              {p.toFixed(2)}
            </text>
          </g>
        ))}
        <text x="240" y="108" textAnchor="middle" fontSize="9" fill="#8a7fae">
          student sample proportions — clustered around the truth
        </text>
      </svg>
    </div>
  );
}

export function StmSamplingExcelSection() {
  return (
    <Section id="sampling-excel">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 23 · Understanding Sampling Distribution Through Practical Exercises"
          title={
            <>
              Sampling <span className="grad-violet">by hand, in Excel</span>
            </>
          }
          lead="Sampling distribution is not merely theoretical — this lecture builds it live in Excel: RANDBETWEEN, Paste Special, a filter, fifty rows, and histograms of means that keep landing near the truth. Empirical verification over memorised formulas."
        />

        <StmReadStep n="01" title="Course updates — the quiz pattern changes" sub="Two quizzes, the better score counts" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Quiz format — updated">{`Only two quizzes will now be
conducted (changed from the
original plan) — the best of the
two scores is taken.

Quiz 2 covers material up to
Chapter 8: Interval Estimations.`}</StmPanel>
            <StmPanel label="The logistics">{`Complete information arrives in
writing by the end of the week.

Coverage: Chapters 1-8, with
Chapter 8 being Interval
Estimations.

Scientific calculators are
permitted in the final — and quiz
scheduling avoids the Diwali
holiday.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The Descriptive Statistics tool" sub="One dialog, the whole summary" />
        <Reveal>
          <StmPanel label="Excel — Data Analysis">{`Location:  Data tab → ribbon,
           right side

Activate:  File → Options →
           Add-ins → Analysis ToolPak
           → Go → tick the Analysis
           ToolPak checkbox

Metrics:   mean · standard
           deviation · median · mode ·
           confidence intervals ·
           range statistics`}</StmPanel>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why bother with the ToolPak">
            One dialog replaces a dozen hand-typed formulas — and its confidence-interval row is Lecture 22&rsquo;s x̄ ± z(α/2)(σ/√n) pre-wired. If the Data tab shows no Data Analysis button, the Add-ins path above is the fix.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="The walkthrough — 2,500 employees to one sample of 50" sub="Generate → freeze → sort → take 50 → average" />
        <Reveal>
          <RandSampler />
        </Reveal>

        <StmReadStep n="04" title="Why random sampling — and what the demo showed" sub="Equal chance for every element; means that cluster on the truth" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Why random sampling matters">{`Easier and more cost-effective
than surveying the entire
population — and sometimes
collecting the full population is
infeasible.

Every element must have an equal
chance of selection.

Each independent random sample
produces a different mean.`}</StmPanel>
            <StmPanel label="Demonstration results">{`Population size: 2,500 employees.

Actual population mean:
71,800 (salary).

Sample means generated: ranged
from ≈ 71,000 to 72,500.

Multiple random samples produced
means very close to the actual
population mean.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The cluster is the lesson">
            No single sample hit 71,800 exactly — and none needed to. Independent random draws produce different means, yet all of them hovered in the 71,000–72,500 band around the true 71,800. That clustering is the sampling distribution doing its job.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Standard error and sample size — the √2 law" sub="σ(x̄) = σ/√n, verified empirically" />
        <Reveal>
          <StmPanel label="The relationship">{`σ(x̄) = σ / √n

n 50 → 100: the standard error
decreases — it is inversely
proportional to the square root
of n.

Larger samples: more accurate
estimates with less variability.

Math check: the n = 100 standard
error fell by ≈ √2 — verified
empirically through the exercise.`}</StmPanel>
        </Reveal>
        <Reveal>
          <SeCurve />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The √2 law, in plain words">
            Doubling the sample from 50 to 100 divides the standard error by √2 ≈ 1.414 — from 0.1414σ down to 0.1000σ. The exercise verified this relationship empirically: bigger samples buy accuracy at a square-root discount, which is why precision gets expensive at the margin.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="Proportions — the same trick on a category" sub="Count ÷ n, six times over" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The proportion recipe">{`Same random sampling technique,
sample size n = 100.

Filter and count a specific
category — e.g. &ldquo;No&rdquo; for
training-program participation.

Proportion = count ÷ sample size.

σ(p̂) = √[p(1 - p) / n]`}</StmPanel>
            <ProportionDots />
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Six hands, one truth">
            Six student samples yielded proportions of 0.36, 0.38, 0.39, 0.42, 0.45 and 0.47 — while the actual population proportion is 1,000 of 2,500 = 0.40. Every estimate circled the truth; none hit it exactly, and none had to.
          </StmCallout>
        </Reveal>

        <StmReadStep n="07" title="The CLT payoff — and the distinctions that trip students" sub="Means go normal; n vs N vs the number of samples" />
        <Reveal>
          <StmCallout kind="insight" title="The central limit theorem, live">
            Regardless of the population&rsquo;s shape, the sampling distribution of means approaches a normal distribution — a sample size of approximately 30 or more is generally sufficient. The exercise&rsquo;s histograms were slightly right-skewed but approached normality with adequate samples; this concept is critical for creating confidence intervals and hypothesis testing.
          </StmCallout>
        </Reveal>
        <Reveal>
          <StmPanel label="The distinctions that trip students">{`small n   → the sample size used in
            each random draw
capital N → the total population
            size (2,500)
# samples → how many times the
            sampling process repeats —
            crucial for a good
            distribution

The sampling distribution is the
distribution of sample MEANS (or
proportions) — NOT the distribution
of individual data points.`}</StmPanel>
        </Reveal>

        <StmReadStep n="08" title="Replacement, bias, and the practice loop" sub="Fresh randomness every draw — then repeat 30+ times" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="With vs without replacement">{`CORRECT — generate new random
numbers for each sample: every
population element keeps an equal
selection chance.

INCORRECT — systematically
excluding already-selected
elements introduces bias.

Fresh randomness avoids the
conditional-probability issues.`}</StmPanel>
            <StmPanel label="Recommended practice">{`Repeat the exercise 30+ times to
watch the distribution form.

Histogram the sample means to
visualize the sampling
distribution.

Verify formulas through empirical
data — rather than memorizing
theoretical equations.

Scientific calculators are
allowed for final-exam
calculations.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Same techniques, your organization">
            Most organizations possess datasets similar to the demonstration — salary data being the classic case. The formulas are empirically validated, not arbitrary, and understanding these ground-level concepts through exercises is what improves practical application to real organizational data.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="The class repeats the exercise 40 times: 40 samples, each of n = 50 salaries, drawn from N = 2,500 employees. A teammate calls the histogram being built 'the distribution of the individual salaries' — and proposes reusing the same 50 employees each round 'to keep it fair.' Which correction follows the lecture?"
          options={[
            "It is the distribution of sample means — and every draw needs fresh random numbers, because excluding past picks introduces bias",
            "It is the distribution of individual data points, and reusing the 50 keeps the sample genuinely random",
            "It is the distribution of the population mean, and fresh draws would violate the equal-chance rule",
            "It is the distribution of sample means — but capital N must equal the number of samples for the histogram to work",
          ]}
          answer={0}
          explain="The sampling distribution is the distribution of the statistics — sample means (or proportions) — not of individual data points. And the correct method is new random numbers for every sample so every element keeps an equal chance; systematically excluding already-selected elements introduces bias through conditional-probability issues. The number of samples — how many times you repeat — is crucial for a good distribution."
        />

        <Takeaways
          items={[
            <>Quizzes: <b>two only, best score counts</b>; Quiz 2 reaches <b>Chapter 8 (Interval Estimations)</b>; details in writing; calculators allowed in the final; Diwali avoided.</>,
            <>Descriptive Statistics lives on the <b>Data tab&rsquo;s right side</b> — enable via <b>File → Options → Add-ins → Analysis ToolPak → Go</b>.</>,
            <>The recipe: <b>RANDBETWEEN(1, 2500)</b> → <b>Paste Special → Values Only</b> → sort ascending → take the first 50 → <b>=AVERAGE(B2:B51)</b>.</>,
            <>Population 2,500, true mean <b>71,800</b>; sample means ran <b>≈ 71,000–72,500</b> — and n 50 → 100 cuts the SE by <b>≈ √2</b>.</>,
            <>Proportions: six samples <b>0.36–0.47</b> around the true <b>0.40</b> (1,000/2,500); σ(p̂) = <b>√[p(1−p)/n]</b>.</>,
            <>CLT: means approach <b>normal at n ≈ 30+</b>; the distribution is <b>of means/proportions, not data points</b>; fresh randomness every draw; repeat <b>30+ times</b> and histogram.</>,
          ]}
        />
      </div>
    </Section>
  );
}
