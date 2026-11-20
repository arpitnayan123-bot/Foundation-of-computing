"use client";

/* ============================================================
   StmParts12 — L23 and L24. The RANDBETWEEN laboratory with its
   paste-values step and the superseding quiz update, and
   Student's t with the planner.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps, StmExamCallout } from "./blocks";
import { SEShrink, TDistributionCurve } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L23 a — the RANDBETWEEN lab ---------------- */
export function StmRandbetweenLabSection() {
  return (
    <section id="randbetween-lab" className="scroll-mt-24">
      <StmEyebrow id="randbetween-lab" />
      <StmReadStep n="1" title="The RANDBETWEEN lab" sub="Random samples live — and the step that makes them real" />
      <StmBlocks id="randbetween-lab" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow of the RANDBETWEEN sampling recipe ending in the paste-values freeze"
          caption={<>The RANDBETWEEN recipe, exactly as the lab runs it — and step 4 is the thing that makes a sample real: without paste-values the random numbers keep re-rolling and the sample never holds still.</>}
          steps={[
            { chip: "STEP 1", label: "Assign random numbers", detail: "RANDBETWEEN between 1 and the population size (1 to 2,500)", tone: "violet" },
            { chip: "STEP 2", label: "Sort by the random column", detail: "the population shuffles — every element's chance stays equal", tone: "violet" },
            { chip: "STEP 3", label: "Take the top 50", detail: "the random sample of size n = 50, drawn from N = 2,500 salaries", tone: "violet" },
            { chip: "STEP 4", label: "PASTE-VALUES — the freeze", detail: "copy → paste special → values; the volatile numbers stop re-rolling and the sample becomes data", tone: "gold" },
            { chip: "STEP 5", label: "Compute the sample mean", detail: "x̄ per sample — student means hovered at 71,000-72,500 around μ = 71,800", tone: "gold" },
          ]}
        />
        <StmExamCallout
          kind="supersedes"
          title="Quiz pattern, as revised in L23"
          rows={[
            { k: "Structure", v: "only two quizzes remain — best of two" },
            { k: "Coverage", v: "Quiz 2 reaching through Chapter 8 (interval estimation)" },
            { k: "Dates", v: "communicated in writing" },
            { k: "Scheduling", v: "arranged to avoid the Diwali holiday" },
            { k: "Supersedes", v: "L13's two-plus-one best-two-of-three scheme — and L03's three-quiz scheme before that" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L23 b — the SE shrink machine ---------------- */
export function StmSeShrinkSection() {
  return (
    <section id="se-shrink" className="scroll-mt-24">
      <StmEyebrow id="se-shrink" />
      <StmReadStep n="2" title="The SE shrink machine" sub="σ/√n verified live — and the proportion's own lab" />
      <StmBlocks id="se-shrink" />
      <div className="mt-8 space-y-6">
        <SEShrink id="l23-seshrink" />
        <CalcFlow
          aria="CalcFlow of the standard error verification formula sigma over root n"
          caption={<>The verification the lab runs on every student sample — the standard error is a formula, not a vibe.</>}
          frames={[
            { kind: "formula", label: "Standard error of the mean — symbolic form", math: "σ_x̄ = σ / √n", note: "as L23 states it" },
            { kind: "sub", label: "The lab's population and sample", math: "σ_x̄ = σ / √50 on the N = 2,500 salary population", note: "μ = 71,800 — the truth the samples wander around" },
            { kind: "value", label: "The prediction", math: "sample means cluster within ±σ_x̄ of 71,800", note: "68% of them, if the CLT holds its promise" },
            { kind: "result", label: "The means hovered at 71,000-72,500", math: "observed spread matches σ_x̄", note: "the machine verified live, sample after sample" },
          ]}
        />
        <StmDataTable
          aria="Student proportion samples table with estimates clustering around the actual 0.40"
          caption={<>The proportion lab: student samples returned 0.36, 0.38, 0.39, 0.42, 0.45, 0.47 — clustered around the actual population proportion of 1,000/2,500 = 0.40, exactly as the CLT promises.</>}
          head={["Lab output", "Values"]}
          rows={[
            ["Student sample proportions", "0.36 · 0.38 · 0.39 · 0.42 · 0.45 · 0.47"],
            ["Actual population proportion", "1,000 of 2,500 = 0.40"],
            ["σ_p̂ formula as L23 states it", "σ_p̂ = √[p(1−p)/n]"],
            ["CLT requirement", "sample size of approximately 30 or more is generally sufficient"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L24 a — Student's t ---------------- */
export function StmTDistributionSection() {
  return (
    <section id="t-distribution" className="scroll-mt-24">
      <StmEyebrow id="t-distribution" />
      <StmReadStep n="1" title="Student's t" sub="Guinness, degrees of freedom, and the honesty premium" />
      <StmBlocks id="t-distribution" />
      <div className="mt-8 space-y-6">
        <TDistributionCurve id="l24-tcurve" />
        <StmDataTable
          aria="t-distribution characteristics table with degrees of freedom behaviour"
          caption={<>The t-family's behaviour: developed by Student at the Guinness brewery in Dublin — heavier tails that melt into the normal as df grows.</>}
          head={["Property", "Statement"]}
          rows={[
            ["Origin", "developed by a scientist named Student, on small-scale experiments at the Guinness brewery, Dublin"],
            ["Shape", "like the normal but with slightly heavier tails — the honesty premium for estimating σ with S"],
            ["Degrees of freedom", "df = n − 1"],
            ["Large-sample limit", "beyond 100 df the t can be treated as standard normal"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L24 b — the housing interval & planner ---------------- */
export function StmIntervalPlannerSection() {
  return (
    <section id="interval-planner" className="scroll-mt-24">
      <StmEyebrow id="interval-planner" />
      <StmReadStep n="2" title="The housing interval & the sample-size planner" sub="750 ± 29.3, and Discount Sounds' 312" />
      <StmBlocks id="interval-planner" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the off-campus housing t interval reaching 750 plus or minus 29.3"
          caption={<>The housing interval on Student's t — the final frame is the prose's [720.70, 779.30].</>}
          frames={[
            { kind: "formula", label: "The t interval — symbolic form", math: "x̄ ± t(α/2) · S/√n", note: "σ unknown — the t road replaces z" },
            { kind: "sub", label: "Substitute n = 16, x̄ = 750, S = 55", math: "t(0.025, 15) = 2.131 · margin = 2.131 × 55/√16", note: "df = n − 1 = 15" },
            { kind: "value", label: "Compute the margin", math: "2.131 × 13.75 = 29.3", note: "the honesty premium, in dollars" },
            { kind: "result", label: "750 ± 29.3 = [720.70, 779.30]", math: "interval = [720.7, 779.3]", note: "95% confident the mean one-bedroom rent near campus lies here" },
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the Discount Sounds sample size planner reaching 312"
          caption={<>The planner on Discount Sounds — the final frame is the prose's 312, always rounded up.</>}
          frames={[
            { kind: "formula", label: "Sample size, σ known — symbolic form", math: "n = (Z(α/2) × σ / E)²", note: "round UP, always — so the margin never exceeds E" },
            { kind: "sub", label: "Substitute Z = 1.96, σ = 4,500, E = 500", math: "n = (1.96 × 4,500/500)²", note: "from previous data; 95% confidence" },
            { kind: "value", label: "Compute the square", math: "n = (17.64)² = 311.17", note: "the raw, unrounded size" },
            { kind: "result", label: "Required sample size = 312", math: "n = 312 (rounded up)", note: "the rule: never round down past a promise" },
          ]}
        />
        <StmCallout kind="warn" title="The decision rule, as stated">
          If sigma is known: use the z-distribution, margin Z(α/2) × (σ/√n). If sigma is unknown: use the t-distribution — the switch L24 makes is the same switch L22's z-road implied; both sides of that guidance ship in their own lectures.
        </StmCallout>
      </div>
    </section>
  );
}
