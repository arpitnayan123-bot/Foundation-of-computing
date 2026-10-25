"use client";

/* ============================================================
   MKTG — "Principles of Marketing" · shelf 06 of THE ATLAS
   FILE 3 — Lectures 13–19 (13 chapters)
   L13 Tupo case · L14 SAFE + positioning's 3 questions ·
   L15 Accor map + frames/POPs/PODs · L16 four levels + POD→POP
   evolution · L17 three circles + case files · L18 why people
   buy + eras & nudges · L19 five stages + the messy middle.
   ============================================================ */

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle, Baby, Brain, Brush, Car, CreditCard, CupSoda, Droplets, Eye, Filter,
  FlaskConical, Gem, Hand, Heart, HeartHandshake, History, Hotel, IndianRupee, Infinity as InfinityIcon,
  Layers, Leaf, Lightbulb, MapPin, Pause, Play, RotateCcw, Scale, Search, ShoppingCart, ShieldCheck, Sofa,
  Target, Timer, User, Users, ZoomIn,
} from "lucide-react";
import {
  Callout, KV, Quiz, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   SHARED HELPERS — teal & champagne machine kit
   ============================================================ */

function Grad({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        backgroundImage: "linear-gradient(115deg,#14b8a6 0%,#0f766e 48%,#a97d2c 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}

function MBtn({ onClick, children, tone = "ghost", ariaLabel, disabled = false }: {
  onClick: () => void;
  children: React.ReactNode;
  tone?: "teal" | "gold" | "ghost";
  ariaLabel?: string;
  disabled?: boolean;
}) {
  const style: React.CSSProperties =
    tone === "teal"
      ? { background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f4fbf9" }
      : tone === "gold"
      ? { background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#fffaf0" }
      : { background: "#ffffff", color: "#0f766e", border: "1px solid #c8e2dc" };
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
      disabled={disabled}
      className="inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[.8rem] font-bold shadow-sm transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
    >
      {children}
    </button>
  );
}

function Status({ children, tone = "teal" }: { children: React.ReactNode; tone?: "teal" | "gold" | "rose" }) {
  const c =
    tone === "rose"
      ? { bg: "#f7ecec", bd: "#dcc3c9", tx: "#9f3d54" }
      : tone === "gold"
      ? { bg: "#f7f1e0", bd: "#ddcda2", tx: "#8a6420" }
      : { bg: "#edf6f4", bd: "#c2ded8", tx: "#0f766e" };
  return (
    <p
      aria-live="polite"
      className="mt-4 min-h-[2.4rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold leading-relaxed"
      style={{ background: c.bg, border: `1px dashed ${c.bd}`, color: c.tx }}
    >
      {children}
    </p>
  );
}

function DarkPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-5 md:p-7 ${className}`}
      style={{
        background: "linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)",
        border: "1px solid rgba(227,194,107,.22)",
      }}
    >
      {children}
    </div>
  );
}

/** Step-player state: Play auto-advances, Next steps manually, Reset rewinds. */
function useStepPlayer(total: number, ms = 2200) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (!playing) return;
    if (step >= total - 1) {
      const t = window.setTimeout(() => setPlaying(false), 0);
      return () => window.clearTimeout(t);
    }
    const id = window.setInterval(() => setStep((s) => Math.min(s + 1, total - 1)), ms);
    return () => window.clearInterval(id);
  }, [playing, step, total, ms]);
  const next = () => setStep((s) => Math.min(s + 1, total - 1));
  const reset = () => {
    setPlaying(false);
    setStep(0);
  };
  const toggle = () => {
    if (!playing && step >= total - 1) setStep(0);
    setPlaying(!playing);
  };
  return { step, setStep, next, reset, playing, toggle };
}

function PlayerControls({ step, total, playing, onToggle, onNext, onReset, labels }: {
  step: number;
  total: number;
  playing: boolean;
  onToggle: () => void;
  onNext: () => void;
  onReset: () => void;
  labels?: string[];
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <MBtn tone="teal" onClick={onToggle} ariaLabel={playing ? "Pause the player" : "Play the player"}>
        {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
        {playing ? "Pause" : "Play"}
      </MBtn>
      <MBtn tone="gold" onClick={onNext} ariaLabel="Next step" disabled={step >= total - 1}>
        Next
      </MBtn>
      <MBtn onClick={onReset} ariaLabel="Reset the player">
        <RotateCcw className="h-4 w-4" aria-hidden />
        Reset
      </MBtn>
      <span className="ml-1 flex items-center gap-1.5" aria-hidden>
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full transition-colors duration-300"
            style={{ background: i <= step ? "#0f766e" : "#d5e6e1" }}
          />
        ))}
      </span>
      <span className="font-mono-warm text-[.75rem] font-bold text-[#5f7472]">
        {labels ? labels[step] : `step ${step + 1}/${total}`}
      </span>
    </div>
  );
}

const proseCls = "max-w-3xl text-[.95rem] leading-relaxed text-[#3a4a48]";

/* ============================================================
   L13 · TUPO CASE (tupo-case)
   ============================================================ */

function TupoGapMachine() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Baby className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The age map — find the hole</h3>
        <span className="chip">Lecture 13 · segmentation in the wild</span>
      </div>
      <svg viewBox="0 0 640 200" className="mt-4 h-auto w-full" role="img"
        aria-label="Age axis from 0 to 20 with baby products for 0 to 2, adult and family products for 16 plus, and the 3 to 15 gap glowing once revealed">
        {/* axis */}
        <motion.line x1="40" y1="150" x2="600" y2="150" stroke="#5f7472" strokeWidth="2" opacity={1}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
        <path d="M600 150 L590 144 L590 156 Z" fill="#5f7472" />
        {/* baby zone */}
        <rect x="40" y="118" width="90" height="32" rx="8" fill="#0f766e" opacity={0.28} />
        <text x="85" y="139" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0f766e">0–2 · baby</text>
        {/* adult zone */}
        <rect x="490" y="118" width="100" height="32" rx="8" fill="#a97d2c" opacity={0.3} />
        <text x="540" y="139" textAnchor="middle" fontSize="12" fontWeight="800" fill="#a97d2c">16+ · adult &amp; family</text>
        {/* the 3–15 zone */}
        <motion.rect x="150" y="108" width="320" height="52" rx="10" fill="#e3c26b" stroke="#a97d2c" strokeWidth="2"
          opacity={revealed ? 0.55 : 0.12} animate={{ opacity: revealed ? 0.55 : 0.12 }} />
        <motion.text x="310" y="128" textAnchor="middle" fontSize="14" fontWeight="800" fill="#a97d2c"
          opacity={revealed ? 1 : 0} animate={{ opacity: revealed ? 1 : 0 }}>
          3–15 · the gap Tupo claimed
        </motion.text>
        <motion.text x="310" y="176" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#5f7472"
          opacity={revealed ? 1 : 0} animate={{ opacity: revealed ? 1 : 0 }}>
          “too old for baby products but too young for adult products”
        </motion.text>
        <motion.text x="310" y="98" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#9f3d54"
          opacity={revealed ? 0 : 1} animate={{ opacity: revealed ? 0 : 1 }}>
          nobody&apos;s products — a market served by no one
        </motion.text>
        {/* ticks */}
        {["0", "2", "3", "15", "16", "20"].map((t, i) => (
          <g key={t}>
            <line x1={40 + i * 100} y1="150" x2={40 + i * 100} y2="158" stroke="#5f7472" strokeWidth="1.6" />
            <text x={40 + i * 100} y="172" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#5f7472">{t}</text>
          </g>
        ))}
        <text x="320" y="194" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#5f7472">age →</text>
      </svg>
      <div className="mt-2 flex flex-wrap gap-2">
        <MBtn tone={revealed ? "ghost" : "teal"} onClick={() => setRevealed(false)} ariaLabel="Show the market before Tupo">
          Before Tupo
        </MBtn>
        <MBtn tone={revealed ? "teal" : "gold"} onClick={() => setRevealed(true)} ariaLabel="Reveal the 3 to 15 gap">
          Reveal the 3–15 gap
        </MBtn>
      </div>
      <Status>
        {revealed
          ? "Tupo identified and filled a previously overlooked gap for children aged 3–15 — a heterogeneous market divided into just two categories until then."
          : "Traditional personal care markets had only two shelves: baby (0–2) and adult & family (16+). Press reveal to see what Tupo saw."}
      </Status>
    </div>
  );
}

function TupoCasePlayer() {
  const { step, next, reset, playing, toggle } = useStepPlayer(6, 2600);
  const beats = [
    {
      t: "The overlooked middle",
      d: "Traditional personal care split into baby products (0–2) and adult & family products (16+). Children aged 3–15 fell between the shelves — too old for baby products, too young for adult products.",
      v: "gap",
    },
    {
      t: "Two lenses on one segment",
      d: "Demographic: age 3–15, growing children, early childhood through adolescence. Psychographic: belief in age-appropriate products, preference for natural & organic ingredients, desire for gentle non-harsh formulations that prevent skin irritation and infections.",
      v: "lenses",
    },
    {
      t: "Dual targeting",
      d: "Children are the preference-makers — increasingly developing their own desire for personal products. Parents are the purchasers — primary decision-makers who prioritise safety and well-being over price.",
      v: "doors",
    },
    {
      t: "Dadi-nani positioning",
      d: "Ingredients from traditional home remedies — turmeric, hibiscus, amla, shikakai. Not marketed as “organic” or “natural”, but as remedies recommended by grandparents — dadi and nani — creating emotional connection and trust.",
      v: "ingredients",
    },
    {
      t: "Premium pricing, willingly paid",
      d: "Standard market price for 300ML shampoo: ₹150. Tupo's price for the same volume: ₹450. Premium justified by age-appropriate formulation and ingredient quality — parents pay for child health and safety.",
      v: "price",
    },
    {
      t: "What the niche became",
      d: "Niche market creation · dual targeting · product expansion into face wash and makeup for growing children · brand ambassadorship with Farah Khan, aligned with brand values. Daughters actively request Tupo shampoo with shikakai.",
      v: "growth",
    },
  ];
  const v = beats[step].v;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Target className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The Tupo case player</h3>
        <span className="chip">six beats of a niche, end to end</span>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr,1.15fr]">
        <div className="rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf", minHeight: "220px" }}>
          <AnimatePresence mode="wait">
            <motion.div key={v} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }}>
              {v === "gap" ? (
                <div className="grid gap-3">
                  <div className="rounded-xl px-4 py-3 font-bold text-white" style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)" }}>Baby products · 0–2 years</div>
                  <div className="rounded-xl border-2 border-dashed px-4 py-3 text-center font-bold" style={{ borderColor: "#a97d2c", color: "#a97d2c", background: "rgba(227,194,107,.14)" }}>
                    3–15 · nobody home
                  </div>
                  <div className="rounded-xl px-4 py-3 font-bold text-white" style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)" }}>Adult &amp; family · 16+ years</div>
                </div>
              ) : null}
              {v === "lenses" ? (
                <div className="grid gap-3">
                  <div className="rounded-xl bg-white p-3" style={{ border: "1px solid #cfe3de" }}>
                    <p className="text-[.72rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#0f766e" }}>Demographic</p>
                    <p className="mt-1 text-[.88rem] font-semibold text-[#1f2b2b]">Age 3–15 · growing children · early childhood → adolescence</p>
                  </div>
                  <div className="rounded-xl bg-white p-3" style={{ border: "1px solid #e0d3ae" }}>
                    <p className="text-[.72rem] font-extrabold uppercase tracking-[.14em]" style={{ color: "#a97d2c" }}>Psychographic</p>
                    <p className="mt-1 text-[.88rem] font-semibold text-[#1f2b2b]">Age-appropriate beliefs · natural &amp; organic preference · gentle, non-harsh formulations</p>
                  </div>
                </div>
              ) : null}
              {v === "doors" ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f4fbf9" }}>
                    <Users className="mx-auto h-6 w-6" aria-hidden />
                    <p className="mt-1 text-[.85rem] font-extrabold">Children 3–15</p>
                    <p className="text-[.74rem] font-semibold opacity-90">preference-makers</p>
                  </div>
                  <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#fffaf0" }}>
                    <IndianRupee className="mx-auto h-6 w-6" aria-hidden />
                    <p className="mt-1 text-[.85rem] font-extrabold">Parents</p>
                    <p className="text-[.74rem] font-semibold opacity-90">purchasers · safety over price</p>
                  </div>
                  <p className="col-span-2 rounded-xl bg-white px-3 py-2 text-center text-[.78rem] font-bold text-[#5f7472]" style={{ border: "1px dashed #cfe3de" }}>
                    one brand, two doors — both must open
                  </p>
                </div>
              ) : null}
              {v === "ingredients" ? (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {["Turmeric", "Hibiscus", "Amla", "Shikakai"].map((ing) => (
                      <span key={ing} className="rounded-full px-3 py-1.5 text-[.8rem] font-extrabold" style={{ background: "#0f766e", color: "#eefaf6" }}>
                        <Leaf className="mr-1 inline h-3.5 w-3.5" aria-hidden />{ing}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 rounded-xl px-4 py-3 text-center font-bold" style={{ background: "rgba(227,194,107,.2)", border: "1px solid #e0d3ae", color: "#8a6420" }}>
                    positioned as dadi &amp; nani ke nuske — trust over labels
                  </div>
                </div>
              ) : null}
              {v === "price" ? (
                <div className="grid gap-3">
                  <div>
                    <p className="text-[.78rem] font-bold text-[#5f7472]">Market standard · 300ML</p>
                    <div className="mt-1 h-8 rounded-lg" style={{ background: "#cfe3de", width: "33%" }}>
                      <span className="ml-2 leading-[2rem] font-extrabold text-[#0f766e]">₹150</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[.78rem] font-bold text-[#5f7472]">Tupo · same 300ML</p>
                    <motion.div className="h-8 rounded-lg" style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", width: "100%" }}
                      initial={{ width: "33%" }} animate={{ width: "100%" }} transition={{ duration: 0.7, ease: "easeInOut" }}>
                      <span className="ml-2 leading-[2rem] font-extrabold text-[#fffaf0]">₹450</span>
                    </motion.div>
                  </div>
                  <p className="text-[.74rem] font-bold text-[#5f7472]">3× the price — paid without flinching when safety is the benefit</p>
                </div>
              ) : null}
              {v === "growth" ? (
                <div className="flex flex-wrap gap-2">
                  {["Niche creation", "Dual targeting", "Face wash line", "Makeup line", "Farah Khan ambassador"].map((chip) => (
                    <span key={chip} className="chip">{chip}</span>
                  ))}
                  <p className="mt-2 w-full rounded-xl bg-white px-3 py-2 text-[.8rem] font-bold text-[#1f2b2b]" style={{ border: "1px solid #e3ddcf" }}>
                    “Mummy, the one with shikakai.” — children advocate brands by name
                  </p>
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
        <div>
          <PlayerControls step={step} total={6} playing={playing} onToggle={toggle} onNext={next} onReset={reset}
            labels={beats.map((b, i) => `beat ${i + 1}/6`)} />
          <p className="mt-4 text-[.95rem] leading-relaxed text-[#3a4a48]">
            <strong className="text-[#0f766e]">{step + 1}. {beats[step].t}.</strong> {beats[step].d}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MktgTupoSection() {
  return (
    <Section id="tupo-case">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 13"
        title={<>Tupo and the <Grad>3–15 gap</Grad> nobody served</>}
        lead="Segmentation and targeting in the real world: a personal-care brand for growing children — too old for baby products, too young for adult products — and the parents who still control the wallet."
      />

      <ReadStep n="1" title="A market with only two shelves" sub="Homogeneous division, heterogeneous reality" />
      <Reveal>
        <p className={proseCls}>
          Market segmentation divides a homogeneous market into heterogeneous groups with similar characteristics.
          Traditional personal care was divided into just two categories — <strong>baby products (0–2 years)</strong> and{" "}
          <strong>adult &amp; family products (16+ years)</strong>. Tupo identified and filled the previously overlooked
          gap in between: children aged 3–15 who were <em>“too old for baby products but too young for adult products.”</em>
        </p>
      </Reveal>
      <Reveal className="mt-5"><TupoGapMachine /></Reveal>

      <ReadStep n="2" title="Segmentation, then dual targeting" sub="Demographic + psychographic; preference-makers + purchasers" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Demographic" v="Age 3–15 years (growing children) · life stage: early childhood through adolescence" />
          <KV k="Psychographic" v="Age-appropriate product beliefs · natural & organic preference · gentle, non-harsh formulations that prevent skin irritation and infections" />
        </div>
      </Reveal>
      <Reveal className="mt-3">
        <Callout kind="insight" title="The key insight — quoted">
          “Children are old enough to have preferences, but young enough that parents still control the wallet and
          strongly care about their safety.” Children become the <strong>preference-makers</strong>; parents remain the{" "}
          <strong>purchasers</strong> — safety and well-being outrank price.
        </Callout>
      </Reveal>
      <Reveal className="mt-5"><TupoCasePlayer /></Reveal>

      <ReadStep n="3" title="Behaviour shifts the decision pattern" sub="Children advocate; parents fund" />
      <Reveal>
        <ul className={`${proseCls} grid gap-2`}>
          <li>• Children now have distinct preferences rather than simply using parental products.</li>
          <li>• They actively advocate for specific brands — the lecture&apos;s example: <strong>daughters requesting Tupo shampoo with shikakai</strong>.</li>
          <li>• Parents value age-appropriate formulations over cost savings.</li>
        </ul>
      </Reveal>

      <ReadStep n="4" title="Lessons & the company it keeps" sub="What the case teaches — and who else plays this game" />
      <Reveal>
        <div className="card-warm p-5">
          <div className="flex flex-wrap gap-2">
            {["Cetaphil", "Bioderma", "Plum", "Juicy Chemistry", "Mama Earth"].map((b) => (
              <span key={b} className="chip">{b}</span>
            ))}
          </div>
          <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
            Brands employing similar niche-segmentation strategies — each identified an underserved segment and created a
            specialised product category.
          </p>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <Callout kind="story" title="Real-world marketing lessons">
          Live through the problem to identify genuine market gaps · understand evolving preferences and generational
          differences · create authentic value propositions from genuine needs · balance consumer preference with
          purchasing-power dynamics · and charge premium prices when clear value differentiation exists.
        </Callout>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 13 · concept check"
            q="Tupo charges ₹450 for a 300ML shampoo against a market standard of ₹150. The lecture justifies this premium by…"
            options={["mass-production economies of scale", "age-appropriate formulation and ingredient quality parents value for safety", "heavy discounting to build trial", "spending more on celebrity advertising alone"]}
            answer={1}
            explain="Premium positioning is justified by age-appropriate formulation and ingredient quality — parents demonstrated willingness to pay premium prices for child health and safety." />
        </Reveal>
        <Reveal delay={100}>
          <Takeaways items={[
            <>A gap between two served shelves — 0–2 and 16+ — left <strong>3–15 unserved</strong>; niches hide in plain sight.</>,
            <>Segment on <strong>two lenses</strong>: demographic (age, life stage) and psychographic (age-appropriate, natural, gentle).</>,
            <>Target <strong>twice</strong>: children choose, parents pay — dual targeting of preference-makers and purchasers.</>,
            <>Position on <strong>dadi-nani trust</strong> (turmeric, hibiscus, amla, shikakai) rather than the “organic” label.</>,
            <>₹150 → <strong>₹450</strong> for 300ML: clear differentiation lets you price premium — and expand (face wash, makeup, Farah Khan).</>,
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   L14 · SAFE TARGETING (safe-targeting)
   ============================================================ */

const SAFE_GATES = [
  { k: "S", label: "Size", q: "Is market demand inside the segment large enough to justify the marketing investment and generate revenue?" },
  { k: "A", label: "Accessibility", q: "Can the organisation actually reach and serve the segment? A large market with no physical presence or distribution channels is not viable." },
  { k: "F", label: "Fitment", q: "Does the brand, product or service align with the segment's needs, values and requirements?" },
  { k: "E", label: "Economics", q: "Does serving the segment make financial sense — a sustainable, profitable business model?" },
];
const SAFE_SEGS = ["Sneakerheads", "First-time runners", "Marathon runners", "Comfort walkers"];

function SafePipeline() {
  const { step, next, reset, playing, toggle } = useStepPlayer(5, 2800);
  const statuses = [
    "Gate 1 · Size — assess demand inside each segment; it must be large enough to justify the investment and generate revenue.",
    "Gate 2 · Accessibility — reach and serviceability. No presence or distribution channels? Not viable, however big.",
    "Gate 3 · Fitment — the offering must resonate with the segment's values and requirements, and with brand capability.",
    "Gate 4 · Economics — even if everything else passes, the business model must be sustainable and profitable for that segment.",
    "Verdict — first-time runners: high market size · medium competition · high brand capability · medium willingness to pay. Superior to the other three for a single new running-shoe line.",
  ];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Filter className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The SAFE four-gate scan</h3>
        <span className="chip">four segments · one new running shoe</span>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr,1.2fr]">
        <div className="grid gap-2.5">
          {SAFE_GATES.map((g, i) => {
            const active = step < 4 && step === i;
            const done = step > i || step === 4;
            return (
              <div key={g.k}
                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-300"
                style={{
                  background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : done ? "#edf6f4" : "#ffffff",
                  border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                  opacity: step === 4 && !done ? 0.55 : 1,
                }}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-black"
                  style={{ background: active ? "rgba(255,255,255,.2)" : "#eef6f4", color: active ? "#f4fbf9" : "#0f766e" }}>
                  {g.k}
                </span>
                <div>
                  <p className="text-[.9rem] font-extrabold" style={{ color: active ? "#f4fbf9" : "#1f2b2b" }}>{g.label}</p>
                  <p className="text-[.72rem] font-semibold" style={{ color: active ? "rgba(244,251,249,.85)" : "#5f7472" }}>
                    {done && !active ? "cleared" : active ? "scanning…" : "waiting"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf", minHeight: "190px" }}>
            <AnimatePresence mode="wait">
              {step < 4 ? (
                <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
                  <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#a97d2c" }}>
                    Gate {step + 1} of 4 · {SAFE_GATES[step].label}
                  </p>
                  <p className="mt-2 text-[.9rem] font-semibold leading-relaxed text-[#1f2b2b]">{SAFE_GATES[step].q}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {SAFE_SEGS.map((s) => (
                      <motion.span key={s} initial={{ opacity: 0.35 }} animate={{ opacity: 1 }}
                        className="rounded-full px-3 py-1.5 text-[.78rem] font-extrabold"
                        style={{
                          background: s === "First-time runners" ? "rgba(20,184,166,.16)" : "#ffffff",
                          color: "#0f766e",
                          border: `1px solid ${s === "First-time runners" ? "#14b8a6" : "#cfe3de"}`,
                        }}>
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="verdict" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
                  <div className="rounded-xl px-4 py-3" style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)", color: "#f4fbf9" }}>
                    <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em] opacity-85">Target selected</p>
                    <p className="text-lg font-extrabold">First-time runners</p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["Market size: high", "Competition: medium", "Brand capability: high", "Willingness to pay: medium"].map((c) => (
                      <span key={c} className="rounded-full bg-white px-3 py-1.5 text-[.76rem] font-extrabold" style={{ border: "1px solid #cfe3de", color: "#0f766e" }}>
                        {c}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[.8rem] font-semibold text-[#5f7472]">
                    The other three segments stay evaluated — but a single product line goes where the four gates open widest.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <PlayerControls step={step} total={5} playing={playing} onToggle={toggle} onNext={next} onReset={reset} />
          <Status>{statuses[step]}</Status>
        </div>
      </div>
    </div>
  );
}

export function MktgSafeSection() {
  return (
    <Section id="safe-targeting">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 14"
        title={<>Targeting and the <Grad>SAFE framework</Grad></>}
        lead="Segmentation hands you many groups; limited budgets and resources force a choice. Targeting evaluates the segments and decides which to focus upon — because if everyone is your priority, then nobody is your priority."
      />

      <ReadStep n="1" title="The constraint that creates targeting" sub="You cannot market to all segments equally" />
      <Reveal>
        <p className={proseCls}>
          Targeting is the process of evaluating market segments and deciding which segment or segments the organisation
          will focus upon. Organisations have limited budgets and resources, which makes it impossible to market to all
          identified segments equally — hence the lecture&apos;s fundamental principle:{" "}
          <strong>“if everyone is your priority, then nobody is your priority.”</strong>
        </p>
      </Reveal>

      <ReadStep n="2" title="Four gates before you commit" sub="Size · Accessibility · Fitment · Economics" />
      <Reveal><SafePipeline /></Reveal>

      <ReadStep n="3" title="Two dangerous assumptions" sub="The traps hiding inside 'obvious' choices" />
      <Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card-warm p-5" style={{ borderColor: "#e6a08c", background: "#fdf3ef" }}>
            <p className="flex items-center gap-2 font-extrabold text-[#8c2f2f]"><AlertTriangle className="h-5 w-5" aria-hidden /> The largest-segment assumption</p>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
              The largest market segment is not automatically the best target. Volume matters, but so do <strong>value and
              profit margin</strong> — a smaller, more profitable segment may generate greater revenue than a larger one with
              lower willingness to pay or higher competition.
            </p>
          </div>
          <div className="card-warm p-5" style={{ borderColor: "#e6a08c", background: "#fdf3ef" }}>
            <p className="flex items-center gap-2 font-extrabold text-[#8c2f2f]"><AlertTriangle className="h-5 w-5" aria-hidden /> The fastest-growing assumption</p>
            <p className="mt-2 text-[.9rem] leading-relaxed text-[#2b2014]">
              The fastest-growing segment may not align with the organisation&apos;s product fit or capabilities. Growth rate
              alone should not decide — <strong>brand capability and product–segment alignment</strong> matter equally.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="4" title="The framework in the wild" sub="Netflix, Spotify and the sneaker company" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="Netflix" v="A crime-thriller launch with a limited promotional budget of 10 crores concentrates on the “true crime” segment rather than spreading equally across all six consumer segments — focus maximises return on investment" />
          <KV k="Spotify" v="Students were not the largest segment in Europe & India, yet Premium for Students at a subsidised price delivered higher overall revenue — large volume × price elasticity" />
          <KV k="Sneaker company" v="Four segments (sneakerheads, first-time runners, marathon runners, comfort walkers) scanned with SAFE for one new product line → first-time runners: high market size, medium competition, high brand capability, medium willingness to pay" />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 14 · concept check"
            q="In the sneaker-company SAFE scan, which segment is the optimal target for the single new running-shoe line?"
            options={["Sneakerheads", "First-time runners", "Marathon runners", "Comfort walkers"]}
            answer={1}
            explain="First-time runners win with high market size, medium competition, high brand capability and medium willingness to pay — superior to the other options." />
        </Reveal>
        <Reveal delay={100}>
          <Takeaways items={[
            <>Targeting = <strong>evaluating and choosing</strong> — limited budgets make “everyone” impossible.</>,
            <><strong>SAFE</strong>: Size, Accessibility, Fitment, Economics — all four gates must open.</>,
            <>Largest ≠ best (volume vs <strong>value &amp; margin</strong>); fastest-growing ≠ best (growth vs <strong>fit &amp; capability</strong>).</>,
            <>Netflix puts a 10-crore budget on <strong>true crime</strong>; Spotify wins big with <strong>students</strong> via volume and price elasticity.</>,
            <>If everyone is your priority, <strong>nobody is your priority</strong>.</>,
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   L14 · POSITIONING'S 3 QUESTIONS (pos-3q)
   ============================================================ */

const MIND_CARDS = [
  { brand: "Dettol", assoc: "Safety & germ protection", icon: ShieldCheck },
  { brand: "Coca-Cola", assoc: "Dominates the cola category", icon: CupSoda },
  { brand: "Bisleri", assoc: "The first brand for mineral water", icon: Droplets },
];

function MindFlipMachine() {
  const [flipped, setFlipped] = useState<boolean[]>([false, false, false]);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Eye className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Mental associations — flip to check</h3>
        <span className="chip">not accidental; deliberately built</span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {MIND_CARDS.map((c, i) => (
          <button key={c.brand} type="button" onClick={() => setFlipped((f) => f.map((v, j) => (j === i ? !v : v)))}
            aria-label={`Flip the ${c.brand} card to reveal its mental association`}
            className="h-44 w-full cursor-pointer"
            style={{ perspective: 900 }}>
            <motion.div className="relative h-full w-full" animate={{ rotateY: flipped[i] ? 180 : 0 }} transition={{ duration: 0.55, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}>
              <div className="card-warm lift absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-4"
                style={{ backfaceVisibility: "hidden" }}>
                <c.icon className="h-8 w-8" style={{ color: "#0f766e" }} aria-hidden />
                <p className="text-lg font-extrabold text-[#1f2b2b]">{c.brand}</p>
                <p className="text-[.72rem] font-bold uppercase tracking-[.14em] text-[#5f7472]">tap to flip</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "linear-gradient(165deg,#0c2124,#143236)",
                  border: "1px solid rgba(227,194,107,.25)",
                }}>
                <p className="text-[.7rem] font-bold uppercase tracking-[.16em]" style={{ color: "#e3c26b" }}>the mind holds…</p>
                <p className="text-[.95rem] font-extrabold leading-snug" style={{ color: "#e9f2ee" }}>{c.assoc}</p>
              </div>
            </motion.div>
          </button>
        ))}
      </div>
      <Status>
        Positioning creates immediate mental associations when consumers encounter a brand — adrenaline/action brands own
        thrill and adventure. These are results of deliberate positioning strategies, not accidents.
      </Status>
    </div>
  );
}

const POS_3Q = [
  { q: "Who is the target audience?", a: "Consumers experiencing tooth sensitivity — not those seeking whiteness, freshness or general oral hygiene.", chip: "the sensitive-teeth consumer" },
  { q: "What category are we competing in?", a: "The toothpaste category — clarify the competitive landscape you fight inside.", chip: "toothpaste" },
  { q: "Why should this target choose us?", a: "Specialised sensitivity relief and protection — distinguishing it from general-purpose toothpastes like Colgate or Close-Up.", chip: "sensitivity relief & protection" },
];

function ThreeQMachine() {
  const { step, next, reset, playing, toggle } = useStepPlayer(3, 2800);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Lightbulb className="h-6 w-6" style={{ color: "#a97d2c" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Three questions, one brand — Sensodyne</h3>
        <span className="chip">who · what · why</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {POS_3Q.map((item, i) => {
          const active = step === i;
          return (
            <div key={item.q} className="rounded-xl px-3.5 py-3 transition-all duration-300"
              style={{
                background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff",
                border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                opacity: step > i || active ? 1 : 0.55,
              }}>
              <p className="font-mono-warm text-[.7rem] font-extrabold uppercase tracking-[.16em]" style={{ color: active ? "#e3c26b" : "#a97d2c" }}>
                Q{i + 1}
              </p>
              <p className="mt-1 text-[.86rem] font-extrabold leading-snug" style={{ color: active ? "#f4fbf9" : "#1f2b2b" }}>{item.q}</p>
            </div>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
          className="mt-4 rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
          <p className="text-[.72rem] font-extrabold uppercase tracking-[.16em]" style={{ color: "#a97d2c" }}>Sensodyne&apos;s answer</p>
          <p className="mt-1.5 text-[.92rem] font-semibold leading-relaxed text-[#1f2b2b]">{POS_3Q[step].a}</p>
          <span className="mt-2 inline-block rounded-full px-3 py-1 text-[.74rem] font-extrabold" style={{ background: "rgba(20,184,166,.14)", color: "#0f766e", border: "1px solid #14b8a6" }}>
            {POS_3Q[step].chip}
          </span>
        </motion.div>
      </AnimatePresence>
      <PlayerControls step={step} total={3} playing={playing} onToggle={toggle} onNext={next} onReset={reset}
        labels={["who — the audience", "what — the category", "why — the reason to choose"]} />
    </div>
  );
}

export function MktgPos3qSection() {
  return (
    <Section id="pos-3q">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 14"
        title={<>Positioning: the <Grad>three questions</Grad></>}
        lead="Positioning designs an offering and its image so it occupies a distinctive and valued place in the target consumer's mind relative to competitors. How do we differentiate ourselves in the minds of our target audience?"
      />

      <ReadStep n="1" title="The mind already has shelves" sub="Mental associations are manufactured" />
      <Reveal>
        <p className={proseCls}>
          Positioning creates <strong>immediate mental associations</strong>. Dettol is safety and germ protection;
          adrenaline and action brands are thrill and adventure; Coca-Cola dominates the cola category; Bisleri is the
          first brand that comes to mind for mineral water. None of this is accidental — each association results from a
          deliberate positioning strategy.
        </p>
      </Reveal>
      <Reveal className="mt-5"><MindFlipMachine /></Reveal>

      <ReadStep n="2" title="Three fundamental questions" sub="Every positioning strategy must answer them — Sensodyne does" />
      <Reveal><ThreeQMachine /></Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="Why the three questions work">
          Answering who / what / why lets Sensodyne occupy a distinct space focused specifically on sensitivity relief —
          differentiation from broader competitors like Colgate or Close-Up, without abandoning the toothpaste category.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="The complete STP framework" sub="Three moves, one integrated strategy" />
      <Reveal>
        <StepsFlow steps={[
          { label: "Segmentation", sub: "divide the heterogeneous market into homogeneous groups", icon: <Layers className="h-5 w-5 shrink-0" style={{ color: "#0f766e" }} aria-hidden /> },
          { label: "Targeting", sub: "prioritise by size, accessibility, fitment, economics", icon: <Target className="h-5 w-5 shrink-0" style={{ color: "#0f766e" }} aria-hidden /> },
          { label: "Positioning", sub: "create a distinctive image that resonates and differentiates", icon: <Gem className="h-5 w-5 shrink-0" style={{ color: "#a97d2c" }} aria-hidden /> },
        ]} />
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="warn" title="The cost of skipping it">
          Appealing to everyone results in diluted messaging and wasted resources. STP keeps new product launches and
          campaigns strategically focused.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Positioning = a <strong>distinctive and valued place</strong> in the target consumer&apos;s mind, relative to competitors.</>,
          <>Associations — Dettol = safety, Coca-Cola = cola, Bisleri = water — are <strong>built, not born</strong>.</>,
          <>Three questions: <strong>Who</strong> is the target, <strong>what</strong> category are we in, <strong>why</strong> choose us?</>,
          <>Sensodyne: sensitive-teeth consumers · toothpaste category · specialised sensitivity relief &amp; protection.</>,
          <>STP is one integrated strategy — skip a step and the messaging <strong>dilutes</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L15 · ACCOR PERCEPTUAL MAP (accor-map)
   ============================================================ */

const ACCOR_TIERS = [
  {
    k: "Ibis", band: "₹3,000–4,000 / night",
    seg: "Economy segment — standard room designs; budget-conscious travelers needing basic accommodations",
    pts: [{ x: 205, y: 252, label: "Ibis" }],
  },
  {
    k: "Novotel & Mercure", band: "₹5,000–7,000 / night",
    seg: "Mid-range segment — moderate pricing with better room designs and features",
    pts: [{ x: 318, y: 168, label: "Novotel" }, { x: 356, y: 186, label: "Mercure" }],
  },
  {
    k: "Pullman & Sofitel Legend", band: "₹9,000–15,000+ / night",
    seg: "Premium segment — superior designs, luxury amenities and enhanced services",
    pts: [{ x: 470, y: 98, label: "Pullman" }, { x: 528, y: 80, label: "Sofitel Legend" }],
  },
];

function AccorMapMachine() {
  const [sel, setSel] = useState<number | null>(null);
  const px = (rupees: number) => 90 + (rupees / 16000) * 530;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Hotel className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The perceptual map — price × experience</h3>
        <span className="chip">one parent, three positions</span>
      </div>
      <svg viewBox="0 0 660 360" className="mt-4 h-auto w-full" role="img"
        aria-label="Perceptual map of the Accor Group: Ibis in the economy tier at 3000 to 4000 rupees, Novotel and Mercure mid-range at 5000 to 7000, Pullman and Sofitel Legend premium at 9000 to 15000 plus">
        {/* axes */}
        <motion.line x1="90" y1="310" x2="630" y2="310" stroke="#5f7472" strokeWidth="2" opacity={1}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
        <motion.line x1="90" y1="310" x2="90" y2="40" stroke="#5f7472" strokeWidth="2" opacity={1}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
        <text x="360" y="340" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#5f7472">price per night →</text>
        <text x="30" y="175" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#5f7472" transform="rotate(-90 30 175)">
          room design · amenities · service →
        </text>
        {[3000, 5000, 7000, 9000, 15000].map((r) => (
          <g key={r}>
            <line x1={px(r)} y1="310" x2={px(r)} y2="316" stroke="#5f7472" strokeWidth="1.4" />
            <text x={px(r)} y="330" textAnchor="middle" fontSize="10" fontWeight="700" fill="#5f7472">₹{r.toLocaleString("en-IN")}+</text>
          </g>
        ))}
        {/* tier points */}
        {ACCOR_TIERS.map((tier, ti) =>
          tier.pts.map((p, pi) => (
            <motion.g key={`${ti}-${pi}`}
              animate={{ scale: sel === ti ? 1.12 : 1, opacity: sel === null || sel === ti ? 1 : 0.35 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              style={{ originX: `${p.x}px`, originY: `${p.y}px` }}>
              <circle cx={p.x} cy={p.y} r="13" fill={ti === 2 ? "#e3c26b" : ti === 1 ? "#14b8a6" : "#0f766e"} opacity={0.9} />
              <circle cx={p.x} cy={p.y} r="5" fill="#f4fbf9" />
              <text x={p.x} y={p.y - 20} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1f2b2b">{p.label}</text>
              {sel === ti ? (
                <motion.circle cx={p.x} cy={p.y} r="20" fill="none" stroke="#a97d2c" strokeWidth="2" opacity={0.9}
                  animate={{ r: [18, 24], opacity: [0.9, 0.15] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }} />
              ) : null}
            </motion.g>
          ))
        )}
        {/* tier bands */}
        {ACCOR_TIERS.map((tier, ti) => (
          <text key={tier.k} x={tier.pts[0].x} y="64" textAnchor="middle" fontSize="10.5" fontWeight="800"
            fill={ti === 2 ? "#a97d2c" : ti === 1 ? "#0f766e" : "#0f766e"} opacity={sel === null || sel === ti ? 0.85 : 0.25}>
            {tier.band}
          </text>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-2">
        {ACCOR_TIERS.map((t, i) => (
          <MBtn key={t.k} tone={sel === i ? "teal" : "ghost"} onClick={() => setSel(sel === i ? null : i)} ariaLabel={`Highlight ${t.k} (${t.band})`}>
            {t.k}
          </MBtn>
        ))}
        <MBtn onClick={() => setSel(null)} ariaLabel="Clear the highlight">Clear</MBtn>
      </div>
      <Status tone={sel === null ? "teal" : "gold"}>
        {sel === null
          ? "Same parent company — Accor — yet each chain targets a different consumer segment with distinct positioning. Tap a tier to isolate it."
          : `${ACCOR_TIERS[sel].k} — ${ACCOR_TIERS[sel].band}. ${ACCOR_TIERS[sel].seg}.`}
      </Status>
    </div>
  );
}

export function MktgAccorSection() {
  return (
    <Section id="accor-map">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 15"
        title={<>The <Grad>Accor map</Grad>: many positions, one parent</>}
        lead="Positioning creates a distinct space in consumers' minds — beyond product features, into perception and psychology. Perceptual maps show how one group serves many segments at once."
      />

      <ReadStep n="1" title="Why positioning earns its own lecture" sub="Mental space · dual time · competitive advantage" />
      <Reveal>
        <div className="grid gap-3">
          <KV k="Mental space" v="Positioning is not only what you do with a product — equally important is what you do to the minds of consumers. Coca-Cola and Bisleri created brand perceptions beyond just being beverages" />
          <KV k="Dual-time perspective" v="Effective positioning puts “one foot in the present and one foot in the future” — anticipating market changes and consumer needs" />
          <KV k="Competitive advantage" v="Positioning correctly to multiple segments simultaneously increases revenue and profitability without one segment negatively influencing the parent company's brand image" />
        </div>
      </Reveal>

      <ReadStep n="2" title="Accor's three-tier map" sub="Ibis · Novotel & Mercure · Pullman & Sofitel Legend" />
      <Reveal><AccorMapMachine /></Reveal>

      <ReadStep n="3" title="The parallel at home" sub="ITC runs the same play" />
      <Reveal>
        <Callout kind="story" title="ITC — five stars above, boutique below">
          Similarly, ITC maintains five-star properties while launching boutique hotel chains to reach price-sensitive
          consumers — <strong>preserving the luxury brand image</strong> while capturing segments that would never book the
          flagship. Multi-segment positioning without brand dilution.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Positioning happens <strong>in the mind</strong> — perception and psychology, not just features.</>,
          <>Keep <strong>one foot in the present, one in the future</strong> — anticipate the market you will serve next.</>,
          <>Accor: <strong>₹3,000–4,000</strong> Ibis · <strong>₹5,000–7,000</strong> Novotel &amp; Mercure · <strong>₹9,000–15,000+</strong> Pullman &amp; Sofitel Legend.</>,
          <>Multiple segments at once is an advantage <strong>only if the positions stay distinct</strong> — no dilution.</>,
          <>ITC&apos;s boutique chains prove the same move works across industries.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L15 · FRAMES OF REFERENCE + PODs/POPs (frame-podspops)
   ============================================================ */

function FrameSwitchMachine() {
  const [ext, setExt] = useState(false);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Layers className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The frame-of-reference switch</h3>
        <span className="chip">who are you actually fighting?</span>
      </div>
      <svg viewBox="0 0 640 330" className="mt-4 h-auto w-full" role="img"
        aria-label="Cooking oil in the centre: the natural frame of reference holds Safola, Dhara and Fortune; the extended frame adds olive oil, pure ghee and mustard oil as substitutes">
        {/* rings */}
        <motion.circle cx="320" cy="165" r="108" fill="none" stroke="#0f766e" strokeWidth="1.8" strokeDasharray="6 6" opacity={1}
          animate={{ opacity: 0.9 }} />
        <motion.circle cx="320" cy="165" r="160" fill="none" stroke="#a97d2c" strokeWidth="1.8" strokeDasharray="6 6"
          opacity={ext ? 0.9 : 0.12} animate={{ opacity: ext ? 0.9 : 0.12 }} />
        {/* centre */}
        <rect x="262" y="147" width="116" height="36" rx="10" fill="#0f766e" />
        <text x="320" y="170" textAnchor="middle" fontSize="13" fontWeight="800" fill="#f4fbf9">Cooking oil</text>
        {/* natural nodes */}
        {[{ x: 200, y: 78, t: "Safola" }, { x: 440, y: 78, t: "Dhara" }, { x: 320, y: 42, t: "Fortune" }].map((n) => (
          <g key={n.t}>
            <rect x={n.x - 56} y={n.y - 17} width="112" height="34" rx="9" fill="#ffffff" stroke="#0f766e" strokeWidth="1.6" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#0f766e">{n.t}</text>
          </g>
        ))}
        <text x="486" y="120" fontSize="11" fontWeight="800" fill="#0f766e">natural frame — direct competitors</text>
        {/* extended nodes */}
        <motion.g opacity={ext ? 1 : 0} animate={{ opacity: ext ? 1 : 0 }}>
          {[{ x: 160, y: 262, t: "Olive oil" }, { x: 480, y: 262, t: "Pure ghee" }, { x: 320, y: 300, t: "Mustard oil" }].map((n) => (
            <g key={n.t}>
              <rect x={n.x - 60} y={n.y - 17} width="120" height="34" rx="9" fill="#fdf6e7" stroke="#a97d2c" strokeWidth="1.6" strokeDasharray="5 4" />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#a97d2c">{n.t}</text>
            </g>
          ))}
          <text x="130" y="200" fontSize="11" fontWeight="800" fill="#a97d2c">extended frame — substitutes</text>
        </motion.g>
      </svg>
      <div className="mt-2 flex flex-wrap gap-2">
        <MBtn tone={!ext ? "teal" : "ghost"} onClick={() => setExt(false)} ariaLabel="Show the natural frame of reference">Natural frame</MBtn>
        <MBtn tone={ext ? "gold" : "ghost"} onClick={() => setExt(true)} ariaLabel="Show the extended frame of reference">Extended frame</MBtn>
      </div>
      <Status tone={ext ? "gold" : "teal"}>
        {ext
          ? "Extended frame: olive oil, pure ghee and mustard oil substitute traditional cooking oils as health consciousness increases — indirect competitors that may replace you."
          : "Natural frame: direct competitors offering similar products — for cooking oil, that is Safola, Dhara and Fortune."}
      </Status>
    </div>
  );
}

function GypsyTimeline() {
  const { step, next, reset, playing, toggle } = useStepPlayer(4, 2600);
  const notes = [
    "1985 — Maruti launches the Gypsy, India's first SUV. It has no direct competitors: the natural frame of reference is empty.",
    "The blind spot — the extended frame of reference (potential future substitutes) is ignored. Today's emptiness is not tomorrow's.",
    "Tata Sumo and Mahindra Scorpio enter with superior features: AC, power steering, power windows, better mileage, better ride quality, improved seating.",
    "Result — Gypsy's market share declines as consumers switch to better-positioned alternatives, despite emotional attachment to the original.",
  ];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Car className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The Gypsy King case — a share story</h3>
        <span className="chip">launched 1985</span>
      </div>
      <svg viewBox="0 0 640 250" className="mt-4 h-auto w-full" role="img"
        aria-label="Market share line for the Maruti Gypsy: flat after its 1985 launch, declining after Tata Sumo and Mahindra Scorpio enter with superior features">
        <motion.line x1="50" y1="210" x2="610" y2="210" stroke="#5f7472" strokeWidth="2" opacity={1}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
        <text x="46" y="232" fontSize="10.5" fontWeight="700" fill="#5f7472">1985</text>
        <text x="300" y="232" fontSize="10.5" fontWeight="700" fill="#5f7472">competitors enter</text>
        <text x="560" y="232" fontSize="10.5" fontWeight="700" fill="#5f7472">after</text>
        <text x="20" y="60" fontSize="10.5" fontWeight="800" fill="#5f7472" transform="rotate(-90 20 60)">market share →</text>
        {/* the share curve: flat, then declining */}
        <motion.path d="M50 62 L300 66 C 380 70, 440 120, 600 178" fill="none" stroke="#0f766e" strokeWidth="3.5" opacity={1}
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
        {/* competitor entry markers */}
        <motion.g opacity={step >= 2 ? 1 : 0} animate={{ opacity: step >= 2 ? 1 : 0 }}>
          <line x1="312" y1="30" x2="312" y2="210" stroke="#9f3d54" strokeWidth="1.6" strokeDasharray="5 5" />
          <text x="318" y="24" fontSize="11" fontWeight="800" fill="#9f3d54">Tata Sumo · Mahindra Scorpio</text>
          <text x="318" y="40" fontSize="9.5" fontWeight="700" fill="#9f3d54">AC · power steering · power windows · mileage · ride · seating</text>
        </motion.g>
        <motion.g opacity={step === 0 ? 1 : 0.35} animate={{ opacity: step === 0 ? 1 : 0.35 }}>
          <circle cx="50" cy="62" r="6" fill="#e3c26b" />
          <text x="60" y="52" fontSize="11" fontWeight="800" fill="#a97d2c">India&apos;s first SUV — no direct competitors</text>
        </motion.g>
        <motion.g opacity={step >= 3 ? 1 : 0} animate={{ opacity: step >= 3 ? 1 : 0 }}>
          <circle cx="600" cy="178" r="6" fill="#9f3d54" />
          <text x="592" y="168" textAnchor="end" fontSize="11" fontWeight="800" fill="#9f3d54">share declines — emotional attachment notwithstanding</text>
        </motion.g>
      </svg>
      <PlayerControls step={step} total={4} playing={playing} onToggle={toggle} onNext={next} onReset={reset} />
      <Status tone={step === 3 ? "rose" : "teal"}>{notes[step]}</Status>
    </div>
  );
}

function PopRemovalToggle() {
  const [removed, setRemoved] = useState(false);
  const feats = [
    { t: "Germ-killing", pop: true },
    { t: "Cleaning", pop: true },
    { t: "Lime fragrance", pop: false },
    { t: "Shine", pop: false },
    { t: "Freshness", pop: false },
  ];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Droplets className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Lysol vs Gainda Phenyl — pull the POP</h3>
        <span className="chip">what happens if parity goes?</span>
      </div>
      <div className="mt-4 grid gap-5 md:grid-cols-2">
        <div className="grid gap-2">
          {feats.map((f) => {
            const dead = removed && f.pop;
            return (
              <motion.div key={f.t} className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
                style={{ background: dead ? "#f7ecec" : "#ffffff", border: `1px solid ${dead ? "#dcc3c9" : f.pop ? "#cfe3de" : "#e0d3ae"}` }}>
                <span className="text-[.88rem] font-bold" style={{ color: dead ? "#9f3d54" : "#1f2b2b", textDecoration: dead ? "line-through" : "none" }}>
                  {f.t}
                </span>
                <span className="rounded-full px-2.5 py-1 text-[.68rem] font-extrabold"
                  style={{ background: f.pop ? "rgba(15,118,110,.1)" : "rgba(227,194,107,.22)", color: f.pop ? "#0f766e" : "#8a6420" }}>
                  {f.pop ? "POP" : "POD"}
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center">
          <div className="rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#5f7472]">consumer choice</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="rounded-xl px-3 py-2 text-[.8rem] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)" }}>Lysol</span>
              <div className="relative h-1.5 flex-1 rounded-full" style={{ background: "#d8e8e4" }}>
                <motion.div className="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full"
                  style={{ background: "#a97d2c", left: "12%" }}
                  animate={{ left: removed ? "92%" : "12%" }} transition={{ duration: 0.7, ease: "easeInOut" }} />
              </div>
              <span className="rounded-xl px-3 py-2 text-[.8rem] font-extrabold" style={{ background: "#fdf6e7", border: "1px solid #a97d2c", color: "#a97d2c" }}>
                Gainda Phenyl
              </span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <MBtn tone={!removed ? "teal" : "ghost"} onClick={() => setRemoved(false)} ariaLabel="Keep the germ-killing POP">POPs intact</MBtn>
            <MBtn tone={removed ? "gold" : "ghost"} onClick={() => setRemoved(true)} ariaLabel="Remove the germ-killing POP">Remove germ-killing</MBtn>
          </div>
        </div>
      </div>
      <Status tone={removed ? "rose" : "teal"}>
        {removed
          ? "Removing a POP significantly weakens competitive positioning — consumers would revert to Gainda Phenyl, despite Lysol's fragrance, shine and freshness. POPs must be maintained while building PODs."
          : "Lysol's PODs — lime fragrance, shine, freshness — sit on top of the shared POPs (germ-killing, cleaning). Keep the parity; sell the difference."}
      </Status>
    </div>
  );
}

export function MktgFrameSection() {
  return (
    <Section id="frame-podspops">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 15"
        title={<>Frames of reference, <Grad>POPs &amp; PODs</Grad></>}
        lead="Positioning strategy, step by step: first choose the arena you compete in — natural and extended — then defend the points of parity and build the points of differentiation."
      />

      <ReadStep n="1" title="Step 1 — the frame of reference" sub="Natural competitors vs extended substitutes" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Natural frame" v="Direct competitors offering similar products — for cooking oil: Safola, Dhara, Fortune" />
          <KV k="Extended frame" v="Indirect competitors that may substitute your product — olive oil, pure ghee, mustard oil, as health consciousness increases" />
        </div>
      </Reveal>
      <Reveal className="mt-5"><FrameSwitchMachine /></Reveal>

      <ReadStep n="2" title="The Gypsy King lesson" sub="An empty natural frame is not a strategy" />
      <Reveal><GypsyTimeline /></Reveal>
      <Reveal className="mt-4">
        <Callout kind="warn" title="Key takeaway — the long game">
          Understanding both natural and extended frames of reference is essential for long-term positioning success rather
          than short-lived market dominance.
        </Callout>
      </Reveal>

      <ReadStep n="3" title="Step 2 — POPs and PODs" sub="Parity earns you a seat; differentiation wins the game" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="POPs" v="Attributes shared with competitors — the bare minimum standards required to be competitive. Uber, Ola and Meru all provide cab services; without POPs a brand loses competitive credibility and consumer trust" />
          <KV k="PODs" v="Unique attributes that distinguish your brand — Uber and Ola run outsourced driver models with personal vehicles, while Meru owns its fleet" />
        </div>
      </Reveal>
      <Reveal className="mt-5"><PopRemovalToggle /></Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 15 · concept check"
            q="If Lysol removed germ-killing — a POP shared with traditional phenyl — the lecture predicts that…"
            options={["its lime fragrance would carry the brand", "consumers would revert to Gainda Phenyl", "nothing would change — PODs are enough", "removing POPs strengthens positioning"]}
            answer={1}
            explain="Removing a POP significantly weakens competitive positioning: consumers would revert to Gainda Phenyl. POPs must be maintained while building PODs." />
        </Reveal>
        <Reveal delay={100}>
          <Takeaways items={[
            <>Frame of reference first: <strong>natural</strong> (Safola · Dhara · Fortune) and <strong>extended</strong> (olive oil · ghee · mustard oil).</>,
            <>Gypsy (1985) owned an empty natural frame — then <strong>Tata Sumo &amp; Mahindra Scorpio</strong> arrived with AC, power steering, power windows, better mileage, ride and seating.</>,
            <>POPs are the <strong>entry ticket</strong>; PODs are the <strong>reason to choose</strong> (Uber/Ola&apos;s outsourced drivers vs Meru&apos;s owned fleet).</>,
            <>Lysol: fragrance (lime), shine, freshness = PODs on top of germ-killing &amp; cleaning POPs.</>,
            <>Never trade away a POP — parity removed is <strong>positioning weakened</strong>.</>,
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   L16 · FOUR LEVELS OF MICRO-MARKETING (four-levels)
   ============================================================ */

type DotSpec = { x: number; y: number; fill: string; o: number; r: number };

function dotSpec(level: number, i: number): DotSpec {
  const teal = "#14b8a6", deep = "#0f766e", gold = "#e3c26b", champagne = "#a97d2c";
  if (level === 0) {
    return { x: 34 + (i % 12) * 40, y: 42 + Math.floor(i / 12) * 52, fill: i % 2 ? teal : deep, o: 1, r: 6 };
  }
  if (level === 1) {
    const centers = [
      { x: 95, y: 72, f: deep }, { x: 262, y: 58, f: teal },
      { x: 160, y: 172, f: champagne }, { x: 372, y: 150, f: gold },
    ];
    const c = centers[i % 4];
    const jx = (((i * 7) % 5) - 2) * 9;
    const jy = (((i * 11) % 5) - 2) * 8;
    return { x: c.x + jx, y: c.y + jy, fill: c.f, o: 1, r: 6 };
  }
  if (level === 2) {
    const inNiche = i < 7;
    const jx = (((i * 5) % 3) - 1) * 13;
    const jy = (((i * 13) % 3) - 1) * 11;
    return { x: 260 + jx, y: 118 + jy, fill: gold, o: inNiche ? 1 : 0.07, r: inNiche ? 7 : 5 };
  }
  const isOne = i === 0;
  return { x: 260, y: 118, fill: gold, o: isOne ? 1 : 0.05, r: isOne ? 11 : 5 };
}

const LEVEL_INFO = [
  {
    k: "Mass market", icon: Users,
    phil: "Production-centric: mass production, mass distribution, mass promotion.",
    tgt: "Everyone — the entire market",
    ex: ["Coca-Cola", "Pepsi", "Amul butter", "Dettol"],
    pros: "Cost-effective · high volume sales · wide market reach",
    cons: "Inventory costs if products don't sell · one-size-fits-all alienates specific preferences · waste and storage costs",
  },
  {
    k: "Market segment", icon: Layers,
    phil: "Target a large but identifiable subgroup within the broader market.",
    tgt: "Specific demographic or psychographic groups — more customisation than mass, less than niche",
    ex: ["Dove Men Care — personal care for men", "Myntra Forward — designed exclusively for Generation Z"],
    pros: "Better product–market fit · reduced inventory waste · targeted marketing efficiency",
    cons: null,
  },
  {
    k: "Niche market", icon: Target,
    phil: "A narrowly defined customer group seeking a distinctive set of benefits — a sub-segment of a larger segment.",
    tgt: "Small markets with unique needs; premium pricing common; requires deep expertise",
    ex: ["Nomatic — high-performance travel backpacks", "Lush — handmade, ethically sourced, chemical-free cosmetics", "Beeswrap — reusable, compostable food wrapping"],
    pros: "Limited direct competition · loyal customer base · premium pricing",
    cons: "Small market size · requires deep understanding of customer needs",
  },
  {
    k: "Individual · market of one", icon: User,
    phil: "Marketing and customisation at the individual level — maximum personalisation.",
    tgt: "One individual customer — tailored specifications, higher price points, strong relationships",
    ex: ["NIKEiD — customers design their own shoes", "“Share a Coke with Rahul” — personalised bottles", "Raymond Made-to-Measure — suits to individual measurements", "Shaadi.com · Jeevansathi.com — individual-level matching"],
    pros: "Strong emotional connection · willingness to pay premium · highest satisfaction potential",
    cons: null,
  },
];

function ZoomSpectrum() {
  const [level, setLevel] = useState(0);
  const dots = useMemo(
    () => Array.from({ length: 48 }, (_, i) => {
      const base = dotSpec(0, i);
      const target = dotSpec(level, i);
      return { base, dx: target.x - base.x, dy: target.y - base.y, fill: target.fill, o: target.o, r: target.r };
    }),
    [level]
  );
  const info = LEVEL_INFO[level];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <ZoomIn className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The zoom spectrum</h3>
        <span className="chip">crowd → group → few → single</span>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr,1fr]">
        <div>
          <div className="rounded-2xl p-2" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
            <svg viewBox="0 0 520 236" className="h-auto w-full" role="img"
              aria-label="Forty-eight customer dots that regroup by marketing level: the whole crowd for mass market, four clusters for segments, a small gold group for niche, and a single dot for market of one">
              {dots.map((d, i) => (
                <motion.circle key={i} cx={d.base.x} cy={d.base.y} r={d.base.r} fill={d.base.fill} opacity={1}
                  animate={{ x: d.dx, y: d.dy, fill: d.fill, opacity: d.o }}
                  transition={{ type: "spring", stiffness: 90, damping: 18 }} />
              ))}
            </svg>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {LEVEL_INFO.map((l, i) => (
              <MBtn key={l.k} tone={level === i ? "teal" : "ghost"} onClick={() => setLevel(i)} ariaLabel={`Show the ${l.k} level`}>
                {i + 1}. {l.k}
              </MBtn>
            ))}
          </div>
        </div>
        <div>
          <AnimatePresence mode="wait">
            <motion.div key={level} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              <p className="flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]">
                <info.icon className="h-5 w-5" style={{ color: level === 3 ? "#a97d2c" : "#0f766e" }} aria-hidden /> {level + 1}. {info.k}
              </p>
              <p className="mt-1.5 text-[.88rem] leading-relaxed text-[#3a4a48]">{info.phil}</p>
              <p className="mt-2 text-[.82rem] font-bold text-[#5f7472]">Target: <span className="font-semibold text-[#1f2b2b]">{info.tgt}</span></p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {info.ex.map((e) => (
                  <span key={e} className="rounded-full bg-white px-2.5 py-1 text-[.74rem] font-bold" style={{ border: "1px solid #cfe3de", color: "#0f766e" }}>{e}</span>
                ))}
              </div>
              <p className="mt-2 text-[.78rem] leading-relaxed text-[#0f766e]"><strong>Advantages:</strong> {info.pros}</p>
              {info.cons ? <p className="mt-1 text-[.78rem] leading-relaxed text-[#9f3d54]"><strong>Challenges:</strong> {info.cons}</p> : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function MktgLevelsSection() {
  return (
    <Section id="four-levels">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 16"
        title={<>From mass market to <Grad>market of one</Grad></>}
        lead="The STP framework evolved into micro-marketing — four levels of approach, from serving everyone to serving a single customer by name."
      />

      <ReadStep n="1" title="Segments are found, not invented" sub="The ground rules before the zoom" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Identify, don't create" v="Marketers do not create segments; they identify existing segments in the market based on shared needs and wants" />
          <KV k="Homogeneity / heterogeneity" v="Within a segment customers are very similar to each other; across different segments they are distinctly different" />
        </div>
      </Reveal>

      <ReadStep n="2" title="The zoom spectrum" sub="Mass → segment → niche → individual" />
      <Reveal><ZoomSpectrum /></Reveal>

      <ReadStep n="3" title="The industrial middle ground" sub="Mass customisation & customerisation" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Mass customisation" v="Combining mass-production efficiency with customised personalisation at the individual level" />
          <KV k="Customerisation" v="A blend of mass marketing with customised messaging and product modifications — broad reach, individual relevance" />
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="Flexibility is a strategy">
          Organisations can operate at <strong>multiple levels simultaneously</strong> with different product lines — and
          large groups may own multiple distinct brands serving different segments (L&apos;Oréal and Body Shop).
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Mass</strong> (Coca-Cola, Pepsi, Amul butter, Dettol): cheapest per unit, but inventory risk and one-size-fits-all alienation.</>,
          <><strong>Segment</strong>: Dove Men Care, Myntra Forward (Gen Z) — better product–market fit with targeted efficiency.</>,
          <><strong>Niche</strong>: Nomatic, Lush, Beeswrap — limited competition, loyalty, premium pricing; small size and deep expertise required.</>,
          <><strong>Market of one</strong>: NIKEiD, Share a Coke with Rahul, Raymond Made-to-Measure, Shaadi.com — maximum personalisation, premium willingness.</>,
          <>Mass customisation &amp; customerisation blend <strong>scale with individual relevance</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L16 · POD → POP EVOLUTION (pop-pod-evolution)
   ============================================================ */

function RazorLadder() {
  const { step, next, reset, playing, toggle } = useStepPlayer(5, 2400);
  const gillette = step < 1 ? 2 : step < 3 ? 3 : 5;
  const competitors = step < 2 ? 2 : 3;
  const notes = [
    "The baseline: two-blade razors are the category norm — the POP every competitor must match to be considered.",
    "Gillette Mark 3 arrives with three blades against two-blade competitors — a genuine POD.",
    "Competitors copy. Three blades becomes the shared standard — the POD has decayed into a POP.",
    "Gillette answers with five-blade Fusion — a new POD to re-open the gap.",
    "The treadmill: when competitors copy a POD it becomes a POP. Organisations must continuously innovate to maintain differentiation.",
  ];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xl font-extrabold text-[#1f2b2b]">🪒</p>
        <h3 className="text-xl font-bold text-[#1f2b2b]">The razor ladder — POD → POP → POD</h3>
        <span className="chip">Gillette&apos;s endless climb</span>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <MktgTrack label="Gillette" count={gillette} tone="teal" badge={gillette > competitors ? "POD" : "POP"} peak={Math.max(gillette, competitors)} />
        <MktgTrack label="Competitors" count={competitors} tone="muted" badge={gillette > competitors ? "POP" : "POP"} peak={Math.max(gillette, competitors)} />
      </div>
      <PlayerControls step={step} total={5} playing={playing} onToggle={toggle} onNext={next} onReset={reset} />
      <Status tone={step === 2 ? "gold" : "teal"}>{notes[step]}</Status>
    </div>
  );
}

export function MktgEvolutionSection() {
  return (
    <Section id="pop-pod-evolution">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 16"
        title={<>The <Grad>POD → POP</Grad> treadmill</>}
        lead="Points of parity are the minimum requirements to compete; points of differentiation are the reasons to choose. The catch: differentiation decays into parity the moment competitors copy it."
      />

      <ReadStep n="1" title="POP and POD, defined" sub="Category entry ticket vs reason to choose" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Point of parity" v="Attributes shared by competing brands in the same category — industry-standard features and the minimum requirements to be considered. All disinfectants must kill germs; without POP a brand cannot be competitive" />
          <KV k="Point of differentiation" v="Unique attributes that distinguish one brand from competitors — reasons to choose one over another, creating competitive advantage" />
        </div>
      </Reveal>
      <Reveal className="mt-3">
        <div className="grid gap-3 sm:grid-cols-3">
          <KV k="Lysol" v="vs Genda-Final: better fragrance, plastic bottle, superior packaging" />
          <KV k="Oral-B" v="blue indicator bristles that fade to white when it's time to replace the toothbrush" />
          <KV k="Gillette Mark 3" v="three-blade design vs two-blade competitors — originally a POD" />
        </div>
      </Reveal>

      <ReadStep n="2" title="Watch a POD die" sub="Three blades → parity → five blades" />
      <Reveal><RazorLadder /></Reveal>

      <ReadStep n="3" title="Strategic implications" sub="What the treadmill demands" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Flexibility" v="Operate at multiple levels simultaneously with different product lines" />
          <KV k="Brand portfolio" v="Large organisations may own multiple distinct brands for different segments — L'Oréal and Body Shop" />
          <KV k="Market research" v="Niche and individual-level success requires deep consumer insights into specific needs" />
          <KV k="Positioning" v="Effective STP needs clear understanding of competitors, frame of reference and meaningful differentiation" />
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="The one-line summary">
          Continuous innovation is necessary to maintain a POD and <strong>prevent commoditisation</strong> — balance cost
          efficiency with customisation, because the appropriate strategy depends on resources, market conditions and
          consumer preferences.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>POP = industry-standard attributes <strong>required to compete</strong> (all disinfectants kill germs).</>,
          <>POD = unique attributes that <strong>create preference</strong> (Oral-B&apos;s fading bristles, Lysol&apos;s fragrance &amp; packaging).</>,
          <>Copied PODs become POPs: <strong>three blades → parity → five-blade Fusion</strong> as the new POD.</>,
          <>Run <strong>multiple levels and brands</strong> at once — flexibility is part of the design (L&apos;Oréal / Body Shop).</>,
          <>Innovate continuously or be <strong>commoditised</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L17 · THE THREE CIRCLES (three-circles)
   ============================================================ */

type Zone = "pop" | "pod" | "invalid" | null;

function ThreeCirclesMachine() {
  const [zone, setZone] = useState<Zone>(null);
  const labels: Record<Exclude<Zone, null>, string> = {
    pop: "POP — the triple intersection: where consumer need overlaps both your offering and competitors'. The category entry ticket.",
    pod: "POD — consumer desire ∩ your features, excluding competitors: the unique value proposition.",
    invalid: "Invalid positioning — features you and competitors both offer that consumers don't desire. Effort with no value.",
  };
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Target className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The three-circles locator</h3>
        <span className="chip">desires × competitors × you</span>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr,1fr]">
        <div className="rounded-2xl p-2" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
          <svg viewBox="0 0 520 360" className="h-auto w-full" role="img"
            aria-label="Three overlapping circles: consumer desires, competitor features and your features. The triple intersection is POP; consumer desires plus your features excluding competitors is POD; your features plus competitors without consumer desire is the invalid zone">
            <defs>
              <clipPath id="tcA"><circle cx="190" cy="140" r="95" /></clipPath>
              <clipPath id="tcB"><circle cx="330" cy="140" r="95" /></clipPath>
              <mask id="tcNoB"><rect x="0" y="0" width="520" height="360" fill="#ffffff" /><circle cx="330" cy="140" r="95" fill="#000000" /></mask>
              <mask id="tcNoA"><rect x="0" y="0" width="520" height="360" fill="#ffffff" /><circle cx="190" cy="140" r="95" fill="#000000" /></mask>
            </defs>
            {/* POD zone: A ∩ C minus B */}
            <g clipPath="url(#tcA)"><g mask="url(#tcNoB)">
              <motion.circle cx="260" cy="245" r="95" fill="#0f766e" opacity={0}
                animate={{ opacity: zone === "pod" ? 0.65 : 0 }} transition={{ duration: 0.4 }} />
            </g></g>
            {/* invalid zone: B ∩ C minus A */}
            <g clipPath="url(#tcB)"><g mask="url(#tcNoA)">
              <motion.circle cx="260" cy="245" r="95" fill="#9f3d54" opacity={0}
                animate={{ opacity: zone === "invalid" ? 0.6 : 0 }} transition={{ duration: 0.4 }} />
            </g></g>
            {/* POP zone: A ∩ B ∩ C */}
            <g clipPath="url(#tcA)"><g clipPath="url(#tcB)">
              <motion.circle cx="260" cy="245" r="95" fill="#e3c26b" opacity={0}
                animate={{ opacity: zone === "pop" ? 0.85 : 0 }} transition={{ duration: 0.4 }} />
            </g></g>
            {/* outlines */}
            {[
              { cx: 190, cy: 140, c: "#a97d2c" },
              { cx: 330, cy: 140, c: "#0f766e" },
              { cx: 260, cy: 245, c: "#14b8a6" },
            ].map((c, i) => (
              <motion.circle key={i} cx={c.cx} cy={c.cy} r="95" fill="none" stroke={c.c} strokeWidth="2.5" opacity={1}
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, delay: i * 0.18 }} />
            ))}
            {/* labels */}
            <text x="112" y="34" fontSize="12.5" fontWeight="800" fill="#a97d2c">Consumer desires</text>
            <text x="410" y="34" fontSize="12.5" fontWeight="800" fill="#0f766e">Competitor features</text>
            <text x="260" y="356" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#0f766e">Your features</text>
            <text x="260" y="168" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#5f7472">POP</text>
            <text x="176" y="252" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#5f7472">POD</text>
            <text x="348" y="252" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#5f7472">invalid</text>
          </svg>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <MBtn tone={zone === "pop" ? "gold" : "ghost"} onClick={() => setZone("pop")} ariaLabel="Light up the POP zone">Light POP</MBtn>
            <MBtn tone={zone === "pod" ? "teal" : "ghost"} onClick={() => setZone("pod")} ariaLabel="Light up the POD zone">Light POD</MBtn>
            <MBtn tone={zone === "invalid" ? "ghost" : "ghost"} onClick={() => setZone("invalid")} ariaLabel="Light up the invalid zone">Light invalid zone</MBtn>
            <MBtn onClick={() => setZone(null)} ariaLabel="Clear all zones">Clear</MBtn>
          </div>
          <Status tone={zone === "invalid" ? "rose" : zone === "pop" ? "gold" : "teal"}>
            {zone ? labels[zone] : "Press a button to light a zone — every positioning idea lives in one of these three places."}
          </Status>
          <div className="mt-3 grid gap-2">
            <KV k="POP location" v="Intersection of all three circles — consumer need overlaps both your and competitor offerings" />
            <KV k="POD location" v="Intersection of consumer desire and your features, excluding competitor features — the unique value proposition" />
            <KV k="Invalid zone" v="Features you offer that competitors also offer, without matching consumer desires" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MktgCirclesSection() {
  return (
    <Section id="three-circles">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 17"
        title={<>The <Grad>three circles</Grad> of positioning</>}
        lead="POPs and PODs, located on a map: consumer desires × competitor features × your organisation's features. Where the circles overlap decides what you must have, what wins, and what is wasted."
      />

      <ReadStep n="1" title="Why the model exists" sub="Two elements, balanced" />
      <Reveal>
        <p className={proseCls}>
          POPs represent features and benefits <strong>common across all competing brands</strong> — basic consumer
          expectations and category requirements (a toothbrush maintaining oral hygiene; an antiseptic having antiseptic
          properties). PODs are <strong>unique features or benefits competitors do not offer</strong> — valued by consumers,
          genuinely different, and able to fulfil desires in ways competitors cannot. Establish parity to compete;
          create differentiation to win.
        </p>
      </Reveal>

      <ReadStep n="2" title="The map itself" sub="Light the zones" />
      <Reveal><ThreeCirclesMachine /></Reveal>

      <ReadStep n="3" title="PODs expire" sub="The Dettol motion-sensor lesson" />
      <Reveal>
        <Callout kind="story" title="Motion-sensor hand wash — a POD that didn't travel">
          Dettol&apos;s motion-sensor hand-wash dispenser was initially a POD — but it became expensive and impractical for
          home use due to the high frequency of use, never achieved universal adoption, and remained primarily in{" "}
          <strong>commercial establishments</strong>. PODs have a finite lifespan; once competitors copy a differentiation,
          it automatically becomes a POP.
        </Callout>
      </Reveal>

      <ReadStep n="4" title="The two-step strategy, revisited" sub="Frame first, then differentiation" />
      <Reveal>
        <StepsFlow steps={[
          { label: "Determine frame of reference", sub: "natural + extended competitors → the required POPs", icon: <Layers className="h-5 w-5 shrink-0" style={{ color: "#0f766e" }} aria-hidden /> },
          { label: "Identify points of differentiation", sub: "find gaps between competitor offerings and consumer desires", icon: <Target className="h-5 w-5 shrink-0" style={{ color: "#a97d2c" }} aria-hidden /> },
        ]} />
      </Reveal>

      <ReadStep n="5" title="Critical success factors for a POD" sub="Five tests before you ship" />
      <Reveal>
        <div className="card-warm p-5">
          <ul className="grid gap-2 text-[.9rem] leading-relaxed text-[#2b2014]">
            <li>• <strong>Valued by consumers</strong> — addresses a genuine need or desire.</li>
            <li>• <strong>Defensible</strong> — ideally built on sustainable advantages: technology, patents, brand equity.</li>
            <li>• <strong>Addresses a market opportunity</strong> — a gap between what competitors offer and what consumers want.</li>
            <li>• <strong>Not easily replicated</strong> — if easily copied, it becomes a POP.</li>
            <li>• <strong>Clearly communicated</strong> — the target audience must understand and appreciate the differentiation.</li>
          </ul>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz source="Lecture 17 · concept check"
            q="In the three-circles model, a POD lives…"
            options={["at the triple intersection of all three circles", "where consumer desires meet your features, excluding competitors", "where you and competitors overlap without consumer desire", "outside all three circles"]}
            answer={1}
            explain="POP is the triple intersection; POD is consumer desire ∩ your features excluding competitors; the you∩competitor overlap without desire is the invalid zone." />
        </Reveal>
        <Reveal delay={100}>
          <Takeaways items={[
            <>POPs ensure <strong>viability</strong> in the category; PODs create <strong>preference</strong> and justify premium pricing or share gains.</>,
            <>POP = <strong>triple intersection</strong>; POD = desires ∩ you, <strong>minus competitors</strong>.</>,
            <>The you∩competitor overlap without desire is the <strong>invalid zone</strong> — effort nobody asked for.</>,
            <>PODs have a <strong>finite lifespan</strong> — Dettol&apos;s motion-sensor dispenser stayed commercial for a reason.</>,
            <>Great positioning fulfils consumer desires <strong>in ways competitors cannot</strong>.</>,
          ]} />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   L17 · CASE FILES (pod-pop-cases)
   ============================================================ */

function OralBCase() {
  const [worn, setWorn] = useState(false);
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <KV k="POP" v="Maintaining oral hygiene — common across every brand in the crowded toothbrush market" />
        <KV k="POD" v="Colour-changing bristles that indicate replacement — blue dye fades to white, signalling a new brush" />
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
        <div className="flex items-center justify-between gap-3">
          <p className="text-[.8rem] font-extrabold text-[#5f7472]">bristle indicator</p>
          <div className="flex gap-2">
            <MBtn tone={!worn ? "teal" : "ghost"} onClick={() => setWorn(false)} ariaLabel="Reset the bristles to new">New brush</MBtn>
            <MBtn tone={worn ? "gold" : "ghost"} onClick={() => setWorn(true)} ariaLabel="Simulate weeks of use">Weeks pass</MBtn>
          </div>
        </div>
        <div className="mt-3 flex h-9 items-end gap-1.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.div key={i} className="h-8 flex-1 rounded-t-md"
              style={{ background: "#0f766e" }}
              animate={{ background: worn ? "#f7f5ec" : "#0f766e" }}
              transition={{ duration: 0.5, delay: worn ? i * 0.07 : 0 }} />
          ))}
        </div>
        <p className="mt-2 text-[.8rem] font-bold" style={{ color: worn ? "#a97d2c" : "#0f766e" }}>
          {worn ? "Dye faded — time for a new brush. The benefit, not the feature, did the talking." : "Fresh brush — indicator fully saturated."}
        </p>
      </div>
      <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
        The move focused on <strong>consumer benefit rather than product feature</strong> and differentiated Oral-B{" "}
        <strong>overnight without changing the underlying technology</strong>. Once competitors copied it, the feature
        transitioned from POD to POP.
      </p>
    </div>
  );
}

function QuirkCase() {
  const [day, setDay] = useState(0);
  const covers = ["#a97d2c", "#0f766e", "#9f3d54"];
  const cover = covers[Math.floor(day / 10) % covers.length];
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <KV k="POP" v="Furnishing homes with quality furniture — but furniture is expensive and a long-term investment" />
        <KV k="POD" v="Affordable furniture covers and cushioning — a complete aesthetic makeover at minimal cost" />
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
        <svg viewBox="0 0 300 150" className="mx-auto h-auto w-full max-w-xs" role="img"
          aria-label="A sofa whose cover colour changes as ten-day cycles pass">
          <motion.rect x="40" y="30" width="220" height="52" rx="14" fill={cover} animate={{ fill: cover }} transition={{ duration: 0.5 }} />
          <motion.rect x="28" y="70" width="244" height="42" rx="12" fill={cover} animate={{ fill: cover }} transition={{ duration: 0.5 }} />
          <rect x="40" y="76" width="102" height="30" rx="8" fill="#f7f5ec" opacity={0.35} />
          <rect x="158" y="76" width="102" height="30" rx="8" fill="#f7f5ec" opacity={0.35} />
          <rect x="44" y="112" width="14" height="22" rx="4" fill="#5f7472" />
          <rect x="242" y="112" width="14" height="22" rx="4" fill="#5f7472" />
        </svg>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[.8rem] font-extrabold text-[#5f7472]">day {day} of ownership — same sofa, new appearance every 10 days</p>
          <MBtn tone="teal" onClick={() => setDay((d) => d + 10)} ariaLabel="Advance ten days to change the cover">10 days pass</MBtn>
        </div>
      </div>
      <p className="mt-3 text-[.88rem] leading-relaxed text-[#3a4a48]">
        House of Quirk created a <strong>niche between traditional furniture sales and basic cushion covers</strong> —
        flexibility without requiring major financial investment.
      </p>
    </div>
  );
}

function SavlonVolley() {
  const { step, next, reset, playing, toggle } = useStepPlayer(3, 3000);
  const beats = [
    { who: "Dettol holds the fort", d: "Dettol dominates with a strong association as “mother's favourite”. POP: antiseptic properties. But the stinging sensation during application causes consumer discomfort.", tilt: 0 },
    { who: "Savlon attacks", d: "Savlon matches the antiseptic POP and introduces a POD: the “no sting” formula. Emotional advertising — a child not experiencing pain — shifts preference. Significant market share gained by addressing a pain point competitors ignored.", tilt: 1 },
    { who: "Dettol counters", d: "Dettol smartly repositions the sting as evidence of effectiveness: “Sting means it's working.” The limitation is converted into a POD, the narrative reframed through advertising — and market leadership is regained.", tilt: 2 },
  ];
  const arrowX = beats[step].tilt === 0 ? 50 : beats[step].tilt === 1 ? 20 : 80;
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {beats.map((b, i) => (
          <span key={b.who} className="rounded-full px-3 py-1.5 text-[.74rem] font-extrabold transition-colors duration-300"
            style={{ background: step === i ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff", color: step === i ? "#f4fbf9" : "#0f766e", border: "1px solid #cfe3de" }}>
            {i + 1}. {b.who}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
        <div className="flex items-center gap-3">
          <span className="rounded-xl px-3 py-2 text-[.8rem] font-extrabold text-white" style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)" }}>Dettol</span>
          <div className="relative h-10 flex-1">
            <motion.div className="absolute top-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[.72rem] font-extrabold"
              style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#fffaf0", left: `${arrowX}%` }}
              animate={{ left: `${arrowX}%` }} transition={{ duration: 0.7, ease: "easeInOut" }}>
              momentum →
            </motion.div>
          </div>
          <span className="rounded-xl px-3 py-2 text-[.8rem] font-extrabold" style={{ background: "#fdf6e7", border: "1px solid #a97d2c", color: "#a97d2c" }}>Savlon</span>
        </div>
        <p className="mt-3 text-[.9rem] leading-relaxed text-[#3a4a48]"><strong className="text-[#0f766e]">{beats[step].who}.</strong> {beats[step].d}</p>
      </div>
      <PlayerControls step={step} total={3} playing={playing} onToggle={toggle} onNext={next} onReset={reset}
        labels={["volley 1/3", "volley 2/3", "volley 3/3"]} />
    </div>
  );
}

const CASE_TABS = [
  { k: "Oral-B toothbrush", icon: Brush, el: <OralBCase /> },
  { k: "House of Quirk", icon: Sofa, el: <QuirkCase /> },
  { k: "Dettol vs Savlon", icon: Droplets, el: <SavlonVolley /> },
];

function CaseFilesMachine() {
  const [tab, setTab] = useState(0);
  const TabIcon = CASE_TABS[tab].icon;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <TabIcon className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Case files — open one</h3>
        <span className="chip">three brands, one pattern</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {CASE_TABS.map((t, i) => (
          <MBtn key={t.k} tone={tab === i ? "teal" : "ghost"} onClick={() => setTab(i)} ariaLabel={`Open the ${t.k} case file`}>
            {t.k}
          </MBtn>
        ))}
      </div>
      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            {CASE_TABS[tab].el}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function MktgPopPodCasesSection() {
  return (
    <Section id="pod-pop-cases">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 17"
        title={<>Case files: <Grad>POPs and PODs at work</Grad></>}
        lead="Three stories that make the framework tangible: a bristle that fades, a sofa that changes clothes, and an antiseptic war fought over a sting."
      />

      <ReadStep n="1" title="Open a case file" sub="Oral-B · House of Quirk · Dettol vs Savlon" />
      <Reveal><CaseFilesMachine /></Reveal>

      <ReadStep n="2" title="The pattern underneath" sub="Every case runs the same play" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-3">
          <KV k="Find the POP" v="The shared expectation: oral hygiene · quality furniture · antiseptic properties" />
          <KV k="Add a valued POD" v="Fading bristles · a new look every 10 days · a no-sting formula" />
          <KV k="Defend or reframe" v="When copied, the POD becomes POP — Dettol reframed its sting as proof of working" />
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Oral-B: a <strong>colour-changing bristle</strong> (blue → white) differentiated the brand overnight — benefit, not feature.</>,
          <>House of Quirk: furniture covers created a niche between furniture sales and cushion covers — <strong>a makeover every 10 days</strong>.</>,
          <>Savlon attacked the sting Dettol ignored; Dettol came back with <strong>“Sting means it&apos;s working.”</strong></>,
          <>Every case: <strong>hold the POP, own the POD</strong>, and reframe when attacked.</>,
          <>Copied PODs decay into POPs — the pattern repeats across categories.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L18 · WHY PEOPLE BUY (why-buy)
   ============================================================ */

const VERBS = [
  { k: "reach", from: 0.2, to: 0.82, d: "cross the gap from where you are to where you wish to be" },
  { k: "restore", from: 0.98, to: 0.82, d: "return to a desired state you once held" },
  { k: "maintain", from: 0.82, to: 0.82, d: "hold the desired state steady" },
  { k: "protect", from: 0.82, to: 0.82, d: "guard the desired state from slipping" },
] as const;

function DesiredStateMachine() {
  const [verb, setVerb] = useState<number | null>(null);
  const v = verb === null ? null : VERBS[verb];
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Heart className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">The desired-state machine</h3>
        <span className="chip">reach · restore · maintain · protect</span>
      </div>
      <div className="relative mt-8 h-14 rounded-full" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
        <div className="absolute left-[82%] top-0 flex h-14 -translate-x-1/2 items-center">
          <span className="rounded-lg px-2.5 py-1 text-[.68rem] font-extrabold" style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", color: "#fffaf0" }}>
            desired state
          </span>
        </div>
        <div className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-[.68rem] font-extrabold text-[#5f7472]">
          current state
        </div>
        {v ? (
          <motion.div key={v.k} className="absolute top-1/2 h-9 w-9 -translate-y-1/2 rounded-full"
            style={{ background: "linear-gradient(135deg,#14b8a6,#0f766e)", border: "3px solid #fff", boxShadow: "0 4px 12px rgba(15,118,110,.35)", left: `${v.from * 100}%` }}
            animate={{ left: `${v.to * 100}%`, scale: v.k === "maintain" ? [1, 1.12, 1] : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", scale: { duration: 1.4, repeat: v.k === "maintain" ? Infinity : 0 } }} />
        ) : null}
        {v && v.k === "protect" ? (
          <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}
            className="absolute left-[82%] top-[-14px] -translate-x-1/2 rounded-lg px-2 py-0.5 text-[.62rem] font-extrabold"
            style={{ background: "#0f766e", color: "#f4fbf9" }}>
            shielded
          </motion.div>
        ) : null}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {VERBS.map((b, i) => (
          <MBtn key={b.k} tone={verb === i ? "teal" : "ghost"} onClick={() => setVerb(i)} ariaLabel={`Animate the ${b.k} motivation`}>
            {b.k}
          </MBtn>
        ))}
        <MBtn onClick={() => setVerb(null)} ariaLabel="Clear the machine">Clear</MBtn>
      </div>
      <Status>
        {v ? `Buy to ${v.k.toUpperCase()} a desired state — ${v.d}. The purchase is about the gap between the current state and where the consumer wishes to be.`
          : "Purchases are driven by needs, desires, impulses and emotional states — and context matters (the same consumer buys coffee differently at different times of day). Pick a verb."}
      </Status>
    </div>
  );
}

function EvidenceReveal() {
  const { step, next, reset, playing, toggle } = useStepPlayer(2, 2600);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <FlaskConical className="h-6 w-6" style={{ color: "#a97d2c" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Forest Essentials — the evidence machine</h3>
        <span className="chip">₹5,500–7,000 for 30ml</span>
      </div>
      <div className="mt-5 grid gap-3">
        {[{ v: 100, l: "100%" }, { v: 97, l: "97%" }, { v: 94, l: "94%" }].map((s, i) => (
          <div key={s.l}>
            <p className="text-[.78rem] font-bold text-[#5f7472]">clinically claimed result {i + 1}</p>
            <div className="mt-1 h-7 rounded-lg" style={{ background: "#eef0ea" }}>
              <motion.div className="h-7 rounded-lg" style={{ background: "linear-gradient(135deg,#e3c26b,#a97d2c)", width: 0 }}
                animate={{ width: step >= 0 ? `${s.v}%` : 0 }} transition={{ duration: 0.8, delay: i * 0.15 }} />
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {step >= 1 ? (
          <motion.div key="fine" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="mt-4 rounded-xl px-4 py-3" style={{ background: "#f7ecec", border: "1px dashed #dcc3c9" }}>
            <p className="text-[.9rem] font-extrabold text-[#9f3d54]">The fine print: sample size was only 36.</p>
            <p className="mt-1 text-[.85rem] leading-relaxed text-[#2b2014]">
              Consumers overlook the limitation and assume they belong to the positive percentage groups. The{" "}
              <strong>appearance of evidence</strong> substitutes for the actual quality of evidence.
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <PlayerControls step={step} total={2} playing={playing} onToggle={toggle} onNext={next} onReset={reset}
        labels={["the stats", "the fine print"]} />
    </div>
  );
}

export function MktgWhyBuySection() {
  return (
    <Section id="why-buy">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 18"
        title={<>Why do people <Grad>buy</Grad>?</>}
        lead="The fundamental question of consumer behaviour: purchases driven by needs, desires, impulses and emotional states — in minds that are never empty."
      />

      <ReadStep n="1" title="Every purchase closes a gap" sub="Reach · restore · maintain · protect" />
      <Reveal>
        <p className={proseCls}>
          Consumers purchase to <strong>reach, restore, maintain, or protect a desired state</strong> — the gap between
          their current state and where they wish to be. And marketing never lands on a blank page: it engages with
          existing memories, experiences, expectations, desires, identities, biases and goals.{" "}
          <strong>Minds are never empty.</strong>
        </p>
      </Reveal>
      <Reveal className="mt-5"><DesiredStateMachine /></Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="Stimulus and imagination">
          Consumers respond to <strong>imagined consumption</strong> almost as strongly as to actual product information.
          Visual representations and storytelling create experiences that make products feel real and desirable.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="Three case studies — the story beyond the product" sub="Swiggy mangoes · TRIA · Forest Essentials" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-warm lift p-5">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#0f766e]">Swiggy mangoes</p>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
              Water droplets, fresh appearance — sensory appeal through visual representation. Consumers feel they are
              looking at real mangoes: <strong>imagined consumption</strong> that sells an experience and freshness, not
              just a product.
            </p>
          </div>
          <div className="card-warm lift p-5">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#0f766e]">TRIA hair treatment</p>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
              Targets people experiencing hair loss or thinning; before-and-after narratives attempt to{" "}
              <strong>reduce the distance between actual self and desired self</strong>, connecting with self-esteem.
              Relevance varies by audience — it matters only to those with the problem.
            </p>
          </div>
          <div className="card-warm lift p-5">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#a97d2c]">Forest Essentials serum</p>
            <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
              ₹5,500–7,000 for 30ml. Statistics — <strong>100%, 97%, 94%</strong> — build credibility; luxury minimalistic
              upmarket packaging; visual appeal plus scientific claims create desirability. Sample size: 36.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5"><EvidenceReveal /></Reveal>

      <ReadStep n="3" title="Story over product" sub="The insight that ties the cases together" />
      <Reveal>
        <ul className={`${proseCls} grid gap-2`}>
          <li>• Marketing creates narratives and storylines, not just product features.</li>
          <li>• The emotional narrative helps consumers achieve their desired state more than the product itself.</li>
          <li>• Consumers frequently use the <strong>appearance of evidence</strong> — how data is presented — rather than the actual quality of evidence.</li>
          <li>• Successful marketing combines product benefits with storytelling that addresses aspirations and self-esteem.</li>
        </ul>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>People buy to <strong>reach, restore, maintain or protect</strong> a desired state.</>,
          <>Marketing works on minds that are <strong>never empty</strong> — memories, biases, identities, goals already live there.</>,
          <>Imagined consumption is nearly as strong as the real thing — <strong>Swiggy&apos;s droplets sell freshness</strong>.</>,
          <>TRIA sells the distance between <strong>actual self and desired self</strong> — relevance varies by audience.</>,
          <>₹5,500–7,000 serum: <strong>100% · 97% · 94%</strong> stats on a sample of <strong>36</strong> — appearance of evidence beats quality of evidence.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L18 · ERAS & NUDGES (eras-nudges)
   ============================================================ */

const ERAS = [
  {
    k: "Classical era", span: "1950s–60s",
    body: "Dominated by classical economics: consumers are rational beings making predictable choices. People buy only what they need; demand and supply balance naturally; behaviour is easy to forecast.",
    icon: History,
  },
  {
    k: "Cognitive revolution", span: "1970s–90s",
    body: "The key shift: consumers are irrational, not rational decision-makers. Daniel Kahneman and Amos Tversky's “Judgment under Uncertainty” showed decisions can be irrational with no logical basis — behaviour cannot be predicted with certainty.",
    icon: Brain,
  },
  {
    k: "Contemporary era", span: "present",
    body: "Nudge theory, introduced by Professor Richard Thaler: create a choice environment that guides consumers toward decisions good for them ethically and socially — without restricting freedom of choice. Like a mother elephant nudging her baby back on track.",
    icon: Hand,
  },
];

function ErasTimeline() {
  const { step, next, reset, playing, toggle } = useStepPlayer(3, 3400);
  const EraIcon = ERAS[step].icon;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <History className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Three eras of the consumer</h3>
        <span className="chip">rational → irrational → nudged</span>
      </div>
      <div className="mt-6">
        <div className="relative h-2 rounded-full" style={{ background: "#e4ebe8" }}>
          <motion.div className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "linear-gradient(90deg,#14b8a6,#0f766e)" }}
            animate={{ width: `${(step / 2) * 100}%` }} transition={{ duration: 0.6 }} />
          {ERAS.map((e, i) => (
            <span key={e.k}
              className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[.72rem] font-extrabold transition-all duration-300"
              style={{
                left: `${(i / 2) * 100}%`,
                background: i <= step ? "linear-gradient(135deg,#14b8a6,#0f766e)" : "#ffffff",
                color: i <= step ? "#f4fbf9" : "#5f7472",
                border: "2px solid " + (i <= step ? "#0f766e" : "#d5e6e1"),
              }}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[.72rem] font-extrabold uppercase tracking-[.12em] text-[#5f7472]">
          {ERAS.map((e) => (<span key={e.k} className="w-1/3 text-center last:text-right first:text-left">{e.span}</span>))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}
          className="mt-5 rounded-2xl p-5" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
          <p className="flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]">
            <EraIcon className="h-5 w-5" style={{ color: "#0f766e" }} aria-hidden /> {ERAS[step].k} · <span style={{ color: "#a97d2c" }}>{ERAS[step].span}</span>
          </p>
          <p className="mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]">{ERAS[step].body}</p>
        </motion.div>
      </AnimatePresence>
      <PlayerControls step={step} total={3} playing={playing} onToggle={toggle} onNext={next} onReset={reset}
        labels={["classical era", "cognitive revolution", "contemporary era"]} />
    </div>
  );
}

export function MktgErasSection() {
  return (
    <Section id="eras-nudges">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 18"
        title={<>Rational → irrational → <Grad>nudged</Grad></>}
        lead="How the study of the consumer evolved: classical economics trusted the rational buyer, Kahneman and Tversky broke the assumption, and Thaler's nudges now design the choice environment itself."
      />

      <ReadStep n="1" title="The evolution, era by era" sub="Play through seventy years" />
      <Reveal><ErasTimeline /></Reveal>

      <ReadStep n="2" title="Evidence for irrationality" sub="The breakfast menu experiment" />
      <Reveal>
        <Callout kind="story" title="Idly, biryani, desserts — in the morning">
          Presented with food menu options in the morning, people choose varied items — idly, biryani, desserts — despite
          it being early morning. Rational behaviour would suggest everyone picks light breakfast options; the varied
          choices reflect <strong>individual experiences, memories, beliefs and preferences</strong>.
        </Callout>
      </Reveal>
      <Reveal className="mt-4">
        <div className="card-warm p-5">
          <p className="text-[.8rem] font-extrabold uppercase tracking-[.14em] text-[#a97d2c]">Heuristics at work — Nutella&apos;s Amazon listing</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["800 ratings", "4.5 stars", "₹311 discount", "free delivery", "cash back offers", "stock availability"].map((h) => (
              <span key={h} className="chip">{h}</span>
            ))}
          </div>
          <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
            Mental shortcuts that help consumers move from one decision stage to the next — and choose right options efficiently.
          </p>
        </div>
      </Reveal>

      <ReadStep n="3" title="The nudge toolkit" sub="Choice architecture in the wild" />
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "European trash disposal", d: "Adding an interactive ramp near trash cans transformed waste disposal into a fun activity — proper disposal behaviour increased." },
            { t: "Staircase placement", d: "Positioning stairs before elevators encourages physical activity; design influences behaviour positively." },
            { t: "Bestseller labels", d: "Marking products as bestsellers creates choice architecture without demeaning other products — guiding selection toward popular options." },
            { t: "Product recommendations", d: "Suggesting products based on consumption patterns guides consumers toward suitable choices." },
          ].map((n) => (
            <div key={n.t} className="card-warm lift p-5">
              <p className="flex items-center gap-2 font-extrabold text-[#1f2b2b]"><Hand className="h-4 w-4" style={{ color: "#a97d2c" }} aria-hidden /> {n.t}</p>
              <p className="mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">{n.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <ReadStep n="4" title="Heuristics vs nudges — the distinction" sub="Shortcuts in the mind vs design of the environment" />
      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          <KV k="Heuristics" v="Mental shortcuts that help compare options — ratings, prices, discounts" />
          <KV k="Nudges" v="Environmental design that guides behavior toward naturally better choices without direct persuasion" />
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Quiz source="Lecture 18 · concept check"
          q="A 'bestseller' label on a menu is best described as…"
          options={["a heuristic, because it is a mental shortcut", "a nudge, because it redesigns the choice environment without restricting choice", "a discount, because it changes the price", "irrational behaviour with no logical basis"]}
          answer={1}
          explain="Nudges are environmental design — choice architecture that guides behavior toward naturally better choices without direct persuasion. Heuristics are the mental shortcuts inside the consumer." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Classical era (1950s–60s): <strong>rational, predictable</strong> consumers who buy only what they need.</>,
          <>Cognitive revolution (1970s–90s): <strong>Kahneman &amp; Tversky</strong>, “Judgment under Uncertainty” — consumers are irrational.</>,
          <>Contemporary era: <strong>Thaler&apos;s nudges</strong> — the mother-elephant philosophy of gentle environmental design.</>,
          <>Heuristics are <strong>mental shortcuts</strong> (800 ratings · 4.5 stars · ₹311 discount); nudges are <strong>designed environments</strong>.</>,
          <>Ethical marketing nudges consumers toward decisions <strong>beneficial to both parties</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L19 · FIVE STAGES (five-stages)
   ============================================================ */

const STAGES = [
  {
    k: "Problem recognition", icon: Lightbulb,
    d: "A need or gap between desired and existing state is identified — as simple as feeling hungry, as complex as needing new electronics. The triggering point for all subsequent purchasing decisions.",
  },
  {
    k: "Information search", icon: Search,
    d: "Consumers actively seek information about potential solutions across channels: websites (Amazon, Swiggy Instamart), physical stores, social media, peer recommendations, expert reviews. The extent of search varies with product importance and involvement.",
  },
  {
    k: "Evaluation of alternatives", icon: Scale,
    d: "Comparison within a consideration set. Key attributes are identified (memory, graphics, price for laptops) and a weighted scoring method is often used — the final choice goes to the best overall value.",
  },
  {
    k: "Purchase decision", icon: CreditCard,
    d: "The consumer commits to buying — the actual transaction point, often influenced by heuristics and mental shortcuts that expedite the decision.",
  },
  {
    k: "Post-purchase behavior", icon: HeartHandshake,
    d: "Feelings after purchase range from satisfaction and confidence to regret and dissatisfaction. Critical for customer retention and brand loyalty — often overlooked in theoretical models but essential in practice.",
  },
];

function FiveStagePlayer() {
  const { step, next, reset, playing, toggle } = useStepPlayer(5, 2600);
  const Icon = STAGES[step].icon;
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-xl font-extrabold text-[#1f2b2b]">🧭</p>
        <h3 className="text-xl font-bold text-[#1f2b2b]">The five-stage step player</h3>
        <span className="chip">the textbook spine of a decision</span>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-5">
        {STAGES.map((s, i) => {
          const active = step === i;
          const done = i < step;
          return (
            <div key={s.k} className="rounded-xl px-3 py-3 text-center transition-all duration-300"
              style={{
                background: active ? "linear-gradient(135deg,#14b8a6,#0f766e)" : done ? "#edf6f4" : "#ffffff",
                border: `1px solid ${active ? "#0f766e" : "#dce8e4"}`,
                opacity: active || done ? 1 : 0.6,
              }}>
              <s.icon className="mx-auto h-5 w-5" style={{ color: active ? "#e3c26b" : "#0f766e" }} aria-hidden />
              <p className="mt-1.5 text-[.76rem] font-extrabold leading-tight" style={{ color: active ? "#f4fbf9" : "#1f2b2b" }}>
                {i + 1}. {s.k}
              </p>
            </div>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
          className="mt-4 rounded-2xl p-5" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
          <p className="flex items-center gap-2 text-lg font-extrabold text-[#1f2b2b]">
            <Icon className="h-5 w-5" style={{ color: "#a97d2c" }} aria-hidden /> Stage {step + 1} · {STAGES[step].k}
          </p>
          <p className="mt-2 text-[.92rem] leading-relaxed text-[#3a4a48]">{STAGES[step].d}</p>
        </motion.div>
      </AnimatePresence>
      <PlayerControls step={step} total={5} playing={playing} onToggle={toggle} onNext={next} onReset={reset} />
      <Status>
        {step === 4
          ? "Stage 5 closes the loop — post-purchase satisfaction feeds retention and loyalty, and sets up the next problem recognition."
          : "The theory assumes a linear, sequential process — consumers follow all five stages in order. (Reality is messier; see the next chapter.)"}
      </Status>
    </div>
  );
}

export function MktgStagesSection() {
  return (
    <Section id="five-stages">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 19"
        title={<>The <Grad>five stages</Grad> of buying</>}
        lead="Problem recognition → information search → evaluation of alternatives → purchase decision → post-purchase behavior — the theoretical framework every marketer learns first."
      />

      <ReadStep n="1" title="Walk the stages" sub="Play, or step through manually" />
      <Reveal><FiveStagePlayer /></Reveal>

      <ReadStep n="2" title="Heuristics speed every stage up" sub="Mental shortcuts without extensive analysis" />
      <Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Ratings & reviews", d: "High ratings — like 4.5 stars — provide assurance of product quality." },
            { t: "Brand name", d: "Established brands like JBL or Samsung serve as quality indicators." },
            { t: "Price discounts", d: "Percentage off or reduced prices influence purchase decisions." },
            { t: "Scarcity", d: "“Only 6 rooms left” creates urgency to purchase immediately." },
            { t: "Free delivery", d: "Adds perceived value to the offering." },
            { t: "Warranty & returns", d: "Warranty and return policies reduce perceived risk." },
            { t: "Visual elements", d: "Product images and property photos influence decision-making." },
            { t: "H&M's nudge", d: "Items labelled “Few pieces left” create urgency to buy before stock-outs." },
          ].map((h) => (
            <div key={h.t} className="card-warm lift p-4">
              <p className="text-[.84rem] font-extrabold text-[#1f2b2b]">{h.t}</p>
              <p className="mt-1 text-[.8rem] leading-relaxed text-[#2b2014]">{h.d}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Quiz source="Lecture 19 · concept check"
          q="Weighted scoring — assigning importance to attributes like memory, graphics and price — belongs to which stage?"
          options={["Problem recognition", "Information search", "Evaluation of alternatives", "Post-purchase behavior"]}
          answer={2}
          explain="Evaluation of alternatives compares options within the consideration set, often weighting attributes; the final choice is the best overall value." />
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <><strong>Problem recognition</strong> is the trigger — a gap between desired and existing state.</>,
          <>Search happens across <strong>Amazon, Swiggy Instamart, stores, social media, peers, experts</strong>.</>,
          <>Evaluation = a consideration set + <strong>weighted scoring</strong> on key attributes.</>,
          <>Purchase is the <strong>transaction point</strong>, accelerated by heuristics.</>,
          <>Post-purchase feelings (satisfaction ↔ regret) decide <strong>retention and loyalty</strong> — often overlooked, always essential.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L19 · THE MESSY MIDDLE (messy-middle)
   ============================================================ */

const MM_NODES = [
  { x: 70, label: "Recognition" },
  { x: 190, label: "Search" },
  { x: 310, label: "Evaluation" },
  { x: 430, label: "Purchase" },
  { x: 550, label: "Post-purchase" },
];

function LinearVsMessyMachine() {
  const [mode, setMode] = useState<"linear" | "messy">("linear");
  const { step, next, reset, playing, toggle } = useStepPlayer(5, 1500);
  return (
    <div className="card-warm lift p-5 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        <Timer className="h-6 w-6" style={{ color: "#0f766e" }} aria-hidden />
        <h3 className="text-xl font-bold text-[#1f2b2b]">Theory vs reality — the same five stages</h3>
        <span className="chip">toggle the lens</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <MBtn tone={mode === "linear" ? "teal" : "ghost"} onClick={() => setMode("linear")} ariaLabel="Show the linear theory view">Theory: linear</MBtn>
        <MBtn tone={mode === "messy" ? "gold" : "ghost"} onClick={() => setMode("messy")} ariaLabel="Show the messy reality view">Reality: messy</MBtn>
      </div>
      <svg viewBox="0 0 640 260" className="mt-4 h-auto w-full" role="img"
        aria-label="Five decision stages on a rail: in linear mode a token moves straight through them; in messy mode backward and skip arrows appear showing the non-linear path">
        {/* rail */}
        <line x1="40" y1="90" x2="600" y2="90" stroke="#d5e6e1" strokeWidth="3" />
        {MM_NODES.map((n, i) => (
          <g key={n.label}>
            <circle cx={n.x} cy="90" r="24" fill={mode === "linear" && i === step ? "#0f766e" : "#ffffff"}
              stroke={mode === "messy" ? "#a97d2c" : "#0f766e"} strokeWidth="2.5" opacity={mode === "linear" && i > step ? 0.55 : 1} />
            <text x={n.x} y="95" textAnchor="middle" fontSize="11" fontWeight="800"
              fill={mode === "linear" && i === step ? "#f4fbf9" : "#0f766e"}>{i + 1}</text>
            <text x={n.x} y="132" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5f7472">{n.label}</text>
          </g>
        ))}
        {/* linear arrows */}
        {mode === "linear" ? (
          <g>
            {MM_NODES.slice(0, -1).map((n, i) => (
              <motion.line key={i} x1={n.x + 26} y1="90" x2={MM_NODES[i + 1].x - 26} y2="90" stroke="#14b8a6" strokeWidth="2.5"
                opacity={1} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            ))}
            <motion.circle cx={MM_NODES[0].x} cy="50" r="9" fill="#e3c26b" stroke="#a97d2c" strokeWidth="1.5"
              animate={{ cx: MM_NODES[step].x }} transition={{ type: "spring", stiffness: 160, damping: 20 }} />
          </g>
        ) : (
          <g>
            {/* backtrack arcs */}
            <motion.path d="M 310 62 C 280 30, 220 30, 190 62" fill="none" stroke="#9f3d54" strokeWidth="2" strokeDasharray="6 5" opacity={1}
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <text x="250" y="22" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#9f3d54">back to search</text>
            <motion.path d="M 430 62 C 400 30, 340 30, 310 62" fill="none" stroke="#9f3d54" strokeWidth="2" strokeDasharray="6 5" opacity={1}
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <text x="370" y="46" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#9f3d54">cart add → remove</text>
            {/* skip arc */}
            <motion.path d="M 70 130 C 180 190, 320 190, 430 130" fill="none" stroke="#a97d2c" strokeWidth="2" strokeDasharray="6 5" opacity={1}
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            <text x="250" y="196" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#a97d2c">
              skip: low involvement · repeat brands · impulse · recommendations
            </text>
            <text x="530" y="170" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#5f7472">cancel after placement</text>
          </g>
        )}
      </svg>
      {mode === "linear" ? (
        <>
          <PlayerControls step={step} total={5} playing={playing} onToggle={toggle} onNext={next} onReset={reset} />
          <Status>
            Theory perspective: a linear, sequential process — Recognition → Search → Evaluation → Purchase → Post-purchase,
            all five stages in order.
          </Status>
        </>
      ) : (
        <Status tone="gold">
          Reality: consumers backtrack (evaluation → search), skip stages entirely for low-involvement products, repeat
          purchases from loyal brands, impulse purchases during sales, and recommendations — and sometimes cancel orders
          after placement.
        </Status>
      )}
    </div>
  );
}

function InfinityLoopMachine() {
  const [playing, setPlaying] = useState(true);
  const [runId, setRunId] = useState(0);
  return (
    <DarkPanel>
      <div className="flex flex-wrap items-center gap-3">
        <InfinityIcon className="h-6 w-6" style={{ color: "#e3c26b" }} aria-hidden />
        <h3 className="text-xl font-bold" style={{ color: "#e9f2ee" }}>The infinity loop</h3>
        <span className="chip">exploration × evaluation, forever until the gap closes</span>
      </div>
      <div className="mt-4 rounded-2xl p-2" style={{ background: "rgba(255,255,255,.03)" }}>
        <svg viewBox="0 0 600 300" className="h-auto w-full" role="img"
          aria-label="An infinity-shaped loop connecting exploration and evaluation, with a gold token travelling around it endlessly">
          <defs>
            <linearGradient id="mmInfGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="55%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#e3c26b" />
            </linearGradient>
          </defs>
          <path id="mmInfPath"
            d="M300 150 C 258 76, 126 76, 126 150 C 126 224, 258 224, 300 150 C 342 76, 474 76, 474 150 C 474 224, 342 224, 300 150 Z"
            fill="none" stroke="url(#mmInfGrad)" strokeWidth="4" opacity={0.9} />
          <text x="182" y="72" textAnchor="middle" fontSize="14" fontWeight="800" fill="#e3c26b">explore</text>
          <text x="420" y="72" textAnchor="middle" fontSize="14" fontWeight="800" fill="#14b8a6">evaluate</text>
          <text x="300" y="158" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#9fbcb4">the messy middle</text>
          {playing ? (
            <circle key={runId} r="10" fill="#e3c26b" stroke="#0c2124" strokeWidth="2.5">
              <animateMotion dur="7s" repeatCount="indefinite" rotate="0">
                <mpath href="#mmInfPath" />
              </animateMotion>
            </circle>
          ) : null}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <MBtn tone="teal" onClick={() => setPlaying(!playing)} ariaLabel={playing ? "Pause the loop token" : "Play the loop token"}>
          {playing ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
          {playing ? "Pause" : "Play"}
        </MBtn>
        <MBtn onClick={() => { setPlaying(true); setRunId((r) => r + 1); }} ariaLabel="Restart the loop token">
          <RotateCcw className="h-4 w-4" aria-hidden />Restart
        </MBtn>
      </div>
      <p aria-live="polite" className="mt-4 min-h-[2.4rem] rounded-xl px-3.5 py-2.5 font-mono-warm text-[.85rem] font-bold leading-relaxed"
        style={{ background: "rgba(255,255,255,.05)", border: "1px dashed rgba(227,194,107,.3)", color: "#e3c26b" }}>
        The consumer explores options and evaluates alternatives in an infinity-loop pattern — the loop continues until
        the gap between desired and existing state is satisfied. Non-linear, iterative — never a straight line.
      </p>
    </DarkPanel>
  );
}

export function MktgMessySection() {
  return (
    <Section id="messy-middle">
      <SectionHead
        eyebrow="Principles of Marketing · Lecture 19"
        title={<>The <Grad>messy middle</Grad></>}
        lead="Linear vs non-linear: real decisions skip stages, backtrack, and loop between exploration and evaluation — an infinity that only closes when the gap between desired and existing state is satisfied."
      />

      <ReadStep n="1" title="Theory vs reality" sub="The same five stages, two very different shapes" />
      <Reveal><LinearVsMessyMachine /></Reveal>

      <ReadStep n="2" title="The loop, live" sub="Exploration and evaluation trade places" />
      <Reveal><InfinityLoopMachine /></Reveal>

      <ReadStep n="3" title="What makes the middle messy" sub="Involvement and time" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-warm lift p-5">
            <p className="font-extrabold text-[#1f2b2b]">High-involvement products</p>
            <p className="mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
              Cars, laptops, properties — all five stages methodically; extensive evaluation; multiple sources; test drives,
              physical visits, detailed comparisons.
            </p>
          </div>
          <div className="card-warm lift p-5">
            <p className="font-extrabold text-[#1f2b2b]">Low-involvement products</p>
            <p className="mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
              Everyday items, routine purchases — stages compressed or skipped; reduced evaluation; habit or convenience;
              heuristics play a more significant role.
            </p>
          </div>
          <div className="card-warm lift p-5">
            <p className="font-extrabold text-[#1f2b2b]">Time constraints</p>
            <p className="mt-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
              Limited time encourages skipping or compressing stages; speed over thorough evaluation; heuristics become
              more critical in expedited decisions.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="4" title="Real purchases from class" sub="Five journeys, five shapes" />
      <Reveal>
        <div className="card-warm p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Novel", d: "Online research (Amazon) → reviews → physical store comparison → final online purchase" },
              { t: "Clothing", d: "Quality check → price comparison → fitting → purchase with positive feeling" },
              { t: "Keyboard", d: "Online platform search → review analysis → offer evaluation → purchase" },
              { t: "Coffee", d: "Brand-preference decision — Davidoff, despite cheaper options" },
              { t: "Jewelry", d: "Multiple store visits → selection → price negotiation → satisfied purchase" },
              { t: "Cart abandonment", d: "Add items but don't complete purchase — reconsidering, re-evaluating; a stage of the loop, not a failure of it" },
            ].map((p) => (
              <div key={p.t} className="rounded-xl p-3.5" style={{ background: "#fffaf1", border: "1px solid #f0e2c8" }}>
                <p className="flex items-center gap-2 font-bold text-[#7c6248]"><ShoppingCart className="h-4 w-4" aria-hidden /> {p.t}</p>
                <p className="mt-1 text-[.84rem] leading-relaxed text-[#2b2014]">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-4">
        <Callout kind="insight" title="Cart abandonment is proof, not failure">
          Significant in e-commerce: consumers add items but don&apos;t complete purchase — a stage where they reconsider or
          re-evaluate. Organisations deploy heuristics (scarcity, limited-stock notifications) to reduce abandonment
          rates. It demonstrates the <strong>non-linear nature</strong> of modern consumer behaviour.
        </Callout>
      </Reveal>

      <Reveal className="mt-8">
        <Takeaways items={[
          <>Consumers <strong>cannot be assumed</strong> to follow linear decision paths.</>,
          <>Leverage heuristics strategically at <strong>various touchpoints</strong> — ratings, scarcity, discounts, visuals.</>,
          <>Facilitate easy movement between stages — especially <strong>revisiting information and evaluation</strong>.</>,
          <>Address <strong>post-purchase satisfaction</strong> to build loyalty.</>,
          <>Understanding consumer segments helps predict <strong>which heuristics will be most effective</strong>.</>,
        ]} />
      </Reveal>
    </Section>
  );
}

/* Hoisted machine sub-component (module scope — never created during render). */
function MktgTrack({ label, count, tone, badge, peak }: { label: string; count: number; tone: "teal" | "muted"; badge: "POD" | "POP"; peak: number }) {
  return (
    <div className="rounded-2xl p-4" style={{ background: "#f2efe7", border: "1px solid #e3ddcf" }}>
      <div className="flex items-center justify-between">
        <p className="text-[.82rem] font-extrabold text-[#1f2b2b]">{label}</p>
        <span className="rounded-full px-2.5 py-1 text-[.68rem] font-extrabold"
          style={{ background: badge === "POD" ? "rgba(227,194,107,.28)" : "rgba(15,118,110,.1)", color: badge === "POD" ? "#8a6420" : "#0f766e" }}>
          {badge}
        </span>
      </div>
      <div className="mt-3 flex h-14 items-end gap-1.5">
        {Array.from({ length: Math.max(peak, 1) }).map((_, i) => {
          const on = i < count;
          return (
            <motion.div key={i} className="w-4 rounded-t-md"
              style={{ background: on ? (tone === "teal" ? "linear-gradient(180deg,#14b8a6,#0f766e)" : "#c8d9d4") : "#e4ebe8", height: "100%", originY: 1 }}
              animate={{ opacity: on ? 1 : 0.35, scaleY: on ? 1 : 0.55 }}
              transition={{ duration: 0.4, delay: on ? i * 0.08 : 0 }} />
          );
        })}
        <span className="ml-2 self-center font-mono-warm text-[.78rem] font-extrabold text-[#5f7472]">{count} blade{count > 1 ? "s" : ""}</span>
      </div>
    </div>
  );
}
