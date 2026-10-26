"use client";

/* ============================================================
   Statistics for Managers — PART 14 (shelf 05). Three lectures
   restored to their own homes by the PDF re-map:
   · Lecture 13 → #dist-checkpoint  the distributions checkpoint:
     discrete vs continuous, why formulas, and the JSL demand-mix
     machine (80 zero-sale days become 10-unit days → E(x) 1.20
     to 5.20 — the deck's own numbers, n = 200 fixed).
   · Lecture 14 → #z-lab            the Z laboratory: standardise,
     read the table, exploit symmetry, then run probability in
     reverse for a reorder point (μ = 15, σ = 6, 5% stockout →
     X = 24.87 ≈ 25 gallons).
   · Lecture 18 → #dist-apps        McNeil's Auto Mall Poisson
     staffing (moved out of the old sampling section) with the
     waiting logic CORRECTED: "more than two waiting" with s
     salespeople means X > s + 2 — the old panel's P(x > 5) was
     any-waiting, not the case's own rule. μ = 6.8: five
     salespeople fail (37.2%), eight pass (8.4%).
   Every figure is from the lecture notes, hand-checked.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Car, Coins, Factory, Package, Sigma } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 13 — THE DISTRIBUTIONS CHECKPOINT (#dist-checkpoint)
   ============================================================ */

/* JSL Appliances — 200 days of TV sales (same data as #discrete) */
const JSL_BASE = [
  { x: 0, days: 80, f: 0.4 },
  { x: 1, days: 50, f: 0.25 },
  { x: 2, days: 40, f: 0.2 },
  { x: 3, days: 10, f: 0.05 },
  { x: 4, days: 20, f: 0.1 },
];

function ExShiftMachine() {
  const [shifted, setShifted] = useState(false);
  /* the 80 zero-sale days re-emerge as 10-unit days */
  const display = shifted
    ? [
        ...JSL_BASE.filter((r) => r.x !== 0),
        { x: 10, days: 80, f: 0.4 },
      ]
    : JSL_BASE;
  const maxDays = 80;
  const ex = shifted ? 5.2 : 1.2;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <div className="flex flex-wrap items-center gap-2">
        {[
          { k: false, label: "200 ordinary days" },
          { k: true, label: "80 zero-days → 10-unit days" },
        ].map((o) => (
          <button
            key={String(o.k)}
            onClick={() => setShifted(o.k)}
            aria-pressed={shifted === o.k}
            className={`rounded-full border px-3.5 py-1.5 text-[.74rem] font-bold transition-all duration-200 ${
              shifted === o.k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={shifted === o.k ? { background: STM_BTN_GRAD } : undefined}
          >
            {o.label}
          </button>
        ))}
        <span className="ml-auto text-[.66rem] font-bold text-muted-warm">n = 200 days, fixed</span>
      </div>
      <div className="mt-3 flex flex-col gap-1.5">
        {display.map((r, i) => (
          <div key={r.x} className="flex items-center gap-2">
            <span className="w-16 shrink-0 text-right font-mono text-[.74rem] font-bold" style={{ color: STM_G[800] }}>
              x = {r.x}
            </span>
            <div className="h-4 flex-1 overflow-hidden rounded-full bg-white">
              <motion.div
                className="h-full rounded-full"
                style={{ background: r.x === 10 ? "linear-gradient(90deg,#ca8a04,#e6cd7f)" : STM_BTN_GRAD }}
                initial={false}
                animate={{ width: `${(r.days / maxDays) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              />
            </div>
            <span className="w-20 shrink-0 font-mono text-[.72rem] font-bold text-muted-warm">{r.days} days</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3" style={{ border: `1px solid ${STM_G.border}` }}>
        <span className="text-[.74rem] font-black uppercase tracking-[.12em] text-muted-warm">E(x) = Σ x·f(x)</span>
        <motion.span key={ex} initial={{ scale: 1.15, color: "#6d28d9" }} animate={{ scale: 1, color: STM_G[800] }} className="font-mono text-2xl font-black">
          {ex.toFixed(2)} TVs/day
        </motion.span>
      </div>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        Same 200 days, same store — but the 80 zero-sale days all sell 10 units and the expected value
        jumps <b>1.20 → 5.20</b>. The distribution, not the formula, carries the decision: a stock plan
        built for 1.20 collapses at 5.20.
      </p>
    </div>
  );
}

function DistTypeChooser() {
  const kinds = [
    {
      k: "discrete",
      title: "Discrete — countable gaps",
      pts: [
        "values with gaps: dice 1–6, TV units sold, defective boxes",
        "probabilities listed as f(x) — a table or a formula",
        "PMF answers 'exactly x' — P(x = 2) can be large",
        "JSL's x = 0, 1, 2, 3, 4 (capped by stock)",
      ],
    },
    {
      k: "continuous",
      title: "Continuous — no gaps at all",
      pts: [
        "any value in an interval: height, flight time, salary",
        "probability = area under a curve f(x) ≥ 0, ∫f = 1",
        "P(X = exact value) = 0 — only intervals carry area",
        "CDF only: 'at most', 'at least', 'between'",
      ],
    },
  ] as const;
  const [active, setActive] = useState<(typeof kinds)[number]["k"]>("discrete");
  const cur = kinds.find((k) => k.k === active)!;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <div className="flex flex-wrap gap-2">
        {kinds.map((k) => (
          <button
            key={k.k}
            onClick={() => setActive(k.k)}
            aria-pressed={active === k.k}
            className={`rounded-full border px-3.5 py-1.5 text-[.76rem] font-bold capitalize transition-all duration-200 ${
              active === k.k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={active === k.k ? { background: STM_BTN_GRAD } : undefined}
          >
            {k.k}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18 }}
          className="mt-3 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm"
        >
          {cur.pts.map((p) => (
            <li key={p}>· {p}</li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}

export function StmDistCheckpointSection() {
  return (
    <Section id="dist-checkpoint">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 13 — the distributions checkpoint"
          title={
            <>
              One machinery, <span className="grad-violet">two families</span>
            </>
          }
          lead="Before the course sprinted into the normal curve, it stopped and consolidated: what makes a distribution discrete or continuous, why managers convert observations into formulas at all, and how brutally a demand mix can move an expected value without moving a single formula."
        />

        <StmReadStep n="01" title="Discrete vs continuous" sub="The chooser that decides which tools apply" />
        <Reveal>
          <DistTypeChooser />
        </Reveal>

        <StmReadStep n="02" title="Why convert data into a formula" sub="f(x) replaces endless observation" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The traditional way">{`P(an outcome) =
   favourable observations ÷ total observations

Works — but every new question means
re-counting. Ask about a value nobody
observed yet and the method stalls.`}</StmPanel>
          </Reveal>
          <Reveal delay={60}>
            <StmPanel label="The formula way">{`Define the random variable x, then f(x):

f(x) = (days with that outcome) ÷ (total days)

Once f(x) exists, E(x), Var(x), P(x ≥ 2),
P(x < 3)… are all arithmetic — no manager
waits for more data to answer.`}</StmPanel>
          </Reveal>
        </div>

        <StmReadStep n="03" title="The demand-mix machine" sub="JSL Appliances: same formula, new mix, new business" />
        <Reveal>
          <ExShiftMachine />
        </Reveal>
        <Reveal className="mt-3">
          <StmCallout kind="insight" title="Why the mean alone is not a stock plan">
            <p>
              Stocking exactly E(x) = 3 units fails on every higher-demand day — the shortages are real
              even when the average is met. That is why the lecture adds <b>Var(x) = Σ(x − μ)²·f(x)</b> and
              the standard deviation: the mean locates demand, the spread sizes the <b>safety stock</b>.
              Squaring stops overstock days from cancelling understock days — simple deviations sum to
              zero and hide the risk.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Quiz briefing" sub="The assessment pattern, as announced in lecture" />
        <Reveal>
          <div className="card-warm p-5">
            <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
              <Sigma className="h-4 w-4" /> Quizzes, as announced with this lecture
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Syllabus", "Chapter 6 — continuous probability distributions"],
                ["Format", "Objective questions only, conceptual focus"],
                ["Duration", "15–20 minutes · calculator allowed"],
                ["Weight", "20 marks each · best 2 of 3 counted"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white p-3" style={{ border: `1px solid ${STM_G.border}` }}>
                  <p className="text-[.62rem] font-black uppercase tracking-[.12em] text-muted-warm">{k}</p>
                  <p className="mt-1 text-[.8rem] font-semibold leading-snug text-[#2b1d42]">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
              One week&apos;s notice before each quiz, with exact date and mode. Lecture 23 later trims the
              plan to <b>two quizzes, best-of-2</b>, with Quiz 2 covering material through <b>Chapter 8
              (interval estimation)</b> — the practice lab carries that update.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Two checkpoint questions" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Checkpoint · check"
              q="JSL's 200-day distribution has E(x) = 1.20 TVs. The 80 zero-sale days all become 10-unit days. The new expected value is…"
              options={["5.20 — (240 + 800)/200 days", "2.20 — (240 + 800)/480", "6.20 — 1.20 + 5.00", "1.20 — E(x) cannot change without new data"]}
              answer={0}
              explain="E(x) = Σ x·f(x) over the SAME n = 200 days: the old total is 240 TVs; the 80 replaced days add 800 → (240 + 800)/200 = 5.20. The formula never moved — the distribution did. (Note 5.20 is an average; no single day sells 5.2 TVs.)"
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Checkpoint · check"
              q="Why does a continuous distribution have no useful P(X = 7), while a discrete one can?"
              options={[
                "probability is area under a curve — a single point has no width, hence zero area",
                "continuous variables are uncountable, so the table would be infinite",
                "P(X = 7) exists but is always 0.5",
                "the normal distribution forbids point probabilities",
              ]}
              answer={0}
              explain="For continuous variables probability is area: f(x) is a density, not a mass, and a point contributes no width. Only intervals like P(6.9 < X ≤ 7.1) carry probability — which is exactly why continuous questions are always phrased 'at most', 'at least' or 'between'."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Two families</b>: discrete lists f(x) for countable x; continuous spreads probability as
                area — point probabilities vanish.
              </>,
              <>
                <b>Formulas scale</b>: once f(x) exists, every probability and E(x) = Σ x·f(x) is arithmetic,
                not new data collection.
              </>,
              <>
                <b>The mix moves everything</b>: 80 zero-days → 10-unit days and JSL&apos;s E(x) jumps{" "}
                <b>1.20 → 5.20</b> — and the variance, not just the mean, sizes the safety stock.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 14 — THE Z LABORATORY (#z-lab)
   ============================================================ */

/* normal CDF — Zelen & Severo approximation to Φ(z), |err| < 7.5e-8 */
function phi(z: number): number {
  const az = Math.abs(z);
  const t = 1 / (1 + 0.2316419 * az);
  const poly =
    0.31938153 * t - 0.356563782 * t * t + 1.781477937 * t ** 3 - 1.821255978 * t ** 4 + 1.330274429 * t ** 5;
  const p = 1 - (Math.exp(-az * az / 2) / Math.sqrt(2 * Math.PI)) * poly;
  return z >= 0 ? p : 1 - p;
}

function ZMachine() {
  const [mu, setMu] = useState(150);
  const [sd, setSd] = useState(60);
  const [x, setX] = useState(200);
  const z = (x - mu) / (sd || 1);
  const tail = 1 - phi(z);
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="text-[.74rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
        The standardiser — drag the firm, watch Z survive
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {[
          { label: "μ", value: mu, set: setMu, min: 50, max: 1500, step: 10 },
          { label: "σ", value: sd, set: setSd, min: 10, max: 600, step: 5 },
          { label: "x", value: x, set: setX, min: 50, max: 2100, step: 10 },
        ].map((s) => (
          <label key={s.label} className="block">
            <span className="flex items-baseline justify-between text-[.72rem] font-bold text-muted-warm">
              {s.label}
              <span className="font-mono text-[.86rem] font-black" style={{ color: STM_G[800] }}>{s.value}</span>
            </span>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={s.value}
              onChange={(e) => s.set(Number(e.target.value))}
              className="mt-1 w-full accent-[#6d28d9]"
              aria-label={`Set ${s.label}`}
            />
          </label>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Z = (x − μ)/σ</p>
          <motion.p key={z.toFixed(3)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
            {z.toFixed(3)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">P(X ≤ x) = Φ(Z)</p>
          <motion.p key={phi(z).toFixed(4)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
            {phi(z).toFixed(4)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">P(X &gt; x) = 1 − Φ(Z)</p>
          <motion.p key={tail.toFixed(4)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: "#8c2f2f" }}>
            {tail.toFixed(4)}
          </motion.p>
        </div>
      </div>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        The lecture&apos;s pairs live in this machine: μ = 150, σ = 60, x = 200 → Z = <b>0.83</b>, tail ={" "}
        <b>0.2033</b>; then μ = 1,500, σ = 600, x = 2,000 → the <b>same Z</b>. Scale cannot hide from the
        standardiser — that is the whole point of Z.
      </p>
    </div>
  );
}

export function StmZLabSection() {
  return (
    <Section id="z-lab">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 14 — the standard normal, worked hard"
          title={
            <>
              The <span className="grad-violet">Z laboratory</span>
            </>
          }
          lead="Three requirements unlock every normal problem — name the distribution, pin μ, pin σ — and then the Z-score collapses them all onto one table. This lecture runs the machine forward (probability from a value) and backward (a value from a probability), which is where inventory decisions are born."
        />

        <StmReadStep n="01" title="The three requirements" sub="Identify · μ · σ — then anything is computable" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: <Sigma className="h-4 w-4" />, k: "1 · Identify", v: "the underlying distribution — for natural phenomena, usually normal" },
            { icon: <Coins className="h-4 w-4" />, k: "2 · Pin μ", v: "the centre — where the bell peaks and splits in half" },
            { icon: <Factory className="h-4 w-4" />, k: "3 · Pin σ", v: "the spread — how fast the bell falls off on each side" },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 60}>
              <div className="card-warm h-full p-4">
                <p className="flex items-center gap-2 text-[.74rem] font-black uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  {c.icon} {c.k}
                </p>
                <p className="mt-2 text-[.84rem] leading-relaxed text-muted-warm">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <StmReadStep n="02" title="The standardiser" sub="Z = (x − μ)/σ — one table for every firm on earth" />
        <Reveal>
          <ZMachine />
        </Reveal>
        <Reveal className="mt-3">
          <div className="grid gap-3 md:grid-cols-2">
            <StmPanel label="Reading the table">{`Z = 0.00 → 0.5000   (the mean splits it evenly)
Z = 2.00 → 0.9772
Z = 0.83 → 0.7967   → P(X > 200) = 0.2033

Negative Z? Use symmetry:
P(Z ≤ −a) = 1 − P(Z ≤ a)

Sanity check: below the mean → P > .50;
above the mean → P < .50.`}</StmPanel>
            <StmPanel label="Excel, once and for all">{`=NORM.S.DIST(z, TRUE)      probability at Z
=NORM.DIST(x, μ, σ, TRUE)  skips Z entirely
=NORM.S.INV(p)             probability → Z
                           (reverse mode)

Reverse: X = μ + z·σ
   the value that owns probability p`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="03" title="A band between two values" sub="Salary: μ = 40,000, σ = 5,000 — P(34,000 ≤ X ≤ 46,000)" />
        <Reveal>
          <StmPanel label="Symmetry does the work">{`Z₁ = (34,000 − 40,000)/5,000 = −1.2
Z₂ = (46,000 − 40,000)/5,000 = +1.2

P(−1.2 ≤ Z ≤ 1.2) = P(Z ≤ 1.2) − P(Z ≤ −1.2)
                   = 0.8849 − 0.1151
                   = 2 × 0.8849 − 1
                   = 0.7698  ≈ 77%

About 77% of salaries land within ±1.2σ —
the symmetric-band shortcut: 2Φ(a) − 1.`}</StmPanel>
        </Reveal>

        <StmReadStep n="04" title="Running it in reverse" sub="The reorder point: find the value that owns 5% of the tail" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The stockout problem">{`Petrol station: demand μ = 15 gal/day, σ = 6.
Stocking 20 gallons runs dry 20% of days.
Goal: stockout ≤ 5%.

Forward mode is useless — we need the
VALUE whose right tail is 0.05:

P(X > x) = 0.05  →  P(X ≤ x) = 0.95
z = NORM.S.INV(0.95) = 1.645`}</StmPanel>
          </Reveal>
          <Reveal delay={60}>
            <StmPanel label="The reverse answer">{`X = μ + z·σ
  = 15 + 1.645 × 6
  = 24.87  →  25 gallons

Stocking 25 instead of 20:
stockout 20% → 5% — the extra 5 gallons
buy 15% more of demand served.

Business value: no guesswork — overstock
costs (storage, capital, spoilage) and
understock costs (lost sales) both priced.`}</StmPanel>
          </Reveal>
        </div>
        <Reveal className="mt-3">
          <StmCallout kind="why" title="Why the reverse direction is the manager's direction">
            <p>
              Forward problems ask <i>what are the odds</i> — interesting, but passive. The reverse problem
              asks <i>what value gives me the odds I want</i> — that is a decision: a reorder point, a
              warranty threshold, a capacity target. The algebra is one line, X = μ + zσ; the habit of
              thinking backwards is the lecture&apos;s real cargo.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Four computations, one table" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Z lab · check"
              q="Firm A: μ = 150, σ = 60, P(X > 200). Firm B: μ = 1,500, σ = 600, P(X > 2,000). The two Z-scores are…"
              options={["both 0.83 — scale invariance is the point of Z", "0.83 and 8.33", "0.83 and 0.083", "1.2 and 12"]}
              answer={0}
              explain="Z_A = (200 − 150)/60 = 0.83; Z_B = (2,000 − 1,500)/600 = 0.83. Ten-fold bigger firm, ten-fold bigger σ — identical Z, identical probability 0.2033. Standardisation makes every normal problem the same problem."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Z lab · check"
              q="Salaries are normal with μ = 40,000 and σ = 5,000. P(34,000 ≤ X ≤ 46,000) equals…"
              options={["2 × 0.8849 − 1 = 0.7698", "0.8849", "1 − 0.8849 = 0.1151", "0.9772"]}
              answer={0}
              explain="Both edges sit 1.2σ from the mean: Z = ±1.2. By symmetry P(−1.2 ≤ Z ≤ 1.2) = Φ(1.2) − Φ(−1.2) = 0.8849 − 0.1151 = 2(0.8849) − 1 = 0.7698 — the symmetric-band shortcut."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Z lab · check"
              q="Demand: μ = 15 gallons, σ = 6. Management wants stockout probability ≤ 5%. The reorder point is…"
              options={["15 + 1.645 × 6 = 24.87 ≈ 25 gallons", "15 + 1.96 × 6 ≈ 26.8 gallons", "15 + 0.05 × 6 ≈ 15.3 gallons", "15 gallons — the mean never runs out"]}
              answer={0}
              explain="P(X > x) = 0.05 → z = NORM.S.INV(0.95) = 1.645 → X = 15 + 1.645(6) = 24.87 ≈ 25 gallons. The 1.96 z would buy a 2.5% tail — safe, but it orders more than the 5% promise needs."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Z lab · check"
              q="A Z-table shows P(Z ≤ 2) = 0.9772. P(Z ≤ −2) equals…"
              options={["1 − 0.9772 = 0.0228", "−0.9772", "0.9772", "0.5"]}
              answer={0}
              explain="Symmetry: P(Z ≤ −a) = 1 − P(Z ≤ a) = 0.0228. The table only prints one side; every negative-Z probability is one subtraction away."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Three requirements</b>: name the distribution, pin μ, pin σ — then Z = (x − μ)/σ makes
                every normal problem the same problem.
              </>,
              <>
                <b>Table + symmetry</b>: Z = 2 → 0.9772; negatives are 1 − table; bands are 2Φ(a) − 1
                (salary: 0.7698).
              </>,
              <>
                <b>Reverse mode</b>: X = μ + zσ — the 5% stockout promise turns a probability into a
                reorder point: <b>25 gallons</b>.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 18 — DISTRIBUTIONS IN MANAGERIAL APPLICATIONS (#dist-apps)
   ============================================================ */

/* Poisson μ = 6.8 — iterative pmf/cdf */
function poissonPmfCdf(k: number, mu = 6.8) {
  let p = Math.exp(-mu);
  let cdf = p;
  for (let i = 1; i <= k; i++) {
    p = (p * mu) / i;
    cdf += p;
  }
  return { pmf: p, cdf: cdf > 1 ? 1 : cdf };
}

function PmfCdfToggle() {
  const modes = [
    { k: "exact", label: "exactly 7", q: "P(X = 7)", formula: "f(7) = 6.8⁷ e^(−6.8) / 7!", excel: "=POISSON.DIST(7, 6.8, FALSE)", value: poissonPmfCdf(7).pmf },
    { k: "atmost", label: "7 or fewer", q: "P(X ≤ 7)", formula: "F(7) = Σ f(x), x = 0…7", excel: "=POISSON.DIST(7, 6.8, TRUE)", value: poissonPmfCdf(7).cdf },
    { k: "more", label: "more than 7", q: "P(X > 7)", formula: "1 − F(7) — the complement does the work", excel: "=1 − POISSON.DIST(7, 6.8, TRUE)", value: 1 - poissonPmfCdf(7).cdf },
  ] as const;
  const [active, setActive] = useState<(typeof modes)[number]["k"]>("exact");
  const cur = modes.find((m) => m.k === active)!;
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="text-[.74rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
        Mass vs cumulative — the wording decides the Excel argument (μ = 6.8)
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.k}
            onClick={() => setActive(m.k)}
            aria-pressed={active === m.k}
            className={`rounded-full border px-3.5 py-1.5 text-[.74rem] font-bold transition-all duration-200 ${
              active === m.k ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={active === m.k ? { background: STM_BTN_GRAD } : undefined}
          >
            {m.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="mt-3 grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
            <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">The question</p>
            <p className="mt-1 font-mono text-[.95rem] font-black" style={{ color: STM_G[800] }}>{cur.q}</p>
          </div>
          <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
            <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Excel</p>
            <p className="mt-1 font-mono text-[.8rem] font-bold" style={{ color: STM_G[800] }}>{cur.excel}</p>
          </div>
          <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
            <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Value</p>
            <motion.p key={cur.value.toFixed(4)} initial={{ scale: 1.12 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
              {cur.value.toFixed(4)}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        <b>{cur.formula}</b>. Trigger words: <i>exactly</i> → mass function (cumulative = FALSE); <i>at least /
        more than / until</i> → cumulative (TRUE) or its complement. In continuous distributions the mass
        function disappears entirely — only the CDF survives.
      </p>
    </div>
  );
}

export function StmDistAppsSection() {
  return (
    <Section id="dist-apps">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 18 — distributions in managerial applications"
          title={
            <>
              Poisson staffs the lot, <span className="grad-violet">the bell prices the rest</span>
            </>
          }
          lead="Two distributions, one Saturday morning. Arrivals at McNeil's Auto Mall are random and rate-constant — Poisson country — and the staffing question is a cumulative probability in disguise. Alongside it: the mass-vs-cumulative habit that decides every Excel call you will ever make."
        />

        <StmReadStep n="01" title="Case — McNeil's Auto Mall" sub="A Poisson staffing question on Saturday mornings" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#0e2a3d,#164a63)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#a5d8ef]">
                <Car className="h-4 w-4" /> Statistics in practice
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#f0f9ff]">
                6.8 customers per hour — how many salespeople on the lot?
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9e4f2]">
                Harriet McNeil believes a dealership should have <b>more customers on the lot
                than can be served</b> (customers generate showroom traffic, attract other
                customers, and help salespeople sell) — but not so many that frustrated visitors
                leave without buying. Customers arrive <b>randomly at a constant rate</b> through
                Saturday morning — and she wants no more than two customers waiting beyond the
                salespeople, <b>at most 10% of the time</b>.
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <div>
                <p className="text-[.85rem] font-extrabold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  The report&apos;s three questions
                </p>
                <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                  <li>· How are arriving customers distributed? <b>Poisson</b> — random arrivals at a constant rate, μ = 6.8/hour</li>
                  <li>· With <b>five</b> salespeople, does P(waiting &gt; 2) satisfy the 10% objective?</li>
                  <li>· What is the <b>minimum</b> number of salespeople that achieves it?</li>
                </ul>
                <StmCallout kind="warn" title="The wording that decides the answer" >
                  <p>
                    With s salespeople, <b>more than two waiting</b> means more than s + 2 customers
                    needing service at once — not merely &quot;someone waits&quot;. Setting the bar at X &gt; 5
                    (any waiting) instead of X &gt; 7 answers a different, easier question and
                    understates the risk she actually carries.
                  </p>
                </StmCallout>
              </div>
              <div>
                <StmPanel label="The machine — Poisson, μ = 6.8/hour">{`x = customers needing service at one time

f(x) = μˣ e^(−μ) / x!  ·  μ = 6.8

Part 1 · five salespeople:
  bad event = more than 2 waiting = x > 7
  P(x > 7) = 1 − P(x ≤ 7) = 1 − 0.6285
           = 0.3715 ≈ 37.2%  ✗ (fails 10%)

Part 2 · the minimum s:
  bad event = x > s + 2, need ≤ 10%
  s = 6 → P(x > 8)  = 24.5%  ✗
  s = 7 → P(x > 9)  = 15.0%  ✗
  s = 8 → P(x > 10) =  8.4%  ✓`}</StmPanel>
              </div>
            </div>
            <div className="border-t px-5 py-4">
              <p className="text-[.82rem] leading-relaxed text-muted-warm">
                <b>The verdict:</b> five salespeople leave her over the objective almost four Saturdays in
                ten — the showroom feels busy but bleeds frustrated buyers. Eight salespeople bring the
                over-wait probability to <b>8.4% ≤ 10%</b>: the minimum that honours her rule, with{" "}
                <b>=POISSON.DIST(10, 6.8, TRUE)</b> = 0.916 as the one cell that proves it.
              </p>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="02" title="Mass vs cumulative" sub="The wording decides the Excel argument" />
        <Reveal>
          <PmfCdfToggle />
        </Reveal>
        <Reveal className="mt-3">
          <StmCallout kind="insight" title="Poisson vs normal — the contrast the lecture draws">
            <p>
              Poisson counts arrivals in an interval — <b>discrete</b>, defined by one parameter λ, skewed
              right when λ is small and nearly bell-shaped by λ ≈ 10. The normal models continuous
              phenomena with <b>two</b> parameters (μ, σ), perfectly symmetric, and answers only
              cumulative questions. Same mathematics of randomness, different grammars: choose by the
              data&apos;s nature, then by the question&apos;s wording.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="Check yourself" sub="Two staffing computations" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="McNeil's · check"
              q="With five salespeople, 'more than two customers must wait' translates to which Poisson event (μ = 6.8)?"
              options={["X > 7 — five served plus two waiting, so more than seven need service", "X > 5 — anyone waiting at all", "X > 2 — more than two customers on the lot", "X = 7 exactly"]}
              answer={0}
              explain="Five salespeople absorb five customers; more than two waiting pushes need past 5 + 2 = 7. P(X > 7) = 1 − 0.6285 = 37.2% — far over her 10% ceiling. Reading the event as X > 5 (any waiting) is the classic misread."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="McNeil's · check"
              q="The minimum salesforce that meets the ≤ 10% over-wait objective is…"
              options={["8 salespeople — P(X > 10) = 8.4%", "7 salespeople — P(X > 9) = 15.0%", "5 salespeople — P(X > 7) = 37.2%", "10 salespeople — zero probability by construction"]}
              answer={0}
              explain="Walk the ladder: s = 6 → 24.5%, s = 7 → 15.0%, s = 8 → P(X > 10) = 1 − 0.916 = 8.4% ≤ 10%. Eight is the minimum — and the Excel proof is =1 − POISSON.DIST(10, 6.8, TRUE)."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Random arrivals at a constant rate</b> → Poisson, λ = 6.8/hour — one parameter carries
                the whole model.
              </>,
              <>
                <b>Translate the rule first</b>: &quot;more than two waiting with s servers&quot; = X &gt; s + 2 —
                five staff fail at <b>37.2%</b>, eight pass at <b>8.4%</b>.
              </>,
              <>
                <b>Exactly vs at-least</b>: the trigger word flips POISSON.DIST&apos;s cumulative argument —
                FALSE for the mass, TRUE for the CDF, and 1 − CDF for &quot;more than&quot;.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
