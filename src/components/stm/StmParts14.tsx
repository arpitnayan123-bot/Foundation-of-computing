"use client";

/* ============================================================
   StmParts14 — L27 and L29. The hypothesis-testing framework
   and the Type I/Type II errors in depth. (L28 between them is
   the reserved lecture — it renders only the removal card and
   carries no section here.)
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { ErrorMatrix, TradeoffCurve } from "./diagrams";

/* ---------------- L27 a — the framework ---------------- */
export function StmHypothesisFrameworkSection() {
  return (
    <section id="hypothesis-framework" className="scroll-mt-24">
      <StmEyebrow id="hypothesis-framework" />
      <StmReadStep n="1" title="The framework" sub="H₀ holds the equality, Hₐ carries the research hope" />
      <StmBlocks id="hypothesis-framework" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow of the two hypothesis formulation approaches from research objective to challenging an assumption"
          caption={<>Two ways to reach the same pair: start from the research objective, or challenge an assumption — the equality always lands on H₀.</>}
          steps={[
            { chip: "APPROACH 1", label: "Research objective focus", detail: "the claim you hope to demonstrate becomes Hₐ; its complement holds H₀", tone: "violet" },
            { chip: "APPROACH 2", label: "Challenge an assumption", detail: "the standing assumption becomes H₀; the challenge becomes Hₐ", tone: "violet" },
            { chip: "THE RULE", label: "Equality on H₀, always", detail: "the null carries =, ≤ or ≥ — never a bare inequality hope", tone: "gold" },
          ]}
        />
        <StmDataTable
          aria="Three hypothesis formulation examples table from the emergency response to the learning platform"
          caption={<>The transcript's three formulations, verbatim: emergency response, university result processing, and the online learning platform.</>}
          head={["Example", "H₀", "Hₐ"]}
          rows={[
            ["Emergency response time", "μ ≥ 12 minutes (service is meeting the goal)", "μ < 12 minutes (service is not meeting the goal)"],
            ["University result processing", "μ ≤ 15 days (meeting target)", "μ > 15 days (exceeding target)"],
            ["Online learning platform", "μ ≥ 70", "μ < 70"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L27 b — tail forms & the errors ---------------- */
export function StmTailsErrorsSection() {
  return (
    <section id="tails-errors" className="scroll-mt-24">
      <StmEyebrow id="tails-errors" />
      <StmReadStep n="2" title="Tail forms & the errors" sub="Three tails, the courtroom, and the language rule" />
      <StmBlocks id="tails-errors" />
      <div className="mt-8 space-y-6">
        <ErrorMatrix id="l27-matrix" />
        <StmDataTable
          aria="Three tail forms table with hypothesis shapes"
          caption={<>When testing μ, the hypotheses take one of three forms — lower tail, upper tail, two tail — and the tail decides where the rejection region lives.</>}
          head={["Tail form", "H₀", "Hₐ"]}
          rows={[
            ["Lower tail", "μ ≥ μ₀", "μ < μ₀"],
            ["Upper tail", "μ ≤ μ₀", "μ > μ₀"],
            ["Two tail", "μ = μ₀", "μ ≠ μ₀"],
          ]}
        />
        <StmCallout kind="why" title="The language rule">
          The verdict is 'reject H₀' or 'fail to reject H₀' — never 'accept'. Failing to reject is not innocence; it is insufficient evidence, and the distinction carries the whole logic of the trial.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L29 a — the two errors in depth ---------------- */
export function StmErrorControlSection() {
  return (
    <section id="error-control" className="scroll-mt-24">
      <StmEyebrow id="error-control" />
      <StmReadStep n="1" title="The two errors, in depth" sub="Who decides which mistake is worse" />
      <StmBlocks id="error-control" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Type I and Type II error definitions table with consequences"
          caption={<>The two failures, named and priced — L29's own framing: a false claim of discovery versus a missed discovery.</>}
          head={["Error", "What it is", "What it represents"]}
          rows={[
            ["Type I (false positive)", "rejecting H₀ when it is actually true", "a false claim of discovery"],
            ["Type II (false negative)", "failing to reject H₀ when it is actually false", "a missed discovery"],
          ]}
        />
        <StmSteps
          aria="Workflow of the error analogy chain from fire alarm through court trial to drug approval"
          caption={<>The analogy chain: fire alarm, courtroom, drug approval — the same two errors wearing different uniforms.</>}
          steps={[
            { chip: "FIRE ALARM", label: "H₀ = no fire", detail: "alarm sounds with no fire = Type I; no alarm with a real fire = Type II (more dangerous)", tone: "violet" },
            { chip: "COURT TRIAL", label: "H₀ = innocent", detail: "a guilty defendant acquitted = Type II; an innocent convicted = Type I", tone: "violet" },
            { chip: "DRUG APPROVAL", label: "the FDA's choice", detail: "use a very low α (0.01) to minimise approving dangerous drugs — Type I is the costlier error", tone: "gold" },
            { chip: "THE RULE", label: "control the costlier error", detail: "which α you pick is a business decision about which mistake hurts more", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L29 b — choosing alpha ---------------- */
export function StmAlphaDecisionSection() {
  return (
    <section id="alpha-decision" className="scroll-mt-24">
      <StmEyebrow id="alpha-decision" />
      <StmReadStep n="2" title="Choosing α" sub="The trade-off, and the fuel-injection example" />
      <StmBlocks id="alpha-decision" />
      <div className="mt-8 space-y-6">
        <TradeoffCurve id="l29-tradeoff" />
        <StmDataTable
          aria="Alpha selection factors table with examples"
          caption={<>The selection framework: common choices are 0.05 (95% confidence) and 0.01 (99% confidence) — and the cost structure picks between them.</>}
          head={["Context", "α choice", "Why"]}
          rows={[
            ["Type I is more costly (FDA drug approval)", "smaller α — 0.01", "very strict: never approve a dangerous drug"],
            ["Type I is less costly (marketing claims)", "larger α — 0.05", "more lenient: a false claim costs less than a missed one"],
            ["Common choices", "0.05 · 0.01", "95% and 99% confidence — chosen BEFORE the experiment runs"],
          ]}
        />
        <StmCallout kind="why" title="The inverse relationship, stated">
          The two errors trade off inversely: tightening α starves the rejection region and feeds β; loosening α does the opposite. Both at zero does not exist — the experiment's design, not wishful thinking, sets where the dial lands.
        </StmCallout>
      </div>
    </section>
  );
}
