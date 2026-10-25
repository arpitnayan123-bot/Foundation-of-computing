"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Banknote,
  BookOpen,
  BookOpenCheck,
  Bot,
  Braces,
  Coffee,
  Cog,
  Database,
  Flame,
  FunctionSquare,
  GraduationCap,
  Hash,
  ListOrdered,
  Percent,
  PenLine,
  Play,
  RefreshCw,
  RotateCcw,
  Sigma,
  ToggleLeft,
  Type,
  User,
  Workflow,
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
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   Shared SVG geometry + animation primitives (this file only)
   ============================================================ */
const pOval = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} a ${rx} ${ry} 0 1 0 ${rx * 2} 0 a ${rx} ${ry} 0 1 0 ${-rx * 2} 0 Z`;
const pRect = (cx: number, y: number, w: number, h: number) =>
  `M ${cx - w / 2} ${y} h ${w} v ${h} h ${-w} Z`;
const pPara = (cx: number, y: number, w: number, h: number, sk = 16) =>
  `M ${cx - w / 2 + sk} ${y} h ${w - sk} l ${-sk} ${h} h ${-(w - sk)} Z`;
const pDiamond = (cx: number, cy: number, w: number, h: number) =>
  `M ${cx} ${cy - h / 2} L ${cx + w / 2} ${cy} L ${cx} ${cy + h / 2} L ${cx - w / 2} ${cy} Z`;

type FlowLine = { t: string; x: number; y: number; size?: number; fill?: string; weight?: number };

function FlowNode({
  d,
  fill,
  stroke,
  lines,
  delay = 0,
}: {
  d: string;
  fill: string;
  stroke?: string;
  lines: FlowLine[];
  delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    >
      <path d={d} fill={fill} stroke={stroke ?? "none"} strokeWidth={stroke ? 1.5 : 0} />
      {lines.map((l) => (
        <text
          key={l.t}
          x={l.x}
          y={l.y}
          textAnchor="middle"
          fontSize={l.size ?? 12}
          fontWeight={l.weight ?? 700}
          fill={l.fill ?? "#3e2c1d"}
        >
          {l.t}
        </text>
      ))}
    </motion.g>
  );
}

function FlowEdge({
  d,
  stroke,
  marker,
  delay = 0,
}: {
  d: string;
  stroke: string;
  marker: string;
  delay?: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      markerEnd={`url(#${marker})`}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.45, delay, ease: "easeInOut" }}
    />
  );
}

/* ============================================================
   HERO
   ============================================================ */
const HERO_SHAPES = [
  { kind: "rounded", top: "13%", left: "6%", size: 56, dur: 7.2, delay: 0, rot: -8, color: "#c2410c" },
  { kind: "diamond", top: "68%", left: "9%", size: 48, dur: 8.4, delay: 0.8, rot: 6, color: "#d97706" },
  { kind: "para", top: "20%", left: "87%", size: 60, dur: 7.8, delay: 0.4, rot: 4, color: "#ea580c" },
  { kind: "rect", top: "60%", left: "89%", size: 50, dur: 8.8, delay: 1.4, rot: -6, color: "#b45309" },
  { kind: "oval", top: "40%", left: "3%", size: 46, dur: 9.2, delay: 2, rot: 0, color: "#7c9a3e" },
  { kind: "diamond", top: "82%", left: "44%", size: 40, dur: 8, delay: 1.1, rot: 10, color: "#be4a4a" },
] as const;

function HeroShape({ b }: { b: (typeof HERO_SHAPES)[number] }) {
  const s = b.size;
  const paths: Record<string, React.ReactNode> = {
    rounded: <rect x="2" y="6" width={s - 4} height={s * 0.62} rx={s * 0.31} />,
    diamond: <path d={`M ${s / 2} 2 L ${s - 2} ${s * 0.4} L ${s / 2} ${s * 0.78} L 2 ${s * 0.4} Z`} />,
    para: <path d={`M ${s * 0.3} 4 H ${s - 2} L ${s * 0.7} ${s * 0.7} H 2 Z`} />,
    rect: <rect x="3" y={s * 0.12} width={s - 6} height={s * 0.66} />,
    oval: <ellipse cx={s / 2} cy={s * 0.4} rx={s / 2 - 2} ry={s * 0.28} />,
  };
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute"
      style={{ top: b.top, left: b.left, rotate: b.rot, opacity: 0.5 }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
    >
      <svg width={s} height={s * 0.8} viewBox={`0 0 ${s} ${s * 0.8}`} fill="none" stroke={b.color} strokeWidth={2}>
        {paths[b.kind]}
      </svg>
    </motion.div>
  );
}

export function AtbHero() {
  return (
    <header id="top" className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16">
      {/* ambient washes — static (cheap), like every shelf hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(245,158,11,.18)" }} />
        <div className="absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl" style={{ background: "rgba(194,65,12,.14)" }} />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl" style={{ background: "rgba(217,119,6,.12)" }} />
      </div>

      {/* animated backdrop — dashed algorithm path + pulsing decision points + floating symbols */}
      <svg aria-hidden viewBox="0 0 1200 620" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
        <motion.path
          d="M -30 480 C 180 380 320 570 560 470 C 780 380 900 250 1230 330"
          fill="none" stroke="#c99a5b" strokeWidth="2" strokeDasharray="3 10" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
        {[
          { x: 170, y: 452 },
          { x: 560, y: 470 },
          { x: 960, y: 306 },
        ].map((p, i) => (
          <motion.circle
            key={i} cx={p.x} cy={p.y} r={6} fill="none" stroke="#c2410c" strokeWidth={2}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
            animate={{ opacity: [0.2, 0.85, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
          />
        ))}
      </svg>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {HERO_SHAPES.map((b, i) => (
          <HeroShape key={i} b={b} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="chip mx-auto">
            <BookOpenCheck className="h-3.5 w-3.5" />
            Shelf 02 · B.S. in Management and Technology · IIT Jodhpur
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
            Algorithmic Thinking in <span className="grad-text">Business</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-warm">
            How do you turn a business mess — queues, inventory, payrolls, ledgers — into steps a
            machine can follow? This course answers it with zero code: data structures and
            algorithms, drawn, traced and reasoned like a manager, not a programmer.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#intro"
              className="rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: "0 14px 30px -12px rgba(194,65,12,.55)" }}
            >
              Start Module 1 <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
            <a
              href="#practice"
              title="Straight to the exam windows — write-the-output, trace-the-pseudocode, concept checks"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e5c79d] bg-[#fffdf9] px-7 py-3.5 text-sm font-bold text-[#7c4a12] transition hover:bg-[#fdf1e0]"
            >
              <PenLine className="h-4 w-4 text-[#c2410c] transition-transform duration-300 group-hover:-rotate-12" />
              Test my knowledge
            </a>
          </div>
        </Reveal>

        {/* course meta — instructor / textbook */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-2">
          <Reveal delay={360}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><User className="h-3.5 w-3.5" /> Instructor</span>
              <p className="mt-3 text-lg font-extrabold text-[#3e2c1d]">Dr. Deepak Kumar Saxena</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">
                Associate Professor — Information Systems &amp; Digital Transformation
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#8a6b45]">
                BE IT · M.Tech IIT Kanpur · PhD Trinity College Dublin
              </p>
              <p className="mt-1 text-[.78rem] font-semibold text-[#a0410a]">ex-ISRO scientist</p>
            </div>
          </Reveal>
          <Reveal delay={430}>
            <div className="card-warm lift h-full p-5 text-left">
              <span className="chip"><BookOpen className="h-3.5 w-3.5" /> Textbook</span>
              <p className="mt-3 text-lg font-extrabold leading-snug text-[#3e2c1d]">
                &ldquo;Codeless Data Structures and Algorithms&rdquo;
              </p>
              <p className="mt-2 text-[.82rem] text-muted-warm">Armstrong Subero · Apress</p>
              <p className="mt-3 text-[.78rem] leading-relaxed text-[#8a6b45]">
                Every idea in this course is taught drawn and traced — never language-first.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={560}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              ["3", "modules"],
              ["19", "chapters"],
              ["30", "exam questions"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <p className="grad-text text-3xl font-black">{n}</p>
                <p className="text-[.72rem] font-bold uppercase tracking-[.18em] text-[#8a6b45]">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <a href="#intro" aria-label="Scroll to Module 1" className="anim-bob rounded-full border border-[#ecd9bd] bg-[#fffdf9]/80 p-3 text-[#c2410c]">
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   MODULE 1 · INTRODUCTION (id="intro")
   ============================================================ */
function BetweenArrow() {
  return (
    <svg viewBox="0 0 60 24" className="hidden h-6 w-14 shrink-0 self-center md:block" aria-hidden>
      <path d="M2 12 H50" stroke="#c2410c" strokeWidth="2.5" fill="none" />
      <path d="M46 5 L56 12 L46 19" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Tag({ label, bg, fg, border }: { label: string; bg: string; fg: string; border: string }) {
  return (
    <span className="rounded-full px-2.5 py-1 text-[.7rem] font-extrabold tracking-wide" style={{ background: bg, color: fg, border: `1px solid ${border}` }}>
      → {label}
    </span>
  );
}

export function AtbIntroSection() {
  return (
    <Section id="intro">
      <SectionHead
        eyebrow="Module 1 · Introduction to algorithms"
        title={
          <>
            An algorithm is just a <span className="grad-text">recipe</span> a machine can follow
          </>
        }
        lead="Every business task — brewing tea, running payroll, approving a loan — can be rewritten as a small set of organised steps. This module builds the four working definitions you will use for the rest of the course — then watches how algorithms grow, evolve and never quite finish."
      />

      <ReadStep n="1" title="Start with chai" sub="One cup of tea contains the entire vocabulary of the module." />

      <Reveal>
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
          {/* DATA */}
          <div className="card-warm lift flex-1 p-5">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5" style={{ color: "#c2410c" }} />
              <h4 className="font-bold text-[#3e2c1d]">Ingredients</h4>
            </div>
            <ul className="mt-3 grid gap-1.5 text-[.88rem] text-[#2b2014]">
              {["1 cup water", "1 cup milk", "2–3 tsp loose black tea", "2–3 tsp sugar"].map((i) => (
                <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#f59e0b" }} />{i}</li>
              ))}
            </ul>
            <div className="mt-4"><Tag label="DATA" bg="#fdf1dd" fg="#a0410a" border="#f0d9ba" /></div>
          </div>
          <BetweenArrow />
          {/* VARIABLES + FUNCTIONS */}
          <div className="card-warm lift flex-1 p-5">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5" style={{ color: "#b45309" }} />
              <h4 className="font-bold text-[#3e2c1d]">Equipment</h4>
            </div>
            <div className="mt-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-3">
              <p className="text-[.88rem] font-semibold text-[#2b2014]">Gas / induction stove · strainer</p>
              <p className="text-[.76rem] text-[#8a6b45]">do actual work on the data</p>
              <div className="mt-2"><Tag label="FUNCTIONS" bg="#eef4dd" fg="#44621d" border="#cfe0ae" /></div>
            </div>
            <div className="mt-3 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-3">
              <p className="text-[.88rem] font-semibold text-[#2b2014]">Saucepan · teacups</p>
              <p className="text-[.76rem] text-[#8a6b45]">hold the data while steps run</p>
              <div className="mt-2"><Tag label="VARIABLES" bg="#f3e8fb" fg="#6b3fa0" border="#e0cdf2" /></div>
            </div>
          </div>
          <BetweenArrow />
          {/* ALGORITHM */}
          <div className="card-warm lift flex-1 p-5">
            <div className="flex items-center gap-2">
              <ListOrdered className="h-5 w-5" style={{ color: "#d97706" }} />
              <h4 className="font-bold text-[#3e2c1d]">Steps</h4>
            </div>
            <ol className="mt-3 grid gap-1.5 text-[.88rem] text-[#2b2014]">
              {[
                "Add water and boil",
                "Add tea leaves, boil 1 min",
                "Pour milk, add sugar",
                "Gentle boil",
                "Simmer 2–3 min",
                "Strain and serve",
              ].map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[.62rem] font-bold text-white" style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)" }}>{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-4"><Tag label="ALGORITHM" bg="#fbe4d8" fg="#9c3a10" border="#f2c8ae" /></div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p className="max-w-3xl text-[.95rem] leading-relaxed text-[#2b2014]">
          Try the recipe with the milk poured first, or the sugar skipped entirely — the{" "}
          <strong>sequence flexes with preference</strong>, but the outcome stays the same: a cup
          of tea. That is the quiet surprise of Lecture 1 — an algorithm is not a sacred order, it
          is <strong>organised steps that work toward an output</strong>. Which is exactly why they
          turn up everywhere: in the kitchen, at the ATM, inside every app you opened today.
        </p>
      </Reveal>

      <ReadStep n="2" title="The working definitions" sub="Four words you will meet in every lecture, every exam question." />

      <Reveal>
        <div className="grid gap-2 md:grid-cols-2">
          <KV k="Data" v="The actual values the algorithm works with while it runs — and they change with every situation: more guests at the table means more water and milk. Or marks, salaries, stock counts." />
          <KV k="Variables" v="Constructs that hold data during computation — think physical vessels: the saucepan holds the tea while it cooks, the teacup holds the serve, S1 holds a mark." />
          <KV k="Algorithm" v="Organised steps that complete a task — the sequence may flex with preference, but every ordering works toward the same output." />
          <KV k="Function" v="A subgroup of organised steps inside a larger algorithm — common tasks whose steps are identical wherever they appear: adding numbers, averaging marks, providing heat in cooking." />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Callout kind="story" title="Why business students care">
          A payroll run, a loan approval, an inventory reorder — each one is an algorithm. Data goes
          in (hours worked, credit score, stock level), organised steps run in between, and a
          decision comes out. Once you see the shape{" "}
          <strong>business process = data + algorithm</strong>, you can redesign any of them.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Every algorithm is a simplification" sub="Start simple, add detail, repeat forever — why nothing ships finished." />

      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <span className="chip"><Workflow className="h-3.5 w-3.5" /> Lecture 1 · complexity &amp; evolution</span>
          <p className="mt-3 text-[.95rem] leading-relaxed text-[#2b2014]">
            Here is the sentence that explains half the software industry:{" "}
            <strong>every algorithm is a simplification of a real process</strong>. Look closely at
            step 1 of the chai recipe — “add water”. Inside those two words hide a dozen intuitive
            moves: find the water, find a container, carry both to the stove, fill to the right
            level. Real life runs on steps that feel too obvious to write down — and an algorithm
            is exactly the act of writing them down anyway.
          </p>
          <p className="mt-3 text-[.95rem] leading-relaxed text-[#2b2014]">
            So algorithms <strong>start simple and gain complexity as details are added</strong>:
            one more check, one more condition, one more branch. The tea recipe became a smarter
            algorithm the moment we asked “is the tea sufficiently brewed?” — and the ATM becomes a
            smarter machine with every rule the bank adds. Complexity is not a defect. It is the
            record of every situation the algorithm has learned to handle.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
              <div className="flex items-center gap-2">
                <Cog className="h-5 w-5" style={{ color: "#c2410c" }} />
                <h4 className="font-bold text-[#3e2c1d]">Deterministic business systems</h4>
              </div>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                Payroll, billing, loan approval, the ATM — modern business runs on{" "}
                <strong>calculation-based, deterministic rules</strong>. Same input, same output,
                no mood swings. That makes them <em>easy to algorithmize</em>: the logic is
                already arithmetic waiting to be organised.
              </p>
            </div>
            <div className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" style={{ color: "#b45309" }} />
                <h4 className="font-bold text-[#3e2c1d]">Physical, real-time systems</h4>
              </div>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                A warehouse robot, an autonomous car — they decide <em>while the world moves</em>,
                with sensors and traffic and weather in the loop. Real-time judgement is far
                harder to codify than arithmetic, which is why these systems remain the hard
                frontier of algorithm design.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Callout kind="why" title="…and that is why quality apps update forever">
          Every update you have ever installed adds <strong>functions, checks and refined
          conditions</strong> to algorithms that already worked. An app is never “finished” — it is
          an algorithm still collecting the details life keeps throwing at it. Frequent updates are
          not churn; they are the simplification catching up with reality.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="From recipe to flowchart" sub="Words describe an algorithm; pictures make it impossible to misread." />

      <Reveal>
        <div className="card-warm p-6">
          <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
            The six chai steps work as text — but real algorithms branch, loop and join, and words
            start to lie. The next section draws this exact recipe as a{" "}
            <strong>flowchart</strong> using all five symbols. First, check yourself:
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Quiz
              q="In the tea recipe, the saucepan and teacups are best described as…"
              options={["Data", "Variables", "Functions", "Output"]}
              answer={1}
              explain="They hold the ingredients while the steps run — storage places, i.e. variables. The stove and strainer do work (functions); the ingredients themselves are the data."
              source="Lecture 1 · working definitions"
            />
            <Quiz
              q="An algorithm is…"
              options={["Any programming language", "Organised steps that convert data into the desired output", "A chart of the company", "A type of flowchart"]}
              answer={1}
              explain="By definition: organised steps that convert data into the desired output. Languages and flowcharts are only ways to write the algorithm down."
              source="Lecture 1 · definition"
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Practice
          title="Pen-paper drill"
          items={[
            { q: "Define data, variable, algorithm and function in one line each — no peeking at the cards above.", hint: "Data is the what; variables are the where; the algorithm is the how; functions are the reusable inside." },
            { q: "Write the tea algorithm as 6 numbered steps, then label each step INPUT, OUTPUT or PROCESS.", hint: "Adding water/milk/tea/sugar are inputs; straining and serving are outputs; boiling and simmering are processing." },
            { q: "List the 4 working definitions from memory. Repeat tomorrow until all four come out in order.", hint: "D-V-A-F: Data, Variables, Algorithm, Function." },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid justify-items-start gap-3">
          <span className="chip"><GraduationCap className="h-3.5 w-3.5" /> Lecture 1 · takeaways</span>
          <Takeaways
            items={[
              <>An <strong>algorithm</strong> is a series of organised steps for a specific task — it converts input data into the desired output.</>,
              <><strong>Plain English and a flowchart</strong> both communicate the same logic — pick whichever your reader follows faster.</>,
              <>Algorithms <strong>start simple and gain complexity</strong> as details, conditions and checks are added.</>,
              <>A single execution follows <strong>only one path</strong> through the decisions — the other branches wait for another run.</>,
              <>Every algorithm is a <strong>simplification</strong> of a real process — “add water” hides a dozen intuitive steps you chose not to codify.</>,
              <>Algorithms power <strong>everyday situations and business software</strong> alike — chai and ATMs obey the same discipline.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · FLOWCHARTS (id="flowcharts")
   ============================================================ */
const TEA_SEQ: { kind: "oval" | "para" | "rect" | "diamond"; label: string }[] = [
  { kind: "oval", label: "START" },
  { kind: "para", label: "Add water" },
  { kind: "rect", label: "Boil the water" },
  { kind: "para", label: "Add tea leaves" },
  { kind: "rect", label: "Boil for 1 minute" },
  { kind: "para", label: "Add milk and sugar" },
  { kind: "rect", label: "Simmer for 2–3 minutes" },
  { kind: "rect", label: "Strain the tea" },
  { kind: "para", label: "Serve tea" },
  { kind: "oval", label: "END" },
];

function TeaFlow({ withDecision }: { withDecision: boolean }) {
  const CX = 210;
  const seq = [...TEA_SEQ];
  if (withDecision) seq.splice(7, 0, { kind: "diamond", label: "Sufficiently brewed?" });
  const H = { oval: 36, para: 38, rect: 38, diamond: 64 } as const;
  const W = { oval: 116, para: 216, rect: 202, diamond: 160 } as const;
  let cursor = 16;
  const rows = seq.map((n) => {
    const top = cursor;
    const h = H[n.kind];
    cursor = top + h + 26;
    return { ...n, top, h, cy: top + h / 2, bottom: top + h };
  });
  const dial = rows.findIndex((r) => r.kind === "diamond");
  const simmer = rows[6];
  const vbH = rows[rows.length - 1].bottom + 22;

  const fillFor = (kind: string, label: string) =>
    kind === "oval" ? (label === "START" ? "#c2410c" : "#3e2c1d") : kind === "para" ? "#f0a04b" : kind === "diamond" ? "#b45309" : "#ffefd6";
  const strokeFor = (kind: string) => (kind === "rect" ? "#c99a5b" : undefined);
  const textFill = (kind: string) => (kind === "rect" || kind === "para" ? "#3e2c1d" : "#fff7ec");
  const dFor = (r: (typeof rows)[number]) =>
    r.kind === "oval" ? pOval(CX, r.cy, W.oval / 2, r.h / 2) : r.kind === "para" ? pPara(CX, r.top, W.para, r.h) : r.kind === "diamond" ? pDiamond(CX, r.cy, W.diamond, r.h) : pRect(CX, r.top, W.rect, r.h);

  return (
    <svg viewBox={`0 0 420 ${vbH}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={withDecision ? "Tea flowchart with the “is the tea sufficiently brewed?” decision loop" : "Tea algorithm flowchart"}>
      <defs>
        <marker id="atbTeaA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
        <marker id="atbTeaR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#be4a4a" /></marker>
        <marker id="atbTeaY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#7c9a3e" /></marker>
      </defs>
      {rows.slice(1).map((r, i) => (
        <FlowEdge key={`e${i}`} d={`M ${CX} ${rows[i].bottom} V ${r.top - 2}`} stroke={i === dial && withDecision ? "#7c9a3e" : "#c99a5b"} marker={i === dial && withDecision ? "atbTeaY" : "atbTeaA"} delay={0.1 + i * 0.14} />
      ))}
      {withDecision ? (
        <>
          <FlowEdge d={`M ${CX - W.diamond / 2} ${rows[dial].cy} H 46 V ${simmer.cy} H ${CX - W.rect / 2 - 6}`} stroke="#be4a4a" marker="atbTeaR" delay={0.6 + rows.length * 0.14} />
          <motion.text x={104} y={rows[dial].cy - 8} fontSize={11} fontWeight={800} fill="#be4a4a" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>NO — not ready</motion.text>
          <motion.text x={CX + 14} y={rows[dial].bottom + 16} fontSize={11} fontWeight={800} fill="#5d7a2e" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1 }}>YES</motion.text>
        </>
      ) : null}
      {rows.map((r, i) => (
        <FlowNode key={r.label} d={dFor(r)} fill={fillFor(r.kind, r.label)} stroke={strokeFor(r.kind)} delay={0.05 + i * 0.14}
          lines={[{ t: r.label, x: CX, y: r.cy + 4, fill: textFill(r.kind) }]} />
      ))}
    </svg>
  );
}

export function AtbFlowchartsSection() {
  return (
    <Section id="flowcharts">
      <SectionHead
        eyebrow="Module 1 · Flowcharts"
        title={
          <>
            Drawing algorithms — the <span className="grad-text">five symbols</span>
          </>
        }
        lead="A flowchart is the diagram version of an algorithm. Entire company processes are documented with just these shapes — master them once, read any process map forever."
      />

      <ReadStep n="1" title="The symbol kit" sub="Five symbols cover almost every flowchart you will ever draw — four shapes plus the arrows that connect them." />

      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <svg viewBox="0 0 800 236" className="h-auto w-full" role="img" aria-label="The five flowchart symbols: rounded rectangle for start/end, rectangle for processing, trapezoid for input/output, diamond for decision, plus flow arrows">
            <defs>
              <marker id="atbSymA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
            </defs>
            {[
              { cx: 80, name: "Rounded rectangle", use: "START / END", d: "M 30 78 H 130 A 22 22 0 0 1 130 142 H 30 A 22 22 0 0 1 30 78 Z", fill: "#c2410c", tf: "#fff7ec", inner: "Start" },
              { cx: 240, name: "Rectangle", use: "PROCESSING statement", d: pRect(240, 82, 124, 56), fill: "#ffefd6", tf: "#3e2c1d", inner: "x = x + 1" },
              { cx: 400, name: "Parallelogram", use: "INPUT / OUTPUT", d: pPara(400, 82, 138, 56, 20), fill: "#f0a04b", tf: "#3e2c1d", inner: "INPUT x" },
              { cx: 566, name: "Diamond", use: "DECISION", d: pDiamond(566, 110, 148, 84), fill: "#b45309", tf: "#fff7ec", inner: "x > 0 ?" },
            ].map((s, i) => (
              <motion.g key={s.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.16 }}>
                <motion.path d={s.d} fill={s.fill} stroke="#8a5a10" strokeWidth={1.5} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.16 }} />
                <text x={s.cx} y={114} textAnchor="middle" fontSize={12} fontWeight={700} fill={s.tf}>{s.inner}</text>
                <text x={s.cx} y={182} textAnchor="middle" fontSize={12.5} fontWeight={800} fill="#3e2c1d">{s.name}</text>
                <text x={s.cx} y={202} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#a0410a" letterSpacing={1}>{s.use}</text>
              </motion.g>
            ))}
            <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              <motion.path d="M 660 110 H 742" stroke="#c2410c" strokeWidth={3} fill="none" markerEnd="url(#atbSymA)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.76 }} />
              <text x={702} y={182} textAnchor="middle" fontSize={12.5} fontWeight={800} fill="#3e2c1d">Arrows</text>
              <text x={702} y={202} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#a0410a" letterSpacing={1}>FLOW</text>
            </motion.g>
          </svg>
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <div className="card-warm p-5 md:p-6">
          <span className="chip"><Workflow className="h-3.5 w-3.5" /> Lecture 1 · symbol kit</span>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <KV k="Rounded rectangle" v="START and END — every flowchart opens and closes in one." />
            <KV k="Rectangle" v="A processing step — something happens: boil, add, compute." />
            <KV k="Trapezoid" v="Input or output — the lecture’s “slanted rectangle”. Data enters or leaves here." />
            <KV k="Arrow" v="The flow of logic and data — which step runs next, and in which direction." />
            <KV k="Diamond" v="A decision requiring branching — a yes/no question with two ways out." />
          </div>
          <p className="mt-3 text-[.85rem] leading-relaxed text-muted-warm">
            One naming note: this course draws the trapezoid as a parallelogram — same slanted
            shape, same input/output job. Different textbooks pick different names; the meanings
            above are the lecture’s. And one law the kit hides in plain sight: arrows never branch
            by themselves — only a diamond may split the flow. A drawing that forks without a
            diamond is not a flowchart; it is a wish.
          </p>
        </div>
      </Reveal>

      <ReadStep n="2" title="The tea flowchart" sub="The six chai steps, one symbol at a time — watch the flow draw itself." />

      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <TeaFlow withDecision={false} />
          <p className="mt-4 border-t border-[#f3e2c8] pt-4 text-[.92rem] leading-relaxed text-[#2b2014]">
            Read it back symbol by symbol and the grammar explains itself. <strong>START</strong>{" "}
            and <strong>END</strong> sit in rounded rectangles — the only two of their kind. Every
            <em> add</em> step (water, leaves, milk &amp; sugar) and the final <em>serve</em> move
            data into or out of the pot, so they get the <strong>trapezoid</strong>. Every{" "}
            <em>boil</em>, <em>simmer</em> and <em>strain</em> transforms what is already inside,
            so they stay <strong>rectangles</strong>. Ten nodes, nine arrows, zero branches — the
            arrows simply carry the flow downward, one direction, no arguments. Input, processing
            and output each live in their own symbol: that is what makes this a <em>refined</em>{" "}
            flowchart.
          </p>
        </div>
      </Reveal>

      <ReadStep n="3" title="Adding a decision" sub="One diamond turns a straight line into a smart, self-checking process." />

      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card-warm h-full p-5 md:p-7">
            <span className="chip"><RotateCcw className="h-3.5 w-3.5" /> Lecture 1 · decision loop</span>
            <div className="mt-3">
              <TeaFlow withDecision />
            </div>
            <p className="mt-2 text-center text-[.78rem] text-muted-warm">
              The rose edge loops back — “No, keep simmering” — until the tea is sufficiently
              brewed. The flow revisits its own steps: the mark of a complex flowchart.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-2">
          <div className="flex h-full flex-col gap-4">
            <Callout kind="insight" title="Decisions make algorithms smart">
              A diamond asks a yes/no question. <strong>Yes</strong> and <strong>No</strong> each
              open a branch — and a branch that loops backwards gives you a{" "}
              <strong>loop</strong>: repeat until the answer flips. Branching + looping is the
              entire control vocabulary of every business rule ever written.
            </Callout>
            <div className="card-warm p-5">
              <p className="eyebrow">Trace it</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                Under-brewed pot: the flow passes the diamond — <em>is the tea sufficiently
                brewed?</em> — three times before Strain; the loop edge (rose) fired twice. The
                algorithm never “guesses”: it checks, branches, repeats.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep n="4" title="Simple, refined, complex" sub="Flowcharts mature in three stages — and every process map you will ever read sits on this ladder." />

      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <span className="chip"><ListOrdered className="h-3.5 w-3.5" /> Lecture 1 · maturity stages</span>
          <div className="mt-4">
            <StepsFlow
              steps={[
                { label: "Simple", sub: "processing only — a straight line of rectangles", icon: <ListOrdered className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: "Refined", sub: "input, processing and output in their own symbols", icon: <Database className="h-5 w-5" style={{ color: "#d97706" }} /> },
                { label: "Complex", sub: "decisions loop the flow back until a condition holds", icon: <Workflow className="h-5 w-5" style={{ color: "#7c9a3e" }} /> },
              ]}
            />
          </div>
          <p className="mt-5 text-[.95rem] leading-relaxed text-[#2b2014]">
            You have already climbed this ladder once today. The first tea chart was{" "}
            <strong>refined</strong> — ingredients and serving got their own slanted boxes while
            boiling kept its rectangles. The moment we asked <em>“is the tea sufficiently
            brewed?”</em> it became <strong>complex</strong>: a decision diamond sends the flow
            back to the simmer, and the algorithm revisits its own steps until the answer flips.
            Simple charts do a task; complex charts handle reality.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Which symbol marks where a flowchart begins and ends?"
            options={["Rounded rectangle", "Diamond", "Trapezoid", "Arrow"]}
            answer={0}
            explain="The rounded rectangle is the START / END terminal — the lecture’s fifth symbol. Diamonds decide, trapezoids move data in and out, arrows carry the flow."
            source="Lecture 1 · symbol kit"
          />
          <Quiz
            q="Which symbol would you use for 'INPUT the length and width'?"
            options={["Rectangle", "Diamond", "Parallelogram", "Oval"]}
            answer={2}
            explain="Input and output steps use the parallelogram — the lecture’s trapezoid, the slanted rectangle. The rectangle is for processing, the diamond for decisions, the rounded rectangle for start/end."
            source="Lecture 1 · symbol kit"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Flowchart drills"
          items={[
            { q: "Draw the tea flowchart from memory — all 10 nodes, correct symbols.", hint: "Parallelograms: add water, add leaves, add milk & sugar, serve. Rectangles: boil, boil 1 min, simmer, strain." },
            { q: "Mark each step as I/O or processing. Which single step becomes a decision if the taster is picky?", hint: "Simmer — split it into “Sufficiently brewed?” with a loop back." },
            { q: "A colleague documents a refund process using only rectangles. Which maturity stage is that, and what would you add first?", hint: "Simple — processing only. Add trapezoids to separate the input (refund request) from the output (money returned), then a diamond for the approval check." },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · ATM — DECISIONS (id="atm", dark)
   ============================================================ */
const ATM_STEPS: { n: string; t: string; d?: string; branches?: { tag: string; text: string; tone: "olive" | "rose" }[] }[] = [
  { n: "1", t: "START", d: "A customer walks up and the session begins." },
  { n: "2", t: "Check card", d: "The machine reads the card details — the session’s first input." },
  { n: "3", t: "Request PIN", d: "Screen displays: “Please enter your 4-digit PIN”." },
  { n: "4", t: "Input PIN", d: "The customer types it — data enters a variable." },
  { n: "5", t: "Check if PIN correct", d: "Verify the PIN against the stored one — a decision. One wrong digit and the session ends right here." },
  {
    n: "6", t: "Branch on PIN",
    branches: [
      { tag: "6a", text: "PIN correct → input amount", tone: "olive" },
      { tag: "6b", text: "Incorrect → end", tone: "rose" },
    ],
  },
  {
    n: "7", t: "Branch on balance",
    branches: [
      { tag: "7a", text: "Balance available → release cash", tone: "olive" },
      { tag: "7b", text: "Insufficient balance → end", tone: "rose" },
    ],
  },
  { n: "8", t: "END", d: "Card returns, session closes — every path ends here." },
];

function AtmFlow() {
  const CX = 350;
  const node = (d: string, fill: string, stroke: string | undefined, lines: FlowLine[], delay: number) => (
    <FlowNode key={lines[0].t} d={d} fill={fill} stroke={stroke} lines={lines} delay={delay} />
  );
  return (
    <svg viewBox="0 0 640 640" className="mx-auto h-auto w-full max-w-xl" role="img" aria-label="ATM cash withdrawal flowchart with two decisions whose No branches both route to End">
      <defs>
        <marker id="atbAtmN" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
        <marker id="atbAtmY" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#9cbf62" /></marker>
        <marker id="atbAtmR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e28b8b" /></marker>
      </defs>
      {/* neutral spine */}
      <FlowEdge d={`M ${CX} 47 V 62`} stroke="#c99a5b" marker="atbAtmN" delay={0.15} />
      <FlowEdge d={`M ${CX} 102 V 126`} stroke="#c99a5b" marker="atbAtmN" delay={0.4} />
      <FlowEdge d={`M ${CX} 166 V 190`} stroke="#c99a5b" marker="atbAtmN" delay={0.65} />
      <FlowEdge d={`M ${CX} 230 V 234`} stroke="#c99a5b" marker="atbAtmN" delay={0.9} />
      <FlowEdge d={`M ${CX} 298 V 322`} stroke="#9cbf62" marker="atbAtmY" delay={1.15} />
      <FlowEdge d={`M ${CX} 362 V 386`} stroke="#c99a5b" marker="atbAtmN" delay={1.35} />
      <FlowEdge d={`M ${CX} 450 V 474`} stroke="#9cbf62" marker="atbAtmY" delay={1.6} />
      <FlowEdge d={`M ${CX} 514 V 545`} stroke="#c99a5b" marker="atbAtmN" delay={1.85} />
      {/* rose No-lane: both decisions → End */}
      <FlowEdge d="M 260 268 H 120 V 566 H 291" stroke="#be4a4a" marker="atbAtmR" delay={1.5} />
      <FlowEdge d="M 245 420 H 120 V 566 H 291" stroke="#be4a4a" marker="atbAtmR" delay={2} />
      <motion.g fill="#e28b8b" fontSize={11} fontWeight={800} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }}>
        <text x={136} y={258}>NO</text>
        <text x={136} y={410}>NO</text>
        <text x={196} y={556}>both join here</text>
      </motion.g>
      <motion.g fill="#9cbf62" fontSize={11} fontWeight={800} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.3 }}>
        <text x={360} y={314}>YES</text>
        <text x={360} y={466}>YES</text>
      </motion.g>
      {/* nodes */}
      {node(pOval(CX, 30, 56, 17), "#c2410c", undefined, [{ t: "START", x: CX, y: 34, fill: "#fff7ec" }], 0)}
      {node(pRect(CX, 66, 196, 36), "rgba(255,236,210,.07)", "#c99a5b", [{ t: "Check card", x: CX, y: 88, fill: "#f7ecdd" }], 0.2)}
      {node(pPara(CX, 130, 214, 36), "#b45309", undefined, [{ t: "Request PIN", x: CX, y: 152, fill: "#fff3e0" }], 0.45)}
      {node(pPara(CX, 194, 214, 36), "#b45309", undefined, [{ t: "Input PIN", x: CX, y: 216, fill: "#fff3e0" }], 0.7)}
      {node(pDiamond(CX, 268, 180, 60), "rgba(245,158,11,.16)", "#f5a623", [{ t: "Pin OK?", x: CX, y: 272, fill: "#ffe4bd" }], 0.95)}
      {node(pPara(CX, 326, 214, 36), "#b45309", undefined, [{ t: "Input amount", x: CX, y: 348, fill: "#fff3e0" }], 1.2)}
      {node(pDiamond(CX, 420, 210, 60), "rgba(245,158,11,.16)", "#f5a623", [{ t: "Balance available?", x: CX, y: 424, fill: "#ffe4bd", size: 11.5 }], 1.45)}
      {node(pRect(CX, 478, 196, 36), "rgba(255,236,210,.07)", "#c99a5b", [{ t: "Release cash", x: CX, y: 500, fill: "#f7ecdd" }], 1.7)}
      {node(pOval(CX, 566, 56, 17), "rgba(255,236,210,.10)", "#c99a5b", [{ t: "END", x: CX, y: 570, fill: "#f7ecdd" }], 1.95)}
    </svg>
  );
}

export function AtbAtmSection() {
  return (
    <Section id="atm" dark>
      <SectionHead
        dark
        eyebrow="Module 1 · Decisions in flowcharts"
        title={
          <>
            The ATM machine — <span className="grad-text">branching</span> in action
          </>
        }
        lead="One real machine, two decisions, three possible endings — a successful withdrawal and two polite refusals. Trace it once and every approval workflow you will ever meet — loans, refunds, KYC — becomes obvious."
      />

      <ReadStep dark n="1" title="The numbered algorithm" sub="Eight steps; steps 6 and 7 each hide a two-way branch." />

      <Reveal>
        <p className="max-w-3xl text-[.95rem] leading-relaxed text-[#cbb392]">
          The ATM is Lecture 1’s business application: cash dispensing, stripped to its skeleton.
          Notice the rhythm before you read a single step — <strong>input, input, decision,
          input, decision, function, end</strong>. Machines that handle money are mostly polite
          questions with hard stops: fail any check and the session ends immediately, no
          exceptions, no negotiation. Keep this skeleton — you will redraw it for loan approvals,
          KYC gates and refund flows for the rest of the course.
        </p>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {ATM_STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 60}>
            <div className="card-warm flex h-full gap-3 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.8rem] font-extrabold text-white">{s.n}</span>
              <div>
                <p className="font-bold text-[#f5e6cd]">{s.t}</p>
                {s.d ? <p className="mt-1 text-[.84rem] leading-relaxed text-[#cbb392]">{s.d}</p> : null}
                {s.branches ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.branches.map((b) => (
                      <span key={b.tag} className="rounded-full px-2.5 py-1 text-[.72rem] font-bold"
                        style={b.tone === "olive" ? { background: "rgba(124,154,62,.18)", color: "#c4d9a0", border: "1px solid rgba(124,154,62,.4)" } : { background: "rgba(190,74,74,.18)", color: "#eba3a3", border: "1px solid rgba(190,74,74,.4)" }}>
                        {b.tag} · {b.text}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep dark n="2" title="The same algorithm as a flowchart" sub="Yes edges in olive, No edges in rose — and watch both No edges join." />

      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <AtmFlow />
          <p className="mt-3 text-center text-[.78rem] text-[#cbb392]">
            Both rose lanes join at END — a failure anywhere still reaches a clean ending. That
            shared exit is what makes the machine safe to automate.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Callout dark kind="why" title="Branches + joins = every business process">
          A loan application: check credit score (branch), verify income (branch), then{" "}
          <strong>join</strong> into one approval decision. A refund request, a KYC check, an
          insurance claim — same skeleton: inputs, checks, branches, a join, one end. If you can
          draw the ATM, you can draw your company.
        </Callout>
      </Reveal>

      <ReadStep dark n="3" title="Two observations the lecture insists on" sub="They read like footnotes; they are the whole point of the example." />

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip"><ToggleLeft className="h-3.5 w-3.5" /> Lecture 1 · one run, one path</span>
            <h4 className="mt-3 font-extrabold leading-snug text-[#f5e6cd]">Not all paths execute in a single run</h4>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">
              The flowchart shows every route the machine <em>could</em> take — but a decision is a
              fork, and each run picks exactly one branch. The lucky customer never visits either
              rose No-lane; the unlucky one never sees “release cash”. Every branch is always{" "}
              <em>possible</em>; on any given run, most are never <em>executed</em>.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip"><FunctionSquare className="h-3.5 w-3.5" /> Lecture 1 · a function inside</span>
            <h4 className="mt-3 font-extrabold leading-snug text-[#f5e6cd]">“Release cash” is a function of its own</h4>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">
              One plain box hides a private algorithm: count the notes, verify denominations,
              update the ledger, confirm pickup. Complex operations get boxed away as{" "}
              <strong>functions</strong> — subgroups of organised steps, identical wherever they
              appear — so the main flow stays readable. You will meet the same idea as{" "}
              <code className="font-mono text-[.78rem]">AVERAGE</code> two chapters from now.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-5">
        <Callout dark kind="insight" title="The vocabulary, all on duty">
          Run the labels back through the machine: reading the card, requesting the PIN and the
          amount are <strong>inputs</strong> — trapezoids. Verifying the PIN and checking the
          balance are <strong>decisions</strong> — diamonds. Dispensing the notes is a{" "}
          <strong>function</strong> — a pre-defined process with an algorithm of its own. One
          everyday machine; every Lecture 1 term working at once.
        </Callout>
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="In the ATM flowchart, the two No branches both lead to…"
            options={["Request PIN again", "Release cash", "End", "Input amount"]}
            answer={2}
            explain="Both failure checks route to the same END oval — the rose lane is a join. Real ATMs add retries around this skeleton, but the lecture version ends on any failure."
            source="Lecture 1 · ATM example"
          />
          <Quiz
            q="During one customer’s run, how many branches of each decision actually execute?"
            options={["Both — every branch runs once", "Exactly one — the outcome picks the path", "None — decisions are skipped", "It alternates between customers"]}
            answer={1}
            explain="A decision resolves to one outcome per run: the flow takes that branch and never visits the other. The chart shows possibilities; an execution shows one path."
            source="Lecture 1 · ATM example"
          />
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Branch drills"
          items={[
            { q: "Trace what happens when the PIN is wrong: list every node the flow visits, in order.", hint: "Start → Check card → Request PIN → Input PIN → Pin OK? → NO lane → End. Five nodes, never reaching amount." },
            { q: "Write the 6a/6b branch pattern for a UPI payment (balance check + limit check).", hint: "6a: within limit → check balance; 6b: over limit → decline. Mirror the ATM diamonds." },
            { q: "“Release cash” is a function. Write 4 steps its own algorithm must contain.", hint: "Count the notes → verify denominations → update the ledger → confirm pickup and close the session." },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · PSEUDOCODE & FUNCTIONS (id="pseudocode")
   ============================================================ */
const PSEUDO_ONE = 'IF AVG IS MORE THAN 60, OUTPUT "FIRST CLASS"';

const PSEUDO_FN = `DEFINE S1, S2, S3, S4, S5 AS INTEGER
INPUT S1, S2, S3, S4, S5
DEFINE AVG AS FLOAT
AVG = AVERAGE(S1, S2, S3, S4, S5)
OUTPUT AVG
IF AVG IS MORE THAN 60, OUTPUT "FIRST CLASS"`;

export function AtbCodeSection() {
  return (
    <Section id="pseudocode">
      <SectionHead
        eyebrow="Module 1 · Functions, pseudocode & code"
        title={
          <>
            From pseudocode to code — and the <span className="grad-text">function</span> in between
          </>
        }
        lead="The same algorithm can be said three ways. Pseudocode keeps the precision of code without the syntax; functions keep the algorithm short by hiding repeated work in reusable boxes."
      />

      <ReadStep n="1" title="Three levels of saying it" sub="Same idea — increasing formality. None of them is “the algorithm”; they all describe it." />

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal>
          <div className="card-warm lift h-full p-5">
            <span className="chip"><ListOrdered className="h-3.5 w-3.5" /> Algorithm</span>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
              Plain English steps anyone can follow:
            </p>
            <ol className="mt-2 grid gap-1 text-[.84rem] text-[#5d4a35]">
              <li>1. Input five marks</li>
              <li>2. Add them together</li>
              <li>3. Divide by 5</li>
              <li>4. Output the average</li>
            </ol>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm h-full p-5">
            <span className="chip"><Braces className="h-3.5 w-3.5" /> Pseudocode</span>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
              “A code-like statement that is understandable in English”:
            </p>
            <div className="mt-3">
              <CodeBlock title="pseudocode.txt" code={PSEUDO_ONE} runnable={false} />
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="card-warm lift h-full p-5">
            <span className="chip"><Workflow className="h-3.5 w-3.5" /> Code</span>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
              Implemented in a real language — <strong>C/C++, Java, Python</strong> — so a machine
              can execute it.
            </p>
            <p className="mt-3 text-[.8rem] leading-relaxed text-[#8a6b45]">
              In this course we stop one step before: you trace the pseudocode on paper; the
              machine never sees a line of it.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="Functions = reusable boxes" sub="Name a common task once, call it everywhere." />

      <div className="grid items-center gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-5 md:p-7">
            <svg viewBox="0 0 320 200" className="mx-auto h-auto w-full max-w-xs" role="img" aria-label="Function as a pre-defined process box: inputs in, one output out">
              <defs>
                <marker id="atbFnA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
              </defs>
              <FlowEdge d="M 160 16 V 56" stroke="#c2410c" marker="atbFnA" delay={0.2} />
              <FlowEdge d="M 160 134 V 174" stroke="#7c9a3e" marker="atbFnA" delay={0.55} />
              <FlowNode d={pRect(160, 62, 150, 66)} fill="#ffefd6" stroke="#c2410c" delay={0.35} lines={[{ t: "AVERAGE", x: 160, y: 90, size: 14, fill: "#3e2c1d" }, { t: "pre-defined process", x: 160, y: 110, size: 9, weight: 600, fill: "#8a6b45" }]} />
              <motion.path d="M 96 62 V 128 M 224 62 V 128" stroke="#c2410c" strokeWidth={2.5} fill="none" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} />
              <text x={172} y={30} fontSize={11} fontWeight={700} fill="#a0410a">S1 … S5 in</text>
              <text x={172} y={166} fontSize={11} fontWeight={700} fill="#4d6b1f">62 out</text>
            </svg>
            <p className="mt-1 text-center text-[.78rem] text-muted-warm">
              The double side-bars mark a <strong>pre-defined process</strong> — a function call.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-3">
          {[
            { call: "AVERAGE(S1, S2, S3, S4, S5)", out: "62", note: "adds the five marks, divides by 5" },
            { call: "square(x)", out: "x²", note: "multiplies the input by itself" },
            { call: 'UPPERCASE("abc")', out: '"ABC"', note: "returns the text in capitals" },
          ].map((f, i) => (
            <Reveal key={f.call} delay={i * 100}>
              <div className="card-warm lift flex flex-wrap items-center gap-x-3 gap-y-1 p-4">
                <FunctionSquare className="h-4 w-4 shrink-0" style={{ color: "#c2410c" }} />
                <code className="rounded-md bg-[#fdf1e0] px-2 py-0.5 font-mono text-[.82rem] font-bold text-[#7c4a12]">{f.call}</code>
                <ArrowRight className="h-4 w-4 text-[#c99a5b]" />
                <code className="font-mono text-[.86rem] font-bold text-[#4d6b1f]">{f.out}</code>
                <span className="ml-auto text-[.76rem] text-muted-warm">{f.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ReadStep n="3" title="Pseudocode with a function" sub="The main flow stays six lines — the adding lives inside AVERAGE." />

      <div className="grid items-start gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <CodeBlock title="average.pseudo" code={PSEUDO_FN} runnable={false}
            note="AVERAGE(S1…S5) is the function call — in the flowchart it appears as a pre-defined process box (rectangle with double side-bars)." />
        </Reveal>
        <Reveal delay={120} className="lg:col-span-2">
          <Callout kind="insight" title="Why functions simplify algorithms">
            Functions <strong>carry out common tasks</strong> so the main algorithm never repeats
            them. Need the average of 5 marks in ten places? Write <code className="font-mono text-[.8rem]">AVERAGE</code> once.
            The flowchart shows the call as a single box — readers can trust it without re-reading
            the internals.
          </Callout>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="Pseudocode is…"
            options={["A programming language", "A code-like statement that is understandable in English", "Machine code", "A flowchart symbol"]}
            answer={1}
            explain="Pseudocode borrows the shape of code (DEFINE, INPUT, IF…) but stays readable as English — it is a design tool, not something a machine runs."
            source="Lecture 1 · three levels"
          />
          <Practice
            title="Function drills"
            items={[
              { q: "Write AVERAGE as a function: what are its inputs, what does it do, what does it return?", hint: "Inputs S1…S5; steps: SUM = S1+…+S5, return SUM/5." },
              { q: "Split the tea algorithm into 3 functions — Boil, Add, Serve. Which steps go inside each?", hint: "Boil: heat water/tea; Add: milk, sugar, leaves; Serve: strain + pour. The main flow becomes 3 calls." },
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   MODULE 1 · WORKED EXAMPLE — AVERAGE MARKS (id="average")
   ============================================================ */
type MemStep = { code: string; cap: string; box?: string; val?: string };

const AVG_LINES: MemStep[] = [
  { code: "DEFINE S1 AS INTEGER", cap: "Variable created — an empty box named S1", box: "S1" },
  { code: "INPUT S1", cap: "Data value put into the variable — 60 drops in", box: "S1", val: "60" },
  { code: "DEFINE S2 AS INTEGER", cap: "Variable created — an empty box named S2", box: "S2" },
  { code: "INPUT S2", cap: "65 drops into S2", box: "S2", val: "65" },
  { code: "DEFINE S3 AS INTEGER", cap: "Variable created — an empty box named S3", box: "S3" },
  { code: "INPUT S3", cap: "70 drops into S3", box: "S3", val: "70" },
  { code: "DEFINE S4 AS INTEGER", cap: "Variable created — an empty box named S4", box: "S4" },
  { code: "INPUT S4", cap: "55 drops into S4", box: "S4", val: "55" },
  { code: "DEFINE S5 AS INTEGER", cap: "Variable created — an empty box named S5", box: "S5" },
  { code: "INPUT S5", cap: "60 drops into S5 — all the data is in memory", box: "S5", val: "60" },
  { code: "DEFINE SUM AS INTEGER", cap: "Variable created — SUM will collect the total", box: "SUM" },
  { code: "SUM = S1 + S2 + S3 + S4 + S5", cap: "The boxes are read and added — SUM fills with 310", box: "SUM", val: "310" },
  { code: "DEFINE AVG AS FLOAT", cap: "Variable created — AVG will hold the average", box: "AVG" },
  { code: "AVG = SUM / 5", cap: "310 ÷ 5 — AVG fills with 62", box: "AVG", val: "62" },
  { code: "OUTPUT AVG", cap: "The answer leaves memory — the machine shows 62" },
];

const AVG_BOXES = ["S1", "S2", "S3", "S4", "S5", "SUM", "AVG"];

function MemBox({ label, value, created, hot }: { label: string; value: string | null; created: boolean; hot: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span className="font-mono text-[.62rem] font-bold uppercase tracking-widest text-[#8a6b45]">{label}</span>
      <div
        className={`flex h-16 w-[68px] items-center justify-center rounded-xl border-2 font-mono text-lg font-bold shadow-inner transition-all duration-300 ${
          hot ? "border-[#f5a623] shadow-[0_0_20px_rgba(245,166,35,.4)]" : created ? "border-[#6b543a]" : "border-dashed border-[#d9c5a5]"
        }`}
        style={{ background: created ? "linear-gradient(150deg,#4a3a26,#2f2113)" : "rgba(74,58,38,.10)" }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={value ?? "empty"}
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={value ? "text-white" : created ? "text-[#a08760]" : "text-transparent"}
          >
            {value ?? "·"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

function AverageLab() {
  const [step, setStep] = useState(0);
  const total = AVG_LINES.length;
  const boxVal = (b: string) => {
    for (let i = step - 1; i >= 0; i--) {
      if (AVG_LINES[i].box === b && AVG_LINES[i].val) return AVG_LINES[i].val as string;
    }
    return null;
  };
  const boxCreated = (b: string) => AVG_LINES.some((l, i) => i < step && l.box === b);
  const activeBox = step > 0 ? AVG_LINES[step - 1].box : undefined;
  const done = step === total;

  return (
    <div className="card-warm overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 border-b border-[#f3e2c8] bg-[#fdf6e9] px-5 py-3">
        <span className="chip"><Database className="h-3.5 w-3.5" /> Memory-box stepper</span>
        <span className="ml-auto rounded-full border border-[#f0d9ba] bg-white/70 px-3 py-1 font-mono text-[.72rem] font-bold text-[#a0410a]">
          Step {step} / {total}
        </span>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-2">
        {/* pseudocode panel */}
        <div className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] p-3">
          <p className="eyebrow mb-2">Pseudocode</p>
          <ol className="grid gap-0.5">
            {AVG_LINES.map((l, i) => {
              const isCur = i === step - 1;
              const past = i < step - 1;
              return (
                <li key={l.code} className={`flex items-center gap-2 rounded-lg px-2 py-1 font-mono text-[.74rem] transition-colors duration-300 ${isCur ? "border-l-4 border-[#c2410c] bg-[#fdf1e0] font-bold text-[#7c4a12]" : past ? "text-[#6f5438]" : "text-[#b59a77]"}`}>
                  <span className="w-5 shrink-0 text-right text-[.62rem] opacity-60">{i + 1}</span>
                  {l.code}
                </li>
              );
            })}
          </ol>
        </div>

        {/* memory panel */}
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 py-2">
            {AVG_BOXES.map((b) => (
              <MemBox key={b} label={b} value={boxVal(b)} created={boxCreated(b)} hot={activeBox === b} />
            ))}
          </div>
          <div className="mt-4 flex min-h-[3.4rem] items-center justify-center rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="text-[.86rem] leading-relaxed text-[#2b2014]">
                {step === 0 ? "Press “Next step” and watch memory fill up, one instruction at a time." : AVG_LINES[step - 1].cap}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(s + 1, total))}
              disabled={done}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[.82rem] font-bold text-white shadow-md transition enabled:hover:scale-[1.04] disabled:opacity-40"
              style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
            >
              <Play className="h-3.5 w-3.5" /> Next step ▻
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="inline-flex items-center gap-2 rounded-full border border-[#e5c79d] bg-[#fffdf9] px-5 py-2.5 text-[.82rem] font-bold text-[#7c4a12] transition hover:bg-[#fdf1e0]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
            {done ? (
              <span className="anim-pop inline-flex items-center gap-2 rounded-full px-4 py-2 text-[.8rem] font-extrabold" style={{ background: "#eef4dd", color: "#44621d", border: "1px solid #cfe0ae" }}>
                OUTPUT → 62
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

const PSEUDO_FC = `DEFINE S1, S2, S3, S4, S5, SUM AS INTEGER
INPUT S1, S2, S3, S4, S5
SUM = S1 + S2 + S3 + S4 + S5
DEFINE AVG AS FLOAT
AVG = SUM / 5
OUTPUT AVG
IF AVG IS MORE THAN 60, OUTPUT "FIRST CLASS"`;

const DTYPES = [
  { icon: Hash, name: "Integer", holds: "Round numbers — no decimal part", ex: "Number of students, courses, books" },
  { icon: Sigma, name: "Float", holds: "Decimal numbers", ex: "Temperature, interest rate, CGPA" },
  { icon: ToggleLeft, name: "Boolean", holds: "0 or 1 — true / false", ex: "On/off, eligible/ineligible, pass/fail" },
  { icon: Type, name: "Character", holds: "Text — letters, words, sentences", ex: "Name, address, description, role, book title" },
];

export function AtbAverageSection() {
  return (
    <Section id="average">
      <SectionHead
        eyebrow="Module 1 · Worked example"
        title={
          <>
            Average marks — <span className="grad-text">arithmetic</span> vs algorithm
          </>
        }
        lead="Five marks, one average. The school answer is a number; the algorithmic answer is a machine-followable process — and the difference is exactly what this course is about."
      />

      <ReadStep n="1" title="The school way" sub="Arithmetic gets the answer — but it forgets the method." />

      <Reveal>
        <div className="card-warm p-6">
          <p className="text-center font-mono text-lg font-bold text-[#3e2c1d] md:text-2xl">
            Average = (60 + 65 + 70 + 55 + 60) / 5 = <span className="grad-text">310 / 5 = 62</span>
          </p>
          <div className="mt-5">
            <StepsFlow
              steps={[
                { label: "Add the marks", sub: "60 + 65 + 70 + 55 + 60 = 310", icon: <Banknote className="h-5 w-5" style={{ color: "#c2410c" }} /> },
                { label: "Divide by the number of subjects", sub: "310 ÷ 5 = 62", icon: <Percent className="h-5 w-5" style={{ color: "#7c9a3e" }} /> },
              ]}
            />
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="The algorithmic way — memory boxes" sub="Step through the pseudocode and watch each variable appear, receive data and compute." />

      <Reveal>
        <AverageLab />
      </Reveal>

      <ReadStep n="3" title="Data types matter" sub="Every variable is declared with a pre-determined datatype." />

      <Reveal>
        <div className="card-warm overflow-x-auto p-1.5">
          <table className="warm-table">
            <thead>
              <tr><th>Type</th><th>What it holds</th><th>Business examples</th></tr>
            </thead>
            <tbody>
              {DTYPES.map((t) => (
                <tr key={t.name}>
                  <td><span className="inline-flex items-center gap-2 font-bold text-[#a0410a]"><t.icon className="h-4 w-4" />{t.name}</span></td>
                  <td>{t.holds}</td>
                  <td className="text-[#5d4a35]">{t.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal className="mt-3">
        <p className="text-[.85rem] leading-relaxed text-muted-warm">
          Note: modern languages can <strong>infer the type from the first input</strong> — assign
          8.74 to a fresh variable and it quietly becomes a float. Older languages force you to
          declare it up front, as our pseudocode does.
        </p>
      </Reveal>

      <ReadStep n="4" title="Level up: FIRST CLASS" sub="One IF statement turns the average into a decision." />

      <div className="grid items-start gap-5 lg:grid-cols-2">
        <Reveal>
          <CodeBlock title="first_class.pseudo" code={PSEUDO_FC} runnable={false} output="62.0"
            note="AVG is a FLOAT, so the machine prints 62.0 — and because 62.0 IS MORE THAN 60, the IF fires." />
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm flex h-full flex-col justify-center gap-5 p-5">
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-4">
              <MemBox label="SUM" value="310" created hot={false} />
              <MemBox label="AVG" value="62.0" created hot />
              <div className="flex flex-col items-center justify-end gap-1.5">
                <span className="font-mono text-[.62rem] font-bold uppercase tracking-widest text-[#8a6b45]">IF fires</span>
                <span className="anim-pop inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-[.85rem] font-extrabold" style={{ background: "#eef4dd", color: "#44621d", border: "1px solid #cfe0ae" }}>
                  <GraduationCap className="h-4 w-4" /> FIRST CLASS
                </span>
              </div>
            </div>
            <p className="text-center text-[.8rem] leading-relaxed text-muted-warm">
              Same five marks as the lab above — but SUM is reused, AVG is a float, and the output
              is now a verdict, not just a number.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Quiz
            q="CGPA = 8.74. Best primitive type?"
            options={["Integer", "Float", "Boolean", "Character"]}
            answer={1}
            explain="8.74 has a decimal part — CGPA values are floats (that is exactly why AVG was DEFINE-d AS FLOAT in the lab)."
            source="Lecture 1 · datatypes"
          />
          <Quiz
            q="AVG is defined as INTEGER but SUM/5 = 62.5. What happens conceptually?"
            options={["It stays 62.5 — nothing changes", "The decimal part is dropped — it becomes 62", "The program always crashes", "It becomes the text “62.5”"]}
            answer={1}
            explain="An integer box cannot hold a decimal part — conceptually it is truncated to 62. This is why the lecture declares AVG AS FLOAT before dividing."
            source="Lecture 1 · datatypes"
          />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>An <strong>algorithm</strong> is a series of steps to complete a task — chai, payroll or an ATM withdrawal.</>,
            <>It can be represented as a <strong>flowchart</strong> (five symbols — four shapes plus the arrows that join them) or as <strong>pseudocode</strong>.</>,
            <>Algorithms get <strong>more complex as details are added</strong> — each decision adds a branch.</>,
            <>They are finally implemented in languages like <strong>C/C++, Java and Python</strong> — but the thinking comes first.</>,
            <>Variables can have <strong>pre-determined datatypes</strong> (integer, float, boolean, character); modern languages can infer them.</>,
            <><strong>Functions</strong> simplify algorithms by carrying out common tasks — shown in flowcharts as pre-defined process boxes.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
