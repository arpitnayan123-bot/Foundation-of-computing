"use client";

/* ============================================================
   StmParts15 — L30 and L31. The one-tail pipeline with both
   roads, and the two-tail tests with the proportion machinery.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { RejectionMetroEMS, RejectionMetroSample1, RejectionToothpaste, RejectionSpeedT, RejectionProportion } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L30 a — the p-value road ---------------- */
export function StmOneTailPvalueSection() {
  return (
    <section id="one-tail-pvalue" className="scroll-mt-24">
      <StmEyebrow id="one-tail-pvalue" />
      <StmReadStep n="1" title="The p-value road" sub="How unlikely is this sample, if H₀ is true?" />
      <StmBlocks id="one-tail-pvalue" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="P value interpretation table by comparison with alpha"
          caption={<>The p-value's whole grammar: it is the probability of a result at least as extreme as the one observed, computed under H₀ — and it is compared, never treated as the truth of H₀.</>}
          head={["Comparison", "Verdict"]}
          rows={[
            ["p-value ≤ α", "reject H₀ — the result is too unlikely to blame on chance"],
            ["p-value > α", "fail to reject H₀ — the data does not convict the null"],
            ["Smaller p-value", "stronger evidence against H₀ — the strength, not the verdict, scales"],
          ]}
        />
        <StmSteps
          aria="Workflow of the five hypothesis testing steps from hypotheses through decision"
          caption={<>The five-step pipeline both roads share — the decision cell is where the p-value road and the critical-value road must agree.</>}
          steps={[
            { chip: "STEP 1", label: "Develop the hypotheses", detail: "H₀ and Hₐ from the research question", tone: "violet" },
            { chip: "STEP 2", label: "Specify α", detail: "the acceptable risk level, fixed before the data speaks", tone: "violet" },
            { chip: "STEP 3", label: "Collect and compute", detail: "the test statistic from the sample", tone: "violet" },
            { chip: "STEP 4", label: "Compute the p-value", detail: "using the test statistic under H₀", tone: "grey" },
            { chip: "STEP 5", label: "Decide", detail: "compare p-value to α — or the statistic to the critical value; reject H₀ if the condition is met", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L30 b — critical values & Metro EMS ---------------- */
export function StmCriticalValueMetroSection() {
  return (
    <section id="critical-value-metro" className="scroll-mt-24">
      <StmEyebrow id="critical-value-metro" />
      <StmReadStep n="2" title="Critical values & the Metro EMS pipeline" sub="The worked one-tail test, both roads" />
      <StmBlocks id="critical-value-metro" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the Metro EMS test statistic from formula to 2.47"
          caption={<>Metro EMS's statistic, end to end — the final frame is the prose's Z = 2.47 with p = 0.0068.</>}
          frames={[
            { kind: "formula", label: "The test statistic — symbolic form", math: "Z = (x̄ − μ₀)/(σ/√n)", note: "σ known — the z road for the mean" },
            { kind: "sub", label: "Substitute the case values", math: "Z = (13.25 − 12)/(3.2/√40)", note: "x̄ = 13.25 minutes, μ₀ = 12, σ = 3.2, n = 40" },
            { kind: "value", label: "Compute", math: "Z = 1.25/0.506 = 2.47", note: "the upper-tail statistic" },
            { kind: "result", label: "p-value = 0.0068 · reject H₀", math: "p = 0.0068 < α = 0.05", note: "the 12-minute response goal is not being met — both roads agree" },
          ]}
        />
        <RejectionMetroEMS id="l30-reject" />
        <RejectionMetroSample1 id="l30-accept" />
        <StmCallout kind="insight" title="α moves the goalpost">
          The critical value for α = 0.01 sits further right than for α = 0.05 — a statistic can fall between the two, making rejection depend on the chosen α. Proper visualisation of the rejection region prevents exactly that confusion.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L31 a — two-tail tests ---------------- */
export function StmTwoTailTestsSection() {
  return (
    <section id="two-tail-tests" className="scroll-mt-24">
      <StmEyebrow id="two-tail-tests" />
      <StmReadStep n="1" title="Two-tail tests" sub="Rejection on both sides — the toothpaste case" />
      <StmBlocks id="two-tail-tests" />
      <div className="mt-8 space-y-6">
        <RejectionToothpaste id="l31-toothpaste" />
        <CalcFlow
          aria="CalcFlow of the toothpaste two-tail test statistic and critical value comparison"
          caption={<>The toothpaste two-tail run — the final frame is the prose's Z = 2.74 &gt; 2.17.</>}
          frames={[
            { kind: "formula", label: "Two-tail hypotheses — symbolic form", math: "H₀: μ = μ₀ · Hₐ: μ ≠ μ₀", note: "deviation either way demands action" },
            { kind: "sub", label: "Split α on both tails", math: "α/2 = 0.015 each side at α = 0.03", note: "the symmetry of the two-tail split" },
            { kind: "value", label: "Read the critical values", math: "Z(α/2) = ±2.17 · statistic Z = 2.74", note: "p-value 0.0062 < 0.03" },
            { kind: "result", label: "Z = 2.74 > 2.17 — reject H₀", math: "reject", note: "the filling process is out of bounds either side of target" },
          ]}
        />
        <StmCallout kind="insight" title="The CI shortcut">
          The confidence interval answers the two-tail question directly: if the hypothesised μ₀ falls inside the interval, fail to reject; outside, reject. Since 6.0 sits outside the computed interval, reject — the same verdict without a second machinery.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L31 b — speeds & proportions ---------------- */
export function StmProportionTestSection() {
  return (
    <section id="proportion-test" className="scroll-mt-24">
      <StmEyebrow id="proportion-test" />
      <StmReadStep n="2" title="Speeds & proportions" sub="Student's t on the highway, z on the proportion" />
      <StmBlocks id="proportion-test" />
      <div className="mt-8 space-y-6">
        <RejectionSpeedT id="l31-speedt" />
        <CalcFlow
          aria="CalcFlow of the highway speed t statistic to 2.286"
          caption={<>The highway-speed statistic — the final frame is the prose's t = 2.286 with df = 63.</>}
          frames={[
            { kind: "formula", label: "The t statistic — symbolic form", math: "t = (x̄ − μ₀)/(S/√n)", note: "σ unknown — Student's t pays the honesty premium" },
            { kind: "sub", label: "Substitute the patrol data", math: "t = (66.2 − 65)/(4.2/√64)", note: "n = 64 vehicles, x̄ = 66.2 mph, S = 4.2 mph" },
            { kind: "value", label: "Compute", math: "t = 1.2/0.525 = 2.286, df = 63", note: "critical t(0.05) = 1.669" },
            { kind: "result", label: "t = 2.286 > 1.669 — reject H₀", math: "reject", note: "the mean speed exceeds 65 mph — suitable for the radar trap" },
          ]}
        />
        <RejectionProportion id="l31-prop" />
        <CalcFlow
          aria="CalcFlow of the drunk driving proportion test statistic to 1.278"
          caption={<>The drunk-driving proportion test — the final frame is the prose's Z = 1.278, and the verdict is fail to reject.</>}
          frames={[
            { kind: "formula", label: "The proportion statistic — symbolic form", math: "Z = (p̂ − p₀)/√[p₀(1−p₀)/n]", note: "p₀ is the hypothesised proportion; the SE uses p₀, not p̂" },
            { kind: "sub", label: "Substitute the sample", math: "p̂ = 67/120 = 0.558 · σ_{p̂} = 0.045", note: "120 accidents, 67 drunk-driving caused; H₀: p = 0.5" },
            { kind: "value", label: "Compute the statistic", math: "Z = 1.278", note: "two-tail critical values at α = 0.05: ±1.96" },
            { kind: "result", label: "Z = 1.278 falls inside ±1.96 — fail to reject H₀", math: "fail to reject", note: "the National Safety Council's 50% claim stands against this sample" },
          ]}
        />
      </div>
    </section>
  );
}
