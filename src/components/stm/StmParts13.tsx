"use client";

/* ============================================================
   StmParts13 — L25 and L26. The proportion interval with the
   same-skeleton swap and the planning-value lab, and the
   Metropolitan transmission file.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { SameSkeleton, MetroHistogram } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L25 a — the p̂ interval ---------------- */
export function StmProportionIntervalSection() {
  return (
    <section id="proportion-interval" className="scroll-mt-24">
      <StmEyebrow id="proportion-interval" />
      <StmReadStep n="1" title="The p̂ interval" sub="Same skeleton, different standard error" />
      <StmBlocks id="proportion-interval" />
      <div className="mt-8 space-y-6">
        <SameSkeleton id="l25-skeleton" />
        <CalcFlow
          aria="CalcFlow of the exit poll proportion interval reaching 0.44 plus or minus 0.0435"
          caption={<>The exit poll, end to end — the final frame is the prose's 0.3965 to 0.4835.</>}
          frames={[
            { kind: "formula", label: "The proportion interval — symbolic form", math: "p̂ ± z(α/2) × √[p̂(1−p̂)/n]", note: "the proportion's standard error, sample-based" },
            { kind: "sub", label: "Substitute p̂ = 0.44, n = 500", math: "E = 1.96 × √[0.44 × 0.56/500]", note: "220 of 500 registered voters favour candidate C" },
            { kind: "value", label: "Compute the margin", math: "E = 1.96 × 0.0222 = 0.0435", note: "the z(α/2) at 95% is 1.96" },
            { kind: "result", label: "0.3965 to 0.4835", math: "p̂ ± E = 0.44 ± 0.0435", note: "95% confident the true support lies between 39.65% and 48.35%" },
          ]}
        />
        <StmDataTable
          aria="Conditions for normal approximation of the sampling distribution of p hat"
          caption={<>The entry ticket for the proportion interval — the same normal-approximation logic L19 stated for x̄.</>}
          head={["Condition", "Statement"]}
          rows={[
            ["Expected successes", "np ≥ 5"],
            ["Expected failures", "n(1−p) ≥ 5"],
            ["Consequence", "the sampling distribution of p̂ is approximately normal"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L25 b — planning values ---------------- */
export function StmPlanningValueSection() {
  return (
    <section id="planning-value" className="scroll-mt-24">
      <StmEyebrow id="planning-value" />
      <StmReadStep n="2" title="Planning values" sub="Why p* = 0.5 is the ceiling that never undersamples" />
      <StmBlocks id="planning-value" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the proportion sample size calculation with the 2017 planning value reaching 1817"
          caption={<>The planner with a historical planning value — the final frame is the prose's n = 1,817.</>}
          frames={[
            { kind: "formula", label: "Proportion planner — symbolic form", math: "n = [z(α/2)]² × p* × (1−p*) / E²", note: "p* is the planning value — the guess that sizes the study" },
            { kind: "sub", label: "Substitute the 2017 result as p*", math: "n = (2.576)² × 0.44 × 0.56 / (0.03)²", note: "z(0.005) = 2.576 at 99% confidence, E = 0.03" },
            { kind: "value", label: "Compute", math: "n = 6.6358 × 0.2464 / 0.0009 = 1,817", note: "6.6358 × 0.2464 ≈ 1.6347" },
            { kind: "result", label: "n = 1,817", math: "n = 1,817 (rounded up)", note: "with a 0.5 planning value the same E would cost far more" },
          ]}
        />
        <StmDataTable
          aria="Planning value options table from prior studies to the 0.5 default"
          caption={<>The planning-value ladder: prior studies first, pilot samples second — and the 0.5 default that can never undersample, because p(1−p) peaks there.</>}
          head={["Option", "Planning value p*", "Behaviour"]}
          rows={[
            ["Prior study available", "the 2017 proportion (0.44 here)", "the cheapest honest estimate"],
            ["Pilot sample", "revised after a small draw", "costs a pilot, buys precision"],
            ["Conservative default", "p* = 0.5", "maximises p*(1−p*) — the largest, safest sample size"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L26 a — the descriptives ---------------- */
export function StmMetropolitanDescriptivesSection() {
  return (
    <section id="metropolitan-descriptives" className="scroll-mt-24">
      <StmEyebrow id="metropolitan-descriptives" />
      <StmReadStep n="1" title="Metropolitan Research — the file" sub="50 repair records, profiled" />
      <StmBlocks id="metropolitan-descriptives" />
      <div className="mt-8 space-y-6">
        <MetroHistogram id="l26-hist" />
        <StmDataTable
          aria="Metropolitan Research descriptive statistics table with mean median standard deviation mode and skewness"
          caption={<>The file's five numbers: mean 73,340, median 72,700, σ = 24,849, no mode, skewness slightly positive and close to zero — a wide, nearly symmetric spread with a long right tail.</>}
          head={["Measure", "Value", "Reading"]}
          rows={[
            ["Mean", "73,340 miles", "the average distance before failure"],
            ["Median", "72,700 miles", "25 fail below it, 25 above"],
            ["Standard deviation", "24,849 miles", "substantial variation in failure points"],
            ["Mode", "none", "no two vehicles failed at exactly the same mileage"],
            ["Skewness", "slightly positive, near zero", "relatively symmetrical, not heavily skewed"],
          ]}
        />
        <StmSteps
          aria="Workflow of the Excel descriptive statistics toolpack route"
          caption={<>The Excel route: Data Analysis ToolPak, Descriptive Statistics, labels in first row, the 95% confidence interval requested — the same toolpack the case's histogram and conditional formatting ride on.</>}
          steps={[
            { chip: "ENABLE", label: "File → Options → Add-ins", detail: "activate the Analysis ToolPak if it is missing", tone: "violet" },
            { chip: "RUN", label: "Data → Data Analysis", detail: "choose Descriptive Statistics; select the data column", tone: "violet" },
            { chip: "CONFIGURE", label: "Labels + interval", detail: "'Labels in First Row' if applicable; request the 95% confidence level", tone: "grey" },
            { chip: "VISUALISE", label: "Histogram + formatting", detail: "failure frequency by range; conditional formatting flags duplicate values", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L26 b — the interval & the follow-up ---------------- */
export function StmMetropolitanIntervalSection() {
  return (
    <section id="metropolitan-interval" className="scroll-mt-24">
      <StmEyebrow id="metropolitan-interval" />
      <StmReadStep n="2" title="The transmission interval & the follow-up" sub="66,264 to 80,416 — and why averages comfort" />
      <StmBlocks id="metropolitan-interval" />
      <div className="mt-8 space-y-6">
        <CalcFlow
          aria="CalcFlow of the transmission confidence interval reaching 66264 to 80416 miles"
          caption={<>The interval, exactly as the case states it — the final frames are the prose's 7,076 and [66,264, 80,416].</>}
          frames={[
            { kind: "formula", label: "The interval — symbolic form", math: "x̄ ± z(α/2) · σ/√n", note: "95% confidence on the mean failure mileage" },
            { kind: "sub", label: "Substitute the case values", math: "73,340 ± 7,076", note: "the margin as the case states it (the σ = 24,849, n = 50 inputs imply ≈ 6,888 — both sides render, conflict #7)" },
            { kind: "value", label: "Apply the margin", math: "lower = 73,340 − 7,076 = 66,264 · upper = 73,340 + 7,076 = 80,416", note: "the interval bounds" },
            { kind: "result", label: "66,264 to 80,416 miles", math: "95% CI = [66,264, 80,416]", note: "19 vehicles failed below the lower bound — early failures are the quality signal" },
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the follow-up sample size calculation reaching approximately 100 vehicles"
          caption={<>The follow-up planner — the case's own arithmetic and its approximately-100 recommendation.</>}
          frames={[
            { kind: "formula", label: "The planner — symbolic form", math: "n = (Z_(α/2))² × σ²/E²", note: "E = 5,000 miles at 95% confidence" },
            { kind: "sub", label: "Substitute σ = 24,849, E = 5,000", math: "n = (1.96)² × (24,849)² / (5,000)²", note: "the planned standard deviation from the previous sample" },
            { kind: "value", label: "Compute", math: "n ≈ 95.26", note: "the raw size the case reports" },
            { kind: "result", label: "Increase to approximately 100 vehicles", math: "n ≈ 100", note: "the recommendation: round up and buy margin" },
          ]}
        />
        <StmDataTable
          aria="Follow-up investigation factors table split into supply side and demand side"
          caption={<>The case's next-steps register: supply-side and demand-side factors, and the advanced techniques (regression, machine-learning models) the univariate file cannot reach.</>}
          head={["Side", "Factors to investigate"]}
          rows={[
            ["Supply", "defects in production batches · material quality · manufacturing plants and machinery · supplier quality variations"],
            ["Demand", "driver behaviour · road conditions and terrain · geographic location and climate · maintenance patterns"],
            ["Techniques", "regression analysis · machine-learning models · multi-variable analysis of durability factors"],
          ]}
        />
      </div>
    </section>
  );
}
