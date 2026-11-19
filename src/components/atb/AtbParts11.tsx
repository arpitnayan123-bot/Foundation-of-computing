"use client";

/* ============================================================
   ATB · PART V-VI — Lecture 28 (final recap, rebuilt at
   transcript depth with the exam map) + Lectures 29 & 30
   (merge sort & quick sort, NEW lectures built word-for-word
   from scripts/atb_lectures/L29.md and L30.md).
   ============================================================ */

import { motion } from "framer-motion";
import {
  ArrowDownUp,
  Check,
  FileText,
  GitBranch,
  Layers,
  Map,
  Split,
} from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  ATB_OLIVE,
  AtbCells,
  AtbExamCallout,
  AtbFigure,
  AtbPill,
  AtbStepper,
} from "@/components/atb/AtbStepper";
import { eyebrowOf } from "@/components/atb/lectures";

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
        eyebrow={eyebrowOf("recap28")}
        title={
          <>
            The whole module, <span className="grad-text">stitched shut</span>
          </>
        }
        lead="One last sweep: the Big O ladder, the price list of every data structure you met, and the five searches on a single map. Complexity measures the growth rate — never the stopwatch."
      />

      <AtbExamCallout tag="The exam map" title="Logistics — how the marks add up">
        <ul className="grid gap-1.5">
          <li><strong>Quiz 2 covers only non-linear data structures</strong> — the search &amp; complexity material (this lecture) belongs to the final exam.</li>
          <li><strong>Best of two quizzes will be counted (40 marks)</strong> — whichever quiz score is higher is used.</li>
          <li><strong>Final exam: 60 marks</strong> — the descriptive, offline paper at the examination centre.</li>
          <li><strong>Must attend at least one quiz to pass the component</strong> — attendance is the entry ticket.</li>
          <li><strong>A T.A. session is available before the quiz for clarifications.</strong></li>
        </ul>
      </AtbExamCallout>

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
    


      <AtbStepper title="What happens next? — picking the right search, four situations" steps={[
          {
            label: "A 10-million-record sorted catalogue, lookup by exact value → binary search.",
            detail: "O(log n) — about 24 comparisons at this scale.",
            frame: <AtbPill k="pick" v="binary · O(log n)" tone="twin" />,
          },
          {
            label: "Lookup by roll number with a well-distributed key → hash search.",
            detail: "O(1) average — no sorting required at all; worst case O(n) when everything collides.",
            frame: <AtbPill k="pick" v="hash · O(1) avg" tone="twin" />,
          },
          {
            label: "Sorted data, skip big blocks first → jump search, fixed √n jumps.",
            detail: "9 elements → jump step 3 — the √n middle ground between linear and binary.",
            frame: <AtbPill k="pick" v="jump · O(√n)" tone="active" />,
          },
          {
            label: "Tiny unsorted list → linear search; sorted data with unknown range → exponential (doubling jumps, then binary).",
            detail: "Five searches on one map — the pick always trades sorted-ness for speed.",
            frame: <AtbPill k="pick" v="linear · exponential" tone="active" />,
          },
        ]} />
    </Section>
  );
}

/* ============================================================
   L29 — MERGE SORT (id="mergesort") — the official trace:
   [10, 5, 8, 4, 3, 2, 7, 6] → singles → [5,10][4,8][2,3][6,7]
   → [4,5,8,10][2,3,6,7] → [2,3,4,5,6,7,8,10]. No swaps ever.
   ============================================================ */

function MergeTreeSVG() {
  return (
    <svg viewBox="0 0 660 300" className="h-auto w-full" role="img" aria-label="Merge sort split tree: the array 10 5 8 4 3 2 7 6 halves into 10 5 8 4 and 3 2 7 6, halves again into 10 5, 8 4, 3 2, 7 6, then singles, then merges back up into sorted pairs, sorted fours, and the fully sorted list 2 3 4 5 6 7 8 10">
      <g fontSize={11} fontWeight={800} fill="#2b2014">
        <rect x={250} y={8} width={160} height={26} rx={6} fill="#f5c889" stroke="#c2410c" />
        <text x={330} y={25} textAnchor="middle">10 5 8 4 · 3 2 7 6</text>
        <rect x={130} y={62} width={130} height={26} rx={6} fill="#fffaf1" stroke="#e9d7bf" />
        <text x={195} y={79} textAnchor="middle">10 5 8 4</text>
        <rect x={400} y={62} width={130} height={26} rx={6} fill="#fffaf1" stroke="#e9d7bf" />
        <text x={465} y={79} textAnchor="middle">3 2 7 6</text>
        <path d="M250 30 C 220 42 210 50 200 58" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        <path d="M410 30 C 440 42 450 50 460 58" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={64 + i * 152} y={116} width={104} height={26} rx={6} fill="#fffaf1" stroke="#e9d7bf" />
            <text x={116 + i * 152} y={133} textAnchor="middle">{["10 5", "8 4", "3 2", "7 6"][i]}</text>
          </g>
        ))}
        <path d="M130 88 C 120 98 118 104 116 112" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        <path d="M260 88 C 250 98 248 104 246 112" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        <path d="M400 88 C 410 98 412 104 414 112" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        <path d="M530 88 C 540 98 542 104 544 112" stroke="#c99a5b" strokeWidth={1.6} fill="none" />
        {[10, 5, 8, 4, 3, 2, 7, 6].map((v, i) => (
          <g key={i}>
            <rect x={28 + i * 78} y={172} width={40} height={24} rx={5} fill="#fffaf1" stroke="#e9d7bf" />
            <text x={48 + i * 78} y={188} textAnchor="middle">{v}</text>
          </g>
        ))}
        <text x={330} y={216} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a6b45">every element stands alone — no sorting yet, only division</text>
        <rect x={120} y={232} width={180} height={26} rx={6} fill="#eef4dd" stroke="#7c9a3e" />
        <text x={210} y={249} textAnchor="middle" fill="#3c521b">4 5 8 10</text>
        <rect x={360} y={232} width={180} height={26} rx={6} fill="#eef4dd" stroke="#7c9a3e" />
        <text x={450} y={249} textAnchor="middle" fill="#3c521b">2 3 6 7</text>
        <rect x={240} y={268} width={180} height={26} rx={6} fill="#eef4dd" stroke="#7c9a3e" strokeWidth={2} />
        <text x={330} y={285} textAnchor="middle" fill="#3c521b">2 3 4 5 6 7 8 10</text>
      </g>
      <text x={40} y={120} fontSize={9.5} fontWeight={800} fill="#b45309">splitting ↓</text>
      <text x={614} y={248} fontSize={9.5} fontWeight={800} fill="#44621d">merging ↑</text>
    </svg>
  );
}

export function AtbMergeSortSection() {
  return (
    <Section id="mergesort">
      <SectionHead
        eyebrow={eyebrowOf("mergesort")}
        title={
          <>
            Merge sort — divide and conquer, <span className="grad-text">no swaps</span>
          </>
        }
        lead="Bubble, selection and insertion sort all pay O(n²) — impractical as lists grow, and heavy with swaps. Merge sort splits until every element stands alone, then merges sorted runs: O(n log n) time for O(n) extra space, and not a single swap."
      />

      <ReadStep n="1" title="Why the O(n²) trio had to be beaten" sub="Bubble, selection and insertion all involve many swap operations that increase complexity — as list size increases, processing time becomes impractical." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The divide-and-conquer escape: <strong>break a large problem into smaller subproblems, solve them
        independently, and combine the results</strong>. Merge sort and quick sort — the next lecture — are both
        divide-and-conquer algorithms, and they are the reason large-scale sorting is practical at all.
      </p>

      <ReadStep n="2" title="Phase 1 — the splitting stage" sub="Divide into two roughly equal parts (‘roughly’ covers odd counts: 15 elements split 8 + 7), recursively until every element stands alone. No sorting occurs in this phase — only division." />
      <AtbFigure notice="the tree only ever halves — 8 elements split into 4s, then pairs, then singles; the merge rows climb back up in sorted order. Odd lists change nothing: 7 elements split 4 + 3 and the division simply continues.">
        <MergeTreeSVG />
      </AtbFigure>

      <ReadStep n="3" title="Phase 2 — the merging stage, the official trace" sub="Take two sorted parts at a time, compare their FIRST items, place the smaller into a new list, advance within the part it came from. When one part empties, the other’s remainder copies across already sorted." />
      <AtbStepper
        title="What happens next? — [10, 5, 8, 4, 3, 2, 7, 6] sorted"
        steps={[
          {
            label: "Split to singles: [10][5][8][4][3][2][7][6]. Division done — nothing compared yet.",
            detail: "Phase 1 costs O(log n) levels of halving.",
            frame: <AtbCells values={[10, 5, 8, 4, 3, 2, 7, 6]} tones={["idle", "idle", "idle", "idle", "idle", "idle", "idle", "idle"]} />,
          },
          {
            label: "Merge round 1: [5,10] · [4,8] · [2,3] · [6,7].",
            detail: "Each pair compares its front items once: 10 vs 5 → 5 first; 8 vs 4 → 4 first; 3 vs 2 → 2 first; 7 vs 6 → 6 first.",
            frame: (
              <div className="flex flex-wrap gap-4">
                <AtbCells values={[5, 10]} tones={["twin", "twin"]} />
                <AtbCells values={[4, 8]} tones={["twin", "twin"]} />
                <AtbCells values={[2, 3]} tones={["twin", "twin"]} />
                <AtbCells values={[6, 7]} tones={["twin", "twin"]} />
              </div>
            ),
          },
          {
            label: "Merge round 2: [4,5,8,10] · [2,3,6,7].",
            detail: "Sorted fours merge sorted pairs — front-vs-front comparisons again.",
            frame: (
              <div className="flex flex-wrap gap-4">
                <AtbCells values={[4, 5, 8, 10]} tones={["twin", "twin", "twin", "twin"]} />
                <AtbCells values={[2, 3, 6, 7]} tones={["twin", "twin", "twin", "twin"]} />
              </div>
            ),
          },
          {
            label: "Final merge: [2,3,4,5,6,7,8,10] — sorted, zero swaps performed.",
            detail: "Only comparisons, only moves into new lists. The final frame equals the answer: 2, 3, 4, 5, 6, 7, 8, 10.",
            frame: <AtbCells values={[2, 3, 4, 5, 6, 7, 8, 10]} tones={["done", "done", "done", "done", "done", "done", "done", "done"]} />,
          },
        ]}
      />

      <ReadStep n="4" title="The costs — and the trade" sub="Dividing stage: O(log n) by successive halving. Merging stage: O(n) comparisons per level. Overall O(n log n). Space: new lists during merging — O(n) extra, unlike the in-place swappers." />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Why is merge sort’s dividing stage O(log n)?"
          options={["It sorts while dividing", "The list halves successively — 8 → 4 → 2 → 1 levels", "It compares every pair", "It uses a hash function"]}
          answer={1}
          explain="Successive halving means the number of split levels grows logarithmically with n. The merging stage then does O(n) comparison work per level → O(n log n) overall."
          source="Lecture 29 · complexity"
        />
        <Quiz
          q="What merge sort NEVER does — at any stage — that all three O(n²) sorts do constantly?"
          options={["Compare", "Swap", "Split", "Merge"]}
          answer={1}
          explain="Merge sort performs only comparison operations and moves into new lists — no swap operations at all. That is a stated advantage: efficient for large datasets with predictable O(n log n) performance."
          source="Lecture 29 · advantages"
        />
      </div>

      <Reveal className="mt-6">
        <Callout kind="insight" title="Five variants, one idea">
          <strong>Top-down two-way</strong> (the classical split-first form — the most common) · <strong>bottom-up</strong>{" "}
          (items already exist independently — skip splitting, start merging; practical with pre-segmented data) ·{" "}
          <strong>three-way</strong> (divide into three parts, same logic) · <strong>natural</strong> (detect
          already-sorted sections and merge only the necessary parts — ideal for partially sorted data) ·{" "}
          <strong>parallel</strong> (sort the parts simultaneously on multiple processors or threads, then merge —
          significantly cuts time for very large datasets).
        </Callout>
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>Merge sort divides the sorting problem into smaller problems, builds smaller sorted lists, then merges them in order.</>,
            <>Complexity <strong>O(n log n)</strong> — significantly better than the O(n²) trio; space cost O(n) is the trade.</>,
            <>The official trace: [10, 5, 8, 4, 3, 2, 7, 6] → singles → [5,10][4,8][2,3][6,7] → [4,5,8,10][2,3,6,7] → [2,3,4,5,6,7,8,10].</>,
            <>No swaps, only comparisons — efficient for millions of records, alphabetising by letter boundaries, and parallel environments.</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Pen-and-paper drills — merge sort"
          items={[
            { q: "Split [9, 1, 8, 2, 7, 3, 6] (7 elements) the merge-sort way, then name the first merge round.", hint: "Roughly equal halves: 4 + 3 → [9,1,8,2] and [7,3,6]; keep splitting to singles; first round merges pairs: [1,9] [2,8] [3,7] (the lone 6 waits)." },
            { q: "Merge [2, 9] with [3, 4] by front-vs-front comparisons — count them.", hint: "2 vs 3 → 2; 9 vs 3 → 3; 9 vs 4 → 4; left part has the remainder → copy 9. Three comparisons." },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L30 — QUICK SORT (id="quicksort", dark) — pivot partitioning,
   median-of-three (first · last · last÷2), worst case O(n²).
   ============================================================ */

function PartitionSVG() {
  return (
    <svg viewBox="0 0 640 170" className="h-auto w-full" role="img" aria-label="Quick sort partition around a pivot: elements smaller than the pivot move to the left zone, larger elements to the right zone, the pivot lands at its final position, and the two zones recurse">
      <defs>
        <marker id="atbQsA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <rect x={40} y={30} width={200} height={44} rx={8} fill="rgba(124,154,62,.16)" stroke="#7c9a3e" />
      <text x={140} y={48} textAnchor="middle" fontSize={11} fontWeight={800} fill="#dcebc2">smaller than pivot</text>
      <text x={140} y={64} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#9cbf62">recurses left</text>
      <rect x={266} y={22} width={108} height={60} rx={9} fill="#f5c889" stroke="#c2410c" strokeWidth={2} />
      <text x={320} y={48} textAnchor="middle" fontSize={12} fontWeight={900} fill="#2b2014">PIVOT</text>
      <text x={320} y={66} textAnchor="middle" fontSize={9} fontWeight={700} fill="#5b4a33">final position</text>
      <rect x={400} y={30} width={200} height={44} rx={8} fill="rgba(255,236,210,.08)" stroke="#c99a5b" />
      <text x={500} y={48} textAnchor="middle" fontSize={11} fontWeight={800} fill="#f7ecdd">larger than pivot</text>
      <text x={500} y={64} textAnchor="middle" fontSize={9.5} fontWeight={600} fill="#cbb392">recurses right</text>
      <path d="M240 52 H 262" stroke="#c99a5b" strokeWidth={1.8} markerEnd="url(#atbQsA)" fill="none" />
      <path d="M378 52 H 396" stroke="#c99a5b" strokeWidth={1.8} markerEnd="url(#atbQsA)" fill="none" />
      <text x={320} y={112} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#cbb392">elements are NOT internally sorted during partitioning — only placed left or right of the pivot</text>
      <text x={320} y={140} textAnchor="middle" fontSize={10} fontWeight={800} fill="#8fb069">stop when each part holds zero or one element</text>
    </svg>
  );
}

export function AtbQuickSortSection() {
  return (
    <Section id="quicksort" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("quicksort")}
        title={
          <>
            Quick sort — <span className="grad-text">partition</span> around a pivot
          </>
        }
        lead="Unlike merge sort’s fixed halves, quick sort divides around a strategically chosen pivot: smaller elements left, larger right, recurse. Wisely chosen pivots make it more efficient than merge sort in practice."
      />

      <ReadStep n="1" title="The core loop" sub="Select a pivot · compare every other element with it · smaller to the left, larger to the right · recurse on both sides until each part holds zero or one element." dark />
      <AtbFigure dark notice="the pivot lands in its FINAL position after one partition pass — and the two zones are not internally sorted yet; they are merely placed. That distinction is the whole lecture.">
        <PartitionSVG />
      </AtbFigure>

      <AtbStepper
        dark
        title="What happens next? — one partition, last item as pivot"
        steps={[
          {
            label: "Take [50, 20, 80, 10, 60]. Pivot = the LAST item → 60.",
            detail: "The demonstration convention: choose the last item as the pivot.",
            frame: <AtbCells values={[50, 20, 80, 10, 60]} tones={["idle", "idle", "idle", "idle", "pivot"]} labels={["", "", "", "", "pivot"]} />,
          },
          {
            label: "Compare each element with 60: 50 smaller → left; 20 smaller → left; 80 larger → right; 10 smaller → left.",
            detail: "Elements are only PLACED — the zones are not internally sorted.",
            frame: <AtbCells values={[50, 20, 10, 60, 80]} tones={["twin", "twin", "twin", "pivot", "compare"]} labels={["< 60", "< 60", "< 60", "pivot", "> 60"]} />,
          },
          {
            label: "60 reaches its correct position — everything left is smaller, everything right is larger.",
            detail: "The pivot is now FINAL; it never moves again.",
            frame: <AtbCells values={[50, 20, 10, 60, 80]} tones={["idle", "idle", "idle", "done", "idle"]} labels={["recurse ↓", "", "", "final", "recurse ↓"]} />,
          },
          {
            label: "Recurse on [50, 20, 10] and [80] until every part holds zero or one element.",
            detail: "Sorted result: [10, 20, 50, 60, 80]. Same divide-and-conquer shape as merge sort — but partition-driven.",
            frame: <AtbCells values={[10, 20, 50, 60, 80]} tones={["done", "done", "done", "done", "done"]} />,
          },
        ]}
      />

      <ReadStep n="2" title="Pivot selection — where efficiency lives" sub="First element · last element · middle · random · median of three. Quick sort’s efficiency depends on the quality of pivot selection — wisely chosen pivots can beat merge sort in practice." dark />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-4">
            <p className="font-extrabold text-[#f5e6cd]">The four simple strategies</p>
            <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">
              <strong>First</strong> — simple, but O(n²) on already-sorted data · <strong>Last</strong> — the
              demonstration default, suboptimal on sorted lists · <strong>Middle</strong> — better in some cases, not
              guaranteed · <strong>Random</strong> — avoids worst-case patterns, but lacks consistency.
            </p>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <div className="card-warm h-full p-4" style={{ borderColor: "#9cbf62" }}>
            <p className="flex items-center gap-2 font-extrabold text-[#dcebc2]"><Check className="h-4 w-4" style={{ color: ATB_OLIVE }} /> Median of three — the practical pick</p>
            <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">
              Take the <strong>first index</strong> (e.g. 0), the <strong>last index</strong> (e.g. 6) and the{" "}
              <strong>middle index — calculated as last index ÷ 2</strong> (3). Extract the three values, sort them,
              and use the <strong>middle value of the sorted trio</strong> as the pivot. Typically provides better
              partitioning — used in practical implementations.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep n="3" title="Time and space" sub="Average O(n log n) · best O(n log n) · worst O(n²) — when the pivot is the smallest or largest element, or when the list is already sorted in opposite order. Space: less extra than merge sort, because partitioning places elements in their correct positions." dark />
      <AtbStepper
        dark
        title="What happens next? — median of three on [40, 90, 10, 70, 30, 20, 80]"
        steps={[
          {
            label: "Identify the three indexes: first = 0, last = 6, middle = last ÷ 2 = 3.",
            detail: "The middle index is calculated as the last index ÷ 2.",
            frame: <AtbCells values={[40, 90, 10, 70, 30, 20, 80]} tones={["active", "idle", "idle", "active", "idle", "idle", "active"]} labels={["first (0)", "", "", "middle (6÷2=3)", "", "", "last (6)"]} />,
          },
          {
            label: "Extract the trio: 40, 70, 80 — and sort them: 40, 70, 80.",
            detail: "Three values, one tiny sort.",
            frame: <AtbCells values={[40, 70, 80]} tones={["compare", "twin", "compare"]} labels={["low", "MEDIAN", "high"]} />,
          },
          {
            label: "The middle value of the sorted trio — 70 — becomes the pivot.",
            detail: "Better partitioning than first/last/random: 70 splits the array into genuinely smaller zones.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="pivot" v={70} tone="pivot" />
                <AtbPill k="why" v="middle of sorted trio" tone="twin" />
              </div>
            ),
          },
          {
            label: "Partition around 70: [40, 10, 30, 20] left · 70 final · [90, 80] right.",
            detail: "Both zones recurse — and the worst case (O(n²)) only bites when a pivot is always the smallest or largest element, or the list is already sorted in opposite order.",
            frame: <AtbCells values={[40, 10, 30, 20, 70, 90, 80]} tones={["idle", "idle", "idle", "idle", "done", "idle", "idle"]} labels={["recurse ↓", "", "", "", "final", "recurse ↓", ""]} />,
          },
        ]}
      />

      <Reveal className="mt-6">
        <Callout dark kind="insight" title="Where it beats merge sort — and where it earns its keep">
          Quick sort often performs <strong>faster in practice</strong> despite similar theoretical complexity, thanks
          to better cache locality; it needs <strong>less additional memory</strong> (partitioning places elements in
          their correct positions, so no intermediate results are stored at every level) and can sort{" "}
          <strong>in place</strong> within the original array. The showcase application is{" "}
          <strong>e-commerce filtering</strong>: a price like <strong>$500</strong> acts as a pivot separating items
          below and above it, and multiple pivots applied sequentially create price ranges — <strong>$200–$500,
          $500–$800</strong>. Beyond that: large database sorts, file-system organisation, and performance-critical
          applications where space efficiency matters.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="Quick sort’s worst case O(n²) occurs when…"
          options={["The list contains duplicates", "The pivot is always the smallest or largest element — or the list is already sorted in opposite order", "The array is too large for memory", "The pivot is the median"]}
          answer={1}
          explain="When every partition leaves one empty zone, each pass only removes one element from consideration — n passes of O(n) work. Median-of-three exists to prevent exactly this."
          source="Lecture 30 · complexity"
        />
        <Quiz
          q="Median of three on indexes first=0, last=6 uses which middle index?"
          options={["3 — calculated as last ÷ 2", "6 — the last index", "2 — halfway by eye", "A random index"]}
          answer={0}
          explain="The lecture’s rule: middle index = last index ÷ 2 → 6 ÷ 2 = 3. Extract values at 0, 3 and 6, sort the trio, and the middle value becomes the pivot."
          source="Lecture 30 · median of three"
        />
      </div>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>Pivot → partition → recurse: smaller left, larger right, until parts hold zero or one element.</>,
            <>Placement ≠ sorting: partitioning only places elements left or right; internal order comes from the recursion.</>,
            <>Average and best <strong>O(n log n)</strong>; worst <strong>O(n²)</strong> — median of three (first · last · last÷2) defends against it.</>,
            <>Less extra space than merge sort, in-place capable, cache-friendly — the practical workhorse for large datasets.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
