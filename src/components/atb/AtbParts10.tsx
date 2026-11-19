"use client";

/* ============================================================
   ATB · PART I — Lecture 3 (three chapters, rebuilt at
   transcript depth) + PART V — Lectures 26 & 27 (kept sections).
   L03 source of truth: scripts/atb_lectures/L03.md.
   ============================================================ */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUp, BookOpen, Briefcase, Building2, Check, Compass, FileText, Gauge, GraduationCap, ShieldCheck, Shuffle, Sparkles, Timer, UserCheck, X } from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  ATB_BORDER,
  ATB_OLIVE,
  AtbCells,
  AtbFigure,
  AtbPill,
  AtbStepper,
} from "@/components/atb/AtbStepper";
import { eyebrowOf } from "@/components/atb/lectures";

/* ============================================================
   L03 · CHAPTER 1 — THE COURSE MAP (id="coursemap")
   ============================================================ */

const ASSESSMENT = [
  {
    share: 40,
    label: "Quizzes",
    detail: "three MCQ-based quizzes · best TWO marks counted · attend minimum two of three · online from home",
    color: "#c2410c",
  },
  {
    share: 60,
    label: "Major exam",
    detail: "descriptive · offline · written at the examination centre (physical attendance)",
    color: "#7c9a3e",
  },
];

const OBJECTIVES = [
  { icon: BookOpen, line: "Explain common data structures and their business applications — using a no-code approach" },
  { icon: Compass, line: "Identify the suitable data structure for a given business problem" },
  { icon: Gauge, line: "Compare algorithmic approaches from managerial and performance perspectives" },
  { icon: Briefcase, line: "Apply structured logical thinking to real-world business scenarios" },
];

const COURSE_RHYTHM = [
  { tag: "Live sessions", line: "alternate weekends at scheduled times — extra concepts & examples beyond the video content", tone: "active" as const },
  { tag: "TA sessions", line: "doubt-clearing on alternate weekends — the opposite schedule, so every week has one of the two", tone: "idle" as const },
  { tag: "Recordings", line: "video content available during the week; live sessions serve as recapitulation with interactive elements", tone: "idle" as const },
];

function AssessmentSVG() {
  return (
    <AtbFigure notice="quizzes 40 percent best two of three online from home, major exam 60 percent descriptive offline at the examination centre">
  <svg viewBox="0 0 620 190" className="h-auto w-full" role="img" aria-label="Course assessment split: quizzes 40 percent best two of three online from home, major exam 60 percent descriptive offline at the examination centre">
      <defs>
        <marker id="atbCmA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <rect x={40} y={40} width={248} height={92} rx={14} fill="#f5c889" stroke="#c2410c" strokeWidth={2} />
      <text x={164} y={72} textAnchor="middle" fontSize={30} fontWeight={900} fill="#7c4a12">40%</text>
      <text x={164} y={94} textAnchor="middle" fontSize={12} fontWeight={800} fill="#2b2014">Quizzes</text>
      <text x={164} y={114} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">3 MCQ quizzes · best two counted</text>
      <rect x={332} y={40} width={248} height={92} rx={14} fill="#eef4dd" stroke={ATB_OLIVE} strokeWidth={2} />
      <text x={456} y={72} textAnchor="middle" fontSize={30} fontWeight={900} fill="#3c521b">60%</text>
      <text x={456} y={94} textAnchor="middle" fontSize={12} fontWeight={800} fill="#2b2014">Major exam</text>
      <text x={456} y={114} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#44621d">descriptive · offline · exam centre</text>
      <text x={164} y={156} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8a6b45">online from home · attend ≥ 2 of 3</text>
      <text x={456} y={156} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8a6b45">physical attendance required</text>
      <text x={310} y={30} textAnchor="middle" fontSize={10} fontWeight={800} fill="#8a6b45">the official 40 / 60 split — reproduced verbatim from Lecture 3</text>
    </svg>
</AtbFigure>
  );
}

export function AtbCourseMapSection() {
  return (
    <Section id="coursemap">
      <SectionHead
        eyebrow={eyebrowOf("coursemap")}
        title={
          <>
            The course, <span className="grad-text">mapped</span>
          </>
        }
        lead="No-code by design: this course teaches the logic of algorithms and data structures for business — and the assessment is exactly 40% quizzes, 60% major exam."
      />

      <ReadStep n="1" title="Who teaches it, and how" sub="Associate Professor in Information Systems and Digital Transformation — IT at Guru Ghasidas Central University, MTECH in Industrial Engineering and Management, PhD in Business Information Systems from Trinity College, Dublin, with research and teaching across CSIR and industry." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The approach is <strong>no-code</strong>: logic rather than programming-language syntax, with business-relevant
        applications of data structures and algorithms. The reference textbook is <em>“Codeless Data Structures and
        Algorithm”</em> by Subramanya, and the course complements coding courses (such as Python) by focusing on
        conceptual understanding.
      </p>

      <ReadStep n="2" title="Four course objectives" sub="Explain · identify · compare · apply — each one managerial, not syntactic." />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {OBJECTIVES.map((o, i) => (
          <Reveal key={o.line} delay={i * 80}>
            <div className="flex items-start gap-2.5 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-3">
              <o.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c2410c]" />
              <span className="text-[.85rem] leading-snug text-[#2b2014]">{o.line}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <AtbFigure notice="the split is asymmetric on purpose: the 40% half is attempted from home in three sittings with your best two counting, while the full 60% lands on one descriptive paper at the centre.">
        <AssessmentSVG />
      </AtbFigure>

      <ReadStep n="3" title="The weekend rhythm" sub="Live sessions and TA doubt-clearing alternate weekends on opposite schedules; recordings fill the gaps." />
      <div className="mt-4 grid gap-3">
        {COURSE_RHYTHM.map((r, i) => (
          <Reveal key={r.tag} delay={i * 80}>
            <div className="flex items-start gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-3">
              <span className="mt-0.5 rounded-full px-2 py-0.5 text-[.62rem] font-black uppercase tracking-[.14em]" style={{ background: r.tone === "active" ? "#f5c889" : "#f0e3cc", color: "#7c4a12" }}>
                {r.tag}
              </span>
              <span className="text-[.85rem] leading-snug text-[#2b2014]">{r.line}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <AtbStepper
        title="What happens next? — from a business need to running software"
        steps={[
          {
            label: "The business feels a need (‘we must track stock’). A domain expert describes it in business language.",
            detail: "Requirements live with the people who own the problem.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="owner" v="business expert" tone="active" />
                <AtbPill k="language" v="business terms" />
              </div>
            ),
          },
          {
            label: "The business analyst collects the requirements and writes the SRS document.",
            detail: "Software Requirement Specification — the bridge artefact between business and technology.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="author" v="business analyst" tone="active" />
                <AtbPill k="document" v="SRS" tone="twin" />
              </div>
            ),
          },
          {
            label: "The SRS is converted into technical requirements for developers; design documents and diagrams follow.",
            detail: "The BA acts as the bridge between business and technology teams.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="reader" v="developers" tone="active" />
                <AtbPill k="artefacts" v="design docs · diagrams" tone="twin" />
              </div>
            ),
          },
          {
            label: "Software ships — then business requirements keep deciding how often each function runs.",
            detail: "Not every function needs real-time execution: some run on fixed intervals; heavy computations get periodic maintenance windows.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="cadence" v="per business need" tone="twin" />
                <AtbPill k="heavy work" v="maintenance windows" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Course assessment, exactly as announced: quizzes and major exam are weighted…"
          options={["50 / 50", "40 / 60", "30 / 70", "60 / 40"]}
          answer={1}
          explain="Quizzes 40% (three MCQ-based quizzes, best two marks counted, minimum two of three attended, online from home) and the major exam 60% (descriptive, offline, at the examination centre)."
          source="Lecture 3 · course overview"
        />
        <Quiz
          q="Which textbook does the course follow?"
          options={["Introduction to Algorithms (CLRS)", "Codeless Data Structures and Algorithm — Subramanya", "The Art of Computer Programming", "Algorithms Unlocked"]}
          answer={1}
          explain="The official reference is ‘Codeless Data Structures and Algorithm’ by Subramanya — matching the no-code, business-first approach."
          source="Lecture 3 · course overview"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L03 · CHAPTER 2 — ALGORITHM VS CODE (id="algvscode")
   ============================================================ */

function TeaPrecisionSVG() {
  return (
    <AtbFigure notice="The single instruction Add water unpacked into find the water, locate the container, fill it, pour it — human intuition versus the machine that cannot assume">
  <svg viewBox="0 0 640 210" className="h-auto w-full" role="img" aria-label="The single instruction Add water unpacked into find the water, locate the container, fill it, pour it — human intuition versus the machine that cannot assume">
      <defs>
        <marker id="atbAvA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <rect x={40} y={30} width={130} height={36} rx={8} fill="#f5c889" stroke="#c2410c" strokeWidth={1.6} />
      <text x={105} y={53} textAnchor="middle" fontSize={12} fontWeight={800} fill="#2b2014">“Add water”</text>
      <text x={105} y={86} textAnchor="middle" fontSize={10} fontWeight={800} fill="#44621d">a human infers</text>
      <text x={105} y={102} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">all of this without</text>
      <text x={105} y={118} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">being told</text>
      <path d="M170 48 H 240" stroke="#c99a5b" strokeWidth={2} markerEnd="url(#atbAvA)" fill="none" />
      {[
        { x: 260, t: "1 · find the water" },
        { x: 388, t: "2 · locate the container" },
        { x: 516, t: "3 · fill it" },
        { x: 516, t2: "4 · pour it", y2: 74 },
      ].map((s) => (
        <g key={s.t}>
          <rect x={s.x} y={40} width={118} height={34} rx={8} fill="#fffaf1" stroke="#e9d7bf" />
          <text x={s.x + 59} y={61} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#2b2014">{s.t}</text>
        </g>
      ))}
      <rect x={516} y={78} width={118} height={34} rx={8} fill="#fffaf1" stroke="#e9d7bf" />
      <text x={575} y={99} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#2b2014">4 · pour it</text>
      <text x={105} y={160} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c4a12">a machine cannot assume or infer</text>
      <text x={105} y={178} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a6b45">each hidden step must be written out</text>
      <text x={400} y={160} textAnchor="middle" fontSize={10} fontWeight={800} fill="#44621d">details added progressively → algorithm quality improves</text>
      <text x={400} y={178} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a6b45">prerequisites (equipment) come before the process</text>
    </svg>
</AtbFigure>
  );
}

export function AtbAlgoVsCodeSection() {
  return (
    <Section id="algvscode">
      <SectionHead
        eyebrow={eyebrowOf("algvscode")}
        title={
          <>
            Algorithm <span className="grad-text">vs</span> code — and the machine that cannot guess
          </>
        }
        lead="An algorithm is a set of organized, step-by-step instructions converting input data into desired output. Code is just one language’s implementation of it. The logic is the asset — and it must be precise, because computers cannot assume or infer."
      />

      <ReadStep n="1" title="“Add water” is four instructions for a machine" sub="Intuitive processes become complex when written step-by-step — prerequisites (equipment needed) must be defined before the process itself." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        Teaching machines — robots or algorithms — demands precision that everyday language never carries. The tea
        exercise shows it: defining prerequisites first, then adding details progressively improves algorithm
        quality. All algorithms are <strong>simplifications of real-world processes</strong> that grow more exact
        with every detail added.
      </p>

      <AtbFigure notice="the four sub-steps a person infers silently are exactly the four a machine must be told — that gap is the whole discipline.">
        <TeaPrecisionSVG />
      </AtbFigure>

      <AtbStepper
        title="What happens next? — refining one vague step into four real ones"
        steps={[
          {
            label: "The recipe says: ‘Add water’. A human nods; a machine stalls.",
            detail: "No quantity, no source, no container, no action order.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="instruction" v="‘Add water’" tone="broken" />
                <AtbPill k="machine can act?" v="no" tone="broken" />
              </div>
            ),
          },
          {
            label: "Unpack 1: FIND the water — where is it stored?",
            detail: "Every implicit prerequisite becomes an explicit step.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="step 1" v="find the water" tone="twin" />
                <AtbPill k="instruction" v="‘Add water’ + 1" />
              </div>
            ),
          },
          {
            label: "Unpack 2–3: LOCATE the container, FILL it.",
            detail: "Equipment prerequisites surface: which container? how much?",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="steps 2–3" v="locate · fill" tone="twin" />
              </div>
            ),
          },
          {
            label: "Unpack 4: POUR — now the machine can execute every token.",
            detail: "Four measurable actions replaced one subjective phrase. That is algorithm quality improving.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="steps" v="4 explicit" tone="twin" />
                <AtbPill k="machine can act?" v="yes" tone="twin" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="2" title="Algorithm vs code — three distinctions" sub="Algorithm = what to do; code = how to implement. Legacy one-off programs vs cloud-reused parameterised solutions. Pseudocode bridges the two." />
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[
          { t: "Algorithm vs language", d: "The algorithm is independent of language choice; the same one may be easier or harder to implement in different languages. Quality is language-independent." },
          { t: "One-time vs reusable", d: "Legacy: custom programs written for individual companies. Modern: cloud-based solutions reuse the same code for multiple organizations — parameterization lets one codebase serve diverse needs." },
          { t: "Pseudocode vs code", d: "Pseudocode uses English-like language; programming code uses language-specific syntax. Pseudocode is the intermediate step that eases conversion to actual code." },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 90}>
            <div className="card-warm h-full p-4">
              <p className="font-extrabold text-[#3e2c1d]">{c.t}</p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#2b2014]">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <Callout kind="insight" title="Subjective machines — the design challenge">
          “Gentle boil” and “looks okay” are fine for people and useless for machines: computers require
          <strong> objective, measurable criteria</strong> for decision-making. Human interpretation and subjective
          judgment remain areas where AI still struggles compared to human intelligence.
        </Callout>
      </Reveal>

      <Reveal className="mt-4">
        <Callout kind="warn" title="Misconceptions the live session retired">
          Computers cannot be <em>trained</em> with new algorithms at first — they operate through pre-existing ones ·
          precise descriptions do not guarantee perfect results if the precision itself is ambiguously defined ·
          algorithms and coding go hand-in-hand but are conceptually distinct · functions are reusable components
          <em> of</em> algorithms, not replacements for them · Boolean is preferred over integer for true/false —
          memory efficiency and error prevention · flow diagrams use <strong>sequential diamonds</strong> for
          multiple conditions; a single diamond allows only yes/no branching.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Why is algorithm quality language-independent?"
          options={["It compiles the same everywhere", "Quality lives in the logic, not the syntax", "All languages share keywords", "Pseudocode is a language"]}
          answer={1}
          explain="The algorithm focuses on what to do; code focuses on how to implement. The same algorithm may be easier or harder in different languages — but its quality is judged on the logic."
          source="Lecture 3 · algorithm vs code"
        />
        <Quiz
          q="Modern cloud solutions replace legacy custom programs mainly through…"
          options={["Faster servers", "Parameterization — one codebase serves many organizations", "Hiring more developers", "Rewriting in Python"]}
          answer={1}
          explain="Parameterization enables a single codebase to serve diverse needs — the modern approach reuses the same code across users/organizations instead of one-off custom programs."
          source="Lecture 3 · distinctions"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L03 · CHAPTER 3 — TYPES & THE BA BRIDGE (id="babridge")
   ============================================================ */

const TYPE_TABLE: [string, string, string][] = [
  ["Integer", "Whole numbers only", "Marks (0–100), number of students"],
  ["Float / Floating Point", "Decimal numbers", "Temperature, interest rates, CGPA"],
  ["Boolean", "Two values only (true/false or 0/1)", "Eligible/not eligible, pass/fail"],
  ["Character / Text", "Text and strings", "Names, addresses, book titles"],
];

function BaBridgeSVG() {
  return (
    <AtbFigure notice="business experts on the left, developers on the right, the BA in the middle converting requirements into an SRS and design documents">
  <svg viewBox="0 0 640 180" className="h-auto w-full" role="img" aria-label="The business analyst bridge: business experts on the left, developers on the right, the BA in the middle converting requirements into an SRS and design documents">
      <defs>
        <marker id="atbBaA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
        <marker id="atbBaB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_OLIVE} /></marker>
      </defs>
      <rect x={30} y={50} width={160} height={80} rx={12} fill="#fffaf1" stroke="#e9d7bf" />
      <text x={110} y={82} textAnchor="middle" fontSize={11} fontWeight={800} fill="#2b2014">Business domain</text>
      <text x={110} y={100} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">end-users · experts</text>
      <text x={110} y={116} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">requirements in</text>
      <text x={110} y={130} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">business language</text>
      <path d="M190 90 H 262" stroke="#c2410c" strokeWidth={2} markerEnd="url(#atbBaA)" fill="none" />
      <rect x={262} y={44} width={120} height={92} rx={12} fill="#f5c889" stroke="#c2410c" strokeWidth={2} />
      <text x={322} y={76} textAnchor="middle" fontSize={11.5} fontWeight={900} fill="#2b2014">Business</text>
      <text x={322} y={92} textAnchor="middle" fontSize={11.5} fontWeight={900} fill="#2b2014">Analyst</text>
      <text x={322} y={112} textAnchor="middle" fontSize={9} fontWeight={700} fill="#5b4a33">SRS document</text>
      <text x={322} y={126} textAnchor="middle" fontSize={9} fontWeight={700} fill="#5b4a33">design docs · diagrams</text>
      <path d="M382 90 H 454" stroke={ATB_OLIVE} strokeWidth={2} markerEnd="url(#atbBaB)" fill="none" />
      <rect x={454} y={50} width={160} height={80} rx={12} fill="#fffaf1" stroke="#e9d7bf" />
      <text x={534} y={82} textAnchor="middle" fontSize={11} fontWeight={800} fill="#2b2014">Developers</text>
      <text x={534} y={100} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">technical requirements</text>
      <text x={534} y={116} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5b4a33">implementation</text>
      <text x={320} y={165} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c4a12">the bridge between business requirements and technical implementation</text>
    </svg>
</AtbFigure>
  );
}

export function AtbBaBridgeSection() {
  return (
    <Section id="babridge">
      <SectionHead
        eyebrow={eyebrowOf("babridge")}
        title={
          <>
            Data types, validation &amp; the <span className="grad-text">BA bridge</span>
          </>
        }
        lead="Choosing a data type is a business decision — and when the machine’s checks pass but the value is still wrong, a human judgement (and often a business analyst) has to close the gap."
      />

      <ReadStep n="1" title="Why data types exist" sub="Define what a variable can store · optimize memory usage · prevent errors by restricting invalid inputs. Classical languages require predefined types; modern languages like Python can infer them." />
      <div className="card-warm mt-4 overflow-x-auto p-0">
        <table className="w-full text-left text-[.86rem]">
          <thead>
            <tr className="bg-[#fbf3e3]">
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Data type</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Purpose</th>
              <th className="px-4 py-2.5 font-extrabold text-[#3e2c1d]">Example</th>
            </tr>
          </thead>
          <tbody>
            {TYPE_TABLE.map(([t, p, e]) => (
              <tr key={t} className="border-t border-[#f3e2c8] bg-[#fffaf1]">
                <td className="px-4 py-2.5 font-bold text-[#3e2c1d]">{t}</td>
                <td className="px-4 py-2.5 text-[#2b2014]">{p}</td>
                <td className="px-4 py-2.5 text-[#5b4a33]">{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
        Selection needs <strong>business domain understanding</strong>, determined through consultation with end-users
        and domain experts. The classic trap: a customer ID that mixes letters and numbers must be stored as{" "}
        <strong>text, not a pure number</strong>.
      </p>

      <ReadStep n="2" title="Validation has two layers" sub="System-level checks validate type and range (marks between 0–100). The human/managerial layer catches logical errors — the system accepts 63 as valid, but the employee may have meant 65." />
      <AtbStepper
        title="What happens next? — a mark of 63 enters the system"
        steps={[
          {
            label: "Entry: the clerk types 63 into the marks field.",
            detail: "The declared type is integer; the field expects 0–100.",
            frame: <AtbCells values={[63, null, null, null, null]} tones={["active", "ghost", "ghost", "ghost", "ghost"]} labels={["marks", "", "", "", ""]} />,
          },
          {
            label: "System check: is it an integer? Is it within 0–100? Both pass.",
            detail: "System-level validation only sees type and range — it cannot read intent.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="type = integer" v="pass" tone="twin" />
                <AtbPill k="0 ≤ 63 ≤ 100" v="pass" tone="twin" />
                <AtbPill k="system verdict" v="valid" tone="twin" />
              </div>
            ),
          },
          {
            label: "Human check: the student’s paper says 65.",
            detail: "A logical error — valid data, wrong value. No system check could catch it.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="entered" v={63} tone="broken" />
                <AtbPill k="intended" v={65} tone="twin" />
                <AtbPill k="gap" v="human judgement" tone="active" />
              </div>
            ),
          },
          {
            label: "Correction entered; the bridge between the two layers is the process, not the code.",
            detail: "This is exactly where business analysts and domain experts earn their place.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="final value" v={65} tone="twin" />
                <AtbPill k="caught by" v="managerial review" tone="active" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="3" title="Real-time or not — the business decides" sub="UPI transfers confirm instantly but backend settlement runs periodically (every two hours); daily sales summaries run at midnight, not continuously. Maintenance windows host heavy computations." />
      <AtbFigure notice="the user sees an instant confirmation while the settlement quietly runs every two hours — responsiveness for people, batching for machines, each tuned by business requirements.">
        <BaBridgeSVG />
      </AtbFigure>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="A customer ID contains letters and digits (e.g. B26-SME-001). Its correct data type is…"
          options={["Integer", "Float", "Character / text", "Boolean"]}
          answer={2}
          explain="Mixed letter–number identifiers must be stored as text — arithmetic on them is meaningless and integer storage would corrupt them."
          source="Lecture 3 · data types"
        />
        <Quiz
          q="Why is Boolean preferred over integer for true/false values?"
          options={["It prints nicer", "Memory efficiency and error prevention", "It is faster to type", "Python requires it"]}
          answer={1}
          explain="The live session’s stated reasons: a Boolean can only hold two values, so it saves memory and makes invalid states unrepresentable — error prevention."
          source="Lecture 3 · misconceptions"
        />
      </div>

      <Reveal className="mt-4">
        <Practice
          title="Bridge work"
          items={[
            { q: "A retailer wants daily totals but instant stock alerts. Which functions run real-time, which run at midnight — and who decides?", hint: "Alerts: real-time (business need). Daily sales summary: fixed interval (midnight). The business requirements determine processing frequency — not the developer’s preference." },
            { q: "Write the two validation layers for a marks field in one sentence each.", hint: "System: integer within 0–100. Human/managerial: does the entered value match the source document (63 vs 65)?" },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 4 · SELECTION SORT (id="selectionsort") — Lecture 26
   ============================================================ */

/* the machine: selection sort, pass by pass */
const SEL_START = [10, 5, 8, 4, 3, 2];

function selPasses(): { arr: number[]; scanning?: number; swapped?: number; label: string; sorted: number }[] {
  const frames: { arr: number[]; scanning?: number; swapped?: number; label: string; sorted: number }[] = [
    { arr: [...SEL_START], label: "Start — nothing sorted yet", sorted: 0 },
  ];
  const arr = [...SEL_START];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) if (arr[j] < arr[min]) min = j;
    frames.push({ arr: [...arr], scanning: min, swapped: i, label: `Pass ${i + 1} — scanning for the minimum`, sorted: i });
    [arr[i], arr[min]] = [arr[min], arr[i]];
    frames.push({ arr: [...arr], swapped: i, label: `Pass ${i + 1} — ${SEL_START[i] === arr[i] ? "already in place" : `swap ${arr[i]} home`}`, sorted: i + 1 });
  }
  frames.push({ arr: [...arr], label: "Sorted — n−1 passes, one swap each", sorted: arr.length });
  return frames;
}
const SEL_FRAMES = selPasses();

function SelPlayer() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setStep((s) => {
        if (s >= SEL_FRAMES.length - 1) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 1100);
    return () => clearInterval(t);
  }, [playing]);

  const f = SEL_FRAMES[step];
  return (
    <div className="card-warm lift p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="chip">The selection machine · [10, 5, 8, 4, 3, 2]</span>
        <span className="text-[.72rem] font-bold text-muted-warm">
          frame {step + 1}/{SEL_FRAMES.length}
        </span>
      </div>
      <div className="mt-4 flex items-end gap-2" style={{ minHeight: 120 }}>
        {f.arr.map((v, i) => {
          const isSorted = i < f.sorted;
          const isMin = f.scanning === i;
          const isSwap = f.swapped === i;
          return (
            <motion.div
              key={`${f.label}-${i}`}
              layout
              className="flex w-full flex-col items-center gap-1"
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <motion.div
                className="flex w-full items-end justify-center rounded-lg"
                style={{
                  height: `${v * 8}px`,
                  background: isSorted ? "#7c9a3e" : isMin ? "#c2410c" : isSwap ? "#b45309" : "#f3e2c8",
                }}
                animate={isMin ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                transition={{ duration: 0.6, repeat: isMin ? Infinity : 0 }}
              >
                <span className="pb-1 text-[.78rem] font-extrabold" style={{ color: isSorted || isMin || isSwap ? "#fff8ec" : "#3e2c1d" }}>
                  {v}
                </span>
              </motion.div>
              <span className="font-mono text-[.6rem] text-[#a08568]">{i}</span>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-3 min-h-[1.4rem] text-center text-[.84rem] font-bold text-[#3e2c1d]">{f.label}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setStep(0);
          }}
          className="rounded-full border border-[#e5c79d] px-3 py-1.5 text-[.72rem] font-extrabold text-[#8a4508] transition-colors hover:bg-[#f6e3c8]"
        >
          <Shuffle className="mr-1 inline h-3 w-3" /> Reset
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(SEL_FRAMES.length - 1, s + 1))}
          className="rounded-full border border-[#e5c79d] px-3 py-1.5 text-[.72rem] font-extrabold text-[#8a4508] transition-colors hover:bg-[#f6e3c8]"
        >
          Step
        </button>
        <button
          type="button"
          onClick={() => {
            if (step >= SEL_FRAMES.length - 1) setStep(0);
            setPlaying((p) => !p);
          }}
          className="rounded-full px-4 py-1.5 text-[.72rem] font-extrabold text-white shadow-md"
          style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)" }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <p className="mt-3 text-center text-[.72rem] leading-relaxed text-muted-warm">
        green = finalised · red = the minimum being scanned · amber = the slot about to swap
      </p>
    </div>
  );
}

const SEL_VARIANTS = [
  {
    icon: ArrowDown,
    name: "Minimum selection sort",
    tag: "classical",
    line: "Searches for the smallest element starting from the beginning — minimum elements land at the front, one per pass.",
  },
  {
    icon: ArrowUp,
    name: "Maximum selection sort",
    tag: "backwards",
    line: "Starts from the last position and works backward — maximum elements land at the end, one per pass.",
  },
  {
    icon: ArrowRight,
    name: "Bidirectional selection sort",
    tag: "both ends",
    line: "Finds the minimum from the front and the maximum from the back in a single pass — passes halve, comparisons don't.",
  },
];

export function AtbSelectionSortSection() {
  return (
    <Section id="selectionsort">
      <SectionHead
        eyebrow={eyebrowOf("selectionsort")}
        title={
          <>
            Select it, <span className="grad-text">swap it home</span>
          </>
        }
        lead="Selection sort picks one element per pass — the minimum of everything still unsorted — and swaps it into its final position. One element finalised per pass, exactly one swap per pass."
      />

      <ReadStep n="1" title="The core loop" sub="Assume the first unsorted slot holds the minimum. Compare with everything to its right; when something smaller appears, mark it. After the sweep, swap the marked minimum with the slot — then step forward one slot." />

      <SelPlayer />

      <ReadStep n="2" title="The worked example, by hand" sub="The lecture's array: [10, 5, 8, 4, 3, 2] — four passes, four swaps, sorted." />
      <Reveal>
        <div className="card-warm lift p-5">
          <div className="grid gap-2.5">
            {[
              { pass: "Pass 1", find: "minimum of all six = 2", do: "swap 2 ↔ 10", after: "[2, 5, 8, 4, 3, 10]" },
              { pass: "Pass 2", find: "minimum from position 2 = 3", do: "swap 3 ↔ 5", after: "[2, 3, 8, 4, 5, 10]" },
              { pass: "Pass 3", find: "minimum from position 3 = 4", do: "swap 4 ↔ 8", after: "[2, 3, 4, 8, 5, 10]" },
              { pass: "Pass 4", find: "minimum from position 4 = 5", do: "swap 5 ↔ 8", after: "[2, 3, 4, 5, 8, 10]" },
            ].map((r, i) => (
              <motion.div
                key={r.pass}
                className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2 sm:grid-cols-[auto_1fr_auto_1fr]"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
              >
                <span className="font-mono text-[.68rem] font-extrabold text-[#c2410c]">{r.pass}</span>
                <span className="text-[.8rem] text-[#2b2014]">{r.find}</span>
                <span className="text-[.78rem] font-bold text-[#b45309] sm:text-right">{r.do}</span>
                <span className="font-mono text-[.8rem] font-bold text-[#5d7a2e]">{r.after}</span>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-center text-[.8rem] font-bold text-[#3e2c1d]">Final result — the array is sorted after n−1 passes.</p>
        </div>
      </Reveal>

      <ReadStep n="3" title="Three variants, one complexity" sub="Minimum, maximum, bidirectional — the direction changes, the O(n²) bill never does." />
      <div className="grid gap-4 lg:grid-cols-3">
        {SEL_VARIANTS.map((v, i) => (
          <Reveal key={v.name} delay={i * 120}>
            <div className="card-warm lift flex h-full flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.15)" }}>
                  <v.icon className="h-4 w-4 text-[#b45309]" />
                </span>
                <div>
                  <h3 className="text-[.95rem] font-extrabold leading-tight text-[#3e2c1d]">{v.name}</h3>
                  <p className="text-[.68rem] font-bold uppercase tracking-[.14em] text-[#a16207]">{v.tag}</p>
                </div>
              </div>
              <p className="mt-3 text-[.84rem] leading-relaxed text-[#2b2014]">{v.line}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <Callout kind="why" title="Why bidirectional doesn't improve the complexity">
          Passes drop to half — but every pass still has to compare from both ends toward the middle, so the{" "}
          <strong>total number of comparisons stays the same</strong>. O(n²) is O(n²), whichever direction you sweep.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="Selection vs bubble — same O(n²), different swap bill" sub="Both are quadratic; the difference is how many swaps each pass performs." />
      <Reveal>
        <div className="card-warm lift overflow-hidden p-0">
          <div className="grid grid-cols-[1fr_1fr_1.4fr] gap-px bg-[#f3e2c8] text-[.8rem]">
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Aspect</div>
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Bubble sort</div>
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Selection sort</div>
            <div className="bg-[#fffaf1] px-3 py-2 font-bold text-[#3e2c1d]">Complexity</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">O(n²)</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">O(n²) — all variants</div>
            <div className="bg-[#fffaf1] px-3 py-2 font-bold text-[#3e2c1d]">Swaps per pass</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">up to n−1 — an element can hop many times</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">exactly ONE — after the minimum is found</div>
            <div className="bg-[#fffaf1] px-3 py-2 font-bold text-[#3e2c1d]">Guaranteed after a pass</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">largest unsorted element bubbles to the end</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">smallest unsorted element selected to the front</div>
            <div className="bg-[#fffaf1] px-3 py-2 font-bold text-[#3e2c1d]">Verdict</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">simplest possible idea</div>
            <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">more swap-efficient — still impractical at scale</div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <p className="text-center text-[.8rem] leading-relaxed text-muted-warm">
          Alphabetical data works identically — compare letters lexicographically (A &lt; B &lt; C … &lt; Z), select the
          earliest, swap it home.
        </p>
      </Reveal>

      <Reveal className="mt-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Selection sort, classical form: what exactly happens in one pass?"
            options={[
              "Adjacent pairs are compared and swapped wherever the left is larger",
              "The minimum of the unsorted portion is found and swapped with the first unsorted slot",
              "Each element is inserted into its correct position among the sorted ones",
              "The list is split in half and the halves are merged",
            ]}
            answer={1}
            explain="Selection = SELECT one element per pass: assume the first unsorted slot is the minimum, sweep the rest, then perform exactly one swap. Adjacent-compare-and-swap is bubble sort; insert-into-the-sorted-portion is insertion sort."
            source="Lecture 26 · selection sort"
          />
          <Quiz
            q="Sorting [10, 5, 8, 4, 3, 2]: what does the array look like after Pass 2?"
            options={["[2, 5, 8, 4, 3, 10]", "[2, 3, 8, 4, 5, 10]", "[2, 3, 4, 5, 8, 10]", "[5, 10, 8, 4, 3, 2]"]}
            answer={1}
            explain="Pass 1 swaps the global minimum 2 with 10 → [2, 5, 8, 4, 3, 10]. Pass 2 finds the minimum of positions 2–6 (the 3) and swaps it with 5 → [2, 3, 8, 4, 5, 10]. Two slots finalised, four comparisons' worth of scanning still ahead."
            source="Lecture 26 · worked example"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Trace it on paper"
          items={[
            { q: "Run maximum selection sort on [4, 9, 1, 7]. Show the array after every pass and count the swaps.", hint: "Pass 1: max 9 → end. Pass 2: max 7 → second-from-end. Two swaps, done." },
            { q: "Selection sort performs at most n−1 swaps for n elements. Why can bubble sort need far more for the same list?", hint: "Bubble hops an element right by one position at a time — up to n−1 hops for a single element in one pass." },
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>Selection sort = <strong>select one element per pass</strong>, place it in its correct position through swapping.</>,
            <>Exactly <strong>one swap per pass</strong> — the swap-efficient sibling of bubble sort.</>,
            <>Minimum, maximum and bidirectional variants all keep <strong>O(n²) time complexity</strong>.</>,
            <>Great for <strong>education and small datasets</strong>; avoid it for larger lists despite the tidy swap count.</>,
          ]}
        />
      </Reveal>
    


      <AtbStepper title="What happens next? — selection sort selects before it swaps" steps={[
          {
            label: "Assume the first unsorted element is the minimum. Scan the rest.",
            detail: "Comparison happens BEFORE any swapping — the bubble-sort contrast.",
            frame: <AtbCells values={[64, 25, 12, 22]} tones={["active", "idle", "idle", "idle"]} labels={["assumed min", "", "", ""]} />,
          },
          {
            label: "12 is the true minimum — MARK it, but do not swap yet.",
            detail: "Marking without swapping is the selection discipline.",
            frame: <AtbCells values={[64, 25, 12, 22]} tones={["idle", "idle", "twin", "idle"]} labels={["", "", "true min", ""]} />,
          },
          {
            label: "One swap: 12 takes the first unsorted position, 64 moves to where 12 was.",
            detail: "One swap per pass — fewer swaps than bubble sort, but still extensive comparisons.",
            frame: <AtbCells values={[12, 25, 64, 22]} tones={["done", "idle", "idle", "idle"]} labels={["sorted", "", "", ""]} />,
          },
          {
            label: "Repeat on the shrinking unsorted portion.",
            detail: "O(n²) — comparable to bubble sort — but the right pick when swaps are expensive.",
            frame: <AtbCells values={[12, 22, 25, 64]} tones={["done", "done", "done", "done"]} />,
          },
        ]} />
    
      <AtbFigure notice="the border between the sorted prefix and the unsorted suffix advances exactly one position per pass — one swap per pass, everything else is comparison.">
        <svg viewBox="0 0 620 130" className="h-auto w-full" role="img" aria-label="Selection sort regions: a sorted prefix of three cells, the current minimum marked in the unsorted suffix, and the swap target at the border">
          <defs>
            <marker id="atbSel26" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
          </defs>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={40 + i * 92} y={40} width={80} height={38} rx={7} fill="#eef4dd" stroke="#7c9a3e" />
              <text x={80 + i * 92} y={64} textAnchor="middle" fontSize={13} fontWeight={800} fill="#3c521b">{[12, 22, 25][i]}</text>
            </g>
          ))}
          {[3, 4, 5].map((i) => (
            <g key={i}>
              <rect x={40 + i * 92} y={40} width={80} height={38} rx={7} fill="#fffaf1" stroke="#e9d7bf" />
              <text x={80 + i * 92} y={64} textAnchor="middle" fontSize={13} fontWeight={800} fill="#2b2014">{[64, 30, 45][i]}</text>
            </g>
          ))}
          <rect x={316} y={40} width={80} height={38} rx={7} fill="#f5c889" stroke="#c2410c" strokeWidth={2} />
          <text x={356} y={64} textAnchor="middle" fontSize={13} fontWeight={900} fill="#2b2014">30</text>
          <text x={356} y={96} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#c2410c">marked min — no swap yet</text>
          <path d="M356 40 C 330 20 280 20 262 36" stroke="#c2410c" strokeWidth={1.8} fill="none" markerEnd="url(#atbSel26)" strokeDasharray="5 4" />
          <text x={176} y={26} textAnchor="middle" fontSize={10} fontWeight={800} fill="#44621d">sorted prefix — grows one cell per pass</text>
          <text x={520} y={26} textAnchor="end" fontSize={10} fontWeight={800} fill="#8a6b45">unsorted suffix</text>
          <text x={120} y={110} fontSize={9.5} fontWeight={700} fill="#8a6b45">the swap fires only once the whole suffix has been compared</text>
        </svg>
      </AtbFigure>
    </Section>
  );
}

/* ============================================================
   MODULE 4 · INSERTION SORT (id="insertionsort") — Lecture 27
   ============================================================ */

const INS_START = [10, 5, 8, 4, 3, 2];

function insPasses(): { arr: number[]; key?: number; label: string; sorted: number }[] {
  const frames: { arr: number[]; key?: number; label: string; sorted: number }[] = [
    { arr: [...INS_START], label: "Start — the first element is already 'sorted'", sorted: 1 },
  ];
  const arr = [...INS_START];
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    frames.push({ arr: [...arr], key: i, label: `Pass ${i} — key is ${key}; compare leftward`, sorted: i });
    let j = i - 1;
    let moved = 0;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      moved++;
    }
    arr[j + 1] = key;
    frames.push({ arr: [...arr], key: j + 1, label: `Pass ${i} — ${moved === 0 ? "already in place" : `${moved} element${moved > 1 ? "s" : ""} move right; ${key} drops in`}`, sorted: i + 1 });
  }
  frames.push({ arr: [...arr], label: "Sorted — every key found its home", sorted: arr.length });
  return frames;
}
const INS_FRAMES = insPasses();

function InsPlayer() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => {
      setStep((s) => {
        if (s >= INS_FRAMES.length - 1) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 1100);
    return () => clearInterval(t);
  }, [playing]);

  const f = INS_FRAMES[step];
  return (
    <div className="card-warm lift p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="chip">The insertion machine · [10, 5, 8, 4, 3, 2]</span>
        <span className="text-[.72rem] font-bold text-muted-warm">
          frame {step + 1}/{INS_FRAMES.length}
        </span>
      </div>
      <div className="mt-4 flex items-end gap-2" style={{ minHeight: 120 }}>
        {f.arr.map((v, i) => {
          const isSorted = i < f.sorted;
          const isKey = f.key === i;
          return (
            <motion.div
              key={`${f.label}-${i}`}
              layout
              className="flex w-full flex-col items-center gap-1"
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <motion.div
                className="flex w-full items-end justify-center rounded-lg"
                style={{
                  height: `${v * 8}px`,
                  background: isKey ? "#c2410c" : isSorted ? "#7c9a3e" : "#f3e2c8",
                }}
                animate={isKey ? { y: [0, -8, 0] } : { y: 0 }}
                transition={{ duration: 0.7, repeat: isKey ? Infinity : 0 }}
              >
                <span className="pb-1 text-[.78rem] font-extrabold" style={{ color: isKey || isSorted ? "#fff8ec" : "#3e2c1d" }}>
                  {v}
                </span>
              </motion.div>
              <span className="font-mono text-[.6rem] text-[#a08568]">{i}</span>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-3 min-h-[1.4rem] text-center text-[.84rem] font-bold text-[#3e2c1d]">{f.label}</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => {
            setPlaying(false);
            setStep(0);
          }}
          className="rounded-full border border-[#e5c79d] px-3 py-1.5 text-[.72rem] font-extrabold text-[#8a4508] transition-colors hover:bg-[#f6e3c8]"
        >
          <Shuffle className="mr-1 inline h-3 w-3" /> Reset
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(INS_FRAMES.length - 1, s + 1))}
          className="rounded-full border border-[#e5c79d] px-3 py-1.5 text-[.72rem] font-extrabold text-[#8a4508] transition-colors hover:bg-[#f6e3c8]"
        >
          Step
        </button>
        <button
          type="button"
          onClick={() => {
            if (step >= INS_FRAMES.length - 1) setStep(0);
            setPlaying((p) => !p);
          }}
          className="rounded-full px-4 py-1.5 text-[.72rem] font-extrabold text-white shadow-md"
          style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)" }}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <p className="mt-3 text-center text-[.72rem] leading-relaxed text-muted-warm">
        red = the key being inserted · green = the sorted portion · grey = still untouched
      </p>
    </div>
  );
}

const INS_USECASES = [
  { icon: GraduationCap, title: "New item in a sorted list", line: "A new student joins an alphabetically ordered roster — insertion finds the slot without a full re-sort." },
  { icon: Briefcase, title: "E-commerce categories", line: "Inventory already sorted by category; new products insert straight into their subcategory position." },
  { icon: Sparkles, title: "Partially sorted data", line: "When most of the list is already in order and only a few elements are out of place, insertion barely works." },
  { icon: Timer, title: "Dynamic data arrival", line: "Data arrives sequentially and the list must stay sorted in real time — insertion is the natural fit." },
];

export function AtbInsertionSortSection() {
  return (
    <Section id="insertionsort" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("insertionsort")}
        title={
          <>
            Movement, <span className="grad-text">not swapping</span>
          </>
        }
        lead="Bubble and selection swap; insertion moves. Pick the next key, shove everything larger one slot to the right, drop the key into the gap. The left portion is always sorted — the algorithm only ever extends it."
      />

      <ReadStep n="1" title="The five steps" sub="Start from the second item — the first element is assumed sorted." dark />
      <Reveal>
        <div className="card-warm p-5">
          <div className="grid gap-2.5 md:grid-cols-5">
            {[
              "Take the second item as the KEY; compare it with the items on its left",
              "Move every element LARGER than the key one position to the right",
              "Keep comparing until something smaller appears — or the list begins",
              "INSERT the key at the vacant position",
              "Repeat for each subsequent element until the whole list is sorted",
            ].map((s, i) => (
              <motion.div
                key={s}
                className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12 }}
              >
                <span className="font-mono text-[.66rem] font-extrabold text-[#c2410c]">STEP {i + 1}</span>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-[#2b2014]">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="The machine" sub="[10, 5, 8, 4, 3, 2] — watch each key lift, its larger neighbours slide right, and it drop into place." dark />
      <Reveal>
        <InsPlayer />
      </Reveal>

      <ReadStep n="3" title="The lecture walkthrough" sub="Same array, all five passes, movements counted." dark />
      <Reveal>
        <div className="card-warm p-5">
          <div className="grid gap-2.5">
            {[
              { pass: "Pass 1", key: "5", move: "10 moves right", after: "[5, 10, 8, 4, 3, 2]" },
              { pass: "Pass 2", key: "8", move: "10 moves right", after: "[5, 8, 10, 4, 3, 2]" },
              { pass: "Pass 3", key: "4", move: "10, 8, 5 move right", after: "[4, 5, 8, 10, 3, 2]" },
              { pass: "Pass 4", key: "3", move: "all larger elements move right", after: "[3, 4, 5, 8, 10, 2]" },
              { pass: "Pass 5", key: "2", move: "everything moves right", after: "[2, 3, 4, 5, 8, 10]" },
            ].map((r, i) => (
              <motion.div
                key={r.pass}
                className="grid grid-cols-[auto_auto_1fr_1fr] items-center gap-x-3 gap-y-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <span className="font-mono text-[.68rem] font-extrabold text-[#c2410c]">{r.pass}</span>
                <span className="text-[.78rem] font-extrabold text-[#3e2c1d]">key {r.key}</span>
                <span className="text-[.8rem] text-[#2b2014]">{r.move}</span>
                <span className="font-mono text-[.8rem] font-bold text-[#5d7a2e]">{r.after}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="4" title="Three variants, same O(n²)" sub="Direction changes the choreography — never the complexity class." dark />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Minimum insertion sort", line: "Classical: minimum elements land at the beginning; larger elements move right; starts from the front." },
            { name: "Maximum insertion sort", line: "Maximum elements land at the end; smaller elements move left; starts from the second item from the end — the mirror image." },
            { name: "Bi-directional insertion sort", line: "Both ends at once: minimum and maximum found in a single pass, placed at their respective correct positions." },
          ].map((v, i) => (
            <Reveal key={v.name} delay={i * 120}>
              <div className="card-warm h-full p-5">
                <h3 className="font-extrabold text-[#f5e6cd]">{v.name}</h3>
                <p className="mt-2 text-[.84rem] leading-relaxed text-[#e9d7bf]">{v.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <ReadStep n="5" title="Where insertion sort actually wins" sub="O(n²) rules out large random lists — but four scenarios make it the right tool." dark />
      <div className="grid gap-3 sm:grid-cols-2">
        {INS_USECASES.map((u, i) => (
          <Reveal key={u.title} delay={(i % 2) * 110}>
            <div className="card-warm flex h-full items-start gap-3 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "rgba(124,154,62,.2)" }}>
                <u.icon className="h-4 w-4 text-[#dcebc2]" />
              </span>
              <div>
                <p className="text-[.88rem] font-extrabold text-[#f5e6cd]">{u.title}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#cbb392]">{u.line}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Callout dark kind="warn" title="The disadvantage">
            Inefficient for large, randomly ordered lists — O(n²) means comparisons and movements grow by the square
            (list of 4 → 9 operations, 5 → 16, 6 → 25…). Multiple comparisons and movements per unsorted element.
          </Callout>
          <Callout dark kind="insight" title="The name is the algorithm">
            Insertion sort takes an element and <strong>inserts it into its proper place</strong> within the sorted
            portion. Small lists: efficient. Nearly-sorted lists: excellent. Sorted lists receiving new arrivals:
            unbeatable.
          </Callout>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Sorting [10, 5, 8, 4, 3, 2] by insertion: what does Pass 3 produce?"
            options={["[5, 8, 10, 4, 3, 2]", "[4, 5, 8, 10, 3, 2]", "[3, 4, 5, 8, 10, 2]", "[5, 10, 8, 4, 3, 2]"]}
            answer={1}
            explain="Pass 3 takes key = 4: every element larger than 4 (10, 8, 5) moves one position right, and 4 is inserted at the front of the sorted portion → [4, 5, 8, 10, 3, 2]."
            source="Lecture 27 · walkthrough"
          />
          <Quiz
            q="A sorted roster receives one new student. Which sort fits best — and why?"
            options={[
              "Bubble sort — it handles any order",
              "Insertion sort — a nearly-sorted list needs only a short leftward comparison for the new key",
              "Selection sort — one swap per pass",
              "Any O(n²) sort works equally well here",
            ]}
            answer={1}
            explain="This is insertion sort's signature use case: inserting new elements into already-sorted lists. The new key compares leftward only until it finds its slot — the rest of the list is never touched. Bubble would churn the whole array; selection would re-scan everything."
            source="Lecture 27 · use cases"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>Insertion sort <strong>moves</strong> elements to create space — it does not swap them.</>,
            <>Every variant — minimum, maximum, bi-directional — stays <strong>O(n²)</strong>.</>,
            <>It shines on <strong>small, partially sorted, or dynamically growing</strong> lists.</>,
            <>New-item insertion into a sorted list is <strong>its home turf</strong> — no full re-sort needed.</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Trace it on paper"
          items={[
            { q: "Run minimum insertion sort on [7, 3, 9, 1]. List the array after each pass and count total movements.", hint: "Pass 1: key 3, 7 moves right. Pass 2: key 9 stays. Pass 3: key 1 — 9, 7, 3 all move right." },
            { q: "Why is insertion sort 'significantly useful for inserting new elements into already sorted lists' while bubble sort is not?", hint: "Insertion touches only the leftward path of one key; bubble sweeps every adjacent pair of the whole list each pass." },
          ]}
        />
      </Reveal>


      <AtbStepper
        title="What happens next? — the key slides home"
        steps={[
          {
            label: "The sorted portion is the first element. The KEY is the second element: 25.",
            detail: "Start with the second element as the first key.",
            frame: <AtbCells values={[40, 25, 12, 22]} tones={["done", "active", "idle", "idle"]} labels={["sorted", "key", "", ""]} />,
          },
          {
            label: "Compare the key right-to-left against the sorted part: 25 < 40 → shift 40 right.",
            detail: "Movement, not swapping — elements shift one position right.",
            frame: <AtbCells values={[40, 25, 12, 22]} tones={["active", "ghost", "idle", "idle"]} labels={["shifts →", "", "", ""]} />,
          },
          {
            label: "Insert the key into its correct slot: [25, 40 | 12, 22].",
            detail: "The sorted portion grew by one — like shelving books in a library.",
            frame: <AtbCells values={[25, 40, 12, 22]} tones={["done", "done", "idle", "idle"]} />,
          },
          {
            label: "Next keys: 12, then 22 — each slides into place. Sorted: [12, 22, 25, 40].",
            detail: "O(n²) with fewer operations on nearly-sorted data — the growing-dataset favourite.",
            frame: <AtbCells values={[12, 22, 25, 40]} tones={["done", "done", "done", "done"]} />,
          },
        ]}
      />
    
      <AtbFigure notice="the key is lifted out once and the sorted side shifts rightward beneath it — movement, never swapping, until the key drops into its slot.">
        <svg viewBox="0 0 620 140" className="h-auto w-full" role="img" aria-label="Insertion sort key slide: the key 25 lifted above the row, the sorted value 40 shifting right, an empty slot opening where the key will land">
          <defs>
            <marker id="atbIns27" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#7c9a3e" /></marker>
          </defs>
          <circle cx={310} cy={26} r={17} fill="#f5c889" stroke="#c2410c" strokeWidth={2} />
          <text x={310} y={31} textAnchor="middle" fontSize={13} fontWeight={900} fill="#2b2014">25</text>
          <text x={340} y={31} fontSize={10} fontWeight={800} fill="#c2410c">← the key, lifted</text>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={150 + i * 92} y={56} width={80} height={38} rx={7} fill={i === 0 ? "#fffaf1" : "#eef4dd"} stroke={i === 0 ? "#e9d7bf" : "#7c9a3e"} />
              <text x={190 + i * 92} y={80} textAnchor="middle" fontSize={13} fontWeight={800} fill={i === 0 ? "#e0d5c2" : "#3c521b"}>{[40, 40, 12][i]}</text>
            </g>
          ))}
          <rect x={426} y={56} width={80} height={38} rx={7} fill="#fffaf1" stroke="#e9d7bf" strokeDasharray="5 4" />
          <text x={466} y={80} textAnchor="middle" fontSize={13} fontWeight={800} fill="#a08568">22</text>
          <path d="M190 50 H 276" stroke="#7c9a3e" strokeWidth={2} fill="none" markerEnd="url(#atbIns27)" />
          <text x={233} y={118} textAnchor="middle" fontSize={10} fontWeight={800} fill="#44621d">40 shifts right — one position, one movement</text>
          <text x={520} y={80} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a6b45">unsorted</text>
          <text x={120} y={80} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#44621d">sorted →</text>
        </svg>
      </AtbFigure>
    </Section>
  );
}

