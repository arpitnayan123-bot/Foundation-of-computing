"use client";

/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 1/2 — Module 2 · Linear data structures
   Part 3: Arrays (light) · Linked lists (dark)
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, Check, GraduationCap, Hash, Home, Link2, ListMusic, Lock, MapPin,
  Network, Play, Plus, Repeat, Search, Shuffle, SkipBack, SkipForward, Trash2, X,
} from "lucide-react";
import {
  Callout, CodeBlock, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- local button (real <button>, aria-labelled) ---------- */

function OpBtn({ onClick, children, tone = "ghost", dark = false, disabled = false }: {
  onClick: () => void; children: React.ReactNode; tone?: "warm" | "ghost"; dark?: boolean; disabled?: boolean;
}) {
  const style: React.CSSProperties =
    tone === "warm"
      ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
      : { background: dark ? "rgba(255,246,232,.06)" : "#fffdf9", color: dark ? "#f0dfc8" : "#7c4a12", border: `1px solid ${dark ? "rgba(255,214,160,.22)" : "#e5c79d"}` };
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
   ARRAYS — SVG pieces
   ============================================================ */

const ARR_VALS = [60, 65, 70, 55, 60];

function ArrayStrip({ selected }: { selected: number | null }) {
  return (
    <svg viewBox="0 0 620 152" className="h-auto w-full" role="img" aria-label="Array Sub with five cells holding 60, 65, 70, 55, 60 at indices 0 to 4">
      <defs>
        <marker id="arr3-ptr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c2410c" /></marker>
      </defs>
      <text x="35" y="24" fontSize="11" fontWeight="700" fill="#8a5a06">index →</text>
      {ARR_VALS.map((v, i) => {
        const x = 35 + i * 112, on = selected === i;
        return (
          <g key={i}>
            <text x={x + 50} y="44" textAnchor="middle" fontSize="13" fontWeight="700" fill={on ? "#c2410c" : "#8a5a06"}>{i}</text>
            <rect x={x} y="52" width="100" height="56" rx="10" fill={on ? "#f6ad3c" : "#fde8cf"} stroke={on ? "#c2410c" : "#e2b075"} strokeWidth={on ? 3 : 1.5} />
            <text x={x + 50} y="87" textAnchor="middle" fontSize="19" fontWeight="800" fill="#3e2c1d">{v}</text>
          </g>
        );
      })}
      {/* sweeping highlight (transform only) */}
      <motion.rect y="52" width="100" height="56" rx="10" fill="#f59e0b" aria-hidden initial={{ opacity: 0.22 }} animate={{ x: [35, 483] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.1 }} />
      <line x1="85" y1="112" x2="85" y2="126" stroke="#c2410c" strokeWidth="1.5" markerEnd="url(#arr3-ptr)" />
      <text x="85" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c2410c">Sub[0] = 60</text>
      <line x1="421" y1="112" x2="421" y2="126" stroke="#c2410c" strokeWidth="1.5" markerEnd="url(#arr3-ptr)" />
      <text x="421" y="142" textAnchor="middle" fontSize="12" fontWeight="700" fill="#c2410c">Sub[3] = 55</text>
    </svg>
  );
}

function ArrayStripLab() {
  const [sel, setSel] = useState<number | null>(null);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex items-center gap-3">
        <Search className="h-6 w-6" style={{ color: "#c2410c" }} />
        <h3 className="text-xl font-bold md:text-2xl">Same type, instant access</h3>
      </div>
      <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
        Five students&apos; marks live in <strong>one array named Sub</strong> — every element is
        the <strong>same data type</strong>, every element carries an <strong>index</strong>, and
        any element is reachable in <strong>one direct jump</strong>: no scanning, no searching.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}>
        <ArrayStrip selected={sel} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {ARR_VALS.map((_, i) => <OpBtn key={i} onClick={() => setSel(i)}>read Sub[{i}]</OpBtn>)}
        <OpBtn onClick={() => setSel(null)}>clear</OpBtn>
      </div>
      <p className="mt-3 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold text-[#a0410a]" aria-live="polite">
        {sel === null ? "→ click a position above — the answer comes back instantly." : `Sub[${sel}] → ${ARR_VALS[sel]}   // direct access: one jump, zero scanning`}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <span className="chip"><Check className="h-3.5 w-3.5" aria-hidden /> stores the same data type</span>
        <span className="chip"><Hash className="h-3.5 w-3.5" aria-hidden /> every element is indexed (0, 1, 2, …)</span>
        <span className="chip"><ArrowRight className="h-3.5 w-3.5" aria-hidden /> direct access by index</span>
      </div>
    </div>
  );
}

const MARKS = [
  [72, 88, 91, 67], [55, 60, 71, 80], [60, 65, 70, 55], [91, 78, 84, 90], [45, 52, 61, 58],
];

function TwoDGrid() {
  const hot = (i: number, j: number) => (i === 2 && j === 1) || (i === 4 && j === 3);
  return (
    <svg viewBox="0 0 560 336" className="h-auto w-full" role="img" aria-label="Two-dimensional array of student marks: five rows of students, four columns of subjects, with Sub[2,1] and Sub[4,3] highlighted">
      <defs>
        <marker id="grid3-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#b45309" /></marker>
      </defs>
      <text x="14" y="30" fontSize="11" fontWeight="700" fill="#8a5a06">students (i) ↓</text>
      {[0, 1, 2, 3].map((j) => <text key={j} x={118 + j * 88 + 44} y="46" textAnchor="middle" fontSize="12" fontWeight="700" fill="#8a5a06">subject {j}</text>)}
      {MARKS.map((row, i) => row.map((m, j) => {
        const x = 118 + j * 88, y = 56 + i * 46, on = hot(i, j);
        return (
          <g key={`${i}-${j}`}>
            <rect x={x} y={y} width="84" height="42" rx="8" fill={on ? "#f6ad3c" : i % 2 ? "#fde8cf" : "#fff3e0"} stroke={on ? "#c2410c" : "#e8cfa5"} strokeWidth={on ? 3 : 1.4} />
            <text x={x + 42} y={y + 27} textAnchor="middle" fontSize="15" fontWeight="700" fill="#3e2c1d">{m}</text>
            {j === 0 ? <text x="106" y={y + 27} textAnchor="end" fontSize="12" fontWeight="700" fill="#6f5438">student {i}</text> : null}
          </g>
        );
      }))}
      <line x1="18" y1="171" x2="110" y2="171" stroke="#b45309" strokeWidth="2" markerEnd="url(#grid3-ah)" />
      <text x="18" y="158" fontSize="12" fontWeight="800" fill="#b45309">Sub[2,1] → 65</text>
      <line x1="542" y1="300" x2="474" y2="272" stroke="#b45309" strokeWidth="2" markerEnd="url(#grid3-ah)" />
      <text x="546" y="318" textAnchor="end" fontSize="12" fontWeight="800" fill="#b45309">Sub[4,3] → 58</text>
    </svg>
  );
}

/* ---------- insert trio (framer-motion stagger) ---------- */

const CW = 56, STEP = 64;

function Cells({ vals }: { vals: (number | null)[] }) {
  return (
    <>
      {vals.map((v, i) => (
        <g key={i}>
          <rect x={30 + i * STEP} y="34" width={CW} height="44" rx="8" fill={v === null ? "none" : "#fde8cf"} stroke={v === null ? "#c99a5b" : "#e2b075"} strokeWidth="1.6" strokeDasharray={v === null ? "5 4" : undefined} />
          {v !== null ? <text x={30 + i * STEP + CW / 2} y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="#3e2c1d">{v}</text> : null}
        </g>
      ))}
    </>
  );
}

function TrioCard({ title, tone, svg, caption }: { title: string; tone: string; svg: React.ReactNode; caption: string }) {
  return (
    <div className="card-warm p-5">
      <p className="flex items-center gap-2 text-[.86rem] font-extrabold text-[#7c4a12]"><Plus className="h-4 w-4" style={{ color: tone }} /> {title}</p>
      <svg viewBox="0 0 372 112" className="mt-3 h-auto w-full" role="img" aria-label={caption}>{svg}</svg>
      <p className="mt-1 text-[.78rem] font-bold text-[#6f5438]">{caption}</p>
    </div>
  );
}

function InsertTrio() {
  const pop = (x: number, d: number) => (
    <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: d, duration: 0.4 }}>
      <rect x={x} y="34" width={CW} height="44" rx="8" fill="#f6d5c0" stroke="#c2410c" strokeWidth="2" />
      <text x={x + CW / 2} y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="#8a2f0f">99</text>
    </motion.g>
  );
  const shift = (kids: React.ReactNode) => (
    <motion.g initial={{ x: 0 }} whileInView={{ x: STEP }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}>{kids}</motion.g>
  );
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <TrioCard title="Insert at the END" tone="#7c9a3e" caption="shifts: 0 — just write into the free slot"
        svg={<>
          <Cells vals={[10, 20, 30, 40, null]} />
          <text x="314" y="20" fontSize="13" fontWeight="800" fill="#7c9a3e">99</text>
          <line x1="314" y1="24" x2="314" y2="30" stroke="#7c9a3e" strokeWidth="1.6" />
          {pop(30 + 4 * STEP, 0.45)}
        </>} />
      <TrioCard title="Insert at the BEGINNING" tone="#be4a4a" caption="shifts: n — every element moves right"
        svg={<>
          <rect x={30 + 4 * STEP} y="34" width={CW} height="44" rx="8" fill="none" stroke="#c99a5b" strokeWidth="1.6" strokeDasharray="5 4" />
          {shift(<Cells vals={[10, 20, 30, 40]} />)}
          {pop(30, 0.85)}
        </>} />
      <TrioCard title="Insert in the MIDDLE (Arr[2])" tone="#b45309" caption="shifts: everything after Arr[2] moves"
        svg={<>
          <Cells vals={[10, 20, null, null, null]} />
          {shift(<>
            <rect x={30 + 2 * STEP} y="34" width={CW} height="44" rx="8" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
            <text x={30 + 2 * STEP + CW / 2} y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="#3e2c1d">30</text>
            <rect x={30 + 3 * STEP} y="34" width={CW} height="44" rx="8" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.6" />
            <text x={30 + 3 * STEP + CW / 2} y="62" textAnchor="middle" fontSize="16" fontWeight="800" fill="#3e2c1d">40</text>
          </>)}
          {pop(30 + 2 * STEP, 0.85)}
        </>} />
    </div>
  );
}

/* ============================================================
   LINKED LISTS — SVG pieces
   ============================================================ */

function LlNode({ x, y, label, w = 150 }: { x: number; y: number; label: string; w?: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="52" rx="9" fill="#fde8cf" stroke="#c99a5b" strokeWidth="1.6" />
      <rect x={x + w - 58} y={y} width="58" height="52" rx="9" fill="#b45309" stroke="#c99a5b" strokeWidth="1.6" />
      <text x={x + (w - 58) / 2} y={y + 32} textAnchor="middle" fontSize="14" fontWeight="800" fill="#3e2c1d">{label}</text>
      <text x={x + w - 29} y={y + 31} textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff7ec">next</text>
    </g>
  );
}

function PlaylistChain() {
  const xs = [96, 306, 516];
  const inp = (d: number) => ({ initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { delay: d, duration: 0.45 } });
  return (
    <svg viewBox="0 0 740 132" className="h-auto w-full" role="img" aria-label="Linked list playlist: Head points to Song 1, which points to Song 2, which points to Song 3, whose pointer is Null">
      <defs>
        <marker id="ll-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
      </defs>
      <motion.g {...inp(0)}>
        <rect x="10" y="40" width="56" height="52" rx="9" fill="#c2410c" />
        <text x="38" y="71" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff7ec">Head</text>
      </motion.g>
      <motion.line x1="66" y1="66" x2="90" y2="66" stroke="#f5c889" strokeWidth="2" markerEnd="url(#ll-ah)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
      {xs.map((x, i) => (
        <motion.g key={x} {...inp(0.25 + i * 0.25)}>
          <LlNode x={x} y={40} label={`Song ${i + 1}`} />
          {i < 2 ? <line x1={x + 150} y1="66" x2={x + 204} y2="66" stroke="#f5c889" strokeWidth="2" markerEnd="url(#ll-ah)" /> : <text x={x + 121} y="30" textAnchor="middle" fontSize="12" fontWeight="800" fill="#f0a8a8">Null</text>}
        </motion.g>
      ))}
      <text x="360" y="122" textAnchor="middle" fontSize="12" fontWeight="600" fill="#cbb392">each node = data + a pointer to the next node — the chain can grow song by song</text>
    </svg>
  );
}

function FlavourMinis() {
  const box = (x: number, y: number, t: string, k: string) => (
    <g key={k}>
      <rect x={x} y={y} width="72" height="40" rx="8" fill="#fde8cf" stroke="#c99a5b" strokeWidth="1.4" />
      <text x={x + 36} y={y + 25} textAnchor="middle" fontSize="12" fontWeight="700" fill="#3e2c1d">{t}</text>
    </g>
  );
  const mk = <T extends string>(id: T, fill: string) => (
    <marker id={id} markerWidth="7" markerHeight="7" refX="5.5" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill={fill} /></marker>
  );
  const S = ["S1", "S2", "S3"];
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="card-warm p-5">
        <p className="text-[.95rem] font-extrabold text-[#f5c889]">Singly linked list</p>
        <svg viewBox="0 0 320 92" className="mt-2 h-auto w-full" role="img" aria-label="Singly linked list: arrows point forward only">
          <defs>{mk("fl-s", "#f5c889")}</defs>
          {S.map((t, i) => box(14 + i * 104, 26, t, t))}
          <line x1="86" y1="46" x2="112" y2="46" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-s)" />
          <line x1="190" y1="46" x2="216" y2="46" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-s)" />
          <text x="292" y="50" fontSize="11" fontWeight="700" fill="#f0a8a8">Null</text>
        </svg>
        <span className="chip mt-2">Lecture 7 · play next</span>
        <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">Sequential playback — the chain is walked head → end, one <strong>next</strong> pointer at a time.</p>
      </div>
      <div className="card-warm p-5">
        <p className="text-[.95rem] font-extrabold text-[#f5c889]">Doubly linked list</p>
        <svg viewBox="0 0 320 92" className="mt-2 h-auto w-full" role="img" aria-label="Doubly linked list: arrows point forward and backward">
          <defs>{mk("fl-d", "#f5c889")}</defs>
          {S.map((t, i) => box(14 + i * 104, 26, t, t))}
          <line x1="88" y1="38" x2="112" y2="38" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-d)" />
          <line x1="190" y1="38" x2="216" y2="38" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-d)" />
          <line x1="114" y1="56" x2="90" y2="56" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#fl-d)" />
          <line x1="216" y1="56" x2="192" y2="56" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#fl-d)" />
        </svg>
        <span className="chip mt-2">Lecture 7 · play previous</span>
        <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">Both directions — <strong>play next</strong> and <strong>play previous</strong> both work.</p>
      </div>
      <div className="card-warm p-5">
        <p className="text-[.95rem] font-extrabold text-[#f5c889]">Circular linked list</p>
        <svg viewBox="0 0 320 92" className="mt-2 h-auto w-full" role="img" aria-label="Circular linked list: the last node loops back to the head">
          <defs>{mk("fl-c", "#e0a45e")}</defs>
          {S.map((t, i) => box(14 + i * 104, 34, t, t))}
          <line x1="86" y1="54" x2="112" y2="54" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-c)" />
          <line x1="190" y1="54" x2="216" y2="54" stroke="#f5c889" strokeWidth="2" markerEnd="url(#fl-c)" />
          <path d="M 288 32 C 280 6, 60 6, 44 30" fill="none" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#fl-c)" />
          <text x="160" y="16" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#e0a45e">back to Head</text>
        </svg>
        <span className="chip mt-2">Lecture 7 · repeat / shuffle</span>
        <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">The playlist <strong>starts over</strong> after the last song — repeat and shuffle live here, and the same loop drives menu systems.</p>
      </div>
    </div>
  );
}

function RewireLab() {
  const [wired, setWired] = useState(false);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xl font-bold md:text-2xl">Surgery in two pointer moves</p>
        <span className="chip">0 cells shifted — an array would move everything after Song 2</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
        To insert <strong>Song 2a</strong> between Song 2 and Song 3, no element moves. We only
        rewrite <strong>two pointers</strong>: Song2.next → 2a, then 2a.next → Song3.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <svg viewBox="0 0 760 212" className="h-auto w-full" role="img" aria-label="Inserting Song 2a into a linked list by rewiring two pointers">
          <defs>
            <marker id="rw-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
            <marker id="rw-x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f0a8a8" /></marker>
          </defs>
          <LlNode x={24} y={24} label="Song 1" />
          <LlNode x={290} y={24} label="Song 2" />
          <LlNode x={560} y={24} label="Song 3" />
          <line x1="174" y1="50" x2="284" y2="50" stroke="#f5c889" strokeWidth="2" markerEnd="url(#rw-ah)" />
          <motion.line x1="440" y1="50" x2="554" y2="50" stroke={wired ? "#f0a8a8" : "#f5c889"} strokeWidth="2" strokeDasharray={wired ? "6 5" : undefined} markerEnd={wired ? "url(#rw-x)" : "url(#rw-ah)"} animate={{ opacity: wired ? 0.55 : 1 }} />
          {wired ? <text x="497" y="40" textAnchor="middle" fontSize="11" fontWeight="800" fill="#f0a8a8">✗ rewired away</text> : null}
          <motion.g initial={false} animate={{ opacity: wired ? 1 : 0 }} transition={{ duration: 0.4 }}>
            <LlNode x={400} y={140} label="Song 2a" />
            <line x1="412" y1="76" x2="446" y2="134" stroke="#f5c889" strokeWidth="2" markerEnd="url(#rw-ah)" />
            <text x="392" y="112" fontSize="10.5" fontWeight="700" fill="#f5c889">move 1</text>
            <line x1="552" y1="152" x2="636" y2="82" stroke="#f5c889" strokeWidth="2" markerEnd="url(#rw-ah)" />
            <text x="600" y="130" fontSize="10.5" fontWeight="700" fill="#f5c889">move 2</text>
          </motion.g>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={() => setWired(true)}>Rewire in 2 moves</OpBtn>
        <OpBtn dark onClick={() => setWired(false)}>Reset</OpBtn>
        <span className="font-mono-warm text-[.82rem] font-bold" style={{ color: "#f5c889" }} aria-live="polite">
          {wired ? "Song2.next → 2a · 2a.next → Song3 — done. Nothing else was touched." : "Before: Song2.next → Song3 (direct)."}
        </span>
      </div>
    </div>
  );
}

function ListsOfLists() {
  const rows = [
    { y: 18, name: "Playlist 1", songs: ["1A", "1B", "1C"] },
    { y: 88, name: "Playlist 2", songs: ["2A", "2B"] },
    { y: 158, name: "Playlist 3", songs: ["3A", "3B", "3C"] },
    { y: 228, name: "Playlist 4", songs: ["4A", "4B"] },
  ];
  return (
    <svg viewBox="0 0 700 292" className="h-auto w-full" role="img" aria-label="A user owns four playlists and each playlist holds its own chain of songs — a linked list of linked lists">
      <defs>
        <marker id="lol-ah" markerWidth="7" markerHeight="7" refX="5.5" refY="2.5" orient="auto"><path d="M0,0 L6,2.5 L0,5 Z" fill="#f5c889" /></marker>
      </defs>
      <rect x="14" y="120" width="104" height="52" rx="10" fill="#c2410c" />
      <text x="66" y="151" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff7ec">User 1</text>
      {rows.map((r) => (
        <g key={r.y}>
          <rect x="182" y={r.y} width="122" height="42" rx="9" fill="#b45309" stroke="#c99a5b" strokeWidth="1.4" />
          <text x="243" y={r.y + 26} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff7ec">{r.name}</text>
          <line x1="118" y1="146" x2="176" y2={r.y + 21} stroke="#f5c889" strokeWidth="1.8" markerEnd="url(#lol-ah)" />
          <line x1="304" y1={r.y + 21} x2="360" y2={r.y + 21} stroke="#f5c889" strokeWidth="1.8" markerEnd="url(#lol-ah)" />
          {r.songs.map((s, i) => (
            <g key={s}>
              <rect x={366 + i * 84} y={r.y + 5} width="70" height="32" rx="8" fill="#fde8cf" stroke="#c99a5b" strokeWidth="1.3" />
              <text x={366 + i * 84 + 35} y={r.y + 26} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#3e2c1d">{s}</text>
              {i > 0 ? <line x1={366 + (i - 1) * 84 + 70} y1={r.y + 21} x2={366 + i * 84 - 6} y2={r.y + 21} stroke="#f5c889" strokeWidth="1.6" markerEnd="url(#lol-ah)" /> : null}
            </g>
          ))}
          <text x={366 + r.songs.length * 84 + 6} y={r.y + 26} fontSize="13" fontWeight="700" fill="#cbb392">…</text>
        </g>
      ))}
    </svg>
  );
}

/* ============================================================
   LECTURE 7 — interactive machines (linked lists)
   Unique SVG marker prefixes per machine: mm- · tv- · dl- · sf-
   ============================================================ */

/* curved pointer path between two boxes, trimmed so arrowheads stay visible */
function hopPath(
  ax: number, ay: number, hwa: number, hha: number,
  bx: number, by: number, hwb: number, hhb: number,
  bend: number
): string {
  const dx = bx - ax, dy = by - ay;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const exit = (hw: number, hh: number) =>
    Math.min(Math.abs(ux) < 1e-6 ? Infinity : hw / Math.abs(ux), Math.abs(uy) < 1e-6 ? Infinity : hh / Math.abs(uy));
  const sx = ax + ux * (exit(hwa, hha) + 6);
  const sy = ay + uy * (exit(hwa, hha) + 6);
  const ex = bx - ux * (exit(hwb, hhb) + 4);
  const ey = by - uy * (exit(hwb, hhb) + 4);
  const mx = (sx + ex) / 2 - uy * bend;
  const my = (sy + ey) / 2 + ux * bend;
  const f = (n: number) => n.toFixed(1);
  return `M ${f(sx)} ${f(sy)} Q ${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
}

/* data + next node with an optional highlight state (traversal / delete) */
function L7Node({ x, y, label, active = false, dead = false }: {
  x: number; y: number; label: string; active?: boolean; dead?: boolean;
}) {
  return (
    <g>
      <rect x={x} y={y} width={150} height={52} rx={9} fill={dead ? "#d9d2c6" : active ? "#f6ad3c" : "#fde8cf"} stroke={dead ? "#6b6154" : active ? "#f5c889" : "#c99a5b"} strokeWidth={active ? 2.5 : 1.6} />
      <rect x={x + 92} y={y} width={58} height={52} rx={9} fill={dead ? "#8a8175" : active ? "#c2410c" : "#b45309"} stroke={dead ? "#6b6154" : "#c99a5b"} strokeWidth={1.6} />
      <text x={x + 46} y={y + 32} textAnchor="middle" fontSize={14} fontWeight={800} fill={dead ? "#57504a" : active ? "#7c2d0a" : "#3e2c1d"}>{label}</text>
      <text x={x + 121} y={y + 31} textAnchor="middle" fontSize={11} fontWeight={700} fill="#fff7ec">next</text>
    </g>
  );
}

/* ---------- machine 1 · MemoryMapLab ---------- */

const MM_SONGS = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
const MM_ARRAY_ADDR = ["1000", "1048", "1096", "1144", "1192"];
const MM_SCATTER = [
  { name: "Song 1", addr: "0724", next: "2044", x: 96, y: 22 },
  { name: "Song 2", addr: "2044", next: "1048", x: 520, y: 30 },
  { name: "Song 3", addr: "1048", next: "1556", x: 300, y: 128 },
  { name: "Song 4", addr: "1556", next: "0312", x: 560, y: 168 },
  { name: "Song 5", addr: "0312", next: null, x: 110, y: 236 },
];

function MmArrayView() {
  return (
    <g>
      {MM_SONGS.map((s, i) => {
        const x = 44 + i * 118;
        return (
          <motion.g key={s} initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08, duration: 0.4 }}>
            <text x={x + 59} y="88" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b99a75">{i}</text>
            <rect x={x} y="96" width="118" height="64" fill="#fde8cf" stroke="#e2b075" strokeWidth="1.5" />
            <text x={x + 59} y="135" textAnchor="middle" fontSize="14.5" fontWeight="800" fill="#3e2c1d">{s}</text>
            <text x={x + 59} y="186" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#b99a75">{MM_ARRAY_ADDR[i]}</text>
          </motion.g>
        );
      })}
      <motion.rect x="38" y="90" width="606" height="76" rx="10" fill="none" stroke="#c99a5b" strokeWidth="1.4" strokeDasharray="7 6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
      <motion.text x="341" y="238" textAnchor="middle" fontSize="12" fontWeight="700" fill="#cbb392"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
        one contiguous block — addresses run consecutively (stride 48)
      </motion.text>
      <motion.text x="341" y="264" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#b99a75"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        direct access: Sub[i] jumps straight to 1000 + i × 48 — but no cell can move without moving the block
      </motion.text>
    </g>
  );
}

function MmListView() {
  const hops = [
    { d: hopPath(36, 50, 30, 20, 181, 50, 85, 28, 0), delay: 0.15 },
    { d: hopPath(181, 50, 85, 28, 605, 58, 85, 28, 34), delay: 0.3 },
    { d: hopPath(605, 58, 85, 28, 385, 156, 85, 28, -34), delay: 0.45 },
    { d: hopPath(385, 156, 85, 28, 645, 196, 85, 28, 30), delay: 0.6 },
    { d: hopPath(645, 196, 85, 28, 195, 264, 85, 28, -30), delay: 0.75 },
    { d: hopPath(195, 264, 85, 28, 330, 276, 16, 9, 22), delay: 0.9 },
  ];
  return (
    <g>
      {hops.map((h, i) => (
        <motion.path key={i} d={h.d} fill="none" stroke="#f5c889" strokeWidth="2" markerEnd="url(#mm-ah)"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: h.delay, duration: 0.45, ease: "easeInOut" }} />
      ))}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}>
        <rect x="6" y="30" width="60" height="40" rx="9" fill="#c2410c" />
        <text x="36" y="55" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">Head</text>
      </motion.g>
      {MM_SCATTER.map((n, i) => (
        <motion.g key={n.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}>
          <text x={n.x + 2} y={n.y - 7} fontSize="10" fontWeight="700" fill="#b99a75">addr {n.addr}</text>
          <rect x={n.x} y={n.y} width="170" height="56" rx="9" fill="#fde8cf" stroke="#c99a5b" strokeWidth="1.6" />
          <rect x={n.x + 104} y={n.y} width="66" height="56" rx="9" fill="#b45309" stroke="#c99a5b" strokeWidth="1.6" />
          <text x={n.x + 52} y={n.y + 33} textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#3e2c1d">{n.name}</text>
          <text x={n.x + 137} y={n.y + 22} textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffe9cf">next</text>
          <text x={n.x + 137} y={n.y + 41} textAnchor="middle" fontSize="11" fontWeight="800" fill={n.next === null ? "#ffd6d6" : "#fff7ec"}>{n.next ?? "Null"}</text>
        </motion.g>
      ))}
      <motion.text x="312" y="281" fontSize="12" fontWeight="800" fill="#f0a8a8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>Null</motion.text>
    </g>
  );
}

function MemoryMapLab() {
  const [mode, setMode] = useState<"array" | "list">("array");
  const [tick, setTick] = useState(0);
  const visit = (m: "array" | "list") => {
    setMode(m);
    setTick((t) => t + 1);
  };
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <MapPin className="h-6 w-6" style={{ color: "#f5c889" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">One playlist, two memory maps</p>
        <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · scattered memory</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
        The same five songs, stored two ways. Flip between the maps and watch where the data actually sits —
        and what carries the order.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <OpBtn tone={mode === "array" ? "warm" : "ghost"} dark={mode !== "array"} onClick={() => visit("array")}>Array — one packed block</OpBtn>
        <OpBtn tone={mode === "list" ? "warm" : "ghost"} dark={mode !== "list"} onClick={() => visit("list")}>Linked list — scattered anywhere</OpBtn>
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <svg viewBox="0 0 760 330" className="h-auto w-full" role="img"
          aria-label={mode === "array"
            ? "Array memory map: five song cells touching in one contiguous block at consecutive addresses 1000 to 1192"
            : "Linked list memory map: the same five songs scattered at unrelated addresses 0724, 2044, 1048, 1556 and 0312, connected by next pointers starting at the head, the last node pointing to Null"}>
          <defs>
            <marker id="mm-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
          </defs>
          <g key={`${mode}-${tick}`}>
            {mode === "array" ? <MmArrayView /> : <MmListView />}
          </g>
        </svg>
      </div>
      <p className="mt-3 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold" style={{ color: "#f5c889" }} aria-live="polite">
        {mode === "array"
          ? "→ Array: cells touch, addresses run 1000 · 1048 · 1096 · 1144 · 1192 — position predicts the neighbour."
          : "→ Linked list: same five songs at 0724 · 2044 · 1048 · 1556 · 0312 — the connections create the sequence, not physical proximity."}
      </p>
      <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">
        <strong style={{ color: "#f5c889" }}>Arrays store elements in consecutive memory locations</strong>; linked
        lists use <strong style={{ color: "#f5c889" }}>pointers — addresses — to link elements regardless of their
        physical memory locations</strong>.
      </p>
    </div>
  );
}

/* ---------- machine 2 · TraversalLab ---------- */

function TraversalLab() {
  const [variant, setVariant] = useState<"singly" | "doubly" | "circular">("singly");
  const [pos, setPos] = useState(0);
  const [status, setStatus] = useState("Now playing Song 1 — Head → S1 → S2 → S3 → Null. Use Next / Prev to walk the chain.");
  const pick = (v: "singly" | "doubly" | "circular") => {
    setVariant(v);
    setPos(0);
    setStatus(
      v === "singly"
        ? "Singly: one direction only — Next walks forward, Prev is dead (no prev pointers exist)."
        : v === "doubly"
          ? "Doubly: every node also carries a prev pointer — Next and Prev both work."
          : "Circular: the last node points back to the head — the walk never dead-ends."
    );
  };
  const next = () => {
    if (pos < 2) {
      setPos(pos + 1);
      setStatus(`Next → now playing Song ${pos + 2} — followed the .next pointer.`);
    } else if (variant === "circular") {
      setPos(0);
      setStatus("Repeat — Song 3.next loops back to the head: Song 1 plays again.");
    }
  };
  const prev = () => {
    if (variant === "singly") return;
    if (pos > 0) {
      setPos(pos - 1);
      setStatus(`Prev → now playing Song ${pos} — one prev pointer backwards.`);
    } else if (variant === "circular") {
      setPos(2);
      setStatus("Wrapped — in a circular list the head's previous is the last node: Song 3 plays.");
    }
  };
  const reset = () => {
    setPos(0);
    setStatus("Reset — now playing Song 1.");
  };
  const nextDisabled = variant !== "circular" && pos === 2;
  const prevDisabled = variant === "singly" || (variant === "doubly" && pos === 0);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Play className="h-6 w-6" style={{ color: "#f5c889" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Walk the chain — next / prev, three ways</p>
        <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · traversal lab</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
        Same three nodes, three navigation personalities. Switch the flavour, then walk: <strong>Next</strong>{" "}
        follows <span className="font-mono-warm">.next</span>; <strong>Prev</strong> needs a{" "}
        <span className="font-mono-warm">prev</span> pointer — only the doubly list has one — and only the circular
        list can wrap at the ends.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <svg viewBox="0 0 760 210" className="h-auto w-full" role="img"
          aria-label={variant === "singly"
            ? "Singly linked list: Head, S1, S2, S3, Null — forward arrows only, the now-playing node glows"
            : variant === "doubly"
              ? "Doubly linked list: Head, S1, S2, S3 with prev and next pointers, the now-playing node glows"
              : "Circular linked list: Head, S1, S2, S3 with the last node looping back to the head, the now-playing node glows"}>
          <defs>
            <marker id="tv-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
            <marker id="tv-back" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e0a45e" /></marker>
          </defs>
          {variant === "circular" ? (
            <g>
              <path d="M 619 68 C 560 4, 120 4, 46 66" fill="none" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#tv-back)" />
              <text x="330" y="20" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#e0a45e">last node → back to Head (repeat)</text>
            </g>
          ) : null}
          {variant === "doubly" ? (
            <g>
              <path d="M 326 134 C 308 152, 288 152, 272 138" fill="none" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#tv-back)" />
              <path d="M 540 134 C 522 152, 502 152, 486 138" fill="none" stroke="#e0a45e" strokeWidth="2" markerEnd="url(#tv-back)" />
              <text x="640" y="152" fontSize="10" fontWeight="700" fill="#e0a45e">prev pointers</text>
            </g>
          ) : null}
          <rect x="8" y="79" width="56" height="46" rx="9" fill="#c2410c" />
          <text x="36" y="107" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">Head</text>
          <line x1="64" y1="102" x2="110" y2="102" stroke="#f5c889" strokeWidth="2" markerEnd="url(#tv-ah)" />
          {[0, 1].map((i) => (
            <line key={`fw-${i}`} x1={270 + i * 214} y1="102" x2={324 + i * 214} y2="102" stroke="#f5c889" strokeWidth="2" markerEnd="url(#tv-ah)" />
          ))}
          {[0, 1, 2].map((i) => (
            <L7Node key={`n-${i}`} x={116 + i * 214} y={76} label={`S${i + 1}`} active={pos === i} />
          ))}
          {variant !== "circular" ? (
            <g>
              <line x1="698" y1="102" x2="704" y2="102" stroke="#f5c889" strokeWidth="2" markerEnd="url(#tv-ah)" />
              <text x="710" y="106" fontSize="11.5" fontWeight="800" fill="#f0a8a8">Null</text>
            </g>
          ) : null}
          <motion.rect key={`${variant}-${pos}`} x={116 + pos * 214 - 6} y={70} width={162} height={64} rx={12} fill="none" stroke="#f5c889" strokeWidth="2"
            initial={{ opacity: 0 }} animate={{ opacity: [0.35, 0.95, 0.35] }} transition={{ duration: 1.8, repeat: Infinity }} />
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone={variant === "singly" ? "warm" : "ghost"} dark={variant !== "singly"} onClick={() => pick("singly")}>Singly</OpBtn>
        <OpBtn tone={variant === "doubly" ? "warm" : "ghost"} dark={variant !== "doubly"} onClick={() => pick("doubly")}>Doubly</OpBtn>
        <OpBtn tone={variant === "circular" ? "warm" : "ghost"} dark={variant !== "circular"} onClick={() => pick("circular")}>Circular</OpBtn>
        <span className="mx-1 hidden h-6 w-px sm:block" style={{ background: "rgba(255,214,160,.25)" }} aria-hidden />
        <OpBtn tone="warm" onClick={next} disabled={nextDisabled}>
          <span className="inline-flex items-center gap-1.5"><SkipForward className="h-3.5 w-3.5" aria-hidden /> Next</span>
        </OpBtn>
        <OpBtn dark onClick={prev} disabled={prevDisabled}>
          <span className="inline-flex items-center gap-1.5"><SkipBack className="h-3.5 w-3.5" aria-hidden /> Prev</span>
        </OpBtn>
        <OpBtn dark onClick={reset}>Reset</OpBtn>
      </div>
      {variant === "singly" ? (
        <p className="mt-2 flex items-center gap-1.5 text-[.8rem] font-bold" style={{ color: "#f0a8a8" }}>
          <X className="h-3.5 w-3.5 shrink-0" aria-hidden /> a singly linked list cannot walk backwards — no prev pointers
        </p>
      ) : null}
      {nextDisabled ? (
        <p className="mt-2 flex items-center gap-1.5 text-[.8rem] font-bold" style={{ color: "#f0a8a8" }}>
          <X className="h-3.5 w-3.5 shrink-0" aria-hidden /> S3.next → Null — the chain ends here (only a circular list continues)
        </p>
      ) : null}
      {variant === "doubly" && pos === 0 ? (
        <p className="mt-2 flex items-center gap-1.5 text-[.8rem] font-bold" style={{ color: "#f0a8a8" }}>
          <X className="h-3.5 w-3.5 shrink-0" aria-hidden /> S1.prev → Null — even a doubly list stops at the head (only a circular one wraps)
        </p>
      ) : null}
      <p className="mt-2 min-h-[1.6rem] font-mono-warm text-[.85rem] font-bold" style={{ color: "#f5c889" }} aria-live="polite">{status}</p>
    </div>
  );
}

/* ---------- machine 3 · DeleteLab ---------- */

function DeleteLab() {
  const [deleted, setDeleted] = useState(false);
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Trash2 className="h-6 w-6" style={{ color: "#f0a8a8" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Delete Song 2 — one pointer rewrite</p>
        <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · delete = redirect</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
        Deletion is the mirror of insertion: <strong style={{ color: "#f5c889" }}>redirect the previous node&apos;s
        pointer</strong> around the victim. Song 2 itself is <strong>not erased</strong> — it stays in memory but
        leaves the active list.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <svg viewBox="0 0 760 196" className="h-auto w-full" role="img" aria-label="Deleting Song 2: Song 1's next pointer is redirected straight to Song 3 along a bypass arc while Song 2 fades out, still sitting in memory">
          <defs>
            <marker id="dl-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
            <marker id="dl-x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f0a8a8" /></marker>
          </defs>
          <rect x="6" y="44" width="56" height="44" rx="9" fill="#c2410c" />
          <text x="34" y="71" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">Head</text>
          <line x1="62" y1="66" x2="94" y2="66" stroke="#f5c889" strokeWidth="2" markerEnd="url(#dl-ah)" />
          <L7Node x={100} y={40} label="Song 1" />
          <motion.line x1="254" y1="66" x2="324" y2="66"
            animate={{ stroke: deleted ? "#f0a8a8" : "#f5c889", opacity: deleted ? 0.55 : 1 }}
            strokeDasharray={deleted ? "6 5" : undefined}
            markerEnd={deleted ? "url(#dl-x)" : "url(#dl-ah)"} />
          <motion.text x="289" y="52" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#f0a8a8"
            initial={false} animate={{ opacity: deleted ? 1 : 0 }}>✗ rewired away</motion.text>
          <motion.line x1="484" y1="66" x2="544" y2="66"
            animate={{ stroke: deleted ? "#6b6154" : "#f5c889", opacity: deleted ? 0.22 : 1 }}
            markerEnd={deleted ? "url(#dl-x)" : "url(#dl-ah)"} />
          <motion.path d="M 226 96 C 330 176, 490 176, 546 76" fill="none" stroke="#f5c889" strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }} animate={deleted ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }} markerEnd="url(#dl-ah)" />
          <motion.g animate={{ opacity: deleted ? 0.35 : 1 }} transition={{ duration: 0.45 }}>
            <L7Node x={330} y={40} label="Song 2" dead={deleted} />
            <motion.text x="405" y="128" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#b9a58c"
              initial={false} animate={{ opacity: deleted ? 1 : 0 }}>still in memory — no longer in the list</motion.text>
          </motion.g>
          <L7Node x={550} y={40} label="Song 3" />
          <text x="710" y="71" fontSize="11.5" fontWeight="800" fill="#f0a8a8">Null</text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={() => setDeleted(true)}>Delete Song 2</OpBtn>
        <OpBtn dark onClick={() => setDeleted(false)}>Reset</OpBtn>
        <span className="font-mono-warm text-[.82rem] font-bold" style={{ color: "#f5c889" }} aria-live="polite">
          {deleted
            ? "One pointer rewrite: Song1.next → Song 3. An array would shift every element after Song 2."
            : "Before: Head → Song 1 → Song 2 → Song 3 → Null."}
        </span>
      </div>
      <p className="mt-4 text-[.88rem] leading-relaxed text-[#cbb392]">
        The lecture&apos;s three facts about deletion: only the <strong style={{ color: "#f5c889" }}>pointer
        connections are adjusted</strong> — the previous node is redirected to point at the node after the deleted
        one; the deleted element <strong style={{ color: "#f5c889" }}>remains in memory</strong> but is no longer part
        of the active list; and the operation is <strong style={{ color: "#f5c889" }}>extremely efficient compared to
        array deletion</strong>, which must shift every later element to close the gap.
      </p>
    </div>
  );
}

/* ---------- machine 4 · ShuffleLab ---------- */

const SF_NODES = [
  { n: 1, addr: "0724", x: 60, y: 34 },
  { n: 2, addr: "2044", x: 540, y: 26 },
  { n: 3, addr: "1048", x: 120, y: 200 },
  { n: 4, addr: "1556", x: 520, y: 206 },
];

function shuffledOrder(prev: number[]): number[] {
  const p = [1, 2, 3, 4];
  do {
    for (let i = p.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [p[i], p[j]] = [p[j], p[i]];
    }
  } while (p.every((v, i) => v === prev[i]));
  return p;
}

function ShuffleLab() {
  const [order, setOrder] = useState<number[]>([1, 2, 3, 4]);
  const [count, setCount] = useState(1);
  const [status, setStatus] = useState("The original order: Head → Song 1 → Song 2 → Song 3 → Song 4 → Null.");
  const nextOf = (n: number) => {
    const i = order.indexOf(n);
    return i === 3 ? "Null" : `S${order[i + 1]}`;
  };
  const shuffle = () => {
    const p = shuffledOrder(order);
    setOrder(p);
    setCount((c) => c + 1);
    setStatus(`Ordering #${count + 1} of 24 — Head → ${p.map((n) => `Song ${n}`).join(" → ")} → Null. Same four nodes, same addresses — only the pointers were rewritten.`);
  };
  const reset = () => {
    setOrder([1, 2, 3, 4]);
    setCount(1);
    setStatus("Reset — Head → Song 1 → Song 2 → Song 3 → Song 4 → Null.");
  };
  const pts = [
    { x: 38, y: 142, hw: 32, hh: 20, id: 0 },
    ...order.map((n) => {
      const m = SF_NODES[n - 1];
      return { x: m.x + 85, y: m.y + 28, hw: 85, hh: 28, id: n };
    }),
  ];
  const hops: { d: string; key: string }[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    hops.push({
      d: hopPath(pts[i].x, pts[i].y, pts[i].hw, pts[i].hh, pts[i + 1].x, pts[i + 1].y, pts[i + 1].hw, pts[i + 1].hh, i % 2 ? -38 : 38),
      key: `${i}-${pts[i].id}-${pts[i + 1].id}`,
    });
  }
  hops.push({
    d: hopPath(pts[4].x, pts[4].y, 85, 28, 384, 264, 16, 8, -30),
    key: `4-${pts[4].id}-null`,
  });
  return (
    <div className="card-warm p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <Shuffle className="h-6 w-6" style={{ color: "#f5c889" }} aria-hidden />
        <p className="text-xl font-bold md:text-2xl">Shuffle — the songs never move</p>
        <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · reshuffling = pointers</span>
      </div>
      <p className="mt-2 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
        Four song nodes at <strong style={{ color: "#f5c889" }}>fixed memory locations</strong>. Press shuffle and
        watch the <strong>visiting path</strong> re-route around them: Head → some new order → … → Null.
      </p>
      <div className="mt-5 rounded-2xl p-4" style={{ background: "rgba(255,236,210,.05)" }}>
        <svg viewBox="0 0 760 292" className="h-auto w-full" role="img" aria-label="Four fixed song nodes and a re-routing visiting path from the head through all four songs to Null — only the arrows and next pointers change when shuffled">
          <defs>
            <marker id="sf-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f5c889" /></marker>
          </defs>
          {hops.map((h, i) => (
            <motion.path key={h.key} d={h.d} fill="none" stroke="#f5c889" strokeWidth="2" markerEnd="url(#sf-ah)"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 + i * 0.12, ease: "easeInOut" }} />
          ))}
          <rect x="6" y="122" width="64" height="40" rx="9" fill="#c2410c" />
          <text x="38" y="147" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#fff7ec">Head</text>
          {SF_NODES.map((m) => (
            <g key={m.n}>
              <rect x={m.x} y={m.y} width={170} height={56} rx={9} fill="#fde8cf" stroke="#c99a5b" strokeWidth={1.6} />
              <rect x={m.x + 104} y={m.y} width={66} height={56} rx={9} fill="#b45309" stroke="#c99a5b" strokeWidth={1.6} />
              <text x={m.x + 52} y={m.y + 33} textAnchor="middle" fontSize={14} fontWeight={800} fill="#3e2c1d">{`Song ${m.n}`}</text>
              <text x={m.x + 137} y={m.y + 22} textAnchor="middle" fontSize={9} fontWeight={700} fill="#ffe9cf">next</text>
              <text x={m.x + 137} y={m.y + 41} textAnchor="middle" fontSize={11} fontWeight={800} fill={nextOf(m.n) === "Null" ? "#ffd6d6" : "#fff7ec"}>{nextOf(m.n)}</text>
              <text x={m.x + 85} y={m.y + 74} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b99a75">addr {m.addr} · fixed</text>
            </g>
          ))}
          <text x="384" y="286" textAnchor="middle" fontSize="12" fontWeight="800" fill="#f0a8a8">Null</text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <OpBtn tone="warm" onClick={shuffle}>Shuffle</OpBtn>
        <OpBtn dark onClick={reset}>Reset</OpBtn>
        <span className="font-mono-warm text-[.82rem] font-bold" style={{ color: "#f5c889" }} aria-live="polite">{status}</span>
      </div>
      <div className="mt-2">
        <span className="chip"><Shuffle className="h-3.5 w-3.5" aria-hidden /> ordering #{count} of 24 possible orders</span>
      </div>
      <p className="mt-3 text-[.88rem] leading-relaxed text-[#cbb392]">
        <strong style={{ color: "#f5c889" }}>The data elements stay in their memory locations</strong> — every node
        keeps its address in every ordering. Only <strong style={{ color: "#f5c889" }}>the pointer connections are
        rearranged</strong> to create a different order — that is how random / shuffle playback works without
        physically moving data.
      </p>
    </div>
  );
}

/* ============================================================
   EXPORTED — ARRAYS SECTION (light)
   ============================================================ */

const OPS = [
  { op: "Read / Access", what: "Retrieve the value stored at a position", biz: "Total the sales of all stores, one by one", fast: true },
  { op: "Search", what: "Find a specific item in the array", biz: "Search a customer ID in the database", fast: false },
  { op: "Insert", what: "Add a new value at a position", biz: "Add a new employee to the staff list", fast: false },
  { op: "Update", what: "Change the value at a position", biz: "Update stock quantity after every sale", fast: true },
  { op: "Delete", what: "Remove a value from a position", biz: "Remove a discontinued product", fast: true },
];

export function AtbArraysSection() {
  return (
    <Section id="arrays">
      <SectionHead
        eyebrow="Module 2 · Linear data structures — arrays"
        title={<><span className="grad-text">Arrays</span> — numbered boxes in a row</>}
        lead="The first linear structure: one name, one block of memory, positions numbered from 0. Arrays are the structure every other structure is measured against — because of one superpower: direct access."
      />

      <ReadStep n="1" title="Two addresses, one idea" sub="Why structure beats scatter" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" style={{ color: "#be4a4a" }} />
              <span className="text-[.75rem] font-extrabold uppercase tracking-[.16em] text-[#be4a4a]">Address 1 · scattered</span>
            </div>
            <p className="mt-3 rounded-xl bg-[#fbe9e4] p-3.5 text-[.92rem] font-semibold italic leading-relaxed text-[#7c2f2f]">
              &ldquo;C/o Shri Jagat Murari, Near Quantum School, Opposite Café Youth, New City&rdquo;
            </p>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
              Everything is described by <strong>landmarks</strong> — nothing predicts its
              neighbours. Most likely an <strong>independent house</strong>: the next house could
              be anything, anywhere. <strong>Like loose variables</strong> — each one lives on its own.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5" style={{ color: "#7c9a3e" }} />
              <span className="text-[.75rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#5c7a24" }}>Address 2 · structured</span>
            </div>
            <p className="mt-3 rounded-xl p-3.5 text-[.92rem] font-semibold italic leading-relaxed" style={{ background: "#eef4dd", color: "#44621d" }}>
              &ldquo;House No. 53, New Friends Colony&rdquo;
            </p>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#2b2014]">
              A house <strong>numbered 53</strong> sits inside a planned colony — houses{" "}
              <strong>52 and 54 must be right beside it</strong>. Position predicts neighbours.{" "}
              <strong>That is an array</strong>: a row of same-type values, numbered, side by side.
            </p>
            <div className="mt-3 flex items-center gap-1.5 text-[.8rem] font-bold text-[#6f5438]">
              {[51, 52, 53, 54, 55].map((h) => (
                <span key={h} className="rounded-md px-2 py-1" style={{ background: h === 53 ? "#f6ad3c" : "#fde8cf", border: "1px solid #e2b075", color: h === 53 ? "#7c2d0a" : "#7c4a12" }}>{h}</span>
              ))}
              <ArrowRight className="h-4 w-4" style={{ color: "#c2410c" }} aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="Same type, instant access" sub="One name — Sub — five numbered cells" />
      <Reveal><ArrayStripLab /></Reveal>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <CodeBlock title="sub_array.c — fixed size, declared up front" runnable={false}
            code={`/* C / C++ — the size is fixed at declaration */
int Sub[5] = {60, 65, 70, 55, 60};

printf("%d", Sub[0]);   // 60  ← first element
printf("%d", Sub[3]);   // 55  ← direct access`} />
        </Reveal>
        <Reveal delay={100}>
          <CodeBlock title="sub_array.py — same idea, friendlier syntax" runnable={false}
            code={`# Python — square brackets instead of braces
Sub = [60, 65, 70, 55, 60]

print(Sub[0])   # 60  ← indexing starts at 0
print(Sub[3])   # 55  ← one direct jump`} />
        </Reveal>
      </div>

      <ReadStep n="3" title="Two dimensions" sub="Marks for MULTIPLE students, multiple subjects" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="max-w-4xl text-[.93rem] leading-relaxed text-[#2b2014]">
            One row of marks served <strong>one student</strong>. Now imagine every student&apos;s
            marks for every subject: a <strong>2-D array</strong> — rows indexed by{" "}
            <strong>i</strong> (student), columns indexed by <strong>j</strong> (subject). One pair
            of numbers addresses any cell: <span className="font-mono-warm font-bold text-[#a0410a]">Sub[i, j]</span>.
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fffaf1", border: "1px dashed #e5c79d" }}><TwoDGrid /></div>
          <p className="mt-3 font-mono-warm text-[.84rem] font-bold text-[#a0410a]">
            Sub[2,1] → 65 (student 2, subject 1) · Sub[4,3] → 58 (student 4, subject 3) — still one direct jump each.
          </p>
        </div>
      </Reveal>

      <ReadStep n="4" title="The five operations + business use cases" sub="What you can DO to an array — and what it costs" />
      <Reveal>
        <div className="card-warm overflow-hidden">
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table min-w-[720px]">
              <thead><tr><th>Operation</th><th>What it does</th><th>Business use case</th><th>Speed</th></tr></thead>
              <tbody>
                {OPS.map((r) => (
                  <tr key={r.op}>
                    <td className="font-bold text-[#7c4a12]">{r.op}</td>
                    <td>{r.what}</td>
                    <td>{r.biz}</td>
                    <td>
                      <span className="rounded-full px-2.5 py-1 text-[.72rem] font-extrabold" style={r.fast ? { background: "rgba(124,154,62,.16)", color: "#4c6b1f" } : { background: "rgba(245,158,11,.18)", color: "#92600a" }}>
                        {r.fast ? "✓ instantaneous" : "≈ depends on position"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <ReadStep n="5" title="How insert really works" sub="Watch the cells move — the position decides the price" />
      <Reveal><InsertTrio /></Reveal>
      <Reveal className="mt-5">
        <Callout kind="why" title="The pattern behind the trio">
          Inserting at the <strong>end</strong> is free — nothing after it. The further{" "}
          <strong>forward</strong> you insert, the more elements must <strong>shift right</strong>{" "}
          to open the gap. That is why the table says insert &ldquo;depends on position&rdquo; —
          while Read and Update never move anything, wherever you aim.
        </Callout>
      </Reveal>

      <ReadStep n="6" title="Search &amp; update by value" sub="The five-step loop the lecture walks through" />
      <Reveal>
        <StepsFlow steps={[
          { label: "Start", sub: "index = 0", icon: <Play className="h-4 w-4" style={{ color: "#c2410c" }} /> },
          { label: "Compare", sub: "is Arr[index] the search term?", icon: <Search className="h-4 w-4" style={{ color: "#c2410c" }} /> },
          { label: "Yes → stop", sub: "found — return index", icon: <Check className="h-4 w-4" style={{ color: "#5c7a24" }} /> },
          { label: "No → move on", sub: "index = index + 1", icon: <ArrowRight className="h-4 w-4" style={{ color: "#c2410c" }} /> },
          { label: "Repeat", sub: "until found or array ends", icon: <Repeat className="h-4 w-4" style={{ color: "#c2410c" }} /> },
        ]} />
      </Reveal>
      <Reveal className="mt-5">
        <CodeBlock title="array_search.pseudo — the loop, written down" runnable={false}
          code={`SEARCH(Arr, N, term):
    index ← 0
    while index < N:
        if Arr[index] = term:  return index   // yes → stop
        index ← index + 1                     // no → move on
    return NOT FOUND                          // loop ended empty-handed

UPDATE(Arr, term, newValue):                  // business: stock after a sale
    pos ← SEARCH(Arr, N, term)
    if pos ≠ NOT FOUND:  Arr[pos] ← newValue  // update is instant once found`} />
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="text-2xl font-bold">Benefits vs <span className="grad-text">challenges</span></h3>
      </Reveal>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {[
          { head: "Benefits", tone: "#5c7a24", icon: Check, items: [
            "Easy to understand — a numbered row of boxes",
            "Memory-saving — contiguous allocation, no gaps, no per-item overhead",
            "Faster processing — direct access to any position",
            "Ideal for predictable datasets — fixed count, same type (30 days of sales)",
            "The foundation for other structures — stacks, queues, matrices build on arrays",
          ] },
          { head: "Challenges", tone: "#be4a4a", icon: AlertTriangle, items: [
            "Fixed length — waste if declared too large, overflow if too small",
            "Some operations depend on the element's position (search, insert)",
            "Needs contiguous memory — one free block big enough for the whole array",
            "Inefficient for frequent modifications — inserts and deletes shift cells",
            "Resizing costs time and resources — grow means allocate + copy everything",
          ] },
        ].map((col, ci) => (
          <Reveal key={col.head} delay={ci * 120}>
            <div className="card-warm h-full p-6">
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: col.tone }}>{col.head}</p>
              <ul className="mt-3 grid gap-2.5 text-[.9rem] text-[#2b2014]">
                {col.items.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <col.icon className="mt-0.5 h-4 w-4 shrink-0" style={{ color: col.tone }} aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="Sub = [60, 65, 70, 55, 60] — what does Sub[3] return?"
            options={["70", "55", "60", "65"]} answer={1}
            explain="Indexing starts at 0, so Sub[3] is the FOURTH value: 60, 65, 70, 55 → 55. And because the position is known, the answer comes back in one direct jump." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="Which operation is instantaneous in an array, no matter how big it is?"
            options={["Search for a value", "Read at a known index", "Insert at the beginning", "Find the position of a value"]} answer={1}
            explain="Reading Sub[i] is one direct jump — the index IS the address. Search and find-position must scan; insert at the beginning shifts every element right." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — arrays" items={[
          { q: "Write the search algorithm in exactly five steps: start index = 0 → compare → yes, stop → no, increment → repeat.", hint: "Each step must be unambiguous — a computer executes it without guessing." },
          { q: "A store keeps its daily sales figure for 30 days. Why is an array the ideal structure for this?", hint: "Fixed count, same data type, and any day is read directly by its number." },
          { q: "Trace inserting 99 at the beginning of [10, 20, 30]. How many values move, and where does each go?", hint: "Every existing element shifts one position to the right — then 99 lands at index 0." },
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED — LINKED LISTS SECTION (dark)
   ============================================================ */

export function AtbListSection() {
  return (
    <Section id="linkedlists" dark>
      <SectionHead
        dark
        eyebrow="Lecture 7 · Linked lists & linear structures"
        title={<><span className="grad-text">Linked lists</span> — a playlist that never overflows</>}
        lead="The second major linear data structure after arrays. When the number of items is unknown and changes constantly, contiguity becomes a cage — links beat contiguity: every item carries the address of the next, so data can live anywhere and the chain can reshape itself in cheap pointer moves."
      />

      <ReadStep dark n="1" title="Where arrays crack" sub="Linear order, the row's three limitations — and when arrays still win" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><ArrowRight className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · linear data structures</span>
          <p className="mt-3 max-w-4xl text-[.93rem] leading-relaxed text-[#e9d7bf]">
            A <strong style={{ color: "#f5c889" }}>linear data structure</strong> arranges its elements{" "}
            <strong style={{ color: "#f5c889" }}>sequentially, in a logical order</strong>: the elements are connected
            so that reaching one item lets you move on to its neighbours. Arrays are the first member of this family —
            they use <strong>indexing</strong> for direct access, because the position IS the address. This lecture
            adds the second member, and it starts from the cracks in the first.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              { icon: Hash, tone: "#f5c889", t: "Fixed size", chip: "Lecture 7 · limitation 1", d: "The size must be defined in advance. Adding elements beyond the initial size means redefining the entire array." },
              { icon: AlertTriangle, tone: "#f0a8a8", t: "Inefficient middle modifications", chip: "Lecture 7 · limitation 2", d: "Deleting or inserting in the middle forces the other elements to shift — or leaves null spaces behind." },
              { icon: Lock, tone: "#cbb392", t: "Static structure", chip: "Lecture 7 · limitation 3", d: "Limited flexibility when data requirements change — the row cannot reshape itself." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}>
                <div className="flex items-center gap-2">
                  <c.icon className="h-5 w-5 shrink-0" style={{ color: c.tone }} aria-hidden />
                  <span className="text-[.88rem] font-extrabold leading-snug text-[#f5e6cd]">{c.t}</span>
                </div>
                <p className="mt-2 text-[.86rem] leading-relaxed text-[#cbb392]">{c.d}</p>
                <span className="chip mt-3">{c.chip}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,236,210,.04)" }}>
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#f0a8a8" }}>When arrays hurt</p>
              <ul className="mt-3 grid gap-3 text-[.9rem] leading-relaxed text-[#e9d7bf]">
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f0a8a8" }} aria-hidden />
                  <span>You need elements <strong>connected</strong> — but you don&apos;t know in advance how many there will be. An array forces you to guess a size.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f0a8a8" }} aria-hidden />
                  <span>You <strong>frequently add, delete or rearrange items</strong> — every array insert shifts cells and every resize copies the world.</span>
                </li>
              </ul>
              <p className="mt-3 text-[.85rem] leading-relaxed text-[#cbb392]">
                A music playlist does both, all day: songs get added at any position, removed, reordered — and nobody
                knows at breakfast how many songs you will have by midnight.
              </p>
            </div>
            <Callout kind="insight" dark title="Lecture 7 · best use case — keep the array when…">
              You know the <strong>exact number of elements in advance</strong> and <strong>direct access is a
              priority</strong> — 30 days of sales, a fixed 8×6 programme. Linked lists take over when the count is{" "}
              <strong>unknown in advance</strong>, items are <strong>frequently added, deleted and rearranged</strong>,
              and <strong>flexibility with dynamic sizing is essential</strong>.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="The chain in memory" sub="Head = the bus stop · node = data + pointer · last node → Null" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <span className="chip"><MapPin className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · head = the bus stop</span>
            <p className="mt-3 text-[.92rem] leading-relaxed text-[#e9d7bf]">
              Every linked list starts at a <strong style={{ color: "#f5c889" }}>head node</strong> — the{" "}
              <strong>entry point</strong>. The lecture&apos;s analogy: <strong>the bus stop</strong>. Wherever the
              buses are parked across the city, every journey boards at the same stop — you always enter the list
              through the head.
            </p>
            <p className="mt-3 text-[.92rem] leading-relaxed text-[#e9d7bf]">
              Each node carries <strong style={{ color: "#f5c889" }}>data</strong> plus a{" "}
              <strong style={{ color: "#f5c889" }}>connection — a pointer, an address</strong> — to the next node. The
              last node points to <strong style={{ color: "#f0a8a8" }}>Null</strong>: no next stop, the journey ends.
            </p>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#cbb392]">
              And the nodes themselves? <strong style={{ color: "#f5c889" }}>Not contiguous.</strong> They can be
              scattered anywhere in memory — the connections create the logical sequence, not physical proximity.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <div className="rounded-2xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><PlaylistChain /></div>
            <p className="mt-3 text-[.86rem] leading-relaxed text-[#cbb392]">
              <strong style={{ color: "#f5c889" }}>Head</strong> holds the first node&apos;s address; each node ={" "}
              <strong style={{ color: "#f5c889" }}>data + pointer</strong>; the last node&apos;s pointer is{" "}
              <strong style={{ color: "#f0a8a8" }}>Null</strong> — the chain simply ends.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-5"><MemoryMapLab /></Reveal>
      <Reveal className="mt-5">
        <Quiz source="Concept check" q="Compared with an array, linked-list nodes live…"
          options={["in consecutive memory locations", "anywhere in memory, connected by pointers", "inside the head node", "in a fixed 2-D grid"]} answer={1}
          explain="Arrays occupy consecutive locations — position predicts the neighbour. Linked-list nodes can be scattered anywhere in memory; the pointer chain defines the logical order, not physical proximity." />
      </Reveal>

      <ReadStep dark n="3" title="Three flavours" sub="Play next · play previous · repeat — then walk all three" />
      <Reveal><FlavourMinis /></Reveal>
      <Reveal className="mt-5"><TraversalLab /></Reveal>

      <ReadStep dark n="4" title="Surgery — insert & delete" sub="Rewire two pointers to insert · redirect one to delete" />
      <Reveal><RewireLab /></Reveal>
      <Reveal className="mt-5"><DeleteLab /></Reveal>

      <ReadStep dark n="5" title="Shuffle — pointers, not songs" sub="Random playback without moving a single song" />
      <Reveal><ShuffleLab /></Reveal>

      <ReadStep dark n="6" title="Lists of lists — and how to choose" sub="Nested chains — then the lecture's choosing checklist" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}><ListsOfLists /></div>
          <Callout kind="insight" dark title="This is how real apps nest flexible data">
            User → playlists → songs is <strong>a linked list whose elements are themselves linked
            lists</strong>. Because every level is a chain, users can own any number of playlists
            and each playlist can hold any number of songs — nothing was ever pre-declared.
          </Callout>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · nested lists in the wild</span>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#e9d7bf]">
            A <strong style={{ color: "#f5c889" }}>linked list of linked lists</strong> handles complex data with
            multiple levels of relationships — anywhere a thing owns a varying number of smaller things:
          </p>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {[
              { icon: GraduationCap, t: "University structure", d: "A programme → semesters → courses: each semester node owns its own chain of course nodes." },
              { icon: ListMusic, t: "Multi-playlist systems", d: "A user → playlists → songs — exactly the map above, any count at every level." },
              { icon: Network, t: "Hierarchical org data", d: "Departments → teams → people — hierarchy with a varying number of sub-elements at each level." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}>
                <c.icon className="h-5 w-5" style={{ color: "#f5c889" }} aria-hidden />
                <p className="mt-2 text-[.9rem] font-extrabold text-[#f5e6cd]">{c.t}</p>
                <p className="mt-1.5 text-[.85rem] leading-relaxed text-[#cbb392]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm p-6 md:p-8">
          <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · fixed vs variable</span>
          <p className="mt-3 text-xl font-bold md:text-2xl">The academic programme, both ways</p>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}>
              <p className="font-mono-warm text-[.74rem] font-bold uppercase tracking-wider" style={{ color: "#f5c889" }}>Situation 1 · fixed</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                <strong>8 semesters × 6 courses each</strong>, same for the whole batch → a{" "}
                <strong style={{ color: "#f5c889" }}>2-D array</strong> (Sem[i, j]). Efficient memory usage and fast
                direct access to any course.
              </p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(255,236,210,.04)" }}>
              <p className="font-mono-warm text-[.74rem] font-bold uppercase tracking-wider" style={{ color: "#f5c889" }}>Situation 2 · variable</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#e9d7bf]">
                Semesters and courses per semester <strong>vary student by student</strong> — retakes, deferrals → a{" "}
                <strong style={{ color: "#f5c889" }}>linked list of linked lists</strong>: each semester is a node
                owning its own course chain, growing and shrinking freely.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="card-warm overflow-hidden">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · choosing checklist</span>
          </div>
          <div className="overflow-x-auto p-4 md:p-6">
            <table className="warm-table min-w-[640px]">
              <thead><tr><th>Scenario</th><th>Best structure</th><th>Why</th></tr></thead>
              <tbody>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Fixed number of known elements, direct access needed</td>
                  <td>Array — a 2-D array for multiple dimensions</td>
                  <td>Efficient memory usage and fast direct access</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Variable number of elements, frequent additions / deletions</td>
                  <td>Linked list</td>
                  <td>Flexibility and ease of modification</td>
                </tr>
                <tr>
                  <td className="font-bold text-[#7c4a12]">Hierarchical structure, varying number of sub-elements</td>
                  <td>Nested linked lists</td>
                  <td>Accommodates complexity and variability at multiple levels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Concept check" q="In a singly linked list, the last node's pointer holds…"
            options={["the head's address", "Null", "its own address", "the tail's address"]} answer={1}
            explain="Null is the chain's full stop — it marks 'there is no next node'. Only a CIRCULAR list would point the last node back at the head." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="Frequent inserts anywhere + unknown final length — which structure fits best?"
            options={["Array", "Linked list", "2-D array", "Stack"]} answer={1}
            explain="A linked list inserts by rewiring two pointers — no shifting — and grows node by node, so the length never has to be predicted." />
        </Reveal>
        <Reveal>
          <Quiz source="Concept check" q="After deleting Song 2 by rewiring Song1.next → Song 3, Song 2 itself…"
            options={["is erased from memory at once", "is still in memory but no longer part of the list", "moves to the end of the list", "becomes the new head"]} answer={1}
            explain="Deletion is only a redirect of the previous node's pointer — nothing is wiped, nothing shifts. Song 2 keeps sitting at its memory address until something overwrites it; it has simply left the active chain. An array deletion, by contrast, would shift every later element." />
        </Reveal>
        <Reveal delay={100}>
          <Quiz source="Concept check" q="When a playlist is shuffled, what actually moves?"
            options={["The song files, into a new packed block", "Nothing physical — only the pointer connections change order", "The head node, to a random song", "The nodes are physically re-sorted by name"]} answer={1}
            explain="Reshuffling rewrites the pointer connections only: every node stays at its memory address, and the visiting path (Head → … → Null) defines the new playback order. That is how random playback works without physically moving data — and why reshuffling is cheap." />
        </Reveal>
      </div>
      <Reveal className="mt-5">
        <Practice title="Pen-and-paper drills — linked lists" items={[
          { q: "Trace deleting the HEAD node of Head → A → B → Null. What exactly must change, and where does A end up?", hint: "Head itself holds a pointer — repoint Head to B. Node A still sits in memory; it has simply left the list." },
          { q: "Draw four nodes scattered at made-up addresses (0312, 0724, 1556, 2044) and wire TWO different shuffle orders through them. Count how many pointers you rewrote each time.", hint: "Every node keeps its address; only the next-cells change — 4 pointer writes per shuffle (the last visited node writes Null)." },
          { q: "Insert Song 2a between Song 2 and Song 3: write the two pointer moves in order, and say why the order matters.", hint: "Song2.next → 2a first, then 2a.next → Song 3. Do it backwards and the rest of the chain is orphaned." },
          { q: "The academic programme: the regular batch is a fixed 8 semesters × 6 courses, but retakes and deferrals make real students differ. Which structure fits each situation, and why?", hint: "Fixed + known + direct access → 2-D array. Variable at two levels → linked list of linked lists." },
        ]} />
      </Reveal>
      <Reveal className="mt-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="chip"><Link2 className="h-3.5 w-3.5" aria-hidden /> Lecture 7 · key takeaways</span>
        </div>
        <Takeaways dark items={[
          <>Flexibility — <strong>dynamic sizing through pointer-based connections</strong>: the list grows and shrinks node by node, with no size declared in advance.</>,
          <>Memory efficiency — elements <strong>need not be contiguous</strong>; scattered nodes can use memory anywhere, because the links carry the order.</>,
          <>Directional variants — <strong>single, doubly and circular</strong> address different navigation requirements: play next, play previous, repeat.</>,
          <>Operation efficiency — insertion and deletion are <strong>simpler than in arrays</strong>: pointer rewiring instead of shifting elements.</>,
          <>Hierarchical applications — <strong>nested linked lists</strong> handle complex multi-level structures: programmes → semesters → courses, users → playlists → songs.</>,
          <>Practical implementation — modern languages provide <strong>built-in linked list implementations</strong>; understanding the conceptual mechanics is still essential.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
