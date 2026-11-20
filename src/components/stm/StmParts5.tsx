"use client";

/* ============================================================
   StmParts5 — L08 and L09. The Pelican Stores case file, the
   selection criteria, and the probability laws with Bayes.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { VennOps, BayesTree } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L08 a — the Pelican case ---------------- */
export function StmPelicanCaseSection() {
  return (
    <section id="pelican-case" className="scroll-mt-24">
      <StmEyebrow id="pelican-case" />
      <StmReadStep n="1" title="Case file — Pelican Stores" sub="100 promotional transactions, profiled" />
      <StmBlocks id="pelican-case" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Pelican Stores case setup table with organization objective sample and assumption"
          caption={<>The case setup exactly as the transcript states it — promotional-coupon sales are assumed incremental revenue not otherwise made.</>}
          head={["Field", "Value"]}
          rows={[
            ["Organization", "Pelican Stores — a division of a national clothing chain"],
            ["Objective", "Evaluate the effectiveness of the promotional campaign using discount coupons"],
            ["Sample size", "100 customer transactions during the promotion period"],
            ["Assumption", "Promotional-coupon sales represent incremental revenue not otherwise made"],
          ]}
        />
        <StmSteps
          aria="Workflow of the Excel frequency analysis with COUNTIF and pivot tables"
          caption={<>The Excel lab: COUNTIF counts categories, pivot tables cross-tabulate — the same two moves the descriptive chapter made, on real receipts.</>}
          steps={[
            { chip: "COUNTIF", label: "Count a category", detail: "=COUNTIF(range, criteria) — the frequency cell, computed", tone: "violet" },
            { chip: "PIVOT", label: "Cross-tabulate", detail: "Rows × columns drag-and-drop — the cross-tabulation, live", tone: "violet" },
            { chip: "CUMULATE", label: "Running totals", detail: "Progressive addition of frequencies from previous categories", tone: "grey" },
            { chip: "READ", label: "Profile the customer", detail: "The three readings of one table — who came, what they bought, what it added", tone: "gold" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L08 b — choosing the summary ---------------- */
export function StmTendencySelectionSection() {
  return (
    <section id="tendency-selection" className="scroll-mt-24">
      <StmEyebrow id="tendency-selection" />
      <StmReadStep n="2" title="Choosing the right summary" sub="Mean, median, mode, weighted — the selection criteria" />
      <StmBlocks id="tendency-selection" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Selection criteria table for mean median mode and weighted mean"
          caption={<>The selection rules close chapters 1-2: the right summary is a decision about the data's shape and meaning, not a habit.</>}
          head={["Measure", "Use when", "Watch out for"]}
          rows={[
            ["Mean", "symmetric data without extremes", "extreme values drag it"],
            ["Median", "skewed data or outliers present", "ignores the magnitude of tails"],
            ["Mode", "categorical or discrete data", "may not exist or may not be unique"],
            ["Weighted mean", "observations differ in importance", "weights must sum meaningfully"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L09 a — the probability laws ---------------- */
export function StmProbabilityLawsSection() {
  return (
    <section id="probability-laws" className="scroll-mt-24">
      <StmEyebrow id="probability-laws" />
      <StmReadStep n="1" title="The probability laws" sub="Complement, union, intersection — and the addition law" />
      <StmBlocks id="probability-laws" />
      <div className="mt-8 space-y-6">
        <VennOps id="l09-venn" />
        <StmDataTable
          aria="Addition law table for mutually exclusive and general events"
          caption={<>The addition law in both regimes — with mutually exclusive events the overlap vanishes and the law shortens.</>}
          head={["Case", "Law", "Why"]}
          rows={[
            ["Mutually exclusive", "P(A ∪ B) = P(A) + P(B)", "P(A ∩ B) = 0 — they cannot co-occur"],
            ["General events", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", "the intersection must not count twice"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L09 b — conditionals & Bayes ---------------- */
export function StmConditionalBayesSection() {
  return (
    <section id="conditional-bayes" className="scroll-mt-24">
      <StmEyebrow id="conditional-bayes" />
      <StmReadStep n="2" title="Conditionals & Bayes' theorem" sub="Prior → information → posterior" />
      <StmBlocks id="conditional-bayes" />
      <div className="mt-8 space-y-6">
        <BayesTree id="l09-bayes" />
        <CalcFlow
          aria="CalcFlow of the zoning decision posterior from priors through joints to 34 percent"
          caption={<>The shopping-centre zoning revision, end to end — the final frame is the prose's 34%.</>}
          frames={[
            { kind: "formula", label: "Bayes' theorem — symbolic form", math: "P(A_i|B) = P(A_i)·P(B|A_i) / Σ P(A_j)·P(B|A_j)", note: "priors × likelihoods, normalised by the total probability of the information" },
            { kind: "sub", label: "Substitute priors and likelihoods", math: "P(A ∩ B) = 0.70 × 0.20 = 0.14 · P(R ∩ B) = 0.30 × 0.90 = 0.27", note: "the planning board recommended against — event B" },
            { kind: "value", label: "Total probability of B", math: "P(B) = 0.14 + 0.27 = 0.41", note: "the denominator sums every road into B" },
            { kind: "result", label: "Posterior approval probability 34%", math: "P(Approval|B) = 0.14 / 0.41 = 0.34", note: "the owner revises 70% → 34% — the relocation decision changes" },
          ]}
        />
        <StmCallout kind="insight" title="Independence is not mutual exclusivity">
          Independent events: P(A ∩ B) = P(A)·P(B) — one tells you nothing about the other. Mutually exclusive events: P(A ∩ B) = 0 — they cannot happen together, so knowing one occurred tells you the other did not. The multiplication law's special case is exactly this.
        </StmCallout>
      </div>
    </section>
  );
}
