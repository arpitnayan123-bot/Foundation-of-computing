"use client";

/* ============================================================
   StmParts2 — L02 and L03.

   L03 is THE REBUILT ADMINISTRATION LECTURE — the largest blind
   spot on any shelf in the set. The deployed shelf had replaced
   it with L01's scales material wearing L03's number (a 347-word
   "Course Launch" chapter; coverage 0.34 by count, zero in
   substance). The three chapters below rebuild the real
   course-administration session: instructor and format, the
   prescribed Anderson & Sweeney text, the mandatory Excel and
   R installs, the AI policy with its candidature line, and the
   three-quiz evaluation scheme — all from the L03 transcript,
   which carries 956 content tokens on its own.
   ============================================================ */

import { StmEyebrow, StmBlocks, StmReadStep, StmSteps, StmCallout, StmExamCallout } from "./blocks";
import { AnalyticsLadder, InstallPath, AiPolicyLanes } from "./diagrams";

/* ---------------- L02 a — data sources & collection ---------------- */
export function StmDataSourcesSection() {
  return (
    <section id="data-sources" className="scroll-mt-24">
      <StmEyebrow id="data-sources" />
      <StmReadStep n="1" title="Where data comes from" sub="Internal records to AI scrapes — and how collection chooses its method" />
      <StmBlocks id="data-sources" />
      <div className="mt-8 space-y-6">
        <StmSteps
          aria="Workflow of data collection from internal records through databases government and industry associations to the internet and AI"
          caption={
            <>
              The source cascade: every downstream analysis inherits the honesty of its upstream collection — errors and costs included.
            </>
          }
          steps={[
            { chip: "INTERNAL", label: "Company records", detail: "Employee, production, inventory, sales, credit records", tone: "violet" },
            { chip: "COMMERCIAL", label: "Database services", detail: "Companies maintaining cross-business databases", tone: "violet" },
            { chip: "GOVERNMENT", label: "Agencies", detail: "Ministry of Statistics (India), U.S. Department of Labor", tone: "violet" },
            { chip: "INDUSTRY", label: "Associations", detail: "Labor unions, banking associations, standards groups", tone: "grey" },
            { chip: "SPECIAL", label: "Interest organizations", detail: "GMAT councils and admission-related data", tone: "grey" },
            { chip: "MODERN", label: "Internet & AI", detail: "Quick, easily accessible — and needing the sharpest scrutiny", tone: "gold" },
          ]}
        />
        <StmCallout kind="why" title="Why the observational/experimental line matters">
          Observational studies watch without interference — the hidden-camera approach; experimental studies administer a treatment and compare pre- and post-treatment data, as the 1954 polio vaccine experiment did across 2 million U.S. children. The line decides what a manager can claim: association from observation, effect from experiment.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L02 b — analytics & ethics ---------------- */
export function StmAnalyticsEthicsSection() {
  return (
    <section id="analytics-ethics" className="scroll-mt-24">
      <StmEyebrow id="analytics-ethics" />
      <StmReadStep n="2" title="The analytics ladder & the ethics line" sub="Descriptive → predictive → prescriptive; big data; the guardrail" />
      <StmBlocks id="analytics-ethics" />
      <div className="mt-8 space-y-6">
        <AnalyticsLadder id="l02-analytics" />
        <StmCallout kind="warn" title="The unethical four">
          Improper sampling (cherry-picking), inappropriate analysis (misusing knowledge to draw wrong conclusions), misleading presentations (deceptive graphs), and false reporting (statistics that create false impressions) — practitioners stay fair, thorough, objective and neutral, and consumer forums exist to penalize the rest.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L03 a — course administration ---------------- */
export function StmCourseAdministrationSection() {
  return (
    <section id="course-administration" className="scroll-mt-24">
      <StmEyebrow id="course-administration" />
      <StmReadStep n="1" title="Course administration" sub="Instructor, format, textbook, evaluation — the real front door" />
      <StmBlocks id="course-administration" />
      <div className="mt-8 space-y-6">
        <StmExamCallout
          kind="quiz-brief"
          title="Course evaluation, as L03 states it"
          rows={[
            { k: "Quizzes", v: "Three quizzes conducted at regular intervals; best two scores counted" },
            { k: "End-term", v: "Written mode, with both subjective and objective questions" },
            { k: "Assessment focus", v: "Data collection and interpretation skills" },
            { k: "Superseded later by", v: "L13 (two 20-mark quizzes + one combined, best two of three) and then L23 (two quizzes, best of two) — each lecture keeps its own words; see the chain" },
          ]}
        />
        <StmCallout kind="story" title="The session as it happened">
          Delivered as part of IIT Jodhpur's inaugural program: 30 minutes of lecture, 10 minutes for Q&amp;A, application-focused live sessions on top of pre-recorded theory, and a doubt-clearing session the following week. Roughly 70% of participants had watched the recordings; about half reported no fear of statistics.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L03 b — the AI policy ---------------- */
export function StmAiPolicySection() {
  return (
    <section id="ai-policy" className="scroll-mt-24">
      <StmEyebrow id="ai-policy" />
      <StmReadStep n="2" title="AI policy & academic integrity" sub="Permitted, prohibited — and the line that cancels candidature" />
      <StmBlocks id="ai-policy" />
      <div className="mt-8 space-y-6">
        <AiPolicyLanes id="l03-ai-policy" />
        <StmCallout kind="warn" title="The verification rule">
          Students must verify information manually before trusting AI outputs. AI is a supplementary tool, not the primary learning method — and passing off AI-generated work as entirely your own constitutes academic dishonesty, with violation potentially leading to candidature cancellation.
        </StmCallout>
      </div>
    </section>
  );
}

/* ---------------- L03 c — concepts & the toolkit ---------------- */
export function StmCourseConceptsToolsSection() {
  return (
    <section id="course-concepts-tools" className="scroll-mt-24">
      <StmEyebrow id="course-concepts-tools" />
      <StmReadStep n="3" title="Concepts & the toolkit" sub="The WSJ survey's arithmetic, and the mandated installs" />
      <StmBlocks id="course-concepts-tools" />
      <div className="mt-8 space-y-6">
        <InstallPath id="l03-install" />
        <StmSteps
          aria="Workflow of the course preparation steps from installs through textbook to LMS questions"
          caption={
            <>
              The next-steps ladder exactly as the session closed it — recorded lectures before live sessions, or the cumulative difficulty compounds.
            </>
          }
          steps={[
            { chip: "STEP 1", label: "Install the toolkit", detail: "Excel and R Studio before the next live session", tone: "violet" },
            { chip: "STEP 2", label: "Get the text", detail: "Anderson & Sweeney, Statistics for Business and Economics, 13th edition onward — physical or digital", tone: "violet" },
            { chip: "STEP 3", label: "Watch the recordings", detail: "Complete all assigned lectures before attending live sessions", tone: "gold" },
            { chip: "STEP 4", label: "Post questions", detail: "Pre-prepared questions on the LMS before doubt-clearing sessions", tone: "grey" },
            { chip: "STEP 5", label: "Pull the materials", detail: "Datasets and reference materials from the LMS", tone: "grey" },
          ]}
        />
      </div>
    </section>
  );
}
