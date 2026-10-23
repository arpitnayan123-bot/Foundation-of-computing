"use client";

/* ============================================================
   Statistics for Managers — PART 7 of 7 (shelf 05). Chapter 5's
   three formula-driven distributions: the binomial experiment
   (four properties, the Evans Electronics tree, E(x) = np),
   the Poisson distribution (occurrences per interval — Mercy
   Hospital), and the hypergeometric distribution (trials that
   are NOT independent — Neveready's batteries), closed by the
   chapter's in-class practice set.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Calendar,
  CircleDot,
  GitBranch,
  Repeat,
  Split,
  Timer,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import { STM_G, STM_BTN_GRAD, StmCallout, StmPanel, StmQuiz, StmReadStep } from "@/components/stm/StmParts1";

/* ============================================================
   CHAPTER 5 · MOVEMENT 2 — BINOMIAL · POISSON · HYPERGEOMETRIC
   ============================================================ */

function EvansTree() {
  // 1st worker leaves/stays → 2nd → 3rd; x counts successes
  const nodes = [
    { x: 150, y: 46, p: "Leaves (.1)" },
    { x: 150, y: 172, p: "Stays (.9)" },
    { x: 320, y: 16, from: 0, p: "L (.1)" },
    { x: 320, y: 64, from: 0, p: "S (.9)" },
    { x: 320, y: 142, from: 1, p: "L (.1)" },
    { x: 320, y: 202, from: 1, p: "S (.9)" },
  ];
  const leaves = [
    { x: 500, y: 6, from: 2, xp: "x = 3", prob: ".0010" },
    { x: 500, y: 38, from: 2, xp: "x = 2", prob: ".0090" },
    { x: 500, y: 78, from: 3, xp: "x = 2", prob: ".0090" },
    { x: 500, y: 110, from: 4, xp: "x = 2", prob: ".0090" },
    { x: 500, y: 142, from: 3, xp: "x = 1", prob: ".0810", hot: true },
    { x: 500, y: 174, from: 4, xp: "x = 1", prob: ".0810", hot: true },
    { x: 500, y: 206, from: 5, xp: "x = 1", prob: ".0810", hot: true },
    { x: 500, y: 238, from: 5, xp: "x = 0", prob: ".7290" },
  ];
  return (
    <svg viewBox="0 0 640 262" className="h-auto w-full" role="img" aria-label="Evans Electronics tree diagram: three workers each leave with probability 0.1 or stay with 0.9; the three paths giving exactly one departure each carry probability 0.0810, totalling 0.243">
      {[
        { x1: 120, y1: 16, x2: 120, y2: 246 },
        { x1: 292, y1: 4, x2: 292, y2: 250 },
        { x1: 472, y1: 4, x2: 472, y2: 250 },
      ].map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#c4b5fd" strokeWidth="2" strokeDasharray="5 5" />
      ))}
      {nodes.map((n, i) => (
        <g key={`n-${i}`}>
          <motion.line
            x1={n.from === undefined ? 118 : nodes[n.from].x + 6}
            y1={n.from === undefined ? 128 : nodes[n.from].y + 8}
            x2={n.x - 6} y2={n.y + 8}
            stroke="#7c3aed" strokeWidth="1.8"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          />
          <circle cx={n.x} cy={n.y + 8} r="4" fill="#8b5cf6" />
          <text x={n.x + 8} y={n.y + 4} fontSize="11.5" fontWeight="600" fill="#4c3a80">{n.p}</text>
        </g>
      ))}
      {leaves.map((l, i) => {
        const src = nodes[l.from];
        return (
          <g key={`l-${i}`}>
            <motion.line
              x1={src.x + 6} y1={src.y + 8} x2={l.x - 6} y2={l.y + 8}
              stroke={l.hot ? "#b3402c" : "#7c3aed"} strokeWidth={l.hot ? 2.2 : 1.6}
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
            />
            <text x={l.x} y={l.y + 4} fontSize="11.5" fontWeight={l.hot ? 800 : 600} fill={l.hot ? "#b3402c" : "#3e2c1d"}>
              {l.xp} · {l.prob}
            </text>
          </g>
        );
      })}
      <text x="60" y="258" fontSize="10.5" fill="#8a7fae">1st Worker</text>
      <text x="238" y="258" fontSize="10.5" fill="#8a7fae">2nd Worker</text>
      <text x="416" y="258" fontSize="10.5" fill="#8a7fae">3rd Worker → outcomes</text>
    </svg>
  );
}

export function StmBinomialSection() {
  return (
    <Section id="binomial">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Chapter 5 · sections 5.5–5.7"
          title={
            <>
              The three <span className="grad-violet">workhorses</span>
            </>
          }
          lead="Binomial counts successes across identical independent trials; Poisson counts arrivals over an interval; hypergeometric samples without replacement. Each comes with its own probability function — and its own signature identity."
        />

        {/* binomial */}
        <StmReadStep n="01" title="Binomial — four properties" sub="Identical trials · success/failure · constant p · independence" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Repeat, t: "1 · n identical trials", d: "The experiment consists of a sequence of n identical trials." },
            { i: Split, t: "2 · Two outcomes", d: "Success and failure are possible on each trial." },
            { i: CircleDot, t: "3 · Constant p", d: "The probability of success p does not change from trial to trial — the stationarity assumption." },
            { i: GitBranch, t: "4 · Independence", d: "The trials are independent." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: STM_BTN_GRAD }}>
                  <c.i className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.86rem] font-extrabold leading-tight text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.76rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <StmPanel label="The binomial probability function — anatomy">{`          n!
f(x) = ──────────── · pˣ (1 − p)⁽ⁿ⁻ˣ⁾
       x!(n − x)!

└──────── number of experimental outcomes
          providing exactly x successes in n trials ────────┘

└── probability of a particular sequence of trial
    outcomes with x successes in n trials ──┘

where: x = number of successes · p = probability of success
on one trial · n = number of trials · n! = n(n−1)(n−2)…(2)(1)`}</StmPanel>
        </Reveal>

        <StmReadStep n="02" title="Evans Electronics — the tree" sub="p = 0.1 turnover, n = 3 employees, P(exactly 1 leaves)?" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <EvansTree />
            <p className="mt-3 text-[.82rem] leading-relaxed text-muted-warm">
              Three sequences give one success — (S,F,F), (F,S,F), (F,F,S) — each worth
              (0.1)(0.9)(0.9) = <b>0.081</b>, so f(1) = <b>0.243</b>. Or by formula: f(1) =
              [3!/(1!·2!)]·(0.1)¹(0.9)² = 3(0.081). The tree&rsquo;s full column: f(0) = .7290,
              f(1) = .2430, f(2) = .0270, f(3) = .0010 — summing to 1.
            </p>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <Reveal>
            <StmPanel label="Binomial summaries — Evans">{`E(x)  = μ  = np          = 3(.1) = 0.3 employees
Var(x) = σ² = np(1 − p)   = 3(.1)(.9) = 0.27
σ = √0.27 = 0.52 employees`}</StmPanel>
          </Reveal>
          <Reveal delay={100}>
            <StmCallout kind="insight" title="Tables are almost unnecessary">
              Statisticians have developed binomial probability and cumulative probability tables
              (n = 3, x = 1, p = .10 → .2430), but with modern calculators and statistical
              software packages, such tables are almost unnecessary — Excel&rsquo;s{" "}
              <b>=BINOM.DIST(x, n, p, FALSE/TRUE)</b> computes both.
            </StmCallout>
          </Reveal>
        </div>

        {/* poisson */}
        <StmReadStep n="03" title="Poisson — occurrences per interval" sub="Time or space, no upper limit, and μ = σ²" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold text-[#3e2c1d]">
                <Timer className="h-4 w-4" style={{ color: STM_G[700] }} /> Two properties
              </p>
              <ol className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li><b>1.</b> The probability of an occurrence is the same for any two intervals of equal length.</li>
                <li><b>2.</b> The occurrence or nonoccurrence in any interval is independent of the occurrence or nonoccurrence in any other interval.</li>
              </ol>
              <p className="mt-2 text-[.82rem] leading-relaxed text-muted-warm">
                The variable may assume an <b>infinite sequence</b> (x = 0, 1, 2, …); in practice
                f(x) eventually becomes approximately zero, so larger values are negligible.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-3">
              <StmPanel label="Poisson probability function">{`       μˣ e^(−μ)
f(x) = ─────────
          x!

μ = mean number of occurrences in the interval
e = 2.71828 · x! = x(x−1)(x−2)…(2)(1)`}</StmPanel>
              <StmCallout kind="story" title="Where Poisson lives">
                Number of knotholes in 14 linear feet of pine board · vehicles arriving at a toll
                booth in one hour · Bell Labs used the Poisson distribution to model the arrival
                of phone calls.
              </StmCallout>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid items-start gap-4 md:grid-cols-2">
            <StmPanel label="Mercy Hospital — worked">{`Patients arrive at the ER at 6 per hour on
weekend evenings. P(exactly 4 arrivals in
30 minutes)?

μ = 6/hour = 3 per half-hour · x = 4

f(4) = 3⁴ (2.71828)⁻³ / 4!
     = 0.1680`}</StmPanel>
            <div className="space-y-3">
              <StmCallout kind="insight" title="The signature identity">
                For the Poisson distribution the <b>mean and variance are equal</b>: μ = σ². For
                the 30-minute periods, μ = σ² = <b>3</b>.
              </StmCallout>
              <div className="card-warm p-4">
                <p className="text-[.8rem] font-bold text-[#3e2c1d]">Poisson probabilities — arrivals per 30 min</p>
                <div className="mt-3 flex h-24 items-end gap-1.5">
                  {[.05, .149, .224, .224, .168, .101, .05, .022, .008, .003].map((p, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{ background: "linear-gradient(180deg,#8b5cf6,#5b21b6)" }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${p * 100 * 3}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.06 }}
                      title={`P(${i}) = ${p}`}
                    />
                  ))}
                </div>
                <div className="mt-1 flex gap-1.5">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <span key={i} className="flex-1 text-center font-mono text-[.58rem] text-[#8a7fae]">{i}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* hypergeometric */}
        <StmReadStep n="04" title="Hypergeometric — sampling without replacement" sub="Trials NOT independent; p changes from trial to trial" />
        <Reveal>
          <div className="grid items-start gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <StmPanel label="The hypergeometric probability function">{`       ⎛r⎞ ⎛N − r⎞
       ⎜ ⎟ ⎜     ⎟
       ⎝x⎠ ⎝n − x⎠
f(x) = ───────────          for 0 ≤ x ≤ r
         ⎛N⎞
         ⎝ ⎟
         ⎝n⎠   (i.e. C(r,x)·C(N−r,n−x) / C(N,n))

number of ways x successes can be selected from r
successes · n−x failures from N−r failures · all
divided by the ways n elements come from N.`}</StmPanel>
              <StmCallout kind="why" title="Validity">
                Only values of x where <b>x ≤ r</b> and <b>n − x ≤ N − r</b> are valid —
                otherwise the corresponding f(x) equals 0.
              </StmCallout>
            </div>
            <div className="space-y-3">
              <StmCallout kind="story" title="Neveready's batteries">
                Bob Neveready removed two dead batteries from a flashlight and inadvertently
                mingled them with the two good replacements — four identical-looking batteries.
                He randomly selects two. P(both good)?
              </StmCallout>
              <StmPanel label="Worked — N = 4, r = 2, n = 2, x = 2">{`f(2) = C(2,2)·C(2,0) / C(4,2)
     = (1)(1) / 6 = 0.167

E(x) = n(r/N) = 2(2/4) = 1
Var(x) = n(r/N)(1 − r/N)·(N−n)/(N−1)
       = 2(.5)(.5)(2/3) = 0.333`}</StmPanel>
              <StmCallout kind="insight" title="The binomial bridge">
                With p = r/N on the first trial: when the population size is large,{" "}
                <b>(N − n)/(N − 1) → 1</b>, so E(x) = np and Var(x) = np(1 − p) — a{" "}
                <b>hypergeometric distribution can be approximated by a binomial</b> with
                probability of success p = r/N.
              </StmCallout>
            </div>
          </div>
        </Reveal>

        <StmReadStep n="05" title="In-class practice — the Excel sheet" sub="The chapter's own drills, with their hints" />
        <div className="grid gap-3 md:grid-cols-3">
          <Reveal>
            <StmQuiz
              source="Practice · Q5–Q6 — binomial"
              q="A process makes 3% defective parts; a sample of 5 is drawn. A salesperson contacts 8 customers daily with a 10% chance per sale. Compute P(x = 2) in each setting."
              options={[".008 and .149", ".053 and .033", ".168 and .243", ".075 and .081"]}
              answer={0}
              explain="Binomial both times: C(5,2)(.03)²(.97)³ ≈ .0082 (Excel =BINOM.DIST(2,5,.03,FALSE)); C(8,2)(.1)²(.9)⁶ ≈ .1488. Expected sales = np = 0.8; variance = np(1−p) = 0.72."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Practice · Q7 — Poisson"
              q="A hospital admits an average of 7 patients per hour. For the next hour, which is P(exactly 7 arrivals)? And if the window widens to 2 hours, the new μ is…"
              options={[".149 · μ = 7", "about .149 · μ = 14", ".001 · μ = 49", ".5 · μ = 3.5"]}
              answer={1}
              explain="f(7) = 7⁷e⁻⁷/7! ≈ .149 (Excel =POISSON.DIST(7,7,FALSE)). Widen the window and the mean doubles: μ = 14 per 2 hours — intervals of equal length carry equal means."
            />
          </Reveal>
          <Reveal>
            <StmQuiz
              source="Practice · Q10 — the decision"
              q="MNM Company: demand 1,000–5,000 units with E(x) = 3,000; each unit costs $8 and sells for $10. Management locks in expected demand but sells only 2,000. The logic says…"
              options={["produce 3,000 always", "compare expected profit vs stockout and overage costs before locking production", "produce 1,000", "demand has no variance"]}
              answer={1}
              explain="E(x) = Σx·f(x) = 3,000 with σ² = Σ(x−E)²·f(x). Locking 3,000 units when only 2,000 sell means the profit math (revenue $10/unit − cost $8/unit) must be weighed against the demand distribution — expected value alone isn't the decision."
            />
          </Reveal>
        </div>

        <Takeaways
          items={[
            <>Binomial: 4 properties, f(x) = <b>C(n,x)pˣ(1−p)ⁿ⁻ˣ</b>, E = np, Var = np(1−p) — Evans: .243, .3, .27.</>,
            <>Poisson: arrivals per interval, f(x) = <b>μˣe^(−μ)/x!</b>, and <b>μ = σ²</b> — Mercy&rsquo;s f(4) = .1680.</>,
            <>Hypergeometric: <b>no independence, changing p</b>, finite-population correction — Neveready&rsquo;s 1/6; large N → binomial.</>,
          ]}
        />
      </div>
    </Section>
  );
}
