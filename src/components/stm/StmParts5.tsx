"use client";

/* ============================================================
   Statistics for Managers — PART 5 of 7 (shelf 05). Chapter 3's
   measures of association (covariance & correlation — the
   golfing study), then Chapter 4: random experiments, counting
   rules, assigning probabilities, events and their
   probabilities, the complement/union/intersection relationships
   (with the Venn laboratory), the addition and multiplication
   laws, conditional probability, the joint probability table,
   independence — and mutual exclusiveness vs independence.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Blend,
  CircleDot,
  Dices,
  Divide,
  GitMerge,
  Link2Off,
  ListOrdered,
  Percent,
  Shuffle,
  Trophy,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 3 · MOVEMENT 3 — ASSOCIATION BETWEEN TWO VARIABLES
   ============================================================ */
const GOLF = [
  { x: 277.6, y: 69, dx: 10.65, dy: -1.0, prod: -10.65 },
  { x: 259.5, y: 71, dx: -7.45, dy: 1.0, prod: -7.45 },
  { x: 269.1, y: 70, dx: 2.15, dy: 0.0, prod: 0 },
  { x: 267.0, y: 70, dx: 0.05, dy: 0.0, prod: 0 },
  { x: 255.6, y: 71, dx: -11.35, dy: 1.0, prod: -11.35 },
  { x: 272.9, y: 69, dx: 5.95, dy: -1.0, prod: -5.95 },
];

export function StmAssociationSection() {
  return (
    <Section id="association">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 3 · section 3.5"
          title={
            <>
              Association: <span className="grad-violet">covariance</span> &amp; correlation
            </>
          }
          lead="A golfer wants to know: does a longer drive buy a lower score? Two descriptive measures answer — the covariance for direction, the correlation coefficient for direction and strength."
        />

        <StmReadStep n="01" title="The golfing study" sub="Six rounds: driving distance vs 18-hole score" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>x — driving (yds)</th>
                    <th>y — score</th>
                    <th>xᵢ − x̄</th>
                    <th>yᵢ − ȳ</th>
                    <th>(xᵢ−x̄)(yᵢ−ȳ)</th>
                  </tr>
                </thead>
                <tbody>
                  {GOLF.map((g, i) => (
                    <tr key={i}>
                      <td className="font-mono">{g.x}</td>
                      <td className="font-mono">{g.y}</td>
                      <td className="font-mono">{g.dx.toFixed(2)}</td>
                      <td className="font-mono">{g.dy.toFixed(1)}</td>
                      <td className="font-mono">{g.prod.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black font-mono">x̄ = 267.0</td>
                    <td className="font-black font-mono">ȳ = 70.0</td>
                    <td colSpan={2} className="font-black">Total</td>
                    <td className="font-black font-mono">−35.40</td>
                  </tr>
                  <tr>
                    <td colSpan={5} className="font-mono text-[.78rem]">std. dev.: sₓ = 8.2192 · s_y = .8944</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-3">
              <StmPanel label="Sample covariance & correlation">{`Sₓᵧ = Σ(xᵢ−x̄)(yᵢ−ȳ) / (n−1)
    = −35.40 / (6−1) = −7.08

rₓᵧ = Sₓᵧ / (sₓ·s_y)
    = −7.08 / (8.2192)(.8944)
    = −0.9631`}</StmPanel>
              <StmCallout kind="insight" title="Reading −0.9631">
                The covariance is negative (longer drives, lower scores) — and the correlation
                coefficient near <b>−1</b> says the <b>linear</b> relationship is strong.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { i: GitMerge, t: "Direction", d: "Positive covariance values indicate a positive relationship; negative values, a negative one." },
            { i: Blend, t: "Strength scale", d: "The coefficient can take values between −1 and +1: near −1 a strong negative linear relationship; near +1 a strong positive one; the closer to zero, the weaker." },
            { i: Link2Off, t: "The trap", d: "Correlation is a measure of linear association and NOT necessarily causation — highly correlated does not mean one variable causes the other." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_BTN_GRAD }}>
                  <c.i className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center text-[.72rem] font-bold uppercase tracking-[.16em] text-[#a08cc9]">
          population forms: σₓᵧ = Σ(xᵢ−μₓ)(yᵢ−μ_y)/N · ρₓᵧ = σₓᵧ/(σₓσ_y)
        </p>

        <Takeaways
          items={[
            <>Covariance signs the relationship: <b>Sₓᵧ = −7.08</b> for the golf study.</>,
            <>Correlation standardizes it: <b>r = −0.9631</b> — strong negative <b>linear</b> association, not causation.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 4 · MOVEMENT 1 — EXPERIMENTS, COUNTING, ASSIGNING
   ============================================================ */
const EXPERIMENTS = [
  { e: "Toss a coin", o: "Head, tail" },
  { e: "Inspect a part", o: "Defective, non-defective" },
  { e: "Conduct a sale call", o: "Purchase, no purchase" },
  { e: "Roll a die", o: "1, 2, 3, 4, 5, 6" },
  { e: "Play a football game", o: "Win, lost, tie" },
];

const LUCAS = [
  { n: "0 polishers", days: 4, p: ".10 = 4/40" },
  { n: "1", days: 6, p: ".15" },
  { n: "2", days: 18, p: ".45" },
  { n: "3", days: 10, p: ".25" },
  { n: "4", days: 2, p: ".05" },
];

const BRADLEY_OUTCOMES = [
  { o: "(10, 8)", gain: "$18,000 Gain", p: 0.2 },
  { o: "(10, −2)", gain: "$8,000 Gain", p: 0.08 },
  { o: "(5, 8)", gain: "$13,000 Gain", p: 0.16 },
  { o: "(5, −2)", gain: "$3,000 Gain", p: 0.26 },
  { o: "(0, 8)", gain: "$8,000 Gain", p: 0.1 },
  { o: "(0, −2)", gain: "$2,000 Loss", p: 0.12 },
  { o: "(−20, 8)", gain: "$12,000 Loss", p: 0.02 },
  { o: "(−20, −2)", gain: "$22,000 Loss", p: 0.06 },
];

export function StmProbBasicsSection() {
  return (
    <Section id="prob-basics">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 4 · Introduction to Probability — 4.1"
          title={
            <>
              Pricing <span className="grad-violet">uncertainty</span>
            </>
          }
          lead="Managers base decisions on an analysis of uncertainties: what are the chances sales decrease if prices rise? The likelihood a new assembly method lifts productivity? The odds a new investment turns a profit? Probability is the currency those questions are priced in."
        />

        <StmReadStep n="01" title="Probability — the measuring stick" sub="A numerical measure of likelihood, always on a 0-to-1 scale" />
        <Reveal>
          <div className="card-warm p-5">
            <div className="relative h-16">
              <div className="absolute left-0 right-0 top-6 h-2 rounded-full bg-gradient-to-r from-[#f1ecfd] via-[#c4b5fd] to-[#5b21b6]" />
              {[0, 0.5, 1].map((t) => (
                <div key={t} className="absolute top-3 h-8 w-0.5 bg-[#8a7fae]" style={{ left: `${t * 100}%` }}>
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[.8rem] font-black text-[#5b21b6]">{t}</span>
                </div>
              ))}
              <motion.div
                aria-hidden
                className="absolute top-[22px] h-3 w-3 rounded-full bg-white shadow-md"
                style={{ border: "3px solid #6d28d9" }}
                animate={{ left: ["2%", "50%", "96%", "50%", "2%"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="mt-1 grid gap-2 text-center text-[.74rem] font-semibold text-muted-warm sm:grid-cols-3">
              <span>near 0 — the event is <b>very unlikely</b> to occur</span>
              <span>.5 — occurrence just as likely as not</span>
              <span>near 1 — the event is <b>almost certain</b> to occur</span>
            </div>
            <p className="mt-4 text-[.85rem] leading-relaxed text-muted-warm">
              In <b>statistical experiments</b>, probability determines outcomes — repeat the
              experiment exactly the same way and an entirely different outcome may occur. That
              is why they are also called <b>random experiments</b>.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Sample space & counting rules" sub="All the outcomes — and how to count them without listing them" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Experiment</th>
                    <th>Experimental outcomes</th>
                  </tr>
                </thead>
                <tbody>
                  {EXPERIMENTS.map((x) => (
                    <tr key={x.e}>
                      <td className="font-bold">{x.e}</td>
                      <td>{x.o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-2 text-[.76rem] leading-relaxed text-muted-warm">
                A <b>random experiment</b> generates well-defined outcomes; the{" "}
                <b>sample space</b> is the set of all of them; each outcome is a{" "}
                <b>sample point</b>.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <StmPanel label="Bradley Investments — two stocks, one tree">{`Markley Oil:  n₁ = 4   (gain 10 / 5 / 0 / lose 20)
Collins Mining: n₂ = 2 (gain 8 / lose 2)

Multiple-step counting rule:
  (n₁)(n₂)…(nₖ) = (4)(2) = 8 outcomes

Combinations:  C(n,N) = N! / [n!(N−n)!]
Permutations:  P(n,N) = n!·C(n,N) = N!/(N−n)!
               (order matters; 0! = 1)`}</StmPanel>
          </Reveal>
        </div>

        <StmReadStep n="03" title="Assigning probabilities" sub="Two requirements, three methods" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmCallout kind="why" title="The two basic requirements">
              <b>1.</b> The probability assigned to each experimental outcome must be between 0
              and 1, inclusively: 0 ≤ P(Eᵢ) ≤ 1 for all i. <b>2.</b> The sum of the
              probabilities for all experimental outcomes must equal 1: P(E₁) + … + P(Eₙ) = 1.
            </StmCallout>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-2">
              {[
                { t: "Classical method", d: "Assume equally likely outcomes — rolling a die: each face gets 1/6." },
                { t: "Relative frequency method", d: "Experimental or historical data — Lucas Tool Rental's 40-day records." },
                { t: "Subjective method", d: "Judgment — a degree of belief. Best estimates often combine it with the classical or relative frequency approach." },
              ].map((m) => (
                <div key={m.t} className="card-warm p-4">
                  <p className="text-[.88rem] font-extrabold text-[#3e2c1d]">{m.t}</p>
                  <p className="mt-0.5 text-[.78rem] leading-relaxed text-muted-warm">{m.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
          <Reveal>
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Polishers rented</th>
                    <th>Days</th>
                    <th>Probability</th>
                  </tr>
                </thead>
                <tbody>
                  {LUCAS.map((r) => (
                    <tr key={r.n}>
                      <td className="font-bold">{r.n}</td>
                      <td className="font-mono">{r.days}</td>
                      <td className="font-mono">{r.p}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="font-black">sum</td>
                    <td className="font-black font-mono">40</td>
                    <td className="font-black font-mono">1.00</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
                Lucas Tool Rental — probability = frequency ÷ total days.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Outcome</th>
                    <th>Net gain or loss</th>
                    <th>P(Eᵢ)</th>
                  </tr>
                </thead>
                <tbody>
                  {BRADLEY_OUTCOMES.map((r) => (
                    <tr key={r.o}>
                      <td className="font-mono">{r.o}</td>
                      <td>{r.gain}</td>
                      <td className="font-mono">{r.p.toFixed(2)}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} className="font-black">Sum equals</td>
                    <td className="font-black font-mono">1.00</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
                Bradley Investments — an analyst&rsquo;s subjective estimates (gain or loss in
                $1000s over 3 months).
              </p>
            </div>
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Probability lives on <b>0 → 1</b>; sample space = <b>all</b> outcomes; each outcome = a <b>sample point</b>.</>,
            <>Count multi-step experiments as <b>(n₁)(n₂)…(nₖ)</b> — Bradley&rsquo;s (4)(2) = 8.</>,
            <>Classical (equally likely) · relative frequency (history) · subjective (belief) — <b>all must obey</b> 0 ≤ P ≤ 1 and ΣP = 1.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 4 · MOVEMENT 2 — EVENTS, LAWS, THE VENN LABORATORY
   ============================================================ */
type VennMode = "a" | "complement" | "union" | "intersection" | "exclusive";

const VENN_META: Record<VennMode, { label: string; blurb: string }> = {
  a: { label: "Event A (M)", blurb: "Just the event itself — the sample points where Markley Oil is profitable. P(M) = 0.70." },
  complement: { label: "Complement Aᶜ", blurb: "All sample points NOT in A — denoted Aᶜ. Everything outside the circle, inside the sample space S. P(Mᶜ) = 1 − 0.70 = 0.30." },
  union: { label: "Union A ∪ B", blurb: "All sample points in A, in B, or in both — M profitable OR Collins profitable (or both). P(M ∪ C) = 0.82." },
  intersection: { label: "Intersection A ∩ B", blurb: "Only the sample points in BOTH — both stocks profitable: {(10,8), (5,8)}. P(M ∩ C) = 0.36." },
  exclusive: { label: "Mutually exclusive", blurb: "No sample points in common — when one occurs, the other cannot. Then P(A ∩ B) = 0 and the addition law collapses to P(A ∪ B) = P(A) + P(B)." },
};

function VennLab() {
  const [mode, setMode] = useState<VennMode>("union");
  const cx1 = mode === "exclusive" ? 150 : 185;
  const cx2 = mode === "exclusive" ? 390 : 355;
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(VENN_META) as VennMode[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setMode(k)}
            aria-pressed={mode === k}
            className={`rounded-full border px-3.5 py-1.5 text-[.74rem] font-bold transition-all duration-200 ${
              mode === k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#6d28d9] hover:bg-[#f6f3fe]"
            }`}
            style={mode === k ? { background: STM_BTN_GRAD } : undefined}
          >
            {VENN_META[k].label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid items-center gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]">
        <svg viewBox="0 0 540 260" className="h-auto w-full" role="img" aria-label="Venn diagram of events M and C inside sample space S, shaded according to the selected relationship">
          <defs>
            <clipPath id="stm-venn-clip">
              <circle cx={cx2} cy="130" r="82" />
            </clipPath>
            <mask id="stm-venn-mask">
              <rect width="540" height="260" fill="white" />
              <circle cx={cx1} cy="130" r="82" fill="black" />
            </mask>
          </defs>
          {/* sample space */}
          <rect x="20" y="30" width="500" height="200" rx="14" fill="#fdfcff" stroke="#c9bbee" strokeWidth="2" />
          <text x="34" y="52" fontSize="13" fontWeight="700" fill="#8a7fae">Sample space S</text>

          {/* shading by mode */}
          <AnimatePresence mode="wait">
            <motion.g key={mode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              {mode === "a" && <circle cx={cx1} cy="130" r="82" fill="#c4b5fd" opacity="0.9" />}
              {mode === "complement" && <rect x="20" y="30" width="500" height="200" rx="14" fill="#c4b5fd" opacity="0.65" mask="url(#stm-venn-mask)" />}
              {mode === "union" && (
                <g fill="#a78bfa" opacity="0.85">
                  <circle cx={cx1} cy="130" r="82" />
                  <circle cx={cx2} cy="130" r="82" />
                </g>
              )}
              {mode === "intersection" && <circle cx={cx1} cy="130" r="82" fill="#6d28d9" opacity="0.9" clipPath="url(#stm-venn-clip)" />}
              {mode === "exclusive" && (
                <g fill="#a78bfa" opacity="0.85">
                  <circle cx={cx1} cy="130" r="82" />
                  <circle cx={cx2} cy="130" r="82" />
                </g>
              )}
            </motion.g>
          </AnimatePresence>

          {/* outlines + labels */}
          <circle cx={cx1} cy="130" r="82" fill="none" stroke="#5b21b6" strokeWidth="2.6" />
          <circle cx={cx2} cy="130" r="82" fill="none" stroke="#5b21b6" strokeWidth="2.6" />
          <text x={cx1 - (mode === "exclusive" ? 46 : 40)} y="126" fontSize="16" fontWeight="800" fill="#3e2c1d">Event M</text>
          <text x={cx2 - (mode === "exclusive" ? 52 : 6)} y="126" fontSize="16" fontWeight="800" fill="#3e2c1d">Event C</text>
        </svg>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="rounded-2xl border p-4"
            style={{ borderColor: STM_G.border, background: STM_G.wash }}
          >
            <p className="text-[.9rem] font-extrabold" style={{ color: STM_G[800] }}>{VENN_META[mode].label}</p>
            <p className="mt-2 text-[.85rem] leading-relaxed text-[#2b2014]">{VENN_META[mode].blurb}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function StmProbLawsSection() {
  return (
    <Section id="prob-laws">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 4 · sections 4.2–4.4"
          title={
            <>
              Events, <span className="grad-violet">laws</span>, and the Venn laboratory
            </>
          }
          lead="An event is a collection of sample points — and its probability is the sum of theirs. From there, four relationships and two laws let you compute almost everything without ever listing a sample point."
        />

        <StmReadStep n="01" title="Events and their probabilities" sub="Sum the sample points — M = 0.70, C = 0.48" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Event M — Markley Oil is profitable">{`M = {(10,8), (10,−2), (5,8), (5,−2)}

P(M) = P(10,8) + P(10,−2) + P(5,8) + P(5,−2)
     = 0.20 + 0.08 + 0.16 + 0.26
     = 0.70`}</StmPanel>
            <StmPanel tone="sepia" label="Event C — Collins Mining is profitable">{`C = {(10,8), (5,8), (0,8), (−20,8)}

P(C) = 0.20 + 0.16 + 0.10 + 0.02
     = 0.48`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The four relationships — live" sub="Complement · union · intersection · mutually exclusive" />
        <Reveal>
          <VennLab />
        </Reveal>

        <StmReadStep n="03" title="The addition law" sub="P(A ∪ B) = P(A) + P(B) − P(A ∩ B)" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Bradley — addition law">{`P(M ∪ C) = P(M) + P(C) − P(M ∩ C)
         = 0.70 + 0.48 − 0.36
         = 0.82   ✓ (same as summing the
                    six sample points directly)`}</StmPanel>
            <StmCallout kind="why" title="Why subtract?">
              The intersection is inside both circles — adding P(A) + P(B) counts its sample
              points <b>twice</b>. Subtract once. For <b>mutually exclusive</b> events the
              intersection is empty, so P(A ∪ B) = P(A) + P(B).
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Conditional probability & the multiplication law" sub="P(A|B) = P(A ∩ B)/P(B) — the joint table makes it visible" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="overflow-x-auto rounded-2xl">
              <table className="warm-table">
                <thead>
                  <tr>
                    <th>Markley Oil</th>
                    <th>C profitable (C)</th>
                    <th>C not (Cᶜ)</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">Profitable (M)</td>
                    <td className="font-mono">.36</td>
                    <td className="font-mono">.34</td>
                    <td className="font-mono font-bold">.70</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Not profitable (Mᶜ)</td>
                    <td className="font-mono">.12</td>
                    <td className="font-mono">.18</td>
                    <td className="font-mono font-bold">.30</td>
                  </tr>
                  <tr>
                    <td className="font-black">Total</td>
                    <td className="font-black font-mono">.48</td>
                    <td className="font-black font-mono">.52</td>
                    <td className="font-black font-mono">1.00</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[.74rem] leading-relaxed text-muted-warm">
                <b>Joint probabilities</b> in the body; <b>marginal probabilities</b> in the
                margins.
              </p>
            </div>
            <div className="space-y-3">
              <StmPanel label="Conditional + multiplication">{`P(C | M) = P(M ∩ C) / P(M)
         = .36 / .70 = 0.5143

P(M ∩ C) = P(M) · P(C | M)
         = (0.70)(0.5143) = 0.36 ✓`}</StmPanel>
              <StmCallout kind="insight" title="Independence — the test">
                If P(A|B) = P(A), the events are <b>independent</b>. Test: does P(M ∩ C) =
                P(M)·P(C)? Here (0.7)(0.48) = <b>0.336 ≠ 0.36</b> — so M and C are{" "}
                <b>not independent</b>: profitability at one firm tilts the odds at the other.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <StmCallout kind="warn" title="Do not confuse mutually exclusive with independent">
          Two events with <b>nonzero probability cannot be both</b>. If one mutually exclusive
          event occurs, the other cannot — its probability drops to zero, making them{" "}
          <b>dependent</b>. Two events that are not mutually exclusive may or may not be
          independent.
        </StmCallout>

        <StmReadStep n="05" title="Concept checks — events & laws" sub="The deck's checks, answered" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Bradley laboratory — self-check"
              q="P(M) = 0.70, P(C) = 0.48, P(M ∩ C) = 0.36. What is P(M ∪ C) — and are M and C independent?"
              options={["1.18 · yes", "0.82 · no", "0.82 · yes", "0.58 · no"]}
              answer={1}
              explain="0.70 + 0.48 − 0.36 = 0.82. Independence fails: P(M)P(C) = 0.336 ≠ 0.36 = P(M ∩ C)."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Reading the margins — self-check"
              q="Given the joint table, compute P(C | Mᶜ)."
              options={[".12 / .48 = 0.25", ".12 / .30 = 0.40", ".36 / .70 = 0.5143", ".12 / 1.00 = 0.12"]}
              answer={1}
              explain="Condition on the ROW: P(C | Mᶜ) = P(Mᶜ ∩ C)/P(Mᶜ) = .12/.30 = 0.40. The condition narrows the universe to that row; divide by its marginal total."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <><b>P(event) = sum of its sample points</b> — M = 0.70, C = 0.48, M ∪ C = 0.82, M ∩ C = 0.36.</>,
            <>Addition law subtracts the double-counted intersection; for <b>mutually exclusive</b> events it collapses to P(A) + P(B).</>,
            <>Conditional probability <b>narrows the universe</b>: P(C|M) = .36/.70 = 0.5143; the multiplication law runs it backwards.</>,
            <>Independence test: <b>P(A ∩ B) = P(A)P(B)</b> — 0.34 ≠ 0.36, so M and C are dependent.</>,
          ]}
        />
      </div>
    </Section>
  );
}
