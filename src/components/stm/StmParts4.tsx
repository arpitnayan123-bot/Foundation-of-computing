"use client";

/* ============================================================
   StmParts4 — L06 and L07. Spread, shape, the box plot drawn
   end to end, and the door into probability.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { BoxPlotDraw, CVCompare, RoundedBell } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L06 a — spread measures ---------------- */
export function StmSpreadMeasuresSection() {
  return (
    <section id="spread-measures" className="scroll-mt-24">
      <StmEyebrow id="spread-measures" />
      <StmReadStep n="1" title="Measures of spread" sub="Range, IQR, variance, σ — and the CV that compares" />
      <StmBlocks id="spread-measures" />
      <div className="mt-8 space-y-6">
        <CVCompare id="l06-cv" />
        <CalcFlow
          aria="CalcFlow of the coefficient of variation comparison between two suppliers"
          caption={<>The supplier comparison as a calculation chain — the final frame is the prose's verdict.</>}
          frames={[
            { kind: "formula", label: "Coefficient of variation — symbolic form", math: "CV = S/x̄ (sample) · CV = σ/μ (population)", note: "spread per unit of mean — comparable across units" },
            { kind: "sub", label: "Both suppliers: μ = 5 days", math: "CV_A = 5/5 · CV_B = 1/5", note: "equal means, unequal standard deviations (σ = 5 vs σ = 1)" },
            { kind: "value", label: "Compute both ratios", math: "CV_A = 1.0 · CV_B = 0.2", note: "five times the relative variability in A" },
            { kind: "result", label: "Supplier B is the reliable one", math: "CV = 0.2 — lower CV, more consistency", note: "the contract goes to B" },
          ]}
        />
        <StmCallout kind="why" title="Why n − 1 in the sample variance">
          The sample variance divides by n − 1, not n, to account for sample estimation — the sum of squared deviations Σ(xᵢ − x̄)²/(n−1) corrects the bias that the sample mean's own fitting introduces.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L06 b — shape, outliers, box plot ---------------- */
export function StmShapeBoxplotSection() {
  return (
    <section id="shape-boxplot" className="scroll-mt-24">
      <StmEyebrow id="shape-boxplot" />
      <StmReadStep n="2" title="Shape, outliers & the five-number summary" sub="Skewness, z-scores, Chebyshev, the empirical rule — and the fences" />
      <StmBlocks id="shape-boxplot" />
      <div className="mt-8 space-y-6">
        <RoundedBell id="l06-empirical" />
        <StmDataTable
          aria="Chebyshev theorem table with Z values and minimum percentages"
          caption={<>Chebyshev's floor, exactly as L06 states it — at least 75% at Z = 2, 89% at Z = 3, 94% at Z = 4, for ANY distribution. L12 states the empirical rule as 68.26 / 95.45 / 99.72; both sides render, nothing reconciles.</>}
          head={["Z (standard deviations)", "Chebyshev's minimum", "Applies to"]}
          rows={[
            ["Z = 2", "at least 75%", "any distribution shape"],
            ["Z = 3", "at least 89%", "any distribution shape"],
            ["Z = 4", "at least 94%", "any distribution shape"],
          ]}
        />
        <StmDataTable
          aria="Outlier detection criteria table"
          caption={<>The outlier rule: |Z| &gt; 3 flags a value — and the causes run from mis-keyed data to legitimately rare exceptions.</>}
          head={["Criterion", "Reading", "Typical cause"]}
          rows={[
            ["Z < −3", "unusually small", "incorrectly recorded or included data"],
            ["Z > +3", "unusually large", "rare but genuine exceptional values"],
            ["|Z| ≤ 3", "inside normal bounds", "no flag — the apartment data's −1.2 to 2.27 range stays clean"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L07 a — box plot & association ---------------- */
export function StmBoxplotAssociationSection() {
  return (
    <section id="boxplot-association" className="scroll-mt-24">
      <StmEyebrow id="boxplot-association" />
      <StmReadStep n="1" title="Drawing the box plot" sub="545 to 625, IQR 80, fences at 425 and 745" />
      <StmBlocks id="boxplot-association" />
      <div className="mt-8 space-y-6">
        <BoxPlotDraw id="l07-boxplot" />
        <CalcFlow
          aria="CalcFlow of the box plot fence calculation from IQR to whisker limits"
          caption={<>The fence arithmetic, end to end — the final frames are the limits the prose states.</>}
          frames={[
            { kind: "formula", label: "The fences — symbolic form", math: "Lower = Q1 − 1.5·IQR · Upper = Q3 + 1.5·IQR", note: "IQR = Q3 − Q1, the middle half of the data" },
            { kind: "sub", label: "Substitute Q1 = 545, Q3 = 625", math: "IQR = 625 − 545 = 80 · Lower = 545 − 1.5×80 · Upper = 625 + 1.5×80", note: "the example's own box" },
            { kind: "value", label: "Compute the margins", math: "1.5 × 80 = 120", note: "the same reach on both sides" },
            { kind: "result", label: "Whisker limits 425 and 745", math: "Lower = 425 · Upper = 745", note: "beyond these, points are outliers" },
          ]}
        />
        <StmDataTable
          aria="Golf performance association table with covariance and correlation"
          caption={<>Covariance vs correlation on the golf data: covariance carries units and scale; correlation divides it away and always lands between −1 and +1. Association, never causation.</>}
          head={["Measure", "Value", "Reading"]}
          rows={[
            ["Sample covariance", "−7.09", "the two variables move in opposite directions"],
            ["Sample correlation coefficient", "−0.96", "a strong negative linear relationship"],
            ["Interpretation", "distance ↑ score ↓", "longer drives, lower scores — better golf"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L07 b — probability foundations ---------------- */
export function StmProbabilityFoundationsSection() {
  return (
    <section id="probability-foundations" className="scroll-mt-24">
      <StmEyebrow id="probability-foundations" />
      <StmReadStep n="2" title="Probability foundations" sub="Experiments, sample spaces, and the counting rules" />
      <StmBlocks id="probability-foundations" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow from random experiment to sample space to assigned probabilities"
          caption={<>Probability is a number between 0 and 1 — 0 impossible, 1 certain — assigned by classical, relative-frequency or subjective methods.</>}
          steps={[
            { chip: "EXPERIMENT", label: "Define the process", detail: "A process with well-defined outcomes whose result cannot be predicted with certainty", tone: "violet" },
            { chip: "SAMPLE SPACE", label: "List the outcomes", detail: "Every experimental outcome — the exhaustive, mutually exclusive set", tone: "violet" },
            { chip: "EVENT", label: "Collect outcomes of interest", detail: "An event is a subset of the sample space", tone: "grey" },
            { chip: "ASSIGN", label: "Give each outcome a probability", detail: "Classical · relative frequency · subjective — all obey the 0-1 law", tone: "gold" },
          ]}
        />
        <StmDataTable
          aria="Counting rules table with combinations and permutations formulas"
          caption={<>The two counting rules: combinations when sequence is irrelevant, permutations when it matters.</>}
          head={["Rule", "Formula", "Use when"]}
          rows={[
            ["Combinations", "ᴺCₙ = N! ÷ (n! × (N−n)!)", "sequence of selection is irrelevant"],
            ["Permutations", "ᴺPₙ = N! ÷ (N−n)!", "sequence of selection matters"],
          ]}
        />
      </div>
    </section>
  );
}
