"use client";

/* ============================================================
   Statistics for Managers — PART 12 (shelf 05). The inference
   case file, now single-purpose after the PDF re-map:
   · Metropolitan Research (lecture 26) — transmission failures:
     mean 73,340, median 72,700, s = 24,849, the 95% interval
     [66,264, 80,416] and n ≈ 100 for a ±5,000 promise.
   Pelican Stores moved to #case-file-1 (StmParts13, lecture 8)
   and Weather Teddy moved to #toy-order (StmParts13, lecture 15).
   Every figure is from the lecture notes, hand-checked.
   ============================================================ */

import React from "react";
import { Car, TrendingDown } from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CASE — METROPOLITAN RESEARCH (TRANSMISSION FAILURES)
   ============================================================ */

function MetroCase() {
  return (
    <Reveal>
      <div className="card-warm overflow-hidden">
        <div className="p-5" style={{ background: "linear-gradient(135deg,#0e2a3d,#164a63)" }}>
          <p className="flex items-center gap-2 text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#a5d8ef]">
            <Car className="h-4 w-4" /> Case · Lecture 26 — a warranty question, computed
          </p>
          <p className="mt-2 font-display text-2xl font-black text-[#f0f9ff]">
            Metropolitan Research — how early do transmissions really fail?
          </p>
          <p className="mt-1 text-[.85rem] leading-relaxed text-[#c9e4f2]">
            Consumer complaints about <b>early transmission failures</b> reached Metropolitan
            Research, which pulled <b>50 repair records</b> from a Detroit transmission firm:
            kilometres driven before failure for each vehicle. The automaker&apos;s design
            standard says transmissions should hold <b>without early failure</b> — the data
            says otherwise.
          </p>
        </div>
        <div className="grid gap-4 p-5 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <StmPanel label="The descriptive read — n = 50">{`mean   x̄ = 73,340 miles
median    = 72,700 miles   (25 fail before, 25 after)
s         = 24,849 miles   ← huge spread
mode      = none — failures scattered, not clustered
skewness  ≈ 0+ — nearly symmetric

95% CI (σ unknown → t):
x̄ ± E = 73,340 ± 7,076
      = [66,264 , 80,416] miles`}</StmPanel>
            <StmPanel label="Planning the follow-up study">{`Target: ±5,000 miles at 95% confidence,
planning σ = 24,849 (from this sample):

n = (z·σ/E)²
  = (1.96 × 24,849 / 5,000)²
  = 95.26  →  round up → ≈ 100 vehicles

Cost per mile of precision: the mean cost
of the s = 24,849 spread is width — the
only cure is more data.`}</StmPanel>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border p-4" style={{ borderColor: "#e8b4a0", background: "#fdf0ea" }}>
              <p className="flex items-center gap-2 text-[.74rem] font-black uppercase tracking-[.14em] text-[#b3402c]">
                <TrendingDown className="h-4 w-4" /> The red-flag arithmetic
              </p>
              <p className="mt-2 text-[.86rem] leading-relaxed text-[#2b2014]">
                <b>19 vehicles failed below 66,264</b> — earlier than the lower confidence bound —
                and <b>18 failed above 80,416</b>. The mean of ~73,000 hides a heavy tail of{" "}
                <b>early failures</b>, and those are the warranty-killer: averages comfort,
                distributions decide.
              </p>
            </div>
            <StmCallout kind="insight" title="Where the analysis goes next">
              <p>
                Supply side: <b>production batches, material quality, plants, suppliers</b>.
                Demand side: <b>driver behaviour, terrain, climate, maintenance</b>. Layer those
                variables on with regression or ML models and correlate against failure mileage —
                the univariate answer here is exactly where the <i>next</i> statistics course
                begins.
              </p>
            </StmCallout>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ============================================================
   THE SECTION — CASE FILE II (Metropolitan Research)
   ============================================================ */

export function StmCaseFile2Section() {
  return (
    <Section id="case-file-2">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Lecture 26 — the transmission file"
          title={
            <>
              Metropolitan Research — <span className="grad-violet">the warranty audit</span>
            </>
          }
          lead="The course's last full case: a consumer research firm, fifty repair records, and a mean that looks acceptable until you meet the interval's lower bound. Descriptive statistics opens the file, a t-interval prices the uncertainty, and the early-failure tail closes the argument."
        />

        <StmReadStep n="01" title="Case — Metropolitan Research" sub="An interval estimate — and the early-failure red flag" />
        <MetroCase />

        <StmReadStep n="02" title="Check yourself" sub="One case, two instincts" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmQuiz
              source="Case file II · check"
              q="Metropolitan's interval is [66,264, 80,416] and 19 of 50 cars failed below 66,264. The managerial lesson is…"
              options={[
                "averages hide the early-failure tail — distributions drive warranty risk",
                "the sample mean should be replaced by the mode",
                "the confidence interval proves no quality problem exists",
                "the sample size of 50 is already sufficient — no follow-up needed",
              ]}
              answer={0}
              explain="The interval describes the centre of the population; the 19 early failures below the lower bound are the warranty exposure. The case closes by planning n ≈ 100 for tighter precision — and by listing the supply- and demand-side variables the next study must capture."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Case file II · check"
              q="To promise ±5,000 miles at 95% confidence with planning σ = 24,849, Metropolitan needs…"
              options={["n = (1.96 × 24,849 / 5,000)² ≈ 95.3 → 100 vehicles", "n = 24,849 / 5,000 ≈ 5 vehicles", "n = 1.96 × 24,849 ≈ 48,700 vehicles", "n = 50 — the current sample suffices"]}
              answer={0}
              explain="n = (z·σ/E)² = (1.96 × 24,849 / 5,000)² = 95.26, always rounded UP so the promise holds. The σ used is the planning value recovered from the pilot study — exactly why this sample of 50 was worth taking."
            />
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <Takeaways
            items={[
              <>
                <b>The descriptive read</b>: x̄ = 73,340, median = 72,700, s = 24,849, no mode, skew ≈ 0 —
                spread is the headline, not the mean.
              </>,
              <>
                <b>The interval</b>: x̄ ± 7,076 → <b>[66,264, 80,416]</b>; 19 early failures below the bound
                are the warranty story.
              </>,
              <>
                <b>The follow-up</b>: n = (1.96 × 24,849/5,000)² ≈ 95.3 → <b>100 vehicles</b> for a ±5,000
                promise — then supply- and demand-side variables explain the tail.
              </>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
