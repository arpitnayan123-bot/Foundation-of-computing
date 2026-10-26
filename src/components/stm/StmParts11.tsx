"use client";

/* ============================================================
   Statistics for Managers — PART 11 (shelf 05). Lecture 25:
   estimating a POPULATION PROPORTION — p̂ ± z(α/2)√[p̂(1−p̂)/n],
   the exit poll (p̂ = 0.44 → [0.3965, 0.4835]) and the planning
   value p* = 0.5 that maximises sample size (PSI: n = 1,817).
   Lecture 27: the HYPOTHESIS-TESTING framework — null vs
   alternate, the three tail forms, and the Type I / Type II
   error matrix as one interactive courtroom. Figures straight
   from the lecture notes, hand-checked.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Gavel, Percent, Scale, Sigma, X } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 25 · MOVEMENT 1 — PROPORTION INTERVALS
   ============================================================ */

/* the p* planner: slide the planning value and watch the required
   sample size peak at 0.5 — PSI specs: 99% confidence, E = 0.03 */
function PlanningValueLab() {
  const [p, setP] = useState(0.5);
  const Z = 2.576; // 99% confidence
  const E = 0.03;
  const n = (Z * Z * p * (1 - p)) / (E * E);

  const W = 560;
  const H = 150;
  const pts = useMemo(() => {
    const out: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const pv = 0.05 + (0.9 * i) / 60;
      const x = 40 + (pv - 0.05) / 0.9 * (W - 80);
      const y = (H - 34) - ((pv * (1 - pv)) / 0.25) * (H - 64);
      out.push(`${x.toFixed(1)},${Math.max(y, 16).toFixed(1)}`);
    }
    return out;
  }, [W, H]);
  const markerX = 40 + (p - 0.05) / 0.9 * (W - 80);
  const markerY = (H - 34) - ((p * (1 - p)) / 0.25) * (H - 64);

  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The planning-value curve — p* = 0.5 is the safe maximum</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <Percent className="h-3 w-3" /> drag the planning p*
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[440px]" role="img" aria-label="Required sample size n as a function of planning value p, maximized at 0.5">
          <line x1="30" y1={H - 34} x2={W - 30} y2={H - 34} stroke="#e2d6f5" strokeWidth="1.4" />
          <polyline points={pts.join(" ")} fill="none" stroke={STM_G[500]} strokeWidth="2.6" strokeLinecap="round" />
          {/* peak marker at 0.5 */}
          <line x1={40 + (0.5 - 0.05) / 0.9 * (W - 80)} y1="18" x2={40 + (0.5 - 0.05) / 0.9 * (W - 80)} y2={H - 34} stroke="#ca8a04" strokeWidth="1.4" strokeDasharray="4 4" />
          <text x={40 + (0.5 - 0.05) / 0.9 * (W - 80) + 8} y="30" fontSize="11" fontWeight="800" fill="#a16207">peak at p* = 0.50</text>
          {/* live marker */}
          <motion.circle
            cx={markerX}
            cy={markerY}
            r="7"
            fill={STM_G[700]}
            stroke="#fff"
            strokeWidth="2"
            animate={{ cx: markerX, cy: markerY }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          />
          <text x="34" y={H - 18} fontSize="10.5" fontWeight="600" fill="#8a7bb0">p* = 0.05</text>
          <text x={W - 78} y={H - 18} fontSize="10.5" fontWeight="600" fill="#8a7bb0">p* = 0.95</text>
        </svg>
      </div>

      <label htmlFor="pv-slider" className="mt-4 block text-[.72rem] font-bold uppercase tracking-[.14em] text-[#8a6d4f]">
        Planning value <span className="font-mono text-[#6d28d9]">p* = {p.toFixed(2)}</span>
        <span className="ml-2 text-[.7rem] normal-case tracking-normal text-[#8a6d4f]">(p*(1−p*) = {(p * (1 - p)).toFixed(4)})</span>
      </label>
      <input
        id="pv-slider"
        type="range"
        min={0.05}
        max={0.95}
        step={0.01}
        value={p}
        onChange={(e) => setP(Number(e.target.value))}
        className="mt-2 w-full accent-[#7c3aed]"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>Required n (99%, E = 0.03)</p>
          <AnimatePresence mode="popLayout">
            <motion.p key={Math.round(n)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="font-mono text-3xl font-black" style={{ color: STM_G[800] }}>
              {Math.ceil(n).toLocaleString()}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
          <p className="text-[.68rem] font-black uppercase tracking-[.14em] text-[#b3402c]">If you guessed p* = 0.5 instead</p>
          <p className="font-mono text-3xl font-black text-[#8c2f2f]">{Math.ceil((Z * Z * 0.25) / (E * E)).toLocaleString()}</p>
          <p className="mt-1 text-[.78rem] font-semibold text-[#8c2f2f]">the conservative ceiling — never undersampled</p>
        </div>
      </div>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        n is driven by <b>p*(1−p*)</b>, and that product peaks at <b>0.25 when p* = 0.5</b> —
        the Excel sweep 0.1, 0.2, … 0.9 in the lecture confirms it. No clue about p? Spend on
        p* = 0.5 and the promised margin <b>cannot</b> be exceeded.
      </p>
    </div>
  );
}

export function StmPropIntervalSection() {
  return (
    <Section id="prop-interval">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 25 · Interval Estimation — population proportion"
          title={
            <>
              Proportions get their <span className="grad-violet">interval</span>
            </>
          }
          lead="Means are not the only thing managers estimate. What share of voters backs the candidate? What fraction of boxes ships defective? The machinery is identical — swap x̄ for p̂ and σ/√n for √[p̂(1−p̂)/n]."
        />

        <StmReadStep n="01" title="The proportion interval" sub="p̂ ± z(α/2) · √[p̂(1−p̂)/n] — with the normality gate checked first" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <StmPanel label="The gate — check before you compute">{`Normal approximation holds when BOTH hold:

    np ≥ 5        n(1−p) ≥ 5

Exit poll: n = 500, p̂ = 0.44
    500 × 0.44      = 220 ≥ 5 ✓
    500 × 0.56      = 280 ≥ 5 ✓

→ the sampling distribution of p̄ is
  approximately normal — proceed.`}</StmPanel>
            <StmCallout kind="insight" title="Same skeleton as the mean">
              <p>
                Point estimate → standard error → multiplier:{" "}
                <b>x̄ ↔ p̂</b>, <b>σ/√n ↔ √[p̂(1−p̂)/n]</b>, <b>z(α/2)</b> unchanged. Learn one
                skeleton and both estimates come free — that parallel is the exam&apos;s favourite
                question.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Worked — the exit poll" sub="PSI surveys 500 registered voters · 220 favour candidate C · 95% confidence" />
        <Reveal>
          <StmPanel label="The full computation — support for candidate C">{`p̂ = 220 / 500 = 0.44

α = 0.05 → α/2 = 0.025 → z(α/2) = 1.96

σ(p̂) = √[0.44 × 0.56 / 500]
     = √0.0004928 = 0.0222

E = 1.96 × 0.0222 = 0.0435

95% CI = 0.44 ± 0.0435
       = [0.3965 , 0.4835]

"PSI is 95% confident the true share of
voters favouring C lies between 39.65%
and 48.35%."`}</StmPanel>
        </Reveal>

        <StmReadStep n="03" title="Planning the poll — how many voters?" sub="n = z²·p*(1−p*)/E² — the planning-value lab" />
        <PlanningValueLab />
        <Reveal className="mt-4">
          <StmPanel label="PSI upgrades the poll — 99% confidence, ±0.03">{`z(0.005) = 2.576        E = 0.03

planning value p* = 0.44 (from this survey):
n = (2.576)² × 0.44 × 0.56 / (0.03)²
  = 1,817

planning value p* = 0.50 (no information):
n = (2.576)² × 0.25 / (0.03)²
  = 1,843   ← the conservative ceiling

From 500 voters to ~1,817: confidence up
95% → 99% AND margin down ±0.0435 → ±0.03.`}</StmPanel>
        </Reveal>

        <StmReadStep n="04" title="Check yourself" sub="Proportion instincts" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 25 · check"
              q="With no prior information about p, the safest planning value for sample-size computation is…"
              options={["p* = 0.5, because p(1−p) is maximised there", "p* = 0.1, to minimise cost", "p* = 1.0, the worst case", "any p* — n does not depend on p"]}
              answer={0}
              explain="p(1−p) peaks at 0.25 when p = 0.5, which maximises n — the most conservative sample size. The actual error then cannot exceed the planned margin, whatever the true proportion turns out to be."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 25 · check"
              q="Other things equal, demanding a smaller margin of error for a proportion…"
              options={[
                "increases the required sample size",
                "decreases the required sample size",
                "leaves n unchanged — only confidence matters",
                "makes the interval wider",
              ]}
              answer={0}
              explain="E sits in the denominator squared: halving the margin quadruples the sample. Precision is expensive — which is exactly why the planning-value formula exists before the survey, not after."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                Proportion interval: <b>p̂ ± z(α/2)·√[p̂(1−p̂)/n]</b> — same skeleton as the mean,
                different standard error.
              </>,
              <>
                Check the gate first: <b>np ≥ 5</b> and <b>n(1−p) ≥ 5</b> before using the normal
                approximation.
              </>,
              <>
                Exit poll: <b>0.44 ± 0.0435 → [0.3965, 0.4835]</b> at 95%.
              </>,
              <>
                Sample sizing uses a <b>planning value p*</b>; unknown p → <b>p* = 0.5</b> gives
                the maximum n (PSI: 1,843) and can never undersample.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 27 · MOVEMENT 2 — THE HYPOTHESIS-TESTING FRAMEWORK
   ============================================================ */

type TailForm = "left" | "right" | "two";

const TAIL_META: Record<TailForm, { h0: string; ha: string; name: string; example: string }> = {
  left: { h0: "μ ≥ μ₀", ha: "μ < μ₀", name: "Left-tailed test", example: "Emergency response: H₀: μ ≥ 12 min vs Hₐ: μ < 12 — meet the 12-minute goal?" },
  right: { h0: "μ ≤ μ₀", ha: "μ > μ₀", name: "Right-tailed test", example: "University results: H₀: μ ≤ 15 days vs Hₐ: μ > 15 — is the 15-day target met?" },
  two: { h0: "μ = μ₀", ha: "μ ≠ μ₀", name: "Two-tailed test", example: "Filling line: H₀: μ = 500 g vs Hₐ: μ ≠ 500 g — over AND under both hurt." },
};

function TailStage({ tail }: { tail: TailForm }) {
  const W = 560;
  const H = 150;
  const cx = W / 2;
  const baseY = H - 24;
  const amp = 96;
  const scale = 62;
  const curvePts: string[] = [];
  for (let i = 0; i <= 80; i++) {
    const x = -3.2 + (6.4 * i) / 80;
    const y = amp * Math.exp(-0.5 * x * x);
    curvePts.push(`${cx + x * scale},${baseY - y}`);
  }
  const shade = (from: number, to: number) => {
    const pts: string[] = [`${cx + from * scale},${baseY}`];
    for (let i = 0; i <= 30; i++) {
      const x = from + ((to - from) * i) / 30;
      const y = amp * Math.exp(-0.5 * x * x);
      pts.push(`${cx + x * scale},${baseY - y}`);
    }
    pts.push(`${cx + to * scale},${baseY}`);
    return pts.join(" ");
  };
  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="min-w-[420px]" role="img" aria-label={`Rejection region for a ${tail}-tailed test`}>
        <polygon points={tail === "right" ? shade(1.645, 3.2) : "0,0 0,0"} fill={STM_G[600]} opacity="0.35" />
        <polygon points={tail === "left" ? shade(-3.2, -1.645) : "0,0 0,0"} fill={STM_G[600]} opacity="0.35" />
        {tail === "two" ? (
          <>
            <polygon points={shade(-3.2, -1.96)} fill={STM_G[600]} opacity="0.35" />
            <polygon points={shade(1.96, 3.2)} fill={STM_G[600]} opacity="0.35" />
          </>
        ) : null}
        <polyline points={curvePts.join(" ")} fill="none" stroke={STM_G[700]} strokeWidth="2.4" />
        <line x1="16" y1={baseY} x2={W - 16} y2={baseY} stroke="#e2d6f5" strokeWidth="1.4" />
        <line x1={cx} y1={baseY - amp - 12} x2={cx} y2={baseY} stroke="#ca8a04" strokeWidth="1.3" strokeDasharray="4 4" />
        <text x={cx + 7} y={baseY - amp - 2} fontSize="11" fontWeight="800" fill="#a16207">μ₀ — the claimed value</text>
        {tail !== "two" ? (
          <text x={tail === "right" ? W - 150 : 24} y={baseY - amp * 0.42} fontSize="11.5" fontWeight="800" fill={STM_G[800]}>
            rejection region · α
          </text>
        ) : (
          <>
            <text x="24" y={baseY - amp * 0.42} fontSize="11.5" fontWeight="800" fill={STM_G[800]}>α/2</text>
            <text x={W - 70} y={baseY - amp * 0.42} fontSize="11.5" fontWeight="800" fill={STM_G[800]}>α/2</text>
          </>
        )}
      </svg>
    </div>
  );
}

function TailSelector() {
  const [tail, setTail] = useState<TailForm>("left");
  const meta = TAIL_META[tail];
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-[.9rem] font-bold text-[#3e2c1d]">The three forms — where does the rejection region live?</p>
        <span className="flex items-center gap-1.5 rounded-full bg-[#f6f3fe] px-3 py-1 text-[.66rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
          <Sigma className="h-3 w-3" /> tap a form
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(TAIL_META) as TailForm[]).map((t) => (
          <button
            key={t}
            onClick={() => setTail(t)}
            aria-pressed={tail === t}
            className={`rounded-full border px-4 py-1.5 text-[.78rem] font-bold transition-all duration-200 ${
              tail === t ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={tail === t ? { background: STM_BTN_GRAD } : undefined}
          >
            {TAIL_META[t].name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={tail} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }} className="mt-4">
          <TailStage tail={tail} />
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
              <p className="text-[.66rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>H₀</p>
              <p className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>{meta.h0}</p>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
              <p className="text-[.66rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>Hₐ</p>
              <p className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>{meta.ha}</p>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
              <p className="text-[.66rem] font-black uppercase tracking-[.14em] text-[#b3402c]">Lecture example</p>
              <p className="text-[.76rem] font-semibold leading-snug text-[#8c2f2f]">{meta.example}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* the interactive courtroom: click a decision cell, learn which
   error (if any) it is */
const MATRIX_CELLS: Record<string, { title: string; error: "type1" | "type2" | null; body: string }> = {
  "reject|true": {
    title: "Type I error — the false positive",
    error: "type1",
    body: "You rejected H₀ when it was actually true: the innocent person goes to jail, a good batch is scrapped. Its probability is exactly α — the level of significance, and the error statisticians control directly.",
  },
  "reject|false": {
    title: "Correct decision — power",
    error: null,
    body: "H₀ was false and you caught it: the guilty are convicted, the bad batch is stopped. This cell's probability is the power of the test.",
  },
  "fail|true": {
    title: "Correct decision",
    error: null,
    body: "H₀ was true and you failed to find evidence against it — the status quo stands. Note the language: you did NOT 'prove H₀ true'.",
  },
  "fail|false": {
    title: "Type II error — the false negative",
    error: "type2",
    body: "H₀ was false but the sample did not give you enough evidence: the guilty walk free, a bad batch ships. Harder to control than Type I — it depends on the true parameter, α and n together.",
  },
};

function MatrixBtn({
  id,
  label,
  sub,
  active,
  onSelect,
}: {
  id: string;
  label: string;
  sub: string;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const err = MATRIX_CELLS[id].error;
  const tone = err === "type1" ? "#b3402c" : err === "type2" ? "#b45309" : "#047857";
  return (
    <button
      onClick={() => onSelect(id)}
      aria-pressed={active}
      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${active ? "shadow-lg" : "hover:shadow-md"}`}
      style={{
        borderColor: active ? tone : STM_G.border,
        background: active ? (err === "type1" ? "#fbeae5" : err === "type2" ? "#fdf3e3" : "#ecfdf5") : "#fff",
        borderWidth: active ? 2 : 1,
      }}
    >
      <p className="text-[.9rem] font-black text-[#3e2c1d]">{label}</p>
      <p className="mt-0.5 text-[.72rem] font-semibold uppercase tracking-[.1em]" style={{ color: tone }}>{sub}</p>
    </button>
  );
}

function ErrorMatrix() {
  const [cell, setCell] = useState<string | null>("reject|true");
  const active = cell ? MATRIX_CELLS[cell] : null;
  return (
    <div className="card-warm p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="flex items-center gap-2 text-[.9rem] font-bold text-[#3e2c1d]"><Gavel className="h-4 w-4" style={{ color: STM_G[700] }} /> The decision courtroom — tap a verdict</p>
        <span className="text-[.7rem] font-semibold text-muted-warm">presumption: H₀ is &ldquo;innocent until proven guilty&rdquo;</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <MatrixBtn id="reject|true" label="Reject H₀ — but H₀ is true" sub="Type I error · P = α" active={cell === "reject|true"} onSelect={setCell} />
        <MatrixBtn id="reject|false" label="Reject H₀ — and H₀ is false" sub="Correct · power" active={cell === "reject|false"} onSelect={setCell} />
        <MatrixBtn id="fail|true" label="Fail to reject — H₀ is true" sub="Correct decision" active={cell === "fail|true"} onSelect={setCell} />
        <MatrixBtn id="fail|false" label="Fail to reject — but H₀ is false" sub="Type II error" active={cell === "fail|false"} onSelect={setCell} />
      </div>
      <AnimatePresence mode="wait">
        {active ? (
          <motion.div
            key={cell}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-4 rounded-2xl border border-[#e8dcc0] bg-[#fbf3e3] p-4"
          >
            <p className="font-black text-[#3e2c1d]">{active.title}</p>
            <p className="mt-1 text-[.88rem] leading-relaxed text-[#2b2014]">{active.body}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
        The court can only <b>convict or acquit</b> — never declare innocence. Same in statistics:
        we <b>reject</b> or <b>fail to reject</b> H₀; &ldquo;accepting&rdquo; the null is how Type
        II errors sneak into reports. A hypothesis is a testable statement, never a conclusion.
      </p>
    </div>
  );
}

export function StmHypothesisSection() {
  return (
    <Section id="hypothesis">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 27 · Hypothesis Testing — the framework"
          title={
            <>
              Two claims, one <span className="grad-violet">verdict</span>
            </>
          }
          lead="Interval estimates describe; hypothesis testing decides. Put a claim about μ on trial: the null hypothesis holds the status quo with its equality, the alternate carries what you hope to show — and the sample data delivers the only two verdicts statistics allows."
        />

        <StmReadStep n="01" title="The two competing statements" sub="H₀ always carries the equality — =, ≥, or ≤" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="card-warm p-5">
              <p className="flex items-center gap-2 font-bold text-[#3e2c1d]"><Scale className="h-4 w-4" style={{ color: STM_G[700] }} /> Null hypothesis — H₀</p>
              <ul className="mt-2 space-y-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
                <li>· A tentative assumption about a population parameter</li>
                <li>· The status quo, the current belief, the &ldquo;nothing changed&rdquo;</li>
                <li>· Always contains <b>=, ≥, or ≤</b></li>
                <li>· The statement we attempt to <b>reject</b> with sample evidence</li>
              </ul>
            </div>
            <div className="card-warm p-5">
              <p className="flex items-center gap-2 font-bold text-[#3e2c1d]"><Sigma className="h-4 w-4" style={{ color: STM_G[700] }} /> Alternate hypothesis — Hₐ</p>
              <ul className="mt-2 space-y-1.5 text-[.86rem] leading-relaxed text-[#2b2014]">
                <li>· The <b>opposite</b> of the null — what the researcher hopes to prove</li>
                <li>· Carries the inequality: <b>&lt;, &gt;, or ≠</b></li>
                <li>· Becomes the conclusion <b>only if H₀ is rejected</b></li>
                <li>· Sets the tail — and therefore where the evidence must land</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Two ways to set the stage" sub="Research objective focus — or challenge an assumption" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            <StmCallout kind="insight" title="Approach 1 — prove something new">
              <p>
                Put what you want to demonstrate in <b>Hₐ</b>. A new battery claims more life?{" "}
                <b>Hₐ: μ &gt; the old life</b>, so the burden of proof sits on the new product —
                the data must actively contradict the status quo before the claim wins.
              </p>
            </StmCallout>
            <StmCallout kind="why" title="Approach 2 — challenge a belief">
              <p>
                Put the existing belief in <b>H₀</b> and let the sample try to knock it down.
                Quality control lives here: <b>H₀: the process meets spec</b>, and only strong
                evidence shuts the line. Common in verification and audit scenarios.
              </p>
            </StmCallout>
          </div>
        </Reveal>

        <StmReadStep n="03" title="The three forms — and where the region lives" sub="Left · right · two-tailed — set by Hₐ's inequality" />
        <TailSelector />

        <StmReadStep n="04" title="The courtroom of errors" sub="Type I is priced (α) · Type II is the silent one" />
        <ErrorMatrix />

        <StmReadStep n="05" title="Check yourself" sub="Read the claim, name the test" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Lecture 27 · check"
              q="An online platform claims average test scores of 70; a researcher suspects the true average is lower. The hypotheses are…"
              options={["H₀: μ ≥ 70 vs Hₐ: μ < 70", "H₀: μ < 70 vs Hₐ: μ ≥ 70", "H₀: μ = 70 vs Hₐ: μ ≠ 70", "H₀: x̄ ≥ 70 vs Hₐ: x̄ < 70"]}
              answer={0}
              explain="The suspicion ('lower') belongs in Hₐ: μ < 70, so H₀ keeps the equality as μ ≥ 70 — a left-tailed test. And hypotheses are always about the population parameter μ, never the sample statistic x̄."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Lecture 27 · check"
              q="A quality inspector concludes a process is out of control when it was actually meeting spec. This is…"
              options={[
                "a Type I error — probability α",
                "a Type II error — probability α",
                "a correct decision",
                "a Type I error with probability β",
              ]}
              answer={0}
              explain="Rejecting a true H₀ is Type I — the false positive — and its probability is exactly the significance level α. The mirror error (missing a genuinely broken process) is Type II, the harder one to control."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>H₀ holds the equality</b> (=, ≥, ≤) and the status quo; <b>Hₐ carries the
                inequality</b> and the research hope. The tail follows Hₐ.
              </>,
              <>
                Three forms: <b>μ ≥ μ₀ vs μ &lt; μ₀</b> (left) · <b>μ ≤ μ₀ vs μ &gt; μ₀</b>
                (right) · <b>μ = μ₀ vs μ ≠ μ₀</b> (two-tailed).
              </>,
              <>
                <b>Type I</b> = rejecting a true H₀ (probability α, controlled). <b>Type II</b> =
                failing to reject a false H₀ — the silent error.
              </>,
              <>
                The only verdicts are <b>reject</b> and <b>fail to reject</b> — &ldquo;accept&rdquo;
                is not a statistical word.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
