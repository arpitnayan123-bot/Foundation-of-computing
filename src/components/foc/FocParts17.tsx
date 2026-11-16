"use client";

/* ============================================================
   FocParts17 — the FoC rebuild, file 17. THE FINALE.

   #final-exam  (Lecture 34 — Course Assessment and Examination
                 Guidelines)

   Every official rule for the end term, on one page: the 60-40
   split, the bell curve, the 25-question blueprint (2 hours ·
   60 marks), the excluded-vs-included syllabus, learning
   material, exam-day notices and the instructor's prep tips.

   This is the UPDATED, binding pattern — it supersedes the
   initial preview given in Lecture 29 (#question-types).
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  ClipboardList,
  Compass,
  GraduationCap,
  Landmark,
  Megaphone,
  NotebookPen,
  PenLine,
  Percent,
  ScrollText,
  Sigma,
  Timer,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import {
  Callout,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   Static SVG — the paper as 25 squares: 20 ember (short
   answer, 2 marks each) + 5 gold (code output, 4 marks each).
   ============================================================ */

function PaperShape() {
  const qs = Array.from({ length: 25 }, (_, i) => i);
  return (
    <svg
      viewBox="0 0 760 100"
      className="w-full"
      role="img"
      aria-label="Paper shape: 20 short-answer questions worth 2 marks each, plus 5 code-output questions worth 4 marks each — 60 marks across 25 questions"
    >
      {qs.map((i) => (
        <rect
          key={i}
          x={8 + i * 30}
          y={6}
          width={26}
          height={26}
          rx={6}
          fill={i < 20 ? "#c2410c" : "#b45309"}
          stroke={i < 20 ? "#ea580c" : "#d97706"}
          strokeWidth={1}
        />
      ))}
      <rect x={8} y={62} width={13} height={13} rx={3.5} fill="#c2410c" />
      <text x={28} y={73} fontSize={12.5} fill="#e9d7bf">
        Short answer × 20 — 2 marks each = 40
      </text>
      <rect x={352} y={62} width={13} height={13} rx={3.5} fill="#b45309" />
      <text x={372} y={73} fontSize={12.5} fill="#e9d7bf">
        Code output × 5 — 4 marks each = 20
      </text>
      <text x={752} y={73} textAnchor="end" fontSize={12.5} fontWeight={700} fill="#f5c889">
        60 marks · 25 questions
      </text>
    </svg>
  );
}

/* ============================================================
   The bell curve — animated relative-grading bars (dark band).
   ============================================================ */

const BELL_ROWS = [
  {
    grade: "A",
    desc: "approximately 10% of the class earns the top grade",
    w: "26%",
    fill: "linear-gradient(90deg,#d97706,#f5c889)",
  },
  {
    grade: "B · B−",
    desc: "the majority of the class",
    w: "94%",
    fill: "linear-gradient(90deg,#c2410c,#ea580c)",
  },
  {
    grade: "C · C− · D",
    desc: "lower performers — still passing grades",
    w: "58%",
    fill: "linear-gradient(90deg,#ea580c,#f59e0b)",
  },
  {
    grade: "F",
    desc: "rare — only a significant gap below the class average",
    w: "10%",
    fill: "linear-gradient(90deg,#8c2f2f,#c2410c)",
  },
];

function BellCurve() {
  return (
    <div className="grid gap-5">
      {BELL_ROWS.map((r, i) => (
        <div key={r.grade}>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4">
            <span className="text-lg font-black text-[#f5e6cd]">{r.grade}</span>
            <span className="text-[.82rem] leading-snug text-[#b99a75]">{r.desc}</span>
          </div>
          <div className="mt-1.5 h-3.5 rounded-full" style={{ background: "rgba(255,220,170,.08)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: r.fill }}
              initial={{ width: 0 }}
              whileInView={{ width: r.w }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ============================================================
   Data — excluded question types, syllabus columns, notices
   ============================================================ */

const EXCLUDED_QT = [
  { t: "No Python code writing", d: "No logic or large programs to be written from scratch." },
  { t: "No debugging questions", d: "Nothing asks you to find or fix an error." },
  { t: "No pseudocode writing", d: "No pseudocode is required anywhere in the paper." },
  { t: "No scientific calculators", d: "Scientific calculators are not allowed in the examination." },
  { t: "Nothing outside the syllabus", d: "No questions beyond the prescribed syllabus." },
];

const EXCLUDED_TOPICS = [
  "Introduction to computing",
  "The pillars of computing (data · algorithm · input · output)",
  "Hardware — input & output devices",
  "Software — interpreter vs. compiler",
  "The DIKW model",
  "Data types — cross-sectional, time series, semi-structured",
  "Batch processing",
];

const INCLUDED_TOPICS = [
  "Foundations of programming",
  "Strings",
  "Lists",
  "Conditional statements",
  "Loops",
  "Dictionaries",
  "Functions — definitions, calls, arguments, parameters, default values, keyword arguments, multiple calls",
  "Classes — inheritance, class & instance attributes, methods, method overriding, __init__, self",
  "Modules — importing classes & methods, aliases",
];

const NOTICES = [
  { icon: Compass, t: "Exam center locations will be communicated soon." },
  { icon: ScrollText, t: "Admit cards will be provided before the examination." },
  { icon: Check, t: "No minimum attendance requirement is set for this semester." },
  { icon: Landmark, t: "The examination will be conducted in person, at designated exam centers." },
  { icon: PenLine, t: "Only a pen is allowed — no electronic devices or support materials." },
  { icon: GraduationCap, t: "The instructor will be present at the Raipur examination center." },
];

/* ============================================================
   LECTURE 34 — #final-exam
   ============================================================ */

export function FinalExamSection() {
  return (
    <Section id="final-exam" dark>
      <SectionHead
        dark
        eyebrow="Lecture 34 · the final word"
        title={
          <>
            Course assessment &amp; <span className="grad-text">examination guidelines</span>
          </>
        }
        lead="Every official rule for the end term, on one page — the 60–40 split, the bell curve, the 25-question blueprint, the binding syllabus, and the exam-day notices."
      />

      <ReadStep dark n="1" title="The 60–40 split" sub="Where this semester's evaluation weight actually sits" />
      <Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card-warm p-6">
            <Trophy className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
            <p className="mt-2 text-3xl font-black text-[#f5e6cd]">40%</p>
            <p className="text-[.85rem] font-bold text-[#f5c889]">quizzes</p>
            <ul className="mt-3 grid gap-1.5 text-[.82rem] leading-relaxed text-[#e9d7bf]">
              <li>• Two quizzes, approximately one month apart</li>
              <li>• Best ONE of the two counts — <strong>not the average</strong></li>
              <li>• There is <strong>no third quiz</strong></li>
              <li>• Miss both → the quiz component is a zero</li>
              <li>• Online format, with time restrictions for academic integrity</li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <ClipboardList className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
            <p className="mt-2 text-3xl font-black text-[#f5e6cd]">60%</p>
            <p className="text-[.85rem] font-bold text-[#f5c889]">final examination</p>
            <ul className="mt-3 grid gap-1.5 text-[.82rem] leading-relaxed text-[#e9d7bf]">
              <li>• The end term carries the majority of the grade</li>
              <li>• 2 hours · 60 marks · 25 questions (blueprint below)</li>
              <li>• 100% of the paper is Python programming (below)</li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <Percent className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
            <p className="mt-2 text-3xl font-black text-[#f5e6cd]">0%</p>
            <p className="text-[.85rem] font-bold text-[#f5c889]">attendance</p>
            <ul className="mt-3 grid gap-1.5 text-[.82rem] leading-relaxed text-[#e9d7bf]">
              <li>• No attendance weightage this semester</li>
              <li>• No class participation weightage either</li>
              <li>• Your grade is quizzes + final — nothing else</li>
            </ul>
          </div>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Both quizzes attempted — what counts toward the 40% weightage?"
            options={[
              "The average of the two scores",
              "The best score of the two",
              "The most recent score",
              "Each quiz carries 20% separately",
            ]}
            answer={1}
            explain="The best score out of the two quizzes is considered for the full 40% — not the average. And there is no third quiz: miss both and the quiz component is a zero."
          />
        </Reveal>
        <Reveal delay={100}>
          <Callout dark kind="why" title="Missed both?">
            There is <strong>no third quiz</strong> for students who missed both. The quiz component settles at{" "}
            <strong>zero</strong> — which makes the 60% final examination the road that remains.
          </Callout>
        </Reveal>
      </div>

      <ReadStep dark n="2" title="How IIT grades — the bell curve" sub="No fixed passing marks: relative grading on a normal distribution" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
            <h3 className="text-2xl font-bold text-[#f2e7d6]">The relative-grading curve</h3>
          </div>
          <p className="mt-1 text-[.9rem] leading-relaxed text-[#cbb392]">
            There is no concept of passing marks in the IIT system — grades follow the class&rsquo;s normal
            distribution, so what matters is where you sit on the curve.
          </p>
          <div className="mt-6">
            <BellCurve />
          </div>
          <p className="mt-6 border-t border-[rgba(255,214,160,.16)] pt-4 text-[.88rem] font-bold text-[#f5c889]">
            Generally, most students pass — failure is rare.
          </p>
        </div>
      </Reveal>

      <ReadStep dark n="3" title="The official exam blueprint" sub="One fixed shape: 25 questions, 60 marks, 2 hours" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { icon: Timer, t: "2 hours" },
              { icon: Sigma, t: "60 marks" },
              { icon: ClipboardList, t: "25 questions" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <span
                  key={c.t}
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[.8rem] font-bold"
                  style={{
                    background: "rgba(255,220,170,.08)",
                    border: "1px solid rgba(255,214,160,.3)",
                    color: "#f5c889",
                  }}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden /> {c.t}
                </span>
              );
            })}
          </div>
          <div
            className="mt-5 rounded-2xl p-5"
            style={{ background: "rgba(255,220,170,.05)", border: "1px solid rgba(255,214,160,.16)" }}
          >
            <p className="mb-3 text-[.72rem] font-extrabold uppercase tracking-[.18em] text-[#b99a75]">
              The paper, as 25 squares
            </p>
            <PaperShape />
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(194,65,12,.14)", border: "1px solid rgba(234,88,12,.4)" }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-5xl font-black leading-none text-[#f5e6cd]">20</span>
                <span className="text-[.85rem] font-bold uppercase tracking-[.14em] text-[#f5c889]">
                  short answer × 2 marks = 40
                </span>
              </div>
              <ul className="mt-4 grid gap-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                <li>• Maximum <strong>3 sentences of theory</strong> per answer</li>
                <li>• A small <strong>2–4 line Python snippet</strong> may accompany, if needed to explain the concept</li>
                <li>• <strong>Point-to-point answers</strong> preferred — avoid writing long paragraphs</li>
                <li>• Conceptual understanding over lengthy explanations</li>
              </ul>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(180,83,9,.16)", border: "1px solid rgba(245,200,137,.4)" }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-5xl font-black leading-none text-[#f5e6cd]">5</span>
                <span className="text-[.85rem] font-bold uppercase tracking-[.14em] text-[#f5c889]">
                  code output × 4 marks = 20
                </span>
              </div>
              <ul className="mt-4 grid gap-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                <li>• Read the snippet, write the <strong>exact output</strong></li>
                <li>• Case-precise: <strong>.title()</strong> output must be in title case — not all lowercase or uppercase</li>
                <li>• <strong>All-or-nothing grading:</strong> correct output = full marks; incorrect output = zero</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="A code-output answer is right except the case: the code uses .title() and you wrote the output in lowercase. Marks?"
            options={[
              "Full marks — the characters are identical",
              "Half marks — the content was correct",
              "Zero — all-or-nothing grading, and case is part of the output",
              "Depends on how many lines the snippet had",
            ]}
            answer={2}
            explain="Output must be precise: .title() must come back in title case, not all lowercase or uppercase. Correct = full marks; incorrect = zero. There is no partial credit."
          />
        </Reveal>
        <Reveal delay={100}>
          <Callout dark kind="insight" title="Do the arithmetic">
            20 × 2 + 5 × 4 = 60 — <strong>every mark of the paper is accounted for</strong> before you walk in.
            There are no surprise formats left to fear.
          </Callout>
        </Reveal>
      </div>

      <ReadStep dark n="4" title="Explicitly excluded question types" sub="Announced on the record — none of these can appear" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXCLUDED_QT.map((x) => (
            <div
              key={x.t}
              className="rounded-2xl p-5"
              style={{ background: "rgba(190,74,74,.12)", border: "1px solid rgba(226,161,161,.32)" }}
            >
              <div className="flex items-center gap-2">
                <X className="h-4 w-4 shrink-0" style={{ color: "#e2a1a1" }} aria-hidden />
                <p className="text-[.92rem] font-bold text-[#f2c9c0]">{x.t}</p>
              </div>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-[#e9d7bf]">{x.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep dark n="5" title="Where the 60 marks live" sub="The binding syllabus split — excluded topics cannot appear, included topics cover the whole paper" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(190,74,74,.1)", border: "1px solid rgba(226,161,161,.3)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[.75rem] font-extrabold uppercase tracking-[.18em] text-[#e2a1a1]">
                  Excluded — not in the paper
                </p>
                <span
                  className="shrink-0 rounded-full px-3 py-1 text-[.7rem] font-black"
                  style={{ background: "rgba(226,161,161,.16)", color: "#f2c9c0" }}
                >
                  0 marks
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {EXCLUDED_TOPICS.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[.78rem] font-semibold"
                    style={{
                      background: "rgba(226,161,161,.12)",
                      border: "1px solid rgba(226,161,161,.32)",
                      color: "#f0c4b8",
                    }}
                  >
                    <X className="h-3 w-3 shrink-0" aria-hidden /> {t}
                  </span>
                ))}
              </div>
              <p
                className="mt-4 border-t pt-3 text-[.8rem] leading-relaxed"
                style={{ borderColor: "rgba(226,161,161,.25)", color: "#d9a49a" }}
              >
                Reason: these topics have already been assessed through the quizzes.
              </p>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(245,200,137,.08)", border: "1px solid rgba(245,200,137,.34)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-[.75rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]">
                  Included — the whole paper
                </p>
                <span
                  className="shrink-0 rounded-full px-3 py-1 text-[.7rem] font-black"
                  style={{ background: "rgba(245,200,137,.16)", color: "#f5c889" }}
                >
                  100%
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {INCLUDED_TOPICS.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[.78rem] font-semibold"
                    style={{
                      background: "rgba(245,200,137,.1)",
                      border: "1px solid rgba(245,200,137,.3)",
                      color: "#f5e6cd",
                    }}
                  >
                    <Check className="h-3 w-3 shrink-0" style={{ color: "#f5c889" }} aria-hidden /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-[.95rem] font-bold text-[#f5c889]">
            100% of the 60-mark paper comes from the Python programming syllabus.
          </p>
        </div>
      </Reveal>

      <ReadStep dark n="6" title="Study material & notices" sub="Where every answerable fact lives — and the exam-day logistics" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <NotebookPen className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
              <h3 className="text-xl font-bold text-[#f2e7d6]">Learning material</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              <li>
                • All course content lives in <strong>Google Colab .ipynb files</strong> shared through the LMS —
                code snippets, theoretical explanations, practical examples and topic coverage.
              </li>
              <li>
                • Download them from the <strong>Massai portal</strong> and open them in Google Colab.
              </li>
              <li>
                • <strong>No external reference material or books</strong> are required for examination preparation.
              </li>
              <li>
                • Everything taught in <strong>recorded lectures and live sessions</strong> is part of the syllabus.
              </li>
              <li>
                • Reference books and LLMs may aid understanding — but the exam is based{" "}
                <strong>only on the prescribed content</strong>.
              </li>
            </ul>
          </div>
          <div className="card-warm p-6">
            <div className="flex items-center gap-2">
              <Megaphone className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
              <h3 className="text-xl font-bold text-[#f2e7d6]">Notices</h3>
            </div>
            <ul className="mt-4 grid gap-2.5 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              {NOTICES.map((n) => {
                const Icon = n.icon;
                return (
                  <li key={n.t} className="flex gap-2.5">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#b99a75" }} aria-hidden />
                    <span>{n.t}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Practice
          title="Sit the format — 25-question dry run on paper"
          items={[
            {
              q: (
                <>
                  Dry-run the split: <strong>20 two-mark questions</strong> answered point-to-point — three sentences
                  maximum each — then <strong>5 output predictions</strong>. Target the full two hours.
                </>
              ),
            },
            {
              q: (
                <>
                  Take any 4-line snippet using <strong>.title()</strong>, a list and a loop; write the exact output
                  on paper, case included — then verify it in Colab.
                </>
              ),
            },
            {
              q: (
                <>
                  Recite the <strong>included list</strong> from memory — foundations, strings, lists, conditionals,
                  loops, dictionaries, functions, classes, modules — and flag the topics you would rewatch.
                </>
              ),
            },
            {
              q: (
                <>
                  List the <strong>seven excluded topics</strong> — pillars, hardware, software, DIKW, data types,
                  batch processing — and write one line on why each cannot appear: already tested in the quizzes.
                </>
              ),
            },
            {
              q: (
                <>
                  Write <strong>five 2-mark questions of your own</strong> from the Colab notebooks, then answer each
                  in three sentences.
                </>
              ),
            },
            {
              q: (
                <>
                  Assemble the exam-day kit: <strong>admit card, pen only</strong> — no electronic devices — plus your
                  center location and travel plan.
                </>
              ),
            },
          ]}
        />
      </Reveal>

      <ReadStep dark n="7" title="Preparation, distilled" sub="The instructor's own prep list, compressed to six rules" />
      <Reveal>
        <Takeaways
          dark
          items={[
            <>Read <strong>every Google Colab notebook file</strong> — thoroughly, not selectively.</>,
            <>Understand <strong>both the code and the theory</strong> inside those files.</>,
            <><strong>Conceptual clarity over rote learning</strong> — the paper tests understanding.</>,
            <>Practice writing <strong>concise answers</strong> — three sentences maximum for a short-answer question.</>,
            <><strong>Exact-output accuracy</strong> — case included, all-or-nothing.</>,
            <>All important topics are covered in the Colab files — <strong>nothing will be asked from outside these materials</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
