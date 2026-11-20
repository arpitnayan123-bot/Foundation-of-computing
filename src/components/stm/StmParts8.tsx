"use client";

/* ============================================================
   StmParts8 — L14 and L15. The Z laboratory forward and
   reverse, and the Weather Teddy order.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { StandardTail, ReorderCurve, TeddySigmaCurve, ServiceLevelCurve } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L14 a — forward probability ---------------- */
export function StmZForwardSection() {
  return (
    <section id="z-forward" className="scroll-mt-24">
      <StmEyebrow id="z-forward" />
      <StmReadStep n="1" title="Forward probability" sub="Standardise, read the table, price the tail" />
      <StmBlocks id="z-forward" />
      <div className="mt-8 space-y-6">
        <StandardTail id="l14-forward" />
        <StmDataTable
          aria="Three normal distribution requirements table"
          caption={<>The three requirements that unlock every normal problem — and the reference values the Z table carries.</>}
          head={["Requirement", "What it means"]}
          rows={[
            ["The distribution is normal", "bell-shaped and symmetric — the family is defined by μ and σ alone"],
            ["Any value can be standardised", "Z = (X − μ)/σ converts it to the standard normal"],
            ["The table gives cumulative area", "P(Z ≤ z) — forward problems read the tail as 1 minus the table"],
          ]}
        />
        <StmCallout kind="insight" title="The intuitive reading of a Z">
          A Z of 2 says: this value sits two standard deviations above the mean — the same position regardless of whether the data is gallons, dollars or scores. That is the whole point of the standardisation.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L14 b — reverse probability ---------------- */
export function StmZReverseSection() {
  return (
    <section id="z-reverse" className="scroll-mt-24">
      <StmEyebrow id="z-reverse" />
      <StmReadStep n="2" title="Reverse probability" sub="Fix the probability first — then find the value" />
      <StmBlocks id="z-reverse" />
      <div className="mt-8 space-y-6">
        <ReorderCurve id="l14-reverse" />
        <CalcFlow
          aria="CalcFlow of the reverse reorder point calculation reaching 25 gallons"
          caption={<>The reverse pipeline on the 5% stockout promise — the final frame is the prose's ≈ 25 gallons.</>}
          frames={[
            { kind: "formula", label: "Reverse lookup — symbolic form", math: "X = μ + Z·σ, with Z cutting off the promised tail", note: "the 5% tail fixes Z ≈ 1.645" },
            { kind: "sub", label: "Substitute μ = 15, σ = 6", math: "X = 15 + 1.645 × 6", note: "the same μ and σ PepZone runs" },
            { kind: "value", label: "Compute the cut", math: "X = 15 + 9.87 = 24.87", note: "the value that leaves exactly 5% above" },
            { kind: "result", label: "Stock 25 gallons", math: "X ≈ 25 gallons", note: "stockout falls 20% → 5% — 15% more demand served" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L15 a — Weather Teddy σ recovery ---------------- */
export function StmTeddySigmaSection() {
  return (
    <section id="teddy-sigma" className="scroll-mt-24">
      <StmEyebrow id="teddy-sigma" />
      <StmReadStep n="1" title="Weather Teddy — recovering σ" sub="The forecast's 95% band hides the standard deviation" />
      <StmBlocks id="teddy-sigma" />
      <div className="mt-8 space-y-6">
        <TeddySigmaCurve id="l15-teddy" />
        <CalcFlow
          aria="CalcFlow of the Weather Teddy standard deviation recovery to 5102 units"
          caption={<>The recovery run: the forecast band's width prices σ — the final frame is the prose's 5,102 units.</>}
          frames={[
            { kind: "formula", label: "The band as a Z statement", math: "μ ± 1.96σ spans the middle 95%", note: "the forecast band 10,000–30,000 is read as the 95% band" },
            { kind: "sub", label: "Substitute the band's half-width", math: "1.96 = (30,000 − 20,000)/σ", note: "μ = 20,000 units — the expected demand" },
            { kind: "value", label: "Solve for σ", math: "σ = 10,000/1.96", note: "the band's width divided by its Z reach" },
            { kind: "result", label: "σ = 5,102 units", math: "σ = 5,102", note: "the demand spread, recovered from the forecast" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L15 b — the service-level dial ---------------- */
export function StmServiceLevelSection() {
  return (
    <section id="service-level" className="scroll-mt-24">
      <StmEyebrow id="service-level" />
      <StmReadStep n="2" title="The service-level dial" sub="Stockout risk priced at every order quantity" />
      <StmBlocks id="service-level" />
      <div className="mt-8 space-y-6">
        <ServiceLevelCurve id="l15-service" />
        <CalcFlow
          aria="CalcFlow of the Weather Teddy order quantity reaching 22653 units"
          caption={<>The 70% service level lands the order quantity — the final frame is the prose's Q = 22,653.</>}
          frames={[
            { kind: "formula", label: "The service-level cut — symbolic form", math: "Q = μ + Z·σ, with Z from the service level", note: "70% service → Z = 0.52" },
            { kind: "sub", label: "Substitute μ = 20,000, σ = 5,102", math: "Q = 20,000 + 0.52 × 5,102", note: "the dial set at 70%" },
            { kind: "value", label: "Compute the reach", math: "0.52 × 5,102 = 2,653", note: "the units above the mean that 70% buys" },
            { kind: "result", label: "Q = 22,653 units", math: "Q = 22,653", note: "profit at 22,653: −$59,083 / $130,000 / $181,000 across demand 10k/20k/30k" },
          ]}
        />
        <StmSteps
          aria="Workflow of the three demand scenarios profit analysis at different order quantities"
          caption={<>The scenario ladder: every order quantity is priced against worst, likely and best demand — the dial turns on stockout risk, not on hope.</>}
          steps={[
            { chip: "SCENARIO 1", label: "Order 15,000", detail: "~16.35% stockout · profit $25,000 / $120,000 / $120,000 (capped) at demand 10k/20k/30k", tone: "grey" },
            { chip: "SCENARIO 2", label: "Order 18,000", detail: "lower stockout · −$8,000 / $168,000 / $168,000 — downside appears", tone: "violet" },
            { chip: "SCENARIO 3", label: "Order 24,000", detail: "even lower stockout · −$74,000 / $116,000 / $192,000 — the risk steepens", tone: "violet" },
            { chip: "SCENARIO 4", label: "Order 28,000", detail: "minimal stockout · −$100,000 / $72,000 / $200,000 — upside buys downside", tone: "grey" },
            { chip: "AT 22,653", label: "The 70% dial's answer", detail: "−$59,083 / $130,000 / $181,000 — priced by NORM.S.INV(0.70)", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}
