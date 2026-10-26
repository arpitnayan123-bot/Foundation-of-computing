"use client";

/* ============================================================
   Statistics for Managers — PART 15 (shelf 05). Three lectures
   carved out of the old consolidated blocks by the PDF re-map:
   · Lecture 17 → #point-estimation  the sampling vocabulary:
     element, population, sample, frame, census — and the
     statistic→parameter bridge every later lecture rides.
   · Lecture 21 → #marrian-case      Marrian Dairies' BlueGurt/
     StrawGurt market-entry decision at three sample sizes
     (σx̄ = 25/√n · Z = −5/σx̄ · 7.86% → 0.72% → 0.003%).
   · Lecture 23 → #practice-lab      the Excel sampling
     laboratory: RANDBETWEEN recipe, the paste-values trap, the
     2,500-employee population (μ = 71,800, σ = 4,000), the SE
     shrink machine, and the quiz-pattern update.
   Every figure is from the lecture notes, hand-checked.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Beaker, ClipboardList, FlaskConical, Milk, Sigma } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   LECTURE 17 — SAMPLING VOCABULARY (#point-estimation)
   ============================================================ */

const VOCAB = [
  { k: "Element", v: "the entity data is collected about — a tree, a voter, a transaction" },
  { k: "Population", v: "the collection of ALL elements of interest — 1,000,000 trees" },
  { k: "Sample", v: "the subset actually measured — 500 of them" },
  { k: "Sampled population", v: "the population the sample was really drawn from — may be narrower than the target" },
  { k: "Frame", v: "the LIST the sample is drawn from — no frame, no random sample" },
  { k: "Census", v: "data from the ENTIRE population — exact, but slow, costly, sometimes impossible" },
  { k: "Sample survey", v: "a census's practical sibling — a subset, read for the whole" },
];

export function StmPointEstimationSection() {
  return (
    <Section id="point-estimation">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 17 — sampling and sampling distributions"
          title={
            <>
              The vocabulary of <span className="grad-violet">estimation</span>
            </>
          }
          lead="Every inference sentence in chapters 7–8 leans on seven words defined here. Nail the vocabulary, learn how a simple random sample is actually drawn, and the bridge from sample statistics to population parameters carries you the rest of the course."
        />

        <StmReadStep n="01" title="Seven words, one move" sub="From population to sample and back" />
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {VOCAB.map((c, i) => (
            <Reveal key={c.k} delay={i * 50}>
              <div className="card-warm h-full p-4">
                <p className="text-[.78rem] font-black uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  {String(i + 1).padStart(2, "0")} · {c.k}
                </p>
                <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">{c.v}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={350}>
            <div className="h-full rounded-2xl p-4 text-white" style={{ background: STM_BTN_GRAD }}>
              <p className="text-[.78rem] font-black uppercase tracking-[.12em] text-white/85">The move</p>
              <p className="mt-1.5 text-[.82rem] font-semibold leading-relaxed text-white/95">
                sample → statistic → infer → parameter. Learn it once; chapters 7–8 are this arrow, drawn
                with increasing precision.
              </p>
            </div>
          </Reveal>
        </div>

        <StmReadStep n="02" title="Why sample at all" sub="Three reasons the census loses" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: <Beaker className="h-4 w-4" />, k: "Destructive testing", v: "crash every car to test every car leaves no cars to sell. Blood tests, mortar cubes, taste panels — measurement destroys the element." },
            { icon: <Sigma className="h-4 w-4" />, k: "Infinite-ish populations", v: "some populations keep generating elements — a production line, incoming calls. A census has no endpoint; a sample does." },
            { icon: <ClipboardList className="h-4 w-4" />, k: "Cost, time, disruption", v: "Sahadri's 1,000-store audit burns months and travel budgets for numbers a 50-store sample returns at a fraction of the cost — chapter 8 opens on exactly this trade." },
          ].map((c, i) => (
            <Reveal key={c.k} delay={i * 60}>
              <div className="card-warm h-full p-4">
                <p className="flex items-center gap-2 text-[.78rem] font-black uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>
                  {c.icon} {c.k}
                </p>
                <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <StmReadStep n="03" title="The statistic → parameter bridge" sub="Greek for the population, Latin for the sample" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <table className="w-full text-left text-[.84rem]">
              <thead>
                <tr className="text-[.64rem] font-black uppercase tracking-[.14em] text-muted-warm" style={{ borderBottom: `1px solid ${STM_G.border}` }}>
                  <th className="px-4 py-2.5">What you want</th>
                  <th className="px-4 py-2.5">Population parameter</th>
                  <th className="px-4 py-2.5">Sample statistic</th>
                  <th className="px-4 py-2.5">The point estimate</th>
                </tr>
              </thead>
              <tbody className="text-muted-warm">
                {[
                  ["central location", "μ (mu)", "x̄ (x-bar)", "x̄ estimates μ"],
                  ["spread", "σ (sigma)", "s", "s estimates σ"],
                  ["share with a trait", "p", "p̄ (p-bar)", "p̄ estimates p"],
                ].map(([a, b, c, d]) => (
                  <tr key={a} style={{ borderBottom: `1px solid ${STM_G.border}` }}>
                    <td className="px-4 py-2.5 font-semibold text-[#2b1d42]">{a}</td>
                    <td className="px-4 py-2.5 font-mono font-bold" style={{ color: "#6d28d9" }}>{b}</td>
                    <td className="px-4 py-2.5 font-mono font-bold" style={{ color: "#0f766e" }}>{c}</td>
                    <td className="px-4 py-2.5">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 pb-3 pt-2 text-[.75rem] leading-snug text-muted-warm">
              A point estimator is unbiased when its expected value equals the parameter — E(x̄) = μ,
              E(p̄) = p. The estimator aims at the truth; the sampling distribution (chapter 8) measures
              how tightly.
            </p>
          </div>
        </Reveal>

        <StmReadStep n="04" title="Drawing a simple random sample" sub="NICE Paper's forest, and the procedure behind it" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The case — NICE Paper Limited">{`Population: 1,000,000 trees in the forest
frame: the forest inventory list
sample: 500 trees, simple random

result: sample mean volume x̄ = 0.4 m³
        → point estimate of μ

Option A: census (measure all — exact,
expensive, slow). Option B: sample 500 —
if the mean comes back at 0.4 m³ and the
mill needs 0.35 m³ average, harvest plans
proceed.`}</StmPanel>
          </Reveal>
          <Reveal delay={60}>
            <StmPanel label="The procedure — SRS without replacement">{`1. number every element in the frame
2. draw random numbers (table or software)
3. ignore repeats and out-of-range values
4. until n elements are selected

Every element has the same chance of
selection — that is what makes the
sample's reliability computable later.

Biased shortcut (only fertile-corner
trees) forfeits every inference right.`}</StmPanel>
          </Reveal>
        </div>
        <Reveal className="mt-3">
          <StmCallout kind="insight" title="The 5% rule you will meet again in chapter 8">
            <p>
              When the sample is a sliver of the population (n/N &lt; 5%), the standard error formula runs
              without correction. Once n/N climbs past 5%, the <b>finite population correction</b>{" "}
              √[(N−n)/(N−1)] trims the error — sampling without replacement from a small population is
              more informative than the naive formula admits. File it now; lecture 22 uses it.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Two vocabulary checks" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Sampling vocabulary · check"
              q="NICE Paper measures 500 of 1,000,000 trees and finds x̄ = 0.4 m³. In estimation language, 0.4 is…"
              options={["a sample statistic — the point estimate of the population mean μ", "a population parameter", "a census result", "a frame"]}
              answer={0}
              explain="It is computed from the sample, so it is a statistic — and it serves as the point estimate of μ, the population mean volume. The population parameter (the true mean of all 1,000,000 trees) is unknown; the statistic is its best single-number guess."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Sampling vocabulary · check"
              q="A questionnaire asks 500 randomly chosen trees' volumes but the list used omits a recently replanted section. The list is best described as…"
              options={["an incomplete frame — the sampled population is narrower than the target population", "a census", "an unbiased estimator", "a stratified sample"]}
              answer={0}
              explain="The frame is the list the sample is drawn from. If it omits part of the population, inference covers only the sampled population — estimates may be biased toward the included section. No amount of clever statistics fixes a bad frame; only better coverage does."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Seven words</b>: element, population, sample, sampled population, frame, census, sample
                survey — the grammar of every inference sentence.
              </>,
              <>
                <b>The bridge</b>: x̄ → μ, s → σ, p̄ → p — Greek for populations, Latin for samples,
                unbiasedness means the estimator aims at the truth.
              </>,
              <>
                <b>SRS</b>: equal chance for every element, drawn from a complete frame — NICE Paper&apos;s
                500-tree mean (0.4 m³) is the template.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 21 — MARRIAN DAIRIES CASE (#marrian-case)
   ============================================================ */

/* P(X̄ ≤ 75 | μ = 80, σ = 25) at three n — Φ values hand-checked */
const MARRIAN_NS = [
  { n: 50, sx: 3.5355, z: -1.414, p: 0.0786, label: "7.86%" },
  { n: 150, sx: 2.0412, z: -2.449, p: 0.0072, label: "0.72%" },
  { n: 400, sx: 1.25, z: -4.0, p: 0.000032, label: "0.003%" },
];

function MarrianNSwitcher() {
  const [active, setActive] = useState(0);
  const cur = MARRIAN_NS[active];
  const pct = Math.max(1.5, Math.min(100, cur.p * 100 * 6));
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="text-[.74rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
        The sample-size switcher — P(X̄ ≤ 75) when μ = 80, σ = 25
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {MARRIAN_NS.map((m, i) => (
          <button
            key={m.n}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`rounded-full border px-3.5 py-1.5 text-[.76rem] font-bold transition-all duration-200 ${
              active === i ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={active === i ? { background: STM_BTN_GRAD } : undefined}
          >
            n = {m.n}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">σx̄ = 25/√n</p>
          <motion.p key={cur.sx} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
            {cur.sx.toFixed(4)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Z = (75 − 80)/σx̄</p>
          <motion.p key={cur.z} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
            {cur.z.toFixed(3)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">P(X̄ ≤ 75)</p>
          <motion.p key={cur.label} initial={{ scale: 1.15, color: "#6d28d9" }} animate={{ scale: 1, color: "#8c2f2f" }} className="font-mono text-xl font-black">
            {cur.label}
          </motion.p>
        </div>
      </div>
      <div className="mt-3 h-6 overflow-hidden rounded-full bg-white" style={{ border: `1px solid ${STM_G.border}` }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#ca8a04,#e6cd7f)" }}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        Quadruple n from 50 to 200 (50→200 not shown: σx̄ halves) — every doubling divides σx̄ by √2 and
        pushes the signal deeper into the tail. At <b>n = 150</b> the lecture&apos;s second scenario, a
        mean of 75 or less happens just <b>0.7%</b> of the time — the decision-grade version of the study.
      </p>
    </div>
  );
}

export function StmMarrianCaseSection() {
  return (
    <Section id="marrian-case">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 21 — the case study"
          title={
            <>
              Marrian Dairies — <span className="grad-violet">can StrawGurt find a market?</span>
            </>
          }
          lead="BlueGurt was a home run: a mean rating of 80 with σ = 25, where customers rating 75 or less drift away. The marketing team wants a strawberry sibling — but only if it reaches shoppers BlueGurt cannot keep. The sampling distribution of x̄ turns that hunch into a probability."
        />

        <StmReadStep n="01" title="The business setup" sub="A second flavour, and one fear: cannibalisation" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="p-5" style={{ background: "linear-gradient(135deg,#4a2c5e,#6d28d9)" }}>
              <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#e2d4f7]">
                <Milk className="h-4 w-4" /> Case · Lecture 21 — sampling distributions decide a launch
              </p>
              <p className="mt-2 font-display text-2xl font-black text-[#faf5ff]">
                BlueGurt owns the shelf. Where is the market for StrawGurt?
              </p>
              <p className="mt-1 text-[.85rem] leading-relaxed text-[#dccdf2]">
                Marrian Dairies&apos; blueberry yogurt scores <b>μ = 80, σ = 25</b> on a 100-point scale;
                customers rating <b>75 or less</b> are unlikely to reorder. Marketing proposes{" "}
                <b>StrawGurt</b> to capture the low end — but launching into your own demand is{" "}
                <b>cannibalisation</b> unless the dissatisfied segment is real. The question put to
                statistics: what is the chance a sample of customers returns a mean rating of 75 or less
                <i> even when the population is truly satisfied</i>?
              </p>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-2">
              <StmPanel label="The machine — the distribution of x̄">{`Population: μ = 80, σ = 25, rating scale / 100
buy-threshold: ratings ≤ 75 drift away

For a random sample of n customers:
  σx̄ = σ/√n = 25/√50 = 3.5355
  Z = (75 − 80)/3.5355 = −1.414

P(X̄ ≤ 75) = P(Z ≤ −1.414) = 0.0786

≈ 7.86% — a n=50 sample says "the market
is dissatisfied" about once in thirteen
studies, purely by sampling luck.`}</StmPanel>
              <div className="flex flex-col gap-3">
                <StmCallout kind="why" title="Why a low sample mean would tempt the launch">
                  <p>
                    If the sampled customers return a mean ≤ 75, management reads it as evidence a
                    dissatisfied segment exists — StrawGurt&apos;s market. The sampling distribution prices
                    that reading: <b>7.86% at n = 50</b> means the &quot;signal&quot; appears reasonably often
                    even when BlueGurt is genuinely fine. Small samples counsel caution.
                  </p>
                </StmCallout>
                <StmCallout kind="insight" title="The cannibalisation guard">
                  <p>
                    The flip side: P(X̄ ≤ 75) small also means <i>satisfied</i> populations rarely masquerade
                    as unhappy. Design the study large enough and a genuine ≤ 75 signal becomes strong
                    evidence — the launch case, priced.
                  </p>
                </StmCallout>
              </div>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The sample-size switcher" sub="Same population, three studies, three answers" />
        <Reveal>
          <MarrianNSwitcher />
        </Reveal>

        <StmReadStep n="03" title="The extended analysis" sub="Lecture's stretch question: P(75 ≤ X̄ ≤ 85) at n = 50" />
        <Reveal>
          <StmPanel label="A two-sided band on the sample mean">{`Z₁ = (75 − 80)/3.5355 = −1.414
Z₂ = (85 − 80)/3.5355 = +1.414

P(75 ≤ X̄ ≤ 85) = Φ(1.414) − Φ(−1.414)
                 = 2 × 0.9214 − 1
                 = 0.8427 ≈ 84.3%

By symmetry: P(X̄ ≥ 85) = 1 − 0.9214
             = 0.0786 — the same 7.86%,
             mirrored on the happy side.

The band the sample mean lives in 84%
of the time is exactly μ ± 5 — that is
what n = 50 buys.`}</StmPanel>
        </Reveal>

        <StmReadStep n="04" title="The managerial verdict" sub="What Marrian's statisticians should report" />
        <Reveal>
          <StmCallout kind="story" title="The memo">
            <p>
              At <b>n = 50</b>: a ≤ 75 mean arrives 7.86% of the time under a satisfied population — weak
              evidence; run it, but do not launch on one draw. At <b>n = 150</b>: the same signal carries{" "}
              <b>0.7%</b> probability of being noise — if 150 customers average 75 or less, the
              dissatisfied segment is real and StrawGurt has its market without cannibalising the top.
              Sample size is not bureaucracy: it is the <b>discriminative power</b> of the study — and it
              costs √n per unit of credibility.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Two case computations" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Marrian Dairies · check"
              q="Marrian raises the study from n = 50 to n = 150. The probability of a ≤ 75 sample mean falls from 7.86% to…"
              options={["≈ 0.72% — σx̄ shrank from 3.54 to 2.04, pushing Z to −2.45", "≈ 3.93% — halving, like σx̄", "≈ 15.7% — the tail doubles", "it stays 7.86% — μ and σ are unchanged"]}
              answer={0}
              explain="σx̄ = 25/√150 = 2.0412 → Z = −5/2.0412 = −2.449 → P ≈ 0.0072. The standard error shrinks with √n, so the same 5-point gap becomes 2.45σ of distance — deep enough in the tail that noise can rarely produce it."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Marrian Dairies · check"
              q="At n = 50, P(75 ≤ X̄ ≤ 85) = 84.3%. What does that band tell the launch team?"
              options={[
                "84% of n=50 studies will report a mean within ±5 of the true 80 — only luckier-than-15% draws look like a StrawGurt market",
                "84% of customers rate BlueGurt between 75 and 85",
                "the launch succeeds with 84% probability",
                "the population mean is within the band with 84% probability",
              ]}
              answer={0}
              explain="The band describes the SAMPLE MEAN's behaviour across repeated studies, not individual customers and not the (fixed) population mean. With 84% of studies landing inside ±5, a result outside the band is uncommon — which is precisely what makes a ≤ 75 result worth investigating."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>The setup</b>: μ = 80, σ = 25, threshold 75 — the sampling distribution of x̄ prices the
                &quot;dissatisfied-market&quot; signal.
              </>,
              <>
                <b>n = 50 → 7.86%</b>; n = 150 → <b>0.72%</b>; n = 400 → <b>0.003%</b> — σx̄ = σ/√n buys
                discriminative power at √n&apos;s price.
              </>,
              <>
                <b>The band</b>: P(75 ≤ X̄ ≤ 85) = 84.3% at n = 50, and the tails mirror — the same 7.86%
                on both sides.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   LECTURE 23 — THE SAMPLING LABORATORY (#practice-lab)
   ============================================================ */

function SeShrinkMachine() {
  const ns = [25, 50, 100, 200, 400];
  const [nIdx, setNIdx] = useState(1);
  const n = ns[nIdx];
  const se = 4000 / Math.sqrt(n);
  const band = 1.96 * se;
  const widthPct = Math.max(8, Math.min(96, (band / 2200) * 100));
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: STM_G.border, background: STM_G.wash }}>
      <p className="text-[.74rem] font-black uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
        The SE shrink machine — σ = 4,000 salaries, choose your n
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {ns.map((v, i) => (
          <button
            key={v}
            onClick={() => setNIdx(i)}
            aria-pressed={nIdx === i}
            className={`rounded-full border px-3.5 py-1.5 text-[.76rem] font-bold transition-all duration-200 ${
              nIdx === i ? "border-transparent text-white shadow-md" : "border-[#d9cdf8] bg-white text-[#5b21b6] hover:bg-[#f6f3fe]"
            }`}
            style={nIdx === i ? { background: STM_BTN_GRAD } : undefined}
          >
            n = {v}
          </button>
        ))}
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">σx̄ = 4000/√n</p>
          <motion.p key={se.toFixed(2)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: STM_G[800] }}>
            {se.toFixed(2)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">±1.96·σx̄ (95% band)</p>
          <motion.p key={band.toFixed(1)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: "#0f766e" }}>
            ±{band.toFixed(0)}
          </motion.p>
        </div>
        <div className="rounded-xl bg-white p-3 text-center" style={{ border: `1px solid ${STM_G.border}` }}>
          <p className="text-[.6rem] font-black uppercase tracking-[.12em] text-muted-warm">Band width</p>
          <motion.p key={(band * 2).toFixed(0)} initial={{ scale: 1.1 }} animate={{ scale: 1 }} className="font-mono text-xl font-black" style={{ color: "#8c2f2f" }}>
            {(band * 2).toFixed(0)}
          </motion.p>
        </div>
      </div>
      <div className="mt-3 flex h-7 items-center">
        <div className="relative h-6 w-full overflow-hidden rounded-full bg-white" style={{ border: `1px solid ${STM_G.border}` }}>
          <motion.div
            className="absolute inset-y-0 rounded-full"
            style={{ background: STM_BTN_GRAD, opacity: 0.85 }}
            initial={false}
            animate={{ left: `${(100 - widthPct) / 2}%`, right: `${(100 - widthPct) / 2}%` }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#8c2f2f]" />
        </div>
      </div>
      <p className="mt-1 text-center text-[.68rem] font-bold text-muted-warm">μ = 71,800 · the violet band is where 95% of sample means land</p>
      <p className="mt-2 text-[.74rem] leading-snug text-muted-warm">
        Fourfold n buys a halved standard error: 25 → 800, 100 → 400, 400 → 200. Precision is sold at{" "}
        <b>√n</b> per unit — the lecture&apos;s empirical means (71,000–72,500 at n = 50) sit comfortably
        inside the ±784 band this machine shows.
      </p>
    </div>
  );
}

export function StmPracticeLabSection() {
  return (
    <Section id="practice-lab">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 23 — sampling distributions, by hand in Excel"
          title={
            <>
              The <span className="grad-violet">sampling laboratory</span>
            </>
          }
          lead="Theory, verified with a spreadsheet. This lecture builds a population of 2,500 employees, draws dozens of random samples of 50, and watches the sample means cluster around μ = 71,800 — the sampling distribution made visible, plus the assessment update everyone was waiting for."
        />

        <StmReadStep n="01" title="Assessment update" sub="Announced in this lecture — in writing by week's end" />
        <Reveal>
          <div className="card-warm p-5">
            <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.14em]" style={{ color: STM_G[700] }}>
              <ClipboardList className="h-4 w-4" /> The quiz pattern, revised
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {[
                ["Count", "two quizzes total (not three) — best of the two scores counts"],
                ["Quiz 2 syllabus", "everything through Chapter 8 — interval estimation included"],
                ["Logistics", "dates and details communicated in writing by the end of the week"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-white p-3" style={{ border: `1px solid ${STM_G.border}` }}>
                  <p className="text-[.62rem] font-black uppercase tracking-[.12em] text-muted-warm">{k}</p>
                  <p className="mt-1 text-[.8rem] font-semibold leading-snug text-[#2b1d42]">{v}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[.78rem] leading-relaxed text-muted-warm">
              (Lecture 13&apos;s original plan — two 20-mark quizzes plus a combined syllabus quiz, best
              two of three — is superseded by this.)
            </p>
          </div>
        </Reveal>

        <StmReadStep n="02" title="The RANDBETWEEN recipe" sub="Draw a random sample of 50 salaries from 2,500" />
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01 · draw", "=RANDBETWEEN(1, 2500) in a helper column — one random ID per draw slot"],
            ["02 · fill", "copy the formula across all 50 rows of the sample"],
            ["03 · freeze", "Copy → Paste Special → Values Only — THE step everyone skips"],
            ["04 · sort", "sort the IDs ascending (filter → sort) to fetch matching salaries"],
            ["05 · measure", "=AVERAGE(B2:B51) — the sample mean of your 50 draws"],
            ["06 · repeat", "draw again: every independent sample yields a different x̄ — that IS the sampling distribution"],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={i * 45}>
              <div className="card-warm h-full p-4">
                <p className="text-[.72rem] font-black uppercase tracking-[.12em]" style={{ color: STM_G[700] }}>{k}</p>
                <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-3">
          <StmCallout kind="warn" title="The trap — why step 03 exists">
            <p>
              RANDBETWEEN is <b>volatile</b>: every edit, sort or recalculation redraws every number, so an
              unfrozen sample mutates while you analyse it. Paste-Special-Values converts the formulas to
              static IDs — the sample exists, the way a photograph stops the wind. Sort <i>after</i>{" "}
              freezing, never before.
            </p>
          </StmCallout>
        </Reveal>

        <StmReadStep n="03" title="What the draws showed" sub="The empirical sampling distribution" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="The population and the draws">{`population: 2,500 employee salaries
            μ = 71,800  ·  σ = 4,000

sample: n = 50, drawn repeatedly

observed sample means across draws:
   ≈ 71,000  ·  71,400  ·  71,900
   72,100  ·  72,500  …

all hovering near μ = 71,800 — none
wandering far: σx̄ = 4000/√50 ≈ 566`}</StmPanel>
          </Reveal>
          <Reveal delay={60}>
            <StmPanel label="Why random sampling is non-negotiable">{`· every element must carry an EQUAL chance
  of selection — otherwise the mean aims
  somewhere other than μ
· sampling is cheaper and faster than the
  census — sometimes the census is
  impossible outright
· each INDEPENDENT random sample gives a
  different mean: the wobble is not error
  in your work, it is the object of study`}</StmPanel>
          </Reveal>
        </div>

        <StmReadStep n="04" title="The SE shrink machine" sub="Buy precision with √n — live" />
        <Reveal>
          <SeShrinkMachine />
        </Reveal>

        <StmReadStep n="05" title="Check yourself" sub="Two lab questions" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Sampling lab · check"
              q="Your RANDBETWEEN sample keeps changing every time you sort the sheet. The fix is…"
              options={["Copy → Paste Special → Values Only — convert formulas to static numbers", "sort descending instead", "widen the columns", "replace RANDBETWEEN with AVERAGE"]}
              answer={0}
              explain="RANDBETWEEN is volatile — every recalculation redraws. Paste-Special-Values freezes the draw into static IDs so the sample survives sorting, filtering and analysis. Freeze first, sort second."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Sampling lab · check"
              q="Population salaries: μ = 71,800, σ = 4,000. At n = 50 the standard error is ≈ 566. At n = 200 it is…"
              options={["≈ 283 — quadrupling n halves σx̄", "≈ 1,132 — it doubles", "≈ 566 — n does not affect σx̄", "≈ 142"]}
              answer={0}
              explain="σx̄ = 4000/√200 = 282.8. The √n law: quadruple the sample, halve the standard error — the lab's whole moral in one line. (And note what it implies: halving the error again requires n = 800, not 300.)"
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>Assessment</b>: two quizzes, best-of-2, Quiz 2 through <b>Chapter 8</b> — details in
                writing by week&apos;s end.
              </>,
              <>
                <b>The recipe</b>: RANDBETWEEN → fill → <b>paste values</b> → sort → AVERAGE → repeat; the
                paste-values step is what makes the sample real.
              </>,
              <>
                <b>The sight</b>: n = 50 means hovering at 71,000–72,500 around μ = 71,800 — the sampling
                distribution, seen not imagined; σx̄ = 566 → 283 when n quadruples.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
