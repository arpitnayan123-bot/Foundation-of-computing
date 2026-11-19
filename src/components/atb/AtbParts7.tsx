"use client";

/* ============================================================
   ATB · PARTS 7 — the four LIVE lecture recaps (L8/L13/L18/L23).

   These were live sessions that repeated recorded material, so
   each recap is a compact, diagram-dense review — Venn diagrams
   as the visual signature. Full-length chapters live elsewhere
   (textual pointers only, no router links).
   ============================================================ */

import { motion } from "framer-motion";
import {
  Braces,
  Building2,
  Cog,
  Coins,
  Compass,
  Copy,
  Cpu,
  Dna,
  Fingerprint,
  FolderTree,
  Gamepad2,
  GitBranch,
  Globe,
  Hash,
  History,
  Keyboard,
  Landmark,
  Layers,
  Library,
  Link2,
  Network,
  Play,
  Printer,
  Route,
  Scale,
  Share2,
  Sigma,
  Split,
  Stethoscope,
  TrafficCone,
  Undo2,
  Users,
  Waypoints,
  Zap,
} from "lucide-react";
import {
  Callout,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";
import { eyebrowOf } from "@/components/atb/lectures";
import {
  ATB_OLIVE,
  AtbCells,
  AtbExamCallout,
  AtbFigure,
  AtbPill,
  AtbQueueRow,
  AtbStackCol,
  AtbStepper,
} from "@/components/atb/AtbStepper";

const ONCE = { once: true } as const;

/* ============================================================
   SHARED — two-circle Venn diagram (flagship of recaps 8 & 13)

   Translucent warm circles + zone labels in the SVG, item lists
   as HTML columns beside it. Fully responsive: the SVG scales
   via viewBox and the columns stack on small screens, so no
   overflow-x wrapper is needed.
   ============================================================ */

interface VennItem {
  t: string;
  d: string;
}

function VennColumn({ tone, label, items }: { tone: string; label: string; items: VennItem[] }) {
  return (
    <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
      <p
        className="flex items-center gap-2 text-[.72rem] font-extrabold uppercase tracking-[.14em]"
        style={{ color: tone }}
      >
        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: tone }} aria-hidden />
        {label}
      </p>
      <ul className="mt-3 grid gap-2">
        {items.map((it) => (
          <li key={it.t} className="flex items-start gap-2.5 text-[.84rem] leading-snug">
            <span
              className="mt-[.42rem] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: tone, opacity: 0.5 }}
              aria-hidden
            />
            <span className="text-[#2b2014]">
              <strong>{it.t}</strong>
              <span className="text-[#7a6248]"> — {it.d}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VennTwo({
  ariaLabel,
  left,
  right,
  shared,
  caption,
}: {
  ariaLabel: string;
  left: { label: string; items: VennItem[] };
  right: { label: string; items: VennItem[] };
  shared: { label: string; items: VennItem[] };
  caption: string;
}) {
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
        <svg viewBox="0 0 640 292" className="h-auto w-full" role="img" aria-label={ariaLabel}>
          {/* left circle */}
          <motion.circle
            cx={250}
            cy={152}
            r={118}
            fill="rgba(245,158,11,.16)"
            stroke="#d97706"
            strokeWidth={2.5}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={ONCE}
            transition={{ duration: 0.5 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          {/* right circle */}
          <motion.circle
            cx={390}
            cy={152}
            r={118}
            fill="rgba(124,154,62,.16)"
            stroke="#7c9a3e"
            strokeWidth={2.5}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={ONCE}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          {/* zone labels */}
          <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.45 }}>
            <text x={210} y={100} textAnchor="middle" fontSize={15} fontWeight={800} fill="#9a5206">
              {left.label}
            </text>
            <text x={450} y={100} textAnchor="middle" fontSize={15} fontWeight={800} fill="#4a6321">
              {right.label}
            </text>
            <rect x={279} y={140} width={82} height={24} rx={12} fill="#fffaf1" stroke="#e8dcc0" />
            <text x={320} y={156} textAnchor="middle" fontSize={11} fontWeight={800} fill="#7c6248">
              {shared.label}
            </text>
          </motion.g>
          {/* decorative zone dots */}
          <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.6 }}>
            <circle cx={185} cy={212} r={3.5} fill="#d97706" opacity={0.4} />
            <circle cx={160} cy={165} r={3.5} fill="#d97706" opacity={0.4} />
            <circle cx={212} cy={250} r={3.5} fill="#d97706" opacity={0.4} />
            <circle cx={320} cy={195} r={3.5} fill="#8a6b45" opacity={0.45} />
            <circle cx={320} cy={216} r={3.5} fill="#8a6b45" opacity={0.45} />
            <circle cx={455} cy={212} r={3.5} fill="#7c9a3e" opacity={0.45} />
            <circle cx={482} cy={165} r={3.5} fill="#7c9a3e" opacity={0.45} />
            <circle cx={428} cy={250} r={3.5} fill="#7c9a3e" opacity={0.45} />
          </motion.g>
        </svg>
        <div className="grid gap-3">
          <VennColumn tone="#b45309" label={`${left.label} only`} items={left.items} />
          <VennColumn tone="#7c6248" label={`Shared — ${shared.label}`} items={shared.items} />
          <VennColumn tone="#5d7a2e" label={`${right.label} only`} items={right.items} />
        </div>
      </div>
      <p className="mt-5 border-t border-[#f3e2c8] pt-4 text-[.88rem] leading-relaxed text-muted-warm">{caption}</p>
    </div>
  );
}

/* ============================================================
   SECTION 1 — LECTURE 8 · LIVE recap (id="recap8")
   ============================================================ */

const R8_TECH = [
  {
    n: "Finiteness",
    line: "Must terminate after a countable number of steps.",
    ex: "Counting students in a class ends; waiting forever for the next store customer never does.",
  },
  {
    n: "Definiteness",
    line: "Every step clear and unambiguous.",
    ex: "“Add five numbers, divide by five” is definite; “add some tea powder” is not — how much is some?",
  },
  {
    n: "Well-defined input",
    line: "Inputs specified exactly.",
    ex: "Rectangle area needs length and width — not “the required values”.",
  },
  {
    n: "Well-defined output",
    line: "The outcome is stated up front.",
    ex: "A loan algorithm returns Approved or Rejected — never just “processing complete”.",
  },
  {
    n: "Effectiveness",
    line: "Each step basic enough to finish in finite time.",
    ex: "“Stock < 50 → order 200” works; “check stock, order if needed” is vague.",
  },
];

const R8_EXEC = [
  {
    n: "Language independence",
    line: "Plain English or pseudocode first.",
    ex: "The idea must survive translation — C, Python or Java comes later.",
  },
  {
    n: "Determinism",
    line: "Same input, same output, every time.",
    ex: "A quantitative loan check is deterministic; a visa interview is not — subjectivity leaks in.",
  },
  {
    n: "Feasibility",
    line: "Realistic within memory, money and time.",
    ex: "Sequential payroll is feasible; parallel-processing trivial sums is overkill.",
  },
  {
    n: "Generality",
    line: "Handles all situations, not pet cases.",
    ex: "No hardcoded employee names, no fixed subject count — accept any number of either.",
  },
];

export function AtbRecap8Section() {
  return (
    <Section id="recap8">
      <SectionHead
        eyebrow={eyebrowOf("recap8")}
        title={
          <>
            Algorithm properties &amp; linear structures — <span className="grad-text">the live recap</span>
          </>
        }
        lead="A live session compressed three recorded lectures into one sitting: the nine properties that make an algorithm a good one, the three classic approaches, and the two linear structures everything else stands on. Compact by design — the diagrams do the talking."
      />

      <Reveal className="mb-2">
        <Callout kind="story" title="Lecture 8 · the first consolidation point">
          This live session <strong>re-stacks the whole first block</strong>: the nine properties that make an
          algorithm a good one (five technical, four execution &amp; design), the three classic approaches, and the
          two linear structures everything else stands on. Algorithms should be designed with these characteristics
          so they work effectively in real-world applications, while data structures provide organized ways to store
          and manage data efficiently. Everything after Part I builds on what this lecture ties down.
        </Callout>
      </Reveal>

      <ReadStep
        n="1"
        title="Nine properties, two families"
        sub="Five technical + four execution & design — each one easiest to remember by its violation"
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">
              <Cog className="h-3.5 w-3.5" aria-hidden /> Lecture 8 · technical properties
            </span>
            <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
              Family one asks: does it even deserve the name algorithm?
            </p>
            <div className="mt-3 grid gap-2">
              {R8_TECH.map((p) => (
                <div key={p.n} className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                  <p className="text-[.85rem] font-bold text-[#3e2c1d]">{p.n}</p>
                  <p className="text-[.78rem] leading-snug text-[#5d4a33]">{p.line}</p>
                  <p className="mt-0.5 text-[.74rem] leading-snug text-[#a06a2c]">{p.ex}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">
              <Compass className="h-3.5 w-3.5" aria-hidden /> Lecture 8 · execution &amp; design
            </span>
            <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
              Family two asks: does it survive contact with reality?
            </p>
            <div className="mt-3 grid gap-2">
              {R8_EXEC.map((p) => (
                <div key={p.n} className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                  <p className="text-[.85rem] font-bold text-[#3e2c1d]">{p.n}</p>
                  <p className="text-[.78rem] leading-snug text-[#5d4a33]">{p.line}</p>
                  <p className="mt-0.5 text-[.74rem] leading-snug text-[#a06a2c]">{p.ex}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="Three ways to attack a problem" sub="Divide & conquer · greedy · dynamic programming" />
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: Split,
            t: "Divide & conquer",
            chip: "Lecture 8 · approach 1",
            d: "Split a large problem into subproblems, solve each separately, combine the results.",
            ex: "Regional sales analysis — divide by region, analyse each, total the parts.",
          },
          {
            icon: Coins,
            t: "Greedy",
            chip: "Lecture 8 · approach 2",
            d: "Take the locally best choice at every step — quick and practical, not always globally optimal.",
            ex: "The cashier returns change largest-denomination first.",
          },
          {
            icon: History,
            t: "Dynamic programming",
            chip: "Lecture 8 · approach 3",
            d: "Let past solutions and decisions inform the current one.",
            ex: "Production planning rides the seasonal trends of previous quarters.",
          },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 90}>
            <div className="card-warm lift h-full p-4">
              <div className="flex items-center gap-2">
                <c.icon className="h-5 w-5 shrink-0" style={{ color: "#c2410c" }} aria-hidden />
                <p className="font-extrabold text-[#3e2c1d]">{c.t}</p>
              </div>
              <p className="mt-2 text-[.84rem] leading-relaxed text-[#5d4a33]">{c.d}</p>
              <p className="mt-2 text-[.8rem] leading-relaxed text-[#a06a2c]">{c.ex}</p>
              <span className="chip mt-3">{c.chip}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <AtbStepper
        title="What happens next? — sorting the nine properties into their two families"
        steps={[
          {
            label: "Finiteness goes in first — the classroom count ends, the store counter never does.",
            detail: "Technical family: it defines what the algorithm IS.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="technical" v="finiteness" tone="twin" />
                <AtbPill k="execution" v="—" tone="broken" />
              </div>
            ),
          },
          {
            label: "Definiteness, well-defined inputs, well-defined outputs, effectiveness join it.",
            detail: "All five technical properties settle: exact steps, named inputs, quotable outputs, practical work.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="technical" v="5 / 5" tone="twin" />
                <AtbPill k="execution" v="—" tone="broken" />
              </div>
            ),
          },
          {
            label: "Language independence crosses over — implementation choice comes later, in C, Python or Java.",
            detail: "Execution family begins: how it RUNS, not what it IS.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="technical" v="5 / 5" tone="twin" />
                <AtbPill k="execution" v="1 / 4" tone="active" />
              </div>
            ),
          },
          {
            label: "Determinism, feasibility, generality complete the second family — 9 properties, 2 families.",
            detail: "Same-input-same-output · realistic resources · every valid instance, no special cases.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="technical" v="finiteness · definiteness · inputs · outputs · effectiveness" tone="twin" />
                <AtbPill k="execution" v="language independence · determinism · feasibility · generality" tone="active" />
              </div>
            ),
          },
        ]}
      />

      <Reveal className="mt-8">
        <span className="chip">Lecture 8 · recap takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>Technical: <strong>finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness</strong>.</>,
              <>Execution &amp; design: <strong>language independence, determinism, feasibility, generality</strong>.</>,
              <>Three approaches: <strong>divide &amp; conquer</strong> (split &amp; combine), <strong>greedy</strong> (best now), <strong>dynamic programming</strong> (past informs future).</>,
              <>The arrays-vs-lists choice moves to the next chapter — with the Venn.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 1b — LECTURE 8 · ARRAYS VS LISTS (id="venn8")
   The flagship two-circle Venn and the ten-second decision.
   ============================================================ */

export function AtbVenn8Section() {
  return (
    <Section id="venn8">
      <SectionHead
        eyebrow={eyebrowOf("venn8")}
        title={
          <>
            Arrays <span className="grad-text">vs</span> linked lists — the Venn that settles it
          </>
        }
        lead="Both structures underpin everything from stacks to graphs. The live session drew the choice as one picture: a small shared core, two opposite personalities."
      />

      <ReadStep n="1" title="The flagship Venn" sub="One shared core, two opposite personalities" />
      <Reveal>
        <AtbFigure notice="the shared core is small and structural — linear, ordered, foundational — while the personalities clash around it: the array buys speed with rigidity, the list buys flexibility with traversal.">
        <VennTwo
          ariaLabel="Venn diagram comparing arrays and linked lists: they share being linear, ordered and foundational; arrays alone are fixed-size, contiguous, index-accessed and shift on insert or delete; linked lists alone are dynamic, scattered nodes behind a head pointer, accessed by pointer hops with cheap re-wiring"
          left={{
            label: "Arrays",
            items: [
              { t: "Fixed size", d: "defined at creation — resizing copies the world" },
              { t: "Contiguous memory", d: "one sequential block of locations" },
              { t: "O(1) direct access", d: "the index IS the address" },
              { t: "Shift to insert/delete", d: "middle changes push neighbours around" },
            ],
          }}
          shared={{
            label: "both",
            items: [
              { t: "Linear", d: "elements arranged one after another" },
              { t: "Ordered elements", d: "every item has a position in the sequence" },
              { t: "Foundations", d: "stacks, queues, trees & graphs are built on these two" },
            ],
          }}
          right={{
            label: "Linked lists",
            items: [
              { t: "Dynamic size", d: "grows and shrinks — no preset length" },
              { t: "Scattered nodes + head", d: "data anywhere; the head pointer starts the walk" },
              { t: "Pointer-hop access", d: "no index — follow links node by node" },
              { t: "Cheap re-wiring", d: "insert/delete = redirect a pointer, shift nothing" },
            ],
          }}
          caption="Same family, different memory story. The array buys speed with rigidity — fixed size, contiguous, instant indexing. The list buys flexibility with traversal — dynamic size, scattered nodes, pointer hops. The live session's verdict: arrays when the size is known and access is frequent; lists when the size is unknown and the structure changes constantly."
        />
        </AtbFigure>
      </Reveal>
      <ReadStep n="2" title="Which one, when" sub="The ten-second decision — plus the playlist" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Hash,
              t: "Known size + frequent access",
              badge: "→ array",
              d: "Thirty days of sales: the count is fixed and any day is read directly by its index.",
            },
            {
              icon: Link2,
              t: "Unknown size + frequent changes",
              badge: "→ linked list",
              d: "Add, remove and reorder constantly without ever reallocating the world.",
            },
            {
              icon: Layers,
              t: "The foundation duty",
              badge: "→ both",
              d: "Stacks, queues, trees and graphs are all implemented on arrays or linked lists.",
            },
          ].map((c) => (
            <div key={c.t} className="card-warm p-4">
              <div className="flex items-center gap-2">
                <c.icon className="h-4.5 w-4.5 shrink-0" style={{ color: "#b45309" }} aria-hidden />
                <p className="text-[.86rem] font-extrabold leading-snug text-[#3e2c1d]">{c.t}</p>
              </div>
              <p className="mt-1.5 inline-block rounded-lg bg-[#f6e3c8] px-2 py-0.5 text-[.74rem] font-extrabold text-[#8a4508]">
                {c.badge}
              </p>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#5d4a33]">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[.9rem] leading-relaxed text-muted-warm">
          The lecture&apos;s own example: a <strong>music playlist</strong> is the classic linked-list citizen — songs
          are added, removed and reordered all day long without restructuring the entire collection.
        </p>
      </Reveal>

      <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="A visa officer can rule differently on two identical files. Which algorithm property is missing?"
          options={["Finiteness", "Determinism", "Feasibility", "Generality"]}
          answer={1}
          source="Lecture 8 · live recap"
          explain="Determinism demands the same input always produce the same output. A subjective interview breaks it — the loan check with quantitative criteria is its deterministic twin."
        />
        <Practice
          title="Pen-and-paper drills — the live recap"
          items={[
            {
              q: "Name the broken property: (a) an endless wait for new customers, (b) “stir until it feels right”, (c) the output is just “done”, (d) an algorithm hardcoded to exactly 6 subjects.",
              hint: "finiteness · definiteness · well-defined output · generality",
            },
            {
              q: "A cashier returns ₹88 with denominations {50, 20, 10, 5, 2, 1} greedily. Trace the notes — and when could greedy fail?",
              hint: "88 → 50 + 20 + 10 + 5 + 2 + 1. Odd denomination sets (e.g. {1, 3, 4} for 6) can beat the greedy pick.",
            },
            {
              q: "A 30-day attendance sheet vs a playlist that grows daily: pick a structure for each and defend it with the Venn.",
              hint: "known size + direct access → array; unknown size + constant changes → linked list",
            },
          ]}
        />
      </Reveal>

      <Reveal className="mt-8">
        <span className="chip">Lecture 8 · key takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>Nine properties separate algorithms from wishes — five technical, four execution &amp; design.</>,
              <>Every property has a famous violation: the tea-powder ambiguity, the endless customer line, the hardcoded employee list.</>,
              <>Divide &amp; conquer splits, greedy grabs the local best, dynamic programming reuses the past.</>,
              <>Arrays: fixed, contiguous, O(1) by index. Linked lists: dynamic, scattered, rewired by pointers.</>,
              <>Both are the foundation — stacks, queues, trees and graphs all stand on arrays or linked lists.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 2 — LECTURE 13 · LIVE recap (id="recap13")
   ============================================================ */

function R13StackSvg() {
  return (
    <svg viewBox="0 0 250 186" className="h-auto w-full" role="img" aria-label="Stack anatomy: cells stacked vertically with one open end at the top; push enters and pop leaves through the top only, last in first out">
      <defs>
        <marker id="r13sIn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#5d7a2e" />
        </marker>
        <marker id="r13sOut" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#b05050" />
        </marker>
      </defs>
      <motion.path d="M 118 8 V 26" stroke="#5d7a2e" strokeWidth={2.2} fill="none" markerEnd="url(#r13sIn)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={ONCE} transition={{ duration: 0.4, delay: 0.5 }} />
      <motion.path d="M 88 26 V 8" stroke="#b05050" strokeWidth={2.2} fill="none" markerEnd="url(#r13sOut)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={ONCE} transition={{ duration: 0.4, delay: 0.65 }} />
      {[
        { y: 30, v: "C", hot: true },
        { y: 64, v: "B", hot: false },
        { y: 98, v: "A", hot: false },
      ].map((c, i) => (
        <motion.g key={c.y} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.35, delay: 0.1 + i * 0.12 }}>
          <rect x={60} y={c.y} width={80} height={30} rx={5} fill={c.hot ? "#f6e3c8" : "#fffaf1"} stroke={c.hot ? "#d97706" : "#e8dcc0"} strokeWidth={1.6} />
          <text x={100} y={c.y + 20} textAnchor="middle" fontSize={13} fontWeight={800} fill="#7c2d12">
            {c.v}
          </text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.5 }}>
        <rect x={60} y={132} width={80} height={30} rx={5} fill="none" stroke="#d9b96a" strokeWidth={1.4} strokeDasharray="4 4" />
        <text x={100} y={152} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b08d55">next slot</text>
        <text x={100} y={180} textAnchor="middle" fontSize={10} fontWeight={700} fill="#8a6b45">base — closed end</text>
        <text x={150} y={45} fontSize={10.5} fontWeight={800} fill="#5d7a2e">push ↓</text>
        <text x={150} y={61} fontSize={10.5} fontWeight={800} fill="#b05050">pop ↑</text>
        <text x={150} y={80} fontSize={10} fontWeight={700} fill="#8a6b45">top = the only door</text>
      </motion.g>
    </svg>
  );
}

function R13QueueSvg() {
  return (
    <svg viewBox="0 0 300 118" className="h-auto w-full" role="img" aria-label="Queue anatomy: cells in a row, elements dequeue from the front on the left, new elements enqueue at the rear on the right, first in first out">
      <defs>
        <marker id="r13qIn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#5d7a2e" />
        </marker>
        <marker id="r13qOut" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#b05050" />
        </marker>
      </defs>
      <text x={8} y={26} fontSize={10} fontWeight={800} fill="#b05050">front — DQ out</text>
      <text x={292} y={26} fontSize={10} fontWeight={800} fill="#5d7a2e" textAnchor="end">rear — NQ in</text>
      <motion.path d="M 44 60 H 14" stroke="#b05050" strokeWidth={2.2} fill="none" markerEnd="url(#r13qOut)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={ONCE} transition={{ duration: 0.35, delay: 0.5 }} />
      <motion.path d="M 294 60 H 264" stroke="#5d7a2e" strokeWidth={2.2} fill="none" markerEnd="url(#r13qIn)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={ONCE} transition={{ duration: 0.35, delay: 0.65 }} />
      {["A", "B", "C", "D"].map((v, i) => (
        <motion.g key={v} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={ONCE} transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}>
          <rect x={50 + i * 55} y={42} width={48} height={36} rx={5} fill={i === 3 ? "#f6e3c8" : "#fffaf1"} stroke={i === 3 ? "#d97706" : "#e8dcc0"} strokeWidth={1.6} />
          <text x={74 + i * 55} y={65} textAnchor="middle" fontSize={13} fontWeight={800} fill="#7c2d12">{v}</text>
        </motion.g>
      ))}
      <motion.text x={150} y={104} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.7 }}>
        FIFO — A entered first (front, left) and leaves first · D just arrived (rear, right)
      </motion.text>
    </svg>
  );
}

export function AtbRecap13Section() {
  return (
    <Section id="recap13">
      <SectionHead
        eyebrow={eyebrowOf("recap13")}
        title={
          <>
            Stacks &amp; queues — <span className="grad-text">two doors, two disciplines</span>
          </>
        }
        lead="The live session put the last two linear structures side by side: a stack with one open end and a queue with two. Same family, opposite personalities — and between them they run undo, printing, scheduling and buffering."
      />

      <Reveal className="mb-2">
        <Callout kind="story" title="Lecture 13 · the second consolidation point — and the Quiz One briefing">
          The live session put the last two linear structures side by side and closed Module 2: arrays allow indexed
          access, linked lists use connections, while stacks and queues carry unique operational constraints that
          make them essential for specific use cases. This is also where the <strong>Quiz One briefing</strong>{" "}
          lands — details at the end of this chapter.
        </Callout>
      </Reveal>

      <ReadStep n="1" title="The flagship Venn — stack vs queue" sub="Shared plumbing, opposite doors" />
      <Reveal>
        <VennTwo
          ariaLabel="Venn diagram comparing stacks and queues: they share being linear, constrained, built on arrays or linked lists, prone to overflow and underflow, and logically ordered over flat memory; stacks alone are LIFO with one open end for push, pop, peek and size, powering undo and function calls; queues alone are FIFO with two open ends, enqueue at the rear and dequeue at the front, powering printing and scheduling"
          left={{
            label: "Stack",
            items: [
              { t: "LIFO", d: "last in, first out" },
              { t: "One open end", d: "everything happens at the top" },
              { t: "push · pop · peek · size", d: "add, remove, glance, count" },
              { t: "Undo & Ctrl+Z", d: "the last change is the first reversed" },
              { t: "Function calls", d: "the call stack remembers where to return" },
            ],
          }}
          shared={{
            label: "both",
            items: [
              { t: "Linear structures", d: "elements kept in sequence" },
              { t: "Constrained access", d: "insertion & removal only at designated ends" },
              { t: "Built on arrays or linked lists", d: "not primitive types — implemented, with rules" },
              { t: "Overflow & underflow", d: "add to full / remove from empty" },
              { t: "Logical, not physical", d: "flat memory below; pointers & indices keep the shape" },
            ],
          }}
          right={{
            label: "Queue",
            items: [
              { t: "FIFO", d: "first in, first out" },
              { t: "Two open ends", d: "in at the rear, out at the front" },
              { t: "NQ · DQ · peek ×2 · size", d: "enqueue, dequeue, glance either end" },
              { t: "Printing & scheduling", d: "jobs served in arrival order" },
              { t: "Real fairness", d: "first to arrive is the first served" },
            ],
          }}
          caption="Both are disciplined costumes over structures you already own: the logical order is managed by pointers and indices across flat physical memory — and both fail the same two ways, just at different doors."
        />
      </Reveal>

      <ReadStep n="2" title="The operations, side by side" sub="Anatomy first, then static vs dynamic builds" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">
              <Layers className="h-3.5 w-3.5" aria-hidden /> Lecture 13 · stack ops
            </span>
            <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
              <AtbFigure notice="the stack has exactly one open end — push and pop share the top door, and the base stays closed; whatever went in last comes out first.">
                <R13StackSvg />
              </AtbFigure>
            </div>
            <ul className="mt-3 grid gap-1.5 text-[.82rem] leading-snug text-[#2b2014]">
              <li><strong>push</strong> — add a new element on top</li>
              <li><strong>pop</strong> — remove and return the top</li>
              <li><strong>peek</strong> — read the top without removing</li>
              <li><strong>size</strong> — count the elements</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">
              <Route className="h-3.5 w-3.5" aria-hidden /> Lecture 13 · queue ops
            </span>
            <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
              <AtbFigure notice="two open ends, two directions: dequeue leaves through the front on the left, enqueue enters at the rear on the right — the queue is never rotated to make room.">
                <R13QueueSvg />
              </AtbFigure>
            </div>
            <ul className="mt-3 grid gap-1.5 text-[.82rem] leading-snug text-[#2b2014]">
              <li><strong>NQ</strong> — enqueue at the rear</li>
              <li><strong>DQ</strong> — dequeue from the front</li>
              <li><strong>peek front / peek rear</strong> — glance either end</li>
              <li><strong>size</strong> — count the elements</li>
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#8a4508]">Static — array-built</p>
            <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
              Fixed size at creation, memory-efficient when the cap is known.{" "}
              <strong>Photoshop keeps ~50 undo steps; Excel keeps 100.</strong>
            </p>
          </div>
          <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#5d7a2e]">Dynamic — linked-list built</p>
            <p className="mt-2 text-[.84rem] leading-relaxed text-[#2b2014]">
              Grows as needed; RAM is the only ceiling. <strong>Word&apos;s undo is theoretically unlimited.</strong>
            </p>
          </div>
        </div>
      </Reveal>

      <AtbExamCallout tag="Quiz One" title="The briefing — weekend of October 3rd">
        <ul className="grid gap-1.5">
          <li><strong>Date:</strong> weekend of October 3rd.</li>
          <li><strong>Question types:</strong> multiple-choice questions (MCQ), true/false, matching, or short-answer fill-in-the-blanks.</li>
          <li><strong>Weightage:</strong> quizzes count for <strong>40% of total marks</strong>.</li>
          <li><strong>Quiz count:</strong> three quizzes total, with the <strong>best two scores counted</strong>.</li>
          <li><strong>Syllabus coverage:</strong> this quiz covers <strong>Module 1 and Module 2 (Linear Data Structures) only</strong>.</li>
        </ul>
      </AtbExamCallout>

      <AtbStepper
        title="What happens next? — one stack, five commands traced"
        steps={[
          {
            label: "push A — the stack holds A. A is the top.",
            detail: "One door: everything lands on the top.",
            frame: <AtbStackCol items={["A"]} note="size 1" />,
          },
          {
            label: "push B, push C — the stack holds A, B, C with C on top.",
            detail: "Each push stacks ABOVE the previous element.",
            frame: <AtbStackCol items={["C", "B", "A"]} note="size 3 · top = C" />,
          },
          {
            label: "pop — removes and returns C. The top is now B.",
            detail: "LIFO: the most recently added element is the first removed.",
            frame: <AtbStackCol items={["B", "A"]} note="pop returned C · size 2" tone="twin" />,
          },
          {
            label: "peek — read B without removing. Size stays 2.",
            detail: "peek glances at the top; only pop mutates.",
            frame: <AtbStackCol items={["B", "A"]} note="peek → B · size unchanged" />,
          },
          {
            label: "push D — D lands on top of B.",
            detail: "The undo machine in miniature: the last change made is the first one undone.",
            frame: <AtbStackCol items={["D", "B", "A"]} note="size 3 · top = D" tone="active" />,
          },
        ]}
      />

      <Reveal className="mt-8">
        <span className="chip">Lecture 13 · chapter takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>Stacks and queues are <strong>not primitive data types</strong> — they are implemented using arrays or linked lists with specific operational constraints.</>,
              <>Static builds are limited by RAM caps (Photoshop 50, Excel 100); dynamic ones grow as needed but are ultimately constrained by system memory.</>,
              <>The Quiz One briefing is above: weekend of October 3rd · 40% weightage · best two of three · Modules 1–2 only.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 2b — LECTURE 13 · OPS, ERRORS & APPS (id="ops13")
   The operations strip in motion, the two error pairs, and the
   application tour — the second half of the live consolidation.
   ============================================================ */

export function AtbOps13Section() {
  return (
    <Section id="ops13">
      <SectionHead
        eyebrow={eyebrowOf("ops13")}
        title={
          <>
            Operations, errors &amp; <span className="grad-text">where they run</span>
          </>
        }
        lead="The live session’s second half: push/pop and enqueue/dequeue in motion, the overflow–underflow pairs, and the application tour — from undo to triage."
      />

      <ReadStep n="1" title="When they break" sub="Overflow = full · underflow = empty" />
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "Stack overflow",
              d: "Too many browser tabs — the memory stack cannot allocate space for another frame.",
              bg: "#fdecec",
              border: "#e6a08c",
              tone: "#8c2f2f",
            },
            {
              t: "Queue overflow",
              d: "A ticket-booking rush (IRCTC-style) fills a static queue; the server rejects new requests and appears to hang.",
              bg: "#fdecec",
              border: "#e6a08c",
              tone: "#8c2f2f",
            },
            {
              t: "Stack underflow",
              d: "The back button clicked with no history — nothing exists to pop.",
              bg: "#f6efdf",
              border: "#d9b96a",
              tone: "#7c6248",
            },
            {
              t: "Queue underflow",
              d: "The connection drops mid-stream — the frame buffer empties and the video freezes.",
              bg: "#f6efdf",
              border: "#d9b96a",
              tone: "#7c6248",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl p-4" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
              <p className="text-[.88rem] font-extrabold" style={{ color: c.tone }}>{c.t}</p>
              <p className="mt-1 text-[.84rem] leading-relaxed text-[#2b2014]">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="2" title="Where they run the world" sub="Stack duties · queue duties" />
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 13 · stack applications</span>
            <ul className="mt-3 grid gap-2.5">
              {[
                { icon: Undo2, d: "Undo / redo in every editor — Ctrl+Z is a pop" },
                { icon: Braces, d: "Function-call management — return addresses" },
                { icon: Sigma, d: "Expression evaluation & parsing" },
                { icon: GitBranch, d: "Depth-first search" },
                { icon: History, d: "Browser navigation history" },
              ].map((r) => (
                <li key={r.d} className="flex items-center gap-2.5 text-[.84rem] leading-snug text-[#2b2014]">
                  <r.icon className="h-4 w-4 shrink-0" style={{ color: "#b45309" }} aria-hidden />
                  {r.d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 13 · queue applications</span>
            <ul className="mt-3 grid max-h-72 gap-2.5 overflow-y-auto pr-1">
              {[
                { icon: Printer, d: "Network printing — jobs in submission order" },
                { icon: Play, d: "Streaming — client-side frame buffering, a queue of queues" },
                { icon: Cpu, d: "CPU scheduling — round-robin slices & shortest-job-first" },
                { icon: Keyboard, d: "Keyboard buffers — static, typically 16–64 bytes" },
                { icon: TrafficCone, d: "Traffic lights — red → green → yellow, a circular queue" },
                { icon: Gamepad2, d: "Ludo & turn-based games — turn cycles" },
                { icon: Stethoscope, d: "Hospital triage & disaster response — priority queues" },
              ].map((r) => (
                <li key={r.d} className="flex items-center gap-2.5 text-[.84rem] leading-snug text-[#2b2014]">
                  <r.icon className="h-4 w-4 shrink-0" style={{ color: "#5d7a2e" }} aria-hidden />
                  {r.d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <AtbStepper
        title="What happens next? — one queue from arrival to service"
        steps={[
          {
            label: "NQ(A): A arrives and joins the empty queue — front and rear both point at A.",
            detail: "Enqueue happens at the REAR (right); with one element, front = rear.",
            frame: <AtbQueueRow items={["A"]} front={0} />,
          },
          {
            label: "NQ(B), NQ(C): B and C join behind A. Front stays at A.",
            detail: "Newcomers never jump the line — FIFO fairness by construction.",
            frame: <AtbQueueRow items={["A", "B", "C"]} front={0} />,
          },
          {
            label: "DQ: A leaves from the FRONT (left). Front moves to B.",
            detail: "The dequeued cell is spent — in a linear queue its space is not reused.",
            frame: <AtbQueueRow items={[null, "B", "C"]} front={1} />,
          },
          {
            label: "NQ(D): D joins at the rear. Service order stays A → B → C → D, always arrival order.",
            detail: "In a circular queue the freed front cell would be reused by wrapping the rear pointer; in the linear twin it stays spent.",
            frame: <AtbQueueRow items={[null, "B", "C", "D"]} front={1} />,
          },
        ]}
      />

      <AtbFigure notice="the spent front cells pile up on the left — that is the linear queue’s memory wastage, and exactly the problem the circular queue’s wrap-around solves.">
        <div className="rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
          <svg viewBox="0 0 560 130" className="h-auto w-full" role="img" aria-label="Linear queue memory wastage: front cells spent and unreusable while the rear pointer approaches the physical end, with the circular wrap-around arrow reusing the front space">
            <defs>
              <marker id="ops13A" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
            </defs>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i}>
                <rect x={60 + i * 74} y={40} width={64} height={40} rx={7} fill={i < 2 ? "#e7e0d4" : i < 5 ? "#fffaf1" : "#f5c889"} stroke={i === 5 ? "#c2410c" : "#e9d7bf"} />
                <text x={92 + i * 74} y={64} textAnchor="middle" fontSize={11} fontWeight={800} fill={i < 2 ? "#8a8578" : "#2b2014"}>{["✕", "✕", "C", "D", "E", "F"][i]}</text>
                <text x={92 + i * 74} y={94} textAnchor="middle" fontSize={9} fontWeight={700} fill="#a16024">{i}</text>
              </g>
            ))}
            <text x={92} y={26} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#8a8578">front — spent, never reused</text>
            <text x={454} y={26} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#c2410c">rear — stuck at the physical end</text>
            <path d="M 470 60 C 530 60 530 112 92 112" stroke="#c2410c" strokeWidth={1.8} fill="none" markerEnd="url(#ops13A)" strokeDasharray="6 4" />
            <text x={280} y={124} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#c2410c">circular fix: the rear pointer wraps to reuse the front cells</text>
          </svg>
        </div>
      </AtbFigure>

      <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="Clicking the back button on a browser with an empty history is…"
          options={["a stack overflow", "a stack underflow", "a queue overflow", "a successful pop"]}
          answer={1}
          source="Lecture 13 · live recap"
          explain="Pop on empty = underflow. Overflow is the opposite crime — pushing into a full static stack, like too many open tabs."
        />
        <Practice
          title="Pen-and-paper drills — stacks & queues"
          items={[
            {
              q: "push A, push B, push C, pop, push D, pop, pop — what does each pop return, and what remains?",
              hint: "Pops return C, then D, then B. Only A remains.",
            },
            {
              q: "Photoshop keeps 50 undos, Word keeps “unlimited”. Which build is which, and what is each implemented on?",
              hint: "static array vs dynamic linked list — RAM is Word's only ceiling.",
            },
            {
              q: "Sort into stack or queue: Ctrl+Z, printer spooler, DFS, keyboard buffer, traffic light cycle, function calls.",
              hint: "stack: Ctrl+Z, DFS, function calls · queue: spooler, keyboard, traffic lights.",
            },
          ]}
        />
      </Reveal>


      <Reveal className="mt-8">
        <span className="chip">Lecture 13 · ops takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>Overflow when full, underflow when empty — tab piles and ticket rushes vs empty histories and frozen buffers.</>,
              <>Queues quietly run the world: printing, buffering, round-robin CPUs, keyboards (16–64 bytes), traffic lights, Ludo, triage.</>,
              <>Static queues: printer buffers, keyboard buffers, Wi-Fi router packet queues. Dynamic: WhatsApp queues, Netflix/YouTube/Hotstar streaming.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 3 — LECTURE 18 · LIVE recap (id="recap18")
   ============================================================ */

function R18TreeSvg() {
  const node = (cx: number, cy: number, label: string) => (
    <g key={`${label}${cx}`}>
      <circle cx={cx} cy={cy} r={17} fill="#f6e3c8" stroke="#d97706" strokeWidth={1.8} />
      <text x={cx} y={cy + 4.5} textAnchor="middle" fontSize={13} fontWeight={800} fill="#7c2d12">
        {label}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 390 200" className="h-auto w-full" role="img" aria-label="Example tree: A is the root with children B and C; B has children D and E; annotations show depth counted up to the root, height as the deepest leaf, and the one parent per child rule">
      <g stroke="#c9a06a" strokeWidth={2}>
        <line x1={80} y1={34} x2={44} y2={104} />
        <line x1={80} y1={34} x2={116} y2={104} />
        <line x1={44} y1={104} x2={22} y2={174} />
        <line x1={44} y1={104} x2={78} y2={174} />
      </g>
      {node(80, 34, "A")}
      {node(44, 104, "B")}
      {node(116, 104, "C")}
      {node(22, 174, "D")}
      {node(78, 174, "E")}
      <g fontSize={10} fontWeight={700} fill="#8a6b45">
        <text x={168} y={62}>A is the root — depth 0, no parent</text>
        <text x={168} y={88}>D &amp; E: depth 2 — two edges up</text>
        <text x={168} y={114}>height = 2 = edges to the deepest leaf</text>
        <text x={168} y={140}>one parent per child — the tree rule</text>
        <text x={168} y={166}>C is a leaf — a terminal node</text>
      </g>
    </svg>
  );
}

function R18NestedVenn() {
  return (
    <svg viewBox="0 0 640 340" className="h-auto w-full" role="img" aria-label="Nested Venn diagram: a smaller tree circle fully inside a larger graph circle. Inside the tree: one parent per child, no cycles, has a root. In the outer graph region: many-to-many links, cycles possible, no fixed root, vertices and edges. Every tree is a graph">
      <motion.circle
        cx={322}
        cy={172}
        r={148}
        fill="rgba(124,154,62,.12)"
        stroke="#7c9a3e"
        strokeWidth={2.5}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={ONCE}
        transition={{ duration: 0.5 }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx={284}
        cy={156}
        r={84}
        fill="rgba(245,158,11,.18)"
        stroke="#d97706"
        strokeWidth={2.5}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={ONCE}
        transition={{ duration: 0.45, delay: 0.25 }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.5 }}>
        <text x={322} y={48} textAnchor="middle" fontSize={15} fontWeight={800} fill="#4a6321">
          Graphs — G = (V, E)
        </text>
        <text x={322} y={262} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#4a6321">
          many-to-many links · cycles possible
        </text>
        <text x={322} y={281} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#4a6321">
          no fixed root
        </text>
        <text x={322} y={300} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#4a6321">
          vertices · edges
        </text>
      </motion.g>
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.7 }}>
        <text x={284} y={108} textAnchor="middle" fontSize={15} fontWeight={800} fill="#9a5206">
          Trees
        </text>
        <text x={284} y={130} textAnchor="middle" fontSize={11} fontWeight={700} fill="#9a5206">
          one parent per child
        </text>
        <text x={284} y={150} textAnchor="middle" fontSize={11} fontWeight={700} fill="#9a5206">
          no cycles
        </text>
        <text x={284} y={170} textAnchor="middle" fontSize={11} fontWeight={700} fill="#9a5206">
          has a root
        </text>
        <text x={417} y={136} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#4a6321">
          every tree
        </text>
        <text x={417} y={150} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#4a6321">
          is a graph
        </text>
      </motion.g>
    </svg>
  );
}

export function AtbRecap18Section() {
  return (
    <Section id="recap18">
      <SectionHead
        eyebrow={eyebrowOf("recap18")}
        title={
          <>
            Trees &amp; graphs — <span className="grad-text">when one path stops being enough</span>
          </>
        }
        lead="The live session drew the line between linear and non-linear, walked the tree vocabulary, then let graphs off the leash: many parents, cycles, no root. One family photo below — every tree is a graph wearing a uniform."
      />

      <Reveal className="mb-2">
        <Callout kind="story" title="Lecture 18 · the third consolidation point">
          This live session drew the line between linear and non-linear and tied the whole trees-and-graphs block
          together: trees and graphs allow <strong>multiple pathways</strong> where linear structures offer one
          predetermined order — a far better model of real decisions with choices and alternatives. The vocabulary,
          the four walks, and DFS vs BFS in one breath; the family photo lives in the next chapter.
        </Callout>
      </Reveal>

      <ReadStep n="1" title="One path vs many" sub="Why “non-linear” exists at all" />
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <div className="flex items-center gap-2">
              <Route className="h-5 w-5" style={{ color: "#b45309" }} aria-hidden />
              <p className="font-extrabold text-[#3e2c1d]">Linear — the predetermined path</p>
            </div>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#5d4a33]">
              Arrays, linked lists, stacks and queues: elements are visited <strong>one by one in a fixed order</strong>{" "}
              — indexes 0, 1, 2… or link by link. Like receiving guidance from exactly one person.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <div className="flex items-center gap-2">
              <Network className="h-5 w-5" style={{ color: "#5d7a2e" }} aria-hidden />
              <p className="font-extrabold text-[#3e2c1d]">Non-linear — choices at every point</p>
            </div>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#5d4a33]">
              Trees and graphs allow <strong>multiple pathways</strong>; several options exist at each point — a far
              better model of real decisions.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <StepsFlow
          steps={[
            { label: "Mode", sub: "online or offline?" },
            { label: "College", sub: "which one?" },
            { label: "Degree", sub: "which course?" },
          ]}
        />
        <p className="mt-3 text-[.86rem] leading-relaxed text-muted-warm">
          The lecture&apos;s example: choosing an <strong>educational path</strong> is a branching tree of decisions —
          not a queue of steps.
        </p>
      </Reveal>

      <ReadStep n="2" title="Tree vocabulary, measured" sub="Root to leaf — and the one-parent rule" />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 18 · the example tree</span>
            <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
              <AtbFigure notice="root A has depth 0; D and E sit two edges down; the height is 2 — the deepest leaf’s depth — and every child keeps exactly one parent.">
                <R18TreeSvg />
              </AtbFigure>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 18 · terminology grid</span>
            <ul className="mt-3 grid gap-2 text-[.85rem] leading-relaxed">
              <li className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                <strong>Root</strong> — top-most node, no parent. Its depth is <strong>0</strong>.
              </li>
              <li className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                <strong>Parent / child / leaf</strong> — edges connect parents to children; a leaf is terminal, no
                children. A <strong>subtree</strong> is any smaller tree inside.
              </li>
              <li className="rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3 py-2">
                <strong>Depth</strong> — edges from a node <em>up</em> to the root. <strong>Height</strong> — the
                tree&apos;s maximum depth: edges down to the deepest leaf.
              </li>
              <li className="rounded-xl border border-[#f6d9a8] bg-[#fdf3e0] px-3 py-2 text-[#8a4508]">
                <strong>One parent can have many children — but a child has exactly ONE parent.</strong> This is the
                constraint that separates trees from graphs.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <ReadStep n="3" title="Four ways to walk the same tree" sub="Pre · in · post · level — left before right, always" />
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { t: "Pre-order", o: "Root → Left → Right", s: "A B D E C" },
            { t: "In-order", o: "Left → Root → Right", s: "D B E A C" },
            { t: "Post-order", o: "Left → Right → Root", s: "D E B C A" },
            { t: "Level-order", o: "row by row, top → bottom", s: "A B C D E" },
          ].map((t, i) => (
            <div key={t.t} className="card-warm p-4">
              <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">{t.t}</p>
              <p className="mt-0.5 text-[.74rem] leading-snug text-[#8a6b45]">{t.o}</p>
              <p className="mt-2 rounded-lg bg-[#f6e3c8] px-2 py-1 text-center font-mono text-[.82rem] font-bold tracking-wide text-[#7c2d12]">
                {t.s}
              </p>
              <p className="mt-2 text-[.72rem] text-muted-warm">{i < 3 ? "depth walk — stack-powered" : "breadth walk — queue-powered"}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[.86rem] leading-relaxed text-muted-warm">
          The three depth-first orders differ only in <strong>when the root is visited</strong>; level-order sweeps
          whole rows. Linear structures powering a non-linear walk — in-order on a <strong>stack</strong>, level-order
          on a <strong>queue</strong>.
        </p>
      </Reveal>

      <AtbStepper
        title="What happens next? — walking the example tree four ways"
        steps={[
          {
            label: "Pre-order (Root → Left → Right): visit A, dive left into B, then D, then E, finally C.",
            detail: "The root is stamped first on every subtree.",
            frame: <AtbCells values={["A", "B", "D", "E", "C"]} tones={["active", "active", "active", "active", "active"]} labels={["root", "left", "D", "E", "right"]} />,
          },
          {
            label: "In-order (Left → Root → Right): D, B, E — B’s subtree finished — then the root A, then C.",
            detail: "The root is visited between its two subtrees — stack-powered.",
            frame: <AtbCells values={["D", "B", "E", "A", "C"]} tones={["active", "active", "active", "twin", "active"]} labels={["left", "root of B", "right", "ROOT", "right"]} />,
          },
          {
            label: "Post-order (Left → Right → Root): D, E, B — then C — and the root A last.",
            detail: "Children always before their parent; the root closes the walk.",
            frame: <AtbCells values={["D", "E", "B", "C", "A"]} tones={["active", "active", "active", "active", "twin"]} labels={["", "", "subtree done", "right leaf", "ROOT last"]} />,
          },
          {
            label: "Level-order (row by row): A, then B and C, then D and E — queue-powered.",
            detail: "Depth 0 → depth 1 → depth 2; each level left to right.",
            frame: <AtbCells values={["A", "B", "C", "D", "E"]} tones={["twin", "active", "active", "done", "done"]} labels={["level 0", "level 1", "level 1", "level 2", "level 2"]} />,
          },
        ]}
      />

      <ReadStep n="4" title="DFS vs BFS — and where each structure lives" sub="Stack dives deep · queue sweeps wide" />
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <div className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" style={{ color: "#b45309" }} aria-hidden />
              <p className="font-extrabold text-[#3e2c1d]">DFS — depth-first</p>
            </div>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#5d4a33]">
              <strong>Stack</strong>-driven: push the start, pop and mark it, push its unvisited neighbours, repeat —
              dive down one branch until it ends, then backtrack.
            </p>
            <p className="mt-2 rounded-lg px-3 py-2 text-[.84rem] font-semibold" style={{ background: "#f6efdf", color: "#7c6248" }}>
              Answers: “is there any connection at all?”
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <div className="flex items-center gap-2">
              <Waypoints className="h-5 w-5" style={{ color: "#5d7a2e" }} aria-hidden />
              <p className="font-extrabold text-[#3e2c1d]">BFS — breadth-first</p>
            </div>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#5d4a33]">
              <strong>Queue</strong>-driven: enqueue the start, dequeue and mark it, enqueue its neighbours — sweep
              level by level, nearest things first.
            </p>
            <p className="mt-2 rounded-lg px-3 py-2 text-[.84rem] font-semibold" style={{ background: "#eef4dd", color: "#44621d" }}>
              Answers: “how many hops?” — shortest paths, six degrees of separation.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 18 · trees in the wild</span>
            <ul className="mt-3 grid gap-2.5">
              {[
                { icon: Users, d: "Family trees — ancestral hierarchy" },
                { icon: Building2, d: "Corporate ladder — CEO → managers → leads → workers" },
                { icon: FolderTree, d: "Folders — Program → Semester → Course" },
                { icon: Library, d: "Library classification — genre → sub-genre → author → books" },
                { icon: Dna, d: "Taxonomy — Kingdom → Phylum → Class → … → Species" },
              ].map((r) => (
                <li key={r.d} className="flex items-center gap-2.5 text-[.84rem] leading-snug text-[#2b2014]">
                  <r.icon className="h-4 w-4 shrink-0" style={{ color: "#b45309" }} aria-hidden />
                  {r.d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 18 · graphs in the wild</span>
            <ul className="mt-3 grid gap-2.5">
              {[
                { icon: Share2, d: "Social networks — an influencer's fame is high in-degree" },
                { icon: Route, d: "Road networks — cities as vertices, distances as weights" },
                { icon: Globe, d: "The web — pages as vertices, hyperlinks as directed edges" },
                { icon: Network, d: "Recommendation systems — users × products" },
              ].map((r) => (
                <li key={r.d} className="flex items-center gap-2.5 text-[.84rem] leading-snug text-[#2b2014]">
                  <r.icon className="h-4 w-4 shrink-0" style={{ color: "#5d7a2e" }} aria-hidden />
                  {r.d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="In the example tree (A root; children B, C; D and E under B), the in-order traversal prints…"
          options={["A B D E C", "D B E A C", "D E B C A", "A B C D E"]}
          answer={1}
          source="Lecture 18 · live recap"
          explain="In-order is Left → Root → Right: finish B's subtree (D, B, E), then the root A, then C. A B D E C is pre-order; D E B C A is post-order."
        />
        <Practice
          title="Pen-and-paper drills — trees & graphs"
          items={[
            {
              q: "State the depth of E and the height of the example tree — then justify both in one sentence each.",
              hint: "depth(E) = 2 edges up to A; height = 2 = the deepest leaf's depth.",
            },
            {
              q: "Write the pre-order and post-order of the example tree without looking at the strip.",
              hint: "root first vs root last: A B D E C · D E B C A.",
            },
            {
              q: "“Does any route exist between these two cities?” vs “What is the fewest-stops route?” — which search, and on which structure?",
              hint: "DFS on a stack for existence; BFS on a queue for the shortest hop count.",
            },
            {
              q: "An influencer has 2M followers and follows 180 accounts. Which degrees are which?",
              hint: "followers = in-degree (edges in); following = out-degree (edges out).",
            },
          ]}
        />
      </Reveal>

      <Reveal className="mt-8">
        <span className="chip">Lecture 18 · key takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>Non-linear means options — multiple pathways instead of one predetermined order.</>,
              <>One parent per child, a root, and no cycles: the three rules that make a tree a tree.</>,
              <>Depth counts edges up to the root (root = 0); height is the deepest leaf&apos;s depth.</>,
              <>Pre / in / post differ by when the root is visited; the depth walks ride a stack, level-order a queue.</>,
              <>Every tree is a graph — graphs add cycles and many-to-many links and drop the fixed root.</>,
              <>DFS (stack) asks “is it connected?”; BFS (queue) asks “how few hops?”.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 3b — LECTURE 18 · EVERY TREE IS A GRAPH (id="venn18")
   The nested Venn — the family photo that closes the block.
   ============================================================ */

export function AtbVenn18Section() {
  return (
    <Section id="venn18" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("venn18")}
        title={
          <>
            Every tree is a <span className="grad-text">graph</span>
          </>
        }
        lead="One nested picture settles the block: the tree circle lives entirely inside the graph circle — graphs simply drop the one-parent rule, the no-cycle rule, and the fixed root."
      />

      <ReadStep n="1" title="Graphs: trees without the leash" sub="G = (V, E) — and the family photo" dark />
      <Reveal>
        <div className="card-warm p-5">
          <span className="chip">Lecture 18 · graph vocabulary</span>
          <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
            A graph is the <strong>general connectivity structure</strong>:{" "}
            <strong>G = (V, E)</strong> — a set of vertices, a set of edges. A <strong>vertex</strong> is a node, an{" "}
            <strong>edge</strong> a connection, a vertex’s <strong>degree</strong> counts the edges touching it.
            Multiple links per node are allowed, cycles can exist, and nothing must be a root.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["vertex = node", "edge = connection", "degree = edges at a vertex", "cycles allowed", "no fixed root", "many-to-many links"].map(
              (c) => (
                <span key={c} className="chip">{c}</span>
              )
            )}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center">
            <AtbFigure notice="every tree sits wholly inside the graph circle: drop the one-parent rule and the no-cycle rule and you are in graph territory — the inner circle is the specialised case.">
              <R18NestedVenn />
            </AtbFigure>
            <div className="grid gap-3">
              <VennColumn
                tone="#b45309"
                label="Inside the inner circle — trees"
                items={[
                  { t: "One parent per child", d: "the constraint that defines the species" },
                  { t: "No cycles", d: "branches never loop back" },
                  { t: "Has a root", d: "hierarchy flows from a single top" },
                ]}
              />
              <VennColumn
                tone="#5d7a2e"
                label="Outer ring — graph-only territory"
                items={[
                  { t: "Many-to-many links", d: "a vertex keeps several parents & children" },
                  { t: "Cycles", d: "paths may start and end at the same vertex" },
                  { t: "No fixed root", d: "any vertex can be a starting point" },
                  { t: "Vertices · edges · neighbours", d: "the graph dialect of the same words" },
                ]}
              />
            </div>
          </div>
          <p className="mt-5 border-t border-[#f3e2c8] pt-4 text-[.88rem] leading-relaxed text-muted-warm">
            <strong>Every tree is already a graph.</strong> The tree is the specialised case — graphs simply drop the
            one-parent rule and the no-cycle rule, and with them the single predetermined shape.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="An influencer has 2M followers and follows 180 accounts. Which degrees are which?"
          options={["followers = out-degree, following = in-degree", "followers = in-degree (edges in), following = out-degree (edges out)", "both are in-degree", "degrees only apply to trees"]}
          answer={1}
          source="Lecture 18 · live recap"
          explain="Edges coming IN to the influencer are followers — in-degree 2M. Edges going OUT are the accounts they follow — out-degree 180. Directed graphs count the two separately."
        />
        <Practice
          title="Pen-and-paper drills — the family photo"
          items={[
            {
              q: "Draw a 4-vertex graph that is NOT a tree, and say which two tree rules it breaks.",
              hint: "Give one vertex two parents, or add a cycle — either breaks the one-parent / no-cycles rule.",
            },
            {
              q: "The web: pages as vertices, hyperlinks as directed edges. Is the web graph cyclic? Rooted?",
              hint: "Links loop (A → B → A) — cyclic; no page is ‘the’ root — unrooted. Definitely a graph, not a tree.",
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 4 — LECTURE 23 · LIVE recap (id="recap23")
   ============================================================ */

function R23LadderSvg() {
  const rungs = [
    { t: "General tree", c: "any number of children per node", ex: "folders · family trees · org charts" },
    { t: "Binary tree", c: "at most 2 children — left & right", ex: "knockout tournaments · yes/no decisions" },
    { t: "Complete binary", c: "levels full; last level filled left → right", ex: "the shape heaps live in" },
    { t: "Binary search tree", c: "left < parent · right ≥ parent", ex: "dictionary search — sorted input skews it" },
    { t: "AVL tree", c: "BST + height gap ≤ 1 · rotations", ex: "self-balancing — search stays fast" },
  ];
  return (
    <svg viewBox="0 0 640 352" className="h-auto w-full" role="img" aria-label="Tree family ladder: general tree to binary tree to complete binary tree to binary search tree to AVL tree, each rung adding one rule, with the heap branching off the complete binary tree as the parent-child ordered sibling used for priority queues">
      <defs>
        <marker id="r23lad" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      {rungs.map((r, i) => (
        <motion.g key={r.t} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={ONCE} transition={{ duration: 0.35, delay: i * 0.14 }}>
          <rect x={36} y={18 + i * 68} width={210} height={46} rx={9} fill="rgba(245,158,11,.1)" stroke="#d97706" strokeWidth={1.6} />
          <text x={141} y={18 + i * 68 + 19} textAnchor="middle" fontSize={12.5} fontWeight={800} fill="#7c2d12">
            {r.t}
          </text>
          <text x={141} y={18 + i * 68 + 35} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#a06a2c">
            {r.c}
          </text>
          <text x={262} y={18 + i * 68 + 28} fontSize={10.5} fontWeight={600} fill="#8a6b45">
            {r.ex}
          </text>
          {i < rungs.length - 1 ? (
            <path d={`M 141 ${18 + i * 68 + 46} V ${18 + (i + 1) * 68 - 3}`} stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#r23lad)" />
          ) : null}
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.9 }}>
        <path d="M 246 177 H 396" stroke="#7c9a3e" strokeWidth={1.8} strokeDasharray="5 4" fill="none" markerEnd="url(#r23lad)" />
        <text x={321} y={168} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5d7a2e">sibling branch</text>
        <rect x={400} y={154} width={196} height={46} rx={9} fill="rgba(124,154,62,.12)" stroke="#7c9a3e" strokeWidth={1.6} />
        <text x={498} y={173} textAnchor="middle" fontSize={12.5} fontWeight={800} fill="#44621d">Heap</text>
        <text x={498} y={189} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#5d7a2e">complete + parent–child ordering</text>
        <text x={404} y={224} fontSize={10} fontWeight={700} fill="#44621d">max-heap: parents larger — root = max</text>
        <text x={404} y={241} fontSize={10} fontWeight={700} fill="#44621d">min-heap: parents smaller — root = min</text>
        <text x={404} y={258} fontSize={10.5} fontWeight={800} fill="#7c2d12">→ the engine of priority queues</text>
      </motion.g>
    </svg>
  );
}

function R23PipelineSvg() {
  return (
    <svg viewBox="0 0 640 130" className="h-auto w-full" role="img" aria-label="Hashing pipeline: any-size input flows into the hash function, which emits a fixed-length digest, which selects a bucket index">
      <defs>
        <marker id="r23hp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      {[
        { x: 20, w: 128, t: "any-size input", s: "“orders.csv” · 2 GB backup" },
        { x: 194, w: 148, t: "hash function", s: "mod · SHA-256 …" },
        { x: 388, w: 142, t: "fixed-length digest", s: "same length, any input" },
        { x: 576, w: 56, t: "bucket", s: "index" },
      ].map((b, i) => (
        <motion.g key={b.t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.35, delay: i * 0.16 }}>
          <rect x={b.x} y={40} width={b.w} height={50} rx={9} fill={i === 1 ? "#f6e3c8" : "#fffaf1"} stroke={i === 1 ? "#d97706" : "#e8dcc0"} strokeWidth={1.6} />
          <text x={b.x + b.w / 2} y={61} textAnchor="middle" fontSize={11.5} fontWeight={800} fill="#7c2d12">{b.t}</text>
          <text x={b.x + b.w / 2} y={78} textAnchor="middle" fontSize={8.8} fontWeight={600} fill="#a06a2c">{b.s}</text>
          {i < 3 ? <path d={`M ${b.x + b.w + 6} 65 H ${b.x + b.w + 36}`} stroke="#c99a5b" strokeWidth={2} fill="none" markerEnd="url(#r23hp)" /> : null}
        </motion.g>
      ))}
      <motion.text x={320} y={22} textAnchor="middle" fontSize={11} fontWeight={800} fill="#8a4508" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.8 }}>
        the output length never varies — no matter what you feed in
      </motion.text>
      <motion.text x={320} y={118} textAnchor="middle" fontSize={10} fontWeight={700} fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.95 }}>
        index by hash → search jumps straight to the bucket instead of scanning everything
      </motion.text>
    </svg>
  );
}

function R23ChainingSvg() {
  return (
    <svg viewBox="0 0 640 158" className="h-auto w-full" role="img" aria-label="Collision and chaining with mod 10: values 12, 22 and 32 all hash to bucket 2, where a linked list chains them in order">
      <defs>
        <marker id="r23ch" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      <motion.text x={20} y={16} fontSize={10.5} fontWeight={800} fill="#8a4508" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.2 }}>
        mod 10 → the last digit picks the bucket: 12, 22 and 32 all land in bucket 2 — a collision
      </motion.text>
      {Array.from({ length: 10 }, (_, i) => (
        <motion.g key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.15 + i * 0.05 }}>
          <rect x={20 + i * 46} y={28} width={38} height={30} rx={5} fill={i === 2 ? "#f6e3c8" : "#fffaf1"} stroke={i === 2 ? "#d97706" : "#e8dcc0"} strokeWidth={1.5} />
          <text x={39 + i * 46} y={48} textAnchor="middle" fontSize={10} fontWeight={800} fill={i === 2 ? "#7c2d12" : "#8a6b45"}>{i}</text>
        </motion.g>
      ))}
      <motion.path d="M 131 60 C 131 84 100 76 100 96" stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#r23ch)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={ONCE} transition={{ duration: 0.4, delay: 0.7 }} />
      {["12", "22", "32", "Null"].map((v, i) => (
        <motion.g key={v} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.3, delay: 0.75 + i * 0.12 }}>
          <rect x={60 + i * 110} y={98} width={78} height={30} rx={5} fill={v === "Null" ? "none" : "#fffaf1"} stroke={v === "Null" ? "#d9b96a" : "#e8dcc0"} strokeWidth={1.5} strokeDasharray={v === "Null" ? "4 4" : undefined} />
          <text x={99 + i * 110} y={118} textAnchor="middle" fontSize={11} fontWeight={800} fill={v === "Null" ? "#b08d55" : "#7c2d12"}>{v}</text>
          {i < 3 ? <path d={`M ${140 + i * 110} 113 H ${166 + i * 110}`} stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#r23ch)" /> : null}
        </motion.g>
      ))}
      <motion.text x={20} y={150} fontSize={10} fontWeight={700} fill="#8a6b45" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 1.2 }}>
        chaining: a linked list catches the collisions — search gets slightly longer, but every value stays in its correct bucket
      </motion.text>
    </svg>
  );
}

function R23ChainSvg() {
  const blocks = [
    { x: 20, h: "#a1c411", p: "0 … 0", t: "Block 1 · genesis" },
    { x: 250, h: "#b2d422", p: "#a1c411", t: "Block 2" },
    { x: 480, h: "#c3e433", p: "#b2d422", t: "Block 3" },
  ];
  return (
    <svg viewBox="0 0 680 240" className="h-auto w-full" role="img" aria-label="Blockchain anatomy: three blocks in a chain, each storing a set of transactions, its own hash and the previous block's hash; the genesis block's previous-hash field is zero, and each block points backward through the previous-hash link">
      <defs>
        <marker id="r23bc" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#b45309" />
        </marker>
      </defs>
      {blocks.map((b, i) => (
        <motion.g key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.4, delay: i * 0.2 }}>
          <rect x={b.x} y={40} width={170} height={172} rx={11} fill="rgba(245,158,11,.07)" stroke="#d97706" strokeWidth={1.8} />
          <text x={b.x + 85} y={62} textAnchor="middle" fontSize={12} fontWeight={800} fill="#7c2d12">{b.t}</text>
          <rect x={b.x + 12} y={74} width={146} height={34} rx={6} fill="#fffaf1" stroke="#e8dcc0" />
          <text x={b.x + 85} y={90} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#5d4a33">transactions</text>
          <text x={b.x + 85} y={102} textAnchor="middle" fontSize={8.5} fontWeight={600} fill="#a06a2c">T1 · T2 · T3 …</text>
          <rect x={b.x + 12} y={114} width={146} height={34} rx={6} fill="#f6e3c8" stroke="#e8cfa5" />
          <text x={b.x + 85} y={130} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#5d4a33">own hash</text>
          <text x={b.x + 85} y={142} textAnchor="middle" fontSize={9} fontWeight={700} fill="#a0410a">{b.h}</text>
          <rect x={b.x + 12} y={154} width={146} height={34} rx={6} fill="#eef4dd" stroke="#d5e3b8" />
          <text x={b.x + 85} y={170} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#5d4a33">previous hash</text>
          <text x={b.x + 85} y={182} textAnchor="middle" fontSize={9} fontWeight={700} fill="#44621d">{b.p}</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.9 }}>
        <path d="M 250 171 H 232 V 131 H 186" stroke="#b45309" strokeWidth={1.8} fill="none" markerEnd="url(#r23bc)" />
        <path d="M 480 171 H 462 V 131 H 416" stroke="#b45309" strokeWidth={1.8} fill="none" markerEnd="url(#r23bc)" />
        <text x={231} y={196} textAnchor="middle" fontSize={9} fontWeight={700} fill="#b45309">prev-hash link</text>
        <text x={461} y={196} textAnchor="middle" fontSize={9} fontWeight={700} fill="#b45309">prev-hash link</text>
        <text x={340} y={228} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#8a6b45">
          each block stores the previous block&apos;s hash — the genesis block starts the chain with 0 … 0
        </text>
      </motion.g>
    </svg>
  );
}

function R23MerkleSvg() {
  return (
    <svg viewBox="0 0 340 224" className="h-auto w-full" role="img" aria-label="Merkle tree: four transactions are each hashed, hashes are paired and combined upward, and the single Merkle root is stored in the block header">
      <g stroke="#c9a06a" strokeWidth={1.8}>
        <line x1={52} y1={180} x2={90} y2={130} />
        <line x1={128} y1={180} x2={90} y2={130} />
        <line x1={204} y1={180} x2={242} y2={130} />
        <line x1={280} y1={180} x2={242} y2={130} />
        <line x1={90} y1={104} x2={166} y2={60} />
        <line x1={242} y1={104} x2={166} y2={60} />
      </g>
      {[
        { x: 20, y: 180, w: 64, h: 26, t: "T1" },
        { x: 96, y: 180, w: 64, h: 26, t: "T2" },
        { x: 172, y: 180, w: 64, h: 26, t: "T3" },
        { x: 248, y: 180, w: 64, h: 26, t: "T4" },
      ].map((n) => (
        <motion.g key={n.t} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.3, delay: 0.3 + (n.x - 20) * 0.004 }}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={5} fill="#fffaf1" stroke="#e8dcc0" strokeWidth={1.5} />
          <text x={n.x + n.w / 2} y={n.y + 17} textAnchor="middle" fontSize={10.5} fontWeight={800} fill="#5d4a33">{n.t}</text>
        </motion.g>
      ))}
      {[
        { x: 54, t: "H12" },
        { x: 206, t: "H34" },
      ].map((n) => (
        <motion.g key={n.t} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.3, delay: 0.55 }}>
          <rect x={n.x} y={104} width={72} height={26} rx={5} fill="#f6e3c8" stroke="#e8cfa5" strokeWidth={1.5} />
          <text x={n.x + 36} y={121} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c2d12">{n.t}</text>
        </motion.g>
      ))}
      <motion.g initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={ONCE} transition={{ duration: 0.35, delay: 0.8 }}>
        <text x={166} y={18} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8a6b45">→ stored in the block header</text>
        <rect x={116} y={32} width={100} height={28} rx={7} fill="#f6e3c8" stroke="#d97706" strokeWidth={1.7} />
        <text x={166} y={50} textAnchor="middle" fontSize={10.5} fontWeight={800} fill="#7c2d12">Merkle root</text>
        <text x={170} y={214} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#8a6b45">hash each transaction → pair &amp; combine → one root</text>
      </motion.g>
    </svg>
  );
}

function R23ThreeVenn() {
  return (
    <svg viewBox="0 0 640 412" className="h-auto w-full" role="img" aria-label="Three-circle Venn: trees give one-parent hierarchy, hashing gives fixed-length digests, blockchain gives a distributed ledger; trees and hashing overlap at the Merkle tree, hashing and blockchain at block hashes, trees and blockchain at chained records, and all three together form the blockchain">
      <motion.circle cx={310} cy={148} r={120} fill="rgba(245,158,11,.15)" stroke="#d97706" strokeWidth={2.4} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={ONCE} transition={{ duration: 0.45 }} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx={470} cy={148} r={120} fill="rgba(124,154,62,.15)" stroke="#7c9a3e" strokeWidth={2.4} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={ONCE} transition={{ duration: 0.45, delay: 0.15 }} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx={390} cy={272} r={120} fill="rgba(124,96,72,.14)" stroke="#7c6248" strokeWidth={2.4} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={ONCE} transition={{ duration: 0.45, delay: 0.3 }} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={ONCE} transition={{ delay: 0.55 }} fontSize={10.5} fontWeight={700}>
        <text x={310} y={52} textAnchor="middle" fontSize={13} fontWeight={800} fill="#9a5206">Trees</text>
        <text x={270} y={126} textAnchor="middle" fill="#9a5206">one-parent</text>
        <text x={270} y={140} textAnchor="middle" fill="#9a5206">hierarchy</text>
        <text x={470} y={52} textAnchor="middle" fontSize={13} fontWeight={800} fill="#4a6321">Hashing</text>
        <text x={510} y={126} textAnchor="middle" fill="#4a6321">fixed-length</text>
        <text x={510} y={140} textAnchor="middle" fill="#4a6321">digests</text>
        <text x={390} y={372} textAnchor="middle" fontSize={12.5} fontWeight={800} fill="#5c4534">Blockchain</text>
        <text x={390} y={336} textAnchor="middle" fill="#5c4534">distributed</text>
        <text x={390} y={350} textAnchor="middle" fill="#5c4534">ledger</text>
        <text x={390} y={112} textAnchor="middle" fill="#7c6248">Merkle</text>
        <text x={390} y={125} textAnchor="middle" fill="#7c6248">tree</text>
        <text x={322} y={202} textAnchor="middle" fill="#9a5206">chained</text>
        <text x={322} y={215} textAnchor="middle" fill="#9a5206">records</text>
        <text x={458} y={202} textAnchor="middle" fill="#4a6321">block</text>
        <text x={458} y={215} textAnchor="middle" fill="#4a6321">hashes</text>
        <text x={390} y={194} textAnchor="middle" fontSize={11} fontWeight={800} fill="#7c2d12">blockchain</text>
      </motion.g>
    </svg>
  );
}

export function AtbRecap23Section() {
  return (
    <Section id="recap23">
      <SectionHead
        eyebrow={eyebrowOf("recap23")}
        title={
          <>
            Tree types, hashing &amp; the blockchain — <span className="grad-text">the closing recap</span>
          </>
        }
        lead="The final live session laddered the tree family, fed everything through a hash function, and chained the results into blocks. Three topics, one pipeline — and a three-circle Venn to close the module."
      />

      <Reveal className="mb-2">
        <Callout kind="story" title="Lecture 23 · the finale of the non-linear block — and the Quiz Two briefing">
          This live session <strong>closes the non-linear section</strong> and rehearses all three of its acts: the
          tree family ladder, the hashing pipeline, and the chained block. It is also where the{" "}
          <strong>Quiz Two briefing</strong> lands officially — the syllabus is{" "}
          <strong>all of non-linear, blockchain included</strong> (the linear content of Quiz One is excluded). The
          briefing, verbatim:
        </Callout>

      <AtbExamCallout tag="Quiz Two" title="The briefing — October 31st">
        <ul className="grid gap-1.5">
          <li><strong>Date:</strong> Quiz Two is scheduled for <strong>October 31st</strong>, with timing to be communicated separately.</li>
          <li><strong>Scoring:</strong> best of two quizzes will count toward final marks — whichever quiz score is higher is used.</li>
          <li><strong>Attendance:</strong> attendance in at least one quiz is mandatory; students who missed Quiz One should definitely attend Quiz Two.</li>
          <li><strong>Syllabus:</strong> complete non-linear data structures <strong>including blockchain</strong> (does not include the linear data structure content from Quiz One).</li>
          <li><strong>Preparation:</strong> a doubt-clearance session is scheduled for the week before Quiz Two.</li>
        </ul>
      </AtbExamCallout>
      </Reveal>

      <ReadStep n="1" title="The tree family ladder" sub="Each rung adds exactly one rule" />
      <Reveal>
        <div className="card-warm p-5 md:p-6">
          <span className="chip">Lecture 23 · tree ladder</span>
          <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
            <R23LadderSvg />
          </div>
          <p className="mt-3 text-[.86rem] leading-relaxed text-muted-warm">
            The heap branches off the <strong>complete binary tree</strong>: parent–child ordering only, no left–right
            rule — max-heap (parents larger, root = maximum) or min-heap (parents smaller, root = minimum). That
            ordering is exactly what a <strong>priority queue</strong> needs.
          </p>
        </div>
      </Reveal>

      <ReadStep n="2" title="Hashing: any size in, fixed size out" sub="The pipeline · mod examples · collisions" />
      <Reveal>
        <div className="card-warm p-5 md:p-6">
          <span className="chip">Lecture 23 · hashing pipeline</span>
          <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
            <R23PipelineSvg />
          </div>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            <div className="flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5">
              <span className="font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]">101 mod 10 = 1</span>
              <span className="text-[.84rem] leading-relaxed text-[#241a0f]">the last digit — for mod n the outputs run 0 … n−1</span>
            </div>
            <div className="flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5">
              <span className="font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]">27 mod 5 = 2</span>
              <span className="text-[.84rem] leading-relaxed text-[#241a0f]">27 ÷ 5 = 5 remainder 2 — mod is a hash function in miniature</span>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <div className="card-warm p-5 md:p-6">
          <span className="chip">Lecture 23 · collision → chaining</span>
          <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
            <R23ChainingSvg />
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <div className="card-warm p-5">
          <span className="chip">Lecture 23 · cryptographic hash properties</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {["deterministic", "fixed length", "one-way", "avalanche effect", "collision resistance"].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
              <div className="flex items-center gap-2">
                <Scale className="h-4 w-4" style={{ color: "#b45309" }} aria-hidden />
                <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">Slow on purpose — passwords</p>
              </div>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#5d4a33]">
                Databases store the <strong>hash</strong>, never the password. Login hashes what you typed and
                compares — deliberate slowness makes guessing expensive.
              </p>
            </div>
            <div className="rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" style={{ color: "#5d7a2e" }} aria-hidden />
                <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">Fast on purpose — integrity</p>
              </div>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#5d4a33]">
                Hash the file, ship both. The receiver re-hashes and compares — <strong>any tamper shows</strong> in
                one mismatched digest.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Anatomy of a block" sub="Transactions + own hash + previous hash" />
      <div className="grid gap-4 xl:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 23 · the chain</span>
            <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
              <R23ChainSvg />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-5">
            <span className="chip">Lecture 23 · Merkle tree inside</span>
            <div className="mt-3 rounded-xl bg-[#fffaf1] p-3">
              <R23MerkleSvg />
            </div>
            <p className="mt-3 text-[.86rem] leading-relaxed text-muted-warm">
              Each transaction is hashed, pairs are combined and re-hashed up to a single{" "}
              <strong>Merkle root</strong> in the header — so <strong>one tampered transaction cascades all the way
              to the root</strong>.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep n="4" title="Why editing history fails — three locks" sub="Cascade · copies · consensus" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Fingerprint,
              t: "The hash cascade",
              d: "Change one transaction → that block's hash changes completely → the next block's previous-hash reference no longer matches → every later block breaks.",
            },
            {
              icon: Copy,
              t: "Everyone keeps a copy",
              d: "Every node holds an identical full ledger. One tampered node stands out the moment it is compared with the others.",
            },
            {
              icon: Users,
              t: "Consensus",
              d: "The network must agree before a new block is accepted. Hijacking 51% of the nodes simultaneously is theoretically possible, practically infeasible.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="card-warm lift h-full p-5">
                <div className="flex items-center gap-2">
                  <c.icon className="h-5 w-5 shrink-0" style={{ color: "#c2410c" }} aria-hidden />
                  <p className="font-extrabold text-[#3e2c1d]">{c.t}</p>
                </div>
                <p className="mt-2 text-[.84rem] leading-relaxed text-[#5d4a33]">{c.d}</p>
                <span className="chip mt-3">Lecture 23 · lock {i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <div className="card-warm p-5">
          <span className="chip">Lecture 23 · blockchain vs linked list</span>
          <div className="mt-3 overflow-x-auto">
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>Linked list</th>
                  <th>Blockchain</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">What links nodes</td>
                  <td>Memory addresses (pointers)</td>
                  <td>Cryptographic hashes</td>
                </tr>
                <tr>
                  <td className="font-bold">Where it lives</td>
                  <td>Typically one computer</td>
                  <td>Many nodes, full copies — decentralised</td>
                </tr>
                <tr>
                  <td className="font-bold">How you walk it</td>
                  <td>Forward from the head</td>
                  <td>Backward from the newest block</td>
                </tr>
                <tr>
                  <td className="font-bold">How it grows</td>
                  <td>Insert anywhere</td>
                  <td>Always appended at the end</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <AtbStepper
        title="What happens next? — the Merkle cascade, one edit traced"
        steps={[
          {
            label: "Four transactions enter the block: T1, T2, T3, T4.",
            detail: "Each is hashed individually — H1, H2, H3, H4.",
            frame: <AtbCells values={["T1", "T2", "T3", "T4"]} tones={["idle", "idle", "idle", "idle"]} labels={["→H1", "→H2", "→H3", "→H4"]} />,
          },
          {
            label: "Pair and combine upward: H12 = hash(H1+H2), H34 = hash(H3+H4).",
            detail: "The tree narrows as it climbs — that hierarchy is why it is a Merkle TREE.",
            frame: <AtbCells values={["H12", "H34"]} tones={["active", "active"]} labels={["pair 1", "pair 2"]} />,
          },
          {
            label: "One more level: the Merkle root = hash(H12+H34), stored in the block header.",
            detail: "One short digest now vouches for every transaction in the block.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="merkle root" v="hash(H12+H34)" tone="twin" />
                <AtbPill k="vouches for" v="T1 · T2 · T3 · T4" />
              </div>
            ),
          },
          {
            label: "T3 is edited → H3 changes → H34 changes → the root changes.",
            detail: "The header no longer matches — the edit is exposed by the cascade, instantly and provably.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="H3" v="changed" tone="broken" />
                <AtbPill k="H34" v="changed" tone="broken" />
                <AtbPill k="root" v="changed — mismatch!" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="5" title="Where it already runs" sub="…and the three-circle map that closes the module" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Coins,
              t: "Cryptocurrency",
              d: "Bitcoin is the flagship — every payment recorded permanently, fully traceable, nothing deleted.",
            },
            {
              icon: Fingerprint,
              t: "Smart contracts",
              d: "Agreements that execute automatically — terms cannot change without the change being detected.",
            },
            {
              icon: Landmark,
              t: "Records",
              d: "Land, health and university transcripts — pilots in Andhra Pradesh, Telangana and Estonia.",
            },
          ].map((c) => (
            <div key={c.t} className="card-warm p-4">
              <div className="flex items-center gap-2">
                <c.icon className="h-5 w-5 shrink-0" style={{ color: "#b45309" }} aria-hidden />
                <p className="font-extrabold text-[#3e2c1d]">{c.t}</p>
              </div>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#5d4a33]">{c.d}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-8 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="Changing one character of “Atlas” produces a completely different digest. That property is the…"
          options={["one-way function", "avalanche effect", "mod cascade", "chaining effect"]}
          answer={1}
          source="Lecture 23 · live recap"
          explain="A single-character change scrambles the entire output — the avalanche effect. One-way means you cannot reverse the digest back to the input; both properties together make tampering obvious and reversal impossible."
        />
        <Practice
          title="Pen-and-paper drills — hashing & the chain"
          items={[
            {
              q: "Bucket 27, 101, 4 and 888 with mod 10 — which buckets fill, and which of them collide with 12, 22, 32?",
              hint: "7 · 1 · 4 · 8. The …2 family shares bucket 2.",
            },
            {
              q: "Draw the Merkle tree for T1…T4, then describe exactly what happens to the root if T3 is edited.",
              hint: "T3's hash changes → H34 changes → the root changes → the header no longer matches.",
            },
            {
              q: "You edit one transaction in block 2 of 5. Give the three independent ways your edit is caught.",
              hint: "hash cascade into blocks 3-5 · every other node's copy disagrees · consensus rejects the block.",
            },
            {
              q: "Why does a BST with sorted input degrade, and which tree fixes it?",
              hint: "sorted inserts skew it into a linked list; the AVL rotation keeps the height gap ≤ 1.",
            },
          ]}
        />
      </Reveal>

      <Reveal className="mt-8">
        <span className="chip">Lecture 23 · key takeaways</span>
        <div className="mt-3">
          <Takeaways
            items={[
              <>General → binary → complete → BST → AVL: one added rule per rung; heaps branch off complete for priority queues.</>,
              <>Hashing: any-size input → fixed-length digest → bucket index; collisions are chained, not lost.</>,
              <>Deterministic, fixed-length, one-way, avalanche, collision-resistant — the five crypto hash properties.</>,
              <>A block = transactions + its own hash + the previous block&apos;s hash; the genesis block starts the chain.</>,
              <>Tampering fails three ways: the hash cascade, everyone&apos;s identical copy, and consensus — the 51% attack is impractical.</>,
              <>Blockchain vs linked list: hash links instead of memory addresses, many nodes instead of one, append-only instead of insert-anywhere.</>,
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* ============================================================
   SECTION 4b — LECTURE 23 · THE THREE-CIRCLE FINALE (id="venn23")
   The module-closing Venn: trees organise, hashing fingerprints,
   blocks chain — all three overlap into the blockchain.
   ============================================================ */

export function AtbVenn23Section() {
  return (
    <Section id="venn23" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("venn23")}
        title={
          <>
            The <span className="grad-text">three-circle</span> finale
          </>
        }
        lead="Trees give one-parent hierarchy, hashing gives fixed-length digests, blockchain gives the distributed ledger — and the overlaps are the Merkle tree, the block hashes and the chained records."
      />

      <ReadStep n="1" title="The course in one image" sub="Trees organise · hashing fingerprints · blocks chain" dark />
      <Reveal className="mt-4">
        <div className="card-warm p-6 md:p-8">
          <span className="chip">Lecture 23 · the three circles</span>
          <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
            <R23ThreeVenn />
            <div className="grid gap-3">
              <VennColumn
                tone="#b45309"
                label="Trees alone"
                items={[{ t: "Hierarchy", d: "one parent per child, root at the top" }]}
              />
              <VennColumn
                tone="#5d7a2e"
                label="Hashing alone"
                items={[{ t: "Fixed-length digests", d: "any input, constant output size" }]}
              />
              <VennColumn
                tone="#7c6248"
                label="Blockchain alone"
                items={[{ t: "Distributed ledger", d: "full copies on every node" }]}
              />
              <VennColumn
                tone="#8a6b45"
                label="The overlaps"
                items={[
                  { t: "Trees ∩ Hashing", d: "the Merkle tree — hashed hierarchy" },
                  { t: "Trees ∩ Blockchain", d: "chained records — node-and-link structures" },
                  { t: "Hashing ∩ Blockchain", d: "block hashes — the prev-hash links" },
                  { t: "All three", d: "the blockchain itself" },
                ]}
              />
            </div>
          </div>
          <p className="mt-5 border-t border-[#f3e2c8] pt-4 text-[.88rem] leading-relaxed text-muted-warm">
            Read it as the course in one image: <strong>trees organise</strong>, <strong>hashing fingerprints</strong>,{" "}
            <strong>blocks chain</strong> — where all three overlap, you get the blockchain.
          </p>
        </div>
      </Reveal>


      <AtbFigure dark notice="where all three circles overlap sits the blockchain itself — a hashed hierarchy of chained records copied across every node.">
        <div className="rounded-2xl p-4" style={{ background: "rgba(255,250,241,.04)", border: "1px dashed #e5c79d" }}>
          <p className="text-center text-[.85rem] font-bold text-[#cbb392]">
            trees ∩ hashing = the Merkle tree · hashing ∩ blockchain = the prev-hash links · trees ∩ blockchain = chained records · all three = the blockchain
          </p>
        </div>
      </AtbFigure>

      <Reveal className="mt-6 grid gap-4 lg:grid-cols-2">
        <Quiz
          q="Which structure sits exactly where the tree circle and the hashing circle overlap?"
          options={["The linked list", "The Merkle tree", "The priority queue", "The circular queue"]}
          answer={1}
          source="Lecture 23 · live recap"
          explain="The Merkle tree is a hierarchy (tree) of hashes (hashing) — the overlap region. Block hashes are the hashing∩blockchain overlap; chained records the trees∩blockchain one."
        />
        <Practice
          title="Pen-and-paper drills — the finale"
          items={[
            {
              q: "Name one real deployment for each circle: trees, hashing, blockchain.",
              hint: "Folder structures / OS memory indexing · password storage, integrity checks, database indexing · cryptocurrency, smart contracts, land/health/university records (Andhra Pradesh, Telangana, Estonia pilots).",
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}
