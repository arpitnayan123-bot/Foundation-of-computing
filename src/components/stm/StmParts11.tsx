"use client";

/* ============================================================
   Statistics for Managers — PART 11 (shelf 05 of The Atlas).
   The managerial leap, part two — the official-deck additions:
   · #mgmt-apps — Lecture 18: probability distributions at work
     (the Poisson dealership-staffing case, PMF vs CDF language,
     the normal curve & MBA salaries, Z-scores, the quiz briefing)
   · #clt — Lecture 19: the sampling distribution & the Central
     Limit Theorem (unbiasedness, the standard error, the CLT
     morph lab, the σ/√n curve, proportions)
   · #sampling-methods — Lecture 20: five ways to sample
     (stratified · cluster · systematic · convenience · judgment,
     plus the probability vs non-probability scoreboard)

   Machines in this part: StaffingSim, PhraseSorter, CltSampler,
   SeCurve, MethodCards + CompareTable.

   Kit shared with parts 1–10: StmReadStep, StmCallout, StmPanel,
   StmQuiz (all exported from StmParts1) + the notes/ui Section,
   SectionHead, Reveal, Takeaways.
   ============================================================ */

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Building2,
  Calculator,
  Car,
  Check,
  ChevronDown,
  ClipboardList,
  FileSpreadsheet,
  Hand,
  Layers,
  ListOrdered,
  MousePointerClick,
  Scale,
  Shuffle,
  Sigma,
  SlidersHorizontal,
  Sparkles,
  TrendingDown,
  UserCheck,
  Users,
  X,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 18 · PROBABILITY DISTRIBUTIONS AT WORK  (#mgmt-apps)
   ============================================================ */

/* machine — the dealership staffing simulator: overload odds
   P(X > staff + 2) for λ = 6.8, against the 10% tolerance line */
const STAFF_ROWS = [
  { staff: 5, over: 37.2 },
  { staff: 6, over: 24.5 },
  { staff: 7, over: 15.0 },
  { staff: 8, over: 8.5 },
];

const STAFF_VERDICT: Record<number, string> = {
  5: "Five leaves 37.2% of Saturday hours running more than two customers past the stall — deep inside the frustration zone Mr. McNeill fears.",
  6: "Six still spills over 24.5% of the time — better, but miles above the 10% tolerance.",
  7: "Seven lands at 15.0% — close, yet the lecture's own check fails: P(X ≤ 9) = 85.0%, short of the required 0.9.",
  8: "Eight needs 8.5% — under the 10% threshold at last. The lecture's answer: 8 salespeople.",
};

function StaffingSim() {
  const [staff, setStaff] = useState(5);
  const H = (p: number) => (p / 40) * 118;
  const targetY = 150 - H(10);
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the dealership staffing simulator · saturday, λ = 6.8 arrivals/hour
        </span>
        <Sparkles className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose the Saturday salesperson count">
        {STAFF_ROWS.map((r) => {
          const on = staff === r.staff;
          return (
            <button
              key={r.staff}
              type="button"
              onClick={() => setStaff(r.staff)}
              aria-pressed={on}
              className="rounded-full border px-3.5 py-1.5 text-[.72rem] font-bold transition-all"
              style={{
                borderColor: on ? STM_G[600] : STM_G.border,
                background: on ? STM_G[600] : "#fff",
                color: on ? "#fff" : STM_G[800],
              }}
            >
              {r.staff} salespeople
            </button>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg
          viewBox="0 0 480 190"
          className="h-auto w-full"
          role="img"
          aria-label="Animated bar chart of the probability that arrivals exceed salespeople by more than two, for 5 to 8 salespeople, with the 10 percent threshold drawn as a dashed line"
        >
          <defs>
            <linearGradient id="staffGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>
          </defs>
          <line x1="46" y1={targetY} x2="466" y2={targetY} stroke="#b3402c" strokeWidth="1.6" strokeDasharray="6 4" />
          <text x="464" y={targetY - 6} textAnchor="end" fontSize="10" fontWeight="700" fill="#b3402c">
            10% threshold
          </text>
          {STAFF_ROWS.map((r, i) => {
            const x = 70 + i * 102;
            const h = H(r.over);
            const on = staff === r.staff;
            const under = r.over <= 10;
            return (
              <g key={r.staff}>
                <motion.rect
                  x={x}
                  width="56"
                  rx="6"
                  fill={under ? "url(#staffGrad)" : "#c4b5fd"}
                  initial={{ y: 150, height: 0 }}
                  animate={{ y: 150 - h, height: h, opacity: on ? 1 : 0.62 }}
                  transition={{ type: "spring", stiffness: 130, damping: 17 }}
                />
                <text x={x + 28} y={150 - h - 7} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={under ? "#4c1d95" : "#7c6fae"}>
                  {r.over.toFixed(1)}%
                </text>
                <text x={x + 28} y="166" textAnchor="middle" fontSize="10" fill="#8a7fae">
                  {r.staff}
                </text>
                <text x={x + 28} y="179" textAnchor="middle" fontSize="8.5" fill="#8a7fae">
                  salespeople
                </text>
              </g>
            );
          })}
          <line x1="46" y1="150" x2="466" y2="150" stroke={STM_G.border} strokeWidth="1.4" />
        </svg>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={staff}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-2 text-[.8rem] leading-relaxed text-neutral-600"
        >
          {STAFF_VERDICT[staff]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* machine — the PMF vs CDF phrase sorter: chips snap into the
   mass or cumulative bucket; wrong buckets shake them back */
type SortBucket = "mass" | "cum";

const SORT_CHIPS: { id: string; t: string; why: string; bucket: SortBucket }[] = [
  { id: "ex10", t: "exactly 10 customers arrive", why: "“exactly” → P(X = 10), one point of the mass function", bucket: "mass" },
  { id: "ge10", t: "at least 10 customers arrive", why: "“at least” → a stretch, read from the cumulative function", bucket: "cum" },
  { id: "b812", t: "between 8 and 12 arrive", why: "“between” → a range, assembled from cumulative pieces", bucket: "cum" },
  { id: "gt15", t: "more than 15 arrive", why: "“more than” → 1 − P(X ≤ 15), cumulative territory", bucket: "cum" },
  { id: "ex7", t: "exactly 7 customers arrive", why: "the lecture's P(X = 7) — pure mass function", bucket: "mass" },
];

const SORT_BUCKETS: { k: SortBucket; name: string; math: string; hint: string }[] = [
  { k: "mass", name: "Mass function", math: "P(X = x)", hint: "“exactly” — one point of the distribution" },
  { k: "cum", name: "Cumulative", math: "P(X ≤ x) · ranges", hint: "“at least”, “more than”, “between”" },
];

function PhraseSorter() {
  const [placed, setPlaced] = useState<Record<string, SortBucket>>({});
  const [sel, setSel] = useState<string | null>(null);
  const [wrong, setWrong] = useState<{ id: string; n: number }>({ id: "", n: 0 });
  const sorted = Object.keys(placed).length;
  const done = sorted === SORT_CHIPS.length;
  const selChip = SORT_CHIPS.find((c) => c.id === sel) ?? null;

  const send = (k: SortBucket) => {
    if (!sel || placed[sel]) return;
    const chip = SORT_CHIPS.find((c) => c.id === sel);
    if (!chip) return;
    if (chip.bucket === k) setPlaced((p) => ({ ...p, [sel]: k }));
    else setWrong((w) => ({ id: sel, n: w.n + 1 }));
    setSel(null);
  };

  const reset = () => {
    setPlaced({});
    setSel(null);
    setWrong({ id: "", n: 0 });
  };

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the PMF vs CDF phrase sorter · λ = 6.8
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[.66rem] font-bold transition-all hover:bg-[#f6f3fe]"
          style={{ borderColor: STM_G.border, color: STM_G[700] }}
        >
          <Shuffle className="h-3 w-3" /> Shuffle back
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Unsorted phrases">
        {SORT_CHIPS.filter((c) => !placed[c.id]).map((c) => {
          const isSel = sel === c.id;
          const isWrong = wrong.id === c.id && wrong.n > 0;
          return (
            <motion.button
              key={isWrong ? `${c.id}-w${wrong.n}` : c.id}
              type="button"
              onClick={() => setSel(isSel ? null : c.id)}
              aria-pressed={isSel}
              initial={false}
              animate={isWrong ? { x: [0, -7, 7, -5, 5, 0] } : { x: 0 }}
              transition={{ duration: 0.36 }}
              whileHover={{ y: -2 }}
              className="rounded-full border px-3.5 py-1.5 text-[.74rem] font-bold transition-colors"
              style={{
                borderColor: isSel ? STM_G[600] : STM_G.border,
                background: isSel ? STM_G[600] : "#fff",
                color: isSel ? "#fff" : STM_G[800],
                boxShadow: isSel ? "0 6px 14px -6px rgba(109,40,217,.5)" : "none",
              }}
            >
              “{c.t}”
            </motion.button>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[.7rem] font-bold text-neutral-500">
          <MousePointerClick className="h-3.5 w-3.5" style={{ color: STM_G[600] }} />
          {selChip ? `Send “${selChip.t}” to:` : "Tap a phrase, then a bucket:"}
        </span>
        {SORT_BUCKETS.map((b) => (
          <button
            key={b.k}
            type="button"
            onClick={() => send(b.k)}
            disabled={!selChip || done}
            className="rounded-full px-3.5 py-1.5 text-[.7rem] font-black text-white shadow-md transition-all enabled:hover:scale-[1.04] disabled:opacity-40"
            style={{ background: STM_G[600] }}
            aria-label={`Send the selected phrase into the ${b.name} bucket`}
          >
            {b.name}
          </button>
        ))}
        <span className="ml-auto font-mono text-[.66rem] font-bold tabular-nums" style={{ color: STM_G[700] }}>
          {sorted}/{SORT_CHIPS.length} sorted
        </span>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {SORT_BUCKETS.map((b) => (
          <div key={b.k} className="rounded-xl border p-3" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
            <p className="text-[.8rem] font-black" style={{ color: STM_G[800] }}>
              {b.name} · <span className="font-mono text-[.74rem]">{b.math}</span>
            </p>
            <p className="text-[.68rem] text-neutral-500">{b.hint}</p>
            <ul className="mt-2 space-y-1.5">
              {SORT_CHIPS.filter((c) => placed[c.id] === b.k).map((c) => (
                <motion.li
                  key={c.id}
                  initial={{ opacity: 0, scale: 0.75, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="rounded-lg border bg-white px-2.5 py-1.5"
                  style={{ borderColor: STM_G.border }}
                >
                  <span className="flex items-center gap-1.5 text-[.74rem] font-bold" style={{ color: "#4c1d95" }}>
                    <Check className="h-3 w-3 shrink-0" style={{ color: STM_G[600] }} />“{c.t}”
                  </span>
                  <span className="mt-0.5 block pl-4 text-[.66rem] leading-relaxed text-neutral-500">{c.why}</span>
                </motion.li>
              ))}
              {SORT_CHIPS.every((c) => placed[c.id] !== b.k) ? (
                <li className="rounded-lg border border-dashed px-2.5 py-2 text-[.68rem] italic text-neutral-400" style={{ borderColor: STM_G.border }}>
                  nothing here yet
                </li>
              ) : null}
            </ul>
          </div>
        ))}
      </div>

      <p aria-live="polite" className="mt-2 text-[.74rem] leading-relaxed text-neutral-500">
        {done
          ? "5/5 — the words do the deciding: “exactly” pins the mass function, every stretch is cumulative."
          : wrong.id
            ? "Not that bucket — re-read the phrase: does it name a single point, or a stretch of values?"
            : "The quiz-setter's tell: one word in the question picks the function for you."}
      </p>
    </div>
  );
}

export function StmMgmtAppsSection() {
  return (
    <Section id="mgmt-apps">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 18 · Probability Distributions & Managerial Applications"
          title={
            <>
              Distributions <span className="grad-violet">at the dealership</span>
            </>
          }
          lead="Lecture 18 puts the probability machinery to work: a Poisson arrival model staffs Mr. Harriet McNeill's Saturday mornings, the normal curve prices MBA starting salaries, and the language of the question — exactly versus at least — decides which function you call."
        />

        <StmReadStep n="01" title="The case — staffing a Saturday morning" sub="Mr. Harriet McNeill's automobile dealership, the busiest hours of the week" />
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
              <p className="flex items-center gap-2 text-[.82rem] font-black" style={{ color: STM_G[800] }}>
                <Car className="h-4 w-4" style={{ color: STM_G[600] }} /> PROBLEM CONTEXT
              </p>
              <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-neutral-700">
                <li>· Mr. Harriet McNeill owns an automobile dealership; Saturday mornings are the busiest time.</li>
                <li>· Average customer arrivals: 6.8 customers per hour.</li>
                <li>· Service time: each salesperson spends approximately 1 hour per customer.</li>
                <li>· One salesperson on the lot ≈ one customer served per hour — so staffing is arithmetic against arrivals.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 text-[.82rem] font-black" style={{ color: STM_G[800] }}>
                <Users className="h-4 w-4" style={{ color: STM_G[600] }} /> THE BUSINESS GOAL
              </p>
              <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-neutral-700">
                <li>· Maintain 2+ customers on the lot beyond the number of salespeople.</li>
                <li>· The queue creates the impression of high demand — a full lot sells cars.</li>
                <li>· But wait past the salespeople and customers walk out frustrated.</li>
                <li>· So the question becomes probabilistic: how often does the over-flow get out of hand?</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Why Poisson fits">
            The Poisson distribution models the number of arrivals over a specified time interval. One parameter suffices — the mean λ = 6.8 customers/hour — and the model assumes arrivals occur randomly at a constant rate. Saturday morning's customer stream is exactly that kind of random flow, which is why a single average powers the entire staffing decision.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="The arithmetic — Part 1 and Part 2" sub="37.2% at five salespeople · 8 needed to get under 10%" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Part 1 — five salespeople">{`With 5 salespeople, overload means
arrivals exceeding salespeople by more
than 2 — i.e. more than 7.

P(X > 7) = 1 − P(X ≤ 7) ≈ 37.2%

Over a third of Saturday hours run
with a queue deeper than the goal
allows — too much frustration.`}</StmPanel>
            <StmPanel label="Part 2 — the minimum staffing">{`Keep exceeding-by-2 at 10% or less.

The lecture's check: need P(X ≤ 9) ≥ 0.9
— seven salespeople fail it (85.0%).

8 salespeople yield 8.5% — under the
10% threshold. Answer: 8.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StaffingSim />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="A threshold is a management choice">
            The 10% line is not in the mathematics — it is the manager's tolerance for frustrated customers weighed against the cost of another salary. Statistics locates the staffing level that honours the choice; the choice itself stays managerial. That is the lecture's quiet thesis: probability distributions don't make decisions, they make decisions honest.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="Mass function or cumulative? Watch the words" sub="“Exactly” is a point — “at least” is territory" />
        <Reveal>
          <PhraseSorter />
        </Reveal>
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The language table">{`"Exactly"  → Mass Function (discrete)
             P(X = specific value)
             e.g. P(X = 7)

"At least", "More than",
"Till", "Until", "Between"
             → Cumulative Function
             P(X ≤ value) or a
             range probability`}</StmPanel>
            <StmPanel label="Excel implementation">{`=POISSON.DIST(x, mean, cumulative)

x          number of arrivals
mean       6.8
cumulative FALSE → mass function
           TRUE  → cumulative
           distribution

"Exactly 10 customers arrive" → mass
"At least 10 customers arrive" → cum`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="One word, one argument">
            A single Boolean — FALSE or TRUE — separates one bar of the Poisson distribution from everything up to it. Quiz-setters know this, which is exactly why the lecture drills the vocabulary: read the phrase first, choose the function second, compute last.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="The normal distribution — the continuous cousin" sub="Two parameters, one bell, no mass function" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Characteristics">{`Continuous probability distribution
(unlike Poisson's discrete nature).

Defined by two parameters:
mean μ and standard deviation σ.

Bell-shaped, symmetric curve.

Represents most natural phenomena:
income distribution, grades,
heights, etc.`}</StmPanel>
            <StmPanel label="Why cumulative functions only">{`In continuous distributions the
probability at a single exact point
is virtually zero.

Impossible to calculate a mass
function for continuous data —
only cumulative probabilities are
meaningful and calculable.

So P(X = 40,000) ≈ 0; ask instead
about ranges around it.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="05" title="MBA salaries — three worked probabilities" sub="Mean μ = $40,000 · standard deviation σ = $5,000" />
        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-3">
            <StmPanel label="1 · At least $30,000">{`P(X ≥ 30,000)
= 1 − P(X < 30,000)

Result: 97.7%

Almost every graduate starts
above $30,000.`}</StmPanel>
            <StmPanel label="2 · At least $47,500">{`Same subtraction process.

Excel:
=NORM.DIST(47500, 40000,
           5000, TRUE)

Read the cumulative area,
then take the complement.`}</StmPanel>
            <StmPanel label="3 · Between $34,000 and $46,000">{`P(X < 46,000) − P(X < 34,000)

Z₁ = (34,000 − 40,000) / 5,000
   = −1.2
Z₂ = (46,000 − 40,000) / 5,000
   = +1.2

Result: ≈ 76.9%`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="06" title="Z-scores — the standardization step" sub="Any normal → standard normal (mean 0, SD 1)" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 text-[.82rem] font-black" style={{ color: STM_G[800] }}>
                <Scale className="h-4 w-4" style={{ color: STM_G[600] }} /> THE Z TRANSFORMATION
              </p>
              <p className="mt-2 font-mono text-[.9rem] font-bold" style={{ color: "#4c1d95" }}>
                Z = (X − μ) / σ
              </p>
              <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-neutral-700">
                <li>· Converts any normal distribution to the standard normal — mean 0, SD 1.</li>
                <li>· Makes distributions comparable across different scales.</li>
                <li>· Reads directly: Z = −1.2 means 1.2 standard deviations left of the mean.</li>
              </ul>
            </div>
            <StmPanel label="Excel — two functions">{`=NORM.DIST(x, mean, standard_deviation,
           cumulative)
→ for any normal distribution

=NORM.S.DIST(z, cumulative)
→ for the standard normal

Recommendation: use NORM.DIST to
maintain awareness of the
standardization process — watch
the Z step happen.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Same z, same probability">
            $34,000 in the salary curve and any value sitting 1.2σ below its own mean share one z-score — and therefore one probability. Standardization is why a single standard-normal table serves every normal variable in the course, from salaries to grades to heights.
          </StmCallout>
        </Reveal>

        <StmReadStep n="07" title="From data to decision — the managerial principles" sub="Estimates, costs, and the art of the stock-out" />
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: STM_G[800] }}>
                <BarChart3 className="h-4 w-4" style={{ color: STM_G[600] }} /> GROUND IT IN DATA
              </p>
              <ul className="mt-2 space-y-1.5 text-[.78rem] leading-relaxed text-neutral-700">
                <li>· Historical data establishes the means and patterns.</li>
                <li>· The owner's experience validates the statistical estimates.</li>
                <li>· Observation over multiple weeks identifies the busiest periods.</li>
                <li>· Archival data, pattern recognition and average calculations form the decision foundation.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: STM_G[800] }}>
                <Calculator className="h-4 w-4" style={{ color: STM_G[600] }} /> MANAGE THE TRADE-OFF
              </p>
              <ul className="mt-2 space-y-1.5 text-[.78rem] leading-relaxed text-neutral-700">
                <li>· Statistics provides the framework for optimal resource allocation.</li>
                <li>· Balances operational costs (salaries, benefits) with customer satisfaction.</li>
                <li>· Estimates are approximations — never perfectly accurate every time.</li>
                <li>· Competitive strategy lives here too: deliberate stock-outs create perceived premium value.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: STM_G[800] }}>
                <FileSpreadsheet className="h-4 w-4" style={{ color: STM_G[600] }} /> EXCEL — ESSENTIAL, WITH LIMITS
              </p>
              <ul className="mt-2 space-y-1.5 text-[.78rem] leading-relaxed text-neutral-700">
                <li>· Visualization aids understanding; automation handles complex probability.</li>
                <li>· Cumulative charts find thresholds visually; no manual errors over infinite ranges.</li>
                <li>· Limits: near estimates, subject to historical data quality; unusual circumstances matter.</li>
                <li>· A decision-support tool — not an absolute answer.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="08" title="The quiz briefing" sub="Objective, conceptual, best 2 of 3 attempts" />
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: STM_G[800] }}>
                <ClipboardList className="h-4 w-4" style={{ color: STM_G[600] }} /> FORMAT
              </p>
              <ul className="mt-2 space-y-1.5 text-[.8rem] leading-relaxed text-neutral-700">
                <li>· Objective / multiple-choice questions.</li>
                <li>· Conceptual understanding emphasized over complex numericals.</li>
                <li>· Based on covered practice questions and lecture materials.</li>
                <li>· Best 2 of 3 attempts count — multiple attempts allowed.</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 text-[.8rem] font-black" style={{ color: STM_G[800] }}>
                <BookOpen className="h-4 w-4" style={{ color: STM_G[600] }} /> PREPARATION
              </p>
              <ul className="mt-2 space-y-1.5 text-[.8rem] leading-relaxed text-neutral-700">
                <li>· Review the recorded sessions and slides thoroughly.</li>
                <li>· Work through all provided practice questions.</li>
                <li>· Refer to textbook examples for additional practice.</li>
                <li>· Focus on concept interpretation and appropriate formula selection.</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <StmQuiz
          q="Saturday, λ = 6.8. Which pairing is right — and why does the normal curve get no mass function at all?"
          options={[
            "“Exactly 10 arrive” → POISSON.DIST(10, 6.8, FALSE); the normal is continuous, so any single exact point has probability virtually zero",
            "“Exactly 10 arrive” → POISSON.DIST(10, 6.8, TRUE); TRUE always handles exact points",
            "“At least 10 arrive” → the mass function; ranges belong to cumulative calls",
            "The normal has a mass function too — it is just very small at each point",
          ]}
          answer={0}
          explain="“Exactly” calls the mass function — cumulative FALSE. “At least”, “more than”, “till”, “until”, “between” are cumulative territory. Continuous distributions spread probability so thinly that the probability at one exact point is virtually zero: no mass function exists for continuous data, so NORM.DIST is always read over ranges."
        />

        <Takeaways
          items={[
            <>Poisson staffing: λ = 6.8 arrivals/hour → <b>P(X &gt; 7) ≈ 37.2%</b> at five salespeople; the minimum holding the over-flow under 10% is <b>8 salespeople (8.5%)</b>.</>,
            <>Words decide the call: <b>“exactly” → mass function</b> P(X = x); “at least / more than / till / until / between” → cumulative — <b>=POISSON.DIST(x, 6.8, FALSE/TRUE)</b>.</>,
            <>The normal is <b>continuous, μ + σ, bell-shaped, symmetric</b> — no mass function, cumulative only. MBA salaries: ≥ $30,000 → <b>97.7%</b>; ≥ $47,500 via <b>NORM.DIST</b>; $34,000–46,000 → z = ±1.2 → <b>≈ 76.9%</b>.</>,
            <><b>Z = (X − μ)/σ</b> standardizes any normal to mean 0, SD 1 — comparable across scales; prefer NORM.DIST to keep the standardization step visible.</>,
            <>Statistics is <b>decision support</b>: historical data + owner's experience + Excel, balancing costs against satisfaction — approximations, never perfect answers (and sometimes the deliberate stock-out is the strategy).</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 19 · THE SAMPLING DISTRIBUTION & THE CLT  (#clt)
   ============================================================ */

/* deterministic PRNG so redraws are reproducible */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* machine — the CLT morph lab: draw 500 sample means and watch
   the histogram of means hug a normal curve as n grows */
type PopShape = "uniform" | "skew";

const CLT_BINS = 26;
const CLT_DRAW_N = 500;

type CltRun = { seed: number; shape: PopShape; n: number };

function CltSampler() {
  const [shape, setShape] = useState<PopShape>("uniform");
  const [n, setN] = useState(30);
  const [run, setRun] = useState<CltRun | null>(null);

  const hist = useMemo(() => {
    if (!run) return null;
    const rand = mulberry32(20260215 + run.seed * 7919);
    const means: number[] = [];
    for (let s = 0; s < CLT_DRAW_N; s++) {
      let acc = 0;
      for (let i = 0; i < run.n; i++) {
        const u = rand();
        acc += run.shape === "uniform" ? u : -Math.log(1 - u);
      }
      means.push(acc / run.n);
    }
    const lo = run.shape === "uniform" ? 0.1 : 0.2;
    const hi = run.shape === "uniform" ? 0.9 : 2.6;
    const w = (hi - lo) / CLT_BINS;
    const counts = new Array<number>(CLT_BINS).fill(0);
    for (const m of means) {
      const b = Math.min(CLT_BINS - 1, Math.max(0, Math.floor((m - lo) / w)));
      counts[b] += 1;
    }
    const mu = run.shape === "uniform" ? 0.5 : 1;
    const sd = run.shape === "uniform" ? Math.sqrt(1 / 12) : 1;
    const se = sd / Math.sqrt(run.n);
    const curve = counts.map((_, i) => {
      const c = lo + w * (i + 0.5);
      return (CLT_DRAW_N * w * Math.exp(-((c - mu) ** 2) / (2 * se * se))) / (se * Math.sqrt(2 * Math.PI));
    });
    const obsMean = means.reduce((a, b) => a + b, 0) / CLT_DRAW_N;
    const obsSd = Math.sqrt(means.reduce((a, b) => a + (b - obsMean) ** 2, 0) / (CLT_DRAW_N - 1));
    return { counts, curve, lo, hi, mu, se, obsMean, obsSd };
  }, [run]);

  const draw = () => setRun((r) => ({ seed: (r?.seed ?? 0) + 1, shape, n }));
  const stale = run !== null && (run.shape !== shape || run.n !== n);
  const maxC = hist ? Math.max(...hist.counts, 1) : 1;
  const baseY = 158;
  const H = (c: number) => (c / maxC) * 122;
  const bw = 430 / CLT_BINS;

  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the CLT morph lab · 500 sample means per draw
        </span>
        <BarChart3 className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-[auto_1fr_auto] sm:items-end">
        <div className="flex gap-1.5" role="group" aria-label="Choose the population shape">
          {(
            [
              { k: "uniform", t: "Uniform" },
              { k: "skew", t: "Right-skewed" },
            ] as const
          ).map((b) => {
            const on = shape === b.k;
            return (
              <button
                key={b.k}
                type="button"
                onClick={() => setShape(b.k)}
                aria-pressed={on}
                className="rounded-full border px-3 py-1.5 text-[.7rem] font-bold transition-all"
                style={{
                  borderColor: on ? STM_G[600] : STM_G.border,
                  background: on ? STM_G[600] : "#fff",
                  color: on ? "#fff" : STM_G[800],
                }}
              >
                {b.t}
              </button>
            );
          })}
        </div>
        <label htmlFor="clt-n" className="block text-[.74rem] font-bold text-neutral-700">
          <span className="flex items-center gap-1.5">
            <SlidersHorizontal className="h-3.5 w-3.5" style={{ color: STM_G[600] }} />
            Sample size n: <span className="tabular-nums">{n}</span>
          </span>
          <input
            id="clt-n"
            type="range"
            min={5}
            max={100}
            step={5}
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            className="mt-1.5 w-full accent-violet-600"
          />
        </label>
        <button
          type="button"
          onClick={draw}
          className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[.74rem] font-black text-white shadow-md transition-transform hover:scale-[1.03]"
          style={{ background: STM_G[600] }}
        >
          <Shuffle className="h-3.5 w-3.5" /> Draw 500 samples
        </button>
      </div>
      <p className="mt-1.5 text-[.72rem] text-neutral-500">
        {shape === "uniform"
          ? "Population: uniform on 0–1 · μ = 0.5, σ ≈ 0.289 — flat and innocent."
          : "Population: exponential waits · μ = 1, σ = 1 — stubbornly right-skewed."}
        {stale ? " Settings changed — draw again to see the new bell." : ""}
      </p>

      {hist ? (
        <>
          <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
            <svg
              viewBox="0 0 480 190"
              className="h-auto w-full"
              role="img"
              aria-label={`Histogram of 500 sample means for n = ${run?.n} from a ${shape === "uniform" ? "uniform" : "right-skewed"} population, with the theoretical normal curve dashed on top`}
            >
              {hist.counts.map((c, i) => {
                const h = H(c);
                return (
                  <motion.rect
                    key={i}
                    x={34 + i * bw + 1}
                    width={bw - 2}
                    fill="#8b5cf6"
                    opacity="0.85"
                    initial={{ y: baseY, height: 0 }}
                    animate={{ y: baseY - h, height: h }}
                    transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.008 }}
                  />
                );
              })}
              <motion.polyline
                fill="none"
                stroke="#4c1d95"
                strokeWidth="2"
                strokeDasharray="5 4"
                points={hist.curve.map((c, i) => `${(34 + i * bw + bw / 2).toFixed(1)},${(baseY - H(c)).toFixed(1)}`).join(" ")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
              <line x1="30" y1={baseY} x2="466" y2={baseY} stroke={STM_G.border} strokeWidth="1.4" />
              <text x="34" y="176" fontSize="9.5" fill="#8a7fae">
                means → {hist.lo.toFixed(1)}
              </text>
              <text x="464" y="176" textAnchor="end" fontSize="9.5" fill="#8a7fae">
                {hist.hi.toFixed(1)}
              </text>
              <text x="34" y="16" fontSize="9.5" fontWeight="700" fill="#6d28d9">
                histogram of {CLT_DRAW_N} sample means
              </text>
              <text x="464" y="16" textAnchor="end" fontSize="9.5" fill="#8a7fae">
                dashed = theoretical normal
              </text>
            </svg>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {[
              { l: "grand mean of the means", v: hist.obsMean.toFixed(3), s: `target μ = ${hist.mu}` },
              { l: "theoretical SE σ/√n", v: hist.se.toFixed(3), s: "how far means should wander" },
              { l: "observed SD of the means", v: hist.obsSd.toFixed(3), s: `what the ${CLT_DRAW_N} draws did` },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border px-3 py-2" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
                <p className="flex items-center gap-1 font-mono text-[.58rem] font-bold uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  <Sigma className="h-3 w-3" /> {s.l}
                </p>
                <p className="font-mono text-lg font-black tabular-nums" style={{ color: "#4c1d95" }}>
                  {s.v}
                </p>
                <p className="text-[.62rem] text-neutral-500">{s.s}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-3 flex h-44 flex-col items-center justify-center rounded-xl border border-dashed text-center" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
          <MousePointerClick className="h-5 w-5" style={{ color: STM_G[500] }} />
          <p className="mt-2 max-w-[36ch] text-[.76rem] leading-relaxed text-neutral-500">
            Pick a population shape and a sample size, then draw — 500 random samples of size n, one histogram of their means.
          </p>
        </div>
      )}
    </div>
  );
}

/* machine — the standard-error curve: σ/√n with the n = 30 rule
   and the 30 → 100 "roughly halves" annotation */
function SeCurve() {
  const [n, setN] = useState(30);
  const se = 1 / Math.sqrt(n);
  const X = (v: number) => 44 + ((v - 2) / 98) * 408;
  const Y = (v: number) => 160 - (v / 0.72) * 128;
  const pts = Array.from({ length: 99 }, (_, i) => {
    const nn = i + 2;
    return `${X(nn).toFixed(1)},${Y(1 / Math.sqrt(nn)).toFixed(1)}`;
  }).join(" ");
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[.6rem] font-bold uppercase tracking-[.16em]" style={{ color: STM_G[700] }}>
          machine — the standard-error curve · σ_x̄ = σ / √n
        </span>
        <Sparkles className="h-4 w-4" style={{ color: STM_G[600] }} />
      </div>
      <label htmlFor="se-n" className="mt-3 block text-[.74rem] font-bold text-neutral-700">
        <span className="flex items-center gap-1.5">
          <SlidersHorizontal className="h-3.5 w-3.5" style={{ color: STM_G[600] }} />
          Sample size n: <span className="tabular-nums">{n}</span>
        </span>
        <input
          id="se-n"
          type="range"
          min={2}
          max={100}
          step={1}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          className="mt-1.5 w-full accent-violet-600"
        />
      </label>
      <div className="mt-3 overflow-hidden rounded-xl border" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
        <svg
          viewBox="0 0 480 200"
          className="h-auto w-full"
          role="img"
          aria-label={`Curve of the standard error sigma over root n, currently at n = ${n} with standard error ${se.toFixed(3)} sigma; the n = 30 rule of thumb and the 30 to 100 halving annotation are marked`}
        >
          <line x1="44" y1="160" x2="464" y2="160" stroke={STM_G.border} strokeWidth="1.4" />
          <line x1="44" y1="26" x2="44" y2="160" stroke={STM_G.border} strokeWidth="1.4" />
          <text x="38" y="22" textAnchor="end" fontSize="9" fill="#8a7fae">0.7σ</text>
          {[2, 30, 50, 100].map((t) => (
            <text key={t} x={X(t)} y="174" textAnchor="middle" fontSize="9" fill="#8a7fae">
              {t}
            </text>
          ))}
          <polyline points={pts} fill="none" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round" />
          <line x1={X(30)} y1={Y(1 / Math.sqrt(30))} x2={X(100)} y2={Y(1 / Math.sqrt(100))} stroke="#c4b5fd" strokeWidth="1.6" strokeDasharray="4 4" />
          <text x={X(30) + 6} y={Y(1 / Math.sqrt(30)) - 26} fontSize="9.5" fontWeight="800" fill="#4c1d95">
            n = 30 — the CLT rule of thumb
          </text>
          <text x={(X(30) + X(100)) / 2} y={Y(1 / Math.sqrt(30)) - 10} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#6d28d9">
            30 → 100 ≈ halves the SE
          </text>
          <circle cx={X(30)} cy={Y(1 / Math.sqrt(30))} r="4" fill="#4c1d95" />
          <circle cx={X(100)} cy={Y(1 / Math.sqrt(100))} r="4" fill="#4c1d95" />
          <text x={X(100) - 6} y={Y(1 / Math.sqrt(100)) - 10} textAnchor="end" fontSize="9.5" fontWeight="800" fill="#4c1d95">
            n = 100
          </text>
          <motion.line
            stroke="#a78bfa"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            animate={{ x1: X(n), y1: Y(se), x2: X(n), y2: 160 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          />
          <motion.line
            stroke="#a78bfa"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            animate={{ x1: 44, y1: Y(se), x2: X(n), y2: Y(se) }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          />
          <motion.circle
            r="5.5"
            fill="#6d28d9"
            stroke="#fff"
            strokeWidth="2"
            animate={{ cx: X(n), cy: Y(se) }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          />
          <text x={Math.min(X(n) + 8, 396)} y={Y(se) - 8} fontSize="10.5" fontWeight="800" fill="#4c1d95">
            n = {n} · SE = {se.toFixed(3)} σ
          </text>
        </svg>
      </div>
      <p className="mt-2 text-[.78rem] leading-relaxed text-neutral-600">
        The SE falls with √n: at n = 30 it reads {(1 / Math.sqrt(30)).toFixed(3)}σ, at n = 100 it reads {(1 / Math.sqrt(100)).toFixed(3)}σ — the lecture's “approximately halves”. Every probability claim about x̄ is really a claim about this curve.
      </p>
    </div>
  );
}

export function StmCltSection() {
  return (
    <Section id="clt">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 19 · The Sampling Distribution & the Central Limit Theorem"
          title={
            <>
              Many means, <span className="grad-violet">one bell</span>
            </>
          }
          lead="Draw one sample and you get one x̄; draw again and x̄ moves. Lecture 19 studies the distribution of all those means — why it concentrates on μ, how the standard error prices its wobble, and how the Central Limit Theorem turns any population bell-shaped given enough n."
        />

        <StmReadStep n="01" title="Many samples, many means" sub="The sampling distribution of the mean" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The object of study">{`Multiple random samples of size n,
taken from a population — each
sample produces a different
sample mean.

Collecting all these means creates
a sampling distribution that
approximates a normal curve.

Definition: the probability
distribution of ALL possible sample
means obtained from repeated
random sampling.`}</StmPanel>
            <StmPanel label="Unbiased estimators">{`The expected value (grand mean) of
the sampling distribution equals
the population mean μ.

When a point estimator's expected
value equals the population
parameter, it is unbiased.

So repeated sampling converges
toward the true population
parameter — x̄ toward μ.`}</StmPanel>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The standard error — how means wobble" sub="σ_x̄ = √[(N−n)/(N−1)] · (σ/√n), or just σ/√n" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="Definition & formulas">{`σ_x̄ measures the standard deviation
of sample means — how far they
deviate from the population mean.

Finite population:
σ_x̄ = √[(N−n)/(N−1)] × (σ/√n)

Infinite population:
σ_x̄ = σ/√n

The finite population correction
√[(N−n)/(N−1)] applies when the
sample size is significant relative
to the population size.`}</StmPanel>
            <StmPanel label="Finite vs infinite">{`Treat a finite population as
infinite when n/N < 0.05.

As the population size grows
relative to the sample, the
correction factor approaches 1.

When n = N, the standard error
becomes 0 — every sample is the
identical population, so the means
cannot deviate.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Zero at the ceiling">
            The correction factor whispers what common sense already knows: as n closes on N, sampling variation must vanish. Sample the entire population and there is nothing left to vary — the standard error is exactly 0, because every possible “sample” is the population itself.
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="The Central Limit Theorem" sub="Any population + big enough n → a bell of means" />
        <Reveal>
          <StmPanel label="The theorem">{`Selecting random samples of size n
from ANY population, the sampling
distribution of the sample mean can
be approximated by a normal
distribution as the sample size
becomes large.

Rule of thumb: n ≥ 30 works for any
population; highly skewed
populations → consider n ≥ 50.

IMPORTANT: this applies to the
distribution of sample means — NOT
the distribution of individual
sample elements.`}</StmPanel>
        </Reveal>
        <Reveal>
          <CltSampler />
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="Watch the morph">
            Slide n upward and redraw: the uniform's means go bell almost immediately, while the skewed population needs a larger n before its histogram of means surrenders its tilt. The population never changes — only n does. That is the theorem's entire magic, and it is why the rule of thumb is a size, not a shape.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Probability for sample means" sub="Z = (x̄ − μ)/σ_x̄ — and n buys precision" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The Z recipe">{`Convert a sample mean to standard
units: Z = (x̄ − μ) / σ_x̄

Then read standard normal tables
or Excel functions.

Lecture example — probability that
x̄ falls within ±10 of μ:
n = 30  → ≈ 47%
n = 100 → ≈ 78%

Same μ, same σ — only n moved.`}</StmPanel>
            <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.soft }}>
              <p className="flex items-center gap-2 text-[.82rem] font-black" style={{ color: STM_G[800] }}>
                <TrendingDown className="h-4 w-4" style={{ color: STM_G[600] }} /> ACCURACY IS A FUNCTION OF N
              </p>
              <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-neutral-700">
                <li>· The SE decreases proportionally with √n: σ_x̄ = σ/√n.</li>
                <li>· Larger samples → narrower sampling distributions → more precise estimates.</li>
                <li>· Going from 30 to 100 approximately halves the standard error.</li>
                <li>· Confidence comes from reduced variation in the sample means.</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <SeCurve />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why 47% → 78% should feel mechanical">
            Nothing about the population changed between the two answers — only σ_x̄ shrank. Every probability claim about a sample mean is really a claim about the standard error, and the standard error is a claim about n. Buy samples, and precision is what you bought.
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Proportions — the same machinery" sub="p̂ unbiased for p · σ_p̂ = √[p(1−p)/n]" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The rules">{`The sample proportion p̂ is an
unbiased estimator of the population
proportion p.

Standard error of the proportion:
σ_p̂ = √[p(1−p)/n]

The normal distribution can be used
when BOTH hold:
np ≥ 5  and  n(1−p) ≥ 5

Same Z methodology as the mean —
with adjusted formulas.`}</StmPanel>
            <StmPanel label="Housing example">{`72% of college applicants desire
on-campus housing; sample n = 30.

Check 1: np = 30(0.72) = 21.6 ≥ 5 ✓
Check 2: n(1−p) = 30(0.28) = 8.4 ≥ 5 ✓

Then compute the probability that
p̂ falls within ±0.05 of p using
Z-values and normal tables —

similar methodology to the sample
mean, with σ_p̂ in the denominator.`}</StmPanel>
          </div>
        </Reveal>

        <StmQuiz
          q="A skewed bonus distribution, n = 100. What exactly does the CLT let you treat as normal — and what does going from n = 30 to n = 100 do to the standard error?"
          options={[
            "The distribution of the sample mean x̄ — and it roughly halves σ_x̄ = σ/√n",
            "The individual bonuses themselves — big n normalises the raw data",
            "The distribution of the sample mean x̄ — and it doubles the standard error",
            "Only the population itself becomes normal once n ≥ 50",
          ]}
          answer={0}
          explain="The CLT speaks about the sampling distribution of the mean, never the individual elements — the raw bonuses stay skewed. And since σ_x̄ = σ/√n, raising n from 30 to 100 shrinks the SE from ≈0.183σ to 0.100σ — approximately halved — which is exactly why the ±10 window's probability jumps from ≈47% to ≈78%."
        />

        <Takeaways
          items={[
            <>Sampling distributions let us understand <b>population parameters without examining entire populations</b> — every sample mean is one draw from a knowable curve.</>,
            <>The CLT guarantees a <b>normal approximation with adequate n</b>: rule of thumb n ≥ 30 (50+ if skewed) — for the <b>means, not the elements</b>.</>,
            <>Standard error quantifies precision: finite <b>√[(N−n)/(N−1)]·σ/√n</b>, infinite <b>σ/√n</b>; treat as infinite when n/N &lt; 0.05; n = N → SE 0.</>,
            <>Larger n → smaller SE → <b>more accurate, reliable estimates</b>; 30 → 100 approximately halves it, and Z = (x̄ − μ)/σ_x̄ does the rest.</>,
            <>Means and proportions share the framework: <b>p̂ unbiased</b>, σ_p̂ = <b>√[p(1−p)/n]</b>, normal whenever <b>np ≥ 5 and n(1−p) ≥ 5</b>.</>,
          ]}
        />
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 20 · FIVE WAYS TO SAMPLE  (#sampling-methods)
   ============================================================ */

/* machine — five method cards: click to expand definition,
   process, pros/cons and applications with spring animation */
type MethodKind = "probability" | "nonprobability";

type Method = {
  id: string;
  name: string;
  kind: MethodKind;
  icon: React.ComponentType<{ className?: string }>;
  one: string;
  def: string;
  process: string;
  pros: string[];
  cons: string[];
  apps: string;
};

const METHODS: Method[] = [
  {
    id: "stratified",
    name: "Stratified",
    kind: "probability",
    icon: Layers,
    one: "Homogeneous strata, one random draw from each.",
    def: "The population is divided into homogeneous groups called strata, where each element belongs to exactly one stratum.",
    process: "Random samples are taken from each stratum and combined to estimate population parameters.",
    pros: ["More precise results than simple random sampling", "Requires smaller sample sizes", "Ensures representation from all population segments"],
    cons: [],
    apps: "Political surveys · government policy rollouts · college initiatives. Stratify by gender, age, location, industry type or income level.",
  },
  {
    id: "cluster",
    name: "Cluster",
    kind: "probability",
    icon: Building2,
    one: "Heterogeneous mini-populations — sample whole clusters.",
    def: "The population is divided into heterogeneous groups called clusters that represent small-scale versions of the population. Key difference from stratified: clusters are heterogeneous (diverse) rather than homogeneous.",
    process: "Random clusters are selected, and ALL elements within the selected clusters are sampled.",
    pros: ["Cost-effective for geographically close elements", "Quick data collection"],
    cons: ["Requires a larger total sample size than stratified or simple random sampling"],
    apps: "Vaccine development studies · city-block surveys · well-defined area sampling.",
  },
  {
    id: "systematic",
    name: "Systematic",
    kind: "probability",
    icon: ListOrdered,
    one: "Every kth element, k = N/n, after a random start.",
    def: "Elements are selected at regular intervals from a population list — every kth element, where k = N/n.",
    process: "Randomly select the first element from the first k elements, then select every kth element thereafter. Works well when the list has random ordering with no set patterns — and approximates simple random sampling when no systematic pattern exists.",
    pros: ["Easier to implement than simple random sampling", "No need to list the entire population"],
    cons: [],
    apps: "Every 100th telephone listing · every 20th customer receives a prize · the 100th caller wins the award.",
  },
  {
    id: "convenience",
    name: "Convenience",
    kind: "nonprobability",
    icon: Hand,
    one: "Whoever is easiest to reach.",
    def: "Items are included in the sample based on accessibility and convenience rather than known selection probabilities — a non-probability technique.",
    process: "There is no random frame: whoever is accessible is in. Used when access to the complete population is limited or nearly impossible.",
    pros: ["Easy and quick sample selection and data collection"],
    cons: ["Cannot determine how representative the sample is of the population", "Impossible to evaluate the accuracy of results", "Results may not reflect actual population parameters"],
    apps: "Professors using student volunteers in research · asking friends about restaurant quality · selecting products already known to the researcher.",
  },
  {
    id: "judgment",
    name: "Judgment",
    kind: "nonprobability",
    icon: UserCheck,
    one: "The expert's pick of “most representative”.",
    def: "The person most knowledgeable about the subject selects the population elements believed to be most representative — a non-probability technique.",
    process: "Selection rides entirely on the chooser's expertise: there is no probability mechanism to audit, so quality rises and falls with the selector.",
    pros: ["Simple and quick sample selection"],
    cons: ["Quality depends on the judgment of the selector", "Susceptible to bias and misjudgment", "Results cannot be statistically evaluated"],
    apps: "News reporters selecting senators to reflect Senate opinion · teachers selecting students to represent class ability in competitions · newsroom experts reflecting general public opinion.",
  },
];

function MethodCards() {
  const [open, setOpen] = useState<string | null>("stratified");
  return (
    <div>
      <div className="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-3">
        {METHODS.map((m) => {
          const on = open === m.id;
          const Icon = m.icon;
          return (
            <motion.div
              layout
              key={m.id}
              className="rounded-2xl border"
              style={{ borderColor: on ? STM_G[500] : STM_G.border, background: on ? STM_G.soft : "#fff", overflow: "hidden" }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              <button
                type="button"
                onClick={() => setOpen(on ? null : m.id)}
                aria-expanded={on}
                className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors hover:bg-[#f6f3fe]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_G[600] }}>
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[.9rem] font-black" style={{ color: "#4c1d95" }}>
                      {m.name}
                    </span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[.56rem] font-black uppercase tracking-[.12em]"
                      style={m.kind === "probability" ? { background: STM_G[600], color: "#fff" } : { background: "#ece7f8", color: STM_G[800] }}
                    >
                      {m.kind === "probability" ? "Probability" : "Non-probability"}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[.72rem] leading-snug text-neutral-500">{m.one}</span>
                </span>
                <motion.span animate={{ rotate: on ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="mt-1 shrink-0">
                  <ChevronDown className="h-4 w-4" style={{ color: STM_G[700] }} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {on ? (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 26 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="border-t px-4 pb-4 pt-3" style={{ borderColor: STM_G.border }}>
                      <p className="text-[.76rem] leading-relaxed text-neutral-700">{m.def}</p>
                      <p className="mt-2 text-[.74rem] font-bold" style={{ color: STM_G[700] }}>
                        Process
                      </p>
                      <p className="text-[.76rem] leading-relaxed text-neutral-700">{m.process}</p>
                      <ul className="mt-2 space-y-1">
                        {m.pros.map((p) => (
                          <li key={p} className="flex items-start gap-1.5 text-[.74rem] leading-relaxed text-neutral-700">
                            <Check className="mt-0.5 h-3 w-3 shrink-0" style={{ color: STM_G[600] }} />
                            {p}
                          </li>
                        ))}
                        {m.cons.map((c) => (
                          <li key={c} className="flex items-start gap-1.5 text-[.74rem] leading-relaxed text-neutral-600">
                            <X className="mt-0.5 h-3 w-3 shrink-0" style={{ color: "#b3402c" }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2 rounded-lg px-2.5 py-1.5 text-[.7rem] leading-relaxed text-neutral-600" style={{ background: "#fff", border: `1px solid ${STM_G.border}` }}>
                        {m.apps}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[.72rem] text-neutral-500">
        <MousePointerClick className="h-3.5 w-3.5" style={{ color: STM_G[600] }} />
        Tap a card to flip it open — definition, process, pros &amp; cons, and where each method earns its keep.
      </p>
    </div>
  );
}

/* machine — the probability vs non-probability scoreboard:
   animated rows, the recommended column washed in violet */
const COMPARE_ROWS = [
  { a: "Techniques", p: "Stratified, Cluster, Systematic", np: "Convenience, Judgment" },
  { a: "Selection probability", p: "Known", np: "Unknown" },
  { a: "Result evaluation", p: "Can be statistically assessed using formulas", np: "Cannot be statistically evaluated" },
  { a: "Accuracy", p: "Higher; reflects population parameters", np: "Lower; may not represent the population" },
  { a: "Recommendation", p: "Highly recommended for management decisions", np: "Use only when probability sampling is impossible" },
];

function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: STM_G.border, background: "#fff" }}>
      <table className="warm-table min-w-[560px]">
        <thead>
          <tr>
            <th>Aspect</th>
            <th style={{ background: "linear-gradient(180deg,#5b21b6,#4c1d95)" }}>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> Probability methods — recommended
              </span>
            </th>
            <th>Non-probability methods</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE_ROWS.map((r, i) => (
            <motion.tr
              key={r.a}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
            >
              <td className="font-bold">{r.a}</td>
              <td style={{ background: STM_G.soft, color: STM_G[800], fontWeight: 700 }}>{r.p}</td>
              <td className="text-neutral-500">{r.np}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StmSamplingMethodsSection() {
  return (
    <Section id="sampling-methods">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 20 · Understanding Sampling Methods — Five Ways to Sample"
          title={
            <>
              Five ways to <span className="grad-violet">reach the population</span>
            </>
          }
          lead="Simple random sampling is the ideal; reality rarely hands you a full list. Lecture 20 walks five practical routes to a sample — three probability techniques you can statistically defend, two non-probability shortcuts you can only defend with judgment — and scores them against each other."
        />

        <StmReadStep n="01" title="Where we stand" sub="The recap that frames every method" />
        <Reveal>
          <StmCallout kind="insight" title="The running logic">
            Random sampling techniques estimate the population mean and proportion; sampling distributions follow the normal distribution once the sample size exceeds 30, regardless of the population's own distribution; and the whole goal is to understand population characteristics through sample estimation — without listing, let alone measuring, everyone.
          </StmCallout>
        </Reveal>

        <StmReadStep n="02" title="The five methods — click to open" sub="Three probability techniques, two non-probability shortcuts" />
        <Reveal>
          <MethodCards />
        </Reveal>

        <StmReadStep n="03" title="Probability vs non-probability — the scoreboard" sub="Known selection probability is the whole game" />
        <Reveal>
          <CompareTable />
        </Reveal>
        <Reveal>
          <StmCallout kind="why" title="Why the probability column wins">
            Known selection probabilities make results statistically assessable with formulas — accuracy can be evaluated against the true population parameters. That is why probability methods are highly recommended for management decisions, while convenience and judgment sampling are reserved for the rare cases where probability sampling is impossible.
          </StmCallout>
        </Reveal>

        <StmReadStep n="04" title="Conclusions — the estimation principle" sub="Sample estimates population, never the reverse" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <StmPanel label="The conclusions">{`Primary goal: all sampling methods aim
to understand population
characteristics without examining
the entire population.

Best practice: use probability
sampling methods whenever possible
for accurate population estimation.

Managerial application:
organizations minimize costs and
time while gaining accurate
population insights — and
probability sampling lets them
evaluate accuracy against true
parameters.`}</StmPanel>
            <StmPanel label="The principle & the lever">{`Point estimation principle:
sample data is used to estimate
population parameters —
never the reverse.

The lever is sample size:
as n increases, the standard error
of the mean decreases
(σ/√n) — accuracy is purchasable,
at a price organizations
work to minimize.`}</StmPanel>
          </div>
        </Reveal>
        <Reveal>
          <StmCallout kind="insight" title="The key takeaway">
            Understanding <b>when to apply which sampling method</b> is critical for effective decision-making in organizational contexts — whether for product development, service improvement, policy implementation, or research purposes. The method you choose is the difference between a defensible estimate and a confident guess.
          </StmCallout>
        </Reveal>

        <StmQuiz
          q="A researcher splits a city into blocks that each look like miniature versions of the whole, randomly picks five blocks, and surveys everyone inside them. Which method is this — and what is its price?"
          options={[
            "Cluster sampling — clusters are heterogeneous mini-populations; the price is a larger total sample",
            "Stratified sampling — strata are heterogeneous; the price is a smaller sample",
            "Systematic sampling — every kth element with k = N/n; the price is needing a full list",
            "Convenience sampling — accessible blocks chosen for ease; the price is unknown accuracy",
          ]}
          answer={0}
          explain="Heterogeneous clusters that mirror the whole population, randomly selected, with ALL elements inside surveyed — that is cluster sampling. Stratified is the mirror image: homogeneous strata with a random draw from each. Clusters save cost when elements are geographically close and data collection is quick, but they demand a larger total sample than stratified or simple random sampling."
        />

        <Takeaways
          items={[
            <>Five routes to a sample: <b>stratified</b> (homogeneous strata, sample each), <b>cluster</b> (heterogeneous mini-populations, sample all inside), <b>systematic</b> (every kth, k = N/n), plus <b>convenience</b> and <b>judgment</b> — the non-probability pair.</>,
            <>Stratified buys <b>precision and full representation with smaller samples</b> — stratify by gender, age, location, industry type or income; classic uses: political surveys, policy rollouts, college initiatives.</>,
            <>Cluster is the <b>cost-cutter for geographically close elements</b> (vaccine studies, city blocks) but needs a larger total sample; systematic approximates SRS when the list has no pattern — every 100th listing, every 20th customer, the 100th caller.</>,
            <>Non-probability = <b>unknown selection probabilities</b>: results cannot be statistically evaluated and may not represent the population — use only when access to the population is limited or nearly impossible.</>,
            <>The scoreboard: probability methods are <b>known-probability, formula-assessable, higher accuracy — highly recommended for management decisions</b>; and the principle stands: the sample estimates the population, never the reverse, with σ/√n falling as n rises.</>,
          ]}
        />
      </div>
    </Section>
  );
}
