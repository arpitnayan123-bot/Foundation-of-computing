"use client";

/* ============================================================
   Statistics for Managers — PART 13 (shelf 05 of The Atlas).
   The interval → inference finale, four movements:
   · #t-distribution — Lecture 24: when σ is unknown, s steps
     in and Student's t takes over — degrees of freedom, the
     off-campus housing interval, Discount Sounds' n = 312
   · #proportions — Lecture 25: p̂ ± E, the PSI exit poll, the
     np ≥ 5 gate, the planning value p* = 0.5, and PSI's jump
     from 500 to 1,817 respondents
   · #transmission — Lecture 26: Metropolitan Research's 50
     Detroit repair records — 73,340 ± 7,076 and the 19 early
     failures hiding below the interval
   · #hypothesis — Lecture 27: H₀ vs Hₐ, the courtroom drill,
     and the two errors every decision table hides

   Kit shared with parts 1–12: StmReadStep, StmCallout,
   StmPanel, StmQuiz (all exported from StmParts1) + the
   notes/ui Section, SectionHead, Reveal, Takeaways.
   ============================================================ */

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  Calculator,
  Car,
  Check,
  Gavel,
  LineChart,
  Percent,
  Sigma,
  Table2,
  Target,
  Users,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   Shared t-distribution math — log-gamma (Lanczos), the t
   density, its CDF (Simpson) and the two-tailed critical value.
   ============================================================ */
function logGamma(x: number): number {
  const c = [
    676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012,
    9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (x < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - logGamma(1 - x);
  x -= 1;
  let a = 0.99999999999980993;
  for (let i = 0; i < c.length; i++) a += c[i] / (x + i + 1);
  const t = x + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

function tPdf(x: number, df: number): number {
  const norm = Math.exp(logGamma((df + 1) / 2) - logGamma(df / 2)) / Math.sqrt(df * Math.PI);
  return norm * Math.pow(1 + (x * x) / df, -(df + 1) / 2);
}

function stdNormPdf(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function tCdf(t: number, df: number): number {
  const steps = 240;
  const a = -12;
  const h = (t - a) / steps;
  let s = tPdf(a, df) + tPdf(t, df);
  for (let i = 1; i < steps; i++) s += tPdf(a + i * h, df) * (i % 2 === 0 ? 2 : 4);
  return (s * h) / 3;
}

function tCrit(conf: number, df: number): number {
  const target = 1 - (1 - conf) / 2;
  let lo = 0;
  let hi = 40;
  for (let i = 0; i < 64; i++) {
    const mid = (lo + hi) / 2;
    if (tCdf(mid, df) < target) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

/* ============================================================
   LECTURE 24 · INTERVAL ESTIMATION WHEN σ IS UNKNOWN  (#t-distribution)
   ============================================================ */

const T_CURVE_X = (v: number) => 30 + ((v + 4) / 8) * 440;
const T_CURVE_Y = (v: number) => 170 - (v / 0.45) * 152;

function curvePath(f: (x: number) => number): string {
  let d = "";
  for (let i = 0; i <= 160; i++) {
    const x = -4 + (i / 160) * 8;
    d += `${i === 0 ? "M" : "L"}${T_CURVE_X(x).toFixed(2)},${T_CURVE_Y(f(x)).toFixed(2)}`;
    if (i < 160) d += " ";
  }
  return d;
}

/* machine — the df slider: Student's t overlays the normal */
function TCurveLab() {
  const [df, setDf] = useState(2);
  const tPath = useMemo(() => curvePath((x) => tPdf(x, df)), [df]);
  const zPath = useMemo(() => curvePath(stdNormPdf), []);
  const mood =
    df < 15
      ? "far from normal — the tails are visibly heavier"
      : df <= 60
        ? "closing in — the curves almost touch"
        : "beyond df ≈ 100 treat t as standard normal";
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — t vs normal · drag the degrees of freedom
        </p>
        <LineChart className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg viewBox="0 0 480 210" className="h-auto w-full" role="img" aria-label={`t-distribution with ${df} degrees of freedom overlaid on the standard normal curve; lower degrees of freedom show heavier tails`}>
          <line x1="22" y1="170" x2="470" y2="170" stroke={STM_G.border} strokeWidth="1.4" />
          <line x1={T_CURVE_X(0)} y1="170" x2={T_CURVE_X(0)} y2="178" stroke={STM_G.border} strokeWidth="1.4" />
          <text x={T_CURVE_X(0)} y="192" textAnchor="middle" fontSize="10" fill="#8a7fae">0</text>
          <text x={T_CURVE_X(-4)} y="192" textAnchor="middle" fontSize="10" fill="#8a7fae">−4</text>
          <text x={T_CURVE_X(4)} y="192" textAnchor="middle" fontSize="10" fill="#8a7fae">+4</text>
          <path d={zPath} fill="none" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="6 5" />
          <motion.path
            d={tPath}
            fill="none"
            stroke="#6d28d9"
            strokeWidth="2.6"
            strokeLinecap="round"
            initial={false}
            animate={{ d: tPath }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          />
          {df < 15 ? (
            <motion.text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              x="44" y="128" fontSize="10.5" fontWeight="700" fill="#b3402c"
            >
              heavier tails
            </motion.text>
          ) : null}
          <rect x="332" y="16" width="14" height="4" rx="2" fill="#6d28d9" />
          <text x="352" y="22" fontSize="10" fontWeight="700" fill="#4c1d95">{`t — df = ${df}`}</text>
          <rect x="332" y="30" width="14" height="4" rx="2" fill="#c4b5fd" />
          <text x="352" y="36" fontSize="10" fill="#8a7fae">normal (z)</text>
        </svg>
      </div>
      <div className="mt-3">
        <label htmlFor="tcurve-df" className="text-[.8rem] font-bold text-neutral-700">
          Degrees of freedom (df = n − 1): <span className="tabular-nums">{df}</span>
        </label>
        <input
          id="tcurve-df"
          type="range"
          min={2}
          max={100}
          step={1}
          value={df}
          onChange={(e) => setDf(Number(e.target.value))}
          className="mt-2 w-full accent-violet-600"
        />
        <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-500">
          At df = 2 the t-curve sags at the centre and bulges in the tails — more dispersed than the normal. Drag toward 100 and the violet curve settles onto the dashed one: higher df → less dispersion → closer to normal.
        </p>
        <p className="mt-2 rounded-lg px-3 py-1.5 text-center text-[.72rem] font-bold" style={{ background: STM_G.soft, color: STM_G[800] }} role="status">
          {mood} · beyond df 100: t ≈ z
        </p>
      </div>
    </div>
  );
}

/* machine — the off-campus housing confidence-interval builder */
function HousingCI() {
  const [n, setN] = useState(16);
  const [mean, setMean] = useState(750);
  const [sd, setSd] = useState(55);
  const [conf, setConf] = useState<90 | 95 | 99>(95);
  const df = n - 1;
  const tcrit = useMemo(() => tCrit(conf / 100, df), [conf, df]);
  const moe = (tcrit * sd) / Math.sqrt(n);
  const lo = mean - moe;
  const hi = mean + moe;
  const AX = (v: number) => 20 + ((v - 540) / 460) * 440;
  const lecture = n === 16 && mean === 750 && sd === 55 && conf === 95;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — off-campus housing · x̄ ± t(α/2) × (S/√n)
        </p>
        <Calculator className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-3">
          <div>
            <label htmlFor="housing-n" className="flex items-baseline justify-between text-[.78rem] font-bold text-neutral-700">
              Sample size n <span className="tabular-nums">{n}</span>
            </label>
            <input id="housing-n" type="range" min={5} max={60} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </div>
          <div>
            <label htmlFor="housing-mean" className="flex items-baseline justify-between text-[.78rem] font-bold text-neutral-700">
              Sample mean x̄ <span className="tabular-nums">${mean}</span>
            </label>
            <input id="housing-mean" type="range" min={600} max={900} step={5} value={mean} onChange={(e) => setMean(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </div>
          <div>
            <label htmlFor="housing-sd" className="flex items-baseline justify-between text-[.78rem] font-bold text-neutral-700">
              Sample SD S <span className="tabular-nums">${sd}</span>
            </label>
            <input id="housing-sd" type="range" min={20} max={90} step={5} value={sd} onChange={(e) => setSd(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </div>
          <div>
            <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-neutral-500">confidence level (1 − α)</p>
            <div className="mt-1 flex gap-1.5">
              {([90, 95, 99] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setConf(c)}
                  aria-pressed={conf === c}
                  className="rounded-full border px-3 py-1 text-[.7rem] font-bold transition-all"
                  style={{
                    borderColor: conf === c ? STM_G[600] : STM_G.border,
                    background: conf === c ? STM_G[600] : "#fff",
                    color: conf === c ? "#fff" : STM_G[800],
                  }}
                >
                  {c}%
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
          <div className="overflow-hidden rounded-lg border" style={{ borderColor: STM_G.border, background: "#fff" }}>
            <svg viewBox="0 0 480 96" className="h-auto w-full" role="img" aria-label={`Confidence interval from ${lo.toFixed(1)} to ${hi.toFixed(1)} dollars around a sample mean of ${mean} dollars`}>
              <line x1="16" y1="72" x2="464" y2="72" stroke={STM_G.border} strokeWidth="1.4" />
              <rect x={AX(lo)} y="30" width={Math.max(AX(hi) - AX(lo), 2)} height="24" rx="5" fill="#ddd6fe" opacity="0.75" />
              <line x1={AX(mean)} y1="22" x2={AX(mean)} y2="62" stroke="#6d28d9" strokeWidth="2.4" />
              <text x={AX(mean)} y="16" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4c1d95">{`$${mean}`}</text>
              <text x={AX(lo)} y="88" textAnchor="middle" fontSize="9.5" fill="#6d28d9">{`$${lo.toFixed(1)}`}</text>
              <text x={AX(hi)} y="88" textAnchor="middle" fontSize="9.5" fill="#6d28d9">{`$${hi.toFixed(1)}`}</text>
            </svg>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="font-mono text-lg font-black tabular-nums" style={{ color: STM_G[800] }}>{tcrit.toFixed(3)}</p>
              <p className="text-[.6rem] font-bold uppercase tracking-[.1em] text-neutral-500">{`t(α/2, ${df} df)`}</p>
            </div>
            <div>
              <p className="font-mono text-lg font-black tabular-nums" style={{ color: STM_G[800] }}>{moe.toFixed(1)}</p>
              <p className="text-[.6rem] font-bold uppercase tracking-[.1em] text-neutral-500">margin of error</p>
            </div>
            <div>
              <p className="font-mono text-lg font-black tabular-nums" style={{ color: STM_G[800] }}>{conf}%</p>
              <p className="text-[.6rem] font-bold uppercase tracking-[.1em] text-neutral-500">confident</p>
            </div>
          </div>
          <p className="mt-2 text-[.74rem] leading-relaxed text-neutral-600">
            {conf}% confident the mean monthly rent for one-bedroom apartments within half a mile of campus lies between <b style={{ color: STM_G[800] }}>${lo.toFixed(1)}</b> and <b style={{ color: STM_G[800] }}>${hi.toFixed(1)}</b>.
          </p>
          <AnimatePresence>
            {lecture ? (
              <motion.p
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-2 rounded-lg px-3 py-1.5 text-center text-[.7rem] font-bold"
                style={{ background: "#f1ecfd", color: STM_G[800] }}
              >
                ★ the lecture&rsquo;s values — t = 2.131, MoE = 29.3, [720.7, 779.3]
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export function StmTDistSection() {
  return (
    <Section id="t-distribution">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 24 · Interval Estimation When σ Is Unknown — the t-Distribution"
          title={
            <>
              Student&rsquo;s <span className="grad-violet">t</span> takes over
            </>
          }
          lead="When the population standard deviation is not known, estimation relies solely on the sample: both the mean and the standard deviation must be estimated from the data, s estimates σ — and the t-distribution replaces the normal for interval estimation."
        />

        <StmReadStep n="01" title="When σ is unknown — the sample carries everything" sub="s estimates σ, and t replaces z" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="The situation">{`σ is not known — estimation
relies solely on sample data.

Both the mean AND the standard
deviation must be estimated
from the sample.

The sample standard deviation
(S) estimates σ.`}</StmPanel>
            <StmPanel label="The consequence">{`The t-distribution is employed
for interval estimation instead
of the normal distribution.

Every extra unknown costs
certainty — the interval must
honestly admit that S itself
is only an estimate.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="One substitution, two ripples">
            Swapping σ for S is not a free letter change. The critical value must now come from a distribution that charges for the added uncertainty — Student&rsquo;s t, a family of curves tuned by degrees of freedom rather than one fixed normal.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="The t-distribution — a family, not a curve" sub="Similar to the normal, with slightly heavier tails" />
        <Reveal>
          <TCurveLab />
        </Reveal>
        <Reveal>
          <StmCallout kind="story" title="The Guinness origin">
            Developed by a scientist named &ldquo;Student&rdquo; while working on small-scale experiments at the Guinness brewery in Dublin. Small batches, small samples — exactly the setting where σ can never be known and the normal stops being honest.
          </StmCallout>
        </Reveal>
        <Reveal>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <StmPanel label="A family">{`Not a single distribution but
a family of distributions.

Each member is picked out by
a parameter called degrees of
freedom (df).`}</StmPanel>
            <StmPanel label="More dispersed">{`At lower degrees of freedom
the t-curve is more dispersed
than the normal.

The price of estimating σ
from the same dataset.`}</StmPanel>
            <StmPanel label="Converges">{`Converges to the normal
distribution beyond df ≈ 100.

Symmetric around zero at
every df along the way.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Degrees of freedom — the information budget" sub="df = n − 1, and every df buys precision" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Definition & arithmetic">{`df = the number of independent
pieces of information used to
compute the statistic (here,
the sample standard deviation).

df = n − 1 — reduced by one
because the mean and the SD are
calculated from the SAME
dataset.`}</StmPanel>
            <StmPanel label="Effect on the distribution">{`More independent information →
less dispersion → greater
confidence in the estimates.

Higher df → closer to normal.
Lower df → higher dispersion.

Beyond 100 df: treat t as
standard normal.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why minus one?">
            Once x̄ is fixed, the n deviations are no longer freely independent — the last one is already determined by the others. Spending one degree of freedom on the mean leaves n − 1 for the spread, and the t-table charges interest for every degree you lack.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="The confidence interval when σ is unknown" sub="x̄ ± t(α/2) × (S/√n)" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
              <p className="flex items-center gap-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
                <Sigma className="h-3.5 w-3.5" /> the formula — every part named
              </p>
              <StmPanel label="x̄ ± t(α/2) × (S/√n)">{`x̄      sample mean
t(α/2) t value from the t-table for
       significance α/2 and (n − 1) df
S      sample standard deviation
n      sample size
(1 − α) the confidence coefficient`}</StmPanel>
            </div>
            <StmPanel label="Worked example — off-campus housing">{`n = 16 apartments
x̄ = $750 per month
S = $55
confidence = 95%

α = 0.05  →  α/2 = 0.025
df = n − 1 = 15
t(0.025, 15) = 2.131   (t-table)

MoE = 2.131 × (55/√16)
    = 2.131 × 13.75 = 29.3

CI = 750 ± 29.3 = [720.7, 779.3]`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The interpretation, verbatim">
            We are 95% confident that the mean monthly rent for one-bedroom apartments within half a mile of campus lies between <b>$720.70 and $779.30</b>. The interval pins down the mean — individual apartments still scatter far beyond it.
          </StmCallout>
        </Reveal>
        <Reveal>
          <HousingCI />
        </Reveal>

        <StmReadStep n="05" title="How big must the sample be?" sub="The t interval's honesty has a price: data" />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "≥ 30", d: "Generally at least 30 observations — the working default for the t interval." },
              { t: "50+", d: "For highly skewed populations or datasets with outliers, 50 or more is recommended." },
              { t: "≈ 15", d: "For roughly symmetric distributions, a sample as small as 15 may suffice." },
              { t: "< 15", d: "For approximately normal populations, even fewer than 15 may be acceptable." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
                <p className="font-mono text-lg font-black tabular-nums" style={{ color: STM_G[800] }}>{c.t}</p>
                <p className="mt-1 text-[.74rem] leading-relaxed text-neutral-600">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <StmReadStep n="06" title="Planning n — and the known/unknown decision rule" sub="Round UP, always" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-3">
            <StmPanel label="Required sample size">{`σ known:   n = (Z(α/2) × σ / E)²
σ unknown: n = (t(α/2) × S / E)²

E = the desired margin of error
Z(α/2) / t(α/2) = critical value
σ / S = population or sample SD

ALWAYS round UP to the next
whole number — the error must
never exceed the limit.`}</StmPanel>
            <StmPanel label="Example — Discount Sounds">{`Estimate the mean annual income:
95% confidence (α = 0.05)
E = $500
σ = $4,500 (from previous data)

Z(0.025) = 1.96

n = (1.96 × 4,500 / 500)²
  = (17.64)² = 311.17

→ required n = 312 (rounded up)`}</StmPanel>
            <StmPanel label="The decision rule">{`σ KNOWN
→ z-distribution
→ MoE = Z(α/2) × (σ/√n)

σ UNKNOWN
→ t-distribution
→ MoE = t(α/2) × (S/√n)
→ estimate σ using the
  sample standard deviation s`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Estimating σ before the study exists">
            Planning n with σ unknown needs a preliminary estimate of the spread. Four sources: a <b>pilot study</b> with a small sample; <b>previous studies</b> on similar topics; <b>professional judgment</b> from experience and knowledge of the population; or <b>educated guesses</b> from known population ranges.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="Discount Sounds computes n = (1.96 × 4,500 / 500)² = 311.17. What sample size goes into the plan — and why that one?"
          options={[
            "311 — round 311.17 to the nearest whole number",
            "312 — round UP, so the margin of error never exceeds the $500 limit",
            "313 — add one beyond the rounded value for extra safety",
            "17.64 — the sample size is the standardized multiplier itself",
          ]}
          answer={1}
          explain="(1.96 × 4,500/500)² = (17.64)² = 311.17. The rule: always round UP to the next whole number — 312. Rounding down to 311 would let the achieved margin of error creep past the desired $500 limit; the round-up guarantees it never does."
        />

        <Takeaways
          items={[
            <>σ unknown → <b>both mean and spread</b> estimated from the sample; s estimates σ and <b>Student&rsquo;s t replaces the normal</b>.</>,
            <><b>df = n − 1</b> — fewer independent pieces, more dispersion; beyond <b>df ≈ 100</b>, treat t as standard normal.</>,
            <>CI: <b>x̄ ± t(α/2) × (S/√n)</b> — housing: 750 ± 2.131 × 13.75 = ±29.3 → <b>[$720.7, $779.3]</b> at 95%.</>,
            <>Sample size ladder: <b>≥ 30 general</b>, 50+ skewed, ≈15 symmetric, &lt;15 near-normal; plan n with the <b>round-UP rule</b> — Discount Sounds needed <b>312</b>.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 25 · ESTIMATING POPULATION PROPORTION  (#proportions)
   ============================================================ */

const PSTAR_Z: Record<90 | 95 | 99, number> = { 90: 1.645, 95: 1.96, 99: 2.576 };
const PSTAR_PX = (p: number) => 30 + ((p - 0.05) / 0.9) * 430;

function pstarCurvePath(z: number, e: number, nPeak: number, py: (nv: number) => number): string {
  let d = "";
  for (let i = 0; i <= 90; i++) {
    const pv = 0.05 + (i / 90) * 0.9;
    const nv = (z * z * pv * (1 - pv)) / (e * e);
    d += `${i === 0 ? "M" : "L"}${PSTAR_PX(pv).toFixed(2)},${py(nv).toFixed(2)}`;
    if (i < 90) d += " ";
  }
  return d;
}

/* machine — the exit-poll CI builder with the np ≥ 5 gate */
function ExitPollCI() {
  const [n, setN] = useState(500);
  const [pct, setPct] = useState(44);
  const phat = pct / 100;
  const z = 1.96;
  const moe = z * Math.sqrt((phat * (1 - phat)) / n);
  const lo = phat - moe;
  const hi = phat + moe;
  const c1 = n * phat;
  const c2 = n * (1 - phat);
  const ok1 = c1 >= 5;
  const ok2 = c2 >= 5;
  const AX = (v: number) => 20 + v * 440;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — exit poll · p̂ ± 1.96 × √[p̂(1−p̂)/n] at 95%
        </p>
        <Percent className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 grid gap-4 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-3">
          <div>
            <label htmlFor="poll-n" className="flex items-baseline justify-between text-[.78rem] font-bold text-neutral-700">
              Registered voters n <span className="tabular-nums">{n.toLocaleString()}</span>
            </label>
            <input id="poll-n" type="range" min={100} max={2000} step={10} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
          </div>
          <div>
            <label htmlFor="poll-p" className="flex items-baseline justify-between text-[.78rem] font-bold text-neutral-700">
              Sample proportion p̂ <span className="tabular-nums">{phat.toFixed(2)}</span>
            </label>
            <input id="poll-p" type="range" min={1} max={99} step={1} value={pct} onChange={(e) => setPct(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
            <p className="mt-1 text-[.7rem] tabular-nums text-neutral-500">{Math.round(c1).toLocaleString()} of {n.toLocaleString()} voters favor the candidate</p>
          </div>
          <div className="flex flex-wrap gap-2" role="status" aria-label="Normal approximation condition checks">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.68rem] font-bold"
              style={ok1 ? { borderColor: STM_G.border, background: STM_G.soft, color: STM_G[800] } : { borderColor: "#e8a896", background: "#fbeae5", color: "#b3402c" }}
            >
              {ok1 ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
              np = {c1.toFixed(0)} ≥ 5
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.68rem] font-bold"
              style={ok2 ? { borderColor: STM_G.border, background: STM_G.soft, color: STM_G[800] } : { borderColor: "#e8a896", background: "#fbeae5", color: "#b3402c" }}
            >
              {ok2 ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
              n(1−p) = {c2.toFixed(0)} ≥ 5
            </span>
            {!ok1 || !ok2 ? <span className="text-[.68rem] font-bold" style={{ color: "#b3402c" }}>gate failed — the normal approximation is not legal here</span> : null}
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
          <div className="overflow-hidden rounded-lg border" style={{ borderColor: STM_G.border, background: "#fff" }}>
            <svg viewBox="0 0 480 96" className="h-auto w-full" role="img" aria-label={`95% confidence interval from ${(lo * 100).toFixed(2)} percent to ${(hi * 100).toFixed(2)} percent around a sample proportion of ${pct} percent`}>
              <line x1="16" y1="72" x2="464" y2="72" stroke={STM_G.border} strokeWidth="1.4" />
              {[0, 25, 50, 75, 100].map((t) => (
                <g key={t}>
                  <line x1={AX(t)} y1="72" x2={AX(t)} y2="77" stroke={STM_G.border} strokeWidth="1.2" />
                  <text x={AX(t)} y="90" textAnchor="middle" fontSize="8.5" fill="#8a7fae">{`${t}%`}</text>
                </g>
              ))}
              <rect x={AX(lo * 100)} y="30" width={Math.max(AX(hi * 100) - AX(lo * 100), 2)} height="24" rx="5" fill="#ddd6fe" opacity="0.75" />
              <line x1={AX(pct)} y1="22" x2={AX(pct)} y2="62" stroke="#6d28d9" strokeWidth="2.4" />
              <text x={AX(pct)} y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="#4c1d95">{`${pct}%`}</text>
              <text x={AX(lo * 100)} y="26" textAnchor="middle" fontSize="9" fill="#6d28d9">{`${(lo * 100).toFixed(2)}%`}</text>
              <text x={AX(hi * 100)} y="26" textAnchor="middle" fontSize="9" fill="#6d28d9">{`${(hi * 100).toFixed(2)}%`}</text>
            </svg>
          </div>
          <p className="mt-2 text-[.74rem] leading-relaxed text-neutral-600">
            Margin of error E = <b style={{ color: STM_G[800] }}>{moe.toFixed(4)}</b> — 95% confident the true proportion favoring the candidate lies between <b style={{ color: STM_G[800] }}>{(lo * 100).toFixed(2)}%</b> and <b style={{ color: STM_G[800] }}>{(hi * 100).toFixed(2)}%</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* machine — the p* explorer: required n peaks at 0.5 */
function PStarLab() {
  const [conf, setConf] = useState<90 | 95 | 99>(99);
  const [ePct, setEPct] = useState(3);
  const [pPct, setPPct] = useState(44);
  const z = PSTAR_Z[conf];
  const E = ePct / 100;
  const p = pPct / 100;
  const nRaw = (pv: number) => (z * z * pv * (1 - pv)) / (E * E);
  const nFor = (pv: number) => Math.ceil(nRaw(pv));
  const n = nFor(p);
  const nPeak = nRaw(0.5);
  const PY = (nv: number) => 186 - (nv / (nPeak * 1.12)) * 158;
  const curve = pstarCurvePath(z, E, nPeak, PY);
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the p* explorer · n = [z(α/2)]² × p*(1−p*) / E²
        </p>
        <Target className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <div className="flex gap-1.5">
          {([90, 95, 99] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setConf(c)}
              aria-pressed={conf === c}
              className="rounded-full border px-3 py-1 text-[.7rem] font-bold transition-all"
              style={{
                borderColor: conf === c ? STM_G[600] : STM_G.border,
                background: conf === c ? STM_G[600] : "#fff",
                color: conf === c ? "#fff" : STM_G[800],
              }}
            >
              {c}%
            </button>
          ))}
        </div>
        <div className="min-w-[150px] flex-1">
          <label htmlFor="pstar-e" className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
            desired margin E <span className="tabular-nums">±{E.toFixed(2)}</span>
          </label>
          <input id="pstar-e" type="range" min={1} max={10} step={0.5} value={ePct} onChange={(e) => setEPct(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
        </div>
        <div className="min-w-[150px] flex-1">
          <label htmlFor="pstar-p" className="flex items-baseline justify-between text-[.72rem] font-bold text-neutral-700">
            planning value p* <span className="tabular-nums">{p.toFixed(2)}</span>
          </label>
          <input id="pstar-p" type="range" min={5} max={95} step={1} value={pPct} onChange={(e) => setPPct(Number(e.target.value))} className="mt-1 w-full accent-violet-600" />
        </div>
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg viewBox="0 0 480 210" className="h-auto w-full" role="img" aria-label={`Required sample size across planning values from 0.05 to 0.95, peaking at p star 0.5 with ${Math.ceil(nPeak)} respondents; current planning value ${p.toFixed(2)} needs ${n}`}>
          <line x1="22" y1="186" x2="470" y2="186" stroke={STM_G.border} strokeWidth="1.4" />
          <line x1={PSTAR_PX(0.5)} y1="186" x2={PSTAR_PX(0.5)} y2="178" stroke={STM_G.border} strokeWidth="1.2" />
          <text x={PSTAR_PX(0.5)} y="200" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#4c1d95">0.5</text>
          <text x={PSTAR_PX(0.05)} y="200" textAnchor="middle" fontSize="9" fill="#8a7fae">0.05</text>
          <text x={PSTAR_PX(0.95)} y="200" textAnchor="middle" fontSize="9" fill="#8a7fae">0.95</text>
          <line x1="30" y1={PY(nPeak)} x2="460" y2={PY(nPeak)} stroke="#c4b5fd" strokeWidth="1.4" strokeDasharray="5 5" />
          <text x="458" y={PY(nPeak) - 5} textAnchor="end" fontSize="9.5" fontWeight="700" fill="#6d28d9">
            {`peak at p* = 0.5 → n = ${Math.ceil(nPeak).toLocaleString()}`}
          </text>
          <path d={curve} fill="none" stroke="#8b5cf6" strokeWidth="2.4" strokeLinecap="round" />
          <motion.line
            x1={PSTAR_PX(p)} y1="186" x2={PSTAR_PX(p)} y2={PY(nRaw(p))}
            stroke="#6d28d9" strokeWidth="1.6" strokeDasharray="4 4"
            animate={{ x1: PSTAR_PX(p), x2: PSTAR_PX(p), y2: PY(nRaw(p)) }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
          <motion.circle
            r="5.5" fill="#4c1d95" stroke="#fff" strokeWidth="2"
            animate={{ cx: PSTAR_PX(p), cy: PY(nRaw(p)) }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          />
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.74rem] leading-relaxed text-neutral-600">
          z(α/2) = <b style={{ color: STM_G[800] }}>{z}</b> · p* = {p.toFixed(2)} · E = ±{E.toFixed(2)} → required n ={" "}
          <span className="inline-block" aria-live="polite">
            <AnimatePresence mode="popLayout">
              <motion.b
                key={n}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="inline-block font-mono text-[.95rem] tabular-nums"
                style={{ color: STM_G[800] }}
              >
                {n.toLocaleString()}
              </motion.b>
            </AnimatePresence>{" "}
            (rounded up)
          </span>
        </p>
        <p className="rounded-lg px-3 py-1.5 text-[.68rem] font-bold" style={{ background: STM_G.soft, color: STM_G[800] }}>
          the Excel demo sweeps p = 0.1 … 0.7 — n peaks at 0.5 and falls on both sides
        </p>
      </div>
    </div>
  );
}

export function StmProportionsSection() {
  return (
    <Section id="proportions">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 25 · Estimating Population Proportion & Interval Estimation"
          title={
            <>
              Proportions: <span className="grad-violet">p̂ ± E</span>
            </>
          }
          lead="Proportion estimation mirrors mean estimation — the answer is a confidence interval, not a single point. The structure is p̂ ± E, and the sampling distribution of p̂ follows a normal distribution when conditions are met."
        />

        <StmReadStep n="01" title="The same logic, a new parameter" sub="A range, not a point" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-3">
            <StmPanel label="Point estimate">{`p̂ — the sample proportion.

Proportion estimation involves
calculating a range (a confidence
interval) rather than a single
point estimate.`}</StmPanel>
            <StmPanel label="Formula structure">{`p̂ ± E

p̂ = the sample proportion (the
point estimate)
E = the margin of error.`}</StmPanel>
            <StmPanel label="Sampling distribution">{`The sampling distribution of
p̂ follows a NORMAL distribution
when conditions are met —

and the conditions come first,
before any calculation.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The gate: np ≥ 5 and n(1−p) ≥ 5" sub="Verify before any calculation" />
        <Reveal>
          <StmCallout kind="why" title="Two checks, zero exceptions">
            The sampling distribution of p̂ can be approximated by a normal distribution only when <b>np ≥ 5</b> AND <b>n(1−p) ≥ 5</b>, where p is the population proportion and n the sample size. Both conditions must be verified before proceeding with any calculation — a rare category in a small sample fails the gate, and the z machinery must not be switched on.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="The confidence interval formula" sub="p̂ ± z(α/2) × √[p̂(1−p̂)/n]" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
              <p className="flex items-center gap-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
                <Sigma className="h-3.5 w-3.5" /> every term named
              </p>
              <StmPanel label="p̂ ± z(α/2) × √[p̂(1−p̂)/n]">{`p̂      the sample proportion
z(α/2) the critical z value from the
       standard normal distribution
α      = 1 − confidence level
α/2    = area in each tail
σ(p̂) = √[p̂(1−p̂)/n]
       = the standard error of the
         proportion`}</StmPanel>
            </div>
            <ExitPollCI />
          </div>
        </Reveal>

        <StmReadStep n="04" title="The exit poll — PSI counts candidate C" sub="220 of 500 registered voters, 95% confident" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The calculation ledger">{`A political science organization
(PSI) surveys registered voters.

n = 500 registered voters
favoring candidate C = 220
p̂ = 220 / 500 = 0.44
confidence = 95% → z(α/2) = 1.96

E = 1.96 × √[0.44 × 0.56 / 500]
  = 0.0435

CI = 0.44 ± 0.0435
   = [0.3965, 0.4835]`}</StmPanel>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
                <Users className="h-3.5 w-3.5" /> reading the verdict
              </p>
              <p className="mt-3 text-[.88rem] leading-relaxed text-[#2b2014]">
                PSI is <b>95% confident</b> that the true proportion of voters favoring the candidate lies between <b>39.65% and 48.35%</b>.
              </p>
              <p className="mt-2 text-[.8rem] leading-relaxed text-neutral-600">
                Note what the interval does NOT say: it is about the population proportion, not about any one precinct — and it does not guarantee the candidate wins, since 50% sits just outside the upper bound.
              </p>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Planning n — the planning value p*" sub="You cannot know p̂ before you sample" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The formula & the caveat">{`n = [z(α/2)]² × p* × (1−p*) / E²

The planning value p* is needed
because the sample proportion
cannot be known before sampling.`}</StmPanel>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { t: "Previous study", d: "Use the sample proportion from a previous similar study." },
                { t: "Preliminary sample", d: "Conduct one first, then use its proportion as p*." },
                { t: "Judgment", d: "Use judgment or a best guess for the proportion." },
                { t: "Default p* = 0.5", d: "Produces the largest, most conservative sample size." },
              ].map((o) => (
                <div key={o.t} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: o.t.startsWith("Default") ? "#f1ecfd" : "#fff" }}>
                  <p className="text-[.8rem] font-black" style={{ color: STM_G[800] }}>{o.t}</p>
                  <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-600">{o.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <PStarLab />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why 0.5 is the safest default">
            p(1−p) is maximized when p = 0.5 — so p* = 0.5 yields the <b>maximum sample size</b>, the safest estimate that ensures the actual error won&rsquo;t exceed the specified margin and protects against undersampling. The lecture&rsquo;s Excel demonstration tests p = 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7: n is maximized at p = 0.5, with decreasing sample sizes as values move away in either direction.
          </StmCallout>
        </Reveal>

        <StmReadStep n="06" title="PSI buys precision — and the mean ↔ proportion bridge" sub="500 → 1,817 respondents" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The 99% upgrade plan">{`Goal: 99% confidence, E = ±0.03
α = 0.01 → α/2 = 0.005
z(0.005) = 2.576
planning value p* = 0.44 (previous sample)

n = (2.576)² × 0.44 × 0.56 / (0.03)²
  = 1,817

Moving 500 → 1,817 respondents buys:
· confidence 95% → 99%
· margin ±0.0435 → ±0.03

Alternative p* = 0.5:
n = 1,843 (slightly larger,
more conservative)`}</StmPanel>
            <div className="space-y-3">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { t: "Confidence ↑", d: "Higher confidence → larger n, same margin of error." },
                  { t: "Margin ↓", d: "Smaller E → larger n, same confidence level." },
                  { t: "n ↑ → MoE ↓", d: "The inverse square-root relationship — precision grows slowly with cost." },
                ].map((r) => (
                  <div key={r.t} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
                    <p className="text-[.8rem] font-black" style={{ color: STM_G[800] }}>{r.t}</p>
                    <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-600">{r.d}</p>
                  </div>
                ))}
              </div>
              <StmCallout kind="insight" title="The trade-off">
                Organizations must balance precision requirements against survey cost — every extra decimal of margin is bought with respondents, and the sample-size formula is the price list.
              </StmCallout>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
            <p className="flex items-center gap-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
              <Table2 className="h-3.5 w-3.5" /> mean estimation vs proportion estimation
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="warm-table min-w-[540px]">
                <thead>
                  <tr>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Aspect</th>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Mean estimation</th>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Proportion estimation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Point estimate", "x̄", "p̂"],
                    ["Standard error", "σ/√n", "√[p(1−p)/n]"],
                    ["Confidence interval", "x̄ ± E", "p̂ ± E"],
                    ["Margin of error", "z(α/2) × σ/√n", "z(α/2) × √[p̂(1−p̂)/n]"],
                    ["Sample-size formula", "Similar structure", "Same approach, with p*"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="font-bold">{row[0]}</td>
                      <td className="font-mono">{row[1]}</td>
                      <td className="font-mono">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <StmQuiz
          q="PSI plans a 99%-confidence poll with E = ±0.03 and planning value p* = 0.44, giving n = 1,817. Why does defaulting to p* = 0.5 change the plan — and what does it give?"
          options={[
            "p(1−p) peaks at 0.5, so n grows to its maximum — 1,843 — a plan that can never undershoot the margin",
            "p* = 0.5 halves the standard error, so fewer respondents are needed",
            "p* only affects the point estimate, not the planned sample size",
            "z(0.005) doubles when p* = 0.5, so n falls",
          ]}
          answer={0}
          explain="n = [z(α/2)]² × p*(1−p*) / E². Since p(1−p) is maximized at p = 0.5, the default gives the largest n — the lecture's 1,843 versus 1,817 with p* = 0.44. That is the conservative choice: it guarantees the actual error will not exceed the specified margin and protects against undersampling."
        />

        <Takeaways
          items={[
            <>Proportions mirror means: <b>p̂ ± E</b> with standard error <b>√[p̂(1−p̂)/n]</b> — a range, never a point.</>,
            <>Gate first: <b>np ≥ 5 and n(1−p) ≥ 5</b> — verify before any calculation.</>,
            <>Exit poll: 220/500 = <b>0.44</b>; 1.96 × √(0.44 × 0.56/500) = <b>0.0435</b> → CI <b>[0.3965, 0.4835]</b>.</>,
            <>Planning n needs <b>p*</b> — previous study, preliminary sample, judgment, or the conservative <b>0.5</b>; PSI&rsquo;s 99% ±0.03 plan: <b>1,817</b> (1,843 at p* = 0.5).</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 26 · CASE STUDY — TRANSMISSION FAILURE  (#transmission)
   ============================================================ */

type HistTone = "early" | "band" | "late";

const HIST_BARS: { from: number; to: number; n: number; tone: HistTone }[] = [
  { from: 20000, to: 30000, n: 1, tone: "early" },
  { from: 30000, to: 40000, n: 3, tone: "early" },
  { from: 40000, to: 50000, n: 5, tone: "early" },
  { from: 50000, to: 60000, n: 6, tone: "early" },
  { from: 60000, to: 66264, n: 4, tone: "early" },
  { from: 66264, to: 70000, n: 5, tone: "band" },
  { from: 70000, to: 72700, n: 1, tone: "band" },
  { from: 72700, to: 80000, n: 7, tone: "band" },
  { from: 80000, to: 90000, n: 7, tone: "late" },
  { from: 90000, to: 100000, n: 6, tone: "late" },
  { from: 100000, to: 110000, n: 3, tone: "late" },
  { from: 110000, to: 120000, n: 2, tone: "late" },
];

const HIST_FILL: Record<HistTone, string> = { early: "#c65a41", band: "#6d28d9", late: "#c4b5fd" };
const HIST_PX = (m: number) => 34 + ((m - 15000) / 105000) * 436;

/* machine — the failure histogram vs the 95% band */
function FailureHistogram() {
  const [run, setRun] = useState(0);
  const barH = (c: number) => (c / 7) * 140;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — 50 repair records vs the 95% band [66,264 · 80,416]
        </p>
        <BarChart3 className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
        <svg viewBox="0 0 480 250" className="h-auto w-full" role="img" aria-label="Histogram of transmission failures by mileage: 19 vehicles failed below 66,264 miles, 13 within the confidence band, and 18 beyond 80,416; the mean of 73,340 miles sits inside the band">
          <rect x={HIST_PX(66264)} y="18" width={HIST_PX(80416) - HIST_PX(66264)} height="182" fill="#7c3aed" opacity="0.08" />
          <line x1={HIST_PX(66264)} y1="18" x2={HIST_PX(66264)} y2="200" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 4" />
          <line x1={HIST_PX(80416)} y1="18" x2={HIST_PX(80416)} y2="200" stroke="#6d28d9" strokeWidth="1.4" strokeDasharray="5 4" />
          <text x={HIST_PX(66264)} y="12" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4c1d95">66,264</text>
          <text x={HIST_PX(80416)} y="12" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#4c1d95">80,416</text>
          <line x1={HIST_PX(73340)} y1="30" x2={HIST_PX(73340)} y2="200" stroke="#4c1d95" strokeWidth="1.2" strokeDasharray="2 4" />
          <text x={HIST_PX(73340) + 4} y="40" fontSize="9" fontWeight="700" fill="#4c1d95">mean 73,340</text>
          <line x1="30" y1="200" x2="474" y2="200" stroke={STM_G.border} strokeWidth="1.4" />
          {HIST_BARS.map((b, i) => (
            <motion.rect
              key={`${run}-${b.from}`}
              x={HIST_PX(b.from) + 1}
              width={Math.max(HIST_PX(b.to) - HIST_PX(b.from) - 2, 2)}
              fill={HIST_FILL[b.tone]}
              opacity="0.9"
              rx="3"
              initial={{ height: 0, y: 200 }}
              whileInView={{ height: barH(b.n), y: 200 - barH(b.n) }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 140, damping: 16 }}
            />
          ))}
          {[20, 40, 60, 80, 100, 120].map((k) => (
            <text key={k} x={HIST_PX(k * 1000)} y="216" textAnchor="middle" fontSize="9" fill="#8a7fae">
              {`${k}k`}
            </text>
          ))}
          <text x="252" y="238" textAnchor="middle" fontSize="10" fill="#8a7fae">kilometers driven before transmission failure</text>
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.68rem] font-bold" style={{ borderColor: "#e8a896", background: "#fbeae5", color: "#b3402c" }}>
          <AlertTriangle className="h-3.5 w-3.5" /> 19 early failures — below 66,264
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.68rem] font-bold" style={{ borderColor: STM_G.border, background: STM_G.soft, color: STM_G[800] }}>
          <Check className="h-3.5 w-3.5" /> 13 inside the 95% band
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.68rem] font-bold" style={{ borderColor: STM_G.border, background: "#fff", color: STM_G[700] }}>
          18 beyond 80,416
        </span>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="ml-auto rounded-full border px-3 py-1 text-[.68rem] font-bold transition-all hover:-translate-y-0.5"
          style={{ borderColor: STM_G[600], background: STM_G[600], color: "#fff" }}
          aria-label="Replay the histogram animation of 50 transmission failures"
        >
          ↻ replay the 50 failures
        </button>
      </div>
      <p className="mt-2 text-[.72rem] leading-relaxed text-neutral-500">
        Shape redrawn from the lecture&rsquo;s summary numbers — 19 vehicles below the interval, 13 inside it, 18 above — since the 50 raw records are not printed in the deck. The visual verdict stands: more failures occur at LOWER mileage ranges.
      </p>
    </div>
  );
}

export function StmTransmissionSection() {
  return (
    <Section id="transmission">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 26 · Case Study — Transmission Failure Through Descriptive Statistics"
          title={
            <>
              The <span className="grad-violet">transmission</span> case file
            </>
          }
          lead="Metropolitan Research, a consumer research organization, runs satisfaction surveys on products and services. Questionnaire responses from car owners revealed multiple complaints about early transmission failures — so 50 actual repair records from a transmission repair firm in Detroit became the data, each one recording the kilometers driven before transmission failure."
        />

        <StmReadStep n="01" title="The case file" sub="50 repair records, one question: how long do transmissions last?" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
                <Car className="h-3.5 w-3.5" /> the organization &amp; the problem
              </p>
              <ul className="mt-3 space-y-1.5 text-[.82rem] leading-relaxed text-[#2b2014]">
                <li>· Metropolitan Research — consumer satisfaction surveys on products and services</li>
                <li>· Focus: customer satisfaction with automobile transmission performance</li>
                <li>· Problem: questionnaire responses revealed multiple complaints about <b>early</b> transmission failures</li>
              </ul>
            </div>
            <StmPanel label="The data">{`Sample: 50 actual transmission
repair records, from a
transmission repair firm
in Detroit.

Measure: the number of
kilometers driven before
transmission failure, for
each vehicle.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The descriptives" sub="Mean, median, SD — and the mode that isn't there" />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Mean", v: "73,340", d: "miles — the average distance before transmission failure." },
              { t: "Median", v: "72,700", d: "miles — 50% of vehicles fail below this point, 50% above." },
              { t: "SD", v: "24,849", d: "miles — indicates HIGH variability in failure points." },
              { t: "Mode", v: "none", d: "No two vehicles failed at exactly the same mileage — no pattern concentration." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
                <p className="font-mono text-[.62rem] font-bold uppercase tracking-[.14em] text-neutral-500">{c.t}</p>
                <p className="mt-0.5 font-mono text-xl font-black tabular-nums" style={{ color: STM_G[800] }}>{c.v}</p>
                <p className="mt-1 text-[.72rem] leading-relaxed text-neutral-600">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Reading the descriptives">
            Of the 50 vehicles sampled, <b>25 failed before 72,700 miles and 25 after</b>. Skewness is slightly positive and close to zero — relatively symmetrical, not heavily skewed. The high SD signals substantial variation in when failures occur; the absent mode means failures spread across a wide range rather than clustering at specific mileage points.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="Excel, step by step" sub="Data Analysis → Descriptive Statistics → the 95% interval" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Getting the descriptives">{`Data tab → Data Analysis tool pack
(missing? File → Options →
 Add-ins → Analysis Tool Pack)

Select Descriptive Statistics:
· input range — your data column
· "Labels in First Row" if applicable
· request the confidence interval (95%)
· output to a new worksheet
  for better visualization`}</StmPanel>
            <StmPanel label="Visualizing the distribution">{`Histograms display failure
frequency across mileage ranges.

Conditional formatting identifies
duplicate values.

The visual verdict: MORE failures
occur at LOWER mileage ranges.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <FailureHistogram />
        </Reveal>

        <StmReadStep n="04" title="The 95% interval — and what hides beneath it" sub="73,340 ± 7,076" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The interval">{`Mean ± Margin of error
= 73,340 ± 7,076

CI = [66,264, 80,416] miles

95% confident the true population
mean number of miles before
transmission failure falls in
that band.`}</StmPanel>
            <StmPanel label="The critical observation">{`19 vehicles failed BELOW 66,264 —
earlier than the interval.

18 vehicles failed ABOVE 80,416.

Early failures below the lower
bound suggest potential SERIOUS
quality issues.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Averages can hide a warranty crisis">
            While the average failure occurs around 73,000 miles, a significant portion of vehicles fail much earlier — a critical quality and warranty concern. Statistical averages must be read alongside the distribution of outliers, never instead of it.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Planning the next study" sub="±5,000 miles at 95% needs ≈ 100 vehicles" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-3">
            <StmPanel label="The sample size">{`Goal: estimate the population
mean within E = 5,000 miles
at 95% confidence.

n = (Z(α/2))² × σ² / E²
Z(α/2) = 1.96
σ = 24,849 (planned from the
     previous sample)
E = 5,000

n = (1.96)² × (24,849)² / (5,000)²
  ≈ 95.26
→ recommend ≈ 100 vehicles`}</StmPanel>
            <StmPanel label="Supply side — what to investigate">{`· defects in specific
  production batches
· material quality issues
· problems with particular
  manufacturing plants
  or machinery
· supplier quality variations`}</StmPanel>
            <StmPanel label="Demand side — what to investigate">{`· driver behavior and
  driving techniques
· road conditions & terrain
  (off-road, highway vs city)
· geographic location and
  climate (rainy seasons,
  wet conditions)
· vehicle maintenance patterns
· environmental and
  infrastructure factors`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="06" title="The path forward" sub="Descriptives open the case; they cannot close it" />
        <Reveal>
          <StmCallout kind="why" title="From univariate to multi-variable">
            Expand data collection to include multiple variables — production batch, driver information, road conditions, climate data. Employ advanced techniques such as <b>regression analysis or machine-learning models</b>; correlate failures with supply-chain and customer-use variables to identify root causes; use multi-variable analysis to determine which factors most significantly influence transmission durability. Descriptive statistics provide essential insight for managerial decision-making — while univariate analysis has limits, and comprehensive evaluation needs more sophisticated approaches.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="Metropolitan Research's 95% interval runs [66,264, 80,416] miles — yet 19 vehicles failed below 66,264. What is the managerially honest reading?"
          options={[
            "The interval is broken — 19 failures outside it disprove the mean",
            "The interval locates the MEAN, not every vehicle — the early failures below the bound flag potential serious quality issues",
            "The confidence level must be raised to 99% so the interval covers the early failures",
            "The median should replace the mean to eliminate the outliers",
          ]}
          answer={1}
          explain="A 95% CI pins down where the population MEAN lies — [66,264, 80,416] — not where each of the 50 vehicles falls (SD = 24,849, so individuals scatter widely). The 19 early failures don't refute the interval; they are the product signal: significant early-failure volume is a quality and warranty concern, motivating the ≈100-vehicle follow-up and multi-variable root-cause analysis."
        />

        <Takeaways
          items={[
            <>The case: 50 Detroit repair records — mean <b>73,340</b>, median <b>72,700</b>, SD <b>24,849</b>, <b>no mode</b>, near-zero positive skew.</>,
            <>95% CI: <b>73,340 ± 7,076 → [66,264, 80,416]</b>; <b>19 vehicles failed below it</b> — the early-failure warning.</>,
            <>Next study: n = (1.96)² × 24,849² / 5,000² ≈ <b>95.26 → ≈ 100 vehicles</b> for ±5,000 miles.</>,
            <>Read averages <b>alongside outliers</b>; investigate supply-side AND demand-side factors; descriptives open the case, <b>regression/ML</b> close it.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 27 · HYPOTHESIS TESTING — FUNDAMENTALS  (#hypothesis)
   ============================================================ */

type CourtKey = "emergency" | "university" | "platform";

interface CourtCase {
  key: CourtKey;
  title: string;
  brief: string;
  options: [string, string];
  h0: 0 | 1;
  tail: string;
}

const COURT_CASES: CourtCase[] = [
  {
    key: "emergency",
    title: "Emergency response — the 12-minute goal",
    brief: "Research objective: determine if emergency services meet the 12-minute response goal.",
    options: ["μ < 12 minutes — the service is NOT meeting the goal", "μ ≥ 12 minutes — the service is meeting the goal"],
    h0: 1,
    tail: "left-tailed",
  },
  {
    key: "university",
    title: "University results — the 15-working-day target",
    brief: "Research objective: verify if the university processes results within a 15-working-day average.",
    options: ["μ ≤ 15 days — meeting the target", "μ > 15 days — exceeding the target"],
    h0: 0,
    tail: "right-tailed",
  },
  {
    key: "platform",
    title: "Online platform — the claimed average of 70",
    brief: "Research objective: determine if actual test scores are lower than the claimed average of 70.",
    options: ["μ < 70 — scores below the claim", "μ ≥ 70 — scores at or above the claim"],
    h0: 1,
    tail: "left-tailed",
  },
];

/* machine — the courtroom: pick the null, get the verdict */
function CourtroomDrill() {
  const [picks, setPicks] = useState<Record<CourtKey, number | null>>({
    emergency: null,
    university: null,
    platform: null,
  });
  const solved = COURT_CASES.filter((c) => picks[c.key] === c.h0).length;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the courtroom · pick the null in each case
        </p>
        <Gavel className="h-4 w-4 shrink-0" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {COURT_CASES.map((c) => {
          const pick = picks[c.key];
          const done = pick !== null;
          const correct = pick === c.h0;
          return (
            <div key={c.key} className="flex flex-col rounded-xl border p-3" style={{ borderColor: STM_G.border, background: done ? (correct ? STM_G.soft : "#fbeae5") : "#fff" }}>
              <p className="text-[.84rem] font-black leading-snug" style={{ color: "#4c1d95" }}>{c.title}</p>
              <p className="mt-1 text-[.74rem] leading-relaxed text-neutral-600">{c.brief}</p>
              <p className="mt-2 text-[.68rem] font-bold uppercase tracking-[.1em] text-neutral-500">which statement is H₀?</p>
              <div className="mt-1.5 grid gap-1.5">
                {c.options.map((opt, i) => {
                  const on = pick === i;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setPicks((prev) => ({ ...prev, [c.key]: i }))}
                      aria-pressed={on}
                      className="rounded-lg border px-2.5 py-2 text-left text-[.74rem] font-semibold leading-snug transition-all"
                      style={{
                        borderColor: on ? STM_G[600] : STM_G.border,
                        background: on ? "#f1ecfd" : "#fff",
                        color: on ? STM_G[800] : "#2b2014",
                      }}
                    >
                      <span className="mr-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-current text-[.58rem] font-bold">{String.fromCharCode(65 + i)}</span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {done ? (
                  <motion.div
                    key={`${c.key}-${pick}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 rounded-lg border px-2.5 py-2 text-[.72rem] leading-relaxed"
                    style={{
                      borderColor: correct ? "#c4b5fd" : "#e8a896",
                      background: "#fff",
                      color: correct ? STM_G[800] : "#b3402c",
                    }}
                    role="status"
                  >
                    <span className="mb-0.5 flex items-center gap-1 font-black uppercase tracking-[.08em]">
                      {correct ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                      {correct ? "verdict" : "objection"}
                    </span>
                    {correct
                      ? `H₀ takes ${c.options[c.h0].split(" — ")[0]}; Hₐ takes the other — a ${c.tail} test. The equality always sits in the null.`
                      : `Not quite — the statement with the equality component (${c.options[c.h0].split(" — ")[0]}) is always H₀. What you hope to prove goes to Hₐ.`}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-right font-mono text-[.66rem] font-bold tabular-nums" style={{ color: STM_G[700] }}>
        {solved}/3 verdicts in — H₀ always holds the equality ( = , ≥ , ≤ )
      </p>
    </div>
  );
}

/* machine — the error grid: the 2×2 decision table, live */
type Verdict = "reject" | "fail";
type Truth = "true" | "false";

function ErrorGrid() {
  const [verdict, setVerdict] = useState<Verdict>("reject");
  const [truth, setTruth] = useState<Truth>("true");
  const hit = (v: Verdict, t: Truth) => verdict === v && truth === t;
  const typeOne = hit("reject", "true");
  const typeTwo = hit("fail", "false");
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
        machine — the decision table · pick your move and the truth
      </p>
      <div className="mt-3 grid gap-4 lg:grid-cols-[240px_1fr]">
        <div className="space-y-3">
          <div>
            <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-neutral-500">your decision</p>
            <div className="mt-1 grid gap-1.5">
              {(
                [
                  { k: "reject" as Verdict, t: "Reject H₀" },
                  { k: "fail" as Verdict, t: "Fail to reject H₀" },
                ]
              ).map((b) => (
                <button
                  key={b.k}
                  type="button"
                  onClick={() => setVerdict(b.k)}
                  aria-pressed={verdict === b.k}
                  className="rounded-lg border px-3 py-2 text-[.76rem] font-bold transition-all"
                  style={{
                    borderColor: verdict === b.k ? STM_G[600] : STM_G.border,
                    background: verdict === b.k ? STM_G[600] : "#fff",
                    color: verdict === b.k ? "#fff" : STM_G[800],
                  }}
                >
                  {b.t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[.66rem] font-bold uppercase tracking-[.12em] text-neutral-500">reality</p>
            <div className="mt-1 grid gap-1.5">
              {(
                [
                  { k: "true" as Truth, t: "H₀ is actually true" },
                  { k: "false" as Truth, t: "H₀ is actually false" },
                ]
              ).map((b) => (
                <button
                  key={b.k}
                  type="button"
                  onClick={() => setTruth(b.k)}
                  aria-pressed={truth === b.k}
                  className="rounded-lg border px-3 py-2 text-[.76rem] font-bold transition-all"
                  style={{
                    borderColor: truth === b.k ? STM_G[600] : STM_G.border,
                    background: truth === b.k ? "#f1ecfd" : "#fff",
                    color: STM_G[800],
                  }}
                >
                  {b.t}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[92px_1fr_1fr] gap-1.5" role="group" aria-label="Decision outcome table">
            <span />
            <span className="text-center text-[.66rem] font-bold uppercase tracking-[.1em] text-neutral-500">H₀ is true</span>
            <span className="text-center text-[.66rem] font-bold uppercase tracking-[.1em] text-neutral-500">H₀ is false</span>
            {(
              [
                { v: "reject" as Verdict, t: "Reject H₀", cells: ["true", "false"] as Truth[] },
                { v: "fail" as Verdict, t: "Fail to reject", cells: ["true", "false"] as Truth[] },
              ]
            ).map((row) => (
              <div key={row.v} className="contents">
                <span className="flex items-center text-[.66rem] font-bold uppercase tracking-[.08em] text-neutral-500">{row.t}</span>
                {row.cells.map((t) => {
                  const active = hit(row.v, t);
                  const isError = (row.v === "reject" && t === "true") || (row.v === "fail" && t === "false");
                  const label = row.v === "reject" && t === "true"
                    ? "Type I error"
                    : row.v === "fail" && t === "false"
                      ? "Type II error"
                      : "Correct decision";
                  return (
                    <motion.button
                      key={`${row.v}-${t}`}
                      type="button"
                      onClick={() => {
                        setVerdict(row.v);
                        setTruth(t);
                      }}
                      aria-pressed={active}
                      animate={{ scale: active ? 1.03 : 1, opacity: active ? 1 : 0.62 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="rounded-xl border px-2 py-3 text-left transition-colors"
                      style={{
                        borderColor: active ? (isError ? "#b3402c" : STM_G[600]) : STM_G.border,
                        background: active ? (isError ? "#fbeae5" : STM_G.soft) : "#fff",
                        color: isError ? "#b3402c" : STM_G[800],
                      }}
                    >
                      <span className="block text-[.78rem] font-black">{label}</span>
                      <span className="mt-0.5 block text-[.64rem] font-semibold leading-snug">
                        {row.v === "reject" && t === "true"
                          ? "false positive · probability = α"
                          : row.v === "fail" && t === "false"
                            ? "false negative · hard to control"
                            : "the evidence deserved it"}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p
                key={`${verdict}-${truth}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="mt-3 rounded-lg border px-3 py-2 text-[.78rem] leading-relaxed"
                style={{
                  borderColor: typeOne || typeTwo ? "#e8a896" : STM_G.border,
                  background: typeOne || typeTwo ? "#fbeae5" : STM_G.wash,
                  color: "#2b2014",
                }}
              >
                {typeOne
                  ? "Type I error — rejecting H₀ when it is actually true. The false positive: concluding an INNOCENT person is guilty. Its probability is the level of significance α — controlled in significance tests."
                  : typeTwo
                    ? "Type II error — failing to reject H₀ when it is actually false. The false negative: concluding a GUILTY person is innocent. Harder to control statistically."
                    : verdict === "reject"
                      ? "Correct decision — H₀ was false, and the sample evidence rightly rejected it."
                      : "Correct decision — H₀ was true, and there was insufficient evidence to reject it."}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StmHypothesisSection() {
  return (
    <Section id="hypothesis">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 27 · Hypothesis Testing — Fundamentals and Framework"
          title={
            <>
              Reject — or <span className="grad-violet">fail to reject</span>
            </>
          }
          lead="Building on interval estimates, sampling distributions and the normal distribution, hypothesis testing decides whether a statement about a population parameter should be rejected, based on sample data evidence. It is fundamentally different from proving a statement true or false."
        />

        <StmReadStep n="01" title="The core idea" sub="Two competing statements, one dataset, no proofs" />
        <Reveal>
          <StmCallout kind="insight" title="Not a proof machine">
            Hypothesis testing only allows us to either <b>reject</b> or <b>fail to reject</b> a statement — never to prove it. The process: develop two competing, interrelated statements about a population parameter; gather sample data to test them; draw conclusions based on the statistical evidence. And the method is not chained to the normal — it applies to various probability distributions.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="H₀ and Hₐ" sub="The status quo holds the equals sign" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Null hypothesis — H₀">{`A tentative assumption about the
value of a population parameter.

Represents the status quo or
current belief.

ALWAYS contains an equality
component ( = , ≥ , or ≤ ).

The statement we attempt to
challenge or reject.`}</StmPanel>
            <StmPanel label="Alternate hypothesis — Hₐ">{`The opposite of what is stated
in the null hypothesis.

Represents what the researcher
hopes to prove.

Contains inequality symbols
( < , > , or ≠ ).

Becomes the conclusion if
sufficient evidence exists
to reject H₀.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
            <p className="font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: STM_G[700] }}>
              the three forms — testing the population mean μ
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="warm-table min-w-[480px]">
                <thead>
                  <tr>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Form</th>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Null hypothesis</th>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Alternate hypothesis</th>
                    <th style={{ background: "#f1ecfd", color: "#4c1d95" }}>Test type</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Greater-than test", "μ ≤ μ₀", "μ > μ₀", "Right-tailed"],
                    ["Less-than test", "μ ≥ μ₀", "μ < μ₀", "Left-tailed"],
                    ["Equal / not-equal test", "μ = μ₀", "μ ≠ μ₀", "Two-tailed"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="font-bold">{row[0]}</td>
                      <td className="font-mono">{row[1]}</td>
                      <td className="font-mono">{row[2]}</td>
                      <td className="font-mono">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="03" title="Two ways to formulate" sub="Where you put what you want to prove" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Approach 1 — research objective focus">{`Identify what you want to prove
and place it in the ALTERNATE
hypothesis.

The null hypothesis becomes
the opposite statement.

Common when you want to
demonstrate that something
new is better.`}</StmPanel>
            <StmPanel label="Approach 2 — challenge an assumption">{`Identify the current belief or
status quo as the NULL
hypothesis.

The alternate hypothesis
challenges this assumption.

Common in quality control
and verification scenarios.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="04" title="The courtroom" sub="Three verdicts to practice — pick the null, get the tail" />
        <Reveal>
          <CourtroomDrill />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Formulation depends on context">
            The emergency service hopes response times beat the 12-minute goal — Hₐ: μ &lt; 12, a <b>left-tailed</b> test. The university fears results exceed the 15-day target — Hₐ: μ &gt; 15, a <b>right-tailed</b> test. The platform tests whether scores fall short of the claimed 70 — Hₐ: μ &lt; 70. What you hope to prove decides where the inequality — and therefore the tail — lives.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="The two errors" sub="False positives have a price; false negatives have a habit" />
        <Reveal>
          <ErrorGrid />
        </Reveal>
        <Reveal>
          <div className="mt-4 grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Type I error — the price you set">{`Rejecting H₀ when it is
ACTUALLY TRUE.

The "false positive".

Probability = the level of
significance α — controlled
in significance tests.

Example: concluding an
INNOCENT person is guilty.`}</StmPanel>
            <StmPanel label="Type II error — the one that slips">{`Failing to reject H₀ when it
is ACTUALLY FALSE.

The "false negative".

More difficult to control
statistically.

Example: concluding a
GUILTY person is innocent.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="The distinctions that get graded">
            We never <b>&ldquo;accept&rdquo;</b> hypotheses — that would risk Type II errors. Failing to reject H₀ means <b>insufficient evidence</b> exists to reject it — not that it is proven true or correct. And a hypothesis is not a conclusion; it is a <b>testable statement</b> that guides data collection and analysis.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="A court acquits a defendant for lack of evidence. In hypothesis-testing language, what happened — and why is 'accept' still forbidden?"
          options={[
            "Fail to reject H₀ (innocence) — insufficient evidence, not proof; 'accepting' would risk laundering Type II errors into verdicts",
            "Accept H₀ — the acquittal proves innocence beyond doubt",
            "Reject Hₐ — statistically, the defendant is guilty",
            "A Type I error — every acquittal convicts the innocent",
          ]}
          answer={0}
          explain="Failing to reject H₀ means insufficient evidence exists to reject it — not that H₀ is proven true. 'Accept' is banned because it would treat a possible false negative (the guilty walking free — a Type II error, which is difficult to control) as if it were a verified truth. The vocabulary is deliberately cautious: reject, or fail to reject."
        />

        <Takeaways
          items={[
            <>Two competing statements: <b>H₀ holds the equality</b> (=, ≥, ≤) and the status quo; <b>Hₐ carries what you hope to prove</b> (&lt;, &gt;, ≠).</>,
            <>Verdicts: <b>reject or fail to reject — never accept</b>; failing to reject means insufficient evidence, not proof.</>,
            <>Type I = rejecting a true H₀ (<b>false positive</b>), priced by α and controlled; Type II = missing a false H₀ (<b>false negative</b>), hard to control.</>,
            <>Forms: μ ≤ μ₀ / μ ≥ μ₀ / μ = μ₀ against &gt;, &lt;, ≠ — <b>right-, left- and two-tailed</b>; structure hypotheses carefully so the test yields meaningful conclusions.</>,
          ]}
        />
      </div>
    </Section>
  );
}
