"use client";

/* ============================================================
   Statistics for Managers — PART 10 (shelf 05). Lecture 22:
   interval estimation when σ is KNOWN — from point estimates to
   confidence intervals, the margin of error z(α/2)·σ/√n, and
   the 90/95/99 trade-off dial on the retail-income problem
   (x̄ = 41,100, σ = 4,500, n = 36). Lecture 24: when σ is
   UNKNOWN — Student's t, degrees of freedom n − 1, and the
   off-campus-housing interval (n = 16, x̄ = 750, s = 55 →
   750 ± 29.3) — plus the sample-size planner
   n = (z·σ/E)² that sends Discount Sounds to 312.
   Every figure is from the lecture notes, hand-checked.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Crosshair, Gauge, MoveHorizontal, Percent, Sigma, StretchHorizontal } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 22 · MOVEMENT 1 — CONFIDENCE INTERVALS, σ KNOWN
   ============================================================ */

/* the confidence dial: pick a level, watch the interval stretch
   around x̄ = 41,100 — margins 1,234 / 1,470 / 1,932 */
const DIAL = {
  "90": { z: 1.645, e: 1234, lo: 39866, hi: 42334 },
  "95": { z: 1.96, e: 1470, lo: 39630, hi: 42570 },
  "99": { z: 2.576, e: 1932, lo: 39168, hi: 43032 },
} as const;

function ConfidenceDial() {
  const [lvl, setLvl] = useState<keyof typeof DIAL>("95");
  const d = DIAL[lvl];
  const W = 560;
  const scale = (v: number) => 30 + ((v - 38600) / (43600 - 38600)) * (W - 60);
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The confidence dial — buy certainty with width</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <Gauge className="h-3 w-3" /> pick a confidence level
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(DIAL) as (keyof typeof DIAL)[]).map((k) => (
          <button
            key={k}
            onClick={() => setLvl(k)}
            aria-pressed={lvl === k}
            className={`rounded-full border px-4 py-1.5 text-[.8rem] font-bold transition-all duration-200 ${
              lvl === k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={lvl === k ? { background: STM_BTN_GRAD } : undefined}
          >
            {k}% confidence · z = {DIAL[k].z}
          </button>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto">
        <svg viewBox={`0 0 ${W} 128`} className="min-w-[440px]" role="img" aria-label="Confidence interval stretching with confidence level">
          {/* the sampling distribution silhouette */}
          <path
            d={`M 30 84 C ${W * 0.32} 84 ${W * 0.4} 22 ${W / 2} 22 C ${W * 0.6} 22 ${W * 0.68} 84 ${W - 30} 84`}
            fill="none"
            stroke="#d9cdf8"
            strokeWidth="1.6"
          />
          <line x1="30" y1="84" x2={W - 30} y2="84" stroke="#e2d6f5" strokeWidth="1.2" />
          {/* interval bar */}
          <motion.line
            x1={scale(d.lo)}
            x2={scale(d.hi)}
            y1="64"
            y2="64"
            stroke={STM_G[600]}
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ x1: scale(d.lo), x2: scale(d.hi) }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <motion.line
            y1="56" y2="72" stroke={STM_G[600]} strokeWidth="2.4"
            animate={{ x1: scale(d.lo), x2: scale(d.lo) }} transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <motion.line
            y1="56" y2="72" stroke={STM_G[600]} strokeWidth="2.4"
            animate={{ x1: scale(d.hi), x2: scale(d.hi) }} transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          {/* point estimate */}
          <line x1={scale(41100)} y1="34" x2={scale(41100)} y2="94" stroke="#ca8a04" strokeWidth="1.6" strokeDasharray="4 4" />
          <text x={scale(41100) + 8} y="44" fontSize="11.5" fontWeight="800" fill="#a16207">x̄ = 41,100</text>
          {/* endpoint labels */}
          <AnimatePresence mode="popLayout">
            <motion.text key={`${lvl}-lo`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} x={scale(d.lo) - 8} y="110" fontSize="11" fontWeight="700" fill={STM_G[800]} textAnchor="start">
              {d.lo.toLocaleString()}
            </motion.text>
            <motion.text key={`${lvl}-hi`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} x={scale(d.hi) + 8} y="110" fontSize="11" fontWeight="700" fill={STM_G[800]} textAnchor="end">
              {d.hi.toLocaleString()}
            </motion.text>
          </AnimatePresence>
        </svg>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>Margin of error</p>
          <AnimatePresence mode="popLayout">
            <motion.p key={d.e} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-mono text-2xl font-black" style={{ color: STM_G[800] }}>
              ±{d.e.toLocaleString()}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>Interval width</p>
          <p className="font-mono text-2xl font-black" style={{ color: STM_G[800] }}>{(d.hi - d.lo).toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em] text-[#b3402c]">The trade-off</p>
          <p className="text-[.8rem] font-semibold leading-snug text-[#8c2f2f]">more confidence → wider interval</p>
        </div>
      </div>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        Like planning a journey: a bigger time margin (99%) almost guarantees arrival — but the
        statement gets vaguer. A tight margin (90%) is sharper yet more likely to miss. Same data,
        same σ — <b>confidence is purchased with width</b>.
      </p>
    </div>
  );
}

export function StmIntervalKnownSection() {
  return (
    <Section id="interval-known">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 22 · Interval Estimation — population σ known"
          title={
            <>
              A <span className="grad-violet">range</span> you can defend
            </>
          }
          lead="A point estimate is a single guess: x̄ = 1.015% cost growth this year. Another sample says 1.013%, a third 1.016% — which do you bet the budget on? Interval estimation reverses the game: fix the probability first (95%), then compute the range that traps μ with that confidence."
        />

        <StmReadStep n="01" title="Why not a census?" sub="Sahadri Retail Mart — 1,000 supermarkets, one cost question" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card-warm p-5">
              <p className="font-bold text-[#3e2c1d]">The census bill</p>
              <ul className="mt-2 space-y-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
                <li>· Audit and travel costs across every store</li>
                <li>· Months of data collection</li>
                <li>· Large teams pulled off daily operations</li>
              </ul>
              <p className="mt-3 text-[.86rem] leading-relaxed text-[#2b2014]">
                The statistical alternative: a random sample of <b>50 stores</b> captures the
                population&apos;s diversity at roughly <b>5% of the census cost</b> — the
                one-spoonful-of-rice principle once again.
              </p>
            </div>
            <StmCallout kind="why" title="From point to interval">
              <p>
                A sample mean carries <b>no information about its own precision</b>. The interval
                fixes that by reporting <b>x̄ ± margin of error</b>: &ldquo;we are 95% confident
                the true cost increase lies between 0.9% and 2.1%.&rdquo; The probability is set
                first, the range follows — the mirror image of ordinary probability problems.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The margin of error machine" sub="E = z(α/2) · σ/√n — three z-values worth memorising" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { c: "90%", a: "α = .10 · α/2 = .05", z: "1.645" },
              { c: "95%", a: "α = .05 · α/2 = .025", z: "1.960" },
              { c: "99%", a: "α = .01 · α/2 = .005", z: "2.576" },
            ].map((r, i) => (
              <Reveal key={r.c} delay={i * 80}>
                <div className="card-warm p-5 text-center">
                  <p className="font-mono text-[.7rem] font-bold uppercase tracking-[.16em] text-[#8a6d4f]">{r.a}</p>
                  <p className="mt-1 text-2xl font-black" style={{ color: STM_G[800] }}>{r.c}</p>
                  <p className="mt-1 font-mono text-xl font-black text-[#b45309]">z = {r.z}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <StmReadStep n="03" title="Worked — the new-store decision" sub="260 outlets, n = 36, x̄ = $41,100, σ = $4,500, 95% confidence" />
        <Reveal>
          <StmPanel label="The full computation — income in the marketing area">{`α = 1 − 0.95 = 0.05        α/2 = 0.025
z(α/2) = 1.960

σx̄ = σ/√n = 4,500/√36 = 750     ← standard error
E   = 1.960 × 750 = 1,470        ← margin of error

95% CI = x̄ ± E = 41,100 ± 1,470
       = [39,630 , 42,570]

Compare:
  90% → 41,100 ± 1,234 → [39,866 , 42,334]
  99% → 41,100 ± 1,932 → [39,168 , 43,032]`}</StmPanel>
        </Reveal>
        <ConfidenceDial />

        <StmReadStep n="04" title="Read the interval like a statistician" sub="What 95% confidence does — and does not — mean" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <StmCallout kind="insight" title="The correct reading">
              <p>
                &ldquo;95% confident&rdquo; is a statement about the <b>procedure</b>, not one
                interval: if we built intervals from many samples this way,{" "}
                <b>95% of them would capture μ</b>. Alpha is split evenly between the two tails
                because the normal curve is symmetric — that is why z(α/2) carries the
                &ldquo;half&rdquo;.
              </p>
            </StmCallout>
            <StmCallout kind="warn" title="How big should n be?">
              <p>
                <b>n &gt; 30</b> rides the Central Limit Theorem. Roughly normal or symmetric
                populations tolerate n ≈ 15; <b>highly skewed</b> populations (income is the
                classic) want <b>50+</b>. Bigger samples narrow the interval — the precision
                budget vs cost trade-off is a management decision, not a formula output.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Two quick taps" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 22 · check"
              q="All else equal, moving from 95% to 99% confidence makes the interval…"
              options={["wider", "narrower", "unchanged", "first narrower, then wider"]}
              answer={0}
              explain="z grows from 1.960 to 2.576, so the margin of error grows with it — 99% confidence is bought by widening the interval. Want both high confidence AND a narrow interval? There is exactly one lever: increase n."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 22 · check"
              q="Increasing the sample size from 50 to 200 stores (Sahadri) makes the margin of error…"
              options={["1/4 of the original", "1/2 of the original", "4× the original", "unchanged — n does not affect E"]}
              answer={1}
              explain="E = z·σ/√n — the square root again. Quadrupling n (50 → 200) halves the standard error, halving the margin of error. Precision per rupee follows √n."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                Interval estimation fixes <b>probability first</b> and computes the range second:
                <b> x̄ ± z(α/2)·σ/√n</b>.
              </>,
              <>
                The three z-values: <b>1.645</b> (90%), <b>1.960</b> (95%), <b>2.576</b> (99%) —
                alpha is split across both tails.
              </>,
              <>
                Income decision: 41,100 ± 1,470 → <b>[39,630, 42,570]</b> at 95%; the dial shows
                the 90/99 versions.
              </>,
              <>
                Confidence is a procedure guarantee — <b>95% of intervals built this way capture
                μ</b> — and width is the price of confidence. Only <b>n</b> buys both.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 24 · MOVEMENT 2 — σ UNKNOWN: STUDENT'S t
   ============================================================ */

/* the df morph: t(ν) against the standard normal — as df grows
   the heavy tails collapse onto the normal curve */
function TDistributionMorph() {
  const [df, setDf] = useState(15);
  const W = 560;
  const H = 170;
  const cx = W / 2;
  const baseY = H - 22;
  const amp = 112;
  const scale = 46; // x-units per standard deviation

  const curve = (useT: boolean) => {
    const pts: string[] = [];
    for (let i = 0; i <= 80; i++) {
      const x = -3.4 + (6.8 * i) / 80;
      let y: number;
      if (useT) {
        // Student t tail approximation: normal × (1 + c/df) inflation in the tails
        const t = x * (1 + 0.6 / Math.sqrt(Math.max(df, 1)));
        const infl = 1 + 2.2 / Math.max(df, 1);
        y = amp * infl * Math.exp(-0.5 * t * t) / (infl * 0.86 + 0.14);
        y = Math.min(y, amp * 1.06);
      } else {
        y = amp * Math.exp(-0.5 * x * x);
      }
      pts.push(`${(cx + x * scale).toFixed(1)},${(baseY - y).toFixed(1)}`);
    }
    return pts.join(" ");
  };

  const tCrit = df >= 100 ? 1.984 : df >= 30 ? 2.042 : df >= 25 ? 2.060 : df >= 20 ? 2.086 : df >= 15 ? 2.131 : df >= 10 ? 2.228 : df >= 5 ? 2.571 : 2.947;

  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The df morph — heavy tails at small n</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <MoveHorizontal className="h-3 w-3" /> drag the degrees of freedom
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[440px]" role="img" aria-label="t-distribution with heavier tails converging to normal as df grows">
          <line x1="14" y1={baseY} x2={W - 14} y2={baseY} stroke="#e2d6f5" strokeWidth="1.4" />
          {/* normal reference */}
          <polyline points={curve(false)} fill="none" stroke="#ca8a04" strokeWidth="1.8" strokeDasharray="5 4" />
          {/* t curve */}
          <polyline points={curve(true)} fill="none" stroke={STM_G[600]} strokeWidth="2.6" strokeLinecap="round" />
          <text x="18" y="30" fontSize="11" fontWeight="700" fill="#a16207">normal (z)</text>
          <text x="18" y="46" fontSize="11" fontWeight="700" fill={STM_G[700]}>t (df = {df})</text>
          <text x={W - 130} y={baseY + 16} fontSize="10.5" fontWeight="600" fill="#8a7bb0">heavier tails → wider intervals</text>
        </svg>
      </div>

      <label htmlFor="df-slider" className="mt-4 block text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
        Degrees of freedom <span className="font-mono text-[#6d28d9]">df = n − 1 = {df}</span>
      </label>
      <input
        id="df-slider"
        type="range"
        min={1}
        max={120}
        step={1}
        value={df}
        onChange={(e) => setDf(Number(e.target.value))}
        className="mt-2 w-full accent-[#7c3aed]"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>t(0.025, df) — the 95% multiplier</p>
          <AnimatePresence mode="popLayout">
            <motion.p key={tCrit} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-mono text-3xl font-black" style={{ color: STM_G[800] }}>
              {tCrit.toFixed(3)}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em] text-[#b3402c]">vs the z it is standing in for</p>
          <p className="font-mono text-3xl font-black text-[#8c2f2f]">1.960</p>
          <p className="mt-1 text-[.78rem] font-semibold text-[#8c2f2f]">
            {df >= 100 ? "df ≥ 100 — the t is effectively normal" : `paying ${(tCrit - 1.96).toFixed(3)} extra width for estimating σ`}
          </p>
        </div>
      </div>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        Slide df down toward 1 and the violet curve grows heavy tails — extra uncertainty from
        estimating σ with s. Past <b>df ≈ 100</b> the t is indistinguishable from the dashed
        normal. The curve is not one distribution but a <b>family</b>, one member per df.
      </p>
    </div>
  );
}

export function StmIntervalTSection() {
  return (
    <Section id="interval-t">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 24 · Interval Estimation — population σ unknown"
          title={
            <>
              Student&apos;s <span className="grad-violet">t</span> — honesty about σ
            </>
          }
          lead="Real populations rarely hand you σ. When it is unknown, the sample must estimate both the mean and the spread — and that extra estimation costs width. The t-distribution is the price list, and degrees of freedom is the currency."
        />

        <StmReadStep n="01" title="Guinness, small samples, and a pseudonym" sub="1908 — 'Student' publishes while brewing in Dublin" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card-warm p-5">
              <p className="font-bold text-[#3e2c1d]">Why a new distribution at all?</p>
              <p className="mt-2 text-[.88rem] leading-relaxed text-[#2b2014]">
                Replace σ with s in the margin of error and the ratio{" "}
                <b>(x̄ − μ)/(s/√n)</b> no longer follows the normal curve — the sample standard
                deviation wobbles too. William Gosset, working quality control at Guinness, mapped
                the true curve and published under the name <b>&ldquo;Student&rdquo;</b>.
              </p>
              <p className="mt-2 text-[.78rem] leading-relaxed text-muted-warm">
                Symmetric around zero like the normal — but a <b>family</b> of curves indexed by
                df, each with slightly heavier tails.
              </p>
            </div>
            <StmCallout kind="why" title="Degrees of freedom = n − 1">
              <p>
                df counts the <b>independent pieces of information</b> going into s. Estimating
                the mean from the same n values spends one piece — fixing one value determines the
                last — so <b>df = n − 1</b>. More df → less dispersion → closer to normal; beyond
                df ≈ 100 treat t as z.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The decision rule" sub="Known σ → z · unknown σ → t with s in its place" />
        <Reveal>
          <StmPanel label="One shelf, two intervals">{`σ KNOWN                        σ UNKNOWN
———————————————                ———————————————
x̄ ± z(α/2) · σ/√n              x̄ ± t(α/2) · s/√n
                                     ↑
                               n − 1 df from the t-table

Both shrink at the same √n speed.
The t merely charges a honesty premium
for the estimated standard deviation.`}</StmPanel>
        </Reveal>
        <TDistributionMorph />

        <StmReadStep n="03" title="Worked — off-campus housing" sub="n = 16 one-bedroom apartments · x̄ = $750 · s = $55 · 95% confidence" />
        <Reveal>
          <StmPanel label="The full computation — mean monthly rent near campus">{`α = 0.05        α/2 = 0.025        df = n − 1 = 15

t(0.025, 15) = 2.131            ← from the t-table

σx̄ → s/√n = 55/√16 = 13.75

E = 2.131 × 13.75 = 29.3

95% CI = 750 ± 29.3
       = [720.7 , 779.3]

"We are 95% confident the mean monthly rent
within half a mile of campus is between
$720.70 and $779.30."`}</StmPanel>
        </Reveal>

        <StmReadStep n="04" title="Planning in reverse — how big a sample?" sub="n = (z·σ/E)² — and always round UP" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <StmPanel label="Discount Sounds — margin of $500">{`Goal: estimate mean annual income within
±$500 at 95% confidence; planning value
σ = 4,500 (from a previous study).

n = (z(α/2) · σ / E)²
  = (1.96 × 4,500 / 500)²
  = (17.64)²
  = 311.17  →  round UP →  n = 312

Rounding down would silently break the
$500 promise — the margin would exceed E.`}</StmPanel>
            <StmCallout kind="insight" title="Where the planning σ comes from">
              <p>
                Before sampling you need a σ guess: a <b>pilot study</b>, a{" "}
                <b>previous study</b> of a similar population, or a professional{" "}
                <b>educated guess</b> from known ranges. For σ unknown at planning time, the same
                formula runs with t and s — iterate once if needed. Sample-size math is the
                cheapest insurance in statistics.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="t-table instincts" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 24 · check"
              q="For a 95% interval with n = 16 and σ unknown, the correct multiplier is…"
              options={["t(0.025, 15) = 2.131", "z = 1.960", "t(0.05, 16) = 1.753", "z = 2.576"]}
              answer={0}
              explain="σ unknown → t-distribution; df = 16 − 1 = 15; 95% confidence splits α = 0.05 into α/2 = 0.025 per tail → t(0.025, 15) = 2.131. The margin: 2.131 × (55/√16) = 29.3."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 24 · check"
              q="As degrees of freedom increase, the t-distribution…"
              options={[
                "becomes more dispersed with heavier tails",
                "converges to the standard normal distribution",
                "becomes bimodal",
                "shifts its mean above zero",
              ]}
              answer={1}
              explain="The t family starts heavy-tailed at small df and converges to the standard normal as df grows — beyond df ≈ 100 the two are interchangeable. Mean stays 0 throughout; the tails do the moving."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                σ unknown → estimate it with <b>s</b> and switch to the{" "}
                <b>t-distribution</b>: x̄ ± t(α/2)·s/√n with <b>df = n − 1</b>.
              </>,
              <>
                The t is a <b>family</b> of symmetric curves — heavier tails at low df, visually
                identical to the normal past df ≈ 100.
              </>,
              <>
                Housing: <b>750 ± 2.131 × 13.75 = [720.7, 779.3]</b> — the df-morph shows exactly
                what the 2.131 (vs 1.960) is buying.
              </>,
              <>
                Planning sample size: <b>n = (z·σ/E)²</b>, Discount Sounds →{" "}
                <b>312</b>. Always <b>round up</b> — the margin promise is a floor.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
