"use client";

/* ============================================================
   StmParts1 — L01. The conceptual introduction: what statistics
   is, the data anatomy, the four measurement scales.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmSteps } from "./blocks";
import { DataAnatomy, ScalesLadder, StmDataTable } from "./diagrams";

export function StmWhatStatisticsSection() {
  return (
    <section id="what-statistics" className="scroll-mt-24">
      <StmEyebrow id="what-statistics" />
      <StmReadStep n="1" title="What is statistics?" sub="Two meanings, six business applications, one definition" />
      <StmBlocks id="what-statistics" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow of statistics as art and science from objective collection to subjective judgment"
          caption={
            <>
              The definition in motion: the science collects (objective, reproducible), the art chooses what to collect (subjective, judgmental) — and the manager lives on both rungs.
            </>
          }
          steps={[
            { chip: "THE SCIENCE", label: "Collect objectively", detail: "Height measurements in inches will not differ regardless of who collects them", tone: "violet" },
            { chip: "THE ART", label: "Choose the data", detail: "Which measurements and controls to study a supplement's effect on child growth — expertise and decision-making", tone: "gold" },
            { chip: "THE DEFINITION", label: "Collect · analyze · present · interpret", detail: "The art and science of turning data into decisions", tone: "violet" },
          ]}
        />
        <StmSteps
          aria="Workflow across the six business functions where statistics is applied"
          caption={
            <>
              The six places a manager meets statistics — from audit samples to control charts — every one a running instance of the same art-and-science loop.
            </>
          }
          steps={[
            { chip: "ACCOUNTING", label: "Audit by sampling", detail: "Sampling procedures verify client records", tone: "violet" },
            { chip: "ECONOMICS", label: "Forecast & analyze", detail: "Daily statistical forecasts; war and global events traced through economic parameters", tone: "violet" },
            { chip: "FINANCE", label: "Advise with ratios", detail: "P/E ratios, dividend yields, price-to-book, interest rates", tone: "violet" },
            { chip: "MARKETING", label: "Read the scanners", detail: "POS scanners collect purchase patterns, discount effects, consumer behavior", tone: "gold" },
            { chip: "PRODUCTION", label: "Keep the charts", detail: "Statistical quality-control charts hold products inside acceptable ranges", tone: "gold" },
            { chip: "INFO SYSTEMS", label: "Measure the stack", detail: "Internet speed, RAM usage, graphic-card and memory utilization", tone: "grey" },
          ]}
        />
      </div>
    </section>
  );
}

export function StmDataAnatomyScalesSection() {
  return (
    <section id="data-anatomy-scales" className="scroll-mt-24">
      <StmEyebrow id="data-anatomy-scales" />
      <StmReadStep n="2" title="The data anatomy & the scales" sub="Elements, variables, observations — and the four-rung ladder" />
      <StmBlocks id="data-anatomy-scales" />
      <div className="mt-8 space-y-6">
        <DataAnatomy id="l01-anatomy" />
        <ScalesLadder id="l01-scales" />
        <StmDataTable
          aria="Classification table of categorical versus quantitative data with scales and examples"
          caption={<>The classification restated as the two families the scales feed: categorical data (nominal, ordinal) and quantitative data (interval, ratio) — the ladder decides which arithmetic is allowed.</>}
          head={["Family", "Scales", "Examples", "Arithmetic allowed"]}
          rows={[
            ["Categorical", "Nominal · Ordinal", "Names, gender, classifications, pass/fail", "Counting only"],
            ["Quantitative", "Interval · Ratio", "Test scores, attempts, price ₹, height, age", "Add · subtract · multiply · divide"],
          ]}
        />
      </div>
    </section>
  );
}
