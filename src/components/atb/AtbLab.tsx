"use client";

/* ============================================================
   THE NO-CODE LAB — ATB (Algorithmic Thinking in Business)
   Five interactive, zero-code algorithm machines:
     01 · Array Lab        — read / search / insert / update / delete
     02 · Stack & Queue    — LIFO vs FIFO side by side
     03 · BST Explorer     — insert + 4 traversals on an SVG tree
     04 · Hash Table       — mod-10 hashing + collision chaining
     05 · Graph DFS / BFS  — a visible stack and queue drive the walk
   Pure React state + framer-motion. No Pyodide, no network.
   ============================================================ */

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowDownToLine,
  ArrowUpFromLine,
  Check,
  ChevronDown,
  CornerUpLeft,
  Eye,
  FlaskConical,
  Hash,
  Layers,
  List,
  ListPlus,
  Network,
  Pencil,
  Play,
  Plus,
  Radar,
  RotateCcw,
  Search,
  Share2,
  Sparkles,
  Trash2,
  X,
  type LucideIcon,
} from "lucide-react";

/* ---------------- shared log vocabulary ---------------- */

type LogKind = "info" | "ok" | "warn" | "err" | "gold";
interface LogEntry {
  id: number;
  text: string;
  kind: LogKind;
}

let logSeed = 0;
function mkLog(text: string, kind: LogKind = "info"): LogEntry {
  logSeed += 1;
  return { id: logSeed, text, kind };
}

const LOG_COLORS: Record<LogKind, string> = {
  info: "#e8c79a",
  ok: "#b5d08a",
  warn: "#f5c889",
  err: "#ff9d8a",
  gold: "#f5b34c",
};

/* every machine cancels its pending timers when it unmounts (tab switch) */
function useTimers() {
  const ref = useRef<number[]>([]);
  useEffect(() => () => ref.current.forEach((id) => window.clearTimeout(id)), []);
  return useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    ref.current.push(id);
  }, []);
}

/* ---------------- shared small parts ---------------- */

function LabBtn({
  onClick,
  disabled,
  variant = "ghost",
  icon: Icon,
  children,
  ariaLabel,
  className = "",
}: {
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "ghost" | "gold" | "danger";
  icon?: LucideIcon;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
}) {
  const styles: Record<string, string> = {
    primary:
      "bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_8px_18px_-8px_rgba(194,65,12,.8)] hover:from-[#d94e08] hover:to-[#a63a0a]",
    ghost:
      "border border-[#e5cfa9] bg-[#fffdf9] text-[#7c4a12] hover:bg-[#f9e8d2] hover:text-[#c2410c]",
    gold: "border border-[#eed9a8] bg-[#fdf3df] text-[#a16207] hover:bg-[#f7e7c6]",
    danger:
      "border border-[#efccc2] bg-[#fdf1ee] text-[#b04a3a] hover:bg-[#f9e2dc]",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full px-3.5 text-[.74rem] font-extrabold tracking-wide transition-all active:scale-[.97] disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100 ${styles[variant]} ${className}`}
    >
      {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
      {children}
    </button>
  );
}

function LabInput({
  value,
  onChange,
  label,
  width = "w-20",
  numeric = false,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
  width?: string;
  numeric?: boolean;
}) {
  return (
    <label className="flex items-center gap-1.5 text-[.64rem] font-extrabold uppercase tracking-[.14em] text-[#a08a6a]">
      {label}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={label}
        inputMode={numeric ? "numeric" : undefined}
        className={`h-11 ${width} rounded-xl border border-[#e5cfa9] bg-[#fffdf9] px-2.5 text-center font-mono-warm text-[.85rem] font-bold text-[#2b1d10] outline-none transition focus:border-[#e0a45e] focus:ring-2 focus:ring-[#f59e0b]/25`}
      />
    </label>
  );
}

function OpLog({
  entries,
  title = "operation log",
  emptyHint,
  maxH = "max-h-48",
}: {
  entries: LogEntry[];
  title?: string;
  emptyHint: string;
  maxH?: string;
}) {
  return (
    <div className="code-shell overflow-hidden">
      <div className="code-bar">
        <span className="code-dot" style={{ background: "#e4674a" }} />
        <span className="code-dot" style={{ background: "#e8a13c" }} />
        <span className="code-dot" style={{ background: "#8fae5d" }} />
        <span className="code-title ml-1 font-mono-warm">{title}</span>
        <span className="ml-auto text-[.56rem] font-black tracking-[.16em] text-[#8a6d4f]">
          NEWEST FIRST
        </span>
      </div>
      <div
        aria-live="polite"
        className={`${maxH} overflow-y-auto p-3 font-mono-warm text-[.72rem] leading-relaxed [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#4a3020] [&::-webkit-scrollbar-track]:bg-transparent`}
      >
        {entries.length === 0 ? (
          <p className="text-[#8a6d4f]">{emptyHint}</p>
        ) : (
          <AnimatePresence initial={false}>
            {entries.map((e) => (
              <motion.p
                key={e.id}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22 }}
                className="flex gap-2 py-[3px]"
              >
                <span
                  aria-hidden
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: LOG_COLORS[e.kind] }}
                />
                <span style={{ color: LOG_COLORS[e.kind] }}>{e.text}</span>
              </motion.p>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

function StationHead({
  n,
  icon: Icon,
  title,
  lead,
}: {
  n: string;
  icon: LucideIcon;
  title: string;
  lead: string;
}) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_8px_18px_-8px_rgba(194,65,12,.8)]">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="eyebrow">Station {n}</p>
        <h3 className="text-lg font-black leading-tight text-[#2b1d10] sm:text-xl">{title}</h3>
        <p className="text-[.8rem] leading-snug text-muted-warm">{lead}</p>
      </div>
    </div>
  );
}

function OverflowFlash({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, x: [0, -8, 8, -5, 5, 0] }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.45 }}
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
    >
      <span className="flex items-center gap-1.5 rounded-full bg-[#be4a4a] px-4 py-2 text-[.68rem] font-black tracking-[.16em] text-white shadow-[0_16px_30px_-12px_rgba(190,74,74,.9)]">
        <AlertTriangle className="h-3.5 w-3.5" />
        {text}
      </span>
    </motion.div>
  );
}

/* ============================================================
   STATION 01 — ARRAY LAB
   ============================================================ */

const ARR_CAP = 10;
const ARR_PRESET = [60, 65, 70, 55, 60];

function ArrayLab() {
  const schedule = useTimers();
  const [cells, setCells] = useState<{ id: number; v: number }[]>(() =>
    ARR_PRESET.map((v, i) => ({ id: i, v }))
  );
  const idRef = useRef(ARR_PRESET.length);
  const [val, setVal] = useState("70");
  const [pos, setPos] = useState("2");
  const [readIdx, setReadIdx] = useState<number | null>(null);
  const [probe, setProbe] = useState<number | null>(null);
  const [foundIdx, setFoundIdx] = useState<number | null>(null);
  const [popIdx, setPopIdx] = useState<number | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);

  const addLog = useCallback((text: string, kind: LogKind = "info") => {
    setLog((prev) => [mkLog(text, kind), ...prev].slice(0, 40));
  }, []);
  const lock = useCallback(() => {
    busyRef.current = true;
    setBusy(true);
  }, []);
  const unlock = useCallback(() => {
    busyRef.current = false;
    setBusy(false);
  }, []);

  function guardVal(): number | null {
    const v = Number(val);
    if (val.trim() === "" || !Number.isFinite(v)) {
      addLog("type a number in the value box first", "warn");
      return null;
    }
    return v;
  }
  function guardPos(): number | null {
    const p = Number(pos);
    if (pos.trim() === "" || !Number.isInteger(p) || p < 0) {
      addLog("position must be a whole number, 0 or more", "warn");
      return null;
    }
    return p;
  }

  function doRead() {
    if (busyRef.current) return;
    const p = guardPos();
    if (p === null) return;
    if (p >= cells.length) {
      addLog(`Arr[${p}] is an empty slot — nothing to read (values sit at 0…${cells.length - 1})`, "warn");
      return;
    }
    lock();
    setReadIdx(p);
    addLog(`Arr[${p}] → ${cells[p].v} · instantaneous — the index jumps straight to the box (O(1))`, "ok");
    schedule(() => {
      setReadIdx(null);
      unlock();
    }, 1600);
  }

  function doSearch() {
    if (busyRef.current) return;
    const target = guardVal();
    if (target === null) return;
    if (cells.length === 0) {
      addLog(`search(${target}) — the array is empty, nothing to scan`, "warn");
      return;
    }
    lock();
    addLog(`search(${target}) — start at index 0, compare cell by cell…`, "info");
    let i = 0;
    const step = () => {
      if (i >= cells.length) {
        setProbe(null);
        addLog(`${target} is not in the array — all ${cells.length} cells probed · linear search is O(n)`, "err");
        unlock();
        return;
      }
      setProbe(i);
      if (cells[i].v === target) {
        setProbe(null);
        setFoundIdx(i);
        addLog(`is Arr[${i}] == ${target}? YES — found after ${i + 1} probe${i === 0 ? "" : "s"} · O(n) worst case`, "ok");
        schedule(() => {
          setFoundIdx(null);
          unlock();
        }, 1800);
        return;
      }
      addLog(`is Arr[${i}] == ${target}? no… next cell`, "info");
      i += 1;
      schedule(step, 400);
    };
    schedule(step, 420);
  }

  function insertAt(idx: number, where: string) {
    if (busyRef.current) return;
    const v = guardVal();
    if (v === null) return;
    if (cells.length >= ARR_CAP) {
      addLog(`array is FULL — capacity ${ARR_CAP}. Fixed size is the price arrays pay for instant index access.`, "err");
      return;
    }
    if (idx > cells.length) {
      addLog(`can only insert at 0…${cells.length} — arrays stay contiguous, no gaps in the middle`, "warn");
      return;
    }
    lock();
    const moved = cells.length - idx;
    addLog(
      moved === 0
        ? `insert ${v} at index ${idx} (${where}) — nothing after it, no shifts · O(1)`
        : `insert ${v} at index ${idx} (${where}) — ${moved} element${moved === 1 ? "" : "s"} shift${moved === 1 ? "s" : ""} right · O(n)`,
      moved === 0 ? "ok" : "gold"
    );
    const id = ++idRef.current;
    setCells((prev) => {
      const next = [...prev];
      next.splice(idx, 0, { id, v });
      return next;
    });
    schedule(unlock, 480);
  }

  function doUpdate() {
    if (busyRef.current) return;
    const v = guardVal();
    const p = guardPos();
    if (v === null || p === null) return;
    if (p >= cells.length) {
      addLog(`Arr[${p}] is empty — update needs an existing cell (0…${Math.max(cells.length - 1, 0)})`, "warn");
      return;
    }
    lock();
    setPopIdx(p);
    setCells((prev) => prev.map((c, i) => (i === p ? { ...c, v } : c)));
    addLog(`Arr[${p}] = ${v} (was ${cells[p].v}) · overwrite in place — instantaneous (O(1))`, "ok");
    schedule(() => {
      setPopIdx(null);
      unlock();
    }, 560);
  }

  function doDelete() {
    if (busyRef.current) return;
    const p = guardPos();
    if (p === null) return;
    if (cells.length === 0) {
      addLog("array is empty — nothing to delete", "warn");
      return;
    }
    if (p >= cells.length) {
      addLog(`Arr[${p}] is already an empty slot — delete from 0…${cells.length - 1}`, "warn");
      return;
    }
    lock();
    const v = cells[p].v;
    const shifted = cells.length - 1 - p;
    addLog(
      shifted === 0
        ? `delete Arr[${p}] (${v}) — last cell, nothing shifts left · O(1)`
        : `delete Arr[${p}] (${v}) — ${shifted} element${shifted === 1 ? "" : "s"} slide left to close the gap · O(n)`,
      shifted === 0 ? "ok" : "gold"
    );
    setCells((prev) => prev.filter((_, i) => i !== p));
    schedule(unlock, 480);
  }

  /* ---- strip children (cells + empty slots, direct AnimatePresence kids) ---- */
  const strip: ReactNode[] = [];
  for (let i = 0; i < ARR_CAP; i++) {
    const cell = i < cells.length ? cells[i] : null;
    if (cell) {
      const active = probe === i;
      const isFound = foundIdx === i;
      const isRead = readIdx === i;
      const popping = popIdx === i;
      strip.push(
        <motion.div
          key={`c${cell.id}`}
          layout
          initial={{ opacity: 0, scale: 0.5, y: -16 }}
          animate={{ opacity: 1, scale: popping ? [1, 1.18, 1] : 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.25 } }}
          transition={popping ? { duration: 0.4 } : { type: "spring", bounce: 0.3, duration: 0.45 }}
          className="flex w-11 shrink-0 flex-col items-center gap-1 sm:w-14"
        >
          <div className="flex h-5 items-center justify-center">
            {active ? (
              <motion.span
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex flex-col items-center leading-none text-[#ea580c]"
              >
                <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                <span className="text-[.5rem] font-black tracking-[.12em]">PROBE</span>
              </motion.span>
            ) : isFound ? (
              <span className="text-[.5rem] font-black tracking-[.12em] text-[#d97706]">FOUND!</span>
            ) : isRead ? (
              <span className="text-[.5rem] font-black tracking-[.12em] text-[#c2410c]">READ</span>
            ) : null}
          </div>
          <div
            className={`flex h-11 w-full items-center justify-center rounded-lg border font-mono-warm text-sm font-extrabold transition-colors sm:h-14 sm:text-base ${
              active
                ? "border-[#ea580c] bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white shadow-[0_10px_20px_-8px_rgba(234,88,12,.75)]"
                : isFound
                ? "border-[#d97706] bg-[#f59e0b] text-white shadow-[0_0_0_4px_rgba(245,158,11,.3)]"
                : isRead
                ? "animate-pulse border-[#f59e0b] bg-[#fff3dc] text-[#c2410c] shadow-[0_0_0_3px_rgba(245,158,11,.35)]"
                : popping
                ? "border-[#ea580c] bg-[#ffedd5] text-[#c2410c]"
                : "border-[#e8d5b5] bg-[#fffdf9] text-[#2b1d10]"
            }`}
          >
            {cell.v}
          </div>
          <span className="font-mono-warm text-[.6rem] font-bold text-[#a08a6a]">{i}</span>
        </motion.div>
      );
    } else {
      strip.push(
        <motion.div
          key={`e${i}`}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex w-11 shrink-0 flex-col items-center gap-1 sm:w-14"
        >
          <div className="h-5" />
          <div className="h-11 w-full rounded-lg border-2 border-dashed border-[#e8d5b5] bg-[#fdf8ef]/40 sm:h-14" />
          <span className="font-mono-warm text-[.6rem] font-bold text-[#cbb694]">{i}</span>
        </motion.div>
      );
    }
  }

  return (
    <div className="card-warm p-4 text-[#2b1d10] sm:p-6">
      <StationHead
        n="01"
        icon={List}
        title="Arrays — instant by index"
        lead="Ten fixed boxes, numbered from 0. Reading a box is free; moving neighbours is not."
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="chip">capacity {ARR_CAP}</span>
              <span className="chip">length {cells.length}</span>
              <span className="ml-auto hidden text-[.62rem] font-bold text-[#a08a6a] sm:block">
                ↔ scroll the strip if it overflows
              </span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-2 sm:gap-2">
              <AnimatePresence initial={false} mode="popLayout">
                {strip}
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <LabInput label="value" value={val} onChange={setVal} numeric />
              <LabInput label="position" value={pos} onChange={setPos} numeric />
            </div>
            <div className="flex flex-wrap gap-2">
              <LabBtn icon={Eye} onClick={doRead} disabled={busy}>Read Arr[pos]</LabBtn>
              <LabBtn icon={Search} onClick={doSearch} disabled={busy} variant="primary">Search value</LabBtn>
              <LabBtn icon={Plus} onClick={() => insertAt(cells.length, "end")} disabled={busy}>Insert at end</LabBtn>
              <LabBtn icon={CornerUpLeft} onClick={() => insertAt(0, "beginning")} disabled={busy}>Insert at 0</LabBtn>
              <LabBtn icon={ListPlus} onClick={() => { const p = guardPos(); if (p !== null) insertAt(p, `position ${p}`); }} disabled={busy}>Insert at pos</LabBtn>
              <LabBtn icon={Pencil} onClick={doUpdate} disabled={busy}>Update</LabBtn>
              <LabBtn icon={Trash2} onClick={doDelete} disabled={busy} variant="danger">Delete</LabBtn>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <OpLog
            entries={log}
            emptyHint="Read, search, insert, update, delete — every move is narrated here with its cost."
          />
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="eyebrow mb-2">the price list</p>
            <table className="warm-table">
              <thead>
                <tr>
                  <th>Operation</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Read Arr[i]</td>
                  <td><b>instantaneous</b> · O(1)</td>
                </tr>
                <tr>
                  <td>Update Arr[i]</td>
                  <td><b>instantaneous</b> · O(1)</td>
                </tr>
                <tr>
                  <td>Search a value</td>
                  <td><b>depends</b> · O(n) cell-by-cell scan</td>
                </tr>
                <tr>
                  <td>Insert at i</td>
                  <td><b>depends</b> · everything after i shifts</td>
                </tr>
                <tr>
                  <td>Delete at i</td>
                  <td><b>instant at the end</b> · shifts in the middle</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-[.68rem] italic leading-snug text-muted-warm">
              Index math is free — moving neighbours is not. That trade-off is the whole story of arrays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STATION 02 — STACK & QUEUE
   ============================================================ */

const SQ_CAP = 6;

function StackQueueLab() {
  const schedule = useTimers();
  const [sItems, setSItems] = useState<{ id: number; label: string }[]>([]);
  const [qItems, setQItems] = useState<{ id: number; label: string }[]>([]);
  const [sVal, setSVal] = useState("3");
  const [qVal, setQVal] = useState("7");
  const [sPeek, setSPeek] = useState(false);
  const [qPeek, setQPeek] = useState(false);
  const [sFlash, setSFlash] = useState<string | null>(null);
  const [qFlash, setQFlash] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const idRef = useRef(0);

  const addLog = useCallback((text: string, kind: LogKind = "info") => {
    setLog((prev) => [mkLog(text, kind), ...prev].slice(0, 8));
  }, []);
  const lock = useCallback(() => {
    busyRef.current = true;
    setBusy(true);
  }, []);
  const unlock = useCallback(() => {
    busyRef.current = false;
    setBusy(false);
  }, []);

  function flash(side: "s" | "q", text: string) {
    if (side === "s") {
      setSFlash(text);
      schedule(() => setSFlash(null), 1300);
    } else {
      setQFlash(text);
      schedule(() => setQFlash(null), 1300);
    }
  }

  /* ---- stack ops ---- */
  function doPush() {
    if (busyRef.current) return;
    const v = sVal.trim();
    if (!v) {
      addLog("stack · type a value to push first", "warn");
      return;
    }
    if (sItems.length >= SQ_CAP) {
      flash("s", "STACK OVERFLOW");
      addLog(`stack · push(${v}) → OVERFLOW — capacity ${SQ_CAP} is full, the top plate has nowhere to go`, "err");
      return;
    }
    idRef.current += 1;
    const item = { id: idRef.current, label: v };
    setSItems((prev) => [...prev, item]);
    addLog(`stack · push(${v}) — drops on top · size ${sItems.length + 1}`, "ok");
    schedule(unlock, 120);
    lock();
  }

  function doPop() {
    if (busyRef.current) return;
    if (sItems.length === 0) {
      flash("s", "STACK UNDERFLOW");
      addLog("stack · pop() → UNDERFLOW — the stack is empty, nothing to remove", "err");
      return;
    }
    lock();
    const top = sItems[sItems.length - 1];
    setSItems((prev) => prev.slice(0, -1));
    addLog(`stack · pop() → ${top.label} — the last one in is the first one out`, "gold");
    schedule(unlock, 380);
  }

  function doSPeek() {
    if (busyRef.current) return;
    if (sItems.length === 0) {
      addLog("stack · peek() → nothing on the stack", "warn");
      return;
    }
    lock();
    setSPeek(true);
    addLog(`stack · peek() → ${sItems[sItems.length - 1].label} (top) — just look, no removal · O(1)`, "ok");
    schedule(() => {
      setSPeek(false);
      unlock();
    }, 1500);
  }

  function doSSize() {
    if (busyRef.current) return;
    const n = sItems.length;
    addLog(`stack · size() → ${n} ${n === 1 ? "item" : "items"} · a counter, not a walk — O(1)`, "info");
  }

  /* ---- queue ops ---- */
  function doEnqueue() {
    if (busyRef.current) return;
    const v = qVal.trim();
    if (!v) {
      addLog("queue · type a value to enqueue first", "warn");
      return;
    }
    if (qItems.length >= SQ_CAP) {
      flash("q", "QUEUE OVERFLOW");
      addLog(`queue · enqueue(${v}) → OVERFLOW — capacity ${SQ_CAP} is full, join the waitlist`, "err");
      return;
    }
    idRef.current += 1;
    const item = { id: idRef.current, label: v };
    setQItems((prev) => [...prev, item]);
    addLog(`queue · enqueue(${v}) — joins at the rear · size ${qItems.length + 1}`, "ok");
    schedule(unlock, 120);
    lock();
  }

  function doDequeue() {
    if (busyRef.current) return;
    if (qItems.length === 0) {
      flash("q", "QUEUE UNDERFLOW");
      addLog("queue · dequeue() → UNDERFLOW — the line is empty, nobody to serve", "err");
      return;
    }
    lock();
    const front = qItems[0];
    setQItems((prev) => prev.slice(1));
    addLog(`queue · dequeue() → ${front.label} — first come, first served`, "gold");
    schedule(unlock, 380);
  }

  function doQPeek() {
    if (busyRef.current) return;
    if (qItems.length === 0) {
      addLog("queue · peek() → the line is empty", "warn");
      return;
    }
    lock();
    setQPeek(true);
    addLog(`queue · peek() → ${qItems[0].label} (front) — next to be served · O(1)`, "ok");
    schedule(() => {
      setQPeek(false);
      unlock();
    }, 1500);
  }

  /* ---- stack slots: fixed 6, top of stack on top ---- */
  const stackRows: ReactNode[] = [];
  for (let r = 0; r < SQ_CAP; r++) {
    const fromTop = r - (SQ_CAP - sItems.length);
    const item = fromTop >= 0 ? sItems[sItems.length - 1 - fromTop] : null;
    if (item) {
      const isTop = fromTop === 0;
      const peeked = isTop && sPeek;
      stackRows.push(
        <motion.div
          key={item.id}
          layout
          initial={{ y: -70, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -80, opacity: 0, scale: 0.85, transition: { duration: 0.32 } }}
          transition={{ type: "spring", bounce: 0.42, duration: 0.5 }}
          className={`flex h-12 items-center justify-between rounded-xl px-3 font-mono-warm text-sm font-extrabold ${
            peeked
              ? "shadow-[0_0_0_3px_rgba(245,158,11,.45)] ring-2 ring-[#f59e0b]"
              : ""
          } ${isTop ? "bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white shadow-[0_10px_20px_-10px_rgba(234,88,12,.7)]" : "border border-[#eadbc2] bg-[#fffdf9] text-[#5c4326]"}`}
        >
          <span>{item.label}</span>
          {isTop ? (
            <span className="rounded-full bg-white/25 px-1.5 py-0.5 text-[.5rem] font-black tracking-[.14em]">TOP</span>
          ) : null}
        </motion.div>
      );
    } else {
      stackRows.push(
        <div key={`se${r}`} className="h-12 rounded-xl border-2 border-dashed border-[#e8d5b5] bg-[#fdf6e9]/50" />
      );
    }
  }

  /* ---- queue slots: fixed 6, front on the left ---- */
  const queueRow: ReactNode[] = [];
  qItems.forEach((it, i) => {
    const peeked = i === 0 && qPeek;
    queueRow.push(
      <motion.div
        key={it.id}
        layout
        initial={{ x: 96, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        exit={{ x: -96, opacity: 0, transition: { duration: 0.3 } }}
        transition={{ type: "spring", bounce: 0.28, duration: 0.45 }}
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono-warm text-sm font-extrabold sm:w-14 ${
          peeked ? "shadow-[0_0_0_3px_rgba(245,158,11,.45)] ring-2 ring-[#f59e0b]" : ""
        } ${i === 0 ? "bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white" : "border border-[#eadbc2] bg-[#fffdf9] text-[#5c4326]"}`}
      >
        {it.label}
      </motion.div>
    );
  });
  for (let i = qItems.length; i < SQ_CAP; i++) {
    queueRow.push(
      <div key={`qe${i}`} className="h-12 w-12 shrink-0 rounded-xl border-2 border-dashed border-[#e8d5b5] bg-[#fdf6e9]/50 sm:w-14" />
    );
  }

  return (
    <div className="card-warm p-4 text-[#2b1d10] sm:p-6">
      <StationHead
        n="02"
        icon={Layers}
        title="Stack &amp; Queue — LIFO vs FIFO, side by side"
        lead="Same values, two disciplines. The container decides who leaves first."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {/* ---- stack column ---- */}
        <div className="relative rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">
              Stack — last in, first out
            </p>
            <span className="chip">capacity {SQ_CAP}</span>
          </div>
          <div className="relative mx-auto flex w-full max-w-[240px] flex-col gap-1.5">
            <AnimatePresence initial={false} mode="popLayout">
              {stackRows}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {sFlash ? <OverflowFlash key="sf" text={sFlash} /> : null}
          </AnimatePresence>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <LabInput label="value" value={sVal} onChange={setSVal} width="w-16" />
            <LabBtn icon={ArrowDownToLine} onClick={doPush} disabled={busy} variant="primary">Push</LabBtn>
            <LabBtn icon={ArrowUpFromLine} onClick={doPop} disabled={busy}>Pop</LabBtn>
            <LabBtn icon={Eye} onClick={doSPeek} disabled={busy}>Peek</LabBtn>
            <LabBtn icon={Hash} onClick={doSSize} disabled={busy}>Size</LabBtn>
          </div>
          <p className="mt-3 text-[.72rem] italic leading-snug text-muted-warm">
            Feels like <span className="font-bold not-italic text-[#c2410c]">Undo (Ctrl + Z)</span> — the last
            thing you did is the first thing undone.
          </p>
        </div>

        {/* ---- queue column ---- */}
        <div className="relative rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">
              Queue — first in, first out
            </p>
            <span className="chip">capacity {SQ_CAP}</span>
          </div>
          <div className="mb-1.5 flex items-center justify-between text-[.56rem] font-black tracking-[.16em] text-[#a08a6a]">
            <span>← FRONT (leaves first)</span>
            <span>REAR (joins here) →</span>
          </div>
          <div className="relative">
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              <AnimatePresence initial={false} mode="popLayout">
                {queueRow}
              </AnimatePresence>
            </div>
          </div>
          <AnimatePresence>
            {qFlash ? <OverflowFlash key="qf" text={qFlash} /> : null}
          </AnimatePresence>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="chip">front: {qItems[0]?.label ?? "—"}</span>
            <span className="chip">rear: {qItems[qItems.length - 1]?.label ?? "—"}</span>
            <span className="chip">size: {qItems.length}</span>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <LabInput label="value" value={qVal} onChange={setQVal} width="w-16" />
            <LabBtn icon={ArrowDownToLine} onClick={doEnqueue} disabled={busy} variant="primary">Enqueue</LabBtn>
            <LabBtn icon={ArrowUpFromLine} onClick={doDequeue} disabled={busy}>Dequeue</LabBtn>
            <LabBtn icon={Eye} onClick={doQPeek} disabled={busy}>Peek</LabBtn>
          </div>
          <p className="mt-3 text-[.72rem] italic leading-snug text-muted-warm">
            Feels like a <span className="font-bold not-italic text-[#c2410c]">popcorn line / IRCTC waitlist</span> —
            first come, first served.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <OpLog
          entries={log}
          title="shared log — last 8 operations"
          emptyHint="Push, pop, enqueue, dequeue — try to trigger an overflow and an underflow too."
        />
      </div>
    </div>
  );
}

/* ============================================================
   STATION 03 — BST EXPLORER
   ============================================================ */

interface BstTree {
  root: number | null;
  nodes: Record<number, { l: number | null; r: number | null }>;
}
const EMPTY_TREE: BstTree = { root: null, nodes: {} };
const BST_MAX_NODES = 15;
const BST_MAX_DEPTH = 4;

type BstInsertResult =
  | { ok: true; tree: BstTree; depth: number }
  | { ok: false; reason: "dup" | "full" | "depth"; depth?: number };

function bstInsert(tree: BstTree, v: number): BstInsertResult {
  if (Object.keys(tree.nodes).length >= BST_MAX_NODES) return { ok: false, reason: "full" };
  if (tree.root === null) {
    return { ok: true, depth: 0, tree: { root: v, nodes: { [v]: { l: null, r: null } } } };
  }
  if (tree.nodes[v]) return { ok: false, reason: "dup" };
  const nodes = { ...tree.nodes };
  let cur = tree.root;
  let d = 0;
  for (let guard = 0; guard < 64; guard++) {
    d += 1;
    const node = nodes[cur];
    const goLeft = v < cur;
    const next = goLeft ? node.l : node.r;
    if (next === null) {
      if (d > BST_MAX_DEPTH) return { ok: false, reason: "depth", depth: d };
      nodes[cur] = goLeft ? { ...node, l: v } : { ...node, r: v };
      nodes[v] = { l: null, r: null };
      return { ok: true, depth: d, tree: { root: tree.root, nodes } };
    }
    cur = next;
  }
  return { ok: false, reason: "full" };
}

function bstLayout(tree: BstTree) {
  const order: number[] = [];
  const depth: Record<number, number> = {};
  const walk = (v: number | null, d: number) => {
    if (v === null) return;
    walk(tree.nodes[v].l, d + 1);
    order.push(v);
    depth[v] = d;
    walk(tree.nodes[v].r, d + 1);
  };
  walk(tree.root, 0);
  const COL = 58;
  const ROW = 92;
  const PADX = 34;
  const PADY = 42;
  const pos: Record<number, { x: number; y: number; d: number }> = {};
  order.forEach((v, i) => {
    const onlyRoot = order.length === 1;
    pos[v] = { x: onlyRoot ? (COL * 7) / 2 + PADX : PADX + (i + 0.5) * COL, y: PADY + depth[v] * ROW, d: depth[v] };
  });
  const edges: { a: number; b: number }[] = [];
  Object.entries(tree.nodes).forEach(([k, n]) => {
    const v = Number(k);
    if (n.l !== null) edges.push({ a: v, b: n.l });
    if (n.r !== null) edges.push({ a: v, b: n.r });
  });
  const maxD = order.length ? Math.max(...order.map((v) => depth[v])) : 0;
  const w = Math.max(order.length, 7) * COL + PADX * 2;
  const h = Math.max(maxD + 1, 2) * ROW + PADY * 2 - 12;
  return { pos, edges, w, h };
}

type TravKind = "pre" | "in" | "post" | "level";
const TRAV_RULE: Record<TravKind, string> = {
  pre: "Pre-order = Root → Left → Right — copy the node first, then descend. Great for cloning a tree.",
  in: "In-order = Left → Root → Right — on a BST this reads the values out SORTED.",
  post: "Post-order = Left → Right → Root — children before parents. Great for safe deletion.",
  level: "Level order = row by row, top to bottom — that is a queue at work (BFS on a tree).",
};
const TRAV_NAME: Record<TravKind, string> = { pre: "Pre-order", in: "In-order", post: "Post-order", level: "Level" };

function collectSeq(tree: BstTree, kind: TravKind): { v: number; path: number[] }[] {
  const out: { v: number; path: number[] }[] = [];
  const dfs = (v: number | null, path: number[]) => {
    if (v === null) return;
    const p = [...path, v];
    if (kind === "pre") out.push({ v, path: p });
    dfs(tree.nodes[v].l, p);
    if (kind === "in") out.push({ v, path: p });
    dfs(tree.nodes[v].r, p);
    if (kind === "post") out.push({ v, path: p });
  };
  if (kind === "level" && tree.root !== null) {
    const q: { v: number; path: number[] }[] = [{ v: tree.root, path: [tree.root] }];
    while (q.length > 0) {
      const s = q.shift() as { v: number; path: number[] };
      out.push(s);
      const n = tree.nodes[s.v];
      if (n.l !== null) q.push({ v: n.l, path: [...s.path, n.l] });
      if (n.r !== null) q.push({ v: n.r, path: [...s.path, n.r] });
    }
  } else {
    dfs(tree.root, []);
  }
  return out;
}

const edgeKey = (a: number, b: number) => (a < b ? `${a}-${b}` : `${b}-${a}`);

function BstLab() {
  const schedule = useTimers();
  const [tree, setTree] = useState<BstTree>(EMPTY_TREE);
  const [insVal, setInsVal] = useState("25");
  const [token, setToken] = useState<{ v: number; x: number; y: number } | null>(null);
  const [tokenPath, setTokenPath] = useState<number[]>([]);
  const [justAdded, setJustAdded] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  const [current, setCurrent] = useState<number | null>(null);
  const [pathEdges, setPathEdges] = useState<Set<string>>(new Set());
  const [out, setOut] = useState<number[]>([]);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);

  const addLog = useCallback((text: string, kind: LogKind = "info") => {
    setLog((prev) => [mkLog(text, kind), ...prev].slice(0, 40));
  }, []);
  const lock = useCallback(() => {
    busyRef.current = true;
    setBusy(true);
  }, []);
  const unlock = useCallback(() => {
    busyRef.current = false;
    setBusy(false);
  }, []);

  const L = bstLayout(tree);

  function clearRuns() {
    setVisited([]);
    setCurrent(null);
    setPathEdges(new Set());
    setOut([]);
    setToken(null);
    setTokenPath([]);
    setJustAdded(null);
  }

  function doInsert() {
    if (busyRef.current) return;
    const v = Number(insVal);
    if (insVal.trim() === "" || !Number.isInteger(v) || v < 0 || v > 999) {
      addLog("pick a whole number between 0 and 999", "warn");
      return;
    }
    const res = bstInsert(tree, v);
    if (!res.ok) {
      if (res.reason === "dup") addLog(`${v} is already in the tree — BST keys stay unique, one node per value`, "warn");
      else if (res.reason === "depth") addLog(`${v} would sink to depth ${res.depth} — this sandbox caps depth at ${BST_MAX_DEPTH}. Real BSTs go deeper — sketch it on paper!`, "warn");
      else addLog(`the sandbox holds ${BST_MAX_NODES} nodes — reset the tree to keep planting`, "warn");
      return;
    }
    lock();
    clearRuns();
    if (tree.root === null) {
      addLog(`insert ${v} — the tree is empty, so ${v} becomes the root`, "ok");
      setToken({ v, x: bstLayout(EMPTY_TREE).w / 2, y: -26 });
      schedule(() => {
        setTree(res.tree);
        setToken(null);
        setJustAdded(v);
        addLog(`${v} settles as the root · insert is O(h), h = tree height`, "ok");
        schedule(() => {
          setJustAdded(null);
          unlock();
        }, 500);
      }, 460);
      return;
    }
    const seq: { node: number; dir: "left" | "right" }[] = [];
    let cur: number = tree.root;
    for (let guard = 0; guard < 64; guard++) {
      const dir: "left" | "right" = v < cur ? "left" : "right";
      seq.push({ node: cur, dir });
      const next = dir === "left" ? tree.nodes[cur].l : tree.nodes[cur].r;
      if (next === null) break;
      cur = next;
    }
    const parent = seq[seq.length - 1].node;
    addLog(`insert ${v} — a token falls from the root, comparing as it goes…`, "info");
    setToken({ v, x: L.pos[tree.root].x, y: -26 });
    let i = 0;
    const stepDown = () => {
      const s = seq[i];
      setTokenPath((prev) => [...prev, s.node]);
      setToken({ v, x: L.pos[s.node].x, y: L.pos[s.node].y });
      addLog(`at ${s.node} — ${v} ${v < s.node ? "<" : ">"} ${s.node} · go ${s.dir}`, "info");
      i += 1;
      if (i < seq.length) {
        schedule(stepDown, 470);
      } else {
        schedule(() => {
          setToken({ v, x: L.pos[parent].x, y: L.pos[parent].y + 44 });
          addLog(`empty slot under ${parent} — ${v} settles here`, "info");
          schedule(() => {
            setTree(res.tree);
            setToken(null);
            setJustAdded(v);
            addLog(`insert ${v} done — ${seq.length} comparison${seq.length === 1 ? "" : "s"} then settle · O(h)`, "ok");
            schedule(() => {
              setJustAdded(null);
              unlock();
            }, 520);
          }, 380);
        }, 470);
      }
    };
    schedule(stepDown, 470);
  }

  function runTraversal(kind: TravKind) {
    if (busyRef.current) return;
    if (tree.root === null) {
      addLog("grow a tree first — insert a few numbers or load the demo", "warn");
      return;
    }
    lock();
    clearRuns();
    addLog(TRAV_RULE[kind], "gold");
    const seq = collectSeq(tree, kind);
    let i = 0;
    const tick = () => {
      if (i >= seq.length) {
        addLog(
          `${TRAV_NAME[kind]} order — ${seq.map((s) => s.v).join(" ")}${kind === "in" ? " · sorted, as promised" : ""}`,
          "ok"
        );
        schedule(() => {
          setCurrent(null);
          unlock();
        }, 600);
        return;
      }
      const s = seq[i];
      setVisited((prev) => [...prev, s.v]);
      setCurrent(s.v);
      setPathEdges(new Set(s.path.slice(0, -1).map((p, j) => edgeKey(p, s.path[j + 1]))));
      setOut((prev) => [...prev, s.v]);
      i += 1;
      schedule(tick, 500);
    };
    schedule(tick, 80);
  }

  function loadDemo() {
    if (busyRef.current) return;
    let t: BstTree = EMPTY_TREE;
    for (const v of [50, 30, 70, 20, 40, 60, 80]) {
      const r = bstInsert(t, v);
      if (r.ok) t = r.tree;
    }
    setTree(t);
    clearRuns();
    addLog("demo tree loaded — 50 30 70 20 40 60 80 inserted in that order. Left = smaller, right = bigger.", "gold");
  }

  function resetTree() {
    if (busyRef.current) return;
    setTree(EMPTY_TREE);
    clearRuns();
    addLog("tree cleared — 15 node slots free again", "info");
  }

  const nodeCount = Object.keys(tree.nodes).length;

  return (
    <div className="card-warm p-4 text-[#2b1d10] sm:p-6">
      <StationHead
        n="03"
        icon={Network}
        title="Binary Search Tree + traversals"
        lead="Left is smaller, right is bigger — and in-order reads the whole tree sorted."
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <LabInput label="number" value={insVal} onChange={setInsVal} width="w-24" numeric />
              <LabBtn icon={Plus} onClick={doInsert} disabled={busy} variant="primary">Insert</LabBtn>
              <LabBtn icon={Sparkles} onClick={loadDemo} disabled={busy} variant="gold">Load demo tree</LabBtn>
              <LabBtn icon={RotateCcw} onClick={resetTree} disabled={busy}>Reset</LabBtn>
              <span className="chip ml-auto">nodes {nodeCount}/{BST_MAX_NODES} · depth cap {BST_MAX_DEPTH}</span>
            </div>
            {tree.root === null ? (
              <div className="flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-[#e8d5b5] bg-[#fdf8ef]/50 p-4 text-center">
                <p className="text-[.8rem] font-semibold text-[#b39871]">
                  Empty forest. Insert a number, or load the demo tree (50 · 30 · 70 · 20 · 40 · 60 · 80).
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto pb-1">
                <svg viewBox={`0 0 ${L.w} ${L.h}`} style={{ minWidth: 560 }} className="h-auto w-full select-none" role="img" aria-label="Binary search tree diagram">
                  {L.edges.map((e) => {
                    const a = L.pos[e.a];
                    const b = L.pos[e.b];
                    const hot = pathEdges.has(edgeKey(e.a, e.b)) || (tokenPath.includes(e.a) && tokenPath.includes(e.b));
                    return (
                      <motion.line
                        key={`${e.a}-${e.b}`}
                        animate={{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }}
                        transition={{ type: "spring", bounce: 0.12, duration: 0.4 }}
                        stroke={hot ? "#ea580c" : "#ddc7a4"}
                        strokeWidth={hot ? 3.5 : 2.5}
                        strokeLinecap="round"
                      />
                    );
                  })}
                  {Object.entries(L.pos).map(([k, p]) => {
                    const v = Number(k);
                    const isVisited = visited.includes(v);
                    const isCurrent = current === v;
                    const onTokenPath = tokenPath.includes(v);
                    const orderIdx = visited.indexOf(v);
                    return (
                      <motion.g
                        key={v}
                        initial={false}
                        animate={{ x: p.x, y: p.y }}
                        transition={{ type: "spring", bounce: 0.12, duration: 0.4 }}
                      >
                        {isCurrent ? (
                          <motion.circle
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth={3}
                            animate={{ r: [24, 31, 24], opacity: [0.7, 0.1, 0.7] }}
                            transition={{ repeat: Infinity, duration: 1.05 }}
                          />
                        ) : null}
                        <motion.circle
                          initial={{ r: 0 }}
                          animate={{ r: 21 }}
                          transition={{ type: "spring", bounce: 0.45, duration: 0.5, delay: justAdded === v ? 0 : p.d * 0.05 }}
                          fill={isCurrent ? "#f59e0b" : isVisited ? "#ea580c" : "#fffaf3"}
                          stroke={onTokenPath ? "#f59e0b" : isVisited || isCurrent ? "#c2410c" : "#d9b88c"}
                          strokeWidth={onTokenPath || isVisited || isCurrent ? 3 : 2}
                          style={isCurrent ? { filter: "drop-shadow(0 0 8px rgba(245,158,11,.85))" } : undefined}
                        />
                        <motion.text
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          textAnchor="middle"
                          y={5}
                          className="font-mono-warm"
                          fontSize={14}
                          fontWeight={800}
                          fill={isVisited || isCurrent ? "#fff7ec" : "#2b1d10"}
                        >
                          {v}
                        </motion.text>
                        {orderIdx >= 0 ? (
                          <g>
                            <circle cx={-16} cy={-16} r={8} fill="#2b1d10" />
                            <text textAnchor="middle" y={-12.5} fontSize={9} fontWeight={800} fill="#ffd9a3" className="font-mono-warm">
                              {orderIdx + 1}
                            </text>
                          </g>
                        ) : null}
                      </motion.g>
                    );
                  })}
                  {token ? (
                    <motion.g initial={false} animate={{ x: token.x, y: token.y }} transition={{ type: "spring", bounce: 0.25, duration: 0.42 }}>
                      <circle r={17} fill="url(#atbTokenGrad)" stroke="#fff7ec" strokeWidth={2.5} style={{ filter: "drop-shadow(0 6px 12px rgba(194,65,12,.5))" }} />
                      <text textAnchor="middle" y={5} fontSize={13} fontWeight={800} fill="#fff7ec" className="font-mono-warm">
                        {token.v}
                      </text>
                    </motion.g>
                  ) : null}
                  <defs>
                    <linearGradient id="atbTokenGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#c2410c" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="eyebrow mb-2">traversals — watch each rule walk the tree</p>
            <div className="flex flex-wrap gap-2">
              <LabBtn onClick={() => runTraversal("pre")} disabled={busy || tree.root === null} variant="primary">Pre-order</LabBtn>
              <LabBtn onClick={() => runTraversal("in")} disabled={busy || tree.root === null} variant="primary">In-order</LabBtn>
              <LabBtn onClick={() => runTraversal("post")} disabled={busy || tree.root === null} variant="primary">Post-order</LabBtn>
              <LabBtn onClick={() => runTraversal("level")} disabled={busy || tree.root === null} variant="primary">Level order</LabBtn>
            </div>
            <div className="mt-3 flex min-h-[40px] flex-wrap items-center gap-1.5 rounded-xl border border-[#f0e2cc] bg-[#fffdf9] p-2">
              {out.length === 0 ? (
                <span className="px-1 text-[.7rem] font-semibold text-[#b39871]">output builds here…</span>
              ) : (
                <AnimatePresence initial={false}>
                  {out.map((v, i) => (
                    <motion.span
                      key={`${v}-${i}`}
                      layout
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", bounce: 0.5, duration: 0.4 }}
                      className="rounded-lg bg-[#ffedd5] px-2 py-1 font-mono-warm text-[.74rem] font-extrabold text-[#c2410c]"
                    >
                      {v}
                    </motion.span>
                  ))}
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <OpLog
            entries={log}
            emptyHint="Insert a number and watch the token branch left / right. Then run a traversal."
          />
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="eyebrow mb-2">tree rules</p>
            <ul className="space-y-1.5 text-[.76rem] leading-snug">
              <li className="flex gap-2"><span className="font-mono-warm font-extrabold text-[#c2410c]">01</span> smaller values go <b>left</b>, bigger go <b>right</b>.</li>
              <li className="flex gap-2"><span className="font-mono-warm font-extrabold text-[#c2410c]">02</span> keys are unique — duplicates are refused.</li>
              <li className="flex gap-2"><span className="font-mono-warm font-extrabold text-[#c2410c]">03</span> insert &amp; search cost O(h) — h is the height.</li>
              <li className="flex gap-2"><span className="font-mono-warm font-extrabold text-[#c2410c]">04</span> in-order traversal of a BST = sorted order.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STATION 04 — HASH TABLE
   ============================================================ */

const BUCKET_COUNT = 10;
const BUCKET_MAX = 4;
const HASH_DEMO = ["M24SME012", "P25SME002", "B26SME112", "M25SME044"];

function hashKey(k: string): { idx: number; rule: string } {
  const m = k.match(/(\d+)\s*$/);
  if (m) {
    const tail = m[1];
    const n = Number(tail);
    return { idx: n % 10, rule: `numeric tail ${tail} → ${n} mod 10` };
  }
  let s = 0;
  for (let i = 0; i < k.length; i++) s += k.charCodeAt(i);
  return { idx: s % 10, rule: `no trailing digits → char codes sum to ${s} → ${s} mod 10` };
}

function HashLab() {
  const schedule = useTimers();
  const [buckets, setBuckets] = useState<string[][]>(() =>
    Array.from({ length: BUCKET_COUNT }, () => [] as string[])
  );
  const bucketsRef = useRef(buckets);
  const [keyVal, setKeyVal] = useState("M24SME012");
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);

  const addLog = useCallback((text: string, kind: LogKind = "info") => {
    setLog((prev) => [mkLog(text, kind), ...prev].slice(0, 40));
  }, []);
  const lock = useCallback(() => {
    busyRef.current = true;
    setBusy(true);
  }, []);
  const unlock = useCallback(() => {
    busyRef.current = false;
    setBusy(false);
  }, []);
  const commit = useCallback((nb: string[][]) => {
    bucketsRef.current = nb;
    setBuckets(nb);
  }, []);

  function land(k: string, done: () => void) {
    const { idx, rule } = hashKey(k);
    addLog(`hash("${k}") → ${rule} = bucket ${idx}`, "info");
    setActiveIdx(idx);
    setActiveKey(k);
    schedule(() => {
      const chain = bucketsRef.current[idx];
      if (chain.includes(k)) {
        addLog(`"${k}" is already sitting in bucket ${idx} — a hash map keeps one entry per key`, "warn");
      } else if (chain.length >= BUCKET_MAX) {
        addLog(`bucket ${idx} is FULL (${BUCKET_MAX} keys max in this sandbox) — a real table would grow and rehash`, "err");
      } else {
        commit(bucketsRef.current.map((b, i) => (i === idx ? [...b, k] : b)));
        if (chain.length === 0) {
          addLog(`bucket ${idx} ← "${k}" — empty bucket, straight in · O(1)`, "ok");
        } else {
          addLog(`collision! bucket ${idx} already holds ${chain.join(", ")} → hook "${k}" onto the chain (hash chaining)`, "gold");
        }
      }
      schedule(() => {
        setActiveKey(null);
        done();
      }, 460);
    }, 640);
  }

  function doHash() {
    if (busyRef.current) return;
    const k = keyVal.trim();
    if (!k) {
      addLog("type a roll number (or any key) first", "warn");
      return;
    }
    lock();
    land(k, unlock);
  }

  function loadDemo() {
    if (busyRef.current) return;
    lock();
    addLog("loading the lecture demo — watch buckets 2 and 4", "gold");
    let i = 0;
    const stepDemo = () => {
      if (i >= HASH_DEMO.length) {
        addLog("demo loaded — bucket 2 chains three roll numbers; that vertical chain IS hash chaining", "ok");
        unlock();
        return;
      }
      const k = HASH_DEMO[i];
      setKeyVal(k);
      land(k, () => {
        i += 1;
        schedule(stepDemo, 140);
      });
    };
    stepDemo();
  }

  function resetTable() {
    if (busyRef.current) return;
    commit(Array.from({ length: BUCKET_COUNT }, () => [] as string[]));
    setActiveIdx(null);
    setActiveKey(null);
    addLog("table cleared — ten empty buckets, zero collisions", "info");
  }

  return (
    <div className="card-warm p-4 text-[#2b1d10] sm:p-6">
      <StationHead
        n="04"
        icon={Hash}
        title="mod 10 hashing + collisions"
        lead="Roll numbers in, bucket indexes out — and what to do when two keys land together."
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <input
                value={keyVal}
                onChange={(e) => setKeyVal(e.target.value)}
                aria-label="Key to hash"
                placeholder="e.g. M24SME012"
                className="h-11 min-w-0 flex-1 rounded-xl border border-[#e5cfa9] bg-[#fffdf9] px-3 font-mono-warm text-[.85rem] font-bold text-[#2b1d10] outline-none transition placeholder:font-semibold placeholder:text-[#cbb694] focus:border-[#e0a45e] focus:ring-2 focus:ring-[#f59e0b]/25"
              />
              <LabBtn icon={Hash} onClick={doHash} disabled={busy} variant="primary">Hash it</LabBtn>
              <LabBtn icon={Sparkles} onClick={loadDemo} disabled={busy} variant="gold">Load demo</LabBtn>
              <LabBtn icon={RotateCcw} onClick={resetTable} disabled={busy}>Reset</LabBtn>
            </div>
            <p className="mt-2 font-mono-warm text-[.68rem] font-bold text-[#8a6d4f]">
              index = trailing digits mod 10 &nbsp;·&nbsp; no digits? sum the character codes mod 10
            </p>
          </div>

          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="grid grid-cols-5 items-start gap-2 lg:grid-cols-10">
              {buckets.map((chain, i) => {
                const active = activeIdx === i;
                return (
                  <div key={i} className="flex min-w-0 flex-col gap-1">
                    <div className="flex h-6 items-end justify-center">
                      {active ? (
                        <motion.span
                          key={`arrow-${i}-${activeKey ?? ""}`}
                          initial={{ x: -220, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                          aria-hidden
                        >
                          <ChevronDown className="h-4 w-4 animate-bounce text-[#d97706]" />
                        </motion.span>
                      ) : null}
                    </div>
                    <div
                      className={`flex min-h-[110px] flex-col items-center gap-1 rounded-xl border p-1.5 transition-colors ${
                        active ? "border-[#f59e0b] bg-[#fff8e8] shadow-[0_0_0_3px_rgba(245,158,11,.25)]" : "border-[#e8d5b5] bg-[#fffdf9]"
                      }`}
                    >
                      <span className="font-mono-warm text-[10px] font-black text-[#a08a6a]">{i}</span>
                      <div className="flex w-full flex-col items-center gap-0.5">
                        <AnimatePresence initial={false}>
                          {chain.map((k, j) => (
                            <motion.div
                              key={k}
                              layout
                              initial={{ opacity: 0, y: -16, scale: 0.75 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.6 }}
                              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                              className="flex w-full flex-col items-center gap-0.5"
                            >
                              {j > 0 ? (
                                <span aria-hidden className="font-mono-warm text-[9px] font-bold leading-none text-[#c99a63]">
                                  ↓
                                </span>
                              ) : null}
                              <span
                                title={k}
                                className="w-full truncate rounded-md border border-[#e8d5b5] bg-[#fff3dc] px-1 py-1 text-center font-mono-warm text-[9px] font-bold text-[#7c4a12] sm:text-[10px]"
                              >
                                {k}
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                        {chain.length === 0 ? (
                          <span className="py-2 text-[9px] font-semibold text-[#cbb694]">empty</span>
                        ) : null}
                      </div>
                      {chain.length >= 2 ? (
                        <span className="mt-auto w-full rounded-full border border-[#eed9a8] bg-[#fdf0d2] px-1 py-0.5 text-center text-[8px] font-black leading-tight text-[#a16207] sm:text-[9px]">
                          collision → chaining
                        </span>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <OpLog
            entries={log}
            emptyHint='Type a roll number and press "Hash it" — or load the demo to reproduce the lecture picture.'
          />
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="eyebrow mb-2">what makes a hash good</p>
            <ul className="space-y-2">
              {(
                [
                  ["Fast", "computing the index is quick — no long math at run time"],
                  ["Consistent", "the same key always lands in the same bucket"],
                  ["Even spread", "keys distribute across all 10 buckets, not one pile"],
                  ["Few collisions", "and when they happen, chaining absorbs them"],
                ] as const
              ).map(([t, d]) => (
                <li key={t} className="flex items-start gap-2 text-[.76rem] leading-snug">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef4dd] text-[#5c7a2e]">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>
                    <b>{t}</b> — {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   STATION 05 — GRAPH DFS / BFS
   ============================================================ */

const G_POS: Record<string, { x: number; y: number }> = {
  C: { x: 90, y: 64 },
  A: { x: 280, y: 64 },
  B: { x: 470, y: 64 },
  S: { x: 90, y: 208 },
  P: { x: 208, y: 208 },
  Q: { x: 352, y: 208 },
  R: { x: 470, y: 208 },
  X: { x: 150, y: 352 },
  Y: { x: 410, y: 352 },
};
const G_EDGES: [string, string][] = [
  ["C", "S"],
  ["A", "P"],
  ["A", "Q"],
  ["B", "R"],
  ["S", "P"],
  ["Q", "R"],
  ["S", "X"],
  ["P", "X"],
  ["Q", "Y"],
  ["R", "Y"],
  ["X", "Y"],
];
/* Traversal neighbour order follows the lecture figure — with this order the
   runs reproduce the printed outputs exactly:
   DFS from A → A P X S C Q Y R B   ·   BFS from A → A P Q X Y S R C B */
const G_ADJ: Record<string, string[]> = {
  A: ["P", "Q"],
  P: ["X", "S"],
  S: ["C", "X"],
  Q: ["Y", "R"],
  R: ["B", "Y"],
  X: [],
  Y: [],
  C: [],
  B: [],
};
const G_NODES = Object.keys(G_ADJ);

interface GItem {
  n: string;
  id: number;
}
interface GStep {
  ds: GItem[];
  action: "start" | "push" | "pop" | "visit" | "skip" | "enqueue" | "dequeue" | "done";
  node: string | null;
  note: string;
  visited: string[];
  order: string[];
  pathEdges: [string, string][];
}

function buildSteps(kind: "dfs" | "bfs", start: string): GStep[] {
  const steps: GStep[] = [];
  const ds: GItem[] = [{ n: start, id: 0 }];
  let nextId = 1;
  const visited: string[] = [];
  const order: string[] = [];
  const parent: Record<string, string | null> = { [start]: null };
  const snap = (action: GStep["action"], node: string | null, note: string) => {
    const chain: string[] = [];
    let c: string | null = node;
    while (c) {
      chain.unshift(c);
      c = parent[c] ?? null;
    }
    const pe: [string, string][] = [];
    for (let i = 0; i + 1 < chain.length; i++) pe.push([chain[i], chain[i + 1]]);
    steps.push({ ds: ds.map((x) => ({ ...x })), action, node, note, visited: [...visited], order: [...order], pathEdges: pe });
  };
  snap("start", start, kind === "dfs" ? `stack ← push ${start}` : `queue ← enqueue ${start}`);
  while (ds.length > 0) {
    const it = kind === "dfs" ? (ds.pop() as GItem) : (ds.shift() as GItem);
    const n = it.n;
    if (visited.includes(n)) {
      snap("skip", n, kind === "dfs" ? `pop ${n} — already visited, skip` : `dequeue ${n} — already visited, skip`);
      continue;
    }
    visited.push(n);
    order.push(n);
    snap("visit", n, `visit ${n}${G_ADJ[n].length === 0 ? " — dead end, backtrack" : ""}`);
    const nbrs = G_ADJ[n];
    if (nbrs.length > 0) {
      if (kind === "dfs") {
        for (let i = nbrs.length - 1; i >= 0; i--) {
          if (!visited.includes(nbrs[i])) parent[nbrs[i]] = n;
          ds.push({ n: nbrs[i], id: nextId });
          nextId += 1;
        }
        snap("push", n, `push ${nbrs.join(", ")} onto the stack — go deep`);
      } else {
        const fresh = nbrs.filter((x) => !visited.includes(x) && !ds.some((d) => d.n === x));
        for (const x of fresh) {
          parent[x] = n;
          ds.push({ n: x, id: nextId });
          nextId += 1;
        }
        if (fresh.length > 0) snap("enqueue", n, `enqueue ${fresh.join(", ")} — expand level by level`);
      }
    }
  }
  snap("done", null, `${kind.toUpperCase()} complete — path: ${order.join(" ")}`);
  return steps;
}

function GStackView({ ds }: { ds: GItem[] }) {
  const slots = Math.max(6, ds.length);
  const rev = [...ds].reverse();
  const rows: ReactNode[] = [];
  for (let r = 0; r < slots; r++) {
    const it = rev[r];
    rows.push(
      it ? (
        <motion.div
          key={it.id}
          layout
          initial={{ y: -46, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -52, opacity: 0, transition: { duration: 0.24 } }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.4 }}
          className={`flex h-10 items-center justify-between rounded-lg px-2.5 font-mono-warm text-[.8rem] font-extrabold ${
            r === 0
              ? "bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white"
              : "border border-[#eadbc2] bg-[#fffdf9] text-[#5c4326]"
          }`}
        >
          <span>{it.n}</span>
          {r === 0 ? <span className="text-[.5rem] font-black tracking-[.14em] opacity-80">TOP</span> : null}
        </motion.div>
      ) : (
        <div key={`gs${r}`} className="h-10 rounded-lg border-2 border-dashed border-[#e8d5b5]/70" />
      )
    );
  }
  return (
    <div className="relative flex flex-col gap-1.5">
      <AnimatePresence initial={false} mode="popLayout">
        {rows}
      </AnimatePresence>
    </div>
  );
}

function GQueueView({ ds }: { ds: GItem[] }) {
  const slots = Math.max(6, ds.length);
  const cells: ReactNode[] = [];
  ds.forEach((it, i) => {
    cells.push(
      <motion.div
        key={it.id}
        layout
        initial={{ x: 70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -70, opacity: 0, transition: { duration: 0.24 } }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-mono-warm text-[.8rem] font-extrabold ${
          i === 0
            ? "bg-gradient-to-br from-[#f59e0b] to-[#ea580c] text-white"
            : "border border-[#eadbc2] bg-[#fffdf9] text-[#5c4326]"
        }`}
      >
        {it.n}
      </motion.div>
    );
  });
  for (let i = ds.length; i < slots; i++) {
    cells.push(<div key={`gq${i}`} className="h-11 w-11 shrink-0 rounded-lg border-2 border-dashed border-[#e8d5b5]/70" />);
  }
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1">
      <AnimatePresence initial={false} mode="popLayout">
        {cells}
      </AnimatePresence>
    </div>
  );
}

function GraphLab() {
  const schedule = useTimers();
  const [start, setStart] = useState("A");
  const [run, setRun] = useState<{ kind: "dfs" | "bfs"; steps: GStep[]; idx: number } | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);

  const addLog = useCallback((text: string, kind: LogKind = "info") => {
    setLog((prev) => [mkLog(text, kind), ...prev].slice(0, 40));
  }, []);
  const lock = useCallback(() => {
    busyRef.current = true;
    setBusy(true);
  }, []);
  const unlock = useCallback(() => {
    busyRef.current = false;
    setBusy(false);
  }, []);

  const step = run ? run.steps[run.idx] : null;
  const visitedSet = new Set(step?.visited ?? []);
  const hotEdges = new Set((step?.pathEdges ?? []).map(([a, b]) => (a < b ? `${a}-${b}` : `${b}-${a}`)));

  function doRun(kind: "dfs" | "bfs") {
    if (busyRef.current) return;
    const steps = buildSteps(kind, start);
    lock();
    setRun({ kind, steps, idx: 0 });
    addLog(
      kind === "dfs"
        ? `DFS from ${start} — a STACK decides who is next: last in, first out.`
        : `BFS from ${start} — a QUEUE decides who is next: first in, first out.`,
      "gold"
    );
    let i = 0;
    const tick = () => {
      i += 1;
      setRun((r) => (r ? { ...r, idx: Math.min(i, steps.length - 1) } : r));
      if (i >= steps.length - 1) {
        addLog(`${kind.toUpperCase()} path — ${steps[steps.length - 1].order.join(" ")}`, "ok");
        unlock();
        return;
      }
      schedule(tick, 450);
    };
    schedule(tick, 450);
  }

  function resetRun() {
    if (busyRef.current) return;
    setRun(null);
    addLog("reset — pick a start node and run again", "info");
  }

  return (
    <div className="card-warm p-4 text-[#2b1d10] sm:p-6">
      <StationHead
        n="05"
        icon={Share2}
        title="Graph DFS/BFS — stack vs queue traversal"
        lead="The same graph, two orders to explore it — the data structure picks the path."
      />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <div className="overflow-x-auto pb-1">
              <svg viewBox="0 0 560 420" style={{ minWidth: 480 }} className="h-auto w-full select-none" role="img" aria-label="Graph with nodes A B C P Q R S X Y">
                {G_EDGES.map(([a, b]) => {
                  const p1 = G_POS[a];
                  const p2 = G_POS[b];
                  const hot = hotEdges.has(a < b ? `${a}-${b}` : `${b}-${a}`);
                  return (
                    <line
                      key={`${a}${b}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke={hot ? "#ea580c" : "#ddc7a4"}
                      strokeWidth={hot ? 4 : 2.5}
                      strokeLinecap="round"
                      style={{ transition: "stroke .3s, stroke-width .3s" }}
                    />
                  );
                })}
                {G_NODES.map((n) => {
                  const p = G_POS[n];
                  const isVisited = visitedSet.has(n);
                  const isCurrent = step?.node === n && step.action !== "done" && step.action !== "skip";
                  const isStart = n === start;
                  const orderIdx = step ? step.order.indexOf(n) : -1;
                  return (
                    <g
                      key={n}
                      transform={`translate(${p.x},${p.y})`}
                      onClick={() => {
                        if (!busyRef.current) setStart(n);
                      }}
                      style={{ cursor: busy ? "default" : "pointer" }}
                    >
                      {isStart ? <circle r={30} fill="none" stroke="#d97706" strokeWidth={2} strokeDasharray="5 4" /> : null}
                      {isCurrent ? (
                        <motion.circle
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth={3.5}
                          animate={{ r: [27, 35, 27], opacity: [0.75, 0.1, 0.75] }}
                          transition={{ repeat: Infinity, duration: 1.05 }}
                        />
                      ) : null}
                      <circle
                        r={24}
                        fill={isCurrent ? "#f59e0b" : isVisited ? "#fb923c" : "#fffaf3"}
                        stroke={isCurrent ? "#b45309" : isVisited ? "#ea580c" : "#d9b88c"}
                        strokeWidth={isStart && !isVisited && !isCurrent ? 3 : 2}
                        style={{ transition: "fill .3s, stroke .3s" }}
                      />
                      <text textAnchor="middle" y={5.5} fontSize={15} fontWeight={800} className="font-mono-warm" fill={isVisited || isCurrent ? "#fff7ec" : "#2b1d10"}>
                        {n}
                      </text>
                      {isStart ? (
                        <text textAnchor="middle" y={-36} fontSize={10} fontWeight={800} fill="#b45309" className="font-mono-warm">
                          start
                        </text>
                      ) : null}
                      {orderIdx >= 0 ? (
                        <g>
                          <circle cx={-17} cy={-17} r={8.5} fill="#2b1d10" />
                          <text textAnchor="middle" y={-13.5} fontSize={9} fontWeight={800} fill="#ffd9a3" className="font-mono-warm">
                            {orderIdx + 1}
                          </text>
                        </g>
                      ) : null}
                      {isVisited ? (
                        <g>
                          <circle cx={18} cy={-16} r={7.5} fill="#fff7ec" stroke="#c2410c" strokeWidth={1.5} />
                          <path d="M 14.6 -16 l 2.4 2.6 l 4.4 -5" fill="none" stroke="#c2410c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      ) : null}
                    </g>
                  );
                })}
              </svg>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-[.62rem] font-black uppercase tracking-[.14em] text-[#a08a6a]">start node</span>
              {G_NODES.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    if (!busyRef.current) setStart(n);
                  }}
                  disabled={busy}
                  aria-pressed={start === n}
                  aria-label={`Set ${n} as start node`}
                  className={`flex h-11 min-w-[44px] items-center justify-center rounded-full px-2 font-mono-warm text-[.8rem] font-extrabold transition disabled:cursor-not-allowed disabled:opacity-45 ${
                    start === n
                      ? "bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white shadow-[0_8px_16px_-8px_rgba(194,65,12,.8)]"
                      : "border border-[#e5cfa9] bg-[#fffdf9] text-[#7c4a12] hover:bg-[#f9e8d2]"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <LabBtn icon={ArrowDownRight} onClick={() => doRun("dfs")} disabled={busy} variant="primary">Run DFS</LabBtn>
              <LabBtn icon={Radar} onClick={() => doRun("bfs")} disabled={busy} variant="primary">Run BFS</LabBtn>
              <LabBtn icon={RotateCcw} onClick={resetRun} disabled={busy}>Reset</LabBtn>
              <span className="chip ml-auto hidden sm:inline-flex">tap a node (or a chip) to move the start</span>
            </div>
            {step?.action === "done" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 rounded-xl border border-[#f0d9ba] bg-[#fff3dc] px-4 py-3"
              >
                <p className="font-mono-warm text-[.8rem] font-extrabold text-[#9a3412]">
                  {run?.kind.toUpperCase()} Path: {step.order.join(" → ")}
                </p>
              </motion.div>
            ) : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
              <p className="flex items-center gap-2 text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">
                <ArrowDownRight className="h-4 w-4" /> DFS — go deep, backtrack
              </p>
              <p className="mt-1.5 text-[.74rem] leading-snug text-muted-warm">
                One neighbour, then that neighbour&apos;s neighbour… until a dead end, then climb back.
                Answers: <b className="text-[#2b1d10]">does a path exist?</b>
              </p>
            </div>
            <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
              <p className="flex items-center gap-2 text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">
                <Radar className="h-4 w-4" /> BFS — expand level by level
              </p>
              <p className="mt-1.5 text-[.74rem] leading-snug text-muted-warm">
                All neighbours first, then their neighbours — rings around the start.
                Answers: <b className="text-[#2b1d10]">minimum degree of separation?</b>
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="mb-2 text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">the stack — LIFO</p>
            <GStackView ds={step?.ds ?? []} />
            <p aria-live="polite" className="mt-2 min-h-[18px] font-mono-warm text-[.66rem] font-bold text-[#8a6d4f]">
              {run?.kind === "dfs" && step ? step.note : "run DFS to watch the stack push & pop"}
            </p>
          </div>
          <div className="rounded-2xl border border-[#f0e2cc] bg-[#fffaf3] p-4">
            <p className="mb-2 text-[.7rem] font-black uppercase tracking-[.16em] text-[#c2410c]">the queue — FIFO</p>
            <GQueueView ds={step?.ds ?? []} />
            <p aria-live="polite" className="mt-2 min-h-[18px] font-mono-warm text-[.66rem] font-bold text-[#8a6d4f]">
              {run?.kind === "bfs" && step ? step.note : "run BFS to watch the queue enqueue & dequeue"}
            </p>
          </div>
          <OpLog
            entries={log}
            emptyHint="Pick a start node, then run DFS or BFS — each step lands in the log."
            maxH="max-h-40"
          />
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   THE LAB SHELL — header + tab strip + panels
   ============================================================ */

const TABS = [
  { id: "array", label: "Array Lab", title: "Arrays — instant by index", icon: List },
  { id: "stack", label: "Stack & Queue", title: "LIFO vs FIFO, side by side", icon: Layers },
  { id: "bst", label: "BST Explorer", title: "Binary Search Tree + traversals", icon: Network },
  { id: "hash", label: "Hash Table", title: "mod 10 hashing + collisions", icon: Hash },
  { id: "graph", label: "Graph DFS · BFS", title: "Stack vs queue traversal", icon: Share2 },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function AtbLab({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<TabId>("array");
  const closeRef = useRef<HTMLButtonElement>(null);

  /* body scroll lock + initial focus while the lab is open */
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape closes the lab */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="lab-shell fixed inset-0 z-[80] flex flex-col overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="The No-Code Lab — interactive algorithm visualizers"
    >
      <div aria-hidden className="lab-aurora lab-aurora-a" />
      <div aria-hidden className="lab-aurora lab-aurora-b" />

      {/* ---------- header ---------- */}
      <header className="lab-head relative z-10 shrink-0">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <span
            className="lab-badge-glow flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}
          >
            <FlaskConical className="h-4.5 w-4.5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-x-2 text-[.95rem] font-black leading-tight">
              <span className="lab-title">The No-Code Lab</span>
              <span className="rounded-full border border-[#f5c889]/25 bg-white/[.07] px-2 py-0.5 text-[.58rem] font-extrabold uppercase tracking-[.16em] text-[#f5c889]">
                ATB
              </span>
            </p>
            <p className="truncate text-[.68rem] leading-tight text-[#c9a97e]">
              Algorithms you can poke — zero code required
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close the No-Code Lab"
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ---------- tab strip ---------- */}
      <div className="relative z-10 shrink-0 border-b border-[#f5c889]/10 bg-[#180d04]/60 backdrop-blur-sm">
        <div
          role="tablist"
          aria-label="No-Code Lab stations"
          className="mx-auto flex max-w-6xl gap-1.5 overflow-x-auto px-4 py-2.5 sm:px-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`atb-tab-${t.id}`}
                aria-selected={active}
                aria-controls={`atb-panel-${t.id}`}
                title={t.title}
                onClick={() => setTab(t.id)}
                className={`relative flex min-h-[44px] shrink-0 items-center gap-2 rounded-full px-4 text-[.74rem] font-extrabold tracking-wide transition-colors ${
                  active ? "text-white" : "text-[#c9a97e] hover:text-[#ffd9a3]"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="atb-tab-pill"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ea580c] to-[#c2410c] shadow-[0_10px_22px_-10px_rgba(194,65,12,.9)]"
                  />
                ) : null}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10 whitespace-nowrap">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ---------- panels ---------- */}
      <div className="lab-scroll relative z-10 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-7">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              role="tabpanel"
              id={`atb-panel-${tab}`}
              aria-labelledby={`atb-tab-${tab}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: "easeOut" }}
            >
              {tab === "array" ? <ArrayLab /> : null}
              {tab === "stack" ? <StackQueueLab /> : null}
              {tab === "bst" ? <BstLab /> : null}
              {tab === "hash" ? <HashLab /> : null}
              {tab === "graph" ? <GraphLab /> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
