"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  Compass,
  FileText,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Handshake,
  Hourglass,
  Languages,
  Layers,
  Map,
  Repeat2,
  Shuffle,
  Sparkles,
  Timer,
  Users,
  X,
} from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";

/* ============================================================
   MODULE 1 · COURSE MAP (id="coursemap") — Lecture 3
   The course itself: no-code by design, the 40/60 assessment,
   the business-analyst bridge, and why machines can't judge.
   ============================================================ */

const ASSESSMENT = [
  {
    share: 40,
    label: "Quizzes",
    detail: "3 MCQ quizzes · best TWO marks counted · online from home · attend at least two of three",
    color: "#c2410c",
  },
  {
    share: 60,
    label: "Major exam",
    detail: "descriptive · offline · written at the examination centre",
    color: "#7c9a3e",
  },
];

const OBJECTIVES = [
  { icon: BookOpen, line: "Explain common data structures and their business applications — with no code at all" },
  { icon: Compass, line: "Identify the right data structure for a given business problem" },
  { icon: Gauge, line: "Compare algorithmic approaches from managerial and performance perspectives" },
  { icon: Sparkles, line: "Apply structured logical thinking to real-world business scenarios" },
];

const DATA_TYPES_L3 = [
  { type: "Integer", purpose: "whole numbers only", example: "marks (0–100) · number of students", color: "#c2410c" },
  { type: "Float", purpose: "decimal numbers", example: "temperature · interest rates · CGPA", color: "#b45309" },
  { type: "Boolean", purpose: "two values only (true/false · 0/1)", example: "eligible / not · pass / fail", color: "#7c9a3e" },
  { type: "Character / Text", purpose: "text and strings", example: "names · addresses · book titles", color: "#8a5a10" },
];

const MISCONCEPTIONS = [
  "Algorithms cannot be trained by computers — computers run pre-existing algorithms.",
  "A precise description guarantees nothing if the precision itself is ambiguous.",
  "Algorithms and coding go hand-in-hand, but they are conceptually distinct.",
  "Functions are reusable components of algorithms — not replacements for them.",
  "Boolean beats integer for true/false values: memory efficiency + error prevention.",
  "Multiple conditions need SEQUENTIAL diamonds — one diamond answers only yes/no.",
];

export function AtbCourseMapSection() {
  return (
    <Section id="coursemap">
      <SectionHead
        eyebrow="Module 1 · Lecture 3 · Course overview"
        title={
          <>
            The course, the marks, and the <span className="grad-text">bridge</span> between business and machines
          </>
        }
        lead="Before a single data structure: what this course is (no-code, business-first), how it is graded (40/60), who turns business wishes into machine-readable specifications — and why 'looks okay' is the enemy."
      />

      <ReadStep n="1" title="The course at a glance" sub="Logic over syntax: the reference is Codeless Data Structures and Algorithms by Subramanya, and it complements coding courses like Python." />

      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card-warm lift h-full p-5">
            <span className="chip">The approach</span>
            <ul className="mt-3 grid gap-2.5">
              {[
                "No-code: focus on logic and building blocks, never on programming-language syntax",
                "Business-relevant applications of data structures and algorithms throughout",
                "Complements coding courses (such as Python) by owning the conceptual layer",
                "Live sessions on alternate weekends · TA doubt-clearing on the opposite weekends",
                "Video recordings available — live sessions add extra examples on top of the deck",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5 text-[.87rem] leading-relaxed text-[#2b2014]">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5d7a2e]" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-2">
          <div className="card-warm lift flex h-full flex-col p-5">
            <span className="chip">Four objectives</span>
            <div className="mt-3 grid gap-2">
              {OBJECTIVES.map((o) => (
                <div key={o.line} className="flex items-start gap-2.5 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                  <o.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#c2410c]" />
                  <span className="text-[.8rem] leading-snug text-[#2b2014]">{o.line}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* the 40/60 assessment machine */}
      <ReadStep n="2" title="The assessment scale" sub="Forty percent rides on three quizzes — the best two scores are the ones that count." />
      <Reveal>
        <div className="card-warm lift p-6">
          <div className="flex overflow-hidden rounded-2xl border border-[#f3e2c8]">
            {ASSESSMENT.map((a, i) => (
              <motion.div
                key={a.label}
                className="relative flex min-h-[92px] flex-col justify-center px-4 py-3"
                style={{ background: a.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${a.share}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-2xl font-black text-white/95">{a.share}%</span>
                <span className="text-[.78rem] font-extrabold uppercase tracking-[.12em] text-white/85">{a.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {ASSESSMENT.map((a) => (
              <p key={a.label} className="text-[.8rem] leading-relaxed text-muted-warm">
                <strong className="text-[#3e2c1d]">{a.label} · </strong>
                {a.detail}
              </p>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Data types, chosen for the business" sub="Classical languages demand predefined types; Python infers them. Either way, the type is a business decision — not a technical accident." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DATA_TYPES_L3.map((d, i) => (
          <Reveal key={d.type} delay={i * 90}>
            <div className="card-warm lift h-full p-4">
              <span className="font-mono text-[.68rem] font-extrabold uppercase tracking-[.1em]" style={{ color: d.color }}>
                {d.type}
              </span>
              <p className="mt-1 text-[.8rem] leading-snug text-[#2b2014]">{d.purpose}</p>
              <p className="mt-2 border-t border-[#f3e2c8] pt-2 text-[.74rem] leading-snug text-[#8a6b45]">{d.example}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4">
        <Callout kind="story" title="The customer-ID trap">
          A customer ID like <strong>B26-SME-001</strong> mixes letters and numbers — so it must be stored as{" "}
          <strong>text, not a number</strong>. Type selection needs business-domain understanding, end-user
          consultation, and the business analyst who bridges the two worlds.
        </Callout>
      </Reveal>

      {/* the BA bridge machine */}
      <ReadStep n="4" title="The business-analyst bridge" sub="From domain experts to developers — requirements become an SRS, and the SRS becomes design documents." />
      <Reveal>
        <div className="card-warm lift p-5">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            {[
              { icon: Users, label: "Domain experts & end-users", sub: "requirements live here" },
              { icon: Handshake, label: "Business analyst", sub: "collects · prepares the SRS · designs documents" },
              { icon: Building2, label: "Developers", sub: "technical requirements land here" },
            ].map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center gap-3 md:contents">
                <motion.div
                  className="flex flex-1 items-center gap-3 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.18 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: i === 1 ? "rgba(245,158,11,.18)" : "rgba(124,154,62,.16)" }}>
                    <s.icon className="h-4 w-4" style={{ color: i === 1 ? "#b45309" : "#5d7a2e" }} />
                  </span>
                  <div>
                    <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">{s.label}</p>
                    <p className="text-[.74rem] text-muted-warm">{s.sub}</p>
                  </div>
                </motion.div>
                {i < 2 ? (
                  <svg viewBox="0 0 60 24" className="hidden h-6 w-14 shrink-0 md:block" aria-hidden>
                    <path d="M2 12 H50" stroke="#c2410c" strokeWidth="2.5" fill="none" />
                    <path d="M46 5 L56 12 L46 19" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Callout kind="warn" title="System check vs human check">
              A system validates <strong>type and range</strong> (a mark must be 0–100 — 63 passes). A human catches{" "}
              <strong>logical errors</strong> (the employee meant 65, not 63). Both layers are needed.
            </Callout>
            <Callout kind="insight" title="Real-time? It depends">
              UPI shows the confirmation <strong>instantly</strong> but settles in the backend every two hours; daily
              summaries run at midnight, not continuously. Business requirements — not technology — set the frequency,
              and periodic maintenance windows keep heavy jobs off the critical path.
            </Callout>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <div className="card-warm lift p-5">
          <span className="chip">Misconceptions, corrected</span>
          <ul className="mt-3 grid gap-2 md:grid-cols-2">
            {MISCONCEPTIONS.map((m) => (
              <li key={m} className="flex items-start gap-2.5 text-[.82rem] leading-relaxed text-[#2b2014]">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b05050]" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Three MCQ quizzes, best two counted — what share of the final marks do the quizzes carry?"
            options={["20%", "40%", "50%", "60%"]}
            answer={1}
            explain="Quizzes are 40% (three MCQ-based quizzes, best two marks counted, taken online from home). The major exam is the other 60% — descriptive, offline, at the examination centre."
            source="Lecture 3 · course overview"
          />
          <Quiz
            q="A discount engine accepts any purchase amount typed as text. Which pairing is the actual failure?"
            options={[
              "Data type — amounts must be numeric (integer/float), not text",
              "Finiteness — the engine never ends",
              "Generality — it works for every customer",
              "Feasibility — it cannot be implemented",
            ]}
            answer={0}
            explain="Text-typed amounts are a data-type selection failure: the business meaning (a monetary value) demands a numeric type. Range and type checks are the system's job; catching 'I meant 65, not 63' is the human/managerial layer."
            source="Lecture 3 · data types & validation"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Bridge work"
          items={[
            { q: "A university stores course-completion status, student names and CGPA. Assign the correct data type to each and justify in one line.", hint: "Boolean (yes/no) · Character/Text · Float (CGPA carries decimals)." },
            { q: "The registrar says 'process marks in real time', but the exam office only needs totals at midnight. What would you build, and why?", hint: "Business requirements set processing frequency — a midnight batch summary, not continuous real-time compute." },
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>The course is <strong>no-code and business-first</strong> — quizzes 40% (best two of three), major exam 60%.</>,
            <>Data types are <strong>business decisions</strong>: Integer, Float, Boolean, Character/Text — chosen with domain experts, not guessed.</>,
            <>The <strong>business analyst</strong> bridges business and technology: requirements → SRS → design documents for developers.</>,
            <>Not everything needs real-time execution — <strong>UPI settles every two hours</strong>; daily summaries run at midnight.</>,
            <>Machines need <strong>objective, measurable criteria</strong> — "gentle boil" and "looks okay" are where algorithms break.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · EXECUTION PROPERTIES (id="props2") — Lecture 5
   The second set of properties in depth + the property clinic.
   ============================================================ */

const PROPS2 = [
  {
    icon: Languages,
    name: "Language independence",
    rule: "Express the logic in generic steps that survive translation into any language.",
    yes: "A bonus calculation written in plain English re-expresses as C, Java or Python with identical logic.",
    no: "The bonus logic hard-wired into one Python-specific line — change the language, lose the algorithm.",
  },
  {
    icon: Repeat2,
    name: "Determinism",
    rule: "Same input consistently produces the same output, across every execution.",
    yes: "Loan approval: income > ₹50,000 AND credit > 700 → the same verdict every single run.",
    no: "Visa approval rides on an officer's subjective judgement of trustworthiness — different verdicts, different runs.",
  },
  {
    icon: Hourglass,
    name: "Feasibility",
    rule: "Implementable realistically within available memory, processing power and time.",
    yes: "Payroll reads one employee record at a time: calculate, pay slip, next.",
    no: "Loading ALL employee records into memory simultaneously — very costly and impractical.",
  },
  {
    icon: Globe,
    name: "Generality",
    rule: "Handles all valid instances of the problem — no special cases, no favourites.",
    yes: "A bonus rule keyed on annual sales applies to every employee equally.",
    no: "Assigning the bonus only to employees named 'Rahul' — specific, unethical, unimplementable.",
  },
];

const FEASIBILITY_TIMELINE = [
  { era: "1990s", label: "Cloud computing", note: "the technology existed — slow internet and high costs made it infeasible; cheaper infrastructure brought it to life", ok: false },
  { era: "1970s", label: "Machine learning / AI", note: "algorithms existed since the 1970s — feasible only once compute, data and memory got cheap", ok: false },
  { era: "Now", label: "Both are everywhere", note: "feasibility is a moving target: the same idea is infeasible in one decade and inevitable in the next", ok: true },
];

export function AtbProps2Section() {
  return (
    <Section id="props2">
      <SectionHead
        eyebrow="Module 1 · Lecture 5 · Properties, second set"
        title={
          <>
            The <span className="grad-text">execution</span> family, interrogated
          </>
        }
        lead="Five core properties make an algorithm; four execution-and-design properties decide whether it can actually be built, trusted and generalised. This lecture puts each of the four on the stand."
      />

      <ReadStep n="1" title="Four properties, each with a twin" sub="Hover a card: the green twin passes, the red twin fails the property outright." />

      <div className="grid gap-4 sm:grid-cols-2">
        {PROPS2.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 110}>
            <div className="card-warm lift group flex h-full flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.16)" }}>
                  <p.icon className="h-4 w-4 text-[#b45309]" />
                </span>
                <h3 className="font-extrabold text-[#3e2c1d]">{p.name}</h3>
              </div>
              <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">{p.rule}</p>
              <div className="mt-3 grid gap-2">
                <div className="flex items-start gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "#eef4dd" }}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5d7a2e] transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-[.78rem] leading-snug text-[#44621d]">{p.yes}</span>
                </div>
                <div className="flex items-start gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "#fdecec" }}>
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#b05050] transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-[.78rem] leading-snug text-[#8c2f2f]">{p.no}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="2" title="Feasibility is a moving target" sub="The same brilliant idea can be infeasible for decades — then inevitable." />
      <Reveal>
        <div className="card-warm lift p-5">
          <div className="grid gap-3 md:grid-cols-3">
            {FEASIBILITY_TIMELINE.map((f, i) => (
              <motion.div
                key={f.label}
                className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.16 }}
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#f6e3c8] px-2 py-0.5 text-[.62rem] font-extrabold text-[#8a4508]">{f.era}</span>
                  <span className={`h-2 w-2 rounded-full ${f.ok ? "bg-[#7c9a3e]" : "bg-[#b45309]"}`} />
                </div>
                <p className="mt-2 text-[.86rem] font-extrabold text-[#3e2c1d]">{f.label}</p>
                <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">{f.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="The property clinic" sub="Two review questions from the lecture — diagnose the violation before you peek." />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="An algorithm randomly chooses a discount between 5% and 20% for all customers. Which property does it fail?"
            options={["Finiteness", "Determinism", "Definiteness", "Generality"]}
            answer={1}
            explain="Randomness breaks determinism: the same purchase amount can receive different discounts on different runs, and algorithms must produce the same output for the same input. Randomness may even be company policy — it still violates the algorithmic principle."
            source="Lecture 5 · review question 1"
          />
          <Quiz
            q="Customer submits complaint → determine the customer's true intention → provide solution. Which property fails?"
            options={["Effectiveness", "Definiteness", "Feasibility", "Language independence"]}
            answer={2}
            explain="Step 2 — 'determine the customer's true intention' — is not strictly executable by a computing system without extremely complex machinery (AI with facial recognition and more). Impractical for a standard complaint system: a failure of feasibility."
            source="Lecture 5 · review question 2"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Callout kind="insight" title="The properties interlock">
          An infinite loop violates <strong>finiteness</strong> and compromises <strong>effectiveness</strong>. Missing{" "}
          <strong>well-defined outputs</strong> usually means the <strong>inputs</strong> were unclear too. And once{" "}
          <strong>definiteness</strong> is broken, well-defined outputs become impossible. Fix the first crack — the
          rest of the wall follows.
        </Callout>
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>Execution &amp; design properties: <strong>language independence, determinism, feasibility, generality</strong>.</>,
            <>Determinism = loan approval (fixed criteria) — not visa approval (subjective judgement).</>,
            <>Feasibility moves with technology: <strong>cloud</strong> waited for internet speeds, <strong>ML</strong> waited for cheap compute.</>,
            <>Generality means <strong>all valid inputs</strong>, never a special case — no bonuses for people named Rahul.</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Clinic follow-ups"
          items={[
            { q: "A payroll algorithm processes one employee per iteration. Rewrite the infeasible twin and say exactly which resource it abuses.", hint: "Load-all-at-once abuses memory (and compute); one-at-a-time stays within memory, processing power and time." },
            { q: "Give one instruction an algorithm can execute and one it cannot — then name the property each example proves.", hint: "'If stock < 50, order 200' executes (definiteness). 'Stir until it feels right' cannot (definiteness again — subjectivity)." },
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
        eyebrow="Module 4 · Lecture 26 · Selection sort"
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
        eyebrow="Module 4 · Lecture 27 · Insertion sort"
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
    </Section>
  );
}

/* ============================================================
   MODULE 4 · FINAL RECAP (id="recap28", dark) — Lecture 28
   Overview of search algorithms and complexity analysis.
   ============================================================ */

const BIG_O_LADDER = [
  { o: "O(1)", name: "Constant", note: "fixed operations regardless of input size — rare in practice", curve: "flat" as const },
  { o: "O(log n)", name: "Logarithmic", note: "slow growth, ideal for practical applications (halving)", curve: "log" as const },
  { o: "O(n)", name: "Linear", note: "proportional to input size — manageable", curve: "lin" as const },
  { o: "O(n log n)", name: "Linearithmic", note: "slightly faster growth than linear, still acceptable", curve: "nlog" as const },
  { o: "O(n²)", name: "Quadratic", note: "rapid growth, impractical for large datasets", curve: "quad" as const },
  { o: "O(2ⁿ)", name: "Exponential", note: "extremely rapid — avoid at all costs", curve: "exp" as const },
];

function CurveRow({ kind }: { kind: "flat" | "log" | "lin" | "nlog" | "quad" | "exp" }) {
  const paths: Record<string, string> = {
    flat: "M4 26 H 76",
    log: "M4 30 C 30 26 52 20 76 14",
    lin: "M4 30 L 76 10",
    nlog: "M4 30 C 34 28 58 16 76 6",
    quad: "M4 31 C 40 30 60 24 76 4",
    exp: "M4 31 C 56 31 68 28 76 3",
  };
  return (
    <svg viewBox="0 0 80 34" className="h-9 w-20 shrink-0" aria-hidden>
      <motion.path
        d={paths[kind]}
        fill="none"
        stroke="#f5a623"
        strokeWidth={2.4}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </svg>
  );
}

const COST_TABLES = [
  {
    title: "Arrays",
    icon: Map,
    rows: [
      ["Read with known index", "O(1)", "direct access"],
      ["Sequential read", "O(n)", "one by one"],
      ["Search", "O(n)", "linear sweep"],
      ["Insert at end", "O(1)", "single operation"],
      ["Insert at begin / middle", "O(n)", "shifting required"],
      ["Update at a location", "O(1)", "direct modify"],
      ["Delete by searching", "O(n)", "search first, then delete"],
    ],
  },
  {
    title: "Linked lists",
    icon: FileText,
    rows: [
      ["Insert in middle", "O(1)", "only links update (2–4 ops)"],
      ["Insert with search", "O(n)", "search dominates"],
      ["Search", "O(n)", "traverse one by one"],
    ],
  },
  {
    title: "Stacks & queues",
    icon: Layers,
    rows: [
      ["Push / pop (stack)", "O(1)", "fixed position: top"],
      ["Enqueue / dequeue (queue)", "O(1)", "fixed positions: front & rear"],
      ["Search inside either", "O(n)", "must remove elements to see them"],
    ],
  },
  {
    title: "Trees & graphs",
    icon: GitBranch,
    rows: [
      ["General tree traversal", "O(n)", "visit every node"],
      ["Unbalanced binary tree search", "O(n)", "degenerates to a linked list"],
      ["Balanced BST search", "O(log n)", "space halves at each step"],
      ["Graph traversal DFS / BFS", "O(V + E)", "all vertices and edges"],
    ],
  },
];

const FIVE_SEARCHES = [
  { name: "Linear", o: "O(n)", need: "works on unsorted data", note: "simple but inefficient for large datasets" },
  { name: "Binary", o: "O(log n)", need: "sorted data required", note: "10 million records ≈ 24 comparisons" },
  { name: "Jump", o: "O(√n)", need: "sorted data required", note: "fixed √n jumps, then a linear sweep in the block" },
  { name: "Exponential", o: "O(log n)", need: "sorted data required", note: "jumps double (1, 2, 4, 8…), then binary in the range" },
  { name: "Hash", o: "O(1) avg", need: "well-distributed hash function", note: "worst case O(n) when everything collides" },
];

export function AtbRecap28Section() {
  return (
    <Section id="recap28" dark>
      <SectionHead
        dark
        eyebrow="Module 4 · Lecture 28 · The final overview"
        title={
          <>
            The whole module, <span className="grad-text">stitched shut</span>
          </>
        }
        lead="One last sweep: the Big O ladder, the price list of every data structure you met, and the five searches on a single map. Complexity measures the growth rate — never the stopwatch."
      />

      <ReadStep n="1" title="The Big O ladder" sub="From fastest to slowest — the growth pattern is the entire story." dark />
      <Reveal>
        <div className="card-warm p-5">
          <div className="grid gap-2.5">
            {BIG_O_LADDER.map((b, i) => (
              <motion.div
                key={b.o}
                className="flex items-center gap-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.09 }}
              >
                <span className="w-24 shrink-0 font-mono text-[.8rem] font-extrabold text-[#c2410c]">{b.o}</span>
                <span className="w-24 shrink-0 text-[.78rem] font-extrabold text-[#3e2c1d]">{b.name}</span>
                <CurveRow kind={b.curve} />
                <span className="ml-auto hidden text-right text-[.74rem] leading-snug text-[#8a6b45] sm:block">{b.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Every structure's price list" sub="The operations you can afford — and the ones that quietly cost a full scan." dark />
      <div className="grid gap-4 md:grid-cols-2">
        {COST_TABLES.map((t, ti) => (
          <Reveal key={t.title} delay={(ti % 2) * 120}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: "rgba(245,158,11,.16)" }}>
                  <t.icon className="h-4 w-4 text-[#f5c889]" />
                </span>
                <h3 className="font-extrabold text-[#f5e6cd]">{t.title}</h3>
              </div>
              <div className="mt-3 grid gap-1.5">
                {t.rows.map(([op, c, note]) => (
                  <div key={op} className="flex items-baseline gap-2 rounded-lg bg-[rgba(255,236,210,.06)] px-2.5 py-1.5">
                    <span className="text-[.76rem] leading-snug text-[#e9d7bf]">{op}</span>
                    <span className="ml-auto shrink-0 font-mono text-[.72rem] font-extrabold" style={{ color: c === "O(1)" || c === "O(log n)" ? "#9cbf62" : "#f5c889" }}>
                      {c}
                    </span>
                    <span className="hidden shrink-0 text-[.68rem] text-[#cbb392] sm:block">· {note}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="3" title="The five searches, side by side" sub="Data size, sorting status, distribution and growth rate — pick the strategy that matches all four." dark />
      <Reveal>
        <div className="card-warm overflow-hidden p-0">
          <div className="grid grid-cols-[auto_1fr_1fr] gap-px bg-[#f3e2c8] text-[.78rem]">
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Search</div>
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Requirement</div>
            <div className="bg-[#fbf3e3] px-3 py-2 font-extrabold text-[#3e2c1d]">Signature move</div>
            {FIVE_SEARCHES.map((s) => (
              <div key={s.name} className="contents">
                <div className="flex items-center gap-2 bg-[#fffaf1] px-3 py-2">
                  <span className="font-extrabold text-[#3e2c1d]">{s.name}</span>
                  <span className="font-mono text-[.66rem] font-bold" style={{ color: s.o.startsWith("O(1)") || s.o.startsWith("O(log") ? "#5d7a2e" : "#b45309" }}>
                    {s.o}
                  </span>
                </div>
                <div className="bg-[#fffaf1] px-3 py-2 text-[#2b2014]">{s.need}</div>
                <div className="bg-[#fffaf1] px-3 py-2 text-[.74rem] text-[#8a6b45]">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Callout dark kind="insight" title="And the network finale — Dijkstra & friends">
          Dijkstra: single-source shortest path, weighted graphs, <strong>non-negative weights</strong>, O(V²) basic
          implementation. A* adds a directional heuristic for GPS. Bellman-Ford survives negative weights.
          Floyd-Warshall answers all pairs; Prim and Kruskal connect every node at minimum total cost. Then the
          business layer: database queries, e-commerce filtering, GPS routing, student records, food-delivery
          optimisation.
        </Callout>
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Binary search needs ~24 comparisons for 10 million records. Linear search on the same data needs…"
            options={["~24 — both halve the space", "~10,000 — one comparison per thousand records", "up to 10 million — every record in the worst case", "logarithmically fewer — linear search self-optimises"]}
            answer={2}
            explain="Linear search is O(n): on unsorted data it may examine every single record — 10 million comparisons against binary search's ~24 (log₂ of 10 million ≈ 23.25). Halving beats scanning at any business scale."
            source="Lecture 28 · final recap"
          />
          <Quiz
            q="Inserting into the MIDDLE of a linked list is O(1) — but inserting while SEARCHING for the spot is O(n). Why the gap?"
            options={[
              "Linked lists re-index after every insert",
              "The links update in 2–4 operations, but finding the insertion point still requires a one-by-one traversal",
              "Middle inserts are physically faster in memory",
              "The O(n) comes from shifting elements right",
            ]}
            answer={1}
            explain="Pointer surgery itself costs 2–4 operations (constant — that's the O(1)). But reaching the insertion point means walking node by node — that traversal dominates, so search-insert is O(n). No shifting happens: that's arrays."
            source="Lecture 28 · cost tables"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>Complexity measures the <strong>growth rate</strong> of work as input grows — never absolute seconds.</>,
            <>O(1) and O(log n) are <strong>preferable</strong>; exponential O(2ⁿ) must be avoided.</>,
            <>Arrays buy <strong>O(1) direct access</strong> but pay O(n) to shift; linked lists pay O(1) to rewire but O(n) to find.</>,
            <>The five searches trade <strong>sorted-ness for speed</strong>: hash O(1) needs none of it — binary O(log n) needs all of it.</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Close the module"
          items={[
            { q: "Rank these by scalability for 10 million records: linear search on an unsorted register, hash lookup by roll number, binary search on a price-sorted catalog.", hint: "Hash O(1) average → binary O(log n) → linear O(n). The register's lack of order is what forces the slow lane." },
            { q: "A startup's data doubles every quarter. Which single complexity class should its core lookups target — and which one ruins the roadmap?", hint: "Target O(log n) or better (halving scales); anything quadratic or exponential compounds the same way the data does." },
          ]}
        />
      </Reveal>
    </Section>
  );
}
