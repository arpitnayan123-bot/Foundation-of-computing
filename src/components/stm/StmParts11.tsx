"use client";

/* ============================================================
   StmParts11 — L21 and L22. The Marrian Dairies case and the
   interval-estimation machinery with the confidence dial.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { MarrianCurve, PowerBars, ConfidenceCurve, ConfidenceDial } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L21 a — the Marrian setup ---------------- */
export function StmMarrianSetupSection() {
  return (
    <section id="marrian-setup" className="scroll-mt-24">
      <StmEyebrow id="marrian-setup" />
      <StmReadStep n="1" title="Marrian Dairies — the setup" sub="BlueGurt, StrawGurt, and the question the sample must answer" />
      <StmBlocks id="marrian-setup" />
      <div className="mt-8 space-y-6">
        <MarrianCurve id="l21-marrian" />
        <CalcFlow
          aria="CalcFlow of the Marrian Dairies standard error and z calculation reaching minus 1.414"
          caption={<>The signal-pricing calculation at n = 50 — the final frames match the prose's σ_x̄ and P(X̄ ≤ 75) = 7.86%.</>}
          frames={[
            { kind: "formula", label: "The standard error — symbolic form", math: "σₓ = σ/√n, Z = (x̄ − μ)/σₓ", note: "as L21 writes it — σₓ for the standard error of the mean" },
            { kind: "sub", label: "Substitute σ = 25, n = 50", math: "σₓ = 25/√50 = 3.5355", note: "BlueGurt's score distribution: μ = 80, σ = 25" },
            { kind: "value", label: "Standardise the 75-or-less question", math: "Z = (75 − 80)/3.5355 = −1.414", note: "the dissatisfied end of the scale" },
            { kind: "result", label: "P(X̄ ≤ 75) = 7.86%", math: "P = 0.0786", note: "the market StrawGurt would capture at n = 50" },
          ]}
        />
        <StmCallout kind="story" title="The business problem, verbatim">
          BlueGurt launched blueberry and succeeded; the marketing department proposes StrawGurt, strawberry, to appeal to customers who dislike BlueGurt — and the concern is cannibalization: the new flavor must capture the dissatisfied, not the devoted.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L21 b — sample size as power ---------------- */
export function StmSampleSizePowerSection() {
  return (
    <section id="sample-size-power" className="scroll-mt-24">
      <StmEyebrow id="sample-size-power" />
      <StmReadStep n="2" title="Sample size is discriminative power" sub="7.86% → 0.72% → 0.003% as n climbs" />
      <StmBlocks id="sample-size-power" />
      <div className="mt-8 space-y-6">
        <PowerBars id="l21-power" />
        <StmDataTable
          aria="Sample size switcher table with standard errors and tail probabilities"
          caption={<>The n-switcher: the same 5-point gap, three sample sizes — the standard error shrinks at √n and the tail collapses with it.</>}
          head={["Sample size n", "σₓ = 25/√n", "P(X̄ ≤ 75)", "Reading"]}
          rows={[
            ["50", "3.5355", "7.86%", "the gap is barely visible"],
            ["150", "2.0412", "0.72%", "the dissatisfied end isolates"],
            ["400", "1.2500", "0.003%", "the signal is unmistakable"],
          ]}
        />
        <StmCallout kind="insight" title="What the dial is really buying">
          Bigger n does not change the population — it changes how precisely the sample mean lands near μ. Discriminative power is the sampling distribution's sharpening, and it costs exactly the square root.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L22 a — interval estimation σ known ---------------- */
export function StmIntervalKnownSection() {
  return (
    <section id="interval-known" className="scroll-mt-24">
      <StmEyebrow id="interval-known" />
      <StmReadStep n="1" title="Interval estimation (σ known)" sub="From point estimates to ranges — x̄ ± z(α/2)·σ/√n" />
      <StmBlocks id="interval-known" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the 95 percent income interval from standard error to margin of error to the interval"
          caption={<>The income interval, computed exactly as the worked example runs it — the final frame is the prose's $39,630 to $42,570.</>}
          frames={[
            { kind: "formula", label: "The interval — symbolic form", math: "x̄ ± z(α/2) · σ/√n", note: "σ known — the z road" },
            { kind: "sub", label: "Substitute the worked example", math: "σ(x̄) = 4,500/√36 = 750 · margin = 1.960 × 750", note: "n = 36, x̄ = $41,100, σ = $4,500 as the example states" },
            { kind: "value", label: "The margin of error", math: "E = 1,470", note: "the probability fixed first, the range computed second" },
            { kind: "result", label: "$39,630 to $42,570", math: "41,100 ± 1,470", note: "95% confident the true mean income lies here" },
          ]}
        />
        <StmCallout kind="warn" title="The narrative and the arithmetic disagree — both render">
          The lecture opens with a 1,000-supermarket chain sampling 50 stores; the worked interval's own arithmetic runs on n = 36 (σ(x̄) = 750, and margins 1,234 / 1,470 / 1,932 all check exactly at n = 36). The source carries both; nothing is reconciled here.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L22 b — the confidence dial ---------------- */
export function StmConfidenceDialSection() {
  return (
    <section id="confidence-dial" className="scroll-mt-24">
      <StmEyebrow id="confidence-dial" />
      <StmReadStep n="2" title="The confidence dial" sub="90, 95, 99 — and what the sample size can guarantee" />
      <StmBlocks id="confidence-dial" />
      <div className="mt-8 space-y-6">
        <ConfidenceDial id="l22-dial" />
        <ConfidenceCurve id="l22-curve" />
        <StmDataTable
          aria="Adequacy of sample size table by population shape"
          caption={<>The adequacy ladder from the transcript: 30-or-more generally suffices via the CLT, but skewness moves the goalposts — and any scenario is guaranteed at 50+.</>}
          head={["Population", "Sample size guidance"]}
          rows={[
            ["Approximately normal", "sample size ≥ 15 acceptable"],
            ["Symmetric but non-normal", "sample size ≥ 15 acceptable"],
            ["Highly skewed", "larger samples (50+) needed"],
            ["Any scenario", "sample size ≥ 50 ensures applicability"],
          ]}
        />
      </div>
    </section>
  );
}
