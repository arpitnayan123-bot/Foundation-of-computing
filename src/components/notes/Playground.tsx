"use client";

/* ============================================================
   PYTHON LAB — a tiny Colab for the revision page.
   Notebook-style cells with a shared, PERSISTENT kernel:
   variables defined in one cell stay alive for the next, In[n]
   counters, per-cell Run (or Shift+Enter), Run all, Restart,
   add / move / delete cells, and auto-save to localStorage.
   Real CPython 3.12 (Pyodide) running in the browser.
   ============================================================ */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Play,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  FlaskConical,
  Loader2,
  Terminal,
  Eraser,
  ListChecks,
  Copy,
  Check,
  PenLine,
} from "lucide-react";
import {
  cleanTraceback,
  getNotebookGlobals,
  getPyodide,
  PURGE_USER_MODULES,
  resetNotebookGlobals,
  withRunLock,
  type PyodideLike,
} from "@/lib/pyruntime";
import { makeCappedPush, withStepGuard } from "@/lib/pyguard";
import { highlightPython } from "@/lib/pyhighlight";
import { useDialogA11y } from "./exam-runtime";

interface LabCell {
  id: string;
  code: string;
  out: string;
  err: string;
  count: number | null; // In [n] execution counter, null = never run
  ms: number | null; // last run duration
}

type KernelStatus = "cold" | "booting" | "ready" | "busy";

const STORAGE_KEY = "foc-py-lab-v1";

let uidSeed = 0;
function uid() {
  uidSeed += 1;
  return `c${Date.now().toString(36)}${uidSeed}${Math.random().toString(36).slice(2, 6)}`;
}

/* module-scoped: survives close/reopen of the overlay within the page session */
let runtimeBooted = false;

const STARTERS: string[] = [
  `# Welcome to the Python Lab — your private mini-Colab.
# Press ▶ Run (or Shift + Enter) to execute a cell.
name = "Arpit"
print("Hello,", name)
print("2 ** 10 =", 2 ** 10)`,
  `# The kernel REMEMBERS — 'name' from the cell above is still alive.
topics = ["IPO", "Data", "Algorithms", "Python"]
for i, t in enumerate(topics, start=1):
    print(f"{i}. {t}")
print("Made for", name)`,
  `# Define something here, then use it in a NEW cell below.
def grade(marks):
    if marks >= 70:
        return "A"
    elif marks >= 40:
        return "PASS"
    return "RETRY"

print(grade(83), grade(55), grade(20))`,
];

function makeCell(code: string): LabCell {
  return { id: uid(), code, out: "", err: "", count: null, ms: null };
}

function loadCells(): LabCell[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const codes = JSON.parse(raw) as unknown;
      if (Array.isArray(codes) && codes.length > 0 && codes.every((c) => typeof c === "string")) {
        return (codes as string[]).map(makeCell);
      }
    }
  } catch {
    /* corrupted storage → fall through to starters */
  }
  return STARTERS.map(makeCell);
}

/* ---------------- one cell ---------------- */
function CellView({
  cell,
  index,
  total,
  busy,
  justAdded,
  onChange,
  onRun,
  onDelete,
  onMove,
}: {
  cell: LabCell;
  index: number;
  total: number;
  busy: boolean;
  justAdded: boolean;
  onChange: (code: string) => void;
  onRun: (focusNew: boolean) => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
}) {
  const outRef = useRef<HTMLDivElement>(null);
  const hlRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);
  const highlighted = useMemo(() => highlightPython(cell.code), [cell.code]);

  useEffect(() => {
    const el = outRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [cell.out, cell.err]);

  function copy() {
    try {
      navigator.clipboard.writeText(cell.code).then(
        () => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1500);
        },
        () => undefined
      );
    } catch {
      /* clipboard unavailable */
    }
  }

  const lines = cell.code.split("\n").length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="lab-cell"
    >
      {/* gutter */}
      <div className="lab-gutter">
        <span className={`lab-count ${cell.count !== null ? "lab-count-live" : ""}`}>
          In&nbsp;[{cell.count === null ? "\u00A0" : cell.count}]
        </span>
      </div>

      {/* body */}
      <div className="min-w-0 flex-1">
        <div className="lab-toolbar">
          <button
            type="button"
            onClick={() => onRun(true)}
            disabled={busy}
            className="run-btn"
            title={busy ? "The kernel is busy — wait for the current cell" : "Run this cell (Shift + Enter)"}
          >
            {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
            {busy ? "kernel busy" : "Run"}
          </button>
          <div className="ml-auto flex items-center gap-0.5">
            <button type="button" onClick={() => onMove(-1)} disabled={index === 0} className="lab-icon-btn" title="Move cell up" aria-label="Move cell up">
              <ChevronUp className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => onMove(1)} disabled={index === total - 1} className="lab-icon-btn" title="Move cell down" aria-label="Move cell down">
              <ChevronDown className="h-4 w-4" />
            </button>
            <button type="button" onClick={copy} className="lab-icon-btn" title="Copy code" aria-label="Copy cell code">
              {copied ? <Check className="h-4 w-4" style={{ color: "#5c7a2e" }} /> : <Copy className="h-4 w-4" />}
            </button>
            <button type="button" onClick={onDelete} className="lab-icon-btn lab-icon-danger" title="Delete cell" aria-label="Delete cell">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="lab-editor">
          <pre className="lab-hl" aria-hidden ref={hlRef} dangerouslySetInnerHTML={{ __html: highlighted + "\n" }} />
          <textarea
            value={cell.code}
            onChange={(e) => onChange(e.target.value)}
            onScroll={(e) => {
              const pre = hlRef.current;
              if (pre) {
                pre.scrollTop = e.currentTarget.scrollTop;
                pre.scrollLeft = e.currentTarget.scrollLeft;
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.shiftKey) {
                e.preventDefault();
                onRun(true);
              }
            }}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            autoFocus={justAdded}
            aria-label={`Code cell ${index + 1}`}
            className="lab-code"
            rows={Math.min(Math.max(lines + 1, 3), 22)}
          />
        </div>

        {cell.out || cell.err ? (
          <div className="lab-out" ref={outRef}>
            <div className="lab-out-bar">
              <Terminal className="h-3 w-3" />
              Out&nbsp;[{cell.count === null ? "\u00A0" : cell.count}]
              {cell.ms !== null ? (
                <span className="lab-out-meta">✓ finished in {(cell.ms / 1000).toFixed(2)}s</span>
              ) : null}
            </div>
            <pre className="lab-out-body">{cell.out}</pre>
            {cell.err ? <pre className="lab-out-body lab-out-err">{cell.err}</pre> : null}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

/* ---------------- the lab ---------------- */
export function PythonLab({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cells, setCells] = useState<LabCell[]>([]);
  const cellsRef = useRef<LabCell[]>([]);
  const [status, setStatus] = useState<KernelStatus>("cold");
  const [bootMsg, setBootMsg] = useState("");
  const [justAdded, setJustAdded] = useState<string | null>(null);
  const busyRef = useRef(false);
  const execRef = useRef(0);
  const scrollBodyRef = useRef<HTMLDivElement>(null);
  const shellRef = useDialogA11y<HTMLDivElement>(open);

  /**
   * commit(persist=false) — state-only updates (output, timing, counters).
   * These arrive per stdout batch while a flood is running; writing the
   * full cell list to localStorage on every batch was a write-storm that
   * could jank the tab mid-flood. Only code shape changes persist.
   */
  const commit = useCallback((next: LabCell[], persist = true) => {
    cellsRef.current = next;
    setCells(next);
    if (!persist) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((c) => c.code)));
    } catch {
      /* storage full / blocked — the lab still works, just no persistence */
    }
  }, []);

  const patch = useCallback(
    (id: string, p: Partial<LabCell>, persist = true) => {
      commit(
        cellsRef.current.map((c) => (c.id === id ? { ...c, ...p } : c)),
        persist
      );
    },
    [commit]
  );

  /* boot state each time the lab opens */
  useEffect(() => {
    if (!open) return;
    commit(loadCells());
    setStatus(runtimeBooted ? "ready" : "cold");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && !(e.target instanceof HTMLTextAreaElement)) onClose();
    },
    [onClose]
  );
  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onKeyDown]);

  /* ---------------- kernel operations ---------------- */

  const runCellRaw = useCallback(
    async (index: number) => {
      const cell = cellsRef.current[index];
      if (!cell || busyRef.current) return;
      busyRef.current = true;
      setStatus((s) => (runtimeBooted ? "busy" : "booting"));

      // Serialize through the global run lock: Pyodide has ONE stdout
      // handler, so a CodeBlock run elsewhere must never overlap this one.
      // While queued behind it, the UI correctly shows “kernel busy”.
      return withRunLock(async () => {
        execRef.current += 1;
        const count = execRef.current;
        patch(cell.id, { out: "", err: "", count, ms: null }, false);

        let lastOut = "";
        let rafId = 0;
        const t0 = performance.now();
        let py: PyodideLike | null = null;
        try {
          py = await getPyodide((m) => {
            setBootMsg(m);
            setStatus("booting");
          });
          const pyr = py;
          runtimeBooted = true;
          setBootMsg("");
          const ns = await getNotebookGlobals();
          // capped push: a `while True: print(...)` flood can't OOM the tab.
          // Output repaints are rAF-throttled and never hit localStorage.
          const push = makeCappedPush((full) => {
            lastOut = full;
            if (!rafId) {
              rafId = window.requestAnimationFrame(() => {
                rafId = 0;
                patch(cell.id, { out: lastOut }, false);
              });
            }
          });
          py.setStdout({ batched: push });
          py.setStderr({ batched: push });
          py.setStdin({
            stdin: () => {
              try {
                return window.prompt("Python input() is asking for a value — cancel = stop the program:");
              } catch {
                return null; // prompt blocked → EOF
              }
            },
          });
          const freshCode = cellsRef.current[index]?.code ?? cell.code;
          // step-guard: cooperative runaway-loop killer (see lib/pyguard.ts)
          await withStepGuard(pyr, async () => {
            await pyr.runPythonAsync(freshCode, { globals: ns });
          });
          patch(cell.id, { ms: performance.now() - t0, out: lastOut }, false);
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          patch(cell.id, { err: cleanTraceback(msg) || msg, ms: performance.now() - t0 }, false);
        } finally {
          if (rafId) {
            window.cancelAnimationFrame(rafId);
            rafId = 0;
          }
          if (py) {
            try {
              py.setStdout();
              py.setStderr();
              py.setStdin();
            } catch {
              /* handlers already reset */
            }
          }
          busyRef.current = false;
          setBootMsg("");
          setStatus(runtimeBooted ? "ready" : "cold");
        }
      });
    },
    [patch]
  );

  const addCell = useCallback(() => {
    if (busyRef.current) return;
    const c = makeCell("");
    const next = [...cellsRef.current, c];
    commit(next);
    setJustAdded(c.id);
    window.setTimeout(() => {
      scrollBodyRef.current?.scrollTo({ top: scrollBodyRef.current.scrollHeight, behavior: "smooth" });
    }, 60);
  }, [commit]);

  const runCell = useCallback(
    (index: number, focusNew: boolean) => {
      if (busyRef.current) return;
      const isLast = index === cellsRef.current.length - 1;
      void runCellRaw(index).then(() => {
        if (focusNew && isLast) addCell();
      });
    },
    [runCellRaw, addCell]
  );

  const runAll = useCallback(async () => {
    if (busyRef.current) return;
    const n = cellsRef.current.length;
    for (let i = 0; i < n; i++) await runCellRaw(i);
  }, [runCellRaw]);

  const deleteCell = useCallback(
    (id: string) => {
      if (busyRef.current) return;
      const next = cellsRef.current.filter((c) => c.id !== id);
      commit(next.length ? next : [makeCell("# New cell — write anything.\nprint(\"try me\")")]);
    },
    [commit]
  );

  const moveCell = useCallback(
    (id: string, dir: -1 | 1) => {
      if (busyRef.current) return;
      const arr = [...cellsRef.current];
      const i = arr.findIndex((c) => c.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= arr.length) return;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      commit(arr);
    },
    [commit]
  );

  const clearOutputs = useCallback(() => {
    commit(
      cellsRef.current.map((c) => ({ ...c, out: "", err: "", ms: null, count: null })),
      false
    );
    execRef.current = 0;
  }, [commit]);

  const restartKernel = useCallback(async () => {
    if (busyRef.current) return;
    if (!window.confirm("Restart the kernel?\n\nEvery variable you defined in earlier cells will be wiped (like Runtime → Restart in Colab). Your cell code is kept.")) {
      return;
    }
    resetNotebookGlobals();
    execRef.current = 0;
    commit(cellsRef.current.map((c) => ({ ...c, out: "", err: "", ms: null, count: null })), false);
    try {
      const py = await getPyodide();
      await py.runPythonAsync(PURGE_USER_MODULES);
      runtimeBooted = true;
      setStatus("ready");
    } catch {
      setStatus("cold");
    }
  }, [commit]);

  if (!open) return null;

  const statusPill =
    status === "busy"
      ? { dot: "#e4674a", label: "kernel · running" }
      : status === "booting"
      ? { dot: "#e8a13c", label: bootMsg ? "kernel · booting…" : "kernel · booting" }
      : status === "ready"
      ? { dot: "#8fae5d", label: "kernel · ready" }
      : { dot: "#d6bd97", label: "kernel · idle" };

  return (
    <motion.div
      ref={shellRef}
      tabIndex={-1}
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="lab-shell fixed inset-0 z-[80] flex flex-col overflow-hidden outline-none"
      role="dialog"
      aria-modal="true"
      aria-label="Python Lab — runnable notebook"
    >
      {/* drifting aurora glows behind the glass */}
      <div aria-hidden className="lab-aurora lab-aurora-a" />
      <div aria-hidden className="lab-aurora lab-aurora-b" />

      {/* ---------- header ---------- */}
      <div className="lab-head relative z-10 shrink-0">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <span className="lab-badge-glow flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}>
            <FlaskConical className="h-4.5 w-4.5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="text-[.95rem] font-black leading-tight">
              <span className="lab-title">Python Lab</span>
              <span className="ml-2 rounded-full border border-[#f5c889]/25 bg-white/[.07] px-2 py-0.5 text-[.58rem] font-extrabold uppercase tracking-[.16em] text-[#f5c889]">
                Colab mode
              </span>
            </p>
            <p className="text-[.68rem] leading-tight text-[#c9a97e]">
              Your private night-lab — real CPython 3.12 in the browser. Run here, then rewrite by hand for the paper exam.
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[.06] px-2.5 py-1 text-[.6rem] font-extrabold uppercase tracking-[.14em] text-[#f0e2c8]"
              title="One shared kernel — variables persist across cells"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${status === "busy" || status === "booting" ? "lab-dot-pulse" : ""}`}
                style={{ background: statusPill.dot, boxShadow: `0 0 0 3px ${statusPill.dot}33` }}
              />
              {statusPill.label}
            </span>
            <button
              type="button"
              onClick={() => void restartKernel()}
              disabled={status === "busy" || status === "booting"}
              className="flex h-8 items-center gap-1.5 rounded-lg border border-white/15 bg-white/[.06] px-2.5 text-[.68rem] font-bold text-[#f0e2c8] transition hover:bg-white/[.12] disabled:opacity-40"
              title="Restart the kernel — wipe all variables"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Restart</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close the Python Lab"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/[.06] text-[#ffe9c9] transition hover:bg-white/[.14]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ---------- toolbar ---------- */}
      <div className="relative z-10 shrink-0 border-b border-[#f5c889]/10 bg-[#180d04]/60 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-2.5 sm:px-6">
          <button type="button" onClick={addCell} disabled={status === "busy"} className="lab-tool-btn">
            <Plus className="h-3.5 w-3.5" />
            New cell
          </button>
          <button type="button" onClick={() => void runAll()} disabled={status === "busy" || status === "booting"} className="lab-tool-btn">
            {status === "busy" ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ListChecks className="h-3.5 w-3.5" />}
            Run all
          </button>
          <button type="button" onClick={clearOutputs} disabled={status === "busy"} className="lab-tool-btn">
            <Eraser className="h-3.5 w-3.5" />
            Clear outputs
          </button>
          <p className="ml-auto hidden items-center gap-1.5 text-[.68rem] font-semibold text-[#a98c66] sm:flex">
            <kbd className="lab-kbd">Shift</kbd>+<kbd className="lab-kbd">Enter</kbd> runs a cell
            <span className="mx-1 opacity-40">·</span>
            variables stay alive between cells
          </p>
        </div>
      </div>

      {/* ---------- cells ---------- */}
      <div ref={scrollBodyRef} className="lab-scroll relative z-10 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
          {cells.map((cell, i) => (
            <CellView
              key={cell.id}
              cell={cell}
              index={i}
              total={cells.length}
              busy={status === "busy" || status === "booting"}
              justAdded={justAdded === cell.id}
              onChange={(code) => patch(cell.id, { code })}
              onRun={(focusNew) => runCell(i, focusNew)}
              onDelete={() => deleteCell(cell.id)}
              onMove={(dir) => moveCell(cell.id, dir)}
            />
          ))}

          <button type="button" onClick={addCell} disabled={status === "busy"} className="lab-add-strip" aria-label="Add a new cell">
            <Plus className="h-4 w-4" />
            Add a cell — try your own idea
          </button>

          <p className="mt-6 flex justify-center">
            <span className="lab-note">
              <PenLine className="h-3.5 w-3.5" />
              Real CPython 3.12 · WebAssembly — nothing leaves your browser. Cells auto-save locally.
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
