"use client";

/* ============================================================
   StmParts9 — L16 and L17. GIG's Go Bananas quality-control
   case with its three levers, and the sampling vocabulary.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps } from "./blocks";
import { CalcFlow } from "./stm-math";

/* ---------------- L16 a — GIG / Go Bananas ---------------- */
export function StmGigCaseSection() {
  return (
    <section id="gig-case" className="scroll-mt-24">
      <StmEyebrow id="gig-case" />
      <StmReadStep n="1" title="GIG & the Go Bananas case" sub="The binomial shutdown rule, live on a cereal line" />
      <StmBlocks id="gig-case" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Go Bananas quality control parameter table with sample size failure rate and shutdown criteria"
          caption={<>The case's dials: GIG (Go Great Indian Grains Ltd.) samples 25 boxes a week against the 50-75 gram specification — and stops the line at 5 failures.</>}
          head={["Parameter", "Value"]}
          rows={[
            ["Company", "GIG (Go Great Indian Grains Ltd.) — breakfast cereal manufacturer"],
            ["Product", "Go Bananas — a 16-ounce box of rice flakes with banana-flavored marshmallows"],
            ["Specification", "banana-flavored marshmallows must weigh 50-75 grams per box"],
            ["Random sample size", "n = 25 boxes per week"],
            ["Process failure rate", "p = 0.08 (boxes outside specification)"],
            ["Shutdown criteria", "5 or more boxes fail → production stops for inspection"],
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the shutdown probability as one minus the cumulative binomial to 4 failures"
          caption={<>The shutdown question — P(X ≥ 5) under normal operations — run to the prose's 4.5%.</>}
          frames={[
            { kind: "formula", label: "The shutdown probability — symbolic form", math: "P(X ≥ 5) = 1 − P(X ≤ 4), with X ~ Bin(25, 0.08)", note: "the complement route spares twenty-one pmf terms" },
            { kind: "sub", label: "Substitute the Excel-computed parts", math: "P(X ≥ 5) = 1 − [f(0) + f(1) + f(2) + f(3) + f(4)]", note: "probabilities for 0 to 25 failures computed, 0-4 summed" },
            { kind: "value", label: "The complement resolves", math: "P(X ≥ 5) = 1 − 0.955", note: "the cumulative mass below 5 failures" },
            { kind: "result", label: "Shutdown probability 4.5%", math: "P(X ≥ 5) = 0.045", note: "under normal operations, the line stops 4.5% of weeks" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L16 b — thresholds & levers ---------------- */
export function StmShutdownLeversSection() {
  return (
    <section id="shutdown-levers" className="scroll-mt-24">
      <StmEyebrow id="shutdown-levers" />
      <StmReadStep n="2" title="Thresholds & the three levers" sub="α, n and p — the dials that fix a failing alarm" />
      <StmBlocks id="shutdown-levers" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Threshold lever table showing shutdown probability by threshold level"
          caption={<>Lever one — the threshold: raising it to 7 buys the sub-1% alarm, at the cost of tolerating 28% failures. The quality-reputation caveat ships with the lever.</>}
          head={["Shutdown threshold", "Shutdown probability", "Verdict in the transcript"]}
          rows={[
            ["4 failures", "13.5%", "too high"],
            ["5 failures (current)", "4.5%", "above the 1% goal"],
            ["6 failures", "1.5%", "still above 1%"],
            ["7 failures", "0.2-0.3%", "meets the goal — but 7 of 25 (28%) may be too lenient"],
          ]}
        />
        <StmDataTable
          aria="Process improvement lever table showing shutdown probability by failure rate"
          caption={<>Lever two — the process: cut the failure rate itself. At p = 0.05 the strict threshold achieves the 1% goal — the lever that improves the product instead of the alarm.</>}
          head={["Process failure rate p", "Shutdown probability at threshold 5"]}
          rows={[
            ["0.08 (current)", "4.5%"],
            ["0.07", "2.7%"],
            ["0.06", "1.5%"],
            ["0.05", "≈1% — achieves the goal"],
          ]}
        />
        <StmCallout kind="insight" title="The third lever is n">
          Sample size is the third dial — larger samples sharpen the binomial's resolution and tighten the alarm's variance. The transcript's Excel route (BINOM.DIST and the simulation) lets every lever be dialled live.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L17 a — sampling vocabulary ---------------- */
export function StmSamplingVocabularySection() {
  return (
    <section id="sampling-vocabulary" className="scroll-mt-24">
      <StmEyebrow id="sampling-vocabulary" />
      <StmReadStep n="1" title="The sampling vocabulary" sub="Element, population, sample, frame, census — and the two population kinds" />
      <StmBlocks id="sampling-vocabulary" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow from population definition through frame construction to sample selection"
          caption={<>The vocabulary that carries every inference sentence — small n for the sample, capital N for the population, the frame as the bridge between them.</>}
          steps={[
            { chip: "ELEMENT", label: "Name the unit", detail: "the entity on which data is collected", tone: "violet" },
            { chip: "POPULATION", label: "Define the whole", detail: "collection of ALL elements of interest — capital N", tone: "violet" },
            { chip: "FRAME", label: "List what can be listed", detail: "census when complete; infinite populations have no frame", tone: "grey" },
            { chip: "SAMPLE", label: "Select the subset", detail: "small n, with replacement or without — the SRS guarantees equal chance", tone: "gold" },
          ]}
        />
        <StmDataTable
          aria="Finite versus infinite population table with sampling implications"
          caption={<>The two population kinds: finite populations can be listed completely; infinite ones are generated by ongoing processes and demand independent selection.</>}
          head={["Population kind", "Frame", "Selection rule"]}
          rows={[
            ["Finite", "can be listed completely — rosters, classes, inventory", "SRS: every element and every sample of size n equally likely"],
            ["Infinite", "no complete list exists — transactions, arrivals, calls", "elements from the population of interest, selected independently"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L17 b — point estimators & SRS ---------------- */
export function StmPointEstimatorsSection() {
  return (
    <section id="point-estimators" className="scroll-mt-24">
      <StmEyebrow id="point-estimators" />
      <StmReadStep n="2" title="Point estimators & the SRS" sub="The statistic→parameter bridge, run on real data" />
      <StmBlocks id="point-estimators" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Bridge table from sample statistics to population parameters"
          caption={<>The bridge the whole course crosses: each sample statistic estimates its population parameter — and the RANDBETWEEN route makes the sample real.</>}
          head={["Sample statistic", "Estimates", "Population parameter"]}
          rows={[
            ["x̄ (sample mean)", "→", "μ (population mean)"],
            ["S (sample standard deviation)", "→", "σ (population standard deviation)"],
            ["p̂ (sample proportion)", "→", "p (population proportion)"],
          ]}
        />
        <StmCallout kind="story" title="The college-admissions sample">
          900 applications, 30 drawn by random numbers — the sample mean SAT score x̄ = 1,684 stands in for the population mean. The rice-grain logic: test a few grains, judge the batch.
        </StmCallout>
      </div>
    </section>
  );
}
