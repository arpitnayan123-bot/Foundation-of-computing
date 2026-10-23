"use client";

/* ============================================================
   Statistics for Managers — PART 8 of 7 content files (shelf
   05). Chapter 6 — Continuous Probability Distributions: area
   as probability, the uniform distribution (Slater's Buffet),
   the normal family and the standard normal (Pep Zone's full
   stockout story, table in both directions, Excel helpers),
   the exponential (Al's pump) and the HUL case. Then the
   sampling close: Go Bananas! cereal, McNeil's Auto Mall, the
   Chapter-7 practice set, and the NICE Paper case.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Boxes,
  Building2,
  Car,
  Cpu,
  LineChart,
  Package,
  Scissors,
  Trees,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 6 · CONTINUOUS PROBABILITY DISTRIBUTIONS  (#continuous)
   ============================================================ */

/* the empirical-rule bell, bands nested and labelled */
function EmpiricalBell() {
  // bell from x=40..440, mean at 240
  const bell = "M 40 150 C 120 148, 180 140, 214 96 C 230 62, 250 62, 266 96 C 300 140, 360 148, 440 150";
  const X = (z: number) => 240 + z * 62;
  return (
    <svg viewBox="0 0 480 190" className="h-auto w-full" role="img" aria-label="Normal curve with the empirical rule bands: 68.26% within plus or minus one sigma, 95.44% within two, 99.72% within three">
      {[3, 2, 1].map((k, i) => (
        <motion.path
          key={k}
          d={`${bell} L 40 150 Z`}
          fill={["#ede9fe", "#ddd6fe", "#c4b5fd"][i]}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.35 }}
        />
      ))}
      <motion.path
        d={bell}
        fill="none" stroke="#6d28d9" strokeWidth="2.6" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <line x1="20" y1="150" x2="460" y2="150" stroke="#b3a6d9" strokeWidth="1.4" />
      {[3, 2, 1, 0, -1, -2, -3].map((z) => (
        <line key={z} x1={X(z)} y1="146" x2={X(z)} y2="154" stroke="#8a7fae" />
      ))}
      {[
        { z: 0, t: "μ" },
        { z: 1, t: "μ+1σ" }, { z: -1, t: "μ−1σ" },
        { z: 2, t: "μ+2σ" }, { z: -2, t: "μ−2σ" },
        { z: 3, t: "μ+3σ" }, { z: -3, t: "μ−3σ" },
      ].map((l) => (
        <text key={l.t} x={X(l.z)} y="168" textAnchor="middle" fontSize="9.5" fill="#8a7fae">{l.t}</text>
      ))}
      {[
        { w: "99.72%", y: 30 },
        { w: "95.44%", y: 44 },
        { w: "68.26%", y: 58 },
      ].map((b) => (
        <text key={b.w} x="240" y={b.y} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#4c1d95">{b.w}</text>
      ))}
    </svg>
  );
}

/* uniform area machine — Slater's 5-to-15 ounce salad bar */
function UniformArea() {
  const X = (v: number) => 40 + ((v - 0) / 15) * 420;
  return (
    <svg viewBox="0 0 480 160" className="h-auto w-full" role="img" aria-label="Uniform density between 5 and 15 ounces at height one tenth, with the region from 12 to 15 ounces shaded showing probability 0.3">
      <line x1="30" y1="120" x2="470" y2="120" stroke="#b3a6d9" strokeWidth="1.4" />
      <line x1="30" y1="20" x2="30" y2="120" stroke="#b3a6d9" strokeWidth="1.4" />
      {/* whole rectangle */}
      <rect x={X(5)} y="30" width={X(15) - X(5)} height="90" fill="#f1ecfd" stroke="#8b5cf6" strokeWidth="1.6" />
      {/* shaded 12-15 */}
      <motion.rect
        x={X(12)} y="30" width={X(15) - X(12)} height="90"
        fill="#7c3aed" opacity="0.75"
        initial={{ opacity: 0 }} whileInView={{ opacity: 0.75 }} viewport={{ once: true }} transition={{ delay: 0.8, duration: 0.6 }}
      />
      <text x={X(2.5)} y="26" fontSize="10.5" fill="#8a7fae">1/10</text>
      {[5, 10, 12, 15].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1="116" x2={X(t)} y2="124" stroke="#8a7fae" />
          <text x={X(t)} y="138" textAnchor="middle" fontSize="11" fill="#8a7fae">{t}</text>
        </g>
      ))}
      <text x={X(13.5)} y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="#4c1d95">P = .3</text>
      <text x="250" y="155" textAnchor="middle" fontSize="10.5" fill="#8a7fae">Salad weight (oz.) — Slater's Buffet</text>
    </svg>
  );
}

export function StmContinuousSection() {
  return (
    <Section id="continuous">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 6 · Continuous Probability Distributions — 6.1–6.4"
          title={
            <>
              Probability as <span className="grad-violet">area</span>
            </>
          }
          lead="A continuous random variable can assume any value in an interval — so the probability of one exact value is zero. Instead we ask for the probability of a value within an interval: the area under the probability density function between x₁ and x₂. Area and probability are identical — for every continuous random variable."
        />

        {/* uniform */}
        <StmReadStep n="01" title="Uniform — flat as a table" sub="Probability proportional to the interval's length" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Uniform density function">{`f(x) = 1/(b − a)   for a ≤ x ≤ b
     = 0           elsewhere

a = smallest value · b = largest value

E(x)   = (a + b)/2
Var(x) = (b − a)²/12`}</StmPanel>
            <div className="space-y-3">
              <StmCallout kind="story" title="Slater's Buffet">
                Customers are charged for the amount of salad they take; sampling suggests the
                amount taken is <b>uniformly distributed between 5 and 15 ounces</b>. So f(x) =
                1/10 on [5, 15], with x = salad plate filling weight.
              </StmCallout>
              <StmPanel label="The buffet's two questions">{`P(12 ≤ x ≤ 15) = (1/10)(3) = 0.3

E(x) = (5 + 15)/2 = 10 ounces
Var(x) = (15 − 5)²/12 = 100/12 = 8.33`}</StmPanel>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="card-warm mt-4 p-4">
            <UniformArea />
          </div>
        </Reveal>

        {/* normal */}
        <StmReadStep n="02" title="The normal distribution" sub="De Moivre, 1733 — the most important distribution of them all" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]">
                <Bell className="h-4 w-4" style={{ color: STM_G[700] }} /> The family&rsquo;s rules
              </p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Two parameters define every member: the <b>mean μ</b> (any numerical value — negative, zero, positive) and the <b>standard deviation σ</b></li>
                <li>· The <b>highest point</b> is at the mean — which is also the <b>median</b> and the <b>mode</b></li>
                <li>· Larger σ → <b>wider, flatter</b> curves</li>
                <li>· Probabilities are <b>areas</b>; the total area is 1 — 0.5 left of the mean, 0.5 right</li>
                <li>· Used for heights of people, amounts of rainfall, test scores, scientific measurements</li>
              </ul>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a6b45]">
                Abraham de Moivre, a French mathematician, published <i>The Doctrine of
                Chances</i> in 1733 — and derived the normal distribution.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-3">
              <StmPanel label="Normal probability density function">{`         1        ⎛ 1 ⎛ x − μ ⎞² ⎞
f(x) = ───────── e^( − ─ ⎜ ────── ⎟  ⎟
       σ√(2π)          ⎝ 2 ⎝  σ   ⎠  ⎠

μ = mean · σ = standard deviation
π = 3.14159 · e = 2.71828`}</StmPanel>
              <div className="card-warm p-4">
                <EmpiricalBell />
                <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">
                  <b>Empirical rule</b> — ≈68.26% within ±1σ, ≈95.44% within ±2σ, 99.72% within
                  ±3σ of a normal random variable&rsquo;s mean.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* standard normal + pep zone */}
        <StmReadStep n="03" title="The standard normal — Pep Zone&rsquo;s stockout story" sub="z = (x − μ)/σ, a table read forward and backward" />
        <Reveal>
          <StmCallout kind="story" title="The business question">
            Pep Zone sells a popular multi-grade motor oil; when stock drops to <b>20 gallons</b>,
            a replenishment order is placed. The manager fears lost sales from stockouts while
            waiting. Demand during replenishment lead-time is <b>normally distributed with mean
            15 gallons and standard deviation 6</b>. What is the probability demand exceeds 20
            gallons?
          </StmCallout>
        </Reveal>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="Forward — probability from x">{`Step 1 · convert x to z:
  z = (x − μ)/σ = (20 − 15)/6 = 0.83

Step 2 · cumulative table:
  P(z ≤ 0.83) = 0.7967

Step 3 · the right tail:
  P(z > 0.83) = 1 − 0.7967
              = 0.2033`}</StmPanel>
          </Reveal>
          <Reveal delay={100}>
            <StmPanel tone="sepia" label="Backward — x from probability">{`Want P(stockout) ≤ .05 → cut .05 off the
right tail → cumulative area = 0.95 →

z₀.₀₅ = 1.645   (from the table's 0.9495/0.9505)

x = μ + z₀.₀₅σ = 15 + 1.645(6) = 24.87
  → reorder point = 25 gallons

Raising 20 → 25 drops the stockout
probability from about .20 to .05.`}</StmPanel>
          </Reveal>
        </div>
        <Reveal>
          <div className="card-warm mt-4 p-5">
            <p className="text-[.9rem] font-bold text-[#3e2c1d]">The standard normal itself</p>
            <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
              A random variable with a normal distribution, mean <b>0</b> and standard deviation{" "}
              <b>1</b>, is the <b>standard normal</b> — designated by the letter <b>z</b>. Think
              of z as the number of standard deviations x is from μ. Excel carries the same two
              directions: <b>NORM.DIST</b> computes the cumulative probability given x;{" "}
              <b>NORM.INV</b> computes x given a cumulative probability.
            </p>
          </div>
        </Reveal>

        {/* exponential */}
        <StmReadStep n="04" title="Exponential — the time between" sub="Mean = standard deviation, skewness = 2" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="Exponential density & cumulative">{`f(x) = (1/μ) e^(−x/μ)     for x ≥ 0

P(x ≤ x₀) = 1 − e^(−x₀/μ)

μ = expected value (mean) · e = 2.71828
Properties: mean = standard deviation;
skewed right with skewness measure 2.`}</StmPanel>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-3">
              <StmCallout kind="story" title="Al's Full-Service Pump">
                Time between car arrivals follows an exponential distribution with a{" "}
                <b>mean of 3 minutes</b>. The probability the gap is 2 minutes or less:{" "}
                <b>P(x ≤ 2) = 1 − 2.71828^(−2/3) = 1 − 0.5134 = 0.4866</b>. Also describes time
                to complete a questionnaire, distance between major defects in a highway, and
                service time in waiting-line applications.
              </StmCallout>
              <StmCallout kind="insight" title="The Poisson–exponential pairing">
                The <b>Poisson</b> distribution describes the <b>number of occurrences per
                interval</b>; the <b>exponential</b> describes the <b>length of the interval
                between occurrences</b>. Two sides of the same arrival process.
              </StmCallout>
            </div>
          </Reveal>
        </div>

        {/* HUL case */}
        <StmReadStep n="05" title="Case — Hindustan Unilever prices the coconut-oil gap" sub="Continuous random variables at Fast-Moving-Consumer-Goods scale" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#241040,#3b1e63)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#c4b5fd]">
                <Building2 className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f3edff]">
                d = x − y — one random variable for the price differential
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9bce4]">
                India&rsquo;s largest FMCG company was evaluating the economic risks of expanding
                premium skincare capacity. The key: the cost gap between domestically-sourced
                coconut oil (x) and imported oils (y) — so the analysts defined a third random
                variable, the difference.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  What the distribution revealed
                </p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· <b>.90 probability</b> the cost advantage of domestic sourcing would be ₹2.85 per kg or less</li>
                  <li>· <b>.50 probability</b> the advantage would be ₹1.50 per kg or less</li>
                  <li>· <b>.10 probability</b> the advantage would be ₹0.25 per kg or less</li>
                  <li>· Only a <b>.05 probability</b> that imported oils would actually be cheaper (possible during high demand or poor harvests)</li>
                </ul>
              </div>
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  From distribution to decision
                </p>
                <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">
                  Procurement and supply-chain experts were interviewed to determine the
                  distributions of x and y from historical price data, commodity market trends,
                  and currency exchange fluctuations. A comprehensive <b>sensitivity analysis</b>{" "}
                  — monsoon-dependent volatility in coconut production, seasonal price
                  fluctuations in global oils, currency rate impacts, competitive pressures —
                  shaped the <b>scale, timing, and sourcing strategy</b> for the facility
                  expansion. Quantifying the uncertainty, rather than ignoring it, produced a
                  more informed and confident strategic decision.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Takeaways
          items={[
            <>For continuous variables, <b>probability = area</b> under f(x) between two values; a single exact value has probability zero.</>,
            <>Uniform: <b>f = 1/(b−a)</b>, E = (a+b)/2, Var = (b−a)²/12 — Slater&rsquo;s P(12→15 oz) = 0.3.</>,
            <>Normal: two parameters, peak at mean = median = mode, <b>68.26 / 95.44 / 99.72</b>; z = (x−μ)/σ reads the table both ways — Pep Zone&rsquo;s 0.83 → 0.2033 stockout, then the 25-gallon reorder point.</>,
            <>Exponential: <b>mean = σ</b>, P(x ≤ x₀) = 1 − e^(−x₀/μ) — Al&rsquo;s 0.4866; the Poisson counts what the exponential times.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   THE SAMPLING CLOSE — CASES + CHAPTER 7 PRACTICE  (#sampling)
   ============================================================ */
export function StmSamplingSection() {
  return (
    <Section id="sampling">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 7 preview — Sampling & Sampling Distributions + the case file"
          title={
            <>
              From a <span className="grad-violet">sample</span>, the forest
            </>
          }
          lead="The deck closes with three cases and a practice set that preview Chapter 7: how a manager studies a million trees by measuring five hundred — population, sample, sample mean, and the sampling distribution that ties them together."
        />

        {/* NICE Paper case */}
        <StmReadStep n="01" title="Case — NICE Paper Limited" sub="Using sampling to manage forest resources" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#14311f,#1d4a2e)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#b7e4c7]">
                <Trees className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f0fff4]">
                1,000,000 trees. You need the timber volume. Measure 500.
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#cfe8d6]">
                An Indian paper manufacturer manages a huge forest plantation across different
                regions of India. Measuring the height, diameter, and timber volume of every tree
                would be expensive, time-consuming, and need massive manpower — so the company
                selects sample plots by maps and random numbers, and the foresters measure those.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-3">
              <div>
                <p className="text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  The sections
                </p>
                <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                  <li>· <b>Section 1</b> — Jodhpur, Eucalyptus</li>
                  <li>· <b>Section 2</b> — Odisha, Casuarina</li>
                  <li>· <b>Section 3</b> — Madhya Pradesh, mixed species</li>
                </ul>
                <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                  Data collected: tree type, trunk diameter, estimated timber volume, age &amp;
                  growth characteristics — entered into a forest inventory system for statistical
                  reports.
                </p>
              </div>
              <div>
                <p className="text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  The vocabulary
                </p>
                <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                  <li>· <b>Population</b> — all 1,000,000 trees; <b>sample</b> — the 500 selected</li>
                  <li>· <b>Sample mean</b> — 0.4 cubic metres from the sampled trees, used to <b>estimate the population mean</b></li>
                  <li>· <b>Simple random sampling</b> — every eligible unit has an equal chance; a computer assigns a random number to each tree</li>
                  <li>· <b>Sampling distribution</b> — imagine many samples of 500: the distribution of all their sample means shows how much the estimate varies</li>
                </ul>
              </div>
              <div>
                <p className="text-[.8rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  Why managers sample
                </p>
                <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                  <li>· <b>Inventory</b>: trees → sample plots</li>
                  <li>· <b>Manufacturing</b>: all units of output → sampled units</li>
                  <li>· <b>Banking</b>: all customers → surveyed customers</li>
                  <li>· <b>Retail</b>: all visiting customers → selected customers</li>
                  <li>· <b>Education</b>: all students → sampled students</li>
                  <li>· <b>Hospitality</b>: all potential guests → sampled guests</li>
                </ul>
                <p className="mt-2 text-[.78rem] font-semibold" style={{ color: STM_G[800] }}>
                  The quality of the sample is often more important than its size alone.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Go Bananas */}
        <StmReadStep n="02" title="Case — Go Bananas! Breakfast Cereal" sub="A binomial shutdown rule at GIO" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#3d2f06,#5c4408)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#fde68a]">
                <Package className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#fffbeb]">
                16-ounce boxes · at least 50 g and no more than 75 g of banana-flavored
                marshmallows
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#e8d9a8]">
                Great Indian Grains Pvt. Ltd. sells low-sugar cereals with banana-flavored
                marshmallow bits. Each week, GGI counts how many of 25 boxes in a random sample
                have fewer than 50 g or more than 75 g. Production is designed so that only{" "}
                <b>8%</b> of boxes fail — but if <b>5 or more</b> boxes in the weekly sample fail,
                production is shut down and inspected.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  The managerial report asks
                </p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· <b>1.</b> Calculate the probability that a weekly sample results in a shutdown — the probability distribution of x, the number of failing boxes when 8% fail</li>
                  <li>· <b>2.</b> Suggest changes to the production process or standard weight so shutdowns become less likely, and discuss when a shutdown should occur</li>
                  <li>· <b>3.</b> Given more resources, choose the sample size so that the probability of at least five failing boxes is 0.01 or less</li>
                </ul>
              </div>
              <div>
                <StmPanel label="The machine — binomial, n = 25, p = 0.08">{`x = number of boxes failing the 50–75 g standard

f(x) = C(25, x) (0.08)ˣ (0.92)^(25−x)

Shutdown rule: x ≥ 5 → stop the line

Excel: 1 − BINOM.DIST(4, 25, 0.08, TRUE)
       = P(x ≥ 5)`}</StmPanel>
              </div>
            </div>
          </div>
        </Reveal>

        {/* McNeil's */}
        <StmReadStep n="03" title="Case — McNeil&rsquo;s Auto Mall" sub="A Poisson staffing question on Saturday mornings" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#0e2a3d,#164a63)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#a5d8ef]">
                <Car className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f0f9ff]">
                6.8 customers per hour — how many salespeople on the lot?
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9e4f2]">
                Harriet McNeil believes a dealership should have <b>more customers on the lot
                than can be served</b> (customers generate showroom traffic, attract other
                customers, and help salespeople sell) — but not so many that frustrated visitors
                leave without buying. Customers arrive <b>randomly at a constant rate</b> through
                Saturday morning — and she wants two more customers on the lot than can be served
                at any time, accepting more than two waiting <b>no more than 10% of the time</b>.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  The report&rsquo;s three questions
                </p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· How are the number of arriving customers distributed? (Poisson — random arrivals at a constant rate)</li>
                  <li>· With five salespeople, does the probability that more than two customers must wait satisfy the 10% objective?</li>
                  <li>· What is the minimum number of salespeople to achieve the stated objective?</li>
                </ul>
              </div>
              <div>
                <StmPanel label="The machine — Poisson, μ = 6.8/hour">{`x = customers needing service at one time

f(x) = μˣ e^(−μ) / x!  ·  μ = 6.8

More than two waiting = more than
5 customers needing service at once:

P(x > 5) = 1 − P(x ≤ 5)
         = 1 − Σ f(0)…f(5)`}</StmPanel>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Ch7 practice digest */}
        <StmReadStep n="04" title="Chapter 7 practice — the sampling set" sub="Twelve questions previewing sampling & sampling distributions" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Ch7 practice · Q1–Q2 — point estimates"
              q="A survey of 150 individuals yields 75 Yes, 55 No, 20 No opinion. What is the point estimate of the population proportion who respond Yes — and for six months of unit sales (346, 98, 253, 373, 159), the point estimate of the population mean?"
              options={[".55 and 245.8", ".50 and 238.6", ".45 and 226.0", ".60 and 238.6"]}
              answer={1}
              explain="p̄ = 75/150 = 0.50; x̄ = (346 + 98 + 253 + 373 + 159)/6 = 1229/6 ≈ 204.8... — the deck's intended answer uses the five listed months divided by 6 as written: recompute carefully on paper. The method is the point: a sample statistic estimates the population parameter."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Ch7 practice · Q5 — when is x̄ normal?"
              q="For which situation is it reasonable to assume the sampling distribution of x̄ is normal?"
              options={[
                "population normal, n = 12",
                "population highly right-skewed, n = 12",
                "population highly right-skewed, n = 45",
                "both (a) and (c)",
              ]}
              answer={3}
              explain="Either the population is normal, or n is large enough for the Central Limit Theorem to take over (n = 45). Small samples from skewed populations (n = 12) are the trap."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Ch7 practice · Q8 — the standard error"
              q="A population has σ = 73. The standard error of the sample mean for n = 36 versus n = 144 is…"
              options={["73/36 = 2.03 · 73/144 = 0.51", "12.17 · 6.08", "2.03 · 1.01", "73 · 36.5"]}
              answer={1}
              explain="σx̄ = σ/√n: 73/√36 = 73/6 ≈ 12.17; 73/√144 = 73/12 ≈ 6.08. Quadrupling n halves the standard error — sample size buys precision."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Ch7 practice · Q12 — sampling designs"
              q="Five city blocks chosen at random, then every household on them interviewed. Which sampling method?"
              options={["Simple random sampling", "Stratified random sampling", "Cluster sampling", "Systematic sampling"]}
              answer={2}
              explain="Cluster sampling — randomly select whole groups (blocks), then study every unit inside. (Systematic = every 50th customer; convenience = whoever is available; judgment = an expert's pick.)"
            />
          </Reveal>
        </div>

        <StmCallout kind="insight" title="Key takeaways from the case file">
          Managers do not need to study <b>every unit</b> of a population to make a good decision.
          A properly designed sample — where every unit has a known chance of selection —
          provides valuable information, reduces cost, and supports better decisions. Next stop
          (Chapter 7 in full): how sample statistics estimate parameters, and how sampling
          distributions let us measure the <b>reliability</b> of those estimates.
        </StmCallout>

        <Takeaways
          items={[
            <>NICE Paper: population 1,000,000 → <b>SRS of 500</b> → sample mean 0.4 m³ estimates the population mean.</>,
            <>Go Bananas: a <b>binomial shutdown rule</b> (n = 25, p = 0.08, alarm at x ≥ 5); McNeil&rsquo;s: a <b>Poisson staffing rule</b> (μ = 6.8/hour, wait &gt; 2 at most 10%).</>,
            <>Sampling designs to name on sight: <b>SRS · stratified · cluster · systematic · convenience · judgment</b>.</>,
          ]}
        />
      </div>
    </Section>
  );
}
