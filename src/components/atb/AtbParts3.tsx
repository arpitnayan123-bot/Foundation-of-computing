"use client";

/* ============================================================
   ATB — "Algorithmic Thinking in Business" · shelf 02
   FILE 1/2 — Module 2 · Linear data structures
   Part 3: Arrays (light) · Linked lists (dark)
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle, ArrowRight, Check, Hash, Home, MapPin, Play, Plus, Repeat, Search, X,
} from "lucide-react";
import {
  Callout, CodeBlock, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- local button (real <button>, aria-labelled) ---------- */

function OpBtn({ onClick, children, tone = "ghost", dark = false }: {
  onClick: () => void; children: React.ReactNode; tone?: "warm" | "ghost"; dark?: boolean;
}) {
  const style: React.CSSProperties =
    tone === "warm"
      ? { background: "linear-gradient(135deg,#ea580c,#c2410c)", color: "#fff7ec" }
      : { background: dark ? "rgba(255,246,232,.06)" : "#fffdf9", color: dark ? "#f0dfc8" : "#7c4a12", border: `1px solid ${dark ? "rgba(255,214,160,.22)" : "#e5c79d"}` };
  return (
    <button type="button" onClick={onClick} style={style} className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5">
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
        <span className="chip mt-2">forward only</span>
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
        <span className="chip mt-2">forward + back</span>
        <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">A real music player also goes to the <strong>previous</strong> song.</p>
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
        <span className="chip mt-2">loops forever</span>
        <p className="mt-2 text-[.82rem] leading-relaxed text-[#cbb392]">The playlist <strong>starts over</strong> after the last song.</p>
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
        eyebrow="Module 2 · Linked lists"
        title={<><span className="grad-text">Linked lists</span> — a playlist that never overflows</>}
        lead="When the number of items is unknown and changes constantly, contiguity becomes a cage. A linked list trades direct access for total freedom: every item carries the address of the next."
      />

      <ReadStep dark n="1" title="When arrays hurt" sub="Two signals that you have outgrown the row" />
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-6">
            <ul className="grid gap-3 text-[.92rem] leading-relaxed text-[#e9d7bf]">
              <li className="flex items-start gap-3">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f0a8a8" }} aria-hidden />
                <span>You need elements <strong>connected</strong> — but you <strong>don&apos;t know in advance how many</strong> there will be. An array forces you to guess a size.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#f0a8a8" }} aria-hidden />
                <span>You <strong>frequently add, delete or move items</strong> — every array insert shifts cells and every resize copies the world.</span>
              </li>
            </ul>
            <p className="mt-4 text-[.86rem] leading-relaxed text-[#cbb392]">
              A music playlist does both, all day: songs get added at any position, removed,
              reordered — and nobody knows at breakfast how many songs you will have by midnight.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-warm h-full p-6">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#f5c889" }}>The playlist structure</p>
            <div className="mt-3 rounded-2xl p-3" style={{ background: "rgba(255,236,210,.04)" }}><PlaylistChain /></div>
            <p className="mt-3 text-[.86rem] leading-relaxed text-[#cbb392]">
              <strong style={{ color: "#f5c889" }}>Head</strong> holds the first node&apos;s address;
              each node = <strong style={{ color: "#f5c889" }}>data + pointer</strong>; the last
              node&apos;s pointer is <strong style={{ color: "#f0a8a8" }}>Null</strong> — the chain simply ends.
            </p>
          </div>
        </Reveal>
      </div>

      <ReadStep dark n="2" title="Three flavours" sub="Same chain idea — three navigation personalities" />
      <Reveal><FlavourMinis /></Reveal>

      <ReadStep dark n="3" title="Surgery in two pointer moves" sub="Insert Song 2a between Song 2 and Song 3" />
      <Reveal><RewireLab /></Reveal>

      <ReadStep dark n="4" title="Lists of lists" sub="One user, many playlists, each playlist its own chain" />
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
      </div>
      <Reveal className="mt-8">
        <Takeaways dark items={[
          <>Linear structures arrange elements in a <strong>sequence</strong> — each element has a position.</>,
          <>Arrays store data <strong>contiguously</strong> in one block, so any index is reachable <strong>directly</strong>.</>,
          <>Arrays can have <strong>more than one dimension</strong> — Sub[i, j] addresses a row and a column.</>,
          <>A linked list is flexible — <strong>the link to the next item IS the flexibility</strong>.</>,
          <>Doubly linked lists also <strong>point back</strong> — walk the chain in both directions.</>,
          <>Circular lists <strong>return to the first item</strong> — the playlist starts over.</>,
          <>There can be <strong>linked lists of linked lists</strong> — users, of playlists, of songs.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
