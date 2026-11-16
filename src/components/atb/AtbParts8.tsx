"use client";

/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 8 — Module 4 · Lectures 21–22 (recorded lectures)
   Part 8: Algorithmic complexity (light) · Search strategies (light)
   ============================================================ */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, Briefcase, Check, Compass, Database, DoorOpen, Footprints, Gauge,
  GitFork, Globe, Hash, Layers, Link2, Network, Play, Rocket, RotateCcw, Search, Split, Target,
  Timer, TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- local button (real <button>, aria-labelled) ---------- */

function OpBtn({ onClick, children, active = false }: {
  onClick: () => void; children: React.ReactNode; active?: boolean;
}) {
  const style: React.CSSProperties = active
    ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
    : { background: "#fffdf9", color: "#7c4a12", border: "1px solid #e5c79d" };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={style}
      className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}

/* ============================================================
   LECTURE 21 · MACHINE 1 — the housing society (best/avg/worst)
   ============================================================ */

const HOUSE_ZONES: { from: number; to: number; fill: string; stroke: string; tone: string; label: string; text: string }[] = [
  { from: 3, to: 4, fill: "#dbe7c0", stroke: "#7c9a3e", tone: "BEST case", label: "best", text: "#44621d" },
  { from: 7, to: 18, fill: "#fde8cf", stroke: "#e2b075", tone: "AVERAGE case", label: "average", text: "#92600a" },
  { from: 19, to: 24, fill: "#fbe9e4", stroke: "#e6a08c", tone: "WORST case", label: "worst", text: "#8c2f2f" },
];

function houseZone(h: number) {
  return HOUSE_ZONES.find((z) => h >= z.from && h <= z.to);
}

function SocietyLab() {
  const [sel, setSel] = useState<number | null>(null);
  const zone = sel !== null ? houseZone(sel) : undefined;
  const status =
    sel === null
      ? "A society of 24 numbered houses, one Gate A. Click any house — the same search, three very different amounts of walking."
      : zone
      ? `House ${sel} · ${zone.tone} — ${zone.label === "best" ? "right beside the gate, the walk is minimal: the search finds the resident with almost no work." : zone.label === "average" ? "the typical amount of walking — neither lucky nor unlucky, the usual effort of the search." : "the far end of the society: maximum effort before the match is made."}`
      : `House ${sel} · just off the best-case block — still a very short walk from Gate A.`;
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex items-center gap-3">
        <DoorOpen className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <h3 className="text-xl font-bold md:text-2xl">One gate, 24 houses — three kinds of luck</h3>
      </div>
      <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
        The lecture&apos;s own example: a <strong>numbered housing society</strong> with{" "}
        <strong>24 houses</strong> and <strong>one entrance, Gate A</strong>. Searching for a resident means
        walking from the gate — and <strong>where the house sits decides the effort</strong>. Same algorithm,
        three different stories: that is exactly what best, average and worst case measure.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
        <svg viewBox="0 0 760 170" className="h-auto w-full" role="img"
          aria-label="A row of 24 numbered houses behind Gate A. Houses 3 and 4 are green, the best case, closest to the gate. Houses 7 to 18 are amber, the average case. Houses 19 to 24 are red, the worst case, farthest from the gate.">
          <defs>
            <marker id="s8-gate" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L7,3 L0,6 Z" fill="#b45309" />
            </marker>
          </defs>
          {/* gate */}
          <rect x="8" y="54" width="42" height="48" rx="8" fill="#f6e3c8" stroke="#c2410c" strokeWidth="2" />
          <text x="29" y="83" textAnchor="middle" fontSize="12" fontWeight="800" fill="#a0410a">A</text>
          <text x="29" y="122" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a5a06">Gate A</text>
          <line x1="52" y1="78" x2="62" y2="78" stroke="#b45309" strokeWidth="1.5" markerEnd="url(#s8-gate)" />
          {/* houses */}
          {Array.from({ length: 24 }, (_, i) => i + 1).map((h) => {
            const z = houseZone(h);
            const on = sel === h;
            const x = 68 + (h - 1) * 28;
            return (
              <g key={h} onClick={() => setSel(h)} className="cursor-pointer">
                <rect x={x} y="54" width="24" height="48" rx="5"
                  fill={on ? "#f6ad3c" : z ? z.fill : "#faf3e6"}
                  stroke={on ? "#c2410c" : z ? z.stroke : "#e8d9bd"}
                  strokeWidth={on ? 3 : 1.4} />
                <text x={x + 12} y="82" textAnchor="middle" fontSize="9" fontWeight="700"
                  fill={on ? "#7c2d0a" : z ? z.text : "#b09a7a"}>{h}</text>
              </g>
            );
          })}
          {/* zone brackets */}
          <line x1={68 + 2 * 28} y1="138" x2={68 + 3 * 28 + 24} y2="138" stroke="#7c9a3e" strokeWidth="2" />
          <text x={68 + 2.5 * 28 + 12} y="154" textAnchor="middle" fontSize="10" fontWeight="800" fill="#5c7a24">3–4 · best</text>
          <line x1={68 + 6 * 28} y1="138" x2={68 + 17 * 28 + 24} y2="138" stroke="#e2b075" strokeWidth="2" />
          <text x={68 + 11.5 * 28 + 12} y="154" textAnchor="middle" fontSize="10" fontWeight="800" fill="#92600a">7–18 · average</text>
          <line x1={68 + 18 * 28} y1="138" x2={68 + 23 * 28 + 24} y2="138" stroke="#e6a08c" strokeWidth="2" />
          <text x={68 + 20.5 * 28 + 12} y="154" textAnchor="middle" fontSize="10" fontWeight="800" fill="#8c2f2f">19–24 · worst</text>
        </svg>
      </div>
      <p className="mt-3 min-h-[1.6rem] text-[.85rem] font-bold leading-relaxed text-[#a0410a]" aria-live="polite">
        {status}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="chip"><Check className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · best case — minimal work</span>
        <span className="chip"><TrendingUp className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · average case — typical work</span>
        <span className="chip"><AlertTriangle className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · worst case — maximum effort</span>
      </div>
    </div>
  );
}

/* ============================================================
   LECTURE 21 · FLAGSHIP — Big O growth curves
   ============================================================ */

const PLOT = { x0: 58, x1: 618, y0: 262, y1: 30 };

type BigO = { label: string; color: string; f: (t: number) => number; blurb: string };

const BIGO_CURVES: BigO[] = [
  { label: "O(1)", color: "#7c9a3e", f: () => 0.05, blurb: "constant — flat line, same effort whatever n is" },
  { label: "O(log n)", color: "#d97706", f: (t) => 0.30 * (Math.log2(1 + 9 * t) / Math.log2(10)), blurb: "logarithmic — slow growth, divide & conquer" },
  { label: "O(n)", color: "#c2410c", f: (t) => 0.56 * t, blurb: "linear — input doubles, time doubles" },
  { label: "O(n log n)", color: "#b45309", f: (t) => 0.72 * t * (Math.log2(1 + 9 * t) / Math.log2(10)), blurb: "linearithmic — moderate growth, faster than quadratic" },
  { label: "O(n²)", color: "#be4a4a", f: (t) => 0.86 * t * t, blurb: "quadratic — dramatic growth" },
  { label: "O(2ⁿ)", color: "#8c2f2f", f: (t) => Math.pow(2, 6.2 * t) / Math.pow(2, 6.2), blurb: "exponential — explosive growth, impractical for large inputs" },
];

function curvePath(f: (t: number) => number): string {
  const pts: string[] = [];
  for (let i = 0; i <= 64; i++) {
    const t = i / 64;
    const x = PLOT.x0 + t * (PLOT.x1 - PLOT.x0);
    const y = PLOT.y0 - f(t) * (PLOT.y0 - PLOT.y1);
    pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

function BigOChart() {
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Gauge className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <h3 className="text-xl font-bold md:text-2xl">The growth chart — six classes, one axis</h3>
      </div>
      <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
        Big O answers one question: <strong>&ldquo;if the input grows, in what proportion does the time
        requirement grow?&rdquo;</strong> On this one shared axis — input size <strong>n</strong> running from{" "}
        <strong>100 to 10 lakh</strong> records — the six classes pull apart. The flat ones stay flat; the
        explosive ones leave the planet.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
        <svg viewBox="0 0 660 300" className="h-auto w-full" role="img"
          aria-label="Growth curves of six complexity classes over one shared axis of input size. O(1) is a flat green line. O(log n) rises slowly. O(n) rises in a straight proportional line. O(n log n) climbs moderately. O(n²) curves upward dramatically. O(2ⁿ) hugs the floor and then explodes past everything near the right edge.">
          {/* grid */}
          {[1, 2, 3, 4].map((k) => (
            <line key={k} x1={PLOT.x0} y1={PLOT.y0 - k * 48} x2={PLOT.x1} y2={PLOT.y0 - k * 48}
              stroke="#ecd9bd" strokeWidth="1" strokeDasharray="4 5" />
          ))}
          {/* axes */}
          <line x1={PLOT.x0} y1={PLOT.y1 - 6} x2={PLOT.x0} y2={PLOT.y0} stroke="#b09a7a" strokeWidth="1.6" />
          <line x1={PLOT.x0} y1={PLOT.y0} x2={PLOT.x1 + 12} y2={PLOT.y0} stroke="#b09a7a" strokeWidth="1.6" />
          <text x={PLOT.x0 - 4} y="16" fontSize="11" fontWeight="700" fill="#8a5a06">work required ↑</text>
          <text x={PLOT.x1 + 2} y="284" textAnchor="end" fontSize="11" fontWeight="700" fill="#8a5a06">input size n →</text>
          <text x={PLOT.x0} y="284" fontSize="10" fontWeight="700" fill="#b09a7a">100</text>
          <text x={PLOT.x1} y="284" textAnchor="end" fontSize="10" fontWeight="700" fill="#b09a7a">10 lakh</text>
          {/* curves */}
          {BIGO_CURVES.map((c, i) => (
            <motion.path
              key={c.label}
              d={curvePath(c.f)}
              fill="none"
              stroke={c.color}
              strokeWidth={c.label === "O(2ⁿ)" || c.label === "O(n²)" ? 3.4 : 3}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.15 + i * 0.18, ease: "easeInOut" }}
            />
          ))}
        </svg>
        {/* legend */}
        <div className="mt-2 flex flex-wrap gap-2">
          {BIGO_CURVES.map((c) => (
            <span key={c.label} className="chip">
              <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c.color }} aria-hidden />
              <span className="font-mono-warm font-extrabold">{c.label}</span>&nbsp;· {c.blurb}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[.88rem] leading-relaxed text-[#6f5438]">
        Read it the manager&apos;s way: at <strong>n = 100</strong> the curves almost touch — every algorithm
        feels fine. By <strong>n = 10 lakh</strong> the flat and logarithmic classes are still near the floor,
        while <strong>O(n²)</strong> and <strong>O(2ⁿ)</strong> have left the chart. That gap{" "}
        <em>is</em> algorithmic complexity: <strong>the growth rate, never the seconds.</strong>
      </p>
    </div>
  );
}

/* ============================================================
   LECTURE 21 · MACHINE 2 — the ×10 question
   ============================================================ */

const SCALE_STEPS: { n: string; ops: { linear: string; quad: string; exp: string } }[] = [
  { n: "100 records", ops: { linear: "100 operations", quad: "10,000 operations", exp: "≈ 10³⁰ operations" } },
  { n: "10,000 records", ops: { linear: "10,000 operations", quad: "1 crore operations", exp: "≈ 10³⁰¹⁰ operations" } },
  { n: "10 lakh records", ops: { linear: "10 lakh operations", quad: "10 lakh crore operations", exp: "beyond any computer, ever" } },
];

function ScaleLab() {
  const [k, setK] = useState(0);
  const s = SCALE_STEPS[k];
  return (
    <div className="card-warm p-6">
      <span className="chip"><TrendingUp className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · the ×10 question</span>
      <p className="mt-3 text-[.92rem] leading-relaxed text-[#2b2014]">
        The lecture&apos;s stress test: the input jumps from <strong>100 to 10 lakh</strong> elements — how
        does each class answer? Pick a size and watch the bill.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {SCALE_STEPS.map((st, i) => (
          <OpBtn key={st.n} onClick={() => setK(i)} active={k === i}>{st.n}</OpBtn>
        ))}
      </div>
      <motion.div
        key={k}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-4 grid gap-3 sm:grid-cols-3"
      >
        {([
          { cls: "O(n)", tone: "#5c7a24", bg: "rgba(124,154,62,.14)", v: s.ops.linear },
          { cls: "O(n²)", tone: "#92600a", bg: "rgba(217,119,6,.14)", v: s.ops.quad },
          { cls: "O(2ⁿ)", tone: "#8c2f2f", bg: "rgba(190,74,74,.14)", v: s.ops.exp },
        ] as const).map((b) => (
          <div key={b.cls} className="rounded-2xl p-4" style={{ background: b.bg }}>
            <p className="font-mono-warm text-[.78rem] font-extrabold" style={{ color: b.tone }}>{b.cls}</p>
            <p className="mt-1 text-[.95rem] font-extrabold text-[#3e2c1d]" aria-live="polite">{b.v}</p>
          </div>
        ))}
      </motion.div>
      <p className="mt-3 text-[.85rem] leading-relaxed text-[#6f5438]">
        Linear&apos;s bill grows <strong>in proportion</strong>; quadratic&apos;s grows <strong>with the
        square</strong>; exponential&apos;s is the chessboard again — by 10 lakh records it is not a
        budgeting problem, it is physics.
      </p>
    </div>
  );
}

/* ============================================================
   LECTURE 21 · MACHINE 3 — data-structure operation costs
   ============================================================ */

type CostRow = { op: string; cost: string; why: string; tone: CostTone };
type CostTone = "fast" | "log" | "linear";

const COST_TONES: Record<CostTone, { bg: string; color: string }> = {
  fast: { bg: "rgba(124,154,62,.16)", color: "#4c6b1f" },
  log: { bg: "rgba(217,119,6,.15)", color: "#92600a" },
  linear: { bg: "rgba(194,65,12,.12)", color: "#a0410a" },
};

const DS_COSTS: { key: string; label: string; icon: LucideIcon; blurb: string; rows: CostRow[] }[] = [
  {
    key: "array", label: "Arrays", icon: Database,
    blurb: "The position is the address — direct access when indexed, sequential work when searched.",
    rows: [
      { op: "Access by index", cost: "O(1)", why: "direct jump to a known position", tone: "fast" },
      { op: "Search (linear)", cost: "O(n)", why: "position unknown → check elements sequentially", tone: "linear" },
      { op: "Insert at end", cost: "O(1)", why: "append — no other element moves", tone: "fast" },
      { op: "Insert at beginning / middle", cost: "O(n)", why: "every later element shifts to open the gap", tone: "linear" },
      { op: "Update by index / by search", cost: "O(1) / O(n)", why: "direct if indexed; search first if not", tone: "fast" },
      { op: "Delete by index / by search", cost: "O(1) / O(n)", why: "direct removal at a known index; search-first otherwise", tone: "fast" },
    ],
  },
  {
    key: "list", label: "Linked lists", icon: Link2,
    blurb: "Pointers make structure cheap — but reaching the spot means walking the chain.",
    rows: [
      { op: "Insert at end", cost: "O(1)", why: "connect the new node to the last node's pointer — pure rewiring", tone: "fast" },
      { op: "Insert at beginning", cost: "O(n)", why: "may require a search before the rewire", tone: "linear" },
      { op: "Insert in middle", cost: "O(n)", why: "must walk the chain to find the insertion point first", tone: "linear" },
    ],
  },
  {
    key: "stack", label: "Stacks", icon: Layers,
    blurb: "The top is a fixed address — that is why the two core operations never slow down.",
    rows: [
      { op: "Push", cost: "O(1)", why: "always adds at the top; the location is fixed", tone: "fast" },
      { op: "Pop", cost: "O(1)", why: "always removes from the top; the location is fixed", tone: "fast" },
      { op: "Search", cost: "O(n)", why: "pop elements until the target surfaces", tone: "linear" },
    ],
  },
  {
    key: "queue", label: "Queues", icon: ArrowRight,
    blurb: "Two fixed ends — rear for arrivals, front for departures.",
    rows: [
      { op: "Enqueue", cost: "O(1)", why: "always adds at the rear; the location is fixed", tone: "fast" },
      { op: "Dequeue", cost: "O(1)", why: "always removes from the front; the location is fixed", tone: "fast" },
      { op: "Search", cost: "O(n)", why: "dequeue elements until the target is found", tone: "linear" },
    ],
  },
  {
    key: "tree", label: "Trees", icon: GitFork,
    blurb: "General trees demand everything; a balanced BST halves the world at every level.",
    rows: [
      { op: "General traversal / search", cost: "O(n)", why: "may need to visit every node — proportional to tree size", tone: "linear" },
      { op: "BST search (balanced)", cost: "O(log n)", why: "each level halves the remaining candidates", tone: "log" },
    ],
  },
  {
    key: "graph", label: "Graphs", icon: Network,
    blurb: "V vertices and E edges — a search may need to meet them all.",
    rows: [
      { op: "Traversal / search (BFS or DFS)", cost: "O(V + E)", why: "potentially every vertex and every edge — V = vertices, E = edges", tone: "linear" },
    ],
  },
];

function DSCostLab() {
  const [k, setK] = useState(0);
  const ds = DS_COSTS[k];
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Target className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <h3 className="text-xl font-bold md:text-2xl">What every operation costs</h3>
      </div>
      <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
        Complexity is not just for algorithms — <strong>every data structure has a price list</strong>. Choose
        a structure and read its menu: the operation, the cost, and the reason behind it.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {DS_COSTS.map((d, i) => (
          <OpBtn key={d.key} onClick={() => setK(i)} active={k === i}>
            <span className="inline-flex items-center gap-1.5">
              <d.icon className="h-3.5 w-3.5" aria-hidden /> {d.label}
            </span>
          </OpBtn>
        ))}
      </div>
      <motion.div
        key={ds.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-5 rounded-2xl p-4"
        style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}
      >
        <p className="text-[.88rem] font-semibold leading-relaxed text-[#6f5438]" aria-live="polite">{ds.blurb}</p>
        <div className="mt-3 grid gap-2.5">
          {ds.rows.map((r) => (
            <div key={r.op} className="flex flex-col gap-1.5 rounded-xl bg-white/70 px-3.5 py-2.5 sm:flex-row sm:items-center sm:gap-3">
              <span className="text-[.88rem] font-bold text-[#3e2c1d] sm:w-56 sm:shrink-0">{r.op}</span>
              <span className="w-fit rounded-full px-2.5 py-0.5 font-mono-warm text-[.74rem] font-extrabold sm:w-28 sm:shrink-0 sm:text-center"
                style={{ background: COST_TONES[r.tone].bg, color: COST_TONES[r.tone].color }}>
                {r.cost}
              </span>
              <span className="text-[.83rem] leading-relaxed text-[#6f5438]">{r.why}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Callout kind="insight" title="Lecture 21 · why BST search halves">
          The BST property — <strong>left subtree smaller, right subtree larger</strong> — means every
          comparison sends you down exactly one branch, <strong>discarding half the remaining nodes</strong>.
          Halve at every level and a thousand nodes cost about ten comparisons. (Let the tree go{" "}
          <em>unbalanced</em>, though, and it collapses toward linked-list behaviour — O(n).)
        </Callout>
        <Callout kind="why" title="Lecture 21 · reading O(V + E)">
          Graph searches are priced in <strong>two currencies</strong>: <strong>V</strong>, the number of
          vertices, and <strong>E</strong>, the number of edges. Whether BFS or DFS, the worst case must
          potentially touch <strong>all of both</strong> — that is the whole cost of mapping a network.
        </Callout>
      </div>
    </div>
  );
}

/* ============================================================
   EXPORTED — LECTURE 21 · COMPLEXITY SECTION (light)
   ============================================================ */

export function AtbComplexitySection() {
  return (
    <Section id="complexity">
      <SectionHead
        eyebrow="Lecture 21 · Search algorithms & algorithmic complexity"
        title={<><span className="grad-text">Algorithmic complexity</span> — measuring growth, not seconds</>}
        lead="Search is the heartbeat of the internet — every web search, product recommendation and train booking is a search, and users expect the answer instantly. Before picking a strategy, you need the ruler that measures algorithms: as the input grows from 100 rows to 10 lakh, how does the work grow?"
      />

      <ReadStep n="1" title="Why search matters" sub="Every internet activity is a search — and businesses pay for its speed" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Search className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · search is everywhere</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Search engines, shopping platforms, booking systems, streaming services, product recommendations,
            train bookings — <strong>every internet activity involves search in some form</strong>. That is
            why this module opens the subject: the algorithm behind the search box decides whether the user
            waits or smiles.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              { icon: Globe, tone: "#c2410c", chip: "Lecture 21 · practical relevance", t: "Practical relevance", d: "Web searches, product recommendations, train bookings — search in some form powers essentially everything online." },
              { icon: Timer, tone: "#b45309", chip: "Lecture 21 · efficiency concerns", t: "Efficiency concerns", d: "Users expect immediate results. Delays mean poor user experience — and poor user experience means lost customers." },
              { icon: Briefcase, tone: "#7c9a3e", chip: "Lecture 21 · business perspective", t: "Business perspective", d: "Companies evaluate every solution on four checks: feasibility, cost (computing resources), speed of delivery, and scalability." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px solid #f0e2c8" }}>
                <c.icon className="h-5 w-5" style={{ color: c.tone }} aria-hidden />
                <p className="mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]">{c.d}</p>
                <span className="chip mt-3">{c.chip}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <Callout kind="insight" title="Lecture 21 · growth rate, not seconds">
              Algorithmic complexity describes <strong>how much time an algorithm requires as the input size
              increases</strong> — deliberately <strong>not</strong> in seconds or hours. Seconds belong to the
              machine; the <strong>growth rate</strong> belongs to the algorithm. The question is always
              scalability: input 100 → 10 lakh — what happens to performance?
            </Callout>
            <Callout kind="why" title="Lecture 21 · time beats space">
              Different algorithms solve the same problem with vastly different resources — and when choosing,{" "}
              <strong>time complexity is prioritized over space complexity</strong>: faster responses improve
              user satisfaction, and satisfied users are the business. Managers and programmers alike need this
              lens to evaluate systems.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="Best, average, worst" sub="The three scenarios — measured in the lecture's housing society" />
      <Reveal><SocietyLab /></Reveal>
      <Reveal className="mt-5">
        <Quiz source="Concept check" q="A search usually lands somewhere in between the lucky and the unlucky run. That middle scenario is called the…"
          options={["random case", "average case — the typical amount of work", "median runtime measured in seconds", "space complexity"]} answer={1}
          explain="Three scenarios are always analysed: best case (solution found with minimal work), worst case (maximum effort required), and average case (the typical amount of work, falling between the two). In the housing society, houses 7–18 play the average role." />
      </Reveal>

      <ReadStep n="3" title="Big O — the growth dial" sub="One notation, one shared chart, six very different futures" />
      <Reveal><BigOChart /></Reveal>
      <Reveal className="mt-5"><ScaleLab /></Reveal>

      <ReadStep n="4" title="The complexity classes" sub="Notation × name × behaviour × growth pattern" />
      <Reveal>
        <div className="card-warm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <span className="chip"><Gauge className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · the six classes, fastest to slowest</span>
          </div>
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table min-w-[720px]">
              <thead><tr><th>Notation</th><th>Name</th><th>Behaviour</th><th>Growth pattern</th></tr></thead>
              <tbody>
                {[
                  { n: "O(1)", name: "Constant", d: "Irrespective of input size, the effort remains the same", g: "Flat line" },
                  { n: "O(log n)", name: "Logarithmic", d: "Work increases slowly — typical of divide-and-conquer algorithms", g: "Slow growth" },
                  { n: "O(n)", name: "Linear", d: "Input size and time increase proportionally — input doubles, time doubles", g: "Straight line" },
                  { n: "O(n log n)", name: "Linearithmic", d: "Slightly faster growth than linear — faster than O(n), slower than O(log n)", g: "Moderate growth" },
                  { n: "O(n²)", name: "Quadratic", d: "Work increases dramatically — input 2 → effort 4; input 5 → effort 25", g: "Rapid growth" },
                  { n: "O(2ⁿ)", name: "Exponential", d: "Extremely rapid growth — typically impractical for large inputs", g: "Very rapid growth" },
                ].map((r) => (
                  <tr key={r.n}>
                    <td className="font-mono-warm font-extrabold text-[#a0410a]">{r.n}</td>
                    <td className="font-bold text-[#7c4a12]">{r.name}</td>
                    <td>{r.d}</td>
                    <td>{r.g}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5" style={{ color: "#5c7a24" }} aria-hidden />
              <span className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#5c7a24" }}>Fast algorithms</span>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
              Low complexity = <strong>slower growth rate</strong> — the curve stays near the floor:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["O(1)", "O(log n)", "O(n)"].map((c) => (
                <span key={c} className="rounded-full px-3 py-1 font-mono-warm text-[.8rem] font-extrabold" style={{ background: "rgba(124,154,62,.16)", color: "#4c6b1f" }}>{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" style={{ color: "#be4a4a" }} aria-hidden />
              <span className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#be4a4a" }}>Slow algorithms</span>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
              High complexity = <strong>faster growth rate</strong> — the curve climbs the wall:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["O(n²)", "O(2ⁿ)", "O(n³)"].map((c) => (
                <span key={c} className="rounded-full px-3 py-1 font-mono-warm text-[.8rem] font-extrabold" style={{ background: "rgba(190,74,74,.14)", color: "#8c2f2f" }}>{c}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Callout kind="story" title="Lecture 21 · the chess legend — exponential by grains">
          The lecture&apos;s analogy for exponential blowup: a chessboard where{" "}
          <strong>square 1 gets 1 grain, and every next square doubles it</strong> — 1, 2, 4, 8, 16… By the
          back ranks the count is <strong>astronomically large</strong> (all 64 squares together hold about{" "}
          <strong>1.8 × 10¹⁹ grains</strong> — more rice than has ever been harvested). That is O(2ⁿ):{" "}
          <strong>quickly unmanageable</strong>, no matter how fast the machine.
        </Callout>
      </Reveal>

      <ReadStep n="5" title="What operations cost" sub="The price list of every structure you already know" />
      <Reveal><DSCostLab /></Reveal>

      <ReadStep n="6" title="The business ladder" sub="Which classes businesses prefer — and the heuristics escape hatch" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Briefcase className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · business preference order</span>
          <div className="mt-4 grid gap-3">
            {[
              { r: 1, cls: "O(1)", verdict: "Ideal — but rarely achievable in real scenarios", tone: "#4c6b1f", bg: "rgba(124,154,62,.14)" },
              { r: 2, cls: "O(log n)", verdict: "Excellent — highly scalable", tone: "#4c6b1f", bg: "rgba(124,154,62,.12)" },
              { r: 3, cls: "O(n log n)", verdict: "Good — manageable for most applications", tone: "#92600a", bg: "rgba(217,119,6,.12)" },
              { r: 4, cls: "O(n)", verdict: "Acceptable — straightforward scaling", tone: "#92600a", bg: "rgba(217,119,6,.10)" },
              { r: 5, cls: "O(n²) · O(2ⁿ) · O(n³)", verdict: "Problematic — avoid unless truly necessary", tone: "#8c2f2f", bg: "rgba(190,74,74,.12)" },
            ].map((s, i) => (
              <motion.div
                key={s.r}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-2xl p-4"
                style={{ background: s.bg }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.8rem] font-extrabold text-white" aria-hidden>{s.r}</span>
                <span className="w-32 shrink-0 font-mono-warm text-[.85rem] font-extrabold" style={{ color: s.tone }}>{s.cls}</span>
                <span className="text-[.88rem] font-semibold text-[#3e2c1d]">{s.verdict}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Callout kind="why" title="Lecture 21 · when high complexity is unavoidable — heuristics">
          Sometimes O(n²) or exponential work is simply the problem you have. Businesses then reach for{" "}
          <strong>heuristics — rules of thumb that provide good-enough (though not optimal) solutions</strong>{" "}
          rather than perfect answers. It is a pragmatic trade: computational feasibility on one side,{" "}
          <strong>practical results</strong> on the other.
        </Callout>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="Big O notation answers which question?"
            options={["How many seconds does the algorithm take on my laptop?", "If the input grows, in what proportion does the time requirement grow?", "How many lines of code does the algorithm need?", "How much memory does one run consume?"]} answer={1}
            explain="Big O describes the ORDER OF MAGNITUDE of work growth with input size — never wall-clock seconds, which depend on the machine. It is the manager's ruler: compare algorithms by how their time scales, from 100 records to 10 lakh." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="An O(n²) routine runs on an input of 5. How much effort?"
            options={["5", "10", "25", "32"]} answer={2}
            explain="Quadratic means effort = input²: input 2 → effort 4; input 5 → effort 25. The work grows dramatically — and that is why O(n²) sits on the 'avoid unless necessary' rung of the business ladder." />
        </Reveal>
        <Reveal>
          <Quiz source="Concept check" q="Why is searching a balanced binary search tree O(log n)?"
            options={["Because the tree secretly stores a sorted array", "Because each level halves the remaining candidates — left subtree smaller, right subtree larger", "Because trees are always small in practice", "Because the search uses a queue to sweep levels"]} answer={1}
            explain="The BST property (left < parent < right) lets every comparison discard one whole branch — the problem subdivides into one relevant sub-problem, halving at every level. Warning: an UNBALANCED BST loses the halving and degrades toward O(n), behaving like a linked list." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="Search inside a stack costs O(n) because…"
            options={["stack elements are unsorted", "you must pop elements until the target surfaces", "stacks are stored as linked lists", "the top keeps moving around memory"]} answer={1}
            explain="Push and pop are O(1) — the top is a fixed location. But searching means popping elements one by one until the target appears (a queue's mirror image: dequeue until found). The convenience of fixed ends is also the prison of search." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — complexity" items={[
          { q: "Rank the six classes fastest to slowest from memory, then name the growth pattern of each.", hint: "Constant → logarithmic → linear → linearithmic → quadratic → exponential; flat · slow · straight · moderate · rapid · very rapid." },
          { q: "The chess legend: square 1 = 1 grain, each square doubles. How many grains on square 10? On square 64 alone?", hint: "Square n holds 2^(n−1): square 10 → 512 grains; square 64 → about 9.2 × 10¹⁸." },
          { q: "For n = 10,000, count the operations of O(n), O(n log n) and O(n²).", hint: "10⁴ · about 1.3 × 10⁵ (log₂ 10,000 ≈ 13.3) · 10⁸ — feel the gap before the chart even draws it." },
          { q: "Your marketplace must answer searches in milliseconds over 10 lakh products. Which classes are acceptable, which are out — and what do you do about the ones you cannot avoid?", hint: "O(1)/O(log n) comfortable, O(n) borderline, O(n²)/O(2ⁿ) out — and for the unavoidable ones, heuristics: good-enough beats perfect-never." },
        ]} />
      </Reveal>
      <Reveal className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><Gauge className="h-3.5 w-3.5" aria-hidden /> Lecture 21 · key takeaways</span>
        </div>
        <Takeaways items={[
          <>Algorithmic complexity measures the <strong>growth rate</strong>, not absolute time — seconds belong to the machine, growth belongs to the algorithm.</>,
          <><strong>Big O notation</strong> enables comparing algorithms across input sizes: &ldquo;if the input grows, in what proportion does the time requirement grow?&rdquo;</>,
          <>Scalability is the point — <strong>how does performance change as data volume increases</strong> from 100 to 10 lakh?</>,
          <>The <strong>choice of algorithm directly impacts system responsiveness and user experience</strong> — which is why time complexity is prioritized over space.</>,
          <><strong>O(1) and O(log n) are preferable</strong>; quadratic and exponential complexities should be avoided — or tamed with heuristics.</>,
          <>Knowing <strong>data-structure operation costs</strong> (arrays, lists, stacks, queues, trees, graphs) is fundamental to choosing appropriate solutions.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 22 · FLAGSHIP — the search race
   ============================================================ */

const RACE_VALS = [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79];
const RACE_TARGET = 49;

type RaceStep = { idx: number; kind: "probe" | "overshoot" | "found"; note: string; lo?: number; hi?: number };

const RACE_LINEAR: RaceStep[] = RACE_VALS.map((v, i) => ({
  idx: i,
  kind: i === 9 ? ("found" as const) : ("probe" as const),
  note: i === 9 ? `${v} = ${RACE_TARGET} → found at last!` : `${v} < ${RACE_TARGET} → move on to the next cell`,
}));

const RACE_BINARY: RaceStep[] = [
  { idx: 7, kind: "probe", note: "middle of 0–15 → 39 < 49 → the target must be in the RIGHT half", lo: 0, hi: 15 },
  { idx: 11, kind: "probe", note: "middle of 8–15 → 59 > 49 → back into the LEFT half", lo: 8, hi: 15 },
  { idx: 9, kind: "found", note: "middle of 8–10 → 49 = 49 → found in three probes!", lo: 8, hi: 10 },
];

const RACE_JUMP: RaceStep[] = [
  { idx: 0, kind: "probe", note: "block 0 → 4 < 49 → jump √16 = 4 ahead" },
  { idx: 4, kind: "probe", note: "24 < 49 → jump 4 again" },
  { idx: 8, kind: "probe", note: "44 < 49 → jump 4 again" },
  { idx: 12, kind: "overshoot", note: "64 > 49 → overshot the target! step back to the block start (8)" },
  { idx: 8, kind: "probe", note: "back inside the block → 44 < 49 → linear, one step forward" },
  { idx: 9, kind: "found", note: "49 = 49 → found in six probes" },
];

const RACE_STRATEGIES = [
  { key: "linear" as const, label: "Linear", steps: RACE_LINEAR, moral: "One-by-one from the first cell — works on anything, costs a probe per element." },
  { key: "binary" as const, label: "Binary", steps: RACE_BINARY, moral: "Halve the window at every probe — but only because the data is sorted." },
  { key: "jump" as const, label: "Jump", steps: RACE_JUMP, moral: "Leap in √n blocks, step back, then walk linearly — the manageable middle ground." },
];

type RaceKey = (typeof RACE_STRATEGIES)[number]["key"];

function SearchRace() {
  const [strategy, setStrategy] = useState<RaceKey>("linear");
  const [replay, setReplay] = useState(0);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Compass className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <h3 className="text-xl font-bold md:text-2xl">The search race — one target, three strategies</h3>
      </div>
      <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
        A sorted array of <strong>16 cells</strong> hides one value: <strong>49</strong>. Watch the same
        target hunted by three strategies — <strong>linear</strong> sweeping cell by cell,{" "}
        <strong>binary</strong> halving the range, <strong>jump</strong> leaping in √n blocks. The array never
        changes; the bill does.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {RACE_STRATEGIES.map((s) => (
          <OpBtn key={s.key} onClick={() => setStrategy(s.key)} active={strategy === s.key}>{s.label}</OpBtn>
        ))}
        <OpBtn onClick={() => setReplay((r) => r + 1)}>
          <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5" aria-hidden /> replay</span>
        </OpBtn>
      </div>
      {/* keyed remount — a fresh track (step 0) on every strategy switch / replay */}
      <RaceTrack key={`${strategy}-${replay}`} strategy={strategy} />
    </div>
  );
}

function RaceTrack({ strategy }: { strategy: RaceKey }) {
  const [step, setStep] = useState(0);
  const strat = RACE_STRATEGIES.find((s) => s.key === strategy) ?? RACE_STRATEGIES[0];
  const steps = strat.steps;

  useEffect(() => {
    if (step >= steps.length - 1) return;
    const t = setTimeout(() => setStep((s) => s + 1), 950);
    return () => clearTimeout(t);
  }, [step, steps]);

  const visible = steps.slice(0, step + 1);
  const done = step >= steps.length - 1;
  const found = steps[step]?.kind === "found";
  const probeOf = new Map<number, number>();
  visible.forEach((st, i) => probeOf.set(st.idx, i + 1));
  const win = steps[step]?.lo !== undefined ? { lo: steps[step].lo as number, hi: steps[step].hi as number } : null;

  return (
    <>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
        <svg viewBox="0 0 830 158" className="h-auto w-full" role="img"
          aria-label={`A sorted array of sixteen values from 4 to 79 being searched for 49 by ${strat.label.toLowerCase()} search. Probed cells light up in sequence until the target cell at index 9 is found.`}>
          <defs>
            <marker id="s8-race" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" />
            </marker>
          </defs>
          {/* binary window */}
          {win && (
            <motion.rect
              key={`${win.lo}-${win.hi}`}
              x={16 + win.lo * 50 - 4}
              y="50"
              width={(win.hi - win.lo) * 50 + 50}
              height="58"
              rx="10"
              fill="#f59e0b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.18 }}
              transition={{ duration: 0.4 }}
            />
          )}
          {/* cells */}
          {RACE_VALS.map((v, i) => {
            const x = 16 + i * 50;
            const p = probeOf.get(i);
            const isFound = found && steps[step].idx === i;
            const isOvershoot = p !== undefined && steps[Math.min(p, visible.length) - 1]?.kind === "overshoot";
            const fill = isFound ? "#dbe7c0" : p !== undefined && !isOvershoot ? "#f6ad3c" : p !== undefined ? "#fbe9e4" : "#fde8cf";
            const stroke = isFound ? "#7c9a3e" : p !== undefined ? (isOvershoot ? "#e6a08c" : "#c2410c") : "#e2b075";
            return (
              <g key={i}>
                {p !== undefined && (
                  <motion.circle
                    cx={x + 21} cy="38" r="10" fill={isOvershoot ? "#e6a08c" : "#c2410c"}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: `${x + 21}px 38px` }}
                  >
                    <title>{`probe ${p}`}</title>
                  </motion.circle>
                )}
                {p !== undefined && (
                  <motion.text x={x + 21} y="42" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff7ec"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {p}
                  </motion.text>
                )}
                <motion.rect
                  x={x} y="54" width="42" height="48" rx="8"
                  fill={fill} stroke={stroke} strokeWidth={p !== undefined ? 2.5 : 1.4}
                  animate={{ fill, stroke, strokeWidth: p !== undefined ? 2.5 : 1.4 }}
                  transition={{ duration: 0.35 }}
                />
                <motion.text
                  x={x + 21} y="84" textAnchor="middle" fontSize="14" fontWeight="800"
                  animate={{ fill: isFound ? "#44621d" : "#3e2c1d" }} transition={{ duration: 0.35 }}
                >
                  {v}
                </motion.text>
                <text x={x + 21} y="122" textAnchor="middle" fontSize="9" fontWeight="700" fill="#b09a7a">{i}</text>
              </g>
            );
          })}
          {/* target pointer */}
          <motion.line
            x1={16 + 9 * 50 + 21} y1="132" x2={16 + 9 * 50 + 21} y2="140"
            stroke="#c2410c" strokeWidth="1.6" markerEnd="url(#s8-race)"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
          />
          <motion.text
            x={16 + 9 * 50 + 21} y="154" textAnchor="middle" fontSize="10" fontWeight="800" fill="#a0410a"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}
          >
            target 49 · index 9
          </motion.text>
        </svg>
      </div>
      <p className="mt-3 min-h-[2.4rem] text-[.88rem] font-bold leading-relaxed text-[#a0410a]" aria-live="polite">
        {`Probe ${step + 1}/${steps.length} · index ${steps[step].idx} → ${steps[step].note}`}
      </p>
      <div className="mt-2 flex max-h-24 flex-wrap gap-1.5 overflow-y-auto" aria-hidden>
        {visible.map((st, i) => (
          <span key={i} className="rounded-full px-2.5 py-0.5 font-mono-warm text-[.7rem] font-bold"
            style={{
              background: st.kind === "found" ? "rgba(124,154,62,.16)" : st.kind === "overshoot" ? "rgba(190,74,74,.12)" : "rgba(245,158,11,.14)",
              color: st.kind === "found" ? "#4c6b1f" : st.kind === "overshoot" ? "#8c2f2f" : "#92600a",
            }}>
            {i + 1}·idx {st.idx}
          </span>
        ))}
      </div>
      <p className="mt-3 text-[.85rem] leading-relaxed text-[#6f5438]">
        {done ? (
          <><strong>Final bill:</strong> {strat.label} needed <strong>{steps.length} probe{steps.length === 1 ? "" : "s"}</strong> here. {strat.moral} On this same array: linear 10 · binary 3 · jump 6 — the strategy, not the data, sets the price.</>
        ) : (
          <><strong>{strat.label}</strong> — {strat.moral}</>
        )}
      </p>
    </>
  );
}

/* ============================================================
   LECTURE 22 · hash-based search mini-map
   ============================================================ */

function HashMini() {
  return (
    <svg viewBox="0 0 720 176" className="h-auto w-full" role="img"
      aria-label="A hash table with ten buckets numbered 0 to 9. The key 71 hashes by mod 10 to bucket 1, landing directly. Bucket 7 holds a collision chain: key 27 linked to key 7 like a linked list.">
      <defs>
        <marker id="s8-hash" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" />
        </marker>
        <marker id="s8-hashg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#7c9a3e" />
        </marker>
      </defs>
      {Array.from({ length: 10 }, (_, i) => {
        const x = 20 + i * 68;
        const hit = i === 1, chain = i === 7;
        return (
          <g key={i}>
            <rect x={x} y="24" width="56" height="36" rx="8"
              fill={hit ? "#dbe7c0" : chain ? "#f6ad3c" : "#fde8cf"}
              stroke={hit ? "#7c9a3e" : chain ? "#c2410c" : "#e2b075"} strokeWidth={hit || chain ? 2.5 : 1.4} />
            <text x={x + 28} y="47" textAnchor="middle" fontSize="13" fontWeight="800" fill="#3e2c1d">{i}</text>
          </g>
        );
      })}
      {/* direct hit 71 → bucket 1 */}
      <text x="52" y="140" fontSize="12" fontWeight="800" fill="#4c6b1f">71 mod 10 = 1</text>
      <line x1="118" y1="136" x2="118" y2="66" stroke="#7c9a3e" strokeWidth="2" markerEnd="url(#s8-hashg)" />
      {/* chain at bucket 7 */}
      <line x1="494" y1="60" x2="494" y2="88" stroke="#c2410c" strokeWidth="1.6" markerEnd="url(#s8-hash)" />
      <rect x="466" y="92" width="56" height="32" rx="8" fill="#fffaf1" stroke="#c2410c" strokeWidth="1.6" />
      <text x="494" y="113" textAnchor="middle" fontSize="12" fontWeight="800" fill="#3e2c1d">27</text>
      <line x1="522" y1="108" x2="540" y2="108" stroke="#c2410c" strokeWidth="1.6" markerEnd="url(#s8-hash)" />
      <rect x="544" y="92" width="56" height="32" rx="8" fill="#fffaf1" stroke="#c2410c" strokeWidth="1.6" />
      <text x="572" y="113" textAnchor="middle" fontSize="12" fontWeight="800" fill="#3e2c1d">7</text>
      <text x="612" y="113" fontSize="10.5" fontWeight="700" fill="#8c2f2f">← collision</text>
      <text x="20" y="166" fontSize="11" fontWeight="700" fill="#8a5a06">
        the hash computes the address directly · collided keys chain like a linked list — walk it linearly
      </text>
    </svg>
  );
}

/* ============================================================
   EXPORTED — LECTURE 22 · SEARCH SECTION (light)
   ============================================================ */

export function AtbSearchSection() {
  return (
    <Section id="search">
      <SectionHead
        eyebrow="Lecture 22 · Search algorithms overview"
        title={<><span className="grad-text">Five ways to find</span> — the search strategies</>}
        lead="Linear, binary, jump, exponential, hash-based — five answers to the same question, with wildly different bills. The trick of the lecture: match the strategy to the data's size, sorting status, distribution and growth rate."
      />

      <ReadStep n="1" title="Linear search" sub="One by one, from the very first element" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Footprints className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · sequential, no preconditions</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Linear search walks the data <strong>sequentially, one element at a time, from the first
            element</strong>: compare each element with the search term; no match → move to the next. Its
            superpower is that it makes <strong>no demands</strong> — and its bill is the growth of the data
            itself.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              { icon: Check, tone: "#5c7a24", t: "Sorted or unsorted", d: "Both work — order is never required." },
              { icon: Network, tone: "#c2410c", t: "Any structure", d: "Arrays, linked lists, trees, graphs — anywhere you can visit elements one by one." },
              { icon: Timer, tone: "#b45309", t: "O(n) — and its limit", d: "Effort grows in proportion with data size: fine for hundreds, time-consuming for millions of records." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px solid #f0e2c8" }}>
                <c.icon className="h-5 w-5" style={{ color: c.tone }} aria-hidden />
                <p className="mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#6f5438]">{c.d}</p>
              </div>
            ))}
          </div>
          <Reveal className="mt-5">
            <StepsFlow steps={[
              { label: "Start", sub: "at the first element", icon: <Play className="h-4 w-4" style={{ color: "#c2410c" }} /> },
              { label: "Compare", sub: "element = search term?", icon: <Search className="h-4 w-4" style={{ color: "#c2410c" }} /> },
              { label: "Yes → stop", sub: "report the position", icon: <Check className="h-4 w-4" style={{ color: "#5c7a24" }} /> },
              { label: "No → next", sub: "move one element forward", icon: <ArrowRight className="h-4 w-4" style={{ color: "#c2410c" }} /> },
              { label: "Repeat", sub: "until found or data ends", icon: <RotateCcw className="h-4 w-4" style={{ color: "#c2410c" }} /> },
            ]} />
          </Reveal>
        </div>
      </Reveal>

      <ReadStep n="2" title="Binary search" sub="Sorted data only — halve, compare, repeat" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Split className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · the halving algorithm</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Binary search divides a <strong>sorted list</strong> into halves to locate an element. Start at the{" "}
            <strong>middle element</strong> and compare with the search term: <strong>if smaller, search the
            right half</strong>; <strong>if larger, search the left half</strong> — then repeat with the middle
            of the remaining segment. Every probe throws away half of what is left → <strong>O(log n)</strong>,
            the divide-and-conquer signature from Lecture 21.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip"><Check className="h-3.5 w-3.5" aria-hidden /> requirement · sorted in increasing order</span>
            <span className="chip"><TrendingUp className="h-3.5 w-3.5" aria-hidden /> cost · O(log n)</span>
            <span className="chip"><Compass className="h-3.5 w-3.5" aria-hidden /> wider applicability than the BST</span>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <span className="chip"><Split className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · binary search vs binary search tree</span>
            <p className="mt-3 max-w-4xl text-[.9rem] leading-relaxed text-[#2b2014]">
              The classic exam trap — <strong>an algorithm</strong> and <strong>a data structure</strong> that
              share a name. Five aspects, five differences:
            </p>
          </div>
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table min-w-[640px]">
              <thead><tr><th>Aspect</th><th>Binary search</th><th>Binary search tree (BST)</th></tr></thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Definition</td>
                  <td>An algorithm</td>
                  <td>A data structure</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Requirement</td>
                  <td>A sorted list is needed</td>
                  <td>Maintains order through its structure</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Complexity (balanced)</td>
                  <td>O(log n)</td>
                  <td>O(log n)</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Complexity (unbalanced)</td>
                  <td>N/A</td>
                  <td>O(n) — behaves like a linked list</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Application</td>
                  <td>Wider applicability — any sorted list</td>
                  <td>Specific tree structure</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Callout kind="warn" title="Lecture 22 · the unbalanced trap">
          A BST earns its O(log n) only while it stays <strong>balanced</strong>. Let it grow lopsided — every
          new value larger than the last — and the branches stretch into a chain: the tree{" "}
          <strong>degrades to O(n), behaving like a linked list</strong>. The algorithm is not broken; the
          structure stopped guaranteeing halves.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Jump search" sub="Fixed leaps of √n — then walk the block" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Gauge className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · blocks of √n</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Jump search leaps by a <strong>fixed number of positions</strong> instead of checking
            sequentially — and the fixed number is <strong>√n</strong>, the square root of the data size:{" "}
            <strong>100 elements → jumps of 10</strong>; <strong>9 elements → jumps of 3</strong>. It needs{" "}
            <strong>sorted data</strong>. The process:
          </p>
          <ol className="mt-4 grid gap-2.5 text-[.9rem] leading-relaxed text-[#2b2014]">
            {[
              "Jump forward by fixed intervals until the value exceeds the search term.",
              "Return to the previous position — the start of the block that must hold the target.",
              "Perform a linear search forward from that point until the term is found.",
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white" aria-hidden>{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[.9rem] leading-relaxed text-[#6f5438]">
            Cost: <strong>O(√n)</strong> — the data splits into <strong>√n blocks</strong>, dividing the
            problem into <strong>manageable sub-problems</strong> without the large jumps of binary search.
          </p>
        </div>
      </Reveal>

      <ReadStep n="4" title="Exponential search" sub="Jumps that double — then binary inside the block" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Rocket className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · 1, 2, 4, 8, 16…</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Exponential search also needs <strong>sorted data</strong> — but its jumps{" "}
            <strong>double as they go</strong>: 1, 2, 4, 8, 16… until the value exceeds the search term. Then
            it performs a <strong>binary search inside that identified block</strong>. The combination costs{" "}
            <strong>O(log n)</strong>.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl p-4" style={{ background: "rgba(217,119,6,.10)" }}>
              <p className="text-[.78rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#92600a" }}>Jump search</p>
              <p className="mt-1.5 text-[.88rem] leading-relaxed text-[#2b2014]">
                <strong>Fixed-size</strong> jumps of √n, <strong>linear</strong> search within blocks · O(√n)
              </p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(124,154,62,.12)" }}>
              <p className="text-[.78rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#4c6b1f" }}>Exponential search</p>
              <p className="mt-1.5 text-[.88rem] leading-relaxed text-[#2b2014]">
                <strong>Increasing</strong> jumps (doubling), <strong>binary</strong> search within blocks · O(log n)
              </p>
            </div>
          </div>
          <p className="mt-4 text-[.9rem] leading-relaxed text-[#6f5438]">
            Built for <strong>very large and continuously growing databases</strong> — where nobody knows the
            final size, but doubling bounds always catch up with it.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Quiz source="Concept check" q="The real difference between jump search and exponential search?"
          options={["Exponential uses fixed jumps; jump search uses growing jumps", "Exponential doubles its jumps and binary-searches inside the block; jump search uses fixed √n jumps with linear search inside", "Exponential needs no sorting; jump search does", "They are the same algorithm under two names"]} answer={1}
          explain="Two dials differ: jump SIZE (fixed √n vs doubling 1, 2, 4, 8, 16…) and the IN-BLOCK method (linear vs binary). Both need sorted data; the doubling-plus-binary combination is what lifts exponential search to O(log n) — and makes it ideal for rapidly growing databases." />
      </Reveal>

      <ReadStep n="5" title="Hash-based search" sub="Compute the address — no comparisons, no sorting" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Hash className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · the index is calculated</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Hash-based search does not compare at all — a <strong>hash function calculates the index
            directly</strong> where the data lives (the lecture&apos;s example: <span className="font-mono-warm font-bold text-[#a0410a]">key mod 10 → indices 0–9</span>).
            Calculate the hash of the search term, <strong>go straight to that index</strong>, done. When two
            keys land on the same index — a <strong>collision</strong> — they <strong>chain like a linked
            list</strong>, and the chain is walked linearly.
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
            <HashMini />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { t: "Average · O(1)", d: "A fixed number of steps regardless of database size — the fastest when the hash distributes data evenly.", tone: "#4c6b1f", bg: "rgba(124,154,62,.14)" },
              { t: "Worst · O(n)", d: "When everything collides into the same index — one long chain to walk end to end.", tone: "#8c2f2f", bg: "rgba(190,74,74,.12)" },
              { t: "Balanced chains · O(log n)", d: "If the chains are organized as balanced trees, even collisions stay logarithmic.", tone: "#92600a", bg: "rgba(217,119,6,.12)" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: c.bg }}>
                <p className="text-[.85rem] font-extrabold" style={{ color: c.tone }}>{c.t}</p>
                <p className="mt-1.5 text-[.84rem] leading-relaxed text-[#2b2014]">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[.9rem] leading-relaxed text-[#6f5438]">
            And the quiet superpower: <strong>no sorting is required</strong> — order never enters the deal,
            only the quality of the hash.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Quiz source="Concept check" q="Hash search averages O(1). When does it collapse to O(n)?"
          options={["When the data is unsorted", "When every key collides into the same index — one chain holds everything", "When the table is smaller than the data", "When keys are negative numbers"]} answer={1}
          explain="The average case is a fixed number of steps because the hash jumps straight to the index. The worst case is collision-intensive: ALL data points to the same index, so lookup degenerates into walking one long chain — O(n). Balanced-tree chains rescue it to O(log n); even distribution prevents it." />
      </Reveal>

      <ReadStep n="6" title="The search race" sub="Same array, same target — three very different bills" />
      <Reveal><SearchRace /></Reveal>
      <Reveal className="mt-5">
        <Quiz source="Concept check" q="Your data is unsorted — and sorting it is not an option. Which strategies still work?"
          options={["Binary and jump search", "Exponential search only", "Linear and hash-based search", "Binary and hash-based search"]} answer={2}
          explain="Binary, jump and exponential all REQUIRE sorted data — halving, bounding and block-stepping collapse without order. Linear search works on anything, and hash-based search never needed order in the first place: it computes the address instead of comparing values." />
      </Reveal>

      <ReadStep n="7" title="Which one, when" sub="The lecture's five use cases — and the four selection factors" />
      <Reveal>
        <div className="card-warm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <span className="chip"><Compass className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · use case → strategy</span>
          </div>
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table min-w-[720px]">
              <thead><tr><th>Use case</th><th>Recommended algorithm</th><th>Reason</th></tr></thead>
              <tbody>
                {[
                  { u: "Find a guest in today's hotel check-in register", a: "Linear search", r: "No inherent order — unstructured data; one-by-one is all you can do" },
                  { u: "Find a product in a catalog sorted by categories", a: "Jump search", r: "Non-numeric category order — fixed √n jumps over blocks work better" },
                  { u: "Find a student record using roll number in a database", a: "Hash search", r: "Databases index by hash — O(1) average access by key" },
                  { u: "Find a product in a catalog sorted by price", a: "Binary search", r: "Numeric sorting allows value comparison — halving applies" },
                  { u: "Search financial transactions in a rapidly growing system", a: "Exponential search", r: "Unknown growth — doubling jumps handle the scaling" },
                ].map((r) => (
                  <tr key={r.u}>
                    <td className="font-bold text-[#7c4a12]">{r.u}</td>
                    <td><span className="rounded-full px-2.5 py-1 text-[.78rem] font-extrabold" style={{ background: "rgba(245,158,11,.16)", color: "#92600a" }}>{r.a}</span></td>
                    <td>{r.r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Callout kind="insight" title="Lecture 22 · the four selection factors">
          Algorithm choice is never a beauty contest — it is a fit against the data:{" "}
          <strong>data size</strong> (millions punish linear), <strong>sorting status</strong> (binary, jump
          and exponential demand it; hash and linear do not), <strong>data distribution</strong> (hash lives
          or dies by even spread), and <strong>growth rate</strong> (a continuously growing system wants
          exponential&apos;s doubling bounds).
        </Callout>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="Jump search on 9 elements — what jump size does √n prescribe?"
            options={["9", "4.5", "3", "2"]} answer={2}
            explain="√9 = 3. The rule scales cleanly: 100 elements → jumps of 10; 9 elements → jumps of 3. Fixed √n jumps keep the number of jumps and the block walk balanced — that balance is exactly what O(√n) buys." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="A catalog lets users sort by price, then search it. Which strategy fits — and why that one?"
            options={["Linear — price is a number", "Hash — numbers hash well", "Binary — numeric sorting allows value comparison and halving", "Exponential — prices grow over time"]} answer={2}
            explain="Sorted by a NUMERIC key → binary search: compare the middle, decide the half, repeat — O(log n). Category sorting (non-numeric) points to jump search instead, and an unstructured register leaves only linear. The data's order picks the algorithm." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — search strategies" items={[
          { q: "Trace binary search for 59 in [4, 9, 14, 19, 24, 29, 34, 39, 44, 49, 54, 59, 64, 69, 74, 79]. Which middles do you probe?", hint: "39 → 69 → 59: three probes, each discarding half of what remained." },
          { q: "Compute the jump size for n = 100 and n = 2500, and state how many full jumps cover each array.", hint: "√100 = 10, √2500 = 50 — the array splits into √n blocks of √n." },
          { q: "Roll numbers R107, R217 and R45 hash with mod 10. Which collide, and what does the bucket look like afterwards?", hint: "107 and 217 both end in 7 → bucket 7 chains: 7 → 107 → 217, walked linearly on lookup." },
          { q: "Match and justify: hotel check-in register · category catalog · roll-number database · price-sorted catalog · rapidly growing transaction log.", hint: "Linear · jump · hash · binary · exponential — then say WHY in one line each (order, order-type, indexing, numeric order, growth)." },
        ]} />
      </Reveal>
      <Reveal className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><Compass className="h-3.5 w-3.5" aria-hidden /> Lecture 22 · key takeaways</span>
        </div>
        <Takeaways items={[
          <><strong>Linear search</strong> — one-by-one sequential; works anywhere, but slow for large datasets.</>,
          <><strong>Binary search</strong> — O(log n); requires a sorted list and divides it into two halves.</>,
          <><strong>Jump search</strong> — O(√n); balances the number of jumps against block size.</>,
          <><strong>Exponential search</strong> — O(log n); exponentially increases jumps, then applies binary search — made for continuously growing databases.</>,
          <><strong>Hash search</strong> — O(1) average; calculates the exact location, fastest for evenly distributed data, needs no sorting.</>,
          <>Selection factors — <strong>data size, sorting status, distribution and growth rate</strong> decide which strategy fits the business problem.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

