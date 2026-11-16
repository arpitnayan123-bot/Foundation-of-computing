"use client";

/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS.
   Parts 4 — Lectures 20–28, fourteen chapters:

   journey-variations · autopsy-purchase          (Lecture 20)
   touchpoints-framework                          (Lecture 21)
   recap22                                        (Lecture 22 —
     blank page in the source PDF; honest L19–21 recap)
   motivation-theories · theory-match             (Lecture 23)
   brand-perception · almonds-price               (Lecture 24)
   sensory-stages · gestalt-lab                   (Lecture 25)
   attitude-buckets · retention-acquisition       (Lecture 26)
   abc-humanization                               (Lecture 27)
   bias-lab                                       (Lecture 28)

   Palette — teal (#0f766e / #14b8a6) + champagne (#a97d2c /
   #e3c26b) + ink (#1f2b2b), lagoon dark panels. No indigo,
   blue or purple anywhere. Content source: lecture notes only.
   ============================================================ */

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Anchor, BadgePercent, Brain, Car, ChevronLeft, ChevronRight, Coffee, Compass,
  CupSoda, Dog, Eye, Flame, Footprints, GraduationCap, Heart, HeartHandshake,
  Hourglass, IndianRupee, Laptop, LayoutGrid, Leaf, Microscope,
  MousePointerClick, Package, Paintbrush, Pause, Pizza, Play, Puzzle, Quote,
  Repeat, RotateCcw, Route, Scale, Search, Sparkles, Triangle, TrendingUp,
  Trophy, Users, Wheat, Zap,
} from "lucide-react";
import {
  Callout, KV, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ---------- palette + shared helpers ---------- */

const TEAL = "#0f766e";
const TEAL_BRIGHT = "#14b8a6";
const INK = "#1f2b2b";
const MUTED = "#5f7472";
const GOLD = "#a97d2c";
const GOLD_LITE = "#e3c26b";
const CREAM = "#f2efe7";
const CREAM_BORDER = "#e3ddcf";
const ROSE = "#9f3d54";
const LAGOON = "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)";
const TEAL_GRAD = "linear-gradient(135deg,#14b8a6,#0f766e)";
const GOLD_GRAD = "linear-gradient(135deg,#e3c26b,#a97d2c)";
const PROSE = "max-w-3xl text-[.93rem] leading-relaxed text-[#3a4a48]";

function GSpan({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(120deg,#0f766e,#14b8a6 55%,#a97d2c)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}

function MBtn({ onClick, children, tone = "ghost", label, active = false, disabled = false, pressed, className = "" }: {
  onClick: () => void;
  children: React.ReactNode;
  tone?: "primary" | "gold" | "ghost";
  label?: string;
  active?: boolean;
  disabled?: boolean;
  pressed?: boolean;
  className?: string;
}) {
  const style: React.CSSProperties =
    tone === "primary"
      ? { background: TEAL_GRAD, color: "#f0faf7" }
      : tone === "gold"
        ? { background: GOLD_GRAD, color: "#fffaf0" }
        : active
          ? { background: "rgba(15,118,110,.12)", color: TEAL, border: `1.5px solid ${TEAL}` }
          : { background: "#fffdf9", color: TEAL, border: `1px solid ${CREAM_BORDER}` };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={pressed}
      disabled={disabled}
      style={style}
      className={`rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 ${className}`}
    >
      {children}
    </button>
  );
}

function MLog({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      aria-live="polite"
      className="mt-4 min-h-[2.6rem] rounded-xl px-3.5 py-2.5 text-[.85rem] font-bold leading-relaxed"
      style={{
        background: dark ? "rgba(255,236,210,.06)" : CREAM,
        border: `1px dashed ${dark ? "rgba(227,194,107,.4)" : CREAM_BORDER}`,
        color: dark ? GOLD_LITE : TEAL,
      }}
    >
      {children}
    </p>
  );
}

function TChip({ children, tone = "teal" }: { children: React.ReactNode; tone?: "teal" | "gold" | "dark" }) {
  const style: React.CSSProperties =
    tone === "gold"
      ? { background: "rgba(169,125,44,.1)", color: GOLD, borderColor: "rgba(169,125,44,.32)" }
      : tone === "dark"
        ? { background: "rgba(20,50,54,.92)", color: GOLD_LITE, borderColor: "rgba(227,194,107,.35)" }
        : { background: "rgba(15,118,110,.08)", color: TEAL, borderColor: "rgba(15,118,110,.25)" };
  return (
    <span className="rounded-lg border px-2.5 py-1 text-[.72rem] font-bold leading-relaxed" style={style}>
      {children}
    </span>
  );
}

function Pips({ n, i, dark = false }: { n: number; i: number; dark?: boolean }) {
  return (
    <div className="flex items-center gap-1.5" aria-hidden>
      {Array.from({ length: n }).map((_, k) => (
        <span
          key={k}
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: k === i ? 20 : 8, background: k <= i ? (dark ? GOLD_LITE : TEAL) : dark ? "rgba(227,194,107,.25)" : CREAM_BORDER }}
        />
      ))}
    </div>
  );
}

/* step player — Play auto-advances one lap, Next/Prev/Reset manual */
function useStepPlayer(total: number, ms = 1500) {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    if (i >= total - 1) {
      const t0 = setTimeout(() => setPlaying(false), 0);
      return () => clearTimeout(t0);
    }
    const t = setTimeout(() => setI((v) => Math.min(v + 1, total - 1)), ms);
    return () => clearTimeout(t);
  }, [playing, i, total, ms]);
  const next = () => { setPlaying(false); setI((v) => Math.min(v + 1, total - 1)); };
  const prev = () => { setPlaying(false); setI((v) => Math.max(v - 1, 0)); };
  const reset = () => { setPlaying(false); setI(0); };
  const toggle = () => setPlaying((p) => !p);
  return { i, setI, playing, next, prev, reset, toggle, atEnd: i >= total - 1 };
}

type Player = ReturnType<typeof useStepPlayer>;

function PlayerBtns({ p, name, dark = false }: { p: Player; name: string; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      <MBtn tone="primary" onClick={p.toggle} label={`${name} — ${p.playing ? "pause" : "play"}`}>
        {p.playing ? <Pause className="mr-1 inline h-3.5 w-3.5" aria-hidden /> : <Play className="mr-1 inline h-3.5 w-3.5" aria-hidden />}
        {p.playing ? "Pause" : "Play"}
      </MBtn>
      <MBtn onClick={p.prev} label={`${name} — previous step`} disabled={p.i === 0}>
        <ChevronLeft className="inline h-3.5 w-3.5" aria-hidden /> Prev
      </MBtn>
      <MBtn onClick={p.next} label={`${name} — next step`} disabled={p.atEnd}>
        Next <ChevronRight className="inline h-3.5 w-3.5" aria-hidden />
      </MBtn>
      <MBtn onClick={p.reset} label={`${name} — reset`}>
        <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Reset
      </MBtn>
    </div>
  );
}

/* ============================================================
   LECTURE 20 · CHAPTER 1 — journey-variations
   Definitions, stimulus→choice, the five stages, and the
   skip / reverse / loop journeys — the journey-path machine.
   ============================================================ */

const J_LABELS: string[][] = [
  ["Need", "recognition"],
  ["Information", "search"],
  ["Evaluation of", "alternatives"],
  ["Purchase", "decision"],
  ["Post-", "purchase"],
];
const J_X = [130, 265, 400, 535, 670];
const J_Y = 82;

type JMode = "linear" | "impulse" | "direct" | "reverse" | "loop";

const J_SCRIPTS: Record<JMode, { node: number; log: string }[]> = {
  linear: [
    { node: -1, log: "A stimulus grabs attention — an ad, a celebrity, a colour combination." },
    { node: 0, log: "Need recognition — a gap opens between the current and the desired state. Internal (the product is running out) or external (an ad, a recommendation)." },
    { node: 1, log: "Information search — online research, retail stores, multiple platforms, recommendations." },
    { node: 2, log: "Evaluation of alternatives — specifications, pricing, availability, discounts, benefits." },
    { node: 3, log: "Purchase decision — the final choice and the transaction." },
    { node: 4, log: "Post-purchase — satisfaction and happiness, or dissatisfaction, regret, guilt. It shapes loyalty." },
  ],
  impulse: [
    { node: -1, log: "Impulse: a heavily discounted tag — 70% off — shouts from the shelf." },
    { node: 3, log: "Straight to purchase. No prior need, no planning — need recognition, search and evaluation are all bypassed." },
    { node: 4, log: "Post-purchase still arrives — a bargain glow, or a small twinge of guilt." },
  ],
  direct: [
    { node: -1, log: "Direct purchase: a clear instruction — \u201Cplease buy ketchup.\u201D" },
    { node: 3, log: "The first three stages are skipped entirely; the consumer proceeds directly to purchase." },
    { node: 4, log: "Post-purchase — was it the right ketchup? Feedback still loops back." },
  ],
  reverse: [
    { node: 0, log: "Need recognition — the journey starts normally." },
    { node: 1, log: "Information search — options gathered." },
    { node: 2, log: "Evaluation — comparing specifications, price, discounts\u2026" },
    { node: 1, log: "Stage reversal — new information sends the journey BACK to search to explore additional options." },
    { node: 2, log: "Back to evaluation, with a better-informed consideration set." },
    { node: 3, log: "Purchase decision." },
    { node: 4, log: "Post-purchase can reverse too: external feedback may revisit need recognition itself — \u201Cwas this even necessary?\u201D" },
  ],
  loop: [
    { node: -1, log: "A stimulus starts the journey\u2026" },
    { node: 0, log: "Need recognition." },
    { node: 1, log: "Search." },
    { node: 2, log: "Evaluation." },
    { node: 1, log: "Circular pattern — new information, changing circumstances or unexpected feedback pulls the consumer back to an earlier stage." },
    { node: 2, log: "Evaluate again — the loop can repeat any number of times." },
    { node: 3, log: "Purchase decision — the loop finally exits." },
    { node: 4, log: "Post-purchase — and the whole journey feeds the next one." },
  ],
};

function JourneyPathMachine() {
  const [mode, setMode] = useState<JMode>("linear");
  const script = J_SCRIPTS[mode];
  const p = useStepPlayer(script.length, 1700);
  const cur = script[p.i];
  const visited = script.slice(0, p.i + 1).map((s) => s.node);

  const pick = (m: JMode) => { setMode(m); p.reset(); };

  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Route className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The journey-path machine</h3>
        <TChip>one model · five real-world shapes</TChip>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Journey mode">
        {(["linear", "impulse", "direct", "reverse", "loop"] as JMode[]).map((m) => (
          <MBtn key={m} onClick={() => pick(m)} active={mode === m} pressed={mode === m}
            label={`Set journey mode to ${m}`}>
            {m === "impulse" ? "Skip · impulse (70% off)" : m === "direct" ? "Skip · direct (ketchup)" : m}
          </MBtn>
        ))}
      </div>
      <div className="mt-5 rounded-2xl p-3" style={{ background: LAGOON }}>
        <svg viewBox="0 0 760 176" className="h-auto w-full" role="img"
          aria-label={`Five-stage journey diagram running in ${mode} mode: ${cur.log}`}>
          <line x1="72" y1={J_Y} x2={J_X[0] - 21} y2={J_Y} stroke="#3f615c" strokeWidth="2" />
          {J_X.slice(0, -1).map((x, k) => (
            <line key={k} x1={x + 21} y1={J_Y} x2={J_X[k + 1] - 21} y2={J_Y} stroke="#3f615c" strokeWidth="2" />
          ))}
          {mode === "impulse" ? (
            <motion.path d={`M 42 ${J_Y - 26} C 150 ${J_Y - 92}, 430 ${J_Y - 92}, 535 ${J_Y - 26}`} fill="none"
              stroke={GOLD_LITE} strokeWidth="2.5" strokeDasharray="7 6"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9 }} />
          ) : null}
          {mode === "direct" ? (
            <motion.path d={`M 42 ${J_Y + 26} C 150 ${J_Y + 96}, 430 ${J_Y + 96}, 535 ${J_Y + 26}`} fill="none"
              stroke={GOLD_LITE} strokeWidth="2.5" strokeDasharray="7 6"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9 }} />
          ) : null}
          {mode === "reverse" ? (
            <motion.path d={`M 400 ${J_Y - 24} C 370 ${J_Y - 64}, 295 ${J_Y - 64}, 265 ${J_Y - 24}`} fill="none"
              stroke="#f0b6a4" strokeWidth="2.5" strokeDasharray="6 5"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8 }} />
          ) : null}
          {mode === "loop" ? (
            <motion.path d={`M 265 ${J_Y + 24} C 295 ${J_Y + 66}, 370 ${J_Y + 66}, 400 ${J_Y + 24}`} fill="none"
              stroke={GOLD_LITE} strokeWidth="2.5" strokeDasharray="6 5"
              initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8 }} />
          ) : null}
          <rect x="30" y={J_Y - 13} width="26" height="26" rx="8" fill="#1b3a37" stroke={GOLD} strokeWidth="1.6" />
          <text x="43" y={J_Y - 22} textAnchor="middle" fontSize="11" fontWeight="800" fill={GOLD_LITE}>stimulus</text>
          {J_X.map((x, k) => {
            const on = visited.includes(k);
            return (
              <g key={k}>
                <circle cx={x} cy={J_Y} r="20" fill={on ? "#155e57" : "#122e2b"} stroke={on ? TEAL_BRIGHT : "#3f615c"} strokeWidth="2" />
                <text x={x} y={J_Y + 4.5} textAnchor="middle" fontSize="13" fontWeight="800" fill={on ? "#d8f3ec" : "#7ea49d"}>{k + 1}</text>
                <text x={x} y={J_Y + 44} textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? "#cfe9e2" : "#7ea49d"}>
                  {J_LABELS[k][0]}
                  <tspan x={x} dy="12">{J_LABELS[k][1]}</tspan>
                </text>
              </g>
            );
          })}
          <motion.g animate={{ x: cur.node === -1 ? 43 : J_X[cur.node], y: J_Y }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
            <circle cx="0" cy="0" r="9" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="2" />
          </motion.g>
          <text x="380" y="172" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7ea49d">the entire phenomenon between the stimulus and the choice is consumer behavior</text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <PlayerBtns p={p} name="Journey machine" />
        <Pips n={script.length} i={p.i} />
      </div>
      <MLog>Mode: {mode} · step {p.i + 1}/{script.length} — {cur.log}</MLog>
    </div>
  );
}

export function MktgVariationsSection() {
  return (
    <Section id="journey-variations">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 20"
        title={<>Journey <GSpan>variations</GSpan></>}
        lead="Schiffman and Professor Jain define consumer behavior; the stimulus–choice frame and the five-stage model give it a skeleton — and then real buyers skip, reverse and loop right through it."
      />
      <Reveal><p className={PROSE}>
        Consumer behavior is a <strong>multidisciplinary field</strong> — psychology, marketing, anthropology,
        behavioral economics and neurology — that explains <strong>why, when, how and where</strong> purchases are
        made. It covers not just the purchase decision itself but the emotions, psychology and behaviors that
        accompany it.
      </p></Reveal>

      <div className="mt-6 grid gap-3">
        <Reveal><KV k="Schiffman" v="Consumer behavior is the study of consumers' choices during searching, evaluating, purchasing, and using products and services that satisfy their needs." /></Reveal>
        <Reveal delay={80}><KV k="Professor Jain" v="Consumer behavior is the study of people and activities associated with purchases — how products are chosen, distributed, and used, considering the emotions, psychology, and behaviors these processes create." /></Reveal>
      </div>

      <ReadStep n="1" title="Stimulus → choice" sub="the whole phenomenon in between is the field" />
      <Reveal>
        <div className="card-warm p-5">
          <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-xl p-4" style={{ background: "rgba(169,125,44,.09)", border: "1px solid rgba(169,125,44,.3)" }}>
              <Zap className="h-5 w-5 shrink-0" style={{ color: GOLD }} aria-hidden />
              <p className="text-[.88rem] font-bold" style={{ color: INK }}>STIMULUS — any external element that grabs attention momentarily: advertisements, celebrities, colour combinations.</p>
            </div>
            <div className="hidden h-0.5 flex-1 md:block" style={{ background: `linear-gradient(90deg,${GOLD},${TEAL})` }} aria-hidden />
            <div className="flex flex-1 items-center gap-3 rounded-xl p-4" style={{ background: "rgba(15,118,110,.08)", border: "1px solid rgba(15,118,110,.25)" }}>
              <MousePointerClick className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />
              <p className="text-[.88rem] font-bold" style={{ color: INK }}>CHOICE — the consumer's preference and decision to purchase a product, brand or service.</p>
            </div>
          </div>
          <p className="mt-3 text-center text-[.8rem] font-bold uppercase tracking-[.14em]" style={{ color: MUTED }}>
            understanding what stimulus triggered a purchase — and how it influenced the mind — is the heart of the field
          </p>
        </div>
      </Reveal>

      <ReadStep n="2" title="The five-stage model, summarized" sub="the theoretical spine every journey is measured against" />
      <Reveal>
        <StepsFlow
          steps={[
            { icon: <Sparkles className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Need recognition", sub: "gap between current & desired state — internal or external trigger" },
            { icon: <Search className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Information search", sub: "online, stores, platforms, recommendations" },
            { icon: <Scale className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Evaluation of alternatives", sub: "specs, price, availability, discounts, benefits" },
            { icon: <Package className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Purchase decision", sub: "the transaction" },
            { icon: <Heart className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Post-purchase", sub: "satisfaction → regret — it decides loyalty" },
          ]}
        />
      </Reveal>

      <ReadStep n="3" title="…and then reality happens" sub="run the five real-world shapes of the same journey" />
      <Reveal><JourneyPathMachine /></Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <Reveal>
          <div className="card-warm h-full p-5">
            <TChip tone="gold">stage skipping</TChip>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
              <strong>Impulse:</strong> jump straight from stimulus to purchase — a 70%-off item bought with no prior
              need or planning. <strong>Direct purchases:</strong> a parent&apos;s clear instruction (&quot;buy ketchup&quot;)
              skips the first three stages entirely.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card-warm h-full p-5">
            <TChip tone="gold">stage reversal</TChip>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
              After evaluation, new information can send the consumer <strong>back to search</strong>. Post-purchase
              experiences or external feedback may even revisit <strong>need recognition</strong> — questioning whether
              the purchase was necessary at all.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="card-warm h-full p-5">
            <TChip tone="gold">circular patterns</TChip>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
              The journey is not always a forward progression — it can <strong>loop</strong>, with consumers revisiting
              earlier stages based on new information, changing circumstances, or unexpected feedback from others.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Consumer decision-making <strong>theoretically follows a linear path</strong> but often deviates in practice.</>,
          <>Consumers may <strong>skip stages, reverse directions, or loop back</strong> based on new information and circumstances.</>,
          <>Both the framework <strong>and</strong> its real-world variations matter — that is what makes the behavior influencable.</>,
          <><strong>Post-purchase behavior is as important as the pre-purchase process</strong> in shaping future decisions and brand loyalty.</>,
          <>Discounts, time constraints, recommendations and availability decide <strong>which stages get prioritized or skipped</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 20 · CHAPTER 2 — autopsy-purchase
   The classroom exercise: a real purchase, dissected.
   ============================================================ */

const AUTOPSY = [
  { t: "Trigger", tag: "Need recognition", d: "Internal need — the existing shampoo was running out. The gap opened on its own; no advertisement required." },
  { t: "Search", tag: "Information search", d: "Multiple platforms checked — Nyka, Amazon, retail stores — comparing price, expiry dates and availability." },
  { t: "Alternatives", tag: "Evaluation of alternatives", d: "L'Oreal, Kerastase, Nat Habit and Flam — brands offering similar benefits, all in the consideration set." },
  { t: "Final factor", tag: "the nudge that closed it", d: "A 15% discount on Nyka made the final difference in choosing the product." },
  { t: "Purchase", tag: "Purchase decision", d: "The transaction completes — the Moroccan oil shampoo is bought, the discount having tipped the evaluation." },
  { t: "Post-purchase", tag: "Post-purchase behavior", d: "Satisfaction and confidence in nourishing hair — happiness and positive feelings that quietly book the next purchase." },
];

function AutopsyMachine() {
  const p = useStepPlayer(AUTOPSY.length, 1900);
  const cur = AUTOPSY[p.i];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Microscope className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The autopsy table — step through it</h3>
        <TChip>Moroccan oil shampoo · classroom exercise</TChip>
      </div>
      <div className="mt-5 rounded-2xl p-3" style={{ background: LAGOON }}>
        <svg viewBox="0 0 760 120" className="h-auto w-full" role="img"
          aria-label={`Autopsy of a purchase, step ${p.i + 1} of ${AUTOPSY.length}: ${cur.t} — ${cur.tag}`}>
          <line x1="70" y1="58" x2="690" y2="58" stroke="#3f615c" strokeWidth="2" strokeDasharray="5 6" />
          {AUTOPSY.map((s, k) => {
            const x = 70 + k * 124;
            const on = k <= p.i;
            return (
              <g key={s.t}>
                <circle cx={x} cy="58" r="17" fill={on ? "#155e57" : "#122e2b"} stroke={k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c"} strokeWidth={k === p.i ? 2.5 : 2} />
                <text x={x} y="62.5" textAnchor="middle" fontSize="12" fontWeight="800" fill={on ? "#d8f3ec" : "#7ea49d"}>{k + 1}</text>
                <text x={x} y="94" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d"}>{s.t}</text>
                <motion.circle cx={x} cy="20" r="5" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="1"
                  animate={{ opacity: k === p.i ? 1 : 0.15, scale: k === p.i ? 1.25 : 1 }} />
              </g>
            );
          })}
          <motion.g animate={{ x: 70 + p.i * 124, y: 58 }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
            <circle cx="0" cy="0" r="24" fill="none" stroke={GOLD_LITE} strokeWidth="1.5" strokeDasharray="4 4" />
          </motion.g>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <PlayerBtns p={p} name="Autopsy machine" />
        <Pips n={AUTOPSY.length} i={p.i} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={p.i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}
          className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Step {p.i + 1} of {AUTOPSY.length} · {cur.tag}</p>
          <p className="mt-1 text-lg font-bold" style={{ color: TEAL }}>{cur.t}</p>
          <p className="mt-1.5 text-[.92rem] leading-relaxed" style={{ color: "#3a4a48" }}>{cur.d}</p>
        </motion.div>
      </AnimatePresence>
      <MLog>Autopsy status — step {p.i + 1}/{AUTOPSY.length}: {cur.t} · {cur.tag}</MLog>
    </div>
  );
}

export function MktgAutopsySection() {
  return (
    <Section id="autopsy-purchase">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 20"
        title={<>Autopsy of <GSpan>a purchase</GSpan></>}
        lead="A classroom exercise takes one real, ordinary purchase and dissects it stage by stage — revealing the actual path a consumer walks, and the exact nudge that closes the deal."
      />
      <Reveal><p className={PROSE}>
        The <strong>autopsy of purchase</strong> is a practical application of everything above: analyze a recent
        purchase and surface the stages you actually went through — including the ones theory says should be there but
        weren&apos;t. The specimen on the table: <strong>Moroccan oil shampoo</strong>.
      </p></Reveal>

      <ReadStep n="1" title="Lay the stages on the table" sub="trigger → search → alternatives → the closing nudge → purchase → post-purchase" />
      <Reveal><AutopsyMachine /></Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Callout kind="story" title="Why the autopsy matters">
            The textbook says every stage runs in order. The autopsy found search across <strong>Nyka, Amazon and
            retail stores</strong>, four serious alternatives — <strong>L&apos;Oreal, Kerastase, Nat Habit, Flam</strong> —
            and then a single <strong>15% discount</strong> settling the whole evaluation. Real journeys are
            shorter than models, and one heuristic can carry the final weight.
          </Callout>
        </Reveal>
        <Reveal delay={80}>
          <Callout kind="insight" title="The stage that outlives the receipt">
            Post-purchase here was <strong>satisfaction and confidence in nourishing hair</strong> — happiness and
            positive feelings. That emotional residue is not the end of the journey; it is the <strong>trigger
            waiting for the next repurchase</strong>, which lets the consumer skip exploration entirely next time.
          </Callout>
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>An autopsy maps the <strong>actual</strong> stages of a real purchase — not the theoretical checklist.</>,
          <>Search spanned <strong>platforms and stores</strong>; evaluation produced <strong>four alternatives</strong> with similar benefits.</>,
          <>The final decision factor was <strong>a 15% discount on Nyka</strong> — one heuristic, one closed deal.</>,
          <>Post-purchase <strong>satisfaction feeds the next journey</strong> — as important as everything before the receipt.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 21 — touchpoints-framework
   Non-linear recap, involvement levels, touchpoints beyond the
   point of sale, and the integrated behavior framework cycle.
   ============================================================ */

const CYCLE = [
  { t: "Unfulfilled need", d: "A gap between the current state and the desired state — the lecture's example: hunger. It can be a need, a want or a desire." },
  { t: "Fear / tension", d: "The psychological discomfort the unmet need creates. Tension is the engine of everything that follows." },
  { t: "Drive", d: "An internal trigger — the motivation to act, produced to reduce the tension." },
  { t: "Behavior", d: "Individual-specific actions. One hungry person cooks; another orders delivery; another visits a restaurant, eats what's available at home, or asks family to prepare food." },
  { t: "Consumption", d: "The actual use of the product or service the behavior produced." },
  { t: "Goal fulfillment", d: "The need is satisfied — tension reduces. The cycle closes and can begin again with the next unfulfilled need." },
];
const CYCLE_POS = [-90, -30, 30, 90, 150, 210].map((a) => {
  const rad = (a * Math.PI) / 180;
  return { cx: 240 + 132 * Math.cos(rad), cy: 168 + 118 * Math.sin(rad) };
});

function FrameworkCycleMachine() {
  const p = useStepPlayer(CYCLE.length, 1700);
  const cur = CYCLE[p.i];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Repeat className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The framework-cycle machine</h3>
        <TChip>unfulfilled need → tension reduced</TChip>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr,1fr]">
        <div className="rounded-2xl p-3" style={{ background: LAGOON }}>
          <svg viewBox="0 0 480 336" className="h-auto w-full" role="img"
            aria-label={`Integrated consumer behavior framework, stage ${p.i + 1} of 6: ${cur.t} — ${cur.d}`}>
            <circle cx="240" cy="168" r="118" fill="none" stroke="#3f615c" strokeWidth="2" strokeDasharray="6 7" />
            <text x="240" y="163" textAnchor="middle" fontSize="12" fontWeight="800" fill={GOLD_LITE}>tension ↓</text>
            <text x="240" y="180" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">at goal fulfillment</text>
            {CYCLE_POS.map((pos, k) => {
              const on = k <= p.i;
              const px = pos.cx, py = pos.cy;
              return (
                <g key={k}>
                  <circle cx={px} cy={py} r="24" fill={on ? "#155e57" : "#122e2b"} stroke={k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c"} strokeWidth={k === p.i ? 2.5 : 2} />
                  <text x={px} y={py + 4.5} textAnchor="middle" fontSize="12" fontWeight="800" fill={on ? "#d8f3ec" : "#7ea49d"}>{k + 1}</text>
                </g>
              );
            })}
            <motion.g animate={{ x: CYCLE_POS[p.i].cx, y: CYCLE_POS[p.i].cy }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
              <circle cx="0" cy="0" r="10" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="2" />
            </motion.g>
            <text x={CYCLE_POS[0].cx} y={CYCLE_POS[0].cy - 36} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#cfe9e2">unfulfilled need</text>
            <text x={CYCLE_POS[3].cx} y={CYCLE_POS[3].cy + 42} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#cfe9e2">goal fulfillment &amp; tension reduction</text>
          </svg>
        </div>
        <div>
          <PlayerBtns p={p} name="Framework cycle" />
          <AnimatePresence mode="wait">
            <motion.div key={p.i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}
              className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
              <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Stage {p.i + 1} of 6</p>
              <p className="mt-1 text-lg font-bold" style={{ color: TEAL }}>{cur.t}</p>
              <p className="mt-1.5 text-[.9rem] leading-relaxed" style={{ color: "#3a4a48" }}>{cur.d}</p>
            </motion.div>
          </AnimatePresence>
          {p.i === 3 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              <TChip>cook</TChip><TChip>order delivery</TChip><TChip>visit a restaurant</TChip>
              <TChip>eat what&apos;s at home</TChip><TChip>ask family</TChip>
            </div>
          ) : null}
          <MLog>Cycle status — stage {p.i + 1}/6: {cur.t}</MLog>
        </div>
      </div>
    </div>
  );
}

export function MktgTouchpointsSection() {
  return (
    <Section id="touchpoints-framework">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 21"
        title={<>Touchpoints &amp; the <GSpan>integrated framework</GSpan></>}
        lead="The journey is non-linear; involvement sets its depth; marketing acts far beyond the point of sale — and underneath it all runs a six-part cycle from unfulfilled need to tension reduction."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <TChip>low involvement</TChip>
            <div className="mt-3 flex items-start gap-3">
              <Pizza className="h-6 w-6 shrink-0" style={{ color: GOLD }} aria-hidden />
              <p className="text-[.88rem] leading-relaxed text-[#3a4a48]">
                <strong>Pizza at 11:30 PM</strong> — triggered by immediate need or a notification. Minimal search or
                evaluation; a quick decision without extensive comparison; driven by convenience and impulse.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card-warm h-full p-5">
            <TChip>high involvement</TChip>
            <div className="mt-3 flex items-start gap-3">
              <Laptop className="h-6 w-6 shrink-0" style={{ color: TEAL }} aria-hidden />
              <p className="text-[.88rem] leading-relaxed text-[#3a4a48]">
                <strong>Laptop purchase</strong> — extensive search and evaluation; specifications, brands,
                configurations and price ranges; detailed comparison with assigned weightage; significant emotional
                response post-purchase.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <Callout kind="insight" title="No generalized pattern applies">
          Decision-making is <strong>highly subjective and varies from individual to individual</strong> — the same
          person sails through a pizza order and spends weeks inside the messy middle for a laptop.
        </Callout>
      </Reveal>

      <ReadStep n="1" title="Marketing lives at every touchpoint" sub="not just at the point of sale" />
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Reveal><div className="card-warm p-4"><TChip tone="gold">trigger</TChip><p className="mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]">Discounts, celebrity endorsements, events — influence at the trigger phase itself.</p></div></Reveal>
        <Reveal delay={60}><div className="card-warm p-4"><TChip tone="gold">search</TChip><p className="mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]">Discovering product popularity or best sellers while exploring options.</p></div></Reveal>
        <Reveal delay={120}><div className="card-warm p-4"><TChip tone="gold">evaluation</TChip><p className="mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]">Product quality comparisons — the evaluation stage is a marketing surface too.</p></div></Reveal>
        <Reveal delay={180}><div className="card-warm p-4"><TChip tone="gold">post-purchase</TChip><p className="mt-2 text-[.86rem] leading-relaxed text-[#3a4a48]">Reviews, ratings, recall — and past positive experiences become future triggers, letting consumers skip exploration and go straight to purchase.</p></div></Reveal>
      </div>

      <ReadStep n="2" title="The integrated consumer behavior framework" sub="unfulfilled need → fear/tension → drive → behavior → consumption → goal fulfillment & tension reduction" />
      <Reveal><FrameworkCycleMachine /></Reveal>

      <div className="mt-8 grid gap-3">
        <Reveal><KV k="Individual variability" v="The drive → behavior transition depends on individual perceptions, personality traits, ability to learn, and personal attitudes." /></Reveal>
        <Reveal delay={80}><KV k="The messy middle" v="Once triggered, consumers enter an infinity zone of continuous exploration and evaluation — comparing across Amazon, Flipkart and physical stores, filling carts and wish lists — until a strong enough stimulus converts it into an actual purchase." /></Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Decision-making is a <strong>continuous, non-linear</strong> process of exploration and evaluation.</>,
          <>The journey differs sharply by <strong>involvement level</strong> — pizza at 11:30 PM vs a laptop.</>,
          <>Marketing influences <strong>multiple touchpoints across the entire journey</strong>, not just at purchase.</>,
          <>Behavior is fundamentally driven by the need to <strong>reduce tension from unfulfilled needs, wants or desires</strong>.</>,
          <>Outcomes are individually specific — explaining them requires <strong>perception, personality, learning and attitudes</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 22 — recap22 (dark)
   The source PDF page is blank. Honest recap of the L19–21 arc
   + a self-test. Nothing here is invented.
   ============================================================ */

function RecapStagesSvg() {
  return (
    <svg viewBox="0 0 520 120" className="h-auto w-full" role="img" aria-label="The five stages in a line: need recognition, information search, evaluation of alternatives, purchase decision, post-purchase behavior">
      <defs><marker id="rc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={GOLD_LITE} /></marker></defs>
      {[52, 168, 284, 400].map((x, k) => (
        <motion.line key={k} x1={x + 20} y1="58" x2={x + 108} y2="58" stroke={GOLD_LITE} strokeWidth="2"
          markerEnd="url(#rc-arrow)"
          initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 * k, duration: 0.5 }} />
      ))}
      {["Need", "Search", "Evaluation", "Purchase", "Post-"].map((t, k) => (
        <g key={t}>
          <circle cx={52 + k * 104} cy="58" r="20" fill="#155e57" stroke={TEAL_BRIGHT} strokeWidth="2" />
          <text x={52 + k * 104} y="62.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#d8f3ec">{k + 1}</text>
          <text x={52 + k * 104} y="98" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">{t}</text>
        </g>
      ))}
      <text x="260" y="16" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7ea49d">theory drew a straight line — Lecture 20 showed every way reality bends it</text>
    </svg>
  );
}

function RecapLoopSvg() {
  const pts = [[240, 88], [150, 42], [62, 88], [150, 134], [240, 88], [330, 42], [418, 88], [330, 134], [240, 88]];
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return (
    <svg viewBox="0 0 480 176" className="h-auto w-full" role="img" aria-label="The infinity loop: exploration and evaluation cycling until a strong stimulus breaks out to purchase">
      <motion.path
        d="M 62 88 C 62 30, 240 30, 240 88 C 240 146, 418 146, 418 88 C 418 30, 240 30, 240 88 C 240 146, 62 146, 62 88 Z"
        fill="none" stroke={GOLD_LITE} strokeWidth="2.5" strokeDasharray="8 7"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.4 }}
      />
      <motion.g animate={{ x: xs, y: ys }} transition={{ duration: 7, repeat: 1, ease: "easeInOut" }}>
        <circle cx="0" cy="0" r="9" fill={TEAL_BRIGHT} stroke="#d8f3ec" strokeWidth="2" />
      </motion.g>
      <text x="240" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="#cfe9e2">explore ⇄ evaluate — the messy middle</text>
      <text x="446" y="92" textAnchor="end" fontSize="10.5" fontWeight="800" fill={GOLD_LITE}>a strong stimulus → purchase</text>
    </svg>
  );
}

function RecapCycleSvg() {
  const pos = [-90, -30, 30, 90, 150, 210].map((a) => {
    const rad = (a * Math.PI) / 180;
    return { cx: 130 + 92 * Math.cos(rad), cy: 118 + 86 * Math.sin(rad) };
  });
  const labels = ["Need", "Tension", "Drive", "Behavior", "Consumption", "Goal"];
  return (
    <svg viewBox="0 0 260 236" className="h-auto w-full" role="img" aria-label="Six-node cycle: unfulfilled need, fear or tension, drive, behavior, consumption, goal fulfillment and tension reduction">
      <circle cx="130" cy="118" r="86" fill="none" stroke="#3f615c" strokeWidth="1.8" strokeDasharray="5 6" />
      {pos.map((p, k) => (
        <g key={k}>
          <circle cx={p.cx} cy={p.cy} r="18" fill="#155e57" stroke={TEAL_BRIGHT} strokeWidth="2" />
          <text x={p.cx} y={p.cy + 4} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#d8f3ec">{k + 1}</text>
          <text x={p.cx} y={p.cy + (k === 3 ? 36 : -26)} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#9fbcb4">{labels[k]}</text>
        </g>
      ))}
      <text x="130" y="115" textAnchor="middle" fontSize="10" fontWeight="800" fill={GOLD_LITE}>tension ↓</text>
      <text x="130" y="130" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9fbcb4">at goal</text>
    </svg>
  );
}

const RECAP_TABS = [
  {
    tag: "Lecture 19", t: "The five stages", svg: <RecapStagesSvg />,
    d: "Need recognition → information search → evaluation of alternatives → purchase decision → post-purchase behavior. Plus the heuristics — ratings, discounts, scarcity — that shortcut it, and the cart abandonment that proves decisions are non-linear.",
  },
  {
    tag: "Lectures 19–20", t: "The messy middle & the variations", svg: <RecapLoopSvg />,
    d: "Consumers loop through exploration and evaluation — the infinity zone — while journeys skip stages (impulse 70% off, direct ketchup runs), reverse (back to search), and circle (loops on new information) until a strong stimulus closes the sale.",
  },
  {
    tag: "Lecture 21", t: "The framework cycle", svg: <RecapCycleSvg />,
    d: "Unfulfilled need → fear or tension → internal drive → behavior → consumption → goal fulfillment and tension reduction. The same engine whether the purchase is a pizza at 11:30 PM or a laptop — involvement only sets the depth.",
  },
];

function RecapArcMachine() {
  const p = useStepPlayer(RECAP_TABS.length, 4200);
  const cur = RECAP_TABS[p.i];
  return (
    <div className="card-warm p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Compass className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The arc, one machine</h3>
        <TChip>three panels · Lectures 19–21</TChip>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Recap panels">
        {RECAP_TABS.map((t, k) => (
          <MBtn key={t.t} onClick={() => { p.setI(k); }} active={p.i === k} pressed={p.i === k} label={`Show recap panel: ${t.t}`}>
            {t.tag.split(" ").pop()} · {t.t.split(" ")[0]}
          </MBtn>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={p.i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
          className="mt-5 grid gap-5 lg:grid-cols-[1fr,1.1fr]">
          <div className="rounded-2xl p-4" style={{ background: LAGOON }}>{cur.svg}</div>
          <div>
            <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Panel {p.i + 1} of 3 · {cur.tag}</p>
            <p className="mt-1 text-xl font-bold" style={{ color: TEAL }}>{cur.t}</p>
            <p className="mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]">{cur.d}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <PlayerBtns p={p} name="Recap arc" />
        <Pips n={RECAP_TABS.length} i={p.i} />
      </div>
      <MLog>Recap status — panel {p.i + 1}/3: {cur.tag} · {cur.t}</MLog>
    </div>
  );
}

export function MktgRecap22Section() {
  return (
    <Section id="recap22" dark>
      <SectionHead
        dark
        eyebrow="Principles of Marketing · Lecture 22"
        title={<>Recap · <span style={{ background: GOLD_GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>the decision-journey arc</span></>}
        lead="Session notes not captured — this lecture's page in the source PDF is blank. What follows is an honest recap of the Lectures 19–21 arc, plus a short self-test drawn only from that arc."
      />
      <Reveal>
        <Callout kind="warn" dark title="Session notes not captured — recap of the decision-journey arc">
          Lecture 22 arrived as a blank page in the source PDF. Rather than invent notes, this chapter replays the arc
          the previous three lectures built: <strong>the five stages</strong>, <strong>the infinity loop</strong>, and{" "}
          <strong>the integrated framework cycle</strong>. Everything below comes strictly from Lectures 19–21.
        </Callout>
      </Reveal>

      <ReadStep dark n="1" title="Replay the arc" sub="three panels, one continuous story — from the linear model to the engine underneath it" />
      <Reveal><RecapArcMachine /></Reveal>

      <ReadStep dark n="2" title="Self-test" sub="three questions, drawn only from Lectures 19–21" />
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal>
          <Quiz
            source="Recap · Lectures 19–21"
            q="In the integrated framework, what does an unfulfilled need create first?"
            options={["An impulse purchase", "Fear or tension", "A price comparison", "Post-purchase regret"]}
            answer={1}
            explain="Unfulfilled need creates fear or tension, which triggers the internal drive, which produces behavior, then consumption, then goal fulfillment and tension reduction."
          />
        </Reveal>
        <Reveal delay={80}>
          <Quiz
            source="Recap · Lectures 19–21"
            q="The “messy middle” describes…"
            options={["a linear five-stage checklist", "an exploration–evaluation loop that a strong stimulus eventually breaks", "the post-purchase warranty window", "a pricing heuristic"]}
            answer={1}
            explain="Once triggered, consumers continuously explore and evaluate — the infinity zone of carts and wish lists — until a sufficiently strong trigger converts it into an actual purchase."
          />
        </Reveal>
        <Reveal delay={160}>
          <Quiz
            source="Recap · Lectures 19–21"
            q="Buying a 70%-off item with no prior need or planning skips…"
            options={["only the information search", "the purchase decision", "need recognition, information search and evaluation", "nothing — all five stages still run"]}
            answer={2}
            explain="Impulse purchasing jumps straight from stimulus to purchase — need recognition, information search and evaluation of alternatives are all bypassed."
          />
        </Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways dark items={[
          <><strong>Five stages</strong> — recognition, search, evaluation, purchase, post-purchase: the spine of every journey.</>,
          <><strong>The messy middle</strong> — exploration and evaluation loop until a strong stimulus breaks it.</>,
          <><strong>The framework cycle</strong> — need → tension → drive → behavior → consumption → goal fulfillment; tension reduced.</>,
          <>Real journeys <strong>skip, reverse and loop</strong> — the model is a map, not the territory.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 23 · CHAPTER 1 — motivation-theories
   Freud (iceberg 10/90 + ID/Ego/SuperEgo samosa), Maslow
   (climbable pyramid), Herzberg (two-factor dials + Free Chai).
   ============================================================ */

const MASLOW = [
  { t: "Self-actualization", d: "Self-development, personal fulfillment and realization — becoming what one is capable of becoming.", life: "Later in life, the climb turns to personal meaning." },
  { t: "Esteem needs", d: "Self-esteem, recognition, social status and respect.", life: "Mid-career, recognition and status enter the picture." },
  { t: "Social needs", d: "Belonging, love, trust and affection from others.", life: "Mid-career, the search widens to people." },
  { t: "Safety needs", d: "Security and protection for oneself and one's family.", life: "Young professionals build security through employment." },
  { t: "Physiological needs", d: "Food, water, shelter — basic survival requirements. The hungry person buys food, not luxury.", life: "Students focus here first — secured through education." },
];

const MASLOW_GEO = [
  { pts: "180,20 200,68 160,68" },
  { pts: "142,74 218,74 226,122 134,122" },
  { pts: "128,128 232,128 240,176 120,176" },
  { pts: "114,182 246,182 254,230 106,230" },
  { pts: "100,236 260,236 268,284 92,284" },
];

function MaslowPyramidMachine() {
  const p = useStepPlayer(MASLOW.length, 1700);
  const cur = MASLOW[p.i];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Triangle className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">Maslow&apos;s pyramid — climb it</h3>
        <TChip>the lowest unmet need drives behavior</TChip>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-[1.15fr,1fr]">
        <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
          <svg viewBox="0 0 360 304" className="h-auto w-full" role="img"
            aria-label={`Maslow's five-level pyramid, level ${5 - p.i} highlighted: ${cur.t} — ${cur.d}`}>
            <defs>
              <linearGradient id="mp-act" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
            </defs>
            {MASLOW_GEO.map((g, k) => {
              const active = k === 4 - p.i;
              const passed = k > 4 - p.i;
              return (
                <motion.polygon
                  key={k}
                  points={g.pts}
                  fill={active ? "url(#mp-act)" : passed ? "rgba(20,184,166,.34)" : "rgba(233,242,238,.10)"}
                  stroke={active ? GOLD_LITE : passed ? TEAL_BRIGHT : "#3f615c"}
                  strokeWidth={active ? 2.5 : 1.6}
                  onClick={() => { p.setI(4 - k); }}
                  style={{ cursor: "pointer" }}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * k, duration: 0.45 }}
                />
              );
            })}
            <text x="180" y="49" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={p.i === 0 ? "#d8f3ec" : "#7ea49d"}>SELF-ACTUALIZATION</text>
            <text x="180" y="102" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={p.i === 1 ? "#d8f3ec" : "#7ea49d"}>ESTEEM</text>
            <text x="180" y="156" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={p.i === 2 ? "#d8f3ec" : "#7ea49d"}>SOCIAL</text>
            <text x="180" y="210" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={p.i === 3 ? "#d8f3ec" : "#7ea49d"}>SAFETY</text>
            <text x="180" y="264" textAnchor="middle" fontSize="9.5" fontWeight="800" fill={p.i === 4 ? "#d8f3ec" : "#7ea49d"}>PHYSIOLOGICAL</text>
          </svg>
          <p className="mt-1 text-center text-[.72rem] font-bold uppercase tracking-[.14em]" style={{ color: "#9fbcb4" }}>
            click a level, or let the climber run
          </p>
        </div>
        <div>
          <PlayerBtns p={p} name="Maslow pyramid" />
          <AnimatePresence mode="wait">
            <motion.div key={p.i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28 }}
              className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
              <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Level {5 - p.i} of 5 · climbing from the base</p>
              <p className="mt-1 text-lg font-bold" style={{ color: TEAL }}>{cur.t}</p>
              <p className="mt-1.5 text-[.9rem] leading-relaxed" style={{ color: "#3a4a48" }}>{cur.d}</p>
              <p className="mt-2 text-[.82rem] font-bold" style={{ color: GOLD }}>Life journey: {cur.life}</p>
            </motion.div>
          </AnimatePresence>
          <MLog>Pyramid status — level {5 - p.i}/5: {cur.t}. Consumers do not progress until the current level is satisfied.</MLog>
        </div>
      </div>
    </div>
  );
}

function FreudIceberg() {
  return (
    <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
      <svg viewBox="0 0 560 320" className="h-auto w-full" role="img"
        aria-label="Freud's iceberg: 10% conscious above the waterline, 90% subconscious below — pre-conscious near the surface, unconscious in the depths">
        <defs>
          <linearGradient id="fi-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#143236" />
            <stop offset="100%" stopColor="#0c2124" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="560" height="104" fill="#0e2629" />
        <rect x="0" y="104" width="560" height="216" fill="url(#fi-sea)" />
        <motion.line x1="0" y1="104" x2="560" y2="104" stroke={GOLD_LITE} strokeWidth="2" strokeDasharray="10 8"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
        <text x="14" y="26" fontSize="12" fontWeight="800" fill="#d8f3ec">Conscious — thoughts and beliefs you are fully aware of</text>
        <text x="14" y="46" fontSize="22" fontWeight="800" fill={GOLD_LITE}>10%</text>
        <text x="14" y="298" fontSize="22" fontWeight="800" fill={GOLD_LITE}>90%</text>
        <text x="60" y="278" fontSize="12" fontWeight="800" fill="#d8f3ec">Subconscious &amp; pre-conscious — where most decisions originate</text>
        <motion.path
          d="M 300 44 L 352 104 L 470 180 L 430 262 L 340 300 L 246 262 L 214 176 L 258 104 Z"
          fill="rgba(233,242,238,.92)" stroke={TEAL_BRIGHT} strokeWidth="2"
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        />
        <line x1="214" y1="140" x2="470" y2="140" stroke="#3f615c" strokeWidth="1.4" strokeDasharray="5 5" />
        <text x="478" y="144" fontSize="10.5" fontWeight="700" fill="#9fbcb4">pre-conscious — memories recalled when triggered</text>
        <line x1="214" y1="222" x2="470" y2="222" stroke="#3f615c" strokeWidth="1.4" strokeDasharray="5 5" />
        <text x="478" y="226" fontSize="10.5" fontWeight="700" fill="#9fbcb4">unconscious — deep desires, accessible through dreams</text>
      </svg>
    </div>
  );
}

function HerzbergDials() {
  const [hyg, setHyg] = useState(true);
  const [mot, setMot] = useState(false);
  const dissat = hyg ? 18 : 92;
  const sat = mot ? 88 : 12;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Coffee className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The two-factor dials</h3>
        <TChip>hygiene prevents · motivating propels</TChip>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: ROSE }}>Hygiene factors — job dissatisfiers</p>
          <p className="mt-1 text-[.86rem] leading-relaxed text-[#3a4a48]">Salary &amp; compensation · working conditions · company policies · supervisor relationships</p>
          <div className="mt-3 h-4 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
            <motion.div className="h-full rounded-full" style={{ background: ROSE }}
              animate={{ width: `${dissat}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[.78rem] font-bold text-[#5f7472]">Dissatisfaction meter</span>
            <MBtn onClick={() => setHyg((v) => !v)} active={!hyg} pressed={!hyg} label="Toggle hygiene factors">
              {hyg ? "hygiene present" : "hygiene removed"}
            </MBtn>
          </div>
          <p className="mt-2 text-[.8rem] font-bold leading-relaxed" style={{ color: hyg ? TEAL : ROSE }} aria-live="polite">
            {hyg
              ? "Present → dissatisfaction is prevented. But note: no satisfaction is created — hygiene only defends."
              : "Removed → salary, conditions, policies gone: dissatisfaction spikes immediately."}
          </p>
        </div>
        <div className="rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: TEAL }}>Motivating factors — job satisfiers</p>
          <p className="mt-1 text-[.86rem] leading-relaxed text-[#3a4a48]">Achievement &amp; accomplishment · recognition &amp; appreciation · responsibility · growth &amp; development</p>
          <div className="mt-3 h-4 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
            <motion.div className="h-full rounded-full" style={{ background: TEAL_GRAD }}
              animate={{ width: `${sat}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[.78rem] font-bold text-[#5f7472]">Satisfaction meter</span>
            <MBtn onClick={() => setMot((v) => !v)} active={mot} pressed={mot} label="Toggle motivating factors">
              {mot ? "motivators present" : "motivators absent"}
            </MBtn>
          </div>
          <p className="mt-2 text-[.8rem] font-bold leading-relaxed" style={{ color: mot ? TEAL : MUTED }} aria-live="polite">
            {mot
              ? "Present → genuine satisfaction and motivation appear. This is the only dial that inspires."
              : "Absent → not dissatisfaction — just neutrality. Nothing to be unhappy about, nothing to be excited by."}
          </p>
        </div>
      </div>
      <MLog>
        Dual approach: reduce dissatisfaction by improving hygiene ({hyg ? "on" : "off"}) · increase satisfaction by
        enhancing motivators ({mot ? "on" : "off"}).
      </MLog>
    </div>
  );
}

export function MktgMotivationSection() {
  return (
    <Section id="motivation-theories">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 23"
        title={<>Three theories of <GSpan>motivation</GSpan></>}
        lead="Freud, Maslow and Herzberg answer the same question — why do we do what we do? — from three directions: the subconscious, the hierarchy of needs, and the two factors of satisfaction."
      />
      <Reveal><p className={PROSE}>
        These theories explain <strong>what initiates</strong> the five-stage decision-making process — need
        recognition, search, evaluation, purchase, post-purchase. All three remain fundamentally relevant; consumers
        may not climb the ladder linearly and might skip stages, but knowing <em>which theory is operating</em> helps
        predict and influence behavior.
      </p></Reveal>

      <ReadStep n="1" title="Freudian theory — the iceberg" sub="behavior is guided by subconscious, not conscious, motivations" />
      <Reveal><FreudIceberg /></Reveal>
      <Reveal className="mt-4">
        <div className="grid gap-3">
          <KV k="ID" v="Basic instincts and immediate desires — wanting that samosa right now." />
          <KV k="Ego" v="Rationality and reality — eating only the cover of the samosa, balancing desire with health." />
          <KV k="Super Ego" v="Morality and what is considered correct — refusing the samosa for health reasons." />
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="Application">
          Consumer decisions are motivated by <strong>which of the three dominates</strong> — instinct, reality, or
          moral consideration. Only 10% of decision-making comes from the conscious mind; 90% originates from the
          subconscious and pre-conscious.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Maslow's hierarchy — the pyramid" sub="behavior is driven by the lowest unmet need" />
      <Reveal><MaslowPyramidMachine /></Reveal>
      <Reveal className="mt-4">
        <Callout kind="story" title="The hungry-person test">
          A hungry person would prioritize <strong>buying food over purchasing luxury items</strong> — the lowest
          unmet level runs the show. Life journey: students secure physiological and safety needs through education;
          young professionals build security through employment; mid-career, social and esteem needs dominate; later
          in life, the pursuit turns to self-actualization and personal meaning.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Herzberg's two-factor theory" sub="hygiene prevents dissatisfaction; motivating factors create satisfaction" />
      <Reveal><HerzbergDials /></Reveal>
      <Reveal className="mt-4">
        <Callout kind="story" title="The Free Chai Rule">
          Free chai at work will not make employees love their jobs — but <strong>removing it creates
          discontent</strong>. Salary, working conditions and basic amenities are <em>expected</em>: they prevent
          dissatisfaction without inspiring motivation. True motivation comes from meaningful work, recognition, and
          opportunities for growth.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Freud:</strong> 90% of decision-making is subconscious — ID (instinct), Ego (reality), Super Ego (morality).</>,
          <><strong>Maslow:</strong> physiological → safety → social → esteem → self-actualization; the lowest unmet need leads.</>,
          <><strong>Herzberg:</strong> hygiene factors prevent dissatisfaction; motivating factors create satisfaction — fix both, inspire with the second.</>,
          <>All three remain relevant; consumers <strong>may skip stages</strong> and rarely climb in a straight line.</>,
          <>These theories are the <strong>ignition system</strong> for the five-stage decision process.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 23 · CHAPTER 2 — theory-match
   The six classroom confessions → which theory explains them?
   ============================================================ */

type Theory = "Freudian" | "Maslow" | "Herzberg";

const THEORY_MATCH: { q: string; a: Theory; why: string }[] = [
  { q: "I hit snooze because part of me wants bed, part of me fears my boss.", a: "Freudian", why: "ID vs Super Ego conflict — instinct (stay in bed) against fear and morality (the boss). Behavior guided by subconscious forces." },
  { q: "I cannot focus because hostel Wi-Fi is down.", a: "Maslow", why: "An unmet basic need blocks everything above it — focus does not return until the lower level is restored." },
  { q: "Salary is fine, but my work is boring and I nap at my desk.", a: "Herzberg", why: "Hygiene factor present (salary fine) but motivating factors absent (boring work) — no dissatisfaction, yet no satisfaction either." },
  { q: "I'm over my ex but cried at a sad ad.", a: "Freudian", why: "Conscious and unconscious motivations in conflict — the conscious mind says 'over it'; the subconscious hasn't agreed." },
  { q: "I have food, friends, and a job; now I want to write a novel.", a: "Maslow", why: "Lower levels satisfied — physiological, social, employment — so the climb continues toward self-actualization." },
  { q: "I got a raise and my AC fixed, but nobody thanks me; still not excited.", a: "Herzberg", why: "Hygiene improved (raise, working conditions) but recognition missing — hygiene fixes never create excitement." },
];
const MATCH_ORDER = [2, 0, 5, 3, 1, 4];

function TheoryMatchMachine() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<Theory | null>(null);
  const [score, setScore] = useState(0);
  const cur = THEORY_MATCH[MATCH_ORDER[step]];
  const done = picked !== null;
  const correct = picked === cur.a;

  const pick = (t: Theory) => {
    if (done) return;
    setPicked(t);
    if (t === cur.a) setScore((s) => s + 1);
  };
  const next = () => { if (step < MATCH_ORDER.length - 1) { setStep((s) => s + 1); setPicked(null); } };
  const reset = () => { setStep(0); setPicked(null); setScore(0); };

  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Puzzle className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">Six confessions, three theories</h3>
        <span className="ml-auto flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[.78rem] font-extrabold"
          style={{ background: "rgba(169,125,44,.12)", color: GOLD }}>
          <Trophy className="h-4 w-4" aria-hidden /> {score} / {MATCH_ORDER.length}
        </span>
      </div>
      <div className="mt-4"><Pips n={MATCH_ORDER.length} i={step} /></div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.26 }}
          className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <div className="flex items-start gap-2">
            <Quote className="mt-0.5 h-5 w-5 shrink-0" style={{ color: GOLD }} aria-hidden />
            <p className="text-[1rem] font-bold leading-relaxed" style={{ color: INK }}>&ldquo;{cur.q}&rdquo;</p>
          </div>
          <p className="mt-2 text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: MUTED }}>
            Confession {step + 1} of {MATCH_ORDER.length} — whose theory explains it?
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(["Freudian", "Maslow", "Herzberg"] as Theory[]).map((t) => {
              const state = !done ? "idle" : t === cur.a ? "right" : t === picked ? "wrong" : "dim";
              return (
                <MBtn key={t} onClick={() => pick(t)} disabled={done}
                  tone={state === "right" ? "primary" : state === "wrong" ? "ghost" : "ghost"}
                  active={state === "right"} label={`Answer confession ${step + 1} with ${t} theory`}>
                  {t}{state === "wrong" ? " ✗" : state === "right" ? " ✓" : ""}
                </MBtn>
              );
            })}
          </div>
          {done ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 rounded-xl p-4"
              style={{ background: correct ? "rgba(15,118,110,.08)" : "rgba(159,61,84,.08)", border: `1px solid ${correct ? "rgba(15,118,110,.3)" : "rgba(159,61,84,.3)"}` }}>
              <p className="text-[.88rem] font-extrabold" style={{ color: correct ? TEAL : ROSE }}>
                {correct ? "Correct — " : `Not quite — the answer is ${cur.a}. `}
              </p>
              <p className="mt-1 text-[.88rem] leading-relaxed text-[#3a4a48]">{cur.why}</p>
            </motion.div>
          ) : null}
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone="primary" onClick={next} disabled={step === MATCH_ORDER.length - 1} label="Next confession">
          Next confession
        </MBtn>
        <MBtn onClick={reset} label="Reset the matching game">
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Reset
        </MBtn>
      </div>
      <MLog>
        {done
          ? `Confession ${step + 1}/${MATCH_ORDER.length}: you said ${picked} — ${correct ? "correct" : `the theory is ${cur.a}`}. Score ${score}/${MATCH_ORDER.length}.`
          : `Confession ${step + 1}/${MATCH_ORDER.length} on the table — pick Freudian, Maslow or Herzberg.`}
      </MLog>
    </div>
  );
}

export function MktgTheoryMatchSection() {
  return (
    <Section id="theory-match">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 23"
        title={<>Theory <GSpan>match</GSpan></>}
        lead="Six confessions from the classroom. Each one is a motivation theory in miniature — pick the theory that explains it, and the reasoning behind the match."
      />
      <Reveal><TheoryMatchMachine /></Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Snooze vs boss</strong> and <strong>crying at the ad</strong> — Freudian: subconscious conflict between ID, Ego and Super Ego.</>,
          <><strong>Dead Wi-Fi</strong> and <strong>the novel</strong> — Maslow: unmet lower needs block the climb; satisfied ones release self-actualization.</>,
          <><strong>Boring-but-paid</strong> and <strong>raise-without-thanks</strong> — Herzberg: hygiene is present, motivators are not.</>,
          <>Diagnosing the theory is the first step to <strong>predicting and influencing</strong> the behavior.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 24 · CHAPTER 1 — brand-perception
   What perception is, the illusion cue exercises, and the
   brand-flip switcher: same model, three very different ads.
   ============================================================ */

const PERCEPTION_TRAITS: { k: string; v: string }[] = [
  { k: "Selective", v: "Consumers only absorb information that aligns with their needs, requirements and background." },
  { k: "Subjective", v: "The same product or image can mean completely different things to different individuals." },
  { k: "Constructive", v: "Given partial information, consumers fill in the gaps from existing knowledge and beliefs." },
  { k: "Abstract", v: "Perception varies significantly from person to person — it is not universally standardized." },
];

const BRAND_FLIP = [
  { brand: "Nykaa", kind: "Cosmetics brand", sees: ["Makeup", "Skincare", "Personal care products"], accent: TEAL_BRIGHT },
  { brand: "Fab India", kind: "Heritage brand", sees: ["Clothing", "Accessories"], accent: GOLD },
  { brand: "Label Life", kind: "Celebrity-founded brand", sees: ["Fashion", "Lifestyle products"], accent: "#7c5a1e" },
];

function BrandFlipMachine() {
  const [idx, setIdx] = useState(0);
  const cur = BRAND_FLIP[idx];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Eye className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The brand-flip switcher</h3>
        <TChip>same model · three different expectations</TChip>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-[1fr,1.2fr]">
        <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
          <svg viewBox="0 0 300 260" className="h-auto w-full" role="img"
            aria-label={`The identical model, shown for ${cur.brand}: the ad never changes — only the brand name does`}>
            <circle cx="150" cy="86" r="40" fill="rgba(233,242,238,.94)" stroke="#3f615c" strokeWidth="1.5" />
            <path d="M 78 244 C 78 172, 118 140, 150 140 C 182 140, 222 172, 222 244 Z"
              fill="rgba(233,242,238,.94)" stroke="#3f615c" strokeWidth="1.5" />
            <text x="150" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">the model — identical in all three ads</text>
            <motion.rect x="0" y="0" width="300" height="260" rx="14" fill="none"
              stroke={cur.accent} strokeWidth="3" strokeDasharray="10 8"
              animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity }} />
          </svg>
        </div>
        <div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Choose the brand">
            {BRAND_FLIP.map((b, k) => (
              <MBtn key={b.brand} onClick={() => setIdx(k)} active={idx === k} pressed={idx === k} label={`Show the ad branded as ${b.brand}`}>
                {b.brand}
              </MBtn>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={cur.brand} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
              className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
              <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>{cur.kind}</p>
              <p className="mt-1 text-2xl font-extrabold" style={{ color: TEAL }}>{cur.brand}</p>
              <p className="mt-2 text-[.9rem] leading-relaxed text-[#3a4a48]">The viewer now expects to see:</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {cur.sees.map((s) => <TChip key={s}>{s}</TChip>)}
              </div>
              <p className="mt-3 text-[.84rem] font-bold leading-relaxed" style={{ color: GOLD }}>
                Same model, same pose — the brand name alone re-categorizes the entire ad.
              </p>
            </motion.div>
          </AnimatePresence>
          <MLog>
            Brand: {cur.brand} ({cur.kind}) → perception shifts to {cur.sees.join(", ").toLowerCase()}. Simply changing
            the brand name changes the product category the consumer expects.
          </MLog>
        </div>
      </div>
    </div>
  );
}

function DuckRabbitDemo() {
  const [cue, setCue] = useState<"duck" | "rabbit">("duck");
  const rabbit = cue === "rabbit";
  return (
    <div className="card-warm p-5">
      <div className="flex flex-wrap items-center gap-3">
        <h4 className="text-lg font-bold text-[#12312e]">Cue check — duck, or rabbit?</h4>
        <div className="ml-auto flex gap-2">
          <MBtn onClick={() => setCue("duck")} active={!rabbit} pressed={!rabbit} label="Show the duck cue">Duck cue</MBtn>
          <MBtn onClick={() => setCue("rabbit")} active={rabbit} pressed={rabbit} label="Show the rabbit cue with carrots">Rabbit cue · add carrots</MBtn>
        </div>
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 170" className="h-auto w-full" role="img"
          aria-label={rabbit ? "The same figure read as a rabbit: long ears up, carrot at the right" : "The same figure read as a duck: beak at the left, no carrot"}>
          <ellipse cx="160" cy="96" rx="44" ry="34" fill="rgba(233,242,238,.94)" stroke="#3f615c" strokeWidth="1.5" />
          <motion.path d="M 142 68 C 132 34, 120 26, 116 44 C 112 60, 128 70, 142 68" fill="rgba(233,242,238,.94)"
            stroke={rabbit ? TEAL_BRIGHT : "#3f615c"} strokeWidth={rabbit ? 3 : 1.5} animate={{ opacity: rabbit ? 1 : 0.55 }} />
          <motion.path d="M 178 68 C 188 34, 200 26, 204 44 C 208 60, 192 70, 178 68" fill="rgba(233,242,238,.94)"
            stroke={rabbit ? TEAL_BRIGHT : "#3f615c"} strokeWidth={rabbit ? 3 : 1.5} animate={{ opacity: rabbit ? 1 : 0.55 }} />
          <motion.path d="M 118 92 L 84 84 L 84 104 Z" fill="rgba(233,242,238,.94)"
            stroke={rabbit ? "#3f615c" : TEAL_BRIGHT} strokeWidth={rabbit ? 1.5 : 3} animate={{ opacity: rabbit ? 0.55 : 1 }} />
          <circle cx="172" cy="92" r="4.5" fill="#0c2124" />
          <motion.g animate={{ opacity: rabbit ? 1 : 0, x: rabbit ? 0 : 12 }}>
            <polygon points="236,88 292,98 236,108" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="1.5" />
            <path d="M 240 86 C 246 74, 256 74, 252 86" fill="none" stroke={TEAL_BRIGHT} strokeWidth="2.5" />
          </motion.g>
          <text x="160" y="152" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#9fbcb4">
            {rabbit ? "carrots in the frame → the lines read as a rabbit" : "no carrot → the beak wins: it's a duck"}
          </text>
        </svg>
      </div>
      <p className="mt-3 text-[.86rem] leading-relaxed text-[#3a4a48]" aria-live="polite">
        {rabbit
          ? "Add elements — like carrots — and the perception flips to rabbit. Marketers do exactly this: packaging, colours, imagery, price cues."
          : "The duck–rabbit exercise: same lines, different perception. Adding elements (like carrots) dramatically shifts how the object is read."}
      </p>
    </div>
  );
}

export function MktgBrandPerceptionSection() {
  return (
    <Section id="brand-perception">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 24"
        title={<>Perception &amp; <GSpan>the brand flip</GSpan></>}
        lead="Perception is the lens through which consumers view products and brands — and it is not built on objective reality. Marketers shape it with cues, illusions and brand associations."
      />
      <Reveal><p className={PROSE}>
        <strong>Perception</strong> is the process of how individuals see and interpret the world around them. It is
        not based solely on objective reality — it is heavily influenced by the external cues and stimuli marketers
        provide.
      </p></Reveal>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {PERCEPTION_TRAITS.map((t, i) => (
          <Reveal key={t.k} delay={i * 70}><KV k={t.k} v={t.v} /></Reveal>
        ))}
      </div>

      <ReadStep n="1" title="How marketers influence perception" sub="illusions prove the flip is possible — cues decide what you see" />
      <div className="mt-4 grid gap-5 lg:grid-cols-2">
        <Reveal><DuckRabbitDemo /></Reveal>
        <Reveal delay={80}>
          <div className="flex h-full flex-col gap-4">
            <Callout kind="story" title="The classic illusions">
              The lecture uses two famous ambiguous images — the <strong>young lady / elderly lady</strong> and the{" "}
              <strong>duck / rabbit</strong>. Same image, two readings: adding elements — like carrots in the
              rabbit-duck exercise — dramatically shifts how consumers perceive the object.
            </Callout>
            <div className="card-warm p-5">
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: GOLD }}>The marketer&apos;s cue kit</p>
              <ul className="mt-2 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]">
                <li>• Adding visual elements — packaging design, colours, imagery</li>
                <li>• Introducing price points and discounts</li>
                <li>• Creating brand associations through endorsements and advertising</li>
                <li>• Attaching meaning and messaging to physical products</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <ReadStep n="2" title="The brand flip" sub="the same model, three brands, three completely different expectations" />
      <Reveal><BrandFlipMachine /></Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Perception is <strong>selective, subjective, constructive and abstract</strong> — never a neutral camera.</>,
          <>Illusions (young lady / elderly lady, duck–rabbit) prove that <strong>cues decide what is seen</strong>.</>,
          <><strong>Nykaa</strong> flips the same model to makeup and skincare; <strong>Fab India</strong> to clothing and accessories; <strong>Label Life</strong> to fashion and lifestyle.</>,
          <>The brand name alone re-categorizes the ad — that is the power of <strong>brand perception</strong> in decision-making.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 24 · CHAPTER 2 — almonds-price
   The packaging experiment with the price reveal, price as a
   quality cue, and product vs perceptual product categories.
   ============================================================ */

const ALMONDS = [
  { id: "A", name: "Option A · basic", note: "Acceptable, but unremarkable.", rating: null as number | null, price: "₹1,000" },
  { id: "B", name: "Option B · unimpressive", note: "Least preferred packaging.", rating: 4, price: "₹800" },
  { id: "C", name: "Option C · transparent", note: "You can see the product — moderately preferred.", rating: 6, price: "₹550" },
  { id: "D", name: "Option D · premium", note: "Most preferred — same almonds, better meaning.", rating: 9, price: "₹2,700" },
];
const D_BENEFITS = ["California almonds", "Gluten-free", "High fiber", "Antioxidants", "Reusable zip-lock"];

function AlmondsMachine() {
  const [priced, setPriced] = useState(false);
  const [pick, setPick] = useState<string | null>(null);
  const reset = () => { setPriced(false); setPick(null); };
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Package className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The almonds experiment</h3>
        <TChip>same almonds · four meanings</TChip>
      </div>
      <p className="mt-3 max-w-3xl text-[.88rem] leading-relaxed text-[#3a4a48]">
        Marketing rarely changes the physical product — it changes the <strong>meaning attached</strong> to it. Rate
        the packs on looks first; the prices stay hidden until you reveal them.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ALMONDS.map((o, i) => (
          <motion.div key={o.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl p-4"
            style={{ background: pick === o.id ? "rgba(15,118,110,.08)" : CREAM, border: `1.5px solid ${pick === o.id ? TEAL : CREAM_BORDER}` }}>
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-[.85rem] font-black text-white"
                style={{ background: o.id === "D" ? GOLD_GRAD : TEAL_GRAD }}>{o.id}</span>
              {priced ? (
                <motion.span initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 300, damping: 16, delay: i * 0.1 }}
                  className="rounded-lg px-2 py-1 text-[.8rem] font-extrabold" style={{ background: GOLD_GRAD, color: "#fffaf0" }}>
                  {o.price}
                </motion.span>
              ) : (
                <span className="rounded-lg border border-dashed px-2 py-1 text-[.72rem] font-bold" style={{ borderColor: CREAM_BORDER, color: MUTED }}>price hidden</span>
              )}
            </div>
            <p className="mt-2 text-[.92rem] font-bold" style={{ color: INK }}>{o.name}</p>
            <p className="mt-1 text-[.78rem] leading-relaxed text-[#5f7472]">{o.note}</p>
            {o.rating !== null ? (
              <div className="mt-3">
                <div className="h-2.5 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
                  <motion.div className="h-full rounded-full" style={{ background: o.rating >= 9 ? GOLD_GRAD : TEAL_GRAD }}
                    initial={{ width: 0 }} whileInView={{ width: `${o.rating * 10}%` }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }} />
                </div>
                <p className="mt-1 text-[.72rem] font-extrabold" style={{ color: TEAL }}>~{o.rating}/10 class rating</p>
              </div>
            ) : (
              <p className="mt-3 rounded-lg border border-dashed px-2 py-1 text-[.72rem] font-bold" style={{ borderColor: CREAM_BORDER, color: MUTED }}>
                no strong rating — acceptable
              </p>
            )}
            <MBtn onClick={() => setPick(o.id)} active={pick === o.id} pressed={pick === o.id} label={`Mark ${o.name} as your pick`} className="mt-3">
              {pick === o.id ? "my pick ✓" : "this is my pick"}
            </MBtn>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <MBtn tone="gold" onClick={() => setPriced(true)} disabled={priced} label="Reveal the prices of all four packs">
          <BadgePercent className="mr-1 inline h-4 w-4" aria-hidden /> Reveal prices
        </MBtn>
        <MBtn onClick={reset} label="Reset the experiment">
          <RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Reset
        </MBtn>
      </div>
      <AnimatePresence>
        {priced ? (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-4 rounded-2xl p-5" style={{ background: "rgba(169,125,44,.08)", border: "1px solid rgba(169,125,44,.3)" }}>
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: GOLD }}>What shifted when the prices landed</p>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#3a4a48]">
              A ₹1,000 · B ₹800 · C ₹550 · D ₹2,700. Preferences shifted dramatically — many switched to{" "}
              <strong>Option C (most economical)</strong> or Option B. But consumers with <strong>higher purchasing
              power stayed loyal to Option D</strong>: price itself became a perceptual cue — expensive products are
              perceived as better quality.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <MLog>
        {priced
          ? `Prices revealed: A ₹1,000 · B ₹800 · C ₹550 · D ₹2,700. Most of the class moved to C or B; premium-buyers stayed with D.${pick ? ` Your pick was ${pick}.` : ""}`
          : `Rating phase — judge the packaging only.${pick ? ` Your pick: Option ${pick}.` : ""} Click "Reveal prices" when ready.`}
      </MLog>
      {priced ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {D_BENEFITS.map((b) => <TChip key={b} tone="gold">{b}</TChip>)}
          <span className="text-[.78rem] font-bold leading-relaxed" style={{ color: MUTED }}>
            ← the perceived benefits that made D win before the prices showed up
          </span>
        </div>
      ) : null}
    </div>
  );
}

export function MktgAlmondsSection() {
  return (
    <Section id="almonds-price">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 24"
        title={<>The almonds <GSpan>experiment</GSpan></>}
        lead="Four packs of essentially the same almonds. The class prefers one — until the prices are revealed. Then meet perceptual product categories: the shelf trick that ends pure price wars."
      />
      <Reveal><AlmondsMachine /></Reveal>

      <ReadStep n="1" title="Product categories vs perceptual product categories" sub="how consumers file products by default — and how marketers want them filed" />
      <Reveal><p className={PROSE}>
        By default, consumers store information as <strong>broad product categories</strong> — &quot;toothpaste&quot;,
        &quot;cars&quot;, &quot;ketchup&quot;. The marketing goal is to create <strong>perceptual product
        categories</strong> built on specific needs and benefits. That lets marketers cater to different needs,
        reduce direct price competition, increase overall market sales, and build loyalty on benefits rather than
        product type.
      </p></Reveal>
      <div className="mt-4 grid gap-3">
        <Reveal><KV k="Toothpaste" v="Sensitive teeth (Sensodyne) · overall protection (Colgate Total) · freshness (Close-Up) · whitening (Colgate Visible White) — four perceptual categories, one basic category." /></Reveal>
        <Reveal delay={70}><KV k="Cars" v="Hatchbacks, sedans, trucks, ambulances, fire trucks — same basic category, very different perceived jobs." /></Reveal>
        <Reveal delay={140}><KV k="Ketchup" v="Fresh tomato, premium, chef special — the condiment aisle, split into meanings." /></Reveal>
      </div>

      <ReadStep n="2" title="The Horlicks case" sub="one brand, five perceptual categories — each a life stage" />
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {[
          { v: "Growth Plus", d: "children's growth & development" },
          { v: "Light", d: "health-conscious, reduced sugar" },
          { v: "Jr.", d: "children aged 8–14" },
          { v: "Mother's", d: "pregnant women's nutrition" },
          { v: "Women's 30+", d: "age-specific needs for women 30+" },
        ].map((h, i) => (
          <Reveal key={h.v} delay={i * 60}>
            <div className="card-warm h-full p-4">
              <p className="text-[.95rem] font-extrabold" style={{ color: TEAL }}>Horlicks {h.v}</p>
              <p className="mt-1 text-[.8rem] leading-relaxed text-[#5f7472]">{h.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Consumers chose <strong>Option D (~9/10)</strong> for perceived benefits — California almonds, gluten-free, high fiber, antioxidants, reusable zip-lock — not better almonds.</>,
          <>The price reveal (₹1,000 / ₹800 / ₹550 / ₹2,700) <strong>reshuffled preferences</strong> toward C and B — but premium buyers stayed with D.</>,
          <><strong>Price is a perceptual cue</strong>: expensive reads as better quality.</>,
          <>Perceptual product categories (Sensodyne = sensitivity, Colgate Total = 24-7 protection, Close-Up = freshness, Visible White = whitening) <strong>end pure price competition</strong> — and Horlicks multiplied itself into five life-stage variants.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 25 · CHAPTER 1 — sensory-stages
   Sensory thresholds (absolute / subliminal / differential)
   and the four perception-formation stages machine.
   ============================================================ */

const THRESHOLDS: { k: string; icon: React.ReactNode; v: string }[] = [
  { k: "Sensory stimuli", icon: <Sparkles className="h-5 w-5" aria-hidden />, v: "Any information received through the senses — sight, touch, smell, sound." },
  { k: "Absolute threshold", icon: <Flame className="h-5 w-5" aria-hidden />, v: "The minimum level of stimulus needed to capture attention — a lit candle in a dark room." },
  { k: "Subliminal perception", icon: <CupSoda className="h-5 w-5" aria-hidden />, v: "Ads that appeal to multiple senses and create emotional connections — a beverage ad with pouring liquid and ice cubes appears more appealing than just a bottle." },
  { k: "Differential threshold", icon: <Wheat className="h-5 w-5" aria-hidden />, v: "The point at which a noticeable difference between two stimuli is detected — adding grains of rice until the weight becomes perceptible." },
];

const PSTAGES = [
  { t: "Exposure", d: "Encountering the advertisement or product — the stimulus first reaches the senses." },
  { t: "Attention", d: "Focusing on specific elements — most of the exposure is filtered out right here." },
  { t: "Interpretation", d: "Making sense of what is perceived — meaning is assigned, biased by experience." },
  { t: "Organization", d: "Structuring the perception in the mind — Gestalt principles do much of this work." },
  { t: "Outcome", d: "A purchase, or the intent to purchase — perception has done its job." },
];

function StagesFlowMachine() {
  const p = useStepPlayer(PSTAGES.length, 1600);
  const cur = PSTAGES[p.i];
  const xs = [95, 265, 435, 605, 715];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Footprints className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The four-stage flow machine</h3>
        <TChip>exposure → attention → interpretation → organization → outcome</TChip>
      </div>
      <div className="mt-5 rounded-2xl p-3" style={{ background: LAGOON }}>
        <svg viewBox="0 0 760 130" className="h-auto w-full" role="img"
          aria-label={`Perception formation, stage ${p.i + 1} of 5: ${cur.t} — ${cur.d}`}>
          {xs.slice(0, -1).map((x, k) => (
            <line key={k} x1={x + 24} y1="56" x2={xs[k + 1] - (k === 2 ? 38 : 24)} y2="56" stroke="#3f615c" strokeWidth="2" />
          ))}
          {PSTAGES.map((s, k) => {
            const on = k <= p.i;
            const isOutcome = k === 4;
            return (
              <g key={s.t}>
                <circle cx={xs[k]} cy="56" r={isOutcome ? 26 : 22} fill={on ? (isOutcome ? "#7c5a1e" : "#155e57") : "#122e2b"}
                  stroke={k === p.i ? GOLD_LITE : on ? (isOutcome ? GOLD_LITE : TEAL_BRIGHT) : "#3f615c"} strokeWidth={k === p.i ? 2.5 : 2} />
                <text x={xs[k]} y="61" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={on ? "#d8f3ec" : "#7ea49d"}>
                  {isOutcome ? "₹?" : k + 1}
                </text>
                <text x={xs[k]} y="102" textAnchor="middle" fontSize="10.5" fontWeight="700"
                  fill={k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d"}>
                  {s.t === "Organization" ? "Organi-" : s.t}
                </text>
                {s.t === "Organization" ? (
                  <text x={xs[k]} y="116" textAnchor="middle" fontSize="10.5" fontWeight="700"
                    fill={k === p.i ? GOLD_LITE : on ? "#cfe9e2" : "#7ea49d"}>zation</text>
                ) : null}
              </g>
            );
          })}
          <motion.g animate={{ x: xs[p.i], y: 56 }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
            <circle cx="0" cy="0" r="9" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="2" />
          </motion.g>
          <text x="380" y="18" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7ea49d">sensory receptors register the stimulus — then four stages build the perception</text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <PlayerBtns p={p} name="Perception stages" />
        <Pips n={PSTAGES.length} i={p.i} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={p.i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.26 }}
          className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>
            {p.i === 4 ? "Outcome" : `Stage ${p.i + 1} of 4`}
          </p>
          <p className="mt-1 text-lg font-bold" style={{ color: TEAL }}>{cur.t}</p>
          <p className="mt-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]">{cur.d}</p>
        </motion.div>
      </AnimatePresence>
      <MLog>Stage machine — step {p.i + 1}/5: {cur.t}. Final outcome: purchase or intent to purchase.</MLog>
    </div>
  );
}

export function MktgSensorySection() {
  return (
    <Section id="sensory-stages">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 25"
        title={<>Sensory thresholds &amp; <GSpan>the four stages</GSpan></>}
        lead="Perception is what people think in their minds — subjective and changeable. It starts at the senses: absolute, subliminal and differential thresholds decide what gets in; four stages decide what it becomes."
      />
      <Reveal><p className={PROSE}>
        <strong>&quot;First impression is the last impression&quot;</strong> — first impressions significantly shape
        consumer perception. Marketers can mold it strategically by understanding how the brain processes
        information, and perception&apos;s inherent biases can be leveraged for marketing advantage.
      </p></Reveal>

      <div className="mt-6 grid gap-3">
        {THRESHOLDS.map((t, i) => (
          <Reveal key={t.k} delay={i * 60}>
            <div className="flex items-start gap-3 rounded-xl px-3.5 py-2.5 transition-colors duration-200"
              style={{ background: "#fffaf1", border: "1px solid rgba(227,194,107,.45)" }}>
              <span className="mt-0.5 shrink-0" style={{ color: GOLD }}>{t.icon}</span>
              <span className="text-[.86rem] leading-relaxed text-[#241a0f]">
                <span className="mr-2 font-mono text-[.72rem] font-bold uppercase tracking-wider" style={{ color: GOLD }}>{t.k}</span>
                {t.v}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <ReadStep n="1" title="From stimulus to purchase intent" sub="exposure → attention → interpretation → organization → outcome" />
      <Reveal><StagesFlowMachine /></Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Perception is <strong>subjective</strong> and can change over time — and it can be strategically molded.</>,
          <><strong>Absolute threshold</strong>: the minimum stimulus that captures attention (the lit candle in a dark room).</>,
          <><strong>Subliminal perception</strong>: multi-sensory ads — pouring liquid, ice cubes — create emotional connection.</>,
          <><strong>Differential threshold</strong>: the just-noticeable difference, grain by grain of rice.</>,
          <>Exposure → attention → interpretation → organization — and the outcome is a <strong>purchase or the intent to purchase</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 25 · CHAPTER 2 — gestalt-lab
   Five Gestalt principles, five live demos, tabbed.
   ============================================================ */

function FigureGroundDemo() {
  const [dark, setDark] = useState(true);
  const bg = dark ? "#0c2124" : "#f2efe7";
  const fg = dark ? "#e9f2ee" : "#0f766e";
  return (
    <div>
      <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 158" className="h-auto w-full" role="img"
          aria-label={dark ? "iPod-style demo: white device and cord on a black background — figure and ground" : "Inverted: dark device and cord on a light background — swap figure and ground"}>
          <rect x="1" y="1" width="318" height="156" rx="14" fill={bg} stroke="#3f615c" strokeWidth="1.5" />
          <path d="M 36 116 C 86 40, 128 132, 178 62 S 262 96, 284 38" fill="none" stroke={fg} strokeWidth="7" strokeLinecap="round" />
          <rect x="196" y="86" width="56" height="38" rx="7" fill={fg} />
          <circle cx="224" cy="105" r="9" fill={bg} />
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <MBtn onClick={() => setDark((v) => !v)} label="Invert figure and ground">Invert figure &amp; ground</MBtn>
        <p className="text-[.8rem] font-bold" style={{ color: MUTED }} aria-live="polite">
          {dark ? "black ground, white figure — the iPod trick" : "light ground, dark figure — same elements, new focal point"}
        </p>
      </div>
    </div>
  );
}

function ContinuityDemo() {
  const [go, setGo] = useState(0);
  return (
    <div>
      <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 158" className="h-auto w-full" role="img"
          aria-label="Two crossing curved paths; the eye follows the line it was tracing — a teal dot demonstrates the continuity">
          <path d="M 28 132 Q 160 22 292 132" fill="none" stroke={TEAL_BRIGHT} strokeWidth="2.5" />
          <path d="M 28 26 Q 160 138 292 26" fill="none" stroke="#5f8f88" strokeWidth="2" strokeDasharray="6 6" />
          <motion.circle r="8" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="2"
            animate={{ x: [28, 97, 160, 223, 292], y: [132, 88, 77, 88, 132] }}
            key={go} transition={{ duration: 2.2, ease: "easeInOut" }} />
          <text x="160" y="152" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">two paths cross — the eye keeps tracing the one it started on</text>
        </svg>
      </div>
      <div className="mt-3">
        <MBtn onClick={() => setGo((v) => v + 1)} label="Send the dot along the continuous path">Trace the line</MBtn>
      </div>
    </div>
  );
}

function SimilarityDemo() {
  const [uniform, setUniform] = useState(true);
  return (
    <div>
      <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 158" className="h-auto w-full" role="img"
          aria-label={uniform ? "Twelve shapes: teal circles in the first columns and champagne squares in the last — similarity groups them" : "The same twelve shapes randomly mixed — grouping breaks down"}>
          {Array.from({ length: 12 }).map((_, k) => {
            const col = k % 4, row = Math.floor(k / 4);
            const x = 34 + col * 76, y = 30 + row * 44;
            const isCircle = uniform ? col < 2 : (k * 7 + 3) % 3 !== 0;
            const tealish = uniform ? col < 2 : (k * 5 + 1) % 2 === 0;
            return isCircle ? (
              <circle key={k} cx={x} cy={y} r="14" fill={tealish ? TEAL_BRIGHT : GOLD_LITE} opacity={tealish ? 0.9 : 0.95} />
            ) : (
              <rect key={k} x={x - 13} y={y - 13} width="26" height="26" rx="6" fill={tealish ? TEAL_BRIGHT : GOLD_LITE} opacity={tealish ? 0.9 : 0.95} />
            );
          })}
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <MBtn onClick={() => setUniform((v) => !v)} label="Toggle similarity grouping">{uniform ? "Break the pattern" : "Restore the pattern"}</MBtn>
        <p className="text-[.8rem] font-bold" style={{ color: MUTED }} aria-live="polite">
          {uniform ? "similar colour + shape → two clean groups" : "mixed attributes → grouping dissolves"}
        </p>
      </div>
    </div>
  );
}

function ProximityDemo() {
  const [grouped, setGrouped] = useState(true);
  const xs = grouped
    ? [26, 38, 50, 130, 142, 154, 234, 246, 258]
    : [26, 58, 90, 122, 154, 186, 218, 250, 282];
  return (
    <div>
      <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 120" className="h-auto w-full" role="img"
          aria-label={grouped ? "Nine dots in three tight clusters — proximity creates three groups" : "Nine dots evenly spaced — the groups dissolve into one row"}>
          {xs.map((x, k) => (
            <motion.g key={k} animate={{ x }} transition={{ type: "spring", stiffness: 140, damping: 18 }}>
              <circle cx="0" cy="52" r="9" fill={k < 3 ? TEAL_BRIGHT : k < 6 ? GOLD_LITE : TEAL_BRIGHT} opacity="0.9" />
            </motion.g>
          ))}
          <text x="160" y="104" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">
            {grouped ? "tight clusters read as three groups — same three colours all along" : "even spacing — the grouping dissolves"}
          </text>
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <MBtn onClick={() => setGrouped((v) => !v)} label="Toggle spacing between dots">{grouped ? "Spread evenly" : "Cluster again"}</MBtn>
        <p className="text-[.8rem] font-bold" style={{ color: MUTED }} aria-live="polite">distance decides grouping — regardless of colour</p>
      </div>
    </div>
  );
}

function ClosureDemo() {
  const [complete, setComplete] = useState(false);
  return (
    <div>
      <div className="rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 320 158" className="h-auto w-full" role="img"
          aria-label="A dashed, incomplete circle; when completed, the missing arc appears in gold — the mind had already finished it">
          <path d="M 160 26 A 54 54 0 1 1 106 80" fill="none" stroke="#8fb8b0" strokeWidth="4" strokeDasharray="10 8" strokeLinecap="round" />
          <motion.path d="M 160 26 A 54 54 0 1 0 106 80" fill="none" stroke={GOLD_LITE} strokeWidth="4" strokeLinecap="round"
            initial={false} animate={{ pathLength: complete ? 1 : 0, opacity: complete ? 1 : 0.25 }} transition={{ duration: 0.9 }} />
          <text x="160" y="86" textAnchor="middle" fontSize="11" fontWeight="800" fill="#cfe9e2">gaps? what gaps?</text>
          <text x="160" y="140" textAnchor="middle" fontSize="10" fontWeight="700" fill="#9fbcb4">the brain predicts from past experience — and completes the shape</text>
        </svg>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <MBtn onClick={() => setComplete((v) => !v)} label="Reveal the completed arc">{complete ? "Re-break it" : "Let the mind finish it"}</MBtn>
        <p className="text-[.8rem] font-bold" style={{ color: MUTED }} aria-live="polite">
          {complete ? "the missing arc was already there — in your head" : "incomplete on canvas, complete in the mind"}
        </p>
      </div>
    </div>
  );
}

const GESTALT_TABS: { t: string; d: string; apps: string[]; demo: React.ReactNode }[] = [
  {
    t: "Figure & ground",
    d: "The foreground object grabs attention; the background (negative space) provides the contrast that makes it stand out. Clever negative space creates visual impressions without explicitly drawing elements.",
    apps: ["Apple's iPod ads — black background, white cords", "Sensodyne — white teeth against black", "Wine bottle & fork — both in one negative space", "Peter and the Wolf cover — the child in silhouette"],
    demo: <FigureGroundDemo />,
  },
  {
    t: "Continuity",
    d: "Elements arranged in lines or curves are perceived as related; the eye follows the path it was tracing — even when two lines cross. Visual paths guide attention in a specific direction.",
    apps: ["Arrow signs on roads", "Supermarket placement — shampoos together, soaps together", "E-commerce flow: product → price → ratings", "Cars24: brands → evaluation → inspection → pricing"],
    demo: <ContinuityDemo />,
  },
  {
    t: "Grouping & similarity",
    d: "Objects with similar characteristics — colour, shape, size, visual style — are perceived as belonging to the same group. Humans group similar items with no instruction at all.",
    apps: ["School uniforms — instant group identity", "Website menus under category headings", "Clothing sections — shirts, t-shirts, jeans, shoes", "Promo cards that share one layout"],
    demo: <SimilarityDemo />,
  },
  {
    t: "Proximity",
    d: "Objects close together are perceived as a group; larger gaps read as separation. Distance decides grouping regardless of colour — and spacing creates the frame of reference for comparison.",
    apps: ["Notice boards — exam, holiday and sports blocks", "Product cards spaced into categories", "Shoe display: price + original price + discount together"],
    demo: <ProximityDemo />,
  },
  {
    t: "Closure",
    d: "The brain predicts what it expects to see based on past experience — and mentally completes incomplete information. When predictions don't match reality, it finds the closest matching interpretation.",
    apps: ["Mentally completing incomplete information", "Engaging ads that let the consumer finish the story", "Organized interfaces like Pinterest — navigation you just 'get'"],
    demo: <ClosureDemo />,
  },
];

function GestaltLab() {
  const [tab, setTab] = useState(0);
  const cur = GESTALT_TABS[tab];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <LayoutGrid className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The Gestalt lab — five live demos</h3>
        <TChip>the brain organizes; it doesn&apos;t photograph</TChip>
      </div>
      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Gestalt principles">
        {GESTALT_TABS.map((g, k) => (
          <button key={g.t} type="button" role="tab" aria-selected={tab === k} aria-label={`Gestalt principle: ${g.t}`}
            onClick={() => setTab(k)}
            className="rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={tab === k ? { background: TEAL_GRAD, color: "#f0faf7" } : { background: "#fffdf9", color: TEAL, border: `1px solid ${CREAM_BORDER}` }}>
            {k + 1}. {g.t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
          className="mt-5 grid gap-5 lg:grid-cols-2">
          {cur.demo}
          <div className="flex flex-col">
            <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>Principle {tab + 1} of 5 · {cur.t}</p>
            <p className="mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]">{cur.d}</p>
            <p className="mt-4 text-[.72rem] font-extrabold uppercase tracking-[.14em]" style={{ color: MUTED }}>In marketing</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {cur.apps.map((a) => <TChip key={a} tone="gold">{a}</TChip>)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <MLog>Gestalt lab — demo {tab + 1}/5: {cur.t}. The brain organizes visual objects into coherent patterns and predicts what it expects to see.</MLog>
    </div>
  );
}

export function MktgGestaltSection() {
  return (
    <Section id="gestalt-lab">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 25"
        title={<>The <GSpan>Gestalt lab</GSpan></>}
        lead="The brain does not process images like a camera — it organizes elements into patterns and predicts from past experience. Five principles, five live demos, and the marketing that rides on each."
      />
      <Reveal><p className={PROSE}>
        <strong>The Gestalt principle:</strong> humans organize visual elements into meaningful patterns rather than
        processing them separately. The brain predicts what it expects to see from past experience — and when
        predictions don&apos;t match reality, it finds the closest matching interpretation. Aesthetic, organized
        interfaces (like Pinterest) work precisely because of this: navigation becomes easy to understand.
      </p></Reveal>
      <Reveal className="mt-5"><GestaltLab /></Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Figure & ground</strong> — distinguish object from background to create the focal point (iPod, Sensodyne).</>,
          <><strong>Continuity</strong> — guide viewers through sequences and natural decision flows (road arrows, Cars24).</>,
          <><strong>Grouping & similarity</strong> — organize related information for easier comprehension (uniforms, menus).</>,
          <><strong>Proximity</strong> — create logical relationships and facilitate comparison (notice boards, price displays).</>,
          <><strong>Closure</strong> — engage consumers by letting them <strong>mentally complete incomplete information</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 26 · CHAPTER 1 — attitude-buckets
   Attitude = f(Object, Attributes); the Borges attribute war;
   Epicurus' two buckets and the bucket sorter; the tire ad.
   ============================================================ */

type Bucket = "util" | "love";

const BUCKET_ITEMS: { id: string; label: string; bucket: Bucket; why: string }[] = [
  { id: "emp", label: "Employer – employee", bucket: "util", why: "Work for salary — a clean exchange." },
  { id: "buy", label: "Buyer – seller", bucket: "util", why: "Money for product — the textbook transaction." },
  { id: "sib", label: "Siblings", bucket: "util", why: "Even family can be transactional — Epicurus counts siblings in the utilitarian bucket." },
  { id: "spouse", label: "Spouses", bucket: "util", why: "Exchange-based too, per the lecture — harsh, but that is the bucket." },
  { id: "parent", label: "Parent – child", bucket: "love", why: "The ONLY truly non-transactional relationship — pure affection, no return expected." },
  { id: "tire", label: "Tire ad · father & daughter", bucket: "love", why: "Marketing engineered this one — safety and protection land the tire in the love bucket." },
];

function BucketSorter() {
  const [placed, setPlaced] = useState<Record<string, Bucket>>({});
  const [log, setLog] = useState("Click a relationship — it lands in the bucket Epicurus filed it under (340–270 BC).");
  const reset = () => {
    setPlaced({});
    setLog("Cleared. Click a relationship to file it again.");
  };
  const file = (it: (typeof BUCKET_ITEMS)[number]) => {
    setPlaced((p) => ({ ...p, [it.id]: it.bucket }));
    setLog(`${it.label} → ${it.bucket === "love" ? "LOVE bucket" : "utilitarian bucket"}. ${it.why}`);
  };
  const utilItems = BUCKET_ITEMS.filter((it) => placed[it.id] === "util");
  const loveItems = BUCKET_ITEMS.filter((it) => placed[it.id] === "love");
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <HeartHandshake className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The bucket sorter</h3>
        <TChip>Epicurus · 340–270 BC</TChip>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {BUCKET_ITEMS.filter((it) => !placed[it.id]).map((it) => (
          <MBtn key={it.id} onClick={() => file(it)} label={`File "${it.label}" into its bucket`}>{it.label}</MBtn>
        ))}
        {BUCKET_ITEMS.every((it) => placed[it.id]) ? (
          <span className="text-[.82rem] font-bold" style={{ color: MUTED }}>all six filed ✓</span>
        ) : null}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <motion.div layout className="rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: MUTED }}>Utilitarian / transactional bucket</p>
          <p className="mt-1 text-[.8rem] leading-relaxed text-[#5f7472]">You give something, I give something in return.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AnimatePresence>
              {utilItems.map((it) => (
                <motion.span key={it.id} layout initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="rounded-lg border px-2.5 py-1 text-[.74rem] font-bold"
                  style={{ background: "#fff", borderColor: CREAM_BORDER, color: INK }}>
                  {it.label}
                </motion.span>
              ))}
            </AnimatePresence>
            {utilItems.length === 0 ? <span className="text-[.76rem] font-bold text-[#9aa5a0]">empty — file something</span> : null}
          </div>
        </motion.div>
        <motion.div layout className="rounded-2xl p-5" style={{ background: "rgba(15,118,110,.07)", border: "1px solid rgba(15,118,110,.3)" }}>
          <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: TEAL }}>Love bucket</p>
          <p className="mt-1 text-[.8rem] leading-relaxed text-[#5f7472]">Pure affection — no expectation of return.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <AnimatePresence>
              {loveItems.map((it) => (
                <motion.span key={it.id} layout initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="rounded-lg px-2.5 py-1 text-[.74rem] font-bold"
                  style={{ background: TEAL_GRAD, color: "#f0faf7" }}>
                  {it.label}
                </motion.span>
              ))}
            </AnimatePresence>
            {loveItems.length === 0 ? <span className="text-[.76rem] font-bold text-[#9aa5a0]">empty — who belongs here?</span> : null}
          </div>
        </motion.div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <MBtn onClick={reset} label="Reset the bucket sorter"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /> Reset</MBtn>
      </div>
      <MLog>{log}</MLog>
    </div>
  );
}

function BorgesBars() {
  const rows = [
    { label: "Antioxidants", mult: "2×", w: 66 },
    { label: "Vitamin C", mult: "4×", w: 92 },
  ];
  return (
    <div className="card-warm p-5">
      <div className="flex flex-wrap items-center gap-3">
        <Leaf className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
        <h4 className="text-lg font-bold text-[#12312e]">The attribute war — Borges Olive Leaf Infusion Tea vs green tea</h4>
      </div>
      <div className="mt-4 space-y-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between">
              <span className="text-[.84rem] font-bold" style={{ color: INK }}>{r.label}</span>
              <span className="text-[.84rem] font-extrabold" style={{ color: GOLD }}>vs green tea: {r.mult}</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
              <motion.div className="h-full rounded-full" style={{ background: GOLD_GRAD }}
                initial={{ width: 0 }} whileInView={{ width: `${r.w}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <TChip>oleuropin — helps regulate blood pressure</TChip>
        <TChip>zero caffeine</TChip>
        <TChip>zero added flavors</TChip>
      </div>
      <p className="mt-3 text-[.84rem] leading-relaxed text-[#3a4a48]">
        These attributes were <strong>perception-driven</strong> — organizations have far more flexibility
        manipulating attributes than the core product itself, and that is what positioned Borges as superior.
      </p>
    </div>
  );
}

export function MktgBucketsSection() {
  return (
    <Section id="attitude-buckets">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 26"
        title={<>Attitude &amp; <GSpan>the two buckets</GSpan></>}
        lead="Attitude is the bridge between perception and decision — Attitude = f(Object, Attributes). And brands that connect attributes to human traits escape the transactional bucket entirely."
      />
      <Reveal><p className={PROSE}>
        <strong>Motivation</strong> drives individuals to act on needs and desires; <strong>perception</strong> is how
        consumers interpret and categorize products — which differs from objective reality. Consumers naturally file
        products into broad categories (&quot;cars&quot;, &quot;toothpaste&quot;), but organizations win by shaping the
        perceptual categories: <strong>Sensodyne</strong> = sensitivity relief, <strong>Colgate Total</strong> = 24/7
        protection, <strong>Close-Up</strong> = fresh breath — and Horlicks splitting into variants for children,
        adults and diabetics.
      </p></Reveal>

      <ReadStep n="1" title="Attitude as the bridge" sub="perception ⇄ attitude, formed from past + fresh experiences" />
      <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr,1fr]">
        <Reveal>
          <div className="card-warm p-5">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-xl px-4 py-2 text-[.9rem] font-extrabold" style={{ background: "rgba(15,118,110,.08)", color: TEAL }}>Perception</span>
              <svg viewBox="0 0 90 34" className="h-8 w-20" aria-hidden>
                <path d="M 4 12 H 74" stroke={TEAL} strokeWidth="2.2" fill="none" />
                <path d="M 68 6 L 78 12 L 68 18" stroke={TEAL} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 86 22 H 16" stroke={GOLD} strokeWidth="2.2" fill="none" />
                <path d="M 22 16 L 12 22 L 22 28" stroke={GOLD} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="rounded-xl px-4 py-2 text-[.9rem] font-extrabold" style={{ background: "rgba(169,125,44,.1)", color: GOLD }}>Attitude</span>
            </div>
            <p className="mt-4 text-center font-mono text-[1.05rem] font-extrabold" style={{ color: INK }}>
              Attitude = f(Object, Attributes)
            </p>
            <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
              A favorable or unfavorable response toward something. The relationship is <strong>bidirectional</strong> —
              perception leads to attitude, and attitude influences perception. Formation depends on{" "}
              <strong>past experiences and fresh experiences</strong>. The decision is never based solely on the
              product itself, but on the <strong>product&apos;s attributes as perceived by the consumer</strong>.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}><BorgesBars /></Reveal>
      </div>

      <ReadStep n="2" title="Humanizing brands — the two buckets" sub="Epicurus, 340–270 BC: almost everything is transactional. Almost." />
      <Reveal className="mt-4"><BucketSorter /></Reveal>

      <Reveal className="mt-6">
        <Callout kind="story" title="Case study — why father-daughter in a tire ad?">
          Because a tire is the most utilitarian product imaginable — so the ad humanizes it. Daughters feel{" "}
          <strong>protected and safe</strong> with their fathers; that emotional connection (safety, protection) maps
          to tire quality — a quality tire provides vehicle stability and safety. The tire becomes associated with{" "}
          <strong>protecting loved ones</strong>, not just a transactional purchase — the brand lands in the{" "}
          <strong>love bucket</strong>, and loyalty follows.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Attitude = f(Object, Attributes)</strong> — bidirectional with perception, built from past + fresh experiences.</>,
          <>Attributes are the marketer&apos;s flexible lever — the <strong>Borges</strong> tea won on 2× antioxidants, 4× vitamin C, oleuropin, zero caffeine.</>,
          <>Epicurus: everything is transactional except <strong>parent → child</strong> — the only true love-bucket relationship.</>,
          <>Humanized brands shift the relationship from <strong>transactional to relational</strong> — the tire ad&apos;s father-daughter safety story is the template.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 26 · CHAPTER 2 — retention-acquisition
   CAC, churn, and the 1/7–1/10 retention rule — the
   cost-comparison machine.
   ============================================================ */

function RetentionMachine() {
  const [ratio, setRatio] = useState<7 | 10>(7);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <TrendingUp className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The cost-comparison machine</h3>
        <TChip>acquire 1 vs retain 1</TChip>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-[1.3fr,1fr]">
        <div>
          <div className="rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
            <div className="flex items-baseline justify-between">
              <span className="text-[.84rem] font-extrabold uppercase tracking-[.12em]" style={{ color: ROSE }}>Acquire a new customer — CAC</span>
              <span className="text-[.9rem] font-extrabold" style={{ color: ROSE }}>10 units</span>
            </div>
            <div className="mt-1.5 h-5 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
              <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(135deg,#c05a74,${ROSE})` }}
                initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
            </div>
            <p className="mt-1.5 text-[.78rem] leading-relaxed text-[#5f7472]">High investment — especially in an <strong>overcrowded market</strong> where every competitor is bidding for attention.</p>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-[.84rem] font-extrabold uppercase tracking-[.12em]" style={{ color: TEAL }}>Retain an existing one</span>
              <motion.span key={ratio} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-[.9rem] font-extrabold" style={{ color: TEAL }}>
                1 unit — 1/{ratio}th of CAC
              </motion.span>
            </div>
            <div className="mt-1.5 h-5 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
              <motion.div className="h-full rounded-full" style={{ background: TEAL_GRAD }}
                initial={{ width: 0 }} animate={{ width: `${100 / ratio}%` }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
            </div>
            <p className="mt-1.5 text-[.78rem] leading-relaxed text-[#5f7472]">Retention costs approximately <strong>one-seventh to one-tenth</strong> of acquisition costs.</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <MBtn onClick={() => setRatio(7)} active={ratio === 7} pressed={ratio === 7} label="Show retention at one-seventh of CAC">1/7th</MBtn>
            <MBtn onClick={() => setRatio(10)} active={ratio === 10} pressed={ratio === 10} label="Show retention at one-tenth of CAC">1/10th</MBtn>
          </div>
        </div>
        <div className="rounded-2xl p-5" style={{ background: LAGOON }}>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" style={{ color: GOLD_LITE }} aria-hidden />
            <p className="text-[.85rem] font-extrabold" style={{ color: GOLD_LITE }}>Churn — the leak in the bucket</p>
          </div>
          <p className="mt-2 text-[.85rem] leading-relaxed text-[#cfe9e2]">
            <strong style={{ color: "#e9f2ee" }}>Customer churn</strong>: consumers leave for competitors despite every
            rupee of acquisition effort spent on them. Every churned customer must be re-acquired — at 7–10× the cost
            of simply keeping them.
          </p>
          <p className="mt-3 text-[.85rem] leading-relaxed text-[#cfe9e2]">
            Focus on retention and the <strong style={{ color: GOLD_LITE }}>ROI beats constant acquisition</strong> —
            the same effort compounds instead of leaking.
          </p>
        </div>
      </div>
      <MLog>
        Comparison — acquire: 10 units · retain: {(10 / ratio).toFixed(1)} unit{ratio === 7 ? "s" : ""} (1/{ratio}th
        of CAC). Switch the dial to see the bar move; either way, retention wins.
      </MLog>
    </div>
  );
}

export function MktgRetentionSection() {
  return (
    <Section id="retention-acquisition">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 26"
        title={<>Retention vs <GSpan>acquisition</GSpan></>}
        lead="Acquisition is expensive and the market is overcrowded; churn keeps draining the funnel. Retention costs roughly a seventh to a tenth as much — the ROI case is not subtle."
      />
      <Reveal><RetentionMachine /></Reveal>
      <Reveal className="mt-6">
        <Callout kind="insight" title="The takeaway that outlives the spreadsheet">
          Organizations succeed by understanding that <strong>consumers don&apos;t purchase products — they purchase
          solutions to their needs and emotional satisfaction</strong>. Recognize perceptual product categories,
          leverage attributes, humanize the brand — and retention follows.
        </Callout>
      </Reveal>
      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>CAC is high</strong> in an overcrowded market — attention is the scarce resource.</>,
          <>Retention costs about <strong>1/7th to 1/10th of acquisition</strong> — the cheapest growth lever available.</>,
          <><strong>Churn</strong> — customers leaving for competitors — is the major organizational challenge.</>,
          <>Focus on retention: <strong>better ROI than constant acquisition</strong>.</>,
          <>Consumers purchase <strong>solutions and emotional satisfaction, not products</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 27 — abc-humanization
   The Attribute → Benefit → Characteristic chain machine,
   CEAT & Asian Paints, the Hutch pug, and the
   motivation → perception → attitude → decision sequence.
   ============================================================ */

const ABC_CASES: { brand: string; nodes: { t: string; d: string }[] }[] = [
  {
    brand: "CEAT",
    nodes: [
      { t: "Attribute", d: "Groove technology in the tire — the physical feature on the spec sheet." },
      { t: "Benefit", d: "Anti-skid properties — better traction, control and stability on the road." },
      { t: "Characteristic", d: "In the classic ad, a father's quick reaction and car control during an emergency reinforce safety and protection for loved ones. CEAT becomes family safety — the love bucket, not the utilitarian one." },
    ],
  },
  {
    brand: "Asian Paints",
    nodes: [
      { t: "Attribute", d: "Paint colours and finishes — thousands of shades on the shelf." },
      { t: "Benefit", d: "Personalized spaces that enable self-expression and create unique environments." },
      { t: "Characteristic", d: "\u201CHar Ghar Kuch Kehta Hai\u201D — belongingness, self-expression, memories and identity. Relatable families instead of celebrities let consumers see themselves in the stories." },
    ],
  },
];

function AbcChainMachine() {
  const [caseIdx, setCaseIdx] = useState(0);
  const p = useStepPlayer(3, 1700);
  const cur = ABC_CASES[caseIdx].nodes[p.i];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Car className="h-6 w-6" style={{ color: TEAL }} aria-hidden />
        <h3 className="text-xl font-bold text-[#12312e] md:text-2xl">The A → B → C chain machine</h3>
        <div className="ml-auto flex gap-2">
          {ABC_CASES.map((c, k) => (
            <MBtn key={c.brand} onClick={() => { setCaseIdx(k); p.reset(); }} active={caseIdx === k} pressed={caseIdx === k} label={`Run the ABC chain for ${c.brand}`}>
              {c.brand}
            </MBtn>
          ))}
        </div>
      </div>
      <div className="mt-5 rounded-2xl p-4" style={{ background: LAGOON }}>
        <svg viewBox="0 0 760 150" className="h-auto w-full" role="img"
          aria-label={`${ABC_CASES[caseIdx].brand} ABC chain, step ${p.i + 1} of 3: ${cur.t} — ${cur.d}`}>
          {[120, 380, 640].map((x, k) => {
            const on = k <= p.i;
            return (
              <g key={k}>
                {k < 2 ? <line x1={x + 64} y1="66" x2={[380, 640][k] - 70} y2="66" stroke="#3f615c" strokeWidth="2.5" /> : null}
                <motion.rect x={x - 64} y="30" width="128" height="72" rx="16"
                  fill={on ? "#155e57" : "#122e2b"} stroke={k === p.i ? GOLD_LITE : on ? TEAL_BRIGHT : "#3f615c"}
                  strokeWidth={k === p.i ? 3 : 2}
                  animate={{ scale: k === p.i ? 1.06 : 1 }} style={{ originX: "50%", originY: "50%" }} />
                <text x={x} y="60" textAnchor="middle" fontSize="11" fontWeight="800" fill={on ? GOLD_LITE : "#7ea49d"}>{"ABC"[k]}</text>
                <text x={x} y="82" textAnchor="middle" fontSize="12.5" fontWeight="800" fill={on ? "#d8f3ec" : "#7ea49d"}>
                  {["Attribute", "Benefit", "Characteristic"][k]}
                </text>
                <motion.g animate={{ x: [120, 380, 640][p.i], y: 66 }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
                  <circle cx="0" cy="0" r="8" fill={GOLD_LITE} stroke="#a97d2c" strokeWidth="2" />
                </motion.g>
              </g>
            );
          })}
          <text x="380" y="134" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#7ea49d">
            connect all three and the brand stops selling a product — it sells emotions and values
          </text>
        </svg>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <PlayerBtns p={p} name={`ABC chain (${ABC_CASES[caseIdx].brand})`} />
        <Pips n={3} i={p.i} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={`${caseIdx}-${p.i}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.26 }}
          className="mt-4 rounded-2xl p-5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: GOLD }}>
            {ABC_CASES[caseIdx].brand} · step {p.i + 1} of 3
          </p>
          <p className="mt-1 text-lg font-bold" style={{ color: TEAL }}>{cur.t}</p>
          <p className="mt-1.5 text-[.9rem] leading-relaxed text-[#3a4a48]">{cur.d}</p>
        </motion.div>
      </AnimatePresence>
      <MLog>Chain status — {ABC_CASES[caseIdx].brand}: {["A", "B", "C"][p.i]} · {cur.t}</MLog>
    </div>
  );
}

export function MktgAbcSection() {
  return (
    <Section id="abc-humanization">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 27"
        title={<>The ABC model of <GSpan>brand humanization</GSpan></>}
        lead="Attribute → Benefit → Characteristic: physical features, the advantages they buy, and the human values they carry. CEAT, Asian Paints and a pug show how brands stop selling products and start selling meaning."
      />
      <ReadStep n="1" title="Walk the chain" sub="two brands, the same three steps from spec sheet to human value" />
      <Reveal><AbcChainMachine /></Reveal>

      <ReadStep n="2" title="Love bucket vs utilitarian bucket" sub="why the humanized approach compounds loyalty" />
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <Reveal>
          <div className="card-warm h-full p-5">
            <TChip>utilitarian — transactional</TChip>
            <ul className="mt-3 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]">
              <li>• Focuses on product quality, performance, value for money</li>
              <li>• Every competitor can offer similar features</li>
              <li>• Easily replaceable — subject to consumer churn</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="card-warm h-full p-5" style={{ borderColor: "rgba(15,118,110,.4)" }}>
            <TChip>love bucket — relational</TChip>
            <ul className="mt-3 space-y-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]">
              <li>• Incorporates emotional and human elements</li>
              <li>• Creates deeper consumer connections</li>
              <li>• Positive word-of-mouth and favorable attitudes</li>
              <li>• Reduces churn — loyalty beyond functional benefits</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Callout kind="story" title="Anthropomorphism — the Hutch pug">
          Humanizing a brand — <strong>anthropomorphism</strong> — means relating human-like traits to products and
          using living elements (humans, animals) to create emotional connection. The <strong>Hutch pug</strong>{" "}
          advertisement outperformed many celebrity-endorsed campaigns: the dog followed the boy everywhere, and the
          network &quot;followed you too&quot; — no superstar required.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="The full sequence" sub="where humanization plugs into consumer behavior" />
      <Reveal>
        <StepsFlow
          steps={[
            { icon: <Zap className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Motivation", sub: "the drive that initiates the purchase decision" },
            { icon: <Eye className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Perception", sub: "interpretation of product attributes and features" },
            { icon: <Scale className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Attitude", sub: "favorable / unfavorable — f(object, attributes)" },
            { icon: <Package className="h-5 w-5 shrink-0" style={{ color: TEAL }} aria-hidden />, label: "Decision", sub: "the final choice, influenced by attitude toward the brand" },
          ]}
        />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>A → B → C</strong>: attributes (tire grooves, paint colors) → benefits (anti-skid traction, personalized spaces) → characteristics (safety, belongingness, self-expression).</>,
          <><strong>CEAT</strong>: groove tech → anti-skid → a father protecting his family → the love bucket.</>,
          <><strong>Asian Paints</strong>: &quot;Har Ghar Kuch Kehta Hai&quot; — belongingness, self-expression, memories, identity; relatable families, not celebrities.</>,
          <><strong>Anthropomorphism</strong> works: Hutch&apos;s pug beat celebrity campaigns.</>,
          <>Humanization influences <strong>motivation → perception → attitude → decision</strong> — and builds long-term preference.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 28 — bias-lab
   Conscious vs unconscious biases, then four live demos:
   anchoring · bandwagon · scarcity · endowment.
   ============================================================ */

const PHONES = ["Phone A", "Phone B", "Phone C"];

function AnchorCard() {
  const dims = ["Price", "Ratings", "Delivery"] as const;
  const [anchor, setAnchor] = useState<(typeof dims)[number] | null>(null);
  return (
    <div className="card-warm p-5">
      <div className="flex items-center gap-2">
        <Anchor className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
        <h4 className="text-lg font-bold text-[#12312e]">Anchoring</h4>
      </div>
      <p className="mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]">
        Attention anchors on one element — and everything else is excluded. In smartphone comparisons consumers anchor
        on <strong>price, ratings or delivery speed</strong>.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {dims.map((d) => (
          <MBtn key={d} onClick={() => setAnchor(d)} active={anchor === d} pressed={anchor === d} label={`Anchor the comparison on ${d}`}>
            {d}
          </MBtn>
        ))}
        {anchor ? (
          <MBtn onClick={() => setAnchor(null)} label="Clear the anchor"><RotateCcw className="mr-1 inline h-3.5 w-3.5" aria-hidden /></MBtn>
        ) : null}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {PHONES.map((ph) => (
          <div key={ph} className="rounded-xl p-2.5" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
            <p className="text-[.72rem] font-extrabold" style={{ color: INK }}>{ph}</p>
            {dims.map((d) => (
              <motion.div key={d} animate={{ opacity: anchor === null ? 1 : anchor === d ? 1 : 0.18 }} className="mt-1.5">
                <p className="text-[.62rem] font-bold uppercase tracking-wide" style={{ color: anchor === d ? TEAL : MUTED }}>{d}</p>
                <div className="mt-0.5 h-1.5 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
                  <div className="h-full rounded-full" style={{ width: `${d === "Price" ? 60 + ph.length * 6 : d === "Ratings" ? 74 + ph.length * 2 : 48 + ph.length * 7}%`, background: anchor === d ? TEAL_GRAD : "#b9c6c1" }} />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <MLog>
        {anchor
          ? `Anchored on ${anchor} — the other information is excluded, and the decision moves to its next stage on this element alone.`
          : "Pick an anchor — price, ratings or delivery — and watch the rest of the comparison fade."}
      </MLog>
      <div className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(169,125,44,.08)", border: "1px solid rgba(169,125,44,.28)" }}>
        <BadgePercent className="h-4 w-4 shrink-0" style={{ color: GOLD }} aria-hidden />
        <p className="text-[.78rem] font-bold leading-relaxed" style={{ color: INK }}>
          Zoom highlights <span style={{ color: GOLD }}>&ldquo;Save 16%&rdquo;</span> when switching from monthly to
          annual billing — anchoring you to the longer commitment.
        </p>
      </div>
    </div>
  );
}

function BandwagonCard() {
  const [lens, setLens] = useState<"herd" | "excl">("herd");
  const herd = lens === "herd";
  return (
    <div className="card-warm p-5">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
        <h4 className="text-lg font-bold text-[#12312e]">Bandwagon effect</h4>
      </div>
      <p className="mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]">
        If others are doing it, it must be valuable — the more people use something, the more credible it appears.
        Course platforms show <strong>&ldquo;15,000 people learning on edX today.&rdquo;</strong>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <motion.div animate={{ scale: herd ? 1.03 : 1 }} className="rounded-xl p-3"
          style={{ background: herd ? "rgba(15,118,110,.08)" : CREAM, border: `1.5px solid ${herd ? TEAL : CREAM_BORDER}` }}>
          <p className="text-[.8rem] font-extrabold" style={{ color: INK }}>Hotel A</p>
          <p className="text-[.95rem] font-extrabold" style={{ color: TEAL }}>1,157 reviews · 8.5</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
            <motion.div className="h-full rounded-full" style={{ background: TEAL_GRAD }} animate={{ width: herd ? "88%" : "84%" }} />
          </div>
          <p className="mt-1 text-[.68rem] font-bold" style={{ color: MUTED }}>credibility reads high</p>
        </motion.div>
        <motion.div animate={{ scale: herd ? 1 : 1.03 }} className="rounded-xl p-3"
          style={{ background: !herd ? "rgba(169,125,44,.08)" : CREAM, border: `1.5px solid ${!herd ? GOLD : CREAM_BORDER}` }}>
          <p className="text-[.8rem] font-extrabold" style={{ color: INK }}>Hotel B</p>
          <p className="text-[.95rem] font-extrabold" style={{ color: GOLD }}>281 reviews · 8.1</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
            <motion.div className="h-full rounded-full" style={{ background: GOLD_GRAD }} animate={{ width: herd ? "70%" : "88%" }} />
          </div>
          <p className="mt-1 text-[.68rem] font-bold" style={{ color: MUTED }}>{herd ? "fewer voices, less proof" : "less crowding, more exclusivity"}</p>
        </motion.div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <MBtn onClick={() => setLens("herd")} active={herd} pressed={herd} label="View through the herd lens">Herd lens</MBtn>
        <MBtn onClick={() => setLens("excl")} active={!herd} pressed={!herd} label="View through the exclusivity lens">Exclusivity lens</MBtn>
      </div>
      <MLog>
        {herd
          ? "Theory view: 1,157 reviews at 8.5 look more credible than 281 reviews at 8.1 — the herd validates."
          : "Practice view: some consumers prefer FEWER reviews — it signals less crowding and more exclusivity."}
      </MLog>
    </div>
  );
}

function ScarcityCard() {
  const [scarce, setScarce] = useState(true);
  return (
    <div className="card-warm p-5">
      <div className="flex items-center gap-2">
        <Hourglass className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
        <h4 className="text-lg font-bold text-[#12312e]">Scarcity effect</h4>
      </div>
      <p className="mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]">
        A product about to run out is valued more than one in abundance. The same room, the same price — the message
        changes the willingness to purchase.
      </p>
      <div className="mt-4 rounded-xl p-4" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
        <p className="text-[.8rem] font-extrabold" style={{ color: INK }}>Hotel booking — same property, same price</p>
        <motion.p key={String(scarce)} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[1rem] font-extrabold" style={{ color: scarce ? ROSE : TEAL }}>
          {scarce ? "\u201COnly 6 rooms left at this price\u201D" : "\u201CPlenty of rooms available at this price\u201D"}
        </motion.p>
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[.7rem] font-bold uppercase tracking-wide" style={{ color: MUTED }}>willingness to book now</span>
        </div>
        <div className="mt-1 h-3.5 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
          <motion.div className="h-full rounded-full" style={{ background: scarce ? `linear-gradient(135deg,#c05a74,${ROSE})` : TEAL_GRAD }}
            animate={{ width: scarce ? "90%" : "34%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
        </div>
        <p className="mt-2 text-[.78rem] font-bold leading-relaxed" aria-live="polite" style={{ color: scarce ? ROSE : TEAL }}>
          {scarce
            ? "Scarcity communicated → higher willingness to purchase — the decision accelerates."
            : "Abundance communicated → the consumer compares across platforms, prices and reviews before deciding."}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <MBtn onClick={() => setScarce(true)} active={scarce} pressed={scarce} label="Show the scarcity message">Scarcity message</MBtn>
        <MBtn onClick={() => setScarce(false)} active={!scarce} pressed={!scarce} label="Show the abundance message">Abundance message</MBtn>
      </div>
      <MLog>
        H&amp;M shows &ldquo;Few pieces left&rdquo; in checkout carts to prompt immediate purchase — and the inventory
        often quietly replenishes after 24 hours. The effect diminishes once alternatives exist (a different travel
        destination works just as well).
      </MLog>
    </div>
  );
}

function EndowmentCard() {
  const [owned, setOwned] = useState(true);
  return (
    <div className="card-warm p-5">
      <div className="flex items-center gap-2">
        <IndianRupee className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
        <h4 className="text-lg font-bold text-[#12312e]">Endowment effect</h4>
      </div>
      <p className="mt-2 text-[.85rem] leading-relaxed text-[#3a4a48]">
        Ownership creates emotional attachment. The same ₹20,000 phone is priced differently depending on whose hands
        it is in — a ~50% gap showed up in classroom activities.
      </p>
      <div className="mt-4 rounded-xl p-4" style={{ background: CREAM, border: `1px solid ${CREAM_BORDER}` }}>
        <p className="text-[.8rem] font-extrabold" style={{ color: INK }}>One phone. ₹20,000 new. {owned ? "You own it." : "You're browsing."}</p>
        <div className="mt-3 space-y-3">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-[.78rem] font-bold" style={{ color: INK }}>You would SELL it for</span>
              <span className="text-[.85rem] font-extrabold" style={{ color: TEAL }}>₹15,000–18,000</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
              <motion.div className="h-full rounded-full" style={{ background: TEAL_GRAD }}
                animate={{ width: owned ? "84%" : "55%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-[.78rem] font-bold" style={{ color: INK }}>You would BUY one for</span>
              <span className="text-[.85rem] font-extrabold" style={{ color: ROSE }}>₹7,000–10,000</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full" style={{ background: "#e8e2d2" }}>
              <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(135deg,#c05a74,${ROSE})` }}
                animate={{ width: owned ? "42%" : "30%" }} transition={{ type: "spring", stiffness: 120, damping: 20 }} />
            </div>
          </div>
        </div>
        <p className="mt-2 text-[.72rem] font-bold" style={{ color: GOLD }}>≈ 50% gap between selling and buying prices — for the identical phone.</p>
      </div>
      <div className="mt-3">
        <MBtn onClick={() => setOwned((v) => !v)} label="Toggle ownership of the phone">
          {owned ? "Put it down — just browsing" : "Take it — now you own it"}
        </MBtn>
      </div>
      <MLog>
        {owned
          ? "Owning it: you demand 15,000–18,000 to sell, but would only offer 7,000–10,000 to buy the same phone. Ownership inflates value."
          : "Just browsing: the premium shrinks — attachment, not features, was doing the pricing."}
      </MLog>
      <div className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2" style={{ background: "rgba(15,118,110,.07)", border: "1px solid rgba(15,118,110,.25)" }}>
        <Coffee className="h-4 w-4 shrink-0" style={{ color: TEAL }} aria-hidden />
        <p className="text-[.78rem] font-bold leading-relaxed" style={{ color: INK }}>
          Starbucks writes your name on the cup and calls it out — a tiny act of ownership that raises perceived value
          and loyalty.
        </p>
      </div>
    </div>
  );
}

export function MktgBiasSection() {
  return (
    <Section id="bias-lab">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 28"
        title={<>The <GSpan>bias lab</GSpan></>}
        lead="Cognitive biases are systematic errors in judgment that run at an unconscious level — mental shortcuts that help consumers navigate complex choices, and the exact levers marketers build on."
      />
      <ReadStep n="1" title="Conscious vs unconscious" sub="two very different kinds of bias" />
      <div className="grid gap-3 md:grid-cols-2">
        <Reveal>
          <KV k="Conscious biases" v="Stereotypes developed through social conditioning, environmental influences, and how the people around us think." />
        </Reveal>
        <Reveal delay={80}>
          <KV k="Unconscious biases" v="Cognitive biases operating at a subconscious level — unintentional judgment errors that misinterpret information and shape consumer behavior." />
        </Reveal>
      </div>
      <Reveal className="mt-4">
        <Callout kind="warn" title="The Benetton controversy — conscious bias on display">
          The lecture&apos;s example of conscious stereotyping: in the Benetton advertisement controversy, consumers
          stereotypically associated <strong>darker-skinned individuals with criminals</strong> and{" "}
          <strong>lighter-skinned individuals with authority figures</strong> — bias shaped by social conditioning,
          not by the ad&apos;s intent.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Four biases, four live demos" sub="anchoring · bandwagon · scarcity · endowment — poke each one" />
      <div className="grid gap-5 xl:grid-cols-2">
        <Reveal><AnchorCard /></Reveal>
        <Reveal delay={80}><BandwagonCard /></Reveal>
        <Reveal><ScarcityCard /></Reveal>
        <Reveal delay={80}><EndowmentCard /></Reveal>
      </div>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Cognitive biases are <strong>subconscious errors in thinking</strong> that lead to judgment errors in decisions.</>,
          <>They function as <strong>mental shortcuts (heuristics)</strong> — useful, but they often produce irrational purchases.</>,
          <>Marketers deliberately use them: <strong>anchoring</strong> (Save 16%), <strong>bandwagon</strong> (15,000 learning), <strong>scarcity</strong> (only 6 rooms left), <strong>personalization</strong> (your name on the cup).</>,
          <>Scarcity messaging nudges <strong>low-involvement</strong> purchases — and the stock often replenishes after 24 hours.</>,
          <>Biases are not always bad — but recognizing them makes consumers <strong>more deliberate</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}
