"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Boxes,
  Building2,
  Check,
  Coins,
  Fingerprint,
  FileCheck,
  Gauge,
  GitBranch,
  Globe,
  HeartPulse,
  Hourglass,
  KeyRound,
  Landmark,
  Link,
  Link2Off,
  Lock,
  Network,
  RefreshCcw,
  RotateCcw,
  Ruler,
  ScrollText,
  ShieldCheck,
  ShieldQuestion,
  TrendingUp,
  Users,
  Vote,
  Wallet,
  X,
  Zap,
} from "lucide-react";
import {
  Callout,
  KV,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   ATB · Parts 6 — Lectures 14 · 19 · 20: Tree types, Hashing, Blockchain
   ============================================================ */

/* ============================================================
   TREE TYPES — gallery art
   ============================================================ */
function TN({
  x,
  y,
  t,
  r = 13,
  fill = "#fff3e0",
  stroke = "#c99a5b",
  txt = "#7c4a12",
  fs = 11,
  dash = false,
}: {
  x: number;
  y: number;
  t: string;
  r?: number;
  fill?: string;
  stroke?: string;
  txt?: string;
  fs?: number;
  dash?: boolean;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="2" strokeDasharray={dash ? "4 3" : undefined} />
      <text x={x} y={y + fs * 0.36} textAnchor="middle" fontSize={fs} fontWeight="800" fill={txt}>
        {t}
      </text>
    </g>
  );
}
function TE({ a, b, c }: { a: [number, number]; b: [number, number]; c?: string }) {
  return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={c ?? "#c99a5b"} strokeWidth="2" />;
}

function GeneralTreeArt() {
  return (
    <svg viewBox="0 0 220 140" className="mx-auto h-auto w-full max-w-[230px]" aria-hidden>
      <TE a={[110, 22]} b={[40, 74]} />
      <TE a={[110, 22]} b={[110, 74]} />
      <TE a={[110, 22]} b={[180, 74]} />
      <TE a={[40, 74]} b={[25, 120]} />
      <TE a={[40, 74]} b={[60, 120]} />
      <TN x={110} y={22} t="●" fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
      <TN x={40} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={110} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={180} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={25} y={120} t="●" fill="#fff3e0" />
      <TN x={60} y={120} t="●" fill="#fff3e0" />
    </svg>
  );
}
function BinaryTreeArt() {
  return (
    <svg viewBox="0 0 220 140" className="mx-auto h-auto w-full max-w-[230px]" aria-hidden>
      <TE a={[110, 22]} b={[60, 74]} />
      <TE a={[110, 22]} b={[160, 74]} />
      <TE a={[60, 74]} b={[35, 120]} />
      <TE a={[60, 74]} b={[85, 120]} />
      <TE a={[160, 74]} b={[135, 120]} />
      <TN x={110} y={22} t="●" fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
      <TN x={60} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={160} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={35} y={120} t="●" fill="#fff3e0" />
      <TN x={85} y={120} t="●" fill="#fff3e0" />
      <TN x={135} y={120} t="●" fill="#fff3e0" />
    </svg>
  );
}
function CompleteTreeArt() {
  return (
    <svg viewBox="0 0 220 140" className="mx-auto h-auto w-full max-w-[230px]" aria-hidden>
      <TE a={[110, 22]} b={[60, 74]} />
      <TE a={[110, 22]} b={[160, 74]} />
      <TE a={[60, 74]} b={[30, 120]} />
      <TE a={[60, 74]} b={[90, 120]} />
      <TE a={[160, 74]} b={[150, 120]} />
      <TN x={110} y={22} t="●" fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
      <TN x={60} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={160} y={74} t="●" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={30} y={120} t="●" fill="#fff3e0" />
      <TN x={90} y={120} t="●" fill="#fff3e0" />
      <TN x={150} y={120} t="●" fill="#fff3e0" />
      <TN x={205} y={120} t="" r={11} fill="none" stroke="#d97706" dash />
      <text x="205" y="123" textAnchor="middle" fontSize="10" fontWeight="800" fill="#d97706">?</text>
    </svg>
  );
}
function BSTArt() {
  return (
    <svg viewBox="0 0 220 150" className="mx-auto h-auto w-full max-w-[230px]" role="img" aria-label="Binary search tree: 50 with 30 and 70 below, then 20, 40, 60 and 80">
      <TE a={[110, 24]} b={[60, 74]} />
      <TE a={[110, 24]} b={[160, 74]} />
      <TE a={[60, 74]} b={[30, 122]} />
      <TE a={[60, 74]} b={[90, 122]} />
      <TE a={[160, 74]} b={[135, 122]} />
      <TE a={[160, 74]} b={[185, 122]} />
      <TN x={110} y={24} t="50" fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
      <TN x={60} y={74} t="30" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={160} y={74} t="70" fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={30} y={122} t="20" />
      <TN x={90} y={122} t="40" />
      <TN x={135} y={122} t="60" />
      <TN x={185} y={122} t="80" />
      <text x="110" y="146" textAnchor="middle" fontSize="9" fontWeight="700" fill="#8a5a06">left &lt; parent &lt; right, everywhere</text>
    </svg>
  );
}
function AVLArt() {
  return (
    <svg viewBox="0 0 220 132" className="mx-auto h-auto w-full max-w-[230px]" role="img" aria-label="AVL rotation: a 20, 30, 50 chain rotates into a balanced tree rooted at 30">
      <defs>
        <marker id="m6av" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" />
        </marker>
      </defs>
      <TE a={[30, 26]} b={[55, 62]} />
      <TE a={[55, 62]} b={[80, 98]} />
      <TN x={30} y={26} t="20" r={12} fs={10} />
      <TN x={55} y={62} t="30" r={12} fs={10} />
      <TN x={80} y={98} t="50" r={12} fs={10} />
      <text x="16" y="12" fontSize="9" fontWeight="800" fill="#be4a4a">bf = −2</text>
      <path d="M96 62 C 114 40, 128 40, 146 58" fill="none" stroke="#c2410c" strokeWidth="2.5" markerEnd="url(#m6av)" />
      <text x="121" y="32" textAnchor="middle" fontSize="9" fontWeight="800" fill="#c2410c">rotate</text>
      <TE a={[175, 46]} b={[148, 94]} />
      <TE a={[175, 46]} b={[202, 94]} />
      <TN x={175} y={46} t="30" r={12} fs={10} fill="#7c9a3e" stroke="#7c9a3e" txt="#fff7ec" />
      <TN x={148} y={94} t="20" r={12} fs={10} />
      <TN x={202} y={94} t="50" r={12} fs={10} />
      <text x="175" y="124" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c7325">balanced · |bf| ≤ 1</text>
    </svg>
  );
}
function HeapArt() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <p className="text-center text-[.64rem] font-extrabold uppercase tracking-wider text-[#8a5a06]">Max-heap · parent ≥ children</p>
        <svg viewBox="0 0 120 132" className="mx-auto h-auto w-full" aria-hidden>
          <TE a={[60, 22]} b={[28, 68]} />
          <TE a={[60, 22]} b={[90, 68]} />
          <TE a={[28, 68]} b={[14, 114]} />
          <TE a={[28, 68]} b={[44, 114]} />
          <TN x={60} y={22} t="80" r={12} fs={10} fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
          <TN x={28} y={68} t="70" r={11} fs={9} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
          <TN x={90} y={68} t="60" r={11} fs={9} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
          <TN x={14} y={114} t="45" r={10} fs={8} />
          <TN x={44} y={114} t="55" r={10} fs={8} />
        </svg>
      </div>
      <div>
        <p className="text-center text-[.64rem] font-extrabold uppercase tracking-wider text-[#8a5a06]">Min-heap · parent ≤ children</p>
        <svg viewBox="0 0 120 132" className="mx-auto h-auto w-full" aria-hidden>
          <TE a={[60, 22]} b={[30, 68]} />
          <TE a={[60, 22]} b={[92, 68]} />
          <TE a={[92, 68]} b={[78, 114]} />
          <TE a={[92, 68]} b={[108, 114]} />
          <TN x={60} y={22} t="20" r={12} fs={10} fill="#7c9a3e" stroke="#7c9a3e" txt="#fff7ec" />
          <TN x={30} y={68} t="30" r={11} fs={9} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
          <TN x={92} y={68} t="25" r={11} fs={9} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
          <TN x={78} y={114} t="25" r={10} fs={8} />
          <TN x={108} y={114} t="45" r={10} fs={8} />
        </svg>
      </div>
    </div>
  );
}

const TREE_TYPES = [
  {
    name: "General tree",
    rule: "any number of children — no fixed min or max",
    art: <GeneralTreeArt />,
    desc: "The free-form family: no restriction on children per node, and a branching factor that varies node to node.",
    use: ["folders", "patrilineal family trees", "org hierarchies", "biological taxonomy"],
  },
  {
    name: "Binary tree",
    rule: "at most 2 children — max fixed at 2, min unrestricted",
    art: <BinaryTreeArt />,
    desc: "Every node picks left or right — zero, one or two children all allowed, so a node with fewer than two is still perfectly binary.",
    use: ["tournament knockouts", "yes/no decision trees", "flowcharts", "ATM decisions"],
  },
  {
    name: "Complete binary tree",
    rule: "all levels full, last level filled left → right",
    art: <CompleteTreeArt />,
    desc: "Packed like an array with no gaps — a lone child in the last level must be a LEFT child. Efficient storage, minimal wasted space.",
    use: ["heaps", "array storage"],
  },
  {
    name: "Binary search tree",
    rule: "left subtree < parent < right subtree",
    art: <BSTArt />,
    desc: "Ordered at every node, so search discards half the tree at each step. Minimum: keep going left. Maximum: keep going right.",
    use: ["student-ID lookups", "dictionary search", "database indexing"],
  },
  {
    name: "AVL tree",
    rule: "self-balancing BST · |height(L) − height(R)| ≤ 1 at every node",
    art: <AVLArt />,
    desc: "When an imbalance is detected the middle node is promoted and the children rearranged — balance restored, BST property preserved.",
    use: ["library catalogues", "in-memory DB indexing"],
  },
  {
    name: "Heaps",
    rule: "complete binary tree + parent-child value ordering — NOT a BST",
    art: <HeapArt />,
    desc: "No left/right ordering: max-heap parent ≥ children (root = maximum), min-heap parent ≤ children (root = minimum). Inserts reorder values; the shape stays complete.",
    use: ["priority queues", "emergency triage", "OS process scheduling"],
  },
];

/* ============================================================
   TREE TYPES — the bad hair day (chain → rotated balanced)
   ============================================================ */
function BadHairDay() {
  const chain: [number, number, string][] = [
    [46, 44, "20"],
    [86, 80, "30"],
    [126, 116, "50"],
    [166, 152, "60"],
    [206, 188, "70"],
    [246, 224, "80"],
  ];
  return (
    <svg
      viewBox="0 0 760 268"
      className="mx-auto h-auto w-full max-w-3xl"
      role="img"
      aria-label="Inserting 20, 30, 50, 60, 70, 80 in order builds a right-leaning chain of height 5; an AVL rotation rebalances it into a tree of height 2"
    >
      <defs>
        <marker id="m6rot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" />
        </marker>
      </defs>
      {/* chain */}
      {chain.slice(0, -1).map(([x, y], i) => (
        <TE key={i} a={[x + 12, y + 8]} b={[chain[i + 1][0] - 12, chain[i + 1][1] - 8]} />
      ))}
      {chain.map(([x, y, t], i) => (
        <TN key={t} x={x} y={y} t={t} r={14} fill={i === 0 ? "#c2410c" : "#f0a04b"} stroke={i === 0 ? "#c2410c" : "#f0a04b"} txt={i === 0 ? "#fff7ec" : "#3e2c1d"} />
      ))}
      <text x="146" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="#b45309">insert 20, 30, 50, 60, 70, 80 — in order</text>
      <text x="146" y="254" textAnchor="middle" fontSize="10" fontWeight="700" fill="#be4a4a">height 5 · a linked list in disguise · search O(n)</text>

      {/* rotation arrow */}
      <path d="M292 134 C 332 86, 372 86, 412 122" fill="none" stroke="#c2410c" strokeWidth="3" markerEnd="url(#m6rot)" />
      <text x="352" y="80" textAnchor="middle" fontSize="11" fontWeight="800" fill="#c2410c">AVL rotation</text>

      {/* balanced */}
      <TE a={[560, 48]} b={[478, 116]} />
      <TE a={[560, 48]} b={[642, 116]} />
      <TE a={[478, 116]} b={[436, 184]} />
      <TE a={[478, 116]} b={[520, 184]} />
      <TE a={[642, 116]} b={[600, 184]} />
      <TE a={[642, 116]} b={[684, 184]} />
      <TN x={560} y={48} t="50" r={15} fs={12} fill="#c2410c" stroke="#c2410c" txt="#fff7ec" />
      <TN x={478} y={116} t="30" r={14} fs={11} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={642} y={116} t="70" r={14} fs={11} fill="#f0a04b" stroke="#f0a04b" txt="#3e2c1d" />
      <TN x={436} y={184} t="20" r={13} fs={10} />
      <TN x={520} y={184} t="40" r={13} fs={10} />
      <TN x={600} y={184} t="60" r={13} fs={10} />
      <TN x={684} y={184} t="80" r={13} fs={10} />
      <text x="560" y="222" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5c7325">same values · height 2 · search O(log n)</text>
    </svg>
  );
}

/* ============================================================
   TREE TYPES — section
   ============================================================ */
export function AtbTreeTypesSection() {
  return (
    <Section id="treetypes">
      <SectionHead
        eyebrow="Lecture 14 · Tree types"
        title={
          <>
            <span className="grad-text">Six trees</span> every manager should recognise
          </>
        }
        lead="All trees are not equal. Six flavours cover nearly every hierarchy you will meet in business — and two of them are the reason databases and schedulers feel instant."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {TREE_TYPES.map((t, i) => (
          <Reveal key={t.name} delay={i * 50}>
            <div className="card-warm lift flex h-full flex-col gap-2 p-5">
              <h4 className="text-[1rem] font-bold text-[#3e2c1d]">{t.name}</h4>
              <p className="font-mono text-[.72rem] font-bold text-[#c2410c]">{t.rule}</p>
              <div className="rounded-xl bg-[#fffaf1] p-2" style={{ border: "1px dashed #ecd9bd" }}>
                {t.art}
              </div>
              <p className="text-[.82rem] leading-relaxed text-[#4a3826]">{t.desc}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {t.use.map((u) => (
                  <span key={u} className="chip">{u}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="1" title="The BST&apos;s bad hair day" sub="Insert sorted data into a plain BST and it loses its superpower" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <BadHairDay />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(190,74,74,.1)", border: "1px solid rgba(190,74,74,.3)" }}>
              <strong style={{ color: "#8c2f2f" }}>Unbalanced:</strong> <span className="text-[#2b2014]">every insertion lands on the right — the tree degenerates into a chain and search crawls node by node, O(n).</span>
            </div>
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(124,154,62,.12)", border: "1px solid rgba(124,154,62,.35)" }}>
              <strong style={{ color: "#5c7325" }}>After a rotation:</strong> <span className="text-[#2b2014]">the AVL tree tips the chain back into balance — height drops from 5 to 2 and search leaps, O(log n).</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            source="Lecture 14 · BST ordering"
            q="In a BST, values smaller than the parent go…"
            options={["right", "left", "either", "up"]}
            answer={1}
            explain="The BST invariant: left subtree < parent < right subtree. Smaller values live left, larger right — at every single node."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Lecture 14 · heaps"
            q="Which tree powers a priority queue?"
            options={["AVL", "heap", "general tree", "deque"]}
            answer={1}
            explain="A heap keeps the extreme (max or min) at the root of a complete binary tree — enqueue anything, dequeue the priority in O(log n)."
          />
        </Reveal>
      </div>

      <ReadStep n="2" title="Six trees, one table" sub="The lecture&apos;s comparison summary — pin it above your desk" />
      <Reveal>
        <div className="card-warm overflow-hidden">
          <div className="flex flex-wrap items-center gap-2 px-6 pt-5">
            <span className="chip"><GitBranch className="h-3.5 w-3.5" aria-hidden /> Lecture 14 · comparison summary</span>
          </div>
          <div className="mt-3 overflow-x-auto px-4 pb-5">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr><th>Tree type</th><th>Children limit</th><th>Value ordering</th><th>Key property</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">General tree</td><td>No limit</td><td>Not required</td><td>Hierarchical structure only</td></tr>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">Binary tree</td><td>Max 2</td><td>Not required</td><td>At most 2 children per node</td></tr>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">Complete binary tree</td><td>Max 2</td><td>Not required</td><td>All levels full except the last; last level filled left-to-right</td></tr>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">Binary search tree</td><td>Max 2</td><td>Required</td><td>Left &lt; parent &lt; right, for every node</td></tr>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">AVL tree</td><td>Max 2</td><td>Required</td><td>BST + height difference ≤ 1</td></tr>
                <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">Heap</td><td>Max 2</td><td>Partial ordering</td><td>Complete binary tree + parent-child value relationship</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Quiz
          source="Lecture 14 · complete trees"
          q="In a complete binary tree, a node in the last level has exactly one child. Which child can it be?"
          options={["right child", "left child", "either — no rule", "a complete tree forbids children there"]}
          answer={1}
          explain="The last level fills strictly left-to-right with no gaps, so a lone child must be the left child — a right-only child would leave a gap."
        />
      </Reveal>

      <Reveal className="mt-8">
        <Practice
          title="Tree types — pen & paper"
          items={[
            {
              q: <>Insert <code className="font-mono text-[.82rem] text-[#a0410a]">50, 30, 70, 20, 40</code> into an empty BST — draw the result.</>,
              hint: "50 becomes the root; every later value walks down: smaller goes left, larger goes right.",
            },
            {
              q: <>Why is the <strong>in-order traversal</strong> of a BST special?</>,
              hint: "Left → Root → Right visits values in exactly sorted ascending order.",
            },
          ]}
        />
      </Reveal>

      <Reveal className="mt-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><GitBranch className="h-3.5 w-3.5" aria-hidden /> Lecture 14 · key takeaways</span>
        </div>
        <Takeaways
          items={[
            <>Structure choice depends on the application — every tree type earns its place in a specific scenario.</>,
            <>Balance is critical for search efficiency — a skewed BST is a linked list in disguise.</>,
            <>Value ordering matters when searches are frequent — BSTs and AVLs pay at insert time to make every search fast.</>,
            <>Heaps power priority queues — max heap: higher number first; min heap: priority 1 before priority 2. Emergency patients before routine cases, system processes before user apps.</>,
            <>AVL rotations prevent the degenerate case — |height(L) − height(R)| never exceeds 1, so efficient search is guaranteed.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   HASHING — function → digest SVG
   ============================================================ */
function HashBoxSVG() {
  return (
    <svg
      viewBox="0 0 720 190"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="A short input and a huge input both pass through the hash function and come out as digests of the same fixed length"
    >
      <defs>
        <marker id="m6h" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      <rect x="16" y="28" width="180" height="40" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="106" y="46" textAnchor="middle" fontSize="12" fontWeight="800" fill="#3e2c1d">“Hello”</text>
      <text x="106" y="60" textAnchor="middle" fontSize="9" fill="#8a5a06">5 characters</text>
      <rect x="16" y="112" width="180" height="40" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="106" y="130" textAnchor="middle" fontSize="12" fontWeight="800" fill="#3e2c1d">an entire book</text>
      <text x="106" y="144" textAnchor="middle" fontSize="9" fill="#8a5a06">millions of characters</text>
      <path d="M196 48 C 246 48, 258 72, 296 82" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6h)" />
      <path d="M196 132 C 246 132, 258 108, 296 98" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6h)" />
      <rect x="300" y="58" width="150" height="66" rx="14" fill="#b45309" />
      <text x="375" y="88" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff7ec">hash()</text>
      <text x="375" y="106" textAnchor="middle" fontSize="9" fill="#fde8cf">the fingerprint machine</text>
      <path d="M450 82 C 490 72, 500 54, 536 48" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6h)" />
      <path d="M450 100 C 490 110, 500 128, 536 134" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6h)" />
      <rect x="540" y="28" width="164" height="40" rx="10" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="622" y="52" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">a1b2c3d4e5f6</text>
      <rect x="540" y="112" width="164" height="40" rx="10" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="622" y="136" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">9f8e7d6c5b4a</text>
      <text x="622" y="176" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a5a06">same length — always. That is the digest.</text>
    </svg>
  );
}

/* ============================================================
   HASHING — mod lab (interactive)
   ============================================================ */
const MOD_INPUTS = [101, 107, 113, 128, 149];

function ModHashLab() {
  const [pick, setPick] = useState(101);
  const idx = pick % 10;
  return (
    <div className="card-warm p-5 md:p-7">
      <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#a0410a]">try it — the hello-world hash</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {MOD_INPUTS.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setPick(n)}
            aria-pressed={pick === n}
            aria-label={`Hash roll number ${n} with mod 10`}
            className={`rounded-full px-4 py-1.5 font-mono text-[.82rem] font-bold transition-all duration-200 ${
              pick === n
                ? "text-white shadow-md"
                : "border border-[#ecd9bd] bg-white/70 text-[#7c4a12] hover:border-[#e0a45e]"
            }`}
            style={pick === n ? { background: "linear-gradient(135deg,#ea580c,#c2410c)" } : undefined}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="mt-5 rounded-2xl bg-[#fffaf1] p-4 text-center" style={{ border: "1px dashed #ecd9bd" }}>
        <p key={pick} className="anim-pop font-mono text-2xl font-extrabold text-[#3e2c1d] md:text-3xl">
          {pick} <span className="text-[#c2410c]">mod</span> 10 = <span className="text-[#c2410c]">{idx}</span>
        </p>
        <p className="mt-1 text-[.76rem] text-[#8a5a06]">the hash of roll number {pick} is its last digit — index {idx}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border font-mono text-sm font-bold transition-all duration-300 ${
                i === idx
                  ? "border-[#c2410c] bg-[#ea580c] text-white shadow-md"
                  : "border-[#ecd9bd] bg-white/70 text-[#b08968]"
              }`}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="chip"><strong>x</strong>&nbsp;= how many unique hash values you want</span>
        <span className="chip">mod 10 → 10 values → indexes 0–9</span>
        <span className="chip">mod 100 → indexes 0–99</span>
        <span className="chip">27 mod 5 = 2 · 25 mod 5 = 0</span>
        <span className="chip">Lecture 19 · mod mechanics</span>
      </div>
    </div>
  );
}

/* ============================================================
   HASHING — collision & chaining SVG
   ============================================================ */
function CollisionSVG() {
  return (
    <svg
      viewBox="0 0 720 260"
      className="mx-auto h-auto w-full max-w-3xl"
      role="img"
      aria-label="Hash table with chaining: index 2 holds a linked chain of three colliding keys, index 4 holds one key"
    >
      <defs>
        <marker id="m6c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      <rect x="20" y="40" width="100" height="44" rx="10" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="70" y="67" textAnchor="middle" fontSize="14" fontWeight="800" fill="#7c4a12">2</text>
      <rect x="20" y="104" width="100" height="44" rx="10" fill="none" stroke="#e3cfa9" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="70" y="131" textAnchor="middle" fontSize="12" fill="#c9a97e">…</text>
      <rect x="20" y="170" width="100" height="44" rx="10" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="70" y="197" textAnchor="middle" fontSize="14" fontWeight="800" fill="#7c4a12">4</text>

      <line x1="120" y1="62" x2="156" y2="62" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6c)" />
      <rect x="160" y="40" width="150" height="44" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="235" y="67" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">M24SME012</text>
      <line x1="310" y1="62" x2="366" y2="62" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6c)" />
      <text x="338" y="52" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#a0410a">next</text>
      <rect x="370" y="40" width="150" height="44" rx="10" fill="#fff3e0" stroke="#be4a4a" strokeWidth="2" />
      <text x="445" y="67" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">P25SME002</text>
      <line x1="520" y1="62" x2="576" y2="62" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6c)" />
      <text x="548" y="52" textAnchor="middle" fontSize="9" fontStyle="italic" fill="#a0410a">next</text>
      <rect x="580" y="40" width="126" height="44" rx="10" fill="#fff3e0" stroke="#be4a4a" strokeWidth="2" />
      <text x="643" y="67" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">B26SME112</text>
      <text x="420" y="26" textAnchor="middle" fontSize="11" fontWeight="800" fill="#be4a4a">three different keys hash to 2 → collision!</text>

      <line x1="120" y1="192" x2="156" y2="192" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6c)" />
      <rect x="160" y="170" width="150" height="44" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="235" y="197" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">M25SME044</text>
      <text x="430" y="197" fontSize="10" fontWeight="600" fill="#8a5a06">no clash here — one key, one slot</text>
    </svg>
  );
}

/* ============================================================
   HASHING — password login SVG + integrity SVG
   ============================================================ */
function PasswordFlowSVG() {
  return (
    <svg
      viewBox="0 0 760 210"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="At login the typed password is hashed and compared with the stored hash; on match, access is granted"
    >
      <defs>
        <marker id="m6p" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      <rect x="20" y="50" width="190" height="44" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="115" y="69" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#3e2c1d">password123</text>
      <text x="115" y="85" textAnchor="middle" fontSize="9" fill="#8a5a06">typed at login</text>
      <line x1="210" y1="72" x2="256" y2="72" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6p)" />
      <rect x="260" y="44" width="130" height="56" rx="14" fill="#b45309" />
      <text x="325" y="77" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff7ec">hash()</text>
      <line x1="390" y1="72" x2="436" y2="72" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6p)" />
      <rect x="440" y="50" width="170" height="44" rx="10" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="525" y="77" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">42f749ade7f9…</text>
      <rect x="440" y="140" width="170" height="40" rx="10" fill="#eef4dd" stroke="#9ab86b" strokeWidth="2" />
      <text x="525" y="159" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#44621d">42f749ade7f9…</text>
      <text x="525" y="173" textAnchor="middle" fontSize="9" fill="#5c7325">stored hash (from signup)</text>
      <path d="M610 72 C 646 74, 660 88, 668 96" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6p)" />
      <path d="M610 160 C 646 158, 660 122, 668 114" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6p)" />
      <circle cx="696" cy="105" r="26" fill="#7c9a3e" />
      <text x="696" y="113" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff7ec">✓</text>
      <text x="696" y="150" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5c7325">equal → access granted</text>
    </svg>
  );
}
function IntegritySVG() {
  return (
    <svg
      viewBox="0 0 780 210"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="Integrity check: sender hashes the file and sends file plus hash; receiver recomputes the hash; both digests match, so the file is intact"
    >
      <defs>
        <marker id="m6i" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" />
        </marker>
      </defs>
      <rect x="20" y="30" width="160" height="44" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="100" y="57" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3e2c1d">original file</text>
      <line x1="180" y1="52" x2="216" y2="52" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <rect x="220" y="30" width="110" height="44" rx="12" fill="#b45309" />
      <text x="275" y="57" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff7ec">hash()</text>
      <line x1="330" y1="52" x2="366" y2="52" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <rect x="370" y="34" width="150" height="36" rx="9" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="445" y="57" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">H1 = 7a3f9b</text>

      <text x="300" y="112" textAnchor="middle" fontSize="10" fontWeight="700" fontStyle="italic" fill="#8a5a06">file + H1 travel together over the network</text>

      <rect x="20" y="140" width="160" height="40" rx="10" fill="#fff3e0" stroke="#c99a5b" strokeWidth="2" />
      <text x="100" y="165" textAnchor="middle" fontSize="11" fontWeight="700" fill="#3e2c1d">received file</text>
      <line x1="180" y1="160" x2="216" y2="160" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <rect x="220" y="140" width="110" height="40" rx="12" fill="#b45309" />
      <text x="275" y="165" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff7ec">hash() again</text>
      <line x1="330" y1="160" x2="366" y2="160" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <rect x="370" y="142" width="150" height="36" rx="9" fill="#fde8cf" stroke="#d97706" strokeWidth="2" />
      <text x="445" y="165" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#7c4a12">H2 = 7a3f9b</text>

      <path d="M520 52 C 590 52, 620 66, 656 80" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <path d="M520 160 C 590 160, 620 116, 656 102" fill="none" stroke="#c99a5b" strokeWidth="2" markerEnd="url(#m6i)" />
      <circle cx="690" cy="91" r="28" fill="#7c9a3e" />
      <text x="690" y="99" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff7ec">✓</text>
      <text x="690" y="136" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5c7325">equal → intact</text>
      <text x="690" y="152" textAnchor="middle" fontSize="9" fill="#be4a4a">mismatch → tampered</text>
    </svg>
  );
}

/* ============================================================
   HASHING — section
   ============================================================ */
const GOOD_HASH = [
  "fast to calculate",
  "consistent — same key → same index",
  "even distribution across indexes",
  "fewer collisions",
  "uses the key effectively",
];
const HASH_PROPS = [
  { icon: RefreshCcw, name: "Deterministic", desc: "the same input always produces the same hash — no randomness, ever" },
  { icon: Ruler, name: "Fixed-length output", desc: "a tweet or a terabyte: the digest is always the same size" },
  { icon: Lock, name: "One-way", desc: "you can hash forward, but you cannot recover the input from the hash" },
  { icon: Zap, name: "Avalanche effect", desc: "change one letter of the input and the hash changes wildly, beyond recognition" },
  { icon: ShieldCheck, name: "Collision-resistant", desc: "two different inputs landing on the same hash is astronomically unlikely" },
  { icon: Gauge, name: "Computing speed", desc: "fast for file integrity checks; deliberately slow for password hashing" },
];

export function AtbHashingSection() {
  return (
    <Section id="hashing">
      <SectionHead
        eyebrow="Lecture 19 · Hashing"
        title={
          <>
            <span className="grad-text">Hashing</span> — fixed-length fingerprints
          </>
        }
        lead="A hash function takes any input and returns a fixed-length fingerprint called a digest. That one idea powers instant lookup tables, password vaults and tamper-evident files."
      />

      <ReadStep n="1" title="From function to hash" sub="A normal function maps inputs to outputs — a hash pins the output size" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <div className="flex items-center gap-3">
            <Fingerprint className="h-5 w-5" style={{ color: "#c2410c" }} />
            <p className="text-[.92rem] leading-relaxed text-[#2b2014]">
              Recall the <strong>function box</strong>: input → function → output. A{" "}
              <strong>hash function</strong> is a function with one iron rule: the output is{" "}
              <strong>always the same fixed length</strong> — that output is the <strong>digest</strong>.
            </p>
          </div>
          <div className="mt-5">
            <HashBoxSVG />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(190,74,74,.08)", border: "1px solid rgba(190,74,74,.25)" }}>
              <strong style={{ color: "#8c2f2f" }}>Standard functions flex:</strong> <span className="text-[#2b2014]">square(x) grows with the number, uppercase(s) grows with the string — ordinary outputs <em>vary in length</em> with the input.</span>
            </div>
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(124,154,62,.1)", border: "1px solid rgba(124,154,62,.3)" }}>
              <strong style={{ color: "#5c7325" }}>Hash functions never do:</strong> <span className="text-[#2b2014]">the output is a fixed-length <strong>digest</strong> (a.k.a. <strong>message digest</strong>), typically alphanumeric — five characters or five million, same size out.</span>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="mod — the hello-world hash" sub="The remainder is a perfectly respectable hash function" />
      <ModHashLab />

      <ReadStep n="3" title="From normal table to hash table" sub="Scan every row, or jump straight to the answer" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm overflow-hidden">
            <p className="eyebrow px-6 pt-5">before — the normal table</p>
            <div className="mt-3 overflow-x-auto px-4 pb-5">
              <table className="warm-table min-w-[380px]">
                <thead>
                  <tr><th>Roll No</th><th>Name</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">B26SME001</td><td>Amar Sharma</td></tr>
                  <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">M26ME002</td><td>Akbar Khan</td></tr>
                  <tr><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">P25ELE0003</td><td>Anothony Gonzalves</td></tr>
                </tbody>
              </table>
            </div>
            <p className="px-6 pb-5 text-[.8rem] text-muted-warm">Searching means <strong>scanning row after row</strong> until you stumble on the key.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm overflow-hidden">
            <p className="eyebrow px-6 pt-5">after — the hash table</p>
            <div className="mt-3 overflow-x-auto px-4 pb-5">
              <table className="warm-table min-w-[420px]">
                <thead>
                  <tr><th>Index (hash)</th><th>Roll No (Key)</th><th>Name (Value)</th></tr>
                </thead>
                <tbody>
                  <tr><td className="font-mono font-bold text-[#a0410a]">1</td><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">B26SME001</td><td>Amar Sharma</td></tr>
                  <tr><td className="font-mono font-bold text-[#a0410a]">2</td><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">M26ME002</td><td>Akbar Khan</td></tr>
                  <tr><td className="font-mono font-bold text-[#a0410a]">3</td><td className="font-mono text-[.8rem] font-bold text-[#7c4a12]">P25ELE0003</td><td>Anothony Gonzalves</td></tr>
                </tbody>
              </table>
            </div>
            <p className="px-6 pb-5 text-[.8rem] text-muted-warm">The hash of the key <strong>is the row address</strong> — search lands on the answer directly.</p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <div className="grid gap-2 md:grid-cols-3">
          <KV k="key" v="identifies the record — here the roll number" />
          <KV k="value" v="the data you store — here the student name" />
          <KV k="index" v="the hash value pointing at the key&apos;s location → quick search" />
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="chip">Lecture 19 · index → key → value</span>
          <p className="text-[.8rem] text-muted-warm">Stored as <strong>index-key-value</strong> triples — students whose roll numbers end in the same digit <strong>group together</strong> at that index.</p>
        </div>
      </Reveal>

      <ReadStep n="4" title="Collisions &amp; chaining" sub="Two keys, one index — the hash table&apos;s only real fight" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <CollisionSVG />
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(190,74,74,.1)", border: "1px solid rgba(190,74,74,.3)" }}>
              <strong style={{ color: "#8c2f2f" }}>Collision:</strong> <span className="text-[#2b2014]">the same hash produced for two different inputs. With finitely many indexes and infinitely many keys, it is inevitable.</span>
            </div>
            <div className="rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "rgba(124,154,62,.12)", border: "1px solid rgba(124,154,62,.35)" }}>
              <strong style={{ color: "#5c7325" }}>The fix — hash chaining:</strong> <span className="text-[#2b2014]">each index keeps a linked list; colliding keys simply queue up behind the first.</span>
            </div>
          </div>
          <div className="mt-3 rounded-xl p-3.5 text-[.85rem] leading-relaxed" style={{ background: "#fffaf1", border: "1px dashed #ecd9bd" }}>
            <span className="chip mb-2">Lecture 19 · collision at index 1</span>
            <p className="text-[#2b2014]"><strong>The lecture&apos;s example:</strong> roll numbers <span className="font-mono font-bold text-[#a0410a]">B26-SME-001</span> and <span className="font-mono font-bold text-[#a0410a]">B26-SME-011</span> both end in 1 — both hash to index 1. Collision. Chaining links the new record behind the old one at that index, and both stay findable.</p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="5" title="What makes a good hash function" sub="Five habits of a well-behaved fingerprinter" />
      <Reveal>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="chip"><Fingerprint className="h-3.5 w-3.5" aria-hidden /> Lecture 19 · the five habits</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {GOOD_HASH.map((g) => (
            <span key={g} className="chip">
              <Check className="h-3.5 w-3.5" style={{ color: "#7c9a3e" }} /> {g}
            </span>
          ))}
        </div>
      </Reveal>

      <ReadStep n="6" title="Hashing for cybersecurity" sub="The same fingerprint idea, pointed at security" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {HASH_PROPS.map((p, i) => (
          <Reveal key={p.name} delay={i * 50}>
            <div className="card-warm lift h-full p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,#fde8cf,#fbcf9f)", color: "#8a3d10" }}>
                  <p.icon className="h-4.5 w-4.5" />
                </span>
                <h4 className="text-[.92rem] font-bold text-[#3e2c1d]">{p.name}</h4>
              </div>
              <p className="mt-2 text-[.82rem] leading-relaxed text-[#4a3826]">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="7" title="Two business use cases" sub="Where the fingerprint earns its salary" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm flex h-full flex-col p-5 md:p-6">
            <div className="flex items-center gap-2">
              <KeyRound className="h-4.5 w-4.5" style={{ color: "#c2410c" }} />
              <h4 className="text-[1rem] font-bold text-[#3e2c1d]">(a) Password storage</h4>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl" style={{ border: "1px solid var(--line-warm)" }}>
              <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#fdecec" }}>
                <X className="h-4 w-4 shrink-0" style={{ color: "#be4a4a" }} />
                <span className="font-mono text-[.85rem] font-bold text-[#8c2f2f] line-through">password123</span>
                <span className="ml-auto text-[.7rem] font-extrabold uppercase tracking-wider text-[#be4a4a]">never store this</span>
              </div>
              <div className="flex items-center gap-3 border-t px-4 py-3" style={{ borderColor: "#e8dcc0", background: "#eef4dd" }}>
                <Check className="h-4 w-4 shrink-0" style={{ color: "#7c9a3e" }} />
                <span className="font-mono text-[.85rem] font-bold text-[#44621d]">42f749ade7f9e195bf</span>
                <span className="ml-auto text-[.7rem] font-extrabold uppercase tracking-wider text-[#5c7325]">store the hash</span>
              </div>
            </div>
            <p className="mt-4 text-[.86rem] leading-relaxed text-[#2b2014]">
              At login the site <strong>hashes the password you type</strong> and compares it with the
              stored hash — the plain password itself is never kept, so a leaked database leaks no passwords.
              Mistype a single character and the avalanche effect produces a <strong>completely different hash</strong> — access denied.
            </p>
            <div className="mt-4">
              <PasswordFlowSVG />
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col p-5 md:p-6">
            <div className="flex items-center gap-2">
              <FileCheck className="h-4.5 w-4.5" style={{ color: "#c2410c" }} />
              <h4 className="text-[1rem] font-bold text-[#3e2c1d]">(b) Integrity checks</h4>
            </div>
            <p className="mt-4 text-[.86rem] leading-relaxed text-[#2b2014]">
              Sender hashes the file and <strong>sends file + hash together</strong>. The receiver
              recomputes the hash of what arrived: <strong>equal ✓ → intact</strong>; different ✗ → altered in transit.
            </p>
            <ol className="mt-3 grid gap-1.5 text-[.78rem] leading-snug text-[#4a3826]">
              {["Sender hashes the original file", "Hash + data are packaged and sent", "Receiver unpacks and separates data from hash", "Receiver re-hashes the received data", "Calculated hash is compared with the received hash", "Match → intact · mismatch → corrupted"].map((s, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#f6e3c8] text-[.6rem] font-bold text-[#8a4508]">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <div className="mt-3">
              <span className="chip"><FileCheck className="h-3.5 w-3.5" aria-hidden /> Lecture 19 · the 6-step integrity check</span>
            </div>
            <div className="mt-4">
              <IntegritySVG />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <Quiz
            source="Lecture 19 · mod"
            q="101 mod 10 = ?"
            options={["10", "1", "0", "101"]}
            answer={1}
            explain="mod gives the remainder after division by 10 — for 101 that is 1. Handy: mod 10 is just the last digit."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Lecture 19 · one-way"
            q="Storing password hashes instead of passwords protects users because hashes are…"
            options={["sorted", "one-way", "reversible", "shorter"]}
            answer={1}
            explain="Hashing is one-way: from 42f749ade7f9e195bf you cannot get password123 back. Attackers can only try guesses — and the avalanche effect makes even close guesses useless."
          />
        </Reveal>
      </div>

      <Reveal className="mt-5">
        <Quiz
          source="Lecture 19 · hashing"
          q="B26-SME-001 and B26-SME-011 both hash to index 1. How does the hash table keep both records?"
          options={["the second overwrites the first", "chaining — a linked list at index 1 holds both", "the table grows a new index 11", "one record is discarded"]}
          answer={1}
          explain="Collision → chaining: each index keeps a linked list, and new records are chained behind existing ones at that index. Both stay findable by walking the chain."
        />
      </Reveal>

      <Reveal className="mt-8">
        <Practice
          title="Hashing — pen & paper"
          items={[
            {
              q: <>Hash three roll numbers of your choice with <strong>mod 10</strong> and place each in a 10-slot table.</>,
              hint: "The hash is the last digit — that digit is the slot index.",
            },
            {
              q: <>Explain the <strong>avalanche effect</strong> in one line.</>,
              hint: "Tiny input change → a completely different digest.",
            },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   BLOCKCHAIN — block anatomy + chain growth SVGs
   ============================================================ */
function BlockAnatomySVG() {
  return (
    <svg
      viewBox="0 0 560 236"
      className="mx-auto h-auto w-full max-w-xl"
      role="img"
      aria-label="Anatomy of a blockchain block: a header holding the hash of the previous block, the hash of the current block and the Merkle root, plus a body of transactions stored chronologically"
    >
      <rect x="60" y="18" width="440" height="198" rx="14" fill="rgba(255,246,232,.05)" stroke="rgba(245,158,11,.35)" strokeWidth="2" />
      <path d="M60 32 Q60 18 74 18 H486 Q500 18 500 32 V108 H60 Z" fill="rgba(245,158,11,.14)" />
      <text x="80" y="44" fontSize="10" fontWeight="800" letterSpacing="2" fill="#f5c889">HEADER</text>
      <text x="80" y="64" fontFamily="monospace" fontSize="11" fill="#ffd9ae">hash of previous block : H_prev</text>
      <text x="80" y="82" fontFamily="monospace" fontSize="11" fill="#ffd9ae">hash of current block : H_cur</text>
      <text x="80" y="100" fontFamily="monospace" fontSize="11" fill="#ffd9ae">merkle root : R</text>
      <line x1="60" y1="108" x2="500" y2="108" stroke="rgba(245,158,11,.3)" strokeWidth="1.5" />
      <text x="80" y="140" fontSize="10" fontWeight="800" letterSpacing="2" fill="#f5c889">TRANSACTIONS</text>
      <text x="80" y="166" fontFamily="monospace" fontSize="11" fill="#e9d7bf">Tx 1 · Ama → Bao · 1.0</text>
      <text x="80" y="188" fontFamily="monospace" fontSize="11" fill="#e9d7bf">Tx 2 · Cy → Di · 0.4</text>
      <text x="320" y="230" textAnchor="middle" fontSize="10" fontWeight="600" fill="#b98d5f">header = the tamper seal · body = the payload</text>
    </svg>
  );
}

function ChainGrowSVG() {
  const blocks = [
    { prev: "NULL", hash: "H1", tx: "Tx 1, Tx 2" },
    { prev: "H1", hash: "H2", tx: "Tx 3, Tx 4" },
    { prev: "H2", hash: "H3", tx: "Tx 5, Tx 6" },
    { prev: "H3", hash: "H4", tx: "Tx 7, Tx 8" },
  ];
  return (
    <svg
      viewBox="0 0 780 196"
      className="mx-auto h-auto w-full max-w-3xl"
      role="img"
      aria-label="The chain: a genesis block whose previous-hash is NULL, followed by blocks storing the hash of the block before them"
    >
      <defs>
        <marker id="m6ch" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" />
        </marker>
      </defs>
      {blocks.map((b, i) => {
        const x = 15 + i * 198;
        return (
          <motion.g
            key={b.hash}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.22 }}
          >
            <rect x={x} y="30" width="150" height="130" rx="12" fill="rgba(255,246,232,.05)" stroke="rgba(245,158,11,.35)" strokeWidth="2" />
            {i === blocks.length - 1 ? (
              <rect x={x} y="30" width="150" height="54" rx="12" fill="rgba(245,158,11,.16)">
                <animate attributeName="opacity" values="1;0.55;1" dur="2.6s" repeatCount="indefinite" />
              </rect>
            ) : (
              <rect x={x} y="30" width="150" height="54" rx="12" fill="rgba(245,158,11,.14)" />
            )}
            <text x={x + 12} y="50" fontFamily="monospace" fontSize="9" fill="#ffd9ae">prev: {b.prev}</text>
            <text x={x + 12} y="72" fontFamily="monospace" fontSize="9" fill="#ffd9ae">hash: {b.hash}</text>
            <text x={x + 12} y="106" fontSize="9" fontWeight="800" letterSpacing="1.5" fill="#f5c889">TX</text>
            <text x={x + 12} y="126" fontFamily="monospace" fontSize="9" fill="#e9d7bf">{b.tx}</text>
            {i < blocks.length - 1 ? (
              <g>
                <line x1={x + 152} y1="95" x2={x + 194} y2="95" stroke="#f5c889" strokeWidth="2" markerEnd="url(#m6ch)" />
                <text x={x + 173} y="118" textAnchor="middle" fontSize="8" fill="#b98d5f">prev hash</text>
              </g>
            ) : null}
            {i === 0 ? (
              <text x={x + 75} y="182" textAnchor="middle" fontSize="9" fontWeight="700" fill="#b98d5f">genesis · prev = NULL</text>
            ) : null}
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ============================================================
   BLOCKCHAIN — interactive tamper demo (the showpiece)
   ============================================================ */
function TamperDemo() {
  const [tampered, setTampered] = useState(false);

  const blockCls = (bad: boolean) =>
    `relative flex-1 rounded-xl border p-4 transition-colors duration-300 ${
      bad
        ? "border-[rgba(190,74,74,.65)] bg-[rgba(190,74,74,.12)]"
        : "border-[rgba(245,158,11,.3)] bg-[rgba(43,27,16,.55)]"
    }`;

  return (
    <div
      className="rounded-2xl border p-5 transition-colors duration-300 md:p-7"
      style={{
        borderColor: tampered ? "rgba(190,74,74,.5)" : "rgba(255,214,160,.18)",
        background: "rgba(43,27,16,.5)",
      }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em] text-[#b98d5f]">live demo</p>
          <h4 className="text-lg font-bold text-[#f5e6cd]">Try to cheat the chain</h4>
        </div>
        <div className="ml-auto flex gap-2">
          <button
            type="button"
            onClick={() => setTampered(true)}
            disabled={tampered}
            aria-label="Tamper with block 2 — change its transactions"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[.8rem] font-bold transition-all duration-200 disabled:cursor-default disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#be4a4a,#8c2f2f)", color: "#fff7ec" }}
          >
            <AlertTriangle className="h-3.5 w-3.5" /> Tamper block 2
          </button>
          {tampered ? (
            <button
              type="button"
              onClick={() => setTampered(false)}
              aria-label="Reset the chain to a valid state"
              className="flex items-center gap-1.5 rounded-full border border-[rgba(245,158,11,.4)] px-4 py-2 text-[.8rem] font-bold text-[#f5c889] transition-colors hover:border-[#f5c889]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-5 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {/* block 1 */}
        <div className={blockCls(false)}>
          <p className="text-[.66rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]">block 1 · genesis</p>
          <p className="mt-2 font-mono text-[.78rem] text-[#e9d7bf]">prev : <span className="text-[#b98d5f]">NULL</span></p>
          <p className="font-mono text-[.78rem] text-[#e9d7bf]">hash : <span className="text-[#ffd9ae]">H1</span></p>
          <p className="mt-2 font-mono text-[.76rem] text-[#cbb392]">Tx: Ama → Bao · 1.0</p>
        </div>
        <Conn bad={false} />
        {/* block 2 */}
        <div className={blockCls(tampered)}>
          {tampered ? (
            <span className="absolute -top-2.5 right-3 rounded-full bg-[#be4a4a] px-2 py-0.5 text-[.6rem] font-extrabold uppercase tracking-wider text-white">
              tampered
            </span>
          ) : null}
          <p className="text-[.66rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]">block 2</p>
          <p className="mt-2 font-mono text-[.78rem] text-[#e9d7bf]">prev : <span className="text-[#ffd9ae]">H1</span> <span className="text-[#7c9a3e]">✓</span></p>
          <p className="font-mono text-[.78rem]">
            <span className="text-[#e9d7bf]">hash : </span>
            {tampered ? (
              <span className="anim-pop text-[#f0a8a8]">H2′</span>
            ) : (
              <span className="text-[#ffd9ae]">H2</span>
            )}
          </p>
          <p className="mt-2 font-mono text-[.76rem]">
            <span className={tampered ? "text-[#f0a8a8]" : "text-[#cbb392]"}>
              {tampered ? "Tx: Transactions++" : "Tx: Bao → Cy · 0.4"}
            </span>
          </p>
        </div>
        <Conn bad={tampered} />
        {/* block 3 */}
        <div className={blockCls(tampered)}>
          <p className="text-[.66rem] font-extrabold uppercase tracking-[.18em] text-[#f5c889]">block 3</p>
          <p className="mt-2 font-mono text-[.78rem]">
            <span className="text-[#e9d7bf]">prev : </span>
            <span className="text-[#ffd9ae]">H2</span>
            {tampered ? <span className="anim-pop ml-1 text-[#f0a8a8]">≠ H2′ !</span> : <span className="text-[#7c9a3e]"> ✓</span>}
          </p>
          <p className="font-mono text-[.78rem] text-[#e9d7bf]">hash : <span className="text-[#ffd9ae]">H3</span></p>
          <p className="mt-2 font-mono text-[.76rem] text-[#cbb392]">Tx: Cy → Di · 2.2</p>
        </div>
      </div>

      <AnimatePresence>
        {tampered ? (
          <motion.div
            key="tamper-banner"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="mt-5 flex items-start gap-3 rounded-xl border p-4"
            style={{ borderColor: "rgba(190,74,74,.55)", background: "rgba(190,74,74,.12)" }}
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#f0a8a8" }} />
            <p className="text-[.88rem] font-semibold leading-relaxed text-[#ffd9c9]">
              One changed block changes its hash → the missing link exposes tampering instantly.
              Block 3 expected <span className="font-mono">H2</span> but block 2 now hashes to{" "}
              <span className="font-mono">H2′</span> — the chain refuses to accept it.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function Conn({ bad }: { bad: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 lg:w-16">
      {bad ? <Link2Off className="h-4 w-4" style={{ color: "#f0a8a8" }} aria-label="broken link" /> : null}
      <svg viewBox="0 0 64 16" className="h-4 w-14" aria-hidden>
        <line x1="2" y1="8" x2="50" y2="8" stroke={bad ? "#f0a8a8" : "#f5c889"} strokeWidth="2.5" />
        <path d="M46 2 L58 8 L46 14" stroke={bad ? "#f0a8a8" : "#f5c889"} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[.6rem] font-bold uppercase tracking-wider" style={{ color: bad ? "#f0a8a8" : "#b98d5f" }}>
        {bad ? "broken" : "links"}
      </span>
    </div>
  );
}

/* ============================================================
   BLOCKCHAIN — Merkle tree, comparison table, network SVG
   ============================================================ */
function MerkleSVG() {
  const leaves = [
    { x: 70, t: "H1" },
    { x: 165, t: "H2" },
    { x: 260, t: "H3" },
    { x: 380, t: "H4" },
    { x: 475, t: "H5" },
    { x: 570, t: "H6" },
  ];
  return (
    <svg
      viewBox="0 0 640 276"
      className="mx-auto h-auto w-full max-w-2xl"
      role="img"
      aria-label="Merkle tree: transaction hashes H1 to H6 are paired up into H123 and H456, which hash to the single root H123456 stored in the block header"
    >
      <line x1="70" y1="210" x2="180" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="165" y1="210" x2="180" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="260" y1="210" x2="180" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="380" y1="210" x2="460" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="475" y1="210" x2="460" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="570" y1="210" x2="460" y2="146" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="180" y1="130" x2="320" y2="62" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      <line x1="460" y1="130" x2="320" y2="62" stroke="rgba(201,154,91,.6)" strokeWidth="2" />
      {leaves.map((l) => (
        <g key={l.t}>
          <circle cx={l.x} cy="225" r="15" fill="rgba(255,246,232,.09)" stroke="rgba(245,158,11,.4)" strokeWidth="2" />
          <text x={l.x} y="229" textAnchor="middle" fontSize="9" fontWeight="800" fill="#f5e6cd">{l.t}</text>
        </g>
      ))}
      <circle cx="180" cy="130" r="19" fill="#b45309" />
      <text x="180" y="134" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff7ec">H123</text>
      <circle cx="460" cy="130" r="19" fill="#b45309" />
      <text x="460" y="134" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff7ec">H456</text>
      <circle cx="320" cy="46" r="23" fill="#ea580c" />
      <text x="320" y="50" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff7ec">H123456</text>
      <text x="320" y="14" textAnchor="middle" fontSize="10" fontWeight="800" letterSpacing="1.5" fill="#f5c889">MERKLE ROOT — stored in the header</text>
      <text x="320" y="266" textAnchor="middle" fontSize="9" fill="#b98d5f">H1…H6 = hash of each transaction · pair them, hash again, up to one root</text>
    </svg>
  );
}

const BC_ROWS = [
  { f: "Connects via", ll: "a pointer / reference to the NEXT node", bc: "the HASH OF THE PREVIOUS BLOCK" },
  { f: "The link is", ll: "a memory address", bc: "a cryptographic hash" },
  { f: "Reading direction", ll: "forward, from the head node", bc: "backward, from the newest block by following hashes" },
  { f: "Lives on", ll: "ONE computer", bc: "blocks stored across the nodes of a NETWORK" },
  { f: "Data stored", ll: "flexible — any payload in a node", bc: "transactions, stored chronologically" },
  { f: "Block addition", ll: "can be inserted anywhere", bc: "always appended at the end" },
];

function NodeNetworkSVG() {
  const nodes: [number, number][] = [
    [80, 60],
    [230, 36],
    [380, 70],
    [120, 160],
    [300, 150],
    [410, 180],
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
    [2, 5],
    [4, 5],
  ];
  return (
    <svg
      viewBox="0 0 460 214"
      className="mx-auto h-auto w-full max-w-md"
      role="img"
      aria-label="A decentralised peer network: every node holds a copy of the chain and talks to its peers"
    >
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="rgba(201,154,91,.5)" strokeWidth="2" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          {i === 4 ? <circle cx={x} cy={y} r="21" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="5 4" /> : null}
          <circle cx={x} cy={y} r="14" fill={i === 4 ? "#ea580c" : "rgba(255,246,232,.09)"} stroke={i === 4 ? "#ea580c" : "rgba(245,158,11,.45)"} strokeWidth="2" />
        </g>
      ))}
      <text x="300" y="196" textAnchor="middle" fontSize="10" fontWeight="800" fill="#f5c889">your node</text>
    </svg>
  );
}

/* ============================================================
   BLOCKCHAIN — section
   ============================================================ */
const BC_APPS = [
  { icon: Coins, name: "Cryptocurrencies", desc: "decentralised transfer of value — technically tokens, not central-bank currency; community agreement sets the value" },
  { icon: ScrollText, name: "Smart contracts", desc: "conditions written in code execute automatically — a construction contract fires its own penalty clause, no lawyers in the loop" },
  { icon: Landmark, name: "Revenue & land records", desc: "tamper-resistant ownership trails that cannot be quietly rewritten" },
  { icon: HeartPulse, name: "Health records", desc: "electronic histories with integrity plus access control — the record&apos;s past is provable" },
  { icon: Boxes, name: "Supply chain", desc: "track a product&apos;s origin and authenticity from source to shelf" },
  { icon: Vote, name: "Voting systems", desc: "secure, tamper-proof voting records the public can verify" },
];

export function AtbBlockchainSection() {
  return (
    <Section id="blockchain" dark>
      <SectionHead
        dark
        eyebrow="Lecture 20 · Blockchain"
        title={
          <>
            Blockchain — <span className="grad-text">a linked list that guards itself</span>
          </>
        }
        lead="Take a linked list, swap memory pointers for hashes, and spread the copies across a network. The result is a ledger where quietly editing the past is mathematically impossible."
      />

      <ReadStep dark n="1" title="Recall the linked list — then upgrade it" sub="Same shape, stronger glue" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-2">
              <Link className="h-4.5 w-4.5" style={{ color: "#f5c889" }} />
              <h4 className="text-[.95rem] font-bold text-[#f5e6cd]">Linked list node</h4>
            </div>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              Each node stores data plus a pointer that links to the <strong>NEXT</strong> item —
              in practice, a <strong>memory address</strong>. Useful, but nothing about it proves the data is untouched.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm h-full p-6" style={{ borderColor: "rgba(234,88,12,.4)" }}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5" style={{ color: "#f5c889" }} />
              <h4 className="text-[.95rem] font-bold text-[#f5e6cd]">Blockchain block</h4>
            </div>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              Each block stores <strong>transactions</strong>, its own hash, and the{" "}
              <strong>HASH OF THE PREVIOUS BLOCK</strong> — cryptographic glue instead of memory
              addresses. The pointer becomes a <strong>seal</strong>.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <div className="card-warm flex flex-wrap items-center gap-2 p-4">
          <span className="chip"><Fingerprint className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · the two building blocks</span>
          <span className="chip">linked list · read forward from the head</span>
          <span className="chip">hashes · variable-length in → fixed-length out</span>
          <span className="chip">collision-free</span>
          <span className="chip">non-reversible</span>
          <span className="chip">bit-sensitive — 1 flipped bit → whole new hash</span>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="Anatomy of a block — and the growing chain" sub="Header seals the past; the body carries the transactions" />
      <Reveal>
        <div className="card-warm p-5 md:p-7">
          <BlockAnatomySVG />
          <div className="mt-6">
            <ChainGrowSVG />
          </div>
          <p className="mt-4 text-center text-[.84rem] text-[#cbb392]">
            Genesis block: <span className="font-mono text-[#ffd9ae]">prev = NULL, hash H1</span> — then every
            new block stores the hash of the one before it. Transactions sit in{" "}
            <strong className="text-[#ffd9ae]">chronological order</strong>, and reading the chain runs{" "}
            <strong className="text-[#ffd9ae]">backward</strong>: follow the hashes from the newest block to the genesis.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Callout dark kind="why" title="The append-only rule">
          You <strong>never delete or edit</strong> a block. Something new happened? A{" "}
          <strong>NEW block is added</strong> carrying the new transactions. The old blocks stay
          exactly as they were — that is what makes history auditable.
        </Callout>
      </Reveal>

      <ReadStep dark n="3" title="Break it yourself — the tamper demo" sub="Change one block&apos;s transactions and watch the chain catch fire" />
      <Reveal>
        <TamperDemo />
      </Reveal>

      <ReadStep dark n="4" title="A Merkle tree lives inside" sub="Proving the TRANSACTIONS were not edited" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-5">
            <MerkleSVG />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col justify-center gap-3 p-6">
            <p className="text-[.9rem] leading-relaxed text-[#e9d7bf]">
              The header stores the <strong>root of a Merkle tree</strong>: hash every transaction
              (H1…H6), pair the hashes and hash again (H123, H456), until one{" "}
              <strong>root (H123456)</strong> remains.
            </p>
            <p className="text-[.9rem] leading-relaxed text-[#e9d7bf]">
              Edit <em>any</em> transaction and its leaf hash changes — which changes the pair, which
              changes the root. <strong>The header no longer matches, and the tampering is exposed.</strong>
            </p>
            <div className="rounded-xl border border-[rgba(245,158,11,.2)] bg-[rgba(43,27,16,.5)] p-4 text-[.84rem] leading-relaxed text-[#cbb392]">
              One root summarizes thousands of transactions — that is how a light wallet verifies a
              huge block without downloading it all.
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep dark n="5" title="Blockchain vs linked list" sub="Six rows that summarise the whole upgrade" />
      <Reveal>
        <div className="card-warm overflow-x-auto p-4 md:p-6">
          <table className="w-full min-w-[560px] border-separate" style={{ borderSpacing: 0 }}>
            <thead>
              <tr>
                {["", "Linked list", "Blockchain"].map((h, i) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-[.72rem] font-extrabold uppercase tracking-[.16em]"
                    style={{
                      color: "#f5c889",
                      background: "rgba(245,158,11,.12)",
                      borderTop: "1px solid rgba(245,158,11,.25)",
                      borderTopLeftRadius: i === 0 ? ".7rem" : 0,
                      borderTopRightRadius: i === 2 ? ".7rem" : 0,
                      borderBottom: "1px solid rgba(245,158,11,.25)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BC_ROWS.map((r, ri) => (
                <tr key={r.f}>
                  {[
                    <span key="f" className="font-bold text-[#f5c889]">{r.f}</span>,
                    <span key="ll" className="text-[#e9d7bf]">{r.ll}</span>,
                    <span key="bc" className="font-semibold text-[#ffd9ae]">{r.bc}</span>,
                  ].map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 align-top text-[.86rem] leading-relaxed"
                      style={{
                        background: "rgba(255,246,232,.04)",
                        borderBottom: "1px solid rgba(255,214,160,.14)",
                        borderLeft: ci === 0 ? "1px solid rgba(255,214,160,.14)" : undefined,
                        borderRight: ci === 2 ? "1px solid rgba(255,214,160,.14)" : undefined,
                        borderRadius: ri === BC_ROWS.length - 1 && ci === 0 ? "0 0 0 .7rem" : undefined,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <ReadStep dark n="6" title="Decentralised — many nodes, one agreement" sub="Nobody owns the chain; everyone verifies it" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm p-5">
            <NodeNetworkSVG />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col gap-3 p-6">
            <p className="text-[.9rem] leading-relaxed text-[#e9d7bf]">
              The blockchain lives on <strong>many nodes</strong> at once. Before a new block joins,
              the nodes must <strong>AGREE that it is valid</strong> — that agreement is the{" "}
              <strong>consensus mechanism</strong>.
            </p>
            <ul className="grid gap-2">
              {[
                "follows the protocol",
                "connects to other nodes in the network",
                "uses cryptographic keys & hashes for identity and validation",
                "validates incoming blocks",
                "stores copies of valid blocks",
                "broadcasts valid blocks & transactions to the other nodes — simultaneously",
              ].map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] px-3.5 py-2.5">
                  <Check className="h-4 w-4 shrink-0" style={{ color: "#f5c889" }} />
                  <span className="text-[.86rem] text-[#e9d7bf]">{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-auto text-[.82rem] leading-relaxed text-[#cbb392]">
              A node is just a computer playing by the rules — but <strong>all of them together</strong>{" "}
              make rewriting history pointless.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm h-full p-5">
            <span className="chip"><Users className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · the 51% rule</span>
            <h5 className="mt-3 text-[.95rem] font-bold text-[#f5e6cd]">How tamper-proofing actually works</h5>
            <ul className="mt-3 grid gap-2 text-[.86rem] leading-relaxed text-[#e9d7bf]">
              <li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f5c889" }} aria-hidden /><span>every node stores an <strong>identical copy</strong> of all blocks</span></li>
              <li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f5c889" }} aria-hidden /><span>nodes compare copies — a modified block&apos;s hash changes and breaks the chain</span></li>
              <li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f5c889" }} aria-hidden /><span>the majority copy — <strong className="text-[#ffd9ae]">51%+</strong> — is treated as authentic</span></li>
              <li className="flex items-start gap-2.5"><Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f5c889" }} aria-hidden /><span>the modified block is <strong className="text-[#ffd9ae]">discarded</strong>; integrity holds across the network</span></li>
            </ul>
          </div>
          <div className="card-warm h-full p-5">
            <span className="chip"><Network className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · trees &amp; graphs at work</span>
            <h5 className="mt-3 text-[.95rem] font-bold text-[#f5e6cd]">Where this module&apos;s structures reappear</h5>
            <div className="mt-3 grid gap-3 text-[.86rem] leading-relaxed text-[#e9d7bf]">
              <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] p-3.5">
                <strong className="text-[#ffd9ae]">Trees →</strong> Merkle trees verify transaction integrity inside every block (step 4 above).
              </div>
              <div className="rounded-xl border border-[rgba(245,158,11,.18)] bg-[rgba(43,27,16,.5)] p-3.5">
                <strong className="text-[#ffd9ae]">Graphs →</strong> graph traversal decides whether a node belongs to the network and validates its connections.
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm h-full p-5">
            <span className="chip"><Globe className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · public blockchain</span>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              <strong className="text-[#ffd9ae]">Anyone may join</strong> by following the network&apos;s protocols — Bitcoin is the
              textbook case. Entry may demand <strong>proof of work</strong> (solving computational problems) or{" "}
              <strong>proof of stake</strong> (providing storage or processing power).
            </p>
          </div>
          <div className="card-warm h-full p-5">
            <span className="chip"><Building2 className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · permissioned blockchain</span>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#e9d7bf]">
              <strong className="text-[#ffd9ae]">Specific nodes designated by an organization</strong> — the enterprise
              pattern. Membership is granted, not earned: tighter control, fewer surprises, the flavour businesses actually deploy.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="7" title="Where blockchains go to work" sub="Six applications you can explain in a meeting" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BC_APPS.map((a, i) => (
          <Reveal key={a.name} delay={i * 60}>
            <div className="card-warm lift h-full p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.16)", color: "#f5c889" }}>
                <a.icon className="h-5 w-5" />
              </span>
              <h4 className="mt-3 text-[.92rem] font-bold text-[#f5e6cd]">{a.name}</h4>
              <p className="mt-1.5 text-[.8rem] leading-relaxed text-[#cbb392]">{a.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep dark n="8" title="Why isn&apos;t everything on a chain yet?" sub="Implementation challenges — the sober slide of the lecture" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Wallet, t: "High implementation costs", d: "infrastructure and maintenance are expensive to build and to run" },
          { icon: TrendingUp, t: "ROI must justify it", d: "benefits have to outweigh a significant financial investment" },
          { icon: Gauge, t: "Limited scalability", d: "current systems struggle with transaction volume" },
          { icon: ShieldQuestion, t: "Regulatory uncertainty", d: "the legal frameworks are still being written" },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 60}>
            <div className="card-warm lift h-full p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.16)", color: "#f5c889" }}>
                <c.icon className="h-5 w-5" aria-hidden />
              </span>
              <h4 className="mt-3 text-[.92rem] font-bold text-[#f5e6cd]">{c.t}</h4>
              <p className="mt-1.5 text-[.8rem] leading-relaxed text-[#cbb392]">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-4">
        <div className="card-warm flex flex-wrap items-center gap-2 p-4">
          <span className="chip"><Hourglass className="h-3.5 w-3.5" aria-hidden /> Lecture 20 · adoption today</span>
          <p className="text-[.84rem] leading-relaxed text-[#cbb392]">
            Live: cryptocurrencies and smart contracts. Pilots: revenue and health records. Wider rollout waits for costs to fall and ROI to improve.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <Quiz
          source="Lecture 20 · tamper-proofing"
          q="Editing an old block in a blockchain…"
          options={["is ignored", "changes its hash and breaks the chain", "requires a password", "updates all hashes automatically"]}
          answer={1}
          explain="Changing a block changes its hash — so the next block's stored 'hash of previous block' no longer matches. The chain is visibly broken, and every honest node rejects it."
        />
      </Reveal>

      <Reveal className="mt-5">
        <Quiz
          source="Lecture 20 · blockchain"
          q="A tampered copy of a block gets discarded because the network treats as authentic…"
          options={["the copy on the newest node", "the majority copy held by 51%+ of nodes", "the genesis block's copy", "whichever copy arrives first"]}
          answer={1}
          explain="Nodes compare copies; the majority copy (51%+) is the authentic one. A modified block's changed hash breaks the chain, and it is discarded in favour of the majority version."
        />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways
          dark
          items={[
            <>Blockchain works <strong>LIKE a linked list</strong> (blocks in sequence) but is <strong>not</strong> one — hashes replace memory pointers.</>,
            <><strong>Hashes connect blocks and guard the data</strong>: each header stores the hash of the previous block.</>,
            <>Blocks store a <strong>Merkle-tree root</strong>, so edited transactions change the root and are detected.</>,
            <>Blocks live on <strong>many network nodes</strong> that must agree a new block is valid (consensus).</>,
            <>Applications: <strong>cryptocurrencies, smart contracts, revenue/land records, health records</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
