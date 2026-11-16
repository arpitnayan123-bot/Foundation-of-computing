"use client";

/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 09
   Lecture 24 · Network search algorithms — Dijkstra (light)
   Lecture 25 · Sorting & bubble sort (light)
   Source of truth: upload/lectures-8-25.txt (L24/L25 banners)
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, Antenna, ArrowDownUp, Banknote, BarChart3, Check, Compass,
  FlipHorizontal2, Globe, GraduationCap, Layers, ListTree, MapPin, Navigation, Network,
  Package, Plane, RotateCcw, Route as RouteIcon, Ruler, ShoppingCart, Signal,
  SkipForward, Timer, TrendingUp, Truck, Waypoints, X,
} from "lucide-react";
import {
  Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- shared local button (real <button>, aria-labelled) ---------- */

function OpBtn({ onClick, children, tone = "ghost", disabled = false }: {
  onClick: () => void; children: React.ReactNode; tone?: "warm" | "ghost"; disabled?: boolean;
}) {
  const style: React.CSSProperties =
    tone === "warm"
      ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
      : { background: "#fffdf9", color: "#7c4a12", border: "1px solid #e5c79d" };
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={`rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 ${disabled ? "cursor-not-allowed opacity-40" : "hover:-translate-y-0.5"}`}
    >
      {children}
    </button>
  );
}

/* ============================================================
   LECTURE 24 — shared SVG vocabulary
   warm palette: cream nodes #fde8cf, amber current #f6ad3c,
   olive settled #7c9a3e, ember accents #c2410c
   ============================================================ */

type NodeKind = "plain" | "current" | "settled";

function GraphNode({ x, y, label, kind, tag }: {
  x: number; y: number; label: string; kind: NodeKind; tag?: string;
}) {
  const fill = kind === "current" ? "#ea580c" : kind === "settled" ? "#7c9a3e" : "#fde8cf";
  const stroke = kind === "current" ? "#c2410c" : kind === "settled" ? "#5c7a24" : "#e2b075";
  const textFill = kind === "plain" ? "#3e2c1d" : "#fff7ec";
  return (
    <g>
      {kind === "current" ? (
        <motion.circle cx={x} cy={y} fill="none" stroke="#c2410c" strokeWidth={2}
          initial={{ r: 30, opacity: 0.8 }} animate={{ r: 47, opacity: 0.08 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }} />
      ) : null}
      <circle cx={x} cy={y} r={28} fill={fill} stroke={stroke} strokeWidth={kind === "plain" ? 1.6 : 2.6} />
      <text x={x} y={y + 6} textAnchor="middle" fontSize={16} fontWeight={800} fill={textFill}>{label}</text>
      {tag ? (
        <text x={x} y={y + 48} textAnchor="middle" fontSize={10} fontWeight={800} fill="#8a5a06">{tag}</text>
      ) : null}
    </g>
  );
}

function WeightPill({ x, y, label, hot = false }: { x: number; y: number; label: string; hot?: boolean }) {
  return (
    <g>
      <rect x={x - 15} y={y - 13} width={30} height={22} rx={8}
        fill={hot ? "#fde4c3" : "#fffaf1"} stroke={hot ? "#c2410c" : "#ecd3ac"} strokeWidth={hot ? 2 : 1.2} />
      <text x={x} y={y + 2.5} textAnchor="middle" fontSize={11.5} fontWeight={800}
        fill={hot ? "#9a3412" : "#7c4a12"}>{label}</text>
    </g>
  );
}

/* ============================================================
   LECTURE 24 · ReadStep 1 — machine: network vocabulary
   ============================================================ */

/* trim an edge to the rims of its two node circles */
function edgeGeom(ax: number, ay: number, bx: number, by: number, r = 30): { x1: number; y1: number; x2: number; y2: number } {
  const dx = bx - ax;
  const dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return { x1: ax + ux * r, y1: ay + uy * r, x2: bx - ux * (r - 4), y2: by - uy * (r - 4) };
}

const NV_NODES = [
  { id: "P", x: 70, y: 62 },
  { id: "Q", x: 250, y: 48 },
  { id: "R", x: 440, y: 92 },
  { id: "S", x: 180, y: 196 },
  { id: "T", x: 560, y: 208 },
];

function NetworkVocabLab() {
  const [mode, setMode] = useState<"node" | "edge" | "path">("node");
  const nodeState = (id: string): NodeKind => {
    if (mode === "node") return id === "R" ? "current" : "plain";
    if (mode === "path") return id === "P" || id === "Q" || id === "R" || id === "T" ? "settled" : "plain";
    return "plain";
  };
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Network className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Node · edge · path — the three words</p>
        <span className="chip"><Network className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · network anatomy</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        One tiny network, three readings. Switch the lens and watch the same five dots mean something different each time.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <OpBtn tone={mode === "node" ? "warm" : "ghost"} onClick={() => setMode("node")}>Node</OpBtn>
        <OpBtn tone={mode === "edge" ? "warm" : "ghost"} onClick={() => setMode("edge")}>Edge</OpBtn>
        <OpBtn tone={mode === "path" ? "warm" : "ghost"} onClick={() => setMode("path")}>Path</OpBtn>
      </div>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
        <svg viewBox="0 0 660 260" className="h-auto w-full" role="img"
          aria-label={mode === "node"
            ? "A five-node network; one node, R, is highlighted — a node is a single point such as a city, a server or a person"
            : mode === "edge"
              ? "The same network with the edge between Q and R highlighted, carrying weight 7 — an edge is a connection that can carry a cost"
              : "The same network with the path P to Q to R to T highlighted in sequence — a path is a chain of edges, and in networks the path itself is usually what we search for"}>
          <defs>
            <marker id="nv-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
          </defs>
          {mode === "path" ? (
            <g>
              <motion.path d="M 92 58 L 226 49" fill="none" stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#nv-ah)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4 }} />
              <motion.path d="M 274 52 L 414 87" fill="none" stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#nv-ah)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35, duration: 0.4 }} />
              <motion.path d="M 462 104 L 536 192" fill="none" stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#nv-ah)"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7, duration: 0.4 }} />
            </g>
          ) : (
            <g stroke={mode === "edge" ? "#e2b075" : "#e8d3b2"} strokeWidth={mode === "edge" ? 2 : 1.6}>
              <line x1="94" y1="60" x2="224" y2="49" />
              <line x1="276" y1="51" x2="412" y2="87" />
              <line x1="464" y1="106" x2="534" y2="190" />
              <line x1="92" y1="82" x2="158" y2="178" />
              <line x1="204" y1="190" x2="416" y2="101" />
              <line x1="204" y1="200" x2="532" y2="210" />
            </g>
          )}
          {mode === "edge" ? (
            <g>
              <line x1="276" y1="51" x2="412" y2="87" stroke="#c2410c" strokeWidth={4} />
              <WeightPill x={344} y={58} label="7" hot />
            </g>
          ) : null}
          {NV_NODES.map((n) => (
            <GraphNode key={n.id} x={n.x} y={n.y} label={n.id} kind={nodeState(n.id)} />
          ))}
        </svg>
      </div>
      <p className="mt-3 min-h-[1.6rem] text-[.86rem] font-bold text-[#9a3412]" aria-live="polite">
        {mode === "node"
          ? "→ A node (vertex) is a single point in the network — a city, a server, a person. Old search asked: which one is it?"
          : mode === "edge"
            ? "→ An edge is a connection between two nodes — and it can carry a weight: kilometres, minutes, rupees."
            : "→ A path is a chain of edges from one node to another. In networks the PATH is usually what we are searching for — not a single element."}
      </p>
    </div>
  );
}

/* ============================================================
   LECTURE 24 · ReadStep 3 — machine: what does "shortest" mean?
   ============================================================ */

type CostMode = "km" | "time" | "toll";

const CS_LEGS: { from: string; to: string; x1: number; y1: number; x2: number; y2: number; km: number; toll: number; min: number; direct?: boolean }[] = [
  { from: "Home", to: "B", x1: 96, y1: 150, x2: 268, y2: 74, km: 5, toll: 20, min: 15 },
  { from: "B", to: "Work", x1: 292, y1: 68, x2: 552, y2: 140, km: 3, toll: 10, min: 10 },
  { from: "Home", to: "C", x1: 96, y1: 168, x2: 268, y2: 236, km: 7, toll: 0, min: 20 },
  { from: "C", to: "Work", x1: 292, y1: 244, x2: 552, y2: 172, km: 5, toll: 0, min: 15 },
  { from: "Home", to: "Work", x1: 108, y1: 156, x2: 540, y2: 154, km: 15, toll: 50, min: 18, direct: true },
];

function CostSwitchLab() {
  const [mode, setMode] = useState<CostMode>("km");
  const win = mode === "km" ? "Home-B-Work" : mode === "time" ? "Home-Work" : "Home-C-Work";
  const legOn = (l: (typeof CS_LEGS)[number]) =>
    win === "Home-B-Work" ? l.to === "B" || l.from === "B"
      : win === "Home-C-Work" ? l.to === "C" || l.from === "C"
        : l.direct === true;
  const routes = {
    km: { name: "Home → B → Work — the old highway", why: "8 km wins. Note what loses: the expressway is the FASTEST at 18 minutes yet the LONGEST at 15 km — distance and time disagree, so “shortest” depends entirely on what you optimise." },
    time: { name: "Home → Work — the expressway", why: "18 minutes wins — and it is the LONGEST road on the map (15 km). This is the lecture's whole point: shortest ≠ shortest distance. The cost is whatever you choose to optimise." },
    toll: { name: "Home → C → Work — the city roads", why: "₹0 wins — no toll booths at all. Cheapest cash, slowest clock (35 min). Same network, three different “shortest” answers." },
  };
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Ruler className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">One map, three &ldquo;shortest&rdquo; routes</p>
        <span className="chip"><RouteIcon className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · shortest ≠ distance</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        The cost on an edge can be <strong>kilometres, minutes, toll rupees</strong> — or a combination. Change what
        you optimise and the &ldquo;shortest path&rdquo; changes with it.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <OpBtn tone={mode === "km" ? "warm" : "ghost"} onClick={() => setMode("km")}><span className="inline-flex items-center gap-1.5"><Ruler className="h-3.5 w-3.5" aria-hidden /> Shortest distance</span></OpBtn>
        <OpBtn tone={mode === "time" ? "warm" : "ghost"} onClick={() => setMode("time")}><span className="inline-flex items-center gap-1.5"><Timer className="h-3.5 w-3.5" aria-hidden /> Fastest time</span></OpBtn>
        <OpBtn tone={mode === "toll" ? "warm" : "ghost"} onClick={() => setMode("toll")}><span className="inline-flex items-center gap-1.5"><Banknote className="h-3.5 w-3.5" aria-hidden /> Avoid the toll</span></OpBtn>
      </div>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
        <svg viewBox="0 0 660 300" className="h-auto w-full" role="img"
          aria-label={mode === "km"
            ? "Route cost map optimised for distance: Home to B to Work, 8 kilometres in total, is the shortest route"
            : mode === "time"
              ? "Route cost map optimised for time: the direct expressway from Home to Work, 18 minutes, is fastest despite being the longest road"
              : "Route cost map optimised for toll: Home to C to Work, zero rupees in tolls, avoids every toll booth"}>
          <defs>
            <marker id="cs-dim" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d9c4a0" /></marker>
            <marker id="cs-hot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
          </defs>
          {CS_LEGS.map((l) => {
            const on = legOn(l);
            const g = edgeGeom(l.x1, l.y1, l.x2, l.y2, 26);
            return (
              <g key={`${l.from}-${l.to}`}>
                <motion.line x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2}
                  stroke="#dcc9a8" strokeWidth={2} opacity={0.75}
                  animate={{ stroke: on ? "#c2410c" : "#dcc9a8", strokeWidth: on ? 3.6 : 2, opacity: on ? 1 : 0.75 }}
                  markerEnd={on ? "url(#cs-hot)" : "url(#cs-dim)"} />
                <text x={(l.x1 + l.x2) / 2 + (l.direct ? 0 : 14)} y={(l.y1 + l.y2) / 2 - 10}
                  textAnchor="middle" fontSize={10} fontWeight={700} fill={on ? "#9a3412" : "#a08050"}>
                  {l.km} km · {l.min} min{l.toll > 0 ? ` · ₹${l.toll}` : " · no toll"}
                </text>
              </g>
            );
          })}
          <GraphNode x={88} y={156} label="🏠" kind="settled" tag="Home" />
          <GraphNode x={280} y={68} label="B" kind={win === "Home-B-Work" ? "current" : "plain"} />
          <GraphNode x={280} y={246} label="C" kind={win === "Home-C-Work" ? "current" : "plain"} />
          <GraphNode x={572} y={154} label="W" kind="settled" tag="Work" />
        </svg>
      </div>
      <p className="mt-3 min-h-[2.6rem] text-[.86rem] font-bold text-[#9a3412]" aria-live="polite">
        → Winner: {routes[mode].name}. {routes[mode].why}
      </p>
      <div className="mt-2 grid gap-3 md:grid-cols-3">
        {[
          { t: "Distance (km)", d: "The old highway wins at 8 km.", icon: Ruler },
          { t: "Time (minutes)", d: "The expressway wins at 18 min — despite being longest.", icon: Timer },
          { t: "Money (toll ₹)", d: "The city roads win at ₹0 — free, but slowest.", icon: Banknote },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
            <span className="chip"><c.icon className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · cost variable</span>
            <p className="mt-2 text-[.85rem] font-bold text-[#3e2c1d]">{c.t}</p>
            <p className="mt-1 text-[.82rem] leading-relaxed text-[#5c4a33]">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   LECTURE 24 · ReadStep 4 — FLAGSHIP: Dijkstra step-through
   the lecture's exact graph: A→B 4, A→C 2, C→B 1, C→D 5, B→D 3
   ============================================================ */

type DijId = "A" | "B" | "C" | "D";

const DIJ_NODES: { id: DijId; x: number; y: number }[] = [
  { id: "A", x: 92, y: 84 },
  { id: "B", x: 622, y: 84 },
  { id: "C", x: 312, y: 234 },
  { id: "D", x: 622, y: 250 },
];

const DIJ_EDGES: { k: string; from: DijId; to: DijId; w: number; lx: number; ly: number }[] = [
  { k: "AB", from: "A", to: "B", w: 4, lx: 357, ly: 62 },
  { k: "AC", from: "A", to: "C", w: 2, lx: 178, ly: 176 },
  { k: "CB", from: "C", to: "B", w: 1, lx: 486, ly: 146 },
  { k: "CD", from: "C", to: "D", w: 5, lx: 442, ly: 266 },
  { k: "BD", from: "B", to: "D", w: 3, lx: 668, ly: 172 },
];

const INF = "∞";

type DijStep = {
  dist: Record<DijId, number | null>;
  via: Record<DijId, string>;
  visited: DijId[];
  current: DijId | null;
  improved: string[];
  rejected: string[];
  rejectedNote: Partial<Record<string, string>>;
  tree: string[];
  title: string;
  status: string;
};

const DIJ_STEPS: DijStep[] = [
  {
    dist: { A: 0, B: null, C: null, D: null },
    via: { A: "source", B: "—", C: "—", D: "—" },
    visited: [], current: null, improved: [], rejected: [], rejectedNote: {}, tree: [],
    title: "Step 1 · initialise",
    status: "Initialise: the source A starts at 0; every other node starts at ∞ — unknown. Nothing is visited yet.",
  },
  {
    dist: { A: 0, B: 4, C: 2, D: null },
    via: { A: "source", B: "A→B", C: "A→C", D: "—" },
    visited: ["A"], current: "A", improved: ["AB", "AC"], rejected: [], rejectedNote: {}, tree: [],
    title: "Settle A (0)",
    status: "Pick the smallest unvisited node — A (0). Relax its neighbours: B gets 0+4 = 4, C gets 0+2 = 2. Mark A visited — its distance is final.",
  },
  {
    dist: { A: 0, B: 3, C: 2, D: 7 },
    via: { A: "source", B: "A→C→B", C: "A→C", D: "A→C→D" },
    visited: ["A", "C"], current: "C", improved: ["CB", "CD"],
    rejected: ["AB"], rejectedNote: { AB: "direct 4 → beaten by 3" }, tree: [],
    title: "Settle C (2) — the detour wins",
    status: "Smallest unvisited is C (2). Relax: A→C→B = 2+1 = 3 beats B's direct 4 → update! D gets 2+5 = 7. Mark C visited — 2 is final.",
  },
  {
    dist: { A: 0, B: 3, C: 2, D: 6 },
    via: { A: "source", B: "A→C→B", C: "A→C", D: "A→C→B→D" },
    visited: ["A", "C", "B"], current: "B", improved: ["BD"],
    rejected: ["CD"], rejectedNote: { CD: "A→C→D = 7 → beaten by 6" }, tree: [],
    title: "Settle B (3) — D gets cheaper",
    status: "Smallest unvisited is B (3). Relax: A→C→B→D = 3+3 = 6 beats D's 7 → update! Mark B visited — 3 is final.",
  },
  {
    dist: { A: 0, B: 3, C: 2, D: 6 },
    via: { A: "source", B: "A→C→B", C: "A→C", D: "A→C→B→D" },
    visited: ["A", "C", "B", "D"], current: "D", improved: [], rejected: [], rejectedNote: {}, tree: [],
    title: "Settle D (6) — all final",
    status: "Smallest unvisited is D (6). D has no unvisited neighbours to relax. Mark D visited — every distance is now final.",
  },
  {
    dist: { A: 0, B: 3, C: 2, D: 6 },
    via: { A: "source", B: "A→C→B", C: "A→C", D: "A→C→B→D" },
    visited: ["A", "C", "B", "D"], current: null, improved: [], rejected: [],
    rejectedNote: { AB: "never used — 4 loses to 3" },
    tree: ["AC", "CB", "BD"],
    title: "Result — the shortest-path tree",
    status: "Done — shortest distances from source A: A = 0, C = 2, B = 3, D = 6. The direct A→B edge (4) was never used, and D's cheapest route is the three-hop A→C→B→D, not A→C→D = 7.",
  },
];

function DijkstraLab() {
  const [i, setI] = useState(0);
  const s = DIJ_STEPS[i];
  const done = i === DIJ_STEPS.length - 1;
  const nodeKind = (id: DijId): NodeKind =>
    s.current === id ? "current" : s.visited.includes(id) ? "settled" : "plain";
  const edgeState = (k: string): "idle" | "hot" | "dim" | "tree" =>
    s.tree.includes(k) ? "tree" : s.improved.includes(k) ? "hot" : s.rejected.includes(k) ? "dim" : "idle";
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Waypoints className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Run Dijkstra on the lecture&apos;s graph</p>
        <span className="chip"><Waypoints className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · worked example</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        Node <strong>A</strong> is the source. Edges: <strong>A→B 4 · A→C 2 · C→B 1 · C→D 5 · B→D 3</strong>.
        Press <strong>Next</strong> to walk the five algorithm steps — watch two direct routes get beaten by detours.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={() => setI((v) => Math.min(v + 1, DIJ_STEPS.length - 1))} disabled={done}>
          <span className="inline-flex items-center gap-1.5"><SkipForward className="h-3.5 w-3.5" aria-hidden /> Next step</span>
        </OpBtn>
        <OpBtn onClick={() => setI(0)}>
          <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset</span>
        </OpBtn>
        <span className="chip">step {i} of {DIJ_STEPS.length - 1} · {s.title}</span>
      </div>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
        <svg viewBox="0 0 760 312" className="h-auto w-full" role="img"
          aria-label={`Dijkstra's algorithm on the lecture graph, ${s.title}: ${s.status}`}>
          <defs>
            <marker id="dj-idle" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#d9c4a0" /></marker>
            <marker id="dj-hot" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
          </defs>
          {DIJ_EDGES.map((e) => {
            const a = DIJ_NODES.find((n) => n.id === e.from)!;
            const b = DIJ_NODES.find((n) => n.id === e.to)!;
            const st = edgeState(e.k);
            const hot = st === "hot" || st === "tree";
            const g = edgeGeom(a.x, a.y, b.x, b.y, 30);
            return (
              <g key={e.k}>
                <motion.line x1={g.x1} y1={g.y1} x2={g.x2} y2={g.y2}
                  stroke="#dcc9a8" strokeWidth={2} opacity={0.85} strokeDasharray="0"
                  animate={{
                    stroke: st === "dim" ? "#c9b291" : hot ? "#c2410c" : "#dcc9a8",
                    strokeWidth: st === "dim" ? 1.6 : hot ? 3.4 : 2,
                    strokeDasharray: st === "dim" ? "7 5" : "0",
                    opacity: st === "idle" ? 0.85 : 1,
                  }}
                  markerEnd={hot ? "url(#dj-hot)" : "url(#dj-idle)"} />
                <WeightPill x={e.lx} y={e.ly} label={String(e.w)} hot={hot} />
                {s.rejectedNote[e.k] ? (
                  <motion.text x={e.lx} y={e.ly - 22} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#b3492f"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{s.rejectedNote[e.k]}</motion.text>
                ) : null}
              </g>
            );
          })}
          {DIJ_NODES.map((n) => (
            <g key={n.id}>
              <GraphNode x={n.x} y={n.y} label={n.id} kind={nodeKind(n.id)} tag={n.id === "A" ? "start" : undefined} />
              <motion.text key={`d-${n.id}-${i}`} x={n.x} y={n.y - 40} textAnchor="middle" fontSize={13} fontWeight={800}
                fill={nodeKind(n.id) === "settled" ? "#5c7a24" : nodeKind(n.id) === "current" ? "#c2410c" : "#8a5a06"}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {s.dist[n.id] === null ? INF : s.dist[n.id]}
              </motion.text>
            </g>
          ))}
          <text x={384} y={300} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#a08050">
            settled = its distance can never improve again · ∞ = not reached yet
          </text>
        </svg>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DIJ_NODES.map((n) => {
          const st = nodeKind(n.id);
          const d = s.dist[n.id];
          return (
            <div key={n.id} className="rounded-xl p-3"
              style={{
                background: st === "settled" ? "#eef4dd" : st === "current" ? "#fde4c3" : "#fbf3e6",
                border: `1px solid ${st === "settled" ? "#c4d6a0" : st === "current" ? "#eec088" : "#efdec2"}`,
              }}>
              <div className="flex items-center justify-between">
                <span className="text-[.72rem] font-extrabold uppercase tracking-[.14em] text-[#8a5a06]">node {n.id}</span>
                {st === "settled" ? <Check className="h-3.5 w-3.5" style={{ color: "#5c7a24" }} aria-hidden /> :
                  st === "current" ? <span className="h-2 w-2 rounded-full bg-[#c2410c]" aria-hidden /> : null}
              </div>
              <p className="mt-1 font-mono-warm text-2xl font-extrabold" style={{ color: st === "settled" ? "#44621d" : "#3e2c1d" }}>
                {d === null ? INF : d}
              </p>
              <p className="mt-0.5 text-[.72rem] font-semibold text-[#8c7a5c]">{s.via[n.id]}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]" aria-live="polite">
        {s.status}
      </p>
      <div className="mt-4 rounded-2xl p-4" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
        <span className="chip"><Waypoints className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · the two discoveries</span>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-[#fffaf1] p-4">
            <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">Discovery 1 — B is reachable cheaper</p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]">
              Direct <strong>A→B = 4</strong>. But <strong>A→C→B = 2+1 = 3</strong> — shorter! Dijkstra only trusts a
              node once no cheaper route can exist.
            </p>
          </div>
          <div className="rounded-xl bg-[#fffaf1] p-4">
            <p className="text-[.86rem] font-extrabold text-[#3e2c1d]">Discovery 2 — D takes the long way round</p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]">
              <strong>A→C→D = 2+5 = 7</strong>. But <strong>A→C→B→D = 3+3 = 6</strong> — shorter! The cheapest road to
              D runs through B, not straight from C.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LECTURE 24 · ReadStep 5 — machine: hub & spoke
   ============================================================ */

const HS_HUBS = [
  { id: "Jaipur", x: 300, y: 176 },
  { id: "Delhi", x: 540, y: 176 },
];
const HS_SPOKES = [
  { id: "Jodhpur", x: 84, y: 84, hub: "Jaipur", ship: true },
  { id: "Pali", x: 150, y: 252, hub: "Jaipur", ship: false },
  { id: "Ajmer", x: 330, y: 272, hub: "Jaipur", ship: false },
  { id: "Agra", x: 512, y: 62, hub: "Delhi", ship: false },
  { id: "Kurukshetra", x: 668, y: 236, hub: "Delhi", ship: false },
  { id: "Somnath", x: 688, y: 84, hub: "Delhi", ship: true },
];

function HubSpokeLab() {
  const [shipping, setShipping] = useState(false);
  const [shipped, setShipped] = useState(false);
  const ship = () => {
    setShipping(true);
    window.setTimeout(() => { setShipped(true); setShipping(false); }, 2600);
  };
  const reset = () => { setShipped(false); setShipping(false); };
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Truck className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Hubs &amp; spokes — the courier model</p>
        <span className="chip"><Truck className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · spoke-and-hub</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        Courier firms do <strong>not</strong> connect every city to every city — that network explodes in complexity.
        They build <strong>hubs</strong> (Jaipur, Delhi) with <strong>spoke cities</strong> hanging off them, and
        Dijkstra pre-computes the shortest hub-to-hub distances once.
      </p>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-4">
        <svg viewBox="0 0 760 312" className="h-auto w-full" role="img"
          aria-label="Spoke-and-hub courier network: Jodhpur, Pali and Ajmer feed the Jaipur hub; Agra, Kurukshetra and Somnath feed the Delhi hub. The shipped package travels Jodhpur to Jaipur to Delhi to Somnath through the hubs.">
          <defs>
            <marker id="hs-spoke" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c9a76a" /></marker>
            <marker id="hs-route" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
          </defs>
          {HS_SPOKES.map((sp) => {
            const h = HS_HUBS.find((x) => x.id === sp.hub)!;
            return (
              <line key={sp.id} x1={sp.x} y1={sp.y} x2={h.x} y2={h.y} stroke="#dcc9a8" strokeWidth={1.8} markerEnd="url(#hs-spoke)" />
            );
          })}
          <line x1={330} y1={176} x2={508} y2={176} stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#hs-route)" />
          <text x={419} y={162} textAnchor="middle" fontSize={11} fontWeight={800} fill="#9a3412">hub ⇄ hub · Dijkstra territory</text>
          {shipping || shipped ? (
            <g>
              <motion.path d="M 84 84 L 300 176" fill="none" stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#hs-route)"
                initial={{ pathLength: 0 }} animate={shipping || shipped ? { pathLength: 1 } : {}} transition={{ duration: 0.7 }} />
              <motion.path d="M 300 176 L 540 176" fill="none" stroke="#c2410c" strokeWidth={3.4}
                initial={{ pathLength: 0 }} animate={shipping || shipped ? { pathLength: 1 } : {}} transition={{ delay: 0.7, duration: 0.7 }} />
              <motion.path d="M 540 176 L 688 84" fill="none" stroke="#c2410c" strokeWidth={3.4} markerEnd="url(#hs-route)"
                initial={{ pathLength: 0 }} animate={shipping || shipped ? { pathLength: 1 } : {}} transition={{ delay: 1.4, duration: 0.7 }} />
              <motion.circle r={11} fill="#c2410c" stroke="#fff7ec" strokeWidth={3}
                initial={{ cx: 84, cy: 84, opacity: 0 }}
                animate={shipping || shipped
                  ? { cx: [84, 300, 540, 688], cy: [84, 176, 176, 84], opacity: [0, 1, 1, 1] }
                  : { opacity: 0 }}
                transition={{ duration: 2.1, times: [0, 0.33, 0.66, 1], ease: "easeInOut" }} />
            </g>
          ) : null}
          {HS_SPOKES.map((sp) => (
            <g key={sp.id}>
              <circle cx={sp.x} cy={sp.y} r={22} fill="#fde8cf" stroke={sp.ship ? "#c2410c" : "#e2b075"} strokeWidth={sp.ship ? 2.4 : 1.6} />
              <text x={sp.x} y={sp.y - 30} textAnchor="middle" fontSize={10.5} fontWeight={800} fill="#8a5a06">{sp.id}</text>
            </g>
          ))}
          {HS_HUBS.map((h) => (
            <g key={h.id}>
              <motion.circle cx={h.x} cy={h.y} r={38} fill="none" stroke="#d97706" strokeWidth={1.6} strokeDasharray="5 4"
                initial={{ opacity: 0.5 }} animate={{ opacity: [0.35, 0.9, 0.35] }} transition={{ duration: 2.4, repeat: Infinity }} />
              <circle cx={h.x} cy={h.y} r={30} fill="#b45309" stroke="#92400e" strokeWidth={2} />
              <text x={h.x} y={h.y - 46} textAnchor="middle" fontSize={11.5} fontWeight={800} fill="#7c2d0a">{h.id} · HUB</text>
            </g>
          ))}
          <text x={380} y={302} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#a08050">
            8 cities · all-to-all = 28 direct routes · hub &amp; spoke = 10 routes (and Dijkstra only works the 1 hub-to-hub edge)
          </text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={ship} disabled={shipping}>
          <span className="inline-flex items-center gap-1.5"><Package className="h-3.5 w-3.5" aria-hidden /> Ship Jodhpur → Somnath</span>
        </OpBtn>
        <OpBtn onClick={reset}><span className="inline-flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset</span></OpBtn>
      </div>
      <p className="mt-3 min-h-[2.2rem] text-[.86rem] font-bold text-[#9a3412]" aria-live="polite">
        {shipping
          ? "→ Shipping: Jodhpur → Jaipur → Delhi → Somnath. Two spokes, two hubs, three hops."
          : shipped
            ? "→ Delivered via hubs. Dijkstra computed the Jaipur ⇄ Delhi hub distance once — every spoke city reuses it. Network complexity and cost both drop."
            : "→ Ready. A package from Jodhpur to Somnath never takes a Jodhpur→Somnath road — it hops Jodhpur → Jaipur → Delhi → Somnath through the hubs."}
      </p>
    </div>
  );
}

/* ============================================================
   EXPORTED — LECTURE 24 SECTION (light)
   ============================================================ */

export function AtbDijkstraSection() {
  return (
    <Section id="dijkstra">
      <SectionHead
        eyebrow="Lecture 24 · Network search algorithms"
        title={<><span className="grad-text">Network search</span> &amp; Dijkstra&apos;s algorithm</>}
        lead="Module 4 concludes by leaving the straight line: search now runs over networks of nodes and edges, where the target is not one element but the cheapest PATH between two. One Dutch professor, five steps — and every map app on your phone."
      />

      <ReadStep n="1" title="Search leaves the straight line" sub="From arrays and lists to nodes & edges" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Network className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · networks</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            So far, search lived inside <strong>linear structures</strong> — scan an array, walk a list.{" "}
            <strong style={{ color: "#c2410c" }}>Network search extends the idea to trees and graphs</strong>: a
            network is just <strong style={{ color: "#c2410c" }}>nodes (vertices) joined by edges</strong>. And here
            the goal changes character — we rarely ask &ldquo;where is element X?&rdquo;. We ask{" "}
            <strong>&ldquo;what is the best path from here to there?&rdquo;</strong>
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { icon: MapPin, t: "Node (vertex)", d: "One point in the network — a city, a router, a warehouse, a person." },
              { icon: RouteIcon, t: "Edge", d: "A connection between two nodes, often carrying a weight: km, minutes, rupees." },
              { icon: Navigation, t: "Path", d: "A chain of edges from one node to another — the usual target of a network search." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
                <c.icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
                <p className="mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#5c4a33]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <NetworkVocabLab />
      </Reveal>

      <ReadStep n="2" title="Every traversal is already a search" sub="Walking the structure = reading the data" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><ListTree className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · traversals as search</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            The tree traversals you already know are searches in disguise — each one{" "}
            <strong>reads the data while it walks</strong>. Pre-order visits <strong>root → left → right</strong>,
            in-order visits <strong>left → root → right</strong>, post-order visits{" "}
            <strong>left → right → root</strong>. Same tree, three reading orders.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
              <span className="chip"><Layers className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · DFS — the stack</span>
              <svg viewBox="0 0 340 150" className="mt-3 h-auto w-full" role="img" aria-label="Depth-first search dives down one branch to its deepest leaf before backtracking — visit order 1, 2, 4, then 3">
                <line x1="157" y1="36" x2="122" y2="76" stroke="#c2410c" strokeWidth="2.4" />
                <line x1="183" y1="36" x2="228" y2="76" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="98" y1="98" x2="64" y2="118" stroke="#c2410c" strokeWidth="2.4" />
                <line x1="250" y1="98" x2="286" y2="118" stroke="#dcc9a8" strokeWidth="1.6" />
                <circle cx="170" cy="26" r="17" fill="#f6ad3c" stroke="#c2410c" strokeWidth="2" />
                <text x="170" y="31" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7c2d0a">1</text>
                <circle cx="110" cy="88" r="17" fill="#f6ad3c" stroke="#c2410c" strokeWidth="2" />
                <text x="110" y="93" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7c2d0a">2</text>
                <circle cx="240" cy="88" r="17" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
                <text x="240" y="93" textAnchor="middle" fontSize="11" fontWeight="800" fill="#3e2c1d">3</text>
                <circle cx="50" cy="128" r="15" fill="#f6ad3c" stroke="#c2410c" strokeWidth="2" />
                <text x="50" y="133" textAnchor="middle" fontSize="11" fontWeight="800" fill="#7c2d0a">4</text>
                <circle cx="296" cy="128" r="15" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
                <text x="296" y="133" textAnchor="middle" fontSize="11" fontWeight="800" fill="#3e2c1d">5</text>
                <text x="330" y="26" fontSize="9.5" fontWeight="700" fill="#a08050">amber = visit order</text>
              </svg>
              <p className="mt-2 text-[.85rem] leading-relaxed text-[#5c4a33]">
                <strong>Depth-first search</strong> runs as far as possible along each branch before backtracking —
                powered by a <strong>stack</strong>. It maps the <strong>complete topology</strong>, which makes it
                the tool when <strong>new nodes or connections appear</strong> and the map must be re-drawn.
              </p>
            </div>
            <div className="rounded-2xl p-5" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
              <span className="chip"><Signal className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · BFS — the queue</span>
              <svg viewBox="0 0 340 150" className="mt-3 h-auto w-full" role="img" aria-label="Breadth-first search expands level by level by hop count — main servers, then intermediate servers, then clients">
                <line x1="158" y1="34" x2="92" y2="74" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="170" y1="34" x2="170" y2="74" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="182" y1="34" x2="248" y2="74" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="80" y1="94" x2="52" y2="114" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="106" y1="96" x2="122" y2="114" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="196" y1="96" x2="212" y2="114" stroke="#dcc9a8" strokeWidth="1.6" />
                <line x1="260" y1="94" x2="288" y2="114" stroke="#dcc9a8" strokeWidth="1.6" />
                <circle cx="170" cy="24" r="16" fill="#f6ad3c" stroke="#c2410c" strokeWidth="2" />
                <text x="170" y="28.5" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#7c2d0a">main</text>
                <circle cx="80" cy="86" r="14" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
                <text x="80" y="90" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#3e2c1d">inter</text>
                <circle cx="170" cy="86" r="14" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
                <text x="170" y="90" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#3e2c1d">inter</text>
                <circle cx="260" cy="86" r="14" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
                <text x="260" y="90" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#3e2c1d">inter</text>
                <circle cx="44" cy="126" r="10" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.4" />
                <circle cx="130" cy="126" r="10" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.4" />
                <circle cx="212" cy="126" r="10" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.4" />
                <circle cx="296" cy="126" r="10" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.4" />
                <text x="332" y="20" textAnchor="end" fontSize="9.5" fontWeight="700" fill="#a08050">hop 0</text>
                <text x="332" y="90" textAnchor="end" fontSize="9.5" fontWeight="700" fill="#a08050">hop 1</text>
                <text x="332" y="130" textAnchor="end" fontSize="9.5" fontWeight="700" fill="#a08050">hop 2</text>
              </svg>
              <p className="mt-2 text-[.85rem] leading-relaxed text-[#5c4a33]">
                <strong>Breadth-first search</strong> expands <strong>level by level by hop count</strong> — powered by
                a <strong>queue</strong>. It reveals the hierarchy of a network:{" "}
                <strong>client machines → intermediate servers → main servers</strong> — and tells you how many hops
                any node needs.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="The shortest-path problem" sub="Knowing the map is not the same as navigating it" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Navigation className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · targeted navigation</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Once you know a network&apos;s <strong>topology</strong>, exploration stops being the point — users need{" "}
            <strong>targeted navigation</strong> between a specific source and destination. And here the lecture drops
            the trap: <strong style={{ color: "#c2410c" }}>&ldquo;shortest&rdquo; does not mean shortest distance</strong>.
            The cost on an edge can be <strong>kilometres, time, toll money</strong> — or a combination of factors — and
            the right route depends on the requirement: avoid the tolls, or arrive faster despite a longer road.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <CostSwitchLab />
      </Reveal>

      <ReadStep n="4" title="Dijkstra — five steps to every shortest path" sub="The lecture's exact graph, step by step" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip"><Compass className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · the algorithm</span>
            <span className="chip">Edsger Dijkstra — pronounced &ldquo;DIK-struh&rdquo;</span>
          </div>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Named after the Dutch computer scientist <strong>Edsger Dijkstra</strong>, the algorithm finds the
            shortest path <strong>from one source node to ALL other nodes</strong> in a weighted graph — and it works{" "}
            <strong style={{ color: "#c2410c" }}>only with positive weights</strong>; negative edges are not permitted.
            Three assumptions run underneath it:
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              "Every edge has an associated cost (weight).",
              "All costs must be non-negative.",
              "Cost is whatever you are optimising — distance, time, tolls.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2 rounded-xl p-3.5" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#c2410c" }} aria-hidden />
                <span className="text-[.85rem] font-semibold leading-relaxed text-[#3e2c1d]">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <StepsFlow steps={[
              { label: "1 · Initialise", sub: "source = 0, all others = ∞" },
              { label: "2 · Select", sub: "smallest unvisited distance" },
              { label: "3 · Relax", sub: "shorter via current? update" },
              { label: "4 · Mark visited", sub: "distance is now final" },
              { label: "5 · Repeat", sub: "until all visited" },
            ]} />
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <DijkstraLab />
      </Reveal>
      <Reveal className="mt-5">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Compass, t: "One source → all nodes", d: "Dijkstra answers one question per run: how far is EVERY node from THIS starting point?", chip: "Lecture 24 · single source" },
            { icon: X, t: "Not all pairs", d: "It does not give the absolute shortest distance between every pair — that is a different algorithm's job.", chip: "Lecture 24 · one question per run" },
            { icon: RotateCcw, t: "Start matters", d: "Change the starting node and the whole answer sheet changes — results are relative to the source.", chip: "Lecture 24 · results vary by start" },
          ].map((c) => (
            <div key={c.t} className="card-warm h-full p-6">
              <c.icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
              <p className="mt-2 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#5c4a33]">{c.d}</p>
              <span className="chip mt-3">{c.chip}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="5" title="Hubs, spokes and the real world" sub="Where Dijkstra quietly earns its keep" />
      <Reveal className="mt-5">
        <HubSpokeLab />
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Globe className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · current use cases</span>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Navigation, t: "GPS navigation", d: "Route planning computes the cheapest path from you to the destination, live." },
              { icon: Package, t: "Food delivery", d: "Zomato & Swiggy allocate drivers by shortest reachable path to pickup and drop." },
              { icon: Antenna, t: "Telecommunications", d: "Network optimisation routes signals along the lowest-cost links." },
              { icon: Truck, t: "Courier & logistics", d: "Hub-and-spoke networks run on pre-computed hub-to-hub shortest distances." },
              { icon: Network, t: "Computer networks", d: "Routing protocols pick the least-cost path for every packet through the mesh." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
                <c.icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
                <p className="mt-2 text-[.88rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5c4a33]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <ReadStep n="6" title="The variant family — and how to choose" sub="A* and its five cousins" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Compass className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · A* — the GPS standard</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Plain Dijkstra is <strong>direction-blind</strong> — it expands in every direction equally. The{" "}
            <strong>A* algorithm</strong> adds a <strong>heuristic</strong>: actual cost so far{" "}
            <strong>plus a &ldquo;sense of direction&rdquo;</strong> — if the destination is south, paths heading south
            get priority. That makes it <strong>more optimal than Dijkstra in practice</strong>, which is why A* is the
            engine inside GPS navigation.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <span className="chip"><Layers className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · the variant table</span>
          </div>
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>What it does</th>
                  <th>Reach for it when…</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Uniform Cost Search</td>
                  <td>Expands the lowest-cost paths first</td>
                  <td>Constraints matter — e.g. avoid tolls, minimise spend</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Bidirectional Search</td>
                  <td>Searches from source AND destination simultaneously, meeting in the middle</td>
                  <td>Both endpoints are known and the space is huge</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Floyd–Warshall</td>
                  <td>Shortest paths between ALL pairs of nodes</td>
                  <td>You need the whole distance matrix upfront</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Bellman–Ford</td>
                  <td>Shortest paths tolerating NEGATIVE edge weights</td>
                  <td>Costs can drop below zero</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Prim&apos;s &amp; Kruskal&apos;s</td>
                  <td>Minimum spanning tree — connect every node at minimum total cost</td>
                  <td>You are BUILDING the network, not just travelling it</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Check className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · selection criteria</span>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { k: "Dijkstra", v: "one source → all destinations, positive weights" },
              { k: "Bellman–Ford", v: "negative edge weights exist" },
              { k: "Prim's / Kruskal's", v: "connect ALL nodes at minimum total cost" },
              { k: "Floyd–Warshall", v: "all-pairs shortest paths are required" },
              { k: "A*", v: "a directional heuristic is available" },
            ].map((r) => (
              <div key={r.k} className="flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5 sm:flex-row sm:items-baseline sm:gap-3">
                <span className="shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]">{r.k}</span>
                <span className="text-[.86rem] leading-relaxed text-[#241a0f]">{r.v}</span>
              </div>
            ))}
          </div>
          <Callout kind="insight" title="In practice you SELECT algorithms, you don't write them">
            Real GPS units, delivery platforms and telecom stacks ship{" "}
            <strong>variants or combinations of these algorithms, already implemented</strong>. The lecture&apos;s
            closing point: understanding <em>which algorithm fits which scenario</em> matters more than implementing
            one from scratch.
          </Callout>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 24 · Dijkstra" q="In the lecture's graph (A→B 4 · A→C 2 · C→B 1 · C→D 5 · B→D 3), what is the shortest distance from A to B?"
            options={["4 — the direct edge", "3 — via A→C→B", "2 — via A→C", "6 — via A→C→B→D"]} answer={1}
            explain="A→C = 2, then C→B = 1, so A→C→B = 3 — one less than the direct edge's 4. This is exactly the discovery the step-through makes in step 3: the settled distance for B is 3, and the direct edge is never used." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Lecture 24 · choosing algorithms" q="Your network contains some NEGATIVE edge weights. Which algorithm still works?"
            options={["Dijkstra's algorithm", "Bellman–Ford", "Prim's algorithm", "Kruskal's algorithm"]} answer={1}
            explain="Dijkstra's non-negative assumption breaks with negative edges. Bellman–Ford is built for exactly this: it handles both positive and negative weights. Prim's and Kruskal's are spanning-tree builders, not shortest-path solvers." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — network search" items={[
          { q: "Run Dijkstra by hand on the lecture graph starting from A: write the settled order, each node's final distance, and the path used for D.", hint: "Order: A(0) → C(2) → B(3) → D(6). D's path is A→C→B→D — the A→C→D route (7) gets beaten." },
          { q: "Re-run the same graph but start from D. Do A, B and C keep the same distances? What does this prove about Dijkstra's output?", hint: "Distances are relative to the chosen source — a different start produces a different answer sheet." },
          { q: "A delivery app must find the cheapest route for a driver who pays the tolls personally. Which variant fits, and why not plain Dijkstra with time weights?", hint: "Uniform Cost Search — expand lowest-COST paths first; the cost variable is rupees, not minutes." },
          { q: "A monitoring tool must map a data centre whose connections change weekly. Which traversal do you reach for — DFS or BFS — and what structure powers it?", hint: "DFS on a stack: as far as possible per branch, backtracking — ideal for re-discovering topology when new nodes or connections appear." },
        ]} />
      </Reveal>
      <Reveal className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><Waypoints className="h-3.5 w-3.5" aria-hidden /> Lecture 24 · key takeaways</span>
        </div>
        <Takeaways items={[
          <>Network search finds <strong>optimal paths between nodes</strong> in weighted graphs — the goal shifts from locating an element to routing between two.</>,
          <>Dijkstra&apos;s algorithm is the fundamental answer to the <strong>single-source shortest path</strong> problem: one start, distances to all others.</>,
          <>It works only on <strong>weighted graphs with non-negative weights</strong> — the cost is whatever you optimise: distance, time, tolls or a blend.</>,
          <>The two lecture discoveries: <strong>direct routes can lose to detours</strong> (A→C→B beats A→B; A→C→B→D beats A→C→D).</>,
          <>Different business scenarios need <strong>different variants</strong> — Bellman–Ford for negatives, Floyd–Warshall for all pairs, Prim&apos;s/Kruskal&apos;s to build cheap networks, A* when a sense of direction exists.</>,
          <>In practice, <strong>selecting the right algorithm beats implementing one</strong> — real systems already ship these as library variants and combinations.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 25 — machines
   ============================================================ */

/* ---------- flagship · BubbleLab: pass-by-pass trace of [10,5,8,4,3,2] ---------- */

type BubbleStep = {
  arr: number[];
  cmp: number | null;
  swapped: boolean;
  pass: number;
  cmpNo: number;
  cmpTotal: number;
  lockedFrom: number;
  settledValue: number | null;
  status: string;
};

function buildBubbleSteps(input: number[]): BubbleStep[] {
  const a = [...input];
  const n = a.length;
  const steps: BubbleStep[] = [{
    arr: [...a], cmp: null, swapped: false, pass: 0, cmpNo: 0, cmpTotal: n - 1,
    lockedFrom: n, settledValue: null,
    status: `The list as it arrives: [${a.join(", ")}]. Pass 1 will make ${n - 1} adjacent comparisons — watch the largest value sink.`,
  }];
  for (let pass = 1; pass <= n - 1; pass++) {
    const limit = n - pass;
    for (let i = 0; i < limit; i++) {
      const l = a[i];
      const r = a[i + 1];
      const swapped = l > r;
      if (swapped) { a[i] = r; a[i + 1] = l; }
      steps.push({
        arr: [...a], cmp: i, swapped, pass, cmpNo: i + 1, cmpTotal: limit,
        lockedFrom: i === limit - 1 ? n - pass : n - pass + 1, settledValue: null,
        status: `Pass ${pass} · comparison ${i + 1} of ${limit} — compare ${l} & ${r} → ${swapped ? `${l} > ${r}, SWAP` : `${l} < ${r}, no swap`} → [${a.join(", ")}]`,
      });
    }
    steps.push({
      arr: [...a], cmp: null, swapped: false, pass, cmpNo: 0, cmpTotal: limit,
      lockedFrom: n - pass, settledValue: a[n - pass],
      status: `Pass ${pass} complete — ${a[n - pass]} has bubbled into its FINAL position (position ${n - pass + 1}). ${n - pass > 1 ? `Pass ${pass + 1} needs only ${limit - 1} comparisons.` : "The list is sorted."}`,
    });
  }
  steps.push({
    arr: [...a], cmp: null, swapped: false, pass: n - 1, cmpNo: 0, cmpTotal: 1,
    lockedFrom: 0, settledValue: null,
    status: `SORTED — [${a.join(", ")}]. ${n - 1} passes, ${steps.filter((s) => s.cmp !== null).length} comparisons in total. Every element is settled.`,
  });
  return steps;
}

const BUBBLE_STEPS = buildBubbleSteps([10, 5, 8, 4, 3, 2]);

function BubbleLab() {
  const [i, setI] = useState(0);
  const s = BUBBLE_STEPS[i];
  const done = s.lockedFrom === 0;
  const passLedger = BUBBLE_STEPS.slice(0, i + 1).filter((st) => st.settledValue !== null);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <ArrowDownUp className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Bubble sort, pass by pass — [10, 5, 8, 4, 3, 2]</p>
        <span className="chip"><ArrowDownUp className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · flagship trace</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        The lecture&apos;s exact list. Each press of <strong>Next</strong> performs one adjacent comparison —
        larger values <strong>sink right</strong>, smaller ones <strong>float left</strong>, and after every pass the
        largest unsettled value locks into its final slot.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={() => setI((v) => Math.min(v + 1, BUBBLE_STEPS.length - 1))} disabled={done}>
          <span className="inline-flex items-center gap-1.5"><SkipForward className="h-3.5 w-3.5" aria-hidden /> Next comparison</span>
        </OpBtn>
        <OpBtn onClick={() => setI(0)}>
          <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset</span>
        </OpBtn>
        <span className="chip">{s.pass === 0 ? "before pass 1" : `pass ${s.pass}${s.cmpNo > 0 ? ` · comparison ${s.cmpNo}/${s.cmpTotal}` : " · complete"}`}</span>
      </div>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5">
        <div className="flex items-end justify-center gap-3 sm:gap-5" aria-hidden>
          {s.arr.map((v, idx) => {
            const locked = idx >= s.lockedFrom;
            const comparing = s.cmp === idx || s.cmp === idx - 1;
            const bg = locked ? "#dce8c8" : comparing ? "#f6ad3c" : "#fde8cf";
            const border = locked ? "#7c9a3e" : comparing ? "#c2410c" : "#e2b075";
            return (
              <motion.div
                layout
                key={`el-${v}`}
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
                className="flex w-12 flex-col items-center sm:w-14"
              >
                <span className="mb-1.5 font-mono-warm text-[.95rem] font-extrabold"
                  style={{ color: locked ? "#44621d" : comparing ? "#9a3412" : "#3e2c1d" }}>{v}</span>
                <motion.div
                  className="w-full rounded-t-lg"
                  style={{ backgroundColor: bg, borderColor: border, borderStyle: "solid", borderWidth: 2, borderBottomWidth: 0 }}
                  initial={false}
                  animate={{ height: 16 + v * 10.5, backgroundColor: bg, borderColor: border }}
                  transition={{ duration: 0.25 }}
                />
                <span className="mt-1 text-[.62rem] font-bold text-[#a08050]">{locked ? "settled" : `idx ${idx}`}</span>
              </motion.div>
            );
          })}
        </div>
        <p className="mt-3 text-center text-[.78rem] font-semibold text-[#a08050]">
          locked cells (olive) are in their final position — never touched again
        </p>
      </div>
      {passLedger.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {passLedger.map((st, k) => (
            <motion.span key={k} initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="chip" style={{ background: "#eef4dd", borderColor: "#c4d6a0", color: "#44621d" }}>
              <Check className="h-3.5 w-3.5" aria-hidden /> Pass {st.pass} ✓ {st.cmpTotal} comparisons · {st.settledValue} settled
            </motion.span>
          ))}
        </div>
      ) : null}
      <p className="mt-4 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]" aria-live="polite">
        {s.status}
      </p>
    </div>
  );
}

/* ---------- machine · NameSortLab: non-numerical data ---------- */

const NAMES = ["Mohan", "Ram", "Sham", "Lakshman", "Arjun", "Bheem"];
const NAMES_SORTED = [...NAMES].sort();

function NameSortLab() {
  const [sorted, setSorted] = useState(false);
  const arr = sorted ? NAMES_SORTED : NAMES;
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <GraduationCap className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Sorting words — not just numbers</p>
        <span className="chip"><GraduationCap className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · A &lt; Z</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
        Bubble sort works on <strong>any comparable data</strong>. Here is the lecture&apos;s name list — the compare
        step now checks capital letters alphabetically (<strong>A &lt; Z</strong>), and the same swap logic takes over.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={() => setSorted(true)} disabled={sorted}>
          <span className="inline-flex items-center gap-1.5"><ArrowDownUp className="h-3.5 w-3.5" aria-hidden /> Sort A → Z</span>
        </OpBtn>
        <OpBtn onClick={() => setSorted(false)}>
          <span className="inline-flex items-center gap-1.5"><RotateCcw className="h-3.5 w-3.5" aria-hidden /> Reset</span>
        </OpBtn>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5">
        {arr.map((nm) => (
          <motion.div
            layout
            key={nm}
            transition={{ type: "spring", stiffness: 420, damping: 30 }}
            className="rounded-xl px-4 py-2.5 font-mono-warm text-[.9rem] font-extrabold"
            style={{
              background: sorted ? "#dce8c8" : "#fde8cf",
              border: `1.6px solid ${sorted ? "#7c9a3e" : "#e2b075"}`,
              color: sorted ? "#44621d" : "#3e2c1d",
            }}
          >
            {nm}
          </motion.div>
        ))}
      </div>
      <p className="mt-3 min-h-[1.6rem] text-[.86rem] font-bold text-[#9a3412]" aria-live="polite">
        {sorted
          ? "→ [Arjun, Bheem, Lakshman, Mohan, Ram, Sham] — same compare-and-swap logic, the values just happen to be names."
          : "→ [Mohan, Ram, Sham, Lakshman, Arjun, Bheem] as given. Press Sort and watch the same adjacent swaps apply to strings."}
      </p>
    </div>
  );
}

/* ---------- machine · ComplexityLab: the price of O(n²) ---------- */

const N_PRESETS = [6, 10, 100, 1000, 10000];

function ComplexityLab() {
  const [n, setN] = useState(6);
  const maxCmp = 10000 * 9999 / 2;
  const cmp = (n * (n - 1)) / 2;
  const verdicts: Record<number, string> = {
    6: "15 comparisons — a handful. This is bubble sort's comfort zone: a lecture example, a classroom trace.",
    10: "45 comparisons — still trivial. You could bubble-sort a hand of cards this way forever.",
    100: "4,950 comparisons — noticeable, tolerable. A small catalogue could survive it.",
    1000: "499,500 comparisons — half a million. Users start feeling the wait.",
    10000: "49,995,000 comparisons — roughly 50 million; the lecture rounds the O(n²) growth to ~100 MILLION operations. Unusable for real datasets.",
  };
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <BarChart3 className="h-6 w-6" style={{ color: "#c2410c" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Grow n — watch n(n−1)/2 explode</p>
        <span className="chip"><BarChart3 className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · quadratic blow-up</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {N_PRESETS.map((p) => (
          <OpBtn key={p} tone={n === p ? "warm" : "ghost"} onClick={() => setN(p)}>
            {p.toLocaleString("en-IN")} elements
          </OpBtn>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-[#f3e2c8] bg-[#fffaf1] p-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-mono-warm text-[.8rem] font-bold text-[#8a5a06]">n(n−1)/2 =</span>
          <motion.span key={n} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="font-mono-warm text-3xl font-extrabold text-[#c2410c]">
            {cmp.toLocaleString("en-IN")}
          </motion.span>
          <span className="text-[.8rem] font-semibold text-[#8c7a5c]">comparisons</span>
        </div>
        <div className="mt-4 h-7 w-full overflow-hidden rounded-full bg-[#f6ead2]">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg,#f59e0b,#c2410c)" }}
            animate={{ width: `${Math.max(3, Math.sqrt(cmp / maxCmp) * 100)}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
          />
        </div>
        <p className="mt-1.5 text-[.68rem] font-bold uppercase tracking-[.14em] text-[#a08050]">
          bar on a square-root scale — a linear bar could not fit 10,000 on this screen
        </p>
      </div>
      <p className="mt-3 min-h-[2.6rem] text-[.88rem] font-bold leading-relaxed text-[#9a3412]" aria-live="polite">
        {verdicts[n]}
      </p>
    </div>
  );
}

/* ============================================================
   EXPORTED — LECTURE 25 SECTION (light)
   ============================================================ */

export function AtbSortingSection() {
  return (
    <Section id="sorting">
      <SectionHead
        eyebrow="Lecture 25 · Sorting & bubble sort"
        title={<><span className="grad-text">Sorting</span> &amp; bubble sort</>}
        lead="The final module opens with the step that makes efficient searching possible: arranging elements by a parameter. Bubble sort is the simplest sorter ever devised — and the clearest demonstration that simplicity has a price."
      />

      <ReadStep n="1" title="What is sorting?" sub="One word, many parameters" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><ArrowDownUp className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · definition</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            <strong style={{ color: "#c2410c" }}>Sorting is arranging elements in a specific order</strong> —
            ascending, descending, or by any parameter you choose: <strong>numerical value, alphabetical order,
            relevance, price, quality</strong>. It sounds mundane, but hold one fact tight:{" "}
            <strong>most search algorithms assume the data is already sorted</strong> — which makes sorting the{" "}
            <strong>prerequisite for efficient searching</strong>.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              { icon: ShoppingCart, t: "E-commerce", d: "Products sorted by relevance, price, quality — every parameter is a different sort.", chip: "Lecture 25 · e-commerce" },
              { icon: Plane, t: "Flight booking", d: "Results ranked by price and travel time; the cheapest flight and the fastest flight rarely coincide.", chip: "Lecture 25 · travel" },
              { icon: GraduationCap, t: "Academic reporting", d: "Marks sorted highest → lowest so grades can be assigned by position.", chip: "Lecture 25 · academics" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
                <c.icon className="h-5 w-5" style={{ color: "#c2410c" }} aria-hidden />
                <p className="mt-2 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#5c4a33]">{c.d}</p>
                <span className="chip mt-3">{c.chip}</span>
              </div>
            ))}
          </div>
          <Callout kind="why" title="Multiple parameters, better decisions">
            Platforms never stop at one sort. Sorting the same data <strong>several ways</strong> — by price, then by
            rating, then by delivery speed — is what turns a raw list into a decision tool. The parameter{" "}
            <em>is</em> the user experience.
          </Callout>
        </div>
      </Reveal>

      <ReadStep n="2" title="Bubble sort — the rising bubble" sub="Light values float, heavy values sink" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><TrendingUp className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · the name</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            The name comes from <strong>air bubbles rising in water</strong>: the lighter (smaller) values{" "}
            <strong>drift toward the front</strong> while heavier (larger) values <strong>sink to the end</strong>.
            The machinery is just two moves on loop: <strong>compare adjacent elements → swap if out of order</strong>.
          </p>
          <p className="mt-3 max-w-4xl text-[.93rem] font-bold text-[#9a3412]">
            The classic method — largest element to the end, in six rules:
          </p>
          <div className="mt-3 grid gap-2.5 md:grid-cols-2">
            {[
              "Start from the first element and compare it with the next.",
              "If the first is larger, swap their positions.",
              "Move to the next pair and repeat along the row.",
              "After each pass, the largest unsorted element lands in its final position at the end.",
              "Repeat — one fewer comparison in each subsequent pass.",
              "Total passes needed equals the number of elements.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-xl p-3.5" style={{ background: "#fbf3e6", border: "1px solid #efdec2" }}>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white" aria-hidden>{i + 1}</span>
                <span className="text-[.86rem] font-semibold leading-relaxed text-[#3e2c1d]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <BubbleLab />
      </Reveal>

      <ReadStep n="3" title="Two directions, one result" sub="…and sorting words, not just numbers" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <span className="chip"><FlipHorizontal2 className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · alternative method</span>
            <p className="mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]">Smallest element to the front</p>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#5c4a33]">
              The mirror variant: <strong>start from the last element</strong> and compare it with the{" "}
              <strong>previous</strong> one, bubbling the <strong>minimum leftward</strong>. After each pass, the
              smallest unsorted element lands in its correct position <strong>at the beginning</strong>. Same
              result, opposite direction — the lecture calls it the alternative method.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3.5" style={{ background: "#fde4c3", border: "1px solid #eec088" }}>
                <p className="text-[.78rem] font-extrabold text-[#9a3412]">Classic</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#7c4a12]">largest sinks to the END each pass</p>
              </div>
              <div className="rounded-xl p-3.5" style={{ background: "#eef4dd", border: "1px solid #c4d6a0" }}>
                <p className="text-[.78rem] font-extrabold text-[#44621d]">Alternative</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5c7a24]">smallest floats to the FRONT each pass</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <NameSortLab />
        </Reveal>
      </div>

      <ReadStep n="4" title="The price of simplicity — O(n²)" sub="From 15 comparisons to 100 million" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><BarChart3 className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · the derivation</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            Count the work. Pass 1 makes <strong>n</strong> comparisons, pass 2 makes <strong>n−1</strong>, pass 3
            makes <strong>n−2</strong> … the final pass makes <strong>1</strong>. Add them up:
          </p>
          <div className="mt-4">
            <StepsFlow steps={[
              { label: "Sum the passes", sub: "n + (n−1) + … + 1" },
              { label: "Closed form", sub: "n(n−1)/2" },
              { label: "Expand", sub: "½n² − ½n" },
              { label: "Big O rules", sub: "drop −½n · drop the ½" },
              { label: "Verdict", sub: "O(n²) — quadratic" },
            ]} />
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl p-3.5" style={{ background: "#fde4c3", border: "1px solid #eec088" }}>
              <p className="text-[.8rem] font-extrabold text-[#9a3412]">Big O rule 1 · discard lower-order terms</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#7c4a12]">−½n is negligible next to ½n² once n grows.</p>
            </div>
            <div className="rounded-xl p-3.5" style={{ background: "#fde4c3", border: "1px solid #eec088" }}>
              <p className="text-[.8rem] font-extrabold text-[#9a3412]">Big O rule 2 · remove numerical constants</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#7c4a12]">The ½ goes too — ½n² is still O(n²).</p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <ComplexityLab />
      </Reveal>
      <Reveal className="mt-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-warm p-6">
            <span className="chip"><Check className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · when it&apos;s fine</span>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
              <strong>Small lists — 5 or 6 elements — are manageable</strong>: about 25 operations. For a classroom
              trace or a tiny array, bubble sort is honest, obvious, and perfectly adequate.
            </p>
          </div>
          <div className="card-warm p-6">
            <span className="chip"><AlertTriangle className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · when it&apos;s fatal</span>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
              <strong>10,000 elements ≈ 100 million comparisons</strong> — despite its logical simplicity, bubble
              sort is <strong>unsuitable for large datasets or business applications</strong>. The next lectures
              exist to fix exactly this.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 25 · bubble sort" q="After Pass 1 of bubble sort on [10, 5, 8, 4, 3, 2], where does the 10 end up?"
            options={["At the front — it floated left", "In its final position at the end", "Still at index 0", "In the middle of the list"]} answer={1}
            explain="Each pass sinks the largest unsorted value all the way to the end: 10 won all five comparisons of pass 1 and locked into the last slot — which is why pass 2 needs only four comparisons." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Lecture 25 · complexity" q="The exact comparison count is n(n−1)/2 = ½n² − ½n. Why do we report O(n²)?"
            options={["Because swaps count double", "Because Big O discards lower-order terms and constants", "Because passes are counted twice", "Because n(n−1)/2 simplifies to n² exactly"]} answer={1}
            explain="Two Big O rules: the −½n term is negligible next to n² (drop lower orders), and the ½ constant is dropped too. ½n² − ½n collapses to O(n²) — quadratic growth." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — bubble sort" items={[
          { q: "Trace Pass 2 of [10, 5, 8, 4, 3, 2] by hand: list every comparison, every swap, and the final array with two settled values.", hint: "Pass 2 makes 4 comparisons: 5,8 stay · 8,4 swap · 8,3 swap · 8,2 swap → [5, 4, 3, 2, 8, 10]." },
          { q: "Sort [Mohan, Ram, Sham, Lakshman, Arjun, Bheem] alphabetically using bubble sort's compare-and-swap. How many passes does it take?", hint: "Capital letters compare A < Z — same six rules, no arithmetic needed." },
          { q: "Compute the total comparisons for n = 6 and n = 20 using n(n−1)/2. Then explain in one sentence why the second number should worry you.", hint: "15 vs 190 — twenty elements already cost 12× more work than six." },
          { q: "Write the six rules of the ALTERNATIVE method (smallest to the front). Which end of the row do you walk from, and which end locks first?", hint: "Start from the last element, compare with the previous one, bubble the minimum left; position 1 locks first." },
        ]} />
      </Reveal>
      <Reveal className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><ArrowDownUp className="h-3.5 w-3.5" aria-hidden /> Lecture 25 · key takeaways</span>
        </div>
        <Takeaways items={[
          <>Sorting arranges data by a <strong>parameter of your choice</strong> — numerical, alphabetical, relevance, price — and multiple parameters mean multiple useful orders.</>,
          <>Most search algorithms <strong>assume sorted data</strong> — sorting is the prerequisite for efficient searching.</>,
          <>Bubble sort orders data by <strong>successive adjacent comparisons and swaps</strong> — light values float forward, heavy values sink.</>,
          <>Each pass moves <strong>one element into its final position</strong>; passes needed equal the list size, with one fewer comparison per pass.</>,
          <>Time complexity is <strong>O(n²)</strong>: n + (n−1) + … + 1 = n(n−1)/2 → fine for 5–6 elements, unusable at 10,000 (~100 million comparisons).</>,
          <>The next algorithms in the module exist to <strong>fix this efficiency problem</strong> for large datasets.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
