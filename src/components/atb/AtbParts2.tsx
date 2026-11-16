"use client";

import { motion } from "framer-motion";
import {
  Check,
  Coins,
  Cog,
  Crosshair,
  Globe,
  History,
  Languages,
  LogIn,
  LogOut,
  Repeat2,
  Split,
  Timer,
  X,
  Zap,
} from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";

/* ============================================================
   MODULE 1 · PROPERTIES OF ALGORITHMS (id="properties")
   ============================================================ */
const FAMILIES = [
  {
    tag: "Family 1 · Core technical",
    note: "what the algorithm IS — miss one and it is not an algorithm at all",
    color: "#c2410c",
    items: [
      { icon: Timer, name: "Finiteness", line: "must stop after finitely many steps" },
      { icon: Crosshair, name: "Definiteness", line: "every step precisely defined" },
      { icon: LogIn, name: "Well-defined inputs", line: "clear values given before it runs" },
      { icon: LogOut, name: "Well-defined outputs", line: "clear result when it ends" },
      { icon: Zap, name: "Effectiveness", line: "each step basic enough to actually do" },
    ],
  },
  {
    tag: "Family 2 · Execution & design",
    note: "how it RUNS in the real world — the quality bar for usable algorithms",
    color: "#7c9a3e",
    items: [
      { icon: Languages, name: "Language independence", line: "survives translation into any language" },
      { icon: Repeat2, name: "Determinism", line: "same input → same output, every run" },
      { icon: Cog, name: "Feasibility", line: "runnable with available resources" },
      { icon: Globe, name: "Generality", line: "works for a whole class of problems" },
    ],
  },
];

const PROPS9: { n: string; name: string; rule: string; yes: string; no: string }[] = [
  {
    n: "1", name: "Finiteness", rule: "It must end after a finite number of steps.",
    yes: "Count the students in a class — stop at the last one.",
    no: "Keep checking whether another customer has entered — it never ends. Infinite.",
  },
  {
    n: "2", name: "Definiteness", rule: "Every step is precise and unambiguous.",
    yes: "Average = (M1 + M2 + M3 + M4 + M5) / 5 — an exact formula.",
    no: "“Take some tea leaves, add a little milk, boil for a while, add sugar if needed.”",
  },
  {
    n: "3", name: "Well-defined inputs", rule: "The values it acts on are exactly specified.",
    yes: "Rectangle area: INPUT length L and width W.",
    no: "“INPUT the required values” — which values? how many?",
  },
  {
    n: "4", name: "Well-defined outputs", rule: "The result it produces is exactly specified.",
    yes: "Loan check → display Approved or Rejected.",
    no: "Display “Processing Complete” — but is the loan approved or not?",
  },
  {
    n: "5", name: "Effectiveness", rule: "Every step is basic and actually carryable-out.",
    yes: "Stock < 50 → order 200 units. One doable step.",
    no: "“Order more whenever stock looks low” — not basic, not exact.",
  },
  {
    n: "6", name: "Language independence", rule: "The logic must not depend on one language’s syntax.",
    yes: "Bonus rule written as generic steps — re-express it in C, Java or Python.",
    no: "Hard-wired to one specific Python line — change the language, lose the algorithm.",
  },
  {
    n: "7", name: "Determinism", rule: "Same input → same output, every single run.",
    yes: "Income ≥ ₹50,000 AND credit ≥ 700 → approve. Identical result every time.",
    no: "The visa officer “feels trustworthy” — a different verdict each run. Indeterminate.",
  },
  {
    n: "8", name: "Feasibility", rule: "It must be executable with the resources you have.",
    yes: "Payroll: process one employee record at a time.",
    no: "Load ALL records, make multiple copies, process them simultaneously.",
  },
  {
    n: "9", name: "Generality", rule: "It works for every member of a class of problems.",
    yes: "Bonus by annual sales — works for every employee.",
    no: "“If the employee’s name is Rahul” — built for one specific person.",
  },
];

export function AtbPropsSection() {
  return (
    <Section id="properties">
      <SectionHead
        eyebrow="Module 1 · Properties of algorithms"
        title={
          <>
            What makes an algorithm a <span className="grad-text">good</span> algorithm?
          </>
        }
        lead="Anything can be called an algorithm; not everything deserves the name. Nine properties — in two families — separate a machine-followable method from a wish written on paper."
      />

      <ReadStep n="1" title="Two families of characteristics" sub="Five core technical properties define an algorithm; four execution & design properties make it a good one." />

      <div className="grid gap-4 md:grid-cols-2">
        {FAMILIES.map((f, fi) => (
          <Reveal key={f.tag} delay={fi * 120}>
            <div className="card-warm lift h-full p-5">
              <span className="chip" style={fi === 1 ? { background: "#eef4dd", color: "#44621d", borderColor: "#cfe0ae" } : undefined}>
                {f.tag}
              </span>
              <p className="mt-2 text-[.8rem] leading-relaxed text-muted-warm">{f.note}</p>
              <div className="mt-3 grid gap-2">
                {f.items.map((it) => (
                  <div key={it.name} className="flex items-center gap-2.5 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                    <it.icon className="h-4 w-4 shrink-0" style={{ color: f.color }} />
                    <span className="text-[.85rem] font-bold text-[#2b2014]">{it.name}</span>
                    <span className="ml-auto text-right text-[.74rem] leading-snug text-[#8a6b45]">{it.line}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="2" title="The nine properties, each with a twin" sub="Every property is easiest to remember by its violation — hover a card and meet the bad example." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROPS9.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 80}>
            <div className="card-warm lift group flex h-full flex-col p-4">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[.7rem] font-extrabold text-[#c99a5b]">{p.n}</span>
                <h4 className="font-extrabold leading-snug text-[#3e2c1d]">{p.name}</h4>
              </div>
              <p className="mt-1.5 text-[.8rem] leading-relaxed text-muted-warm">{p.rule}</p>
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

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Which is NOT a core technical characteristic?"
            options={["Finiteness", "Definiteness", "Determinism", "Effectiveness"]}
            answer={2}
            explain="Determinism belongs to the execution & design family. The core five are: Finiteness, Definiteness, Well-defined inputs, Well-defined outputs, Effectiveness."
            source="Lecture 1 · properties"
          />
          <Quiz
            q="“Add sugar if needed” violates…"
            options={["Generality", "Definiteness", "Feasibility", "Finiteness"]}
            answer={1}
            explain="“If needed” is not precisely defined — two people (or machines) would act differently. That is a failure of definiteness (unambiguity)."
            source="Lecture 1 · properties"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Property detective"
          items={[
            { q: "Classify which property each breaks: (a) “Stir until it feels right”. (b) A bonus rule valid only for the Delhi office. (c) “Compute the average of all sales since the company began” — with no end condition. (d) Output: “Done”.", hint: "Think: ambiguity, generality, finiteness, well-defined output." },
            { q: "Write the loan algorithm so it satisfies determinism AND a well-defined output: input income and credit score; display exactly Approved or Rejected.", hint: "Fix the thresholds: income ≥ 50,000 AND credit ≥ 700 → display Approved; otherwise display Rejected. No “feels”." },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · TYPES OF ALGORITHMS (id="algotypes", dark)
   ============================================================ */
function DivideConquerSVG() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" role="img" aria-label="Divide and conquer: one big box split into three smaller boxes, then combined">
      <defs>
        <marker id="atbDcA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <rect x={80} y={8} width={100} height={28} rx={6} fill="rgba(245,158,11,.16)" stroke="#f5a623" />
        <text x={130} y={26} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffe4bd">One big problem</text>
      </motion.g>
      <FlowEdgeDark d="M130 36 V 46" marker="atbDcA" delay={0.25} />
      <motion.path d="M46 46 H 214" stroke="#c99a5b" strokeWidth={1.8} fill="none" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} />
      <FlowEdgeDark d="M46 46 V 58" marker="atbDcA" delay={0.6} />
      <FlowEdgeDark d="M130 46 V 58" marker="atbDcA" delay={0.7} />
      <FlowEdgeDark d="M214 46 V 58" marker="atbDcA" delay={0.8} />
      {[46, 130, 214].map((cx, i) => (
        <motion.g key={cx} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x={cx - 30} y={62} width={60} height={26} rx={5} fill="rgba(255,236,210,.08)" stroke="#c99a5b" />
          <text x={cx} y={79} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f7ecdd">sub-{i + 1}</text>
        </motion.g>
      ))}
      <FlowEdgeDark d="M46 92 V 112" marker="atbDcA" delay={0.9} />
      <FlowEdgeDark d="M130 92 V 112" marker="atbDcA" delay={1} />
      <FlowEdgeDark d="M214 92 V 112" marker="atbDcA" delay={1.1} />
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.2 }}>
        <rect x={62} y={116} width={136} height={26} rx={5} fill="rgba(124,154,62,.2)" stroke="#9cbf62" />
        <text x={130} y={133} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#dcebc2">combine → one report</text>
      </motion.g>
    </svg>
  );
}

function FlowEdgeDark({ d, marker, delay = 0 }: { d: string; marker: string; delay?: number }) {
  return (
    <motion.path
      d={d} fill="none" stroke="#c99a5b" strokeWidth={1.8} markerEnd={`url(#${marker})`} strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: "easeInOut" }}
    />
  );
}

function GreedySVG() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" role="img" aria-label="Greedy: 88 rupees returned as 50, 20, 10, 5, 2 and 1">
      <defs>
        <marker id="atbGrA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <rect x={65} y={8} width={130} height={30} rx={15} fill="rgba(245,158,11,.16)" stroke="#f5a623" />
        <text x={130} y={27} textAnchor="middle" fontSize={12} fontWeight={800} fill="#ffe4bd">₹88 to return</text>
      </motion.g>
      <FlowEdgeDark d="M130 42 V 56" marker="atbGrA" delay={0.3} />
      {["50", "20", "10", "5", "2", "1"].map((v, i) => (
        <motion.g key={v} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.45 + i * 0.12 }}>
          <rect x={10 + i * 41} y={62} width={36} height={30} rx={7} fill={i === 0 ? "#b45309" : "rgba(255,236,210,.08)"} stroke={i === 0 ? "#f5a623" : "#c99a5b"} />
          <text x={28 + i * 41} y={81} textAnchor="middle" fontSize={11.5} fontWeight={800} fill={i === 0 ? "#ffe4bd" : "#f7ecdd"}>{v}</text>
        </motion.g>
      ))}
      <motion.text x={130} y={116} textAnchor="middle" fontSize={10} fontWeight={700} fill="#cbb392" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>
        50 + 20 + 10 + 5 + 2 + 1 = ₹88 — highest first, every time
      </motion.text>
      <FlowEdgeDark d="M130 122 V 132" marker="atbGrA" delay={1.4} />
    </svg>
  );
}

function DPSVG() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" role="img" aria-label="Dynamic programming: a timeline of months where past decisions inform future ones">
      <defs>
        <marker id="atbDpA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#9cbf62" /></marker>
      </defs>
      <motion.line x1={18} y1={104} x2={242} y2={104} stroke="#c99a5b" strokeWidth={2} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      {[
        { x: 40, l: "Jan" },
        { x: 90, l: "Mar" },
        { x: 140, l: "Jun" },
        { x: 190, l: "Sep" },
      ].map((m, i) => (
        <motion.g key={m.l} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.18 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx={m.x} cy={104} r={8} fill="#b45309" stroke="#f5a623" />
          <text x={m.x} y={124} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#cbb392">{m.l}</text>
        </motion.g>
      ))}
      <motion.path
        d="M40 96 C 60 60 75 58 90 96 C 105 62 120 56 140 96 C 152 66 170 54 190 96 C 200 70 210 62 224 92"
        fill="none" stroke="#9cbf62" strokeWidth={2} strokeDasharray="4 5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.7 }}
      />
      <motion.g initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 1.9 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx={224} cy={104} r={9} fill="rgba(124,154,62,.25)" stroke="#9cbf62" />
        <text x={224} y={124} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#dcebc2">Dec</text>
      </motion.g>
      <motion.text x={130} y={34} textAnchor="middle" fontSize={10} fontWeight={700} fill="#cbb392" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2 }}>
        each order remembers past levels, costs & forecasts
      </motion.text>
      <FlowEdgeDark d="M224 92 V 78" marker="atbDpA" delay={2.1} />
    </svg>
  );
}

const ALGO_TYPES = [
  {
    icon: Split,
    name: "Divide-and-Conquer",
    tag: "Split it",
    def: "Take a large problem, split it into many smaller ones — then combine their results.",
    story: "Auditing a company: each regional office gets its own audit team; the findings merge into one company-wide report.",
  },
  {
    icon: Coins,
    name: "Greedy",
    tag: "Grab the best now",
    def: "Take the best decision at the point in time the decision is made — never reconsider.",
    story: "A cashier returning ₹88 change always hands over the highest denomination note or coin available first: 50, 20, 10, 5, 2, 1.",
  },
  {
    icon: History,
    name: "Dynamic Programming",
    tag: "Remember the past",
    def: "Make decisions for the future while keeping the past in mind.",
    story: "Planning 12 months of inventory purchases using previous inventory levels, holding costs and demand forecasts.",
  },
];

export function AtbAlgoTypesSection() {
  return (
    <Section id="algotypes" dark>
      <SectionHead
        dark
        eyebrow="Module 1 · Types of algorithms"
        title={
          <>
            Three ways to <span className="grad-text">eat the elephant</span>
          </>
        }
        lead="Every algorithmic strategy you will ever meet is a remix of three instincts: split the problem, grab what looks best now, or remember where you have been."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {ALGO_TYPES.map((t, i) => (
          <Reveal key={t.name} delay={i * 130}>
            <div className="card-warm flex h-full flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.15)" }}>
                  <t.icon className="h-4 w-4" style={{ color: "#f5c889" }} />
                </span>
                <div>
                  <h3 className="font-extrabold leading-tight text-[#f5e6cd]">{t.name}</h3>
                  <p className="text-[.7rem] font-bold uppercase tracking-[.14em] text-[#f5c889]">{t.tag}</p>
                </div>
              </div>
              <p className="mt-3 text-[.85rem] leading-relaxed text-[#e9d7bf]">{t.def}</p>
              <p className="mt-2 text-[.8rem] leading-relaxed text-[#cbb392]">
                <strong className="text-[#f5c889]">Business story · </strong>{t.story}
              </p>
              <div className="mt-auto pt-4">
                {i === 0 ? <DivideConquerSVG /> : i === 1 ? <GreedySVG /> : <DPSVG />}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-5">
        <Callout dark kind="insight" title="Same problem, three lenses">
          Split it when the parts are independent (divide &amp; conquer). Grab the best-now when
          early choices never need revisiting (greedy). Remember the past when today’s decision
          changes tomorrow’s costs (dynamic programming). One problem — three perfectly valid
          attacks; the art is picking the lens that fits.
        </Callout>
      </Reveal>

      <Reveal className="mt-6">
        <Quiz
          q="Planning next year’s inventory using last year’s levels and demand forecasts is…"
          options={["Divide-and-conquer", "Greedy", "Dynamic programming", "Binary search"]}
          answer={2}
          explain="Past inventory levels and forecasts are memory feeding future decisions — the definition of dynamic programming. Greedy would decide month-by-month with no memory; divide-and-conquer would need independent subproblems."
          source="Lecture 1 · algorithm classes"
        />
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>An algorithm should fulfil the <strong>core technical</strong> characteristics and the <strong>execution &amp; design</strong> characteristics.</>,
            <>Core technical: <strong>Finiteness, Definiteness, Well-defined inputs, Well-defined outputs, Effectiveness</strong>.</>,
            <>Execution &amp; design: <strong>Language independence, Determinism, Feasibility, Generality</strong>.</>,
            <>Three major classes: <strong>divide &amp; conquer</strong> (split &amp; combine), <strong>greedy</strong> (best at this point in time), <strong>dynamic programming</strong> (decide for the future with the past in mind).</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Strategy spotting"
          items={[
            { q: "A warehouse chain audits 40 stores. Which of the three classes fits, and how would you divide the work?", hint: "Stores are independent → divide-and-conquer; audit teams per region, then merge findings." },
            { q: "Why can a greedy change-maker fail for some denomination sets, while it works for Indian currency?", hint: "Try ₹60 with notes {50, 30, 20, 10}: greedy takes 50+10 then gets stuck at 0 vs 30+30. Indian denominations are “canonical” — greedy is safe." },
          ]}
        />
      </Reveal>
    </Section>
  );
}
