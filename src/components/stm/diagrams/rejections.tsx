"use client";

/* ============================================================
   STM rejection regions — six-plus figures where a test
   statistic sits on the axis so a reader can see AT A GLANCE
   whether it falls inside the shaded rejection region.

   The colour law: the rejection region is GOLD (the decision),
   the population curve is VIOLET, the sample statistic is GREY
   when no decision fires and GOLD when the decision fires.
   Red never marks a rejected hypothesis.
   ============================================================ */

import { StmCurve, type CurveSpec } from "./kit";

/* L30 — Metro EMS: z = 2.47 lands inside the rejection region. */
export function RejectionMetroEMS({ id }: { id: string }) {
  return (
    <StmCurve
      aria="One-tailed rejection region on the right at 1.645 sigma with the test statistic 2.47 marked inside the gold rejection region"
      caption={
        <>
          Metro EMS, one-tail right at α = 0.05: the gold region beyond Z = 1.645 is the rejection region, and the statistic Z = 2.47 (gold point) falls INSIDE it — reject H₀: μ ≤ 12. The p-value road agrees: 0.0068 &lt; 0.05.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — the statistic sits on the axis",
          regions: [{ from: 1.645, to: 3.4, prob: "0.05", label: "rejection region", tone: "gold" }],
          points: [
            { at: 1.645, label: "Z(α) = 1.645", tone: "gold" },
            { at: 2.47, label: "Z = 2.47", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L30 — a statistic that stays inside acceptance: fail to reject. */
export function RejectionMetroSample1({ id }: { id: string }) {
  return (
    <StmCurve
      aria="One-tailed rejection region on the right with the test statistic 1.04 marked outside the gold region"
      caption={
        <>
          The same test, a statistic that does not reach the region: z = 1.04 (grey point) sits in the acceptance zone — fail to reject H₀, and the language is exactly that: never "accept".
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — the statistic sits on the axis",
          regions: [{ from: 1.645, to: 3.4, prob: "0.05", label: "rejection region", tone: "gold" }],
          points: [
            { at: 1.645, label: "Z(α) = 1.645", tone: "gold" },
            { at: 1.04, label: "Z = 1.04", tone: "grey" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L32 — Quality Associates Sample 3: z = −2.87 in the LEFT tail. */
export function RejectionSample3({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Left-tail rejection region at minus 2.57 sigma with the Quality Associates sample three statistic at minus 2.87 inside the gold region"
      caption={
        <>
          Quality Associates, Sample 3 (x̄ = 11.89): Z = −2.87 (gold point) falls inside the lower rejection region beyond −2.57 — p-value 0.003 &lt; 0.01, corrective action required.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — two-tailed limits at α = 0.01",
          regions: [
            { from: -3.4, to: -2.57, prob: "0.005", label: "rejection", tone: "gold" },
            { from: 2.57, to: 3.4, prob: "0.005", label: "rejection", tone: "gold" },
          ],
          points: [{ at: -2.87, label: "Z = −2.87", tone: "gold" }],
        } as CurveSpec
      }
    />
  );
}

/* L32 — Sample 2 stays inside: fail to reject. */
export function RejectionSample2({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Two-tailed control limits with the Quality Associates sample two statistic at 0.78 marked safely inside"
      caption={
        <>
          Sample 2 (x̄ = 12.03): Z = 0.78 (grey point) sits well inside the satisfactory band — p-value 0.77, the process keeps running.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — two-tailed limits at α = 0.01",
          regions: [
            { from: -3.4, to: -2.57, prob: "0.005", label: "rejection", tone: "gold" },
            { from: 2.57, to: 3.4, prob: "0.005", label: "rejection", tone: "gold" },
          ],
          points: [{ at: 0.78, label: "Z = 0.78", tone: "grey" }],
        } as CurveSpec
      }
    />
  );
}

/* L31 — toothpaste two-tail: z = 2.74 beyond 2.17. */
export function RejectionToothpaste({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Two-tailed rejection regions at plus and minus 2.17 sigma with the toothpaste statistic 2.74 marked in the right gold region"
      caption={
        <>
          The toothpaste-filling two-tail test at α = 0.03: α/2 = 0.015 a side, critical Z = 2.17, and Z = 2.74 (gold point) lands inside the right gold region — p-value 0.0062 &lt; 0.03. Reject H₀.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — α/2 in each tail",
          regions: [
            { from: -3.4, to: -2.17, prob: "0.015", label: "rejection", tone: "gold" },
            { from: 2.17, to: 3.4, prob: "0.015", label: "rejection", tone: "gold" },
          ],
          points: [
            { at: 2.17, label: "Z(α/2) = 2.17", tone: "gold" },
            { at: 2.74, label: "Z = 2.74", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L31 — highway speeds, Student's t one-tail right: t = 2.286 > 1.669. */
export function RejectionSpeedT({ id }: { id: string }) {
  return (
    <StmCurve
      aria="One-tailed t rejection region with the highway speed statistic 2.286 marked beyond the critical value 1.669"
      caption={
        <>
          The highway-speed test on Student's t (df = 63): critical t(0.05) = 1.669, statistic t = 2.286 (gold point) inside the gold rejection region — the location is suitable for the radar trap.
        </>
      }
      spec={
        {
          id,
          axisLabel: "t, in standard-error units (df = 63)",
          regions: [{ from: 1.669, to: 3.4, prob: "0.05", label: "rejection region", tone: "gold" }],
          points: [
            { at: 1.669, label: "t(0.05) = 1.669", tone: "gold" },
            { at: 2.286, label: "t = 2.286", tone: "gold" },
          ],
        } as CurveSpec
      }
    />
  );
}

/* L31 — the drunk-driving proportion test: two tails, statistic
   Z = 1.278 stays between them — fail to reject. */
export function RejectionProportion({ id }: { id: string }) {
  return (
    <StmCurve
      aria="Two-tailed proportion test rejection regions at plus and minus 1.96 with the drunk driving statistic 1.278 marked safely between them"
      caption={
        <>
          The drunk-driving proportion test at α = 0.05, two-tail: H₀: p = 0.5 against Hₐ: p ≠ 0.5 — p̂ = 67/120 = 0.558, σ = 0.045 (the transcript writes σ with the p̂ subscript), and Z = 1.278 (grey point) lands BETWEEN ±1.96, inside the acceptance band. Fail to reject: the National Safety Council's 50% claim stands against this sample.
        </>
      }
      spec={
        {
          id,
          axisLabel: "Z, in sigma units — α/2 in each tail",
          regions: [
            { from: -3.4, to: -1.96, prob: "0.025", label: "rejection", tone: "gold" },
            { from: 1.96, to: 3.4, prob: "0.025", label: "rejection", tone: "gold" },
          ],
          points: [{ at: 1.278, label: "Z = 1.278", tone: "grey" }],
        } as CurveSpec
      }
    />
  );
}
