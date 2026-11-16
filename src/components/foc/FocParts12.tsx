"use client";

/* ============================================================
   FocParts12 — the FoC rebuild, file 12.

   #question-types  (Lecture 29 — Type of Questions in the
                     Final Examination)

   The initial exam preview: four written answer shapes and
   their mark budgets, the Python trio (predict / debug /
   complete), the key-topic recap, and the administration.
   Superseded by Lecture 34's binding pattern in FocParts17
   under #final-exam.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Box,
  Check,
  ClipboardList,
  CornerDownLeft,
  Layers,
  Megaphone,
  PenLine,
  Percent,
  Route,
  Scale,
  ScrollText,
  Sigma,
  Terminal,
  Trophy,
  Wand,
  X,
} from "lucide-react";
import {
  Callout,
  CodeBlock,
  KV,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* Static SVG — the "answer shape" ladder: bar length = marks. */

const LADDER_ROWS = [
  { label: "Very short answer", sub: "1–2 sentences + one example", mark: "1–2 m", w: 112, fill: "#ea580c" },
  { label: "Short answer", sub: "3–4 sentences, point-based", mark: "3 m", w: 168, fill: "#c2410c" },
  { label: "Long answer", sub: "concise parts, ≤ 3 lines each", mark: "5 m", w: 280, fill: "#b45309" },
  { label: "Diagram · flowchart · pseudocode", sub: "equal weightage to long answers", mark: "5 m", w: 280, fill: "#d97706" },
];

function AnswerShapeLadder() {
  return (
    <svg
      viewBox="0 0 640 216"
      className="w-full max-w-2xl"
      role="img"
      aria-label="The answer-shape ladder: very short answers carry 1 to 2 marks, short answers carry 3, long answers carry 5, and diagram, flowchart or pseudocode questions carry 5 marks with equal weightage"
    >
      <line x1={252} y1={10} x2={252} y2={206} stroke="#ecd9bd" strokeWidth={2} />
      {LADDER_ROWS.map((r, i) => {
        const y = 10 + i * 52;
        return (
          <g key={r.label}>
            <text x={242} y={y + 12} textAnchor="end" fontSize={13} fontWeight={700} fill="#3e2c1d">
              {r.label}
            </text>
            <text x={242} y={y + 27} textAnchor="end" fontSize={10.5} fill="#7a5b39">
              {r.sub}
            </text>
            <rect x={252} y={y + 2} width={r.w} height={26} rx={7} fill={r.fill} opacity={0.92} />
            <rect x={252 + r.w + 10} y={y + 1} width={56} height={28} rx={14} fill="#fffdf9" stroke="#e8cfa5" />
            <text x={252 + r.w + 38} y={y + 20} textAnchor="middle" fontSize={11.5} fontWeight={800} fill="#b45309">
              {r.mark}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* Key-topic recap cards (Lecture 29 — the practical core) */

const KEY_TOPICS = [
  {
    icon: Box,
    title: "Dictionaries",
    lines: [
      "Collection of key-value pairs in curly braces — {key: value, key: value}",
      "Access values with dictionary[key]",
      "Add or modify: dictionary[new_key] = value — delete with del",
      "Loop with .items(), .keys() and .values()",
      "Nesting: dictionaries inside lists, lists inside dictionaries",
    ],
  },
  {
    icon: Wand,
    title: "Functions",
    lines: [
      "def function_name(parameters): — the colon is required",
      "Positional and keyword arguments; defaults must appear LAST in the parameter list",
      "return sends values back to the function call",
      "Missing arguments → TypeError",
      "Misplaced default parameters → SyntaxError",
    ],
  },
  {
    icon: Layers,
    title: "Classes",
    lines: [
      "class ClassName: opens the blueprint",
      "__init__() runs automatically when an instance is created",
      "Inheritance: class ChildClass(ParentClass): — the child inherits everything",
      "Docstrings: documenting class and method purpose is the developer's responsibility",
      "Blueprint concept: many objects, same structure, different values",
    ],
  },
];

function KeyTopicCards() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {KEY_TOPICS.map((t, i) => {
        const Icon = t.icon;
        return (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="card-warm p-5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
              <Icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            </span>
            <p className="mt-2 text-lg font-black leading-tight text-[#3e2c1d]">{t.title}</p>
            <ul className="mt-2 grid gap-1.5 text-[.8rem] leading-relaxed text-muted-warm">
              {t.lines.map((line) => (
                <li key={line}>• {line}</li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ============================================================
   LECTURE 29 — #question-types
   ============================================================ */

export function QuestionTypesSection() {
  return (
    <Section id="question-types">
      <SectionHead
        eyebrow="Lecture 29 · the exam, decoded"
        title={
          <>
            Type of questions in the <span className="grad-text">final examination</span>
          </>
        }
        lead="This lecture decodes every question format the final paper can ask — the four written shapes with their mark budgets, the Python trio of predict, debug and complete, the marking rules, and the exact syllabus edges — so nothing on exam day surprises you."
      />

      {/* Prominent banner — Lecture 34 supersedes this preview */}
      <Reveal>
        <div
          className="relative overflow-hidden rounded-2xl p-5 md:p-6"
          style={{
            background: "linear-gradient(120deg,#9a3412,#c2410c 45%,#ea580c)",
            boxShadow: "0 20px 46px -20px rgba(194,65,12,.6)",
          }}
        >
          <div className="flex items-start gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,246,232,.16)", border: "1px solid rgba(255,214,160,.4)" }}
            >
              <Megaphone className="h-5 w-5 text-white" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[.72rem] font-extrabold uppercase tracking-[.18em] text-[#ffd9a3]">
                Latest official update → see Lecture 34
              </p>
              <p className="mt-1.5 text-[.95rem] leading-relaxed text-[#fff3e2]">
                This lecture was the <strong>initial exam preview</strong>. The final updated pattern —{" "}
                <strong>2 hours · 60 marks · 25 questions</strong> — now lives in Lecture 34; jump there for the
                binding rules.
              </p>
              <a
                href="#final-exam"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[.8rem] font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: "rgba(255,246,232,.16)", border: "1px solid rgba(255,214,160,.45)" }}
              >
                Jump to Lecture 34 — course assessment &amp; examination guidelines
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Overview — the answer-shape ladder */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">First, the overview</p>
          <h3 className="mt-2 text-2xl font-bold text-[#3e2c1d]">The answer-shape ladder</h3>
          <p className="mt-1 text-[.9rem] leading-relaxed text-muted-warm">
            Four formats share the whole written paper — bar length is the marks each one carries.
          </p>
          <div className="mt-5 flex justify-center">
            <AnswerShapeLadder />
          </div>
        </div>
      </Reveal>

      <ReadStep n="1" title="Very short answer — 1–2 marks" sub="One to two sentences, one concrete example — and True/False always arrives with a justification" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
          <div className="card-warm p-6">
            <p className="eyebrow">The shape of the answer</p>
            <ul className="mt-4 grid gap-2.5 text-[.92rem] leading-relaxed text-[#2b2014]">
              <li>• Define concepts like <strong>&ldquo;metadata&rdquo;</strong> or <strong>&ldquo;dictionary&rdquo;</strong> — crisp, not chatty.</li>
              <li>• One to two sentence answers, each carrying <strong>one concrete example</strong>.</li>
              <li>• Concise, <strong>point-based responses</strong> rather than lengthy paragraphs.</li>
              <li>• Suited to <strong>1–2 mark questions</strong> — the paper&rsquo;s bread and butter.</li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <p className="eyebrow">True/False — with reasoning</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl p-4 text-center" style={{ background: "#fdf1e0", border: "1px solid #e8b878" }}>
                <p className="text-3xl font-black text-[#c2410c]">0.5</p>
                <p className="mt-1 text-[.78rem] font-semibold leading-snug text-[#7a5b39]">marks for the True/False answer itself</p>
              </div>
              <div className="rounded-xl p-4 text-center" style={{ background: "#f7ecdc", border: "1px solid #e8cfa5" }}>
                <p className="text-3xl font-black text-[#b45309]">1.5</p>
                <p className="mt-1 text-[.78rem] font-semibold leading-snug text-[#7a5b39]">marks for the justification</p>
              </div>
            </div>
            <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
              A bare True/False is worth 0.5 of 2 — the <strong>reasoning is the question</strong>. One line of why,
              every time.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Short answer — 3 marks" sub="Three to four sentences, point-based, with specific examples from the lectures" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <p className="eyebrow">What earns the marks</p>
            <ul className="mt-4 grid gap-2.5 text-[.92rem] leading-relaxed text-[#2b2014]">
              <li>• <strong>Three to four sentences</strong> with examples — no more.</li>
              <li>• Point-based format with <strong>clear differentiation</strong> between concepts.</li>
              <li>• Include <strong>specific examples from the lectures</strong>.</li>
              <li>• Structured points beat one long paragraph, every time.</li>
            </ul>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "#fbf3e3", borderLeft: "3px solid #c2410c" }}>
            <p className="text-[.7rem] font-extrabold uppercase tracking-[.16em] text-[#8a4508]">Sample question</p>
            <p className="mt-2 font-mono-warm text-[.92rem] leading-relaxed text-[#3e2c1d]">
              &ldquo;Differentiate cross-sectional data from panel data with one example each&rdquo;
            </p>
            <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
              Two definitions, two examples — four crisp points across three to four sentences.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Long answer — 5 marks" sub="Rare guests — at most 1–2 per paper, and concise beats long" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card-warm p-5 text-center">
            <p className="text-3xl font-black text-[#c2410c]">1–2</p>
            <p className="mt-1 text-[.82rem] font-bold text-[#3e2c1d]">per paper</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">maximum — long answers are not extensive</p>
          </div>
          <div className="card-warm p-5 text-center">
            <p className="text-3xl font-black text-[#c2410c]">≤ 3</p>
            <p className="mt-1 text-[.82rem] font-bold text-[#3e2c1d]">lines per part</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">multi-part questions with concise explanations</p>
          </div>
          <div className="card-warm p-5 text-center">
            <p className="text-3xl font-black text-[#c2410c]">15</p>
            <p className="mt-1 text-[.82rem] font-bold text-[#3e2c1d]">sentences</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">maximum sufficient for a 5-mark question</p>
          </div>
        </div>
        <Callout kind="insight" title="Quality and accuracy over quantity">
          <strong>&ldquo;Explain the five properties of an algorithm with examples&rdquo;</strong> is the model long
          answer: five named properties, one tight example each — never a wall of text. More sentences do not buy
          more marks.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="Diagrams, flowcharts & pseudocode" sub="Equal weightage to long answers — maximum 1–2 questions expected" />
      <Reveal>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="card-warm p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
              <Route className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            </span>
            <p className="mt-2 font-bold text-[#3e2c1d]">Flowchart</p>
            <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
              Algorithm logic drawn as boxes and arrows — e.g., the checker for odd and even numbers.
            </p>
          </div>
          <div className="card-warm p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
              <CornerDownLeft className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            </span>
            <p className="mt-2 font-bold text-[#3e2c1d]">Pseudocode</p>
            <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
              The logic demonstrated without exact Python syntax.
            </p>
          </div>
          <div className="card-warm p-5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
              <Box className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            </span>
            <p className="mt-2 font-bold text-[#3e2c1d]">Block diagram</p>
            <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
              Text and arrows — structured visual answers demonstrating understanding.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="5" title="Answer writing guidelines" sub="How structured answers earn better marks — and what the paper will never ask" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <p className="eyebrow">Recommended approaches</p>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#7c9a3e" }} aria-hidden />
                <span>Write answers in <strong>point-based format</strong> rather than paragraph form.</span>
              </li>
              <li className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#7c9a3e" }} aria-hidden />
                <span>Use <strong>block diagrams and flowcharts</strong> when appropriate.</span>
              </li>
              <li className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#7c9a3e" }} aria-hidden />
                <span>Include <strong>arrows to show relationships</strong>.</span>
              </li>
              <li className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#7c9a3e" }} aria-hidden />
                <span>Prioritize <strong>accuracy and keywords</strong> over lengthy text.</span>
              </li>
            </ul>
            <p className="mt-4 border-t border-[#f3e2c8] pt-3 text-[.82rem] leading-relaxed text-muted-warm">
              Better marks are awarded for structured, visual answers demonstrating clear understanding.
            </p>
          </div>
          <div className="rounded-2xl p-6" style={{ background: "#fbe9e4", border: "1px solid #e6a08c" }}>
            <p className="text-[.72rem] font-extrabold uppercase tracking-[.18em] text-[#8c2f2f]">
              What to avoid — the paper will never ask
            </p>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#5a2323]">
              <li className="flex gap-2.5">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8c2f2f" }} aria-hidden />
                <span>No <strong>MCQs</strong> (multiple choice questions).</span>
              </li>
              <li className="flex gap-2.5">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8c2f2f" }} aria-hidden />
                <span>No <strong>simple True/False without reasoning</strong>.</span>
              </li>
              <li className="flex gap-2.5">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8c2f2f" }} aria-hidden />
                <span>No <strong>fill-in-the-blanks</strong> or <strong>&ldquo;match the following&rdquo;</strong>.</span>
              </li>
              <li className="flex gap-2.5">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#8c2f2f" }} aria-hidden />
                <span>No <strong>unnecessarily lengthy passages</strong> or story-like content.</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      <ReadStep n="6" title="Predict the output" sub="Few lines of code in — the exact output out. No step-marking" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="case_precision.py"
            runnable={false}
            code={`course = "foundations of computing"

print(course.title())
print(course.upper())
print(course.lower())`}
            output={"Foundations Of Computing\nFOUNDATIONS OF COMPUTING\nfoundations of computing"}
            note="The paper grades THIS exact text. If the .title() output is written in lowercase or uppercase, the marks are gone — output-format accuracy is critical."
          />
          <div className="grid content-start gap-4">
            <Callout kind="warn" title="No step-marking">
              The answer must be correct — there is no credit for a partially right output. One wrong character in
              the case, and the question pays nothing.
            </Callout>
            <div className="card-warm p-5">
              <ul className="grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
                <li>• Few lines of Python code are given — determine the <strong>final output</strong>.</li>
                <li>• Pay attention to methods like <code className="font-mono-warm">.title()</code>,{" "}
                  <code className="font-mono-warm">.upper()</code> and <code className="font-mono-warm">.lower()</code>.</li>
                <li>• <strong>Accuracy in output format is critical</strong> — title case vs. uppercase is the classic trap.</li>
                <li>• The same three letters can print three different cases — know which method does which.</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="7" title="Error spotting & debugging" sub="Name the error AND its type — the type is where half the marks hide" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <p className="eyebrow">The task</p>
            <ul className="mt-4 grid gap-2.5 text-[.92rem] leading-relaxed text-[#2b2014]">
              <li>• Code arrives with <strong>missing colons</strong>, <strong>wrong indentation</strong> or{" "}
                <strong>index errors</strong> — find the fault.</li>
              <li>• Then <strong>specify its type</strong>: TypeError, IndentationError or IndexError.</li>
              <li>• Classic examples: missing colons in function and class definitions, incorrect indentation.</li>
            </ul>
            <p className="mt-4 text-[.72rem] font-extrabold uppercase tracking-[.16em] text-[#8a4508]">
              The three types to know cold
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {["TypeError", "IndentationError", "IndexError"].map((t) => (
                <span
                  key={t}
                  className="rounded-lg px-2.5 py-1 font-mono-warm text-[.74rem] font-bold"
                  style={{ background: "#f7ecdc", color: "#b45309" }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl p-3.5" style={{ background: "#f7ecdc", border: "1px solid #e8cfa5" }}>
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4" style={{ color: "#b45309" }} aria-hidden />
                  <p className="text-[.8rem] font-bold text-[#b45309]">Half marks</p>
                </div>
                <p className="mt-1 text-[.78rem] leading-relaxed text-[#7a5b39]">error identified, type not specified</p>
              </div>
              <div className="rounded-xl p-3.5" style={{ background: "#eef4dd", border: "1px solid #9ab86b" }}>
                <div className="flex items-center gap-1.5">
                  <Check className="h-4 w-4" style={{ color: "#44621d" }} aria-hidden />
                  <p className="text-[.8rem] font-bold text-[#44621d]">Full marks</p>
                </div>
                <p className="mt-1 text-[.78rem] leading-relaxed text-[#4a5c2e]">error identified AND correct type named</p>
              </div>
            </div>
          </div>
          <CodeBlock
            title="spot_the_type.py"
            runnable={false}
            code={`colours = ["rose", "amber", "mint"]
print(colours[3])`}
            output={"IndexError: list index out of range"}
            note="Spot it, then NAME it: describing the crash is half marks — writing IndexError is full marks."
          />
        </div>
      </Reveal>

      <ReadStep n="8" title="Code completion & pseudocode" sub="Whole missing lines, guided by the output — never a full program from scratch" />
      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
                <PenLine className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-[#3e2c1d]">Code completion</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li>• <strong>NOT</strong> full code writing in Python from scratch.</li>
              <li>• Whole lines are missing — <strong>not single words</strong>.</li>
              <li>• The <strong>output is provided</strong> to guide the missing line.</li>
              <li>• <strong>One-line or two-line completions</strong> are the sweet spot.</li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "#f7ecdc" }}>
                <Sigma className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-[#3e2c1d]">Pseudocode</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li>• Write the <strong>logic without exact Python syntax</strong>.</li>
              <li>• Example: use <strong>a loop instead of multiple print statements</strong>.</li>
              <li>• Focus on <strong>logic rather than formal Python syntax</strong>.</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="In a True/False-with-reasoning question, how are the marks split?"
            options={[
              "1 mark for the answer + 1 mark for the reasoning",
              "0.5 marks for the answer + 1.5 marks for the justification",
              "1.5 marks for the answer + 0.5 marks for the justification",
              "2 marks for the answer — the reasoning is unmarked",
            ]}
            answer={1}
            explain="0.5 marks go to the True/False answer itself and 1.5 marks to the justification. A bare True/False earns a quarter of the question — always write the why."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="You spot an IndexError but write only 'index error' without naming the type. How many marks?"
            options={[
              "Full marks — the error was found",
              "Half marks — the type must be named too",
              "Zero — only the exact type earns anything",
              "It depends on the length of the code",
            ]}
            answer={1}
            explain="Identifying the error without specifying its type earns half marks; full marks require the correct type — IndexError. Naming it costs exactly one word."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Rehearse the formats — write on paper"
          items={[
            {
              q: <>Write a <strong>three-sentence definition of a dictionary</strong> with one concrete example — point-based, no paragraphs.</>,
              hint: "a collection of key-value pairs in curly braces",
            },
            {
              q: <>Differentiate <strong>cross-sectional data from panel data</strong> in three to four sentences — one example each.</>,
            },
            {
              q: <>Redraw the <strong>odd/even checker flowchart from Lecture 5</strong> from memory — start, input, decision diamond, two outputs, stop.</>,
              hint: "the decision is n % 2 == 0",
            },
            {
              q: <>A three-line snippet is missing the colon after <code className="font-mono-warm">def</code>. Spot the error, name its type, and say whether it earns half or full marks.</>,
            },
            {
              q: <>A loop line is missing from a snippet whose output is printed underneath — write the <strong>one missing line</strong>, guided by the output.</>,
            },
          ]}
        />
      </Reveal>

      <ReadStep n="9" title="Key topics recap — the practical core" sub="Three compact cards; if any line feels foggy, that lecture needs one more watch" />
      <Reveal>
        <KeyTopicCards />
      </Reveal>

      <ReadStep n="10" title="Examination details" sub="The official numbers, straight from the lecture" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card-warm p-5">
            <ClipboardList className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">100</p>
            <p className="text-[.8rem] font-bold text-[#b45309]">total marks</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">may be scaled to 70 or 80 depending on weightage</p>
          </div>
          <div className="card-warm p-5">
            <Scale className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">35%</p>
            <p className="text-[.8rem] font-bold text-[#b45309]">passing marks</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">35% of the total marks is the pass line</p>
          </div>
          <div className="card-warm p-5">
            <Percent className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">60–70%</p>
            <p className="text-[.8rem] font-bold text-[#b45309]">final exam weightage</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">quizzes carry the remaining 30–40%</p>
          </div>
          <div className="card-warm p-5">
            <Trophy className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">Best</p>
            <p className="text-[.8rem] font-bold text-[#b45309]">quiz score</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">attempted both quizzes? the best score is recorded</p>
          </div>
        </div>
        <Callout kind="insight" title="No surprise questions">
          Only topics covered in <strong>recorded lectures and live sessions</strong> will appear. If it was not
          taught, it cannot be asked — the paper has no hidden agenda.
        </Callout>
      </Reveal>

      <ReadStep n="11" title="Syllabus boundaries" sub="Covered content only — nothing outside classroom instruction" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <ScrollText className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              <h3 className="text-lg font-bold text-[#3e2c1d]">The theoretical portion</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li>• The <strong>four pillars of foundations</strong>.</li>
              <li>• Including <strong>algorithms</strong> and <strong>data representation</strong>.</li>
              <li>• Plus <strong>computational thinking</strong>.</li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              <h3 className="text-lg font-bold text-[#3e2c1d]">The practical portion</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
              <li>• Python programming concepts.</li>
              <li>• <strong>Dictionaries</strong>, <strong>functions</strong> and <strong>classes</strong>.</li>
              <li>• The same three topics recapped one step above.</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <KV
            k="Covered content only"
            v="All questions are drawn from recorded lectures, live sessions, and the provided Python files."
          />
          <KV
            k="No external topics"
            v="No concepts beyond classroom instruction — nothing outside will be asked."
          />
          <KV
            k="Resource files"
            v="Python code files are available in the lecture resources section for practice."
          />
        </div>
      </Reveal>

      <ReadStep n="12" title="Preparation recommendations" sub="The instructor's own eight-point list — nothing on it is optional" />
      <Reveal>
        <Takeaways
          items={[
            <>Rewatch the <strong>recorded lectures</strong> for concept clarity.</>,
            <><strong>Download and execute</strong> the Python code files from the lecture resources.</>,
            <>Attend <strong>TA sessions</strong> for additional doubt resolution.</>,
            <>Practice with the <strong>provided Python code examples</strong>.</>,
            <>Focus on <strong>understanding rather than memorization</strong>.</>,
            <>Write answers in <strong>point format with examples</strong>.</>,
            <>Use <strong>diagrams and flowcharts</strong> to demonstrate understanding.</>,
            <><strong>Review error types</strong> — TypeError, IndentationError, IndexError — and their causes.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
