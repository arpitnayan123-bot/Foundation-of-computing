"use client";

/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 2/2 — Module 2 · Linear data structures
   Part 4: Stacks (light) · Queues (light) · Queue types (dark)
   ============================================================ */

import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle, AppWindow, ArrowLeft, ArrowRight, Cpu, Film, Gamepad2, Keyboard, Layers,
  ListMusic, MessageSquare, Plane, Popcorn, Repeat, RotateCcw, Siren, TrafficCone, TrainFront,
  Undo2, Wifi,
} from "lucide-react";
import {
  Callout, CodeBlock, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways,
} from "@/components/notes/ui";

/* ---------- local helpers ---------- */

function OpBtn({ onClick, children, tone = "ghost" }: {
  onClick: () => void; children: React.ReactNode; tone?: "warm" | "ghost";
}) {
  const style: React.CSSProperties =
    tone === "warm"
      ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
      : { background: "#fffdf9", color: "#7c4a12", border: "1px solid #e5c79d" };
  return (
    <button type="button" onClick={onClick} style={style} className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
      {children}
    </button>
  );
}

function LogLine({ log }: { log: string }) {
  return (
    <p className="mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold text-[#a0410a]" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }} aria-live="polite">
      {log}
    </p>
  );
}

function WarnCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-warm h-full p-6" style={{ borderColor: "#e6a08c", background: "#fdf3ef" }}>
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-5 w-5" style={{ color: "#be4a4a" }} />
        <p className="font-extrabold text-[#8c2f2f]">{title}</p>
      </div>
      <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">{children}</p>
    </div>
  );
}

/* ============================================================
   STACKS — widget + SVG
   ============================================================ */

const STACK_CAP = 6;
const STACK_SEQ = [64, 32, 53, 66, 54];
type Piece = { id: number; v: number };

function StackWidget() {
  const [items, setItems] = useState<Piece[]>(STACK_SEQ.map((v, i) => ({ id: i + 1, v })));
  const [log, setLog] = useState("Push 64 → 32 → 53 → 66 → 54. Top = 54.");
  const nid = useRef(STACK_SEQ.length);
  const nseq = useRef(0);

  function push() {
    if (items.length >= STACK_CAP) return setLog("Push() ✗ STACK OVERFLOW — the stack is FULL (6 of 6).");
    const v = STACK_SEQ[nseq.current % STACK_SEQ.length];
    nseq.current += 1; nid.current += 1;
    setItems((xs) => [...xs, { id: nid.current, v }]);
    setLog(`Push(${v}) → ${v} lands ON TOP. Top = ${v}.`);
  }
  function pop() {
    if (items.length === 0) return setLog("Pop() ✗ STACK UNDERFLOW — the stack is EMPTY, nothing to remove.");
    const t = items[items.length - 1];
    setItems((xs) => xs.slice(0, -1));
    setLog(`Pop() → ${t.v} lifts off. ${items.length - 1 > 0 ? `New top = ${items[items.length - 2].v}.` : "The stack is now empty."}`);
  }
  const peek = () => setLog(items.length ? `Peek() → ${items[items.length - 1].v} (reads the top, removes nothing)` : "Peek() → the stack is empty.");
  const size = () => setLog(`Size() → ${items.length}`);
  const reset = () => { setItems(STACK_SEQ.map((v, i) => ({ id: i + 1, v }))); nseq.current = 0; setLog("Reset — Push 64 → 32 → 53 → 66 → 54. Top = 54."); };

  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Layers className="h-6 w-6" style={{ color: "#c2410c" }} />
        <h3 className="text-xl font-bold md:text-2xl">Last-In, First-Out — try the machine</h3>
        <span className="chip">like a pile of plates — last placed, first picked</span>
      </div>
      <div className="mt-5 grid gap-6 lg:grid-cols-[auto,1fr]">
        <div>
          <div className="relative">
            <div className="flex flex-col-reverse gap-1.5" aria-hidden>
              {Array.from({ length: STACK_CAP }).map((_, i) => <div key={i} className="h-11 w-44 rounded-xl border-2 border-dashed sm:w-52" style={{ borderColor: "#e8d5b5" }} />)}
            </div>
            <div className="absolute inset-0 flex flex-col-reverse gap-1.5">
              <AnimatePresence initial={false}>
                {items.map((p, i) => (
                  <motion.div key={p.id} initial={{ y: -44, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -46, opacity: 0, scale: 0.92 }} transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    className="flex h-11 w-44 items-center justify-center rounded-xl text-[1.05rem] font-extrabold text-white shadow-md sm:w-52"
                    style={{ background: i === items.length - 1 ? "linear-gradient(135deg,#ea580c,#c2410c)" : "linear-gradient(135deg,#e8a13c,#d97706)" }}>
                    {p.v}
                    {i === items.length - 1 ? <span className="ml-2 rounded-md bg-black/25 px-1.5 py-0.5 text-[.62rem] font-bold">top</span> : null}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <p className="mt-2 text-center text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a5a06]">↑ Push enters here · Pop leaves from here ↑</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <OpBtn tone="warm" onClick={push}>Push()</OpBtn>
            <OpBtn tone="warm" onClick={pop}>Pop()</OpBtn>
            <OpBtn onClick={peek}>Peek()</OpBtn>
            <OpBtn onClick={size}>Size()</OpBtn>
            <OpBtn onClick={reset}><RotateCcw className="mr-1 inline h-3.5 w-3.5" />reset</OpBtn>
          </div>
          <LogLine log={log} />
          <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
            The lecture&apos;s run: push <span className="font-mono-warm font-bold">64, 32, 53, 66, 54</span> → top
            is <strong>54</strong>. <span className="font-mono-warm font-bold">Pop()</span> → 54 leaves,{" "}
            <span className="font-mono-warm font-bold">Pop()</span> → 66 leaves,{" "}
            <span className="font-mono-warm font-bold">Peek()</span> → <strong>53</strong>,{" "}
            <span className="font-mono-warm font-bold">Size()</span> → <strong>3</strong>. The last value in
            is always the first value out — <strong>LIFO</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

function StackOfStacksSvg() {
  return (
    <svg viewBox="0 0 560 252" className="h-auto w-full" role="img" aria-label="A main stack of browser windows where each window is itself a stack of tabs">
      <rect x="20" y="34" width="520" height="190" rx="14" fill="none" stroke="#c99a5b" strokeWidth="2" strokeDasharray="7 5" />
      <text x="30" y="22" fontSize="11.5" fontWeight="800" fill="#8a5a06">MAIN STACK — each element is a WINDOW</text>
      {["A", "B", "C"].map((w, i) => (
        <g key={w} transform={`translate(${45 + i * 180}, 56)`}>
          <rect x="0" y="0" width="130" height="148" rx="10" fill="#fffaf1" stroke="#e2b075" strokeWidth="1.6" />
          <rect x="8" y="8" width="114" height="26" rx="7" fill="#b45309" />
          <text x="65" y="25" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff7ec">Window {w}</text>
          {[0, 1, 2].map((t) => (
            <g key={t}>
              <rect x="14" y={44 + t * 32} width="102" height="26" rx="7" fill={t === 2 ? "#f6ad3c" : "#fde8cf"} stroke="#e2b075" strokeWidth="1.3" />
              <text x="65" y={61 + t * 32} textAnchor="middle" fontSize="11" fontWeight="700" fill={t === 2 ? "#7c2d0a" : "#7c4a12"}>{t === 2 ? "Tab — top" : `Tab ${t + 1}`}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="280" y="242" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#6f5438">each window&apos;s element is itself a stack — tabs / history states pile up LIFO, window by window</text>
    </svg>
  );
}

/* ============================================================
   QUEUES — widget + SVGs
   ============================================================ */

const Q_CAP = 6;
const Q_SEQ = [64, 32, 53, 66, 54];
type QPiece = { id: number; v: number };

function QueueWidget() {
  const [items, setItems] = useState<QPiece[]>(Q_SEQ.map((v, i) => ({ id: i + 1, v })));
  const [log, setLog] = useState("Enqueue 64 → 32 → 53 → 66 → 54. Front = 64, Rear = 54.");
  const nid = useRef(Q_SEQ.length);
  const nseq = useRef(0);

  function enqueue() {
    if (items.length >= Q_CAP) return setLog("Enqueue() ✗ QUEUE OVERFLOW — the queue is FULL (6 of 6).");
    const v = Q_SEQ[nseq.current % Q_SEQ.length];
    nseq.current += 1; nid.current += 1;
    setItems((xs) => [...xs, { id: nid.current, v }]);
    setLog(`Enqueue(${v}) → ${v} joins at the REAR.`);
  }
  function dequeue() {
    if (items.length === 0) return setLog("Dequeue() ✗ QUEUE UNDERFLOW — the queue is EMPTY, nobody to serve.");
    const f = items[0];
    setItems((xs) => xs.slice(1));
    setLog(`Dequeue() → ${f.v} leaves from the FRONT. ${items.length - 1 > 0 ? `New front = ${items[1].v}.` : "The queue is now empty."}`);
  }
  const peek = () => setLog(items.length ? `Peek()/Front() → ${items[0].v} · Rear() → ${items[items.length - 1].v}` : "Peek() → the queue is empty.");
  const size = () => setLog(`Size() → ${items.length}`);
  const reset = () => { setItems(Q_SEQ.map((v, i) => ({ id: i + 1, v }))); nseq.current = 0; setLog("Reset — Enqueue 64 → 32 → 53 → 66 → 54. Front = 64, Rear = 54."); };

  const front = items[0]?.v, rear = items[items.length - 1]?.v;
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <ListMusic className="h-6 w-6" style={{ color: "#c2410c" }} />
        <h3 className="text-xl font-bold md:text-2xl">Front and rear — try the line</h3>
        <span className="chip">FCFS · First-Come-First-Served = FIFO</span>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3 text-[.78rem] font-extrabold text-[#8a5a06]">
        <span className="flex items-center gap-1"><ArrowLeft className="h-4 w-4" style={{ color: "#c2410c" }} aria-hidden /> Front — Dequeue leaves here</span>
        <span className="flex items-center gap-1">Rear — Enqueue enters here <ArrowRight className="h-4 w-4" style={{ color: "#c2410c" }} aria-hidden /></span>
        <span className="rounded-full bg-[#fde8cf] px-2.5 py-1 font-mono-warm text-[.74rem] font-bold text-[#7c4a12]">Front → {front ?? "—"} · Rear → {rear ?? "—"} · Size {items.length}</span>
      </div>
      <div className="relative mt-3">
        <div className="grid grid-cols-6 gap-2" aria-hidden>
          {Array.from({ length: Q_CAP }).map((_, i) => <div key={i} className="h-12 rounded-xl border-2 border-dashed" style={{ borderColor: "#e8d5b5" }} />)}
        </div>
        <div className="absolute inset-0 grid grid-cols-6 gap-2">
          <AnimatePresence initial={false}>
            {items.map((p, i) => (
              <motion.div key={p.id} initial={{ x: 46, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -46, opacity: 0, scale: 0.92 }} transition={{ type: "spring", stiffness: 380, damping: 28 }}
                className="flex h-12 items-center justify-center rounded-xl text-[1rem] font-extrabold text-white shadow-md"
                style={{ background: i === 0 ? "linear-gradient(135deg,#ea580c,#c2410c)" : "linear-gradient(135deg,#e8a13c,#d97706)", gridColumnStart: i + 1 }}>
                {p.v}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <OpBtn tone="warm" onClick={enqueue}>Enqueue()</OpBtn>
        <OpBtn tone="warm" onClick={dequeue}>Dequeue()</OpBtn>
        <OpBtn onClick={peek}>Peek / Front · Rear</OpBtn>
        <OpBtn onClick={size}>Size()</OpBtn>
        <OpBtn onClick={reset}><RotateCcw className="mr-1 inline h-3.5 w-3.5" />reset</OpBtn>
      </div>
      <LogLine log={log} />
      <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
        The lecture&apos;s run: Enqueue <span className="font-mono-warm font-bold">64, 32, 53, 66, 54</span> fills
        left → right. <span className="font-mono-warm font-bold">Dequeue()</span> removes <strong>64</strong> (the
        front — it arrived first), again removes <strong>32</strong>. Then{" "}
        <span className="font-mono-warm font-bold">Peek</span> → <strong>53</strong>, Rear → <strong>54</strong>,
        Size → <strong>3</strong>. Your <strong>order doesn&apos;t matter — your PLACE does</strong>.
      </p>
    </div>
  );
}

/* ---------- queue-type SVGs (dark section) ---------- */

function LinearLimitSvg() {
  return (
    <svg viewBox="0 0 620 140" className="h-auto w-full" role="img" aria-label="Linear queue: front spaces are free but the rear pointer is stuck at the last cell, so no insert is possible">
      <defs><marker id="lq-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker></defs>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={30 + i * 92} y="46" width="80" height="52" rx="9" fill="none" stroke="#c99a5b" strokeWidth="1.8" strokeDasharray="6 4" />
          <text x={30 + i * 92 + 40} y="77" textAnchor="middle" fontSize="11" fontWeight="700" fill="#b99a75">free</text>
        </g>
      ))}
      {[66, 54, 71].map((v, i) => (
        <g key={v}>
          <rect x={306 + i * 92} y="46" width="80" height="52" rx="9" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.8" />
          <text x={306 + i * 92 + 40} y="78" textAnchor="middle" fontSize="15" fontWeight="800" fill="#3e2c1d">{v}</text>
        </g>
      ))}
      <line x1="70" y1="24" x2="70" y2="40" stroke="#c2410c" strokeWidth="2" markerEnd="url(#lq-ah)" />
      <text x="70" y="16" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#c2410c">Front</text>
      <line x1="570" y1="24" x2="570" y2="40" stroke="#c2410c" strokeWidth="2" markerEnd="url(#lq-ah)" />
      <text x="600" y="16" textAnchor="end" fontSize="11.5" fontWeight="800" fill="#c2410c">Rear — stuck at the end</text>
      <text x="310" y="126" fontSize="11.5" fontWeight="700" fill="#b99a75">enqueue? ✗ — rear cannot move back, even though 3 spaces are free</text>
    </svg>
  );
}

function CircularRingSvg() {
  const c = { x: 170, y: 132, r: 85 };
  const slots = [-90, -30, 30, 90, 150, 210].map((a) => {
    const rad = (a * Math.PI) / 180;
    return { cx: c.x + c.r * Math.cos(rad), cy: c.y + c.r * Math.sin(rad) };
  });
  const vals: (number | null)[] = [53, 66, 54, 71, null, null];
  return (
    <svg viewBox="0 0 340 252" className="h-auto w-full" role="img" aria-label="Circular queue ring of six positions with front and rear markers and an arrow wrapping from the last position back to the first">
      <defs><marker id="cq-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker></defs>
      <circle cx={c.x} cy={c.y} r={c.r} fill="none" stroke="#8a6a45" strokeWidth="1.6" strokeDasharray="4 5" />
      {slots.map((s, i) => {
        const v = vals[i];
        return (
          <g key={i}>
            <rect x={s.cx - 29} y={s.cy - 15} width="58" height="30" rx="8" fill={v === null ? "none" : "#fde8cf"} stroke={v === null ? "#8a6a45" : "#c99a5b"} strokeWidth="1.6" strokeDasharray={v === null ? "5 4" : undefined} />
            {v !== null ? <text x={s.cx} y={s.cy + 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="#3e2c1d">{v}</text> : null}
          </g>
        );
      })}
      <text x={slots[0].cx} y={slots[0].cy - 24} textAnchor="middle" fontSize="11" fontWeight="800" fill="#f5c889">Front</text>
      <text x={slots[3].cx} y={slots[3].cy + 34} textAnchor="middle" fontSize="11" fontWeight="800" fill="#f5c889">Rear</text>
      <path d="M 96 96 C 66 48, 112 16, 156 40" fill="none" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#cq-ah)" />
      <text x="118" y="14" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#e0a45e">wraps to first</text>
      <text x={c.x} y={c.y + 4} textAnchor="middle" fontSize="11" fontWeight="800" fill="#cbb392">circular</text>
    </svg>
  );
}

function PriorityChipsSvg() {
  const chips = [
    { t: "A", p: 8, from: 20, to: 20, d: 0 },
    { t: "S", p: 7, from: 520, to: 180, d: 0.55 },
    { t: "T", p: 6, from: 180, to: 340, d: 0.35 },
    { t: "B", p: 3, from: 340, to: 500, d: 0.45 },
  ];
  return (
    <svg viewBox="0 0 660 118" className="h-auto w-full" role="img" aria-label="Priority queue: the new item S with priority 7 slots in before T with priority 6, after A with priority 8">
      {chips.map((ch) => (
        <motion.g key={ch.t} initial={{ x: ch.from, opacity: ch.t === "S" ? 0.35 : 1 }} whileInView={{ x: ch.to, opacity: 1 }} viewport={{ once: true }} transition={{ delay: ch.d, duration: 0.6, ease: "easeInOut" }}>
          <rect x="0" y="36" width="140" height="52" rx="12" fill={ch.t === "S" ? "#f6ad3c" : "#fde8cf"} stroke={ch.t === "S" ? "#c2410c" : "#c99a5b"} strokeWidth={ch.t === "S" ? 2.4 : 1.6} />
          <text x="44" y="69" textAnchor="middle" fontSize="20" fontWeight="800" fill={ch.t === "S" ? "#7c2d0a" : "#3e2c1d"}>{ch.t}</text>
          <circle cx="102" cy="62" r="15" fill="#c2410c" />
          <text x="102" y="67" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">{ch.p}</text>
        </motion.g>
      ))}
      <text x="20" y="22" fontSize="11.5" fontWeight="700" fill="#cbb392">new arrival (S, 7): beats 6 and 3, yields to 8 → slots in before (T, 6)</text>
      <text x="540" y="108" fontSize="10.5" fontWeight="700" fill="#b99a75">equal priorities? serve FIFO</text>
    </svg>
  );
}

function DequeSvg() {
  return (
    <svg viewBox="0 0 620 128" className="h-auto w-full" role="img" aria-label="Doubly ended queue with insert and delete arrows at both ends">
      <defs><marker id="dq-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker></defs>
      {[10, 20, 30, 40].map((v, i) => (
        <g key={v}>
          <rect x={180 + i * 70} y="38" width="60" height="52" rx="9" fill="#fde8cf" stroke="#c99a5b" strokeWidth="1.7" />
          <text x={180 + i * 70 + 30} y="70" textAnchor="middle" fontSize="15" fontWeight="800" fill="#3e2c1d">{v}</text>
        </g>
      ))}
      <line x1="70" y1="56" x2="172" y2="56" stroke="#f5c889" strokeWidth="2" markerEnd="url(#dq-ah)" />
      <text x="66" y="44" fontSize="11" fontWeight="800" fill="#f5c889">Insert Front</text>
      <line x1="172" y1="94" x2="70" y2="94" stroke="#f5c889" strokeWidth="2" markerEnd="url(#dq-ah)" />
      <text x="66" y="116" fontSize="11" fontWeight="800" fill="#f5c889">Delete Front</text>
      <line x1="550" y1="56" x2="448" y2="56" stroke="#f5c889" strokeWidth="2" markerEnd="url(#dq-ah)" />
      <text x="554" y="44" textAnchor="end" fontSize="11" fontWeight="800" fill="#f5c889">Insert Rear</text>
      <line x1="448" y1="94" x2="550" y2="94" stroke="#f5c889" strokeWidth="2" markerEnd="url(#dq-ah)" />
      <text x="554" y="116" textAnchor="end" fontSize="11" fontWeight="800" fill="#f5c889">Delete Rear</text>
    </svg>
  );
}

function NestedQueueSvg() {
  return (
    <svg viewBox="0 0 700 262" className="h-auto w-full" role="img" aria-label="Streaming video: a master playback queue of segments where the playing segment is itself a sub-queue of tiny frames">
      <defs><marker id="nq-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker></defs>
      <text x="24" y="20" fontSize="11.5" fontWeight="800" fill="#f5c889">SUB-QUEUE — thousands of tiny frames / packets inside ONE 5-minute segment</text>
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={180 + i * 24} y="32" width="20" height="20" rx="4" fill={i < 5 ? "#c2410c" : i < 9 ? "#e8a13c" : "none"} stroke="#c99a5b" strokeWidth="1.2" />
      ))}
      <line x1="345" y1="58" x2="345" y2="132" stroke="#f5c889" strokeWidth="2" markerEnd="url(#nq-ah)" />
      <rect x="20" y="138" width="660" height="106" rx="14" fill="none" stroke="#c99a5b" strokeWidth="2" strokeDasharray="7 5" />
      <text x="32" y="160" fontSize="11.5" fontWeight="800" fill="#f5c889">MAIN QUEUE — the browser&apos;s master playback line</text>
      {[{ x: 40, t: "Segment k−1", s: "played" }, { x: 250, t: "Segment k", s: "PLAYING now" }, { x: 460, t: "Segment k+1", s: "buffered" }].map((sg, i) => (
        <g key={sg.t}>
          <rect x={sg.x} y="176" width="190" height="52" rx="10" fill={i === 1 ? "#b45309" : "rgba(255,236,210,.08)"} stroke="#c99a5b" strokeWidth="1.6" />
          <text x={sg.x + 95} y="198" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">{sg.t}</text>
          <text x={sg.x + 95} y="216" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={i === 1 ? "#ffe4bd" : "#cbb392"}>{sg.s}</text>
          {i < 2 ? <line x1={sg.x + 190} y1="202" x2={sg.x + 204} y2="202" stroke="#f5c889" strokeWidth="1.8" markerEnd="url(#nq-ah)" /> : null}
        </g>
      ))}
      <text x="360" y="254" textAnchor="middle" fontSize="11" fontWeight="600" fill="#cbb392">the graphics card rapidly plays the frames inside the current segment — so the video stays smooth</text>
    </svg>
  );
}

/* ============================================================
   EXPORTED — STACKS SECTION (light)
   ============================================================ */

export function AtbStacksSection() {
  return (
    <Section id="stacks">
      <SectionHead eyebrow="Module 2 · Stacks"
        title={<><span className="grad-text">Stacks</span> — the undo machine (LIFO)</>}
        lead="A stack is a linear structure with one door: everything enters and leaves through the same end — the top. Simple rule, enormous consequences." />

      <ReadStep n="1" title="The undo story" sub="You already use a stack every single day" />
      <Reveal>
        <Callout kind="story" title="Editing a document">
          You are typing and mistakes pile up — a wrong word, a broken sentence, a bad delete. You click <strong>Undo</strong>: the first click removes the <strong>LAST</strong> change, the second click removes the <strong>second-last</strong>, the third removes the one before that… Every editor, every photo app, every Ctrl-Z works this way. <strong>This is a Stack.</strong>
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Last-In, First-Out" sub="Push, Pop, Peek, Size — press the buttons" />
      <Reveal><StackWidget /></Reveal>
      <Reveal className="mt-5">
        <CodeBlock title="stack_ops.pseudo — the four moves" runnable={false}
          code={`Push(S, x):                    Pop(S):
  if Full(S):  error OVERFLOW    if Empty(S):  error UNDERFLOW
  Top ← Top + 1                  x ← S[Top]
  S[Top] ← x                     Top ← Top − 1
                                 return x          // the removed value

Peek(S):  return S[Top]          // read the top — remove nothing
Size(S):  return Top + 1         // how many values are stacked`} />
      </Reveal>

      <ReadStep n="3" title="Static vs dynamic" sub="Two builds of the same abstract idea" />
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { head: "Static stack — fixed size", tone: "#be4a4a", items: [
            <>Built on an <strong>array</strong> — capacity chosen in advance</>,
            <><strong>Adobe Photoshop</strong> keeps ≈ <strong>50 undo levels</strong> — change 51 things and the oldest history is gone</>,
            <><strong>MS Excel</strong> keeps ≈ <strong>100</strong> undo steps — same idea, bigger box</>,
            <>Predictable memory, but <strong>full is full</strong></>,
          ] },
          { head: "Dynamic stack — grows as needed", tone: "#5c7a24", items: [
            <>Built on a <strong>linked list</strong> — a new node for every push</>,
            <><strong>MS Word</strong> lets you undo (almost) without a counter — the stack keeps growing</>,
            <>The ultimate limit is the <strong>device&apos;s memory</strong> — not a declared size</>,
            <>Flexible, at the cost of a pointer per element</>,
          ] },
        ].map((c, ci) => (
          <Reveal key={c.head} delay={ci * 120}>
            <div className="card-warm h-full p-6">
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: c.tone }}>{c.head}</p>
              <ul className="mt-3 grid gap-2 text-[.9rem] leading-relaxed text-[#2b2014]">
                {c.items.map((t, i) => <li key={i}>• {t}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-5">
        <Callout kind="insight" title="Stacks are ABSTRACT">
          &ldquo;Stack&rdquo; is a <strong>behaviour</strong> (LIFO), not a physical thing — it is <strong>implemented through other data structures</strong>: arrays for static stacks, linked lists for dynamic ones. Same rules, different foundations.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="When stacks break" sub="Two failures with famous names" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal><WarnCard title="Stack Overflow">
            <strong>Pushing onto a FULL stack.</strong> Real-life picture: a browser holding a huge number of open tabs — memory is finite; one more push and the structure gives up. (Yes — the website stackoverflow.com is named after exactly this error.)
          </WarnCard>
        </Reveal>
        <Reveal><WarnCard title="Stack Underflow">
            <strong>Popping an EMPTY stack.</strong> Real-life picture: clicking <strong>Back</strong> on a freshly opened browser — there is no history to go back to, so the pop finds nothing and the operation fails.
          </WarnCard>
        </Reveal>
      </div>

      <ReadStep n="5" title="Stack of stacks" sub="Each element of the main stack is itself a stack" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <AppWindow className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-xl font-bold">Browser windows, each with its own pile</h3>
          </div>
          <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Your browser runs <strong>multiple windows</strong> — Push and Pop on the main stack adds and removes whole <strong>windows</strong>. But each window holds <strong>multiple tabs</strong> — its own LIFO pile. Structures inside structures: that is normal, not exotic.
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}><StackOfStacksSvg /></div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="Calling Pop() on an empty stack causes…" options={["overflow", "underflow", "reboot", "peek"]} answer={1}
            explain="Underflow = removing from an EMPTY structure (nothing to give). Overflow = adding to a FULL one (no room to put it). Both names, one letter apart — learn them as a pair." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="Photoshop's fixed 50-step undo is a…" options={["dynamic stack on a linked list", "static stack on an array", "queue", "deque"]} answer={1}
            explain="A pre-declared capacity (≈50) implemented on an array: a STATIC stack. Word's grow-forever undo is the dynamic, linked-list flavour." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — stacks" items={[
          { q: "Push J, then A, then N onto an empty stack. Now Pop() twice. Which value remains, and where is it?", hint: "Last in, first out — N leaves first, then A. What is left is at the BOTTOM." },
          { q: "Name two more places where you meet LIFO behaviour daily, and say what the 'top' element is in each.", hint: "Think: plates, a pebble tower, browser Back button, the call stack when functions call functions." },
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED — QUEUES SECTION (light)
   ============================================================ */

const Q_APPS = [
  { icon: Wifi, head: "Wi-Fi router packet buffer", body: <>A <strong>fixed-size circular queue</strong> of network packets. When it is full the router <strong>intentionally drops new packets</strong> instead of crashing — the <strong>Tail Drop</strong> mechanism. Your video hiccups; the router survives.</> },
  { icon: Keyboard, head: "PC keyboard / mouse buffer", body: <>A <strong>fixed hardware queue</strong> (usually <strong>16–64 bytes</strong>). Type faster than the system processes and the extra keystrokes are simply <strong>ignored</strong> — the queue never grows.</> },
  { icon: MessageSquare, head: "Messaging apps' offline buffer", body: <>Messages sent while offline <strong>queue up</strong> — the queue <strong>expands</strong> as long as you stay offline, then <strong>drains sequentially</strong> (oldest first) when you reconnect, and the memory is freed.</> },
  { icon: Film, head: "Streaming video buffers", body: <>Video segments land in a <strong>dynamic memory queue</strong>. When the connection speeds up, the buffer <strong>grows</strong> to hold more segments — so playback continues <strong>stutter-free</strong> through dips.</> },
];

export function AtbQueuesSection() {
  return (
    <Section id="queues">
      <SectionHead eyebrow="Module 2 · Queues"
        title={<><span className="grad-text">Queues</span> — first come, first served (FIFO)</>}
        lead="A queue is a linear structure with two doors: entries at the rear, exits at the front. Fairness by arrival order — the structure behind every waiting line in software." />

      <ReadStep n="1" title="The popcorn line" sub="Interval time at the movies" />
      <Reveal>
        <Callout kind="story" title="Waiting at the movie interval">
          The screen says &ldquo;Interval&rdquo; and everyone queues for popcorn. The person who <strong>arrived first is served first</strong>; newcomers join at the <strong>back</strong>. Nobody cares how fast you can wave your money — <strong>your order doesn&apos;t matter, your PLACE does</strong>. That fairness rule has a formal name: <strong>FCFS — First-Come-First-Served</strong> — also called <strong>FIFO</strong> (First-In, First-Out). This is a Queue.
        </Callout>
      </Reveal>
      <Reveal className="mt-3">
        <div className="flex flex-wrap gap-2">
          <span className="chip"><Popcorn className="h-3.5 w-3.5" aria-hidden /> your PLACE matters, not your pace</span>
          <span className="chip"><ArrowRight className="h-3.5 w-3.5" aria-hidden /> join at the rear</span>
          <span className="chip"><ArrowLeft className="h-3.5 w-3.5" aria-hidden /> leave from the front</span>
        </div>
      </Reveal>

      <ReadStep n="2" title="Front and rear" sub="Enqueue, Dequeue, Peek, Size — press the buttons" />
      <Reveal><QueueWidget /></Reveal>

      <ReadStep n="3" title="When queues break" sub="Same two failure names, queue flavour" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal><WarnCard title="Queue Overflow">
            <strong>Enqueueing into a FULL queue.</strong> Real-life picture: <strong>lakhs of people booking Tatkal tickets on IRCTC</strong> the second the window opens — the booking queue hits its capacity and further requests are refused.
          </WarnCard>
        </Reveal>
        <Reveal><WarnCard title="Queue Underflow">
            <strong>Dequeueing from an EMPTY queue.</strong> Real-life picture: your <strong>stream&apos;s buffer drains when the internet drops</strong> — the player asks the buffer queue for the next chunk, the queue is empty, and the screen freezes.
          </WarnCard>
        </Reveal>
      </div>

      <ReadStep n="4" title="Static vs dynamic + real applications" sub="Fixed boxes that drop, flexible lines that grow" />
      <div className="grid gap-5 lg:grid-cols-2">
        {[
          { head: "Static queue — fixed size, built on arrays", tone: "#be4a4a", apps: [Q_APPS[0], Q_APPS[1]] },
          { head: "Dynamic queue — grows as needed, built on linked lists", tone: "#5c7a24", apps: [Q_APPS[2], Q_APPS[3]] },
        ].map((col, ci) => (
          <Reveal key={col.head} delay={ci * 120}>
            <div className="card-warm h-full p-6">
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: col.tone }}>{col.head}</p>
              <div className="mt-3 grid gap-3">
                {col.apps.map((a) => (
                  <div key={a.head} className="rounded-xl p-3.5" style={{ background: "#fffaf1", border: "1px solid #f0e2c8" }}>
                    <p className="flex items-center gap-2 font-bold text-[#7c4a12]"><a.icon className="h-4 w-4" /> {a.head}</p>
                    <p className="mt-1 text-[.85rem] leading-relaxed text-[#2b2014]">{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="The person served NEXT in a queue is standing at the…" options={["rear", "front", "peek", "middle"]} answer={1}
            explain="The front of the queue is the head of the line — Dequeue() always removes the front element. The rear is where newcomers join." />
        </Reveal>
        <Reveal delay={100}>
          <Practice title="Pen-and-paper drills — queues" items={[
            { q: "Enqueue A, B, C, then Dequeue twice. Which value is now at the front?", hint: "A and B leave in arrival order — C never moved, yet it becomes the front." },
            { q: "Find the queue hiding in a printer, a call center, and a ticket window. In each, what is 'enqueue' and what is 'dequeue'?", hint: "Documents arrive to be printed in order; callers hold in a line; customers are served by arrival." },
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   EXPORTED — QUEUE TYPES SECTION (dark)
   ============================================================ */

export function AtbQTypesSection() {
  return (
    <Section id="qtypes" dark>
      <SectionHead dark eyebrow="Module 2 · Queue types"
        title={<>Four queues for <span className="grad-text">four situations</span></>}
        lead="One FIFO rule, four engineering personalities. Choosing the right queue type is the difference between wasted memory, frozen screens and a smoothly running system." />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[.8rem] font-black" style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)", color: "#fff7ec" }}>1</span>
              <h3 className="text-xl font-bold text-[#f5e6cd]">Linear queue</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              The plain version: <strong>insert at the rear, remove from the front</strong>. Its <strong style={{ color: "#f0a8a8" }}>limitation is memory wastage</strong> — in an array implementation, once <strong>rear hits the end</strong> you cannot insert, <strong>even if front spaces have been freed</strong> by earlier deletions.
            </p>
            <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><LinearLimitSvg /></div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[.8rem] font-black" style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)", color: "#fff7ec" }}>2</span>
              <h3 className="text-xl font-bold text-[#f5e6cd]">Circular queue</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              The <strong>last position connects back to the first</strong> — the queue becomes a ring. It <strong>reuses the spaces freed by deletions</strong>, fixing the linear queue&apos;s waste. Classically implemented via a <strong>linked list</strong> — and beyond the slides: arrays can do it too, by <strong>wrapping indices with modulo</strong>.
            </p>
            <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><CircularRingSvg /></div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip"><TrafficCone className="h-3.5 w-3.5" aria-hidden /> traffic lights</span>
              <span className="chip"><Gamepad2 className="h-3.5 w-3.5" aria-hidden /> multiplayer games</span>
              <span className="chip"><Repeat className="h-3.5 w-3.5" aria-hidden /> circular playlists</span>
              <span className="chip"><Cpu className="h-3.5 w-3.5" aria-hidden /> CPU round-robin scheduling</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[.8rem] font-black" style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)", color: "#fff7ec" }}>3</span>
              <h3 className="text-xl font-bold text-[#f5e6cd]">Priority queue</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              Served by <strong>priority, not arrival</strong>. Equal priorities serve FIFO. The lecture&apos;s example: the queue holds <span className="font-mono-warm font-bold">(A,8) (T,6) (B,3)</span>; a new <span className="font-mono-warm font-bold">(S,7)</span> arrives and slots <strong>before (T,6)</strong> — arrival order be damned.
            </p>
            <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><PriorityChipsSvg /></div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip"><Cpu className="h-3.5 w-3.5" aria-hidden /> CPU task scheduling</span>
              <span className="chip"><Siren className="h-3.5 w-3.5" aria-hidden /> hospital emergency room</span>
              <span className="chip"><Plane className="h-3.5 w-3.5" aria-hidden /> airport traffic control</span>
              <span className="chip"><TrainFront className="h-3.5 w-3.5" aria-hidden /> railway</span>
              <span className="chip"><AlertTriangle className="h-3.5 w-3.5" aria-hidden /> disaster management</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card-warm flex h-full flex-col p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[.8rem] font-black" style={{ background: "linear-gradient(135deg,#f59e0b,#c2410c)", color: "#fff7ec" }}>4</span>
              <h3 className="text-xl font-bold text-[#f5e6cd]">Doubly ended queue (Deque)</h3>
            </div>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#e9d7bf]">
              <strong>Insert and delete from BOTH ends</strong> — so one deque can act as a{" "}
              <strong>queue AND a stack at once</strong>: front-only use is FIFO, end-only use is LIFO.
            </p>
            <div className="mt-4 rounded-xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><DequeSvg /></div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="chip">Insert Front</span>
              <span className="chip">Insert Rear</span>
              <span className="chip">Delete Front</span>
              <span className="chip">Delete Rear</span>
            </div>
            <p className="mt-3 text-[.82rem] font-bold uppercase tracking-[.14em] text-[#b99a75]">Applications</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="chip"><Undo2 className="h-3.5 w-3.5" aria-hidden /> browser forward / back</span>
              <span className="chip">undo + redo in a word processor</span>
              <span className="chip"><TrainFront className="h-3.5 w-3.5" aria-hidden /> train coach management</span>
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep dark n="1" title="Queue of queues — streaming" sub="The Netflix example: playback is queues all the way down" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="max-w-4xl text-[.93rem] leading-relaxed text-[#e9d7bf]">
            The <strong>MAIN queue</strong> is the browser&apos;s master playback line holding the
            upcoming <strong>5-minute scene segments</strong>. Each segment is itself a{" "}
            <strong>SUB-QUEUE of thousands of tiny frames / packets</strong>. The{" "}
            <strong>graphics card rapidly plays the frames inside the current segment</strong> —
            and that is why the video stays smooth while the outer queue quietly refills.
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}><NestedQueueSvg /></div>
          <Callout kind="insight" dark title="Spot the pattern">
            Stacks of stacks (browser windows → tabs), queues of queues (segments → frames), lists
            of lists (users → playlists → songs). <strong>Nesting structures inside structures is
            how real systems scale simple rules.</strong>
          </Callout>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="Which queue type powers a hospital emergency room?" options={["Linear queue", "Circular queue", "Priority queue", "Deque"]} answer={2}
            explain="Triage serves by severity, not by arrival — a heart attack before a sprain, whatever the clock says. Equal severities fall back to FIFO." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="Undo AND Redo in one structure suggests a…" options={["deque", "priority queue", "circular queue", "linear queue"]} answer={0}
            explain="Undo pops one end while redo pushes back — two ends, both active. A deque supports insert/delete at both ends, so it can behave as a stack AND a queue simultaneously." />
        </Reveal>
      </div>
      <Reveal className="mt-8">
        <Takeaways dark items={[
          <>A stack is <strong>LIFO</strong>; a queue is <strong>FIFO</strong> — one door vs two.</>,
          <>Stack operations: <span className="font-mono-warm font-bold">Push · Pop · Peek · Size</span>.</>,
          <>Queue operations: <span className="font-mono-warm font-bold">Enqueue · Dequeue · Peek(front/rear) · Size</span>.</>,
          <>Both can be <strong>static (arrays)</strong> or <strong>dynamic (linked lists)</strong>.</>,
          <><strong>Underflow</strong> = removing from empty · <strong>Overflow</strong> = adding to full.</>,
          <>Queues come as <strong>linear, circular, priority and doubly ended</strong> — pick by situation.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
