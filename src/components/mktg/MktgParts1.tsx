"use client";

/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS
   PARTS 1 — Lectures 1–5 (13 chapters)
   · L1  why-mktg          · L3  definitions / mktg-system /
   · L2  anticipation            marketable / need-want-demand /
   · L2  topline                 demand-states
   · L2  mktg-vs-selling   · L4  closed-system / biz-value
                             · L5  chai-value / cpv-formula

   Design system: Boutique Teal & Champagne — teal #0f766e/#14b8a6,
   champagne #a97d2c/#e3c26b, ink #1f2b2b, lagoon dark panels.
   Every fact, figure and brand story comes from
   /upload/marketing-lectures.txt (Lectures 1–5).
   ============================================================ */

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AppWindow, Armchair, ArrowLeftRight, BadgeCheck, BarChart3, Boxes, Building2, Calculator, Car,
  ChevronRight, Clapperboard, Coffee, Compass, CreditCard, Drumstick, HeartHandshake, Ticket, Watch,
  LayoutGrid, Lightbulb, Lock, MapPin, Megaphone, MessageCircleQuestion, Music, Pause,
  PenLine, Pizza, Plane, Play, Quote, RotateCcw, Sandwich, Scale, Scissors, School,
  Search, Shirt, ShoppingBag, Smartphone, Sofa, Store, TrendingDown, Truck, User,
  UtensilsCrossed, Wallet, Zap,
} from "lucide-react";
import {
  Callout, KV, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- palette + shared helpers ---------- */

const TEAL = "#0f766e";
const TEAL_B = "#14b8a6";
const INK = "#1f2b2b";
const GOLD = "#a97d2c";
const GOLD_L = "#e3c26b";
const ROSE = "#9f3d54";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const TEAL_GRAD = "linear-gradient(135deg,#14b8a6,#0f766e)";
const GOLD_GRAD = "linear-gradient(135deg,#e3c26b,#a97d2c)";
const LIGHT = "#e9f2ee"; // light text on lagoon panels
const DIM = "#9fbcb4"; // muted text on lagoon panels

/** Teal→gold gradient text span (never the ATB .grad-text class). */
function GT({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e 55%,#a97d2c)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
      {children}
    </span>
  );
}

/** Reader prose paragraph. */
function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48] ${className}`}>{children}</p>;
}

/** Machine button — teal / gold / plain / on-dark / rose. */
type Tone = "teal" | "gold" | "plain" | "dark" | "rose";
function MBtn({ onClick, children, tone = "teal", aria, active = false, disabled = false }: {
  onClick: () => void; children: React.ReactNode; tone?: Tone; aria?: string; active?: boolean; disabled?: boolean;
}) {
  const styles: Record<Tone, React.CSSProperties> = {
    teal: { background: TEAL_GRAD, color: "#f0fdfa" },
    gold: { background: GOLD_GRAD, color: "#33260b" },
    plain: { background: "#f2efe7", color: INK, border: "1px solid #e3ddcf" },
    dark: { background: "rgba(20,184,166,.14)", color: "#c6f4ea", border: "1px solid rgba(20,184,166,.42)" },
    rose: { background: "#f7e9ec", color: ROSE, border: "1px solid #e5c2cb" },
  };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={aria}
      aria-pressed={active || undefined}
      disabled={disabled}
      style={active ? { background: TEAL_GRAD, color: "#f0fdfa" } : styles[tone]}
      className={`rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 ${disabled ? "cursor-not-allowed opacity-50" : "hover:-translate-y-0.5"}`}
    >
      {children}
    </button>
  );
}

/** aria-live status line for machines. */
function MLive({ msg }: { msg: string }) {
  return (
    <p aria-live="polite" className="mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold"
      style={{ background: "#edf5f2", border: "1px dashed #9fd0c6", color: TEAL }}>
      {msg}
    </p>
  );
}

/** Machine header row: icon badge + title + chip. */
function MHead({ icon, title, chip }: { icon: React.ReactNode; title: string; chip?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))", color: TEAL }}>
        {icon}
      </span>
      <h3 className="text-xl font-bold md:text-2xl" style={{ color: INK }}>{title}</h3>
      {chip ? <span className="chip">{chip}</span> : null}
    </div>
  );
}

/** Dark lagoon panel that hosts machine SVGs. */
function LagoonBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl p-3 md:p-4 ${className}`} style={{ background: LAGOON, border: "1px solid rgba(20,184,166,.28)" }}>
      {children}
    </div>
  );
}

/** Numbered objective dot. */
function NumDot({ n }: { n: string }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[.8rem] font-black"
      style={{ background: TEAL_GRAD, color: "#f0fdfa" }} aria-hidden>
      {n}
    </span>
  );
}

/** Auto-advance effect shared by step players: returns a timeout that steps `step` while playing. */
function useAutoStep(playing: boolean, step: number, max: number, ms: number, setStep: (f: (s: number) => number) => void, stop: () => void) {
  useEffect(() => {
    if (!playing) return;
    if (step >= max) {
      stop();
      return;
    }
    const t = window.setTimeout(() => setStep((s) => Math.min(s + 1, max)), ms);
    return () => window.clearTimeout(t);
  }, [playing, step, max, ms, setStep, stop]);
}

/* ============================================================
   CH 1 · why-mktg — the meaning machine
   ============================================================ */

const MEANING_BEATS = [
  { k: "Beyond selling", line: "Marketing is not limited to selling or product promotion." },
  { k: "Reading decisions", line: "It encompasses understanding consumer behavior and decision-making processes." },
  { k: "Brand preference", line: "It explores why customers prefer certain brands over competitors." },
  { k: "Creating value", line: "It focuses on creating value rather than just transacting sales." },
];

function MeaningMachine() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing, step, MEANING_BEATS.length - 1, 1700, setStep, stop);

  const beat = MEANING_BEATS[step];
  const msg = `Beat ${step + 1} of 4 · ${beat.k} — ${beat.line}`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Compass className="h-5 w-5" aria-hidden />} title="What marketing really means — four beats" chip="Lecture 1 · the definition surface" />
      <LagoonBox className="mt-4">
        <div className="flex items-center gap-2 sm:gap-3" aria-hidden>
          {MEANING_BEATS.map((b, i) => (
            <div key={b.k} className="flex flex-1 flex-col items-center gap-1.5">
              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[.82rem] font-black"
                animate={{ scale: i === step ? 1.18 : 1 }}
                style={i === step
                  ? { background: GOLD_GRAD, color: "#33260b" }
                  : { background: "rgba(20,184,166,.12)", color: DIM, border: "1px solid rgba(20,184,166,.4)" }}
              >
                {i + 1}
              </motion.span>
              <span className="hidden text-center text-[.66rem] font-bold uppercase tracking-wider sm:block" style={{ color: i === step ? GOLD_L : DIM }}>{b.k}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(20,184,166,.16)" }} aria-hidden>
          <motion.div className="h-full rounded-full" style={{ background: GOLD_GRAD }}
            initial={false} animate={{ width: `${((step + 1) / MEANING_BEATS.length) * 100}%` }} transition={{ type: "spring", stiffness: 160, damping: 24 }} />
        </div>
        <div className="mt-4 min-h-[5.4rem]">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.32 }}>
              <p className="text-2xl font-bold md:text-3xl" style={{ color: LIGHT }}>{beat.k}</p>
              <p className="mt-1.5 max-w-xl text-[.95rem] leading-relaxed" style={{ color: DIM }}>{beat.line}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setStep(0), setPlaying(true)))} aria={playing ? "Pause the four beats" : "Play the four beats"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}
          {playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn tone="plain" onClick={() => setStep((s) => Math.min(s + 1, MEANING_BEATS.length - 1))} aria="Next beat">Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setStep(0); }} aria="Reset to the first beat"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/* ============================================================
   CH 2 · anticipation — the decline machines
   ============================================================ */

type DeclineEvent = { tag: string; label: string; note: string };
type Brand = { key: string; name: string; sub: string; events: DeclineEvent[] };

const BRANDS: Brand[] = [
  {
    key: "bb", name: "BlackBerry", sub: "the keyboard everyone trusted", events: [
      { tag: "2007", label: "Apple launches the iPhone", note: "The stock price begins a gradual decline." },
      { tag: "2008", label: "Android's launch", note: "The decline deepens with Android's arrival." },
      { tag: "2010", label: "The bottom", note: "The stock reaches bottom in 2010." },
      { tag: "End", label: "Bankruptcy", note: "The company eventually went bankrupt — it failed to anticipate the market shift." },
    ],
  },
  {
    key: "hz", name: "Hertz", sub: "renting cars, owning the burden", events: [
      { tag: "Uber", label: "Uber's 2019 launch — a $17 billion valuation", note: "Hertz faces decline after Uber's arrival." },
      { tag: "Fleet", label: "Owned fleet, owned burden", note: "Owning the car fleet means high capital and maintenance costs." },
      { tag: "Model", label: "Uber's asset-light answer", note: "Outsourced drivers and vehicles prove superior." },
      { tag: "2018", label: "Global exit", note: "Hertz exits the global market by 2018 — yet remains operational in southern India." },
    ],
  },
  {
    key: "bl", name: "Blockbuster", sub: "Friday night, on a disc", events: [
      { tag: "DVD", label: "The rental king", note: "A movie rental company at the centre of home entertainment." },
      { tag: "2002", label: "Netflix personalizes", note: "Netflix introduces personalized recommendations in 2002." },
      { tag: "2012", label: "Netflix streams", note: "Netflix launches its streaming service in 2012." },
      { tag: "CEO", label: "“Non-competitive”", note: "Despite holding a competitive advantage, Blockbuster's CEO dismisses Netflix as non-competitive." },
      { tag: "End", label: "Bankrupt", note: "The OTT model disrupts the industry — Blockbuster goes bankrupt." },
    ],
  },
];

const BRAND_ICONS: Record<string, React.ReactNode> = {
  bb: <Smartphone className="h-4 w-4" aria-hidden />,
  hz: <Car className="h-4 w-4" aria-hidden />,
  bl: <Clapperboard className="h-4 w-4" aria-hidden />,
};

function DeclineChart({ b, step }: { b: Brand; step: number }) {
  const n = b.events.length;
  const L = 78, R = 596, T = 62, B = 236;
  const pts = b.events.map((_, i) => [L + (i * (R - L)) / (n - 1), T + (i * (B - T)) / (n - 1)] as const);
  const d = "M" + pts.map((p) => `${p[0]},${p[1]}`).join(" L");
  const frac = step === 0 ? 0 : (step - 1) / (n - 1);
  return (
    <svg viewBox="0 0 660 300" className="h-auto w-full" role="img" aria-label={`Schematic stock chart of the ${b.name} decline, event by event`}>
      <defs>
        <marker id="dc-ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={DIM} /></marker>
      </defs>
      {/* axes */}
      <line x1="56" y1="40" x2="56" y2="252" stroke="#3a5350" strokeWidth="1.6" markerEnd="url(#dc-ah)" />
      <line x1="56" y1="252" x2="636" y2="252" stroke="#3a5350" strokeWidth="1.6" markerEnd="url(#dc-ah)" />
      <text x="40" y="150" fontSize="10.5" fontWeight="700" fill={DIM} transform="rotate(-90 40 150)" textAnchor="middle">share price · schematic</text>
      <text x="600" y="278" fontSize="10.5" fontWeight="700" fill={DIM} textAnchor="end">time →</text>
      {/* ghost of the full decline */}
      <path d={d} fill="none" stroke="#9f3d54" strokeWidth="2" opacity="0.22" strokeDasharray="5 7" />
      {/* progress line */}
      <motion.path d={d} fill="none" stroke="#9f3d54" strokeWidth="3.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} animate={{ pathLength: frac }} transition={{ type: "spring", stiffness: 60, damping: 18 }} />
      {pts.map((p, i) => (
        <g key={i}>
          <motion.circle cx={p[0]} cy={p[1]} r={i === step - 1 ? 8 : 6} fill={i === step - 1 ? GOLD_L : "#9f3d54"}
            stroke="#f2efe7" strokeWidth="2" opacity={i < step ? 1 : 0.12}
            initial={false} animate={{ opacity: i < step ? 1 : 0.12 }} />
          <text x={p[0]} y={p[1] + (i % 2 === 0 ? -16 : 24)} textAnchor="middle" fontSize="11" fontWeight="800"
            fill={i < step ? GOLD_L : "#54706b"} opacity={i < step ? 1 : 0.35}>{b.events[i].tag}</text>
        </g>
      ))}
    </svg>
  );
}

function DeclineMachine() {
  const [tab, setTab] = useState(0);
  const [step, setStep] = useState(1);
  const [playing, setPlaying] = useState(false);
  const b = BRANDS[tab];
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing, step, b.events.length, 1500, setStep, stop);

  const pick = (i: number) => { setTab(i); setStep(1); setPlaying(false); };
  const msg = step === 0
    ? `${b.name} — press Play to trace the decline.`
    : `${b.name} · event ${step} of ${b.events.length} — ${b.events[step - 1].note}`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<TrendingDown className="h-5 w-5" aria-hidden />} title="Three giants, one missing skill" chip="Lecture 2 · anticipation" />
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Choose a decline case">
        {BRANDS.map((br, i) => (
          <button key={br.key} type="button" role="tab" aria-selected={tab === i} onClick={() => pick(i)}
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={tab === i ? { background: TEAL_GRAD, color: "#f0fdfa" } : { background: "#f2efe7", color: INK, border: "1px solid #e3ddcf" }}>
            {BRAND_ICONS[br.key]} {br.name}
          </button>
        ))}
      </div>
      <LagoonBox className="mt-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2 px-1">
          <p className="text-lg font-bold" style={{ color: LIGHT }}>{b.name}</p>
          <p className="text-[.8rem]" style={{ color: DIM }}>{b.sub}</p>
        </div>
        <DeclineChart b={b} step={step} />
        <AnimatePresence mode="wait">
          <motion.p key={`${b.key}-${step}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="min-h-[3.2rem] px-1 text-[.92rem] leading-relaxed" style={{ color: LIGHT }}>
            {step === 0 ? "Watch the pattern: a gradual drop… then the sudden collapse." : (
              <>
                <span style={{ color: GOLD_L, fontWeight: 800 }}>{b.events[step - 1].tag} · {b.events[step - 1].label}. </span>
                {b.events[step - 1].note}
              </>
            )}
          </motion.p>
        </AnimatePresence>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setStep(0), setPlaying(true)))} aria={playing ? "Pause the decline trace" : "Play the decline trace"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}
          {playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn tone="plain" onClick={() => setStep((s) => Math.min(s + 1, b.events.length))} aria="Next event">Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setStep(0); }} aria="Reset the trace"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/** Static pattern-of-decline curve. */
function PatternSvg() {
  return (
    <svg viewBox="0 0 640 220" className="h-auto w-full" role="img" aria-label="The pattern of organizational decline: a gradual performance drop followed by a sudden collapse, with a pivot branch for anticipators">
      <defs>
        <marker id="pt-g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={GOLD} /></marker>
        <marker id="pt-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ROSE} /></marker>
      </defs>
      <line x1="40" y1="180" x2="610" y2="180" stroke="#d8d2c2" strokeWidth="1.5" />
      <motion.path d="M60,40 C180,52 300,70 400,110 C440,127 462,140 478,172" fill="none" stroke={ROSE} strokeWidth="3.4" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeInOut" }} />
      <motion.path d="M300,84 C352,96 384,60 424,44" fill="none" stroke={GOLD} strokeWidth="3.4" strokeLinecap="round" strokeDasharray="8 6"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1, ease: "easeOut" }} markerEnd="url(#pt-g)" />
      <circle cx="478" cy="172" r="6" fill={ROSE} />
      <text x="500" y="176" fontSize="12" fontWeight="800" fill={ROSE}>sudden collapse</text>
      <text x="60" y="28" fontSize="12" fontWeight="800" fill={ROSE}>initial gradual performance drop</text>
      <text x="300" y="34" fontSize="12" fontWeight="800" fill={GOLD}>anticipators pivot before the cliff</text>
      <text x="470" y="202" fontSize="11" fontWeight="700" fill="#7a8b87" markerEnd="url(#pt-r)">unable to anticipate → rapid market exit</text>
    </svg>
  );
}

/* ============================================================
   CH 3 · topline — the cold-coffee P&L calculator
   ============================================================ */

function PnLMachine() {
  const [price, setPrice] = useState(120);
  const [glasses, setGlasses] = useState(80);
  const [cost, setCost] = useState(70);
  const revenue = price * glasses;
  const totalCost = cost * glasses;
  const profit = revenue - totalCost;
  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;
  const costShare = revenue > 0 ? Math.max(0, Math.min(1, totalCost / revenue)) : 0;
  const profitShare = revenue > 0 ? Math.max(0, Math.min(1, profit / revenue)) : 0;

  const slider = (label: string, v: number, set: (n: number) => void, min: number, max: number, aria: string) => (
    <label className="flex flex-1 min-w-[210px] flex-col gap-1.5">
      <span className="flex items-baseline justify-between text-[.78rem] font-extrabold uppercase tracking-wider" style={{ color: GOLD }}>
        {label} <span className="font-mono-warm text-[.95rem]" style={{ color: INK }}>{fmt(v)}</span>
      </span>
      <input type="range" min={min} max={max} step={5} value={v} onChange={(e) => set(Number(e.target.value))}
        aria-label={aria} className="w-full accent-[#0f766e]" />
    </label>
  );

  const tile = (k: string, v: number, bg: string, fg: string, hint: string) => (
    <div className="flex-1 rounded-2xl p-4" style={{ background: bg, border: "1px solid rgba(20,184,166,.18)" }}>
      <p className="text-[.68rem] font-extrabold uppercase tracking-[.16em]" style={{ color: fg, opacity: 0.85 }}>{k}</p>
      <motion.p key={v} initial={{ opacity: 0.35, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.22 }}
        className="mt-1 font-mono-warm text-xl font-black md:text-2xl" style={{ color: fg }}>{fmt(v)}</motion.p>
      <p className="mt-1 text-[.72rem]" style={{ color: fg, opacity: 0.75 }}>{hint}</p>
    </div>
  );

  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Calculator className="h-5 w-5" aria-hidden />} title="The cold-coffee P&L — run the café yourself" chip="Lecture 2 · price ₹120 · 80 glasses · cost ₹70" />
      <div className="mt-4 flex flex-wrap gap-4">
        {slider("Price per glass", price, setPrice, 60, 200, "Price per glass in rupees")}
        {slider("Glasses a day", glasses, setGlasses, 20, 150, "Number of glasses sold per day")}
        {slider("Cost per glass", cost, setCost, 40, 120, "Cost per glass in rupees")}
      </div>
      <LagoonBox className="mt-4">
        <div className="flex flex-wrap gap-3">
          {tile("Top line · revenue", revenue, "rgba(20,184,166,.14)", LIGHT, "price × volume")}
          {tile("Total cost", totalCost, "rgba(227,194,107,.10)", GOLD_L, "cost × volume")}
          {tile("Bottom line · profit", profit, profit < 0 ? "rgba(159,61,84,.20)" : "rgba(20,184,166,.20)", profit < 0 ? "#f3b7c3" : LIGHT, "revenue − cost")}
        </div>
        <div className="mt-3 px-1" aria-hidden>
          <div className="flex h-3.5 w-full overflow-hidden rounded-full" style={{ background: "rgba(20,184,166,.12)" }}>
            <motion.div className="h-full" style={{ background: GOLD_GRAD }} initial={false} animate={{ width: `${costShare * 100}%` }} transition={{ type: "spring", stiffness: 130, damping: 22 }} />
            <motion.div className="h-full" style={{ background: ROSE }} initial={false} animate={{ width: `${profitShare * 100}%` }} transition={{ type: "spring", stiffness: 130, damping: 22 }} />
          </div>
          <p className="mt-1.5 text-[.72rem]" style={{ color: DIM }}>
            <span style={{ color: GOLD_L }}>■ cost share</span> · <span style={{ color: "#e89db0" }}>■ profit share</span> of the top line{profit < 0 ? " — the bottom line dips below zero at this price" : ""}
          </p>
        </div>
      </LagoonBox>
      <MLive msg={`${fmt(price)} × ${glasses} − ${fmt(cost)} × ${glasses} = revenue ${fmt(revenue)} − cost ${fmt(totalCost)} = profit ${fmt(profit)}.`} />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <MBtn tone="plain" onClick={() => { setPrice(120); setGlasses(80); setCost(70); }} aria="Reset to the lecture's café numbers"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Back to the lecture's café</MBtn>
        <p className="text-[.82rem] leading-relaxed text-[#5f7472]">The lecture's run: ₹120 × 80 − ₹70 × 80 → revenue <strong style={{ color: TEAL }}>₹9,600</strong>, cost <strong style={{ color: GOLD }}>₹5,600</strong>, profit <strong style={{ color: TEAL }}>₹4,000</strong>.</p>
      </div>
    </div>
  );
}

/* ============================================================
   CH 4 · mktg-vs-selling — the pen machine + spot-the-marketing
   ============================================================ */

const PEN_ATTRS = ["writes flawlessly", "black color", "good grip", "improves exam marks"];
const PEN_QS = [
  "Do you prefer ballpoint, pilot, or ink pens?",
  "What is your budget?",
  "Do you prefer fine or broad nib?",
  "What color do you prefer?",
];

function PenMachine() {
  const [mode, setMode] = useState<"sales" | "mktg">("sales");
  const [qi, setQi] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing && mode === "mktg", qi, PEN_QS.length, 1250, setQi, stop);

  const msg = mode === "sales"
    ? "Sales-dominant: push the pen's attributes — after the product already exists."
    : qi < PEN_QS.length
      ? `Marketing question ${qi + 1} of ${PEN_QS.length}: ${PEN_QS[qi]}`
      : "All four asked — understanding needs before presenting the product ensures better fit, and more successful sales outcomes.";
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<PenLine className="h-5 w-5" aria-hidden />} title="One pen, two postures" chip="Lecture 2 · the pen test" />
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone="teal" active={mode === "sales"} onClick={() => { setMode("sales"); setPlaying(false); }} aria="Show the sales-dominant approach"><Megaphone className="mr-1 inline h-3.5 w-3.5" aria-hidden />Sales-dominant</MBtn>
        <MBtn tone="gold" active={mode === "mktg"} onClick={() => { setMode("mktg"); setQi(0); }} aria="Show the marketing approach"><MessageCircleQuestion className="mr-1 inline h-3.5 w-3.5" aria-hidden />Marketing — ask first</MBtn>
      </div>
      <LagoonBox className="mt-4 min-h-[12rem]">
        <AnimatePresence mode="wait">
          {mode === "sales" ? (
            <motion.div key="sales" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
              <p className="flex items-center gap-2 text-lg font-bold" style={{ color: LIGHT }}><Megaphone className="h-5 w-5" style={{ color: GOLD_L }} aria-hidden /> Push the product&apos;s attributes</p>
              <p className="mt-1 max-w-xl text-[.92rem] leading-relaxed" style={{ color: DIM }}>Selling focuses on pushing products to consumers <em>after</em> creation — so the pitch is all product:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PEN_ATTRS.map((a, i) => (
                  <motion.span key={a} className="rounded-full px-3.5 py-1.5 text-[.84rem] font-bold"
                    style={{ background: "rgba(20,184,166,.14)", border: "1px solid rgba(20,184,166,.4)", color: LIGHT }}
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12 * i }}>
                    {a}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="mktg" initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.3 }}>
              <p className="flex items-center gap-2 text-lg font-bold" style={{ color: LIGHT }}><MessageCircleQuestion className="h-5 w-5" style={{ color: GOLD_L }} aria-hidden /> Ask before you present</p>
              <p className="mt-1 max-w-xl text-[.92rem] leading-relaxed" style={{ color: DIM }}>Marketing begins with understanding consumer needs <em>before</em> the pen comes out:</p>
              <ul className="mt-3 grid gap-2">
                {PEN_QS.slice(0, qi).map((q) => (
                  <motion.li key={q} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl px-3.5 py-2 text-[.9rem] font-semibold"
                    style={{ background: "rgba(227,194,107,.10)", border: "1px solid rgba(227,194,107,.35)", color: LIGHT }}>
                    {q}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        {mode === "mktg" ? (
          <>
            <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setQi(0), setPlaying(true)))} aria={playing ? "Pause the questions" : "Play the questions"}>
              {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play"}
            </MBtn>
            <MBtn tone="plain" disabled={qi >= PEN_QS.length} onClick={() => setQi((q) => Math.min(q + 1, PEN_QS.length))} aria="Next question">Next question <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
            <MBtn tone="plain" onClick={() => { setPlaying(false); setQi(0); }} aria="Reset the questions"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
          </>
        ) : (
          <MBtn tone="gold" onClick={() => { setMode("mktg"); setQi(0); }} aria="Switch to the marketing approach">Now ask the four questions instead <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        )}
      </div>
      <MLive msg={msg} />
    </div>
  );
}

const SPOT_ITEMS: { t: string; d: string; v: "m" | "s"; why: string }[] = [
  { t: "₹1 shampoo sachets", d: "Smaller sachets, for one rupee, targeting value-conscious consumers.", v: "m", why: "product design — a marketing-mix decision made before any selling happens." },
  { t: "20% off at a restaurant", d: "A restaurant runs a 20% discount.", v: "m", why: "promotional pricing — the promotion element of the marketing mix." },
  { t: "Iced-coffee study", d: "A brand studies student preferences for iced coffee.", v: "m", why: "consumer research — understanding needs before the product exists." },
  { t: "Zomato's timed notifications", d: "Time-targeted, humorous notifications about food deals.", v: "m", why: "digital marketing — triggering purchase intent." },
  { t: "Chocolates at the billing counter", d: "Chocolates kept near the billing counter.", v: "m", why: "point-of-purchase placement — retail marketing for impulse purchases." },
  { t: "The laptop pitch", d: "A salesperson convinces a customer to buy a laptop.", v: "s", why: "direct persuasion — this one is sales, not marketing." },
];

function SpotMachine() {
  const [sel, setSel] = useState<number | null>(null);
  const [ans, setAns] = useState<Record<number, "m" | "s">>({});
  const [log, setLog] = useState("Pick an activity, then call it Marketing or Sales.");
  const answered = Object.keys(ans).length;
  const correct = SPOT_ITEMS.filter((it, i) => ans[i] === it.v).length;

  function judge(v: "m" | "s") {
    if (sel === null) return;
    const it = SPOT_ITEMS[sel];
    setAns((a) => ({ ...a, [sel]: v }));
    setLog(`${v === it.v ? "✓" : "✗"} ${it.t} — ${it.why}`);
  }
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<ShoppingBag className="h-5 w-5" aria-hidden />} title="Spot the marketing" chip="Lecture 2 · six moments from the notes" />
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {SPOT_ITEMS.map((it, i) => {
          const a = ans[i];
          const picked = sel === i;
          return (
            <button key={it.t} type="button" onClick={() => setSel(i)} aria-pressed={picked}
              className="rounded-2xl p-3.5 text-left transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                background: picked ? "rgba(20,184,166,.10)" : "#f2efe7",
                border: `1.5px solid ${a ? (a === it.v ? TEAL_B : ROSE) : picked ? TEAL_B : "#e3ddcf"}`,
              }}>
              <p className="text-[.9rem] font-extrabold" style={{ color: INK }}>{it.t} {a ? <span style={{ color: a === it.v ? TEAL : ROSE }}>{a === it.v ? "✓" : "✗"}</span> : null}</p>
              <p className="mt-1 text-[.8rem] leading-relaxed" style={{ color: "#5f7472" }}>{it.d}</p>
            </button>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <MBtn tone="teal" disabled={sel === null} onClick={() => judge("m")} aria="Classify as marketing">Marketing</MBtn>
        <MBtn tone="gold" disabled={sel === null} onClick={() => judge("s")} aria="Classify as sales">Sales</MBtn>
        <MBtn tone="plain" onClick={() => { setAns({}); setSel(null); setLog("Cleared — try classifying all six again."); }} aria="Reset the game"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
        <span className="chip">answered {answered}/6 · correct {correct}</span>
      </div>
      <MLive msg={log} />
    </div>
  );
}

/* ============================================================
   CH 5 · definitions — outside-in / inside-out machine
   ============================================================ */

function InOutMachine() {
  const [dir, setDir] = useState<"out" | "in">("out");
  const outside = dir === "out";
  const msg = outside
    ? "Outside-in — gather information from the market about consumer needs, wants and market dynamics, then bring this knowledge into the organization."
    : "Inside-out — take a finished product created by the organization and push it to consumers through retailers, distribution, online.";
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<ArrowLeftRight className="h-5 w-5" aria-hidden />} title="Two directions, two disciplines" chip="Lecture 3 · outside-in vs inside-out" />
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone="teal" active={outside} onClick={() => setDir("out")} aria="Show outside-in marketing">Outside-in · marketing</MBtn>
        <MBtn tone="gold" active={!outside} onClick={() => setDir("in")} aria="Show inside-out selling">Inside-out · selling</MBtn>
      </div>
      <LagoonBox className="mt-4">
        <svg viewBox="0 0 680 250" className="h-auto w-full" role="img" aria-label={msg}>
          <defs>
            <marker id="io-t" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill={TEAL_B} /></marker>
            <marker id="io-g" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill={GOLD_L} /></marker>
          </defs>
          <rect x="34" y="86" width="188" height="86" rx="14" fill="rgba(20,184,166,.10)" stroke={TEAL_B} strokeWidth="1.8" />
          <text x="128" y="122" textAnchor="middle" fontSize="15" fontWeight="800" fill={LIGHT}>MARKET</text>
          <text x="128" y="144" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={DIM}>consumers · needs · wants</text>
          <rect x="458" y="86" width="188" height="86" rx="14" fill="rgba(227,194,107,.09)" stroke={GOLD_L} strokeWidth="1.8" />
          <text x="552" y="122" textAnchor="middle" fontSize="15" fontWeight="800" fill={LIGHT}>ORGANIZATION</text>
          <text x="552" y="144" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={DIM}>research · strategy · product</text>
          <motion.path d={outside ? "M448,129 L232,129" : "M232,129 L448,129"} fill="none" strokeWidth="3"
            stroke={outside ? TEAL_B : GOLD_L} strokeDasharray="9 7" markerEnd={outside ? "url(#io-t)" : "url(#io-g)"} />
          <motion.circle r="7" fill={outside ? TEAL_B : GOLD_L} stroke="#0c2124" strokeWidth="2"
            initial={false}
            animate={{ cx: outside ? [436, 244] : [244, 436], opacity: 1 }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "linear" }} />
          <AnimatePresence mode="wait">
            <motion.text key={dir} x="340" y={outside ? "96" : "170"} textAnchor="middle" fontSize="12" fontWeight="800"
              fill={outside ? TEAL_B : GOLD_L}
              initial={{ opacity: 0, y: outside ? 108 : 158 }} animate={{ opacity: 1, y: outside ? 96 : 170 }} exit={{ opacity: 0 }}>
              {outside ? "needs · wants · market dynamics →" : "← finished product, pushed out"}
            </motion.text>
          </AnimatePresence>
          <AnimatePresence>
            {!outside ? (
              <motion.g key="channels" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {["retailers", "distribution", "online"].map((c, i) => (
                  <g key={c}>
                    <circle cx={286 + i * 54} cy={200} r="4" fill={GOLD_L} />
                    <text x={286 + i * 54} y={224} textAnchor="middle" fontSize="10" fontWeight="700" fill={DIM}>{c}</text>
                  </g>
                ))}
              </motion.g>
            ) : null}
          </AnimatePresence>
        </svg>
      </LagoonBox>
      <MLive msg={msg} />
      <p className="mt-3 text-[.85rem] leading-relaxed text-[#5f7472]">Both are essential and interconnected — marketing cannot succeed without sales, and sales cannot succeed without marketing insights.</p>
    </div>
  );
}

/* ============================================================
   CH 6 · mktg-system — industry ↔ market, four flows
   ============================================================ */

type Pt = readonly [number, number];
function bez(p0: Pt, p1: Pt, p2: Pt, p3: Pt, t: number): Pt {
  const u = 1 - t;
  const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0];
  const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1];
  return [x, y] as const;
}
function samples(p0: Pt, p1: Pt, p2: Pt, p3: Pt): number[] {
  return [0, 0.25, 0.5, 0.75, 1].map((t) => (p1[0] === p2[0] && p1[1] === p2[1] ? (p0[0] + (p3[0] - p0[0]) * t) : bez(p0, p1, p2, p3, t)[0]));
}
function samplesY(p0: Pt, p1: Pt, p2: Pt, p3: Pt): number[] {
  return [0, 0.25, 0.5, 0.75, 1].map((t) => (p1[0] === p2[0] && p1[1] === p2[1] ? (p0[1] + (p3[1] - p0[1]) * t) : bez(p0, p1, p2, p3, t)[1]));
}

const FLOWS: { key: string; name: string; dir: string; desc: string; color: string; d: string; c: [Pt, Pt, Pt, Pt] }[] = [
  { key: "com", name: "Communication", dir: "industry → market", desc: "products, offers and promotions flow from industry to market", color: TEAL_B, d: "M196,142 C300,54 380,54 484,142", c: [[196, 142], [300, 54], [380, 54], [484, 142]] },
  { key: "goods", name: "Goods & services", dir: "industry → market", desc: "tangible offerings travel from industry to market", color: TEAL_B, d: "M196,178 L484,178", c: [[196, 178], [340, 178], [340, 178], [484, 178]] },
  { key: "money", name: "Money", dir: "market → industry", desc: "payment flows from consumers back to sellers", color: GOLD_L, d: "M484,204 L196,204", c: [[484, 204], [340, 204], [340, 204], [196, 204]] },
  { key: "info", name: "Information", dir: "market → industry", desc: "market feedback that helps organizations redesign and refine products", color: GOLD_L, d: "M484,240 C380,326 300,326 196,240", c: [[484, 240], [380, 326], [300, 326], [196, 240]] },
];

function SystemMachine() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing, step, FLOWS.length - 1, 1800, setStep, stop);
  const f = FLOWS[step];
  const msg = `Flow ${step + 1} of 4 · ${f.name} (${f.dir}) — ${f.desc}.`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<ArrowLeftRight className="h-5 w-5" aria-hidden />} title="The marketing system, alive" chip="Lecture 3 · four key flows" />
      <LagoonBox className="mt-4">
        <svg viewBox="0 0 680 360" className="h-auto w-full" role="img" aria-label="Industry and market exchanging communication, goods and services, money, and information">
          <defs>
            {FLOWS.map((fl) => (
              <marker key={fl.key} id={`ms-${fl.key}`} markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L8,3.5 L0,7 Z" fill={fl.color} /></marker>
            ))}
          </defs>
          <rect x="28" y="128" width="168" height="104" rx="16" fill="rgba(20,184,166,.10)" stroke={TEAL_B} strokeWidth="1.8" />
          <text x="112" y="172" textAnchor="middle" fontSize="16" fontWeight="800" fill={LIGHT}>INDUSTRY</text>
          <text x="112" y="194" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={DIM}>a collection of sellers</text>
          <rect x="484" y="128" width="168" height="104" rx="16" fill="rgba(227,194,107,.09)" stroke={GOLD_L} strokeWidth="1.8" />
          <text x="568" y="172" textAnchor="middle" fontSize="16" fontWeight="800" fill={LIGHT}>MARKET</text>
          <text x="568" y="194" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={DIM}>a collection of buyers</text>
          {FLOWS.map((fl, i) => (
            <g key={fl.key}>
              <path d={fl.d} fill="none" stroke="#3a5350" strokeWidth="2" strokeDasharray="6 6" opacity={i === step ? 0.25 : 0.7} />
              <motion.path d={fl.d} fill="none" stroke={fl.color} strokeWidth={i === step ? 3.4 : 2} opacity={i === step ? 1 : 0.3}
                strokeDasharray="10 7" markerEnd={`url(#ms-${fl.key})`}
                initial={false} animate={{ opacity: i === step ? 1 : 0.3, strokeWidth: i === step ? 3.4 : 2 }} />
            </g>
          ))}
          <motion.circle key={step} r="7.5" fill={f.color} stroke="#0c2124" strokeWidth="2"
            cx={samples(...f.c)[0]} cy={samplesY(...f.c)[0]} opacity={0.95}
            animate={{ cx: samples(...f.c), cy: samplesY(...f.c) }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "linear" }} />
          <text x="340" y="42" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={TEAL_B}>communication ↑ goods &amp; services</text>
          <text x="340" y="346" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={GOLD_L}>money · information</text>
        </svg>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        {FLOWS.map((fl, i) => (
          <MBtn key={fl.key} tone="plain" active={i === step} onClick={() => { setPlaying(false); setStep(i); }} aria={`Highlight ${fl.name}`}>
            <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: fl.color }} aria-hidden />{fl.name}
          </MBtn>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setStep(0), setPlaying(true)))} aria={playing ? "Pause the flows" : "Play the four flows"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn tone="plain" onClick={() => setStep((s) => (s + 1) % FLOWS.length)} aria="Next flow">Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setStep(0); }} aria="Reset to communication"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/* ============================================================
   CH 7 · marketable — the ten entities explorer
   ============================================================ */

const ENTITIES: { name: string; icon: React.ReactNode; tag: string; lines: string[] }[] = [
  { name: "Goods", icon: <Watch className="h-4.5 w-4.5" aria-hidden />, tag: "physical products", lines: ["Apple iWatch — tangible products with specific features."] },
  { name: "Services", icon: <Scissors className="h-4.5 w-4.5" aria-hidden />, tag: "deeds & expertise", lines: ["B-Blunt, Tony and Guy, local salons — each markets a distinct value proposition: premium vs economical, different experiences.", "Every service has unique selling points aimed at different consumer segments."] },
  { name: "Experiences", icon: <Ticket className="h-4.5 w-4.5" aria-hidden />, tag: "memories, not features", lines: ["Imagica — marketed not through rides and features but the emotional experience: happiness, joy, creating memories with family.", "Sunburn Festival — the overall experience of attending, not specific performances.", "Coca-Cola “Make a Friend” — vending machines connecting India and Pakistan; marketing connection and friendship, not the beverage."] },
  { name: "Financial services", icon: <CreditCard className="h-4.5 w-4.5" aria-hidden />, tag: "the card as gateway", lines: ["American Express doesn't directly sell credit cards — it markets the experience of having Amex: “don't take on the world without it”, “the gateway to great experiences”."] },
  { name: "Persons", icon: <User className="h-4.5 w-4.5" aria-hidden />, tag: "trust precedes product", lines: ["The Rock (Dwayne Johnson) launched Papatui on personal brand and trust; Oprah Winfrey launched skincare on personal credibility.", "Indian examples: Hrithik Roshan (HRX), Virat Kohli, Kriti Sanon (Hyphen). Consumers buy on initial trust in the individual before the product."] },
  { name: "Places", icon: <MapPin className="h-4.5 w-4.5" aria-hidden />, tag: "destinations as brands", lines: ["Rajasthan Tourism — “Agar Neha ne Rajasthan dekha, toh Aran bhi dekh hi lega” promoted the place through individuals, revitalizing tourism."] },
  { name: "Properties", icon: <Building2 className="h-4.5 w-4.5" aria-hidden />, tag: "real estate & status", lines: ["World Towers (Mumbai) — marketed through name, location and facilities.", "Trump Towers (Delhi) — the Trump legacy and premium positioning.", "The Camellias (Gurgaon) — ₹85–100 crore per apartment; ambience, views, amenities and status-symbol value."] },
  { name: "Organizations", icon: <School className="h-4.5 w-4.5" aria-hidden />, tag: "institutions market themselves", lines: ["Harvard Business School — marketed through faculty quality, student caliber, legacy, leadership and organizational reputation."] },
  { name: "Information", icon: <BadgeCheck className="h-4.5 w-4.5" aria-hidden />, tag: "rankings as credentials", lines: ["NIRF rankings — institutes leverage ranking information for marketing.", "ACSB accreditation — a marketing credential for business schools."] },
  { name: "Ideas", icon: <Lightbulb className="h-4.5 w-4.5" aria-hidden />, tag: "concepts that connect", lines: ["Zomato's “Hungry” New Year campaign — connecting the idea of celebrating with ordering food, through conceptual connection rather than product promotion.", "Blinkit's “Food mangoge, do minute mein dunga” vs Zomato's “Kheer mangoge, kheer dengunge” — combining ideas of daily necessities and finished products."] },
];

function EntityGrid() {
  const [sel, setSel] = useState(0);
  const [seen, setSeen] = useState<ReadonlySet<number>>(() => new Set([0]));
  const pick = (i: number) => { setSel(i); setSeen((s) => new Set(s).add(i)); };
  const e = ENTITIES[sel];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<LayoutGrid className="h-5 w-5" aria-hidden />} title="The ten marketable entities" chip="Lecture 3 · Kotler's shelf" />
      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {ENTITIES.map((en, i) => {
            const on = sel === i;
            return (
              <button key={en.name} type="button" onClick={() => pick(i)} aria-pressed={on}
                className="flex flex-col items-start gap-1.5 rounded-2xl p-3 text-left transition-transform duration-200 hover:-translate-y-0.5"
                style={on
                  ? { background: TEAL_GRAD, color: "#f0fdfa" }
                  : { background: "#f2efe7", color: INK, border: "1px solid #e3ddcf" }}>
                <span className="flex items-center gap-1.5 text-[.86rem] font-extrabold">{en.icon}{en.name}</span>
                <span className="text-[.68rem] font-bold uppercase tracking-wider" style={{ color: on ? "rgba(240,253,250,.8)" : GOLD }}>{en.tag}</span>
                {seen.has(i) && !on ? <span className="text-[.62rem] font-black" style={{ color: TEAL }}>✓ explored</span> : null}
              </button>
            );
          })}
        </div>
        <LagoonBox className="min-h-[16rem]">
          <AnimatePresence mode="wait">
            <motion.div key={e.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}>
              <p className="flex items-center gap-2 text-xl font-bold" style={{ color: LIGHT }}>{e.icon} {e.name}</p>
              <p className="mt-0.5 text-[.72rem] font-bold uppercase tracking-[.16em]" style={{ color: GOLD_L }}>{e.tag}</p>
              <ul className="mt-3 grid gap-2.5">
                {e.lines.map((l) => (
                  <li key={l} className="text-[.92rem] leading-relaxed" style={{ color: LIGHT }}>{l}</li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
          <p className="mt-4 text-[.75rem]" style={{ color: DIM }} aria-live="polite">explored {seen.size} of {ENTITIES.length} entities</p>
        </LagoonBox>
      </div>
      <div className="mt-3">
        <MBtn tone="plain" onClick={() => { setSel(0); setSeen(new Set([0])); }} aria="Reset exploration"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
    </div>
  );
}

/* ============================================================
   CH 8 · need-want-demand — the wallet machine
   ============================================================ */

const FOODS = [
  { name: "Pizza", icon: <Pizza className="h-5 w-5" aria-hidden /> },
  { name: "Tandoori chicken", icon: <Drumstick className="h-5 w-5" aria-hidden /> },
  { name: "Vada pao", icon: <Sandwich className="h-5 w-5" aria-hidden /> },
];

const NWD_STEPS = [
  { k: "The need", d: "Hunger strikes. Needs are basic human requirements — food, shelter, clothing. They pre-exist naturally, and marketers do not create them.", afford: -1 },
  { k: "The want", d: "The need attaches to objects shaped by marketing, culture and personal preference: pizza, tandoori chicken, vada pao. A want is a need directed toward a specific solution.", afford: -1 },
  { k: "₹20 in hand", d: "With 20 rupees, demand is limited to vada pao — the want backed by the ability to pay becomes demand; the rest stay wants.", afford: 2 },
  { k: "Purchasing power rises", d: "With more money, all three options become possible — demand converts wants into actual purchasing behavior.", afford: 3 },
];

function WalletMachine() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing, step, NWD_STEPS.length - 1, 1900, setStep, stop);
  const s = NWD_STEPS[step];
  const msg = `Step ${step + 1} of 4 · ${s.k} — ${s.d}`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Wallet className="h-5 w-5" aria-hidden />} title="Hunger, ₹20, and the making of demand" chip="Lecture 3 · the triad in motion" />
      <LagoonBox className="mt-4 min-h-[15rem]">
        <div className="flex flex-wrap items-center gap-3">
          <motion.span className="rounded-full px-4 py-1.5 text-[.78rem] font-black uppercase tracking-[.14em]"
            animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2.2, repeat: Infinity }}
            style={{ background: "rgba(227,194,107,.14)", border: "1px solid rgba(227,194,107,.45)", color: GOLD_L }}>
            NEED · hunger
          </motion.span>
          <AnimatePresence>
            {step >= 1 ? (
              <motion.span key="arrow" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                className="text-lg font-black" style={{ color: DIM }} aria-hidden>→</motion.span>
            ) : null}
          </AnimatePresence>
          <motion.span key={`w-${step}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="rounded-full px-4 py-1.5 text-[.78rem] font-black uppercase tracking-[.14em]"
            style={{ background: "rgba(20,184,166,.16)", border: "1px solid rgba(20,184,166,.45)", color: LIGHT }}>
            {step >= 3 ? "wallet · purchasing power ↑" : step === 2 ? "wallet · ₹20" : step === 1 ? "wants forming" : "wallet · empty"}
          </motion.span>
        </div>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {FOODS.map((f, i) => {
            const afford = s.afford === 3 || s.afford === i;
            const shown = step >= 1;
            return (
              <motion.div key={f.name} initial={false} animate={{ opacity: shown ? (afford ? 1 : 0.32) : 0.18, scale: afford && shown ? 1 : 0.97 }}
                className="flex flex-col items-center gap-1 rounded-2xl p-3.5 text-center"
                style={afford && shown
                  ? { background: "rgba(20,184,166,.16)", border: `1.5px solid ${TEAL_B}` }
                  : { background: "rgba(255,255,255,.03)", border: "1.5px dashed rgba(159,188,180,.4)" }}>
                <span style={{ color: afford && shown ? LIGHT : DIM }}>{f.icon}</span>
                <p className="text-[.86rem] font-extrabold" style={{ color: shown ? LIGHT : DIM }}>{f.name}</p>
                <p className="text-[.68rem] font-bold uppercase tracking-wider" style={{ color: afford && shown ? "#7ee3d4" : DIM }}>
                  {!shown ? "hidden" : afford ? "demand ✓" : "want only"}
                </p>
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence mode="wait">
          <motion.p key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="mt-4 min-h-[3rem] max-w-2xl text-[.92rem] leading-relaxed" style={{ color: LIGHT }}>
            <span style={{ color: GOLD_L, fontWeight: 800 }}>{s.k}. </span>{s.d}
          </motion.p>
        </AnimatePresence>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setStep(0), setPlaying(true)))} aria={playing ? "Pause the triad" : "Play the triad"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn tone="plain" onClick={() => setStep((v) => Math.min(v + 1, NWD_STEPS.length - 1))} aria="Next step">Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setStep(0); }} aria="Reset the triad"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/* ============================================================
   CH 9 · demand-states — need layers + state explorer
   ============================================================ */

const NEED_LAYERS = [
  { k: "Stated", v: "“I want a car”", d: "What the customer explicitly asks for." },
  { k: "Real", v: "…with low operating costs", d: "The meaning underneath the stated need — not merely a low price." },
  { k: "Unstated", v: "great service and a warranty", d: "Expected, but the customer doesn't always mention it upfront." },
  { k: "Delight", v: "a built-in GPS", d: "Never explicitly requested — yet it creates satisfaction." },
  { k: "Secret", v: "a luxury car as a status symbol", d: "The intangible, often unspoken desire the customer keeps to themselves." },
];

function NeedLayers() {
  const [layer, setLayer] = useState(0);
  const l = NEED_LAYERS[layer];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Car className="h-5 w-5" aria-hidden />} title="Five needs under one car" chip="Lecture 3 · types of consumer needs" />
      <div className="mt-4 flex flex-wrap gap-2">
        {NEED_LAYERS.map((nl, i) => (
          <MBtn key={nl.k} tone="plain" active={i === layer} onClick={() => setLayer(i)} aria={`Show the ${nl.k} need`}>{nl.k}</MBtn>
        ))}
      </div>
      <LagoonBox className="mt-4">
        <div className="flex items-center gap-1" aria-hidden>
          {NEED_LAYERS.map((_, i) => (
            <motion.span key={i} className="h-2 flex-1 rounded-full" initial={false}
              animate={{ opacity: i <= layer ? 1 : 0.25 }}
              style={{ background: i === layer ? GOLD_GRAD : TEAL_GRAD }} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={l.k} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }} className="mt-3">
            <p className="text-[.7rem] font-extrabold uppercase tracking-[.18em]" style={{ color: GOLD_L }}>{l.k} need</p>
            <p className="mt-1 text-xl font-bold" style={{ color: LIGHT }}>{l.v}</p>
            <p className="mt-1 text-[.9rem] leading-relaxed" style={{ color: DIM }}>{l.d}</p>
          </motion.div>
        </AnimatePresence>
        <p className="mt-3 text-[.75rem]" style={{ color: DIM }}>The deeper the layer, the less the customer says it out loud.</p>
      </LagoonBox>
      <MLive msg={`${l.k} need — ${l.v}. ${l.d}`} />
    </div>
  );
}

const DEMAND_STATES: { name: string; def: string; ex: string[]; rose?: boolean }[] = [
  { name: "Negative", def: "Consumers actively avoid the product — and may even pay to prevent it.", ex: ["dentist appointments", "purchasing ad-free music subscriptions"], rose: true },
  { name: "Non-existent", def: "Consumers are unaware of, or uninterested in, the product.", ex: ["BlackBerry Key2 — limited consumer awareness"] },
  { name: "Latent", def: "A strong underlying need that current products cannot satisfy.", ex: ["wanting better smartphone cameras than currently available"] },
  { name: "Declining", def: "Products purchased less frequently over time, as consumers move to newer alternatives.", ex: ["floppy disks", "CDs", "LCDs", "older technology-based products"] },
  { name: "Irregular", def: "Seasonal or fluctuating demand patterns.", ex: ["air conditioners and coolers", "seasonal fruits and foods"] },
  { name: "Full", def: "Products consistently purchased at adequate marketplace levels.", ex: ["over-the-counter (OTC) drugs — always in demand"] },
  { name: "Overfull", def: "Demand exceeds available supply.", ex: ["bread and milk in grocery stores", "regularly sold-out items"] },
  { name: "Unwholesome", def: "Products with demand but socially undesirable consequences.", ex: ["cigarettes", "tobacco", "alcohol"], rose: true },
];

function DemandExplorer() {
  const [sel, setSel] = useState(0);
  const s = DEMAND_STATES[sel];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Boxes className="h-5 w-5" aria-hidden />} title="The eight demand states" chip="Lecture 3 · click a state" />
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {DEMAND_STATES.map((d, i) => {
          const on = i === sel;
          return (
            <button key={d.name} type="button" onClick={() => setSel(i)} aria-pressed={on}
              className="rounded-2xl p-3 text-left transition-transform duration-200 hover:-translate-y-0.5"
              style={on
                ? { background: d.rose ? "linear-gradient(135deg,#b95c74,#9f3d54)" : TEAL_GRAD, color: "#f7fbfa" }
                : { background: "#f2efe7", color: INK, border: "1px solid #e3ddcf" }}>
              <span className="text-[.6rem] font-black tracking-widest" style={{ color: on ? "rgba(255,255,255,.75)" : GOLD }}>{String(i + 1).padStart(2, "0")}</span>
              <p className="text-[.92rem] font-extrabold leading-tight">{d.name}</p>
            </button>
          );
        })}
      </div>
      <LagoonBox className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.24 }}>
            <p className="text-xl font-bold" style={{ color: LIGHT }}>{s.name} demand</p>
            <p className="mt-1.5 max-w-2xl text-[.95rem] leading-relaxed" style={{ color: LIGHT }}>{s.def}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.ex.map((x) => (
                <span key={x} className="rounded-full px-3 py-1 text-[.8rem] font-bold"
                  style={{ background: s.rose ? "rgba(159,61,84,.28)" : "rgba(20,184,166,.14)", border: `1px solid ${s.rose ? "rgba(159,61,84,.5)" : "rgba(20,184,166,.4)"}`, color: LIGHT }}>
                  {x}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </LagoonBox>
      <MLive msg={`${s.name} demand — ${s.def} Examples: ${s.ex.join(", ")}.`} />
    </div>
  );
}

/* ============================================================
   CH 10 · closed-system — the mind machine
   ============================================================ */

const INTERRUPTS = ["Promotional offer", "Celebrity endorsement", "Limited-time deal", "Exclusive collection"];

function MindMachine() {
  const [interest, setInterest] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [log, setLog] = useState("The mind recycles familiar options, known brands, established habits. Interest 0 — the system is closed.");
  const stop = React.useCallback(() => setPlaying(false), []);

  useEffect(() => {
    if (!playing || interest >= 100) return;
    const t = window.setTimeout(() => {
      const next = Math.min(100, interest + 2);
      setInterest(next);
      if (next >= 100) setPlaying(false);
    }, 42);
    return () => window.clearTimeout(t);
  }, [playing, interest]);

  const state = interest >= 67 ? "OPEN" : interest >= 34 ? "STIRRING" : "CLOSED";
  const open = state === "OPEN";
  const t = interest / 100;
  const px = 70 + t * (660 - 70);
  const py = 280 - t * (280 - 52);
  const mcx = Math.max(96, Math.min(634, px));
  const mcy = Math.max(88, Math.min(244, py));

  function interrupt(name: string) {
    setPlaying(false);
    setInterest((v) => {
      const nv = Math.min(100, v + 22);
      setLog(`Interrupt — ${name}: the habitual loop cracks, openness to new possibilities grows. Interest ${nv}.`);
      return nv;
    });
  }
  const msg = `Interest ${interest} · Openness ${interest} — the linear law holds. Mind: ${state}.`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Lock className="h-5 w-5" aria-hidden />} title="Open the closed system" chip="Lecture 4 · interest × openness" />
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <label className="flex min-w-[230px] flex-1 flex-col gap-1.5">
          <span className="flex items-baseline justify-between text-[.78rem] font-extrabold uppercase tracking-wider" style={{ color: GOLD }}>
            Slide the consumer&apos;s interest <span className="font-mono-warm text-[.95rem]" style={{ color: INK }}>{interest}</span>
          </span>
          <input type="range" min={0} max={100} value={interest} onChange={(e) => { setPlaying(false); setInterest(Number(e.target.value)); }}
            aria-label="Interest level of the consumer" className="w-full accent-[#0f766e]" />
        </label>
        <div className="flex flex-wrap gap-2">
          <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setInterest(0), setPlaying(true)))} aria={playing ? "Pause the opening" : "Play the opening"}>
            {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play"}
          </MBtn>
          <MBtn tone="plain" onClick={() => { setPlaying(false); setInterest(0); setLog("Reset — the mind is closed again, recycling its familiar options."); }} aria="Reset the mind">
            <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset
          </MBtn>
        </div>
      </div>
      <LagoonBox className="mt-4">
        <svg viewBox="0 0 700 330" className="h-auto w-full" role="img" aria-label={`Interest-openness chart with the consumer mind at ${state}`}>
          <line x1="70" y1="292" x2="672" y2="292" stroke="#3a5350" strokeWidth="1.6" />
          <line x1="70" y1="292" x2="70" y2="40" stroke="#3a5350" strokeWidth="1.6" />
          <text x="660" y="316" textAnchor="end" fontSize="11" fontWeight="700" fill={DIM}>openness to receive information →</text>
          <text x="44" y="170" fontSize="11" fontWeight="700" fill={DIM} transform="rotate(-90 44 170)" textAnchor="middle">interest ↑</text>
          <line x1="70" y1="280" x2="660" y2="52" stroke="#3a5350" strokeWidth="1.4" strokeDasharray="6 7" opacity="0.75" />
          <text x="330" y="86" fontSize="11" fontWeight="700" fill={DIM} transform="rotate(-15 330 86)">the linear law — interest and openness rise together</text>
          <motion.line x1="70" y1="280" x2="660" y2="52" stroke={TEAL_B} strokeWidth="3" strokeLinecap="round"
            initial={false} animate={{ pathLength: t }} />
          <motion.circle cx={px} cy={py} r="6" fill={GOLD_L} stroke="#0c2124" strokeWidth="2" initial={false} />
          {/* the mind */}
          <circle cx={mcx} cy={mcy} r="42" fill={open ? "rgba(20,184,166,.20)" : interest >= 34 ? "rgba(20,184,166,.10)" : "rgba(12,33,36,.75)"}
            stroke={open ? GOLD_L : "#3a5350"} strokeWidth={open ? 2.4 : 1.6} />
          {!open ? (
            <motion.g style={{ transformBox: "fill-box", transformOrigin: "center" }} animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }}>
              <circle cx={mcx} cy={mcy} r="24" fill="none" stroke={interest >= 34 ? GOLD_L : "#54706b"} strokeWidth="2.4" strokeDasharray="46 22" />
            </motion.g>
          ) : (
            <g>
              <circle cx={mcx} cy={mcy} r="24" fill="none" stroke={GOLD_L} strokeWidth="2.4" strokeDasharray="14 12" />
              <motion.path d={`M${mcx - 16},${mcy - 8} L${mcx - 4},${mcy - 1} L${mcx - 12},${mcy + 9} L${mcx + 4},${mcy + 15}`}
                fill="none" stroke={GOLD_L} strokeWidth="2.4" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5 }} />
              {[0, 60, 120, 180, 240, 300].map((a) => {
                const rad = (a * Math.PI) / 180;
                const x1 = mcx + 48 * Math.cos(rad), y1 = mcy + 48 * Math.sin(rad);
                return <line key={a} x1={x1} y1={y1} x2={mcx + 58 * Math.cos(rad)} y2={mcy + 58 * Math.sin(rad)} stroke={GOLD_L} strokeWidth="2" strokeLinecap="round" opacity="0.85" />;
              })}
            </g>
          )}
          <text x={mcx} y={mcy + 68} textAnchor="middle" fontSize="12" fontWeight="800" fill={open ? GOLD_L : DIM}>{state}</text>
        </svg>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="self-center text-[.72rem] font-extrabold uppercase tracking-[.14em]" style={{ color: GOLD }}>Interrupts</span>
        {INTERRUPTS.map((name) => (
          <MBtn key={name} tone="dark" onClick={() => interrupt(name)} aria={`Deliver the interrupt: ${name}`}>
            <Zap className="mr-1 inline h-3.5 w-3.5" aria-hidden />{name}
          </MBtn>
        ))}
      </div>
      <MLive msg={`${log} ${msg}`} />
    </div>
  );
}

/* ============================================================
   CH 11 · biz-value — the four-lever machine
   ============================================================ */

const LEVERS = [
  { key: "pricing", label: "Pricing", d: "price the offering" },
  { key: "product", label: "Product", d: "develop the product" },
  { key: "promotion", label: "Promotion", d: "communicate the value" },
  { key: "distribution", label: "Distribution", d: "put it within reach" },
];

function LeverMachine() {
  const [on, setOn] = useState<Record<string, boolean>>({});
  const [playing, setPlaying] = useState(false);
  const count = LEVERS.filter((l) => on[l.key]).length;
  const stop = React.useCallback(() => setPlaying(false), []);

  useEffect(() => {
    if (!playing) return;
    const next = LEVERS.find((l) => !on[l.key]);
    if (!next) return;
    const isLast = !LEVERS.some((l) => l.key !== next.key && !on[l.key]);
    const t = window.setTimeout(() => {
      setOn((o) => ({ ...o, [next.key]: true }));
      if (isLast) setPlaying(false);
    }, 620);
    return () => window.clearTimeout(t);
  }, [playing, on]);

  const msg = count === 0
    ? "No levers pulled — without a top line there is no bottom line."
    : count === LEVERS.length
      ? "Pricing, product, promotion and distribution working together — creating consumer demand and driving sales."
      : `${count} of 4 levers on — demand builds with every component marketing adds.`;
  const bar = (label: string, sub: string, frac: number, bg: string) => (
    <div>
      <div className="flex items-baseline justify-between text-[.78rem] font-bold">
        <span style={{ color: LIGHT }}>{label}</span>
        <span className="text-[.68rem]" style={{ color: DIM }}>{sub}</span>
      </div>
      <div className="mt-1 h-4 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,.06)" }} aria-hidden>
        <motion.div className="h-full rounded-full" style={{ background: bg }} initial={false}
          animate={{ width: `${Math.round(frac * 100)}%` }} transition={{ type: "spring", stiffness: 130, damping: 22 }} />
      </div>
    </div>
  );
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<BarChart3 className="h-5 w-5" aria-hidden />} title="The marketer's four levers" chip="Lecture 4 · the role of marketing" />
      <div className="mt-4 flex flex-wrap gap-2">
        {LEVERS.map((l) => (
          <MBtn key={l.key} tone="plain" active={!!on[l.key]} onClick={() => { setPlaying(false); setOn((o) => ({ ...o, [l.key]: !o[l.key] })); }} aria={`${on[l.key] ? "Switch off" : "Switch on"} ${l.label}`}>
            {l.label} <span className="ml-1 font-normal opacity-80">· {l.d}</span>
          </MBtn>
        ))}
      </div>
      <LagoonBox className="mt-4">
        <div className="grid gap-4">
          {bar("Consumer demand", "created by marketing", count / 4, TEAL_GRAD)}
          {bar("Top line", "products sold × selling price", count / 4, "linear-gradient(135deg,#7ee3d4,#14b8a6)")}
          {bar("Bottom line", "revenue − total costs", count / 4, GOLD_GRAD)}
        </div>
        <p className="mt-3 text-[.72rem]" style={{ color: DIM }}>schematic — the point is the dependency chain, not the decimals</p>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setOn({}), setPlaying(true)))} aria={playing ? "Pause the levers" : "Play all four levers"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play all four"}
        </MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setOn({}); }} aria="Reset the levers"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/* ============================================================
   CH 12 · chai-value — the context machine
   ============================================================ */

const CHAIS = [
  { key: "road", price: "₹20", place: "Roadside tea", icon: <Store className="h-5 w-5" aria-hidden />, why: "Economical option, suitable for casual consumption." },
  { key: "cafe", price: "₹250", place: "Café tea", icon: <Coffee className="h-5 w-5" aria-hidden />, why: "Preferred for business meetings and professional settings — improved ambiance, impression management." },
  { key: "air", price: "₹500", place: "Airport tea", icon: <Plane className="h-5 w-5" aria-hidden />, why: "Selected when no other options are available — or while traveling." },
];

function ChaiMachine() {
  const [sel, setSel] = useState(0);
  const [playing, setPlaying] = useState(false);
  const stop = React.useCallback(() => setPlaying(false), []);
  useAutoStep(playing, sel, CHAIS.length - 1, 2000, setSel, stop);
  const c = CHAIS[sel];
  const msg = `${c.place}, ${c.price} — ${c.why} Same product, different perceived value.`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Coffee className="h-5 w-5" aria-hidden />} title="Same cup, three contexts" chip="Lecture 5 · the chai example" />
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {CHAIS.map((ch, i) => {
          const on = i === sel;
          return (
            <button key={ch.key} type="button" onClick={() => { setPlaying(false); setSel(i); }} aria-pressed={on}
              className="flex items-center gap-3 rounded-2xl p-3.5 text-left transition-transform duration-200 hover:-translate-y-0.5"
              style={on ? { background: TEAL_GRAD, color: "#f0fdfa" } : { background: "#f2efe7", color: INK, border: "1px solid #e3ddcf" }}>
              {ch.icon}
              <span>
                <span className="block text-[.9rem] font-extrabold">{ch.place}</span>
                <span className="block font-mono-warm text-[.78rem] font-bold" style={{ color: on ? "#c9f7ec" : GOLD }}>{ch.price}</span>
              </span>
            </button>
          );
        })}
      </div>
      <LagoonBox className="mt-4">
        <div className="flex flex-wrap items-center justify-center gap-6 py-2 md:gap-10">
          <svg viewBox="0 0 150 150" className="w-28 shrink-0 md:w-36" role="img" aria-label="The same cup of tea in every context">
            <motion.path d="M40,58 L48,120 C49,128 101,128 102,120 L110,58 Z" fill="rgba(20,184,166,.16)" stroke={TEAL_B} strokeWidth="2.4"
              initial={false} animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.4, repeat: Infinity }} style={{ transformBox: "fill-box", transformOrigin: "center" }} />
            <path d="M110,66 C126,66 126,88 108,90" fill="none" stroke={TEAL_B} strokeWidth="2.4" />
            <path d="M62,44 C58,36 66,32 62,24" fill="none" stroke={GOLD_L} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <path d="M78,46 C74,38 82,34 78,26" fill="none" stroke={GOLD_L} strokeWidth="2" strokeLinecap="round" opacity="0.65" />
            <path d="M94,44 C90,36 98,32 94,24" fill="none" stroke={GOLD_L} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
            <text x="75" y="144" textAnchor="middle" fontSize="9.5" fontWeight="700" fill={DIM}>the product never changes</text>
          </svg>
          <AnimatePresence mode="wait">
            <motion.div key={c.key} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
              className="min-w-[220px] flex-1">
              <p className="text-[.7rem] font-extrabold uppercase tracking-[.18em]" style={{ color: GOLD_L }}>perceived value · context {sel + 1} of 3</p>
              <p className="mt-1 text-3xl font-black" style={{ color: LIGHT }}>{c.price}</p>
              <p className="mt-1 text-lg font-bold" style={{ color: LIGHT }}>{c.place}</p>
              <p className="mt-1.5 max-w-sm text-[.92rem] leading-relaxed" style={{ color: DIM }}>{c.why}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={playing ? "plain" : "teal"} onClick={() => (playing ? setPlaying(false) : (setSel(0), setPlaying(true)))} aria={playing ? "Pause the contexts" : "Play the three contexts"}>
          {playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}{playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setSel((s) => (s + 1) % CHAIS.length); }} aria="Next context">Next <ChevronRight className="ml-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        <MBtn tone="plain" onClick={() => { setPlaying(false); setSel(0); }} aria="Reset to roadside chai"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={msg} />
    </div>
  );
}

/* ============================================================
   CH 13 · cpv-formula — the benefits−costs balance
   ============================================================ */

const CPV_BEN = [
  { key: "psy", label: "Psychological", ex: "the jacket keeping you warm through winter" },
  { key: "fun", label: "Functional", ex: "pockets, hoodie, wind resistance" },
  { key: "eco", label: "Economic", ex: "the monetary value and savings" },
  { key: "xpsy", label: "Extended psychological", ex: "status — how others perceive your choice" },
];
const CPV_COST = [
  { key: "price", label: "Direct price", ex: "the money actually paid" },
  { key: "time", label: "Time", ex: "getting there and back" },
  { key: "effort", label: "Effort", ex: "the energy expended" },
  { key: "stress", label: "Psychological stress", ex: "worrying about parking, traffic" },
  { key: "dispose", label: "Disposal", ex: "after-sales, getting rid of it" },
];

function ScaleMachine() {
  const [ben, setBen] = useState<Record<string, boolean>>({ psy: true, fun: true, eco: true, xpsy: true });
  const [cost, setCost] = useState<Record<string, boolean>>({ price: true, time: true, effort: false, stress: false, dispose: false });
  const [log, setLog] = useState("Four benefits on the left pan, price and time on the right — CPV starts positive. Toggle chips to move the scale.");
  const bCount = CPV_BEN.filter((b) => ben[b.key]).length;
  const cCount = CPV_COST.filter((c) => cost[c.key]).length;
  const net = bCount - cCount;
  const tilt = Math.max(-14, Math.min(14, -net * 5));

  function toggle(kind: "b" | "c", key: string) {
    if (kind === "b") setBen((o) => ({ ...o, [key]: !o[key] }));
    else setCost((o) => ({ ...o, [key]: !o[key] }));
    setLog(`Toggled ${key} — benefits ${bCount} − costs ${cCount}, recalculating…`);
  }
  function scenario(kind: "store" | "app") {
    if (kind === "store") {
      setCost({ price: true, time: true, effort: true, stress: true, dispose: false });
      setLog("Walk to the store — the ice cream is cheaper, but travel time, effort and parking stress pile onto the cost pan.");
    } else {
      setCost({ price: true, time: false, effort: false, stress: false, dispose: false });
      setLog("Order by app — a higher money cost, but no travel time, no parking, home convenience: the abstract costs collapse and perceived value jumps.");
    }
  }
  const msg = `Benefits ${bCount} − Costs ${cCount} = CPV ${net >= 0 ? "+" : ""}${net}. ${net > 0 ? "Value tips toward the customer." : net < 0 ? "Value tips away — the customer walks." : "Level scales — a fair trade."}`;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <MHead icon={<Scale className="h-5 w-5" aria-hidden />} title="The CPV balance" chip="Lecture 5 · benefits − costs" />
      <p className="mt-3 text-[.78rem] font-extrabold uppercase tracking-[.14em]" style={{ color: TEAL }}>Benefits — toggle on/off</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {CPV_BEN.map((b) => (
          <MBtn key={b.key} tone="teal" active={!ben[b.key]} onClick={() => toggle("b", b.key)} aria={`${ben[b.key] ? "Remove" : "Add"} the ${b.label} benefit`} >
            {ben[b.key] ? "✓ " : ""}{b.label}
          </MBtn>
        ))}
      </div>
      <p className="mt-3 text-[.78rem] font-extrabold uppercase tracking-[.14em]" style={{ color: GOLD }}>Costs — toggle on/off</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {CPV_COST.map((c) => (
          <MBtn key={c.key} tone="gold" active={!cost[c.key]} onClick={() => toggle("c", c.key)} aria={`${cost[c.key] ? "Remove" : "Add"} the ${c.label} cost`}>
            {cost[c.key] ? "✓ " : ""}{c.label}
          </MBtn>
        ))}
      </div>
      <LagoonBox className="mt-4">
        <svg viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label={`Balance scale: ${bCount} benefits versus ${cCount} costs, CPV ${net >= 0 ? "+" : ""}${net}`}>
          <polygon points="320,148 300,236 340,236" fill="rgba(20,184,166,.18)" stroke={TEAL_B} strokeWidth="2" />
          <rect x="262" y="236" width="116" height="10" rx="5" fill="#3a5350" />
          <motion.g animate={{ rotate: tilt }} transition={{ type: "spring", stiffness: 90, damping: 14 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}>
            <rect x="104" y="142" width="432" height="9" rx="4.5" fill={LIGHT} />
            <line x1="124" y1="151" x2="124" y2="196" stroke={TEAL_B} strokeWidth="2.2" />
            <path d="M84,196 L164,196 L124,238 Z" fill="rgba(20,184,166,.20)" stroke={TEAL_B} strokeWidth="2" />
            <text x="124" y="222" textAnchor="middle" fontSize="13" fontWeight="800" fill={LIGHT}>B {bCount}</text>
            <line x1="516" y1="151" x2="516" y2="196" stroke={GOLD_L} strokeWidth="2.2" />
            <path d="M476,196 L556,196 L516,238 Z" fill="rgba(227,194,107,.14)" stroke={GOLD_L} strokeWidth="2" />
            <text x="516" y="222" textAnchor="middle" fontSize="13" fontWeight="800" fill={LIGHT}>C {cCount}</text>
          </motion.g>
          <circle cx="320" cy="146" r="7" fill={GOLD_L} />
          <text x="320" y="286" textAnchor="middle" fontSize="14" fontWeight="800" fill={LIGHT}>
            CPV = B − C = <tspan fill={net >= 0 ? GOLD_L : "#e89db0"}>{net >= 0 ? "+" : ""}{net}</tspan>
          </text>
        </svg>
      </LagoonBox>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone="teal" onClick={() => scenario("store")} aria="Run the store-visit scenario"><Truck className="mr-1 inline h-3.5 w-3.5" aria-hidden />Ice cream: walk to the store</MBtn>
        <MBtn tone="gold" onClick={() => scenario("app")} aria="Run the delivery-app scenario">Ice cream: order by app</MBtn>
        <MBtn tone="plain" onClick={() => { setBen({ psy: true, fun: true, eco: true, xpsy: true }); setCost({ price: true, time: true, effort: false, stress: false, dispose: false }); setLog("Reset — benefits 4, costs 2 (price and time)."); }} aria="Reset the balance"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden />Reset</MBtn>
      </div>
      <MLive msg={`${msg} ${log}`} />
    </div>
  );
}

/* ============================================================
   EXPORTED SECTION 1 · why-mktg  (Lecture 1)
   ============================================================ */

const OBJECTIVES = [
  "How companies identify and analyze customer needs",
  "Product and service design strategies",
  "Pricing strategies and value determination",
  "Brand building and development",
  "Effective communication and marketing messaging",
  "Methods for establishing and maintaining long-term customer relationships",
];

const EVERYDAY = [
  { icon: <Smartphone className="h-4 w-4" aria-hidden />, t: "Mobile devices and technology" },
  { icon: <Shirt className="h-4 w-4" aria-hidden />, t: "Clothing and fashion choices" },
  { icon: <UtensilsCrossed className="h-4 w-4" aria-hidden />, t: "Food and dining preferences" },
  { icon: <AppWindow className="h-4 w-4" aria-hidden />, t: "Mobile applications and digital platforms" },
  { icon: <HeartHandshake className="h-4 w-4" aria-hidden />, t: "Brand trust and loyalty decisions" },
];

export function MktgWhySection() {
  return (
    <Section id="why-mktg">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 1"
        title={<>Why marketing? You&apos;re <GT>already inside it</GT></>}
        lead="Marketing is a comprehensive business discipline that extends far beyond selling products or creating advertisements — it is understanding customer needs, analyzing how people make purchasing decisions, exploring brand preferences, and enabling businesses to create meaningful value." />

      <Reveal><P>Before this course asks you to define marketing, it asks you to notice it. Every phone you chose, every dish you ordered, every brand you keep coming back to — each is the visible end of a discipline that studies <strong style={{ color: TEAL }}>needs, decisions, preference and value</strong>. This opening chapter sets the frame: what marketing really means, where it already touches your day, and what you will be able to do by the end.</P></Reveal>

      <ReadStep n="1" title="What marketing really means" sub="Four beats — and none of them is 'selling'" />
      <Reveal><MeaningMachine /></Reveal>
      <Reveal className="mt-5">
        <Callout kind="insight" title="Lecture 1 · the shift">
          The discipline moves from <strong>transacting sales</strong> to <strong>creating value</strong>: understanding consumer behavior and decision-making, and explaining why customers prefer certain brands over competitors. Selling is one visible slice; understanding is the whole base.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Marketing in everyday life" sub="You were a consumer long before you were a student of consumers" />
      <Reveal>
        <P>Marketing permeates all aspects of daily consumer experience. The lecture names five surfaces — check which ones you have already touched today:</P>
        <div className="mt-4 flex flex-wrap gap-2">
          {EVERYDAY.map((e) => (
            <span key={e.t} className="chip">{e.icon} {e.t}</span>
          ))}
        </div>
      </Reveal>

      <ReadStep n="3" title="Where this course takes you" sub="Six learning objectives" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {OBJECTIVES.map((o, i) => (
            <div key={o} className="card-warm lift flex items-center gap-3 p-4">
              <NumDot n={String(i + 1)} />
              <p className="text-[.9rem] font-semibold leading-snug" style={{ color: INK }}>{o}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Callout kind="story" title="Course significance">
          The aim is to equip you to <strong>recognize and analyze marketing in your everyday life</strong>, while building a comprehensive understanding of marketing as a critical business discipline within the <strong>BAS program in management and technology</strong>.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Marketing is <strong>not limited to selling or product promotion</strong> — that is the first and most repeated correction of Lecture 1.</>,
          <>Its real work: <strong>understanding consumer behavior and decision-making</strong>, and why customers prefer certain brands over competitors.</>,
          <>The destination is <strong>creating value</strong>, not just transacting sales.</>,
          <>Marketing already permeates your devices, clothes, food, apps and brand loyalties — this course trains you to <strong>see it</strong>.</>,
          <>Six objectives ahead: needs analysis, product &amp; service design, pricing &amp; value, brand building, communication, and long-term relationships.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 2 · anticipation  (Lecture 2)
   ============================================================ */

export function MktgAnticipationSection() {
  return (
    <Section id="anticipation">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 2"
        title={<>Anticipation — <GT>see the turn before it comes</GT></>}
        lead="Three giants — BlackBerry, Hertz, Blockbuster — had customers, revenue and reputation. What they lacked was marketing's core function: anticipating consumer needs and market evolution before the market moved." />

      <Reveal>
        <P>The lecture opens with its fundamental concept: <strong style={{ color: TEAL }}>anticipation</strong>. Each case below is the same story in a different industry — a dominant player reading today perfectly, and tomorrow not at all. Run each machine and watch the same pattern draw itself.</P>
      </Reveal>

      <ReadStep n="1" title="Three declines, one pattern" sub="BlackBerry · Hertz · Blockbuster — trace each fall event by event" />
      <Reveal><DeclineMachine /></Reveal>

      <ReadStep n="2" title="The pattern of organizational decline" sub="Gradual drop, then the cliff — unless someone pivots first" />
      <Reveal>
        <div className="card-warm lift p-5 md:p-7">
          <MHead icon={<TrendingDown className="h-5 w-5" aria-hidden />} title="The decline curve" chip="Lecture 2 · pattern" />
          <div className="mt-3 rounded-2xl p-3" style={{ background: LAGOON, border: "1px solid rgba(20,184,166,.28)" }}>
            <PatternSvg />
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
              <p className="text-[.88rem] font-extrabold" style={{ color: INK }}>1 · The gradual drop</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#5f7472]">Performance erodes slowly at first — easy to explain away, easy to miss.</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(20,184,166,.08)", border: "1px solid rgba(20,184,166,.35)" }}>
              <p className="text-[.88rem] font-extrabold" style={{ color: TEAL }}>2 · The pivot window</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#5f7472]">Organizations that <strong>anticipate</strong> market changes pivot successfully before the sudden decline.</p>
            </div>
            <div className="rounded-2xl p-4" style={{ background: "rgba(159,61,84,.07)", border: "1px solid rgba(159,61,84,.3)" }}>
              <p className="text-[.88rem] font-extrabold" style={{ color: ROSE }}>3 · The sudden collapse</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#5f7472]">Those unable to anticipate face a rapid market exit — the cliff always arrives faster than the slope.</p>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="The definition that follows" sub="Marketing's core function, stated plainly" />
      <Reveal>
        <div className="rounded-2xl p-6 md:p-8" style={{ background: LAGOON, border: "1px solid rgba(20,184,166,.28)" }}>
          <Quote className="h-6 w-6" style={{ color: GOLD_L }} aria-hidden />
          <p className="mt-3 max-w-3xl text-xl font-bold leading-relaxed md:text-2xl" style={{ color: LIGHT }}>
            Marketing is the function that enables organizations to <span style={{ color: GOLD_L }}>anticipate consumer needs and market evolution</span>.
          </p>
          <p className="mt-3 max-w-3xl text-[.95rem] leading-relaxed" style={{ color: DIM }}>
            Success requires understanding not only current consumer requirements but also predicting future needs and demands. Anticipation allows companies to create products consumers will value — <strong style={{ color: LIGHT }}>before competitors do</strong>.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>BlackBerry: the stock declined after the iPhone (2007), hit bottom in 2010, deepened with Android (2008) — <strong>bankrupt for failing to anticipate the shift</strong>.</>,
          <>Hertz: Uber ($17 billion valuation) brought an <strong>asset-light model</strong> — outsourced drivers and vehicles — against an owned fleet&apos;s capital and maintenance costs; Hertz exited the global market by 2018 but remains operational in southern India.</>,
          <>Blockbuster: Netflix moved from DVD rentals to personalized recommendations (2002) and streaming (2012); the CEO dismissed Netflix as <strong>non-competitive</strong> — bankruptcy followed as OTT disrupted the industry.</>,
          <>The decline pattern: <strong>gradual drop → sudden collapse</strong>; anticipators pivot before the cliff, non-anticipators exit fast.</>,
          <>Marketing&apos;s core function is to enable organizations to <strong>anticipate consumer needs and market evolution</strong> — and to build what consumers will value before competitors do.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 3 · topline  (Lecture 2)
   ============================================================ */

export function MktgToplineSection() {
  return (
    <Section id="topline">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 2"
        title={<>The top line &amp; <GT>the bottom line</GT></>}
        lead="Marketing's financial argument in two numbers: revenue generated through sales, and the profit that remains after cost. The lecture grounds both in a café selling cold coffee." />

      <Reveal>
        <P>Every organization lives on two metrics. The <strong style={{ color: TEAL }}>top line</strong> is revenue — the total money earned through sales. The <strong style={{ color: GOLD }}>bottom line</strong> is profit — sales minus cost. And the lecture&apos;s fundamental principle links them in one direction only:</P>
      </Reveal>
      <Reveal className="mt-4">
        <div className="grid gap-2.5 md:grid-cols-3">
          <KV k="Top line" v="Revenue generated through sales — the total money earned by the organization." />
          <KV k="Bottom line" v="Profit, calculated as Sales minus Cost." />
          <KV k="The principle" v="There must be a top line (revenue) for there to be a bottom line (profit)." />
        </div>
      </Reveal>

      <ReadStep n="1" title="The café's cold coffee, priced and counted" sub="₹120 a glass · 80 glasses a day · ₹70 a glass to make" />
      <Reveal><PnLMachine /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="insight" title="Why marketing sits upstream of profit">
          Marketing ensures <strong>steady revenue streams</strong>, directly enabling profit generation and organizational financial success. No marketing, no customers; no customers, no top line; no top line — and the bottom line never arrives.
        </Callout>
      </Reveal>

      <Reveal className="mt-5">
        <Quiz source="Lecture 2 · concept check" q="₹120 × 80 glasses = ₹9,600. In the lecture's language, that number is the café's…" options={["bottom line", "top line", "profit", "cost"]} answer={1}
          explain="Price × volume = revenue = the top line. The bottom line is what survives after cost: 9,600 − 5,600 = ₹4,000 of profit." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Top line</strong> = revenue from sales; <strong>bottom line</strong> = sales − cost.</>,
          <>The café: <strong>₹120 × 80 = ₹9,600</strong> revenue; <strong>₹70 × 80 = ₹5,600</strong> cost; <strong>₹4,000</strong> profit.</>,
          <>There is <strong>no bottom line without a top line</strong> — the dependency runs one way.</>,
          <>Marketing&apos;s financial job is to keep the top line steady — profit generation follows.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 4 · mktg-vs-selling  (Lecture 2)
   ============================================================ */

export function MktgVsSellingSection() {
  return (
    <Section id="mktg-vs-selling">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 2"
        title={<>Selling the pen vs <GT>understanding the hand</GT></>}
        lead="Selling pushes a finished product and its attributes. Marketing begins by understanding consumer needs before the product is even presented. The lecture's humble prop — a pen — carries the whole distinction." />

      <ReadStep n="1" title="The pen test" sub="One pen, two completely different postures" />
      <Reveal><PenMachine /></Reveal>
      <Reveal className="mt-5">
        <Callout kind="insight" title="Lecture 2 · why asking wins">
          Understanding customer needs before presenting the product ensures <strong>better fit</strong> — and <strong>more successful sales outcomes</strong>. The pen never changed; the sequence did.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="The definition" sub="Understand → create → communicate → deliver" />
      <Reveal>
        <StepsFlow steps={[
          { label: "Understand", sub: "consumer needs and preferences" },
          { label: "Create", sub: "value through product or service development" },
          { label: "Communicate", sub: "value to consumers" },
          { label: "Deliver", sub: "value through satisfactory transactions" },
        ]} />
      </Reveal>
      <Reveal className="mt-5">
        <Callout kind="story" title="What happens when value lands">
          When value is successfully delivered, customers become <strong>advocates</strong> — they speak positively about the brand and generate <strong>repeat business and revenue</strong>. Advocacy is delivered value, amplified.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Marketing in the wild — or is it sales?" sub="Five marketing moves and one sales move, straight from the notes" />
      <Reveal><SpotMachine /></Reveal>

      <ReadStep n="4" title="Marketing → sales" sub="The relationship, stated precisely" />
      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-2">
          <KV k="Sales is" v="the transaction that results from successful marketing." />
          <KV k="Marketing does" v="creates awareness, builds desire, communicates value — then sales completes the transaction." />
          <KV k="Together" v="both are essential — but marketing precedes and enables sales." />
          <KV k="The order" v="customer-centric understanding comes first; product development follows." />
        </div>
      </Reveal>

      <ReadStep n="5" title="Where the course goes next" sub="Keep a repository of notes as you go" />
      <Reveal>
        <P>Upcoming lectures take up the <strong style={{ color: TEAL }}>evolution of marketing</strong> — how concepts and practices developed over time — and the fundamental consumer-behavior triad of <strong style={{ color: TEAL }}>need vs want vs demand</strong>: distinguishing customer requirements from desires, and desires from actual purchasing behavior. You are encouraged to maintain a <strong style={{ color: GOLD }}>repository of notes</strong> on brands, organizations and marketing concepts encountered throughout the course, for practical application and future reference.</P>
      </Reveal>

      <Reveal className="mt-5">
        <Quiz source="Lecture 2 · concept check" q="“Do you prefer ballpoint, pilot, or ink pens?” · “What is your budget?” · “Fine or broad nib?” — this opening is…" options={["selling", "marketing", "promotion", "distribution"]} answer={1}
          explain="The marketing approach asks preliminary questions to understand customer requirements before presenting the product. Listing attributes (writes flawlessly, good grip) is the sales-dominant approach." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Selling</strong> pushes products after creation and leans on attributes; <strong>marketing</strong> starts with understanding consumer needs before the product exists.</>,
          <>The pen: sales says <em>writes flawlessly, black, good grip, improves exam marks</em>; marketing asks <em>ballpoint or ink? budget? fine or broad nib? which color?</em></>,
          <>Marketing = <strong>understand → create → communicate → deliver</strong> value — and delivered value turns customers into advocates.</>,
          <>The lecture&apos;s marketing sightings: ₹1 shampoo sachets, 20% discounts, iced-coffee research, Zomato&apos;s notifications, chocolates at the billing counter — the laptop persuasion alone is sales.</>,
          <>Sales is the <strong>transaction that results from successful marketing</strong> — marketing precedes and enables it.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 5 · definitions  (Lecture 3)
   ============================================================ */

const DEF_STORIES = [
  { icon: <Search className="h-5 w-5" aria-hidden />, name: "Google", line: "Products and services that are relevant and required by consumers — effectively connecting with target audiences." },
  { icon: <Armchair className="h-5 w-5" aria-hidden />, name: "IKEA", line: "Revolutionized furniture through DIY — quality, aesthetically pleasing furniture you assemble yourself, solving the problem of tedious furniture installation." },
  { icon: <Sofa className="h-5 w-5" aria-hidden />, name: "Urban Ladder & PepperFry", line: "Captured an untapped Indian market by recognizing that modern consumers move frequently between cities and don't want furniture for generations — convenient, economical solutions." },
  { icon: <Car className="h-5 w-5" aria-hidden />, name: "Uber & Ola", line: "Replicated the traditional agency model in digital format — drivers now receive 25–30 bookings daily instead of 1–2 through traditional channels." },
  { icon: <Music className="h-5 w-5" aria-hidden />, name: "Apple iPod · Steve Jobs", line: "“Marketing is about meeting needs profitably” — great products combined with business viability." },
  { icon: <Quote className="h-5 w-5" aria-hidden />, name: "Seth Godin", line: "Marketing is not about selling more products but making better things that create genuine value for consumers." },
];

export function MktgDefinitionsSection() {
  return (
    <Section id="definitions">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 3"
        title={<>What marketing <GT>is</GT> — definitions &amp; perspectives</>}
        lead="An outside-in approach that starts with understanding customer needs rather than simply selling products: creating, communicating, and delivering value to customers, clients, partners, and society." />

      <Reveal>
        <div className="rounded-2xl p-6 md:p-8" style={{ background: LAGOON, border: "1px solid rgba(20,184,166,.28)" }}>
          <p className="text-[.7rem] font-extrabold uppercase tracking-[.2em]" style={{ color: GOLD_L }}>American Marketing Association · the theoretical definition</p>
          <p className="mt-3 max-w-3xl text-lg font-bold leading-relaxed md:text-xl" style={{ color: LIGHT }}>
            “Marketing is the activity, set of institutions, and processes for creating value, communicating, delivering, and exchanging offerings that have value for <span style={{ color: GOLD_L }}>customers, clients, partners, and society at large</span>.”
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <P>The business perspective translates the AMA definition into daily work. Marketing is <strong style={{ color: TEAL }}>identifying and meeting human and social needs</strong>; it is <strong style={{ color: TEAL }}>making lives better by making better things</strong>; it is <strong style={{ color: TEAL }}>connecting with consumers</strong> — the Apple CEO&apos;s perspective. The stories below are that definition, wearing different logos:</P>
      </Reveal>

      <Reveal className="mt-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DEF_STORIES.map((s) => (
            <div key={s.name} className="card-warm lift h-full p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))", color: TEAL }}>{s.icon}</span>
                <h3 className="text-[1.02rem] font-extrabold" style={{ color: INK }}>{s.name}</h3>
              </div>
              <p className="mt-2.5 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{s.line}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="1" title="Outside-in vs inside-out" sub="The distinction that separates marketing from selling — again, with arrows" />
      <Reveal><InOutMachine /></Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>AMA: marketing is the activity, set of institutions and processes for <strong>creating, communicating, delivering and exchanging offerings that have value</strong> — for customers, clients, partners, and society at large.</>,
          <>Business view: <strong>identify and meet human and social needs</strong> · make lives better by making better things · connect with consumers.</>,
          <><strong>Outside-in (marketing):</strong> gather market information — needs, wants, dynamics — and bring it into the organization. <strong>Inside-out (selling):</strong> push a finished product out through retailers, distribution, online.</>,
          <>The stories: Google (relevance), IKEA (DIY), Urban Ladder &amp; PepperFry (frequent movers), Uber &amp; Ola (25–30 bookings vs 1–2), Jobs (&ldquo;meeting needs profitably&rdquo;), Godin (&ldquo;better things&rdquo;).</>,
          <>Marketing cannot succeed without sales, and sales cannot succeed without marketing insights — <strong>interconnected, both essential</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 6 · mktg-system  (Lecture 3)
   ============================================================ */

export function MktgSystemSection() {
  return (
    <Section id="mktg-system">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 3"
        title={<>Industry ↔ market — <GT>a system of four flows</GT></>}
        lead="Zoom out from definitions and marketing becomes a system: sellers on one side, buyers on the other, and four flows constantly crossing the gap between them." />

      <Reveal>
        <P>The framework has two core components. The <strong style={{ color: TEAL }}>industry</strong> is a <strong>collection of sellers</strong>; the <strong style={{ color: GOLD }}>market</strong> is a <strong>collection of buyers</strong>. Between them run four key flows — two going out, two coming back:</P>
      </Reveal>
      <Reveal className="mt-4">
        <div className="grid gap-2.5 md:grid-cols-2">
          <KV k="Communication" v="From industry to market — about products, offers, and promotions." />
          <KV k="Goods & services" v="Tangible offerings from industry to market." />
          <KV k="Money" v="Payment from consumers back to sellers." />
          <KV k="Information" v="Market feedback that helps organizations redesign and refine products." />
        </div>
      </Reveal>

      <ReadStep n="1" title="Run the exchange" sub="Highlight each flow, or let the machine cycle all four" />
      <Reveal><SystemMachine /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="insight" title="Why the return flows matter">
          The money flow pays for everything — but the <strong>information flow</strong> is what keeps the system alive: market feedback is how organizations redesign and refine products. A system with only outbound flows is a broadcast, not a market.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Industry = <strong>collection of sellers</strong>; market = <strong>collection of buyers</strong>.</>,
          <>Outbound: <strong>communication</strong> (products, offers, promotions) and <strong>goods &amp; services</strong>.</>,
          <>Inbound: <strong>money</strong> (payment from consumers) and <strong>information</strong> (feedback for redesign and refinement).</>,
          <>The four flows make marketing a <strong>system</strong>, not a megaphone — value travels both ways.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 7 · marketable  (Lecture 3)
   ============================================================ */

export function MktgMarketableSection() {
  return (
    <Section id="marketable">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 3"
        title={<>Ten things you can <GT>market</GT></>}
        lead="Marketing extends far beyond tangible products — from goods and services all the way to persons, places, properties, organizations, information and ideas." />

      <Reveal>
        <P>The lecture&apos;s list is deliberately surprising. Goods are only the first of <strong style={{ color: TEAL }}>ten marketable entities</strong> — and the further down the list you go, the less the offering looks like a &ldquo;product&rdquo; at all. Explore each entity; the examples are all from the notes.</P>
      </Reveal>

      <ReadStep n="1" title="The entity explorer" sub="Goods → ideas: click through all ten" />
      <Reveal><EntityGrid /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="why" title="Why this list matters">
          When <strong>American Express markets an experience</strong> rather than a card, when <strong>Rajasthan Tourism markets a place</strong> through people, when <strong>HBS markets an organization</strong> through legacy — each proves the same point: marketing is the discipline of creating and exchanging value, whatever form the offering takes.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>The ten entities: <strong>goods, services, experiences, financial services, persons, places, properties, organizations, information, ideas</strong>.</>,
          <>Experiences: Imagica sells happiness and memories; Sunburn sells the festival, not the setlist; Coca-Cola&apos;s <strong>“Make a Friend”</strong> connected India–Pakistan vending machines.</>,
          <>Persons: The Rock&apos;s Papatui, Oprah&apos;s skincare, Hrithik&apos;s HRX, Virat Kohli, Kriti Sanon&apos;s Hyphen — <strong>trust in the person precedes the product</strong>.</>,
          <>Properties: World Towers (name, location, facilities), Trump Towers (legacy), The Camellias (₹85–100 crore; ambience, views, amenities, status).</>,
          <>Information &amp; ideas: NIRF rankings and ACSB accreditation as credentials; Zomato&apos;s <strong>“Hungry”</strong> New Year idea and Blinkit&apos;s <strong>“Food mangoge, do minute mein dunga”</strong> vs <strong>“Kheer mangoge, kheer dengunge”</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 8 · need-want-demand  (Lecture 3)
   ============================================================ */

export function MktgNwdSection() {
  return (
    <Section id="need-want-demand">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 3"
        title={<>Need → want → <GT>demand</GT></>}
        lead="Three interconnected concepts that explain every purchase: the requirement that pre-exists, the object it attaches to, and the purchasing power that turns desire into behavior." />

      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-3">
          <KV k="Need" v="A basic human requirement — biological or fundamental (food, shelter, clothing). It pre-exists naturally; marketers do not create needs." />
          <KV k="Want" v="A need directed toward a specific object — shaped by marketing, culture and personal preferences. Hunger becomes a want for pizza, tandoori chicken, or vada pao." />
          <KV k="Demand" v="A want backed by the ability to pay — the conversion of desire into actual purchasing behavior." />
        </div>
      </Reveal>

      <ReadStep n="1" title="Hunger, ₹20, and the making of demand" sub="The lecture's food triad, played out step by step" />
      <Reveal><WalletMachine /></Reveal>

      <ReadStep n="2" title="The Starbucks check" sub="Same want, different cities — only one becomes demand" />
      <Reveal>
        <div className="card-warm lift p-5 md:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg,rgba(20,184,166,.18),rgba(15,118,110,.10))", color: TEAL }}>
              <Coffee className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-xl font-bold" style={{ color: INK }}>Tier 1 vs Tier 3</h3>
            <span className="chip">Lecture 3 · ability to pay</span>
          </div>
          <p className="mt-3 max-w-3xl text-[.93rem] leading-relaxed text-[#3a4a48]">
            Consumers in a Tier 3 city may <strong>want</strong> Starbucks coffee exactly as much as consumers in a Tier 1 city. But only in Tier 1 cities do they have the ability to pay <strong style={{ color: GOLD }}>₹300 for a coffee</strong> — and that is what creates <strong style={{ color: TEAL }}>demand</strong>. The want is universal; the demand is economic.
          </p>
        </div>
      </Reveal>

      <ReadStep n="3" title="What the marketer controls" sub="Three honest lines of authority" />
      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-3">
          <KV k="Cannot create" v="Needs — they pre-exist; marketers recognize rather than create them." />
          <KV k="Can create & shape" v="Wants — attaching needs to specific objects and solutions." />
          <KV k="Can influence" v="Demand — through pricing, availability, and promotion." />
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Need</strong>: basic human requirement — food, shelter, clothing. Pre-exists naturally; marketers do not create it.</>,
          <><strong>Want</strong>: a need attached to a specific object — pizza, tandoori chicken or vada pao — shaped by marketing, culture, personal preference.</>,
          <><strong>Demand</strong>: want + ability to pay. With ₹20, demand is limited to vada pao; with more money, all three become possible.</>,
          <>Starbucks: the want exists in Tier 1 and Tier 3 cities alike — <strong>₹300 of purchasing power</strong> is what turns it into demand.</>,
          <>The marketer&apos;s authority: recognize needs, shape wants, influence demand through pricing, availability and promotion.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 9 · demand-states  (Lecture 3)
   ============================================================ */

export function MktgDemandStatesSection() {
  return (
    <Section id="demand-states">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 3"
        title={<>Five needs, <GT>eight demand states</GT></>}
        lead="Under every stated request lie four deeper layers of need — and every market sits somewhere on a spectrum from negative demand to unwholesome demand. Reading both correctly is the marketer's diagnostic skill." />

      <ReadStep n="1" title="The five types of consumer needs" sub="A car purchase, dissected layer by layer" />
      <Reveal><NeedLayers /></Reveal>

      <ReadStep n="2" title="The eight demand states" sub="From actively-avoided to socially-unwanted — click each state" />
      <Reveal><DemandExplorer /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="insight" title="Lecture 3 · key principles">
          <ul className="grid gap-1.5">
            <li>• Needs are <strong>pre-existing</strong>; marketers recognize rather than create them.</li>
            <li>• <strong>Wants and demands are malleable</strong> — they can be shaped through marketing strategies.</li>
            <li>• Successful marketing requires understanding <strong>all types of needs and demand states</strong>.</li>
            <li>• Marketing must address customer needs <strong>profitably</strong> to be sustainable.</li>
            <li>• The most effective marketing connects consumers with products through <strong>meaningful ideas, experiences, or emotional connections</strong> — not direct product promotion.</li>
          </ul>
        </Callout>
      </Reveal>

      <Reveal className="mt-5">
        <Quiz source="Lecture 3 · concept check" q="Paying extra for an ad-free music subscription is the lecture's example of…" options={["negative demand", "latent demand", "full demand", "irregular demand"]} answer={0}
          explain="Negative demand: consumers actively avoid the product — the ads — and may pay to prevent it. The dentist appointment is the same state played straight." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Five need types: <strong>stated</strong> (&ldquo;I want a car&rdquo;), <strong>real</strong> (low operating costs), <strong>unstated</strong> (service &amp; warranty), <strong>delight</strong> (built-in GPS), <strong>secret</strong> (status symbol).</>,
          <>Eight demand states: <strong>negative → non-existent → latent → declining → irregular → full → overfull → unwholesome</strong>.</>,
          <>Signature examples: dentist appointments (negative), BlackBerry Key2 (non-existent), better cameras (latent), floppy disks &amp; CDs (declining), ACs &amp; seasonal fruits (irregular), OTC drugs (full), bread &amp; milk (overfull), cigarettes (unwholesome).</>,
          <>Needs pre-exist — marketers <strong>recognize</strong> them; wants and demands are <strong>malleable</strong>.</>,
          <>Marketing must address needs <strong>profitably</strong>, and connect through ideas, experiences and emotion rather than direct product promotion.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 10 · closed-system  (Lecture 4)
   ============================================================ */

export function MktgClosedSystemSection() {
  return (
    <Section id="closed-system">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 4"
        title={<>The consumer mind is a <GT>closed system</GT></>}
        lead="By default the mind recycles familiar options, known brands and established habits. Drowning in information overload, it opens only when something triggers genuine interest — and marketing is the discipline of engineering that trigger." />

      <Reveal>
        <P>Consumers are exposed to <strong style={{ color: TEAL }}>countless advertisements and brands daily</strong>. To survive the noise, the mind selectively opens only when something creates a compelling reason to consider alternatives. Lecture 4 turns this into one clean, measurable relationship:</P>
      </Reveal>

      <ReadStep n="1" title="The linear law of interest and openness" sub="X-axis: openness to receive information · Y-axis: interest in the product" />
      <Reveal><MindMachine /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="insight" title="The key principle, verbatim">
          &ldquo;If a consumer is <strong>interested</strong> in something, they will be <strong>open</strong> to learning more about it. Conversely, openness to information indicates underlying interest.&rdquo; This relationship remains <strong>consistently linear across different consumer segments</strong> — and both conditions (interest generation + information receptivity) must be met simultaneously to move from a closed system to an open one.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Breaking the loop" sub="Every consumer has a unique breaking point" />
      <Reveal>
        <P>Every consumer has a <strong style={{ color: GOLD }}>breaking point</strong> — a threshold at which they become willing to explore beyond established preferences. Marketing efforts serve as <strong style={{ color: TEAL }}>interrupts</strong> that break the habitual loop and create openness to new possibilities. The lecture names four: <strong>promotional offers, celebrity endorsements, limited-time deals, and exclusive collections</strong>. You fired all four in the machine above.</P>
      </Reveal>

      <Reveal className="mt-5">
        <Callout kind="warn" title="The critical distinction">
          Marketing always starts with <strong>the customer, not the product</strong>. Products are essential for business operations — but understanding and opening the consumer&apos;s closed system is the prerequisite for successful marketing efforts.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>The mind is a <strong>closed system by default</strong>: familiar options, known brands, established habits — with resistance driven by information overload.</>,
          <>Openness (X) and interest (Y) rise <strong>linearly and together</strong>; both conditions must be met simultaneously.</>,
          <>Every consumer has a unique <strong>breaking point</strong>; marketing&apos;s <strong>interrupts</strong> — offers, celebrities, limited drops, exclusives — crack the loop.</>,
          <>Interested → open; open → interested. The law holds <strong>across consumer segments</strong>.</>,
          <>Marketing starts with <strong>the customer, not the product</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 11 · biz-value  (Lecture 4)
   ============================================================ */

export function MktgBizValueSection() {
  return (
    <Section id="biz-value">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 4"
        title={<>The business value of <GT>marketing</GT></>}
        lead="Organizations run on two financial metrics — and marketing is the engine of the first one. Every organization, regardless of its nature, needs revenue to keep functioning." />

      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-2">
          <KV k="Top line (revenue/sales)" v="The total income generated from selling products or services — the number of products sold multiplied by their selling price." />
          <KV k="Bottom line (profit)" v="The net income remaining after deducting costs from revenue — Revenue minus Total Costs." />
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Callout kind="warn" title="The critical relationship">
          Without a top line (revenue), there cannot be a bottom line (profit). Every organization — <strong>including NGOs and social enterprises</strong> — requires revenue to sustain operations, pay employees, and continue functioning.
        </Callout>
      </Reveal>

      <ReadStep n="1" title="The four levers" sub="Pricing, product, promotion, distribution — working together" />
      <Reveal><LeverMachine /></Reveal>

      <ReadStep n="2" title="Two fundamental approaches" sub="The same inside-out / outside-in distinction, from the business side" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-warm lift h-full p-5">
            <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Inside-out · sales</p>
            <ul className="mt-2 grid gap-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]">
              <li>• Focuses on what the organization has produced or created.</li>
              <li>• Pushes existing products to consumers.</li>
              <li>• Centers on transaction completion.</li>
            </ul>
          </div>
          <div className="card-warm lift h-full p-5">
            <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: TEAL }}>Outside-in · marketing</p>
            <ul className="mt-2 grid gap-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]">
              <li>• Begins with understanding consumer needs, desires, and preferences.</li>
              <li>• Conducts market research to gather consumer insights.</li>
              <li>• Focuses on <strong>relationship building</strong> rather than immediate transactions.</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Top line = <strong>products sold × selling price</strong>; bottom line = <strong>revenue − total costs</strong>.</>,
          <>No revenue → no profit — true for <strong>every organization, NGOs included</strong>: revenue sustains operations and pays employees.</>,
          <>Financial success depends on marketing&apos;s ability to generate revenue across <strong>pricing, product development, promotion, and distribution</strong> — together creating consumer demand and driving sales.</>,
          <>Inside-out pushes what was already made; outside-in begins with the customer&apos;s needs, desires and preferences.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 12 · chai-value  (Lecture 5)
   ============================================================ */

export function MktgChaiSection() {
  return (
    <Section id="chai-value">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 5"
        title={<>One chai, three <GT>prices</GT>, three values</>}
        lead="Customer perceived value is not merely the price printed on a product — it is a calculation made in the consumer's mind. The lecture's opening proof is a cup of tea sold at three very different prices." />

      <Reveal>
        <P>The same tea. Three contexts. The roadside cup costs <strong style={{ color: TEAL }}>₹20</strong>, the café cup <strong style={{ color: TEAL }}>₹250</strong>, the airport cup <strong style={{ color: TEAL }}>₹500</strong> — and no one is being cheated at any of the three counters. What changed is not the product; it is the <strong style={{ color: GOLD }}>consumer&apos;s situation, and therefore the value computed in their mind</strong>.</P>
      </Reveal>

      <ReadStep n="1" title="The three cups" sub="Pick a context — the cup never changes" />
      <Reveal><ChaiMachine /></Reveal>

      <Reveal className="mt-5">
        <Callout kind="story" title="The lecture's point, stated exactly">
          Customer perceived value is <strong>a calculation made in the consumer&apos;s mind based on the benefits received minus the costs incurred</strong>. The value is <strong>highly subjective and contextual</strong>, varying based on individual situations and circumstances. The same product carries different perceived values depending on the consumer&apos;s context and needs.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Roadside tea (<strong>₹20</strong>): economical, casual. Café tea (<strong>₹250</strong>): business meetings, ambiance, impression management. Airport tea (<strong>₹500</strong>): no other options, or traveling.</>,
          <>CPV is <strong>computed in the mind</strong> — benefits received minus costs incurred — not read off a price tag.</>,
          <>Value is <strong>subjective and contextual</strong>: it varies person to person, situation to situation.</>,
          <><strong>Context matters</strong> even when the product is identical — this cup is Lecture 5&apos;s anchor example for everything that follows.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   EXPORTED SECTION 13 · cpv-formula  (Lecture 5)
   ============================================================ */

const DENIM = [
  { tier: "Generic jeans", price: "₹1,000–1,500", note: "the fabric does its job" },
  { tier: "Levi's jeans", price: "₹3,900–5,900", note: "the brand adds its layer" },
  { tier: "Armani jeans", price: "₹25,000–50,000", note: "the label speaks before you do" },
];

const LIMITS = [
  { name: "Psychological", limit: "Limited by the maximum warmth a jacket can provide.", color: TEAL },
  { name: "Functional", limit: "Constrained by practical design limits — and too many features risk cognitive overload.", color: TEAL },
  { name: "Economic", limit: "Cannot be reduced indefinitely without causing business losses.", color: TEAL },
  { name: "Extended psychological", limit: "No inherent limitation — organizations can continuously enhance perception through branding and marketing.", color: GOLD },
];

export function MktgCpvSection() {
  return (
    <Section id="cpv-formula">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 5"
        title={<>CPV = Benefits − <GT>Costs</GT></>}
        lead="The theoretical framework behind the chai: customer perceived value is a mental ledger of four kinds of benefits against direct and abstract costs — and organizations can move either side of the equation." />

      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-2">
          <KV k="The formula" v="Customer Perceived Value = Benefits − Costs." />
          <KV k="The insight" v="Value is calculated in the consumer's mind — benefits extend beyond the physical product, and costs extend beyond the price." />
        </div>
      </Reveal>

      <ReadStep n="1" title="The balance machine" sub="Toggle benefits and costs; watch value tip" />
      <Reveal><ScaleMachine /></Reveal>

      <ReadStep n="2" title="The four benefits — and their ceilings" sub="Three benefits hit limits; one never does" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {LIMITS.map((l) => (
            <div key={l.name} className="card-warm lift h-full p-5" style={l.color === GOLD ? { borderColor: "#e0c88f", background: "#fdf9ef" } : undefined}>
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color === GOLD ? GOLD_GRAD : TEAL_GRAD }} aria-hidden />
                <h3 className="text-[1rem] font-extrabold" style={{ color: INK }}>{l.name} benefit</h3>
                {l.color === GOLD ? <span className="chip">the uncapped one</span> : null}
              </div>
              <p className="mt-2 text-[.88rem] leading-relaxed" style={{ color: "#3a4a48" }}>{l.limit}</p>
            </div>
          ))}
        </div>
        <P className="mt-4">The extended psychological benefit is <strong style={{ color: GOLD }}>particularly powerful in modern marketing</strong> — it shapes how consumers feel about social acceptability and personal image, and it is the only benefit with no built-in ceiling.</P>
      </Reveal>

      <ReadStep n="3" title="The abstract costs" sub="What you pay beyond money" />
      <Reveal>
        <P>Costs are not limited to the direct price. The lecture lists four <strong style={{ color: GOLD }}>abstract costs</strong>: the <strong>time</strong> required to purchase and obtain the product, the <strong>effort and energy</strong> expended, the <strong>psychological stress</strong> (worrying about parking, traffic), and <strong>disposal costs</strong> with after-sales service considerations.</P>
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="story" title="The ice-cream test">
          Ordering ice cream from a delivery app may cost <strong>more money</strong> — but its abstract costs are lower: no travel time, no parking concerns, the convenience of home delivery. Against the store visit, the app can win on perceived value while losing on price. Run both scenarios in the balance machine above.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="How organizations move the equation" sub="Two directions: raise the benefits, or cut the costs" />
      <Reveal>
        <div className="grid gap-2.5 md:grid-cols-2">
          <KV k="Increase benefits" v="Improve the product quality, features, or emotional appeal." />
          <KV k="Reduce costs" v="Lower prices, simplify processes, reduce friction in purchase and usage." />
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="card-warm lift p-5 md:p-6">
            <h3 className="text-xl font-bold" style={{ color: INK }}>Denim: same jeans, different ledger</h3>
            <div className="mt-3 grid gap-2">
              {DENIM.map((d) => (
                <div key={d.tier} className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl px-3.5 py-2.5" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
                  <span className="text-[.9rem] font-extrabold" style={{ color: INK }}>{d.tier}</span>
                  <span className="font-mono-warm text-[.9rem] font-black" style={{ color: GOLD }}>{d.price}</span>
                  <span className="w-full text-[.78rem] text-[#5f7472]">{d.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[.85rem] leading-relaxed text-[#5f7472]">The product remains physically similar — the brand creates the <strong style={{ color: TEAL }}>extended psychological benefit</strong> through brand equity, moving perceived value by orders of magnitude.</p>
          </div>
          <div className="card-warm lift p-5 md:p-6">
            <h3 className="text-xl font-bold" style={{ color: INK }}>Friction is a cost</h3>
            <p className="mt-3 text-[.9rem] leading-relaxed text-[#3a4a48]">
              <strong style={{ color: TEAL }}>Amazon Prime</strong> integrates shopping within entertainment — the &ldquo;Add to Cart&rdquo; button appearing during OTT advertisements makes purchasing easier, <strong>reducing the abstract cost</strong> of obtaining products.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl p-3.5" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
                <p className="text-[.85rem] font-extrabold" style={{ color: INK }}>Application A</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5f7472]">Better playlists — but frequent ads and a complex six-step login. Free, and still worth less.</p>
              </div>
              <div className="rounded-xl p-3.5" style={{ background: "rgba(20,184,166,.08)", border: "1px solid rgba(20,184,166,.35)" }}>
                <p className="text-[.85rem] font-extrabold" style={{ color: TEAL }}>Application B</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-[#5f7472]">A simpler one-step login with minimal friction — <strong>superior perceived value</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-5">
        <Quiz source="Lecture 5 · concept check" q="A mattress ad leads with 'memory foam core'. In the lecture's language, that is a…" options={["benefit", "feature", "cost", "demand state"]} answer={1}
          explain="Features describe what the product has (memory foam); benefits explain why the consumer should care (better sleep, reduced discomfort). Effective marketing communicates benefits — consumers buy what products do for them, not the features themselves." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>CPV = Benefits − Costs</strong> — a calculation in the consumer&apos;s mind, not the price on the tag.</>,
          <>Four benefits: <strong>psychological</strong> (warmth), <strong>functional</strong> (pockets, hoodie, wind resistance), <strong>economic</strong> (savings), <strong>extended psychological</strong> (status) — only the last one has no ceiling.</>,
          <>Costs beyond price: <strong>time, effort, psychological stress, disposal</strong> — the abstract ledger.</>,
          <>Denim: generic <strong>₹1,000–1,500</strong> · Levi&apos;s <strong>₹3,900–5,900</strong> · Armani <strong>₹25,000–50,000</strong> — brand equity as extended psychological benefit.</>,
          <>More features ≠ more value — excess features cause <strong>cognitive overload</strong>; communicate benefits (better sleep), not features (memory foam).</>,
          <>Organizations create value by <strong>increasing benefits or reducing costs</strong> — and friction reduction (Amazon Prime, one-step logins) is often the cheapest win.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
