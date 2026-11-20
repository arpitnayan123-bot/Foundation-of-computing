"use client";

/* ============================================================
   StmParts7 — L12 and L13. Probability as area, the uniform
   and normal, the precise empirical bands — and the checkpoint
   with the demand-mix machine.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmExamCallout, StmCallout, StmSteps } from "./blocks";
import { UniformCurve, PreciseBell, TVPmf } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L12 a — continuous & uniform ---------------- */
export function StmContinuousUniformSection() {
  return (
    <section id="continuous-uniform" className="scroll-mt-24">
      <StmEyebrow id="continuous-uniform" />
      <StmReadStep n="1" title="Probability as area" sub="The uniform distribution — Slater's Buffet" />
      <StmBlocks id="continuous-uniform" />
      <div className="mt-8 space-y-6">
        <UniformCurve id="l12-uniform" a="5 oz" b="15 oz" />
        <CalcFlow
          aria="CalcFlow of the Slater's Buffet salad probability from area width times height to 30 percent"
          caption={<>The uniform's area machine on the salad example — the final frame matches the prose's 30%.</>}
          frames={[
            { kind: "formula", label: "Uniform probability — symbolic form", math: "P(c ≤ x ≤ d) = (d − c) × f(x), with f(x) = 1/(b − a)", note: "area = width × height" },
            { kind: "sub", label: "Substitute the 12-to-15-ounce band", math: "P(12 ≤ x ≤ 15) = (15 − 12) × 1/10", note: "salad weight uniform on [5, 15]" },
            { kind: "value", label: "Compute the area", math: "P(12 ≤ x ≤ 15) = 3 × 0.10 = 0.30", note: "the rectangle's strip" },
            { kind: "result", label: "30% of customers take 12-15 oz", math: "P = 0.30", note: "E(X) = (5+15)/2 = 10 oz · Var(X) = (15−5)²/12 = 8.33" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L12 b — normal & standard normal ---------------- */
export function StmNormalStandardSection() {
  return (
    <section id="normal-standard" className="scroll-mt-24">
      <StmEyebrow id="normal-standard" />
      <StmReadStep n="2" title="The normal & the standard normal" sub="68.26 / 95.45 / 99.72 — and PepZone's tail" />
      <StmBlocks id="normal-standard" />
      <div className="mt-8 space-y-6">
        <PreciseBell id="l12-precise" />
        <CalcFlow
          aria="CalcFlow of the PepZone stockout probability from z conversion to the 20.33 percent tail"
          caption={<>PepZone's stockout question, end to end — the final frame is the prose's 20.33%.</>}
          frames={[
            { kind: "formula", label: "Standardisation — symbolic form", math: "Z = (X − μ)/σ", note: "any normal becomes the standard normal" },
            { kind: "sub", label: "Substitute the reorder point", math: "Z = (20 − 15)/6 = 0.83", note: "reorder point 20 gallons, μ = 15, σ = 6" },
            { kind: "value", label: "Read the table", math: "P(Z ≤ 0.83) = 0.7967", note: "cumulative from the standard normal table" },
            { kind: "result", label: "P(Z > 0.83) = 0.2033", math: "stockout risk = 20.33%", note: "the tail the reorder decision reads" },
          ]}
        />
        <StmDataTable
          aria="Normal distribution properties table"
          caption={<>The normal's defining properties — two parameters write the whole family, and the mean equals the median equals the mode.</>}
          head={["Property", "Statement"]}
          rows={[
            ["Parameters", "μ (location) and σ (spread) completely define the family"],
            ["Shape", "bell-shaped, symmetric about the mean"],
            ["Centre", "mean = median = mode — the same point"],
            ["Empirical bands", "68.26% within ±1σ · 95.45% within ±2σ · 99.72% within ±3σ"],
            ["6-Sigma reading", "μ ± 3σ is the acceptable zone; beyond it lies the uncontrollable"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L13 a — the quiz checkpoint ---------------- */
export function StmQuizCheckpointSection() {
  return (
    <section id="quiz-checkpoint" className="scroll-mt-24">
      <StmEyebrow id="quiz-checkpoint" />
      <StmReadStep n="1" title="The distributions checkpoint" sub="The quiz pattern as L13 states it" />
      <StmBlocks id="quiz-checkpoint" />
      <div className="mt-8 space-y-6">
        <StmExamCallout
          kind="quiz-brief"
          title="Quiz pattern, as stated in L13"
          rows={[
            { k: "Structure", v: "two quizzes of 20 marks each, plus one combined-syllabus quiz" },
            { k: "Counting", v: "best two of three" },
            { k: "Coverage", v: "covering Chapter 6 — continuous distributions" },
            { k: "Format", v: "objective only · 15 to 20 minutes · calculator allowed" },
            { k: "Superseded by", v: "L23 — two quizzes, best of two, Quiz 2 through Chapter 8, scheduling that avoids the Diwali holiday" },
          ]}
        />
        <StmCallout kind="story" title="Why formulas replace re-counting">
          When the same question arrives a thousand times, counting days stops scaling — the formula carries the distribution in one line, and the checkpoint's demand-mix machine shows how sensitive that formula is to the data behind it.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L13 b — the demand-mix machine ---------------- */
export function StmDemandMixSection() {
  return (
    <section id="demand-mix" className="scroll-mt-24">
      <StmEyebrow id="demand-mix" />
      <StmReadStep n="2" title="The demand-mix machine" sub="The 80 zero-sale days become 10-unit days — E(X) 1.2 → 5.2" />
      <StmBlocks id="demand-mix" />
      <div className="mt-8 space-y-6">
        <TVPmf id="l13-shift" shift />
        <CalcFlow
          aria="CalcFlow of the demand mix expected value shift from 1.2 to 5.2 units per day"
          caption={<>The shift, computed: when the 80 zero-sale days sell 10 units, the expected value moves 1.2 → 5.2 — the final frame is the prose's own number.</>}
          frames={[
            { kind: "formula", label: "Expected value under the shift", math: "E(X) = Σ(X · f(x)) on the reshaped distribution", note: "the mix change rewrites f(x), not the formula" },
            { kind: "sub", label: "The 80 zero-sale days now sell 10 units", math: "E(X) = 0(0) + 1(0.25) + 2(0.20) + 3(0.05) + 4(0.10) + 10(0.40)", note: "the zero mass moves wholesale to x = 10" },
            { kind: "value", label: "Sum the products", math: "E(X) = 0.25 + 0.40 + 0.15 + 0.40 + 4.00", note: "the same four sales days plus the gold 10-unit block" },
            { kind: "result", label: "E(X) jumps to 5.2 units per day", math: "E(X): 1.2 → 5.2", note: "a distribution modification, a different business decision" },
          ]}
        />
        <StmSteps
          aria="Workflow from mean alone to variance to standard deviation for demand planning"
          caption={<>Why the mean is never enough: stock the average and the high-demand days still starve you — variance and σ carry the risk.</>}
          steps={[
            { chip: "MEAN", label: "Know the centre", detail: "average demand of 3 units is not a plan of 3 units", tone: "violet" },
            { chip: "VARIANCE", label: "Square the deviations", detail: "Σ[(X − μ)² · f(x)] — signs can no longer cancel", tone: "violet" },
            { chip: "σ", label: "Take the root", detail: "spread back in demand's own units — the safety stock reads it", tone: "gold" },
            { chip: "DECIDE", label: "Plan above the mean", detail: "inventory, hiring and forecasting all price the variability", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}
