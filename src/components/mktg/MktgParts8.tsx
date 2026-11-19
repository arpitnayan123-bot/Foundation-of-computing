"use client";

/* ============================================================
   MKTG PARTS 8 — Lecture 40, the final class. Prose = the
   verbatim corpus (L40.md). Figures & workflows = registered
   components. The three Cs re-teaching is preserved verbatim
   and logged (see the authoring note).
   ============================================================ */

import React from "react";
import { GraduationCap, PenLine } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { RemovalCard } from "@/components/mktg/MktgReserved";
import { CorpusBlocks } from "@/components/mktg/CorpusBlocks";
import {
  AuthoringNote,
  ExamSplit,
  MK,
  MktgStepper,
  ThreeCsTriangle,
} from "@/components/mktg/diagrams";

/* ============================================================
   LECTURE 39 — reserved (removed from the course)
   No official title. It keeps its number and its position in
   Part VI; the page renders only the removal card.
   ============================================================ */

export function MktgReserved39Section() {
  return (
    <Section id="reserved-39">
      <SectionHead
        eyebrow="Part VI · Lecture 39 · removed from the course"
        title="Lecture 39"
        lead="This lecture carries no official title. It keeps its number and its position in Part VI. Nothing else survives — the removal card below is the entire page."
      />
      <RemovalCard spaced="L 3 9" title="Lecture 39" />
    </Section>
  );
}

/* ============================================================
   L40 · three-cs-final
   ============================================================ */
export function MktgThreeCsFinalSection() {
  return (
    <Section id="three-cs-final">
      <SectionHead
        eyebrow="Part VI · Lecture 40 · Final Class"
        title={<>The three Cs, <span style={{ color: MK.teal }}>one final pass</span></>}
        lead="The last recorded live session re-teaches the three Cs on the Comfort film, grounds recall in Coca-Cola and Bisleri, and hands over the examination rules."
      />
      <CorpusBlocks id="three-cs-final" />
      <Reveal className="mt-8">
        <ThreeCsTriangle trace={false} />
      </Reveal>
      <Reveal className="mt-5">
        <AuthoringNote lecture="Lecture 40" title="The final class re-teaches L38's three Cs — verbatim, by design">
          <p>
            The three Cs, the Comfort breakdown, the 4,000–10,000 ads figure and the 11-million/40-bit gap all reappear
            here from <strong>Lecture 38</strong>. The final class is the course&apos;s own revision pass — its text is kept
            word-for-word and the duplication stays logged in the consolidated register of open questions.
          </p>
        </AuthoringNote>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Context: people want clean clothes, but detergent leaves them rough and rash-prone — that circumstance makes Comfort relevant.</>,
          <>Concept: rigidity transformed into softness — the Hitler-to-Gandhi storyline.</>,
          <>Content: the characters, the water, the dipping action — the tactical execution of the concept.</>,
          <>Mental availability, not message volume, decides recall: <strong>Coca-Cola for cola, Bisleri for mineral water</strong> — brands that occupy the shelf in the brain.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L40 · exam-guidelines
   ============================================================ */
export function MktgExamGuidelinesSection() {
  return (
    <Section id="exam-guidelines">
      <SectionHead
        eyebrow="Part VI · Lecture 40 · Examination Guidelines"
        title={<>The examination, <span style={{ color: MK.teal }}>as the course actually grades it</span></>}
        lead="Entirely subjective, 60 marks, every module included — no rote definitions. Answers carry frameworks, real examples and diagrams; quality beats quantity."
      />
      <CorpusBlocks id="exam-guidelines" />
      <Reveal className="mt-8">
        <ExamSplit />
      </Reveal>
      <Reveal className="mt-5">
        <MktgStepper
          title="The answer-craft workflow"
          chip="Lecture 40 · how to write for a subjective paper"
          icon={<PenLine className="h-5 w-5" aria-hidden />}
          steps={[
            { k: "Read", line: "Every question tests understanding and thought process — never a direct definition.", trace: "\u201cMarketing is like dating\u201d — agree or disagree?" },
            { k: "Concept", line: "State the concept you are invoking, precisely.", trace: "the framework by name" },
            { k: "Framework", line: "Support it with the course framework, applied.", trace: "STP · three Cs · CPV — whatever fits" },
            { k: "Example", line: "Anchor it in a real brand — your own examples are acceptable.", trace: "\u201cbrands you interact with\u201d" },
            { k: "Sketch", line: "Diagrams and bullet-paragraph mixes demonstrate understanding better than volume.", trace: "10 clear lines > 5 empty pages" },
            { k: "Answer", line: "Label every question — sequence does not matter, labeling is the student's responsibility.", trace: "no word limit; length matches complexity" },
          ]}
        />
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <>Grading: <strong>continuous assessment 40%</strong> (quizzes + the one-pager) and <strong>final examination 60%</strong> — subjective, all modules.</>,
          <>Question types: value creation, consumer vs customer, selling vs marketing, &ldquo;marketing is like dating&rdquo;, STP applications, real case studies.</>,
          <>MCQ craft (for the quizzes): every option looks right; eliminate the obviously wrong, then pick the <strong>best</strong> — the skill develops with practice.</>,
          <>Creativity is valued: drawings and illustrations give the teacher insight into your understanding.</>,
        ]} />
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm p-5 md:p-6">
          <p className="flex items-center gap-2 text-[.6rem] font-extrabold uppercase tracking-[.22em]" style={{ color: MK.brass }}>
            <GraduationCap className="h-4 w-4" aria-hidden />
            Course close · Lecture 40 of 40
          </p>
          <p className="mt-2 max-w-3xl text-[.92rem] leading-relaxed text-[#3a4a48]">
            This is the last recorded live session of the course. Class recordings remain the primary study material;
            create your own notes rather than depending on provided ones. Assignment details arrive from the academic
            coordination team by course end — and campus events or examination periods may bring the in-person meetings
            the instructor hopes for.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
