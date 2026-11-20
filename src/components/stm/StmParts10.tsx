"use client";

/* ============================================================
   StmParts10 — L18, L19 and L20. The Poisson staffing rows,
   the sampling distribution and the CLT, and the five designs.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { PoissonBars, SamplingDistCurve, SamplingDesignsTree, SEShrink } from "./diagrams";
import { CalcFlow } from "./stm-math";
/* ---------------- L18 a — Poisson staffing ---------------- */
export function StmPoissonStaffingSection() {
  return (
    <section id="poisson-staffing" className="scroll-mt-24">
      <StmEyebrow id="poisson-staffing" />
      <StmReadStep n="1" title="Poisson staffing" sub="McNeill's 6.8 arrivals an hour — and how many people to roster" />
      <StmBlocks id="poisson-staffing" />
      <div className="mt-8 space-y-6">
        <PoissonBars id="l18-poisson" lambda={6.8} />
        <CalcFlow
          aria="CalcFlow of the Poisson tail probability for more than seven arrivals per hour"
          caption={<>Part one of McNeill's question — the chance more than 7 customers arrive — run to the complement route.</>}
          frames={[
            { kind: "formula", label: "The tail question — symbolic form", math: "P(X > 7) = 1 − P(X ≤ 7), X ~ Poisson(λ = 6.8)", note: "only λ is needed — arrivals are random and rate-constant" },
            { kind: "sub", label: "Cumulate via the CDF", math: "P(X > 7) = 1 − POISSON.DIST(7, 6.8, TRUE)", note: "Excel carries the cumulative directly" },
            { kind: "value", label: "The complement resolves", math: "P(X > 7) = 1 − P(X ≤ 7)", note: "the pmf at exactly 7 is NOT the question — 'more than' is a range" },
            { kind: "result", label: "The overflow risk is priced", math: "the staffing decision reads the tail", note: "exactly-versus-at-least is the whole discipline here" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L18 b — PMF vs CDF lab ---------------- */
export function StmPmfCdfLabSection() {
  return (
    <section id="pmf-cdf-lab" className="scroll-mt-24">
      <StmEyebrow id="pmf-cdf-lab" />
      <StmReadStep n="2" title="PMF vs CDF — the salary lab" sub="Exactly vs at-least, and the normal salary case" />
      <StmBlocks id="pmf-cdf-lab" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="PMF versus CDF distinction table with question keywords and Excel functions"
          caption={<>The distinction that decides the function: 'exactly' summons the mass function, 'at least / more than' summons the cumulative — and Excel's third argument flips between them.</>}
          head={["Question keyword", "Function needed", "Excel"]}
          rows={[
            ["exactly x", "PMF — P(X = x)", "=POISSON.DIST(x, mean, FALSE)"],
            ["at least / more than / until", "CDF — P(X ≤ x)", "=POISSON.DIST(x, mean, TRUE)"],
            ["more than x", "complement of CDF", "1 − P(X ≤ x)"],
          ]}
        />
        <StmDataTable
          aria="MBA salary case table with mean standard deviation and worked probabilities"
          caption={<>The MBA salary case runs the same discipline on normal data: P(X ≥ 30,000) = 97.7%, the ≥ 47,500 tail via NORM.DIST, and the between-question as a difference of two cumulatives.</>}
          head={["Question", "Route", "Result"]}
          rows={[
            ["P(X ≥ $30,000)", "1 − P(X < 30,000)", "97.7%"],
            ["P(X ≥ $47,500)", "=NORM.DIST(47500, 40000, 5000, TRUE)", "the tail from the complement"],
            ["P($34,000 ≤ X ≤ $46,000)", "P(X < 46,000) − P(X < 34,000)", "Z₂ = +1.2 · Z₁ = −1.2, differenced"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L19 a — sampling distribution ---------------- */
export function StmSamplingDistributionSection() {
  return (
    <section id="sampling-distribution" className="scroll-mt-24">
      <StmEyebrow id="sampling-distribution" />
      <StmReadStep n="1" title="The sampling distribution of x̄" sub="Unbiased, corrected, and priced by σ/√n" />
      <StmBlocks id="sampling-distribution" />
      <div className="mt-8 space-y-6">
        <SamplingDistCurve id="l19-sampdist" />
        <StmDataTable
          aria="Finite and infinite population standard error formulas table"
          caption={<>The two standard-error formulas — the finite-population correction √[(N−n)/(N−1)] shrinks the error when the sample takes a real bite of the population, and a finite population may be treated as infinite when n/N &lt; 0.05.</>}
          head={["Population", "Standard error of the mean"]}
          rows={[
            ["Finite (significant sample)", "σ_x̄ = √[(N−n)/(N−1)] × (σ/√n)"],
            ["Infinite (or n/N < 0.05)", "σ_x̄ = σ/√n"],
          ]}
        />
        <StmCallout kind="why" title="Why unbiased matters">
          E(x̄) = μ: the sampling distribution is centred exactly on the population mean — no dial-correction needed. The same holds for p̂ estimating p. That symmetry is what makes every later confidence statement honest.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L19 b — CLT & proportions ---------------- */
export function StmCltStandardErrorSection() {
  return (
    <section id="clt-standard-error" className="scroll-mt-24">
      <StmEyebrow id="clt-standard-error" />
      <StmReadStep n="2" title="The CLT & the proportion's own skeleton" sub="30-or-more, and the same machine for p̂" />
      <StmBlocks id="clt-standard-error" />
      <div className="mt-8 space-y-6">
        <SEShrink id="l19-seshrink" />
        <StmDataTable
          aria="Central limit theorem rules table for sample mean and sample proportion"
          caption={<>The CLT's guarantee in both parameter families: with samples of 30 or more, the sampling distribution of x̄ — and of p̂ — is approximately normal whatever the population looks like.</>}
          head={["Statistic", "Sampling distribution", "Standard error"]}
          rows={[
            ["x̄", "≈ normal for n ≥ 30, any population", "σ_x̄ = σ/√n"],
            ["p̂", "≈ normal when np ≥ 5 and n(1−p) ≥ 5", "σ_p̂ = √[p(1−p)/n] — as L19 writes it"],
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the normal approximation check np equals 21.6 and n times one minus p equals 8.4"
          caption={<>The transcript's own worked check that the proportion's approximation holds — the final frames are the prose's two ≥ 5 verdicts.</>}
          frames={[
            { kind: "formula", label: "The approximation check — symbolic form", math: "np ≥ 5 · n(1−p) ≥ 5", note: "both conditions must hold together" },
            { kind: "sub", label: "Substitute n = 30, p = 0.72", math: "np = 30 × 0.72 · n(1−p) = 30 × 0.28", note: "the transcript's own numbers" },
            { kind: "value", label: "Compute both sides", math: "np = 21.6 · n(1−p) = 8.4", note: "expected successes and expected failures" },
            { kind: "result", label: "Both clear 5 — the approximation holds", math: "21.6 ≥ 5 ✓ · 8.4 ≥ 5 ✓", note: "the sampling distribution of p̂ is approximately normal" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L20 a — probability designs ---------------- */
export function StmProbabilityDesignsSection() {
  return (
    <section id="probability-designs" className="scroll-mt-24">
      <StmEyebrow id="probability-designs" />
      <StmReadStep n="1" title="The probability designs" sub="Stratified, cluster, systematic" />
      <StmBlocks id="probability-designs" />
      <div className="mt-8 space-y-6">
        <SamplingDesignsTree id="l20-designs" />
        <StmSteps
          aria="Workflow of the three probability sampling designs"
          caption={<>The three probability designs, each with its own guarantee — the accuracy of the result can be evaluated for all of them.</>}
          steps={[
            { chip: "STRATIFIED", label: "Slice, then sample", detail: "the population divides into strata; each stratum is sampled — guarantees representation of every slice", tone: "violet" },
            { chip: "CLUSTER", label: "Group, then sample groups", detail: "clusters form naturally (blocks, branches); sample clusters and inspect within", tone: "violet" },
            { chip: "SYSTEMATIC", label: "Start random, step fixed", detail: "a random starting point, then every k-th element — one random decision carries the design", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L20 b — non-probability designs ---------------- */
export function StmNonprobabilityDesignsSection() {
  return (
    <section id="nonprobability-designs" className="scroll-mt-24">
      <StmEyebrow id="nonprobability-designs" />
      <StmReadStep n="2" title="The non-probability designs" sub="Convenience, judgment — and the honesty line" />
      <StmBlocks id="nonprobability-designs" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Probability versus non-probability sampling comparison table"
          caption={<>The comparison the transcript itself lays out: the designs differ on selection knowledge and evaluability — the honesty line runs between the columns.</>}
          head={["Aspect", "Probability methods", "Non-probability methods"]}
          rows={[
            ["Selection", "known, random — every element's chance is stated", "unknown — convenience or judgment picks"],
            ["Accuracy evaluation", "can be evaluated from the design", "cannot be evaluated honestly"],
            ["Designs", "stratified · cluster · systematic (and SRS)", "convenience · judgment"],
          ]}
        />
        <StmCallout kind="warn" title="The honesty line, stated plainly">
          Can the accuracy of the result be evaluated? Only probability methods can say yes. Convenience and judgment samples may still inform — but they can never certify their own accuracy.
        </StmCallout>
      </div>
    </section>
  );
}
