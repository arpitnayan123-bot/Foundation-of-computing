"use client";

/* ============================================================
   StmParts16 — L32 and L33. Quality Associates' four samples
   with the control limits and the α-dial, and the end-term
   brief with the course recap.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmDataTable, StmCallout, StmSteps, StmExamCallout } from "./blocks";
import { SpcChart, ControlLimitCurve, RejectionSample3, RejectionSample2, ExamCoverageMap } from "./diagrams";
import { CalcFlow } from "./stm-math";

/* ---------------- L32 a — Quality Associates ---------------- */
export function StmQualityAssociatesSection() {
  return (
    <section id="quality-associates" className="scroll-mt-24">
      <StmEyebrow id="quality-associates" />
      <StmReadStep n="1" title="Quality Associates" sub="800 observations, four samples, one α" />
      <StmBlocks id="quality-associates" />
      <div className="mt-8 space-y-6">
        <StmDataTable
          aria="Quality Associates case setup table with firm observations samples and process parameters"
          caption={<>The case's dials: the consulting firm monitored a satisfied process to learn its behaviour, then tests each new sample against that knowledge at α = 0.01.</>}
          head={["Field", "Value"]}
          rows={[
            ["Firm", "Quality Associates — a consulting firm monitoring production processes"],
            ["Baseline data", "800 observations collected during satisfactory process operation"],
            ["Sampling strategy", "four samples, each of n = 30, taken periodically"],
            ["Process mean", "μ = 12 (target)"],
            ["Population σ", "0.21 — confirmed by all four samples hovering around 0.21-0.22"],
            ["Significance level", "α = 0.01, two-tailed"],
          ]}
        />
        <StmDataTable
          aria="Four sample results table with means p-values and decisions"
          caption={<>The four verdicts, exactly as the case reports them — Sample 3 is the one that stops the line.</>}
          head={["Sample", "Mean", "P-value", "Decision at α = 0.01"]}
          rows={[
            ["Sample 1", "11.96", "0.28", "cannot reject — satisfactory"],
            ["Sample 2", "12.03", "0.77", "cannot reject — satisfactory"],
            ["Sample 3", "11.89", "0.003", "reject H₀ — corrective action required"],
            ["Sample 4", "12.08", "0.28", "cannot reject — satisfactory"],
          ]}
        />
        <CalcFlow
          aria="CalcFlow of the two-tailed p-value doubling rule for the quality associates test"
          caption={<>The two-tail p-value rule the case states: multiply the one-tailed probability by 2, honouring the symmetry of the normal on both sides of the mean.</>}
          frames={[
            { kind: "formula", label: "The statistic — symbolic form", math: "Z = (x̄ − μ)/(σ/√n)", note: "two-tailed: deviation either way counts" },
            { kind: "sub", label: "Substitute Sample 3", math: "Z = (11.89 − 12)/(0.21/√30)", note: "the sample mean below target" },
            { kind: "value", label: "One-tailed probability, then double", math: "p = 2 × P(Z < −2.87) ≈ 0.003", note: "the symmetry adjustment" },
            { kind: "result", label: "p = 0.003 < 0.01 — reject H₀", math: "corrective action", note: "the process is out of bounds; the line stops" },
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L32 b — control limits & the α-dial ---------------- */
export function StmControlLimitsSection() {
  return (
    <section id="control-limits" className="scroll-mt-24">
      <StmEyebrow id="control-limits" />
      <StmReadStep n="2" title="Control limits & the α-dial" sub="11.90 to 12.10 — and what loosening α does" />
      <StmBlocks id="control-limits" />
      <div className="mt-8 space-y-6">
        <ControlLimitCurve id="l32-limitcurve" />
        <CalcFlow
          aria="CalcFlow of the control limits from the critical z and margin of error to 11.90 and 12.10"
          caption={<>The limits, computed — the final frames are the prose's 11.90 and 12.10.</>}
          frames={[
            { kind: "formula", label: "Control limits — symbolic form", math: "12 ± Z_{α/2} × (σ/√n)", note: "Z(α/2) = 2.57 at α = 0.01 — as L32 rounds it (L22/L25 use 2.576; both sides render)" },
            { kind: "sub", label: "Substitute the case values", math: "12 ± 2.57 × (0.21/√30)", note: "margin = 2.57 × 0.0383" },
            { kind: "value", label: "The margin of error", math: "margin ≈ 0.0987", note: "the acceptable band around the target" },
            { kind: "result", label: "LCL 11.90 · UCL 12.10", math: "limits = [11.90, 12.10]", note: "inside: satisfactory · outside: stop the line" },
          ]}
        />
        <SpcChart id="l32-spc" />
        <div className="grid gap-6 md:grid-cols-2">
          <RejectionSample3 id="l32-sample3" />
          <RejectionSample2 id="l32-sample2" />
        </div>
        <StmDataTable
          aria="Significance level change table from 0.01 to 0.05 with effects"
          caption={<>The α-dial's effects, exactly as the case lists them: tighter limits, more stoppages, faster detection — the trade-off is the cost of false alarms against the cost of missed problems.</>}
          head={["Effect at α = 0.05 (from 0.01)", "Consequence"]}
          rows={[
            ["The null is rejected more frequently", "the process stops more often"],
            ["Control limits become narrower (tighter)", "less room for chance variation"],
            ["Sample 4 would also trigger action", "12.08 crosses the tighter limit"],
            ["Advantage", "quicker detection of process deviations"],
            ["Disadvantage", "higher probability of false alarms (Type I errors) — unnecessary interruptions and downtime"],
          ]}
        />
      </div>
    </section>
  );
}

/* ---------------- L33 a — the end-term brief ---------------- */
export function StmExamBriefSection() {
  return (
    <section id="exam-brief" className="scroll-mt-24">
      <StmEyebrow id="exam-brief" />
      <StmReadStep n="1" title="The end-term brief" sub="As stated — the calculator rule and the supplied tables" />
      <StmBlocks id="exam-brief" />
      <div className="mt-8 space-y-6">
        <StmExamCallout
          kind="endterm"
          title="End-term examination, as stated in L33"
          rows={[
            { k: "Duration", v: "2 hours" },
            { k: "Total marks", v: "60 marks (end-term) — quizzes carry 40% weightage of the course" },
            { k: "Question types", v: "mixed set: very short, medium-length, and questions with multiple subparts" },
            { k: "Syllabus", v: "Chapters 1-9 from the Anderson and Sweeney textbook, with emphasis on Chapters 1-8" },
            { k: "Focus", v: "largely based on the practice questions provided and content discussed in recorded sessions" },
            { k: "Calculator", v: "a scientific NON-PROGRAMMABLE calculator is mandatory — normal calculators are not sufficient" },
            { k: "Supplied materials", v: "z-tables and all required values are provided in the question paper — no statistical tables to carry" },
            { k: "Bring", v: "pen, calculator, and other necessary materials; the question paper and answer sheet come from the exam centre" },
            { k: "Sample paper", v: "provided by the end of the week, showing the exact exam pattern and question distribution" },
          ]}
        />
        <ExamCoverageMap id="l33-coverage" />
      </div>
    </section>
  );
}

/* ---------------- L33 b — course recap & timeline ---------------- */
export function StmCourseRecapSection() {
  return (
    <section id="course-recap" className="scroll-mt-24">
      <StmEyebrow id="course-recap" />
      <StmReadStep n="2" title="Course recap & the study timeline" sub="Population vs sample, and the plan to the exam" />
      <StmBlocks id="course-recap" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow of the study timeline from recorded sessions through practice questions to the sample paper"
          caption={<>The study plan as L33 lays it out — the practice questions and recorded sessions are stated to be 100% sufficient.</>}
          steps={[
            { chip: "STEP 1", label: "Watch the recordings", detail: "complete the recorded sessions before solving the related practice questions — clarity first", tone: "violet" },
            { chip: "STEP 2", label: "Solve the practice questions", detail: "the exam is largely based on them; numericals need hands-on practice, not theory alone", tone: "violet" },
            { chip: "STEP 3", label: "Go deeper (optional)", detail: "the textbook or LLMs for deeper understanding, if needed", tone: "grey" },
            { chip: "STEP 4", label: "Work the sample paper", detail: "arrives by the end of the week — the exact pattern and question distribution", tone: "gold" },
          ]}
        />
        <StmCallout kind="insight" title="The last distinction the course leaves you with">
          Population versus sample — the complete set of all elements of interest against the subset you actually measured. Every confidence interval and every hypothesis test this course built is the same honest trade: pay for a sample, then account for the difference.
        </StmCallout>
      </div>
    </section>
  );
}
