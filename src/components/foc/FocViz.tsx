"use client";

/* ============================================================
   FocViz — the six interactive workflow-diagram systems that
   the FoC deck lacked. Every widget is click-to-reason: the
   student drives the execution and watches state change.

     MemoryBoxes     — alias vs true copy, two labels → one box
                       or two (L10 · L16)
     SliceRuler      — [start:stop:step] on a 10-cell ruler,
                       negatives included (L15)
     CompPipeline    — range(1, 11) → value ** 2 → squares[]
                       value by value (L15)
     FlowTracer      — if-elif-else short-circuit vs independent
                       ifs, check by check (L18)
     WhileTracer     — the while loop with flag / break /
                       continue jump arrows (L26)
     PipelineViz     — multi-stage list/record pipelines stepping
                       live: shipment (L19) + records (L24)
     MatchingLanes   — requested vs available toppings into
                       accept / apologize lanes (L20)
     CallStackFlow   — caller ↔ function: arguments in, work,
                       return out (L28)
   ============================================================ */

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  RotateCcw,
  Scissors,
  Link2,
  Play,
  SkipForward,
  X,
} from "lucide-react";

/* ---------------- shared bits ---------------- */

const EMBER = "#c2410c";
const EMBER_BRIGHT = "#ea580c";
const GOLD = "#b45309";

function VizShell({
  title,
  sub,
  dark = false,
  children,
}: {
  title: string;
  sub?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-2xl border p-5"
      style={
        dark
          ? { borderColor: "rgba(255,214,160,.18)", background: "rgba(255,236,210,.05)" }
          : { borderColor: "#ecd9bd", background: "#fffaf1" }
      }
    >
      <p
        className="text-[.62rem] font-black uppercase tracking-[.2em]"
        style={{ color: dark ? "#d9b88c" : "#b45309" }}
      >
        {title}
      </p>
      {sub ? (
        <p className={`mt-1 text-[.8rem] leading-relaxed ${dark ? "text-[#c9b08e]" : "text-muted-warm"}`}>{sub}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}

function VizBtn({
  onClick,
  children,
  tone = "warm",
  active = false,
}: {
  onClick: () => void;
  children: React.ReactNode;
  tone?: "warm" | "green" | "red" | "ghost";
  active?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    warm: { background: `linear-gradient(135deg,${EMBER_BRIGHT},${EMBER})`, color: "#fff7ec" },
    green: { background: "#4d7c43", color: "#f4faef" },
    red: { background: "#b3423a", color: "#fff1ef" },
    ghost: { background: "rgba(194,65,12,.1)", color: EMBER },
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[.74rem] font-extrabold transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
      style={{
        ...styles[tone],
        outline: active ? "2px solid #f59e0b" : undefined,
        outlineOffset: active ? "2px" : undefined,
      }}
    >
      {children}
    </button>
  );
}

function CodeLine({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <code
      className="font-mono-warm block rounded-lg px-2.5 py-1 text-[.78rem]"
      style={dark ? { background: "rgba(0,0,0,.35)", color: "#f5c889" } : { background: "#f7ecdc", color: "#8a4508" }}
    >
      {children}
    </code>
  );
}

/* ============================================================
   1 — MemoryBoxes (L10 · L16)
   ============================================================ */

export function MemoryBoxes() {
  const [alias, setAlias] = useState(true);
  const [myFoods, setMyFoods] = useState<string[]>(["pizza", "falafel", "carrot cake"]);
  const [friendFoods, setFriendFoods] = useState<string[]>(["pizza", "falafel", "carrot cake"]);
  const [log, setLog] = useState<string[]>([]);

  const reset = (nextAlias: boolean) => {
    setAlias(nextAlias);
    setMyFoods(["pizza", "falafel", "carrot cake"]);
    setFriendFoods(["pizza", "falafel", "carrot cake"]);
    setLog([]);
  };

  const appendMine = (item: string) => {
    if (alias) {
      // one underlying list — both labels see it
      setMyFoods((f) => [...f, item]);
      setLog((l) => [`my_foods.append('${item}') — appears in BOTH names`, ...l].slice(0, 4));
    } else {
      setMyFoods((f) => [...f, item]);
      setLog((l) => [`my_foods.append('${item}') — only my_foods grows`, ...l].slice(0, 4));
    }
  };
  const appendFriend = (item: string) => {
    if (alias) {
      setFriendFoods((f) => [...f, item]);
      setMyFoods((f) => [...f]);
      setLog((l) => [`friend_foods.append('${item}') — appears in BOTH names`, ...l].slice(0, 4));
    } else {
      setFriendFoods((f) => [...f, item]);
      setLog((l) => [`friend_foods.append('${item}') — only friend_foods grows`, ...l].slice(0, 4));
    }
  };

  const same = alias || JSON.stringify(myFoods) === JSON.stringify(friendFoods);

  return (
    <VizShell
      title="Interactive · the memory-box pointer diagram"
      sub="Two assignment lines, two completely different memory stories. Mutate through either name and watch who really changes."
    >
      <div className="flex flex-wrap gap-2">
        <VizBtn tone={alias ? "red" : "ghost"} active={alias} onClick={() => reset(true)}>
          <Link2 className="h-3.5 w-3.5" /> friend_foods = my_foods
        </VizBtn>
        <VizBtn tone={!alias ? "green" : "ghost"} active={!alias} onClick={() => reset(false)}>
          <Scissors className="h-3.5 w-3.5" /> friend_foods = my_foods[:]
        </VizBtn>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {alias ? (
          <div className="md:col-span-2 rounded-2xl border-2 border-dashed p-4" style={{ borderColor: "#e0a896" }}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-lg bg-[#fde3dd] px-3 py-1.5 font-mono-warm text-[.8rem] font-bold text-[#b3423a]">my_foods</span>
              <span className="text-[#a08568]">+</span>
              <span className="rounded-lg bg-[#fde3dd] px-3 py-1.5 font-mono-warm text-[.8rem] font-bold text-[#b3423a]">friend_foods</span>
              <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="text-[#b3423a]">
                ↓ ↓
              </motion.span>
            </div>
            <div className="mx-auto mt-2 flex max-w-md flex-wrap items-center justify-center gap-1.5 rounded-xl bg-[#fbe9e4] p-3">
              <span className="mr-1 text-[.62rem] font-black uppercase tracking-widest text-[#b3423a]">one shared box</span>
              {myFoods.map((f) => (
                <motion.span key={f} layout initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-md bg-white px-2 py-1 text-[.72rem] font-bold text-[#3e2c1d]">
                  {f}
                </motion.span>
              ))}
            </div>
          </div>
        ) : (
          <>
            {[
              { name: "my_foods", items: myFoods, tint: "#e7f0e2", label: "#4d7c43" },
              { name: "friend_foods", items: friendFoods, tint: "#e7eef7", label: "#3f628f" },
            ].map((box) => (
              <div key={box.name} className="rounded-2xl border-2 border-dashed p-4" style={{ borderColor: "#b9cdb4" }}>
                <div className="flex items-center justify-between">
                  <span className="rounded-lg px-3 py-1.5 font-mono-warm text-[.8rem] font-bold" style={{ background: box.tint, color: box.label }}>
                    {box.name}
                  </span>
                  <span className="text-[#a08568]">↓</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-1.5 rounded-xl bg-[#f6f2ea] p-3">
                  {box.items.map((f) => (
                    <motion.span key={f} layout initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-md bg-white px-2 py-1 text-[.72rem] font-bold text-[#3e2c1d]">
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <VizBtn onClick={() => appendMine("cannoli")}>my_foods.append(&apos;cannoli&apos;)</VizBtn>
        <VizBtn onClick={() => appendFriend("ice cream")}>friend_foods.append(&apos;ice cream&apos;)</VizBtn>
        <VizBtn tone="ghost" onClick={() => reset(alias)}>
          <RotateCcw className="h-3.5 w-3.5" /> reset
        </VizBtn>
      </div>

      <div className="mt-4 grid gap-2">
        <CodeLine dark>
          my_foods is friend_foods&nbsp;&nbsp;→&nbsp;&nbsp;{alias ? "True — one object, two names" : same ? "False — two independent lists (equal values, different boxes)" : "False — two independent lists"}
        </CodeLine>
        <AnimatePresence initial={false}>
          {log.map((entry, i) => (
            <motion.p
              key={`${i}-${entry}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[.78rem] font-semibold text-[#8a4508]"
            >
              · {entry}
            </motion.p>
          ))}
        </AnimatePresence>
        {log.length === 0 ? (
          <p className="text-[.78rem] text-muted-warm">Press an append and watch which boxes really change.</p>
        ) : null}
      </div>
    </VizShell>
  );
}

/* ============================================================
   2 — SliceRuler (L15)
   ============================================================ */

const RULER_ITEMS = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"];

export function SliceRuler() {
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(10);
  const [step, setStep] = useState(1);

  const indices = useMemo(() => {
    const out: number[] = [];
    for (let i = start; i < stop; i += step) out.push(i);
    return out;
  }, [start, stop, step]);

  const snippet =
    step === 1
      ? `players[${start === 0 && stop === 10 ? ":" : start === 0 ? `:${stop}` : stop === 10 ? `${start}:` : `${start}:${stop}`}]`
      : `players[${start}:${stop}:${step}]`;

  return (
    <VizShell
      title="Interactive · the [start : stop : step] slice ruler"
      sub="Start is included, stop is excluded — the same off-by-one rule as range(). Negative indices count from the end."
    >
      <div className="overflow-x-auto pb-1">
        <div className="flex min-w-[560px] gap-1.5">
          {RULER_ITEMS.map((item, i) => {
            const inside = indices.includes(i);
            return (
              <div key={item} className="flex-1">
                <motion.div
                  layout
                  className="flex h-11 items-center justify-center rounded-lg text-[.72rem] font-bold"
                  style={
                    inside
                      ? { background: `linear-gradient(135deg,${EMBER_BRIGHT},${EMBER})`, color: "#fff7ec" }
                      : { background: "#f1e6d2", color: "#a08568" }
                  }
                  animate={inside ? { scale: [1, 1.04, 1] } : {}}
                  transition={{ duration: 0.25 }}
                >
                  {i}
                </motion.div>
                <p className="mt-1 text-center text-[.6rem] font-bold text-[#a08568]">
                  {i - 10 < 0 ? i - 10 : ""}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {[
          { label: "start", value: start, set: setStart, max: 10 },
          { label: "stop (excluded)", value: stop, set: setStop, max: 10 },
          { label: "step", value: step, set: setStep, max: 4 },
        ].map((ctl) => (
          <label key={ctl.label} className="block">
            <span className="text-[.62rem] font-black uppercase tracking-[.14em] text-[#b45309]">{ctl.label}: {ctl.value}</span>
            <input
              type="range"
              min={0}
              max={ctl.max}
              value={ctl.value}
              onChange={(e) => ctl.set(Number(e.target.value))}
              className="mt-1 w-full accent-[#c2410c]"
            />
          </label>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <CodeLine>players = [{RULER_ITEMS.map((_, i) => i).join(", ")}]</CodeLine>
        <CodeLine dark>{snippet}&nbsp;&nbsp;→&nbsp;&nbsp;[{indices.join(", ")}]&nbsp;&nbsp;· {indices.length} item{indices.length === 1 ? "" : "s"}</CodeLine>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {[
          { label: "[:3] — from the start", s: 0, e: 3, st: 1 },
          { label: "[2:] — to the end", s: 2, e: 10, st: 1 },
          { label: "[:] — the whole list (a copy!)", s: 0, e: 10, st: 1 },
          { label: "[-3:] — last three", s: 7, e: 10, st: 1 },
          { label: "[::2] — every second", s: 0, e: 10, st: 2 },
        ].map((p) => (
          <VizBtn
            key={p.label}
            tone="ghost"
            onClick={() => {
              setStart(p.s);
              setStop(p.e);
              setStep(p.st);
            }}
          >
            {p.label}
          </VizBtn>
        ))}
      </div>
    </VizShell>
  );
}

/* ============================================================
   3 — CompPipeline (L15)
   ============================================================ */

export function CompPipeline() {
  const [value, setValue] = useState(0); // 0 = idle, 1..10 walking
  const squares = value > 0 ? Array.from({ length: value }, (_, i) => (i + 1) ** 2) : [];

  const step = () => setValue((v) => (v >= 10 ? 1 : v + 1));

  return (
    <VizShell
      title="Interactive · the comprehension pipeline"
      sub="squares = [value ** 2 for value in range(1, 11)] — the range feeds values, the expression transforms them, the list collects them."
    >
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        <div className="card-warm flex-1 p-3 text-center">
          <p className="text-[.6rem] font-black uppercase tracking-[.16em] text-[#b45309]">range(1, 11)</p>
          <p className="mt-1 font-mono-warm text-xl font-black text-[#3e2c1d]">{value === 0 ? "…" : value}</p>
          <p className="text-[.66rem] text-muted-warm">next value out of the factory</p>
        </div>
        <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#c2410c] md:block" />
        <div className="card-warm flex-1 p-3 text-center">
          <p className="text-[.6rem] font-black uppercase tracking-[.16em] text-[#b45309]">value ** 2</p>
          <p className="mt-1 font-mono-warm text-xl font-black text-[#c2410c]">{value === 0 ? "…" : value ** 2}</p>
          <p className="text-[.66rem] text-muted-warm">the expression, applied</p>
        </div>
        <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#c2410c] md:block" />
        <div className="flex-[2] rounded-2xl border border-[#ecd9bd] bg-white p-3">
          <p className="text-[.6rem] font-black uppercase tracking-[.16em] text-[#b45309]">squares[]</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <AnimatePresence initial={false}>
              {squares.map((s) => (
                <motion.span
                  key={s}
                  layout
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  className="rounded-md px-2 py-1 text-[.74rem] font-bold text-white"
                  style={{ background: GOLD }}
                >
                  {s}
                </motion.span>
              ))}
            </AnimatePresence>
            {value === 0 ? <span className="text-[.74rem] text-muted-warm">empty — press step</span> : null}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <VizBtn onClick={step}>
          <SkipForward className="h-3.5 w-3.5" /> {value >= 10 ? "restart the range" : "next value"}
        </VizBtn>
        <VizBtn tone="ghost" onClick={() => setValue(0)}>
          <RotateCcw className="h-3.5 w-3.5" /> clear
        </VizBtn>
        <span className="text-[.72rem] font-semibold text-muted-warm">
          {value === 0 ? "no colon anywhere in the comprehension — the expression rides FIRST" : `append(${value ** 2}) — no loop body, no colon, one readable line`}
        </span>
      </div>
    </VizShell>
  );
}

/* ============================================================
   4 — FlowTracer (L18) — if-elif-else vs independent ifs
   ============================================================ */

const CHAIN_AGE = [
  { test: "age <= 4", price: 0, age: 3, label: "under 4 → free" },
  { test: "age <= 18", price: 5, age: 12, label: "4–18 → $5" },
  { test: "age < 65", price: 10, age: 30, label: "18+ → $10" },
];
const CHAIN_ELSE = { price: 3, label: "65+ → $3" };

const TOPPINGS = ["mushrooms", "green peppers", "extra cheese"];

export function FlowTracer() {
  const [mode, setMode] = useState<"chain" | "independent">("chain");
  const [age, setAge] = useState(12);
  const [checked, setChecked] = useState(0); // how many checks have run

  const chainHit = age <= 4 ? 0 : age <= 18 ? 1 : age < 65 ? 2 : 3;

  const stepChain = () => setChecked((c) => Math.min(c + 1, chainHit + 1));
  const stepIndependent = () => setChecked((c) => Math.min(c + 1, TOPPINGS.length));

  const reset = (m: "chain" | "independent") => {
    setMode(m);
    setChecked(0);
  };

  return (
    <VizShell
      title="Interactive · execution flow tracer"
      sub="The chain short-circuits at the FIRST true test; independent ifs check every condition. Step through both and count the checks."
    >
      <div className="flex flex-wrap gap-2">
        <VizBtn tone={mode === "chain" ? "warm" : "ghost"} active={mode === "chain"} onClick={() => reset("chain")}>
          if-elif-else chain
        </VizBtn>
        <VizBtn tone={mode === "independent" ? "warm" : "ghost"} active={mode === "independent"} onClick={() => reset("independent")}>
          independent ifs
        </VizBtn>
      </div>

      {mode === "chain" ? (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-[.72rem] font-bold text-muted-warm">age =</span>
            {[3, 12, 30, 70].map((a) => (
              <VizBtn key={a} tone={a === age ? "warm" : "ghost"} active={a === age} onClick={() => { setAge(a); setChecked(0); }}>
                {a}
              </VizBtn>
            ))}
          </div>
          <div className="mt-4 grid gap-2">
            {CHAIN_AGE.map((row, i) => {
              const state = checked > i ? (i === chainHit ? "true" : checked > i ? "false-skip" : "pending") : "pending";
              return (
                <div
                  key={row.test}
                  className="flex items-center justify-between rounded-xl border px-3 py-2"
                  style={{
                    borderColor: state === "true" ? "#4d7c43" : state === "false-skip" ? "#e3d3b8" : "#ecd9bd",
                    background: state === "true" ? "#e7f0e2" : state === "false-skip" ? "#faf6ee" : "#fffaf1",
                  }}
                >
                  <span className="font-mono-warm text-[.8rem] font-bold text-[#3e2c1d]">
                    {i === 0 ? "if" : "elif"} {row.test}:
                  </span>
                  <span className="flex items-center gap-2 text-[.74rem] font-extrabold">
                    {state === "true" ? (
                      <><Check className="h-4 w-4 text-[#4d7c43]" /> True → price = {row.price} · RUN, skip the rest</>
                    ) : state === "false-skip" ? (
                      <><X className="h-4 w-4 text-[#a08568]" /> False → skipped (short-circuit)</>
                    ) : (
                      <span className="text-[#a08568]">pending</span>
                    )}
                  </span>
                </div>
              );
            })}
            <div
              className="flex items-center justify-between rounded-xl border px-3 py-2"
              style={{
                borderColor: chainHit === 3 && checked >= 3 ? "#4d7c43" : "#ecd9bd",
                background: chainHit === 3 && checked >= 3 ? "#e7f0e2" : "#fffaf1",
              }}
            >
              <span className="font-mono-warm text-[.8rem] font-bold text-[#3e2c1d]">else:</span>
              <span className="text-[.74rem] font-extrabold text-[#4d7c43]">
                {chainHit === 3 && checked >= 3 ? <>True by exhaustion → price = {CHAIN_ELSE.price}</> : "only if everything above was False"}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <VizBtn onClick={stepChain}>
              <Play className="h-3.5 w-3.5" /> next check
            </VizBtn>
            <span className="text-[.74rem] font-bold text-[#8a4508]">
              checks run: {Math.min(checked, chainHit + 1)} of 4 possible — a chain stops at the first True
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 grid gap-2">
            {TOPPINGS.map((topping, i) => {
              const special = topping === "green peppers";
              const state = checked > i ? "run" : "pending";
              return (
                <div
                  key={topping}
                  className="flex items-center justify-between rounded-xl border px-3 py-2"
                  style={{
                    borderColor: state === "run" ? (special ? "#b3423a" : "#4d7c43") : "#ecd9bd",
                    background: state === "run" ? (special ? "#fdeae7" : "#e7f0e2") : "#fffaf1",
                  }}
                >
                  <span className="font-mono-warm text-[.8rem] font-bold text-[#3e2c1d]">
                    if topping == &apos;{topping}&apos;:
                  </span>
                  <span className="text-[.74rem] font-extrabold" style={{ color: special ? "#b3423a" : "#4d7c43" }}>
                    {state === "run" ? (
                      <>{special ? <>True → apologize — we are out</> : <>True → adding {topping}</>}</>
                    ) : (
                      "pending"
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <VizBtn onClick={stepIndependent}>
              <Play className="h-3.5 w-3.5" /> next check
            </VizBtn>
            <span className="text-[.74rem] font-bold text-[#8a4508]">
              checks run: {checked} of 3 — independent ifs NEVER skip; every condition is tested
            </span>
          </div>
        </>
      )}
    </VizShell>
  );
}

/* ============================================================
   5 — WhileTracer (L26) — flag / break / continue jump arrows
   ============================================================ */

type WhileEvent = { kind: "check" | "body" | "continue" | "break" | "flagoff" | "exit"; detail: string };

export function WhileTracer() {
  const [count, setCount] = useState(1);
  const [active, setActive] = useState(true);
  const [log, setLog] = useState<WhileEvent[]>([]);
  const [done, setDone] = useState(false);
  const [inject, setInject] = useState<"none" | "break" | "continue">("none");

  const reset = () => {
    setCount(1);
    setActive(true);
    setLog([]);
    setDone(false);
    setInject("none");
  };

  const push = (e: WhileEvent) => setLog((l) => [...l, e].slice(-7));

  const step = () => {
    if (done) return;
    // condition check
    if (!active) {
      push({ kind: "flagoff", detail: "active is False → the condition fails → the loop exits" });
      setDone(true);
      return;
    }
    push({ kind: "check", detail: `check: active is True and count = ${count} ≤ 5 → enter the body` });
    if (inject === "break" && count === 3) {
      push({ kind: "break", detail: "break → leave the loop RIGHT NOW (count = 3) → rest of code" });
      setDone(true);
      setInject("none");
      return;
    }
    if (inject === "continue" && count === 3) {
      push({ kind: "continue", detail: "continue → skip the print, jump back to the condition" });
      setCount((c) => c + 1);
      setInject("none");
      return;
    }
    push({ kind: "body", detail: `print(${count}) → count += 1` });
    if (count >= 5) {
      setCount(6);
      push({ kind: "exit", detail: "count = 6 → the condition finally fails → done" });
      setDone(true);
      return;
    }
    setCount((c) => c + 1);
  };

  return (
    <VizShell
      dark
      title="Interactive · while-loop flow with jump arrows"
      sub="while active and count <= 5: — walk the loop, then fire a flag flip, a break or a continue and watch the jumps."
    >
      <svg viewBox="0 0 640 210" className="w-full" role="img" aria-label="while loop flow diagram">
        {/* condition diamond */}
        <rect x="250" y="20" width="140" height="54" rx="12" fill="rgba(245,158,11,.14)" stroke={GOLD} />
        <text x="320" y="52" textAnchor="middle" fill="#f5c889" fontSize="13" fontWeight="700">condition True?</text>
        {/* body */}
        <rect x="270" y="120" width="100" height="44" rx="10" fill="rgba(234,88,12,.16)" stroke={EMBER_BRIGHT} />
        <text x="320" y="147" textAnchor="middle" fill="#ffd9b8" fontSize="12" fontWeight="700">loop body</text>
        {/* down arrow */}
        <path d="M320 74 L320 118" stroke={GOLD} strokeWidth="2" markerEnd="url(#warrow)" />
        {/* back edge (loop) */}
        <path d="M370 142 C 430 142 450 47 392 40" stroke="#4d7c43" strokeWidth="2" fill="none" markerEnd="url(#warrow)" />
        <text x="452" y="98" fill="#a8c49b" fontSize="11" fontWeight="600">False → exit</text>
        {/* continue edge */}
        <path d="M270 142 C 210 142 190 47 248 40" stroke="#3f628f" strokeWidth="2" fill="none" strokeDasharray="5 4" markerEnd="url(#warrow)" />
        <text x="150" y="98" fill="#9db8d2" fontSize="11" fontWeight="600">continue → skip back</text>
        {/* break edge */}
        <path d="M320 164 L320 196 L520 196" stroke="#b3423a" strokeWidth="2" fill="none" markerEnd="url(#warrow)" />
        <text x="530" y="200" fill="#e2a49e" fontSize="11" fontWeight="600">break → RIGHT NOW</text>
        <defs>
          <marker id="warrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L7,3 L0,6 Z" fill={GOLD} />
          </marker>
        </defs>
      </svg>

      <div className="mt-3 flex flex-wrap gap-2">
        <VizBtn onClick={step} tone={done ? "ghost" : "warm"}>
          <Play className="h-3.5 w-3.5" /> {done ? "finished — reset" : "step the loop"}
        </VizBtn>
        <VizBtn tone="ghost" onClick={() => { setActive(false); push({ kind: "flagoff", detail: "active = False — the flag will fail the condition on the next check" }); }}>
          flip the flag (active = False)
        </VizBtn>
        <VizBtn tone={inject === "break" ? "red" : "ghost"} active={inject === "break"} onClick={() => setInject(inject === "break" ? "none" : "break")}>
          arm break at count 3
        </VizBtn>
        <VizBtn tone={inject === "continue" ? "ghost" : "ghost"} active={inject === "continue"} onClick={() => setInject(inject === "continue" ? "none" : "continue")}>
          arm continue at count 3
        </VizBtn>
        <VizBtn tone="ghost" onClick={reset}>
          <RotateCcw className="h-3.5 w-3.5" /> reset
        </VizBtn>
      </div>

      <div className="mt-3 grid gap-1.5">
        <AnimatePresence initial={false}>
          {log.map((e, i) => (
            <motion.p
              key={`${i}-${e.detail}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg px-2.5 py-1 text-[.76rem] font-semibold"
              style={{
                background:
                  e.kind === "break"
                    ? "rgba(179,66,58,.2)"
                    : e.kind === "continue"
                      ? "rgba(63,98,143,.22)"
                      : e.kind === "flagoff" || e.kind === "exit"
                        ? "rgba(245,158,11,.16)"
                        : "rgba(255,255,255,.06)",
                color: "#f0e2c8",
              }}
            >
              {e.detail}
            </motion.p>
          ))}
        </AnimatePresence>
        {log.length === 0 ? <p className="text-[.76rem] text-[#c9b08e]">Press step — every pass re-checks the condition first.</p> : null}
      </div>
    </VizShell>
  );
}

/* ============================================================
   6 — PipelineViz (L19 · L24)
   ============================================================ */

type PipeStep = { op: string; why: string; list: string[]; side?: string };

const SHIPMENT_PIPE: PipeStep[] = [
  { op: "starting_inventory = ['router', 'switch', 'firewall', 'server', 'cable']", why: "create the list", list: ["router", "switch", "firewall", "server", "cable"] },
  { op: "starting_inventory.remove('server')", why: "remove by value", list: ["router", "switch", "firewall", "cable"] },
  { op: "starting_inventory.insert(0, 'fiber_optic')", why: "insert at the front — everything shifts right", list: ["fiber_optic", "router", "switch", "firewall", "cable"] },
  { op: "starting_inventory[-1] = 'USB_hub'", why: "replace the last item by index", list: ["fiber_optic", "router", "switch", "firewall", "USB_hub"] },
  { op: "allocated_device = starting_inventory.pop(1)", why: "pop index 1 — and KEEP the value", list: ["fiber_optic", "switch", "firewall", "USB_hub"], side: "allocated = 'router'" },
  { op: "starting_inventory.append('rack_mount')", why: "grow at the end", list: ["fiber_optic", "switch", "firewall", "USB_hub", "rack_mount"] },
  { op: "del starting_inventory[2]", why: "delete by index — 'firewall' is gone, unrecoverable", list: ["fiber_optic", "switch", "USB_hub", "rack_mount"] },
  { op: "print('final', …) · print('allocated', …)", why: "output verification", list: ["fiber_optic", "switch", "USB_hub", "rack_mount"], side: "allocated = 'router'" },
];

const RECORDS_PIPE: PipeStep[] = [
  { op: "student_records = [['Alice', [75, 88, 92]], …]", why: "the nested records — name + three scores", list: ["Alice 75/88/92", "Bob 65/70/72", "Charlie 88/90/95", "David 78/82/85", "Eve 45/50/55"] },
  { op: "if sum(scores)/len(scores) < 60: skip — build a NEW list", why: "filter the underperformers — never mutate while iterating", list: ["Alice 75/88/92", "Bob 65/70/72", "Charlie 88/90/95", "David 78/82/85"] },
  { op: "if max(scores) >= 90: record.append('distinction')", why: "reward the top scorers", list: ["Alice +distinction", "Bob 65/70/72", "Charlie +distinction", "David 78/82/85"] },
  { op: "student_records.insert(0, ['Zoya', [91, 84, 88]])", why: "prioritized enrollment — the front, not the end", list: ["Zoya 91/84/88", "Alice +distinction", "Bob 65/70/72", "Charlie +distinction", "David 78/82/85"] },
  { op: "student_records.sort(key=lambda x: x[0])", why: "sort by element 0 — the name", list: ["Alice", "Bob", "Charlie", "David", "Zoya"] },
];

export function PipelineViz({ preset = "shipment" }: { preset?: "shipment" | "records" }) {
  const steps = preset === "shipment" ? SHIPMENT_PIPE : RECORDS_PIPE;
  const [i, setI] = useState(0);
  const current = steps[i];

  return (
    <VizShell
      title={`Interactive · the ${preset === "shipment" ? "shipment" : "records"} pipeline, step by step`}
      sub="Predict the list after each operation, then step and compare — the changed items light up."
    >
      <div className="flex flex-wrap items-center gap-2">
        <VizBtn onClick={() => setI((v) => Math.min(v + 1, steps.length - 1))}>
          <Play className="h-3.5 w-3.5" /> next step
        </VizBtn>
        <VizBtn tone="ghost" onClick={() => setI(0)}>
          <RotateCcw className="h-3.5 w-3.5" /> restart
        </VizBtn>
        <span className="text-[.72rem] font-bold text-[#8a4508]">
          step {i + 1} / {steps.length}
        </span>
      </div>

      <div className="mt-3">
        <CodeLine>{current.op}</CodeLine>
        <p className="mt-1.5 text-[.78rem] font-semibold text-muted-warm">{current.why}</p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-xl border border-[#ecd9bd] bg-white p-3">
        {current.list.map((item, idx) => {
          const prev = i > 0 ? steps[i - 1].list : [];
          const changed = !prev.includes(item) || prev[idx] !== item;
          return (
            <motion.span
              key={`${item}-${idx}`}
              layout
              initial={changed ? { scale: 0.7, backgroundColor: "#fde3dd" } : false}
              animate={{ scale: 1, backgroundColor: changed ? "#fde3dd" : "#f6f2ea" }}
              transition={{ duration: 0.3 }}
              className="rounded-md px-2 py-1 text-[.74rem] font-bold text-[#3e2c1d]"
            >
              {item}
            </motion.span>
          );
        })}
        {current.side ? (
          <span className="ml-2 rounded-md bg-[#e7f0e2] px-2 py-1 font-mono-warm text-[.72rem] font-bold text-[#4d7c43]">{current.side}</span>
        ) : null}
      </div>
    </VizShell>
  );
}

/* ============================================================
   7 — MatchingLanes (L20)
   ============================================================ */

const AVAILABLE = ["mushrooms", "olives", "green peppers", "pepperoni", "extra cheese"];

export function MatchingLanes() {
  const [requested, setRequested] = useState<string[]>(["mushrooms", "french fries", "extra cheese"]);
  const [ran, setRan] = useState(false);

  const toggle = (t: string) => {
    setRequested((r) => (r.includes(t) ? r.filter((x) => x !== t) : [...r, t]));
    setRan(false);
  };

  const accept = ran ? requested.filter((t) => AVAILABLE.includes(t)) : [];
  const apologize = ran ? requested.filter((t) => !AVAILABLE.includes(t)) : [];

  return (
    <VizShell
      dark
      title="Interactive · the dual-list matching lanes"
      sub="requested_toppings checked against available_toppings with the in operator — every item lands in exactly one lane."
    >
      <p className="text-[.66rem] font-black uppercase tracking-[.16em] text-[#d9b88c]">available_toppings (the kitchen&apos;s list)</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {AVAILABLE.map((t) => (
          <span key={t} className="rounded-md bg-[#e7f0e2] px-2 py-1 text-[.72rem] font-bold text-[#2f4a2b]">{t}</span>
        ))}
      </div>

      <p className="mt-4 text-[.66rem] font-black uppercase tracking-[.16em] text-[#d9b88c]">requested_toppings (tap to toggle)</p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["mushrooms", "olives", "green peppers", "pepperoni", "extra cheese", "french fries"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => toggle(t)}
            className="rounded-md px-2 py-1 text-[.72rem] font-bold transition-colors"
            style={
              requested.includes(t)
                ? { background: `linear-gradient(135deg,${EMBER_BRIGHT},${EMBER})`, color: "#fff7ec" }
                : { background: "rgba(255,255,255,.08)", color: "#c9b08e" }
            }
          >
            {t}
          </button>
        ))}
        <VizBtn tone="ghost" onClick={() => { setRequested([]); setRan(false); }}>empty the list</VizBtn>
      </div>

      <div className="mt-4">
        <VizBtn onClick={() => setRan(true)}>
          <Play className="h-3.5 w-3.5" /> run the kitchen loop
        </VizBtn>
      </div>

      <AnimatePresence initial={false}>
        {ran && requested.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-xl border px-4 py-3"
            style={{ borderColor: "rgba(245,158,11,.4)", background: "rgba(245,158,11,.1)" }}
          >
            <p className="text-[.8rem] font-extrabold text-[#f5c889]">if requested_toppings: → False — the empty list short-circuits everything</p>
            <p className="mt-1 text-[.78rem] text-[#e0cbaa]">&ldquo;Are you sure you want a plain pizza?&rdquo; — the for loop never runs at all.</p>
          </motion.div>
        ) : null}
        {ran && requested.length > 0 ? (
          <motion.div key="lanes" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-[#4d7c43]/50 bg-[#e7f0e2]/90 p-3">
              <p className="text-[.66rem] font-black uppercase tracking-[.14em] text-[#2f4a2b]">accept lane — adding</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {accept.length ? (
                  accept.map((t) => (
                    <span key={t} className="rounded-md bg-white px-2 py-1 text-[.72rem] font-bold text-[#2f4a2b]">Adding {t}.</span>
                  ))
                ) : (
                  <span className="text-[.74rem] text-[#2f4a2b]">nothing — every request was unavailable</span>
                )}
              </div>
            </div>
            <div className="rounded-xl border border-[#b3423a]/50 bg-[#fdeae7]/90 p-3">
              <p className="text-[.66rem] font-black uppercase tracking-[.14em] text-[#8c2f28]">apologize lane — not available</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {apologize.length ? (
                  apologize.map((t) => (
                    <span key={t} className="rounded-md bg-white px-2 py-1 text-[.72rem] font-bold text-[#8c2f28]">
                      {t === "green peppers" ? "Sorry, we are out of green peppers right now." : `Sorry, we don't have ${t}.`}
                    </span>
                  ))
                ) : (
                  <span className="text-[.74rem] text-[#8c2f28]">nothing — every request was available</span>
                )}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </VizShell>
  );
}

/* ============================================================
   8 — CallStackFlow (L28)
   ============================================================ */

type StackStage = 0 | 1 | 2 | 3; // call → bind → process → return

export function CallStackFlow() {
  const [stage, setStage] = useState<StackStage>(0);
  const [variant, setVariant] = useState<"string" | "dict">("string");

  const reset = (v: "string" | "dict") => {
    setVariant(v);
    setStage(0);
  };

  const step = () => setStage((s) => (s >= 3 ? 0 : ((s + 1) as StackStage)));

  const stringView = {
    call: "get_formatted_name('ada', 'lovelace')",
    bind: "first = 'ada' · last = 'lovelace'",
    work: "full_name = f\"{first} {last}\".title()",
    ret: "returns 'Ada Lovelace' → musician = …",
  };
  const dictView = {
    call: "build_person('ada', 'lovelace', age=36)",
    bind: "first = 'ada' · last = 'lovelace' · age = 36",
    work: "person = {'first': first, 'last': last, 'age': age}",
    ret: "returns the dict → person = {'first': 'ada', …}",
  };
  const view = variant === "string" ? stringView : dictView;
  const lines = [view.call, view.bind, view.work, view.ret];

  return (
    <VizShell
      title="Interactive · the caller ↔ function call stack"
      sub="Arguments travel IN to the parameters, the body works locally, and return sends the answer BACK to the calling line."
    >
      <div className="flex flex-wrap gap-2">
        <VizBtn tone={variant === "string" ? "warm" : "ghost"} active={variant === "string"} onClick={() => reset("string")}>
          return a string
        </VizBtn>
        <VizBtn tone={variant === "dict" ? "warm" : "ghost"} active={variant === "dict"} onClick={() => reset("dict")}>
          return a dictionary
        </VizBtn>
      </div>

      <div className="mt-4 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-[#ecd9bd] bg-white p-4">
          <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#b45309]">the caller (main)</p>
          <p className="mt-2 font-mono-warm text-[.8rem] text-[#3e2c1d]">
            {stage >= 3 ? (
              variant === "string" ? (
                <>musician = <span className="font-black text-[#4d7c43]">&apos;Ada Lovelace&apos;</span></>
              ) : (
                <>person = <span className="font-black text-[#4d7c43]">{"{'first': 'ada', 'last': 'lovelace', 'age': 36}"}</span></>
              )
            ) : (
              <span className="text-[#a08568]">waiting…</span>
            )}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <motion.div animate={{ x: stage >= 1 && stage <= 2 ? [0, 6, 0] : 0 }} className="text-[#c2410c]" title="arguments travel in">
            <ArrowRight className="h-6 w-6 rotate-45 md:rotate-0" />
          </motion.div>
          <p className="text-[.58rem] font-black uppercase tracking-[.14em] text-[#a08568]">
            {stage === 0 ? "press step" : stage === 1 ? "arguments in" : stage === 2 ? "processing" : "return out"}
          </p>
          <motion.div animate={{ x: stage >= 3 ? [0, -6, 0] : 0 }} className="text-[#4d7c43]" title="return travels back">
            <ArrowRight className="h-6 w-6 rotate-[225deg] md:rotate-180" />
          </motion.div>
        </div>

        <div className="rounded-2xl border-2 p-4" style={{ borderColor: stage >= 1 && stage <= 2 ? EMBER_BRIGHT : "#ecd9bd", background: stage >= 1 && stage <= 2 ? "#fff3e2" : "#fffaf1" }}>
          <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#b45309]">
            {variant === "string" ? "get_formatted_name()" : "build_person()"} — the function frame
          </p>
          <div className="mt-2 grid gap-1.5">
            {lines.map((line, i) => (
              <p
                key={i}
                className="font-mono-warm rounded-md px-2 py-1 text-[.74rem] transition-colors"
                style={{
                  background: stage > i ? "#f7ecdc" : "transparent",
                  color: stage > i ? "#8a4508" : "#c2b39c",
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <VizBtn onClick={step}>
          <Play className="h-3.5 w-3.5" /> {stage >= 3 ? "next call" : "step the call"}
        </VizBtn>
        <span className="ml-3 text-[.74rem] font-bold text-[#8a4508]">
          {stage === 0 && "print() is a dead end; return is a doorway — the value comes home."}
          {stage === 1 && "the call pauses this line; arguments copy into the parameters."}
          {stage === 2 && "the body works on its LOCAL variables."}
          {stage === 3 && "return hands the value back — the caller stores it and moves on."}
        </span>
      </div>
    </VizShell>
  );
}
