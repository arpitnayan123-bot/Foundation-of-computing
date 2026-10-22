"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDown,
  ArrowDownToLine,
  ArrowLeftFromLine,
  ArrowRightToLine,
  ArrowUp,
  ArrowUpFromLine,
  BookOpen,
  Building2,
  Check,
  Dna,
  FolderOpen,
  Layers,
  MoveHorizontal,
  MoveVertical,
  RotateCcw,
  Share2,
  Users,
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
  StepsFlow,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   ATB · Parts 5 — Module 3: Trees, Traversals, Graphs, DFS/BFS
   ============================================================ */

type Pt = { x: number; y: number };

/* ============================================================
   TREES — anatomy diagram (nodes appear level by level)
   ============================================================ */
const rise = (delay: number) => ({
  initial: { opacity: 0, y: -18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.55, delay },
});

function AnatomyTree() {
  return (
    <svg
      viewBox="0 0 640 400"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="Anatomy of a tree: root node A, parent nodes B and C, child nodes and two leaf nodes, connected by edges"
    >
      <defs>
        <marker id="m5an" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>

      {/* edges — level 2 */}
      <motion.g {...rise(0.25)}>
        <line x1="320" y1="64" x2="160" y2="168" stroke="#c99a5b" strokeWidth="2.5" />
        <line x1="320" y1="64" x2="480" y2="168" stroke="#c99a5b" strokeWidth="2.5" />
      </motion.g>
      {/* edges — level 3 */}
      <motion.g {...rise(0.55)}>
        <line x1="160" y1="168" x2="85" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
        <line x1="160" y1="168" x2="235" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
        <line x1="480" y1="168" x2="410" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
        <line x1="480" y1="168" x2="555" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
      </motion.g>

      {/* root */}
      <motion.g {...rise(0)}>
        <circle cx="320" cy="64" r="25" fill="#c2410c" />
        <text x="320" y="70" textAnchor="middle" fontSize="16" fontWeight="800" fill="#fff7ec">A</text>
      </motion.g>
      {/* parents */}
      <motion.g {...rise(0.3)}>
        <circle cx="160" cy="168" r="21" fill="#f0a04b" />
        <text x="160" y="174" textAnchor="middle" fontSize="14" fontWeight="800" fill="#3e2c1d">B</text>
        <circle cx="480" cy="168" r="21" fill="#f0a04b" />
        <text x="480" y="174" textAnchor="middle" fontSize="14" fontWeight="800" fill="#3e2c1d">C</text>
      </motion.g>
      {/* children / leaves */}
      <motion.g {...rise(0.6)}>
        <circle cx="85" cy="278" r="19" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
        <text x="85" y="284" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7c4a12">D</text>
        <circle cx="235" cy="278" r="19" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
        <text x="235" y="284" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7c4a12">E</text>
        <circle cx="410" cy="278" r="19" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
        <text x="410" y="284" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7c4a12">F</text>
        <circle cx="555" cy="278" r="19" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
        <text x="555" y="284" textAnchor="middle" fontSize="13" fontWeight="800" fill="#7c4a12">G</text>
      </motion.g>

      {/* annotations */}
      <motion.g {...rise(1)}>
        <text x="320" y="20" textAnchor="middle" fontSize="11" fontWeight="800" letterSpacing="2" fill="#c2410c">ROOT NODE</text>
        <line x1="320" y1="26" x2="320" y2="35" stroke="#c99a5b" strokeWidth="1.5" markerEnd="url(#m5an)" />
        <text x="118" y="140" textAnchor="end" fontSize="11" fontWeight="800" letterSpacing="1.5" fill="#b45309">PARENT</text>
        <text x="118" y="153" textAnchor="end" fontSize="11" fontWeight="800" letterSpacing="1.5" fill="#b45309">NODE</text>
        <line x1="122" y1="150" x2="140" y2="158" stroke="#c99a5b" strokeWidth="1.5" markerEnd="url(#m5an)" />
        <text x="235" y="318" textAnchor="middle" fontSize="10" fontWeight="700" letterSpacing="1" fill="#8a5a06">child nodes of B</text>
        <rect x="46" y="308" width="78" height="20" rx="10" fill="#7c9a3e" />
        <text x="85" y="322" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff7ec">LEAF</text>
        <rect x="516" y="308" width="78" height="20" rx="10" fill="#7c9a3e" />
        <text x="555" y="322" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff7ec">LEAF</text>
        <text x="243" y="112" fontSize="10" fontWeight="700" fontStyle="italic" fill="#a0410a">edge</text>
        <text x="101" y="234" fontSize="10" fontWeight="700" fontStyle="italic" fill="#a0410a">edge</text>
      </motion.g>
    </svg>
  );
}

/* ============================================================
   TREES — depth, height, subtrees diagram
   ============================================================ */
function DepthHeightTree() {
  const level = (y: number, label: string) => (
    <g>
      <line x1="76" y1={y} x2="604" y2={y} stroke="#e8d5b8" strokeWidth="1.5" strokeDasharray="4 6" />
      <text x="70" y={y + 4} textAnchor="end" fontSize="12" fontWeight="800" fill="#a0410a">{label}</text>
    </g>
  );
  const node = (x: number, y: number, t: string, fill: string, txt: string) => (
    <g>
      <circle cx={x} cy={y} r="19" fill={fill} stroke="#c99a5b" strokeWidth="2" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill={txt}>{t}</text>
    </g>
  );
  return (
    <svg
      viewBox="0 0 680 436"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="Tree with depth labels d equals 0 to 3 on each level, height h equals 3 on the right, and two dashed subtree boxes"
    >
      <defs>
        <marker id="m5dh" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" />
        </marker>
      </defs>

      {/* depth guides */}
      {level(64, "d = 0")}
      {level(168, "d = 1")}
      {level(278, "d = 2")}
      {level(368, "d = 3")}

      {/* subtree boxes */}
      <rect x="62" y="134" width="242" height="268" rx="16" fill="rgba(217,119,6,.05)" stroke="#d97706" strokeWidth="1.5" strokeDasharray="7 5" />
      <text x="70" y="126" fontSize="11" fontWeight="800" fill="#b45309">Subtree 1 — B and everything below it</text>
      <rect x="374" y="134" width="232" height="176" rx="16" fill="rgba(217,119,6,.05)" stroke="#d97706" strokeWidth="1.5" strokeDasharray="7 5" />
      <text x="382" y="126" fontSize="11" fontWeight="800" fill="#b45309">Subtree 2 — C and everything below it</text>

      {/* edges */}
      <line x1="330" y1="64" x2="170" y2="168" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="330" y1="64" x2="490" y2="168" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="170" y1="168" x2="110" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="170" y1="168" x2="250" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="490" y1="168" x2="420" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="490" y1="168" x2="560" y2="278" stroke="#c99a5b" strokeWidth="2.5" />
      <line x1="110" y1="278" x2="150" y2="368" stroke="#c99a5b" strokeWidth="2.5" />

      {/* nodes */}
      {node(330, 64, "A", "#c2410c", "#fff7ec")}
      {node(170, 168, "B", "#f0a04b", "#3e2c1d")}
      {node(490, 168, "C", "#f0a04b", "#3e2c1d")}
      {node(110, 278, "D", "#fff3e0", "#7c4a12")}
      {node(250, 278, "E", "#fff3e0", "#7c4a12")}
      {node(420, 278, "F", "#fff3e0", "#7c4a12")}
      {node(560, 278, "G", "#fff3e0", "#7c4a12")}
      {node(150, 368, "H", "#7c9a3e", "#fff7ec")}

      {/* height bracket */}
      <line x1="640" y1="64" x2="640" y2="368" stroke="#c2410c" strokeWidth="2.5" />
      <line x1="632" y1="64" x2="648" y2="64" stroke="#c2410c" strokeWidth="2.5" />
      <line x1="632" y1="368" x2="648" y2="368" stroke="#c2410c" strokeWidth="2.5" />
      <text x="640" y="48" textAnchor="middle" fontSize="12" fontWeight="800" fill="#c2410c">height</text>
      <text x="640" y="392" textAnchor="middle" fontSize="12" fontWeight="800" fill="#c2410c">h = 3</text>
      <line x1="612" y1="374" x2="630" y2="370" stroke="#c2410c" strokeWidth="1.5" markerEnd="url(#m5dh)" />
      <text x="576" y="390" textAnchor="end" fontSize="10" fontWeight="600" fill="#8a5a06">root → deepest leaf H</text>
    </svg>
  );
}

/* ============================================================
   TREES — section
   ============================================================ */
const TREE_SPOTS = [
  { icon: Users, title: "Family tree", chain: ["Grandparents", "Parents", "You + siblings"] },
  { icon: FolderOpen, title: "Folder structure", chain: ["Semester 1", "Algorithmic Thinking", "Presentations"] },
  { icon: Building2, title: "Corporate hierarchy", chain: ["CEO", "Manager", "Team Leader", "Worker"] },
  { icon: BookOpen, title: "Book classification", chain: ["Genre", "Author", "Book title"] },
  { icon: Dna, title: "Biology", chain: ["Animal", "Vertebrate", "Mammal", "Dog"] },
];

export function AtbTreesSection() {
  return (
    <Section id="trees">
      <SectionHead
        eyebrow="Module 3 · Non-linear data structures — trees"
        title={
          <>
            <span className="grad-text">Trees</span> — hierarchy, drawn upside down
          </>
        }
        lead="Arrays line data up in a single row. Trees let data branch. Every org chart, folder structure and family album is one — drawn upside down, with the root at the top and the leaves at the bottom."
      />

      <ReadStep n="1" title="From family album to data structure" sub="A flat list is not enough when the data itself is shaped like a family" />
      <Reveal>
        <Callout kind="story" title="The album that would not sit still">
          <p>
            Line every family member up in an <strong>array</strong> and you get a flat list —
            one name after another, no structure. But you also want the{" "}
            <strong>hierarchy</strong>: grandparents → parents → you → siblings. That
            branching shape is a <strong>tree</strong>: one element at the top (the{" "}
            <em>root</em>), others hanging below it, level after level. Real trees grow up;
            data trees are drawn <strong>upside down</strong> — root at the top, growing downward.
          </p>
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Anatomy of a tree" sub="Root, parent, child, leaf — and the edge that joins them" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <AnatomyTree />
          <div className="mt-4 flex items-start justify-center gap-2 text-[.84rem] leading-relaxed text-[#8c2f2f]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <p>
              <strong>One parent per child.</strong> A node cannot have two parents — that
              single rule is what keeps a tree a tree.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Depth, height, subtrees" sub="Three measuring sticks you will use on every tree" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <DepthHeightTree />
          <div className="mt-5 grid gap-2">
            <KV k="depth (d)" v="edges on the path from the root DOWN to a node — the root sits at d = 0, its children at d = 1, and here H reaches d = 3" />
            <KV k="height (h)" v="edges on the longest root → leaf path — here h = 3 (A → B → D → H); a lone root has height 0" />
            <KV k="subtree" v="any node plus everything below it — node B heads Subtree 1; every node is the root of its own subtree" />
          </div>
        </div>
      </Reveal>

      <ReadStep n="4" title="Where you already met trees" sub="Five hierarchies you use without calling them data structures" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TREE_SPOTS.map((s, i) => (
          <Reveal key={s.title} delay={i * 60}>
            <div className="card-warm lift flex h-full flex-col gap-3 p-5">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <h4 className="text-[.95rem] font-bold text-[#3e2c1d]">{s.title}</h4>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {s.chain.map((c, j) => (
                  <React.Fragment key={c}>
                    {j > 0 ? <ArrowDown className="h-3 w-3 text-[#c2410c]" aria-hidden /> : null}
                    <span className="rounded-lg border border-[#ecd9bd] bg-[#fffaf1] px-2 py-1 text-[.72rem] font-semibold text-[#7c4a12]">
                      {c}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            q="The first element of a tree, drawn at the top, is the…"
            options={["leaf", "root", "edge", "subtree"]}
            answer={1}
            explain="The root is the one node with no parent — everything else hangs below it. Leaves are the opposite extreme: nodes with no children."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            q="A node without children is a…"
            options={["root", "leaf", "parent", "branch"]}
            answer={1}
            explain="Leaves end the branches — by definition a leaf has zero children. Parents (by definition) have at least one."
          />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Practice
          title="Trees — pen & paper"
          items={[
            {
              q: <>Draw a tree with 3 levels and label its <strong>root</strong>, one <strong>parent</strong>, its <strong>children</strong> and two <strong>leaves</strong>.</>,
              hint: "Root at the top; every leaf is a node with no children below it.",
            },
            {
              q: <>Name <strong>3 business hierarchies</strong> that are trees, and say what plays the root in each.</>,
              hint: "Org chart, product categories, approval chains — the CEO / category / final approver is usually the root.",
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   TRAVERSALS — shared tree + interactive player
   ============================================================ */
type TravKey = "pre" | "in" | "post";

const T_POS: Record<string, Pt> = {
  A: { x: 220, y: 46 },
  B: { x: 118, y: 150 },
  C: { x: 322, y: 150 },
  D: { x: 66, y: 246 },
  E: { x: 170, y: 246 },
};
const T_EDGES: [string, string][] = [
  ["A", "B"],
  ["A", "C"],
  ["B", "D"],
  ["B", "E"],
];
const T_SEQ: Record<TravKey, string[]> = {
  pre: ["A", "B", "D", "E", "C"],
  in: ["D", "B", "E", "A", "C"],
  post: ["D", "E", "B", "C", "A"],
};
const T_CARDS: { key: TravKey; name: string; rule: string; result: string; blurb: string }[] = [
  { key: "pre", name: "Pre-order", rule: "Root → Left → Right", result: "A B D E C", blurb: "copy a tree top-down" },
  { key: "in", name: "In-order", rule: "Left → Root → Right", result: "D B E A C", blurb: "sorted output from a BST" },
  { key: "post", name: "Post-order", rule: "Left → Right → Root", result: "D E B C A", blurb: "finish children before the parent" },
];

function TravTree({ seq, step, mini = false }: { seq: string[]; step: number; mini?: boolean }) {
  const rank = (n: string) => seq.indexOf(n);
  const seen = (n: string) => rank(n) > -1 && rank(n) < step;
  return (
    <svg
      viewBox="0 0 440 292"
      className="mx-auto h-auto w-full"
      style={{ maxWidth: mini ? 180 : 380 }}
      aria-hidden={mini || undefined}
      role={mini ? undefined : "img"}
      aria-label={mini ? undefined : "Tree A with children B and C; B has children D and E, showing the current traversal order"}
    >
      {T_EDGES.map(([a, b]) => (
        <line
          key={`${a}${b}`}
          x1={T_POS[a].x}
          y1={T_POS[a].y}
          x2={T_POS[b].x}
          y2={T_POS[b].y}
          stroke="rgba(201,154,91,.65)"
          strokeWidth="2.5"
        />
      ))}
      {Object.entries(T_POS).map(([n, p]) => {
        const on = seen(n);
        const cur = rank(n) === step - 1;
        return (
          <g key={n}>
            {cur ? <circle cx={p.x} cy={p.y} r="27" fill="none" stroke="#f59e0b" strokeWidth="3" /> : null}
            <circle
              cx={p.x}
              cy={p.y}
              r="20"
              fill={on ? "#ea580c" : "rgba(255,246,232,.09)"}
              stroke={on ? "#c2410c" : "rgba(245,158,11,.45)"}
              strokeWidth="2"
            />
            <text
              x={p.x}
              y={p.y + 5}
              textAnchor="middle"
              fontSize="14"
              fontWeight="800"
              fill={on ? "#fff7ec" : "#f5e6cd"}
            >
              {n}
            </text>
            {on ? (
              <g>
                <circle cx={p.x + 24} cy={p.y - 24} r="11" fill="#2b1b10" stroke="#f5c889" strokeWidth="1.5" />
                <text x={p.x + 24} y={p.y - 20} textAnchor="middle" fontSize="10" fontWeight="800" fill="#f5c889">
                  {rank(n) + 1}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}

function TraversalLab() {
  const [mode, setMode] = useState<TravKey>("pre");
  const [step, setStep] = useState(5);
  const seq = T_SEQ[mode];

  useEffect(() => {
    if (step >= seq.length) return;
    const t = window.setTimeout(() => setStep((s) => s + 1), 620);
    return () => window.clearTimeout(t);
  }, [step, seq.length]);

  const play = (k: TravKey) => {
    setMode(k);
    setStep(0);
  };

  return (
    <div className="card-warm p-5 md:p-7">
      <div className="grid gap-4 md:grid-cols-3">
        {T_CARDS.map((c) => {
          const active = mode === c.key;
          return (
            <button
              key={c.key}
              type="button"
              onClick={() => play(c.key)}
              aria-pressed={active}
              aria-label={`Replay the ${c.name} traversal animation`}
              className={`card-warm lift flex flex-col gap-2 rounded-xl p-4 text-left transition-all ${
                active ? "ring-2 ring-[#f59e0b]" : ""
              }`}
            >
              <span className="text-[.7rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]">
                {c.name}
              </span>
              <span className="font-mono text-[.78rem] font-bold text-[#ffd9ae]">{c.rule}</span>
              <span className="text-[.78rem] text-[#cbb392]">{c.blurb}</span>
              <TravTree seq={T_SEQ[c.key]} step={5} mini />
              <span className="font-mono text-[.8rem] font-bold text-[#f5e6cd]">{c.result}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <p className="text-center text-[.72rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">
          watch it walk — click a card above to replay
        </p>
        <div className="mt-2">
          <TravTree seq={seq} step={step} />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {seq.map((n, i) => (
            <span
              key={`${mode}-${n}`}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border font-mono text-sm font-bold transition-all duration-300 ${
                i < step
                  ? `border-[rgba(245,158,11,.5)] bg-[rgba(234,88,12,.22)] text-[#ffd9ae] ${i === step - 1 ? "anim-pop" : ""}`
                  : "border-[rgba(245,158,11,.16)] text-[#8a6a48]"
              }`}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* level-order card */
function LevelOrderViz() {
  const pos: Record<string, Pt> = {
    A: { x: 240, y: 46 },
    B: { x: 138, y: 150 },
    C: { x: 342, y: 150 },
    D: { x: 86, y: 246 },
    E: { x: 190, y: 246 },
  };
  const band = (top: number, h: number, o: number, label: string, ly: number) => (
    <g>
      <rect x="40" y={top} width="400" height={h} rx="14" fill={`rgba(245,158,11,${o})`} stroke="rgba(245,158,11,.3)" strokeDasharray="6 5" />
      <text x="430" y={ly} textAnchor="end" fontSize="11" fontWeight="800" letterSpacing="1.5" fill="#f5c889">{label}</text>
    </g>
  );
  return (
    <svg
      viewBox="0 0 460 292"
      className="mx-auto h-auto w-full max-w-md"
      role="img"
      aria-label="Level order traversal: the tree read level by level, A then B and C, then D and E"
    >
      {band(18, 58, 0.14, "LEVEL 0", 38)}
      {band(122, 58, 0.09, "LEVEL 1", 142)}
      {band(218, 58, 0.05, "LEVEL 2", 238)}
      {[["A", "B"], ["A", "C"], ["B", "D"], ["B", "E"]].map(([a, b]) => (
        <line key={`${a}${b}`} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} stroke="rgba(201,154,91,.65)" strokeWidth="2.5" />
      ))}
      {Object.entries(pos).map(([n, p]) => (
        <g key={n}>
          <circle cx={p.x} cy={p.y} r="20" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
          <text x={p.x} y={p.y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff7ec">{n}</text>
        </g>
      ))}
    </svg>
  );
}

export function AtbTraversalsSection() {
  return (
    <Section id="traversals" dark>
      <SectionHead
        dark
        eyebrow="Module 3 · Tree traversals"
        title={
          <>
            Reading a tree <span className="grad-text">four ways</span>
          </>
        }
        lead="A tree is useless if you cannot walk it. A traversal visits every node exactly once — and the order you choose changes the answer you get. Our demo tree: A at the root, children B and C, and D, E under B."
      />

      <ReadStep dark n="1" title="The depth-first trio" sub="Pre-order, in-order, post-order — same tree, three visits" />
      <Reveal>
        <TraversalLab />
      </Reveal>

      <ReadStep dark n="2" title="Level order — the breadth-first reading" sub="Top to bottom, left to right, one layer at a time" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-5 md:p-6">
            <LevelOrderViz />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col gap-4 p-6 md:p-7">
            <div>
              <span className="chip">breadth-first</span>
              <h4 className="mt-3 text-xl font-bold text-[#f5e6cd]">Reads the tree like text</h4>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]">
                Level order finishes <strong>every node at the current depth</strong> before going
                a single step deeper — top-to-bottom, left-to-right. Result on our tree:{" "}
                <strong className="font-mono text-[#ffd9ae]">A B C D E</strong>.
              </p>
            </div>
            <div className="grid gap-2">
              {[
                { lv: "Level 0", nodes: "A", note: "the root alone" },
                { lv: "Level 1", nodes: "B C", note: "children of A, left to right" },
                { lv: "Level 2", nodes: "D E", note: "children of B, left to right" },
              ].map((r) => (
                <div
                  key={r.lv}
                  className="flex items-center gap-3 rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] px-3.5 py-2.5"
                >
                  <span className="w-16 shrink-0 text-[.7rem] font-extrabold uppercase tracking-wider text-[#f5c889]">{r.lv}</span>
                  <span className="font-mono text-sm font-bold text-[#ffd9ae]">{r.nodes}</span>
                  <span className="ml-auto text-[.76rem] text-[#cbb392]">{r.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-auto text-[.82rem] leading-relaxed text-[#cbb392]">
              Business read: pre-order reads an org chart like a CEO telling the story;
              level order reads it like HR — <strong>entire seniority bands, one band at a time</strong>.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Callout dark kind="insight" title="Same tree, four readings">
          Four traversals, one tree — pick the order that answers your question. <strong>Pre-order</strong>{" "}
          hands you the hierarchy top-down (reporting lines, a table of contents). <strong>In-order</strong>{" "}
          pours a binary search tree out <em>sorted</em>. <strong>Post-order</strong> settles children before
          parents (closing sub-ledgers before the group total). <strong>Level order</strong> is the org-wide
          announcement: whole levels at once.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            q="For the tree above (A with children B, C; B with children D, E), pre-order gives…"
            options={["A B C D E", "A B D E C", "D B E A C", "D E B C A"]}
            answer={1}
            explain="Pre-order = Root, Left, Right: visit A, finish the whole left subtree under B (B, then D, then E), then C. The other options are level order, in-order and post-order respectively."
          />
        </Reveal>
        <Reveal delay={100}>
          <Practice
            title="Traversals — from memory"
            items={[
              {
                q: <>Write the <strong>in-order</strong> traversal of <code className="font-mono text-[.82rem] text-[#ffd9ae]">A(B(D,E),C)</code> without looking up.</>,
                hint: "Left → Root → Right: finish everything under B first.",
              },
              {
                q: <>Invent a small company org tree (3 levels, 5–7 people) and write its <strong>pre-order</strong>.</>,
                hint: "CEO, then the whole left-hand department, then the right — Root → Left → Right.",
              },
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   GRAPHS — the lecture graph (light)
   ============================================================ */
const G_POS: Record<string, Pt> = {
  C: { x: 120, y: 50 },
  A: { x: 280, y: 50 },
  B: { x: 440, y: 50 },
  S: { x: 120, y: 170 },
  P: { x: 215, y: 170 },
  Q: { x: 345, y: 170 },
  R: { x: 440, y: 170 },
  X: { x: 170, y: 290 },
  Y: { x: 390, y: 290 },
};
const G_EDGES: [string, string][] = [
  ["C", "S"],
  ["A", "P"],
  ["A", "Q"],
  ["B", "R"],
  ["S", "P"],
  ["S", "X"],
  ["P", "X"],
  ["Q", "R"],
  ["Q", "Y"],
  ["R", "Y"],
  ["X", "Y"],
];
const HOT_EDGES = new Set(["AP", "SP", "PX"]);

function GEdge({ a, b, hot = false }: { a: Pt; b: Pt; hot?: boolean }) {
  return (
    <line
      x1={a.x}
      y1={a.y}
      x2={b.x}
      y2={b.y}
      stroke={hot ? "#d97706" : "#dcc9a4"}
      strokeWidth={hot ? 4 : 2}
    />
  );
}

function GNode({ x, y, t, hot = false }: { x: number; y: number; t: string; hot?: boolean }) {
  return (
    <g>
      {hot ? <circle cx={x} cy={y} r="27" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="5 4" /> : null}
      <circle cx={x} cy={y} r="20" fill={hot ? "#d97706" : "#fff8ec"} stroke={hot ? "#b45309" : "#c99a5b"} strokeWidth="2" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill={hot ? "#fff7ec" : "#7c4a12"}>
        {t}
      </text>
    </g>
  );
}

function LectureGraph() {
  return (
    <svg
      viewBox="0 0 560 340"
      className="mx-auto h-auto w-full max-w-xl"
      role="img"
      aria-label="Graph with vertices C A B on top, S P Q R in the middle, X Y at the bottom and eleven edges; P is highlighted with degree 3"
    >
      {G_EDGES.map(([a, b]) => (
        <GEdge key={`${a}${b}`} a={G_POS[a]} b={G_POS[b]} hot={HOT_EDGES.has(`${a}${b}`) || HOT_EDGES.has(`${b}${a}`)} />
      ))}
      {Object.entries(G_POS).map(([n, p]) => (
        <GNode key={n} x={p.x} y={p.y} t={n} hot={n === "P"} />
      ))}
      <text x="40" y="112" fontSize="12" fontWeight="800" fill="#b45309">Degree(P) = 3</text>
      <line x1="128" y1="120" x2="196" y2="152" stroke="#b45309" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="280" y="326" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8a5a06">
        gold edges = the three edges touching P → degree 3
      </text>
    </svg>
  );
}

/* ============================================================
   GRAPHS — dichotomy micro-SVGs
   ============================================================ */
function DichArt({ kind }: { kind: string }) {
  const dot = (x: number, y: number, t: string, f = "#f0a04b") => (
    <g>
      <circle cx={x} cy={y} r="11" fill={f} />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fontWeight="800" fill="#3e2c1d">{t}</text>
    </g>
  );
  switch (kind) {
    case "dir":
      return (
        <svg viewBox="0 0 220 66" className="h-16 w-full" aria-hidden>
          {dot(30, 22, "A")}
          {dot(110, 22, "B")}
          <line x1="43" y1="22" x2="97" y2="22" stroke="#c99a5b" strokeWidth="2.5" />
          <text x="70" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#8a5a06">cousin of · two-way</text>
          {dot(150, 22, "C", "#b45309")}
          {dot(200, 22, "D", "#b45309")}
          <line x1="162" y1="22" x2="184" y2="22" stroke="#c2410c" strokeWidth="2.5" />
          <path d="M182 17 L190 22 L182 27" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <text x="176" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">son of · one-way</text>
        </svg>
      );
    case "wgt":
      return (
        <svg viewBox="0 0 220 66" className="h-16 w-full" aria-hidden>
          {dot(30, 26, "A")}
          {dot(100, 26, "B")}
          <line x1="43" y1="26" x2="87" y2="26" stroke="#c99a5b" strokeWidth="2.5" />
          <text x="65" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#8a5a06">knows · equal</text>
          {dot(140, 26, "C", "#b45309")}
          {dot(200, 26, "D", "#b45309")}
          <line x1="152" y1="26" x2="188" y2="26" stroke="#d97706" strokeWidth="3.5" />
          <rect x="158" y="8" width="24" height="15" rx="4" fill="#d97706" />
          <text x="170" y="19" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff7ec">5</text>
          <text x="170" y="52" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">brother of · strong</text>
        </svg>
      );
    case "con":
      return (
        <svg viewBox="0 0 220 66" className="h-16 w-full" aria-hidden>
          <line x1="30" y1="22" x2="70" y2="22" stroke="#c99a5b" strokeWidth="2" />
          <line x1="30" y1="22" x2="50" y2="46" stroke="#c99a5b" strokeWidth="2" />
          <line x1="70" y1="22" x2="50" y2="46" stroke="#c99a5b" strokeWidth="2" />
          {dot(30, 22, "a")}
          {dot(70, 22, "b")}
          {dot(50, 46, "c")}
          <line x1="150" y1="22" x2="180" y2="22" stroke="#dcc9a4" strokeWidth="2" />
          {dot(150, 22, "d", "#e3b08a")}
          {dot(180, 22, "e", "#e3b08a")}
          {dot(165, 46, "f", "#e3b08a")}
          <line x1="98" y1="30" x2="122" y2="30" stroke="#be4a4a" strokeWidth="2" strokeDasharray="3 4" />
        </svg>
      );
    case "cyc":
      return (
        <svg viewBox="0 0 220 66" className="h-16 w-full" aria-hidden>
          <line x1="45" y1="20" x2="25" y2="48" stroke="#c99a5b" strokeWidth="2.5" />
          <line x1="45" y1="20" x2="70" y2="48" stroke="#c99a5b" strokeWidth="2.5" />
          <line x1="29" y1="42" x2="66" y2="42" stroke="#c99a5b" strokeWidth="2.5" />
          {dot(45, 20, "A")}
          {dot(27, 48, "B")}
          {dot(68, 48, "C")}
          <text x="48" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c2410c">A–B–C–A · cycles</text>
          {dot(150, 20, "A", "#7c9a3e")}
          {dot(130, 50, "B", "#7c9a3e")}
          {dot(175, 50, "C", "#7c9a3e")}
          <line x1="145" y1="30" x2="135" y2="40" stroke="#7c9a3e" strokeWidth="2.5" />
          <line x1="160" y1="30" x2="170" y2="40" stroke="#7c9a3e" strokeWidth="2.5" />
          <text x="153" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c7325">parents of C · no way back</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 220 66" className="h-16 w-full" aria-hidden>
          {dot(110, 32, "A", "#d97706")}
          {[18, 55, 200, 165].map((x, i) => (
            <g key={x}>
              <line
                x1={i < 2 ? 94 : 126}
                y1={i < 2 ? 26 : 38}
                x2={i < 2 ? x + 6 : x - 6}
                y2={i < 2 ? 12 : 52}
                stroke={i < 2 ? "#c2410c" : "#7c9a3e"}
                strokeWidth="2.5"
              />
              <circle cx={i < 2 ? x : x} cy={i < 2 ? 10 : 54} r="5" fill={i < 2 ? "#c2410c" : "#7c9a3e"} />
            </g>
          ))}
          <text x="30" y="8" fontSize="9" fontWeight="800" fill="#c2410c">in-degree 2</text>
          <text x="196" y="64" textAnchor="end" fontSize="9" fontWeight="800" fill="#5c7325">out-degree 3</text>
        </svg>
      );
  }
}

const DICHOTOMIES = [
  {
    kind: "dir",
    title: "Undirected vs Directed",
    rows: ["Undirected — “cousin of”: the link works both ways", "Directed — “son of”: arrows one way only, giving each vertex an in-degree and an out-degree"],
  },
  {
    kind: "wgt",
    title: "Unweighted vs Weighted",
    rows: ["Unweighted — “knows”: every edge counts the same", "Weighted — “brother of” vs “cousin of”: edges carry strength values"],
  },
  {
    kind: "con",
    title: "Connected vs Disconnected",
    rows: ["Connected — one community: every vertex reachable from every other", "Disconnected — isolated groups: a native Indian and a native Chinese with no path between"],
  },
  {
    kind: "cyc",
    title: "Cyclic vs Acyclic",
    rows: ["Cyclic — A–B–C–A friends triangle: a path returns to its start", "Acyclic — A and B parents of C: no path ever loops back (a tree is this)"],
  },
  {
    kind: "deg",
    title: "In-degree vs Out-degree",
    rows: ["In-degree — arrows pointing AT the vertex", "Out-degree — arrows leaving it; on undirected graphs they collapse into one degree"],
  },
];

export function AtbGraphsSection() {
  return (
    <Section id="graphs">
      <SectionHead
        eyebrow="Module 3 · Graphs"
        title={
          <>
            <span className="grad-text">Graphs</span> — when one parent isn&apos;t enough
          </>
        }
        lead="Friendship, roads, bank transfers: real relationships refuse to live under a single parent. Trees represent hierarchy; graphs represent relationship — the general structure underneath both."
      />

      <ReadStep n="1" title="Trees can&apos;t do friendship" sub="The one-parent rule that graphs break on purpose" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6" style={{ borderColor: "#eec3b6", background: "#fdf0ec" }}>
            <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#be4a4a" }}>
              <X className="h-4 w-4" /> the tree rule
            </div>
            <p className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">
              In a tree, every child has <strong>exactly ONE parent</strong>. Works for org charts
              and folders — hopeless for &ldquo;who is friends with whom&rdquo;, where anyone can connect to anyone.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm h-full p-6" style={{ borderColor: "#c9d8a4", background: "#f4f6e8" }}>
            <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#5c7325" }}>
              <Check className="h-4 w-4" /> the graph upgrade
            </div>
            <p className="mt-2 text-[.92rem] leading-relaxed text-[#2b2014]">
              A <strong>graph</strong> drops the rule: any vertex may connect to any other. Friendship,
              roads, the internet — <strong>trees represent hierarchy, GRAPHS represent relationship</strong>.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="V and E — the whole graph in two sets" sub="The lecture graph, drawn and formalised" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <LectureGraph />
          <div className="mt-5 grid gap-2">
            <KV k="Vertex (node)" v="one object / entity — a person, account, city, product" />
            <KV k="Edge" v="a relationship / connection between two vertices — friendship, a road, a transaction" />
            <KV k="G = (V, E)" v="every graph is just its vertex set V and its edge set E — nothing more" />
          </div>
          <div className="mt-4">
            <CodeBlock
              title="the lecture graph, formally"
              runnable={false}
              code={`V = {A, B, C, P, Q, R, S, X, Y}

E = {CS, AP, AQ, BR, SP, QR,
     SX, PX, QY, RY, XY}        # 11 edges

degree(P) = 3        # edges AP, SP, PX touch P
degrees: C=1, A=2, B=1 · S=3, P=3, Q=3, R=3, X=3, Y=3
Σ degrees = 22 = 2 × |E|     # every edge has two ends`}
            />
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Five dichotomies" sub="Five either/or switches that classify any graph at a glance" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DICHOTOMIES.map((d, i) => (
          <Reveal key={d.kind} delay={i * 60}>
            <div className="card-warm lift flex h-full flex-col gap-2 p-5">
              <h4 className="text-[.95rem] font-bold text-[#3e2c1d]">{d.title}</h4>
              <DichArt kind={d.kind} />
              <ul className="mt-1 grid gap-1.5">
                {d.rows.map((r) => (
                  <li key={r} className="flex gap-2 text-[.8rem] leading-relaxed text-[#4a3826]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d97706]" aria-hidden />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
        <Reveal delay={300}>
          <div className="card-warm flex h-full flex-col justify-center gap-2 p-5" style={{ background: "linear-gradient(150deg,#fffaf0,#fdeed6)" }}>
            <p className="eyebrow">the punchline</p>
            <p className="text-[.88rem] leading-relaxed text-[#2b2014]">
              Flip all five switches to <strong>undirected · unweighted · connected · acyclic · one-parent</strong>{" "}
              and a graph collapses back into… a <strong>tree</strong>. Every tree is a graph; most graphs are not trees.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            q="Degree of a vertex ="
            options={["its height", "number of edges directly connected to it", "number of subtrees", "its depth"]}
            answer={1}
            explain="Degree counts the edges touching the vertex — P touches AP, SP and PX, so degree(P) = 3. Height and depth belong to trees, not to graph vertices."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            q="Trees represent hierarchy; graphs represent…"
            options={["sorted data", "relationships", "loops only", "arrays"]}
            answer={1}
            explain="Graphs are the general language of relationships: any entity may connect to any other, with no parent rules at all."
          />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Practice
          title="Graphs — pen & paper"
          items={[
            {
              q: <>Draw 4 friends (you + 3) with friendship edges, then list <strong>V</strong> and <strong>E</strong> for your graph.</>,
              hint: "V is the set of names; E is the set of pairs — write each edge as two letters, like XY.",
            },
            {
              q: <>Compute the <strong>degree of every vertex</strong> in your friend graph and check the sum equals twice the number of edges.</>,
              hint: "Each edge has exactly two ends, so degrees always add up to 2 × |E|.",
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   DFS & BFS — dark walk-through
   ============================================================ */
function DGNode({ x, y, t, rank, tone }: { x: number; y: number; t: string; rank: number; tone: string }) {
  const on = rank > -1;
  return (
    <g>
      <circle cx={x} cy={y} r="20" fill={on ? tone : "rgba(255,246,232,.09)"} stroke={on ? tone : "rgba(245,158,11,.45)"} strokeWidth="2" />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill={on ? "#fff7ec" : "#f5e6cd"}>
        {t}
      </text>
      {on ? (
        <g>
          <circle cx={x + 24} cy={y - 24} r="11" fill="#2b1b10" stroke="#f5c889" strokeWidth="1.5" />
          <text x={x + 24} y={y - 20} textAnchor="middle" fontSize="10" fontWeight="800" fill="#f5c889">
            {rank + 1}
          </text>
        </g>
      ) : null}
    </g>
  );
}

function GraphWalk({ seq, tone, label }: { seq: string[]; tone: string; label: string }) {
  return (
    <svg
      viewBox="0 0 560 340"
      className="mx-auto h-auto w-full max-w-xl"
      role="img"
      aria-label={`${label}: visiting order ${seq.join(", ")} over the nine-vertex lecture graph`}
    >
      {G_EDGES.map(([a, b]) => (
        <line key={`${a}${b}`} x1={G_POS[a].x} y1={G_POS[a].y} x2={G_POS[b].x} y2={G_POS[b].y} stroke="rgba(201,154,91,.5)" strokeWidth="2" />
      ))}
      {Object.entries(G_POS).map(([n, p]) => (
        <DGNode key={n} x={p.x} y={p.y} t={n} rank={seq.indexOf(n)} tone={tone} />
      ))}
    </svg>
  );
}

function StackVisual() {
  const cells = ["S", "X", "P", "A"];
  return (
    <div className="flex items-end gap-4">
      <div className="flex w-20 flex-col-reverse gap-1.5">
        {cells.map((c, i) => (
          <div
            key={c}
            className={`flex h-10 items-center justify-center rounded-lg border font-mono text-sm font-bold ${
              i === 0
                ? "border-[#f59e0b] bg-[rgba(234,88,12,.28)] text-[#ffd9ae]"
                : "border-[rgba(245,158,11,.3)] bg-[rgba(255,246,232,.06)] text-[#e9d7bf]"
            }`}
          >
            {c}
          </div>
        ))}
      </div>
      <div className="grid gap-2 pb-1 text-[.74rem] font-semibold text-[#cbb392]">
        <span className="flex items-center gap-1.5">
          <ArrowUp className="h-3.5 w-3.5 text-[#f5c889]" /> top — pop from here
        </span>
        <span className="flex items-center gap-1.5">
          <ArrowDown className="h-3.5 w-3.5 text-[#f5c889]" /> bottom — first pushed
        </span>
      </div>
    </div>
  );
}

function QueueVisual() {
  const cells = ["A", "P", "Q", "X"];
  return (
    <div className="flex items-center gap-3">
      <span className="text-[.74rem] font-semibold text-[#cbb392]">front ←</span>
      <div className="flex gap-1.5">
        {cells.map((c, i) => (
          <div
            key={c}
            className={`flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-sm font-bold ${
              i === 0
                ? "border-[#f59e0b] bg-[rgba(217,119,6,.3)] text-[#ffd9ae]"
                : "border-[rgba(245,158,11,.3)] bg-[rgba(255,246,232,.06)] text-[#e9d7bf]"
            }`}
          >
            {c}
          </div>
        ))}
      </div>
      <span className="text-[.74rem] font-semibold text-[#cbb392]">← rear — enqueue here</span>
    </div>
  );
}

const DFS_STEPS = [
  { label: "Push the start node", sub: "stack = [A]", icon: <ArrowDownToLine className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Pop the top & mark visited", sub: "newest node leaves first", icon: <ArrowUpFromLine className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Push its unvisited neighbours", sub: "they pile on top of the stack", icon: <Layers className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Repeat until the stack is empty", sub: "stuck? backtrack — the stack remembers", icon: <RotateCcw className="h-4 w-4" style={{ color: "#f5c889" }} /> },
];
const BFS_STEPS = [
  { label: "Enqueue the start node", sub: "queue = [A]", icon: <ArrowRightToLine className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Dequeue the front & mark visited", sub: "oldest node leaves first", icon: <ArrowLeftFromLine className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Enqueue its unvisited neighbours", sub: "they line up at the rear", icon: <Share2 className="h-4 w-4" style={{ color: "#f5c889" }} /> },
  { label: "Repeat until the queue is empty", sub: "level after level, front to back", icon: <RotateCcw className="h-4 w-4" style={{ color: "#f5c889" }} /> },
];

export function AtbDfsBfsSection() {
  return (
    <Section id="dfsbfs" dark>
      <SectionHead
        dark
        eyebrow="Module 3 · Graph traversals"
        title={
          <>
            DFS &amp; BFS — <span className="grad-text">two ways to explore a network</span>
          </>
        }
        lead="Same nine vertices, same eleven edges as before. How you explore decides what you learn: dive deep and ask whether a connection exists, or sweep wide and ask how close everything is."
      />

      <ReadStep dark n="1" title="Depth First Search (DFS)" sub="Follow one path as far as it goes — then backtrack" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <ul className="grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              {[
                <>Go <strong>as far as possible along one path</strong> before backtracking.</>,
                <>Visit an <strong>unvisited neighbour</strong>, keep following unvisited neighbours until a node has <strong>no unexplored connections</strong> left.</>,
                <>Then <strong>backtrack</strong> to the last junction and repeat from there.</>,
              ].map((li, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[.7rem] font-bold" style={{ background: "rgba(245,158,11,.18)", color: "#f5c889" }}>
                    {i + 1}
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-[rgba(245,158,11,.2)] bg-[rgba(43,27,16,.5)] p-4">
              <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">the question DFS answers</p>
              <p className="mt-1 text-[.92rem] font-semibold text-[#ffd9ae]">
                “Does ANY connection exist between two nodes?”
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm p-5">
            <GraphWalk seq={["A", "P", "X", "S", "C", "Q", "Y", "R", "B"]} tone="#ea580c" label="DFS" />
            <p className="mt-3 text-center text-[.82rem] leading-relaxed text-[#cbb392]">
              DFS order: <span className="font-mono font-bold text-[#ffd9ae]">A P X S C Q Y R B</span>
              <br />
              (equally valid alternative: <span className="font-mono text-[.78rem]">A Q Y R B P X S</span> — depends on neighbour order)
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep dark n="2" title="DFS runs on a STACK" sub="Last in, first out — the mechanism behind the deep dive" />
      <Reveal>
        <StepsFlow steps={DFS_STEPS} />
      </Reveal>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-6">
            <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">the stack, mid-run</p>
            <div className="mt-4">
              <StackVisual />
            </div>
            <p className="mt-4 text-[.82rem] leading-relaxed text-[#cbb392]">
              A pushed, then P, then X, then S — <strong>the top of the stack is always the next visit</strong>.
              Empty stack = exploration complete.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <CodeBlock
            dark
            title="dfs.py — the whole idea in seven lines"
            runnable={false}
            code={`def dfs(graph, start):
    stack = [start]
    while stack:
        node = stack.pop()      # take the TOP
        if node not in visited:
            mark node visited
            for nb in graph[node]:
                if nb not visited:
                    stack.push(nb)`}
            note="Pop from the top → pile new neighbours on top → the search dives deep before it ever looks sideways. That is the stack's personality."
          />
        </Reveal>
      </div>

      <ReadStep dark n="3" title="Breadth First Search (BFS)" sub="Visit ALL nodes at the current depth before going deeper" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-5">
            <GraphWalk seq={["A", "P", "Q", "X", "Y", "S", "R", "C", "B"]} tone="#d97706" label="BFS" />
            <p className="mt-3 text-center text-[.82rem] leading-relaxed text-[#cbb392]">
              BFS order: <span className="font-mono font-bold text-[#ffd9ae]">A P Q X Y S R C B</span>
              <br />
              (alternative: <span className="font-mono text-[.78rem]">A Q P Y X R S B C</span>)
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm h-full p-6">
            <ul className="grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              {[
                <>Visit <strong>all nodes at the current depth</strong> before going one level deeper.</>,
                <>The search <strong>expands outward from the source</strong> like a ripple — neighbours first, neighbours-of-neighbours next.</>,
                <>Because every vertex is reached by its <strong>shortest</strong> route, BFS answers closeness questions.</>,
              ].map((li, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[.7rem] font-bold" style={{ background: "rgba(245,158,11,.18)", color: "#f5c889" }}>
                    {i + 1}
                  </span>
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl border border-[rgba(245,158,11,.2)] bg-[rgba(43,27,16,.5)] p-4">
              <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">the question BFS answers</p>
              <p className="mt-1 text-[.92rem] font-semibold text-[#ffd9ae]">
                “What is the MINIMUM degree of separation?”
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep dark n="4" title="BFS runs on a QUEUE" sub="First in, first out — the mechanism behind the ripple" />
      <Reveal>
        <StepsFlow steps={BFS_STEPS} />
      </Reveal>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-6">
            <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">the queue, mid-run</p>
            <div className="mt-4">
              <QueueVisual />
            </div>
            <p className="mt-4 text-[.82rem] leading-relaxed text-[#cbb392]">
              A left first (front of the line), so A is explored before anything discovered after it —{" "}
              <strong>distance order is preserved</strong>, which is exactly why BFS finds shortest paths.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <CodeBlock
            dark
            title="bfs.py — same shape, different container"
            runnable={false}
            code={`def bfs(graph, start):
    queue = [start]
    while queue:
        node = queue.dequeue()   # take the FRONT
        if node not in visited:
            mark node visited
            for nb in graph[node]:
                if nb not visited:
                    queue.enqueue(nb)`}
            note="Swap the stack for a queue and the personality flips: deep dive becomes level-by-level sweep. One line of code, completely different behaviour."
          />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm p-6" style={{ borderColor: "rgba(234,88,12,.4)" }}>
            <div className="flex items-center gap-3">
              <MoveVertical className="h-5 w-5" style={{ color: "#f5c889" }} />
              <h4 className="text-lg font-bold text-[#f5e6cd]">DFS ↔ stack ↔ go deep</h4>
            </div>
            <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              One path to the end, backtrack, repeat. Reachability: <strong>“is there any connection?”</strong>
            </p>
          </div>
          <div className="card-warm p-6" style={{ borderColor: "rgba(217,119,6,.5)" }}>
            <div className="flex items-center gap-3">
              <MoveHorizontal className="h-5 w-5" style={{ color: "#f5c889" }} />
              <h4 className="text-lg font-bold text-[#f5e6cd]">BFS ↔ queue ↔ go wide</h4>
            </div>
            <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              Every neighbour before every distance-2 node. Closeness: <strong>“fewest handshakes?”</strong>
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            q="DFS is implemented with a…"
            options={["queue", "stack", "heap", "hash table"]}
            answer={1}
            explain="DFS pops the most recently discovered node — that is a stack (LIFO). BFS is the queue twin (FIFO)."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            q="You need the minimum number of handshakes between two people. Use…"
            options={["DFS", "BFS", "pre-order", "in-order"]}
            answer={1}
            explain="Minimum handshakes = shortest path in an unweighted graph = BFS: it reaches everyone in increasing distance order, so the first time you meet the target is guaranteed to be via the fewest handshakes."
          />
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <Takeaways
          dark
          items={[
            <>Trees store <strong>hierarchies</strong>: root → parent → child → leaf, one parent per child.</>,
            <><strong>Depth</strong> counts edges from the root to a node; <strong>height</strong> counts edges from the root to the deepest leaf.</>,
            <>Traversals read a tree — <strong>pre/in/post-order are depth-first</strong>; <strong>level order is breadth-first</strong>.</>,
            <>Graphs capture <strong>relationships</strong>: G = (V, E), in directed/undirected, weighted/unweighted, connected/disconnected, cyclic/acyclic flavours.</>,
            <><strong>DFS (stack)</strong> goes deep — “does any connection exist?”; <strong>BFS (queue)</strong> goes wide — “what is the minimum degree of separation?”</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
