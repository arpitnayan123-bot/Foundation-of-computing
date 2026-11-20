"use client";

/* ============================================================
   STM curves — the named distribution figures of shelf 05.
   Every curve is drawn TO SCALE IN SIGMA UNITS through CurveSvg:
   the x-axis is measured in standard deviations, the mean is
   marked, and every shaded region carries its probability label.
   The colour law holds throughout: violet = the population
   curve, gold = the decision band, grey = the sample mark.
   ============================================================ */

import { StmCurve, type CurveSpec } from "./kit";

/* L12 — the empirical rule with the lecture's own precise values.
   (L06 states the same rule rounded to 68 / 95 / 99.7 — both
   render, conflict #4, nothing reconciled.) */
export function PreciseBell({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Normal distribution drawn to scale in sigma units with the empirical rule bands of 68.26, 95.45 and 99.72 percent"
      caption={
        <>
          The empirical rule as L12 states it — 68.26% within ±1σ, 95.45% within ±2σ, 99.72% within ±3σ — drawn to scale in sigma units with the mean marked.
        </>
      }
      spec={
        {
          id,
          axisLabel: "x, measured from the mean in sigma units",
          regions: [
            { from: -3, to: 3, prob: "99.72%", label: "within ±3σ", tone: "violet" },
            { from: -2, to: 2, prob: "95.45%", label: "within ±2σ", tone: "violet" },
            { from: -1, to: 1, prob: "68.26%", label: "within ±1σ", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L06 — the empirical rule as L06 states it, rounded. */
export function RoundedBell({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Normal distribution drawn to scale in sigma units with the rounded empirical rule bands of 68, 95 and 99.7 percent"
      caption={
        <>
          The empirical rule as L06 states it — approximately 68% within ±1σ, 95% within ±2σ, almost all (99.7%) within ±3σ. The same rule L12 writes as 68.26 / 95.45 / 99.72; both sides render, nothing reconciles.
        </>
      }
      spec={
        {
          id,
          axisLabel: "x, measured from the mean in sigma units",
          regions: [
            { from: -3, to: 3, prob: "99.7%", label: "almost all, within ±3σ", tone: "violet" },
            { from: -2, to: 2, prob: "95%", label: "within ±2σ", tone: "violet" },
            { from: -1, to: 1, prob: "68%", label: "within ±1σ", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L12 — uniform distribution, flat top (Slater's Buffet). */
export function UniformCurve({ id, a = "a", b = "b" }: { id: string; a?: string; b?: string }) {
  return (
    <StmCurve
      aria="Uniform probability density function drawn as a flat rectangle between a and b with area equal to probability"
      caption={
        <>
          The uniform distribution over [{a}, {b}]: probability is area, and the rectangle's height 1/(b − a) makes every equal-width strip carry equal probability.
        </>
      }
      spec={
        {
          id,
          flatTop: true,
          meanLabel: "(a+b)/2",
          axisLabel: "x between a and b — height 1/(b − a)",
        } as CurveSpec
      }
    />
  );
}

/* L14 — forward probability: P(Z > 2) = 0.0228. */
export function StandardTail({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Standard normal curve with the right tail beyond 2 sigma shaded at 2.28 percent"
      caption={
        <>
          Forward mode: standardise x = 250 with μ = 200, σ = 25 to Z = 2, then read the table — P(Z ≤ 2) = 0.9772, so the tail P(Z &gt; 2) = 0.0228. The tail is the decision band.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units",
          regions: [{ from: 2, to: 3.4, prob: "0.0228", label: "P(Z > 2)", tone: "gold" }],
          points: [{ at: 2, label: "Z = 2", tone: "gold" }],
        } as CurveSpec
      }
    />
  );
}

/* L14 — reverse probability: the 5% stockout promise at Z = 1.645. */
export function ReorderCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Normal curve with the right tail beyond 1.645 sigma shaded at 5 percent for the reorder point decision"
      caption={
        <>
          Reverse mode: fix the probability first (5% stockout), then find the value — μ = 15, σ = 6, X = 15 + 1.645 × 6 = 24.87 ≈ 25 gallons. The gold tail is the promise; the point is the reorder decision.
        </>
      }
      spec={
        {
          id,
          axisLabel: "demand in gallons, standardised to sigma units",
          regions: [{ from: 1.645, to: 3.4, prob: "5%", label: "stockout", tone: "gold" }],
          points: [{ at: 1.645, label: "Z = 1.645", tone: "gold" }],
        } as CurveSpec
      }
    />
  );
}

/* L15 — Weather Teddy: the 95% demand band that recovers σ = 5,102. */
export function TeddySigmaCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Normal demand curve with the central 95 percent band between minus 1.96 and plus 1.96 sigma shaded gold"
      caption={
        <>
          Weather Teddy's demand: μ = 20,000 units, and the forecast band 10,000–30,000 is read as ±1.96σ — so σ = 10,000 / 1.96 = 5,102 units. The gold band is the 95% the forecast promised.
        </>
      }
      spec={
        {
          id,
          axisLabel: "demand in units, standardised to sigma units",
          regions: [{ from: -1.96, to: 1.96, prob: "95%", label: "10,000 – 30,000 units", tone: "gold" }],
          points: [
            { at: -1.96, label: "−1.96", tone: "gold" },
            { at: 1.96, label: "+1.96", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L15 — the 70% service level: right tail 30%. */
export function ServiceLevelCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Normal curve with the left 70 percent service level shaded and the right 30 percent stockout tail marked at Q"
      caption={
        <>
          The service-level dial at 70%: the gold left band carries 0.70, the grey right tail carries 0.30, and the cut sits at Z = 0.52 — Q = 0.52 × 5,102 + 20,000 = 22,653 units.
        </>
      }
      spec={
        {
          id,
          axisLabel: "demand, standardised to sigma units",
          regions: [
            { from: -3.4, to: 0.52, prob: "70%", label: "service level", tone: "gold" },
            { from: 0.52, to: 3.4, prob: "30%", label: "stockout risk", tone: "grey" },
          ],
          points: [{ at: 0.52, label: "Z = 0.52", tone: "gold" }],
        } as CurveSpec
      }
    />
  );
}

/* L19 — the sampling distribution of x̄ (CLT). */
export function SamplingDistCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Sampling distribution of the sample mean drawn to scale with standard error ticks"
      caption={
        <>
          The distribution of x̄ across all possible samples: centred on μ (unbiased), narrower than the population by the factor √n — its own ticks are measured in σ_x̄ = σ/√n units.
        </>
      }
      spec={
        {
          id,
          axisLabel: "x̄, in σ_x̄ units from μ",
          regions: [{ from: -1, to: 1, prob: "±1σ_x̄", label: "one standard error", tone: "violet" }],
        } as CurveSpec
      }
    />
  );
}

/* L21 — Marrian Dairies: P(X̄ ≤ 75) at n = 50. */
export function MarrianCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Sampling distribution of the mean for Marrian Dairies with the left tail below 75 shaded at 7.86 percent"
      caption={
        <>
          Marrian Dairies at n = 50: σ_x̄ = 25/√50 = 3.5355, Z = (75 − 80)/3.5355 = −1.414, P(X̄ ≤ 75) = 7.86%. The gold left tail is the dissatisfied market StrawGurt would capture.
        </>
      }
      spec={
        {
          id,
          axisLabel: "sample mean rating, in σ_x̄ units",
          regions: [{ from: -3.4, to: -1.414, prob: "7.86%", label: "P(X̄ ≤ 75)", tone: "gold" }],
          points: [{ at: -1.414, label: "Z = −1.414", tone: "gold" }],
        } as CurveSpec
      }
    />
  );
}

/* L22 — the confidence interval as area. */
export function ConfidenceCurve({ id, z = "1.96" }: { id: string; z?: string }) {
  return (
    <StmCurve
      aria="Sampling distribution with the central confidence band shaded gold and two rejection tails of 2.5 percent each"
      caption={
        <>
          The confidence dial at 95%: x̄ ± {z}(σ/√n) — the gold middle band is the interval, the two grey tails carry α/2 each. Higher confidence stretches the band; the tails never vanish.
        </>
      }
      spec={
        {
          id,
          axisLabel: "x̄, in σ_x̄ units",
          regions: [
            { from: -3.4, to: -1.96, prob: "2.5%", label: "α/2", tone: "grey" },
            { from: -1.96, to: 1.96, prob: "95%", label: "confidence band", tone: "gold" },
            { from: 1.96, to: 3.4, prob: "2.5%", label: "α/2", tone: "grey" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L24 — Student's t against the normal: heavier tails. */
export function TDistributionCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Student t distribution overlaid on the standard normal showing heavier tails"
      caption={
        <>
          Student's t against the normal (violet): same bell, heavier tails — the honesty premium for estimating σ with S. df = n − 1; beyond about 100 df the two curves become indistinguishable.
        </>
      }
      spec={
        {
          id,
          axisLabel: "t, in standard error units",
          regions: [{ from: 2, to: 3.4, prob: "heavier", label: "t tail > z tail", tone: "grey" }],
          strokeTone: "violet",
        } as CurveSpec
      }
    />
  );
}

/* L32 — SPC control chart sketch is in misc; here the distribution
   view of the control limits (Quality Associates). */
export function ControlLimitCurve({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Sampling distribution around the target mean 12 with control limits at 11.90 and 12.10 shaded"
      caption={
        <>
          Quality Associates' control limits at α = 0.01: 12 ± 2.57 × (0.21/√30) = 12 ± 0.0987 — the gold band 11.90–12.10 is the satisfactory zone; a mean outside it stops the line.
        </>
      }
      spec={
        {
          id,
          axisLabel: "sample mean weight, in σ_x̄ units",
          regions: [{ from: -2.57, to: 2.57, prob: "satisfactory", label: "11.90 – 12.10", tone: "gold" }],
          points: [
            { at: -2.57, label: "LCL", tone: "gold" },
            { at: 2.57, label: "UCL", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}
