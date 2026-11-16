"use client";

/* ============================================================
   Statistics for Managers — PART 9 (shelf 05). Lecture 19 + 23:
   the sampling distribution of the mean — why every sample mean
   wobbles, the standard error σ/√n, unbiased estimators, the
   Central Limit Theorem, and the sampling distribution of a
   proportion — with Marrian Dairies' BlueGurt/StrawGurt decision
   (lecture 21) computed live. Lecture 20 rides along: the five
   sampling methods — stratified, cluster, systematic,
   convenience, judgment — as one animated selector.
   Every number is from the lecture notes:
   μ = 71,800 σ = 4,000 · Marrian Dairies σx̄ = 3.5355, Z = −1.41,
   P = 0.0786 · p = 0.72, n = 30 → np = 21.6, n(1−p) = 8.4.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  BarChart3,
  Boxes,
  Check,
  Dices,
  Hand,
  Layers,
  ListOrdered,
  MousePointerClick,
  MoveHorizontal,
  Shuffle,
  Sigma,
  UserCheck,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 19+23 · MOVEMENT 1 — THE SAMPLING DISTRIBUTION OF x̄
   ============================================================ */

/* the living machine: choose n, watch the sampling distribution
   of the mean tighten around μ = 71,800 (σ = 4,000) */
function StandardErrorExplorer() {
  const [n, setN] = useState(50);
  const MU = 71800;
  const SIGMA = 4000;
  const se = SIGMA / Math.sqrt(n);
  // bell width in σx̄ units — the curve IS the sampling distribution
  const halfWidth = 3.6 * se;
  const w = 560;
  const h = 150;
  const cx = w / 2;
  const baseY = h - 18;
  const amp = 108;
  const bell = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const x = cx - halfWidth + (2 * halfWidth * i) / 60;
      const t = (x - cx) / (halfWidth / 3);
      const y = baseY - amp * Math.exp(-0.5 * t * t);
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [halfWidth, cx, baseY]);
  const spreadPct = Math.min(100, (se / (SIGMA / Math.sqrt(5))) * 100);

  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The standard-error explorer — bigger n, tighter means</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <MoveHorizontal className="h-3 w-3" /> drag the sample size
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg viewBox={`0 0 ${w} ${h}`} className="min-w-[420px]" role="img" aria-label="Sampling distribution of the mean narrowing as n grows">
          {/* axis */}
          <line x1="12" y1={baseY} x2={w - 12} y2={baseY} stroke="#e2d6f5" strokeWidth="1.5" />
          {/* μ marker */}
          <line x1={cx} y1="16" x2={cx} y2={baseY} stroke="#ca8a04" strokeWidth="1.4" strokeDasharray="4 4" />
          <text x={cx + 6} y="26" fontSize="11" fontWeight="700" fill="#a16207">μ = 71,800</text>
          {/* the curve — re-drawn live */}
          <motion.polyline
            points={bell}
            fill="none"
            stroke={STM_G[600]}
            strokeWidth="2.4"
            strokeLinecap="round"
            animate={{ points: bell }}
            transition={{ duration: 0.25 }}
          />
          {/* ±1σx̄ band */}
          <motion.rect
            height="10"
            rx="5"
            y={baseY + 4}
            fill={STM_G.soft}
            stroke={STM_G.border}
            animate={{ x: cx - se * (w / (2 * halfWidth)), width: (2 * se * w) / (2 * halfWidth) }}
            transition={{ duration: 0.25 }}
          />
          <text x="14" y={baseY - 4} fontSize="10" fontWeight="600" fill="#8a7bb0">sample means →</text>
        </svg>
      </div>

      <label htmlFor="se-n" className="mt-4 block text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
        Sample size <span className="font-mono text-[#6d28d9]">n = {n}</span>
      </label>
      <input
        id="se-n"
        type="range"
        min={5}
        max={200}
        step={5}
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        className="mt-2 w-full accent-[#7c3aed]"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>σ (population)</p>
          <p className="font-mono text-2xl font-black" style={{ color: STM_G[800] }}>4,000</p>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>σx̄ = σ/√n</p>
          <AnimatePresence mode="popLayout">
            <motion.p
              key={se.toFixed(1)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="font-mono text-2xl font-black"
              style={{ color: STM_G[800] }}
            >
              {se.toFixed(1)}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em] text-[#b3402c]">spread vs n = 5</p>
          <p className="font-mono text-2xl font-black text-[#8c2f2f]">{spreadPct.toFixed(0)}%</p>
        </div>
      </div>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        Slide n from 5 to 200 and the distribution of sample means collapses onto μ. That is the
        whole promise: <b>σx̄ = σ/√n</b> — quadruple the sample and the standard error halves.
        At n = 5 the explorer shows σx̄ = 1,789; at n = 200 it is <b>283</b>. Same population,
        dramatically more trustworthy sample mean.
      </p>
    </div>
  );
}

export function StmSamplingDistSection() {
  return (
    <Section id="sampling-dist">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lectures 19 & 23 · Sampling Distributions + the Excel laboratory"
          title={
            <>
              The sampling <span className="grad-violet">distribution</span> — why means wobble
            </>
          }
          lead="Take one random sample of n = 50 salaries: x̄ = 72,370. Take another: 71,240. Another: 72,090. Each sample gets its own mean — and the distribution of ALL possible sample means is the sampling distribution. It is the bridge from one noisy estimate to a confident inference."
        />

        <StmReadStep n="01" title="One sample, many samples, one distribution" sub="The population is fixed — the sample means are what vary" />
        <Reveal>
          <div className="card-warm p-5">
            <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
              {[
                { icon: <Layers className="h-4 w-4" />, label: "Population", sub: "N = 2,500 salaries · μ = 71,800 · σ = 4,000" },
                { icon: <Dices className="h-4 w-4" />, label: "Draw sample 1…k", sub: "each of size n = 50, each gives its own x̄" },
                { icon: <BarChart3 className="h-4 w-4" />, label: "Collect the x̄'s", sub: "their distribution ≈ normal, centred on μ" },
              ].map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="card-warm flex flex-1 items-center gap-3 p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: STM_BTN_GRAD }}>{s.icon}</span>
                    <div>
                      <p className="font-bold text-[#3e2c1d]">{s.label}</p>
                      <p className="text-[.76rem] text-muted-warm">{s.sub}</p>
                    </div>
                  </div>
                  {i < 2 ? <span className="hidden text-2xl font-black md:block" style={{ color: STM_G[400] }}>→</span> : null}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-3 text-[.86rem] leading-relaxed text-[#2b2014]">
              In the lecture&apos;s live exercise, repeated samples of 50 from the 2,500-employee
              population produced means from about <b>71,000 to 72,500</b> — every one of them
              hovering near the true <b>μ = 71,800</b>. The sampling distribution is the
              probability distribution of <b>all possible x̄ values</b> from samples of size n —
              <b> not</b> the distribution of the raw data points inside one sample.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Unbiased, with a known precision" sub="E(x̄) = μ — and the standard error prices the wobble" />
        <StandardErrorExplorer />
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The two standard-error formulas">{`Infinite population (or n/N ≤ 5%):

    σx̄ = σ / √n

Finite population (sampling without
replacement, n/N > 5%):

    σx̄ = √[(N−n)/(N−1)] · σ/√n
          ↑ finite population correction

n = 50 from N = 2,500 → n/N = 2% ≤ 5%
→ treat the population as infinite.`}</StmPanel>
          </Reveal>
          <Reveal delay={90}>
            <StmCallout kind="why" title="Why “unbiased” matters">
              <p>
                The expected value of the sampling distribution equals <b>μ</b> — the sample mean
                is an <b>unbiased estimator</b>: repeated sampling converges on the truth, it does
                not systematically miss. When the sample size equals the population size, σx̄ = 0:
                a census has <b>zero</b> deviation in its mean. And as n/N shrinks the correction
                factor → 1, which is why nearly every real dataset can use the simple σ/√n.
              </p>
            </StmCallout>
          </Reveal>
        </div>

        <StmReadStep n="03" title="The Central Limit Theorem" sub="Any population in, normal sampling distribution out — n ≥ 30" />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card-warm p-5">
              <p className="font-bold text-[#3e2c1d]">The theorem that carries the course</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                Select random samples of size n from <b>any</b> population — skewed, lumpy,
                anything. As n grows, the sampling distribution of x̄ approaches a{" "}
                <b>normal distribution</b>. Rule of thumb: <b>n ≥ 30</b> is enough; for highly
                skewed populations prefer <b>n ≥ 50</b>.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Careful: the CLT normalises the distribution of the <b>sample means</b> — it says
                nothing about the raw data itself. A skewed population stays skewed; it is the
                x̄&apos;s that go normal.
              </p>
            </div>
            <StmPanel label="Probability arithmetic on x̄ — Z = (x̄ − μ)/σx̄">{`Salary population: μ = 40,000, σ = 5,000
P(±500 around μ)?

n = 30:  σx̄ = 5,000/√30 = 913
         Z = ±500/913 = ±0.55
         P ≈ 2(0.7088) − 1 = 41.7%  (lecture: ~47% band)
n = 100: σx̄ = 5,000/√100 = 500
         Z = ±500/500 = ±1.00
         P ≈ 2(0.8413) − 1 = 68.3%  (lecture: ~78% band)

Same ±500 window — bigger n traps more
probability inside it.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Proportions get the same machinery" sub="E(p̄) = p · σp̄ = √[p(1−p)/n] · normal if np ≥ 5 and n(1−p) ≥ 5" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <StmPanel label="The 72%-housing check — n = 30">{`p = 0.72 (applicants wanting housing)

np    = 30 × 0.72 = 21.6 ≥ 5 ✓
n(1−p)= 30 × 0.28 =  8.4 ≥ 5 ✓

→ the sampling distribution of p̄ is
  approximately normal; the same
  Z-arithmetic applies.

In the live class: student samples of 100
yielded p̄ = 0.36, 0.38, 0.39, 0.42, 0.45,
0.47 — clustered around the true p = 0.40.`}</StmPanel>
            <StmCallout kind="insight" title="The Excel laboratory (lecture 23)">
              <p>
                The sampling distribution is <b>empirically checkable</b>: seed every employee
                with <b>=RANDBETWEEN(1, 2500)</b>, convert to values with <b>Paste Special →
                Values</b> (or the numbers keep re-rolling), sort, take the first 50, average
                them — repeat thirty times and histogram the x̄&apos;s. The bell appears out of
                your own spreadsheet, no theorem required on faith.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Case — Marrian Dairies: can StrawGurt find a market?" sub="BlueGurt rates μ = 80, σ = 25 · buy-threshold is 75 · n = 50" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#3b1d52,#5b2a86)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#e9d5ff]">
                <Sigma className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#faf5ff]">
                How many raters score BlueGurt ≤ 75 — the customers who might switch?
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#d8c2f0]">
                Marrian Dairies hit a home run with <b>BlueGurt</b> (mean rating 80, σ = 25 on a
                100-point scale; ratings above 75 mean purchase). Marketing wants{" "}
                <b>StrawGurt</b> to win the customers BlueGurt loses — without cannibalising the
                hit. The question: if n = 50 customers rate BlueGurt, how likely is a sample mean
                of 75 <b>or less</b>?
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <StmPanel label="The machine — sampling distribution of x̄">{`σx̄ = σ/√n = 25/√50 = 3.5355

Z = (75 − 80) / 3.5355 = −1.414

P(x̄ ≤ 75) = P(Z ≤ −1.414) = 0.0786

→ a 7.86% chance the sample reads
  "75 or less" — a small disgruntled
  segment.

Widen the lens: P(75 ≤ x̄ ≤ 85)?
Z = ±1.414 → 2(0.9213) − 1 = 84.2%`}</StmPanel>
              <div className="flex flex-col gap-3">
                <StmCallout kind="story" title="The n = 150 plot twist">
                  <p>
                    Repeat with <b>n = 150</b>: σx̄ = 25/√150 = 2.041, Z = −2.449, and{" "}
                    <b>P(x̄ ≤ 75) ≈ 0.007 — 0.7%</b>. A bigger sample almost never misreads the
                    population, so the apparent &ldquo;unhappy market&rdquo; evaporates. The
                    decision: StrawGurt&apos;s addressable segment is thin — <b>launch with
                    caution</b>, or re-think the target.
                  </p>
                </StmCallout>
                <StmCallout kind="why" title="The managerial moral">
                  <p>
                    Same population, same 75-threshold — only <b>n</b> changed, and the answer
                    moved from 7.86% to 0.7%. Sampling distributions let a manager price{" "}
                    <b>how much of the wobble is real opportunity</b> versus how much is just
                    small-sample noise.
                  </p>
                </StmCallout>
              </div>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="06" title="Check yourself" sub="Two taps on the standard error" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 19 · check"
              q="A population has σ = 40. Samples of size 100 are drawn. The standard error of the mean is…"
              options={["4.0", "0.4", "40", "400"]}
              answer={0}
              explain="σx̄ = σ/√n = 40/√100 = 40/10 = 4.0. The standard error shrinks with the SQUARE ROOT of n — to halve it you must quadruple the sample."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 19 · check"
              q="A population is highly right-skewed. The sampling distribution of x̄ will be approximately normal if…"
              options={[
                "n ≥ 30 by the Central Limit Theorem",
                "the population itself must be normal first",
                "n ≥ 5 is always sufficient",
                "it can never be normal for skewed data",
              ]}
              answer={0}
              explain="The CLT works on ANY population: with n ≥ 30 (50+ for very skewed data) the sampling distribution of the mean is approximately normal even though the raw data is skewed. The theorem normalises the x̄'s, not the data."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                The <b>sampling distribution of x̄</b> is the distribution of all possible sample
                means for samples of size n — the bridge from one noisy x̄ to a full probability
                statement.
              </>,
              <>
                <b>σx̄ = σ/√n</b> (infinite population); add the finite correction √[(N−n)/(N−1)]
                only when n/N &gt; 5%. Bigger n → smaller standard error → tighter estimates.
              </>,
              <>
                <b>Central Limit Theorem</b>: for n ≥ 30 the x̄ distribution is approximately
                normal <i>whatever</i> the population looks like — skewed data included (prefer 50+
                there).
              </>,
              <>
                Proportions mirror means: <b>E(p̄) = p</b>, <b>σp̄ = √[p(1−p)/n]</b>, normality
                when <b>np ≥ 5</b> and <b>n(1−p) ≥ 5</b>.
              </>,
              <>
                Marrian Dairies: n = 50 → <b>7.86%</b>; n = 150 → <b>0.7%</b>. Sample size is a
                managerial lever, not a technicality.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 20 · MOVEMENT 2 — THE FIVE SAMPLING METHODS
   ============================================================ */

type MethodId = "stratified" | "cluster" | "systematic" | "convenience" | "judgment";

const METHOD_META: Record<
  MethodId,
  { label: string; icon: React.ReactNode; tag: string; blurb: string; pros: string[]; cons: string[]; uses: string }
> = {
  stratified: {
    label: "Stratified",
    icon: <Layers className="h-4 w-4" />,
    tag: "probability · homogeneous strata",
    blurb:
      "Split the population into homogeneous groups (strata) — every element belongs to exactly one — then draw a random sample inside each stratum and pool them.",
    pros: ["Most precise of the probability methods", "Smaller total sample for the same accuracy", "Every segment is guaranteed representation"],
    cons: ["You need stratum membership for every element", "More design effort up front"],
    uses: "Political surveys, government policy rollouts, college initiatives — strata by gender, age, location, income",
  },
  cluster: {
    label: "Cluster",
    icon: <Boxes className="h-4 w-4" />,
    tag: "probability · heterogeneous clusters",
    blurb:
      "Divide the population into heterogeneous clusters — each one a mini-population — randomly pick a few clusters, then sample every element inside the chosen clusters.",
    pros: ["Cost-effective when elements are geographically close", "Fast data collection — travel only to chosen clusters"],
    cons: ["Needs a larger total sample than stratified or simple random", "Less precise per element sampled"],
    uses: "Vaccine trials, city-block surveys, well-defined area sampling",
  },
  systematic: {
    label: "Systematic",
    icon: <ListOrdered className="h-4 w-4" />,
    tag: "probability · every kth element",
    blurb:
      "Order the population, choose a random start inside the first k = N/n elements, then take every kth element after that.",
    pros: ["Easier to execute than simple random sampling", "No need to handle the full frame at once"],
    cons: ["Dangerous if the list hides a repeating pattern", "Approximates simple random sampling only when order is random"],
    uses: "Every 100th telephone listing, every 20th customer wins a prize, the 100th caller",
  },
  convenience: {
    label: "Convenience",
    icon: <Hand className="h-4 w-4" />,
    tag: "non-probability · whoever is easy",
    blurb:
      "Include elements because they are easy to reach — volunteers, friends, whatever the researcher can grab — with no known selection probability.",
    pros: ["Fast and cheap to assemble"],
    cons: ["Representativeness unknowable", "Accuracy cannot be evaluated statistically"],
    uses: "Professors using student volunteers, asking friends about a restaurant",
  },
  judgment: {
    label: "Judgment",
    icon: <UserCheck className="h-4 w-4" />,
    tag: "non-probability · expert picks",
    blurb:
      "The most knowledgeable person selects the elements believed to be most representative of the population.",
    pros: ["Simple and quick when an expert truly knows the domain"],
    cons: ["Quality rests entirely on the selector's judgment", "Open to bias; results cannot be statistically evaluated"],
    uses: "Reporters picking senators to gauge the Senate, teachers choosing students for a competition",
  },
};

/* mini population of 24 dots, arranged as 3 strata × 8 — the same
   population is re-coloured/highlighted per method */
const METHOD_DOTS = Array.from({ length: 24 }, (_, i) => ({
  x: 34 + (i % 8) * 66,
  y: 44 + Math.floor(i / 8) * 62,
  stratum: Math.floor(i / 8),
}));

function MethodStage({ method }: { method: MethodId }) {
  const picked = useMemo(() => {
    switch (method) {
      case "stratified":
        return [1, 4, 10, 13, 19, 22]; // a few from EACH stratum
      case "cluster":
        return [8, 9, 10, 11, 12, 13, 14, 15]; // all of stratum 1 (whole clusters)
      case "systematic":
        return [2, 5, 8, 11, 14, 17, 20, 23]; // every kth (k = 3)
      case "convenience":
        return [0, 1, 2, 3]; // the nearest corner
      case "judgment":
        return [5, 9, 15, 19]; // expert's picks
    }
  }, [method]);

  const colorFor = (i: number) => {
    const isPicked = picked.includes(i);
    if (method === "stratified") {
      const sc = ["#8b5cf6", "#ca8a04", "#0f766e"][METHOD_DOTS[i].stratum];
      return isPicked ? sc : `${sc}33`;
    }
    if (method === "cluster") {
      return isPicked ? "#8b5cf6" : `${"#8b5cf6"}22`;
    }
    return isPicked ? "#6d28d9" : "#d9cdf8";
  };

  return (
    <div className="overflow-x-auto">
      <svg viewBox="0 0 560 200" className="min-w-[420px]" role="img" aria-label={`Diagram of ${method} sampling`}>
        {method === "stratified"
          ? [0, 1, 2].map((s) => (
              <rect key={s} x="20" y={24 + s * 62} width="520" height="56" rx="10" fill="none" stroke="#d9cdf8" strokeWidth="1.2" strokeDasharray="5 4" />
            ))
          : null}
        {method === "cluster" ? (
          <rect x="500" y="86" width="52" height="56" rx="10" fill="#8b5cf6" opacity="0.16" />
        ) : null}
        {METHOD_DOTS.map((d, i) => (
          <motion.circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={picked.includes(i) ? 9 : 6.5}
            animate={{ r: picked.includes(i) ? 9 : 6.5, fill: colorFor(i) }}
            transition={{ duration: 0.3, delay: picked.includes(i) ? i * 0.02 : 0 }}
            stroke={picked.includes(i) ? "#4c1d95" : "none"}
            strokeWidth="1.4"
          />
        ))}
        {method === "systematic" ? (
          <text x="20" y="192" fontSize="10.5" fontWeight="600" fill="#8a7bb0">
            k = N/n — a random start inside the first k, then every kth element
          </text>
        ) : null}
        {method === "stratified" ? (
          <text x="20" y="192" fontSize="10.5" fontWeight="600" fill="#8a7bb0">
            random sample drawn inside every stratum — all three colours sampled
          </text>
        ) : null}
        {method === "cluster" ? (
          <text x="20" y="192" fontSize="10.5" fontWeight="600" fill="#8a7bb0">
            whole clusters are chosen at random — every element inside comes along
          </text>
        ) : null}
      </svg>
    </div>
  );
}

function SamplingMethodLab() {
  const [method, setMethod] = useState<MethodId>("stratified");
  const meta = METHOD_META[method];
  const isProb = method !== "convenience" && method !== "judgment";
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The five ways to ask — one population, five sampling designs</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <MousePointerClick className="h-3 w-3" /> tap a method
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(METHOD_META) as MethodId[]).map((m) => (
          <button
            key={m}
            onClick={() => setMethod(m)}
            aria-pressed={method === m}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[.78rem] font-bold transition-all duration-200 ${
              method === m ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={method === m ? { background: STM_BTN_GRAD } : undefined}
          >
            {METHOD_META[m].icon}
            {METHOD_META[m].label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={method}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-4 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-[#d9cdf8] bg-white p-3">
            <MethodStage method={method} />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="flex flex-wrap items-center gap-2 text-base font-black text-[#3e2c1d]">
                {meta.label} sampling
                <span className={`rounded-full px-2.5 py-0.5 text-[.62rem] font-extrabold uppercase tracking-[.1em] ${isProb ? "bg-[#ecfdf5] text-[#047857]" : "bg-[#fbeae5] text-[#b3402c]"}`}>
                  {isProb ? <Check className="mr-1 inline h-3 w-3" /> : <X className="mr-1 inline h-3 w-3" />}
                  {meta.tag}
                </span>
              </p>
              <p className="mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">{meta.blurb}</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-xl bg-[#f6f3fe] p-3">
                <p className="text-[.66rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>Strengths</p>
                <ul className="mt-1 space-y-1 text-[.78rem] leading-snug text-[#2b2014]">
                  {meta.pros.map((p) => <li key={p}>· {p}</li>)}
                </ul>
              </div>
              <div className="rounded-xl bg-[#fdf0ea] p-3">
                <p className="text-[.66rem] font-black uppercase tracking-[.14em] text-[#b3402c]">Watch out</p>
                <ul className="mt-1 space-y-1 text-[.78rem] leading-snug text-[#2b2014]">
                  {meta.cons.map((c) => <li key={c}>· {c}</li>)}
                </ul>
              </div>
            </div>
            <p className="rounded-xl bg-[#f5f1e8] p-3 text-[.78rem] leading-relaxed text-[#5c4a2f]">
              <b>Seen in the wild:</b> {meta.uses}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function StmSamplingMethodsSection() {
  return (
    <Section id="sampling-methods">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 20 · Alternative sampling designs"
          title={
            <>
              Five ways to <span className="grad-violet">ask</span> the population
            </>
          }
          lead="Simple random sampling is the ideal — but real surveys run on stratified, cluster and systematic designs, and when no frame exists at all, convenience and judgment step in. The dividing line that matters: can you compute the probability each element is selected?"
        />

        <StmReadStep n="01" title="The design gallery" sub="Same 24-element population — three probability designs, two non-probability fallbacks" />
        <SamplingMethodLab />

        <StmReadStep n="02" title="Stratified vs cluster — the classic exam pair" sub="Homogeneous inside vs a miniature population inside" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card-warm p-5">
              <p className="flex items-center gap-2 font-bold text-[#3e2c1d]"><Layers className="h-4 w-4" style={{ color: STM_G[700] }} /> Stratified — precision play</p>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                Strata are <b>homogeneous within</b> and differ <b>between</b>: all men in one
                stratum, all women in another; or income bands, age bands, regions. Sampling{" "}
                <b>inside every stratum</b> guarantees each segment a voice and shrinks the
                variance — the same accuracy from a smaller sample.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                A national poll stratifies by state × gender × age so no group is missed by
                chance.
              </p>
            </div>
            <div className="card-warm p-5">
              <p className="flex items-center gap-2 font-bold text-[#3e2c1d]"><Boxes className="h-4 w-4" style={{ color: STM_G[700] }} /> Cluster — logistics play</p>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                Clusters are <b>heterogeneous within</b> — each block or village mirrors the whole
                population. You sample <b>a few entire clusters</b> and count everything inside
                them: field teams visit three blocks, not three hundred homes spread across a
                city.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Cheaper per interview — but you need a larger total sample for the same
                precision.
              </p>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Probability vs non-probability — the honesty line" sub="Can the accuracy be evaluated? Only one side of the table can say yes" />
        <Reveal>
          <div className="overflow-x-auto rounded-2xl">
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Probability methods</th>
                  <th>Non-probability methods</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">Techniques</td>
                  <td>Stratified · cluster · systematic · simple random</td>
                  <td>Convenience · judgment</td>
                </tr>
                <tr>
                  <td className="font-bold">Selection probability</td>
                  <td className="font-mono">known for every element</td>
                  <td className="font-mono">unknown</td>
                </tr>
                <tr>
                  <td className="font-bold">Accuracy</td>
                  <td>Can be statistically assessed against the population</td>
                  <td>Cannot be evaluated — may not represent anything</td>
                </tr>
                <tr>
                  <td className="font-bold">Recommendation</td>
                  <td className="font-semibold" style={{ color: STM_G[800] }}>Use for management decisions</td>
                  <td>Only when probability sampling is impossible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Check yourself" sub="Name the design" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 20 · check"
              q="A vaccine researcher divides a city into wards, randomly picks 6 wards, and surveys every household inside them. The design is…"
              options={["stratified random sampling", "cluster sampling", "systematic sampling", "judgment sampling"]}
              answer={1}
              explain="Whole, heterogeneous groups (wards = clusters) are randomly selected and every element inside them is sampled — that is cluster sampling. Stratified would instead sample a few households from EVERY ward."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 20 · check"
              q="Why do managers prefer probability sampling whenever it is feasible?"
              options={[
                "Selection probabilities are known, so accuracy can be evaluated with formulas",
                "It is always the cheapest option",
                "It removes the need for any sample size decisions",
                "It guarantees zero sampling error",
              ]}
              answer={0}
              explain="Probability methods let you compute how far estimates may stray from the population truth — the standard-error machinery of the previous section only works when selection probabilities are known. No method eliminates sampling error; probability sampling just makes it measurable."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Stratified</b> = homogeneous strata, sample within each — the precision
                champion. <b>Cluster</b> = heterogeneous clusters, take whole ones — the logistics
                champion.
              </>,
              <>
                <b>Systematic</b> (every kth after a random start) approximates simple random
                sampling only when the list has no hidden pattern.
              </>,
              <>
                <b>Convenience</b> and <b>judgment</b> are non-probability: fast, but their
                accuracy can never be statistically evaluated.
              </>,
              <>
                Every method shares one goal — understand the population without touching all of
                it — and the best managers buy probability sampling whenever they can.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
