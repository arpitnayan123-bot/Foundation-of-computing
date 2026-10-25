"use client";

/* ============================================================
   Statistics for Managers — PART 6 of 7 (shelf 05). Chapter 4's
   finale — Bayes' theorem: prior probabilities, new information,
   the L. S. Clothiers tree and tabular approach, posterior
   probabilities, plus the ISRO disaster-management case. Then
   Chapter 5 opens: random variables, discrete probability
   distributions, expected value & variance (JSL Appliances),
   and bivariate distributions (DiCarlo Motors).
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Binary,
  Building2,
  CloudRainWind,
  Radar,
  RefreshCcw,
  Satellite,
  Table2,
  Waves,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 4 · MOVEMENT 3 — BAYES' THEOREM  (#bayes)
   ============================================================ */

function BayesBar() {
  return (
    <div className="card-warm p-4 sm:p-6">
      <p className="text-[.9rem] font-bold text-[#3e2c1d]">
        L. S. Clothiers — the council-approval probability, before and after the news
      </p>
      <div className="mt-4 space-y-4">
        {[
          { label: "Prior — P(A₁) before any recommendation", v: 0.7, color: "#a78bfa", note: "subjective judgment" },
          { label: "Posterior — P(A₁ | B) after a NEGATIVE recommendation", v: 0.34, color: "#5b21b6", note: "good news for L. S. Clothiers" },
        ].map((row, i) => (
          <div key={row.label}>
            <div className="flex items-baseline justify-between">
              <p className="text-[.78rem] font-bold text-[#3e2c1d]">{row.label}</p>
              <p className="font-mono text-[.95rem] font-black" style={{ color: row.color }}>
                {row.v.toFixed(2)}
              </p>
            </div>
            <div className="mt-1 h-5 overflow-hidden rounded-full bg-[#f1ecfd]">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${row.color}, #4c1d95)` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${row.v * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.5, ease: "easeOut" }}
              />
            </div>
            <p className="mt-1 text-[.7rem] text-[#a08cc9]">{row.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-[.82rem] leading-relaxed text-muted-warm">
        Bayes&rsquo; theorem provides the means for <b>revising</b> the prior probabilities:{" "}
        <b>Prior → New information → Application of Bay&rsquo; theorem → Posterior</b>. The
        planning board&rsquo;s negative recommendation cut the approval probability from 0.70 to
        0.34.
      </p>
    </div>
  );
}

function ClothiersTree() {
  // stage 1: council; stage 2: board recommendation
  const L1 = [
    { y: 70, label: "P(A₁) = .7" },
    { y: 190, label: "P(A₂) = .3" },
  ];
  const L2 = [
    { x: 300, y: 34, from: 0, label: "P(B|A₁) = .2", out: "P(A₁ ∩ B) = .14" },
    { x: 300, y: 96, from: 0, label: "P(Bᶜ|A₁) = .8", out: "P(A₁ ∩ Bᶜ) = .56" },
    { x: 300, y: 158, from: 1, label: "P(B|A₂) = .9", out: "P(A₂ ∩ B) = .27" },
    { x: 300, y: 220, from: 1, label: "P(Bᶜ|A₂) = .1", out: "P(A₂ ∩ Bᶜ) = .03" },
  ];
  return (
    <svg viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="Tree diagram for L. S. Clothiers: council approves with probability 0.7 or disapproves with 0.3; the planning board then recommends against with conditional probabilities 0.2 and 0.9, giving joint probabilities 0.14, 0.56, 0.27, 0.03 summing to 1.00">
      <line x1="120" y1="16" x2="120" y2="244" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="5 5" />
      <line x1="300" y1="16" x2="300" y2="244" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="5 5" />
      <circle cx="120" cy="130" r="5" fill="#5b21b6" />
      {L1.map((n) => (
        <g key={n.y}>
          <motion.line
            x1="125" y1="130" x2="180" y2={n.y}
            stroke="#7c3aed" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          />
          <text x="132" y={n.y + (n.y < 130 ? 26 : -16)} fontSize="12.5" fontWeight="700" fill="#5b21b6">{n.label}</text>
        </g>
      ))}
      {L2.map((n, i) => {
        const y0 = n.from === 0 ? 70 : 190;
        return (
          <g key={i}>
            <motion.line
              x1="182" y1={y0} x2={n.x - 8} y2={n.y}
              stroke="#7c3aed" strokeWidth="1.8"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            />
            <circle cx={n.x - 8} cy={n.y} r="4" fill="#8b5cf6" />
            <text x={n.x + 2} y={n.y - 6} fontSize="11.5" fontWeight="600" fill="#4c3a80">{n.label}</text>
            <text x="436" y={n.y + 4} fontSize="11.5" fontWeight="800" fill="#2b2014">{n.out}</text>
          </g>
        );
      })}
      <text x="60" y="256" fontSize="10.5" fill="#8a7fae">Town Council</text>
      <text x="252" y="256" fontSize="10.5" fill="#8a7fae">Planning Board</text>
      <text x="436" y="256" fontSize="10.5" fill="#8a7fae">Joint probabilities — Σ = 1.00</text>
    </svg>
  );
}

export function StmBayesSection() {
  return (
    <Section id="bayes">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 4 · section 4.5"
          title={
            <>
              <span className="grad-violet">Bayes&rsquo;</span> theorem — revising beliefs
            </>
          }
          lead="Probability analysis starts with prior probabilities. Then a sample, a special report, or a product test delivers new information — and the priors must be revised. Bayes' theorem is the machinery of that revision."
        />

        <StmReadStep n="01" title="The story — L. S. Clothiers" sub="A shopping center, a zoning change, and a planning board with a reputation" />
        <Reveal>
          <StmCallout kind="story" title="The setup">
            A proposed shopping center will provide strong competition for downtown businesses
            like L. S. Clothiers; if it is built, relocating there would be best. The center
            cannot be built unless a <b>zoning change is approved by the town council</b> — and
            the planning board must first make a recommendation, for or against. Let{" "}
            <b>A₁</b> = the council approves the change, <b>A₂</b> = it disapproves. Subjective
            priors: <b>P(A₁) = 0.7, P(A₂) = 0.3</b>. The board has now recommended{" "}
            <b>against</b> the change — event <b>B</b>. Past history:{" "}
            <b>P(B|A₁) = 0.2, P(B|A₂) = 0.9</b> (and P(Bᶜ|A₁) = 0.8, P(Bᶜ|A₂) = 0.1).
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="The tree diagram" sub="Four branches, four joint probabilities, Σ = 1.00" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <ClothiersTree />
          </div>
        </Reveal>

        <StmReadStep n="03" title="The theorem + the tabular approach" sub="Divide each joint probability by the probability of the new information" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <StmPanel label="Bayes' theorem">{`             P(Aᵢ)P(B | Aᵢ)
P(Aᵢ | B) = ─────────────────────────
             P(A₁)P(B|A₁) + … + P(Aₙ)P(B|Aₙ)

P(A₁ | B) = (0.7)(0.2) / [(0.7)(0.2) + (0.3)(0.9)]
          = 0.14 / 0.41 = 0.34

Applicable when the events are MUTUALLY
EXCLUSIVE and their union is the entire
sample space.`}</StmPanel>
              <BayesBar />
            </div>
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>(1) Events Aᵢ</th>
                    <th>(2) Prior P(Aᵢ)</th>
                    <th>(3) P(B|Aᵢ)</th>
                    <th>(4) Joint P(Aᵢ ∩ B)</th>
                    <th>(5) Posterior P(Aᵢ|B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">A₁</td>
                    <td className="font-mono">.7</td>
                    <td className="font-mono">.2</td>
                    <td className="font-mono">.14 = .7(.2)</td>
                    <td className="font-mono font-bold" style={{ color: STM_G[800] }}>.3415 = .14/.41</td>
                  </tr>
                  <tr>
                    <td className="font-bold">A₂</td>
                    <td className="font-mono">.3</td>
                    <td className="font-mono">.9</td>
                    <td className="font-mono">.27</td>
                    <td className="font-mono">.6585</td>
                  </tr>
                  <tr>
                    <td className="font-black">Sum</td>
                    <td className="font-black font-mono">1.0</td>
                    <td>—</td>
                    <td className="font-black font-mono">P(B) = .41</td>
                    <td className="font-black font-mono">1.0000</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                The tabular approach, step by step: <b>1</b> — three columns (events, priors,
                conditionals) · <b>2</b> — column 4 multiplies prior × conditional (the
                multiplication law) · <b>3</b> — sum column 4 to get P(B) = .41, the overall
                probability of the new information · <b>4</b> — column 5 divides each joint by
                P(B): the posteriors.
              </p>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Case — ISRO and probability in disaster management" sub="Post-class reflection: the 2023 Himachal Pradesh flash flood" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#241040,#3b1e63)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#c4b5fd]">
                <CloudRainWind className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f3edff]">
                A landslide buries the dam — 12,000 residents, 72 hours
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9bce4]">
                During a catastrophic flash flood in Himachal Pradesh, the State Disaster
                Management Authority asked ISRO — India&rsquo;s premier space agency, 18,000+
                employees across multiple centers — for immediate help assessing structural
                stability and predicting the probability of infrastructure collapse.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-3">
              <div>
                <p className="flex items-center gap-1.5 text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  <Satellite className="h-3.5 w-3.5" /> Why subjective?
                </p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                  Insufficient historical data on similar geological disasters in that region —
                  classical and relative frequency methods could not be applied directly. The
                  team combined satellite imagery, geological surveys, historical records of
                  comparable disasters, and weather forecasts into <b>subjective probability
                  estimates</b>.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  <Radar className="h-3.5 w-3.5" /> Conditional probabilities
                </p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                  P(Major collapse | heavy rainfall in next 72 h) ≈ <b>23%</b> · P(Minor
                  collapse | heavy rainfall in next 72 h) ≈ <b>7%</b>. Conditional probabilities
                  were far more useful than unconditional ones — they directly addressed the
                  critical question.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  <RefreshCcw className="h-3.5 w-3.5" /> Bayesian updating
                </p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                  As new weather data arrived, estimates were continuously updated using
                  principles similar to Bayes&rsquo; theorem. Outcome: evacuation of{" "}
                  <b>12,000 residents</b>, reinforcement of the main dam, 72-hour urgency window —
                  all residents evacuated safely, critical infrastructure preserved.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Takeaways
          items={[
            <>Bayes&rsquo; flow: <b>prior → new information → theorem → posterior</b>; priors 0.70 became posteriors 0.34 / 0.66.</>,
            <>Tabular approach: events → priors → conditionals → <b>joints (Σ = P(B) = .41)</b> → posteriors (Σ = 1).</>,
            <>ISRO&rsquo;s crisis shows the method in the wild: <b>subjective priors, conditional probabilities, continuous Bayesian updating</b>.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 5 · MOVEMENT 1 — RANDOM VARIABLES & E(x)  (#discrete)
   ============================================================ */
const JSL = [
  { x: 0, days: 80, f: 0.4 },
  { x: 1, days: 50, f: 0.25 },
  { x: 2, days: 40, f: 0.2 },
  { x: 3, days: 10, f: 0.05 },
  { x: 4, days: 20, f: 0.1 },
];

const DICARLO = {
  cols: [0, 1, 2, 3, 4, 5],
  rows: [
    { g: 0, cells: ["21", "30", "24", "9", "2", "0"], total: 86, probs: [".0700", ".1000", ".0800", ".0300", ".0067", ".0000"], ptotal: ".2867" },
    { g: 1, cells: ["21", "36", "33", "18", "2", "1"], total: 111, probs: [".0700", ".1200", ".1100", ".0600", ".0067", ".0033"], ptotal: ".3700" },
    { g: 2, cells: ["9", "42", "9", "12", "3", "2"], total: 77, probs: [".0300", ".1400", ".0300", ".0400", ".0100", ".0067"], ptotal: ".2567" },
    { g: 3, cells: ["3", "9", "6", "3", "5", "0"], total: 26, probs: [".0100", ".0300", ".0200", ".0100", ".0167", ".0000"], ptotal: ".0867" },
  ],
  colTotals: [54, 117, 72, 42, 12, 3],
  colProbs: [".18", ".39", ".24", ".14", ".04", ".01"],
};

export function StmDiscreteSection() {
  return (
    <Section id="discrete">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 5 · Discrete Probability Distributions — 5.1–5.4"
          title={
            <>
              Random variables &amp; <span className="grad-violet">expected value</span>
            </>
          }
          lead="A random variable is a numerical description of an experiment's outcome. Once every value carries a probability, the whole distribution can be compressed into two numbers — the center and the spread."
        />

        <StmReadStep n="01" title="Discrete vs continuous" sub="Counted, or measured on an interval" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]">
                <Binary className="h-4 w-4" style={{ color: STM_G[700] }} /> Discrete
              </p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                May assume either a <b>finite number of values</b> or an{" "}
                <b>infinite sequence</b> (0, 1, 2, …).
              </p>
              <ul className="mt-2 space-y-1 text-[.8rem] leading-relaxed text-muted-warm">
                <li>· JSL TVs sold in a day: x = 0, 1, 2, 3, 4 (finite — capped by stock)</li>
                <li>· JSL customers arriving in a day: x = 0, 1, 2, … (counted, no upper limit)</li>
                <li>· Family size — dependents on a tax return; own dog/cat coded 1–4</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]">
                <Waves className="h-4 w-4" style={{ color: STM_G[700] }} /> Continuous
              </p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                May assume <b>any numerical value in an interval</b> or collection of intervals.
              </p>
              <ul className="mt-2 space-y-1 text-[.8rem] leading-relaxed text-muted-warm">
                <li>· Distance in miles from home to the store site</li>
                <li>· Weight, time, temperature — measured, not counted</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="02" title="The probability function & its two conditions" sub="f(x) ≥ 0 and Σf(x) = 1" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)]">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Units sold x</th>
                    <th>Number of days</th>
                    <th>f(x)</th>
                    <th>x · f(x)</th>
                  </tr>
                </thead>
                <tbody>
                  {JSL.map((r) => (
                    <tr key={r.x}>
                      <td className="font-mono font-bold">{r.x}</td>
                      <td className="font-mono">{r.days}</td>
                      <td className="font-mono">{r.f.toFixed(2)} = {r.days}/200</td>
                      <td className="font-mono">{(r.x * r.f).toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">Total</td>
                    <td className="font-black font-mono">200</td>
                    <td className="font-black font-mono">1.00</td>
                    <td className="font-black font-mono" style={{ color: STM_G[800] }}>1.20</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
                JSL Appliances — 200 days of past TV sales; a tabular (empirical) representation
                of the probability distribution for sales.
              </p>
            </div>
            <div className="space-y-3">
              <StmPanel label="Expected value & variance">{`E(x) = μ = Σ x·f(x) = 1.20 TVs per day

Var(x) = σ² = Σ (x − μ)²·f(x) = 1.660
σ = √1.660 = 1.2884 TVs

x:      0     1     2     3     4
x−μ:  −1.2  −0.2   0.8   1.8   2.8
(x−μ)²f(x): .576 .010 .128 .162 .784`}</StmPanel>
              <StmCallout kind="insight" title="Two honest caveats">
                The expected value is a <b>weighted average</b> of the values the random variable
                may assume — the weights are the probabilities — and it <b>does not have to be a
                value the random variable can assume</b> (1.20 is not a possible sales count).
                The simplest formula-driven distribution is the <b>discrete uniform</b>: f(x) =
                1/n, every value equally likely.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Bivariate distributions — DiCarlo Motors" sub="Two dealerships, 300 days, one joint table" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <p className="text-[.9rem] font-bold text-[#3e2c1d]">
              x = cars sold at the Geneva dealership · y = cars sold at the Saratoga dealership
            </p>
            <div className="mt-3 grid gap-4 lg:grid-cols-2">
              <div className="overflow-x-auto">
                <p className="mb-1 text-[.68rem] font-bold uppercase tracking-[.16em] text-[#a08cc9]">Frequencies over 300 days</p>
                <table className="warm-table min-w-[440px]">
                  <thead>
                    <tr>
                      <th>Geneva ↓ · Saratoga →</th>
                      {DICARLO.cols.map((c) => (
                        <th key={c} className="text-center">{c}</th>
                      ))}
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DICARLO.rows.map((r) => (
                      <tr key={r.g}>
                        <td className="font-bold">{r.g}</td>
                        {r.cells.map((c, i) => (
                          <td key={i} className="text-center font-mono">{c}</td>
                        ))}
                        <td className="text-center font-mono font-bold">{r.total}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="font-black">Total</td>
                      {DICARLO.colTotals.map((t, i) => (
                        <td key={i} className="text-center font-mono font-bold">{t}</td>
                      ))}
                      <td className="text-center font-mono font-black">300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto">
                <p className="mb-1 text-[.68rem] font-bold uppercase tracking-[.16em] text-[#a08cc9]">Bivariate empirical probability distribution (÷ 300)</p>
                <table className="warm-table min-w-[440px]">
                  <thead>
                    <tr>
                      <th>Geneva ↓ · Saratoga →</th>
                      {DICARLO.cols.map((c) => (
                        <th key={c} className="text-center">{c}</th>
                      ))}
                      <th className="text-center">f(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DICARLO.rows.map((r) => (
                      <tr key={`p-${r.g}`}>
                        <td className="font-bold">{r.g}</td>
                        {r.probs.map((c, i) => (
                          <td key={i} className="text-center font-mono text-[.78rem]">{c}</td>
                        ))}
                        <td className="text-center font-mono font-bold">{r.ptotal}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="font-black">f(y)</td>
                      {DICARLO.colProbs.map((t, i) => (
                        <td key={i} className="text-center font-mono font-bold">{t}</td>
                      ))}
                      <td className="text-center font-mono font-black">1.0000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Reveal>
                <StmPanel label="Total sales s = x + y">{`E(s) = 2.6433 cars
Var(s) = 2.3895

(Computed over s = 0…8 with the same
 weighted machinery: Σ s·f(s) and
 Σ (s − E(s))²·f(s).)`}</StmPanel>
              </Reveal>
              <Reveal delay={80}>
                <StmPanel tone="sepia" label="Covariance from the total">{`σₓᵧ = [Var(x + y) − Var(x) − Var(y)] / 2
    = (2.3895 − 0.8696 − 1.25) / 2
    = 0.1350

A covariance of .1350 → daily sales at
the two dealerships have a positive
relationship.`}</StmPanel>
              </Reveal>
              <Reveal delay={160}>
                <StmPanel label="Correlation">{`ρₓᵧ = σₓᵧ / (σₓ·σ_y)
    = 0.1350 / ((0.9325)(1.1180))
    = 0.1295

Weak positive. If it had equaled zero,
daily sales at the two dealerships
would be independent.`}</StmPanel>
              </Reveal>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Concept check — random variables" sub="From the in-class practice sheet" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="In-class practice · Q1"
              q="Classify: (a) customers entering a store per day, (b) weight of a randomly selected student, (c) defective items in a batch of 50, (d) time taken to complete an exam."
              options={["all discrete", "(a) D · (b) C · (c) D · (d) C", "all continuous", "(a) C · (b) D · (c) C · (d) D"]}
              answer={1}
              explain="Counts are discrete; weights and times are continuous. And one required condition for a valid discrete distribution: every probability ≥ 0 with the sum equal to exactly 1."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="In-class practice · Q2"
              q="Laptop demand: x = 0…6 with p = .10, .15, .25, .20, .20, .05, .05. Verify the distribution and find P(x ≥ 5)."
              options={["invalid · .10", "valid · .10", "valid · .90", "invalid · .05"]}
              answer={1}
              explain="The seven probabilities sum to 1.00 and each is ≥ 0 — valid. P(x ≥ 5) = .05 + .05 = .10. E(x) = Σ x·f(x) = 2.55 via the same weighted machinery."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Discrete = <b>counted</b> (finite or infinite sequence); continuous = <b>measured</b> over an interval.</>,
            <><b>E(x) = Σx·f(x)</b> — JSL&rsquo;s 1.20 TVs is a weighted average, not necessarily an attainable value; σ² = 1.660.</>,
            <>Bivariate tables divide joint frequencies by n; total-sales machinery yields <b>covariance .1350, correlation .1295</b> — weak positive.</>,
          ]}
        />
      </div>
    </Section>
  );
}
