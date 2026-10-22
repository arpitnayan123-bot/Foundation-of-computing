"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Lightbulb,
  AlertTriangle,
  Sparkles,
  HelpCircle,
  Check,
  X,
  GraduationCap,
  ChevronDown,
  Play,
  Pencil,
  RotateCcw,
  Copy,
  EyeOff,
  Loader2,
  Terminal,
} from "lucide-react";
import { cleanTraceback, getPyodide, PURGE_USER_MODULES, type PyodideLike } from "@/lib/pyruntime";

/* ============================================================
   Reveal — scroll-triggered fade/slide
   ============================================================ */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -36px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ============================================================
   Pill — small warm rounded tag
   ============================================================ */
export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-lg border border-[#ecd9bd] bg-white/70 px-2.5 py-1 text-[.74rem] font-semibold text-[#8a5a06] shadow-sm">
      {children}
    </span>
  );
}

/* ============================================================
   KV — key / value definition row
   ============================================================ */
export function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[#f3e2c8] bg-[#fffaf1] px-3.5 py-2.5 transition-colors duration-200 hover:border-[#e8cfa5] sm:flex-row sm:items-baseline sm:gap-3">
      <span className="shrink-0 font-mono text-[.72rem] font-bold uppercase tracking-wider text-[#a0410a]">
        {k}
      </span>
      <span className="text-[.86rem] leading-relaxed text-[#241a0f]">{v}</span>
    </div>
  );
}

/* ============================================================
   Section shell + heading
   ============================================================ */
export function Section({
  id,
  children,
  dark = false,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label={id}
      className={`${dark ? "section-dark" : ""} section-pad scroll-mt-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 max-w-3xl text-base leading-relaxed md:text-lg ${
            dark ? "text-[#cbb392]" : "text-muted-warm"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ============================================================
   Python syntax highlighter (tiny, warm palette)
   ============================================================ */
const PY_KEYWORDS = new Set([
  "False","None","True","and","as","assert","break","class","continue","def",
  "del","elif","else","except","finally","for","from","global","if","import",
  "in","is","lambda","nonlocal","not","or","pass","raise","return","try",
  "while","with","yield",
]);
const PY_BUILTINS = new Set([
  "print","len","range","list","sorted","min","max","sum","int","str","float",
  "input","append","insert","pop","remove","sort","reverse","title","upper",
  "lower","strip","lstrip","rstrip","keys","values","items","get","set",
  "dict","tuple","enumerate","zip","abs","round","type","clear","copy","count","index",
]);

type Tok = { text: string; cls: string };

function tokenizePython(code: string): Tok[][] {
  const pattern =
    /(#.*$)|("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|\b(\d[\d_]*\.?\d*)\b|([A-Za-z_][A-Za-z0-9_]*)|(\s+)|([^\sA-Za-z0-9_]+)/gm;
  const lines: Tok[][] = [[]];
  let m: RegExpExecArray | null;
  while ((m = pattern.exec(code)) !== null) {
    const [full, comment, str, num, word, ws, sym] = m;
    if (comment !== undefined) push(comment, "tk-c");
    else if (str !== undefined) push(str, "tk-s");
    else if (num !== undefined) push(num, "tk-n");
    else if (word !== undefined) {
      if (PY_KEYWORDS.has(word)) push(word, "tk-k");
      else if (PY_BUILTINS.has(word)) push(word, "tk-b");
      else push(word, "");
    } else if (ws !== undefined) push(ws, "ws");
    else if (sym !== undefined) push(sym, "tk-d");
  }
  function push(text: string, cls: string) {
    const parts = text.split("\n");
    parts.forEach((p, i) => {
      if (i > 0) lines.push([]);
      if (p) lines[lines.length - 1].push({ text: p, cls: cls === "ws" ? "" : cls });
    });
  }
  return lines;
}

function HighlightedCode({ code }: { code: string }) {
  const lines = tokenizePython(code);
  return (
    <pre className="code-body">
      {lines.map((toks, i) => (
        <div key={i} className="flex">
          <span className="mr-4 w-6 shrink-0 select-none text-right text-[#6d5236]">
            {i + 1}
          </span>
          <span className="flex-1">
            {toks.length === 0 ? " " : null}
            {toks.map((t, j) =>
              t.cls ? (
                <span key={j} className={t.cls}>
                  {t.text}
                </span>
              ) : (
                <React.Fragment key={j}>{t.text}</React.Fragment>
              )
            )}
          </span>
        </div>
      ))}
    </pre>
  );
}

/* ============================================================
   CodeBlock — syntax-highlighted snippet with an optional LIVE
   Python runtime: ▶ Run executes the code in the browser (Pyodide),
   ✎ lets the learner edit the code, ⟲ restores the original.
   `pre`   → hidden Python executed before the visible code
   `files` → virtual .py modules written before the run
   ============================================================ */
type RunPhase = "idle" | "running" | "done" | "error";

export function CodeBlock({
  title = "main.py",
  code,
  output,
  note,
  className = "",
  runnable = true,
  pre,
  files,
  dark = false,
}: {
  title?: string;
  code: string;
  output?: string;
  note?: React.ReactNode;
  className?: string;
  runnable?: boolean;
  pre?: string;
  files?: Record<string, string>;
  dark?: boolean;
}) {
  const [current, setCurrent] = useState(code);
  const [editing, setEditing] = useState(false);
  const [phase, setPhase] = useState<RunPhase>("idle");
  const [bootMsg, setBootMsg] = useState("");
  const [out, setOut] = useState("");
  const [err, setErr] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [copied, setCopied] = useState(false);
  const termRef = useRef<HTMLPreElement>(null);
  const dirty = current !== code;
  const live = phase !== "idle";
  const busy = phase === "running";

  useEffect(() => {
    if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight;
  }, [out, err]);

  async function run() {
    if (busy) return;
    setEditing(false);
    setPhase("running");
    setOut("");
    setErr("");
    setBootMsg("");
    setElapsed(0);
    const t0 = performance.now();
    let py: PyodideLike | null = null;
    try {
      py = await getPyodide((m) => setBootMsg(m));
      setBootMsg("");
      let buf = "";
      const push = (s: string) => {
        buf += s + "\n";
        setOut(buf);
      };
      py.setStdout({ batched: push });
      py.setStderr({ batched: push });
      py.setStdin({
        stdin: () => {
          try {
            return window.prompt("Python input() is asking for a value — cancel = stop the program:");
          } catch {
            return null; // prompt blocked (e.g. sandboxed iframe) → treat as EOF
          }
        },
      });
      // Fresh module cache + virtual files for import demos.
      await py.runPythonAsync(PURGE_USER_MODULES);
      if (files) {
        for (const [name, content] of Object.entries(files)) py.FS.writeFile(name, content);
      }
      const wf = current.match(/^%%writefile\s+([^\s#]+)/);
      if (wf) {
        // Notebook magic: save the cell as a real file inside the runtime.
        const name = wf[1];
        const body = current.slice(current.indexOf("\n") + 1).replace(/^\n+/, "");
        py.FS.writeFile(name, body);
        push(`✓ saved ${name} (${body.split("\n").length} lines) — import blocks can now use it`);
      } else {
        const ns = py.globals.get("dict")() as { destroy?: () => void };
        try {
          if (pre) await py.runPythonAsync(pre, { globals: ns });
          await py.runPythonAsync(current, { globals: ns });
        } finally {
          ns.destroy?.();
        }
      }
      setElapsed((performance.now() - t0) / 1000);
      setPhase("done");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(cleanTraceback(msg) || msg);
      setElapsed((performance.now() - t0) / 1000);
      setPhase("error");
    } finally {
      if (py) {
        try {
          py.setStdout();
          py.setStderr();
          py.setStdin();
        } catch {
          /* already reset */
        }
      }
    }
  }

  function copy() {
    try {
      navigator.clipboard.writeText(current).then(
        () => {
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        },
        () => undefined
      );
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className={`code-shell ${className}`}>
      <div className="code-bar">
        <span className="code-dot" style={{ background: "#e4674a" }} />
        <span className="code-dot" style={{ background: "#e8a13c" }} />
        <span className="code-dot" style={{ background: "#8fae5d" }} />
        <span className="code-title ml-2">{title}</span>
        {runnable ? (
          <div className="ml-auto flex items-center gap-1">
            <button
              type="button"
              onClick={copy}
              className="code-icon-btn"
              title="Copy code"
              aria-label="Copy code"
            >
              {copied ? <Check className="h-3.5 w-3.5" style={{ color: "#8fae5d" }} /> : <Copy className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrent(code);
                setEditing((v) => !v);
              }}
              className={`code-icon-btn ${editing ? "code-icon-btn-on" : ""}`}
              title={dirty ? "Editing — click ⟲ to restore the original" : editing ? "Done editing" : "Edit the code, then run it"}
              aria-label="Edit code"
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            {dirty ? (
              <button
                type="button"
                onClick={() => setCurrent(code)}
                className="code-icon-btn"
                title="Restore the original code"
                aria-label="Restore original code"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            ) : null}
            <button
              type="button"
              onClick={run}
              disabled={busy}
              className="run-btn"
              title="Run this code live — real Python 3.12 in your browser"
            >
              {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
              {busy ? "running" : "Run"}
            </button>
          </div>
        ) : (
          <span className="readonly-chip" title="Illustrative snippet — not executable">
            <EyeOff className="h-3 w-3" />
            read-only
          </span>
        )}
      </div>

      {editing ? (
        <textarea
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          spellCheck={false}
          aria-label="Editable code"
          className="code-edit"
          rows={Math.max(6, current.split("\n").length + 1)}
        />
      ) : (
        <HighlightedCode code={current} />
      )}

      <AnimatePresence>
        {live ? (
          <motion.div
            key="live-term"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: "hidden" }}
          >
            <div className="live-term">
              <div className="live-term-bar">
                <Terminal className="h-3 w-3" />
                LIVE RUN
                <span className="ml-auto normal-case tracking-normal opacity-70">
                  {bootMsg ? "python runtime" : "python 3.12 · webassembly"}
                </span>
              </div>
              <pre ref={termRef} className="live-term-body">
                {bootMsg ? (
                  <span className="inline-flex items-center gap-2 text-[#f5c889]">
                    <Loader2 className="h-3.5 w-3.5 animate-spin" /> {bootMsg}
                  </span>
                ) : null}
                {out ? out : !bootMsg && busy ? "\u2026" : ""}
                {!bootMsg && busy ? <span className="term-caret" aria-hidden /> : null}
                {err ? <span className="tb-err">{err}\n</span> : null}
              </pre>
              {phase === "done" || phase === "error" ? (
                <div className="live-term-foot">
                  <span className={phase === "done" ? "foot-ok" : "foot-bad"}>
                    {phase === "done"
                      ? `✓ finished in ${elapsed.toFixed(2)}s`
                      : "✗ the program raised an error"}
                  </span>
                  <span className="ml-auto opacity-60">CPython · Pyodide</span>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Pen-paper practice: runnable blocks HIDE the static output — the
          learner predicts it first, then presses ▶ Run to see the real thing.
          Read-only blocks keep their output (there is no Run button). */}
      {output && !runnable ? (
        <div className="code-out">
          <span className="out-label">OUTPUT</span>
          {output}
        </div>
      ) : null}
      {note ? (
        <div className="border-t border-[#4a3020] bg-[rgba(255,220,170,.04)] px-5 py-3 text-[.8rem] leading-relaxed text-[#d9b88c]">
          {note}
        </div>
      ) : null}
    </div>
  );
}

/* ============================================================
   PyReadyToast — tiny toast when the shared runtime finishes booting
   ============================================================ */
export function PyReadyToast() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onReady = () => setShow(true);
    window.addEventListener("foc-py-ready", onReady);
    return () => window.removeEventListener("foc-py-ready", onReady);
  }, []);
  useEffect(() => {
    if (!show) return;
    const t = window.setTimeout(() => setShow(false), 6000);
    return () => window.clearTimeout(t);
  }, [show]);
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="py-toast"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
          role="status"
          className="fixed bottom-4 left-4 z-[70] flex max-w-[calc(100vw-2rem)] items-center gap-2.5 rounded-2xl border border-[#ecd9bd] bg-[#fffaf1]/95 px-4 py-3 shadow-2xl backdrop-blur-md"
          style={{ boxShadow: "0 24px 50px -20px rgba(43,27,16,.5)" }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)" }}>
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-[.82rem] font-semibold leading-snug text-[#3e2c1d]">
            Python runtime ready — every <span className="font-mono text-[.74rem] font-bold text-[#c2410c]">▶ Run</span> button now executes live.
          </span>
          <button
            type="button"
            onClick={() => setShow(false)}
            aria-label="Dismiss"
            className="ml-1 rounded-lg p-1 text-[#7a5b39] transition-colors hover:bg-[#f6e3c8] hover:text-[#2b1d10]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/* ============================================================
   Callout
   ============================================================ */
const CALLOUT_STYLES: Record<string, { bg: string; border: string; icon: React.ReactNode }> = {
  insight: { bg: "#fdf1e0", border: "#e8b878", icon: <Sparkles className="h-4 w-4" style={{ color: "#c2410c" }} /> },
  why: { bg: "#f6efdf", border: "#d9b96a", icon: <Lightbulb className="h-4 w-4" style={{ color: "#b45309" }} /> },
  warn: { bg: "#fbe9e4", border: "#e6a08c", icon: <AlertTriangle className="h-4 w-4" style={{ color: "#be4a4a" }} /> },
  story: { bg: "#f4eee4", border: "#c9b18c", icon: <HelpCircle className="h-4 w-4" style={{ color: "#7c6248" }} /> },
};

export function Callout({
  kind = "insight",
  title,
  children,
  dark = false,
}: {
  kind?: "insight" | "why" | "warn" | "story";
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const s = CALLOUT_STYLES[kind];
  return (
    <div
      className="rounded-2xl p-5"
      style={{
        background: dark ? "rgba(255,236,210,.06)" : s.bg,
        border: `1px solid ${dark ? "rgba(255,214,160,.18)" : s.border}`,
      }}
    >
      <div className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]">
        {s.icon}
        <span style={{ color: dark ? "#f5c889" : undefined }}>{title}</span>
      </div>
      <div
        className={`mt-2 text-[.92rem] leading-relaxed ${
          dark ? "text-[#e9d7bf]" : "text-[#2b2014]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   Quiz — interactive single-choice
   ============================================================ */
export function Quiz({
  q,
  options,
  answer,
  explain,
  source,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
  source?: string;
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const revealed = chosen !== null;
  return (
    <div className="card-warm p-5">
      <div className="flex items-start gap-2">
        <GraduationCap className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#c2410c" }} />
        <div>
          <p className="quiz-q font-semibold leading-snug text-[#3e2c1d]">{q}</p>
          {source ? (
            <p className="quiz-src mt-1 text-[.7rem] font-bold uppercase tracking-[.16em] text-[#8a5a10]">
              {source}
            </p>
          ) : null}
        </div>
      </div>
      <div className="mt-3 grid gap-2">
        {options.map((opt, i) => {
          const isAnswer = i === answer;
          const cls = !revealed
            ? "quiz-opt"
            : isAnswer
            ? "quiz-opt correct"
            : i === chosen
            ? "quiz-opt wrong"
            : "quiz-opt";
          return (
            <button
              key={i}
              className={cls}
              disabled={revealed}
              onClick={() => setChosen(i)}
              aria-label={`Option ${i + 1}: ${opt}`}
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[.65rem] font-bold">
                {revealed && isAnswer ? (
                  <Check className="h-3 w-3" />
                ) : revealed && i === chosen ? (
                  <X className="h-3 w-3" />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {revealed ? (
        <div className="anim-pop mt-3 rounded-xl border border-[#e8dcc0] bg-[#fbf3e3] p-3 text-[.85rem] leading-relaxed text-[#2b2014]">
          <strong style={{ color: "#c2410c" }}>
            {chosen === answer ? "Correct. " : "Not quite. "}
          </strong>
          {explain}
        </div>
      ) : null}
    </div>
  );
}

/* ============================================================
   Practice drills accordion
   ============================================================ */
export function Practice({
  title,
  items,
}: {
  title: string;
  items: { q: React.ReactNode; hint?: React.ReactNode }[];
}) {
  return (
    <details className="drill">
      <summary>
        <span>
          {title}{" "}
          <span className="ml-1 rounded-full bg-[#f6e3c8] px-2 py-0.5 text-[.65rem] font-bold text-[#8a4508]">
            {items.length} drills
          </span>
        </span>
        <ChevronDown className="ml-auto h-4 w-4 opacity-60" />
      </summary>
      <div className="drill-body">
        <ol className="grid gap-3">
          {items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[.88rem] leading-relaxed text-[#2b2014]">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e0b] to-[#c2410c] text-[.7rem] font-bold text-white">
                {i + 1}
              </span>
              <span>
                {it.q}
                {it.hint ? (
                  <em className="mt-1 block text-[.8rem] font-medium text-[#8c2f2f]">Hint: {it.hint}</em>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </details>
  );
}

/* ============================================================
   Takeaways checklist
   ============================================================ */
export function Takeaways({ items, dark = false }: { items: React.ReactNode[]; dark?: boolean }) {
  return (
    <div className="card-warm p-6">
      <p className="eyebrow mb-4">Key takeaways</p>
      <ul className="grid gap-3">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-3 text-[.92rem] leading-relaxed">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ background: dark ? "rgba(245,158,11,.2)" : "#efe0c3" }}
            >
              <Check className="h-3.5 w-3.5" style={{ color: "#c2410c" }} />
            </span>
            <span className={dark ? "text-[#e9d7bf]" : "text-[#2b2014]"}>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
   StepsFlow — animated horizontal pipeline
   ============================================================ */
export function StepsFlow({
  steps,
}: {
  steps: { label: string; sub?: string; icon?: React.ReactNode }[];
}) {
  return (
    <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
      {steps.map((s, i) => (
        <React.Fragment key={i}>
          <div className="ipo-node card-warm flex flex-1 items-center gap-3 p-4">
            {s.icon}
            <div>
              <p className="sf-label font-bold text-[#3e2c1d]">{s.label}</p>
              {s.sub ? <p className="text-[.78rem] text-muted-warm">{s.sub}</p> : null}
            </div>
          </div>
          {i < steps.length - 1 ? (
            <svg viewBox="0 0 60 24" className="hidden h-6 w-14 shrink-0 md:block" aria-hidden>
              <path
                d="M2 12 H50"
                className="flow-arrow-line"
                stroke="#c2410c"
                strokeWidth="2.5"
                fill="none"
              />
              <path d="M46 5 L56 12 L46 19" stroke="#c2410c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
