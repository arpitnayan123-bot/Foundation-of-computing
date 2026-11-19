"use client";

/* ============================================================
   ATB · PART I — Lecture 4 (four chapters) + Lecture 5 (two).
   Rebuilt word-for-word from the verified compendium
   (scripts/atb_lectures/L04.md, L05.md) at full transcript depth.
   Every figure = AtbFigure (figcaption says what to notice);
   every workflow = AtbStepper with the real data in its frames.
   ============================================================ */

import { motion } from "framer-motion";
import {
  Check,
  Coins,
  Cog,
  Crosshair,
  Globe,
  History,
  Languages,
  Repeat2,
  Shuffle,
  Split,
  X,
} from "lucide-react";
import { Callout, Practice, Quiz, ReadStep, Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  ATB_OLIVE,
  AtbCells,
  AtbFigure,
  AtbPill,
  AtbStackCol,
  AtbStepper,
} from "@/components/atb/AtbStepper";
import { eyebrowOf } from "@/components/atb/lectures";

/* ============================================================
   L04 · CHAPTER 1 — FINITENESS (id="finiteness")
   Valid twin: the classroom student count. Broken twin: the
   retail store customer counter that never ends.
   ============================================================ */

const ATB_NEUTRAL_SVG = "#9aa7b5";

function FinitenessTwinSVG() {
  return (
    <svg viewBox="0 0 640 230" className="h-auto w-full" role="img" aria-label="Two loop shapes side by side: the classroom count terminates at student N and prints the total, the store counter loops forever with no exit">
      <defs>
        <marker id="atbFinA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_OLIVE} /></marker>
        <marker id="atbFinB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_NEUTRAL_SVG} /></marker>
      </defs>
      {/* working twin — olive */}
      <text x={150} y={18} textAnchor="middle" fontSize={12} fontWeight={800} fill="#44621d">CLASSROOM COUNT — finite ✓</text>
      <rect x={110} y={30} width={80} height={26} rx={13} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={47} textAnchor="middle" fontSize={10} fontWeight={700} fill="#3c521b">start</text>
      <path d="M150 56 V 70" stroke={ATB_OLIVE} strokeWidth={1.8} markerEnd="url(#atbFinA)" fill="none" />
      <rect x={95} y={72} width={110} height={30} rx={4} fill="#fffaf1" stroke={ATB_OLIVE} />
      <text x={150} y={91} textAnchor="middle" fontSize={10} fontWeight={700} fill="#2b2014">count one student</text>
      <path d="M205 87 H 236 V 150 H 176" stroke={ATB_OLIVE} strokeWidth={1.8} fill="none" markerEnd="url(#atbFinA)" />
      <text x={238} y={120} fontSize={9} fontWeight={700} fill="#44621d">next desk →</text>
      <path d="M150 102 V 118" stroke={ATB_OLIVE} strokeWidth={1.8} markerEnd="url(#atbFinA)" fill="none" />
      <polygon points="150,120 186,138 150,156 114,138" fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={141} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#3c521b">last student?</text>
      <text x={96} y={142} textAnchor="end" fontSize={9} fontWeight={700} fill="#44621d">no ↺ count on</text>
      <path d="M150 156 V 174" stroke={ATB_OLIVE} strokeWidth={1.8} markerEnd="url(#atbFinA)" fill="none" />
      <text x={160} y={168} fontSize={9} fontWeight={800} fill="#44621d">yes</text>
      <rect x={100} y={176} width={100} height={26} rx={4} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={193} textAnchor="middle" fontSize={10} fontWeight={800} fill="#3c521b">display total</text>
      <path d="M150 202 V 214" stroke={ATB_OLIVE} strokeWidth={1.8} markerEnd="url(#atbFinA)" fill="none" />
      <rect x={110} y={214} width={80} height={14} rx={7} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={224} textAnchor="middle" fontSize={8.5} fontWeight={800} fill="#3c521b">END — countable steps</text>
      {/* broken twin — neutral, never red */}
      <text x={480} y={18} textAnchor="middle" fontSize={12} fontWeight={800} fill="#5d6670">STORE COUNTER — infinite ✗</text>
      <rect x={440} y={30} width={80} height={26} rx={13} fill="#f2efe8" stroke={ATB_NEUTRAL_SVG} />
      <text x={480} y={47} textAnchor="middle" fontSize={10} fontWeight={700} fill="#4d555e">start</text>
      <path d="M480 56 V 74" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.8} markerEnd="url(#atbFinB)" fill="none" />
      <polygon points="480,76 522,96 480,116 438,96" fill="#f2efe8" stroke={ATB_NEUTRAL_SVG} />
      <text x={480} y={93} textAnchor="middle" fontSize={9} fontWeight={700} fill="#3d444c">customer</text>
      <text x={480} y={105} textAnchor="middle" fontSize={9} fontWeight={700} fill="#3d444c">entered?</text>
      <text x={530} y={90} fontSize={9} fontWeight={700} fill="#5d6670">no ↺ check again</text>
      <path d="M522 96 C 560 96 566 60 522 60" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.8} fill="none" markerEnd="url(#atbFinB)" strokeDasharray="4 3" />
      <text x={536} y={122} fontSize={9} fontWeight={800} fill="#5d6670">yes → count, then</text>
      <path d="M480 116 V 134" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.8} markerEnd="url(#atbFinB)" fill="none" />
      <rect x={430} y={136} width={100} height={26} rx={4} fill="#f2efe8" stroke={ATB_NEUTRAL_SVG} />
      <text x={480} y={153} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#3d444c">count + back to step 1</text>
      <path d="M430 149 H 400 V 88 H 436" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.8} fill="none" markerEnd="url(#atbFinB)" strokeDasharray="4 3" />
      <text x={480} y={182} textAnchor="middle" fontSize={10} fontWeight={800} fill="#5d6670">no endpoint — loops forever</text>
      <text x={480} y={200} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#44621d">fix: reset to zero at midnight</text>
      <text x={480} y={216} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8a6b45">→ finite within each period</text>
    </svg>
  );
}

export function AtbFinitenessSection() {
  return (
    <Section id="finiteness">
      <SectionHead
        eyebrow={eyebrowOf("finiteness")}
        title={
          <>
            Finiteness — the algorithm must <span className="grad-text">end</span>
          </>
        }
        lead="Property 1 of the five core technical characteristics: an algorithm must terminate after a countable, finite number of steps — without looping indefinitely."
      />

      <ReadStep n="1" title="The valid twin — counting a classroom" sub="Start at the first desk, count each student exactly once, move desk by desk, stop at the last student and display the total." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The steps are countable and the endpoint is defined: whether the room holds <strong>40</strong> students or
        an auditorium holds <strong>600</strong>, the count finishes. Finiteness does not mean “few steps” — it means
        the steps are <em>countable</em> and the algorithm <em>stops</em>.
      </p>

      <AtbStepper
        title="What happens next? — the classroom count, traced"
        steps={[
          {
            label: "Start at the first student. Count = 1 — exactly once.",
            detail: "Each student is counted once; the counter is the data.",
            frame: <AtbCells values={[1, null, null, null, null]} tones={["active", "ghost", "ghost", "ghost", "ghost"]} labels={["desk 1", "desk 2", "desk 3", "desk 4", "desk 5"]} />,
          },
          {
            label: "Move to the next desk. Count = 2, then 3, 4…",
            detail: "The loop body repeats — but each repetition is one more countable step.",
            frame: <AtbCells values={[1, 2, 3, 4, null]} tones={["done", "done", "done", "active", "ghost"]} labels={["✓", "✓", "✓", "desk 4", "desk 5"]} />,
          },
          {
            label: "Decision: is this the last student? No → keep counting.",
            detail: "The diamond asks the question every pass; the answer is knowable because the room is finite.",
            frame: <AtbCells values={[1, 2, 3, 4, 5]} tones={["done", "done", "done", "done", "active"]} labels={["✓", "✓", "✓", "✓", "desk 5"]} />,
          },
          {
            label: "Yes — display the total and STOP. 5 steps for 5 students.",
            detail: "Terminated after a countable, finite number of steps. Finiteness holds.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbCells values={[1, 2, 3, 4, 5]} tones={["done", "done", "done", "done", "done"]} />
                <AtbPill k="total" v={5} tone="active" />
                <AtbPill k="state" v="ENDED" tone="active" />
              </div>
            ),
          },
        ]}
      />

      <ReadStep n="2" title="The broken twin — the retail store counter" sub="Check if a customer has entered; if no, check again; if yes, count and return to step 1. No defined endpoint — an infinite loop." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The system continuously checks for incoming customers and there is no condition under which it stops on its
        own — it violates finiteness and, running forever, can never hand you a meaningful total. The official fix
        from the lecture: <strong>add a reset condition</strong> — “reset the counter to zero at midnight” — so the
        algorithm becomes finite within each period and the day’s data becomes meaningful.
      </p>

      <AtbFigure notice="the working loop has an exit diamond and a display step; the broken one only ever re-checks — its dashed path circles forever until you bolt on the midnight reset.">
        <FinitenessTwinSVG />
      </AtbFigure>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="A stock monitor that ‘checks whether a customer has entered, and if no, checks again’ violates which property?"
          options={["Generality", "Finiteness", "Determinism", "Well-defined inputs"]}
          answer={1}
          explain="It never ends — there is no defined endpoint, so the step count is unbounded. Finiteness demands termination after a countable, finite number of steps."
          source="Lecture 4 · finiteness"
        />
        <Quiz
          q="The lecture’s official repair for the store counter is…"
          options={["Delete the counter", "Add a reset condition (reset to zero at midnight)", "Count faster", "Count only paying customers"]}
          answer={1}
          explain="Adding ‘reset counter to zero at midnight’ bounds the loop within each time period, making the algorithm finite and the collected data meaningful."
          source="Lecture 4 · finiteness"
        />
      </div>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>Finiteness = the algorithm <strong>ends after a countable, finite number of steps</strong>, without looping indefinitely.</>,
            <>Valid twin: the classroom count — stop at the last student, display the total.</>,
            <>Broken twin: the store counter that re-checks forever — repaired by a <strong>reset condition</strong> (midnight).</>,
            <>An algorithm that never ends also compromises <strong>effectiveness</strong> — the properties interlock.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L04 · CHAPTER 2 — DEFINITENESS (id="definiteness")
   Valid twin: the average formula. Broken twin: the ambiguous
   tea. Plus the AGI connection.
   ============================================================ */

function DefinitenessTwinSVG() {
  return (
    <svg viewBox="0 0 640 210" className="h-auto w-full" role="img" aria-label="Definiteness twins: an exact average formula computing one answer versus a tea recipe whose words some, little, a while branch into three different cups">
      <defs>
        <marker id="atbDefA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_OLIVE} /></marker>
        <marker id="atbDefB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_NEUTRAL_SVG} /></marker>
      </defs>
      {/* exact */}
      <text x={150} y={18} textAnchor="middle" fontSize={12} fontWeight={800} fill="#44621d">EXACT — one interpretation ✓</text>
      <rect x={60} y={34} width={180} height={44} rx={8} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={52} textAnchor="middle" fontSize={11} fontWeight={800} fill="#3c521b">Average = (M1+M2+M3+M4+M5)</text>
      <text x={150} y={68} textAnchor="middle" fontSize={11} fontWeight={800} fill="#3c521b">÷ 5</text>
      <path d="M150 78 V 96" stroke={ATB_OLIVE} strokeWidth={2} markerEnd="url(#atbDefA)" fill="none" />
      <rect x={98} y={98} width={104} height={30} rx={8} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={150} y={117} textAnchor="middle" fontSize={11} fontWeight={800} fill="#3c521b">display average</text>
      <text x={150} y={152} textAnchor="middle" fontSize={10} fontWeight={700} fill="#44621d">every reader computes the same number</text>
      <text x={150} y={172} textAnchor="middle" fontSize={14} fontWeight={900} fill="#44621d">= 62</text>
      {/* ambiguous */}
      <text x={470} y={18} textAnchor="middle" fontSize={12} fontWeight={800} fill="#5d6670">AMBIGUOUS — many interpretations ✗</text>
      {[
        { y: 34, w: "“Take some tea leaves”" },
        { y: 62, w: "“Add a little milk”" },
        { y: 90, w: "“Boil for a while”" },
        { y: 118, w: "“Add sugar if needed”" },
      ].map((r) => (
        <g key={r.y}>
          <rect x={360} y={r.y} width={160} height={22} rx={6} fill="#f2efe8" stroke={ATB_NEUTRAL_SVG} />
          <text x={440} y={r.y + 15} textAnchor="middle" fontSize={10} fontWeight={700} fill="#3d444c">{r.w}</text>
        </g>
      ))}
      <path d="M520 45 C 560 45 570 70 588 86" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.6} fill="none" markerEnd="url(#atbDefB)" />
      <path d="M520 73 H 596" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.6} fill="none" markerEnd="url(#atbDefB)" />
      <path d="M520 101 C 560 101 570 106 588 100" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.6} fill="none" markerEnd="url(#atbDefB)" />
      <text x={612} y={90} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#5d6670">some → 1 spoon?</text>
      <text x={612} y={106} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#5d6670">little → 40 ml? 100 ml?</text>
      <text x={440} y={158} textAnchor="middle" fontSize={10} fontWeight={700} fill="#5d6670">different people — different results</text>
      <text x={440} y={178} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#8a6b45">good recipes say “250 ml of milk”, not “a little”</text>
    </svg>
  );
}

export function AtbDefinitenessSection() {
  return (
    <Section id="definiteness">
      <SectionHead
        eyebrow={eyebrowOf("definiteness")}
        title={
          <>
            Definiteness — <span className="grad-text">exactly one</span> interpretation
          </>
        }
        lead="Property 2: each step must be clearly defined with no ambiguity. “Some”, “a little” and “a while” are subjective — machines cannot guess them."
      />

      <ReadStep n="1" title="The valid twin — the average of marks" sub="Input five marks, compute (M1+M2+M3+M4+M5) ÷ 5, display, stop. Every step has precisely one meaning." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        Numerical operations, exact thresholds, an exact display. Two different people executing the steps — or the
        same machine twice — land on the same result. That is definiteness: <strong>no room for multiple
        interpretations</strong>.
      </p>

      <ReadStep n="2" title="The broken twin — the ambiguous tea" sub="“Take some tea leaves, add a little milk, boil for a while, add sugar if needed.” Four steps, four ambiguities." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        “Some”, “little” and “a while” are subjective interpretations — different people produce different results,
        and first-time learners cannot follow the recipe without outside knowledge. Good recipes and good algorithms
        specify exact measurements: <strong>“250 ml of milk”</strong> instead of “a little milk”. Machines and
        computers cannot make subjective interpretations — they require precise, quantified instructions.
      </p>

      <AtbFigure notice="the exact formula funnels into one number — 62 — while every subjective phrase in the tea recipe fans out into as many outcomes as there are cooks.">
        <DefinitenessTwinSVG />
      </AtbFigure>

      <AtbStepper
        title="What happens next? — two cooks follow the same ambiguous recipe"
        steps={[
          {
            label: "“Take some tea leaves.” Cook A reads one spoon; Cook B reads three.",
            detail: "The word has no quantity — interpretation is already diverging.",
            frame: (
              <div className="flex flex-wrap gap-6">
                <AtbStackCol items={["1 spoon"]} note="Cook A · ‘some’" />
                <AtbStackCol items={["3 spoons"]} note="Cook B · ‘some’" tone="pivot" />
              </div>
            ),
          },
          {
            label: "“Add a little milk.” A pours 40 ml; B pours 100 ml.",
            detail: "Same instruction, different data — indefiniteness compounds.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="Cook A milk" v="40 ml" />
                <AtbPill k="Cook B milk" v="100 ml" tone="active" />
                <AtbPill k="recipe said" v="‘a little’" tone="broken" />
              </div>
            ),
          },
          {
            label: "“Boil for a while.” A brews 3 minutes; B brews 9.",
            detail: "Time has no number either — every subjective word widens the gap.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="Cook A boil" v="3 min" />
                <AtbPill k="Cook B boil" v="9 min" tone="active" />
              </div>
            ),
          },
          {
            label: "Two cups, one recipe — the outputs disagree.",
            detail: "A machine following this ‘algorithm’ could not even say which cup is correct. Definiteness is broken.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="cup A" v="weak, milky" />
                <AtbPill k="cup B" v="strong, stewed" tone="active" />
                <AtbPill k="agreement" v="none" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <Reveal className="mt-6">
        <Callout kind="insight" title="The AGI connection">
          The challenge of creating artificial general intelligence stems partly from this property. Humans easily
          interpret ambiguous instructions like “come near me”; machines require explicit quantitative
          specifications. Current AI systems work well with specific, definite tasks but struggle with ambiguous,
          general-purpose instructions — definiteness is exactly where the difficulty lives.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="“Add sugar if needed” violates…"
          options={["Generality", "Definiteness", "Feasibility", "Finiteness"]}
          answer={1}
          explain="“If needed” is not precisely defined — two people (or machines) would act differently. That is a failure of definiteness (unambiguity)."
          source="Lecture 4 · definiteness"
        />
        <Quiz
          q="Why is “250 ml of milk” a definiteness repair while “a little milk” is not?"
          options={["It is shorter", "It has exactly one interpretation", "It uses metric units", "Milk is a variable"]}
          answer={1}
          explain="A quantity with a unit admits a single reading — every executor (human or machine) pours the same 250 ml. ‘A little’ invites as many readings as there are readers."
          source="Lecture 4 · definiteness"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L04 · CHAPTER 3 — WELL-DEFINED INPUTS & OUTPUTS
   (id="inputs-outputs")
   ============================================================ */

function LoanDecisionSVG() {
  return (
    <svg viewBox="0 0 620 240" className="h-auto w-full" role="img" aria-label="Loan approval flow: input monthly income and credit score, decision income above 50000 and credit score above 600, outputs Loan Approved and Loan Rejected both clearly defined">
      <defs>
        <marker id="atbLoanA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      {/* inputs — trapezoids */}
      <polygon points="40,30 150,30 140,58 50,58" fill="#fffaf1" stroke="#c99a5b" />
      <text x={95} y={48} textAnchor="middle" fontSize={10} fontWeight={700} fill="#2b2014">input income</text>
      <polygon points="40,66 150,66 140,94 50,94" fill="#fffaf1" stroke="#c99a5b" />
      <text x={95} y={84} textAnchor="middle" fontSize={10} fontWeight={700} fill="#2b2014">input credit score</text>
      <path d="M150 62 H 210" stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#atbLoanA)" />
      {/* decision */}
      <polygon points="300,26 400,62 300,98 200,62" fill="#f5c889" stroke="#c2410c" />
      <text x={300} y={56} textAnchor="middle" fontSize={10} fontWeight={800} fill="#2b2014">income &gt; 50,000</text>
      <text x={300} y={72} textAnchor="middle" fontSize={10} fontWeight={800} fill="#2b2014">AND credit &gt; 600 ?</text>
      {/* outputs — both defined */}
      <path d="M300 98 V 130" stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#atbLoanA)" />
      <text x={310} y={118} fontSize={10} fontWeight={800} fill="#44621d">yes</text>
      <rect x={240} y={132} width={120} height={30} rx={6} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={300} y={151} textAnchor="middle" fontSize={11} fontWeight={800} fill="#3c521b">“Loan Approved”</text>
      <path d="M400 62 H 470 V 130" stroke="#c99a5b" strokeWidth={1.8} fill="none" markerEnd="url(#atbLoanA)" />
      <text x={430} y={54} fontSize={10} fontWeight={800} fill="#5d6670">no</text>
      <rect x={420} y={132} width={120} height={30} rx={6} fill="#f2efe8" stroke="#9aa7b5" />
      <text x={480} y={151} textAnchor="middle" fontSize={11} fontWeight={800} fill="#3d444c">“Loan Rejected”</text>
      <path d="M300 162 V 186 M 480 162 V 186" stroke="#c99a5b" strokeWidth={1.8} fill="none" />
      <rect x={230} y={186} width={340} height={26} rx={8} fill="#fffaf1" stroke="#e9d7bf" />
      <text x={400} y={203} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#8a6b45">either way the applicant knows the decision — the output is well-defined</text>
      <text x={90} y={140} fontSize={9.5} fontWeight={700} fill="#8a6b45">inputs are exactly</text>
      <text x={90} y={154} fontSize={9.5} fontWeight={700} fill="#8a6b45">two values: L and W</text>
      <text x={90} y={168} fontSize={9.5} fontWeight={700} fill="#8a6b45">(rectangle-area twin)</text>
    </svg>
  );
}

export function AtbInputsOutputsSection() {
  return (
    <Section id="inputs-outputs">
      <SectionHead
        eyebrow={eyebrowOf("inputs-outputs")}
        title={
          <>
            Well-defined <span className="grad-text">inputs</span> &amp;{" "}
            <span className="grad-text">outputs</span>
          </>
        }
        lead="Properties 3 and 4: external data requirements must be explicitly specified, and the algorithm must produce at least one clear expected result — even when the conditions are not met."
      />

      <ReadStep n="1" title="Well-defined inputs — the rectangle area" sub="Input: exactly two values, length L and width W. Compute Area = L × W. Display. Stop." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The inputs are specific — exactly two values are required, and the step names them. The broken twin says
        <em> “input the required value… calculate the area”</em>: which values? how many? which formula? Both the
        input specification and the step itself are ambiguous, so the algorithm cannot even begin.
      </p>

      <ReadStep n="2" title="Well-defined outputs — the loan that always answers" sub="Criteria: income > 50,000 AND credit score > 600. Output: “Loan Approved” OR “Loan Rejected” — always a clear, definitive decision." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The user knows the decision <em>regardless of outcome</em>. The broken twin displays “Processing Complete”
        after applying the criteria — the applicant never learns whether the loan was approved or rejected, so
        neither the input nor the output is well-defined. The lecture’s real-world parallel: good customer service —
        an email that says “we’re working on it, will respond within 48 hours” — is a well-defined output even when
        the complete solution is not ready. The algorithm should always communicate a clear status or result.
      </p>

      <AtbFigure notice="both branches terminate in a named, quotable output — Approved or Rejected — so even rejection is a well-defined result; ‘Processing Complete’ would leave the applicant with nothing to act on.">
        <LoanDecisionSVG />
      </AtbFigure>

      <AtbStepper
        title="What happens next? — two applicants through the same loan algorithm"
        steps={[
          {
            label: "Applicant A: income 62,000, credit 640. Both criteria met.",
            detail: "Same deterministic criteria from Lecture 5: fixed thresholds, no judgement calls.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="income" v={62000} />
                <AtbPill k="credit" v={640} />
                <AtbPill k="income > 50,000" v="true" tone="twin" />
                <AtbPill k="credit > 600" v="true" tone="twin" />
              </div>
            ),
          },
          {
            label: "Output: “Loan Approved” — a clear, quotable decision.",
            detail: "The well-defined output contract: at least one clear expected result.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="output" v="Loan Approved" tone="twin" />
                <AtbPill k="applicant knows" v="yes" tone="twin" />
              </div>
            ),
          },
          {
            label: "Applicant B: income 44,000, credit 710. Income fails.",
            detail: "One false criterion is enough — the algorithm still produces an output.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="income" v={44000} />
                <AtbPill k="credit" v={710} />
                <AtbPill k="income > 50,000" v="false" tone="broken" />
                <AtbPill k="credit > 600" v="true" tone="twin" />
              </div>
            ),
          },
          {
            label: "Output: “Loan Rejected” — still a well-defined answer.",
            detail: "Rejection is not silence. ‘Processing Complete’ would have been the broken twin here.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="output" v="Loan Rejected" tone="broken" />
                <AtbPill k="applicant knows" v="yes" tone="twin" />
                <AtbPill k="vague twin" v="‘Processing Complete’" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="A loan system that ends by displaying ‘Processing Complete’ violates…"
          options={["Finiteness", "Well-defined outputs", "Language independence", "Generality"]}
          answer={1}
          explain="The user cannot know whether the loan was approved or rejected — there is no clear expected result. A well-defined output means a definitive decision in every branch."
          source="Lecture 4 · well-defined outputs"
        />
        <Quiz
          q="‘Input the required value, calculate the area’ fails which property?"
          options={["Well-defined inputs", "Determinism", "Effectiveness", "Finiteness"]}
          answer={0}
          explain="‘The required value’ does not say which values or how many — the external data requirements are not explicitly specified. The rectangle twin names exactly L and W."
          source="Lecture 4 · well-defined inputs"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L04 · CHAPTER 4 — EFFECTIVENESS (id="effectiveness")
   The 50-unit reorder line + the interconnection of properties.
   ============================================================ */

function InventoryLineSVG() {
  return (
    <svg viewBox="0 0 620 220" className="h-auto w-full" role="img" aria-label="Inventory level falling across weeks crossing the 50 unit safety stock line where a 200 unit purchase order fires, versus the vague order more when stock looks low twin">
      <defs>
        <marker id="atbInvA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_OLIVE} /></marker>
        <marker id="atbInvB" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill={ATB_NEUTRAL_SVG} /></marker>
      </defs>
      {/* axes */}
      <line x1={50} y1={20} x2={50} y2={170} stroke="#c99a5b" strokeWidth={1.5} />
      <line x1={50} y1={170} x2={580} y2={170} stroke="#c99a5b" strokeWidth={1.5} />
      <text x={44} y={30} textAnchor="end" fontSize={9} fontWeight={700} fill="#8a6b45">300</text>
      <text x={44} y={70} textAnchor="end" fontSize={9} fontWeight={700} fill="#8a6b45">200</text>
      <text x={44} y={125} textAnchor="end" fontSize={9} fontWeight={700} fill="#8a6b45">50</text>
      <text x={44} y={170} textAnchor="end" fontSize={9} fontWeight={700} fill="#8a6b45">0</text>
      <line x1={50} y1={124} x2={580} y2={124} stroke="#c2410c" strokeWidth={1.6} strokeDasharray="6 4" />
      <text x={578} y={118} textAnchor="end" fontSize={9.5} fontWeight={800} fill="#c2410c">safety stock = 50 units</text>
      {/* stock curve */}
      <path d="M50 40 C 120 44 170 60 240 78 C 300 92 340 104 380 118 C 400 122 410 124 418 124" fill="none" stroke={ATB_OLIVE} strokeWidth={2.4} />
      <circle cx={418} cy={124} r={5} fill={ATB_OLIVE} />
      <text x={418} y={144} textAnchor="middle" fontSize={9} fontWeight={800} fill="#44621d">stock hits 50 →</text>
      {/* PO box */}
      <rect x={430} y={92} width={130} height={26} rx={6} fill="#eef4dd" stroke={ATB_OLIVE} />
      <text x={495} y={109} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#3c521b">PO for 200 units fires</text>
      <path d="M424 124 H 428" stroke={ATB_OLIVE} strokeWidth={1.8} markerEnd="url(#atbInvA)" fill="none" />
      <path d="M495 118 V 170" stroke={ATB_OLIVE} strokeWidth={1.6} fill="none" markerEnd="url(#atbInvA)" strokeDasharray="3 3" />
      <text x={495} y={186} textAnchor="middle" fontSize={9} fontWeight={700} fill="#44621d">+200 → stock restored</text>
      {/* broken twin */}
      <rect x={430} y={28} width={150} height={44} rx={8} fill="#f2efe8" stroke={ATB_NEUTRAL_SVG} />
      <text x={505} y={46} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#3d444c">“order more whenever</text>
      <text x={505} y={62} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#3d444c">stock looks low”</text>
      <path d="M505 72 V 88" stroke={ATB_NEUTRAL_SVG} strokeWidth={1.6} fill="none" markerEnd="url(#atbInvB)" />
      <text x={505} y={44} textAnchor="end" fontSize={0} fill="none">.</text>
      <text x={60} y={205} fontSize={9.5} fontWeight={700} fill="#8a6b45">weeks →</text>
      <text x={300} y={205} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#44621d">one threshold, one quantity, one doable step — effective</text>
    </svg>
  );
}

export function AtbEffectivenessSection() {
  return (
    <Section id="effectiveness">
      <SectionHead
        eyebrow={eyebrowOf("effectiveness")}
        title={
          <>
            Effectiveness — <span className="grad-text">useful</span>, not just correct
          </>
        }
        lead="Property 5: the algorithm must solve the problem in a practical, useful manner — considering time, resources and business objectives. Correctness alone is not effectiveness."
      />

      <ReadStep n="1" title="The valid twin — the inventory reordering system" sub="Input current stock; safety stock threshold = 50 units; purchase order quantity = 200 units; if stock < 50, create a PO for 200, otherwise maintain." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        Effectiveness here is a <strong>balance</strong>: production continuity (never risk running out) against cost
        management (never overstock). One threshold, one quantity, one doable step — a manager can execute it and a
        machine can run it.
      </p>

      <AtbStepper
        title="What happens next? — stock falls toward the reorder line"
        steps={[
          {
            label: "Week 1: stock 240 units. Above 50 → maintain, no order.",
            detail: "The condition stock < 50 is false — the algorithm does nothing, correctly.",
            frame: <AtbCells values={[240, 190, 140, 95, 48]} tones={["done", "done", "done", "done", "ghost"]} labels={["wk 1", "wk 2", "wk 3", "wk 4", "wk 5"]} />,
          },
          {
            label: "Weeks 2–4: 190 → 140 → 95. Still above the line.",
            detail: "Each week is one read of current stock — the only input the algorithm needs.",
            frame: <AtbCells values={[240, 190, 140, 95, 48]} tones={["done", "done", "done", "active", "ghost"]} labels={["✓", "✓", "✓", "wk 4", "wk 5"]} />,
          },
          {
            label: "Week 5: stock 48 < 50 → create the purchase order for 200 units.",
            detail: "The threshold is explicit, the quantity is explicit — nothing is left to judgement.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbCells values={[240, 190, 140, 95, 48]} tones={["done", "done", "done", "done", "active"]} labels={["✓", "✓", "✓", "✓", "wk 5"]} />
                <AtbPill k="48 < 50" v="true" tone="active" />
                <AtbPill k="PO qty" v={200} tone="twin" />
              </div>
            ),
          },
          {
            label: "Stock restored to 248. Production continuity + cost control.",
            detail: "Both business objectives hold — that is what effectiveness means here.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="stock after PO" v={248} tone="twin" />
                <AtbPill k="production risk" v="none" tone="twin" />
                <AtbPill k="overstock" v="none" tone="twin" />
              </div>
            ),
          },
        ]}
      />

      <AtbFigure notice="the olive curve only acts at the exact 50-unit line and restores exactly 200 units — the vague twin’s ‘looks low’ has no line to cross and no quantity to order.">
        <InventoryLineSVG />
      </AtbFigure>

      <ReadStep n="2" title="The broken twin — ‘order more whenever stock looks low’" sub="“Low” is undefined; “more items” has no quantity. One manager orders 200, another orders 1,000 — inconsistent and costly." />
      <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
        The result is either production risk (too little, too late) or excessive inventory cost (too much, too
        early). And effectiveness has a <strong>time and resource dimension</strong> too: an algorithm that solves
        loan approval in 3 hours is ineffective for real-time approvals; one that demands excessive computing
        resources is ineffective on limited devices. Effectiveness encompasses not just correctness but
        <strong> practicality</strong>.
      </p>

      <ReadStep n="3" title="The properties interlock — and the practice pairs" sub="Infinite loops violate finiteness AND effectiveness; missing well-defined outputs usually means unclear inputs; violating definiteness makes well-defined outputs impossible." />
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="card-warm p-5">
          <p className="flex items-center gap-2 font-extrabold text-[#3e2c1d]"><Shuffle className="h-4 w-4 text-[#c2410c]" /> Practical exercise 1 — the flawed loop</p>
          <p className="mt-2 text-[.85rem] leading-relaxed text-[#2b2014]">
            Step 1: input applicant details → Step 2: evaluate eligibility → Step 3: <strong>return to Step 2</strong>.
          </p>
          <p className="mt-2 text-[.85rem] leading-relaxed text-[#44621d]">
            Violated: <strong>finiteness</strong> (the loop never ends). Secondary: <strong>well-defined output</strong> — it never reaches a conclusion.
          </p>
        </div>
        <div className="card-warm p-5">
          <p className="flex items-center gap-2 font-extrabold text-[#3e2c1d]"><Crosshair className="h-4 w-4 text-[#c2410c]" /> Practical exercise 2 — the vague discount</p>
          <p className="mt-2 text-[.85rem] leading-relaxed text-[#2b2014]">
            Input purchase amount → <em>“if the purchase amount is large, give a large discount”</em> → display bill, stop.
          </p>
          <p className="mt-2 text-[.85rem] leading-relaxed text-[#44621d]">
            Violated: <strong>definiteness</strong> — “large” is undefined for both the purchase and the discount, so different staff apply different criteria.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="An algorithm solving the problem in 3 hours is ineffective for real-time loan approval because effectiveness includes…"
          options={["Language choice", "Time and resource practicality", "The number of lines", "The output format"]}
          answer={1}
          explain="Effectiveness = solving the problem usefully within time and resource constraints. 3 hours fails a real-time approval regardless of correctness."
          source="Lecture 4 · effectiveness"
        />
        <Quiz
          q="‘Return to Step 2’ after evaluating eligibility breaks finiteness. What is the secondary casualty?"
          options={["Language independence", "Well-defined output (it never concludes)", "Feasibility", "Generality"]}
          answer={1}
          explain="The lecture lists it explicitly: the loop never reaches a conclusion, so no well-defined output is ever produced. The properties interlock."
          source="Lecture 4 · exercises"
        />
      </div>

      <Reveal className="mt-4">
        <Takeaways
          items={[
            <>The five core technical properties: <strong>finiteness, definiteness, well-defined inputs, well-defined outputs, effectiveness</strong>.</>,
            <>Every property is easiest to remember by its <strong>broken twin</strong> — and the twin is shown neutral, never red.</>,
            <>Ambiguity and vagueness are the enemies of algorithms in computational contexts.</>,
            <>Real-world algorithms must be <strong>theoretically sound and practically useful</strong> — the two halves of effectiveness.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   L05 · CHAPTER 1 — EXECUTION PROPERTIES (id="props2")
   Language independence · determinism · feasibility · generality.
   ============================================================ */

const EXEC_PROPS = [
  {
    icon: Languages,
    name: "Language independence",
    rule: "Expressed in logical steps that are generic — not tied to any specific programming language.",
    yes: "A bonus calculation written in plain English translates into C, C++, Java or Python with the logic unchanged.",
    no: "The same logic written in Python-specific syntax — change the language, lose the algorithm.",
  },
  {
    icon: Repeat2,
    name: "Determinism",
    rule: "Same input consistently produces the same output across multiple executions.",
    yes: "Loan approval: income > 50,000 AND credit score > 700 → the same decision every run.",
    no: "Visa approval: the officer’s subjective judgement of trustworthiness varies between officers and interviews.",
  },
  {
    icon: Cog,
    name: "Feasibility",
    rule: "Implementable realistically within available resources — memory, processing power, time.",
    yes: "Payroll: read employee records one by one, compute net salary, generate the pay slip, repeat.",
    no: "Load ALL employee records into memory simultaneously and process them at once — costly and impractical.",
  },
  {
    icon: Globe,
    name: "Generality",
    rule: "Applies broadly — works for all valid instances of the problem, without special cases.",
    yes: "A bonus rule keyed on annual sales works for every employee.",
    no: "“Assign the bonus only to employees named Rahul” — specific to one case, unethical, not implementable.",
  },
];

function FeasibilityTimelineSVG() {
  return (
    <svg viewBox="0 0 640 190" className="h-auto w-full" role="img" aria-label="Feasibility timeline: cloud computing and machine learning algorithms existed decades ago but became feasible only recently as internet speeds, costs, computing power and data availability improved">
      <defs>
        <marker id="atbFeaA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <line x1={40} y1={120} x2={600} y2={120} stroke="#c99a5b" strokeWidth={2} markerEnd="url(#atbFeaA)" />
      {[
        { x: 90, l: "1970s", t: "ML/AI algorithms exist" },
        { x: 230, l: "1990s", t: "cloud tech exists" },
        { x: 460, l: "today", t: "feasible & popular" },
      ].map((m) => (
        <g key={m.l}>
          <circle cx={m.x} cy={120} r={7} fill={m.x > 400 ? ATB_OLIVE : "#b45309"} stroke="#f5c889" />
          <text x={m.x} y={142} textAnchor="middle" fontSize={10} fontWeight={800} fill="#7c4a12">{m.l}</text>
          <text x={m.x} y={158} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8a6b45">{m.t}</text>
        </g>
      ))}
      <path d="M90 112 C 90 70 140 60 230 62" stroke="#9aa7b5" strokeWidth={1.8} fill="none" strokeDasharray="5 4" />
      <path d="M230 112 C 230 70 300 58 460 56" stroke={ATB_OLIVE} strokeWidth={2.2} fill="none" />
      <text x={155} y={48} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#5d6670">existed — not feasible</text>
      <text x={350} y={40} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#44621d">internet speeds ↑ · costs ↓ · computing ↑ · data ↑</text>
      <text x={600} y={104} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#8a6b45">time →</text>
    </svg>
  );
}

export function AtbProps2Section() {
  return (
    <Section id="props2">
      <SectionHead
        eyebrow={eyebrowOf("props2")}
        title={
          <>
            The <span className="grad-text">execution</span> family — four more properties
          </>
        }
        lead="Language independence, determinism, feasibility and generality decide whether an algorithm can be properly implemented and generalized in the real world."
      />

      <ReadStep n="1" title="Four execution & design characteristics" sub="These sit on top of the core technical five — an algorithm can be ‘correct’ and still fail here." />
      <div className="grid gap-4 md:grid-cols-2">
        {EXEC_PROPS.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <div className="card-warm h-full p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "#f5c889" }}>
                  <p.icon className="h-4 w-4" style={{ color: "#7c4a12" }} />
                </span>
                <h4 className="font-extrabold leading-tight text-[#3e2c1d]">{p.name}</h4>
              </div>
              <p className="mt-2.5 text-[.85rem] leading-relaxed text-[#2b2014]">{p.rule}</p>
              <div className="mt-3 grid gap-2">
                <div className="flex items-start gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "#eef4dd" }}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#5d7a2e]" />
                  <span className="text-[.78rem] leading-snug text-[#44621d]">{p.yes}</span>
                </div>
                <div className="flex items-start gap-2 rounded-lg px-2.5 py-1.5" style={{ background: "#f0ede5" }}>
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8a8578]" />
                  <span className="text-[.78rem] leading-snug text-[#5d6670]">{p.no}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AtbFigure notice="cloud and machine-learning algorithms existed decades before they were feasible — feasibility is a moving line drawn by internet speeds, costs, computing power and data availability.">
        <FeasibilityTimelineSVG />
      </AtbFigure>

      <AtbStepper
        title="What happens next? — determinism, run twice"
        steps={[
          {
            label: "Run 1: income 62,000, credit 720 → the loan algorithm evaluates.",
            detail: "Fixed criteria: income > 50,000 AND credit score > 700.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="run" v={1} />
                <AtbPill k="income > 50,000" v="true" tone="twin" />
                <AtbPill k="credit > 700" v="true" tone="twin" />
                <AtbPill k="output" v="Approved" tone="twin" />
              </div>
            ),
          },
          {
            label: "Run 2: the exact same inputs → the exact same output.",
            detail: "Determinism: the criteria are fixed, so re-running cannot change the verdict.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="run" v={2} />
                <AtbPill k="inputs" v="identical" />
                <AtbPill k="output" v="Approved" tone="twin" />
                <AtbPill k="matches run 1" v="yes" tone="twin" />
              </div>
            ),
          },
          {
            label: "The visa twin, run 1: officer A reads ‘trustworthy’ → granted.",
            detail: "Subjective judgement — no fixed threshold exists to re-check.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="run" v={1} />
                <AtbPill k="criterion" v="‘feels trustworthy’" tone="broken" />
                <AtbPill k="output" v="Granted" />
              </div>
            ),
          },
          {
            label: "The visa twin, run 2: same file, officer B → rejected.",
            detail: "Same input, different output — indeterminate. Algorithms must be deterministic to be reliably implementable.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="run" v={2} />
                <AtbPill k="criterion" v="‘feels trustworthy’" tone="broken" />
                <AtbPill k="output" v="Rejected" tone="broken" />
                <AtbPill k="matches run 1" v="no — not an algorithm" tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <Reveal className="mt-6">
        <Callout kind="insight" title="The two review questions, answered">
          <strong>Random discount (5–20%) for all customers → determinism fails:</strong> the same purchase may get
          a different discount each time; randomness may be company policy but it violates algorithmic principles.
          <br />
          <strong>Complaint algorithm (submit → determine the customer’s true intention → provide solution) →
          feasibility fails:</strong> reading a customer’s true intention is not strictly executable by a computing
          system without extremely complex solutions like AI with facial recognition — impractical for a standard
          complaint-handling system.
        </Callout>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Quiz
          q="A discount algorithm randomly chooses between 5% and 20% for every customer. Which property fails?"
          options={["Language independence", "Determinism", "Feasibility", "Generality"]}
          answer={1}
          explain="Random selection means the same purchase amount can produce different discounts each run — the same input no longer guarantees the same output."
          source="Lecture 5 · review questions"
        />
        <Quiz
          q="‘Determine the customer’s true intention, then provide a solution’ fails which property?"
          options={["Determinism", "Generality", "Feasibility", "Finiteness"]}
          answer={2}
          explain="Reading true intentions is not strictly executable by a computing system without extreme measures (AI with facial recognition) — not feasible for a standard complaint system."
          source="Lecture 5 · review questions"
        />
      </div>
    </Section>
  );
}

/* ============================================================
   L05 · CHAPTER 2 — TYPES OF ALGORITHMS (id="algotypes", dark)
   Divide & conquer · greedy · dynamic programming — official
   figures: the 500/150/350 change, the audit regions, the air
   coolers.
   ============================================================ */

function DivideConquerSVG() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" role="img" aria-label="Divide and conquer: one big box split into three smaller boxes, then combined">
      <defs>
        <marker id="atbDcA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <rect x={80} y={8} width={100} height={28} rx={6} fill="rgba(245,158,11,.16)" stroke="#f5a623" />
        <text x={130} y={26} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffe4bd">One big problem</text>
      </motion.g>
      <FlowEdgeDark d="M130 36 V 46" marker="atbDcA" delay={0.25} />
      <motion.path d="M46 46 H 214" stroke="#c99a5b" strokeWidth={1.8} fill="none" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} />
      <FlowEdgeDark d="M46 46 V 58" marker="atbDcA" delay={0.6} />
      <FlowEdgeDark d="M130 46 V 58" marker="atbDcA" delay={0.7} />
      <FlowEdgeDark d="M214 46 V 58" marker="atbDcA" delay={0.8} />
      {[46, 130, 214].map((cx, i) => (
        <motion.g key={cx} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.4 + i * 0.15 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <rect x={cx - 30} y={62} width={60} height={26} rx={5} fill="rgba(255,236,210,.08)" stroke="#c99a5b" />
          <text x={cx} y={79} textAnchor="middle" fontSize={10} fontWeight={700} fill="#f7ecdd">sub-{i + 1}</text>
        </motion.g>
      ))}
      <FlowEdgeDark d="M46 92 V 112" marker="atbDcA" delay={0.9} />
      <FlowEdgeDark d="M130 92 V 112" marker="atbDcA" delay={1} />
      <FlowEdgeDark d="M214 92 V 112" marker="atbDcA" delay={1.1} />
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 1.2 }}>
        <rect x={62} y={116} width={136} height={26} rx={5} fill="rgba(124,154,62,.2)" stroke="#9cbf62" />
        <text x={130} y={133} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#dcebc2">combine → one report</text>
      </motion.g>
    </svg>
  );
}

function FlowEdgeDark({ d, marker, delay = 0 }: { d: string; marker: string; delay?: number }) {
  return (
    <motion.path
      d={d} fill="none" stroke="#c99a5b" strokeWidth={1.8} markerEnd={`url(#${marker})`} strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.35, delay, ease: "easeInOut" }}
    />
  );
}

function GreedySVG() {
  return (
    <svg viewBox="0 0 300 150" className="h-auto w-full" role="img" aria-label="Greedy: 350 rupees change from a 500 note for a 150 ticket returned as 200, 100 and 50 — largest denomination first">
      <defs>
        <marker id="atbGrA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c99a5b" /></marker>
      </defs>
      <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
        <rect x={40} y={8} width={220} height={30} rx={15} fill="rgba(245,158,11,.16)" stroke="#f5a623" />
        <text x={150} y={27} textAnchor="middle" fontSize={11.5} fontWeight={800} fill="#ffe4bd">₹500 paid · ticket ₹150 · change ₹350</text>
      </motion.g>
      <FlowEdgeDark d="M150 42 V 56" marker="atbGrA" delay={0.3} />
      {["200", "100", "50"].map((v, i) => (
        <motion.g key={v} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.45 + i * 0.16 }}>
          <rect x={52 + i * 68} y={62} width={58} height={30} rx={7} fill={i === 0 ? "#b45309" : "rgba(255,236,210,.08)"} stroke={i === 0 ? "#f5a623" : "#c99a5b"} />
          <text x={81 + i * 68} y={81} textAnchor="middle" fontSize={12} fontWeight={800} fill={i === 0 ? "#ffe4bd" : "#f7ecdd"}>{v}</text>
        </motion.g>
      ))}
      <motion.text x={150} y={116} textAnchor="middle" fontSize={10} fontWeight={700} fill="#cbb392" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}>
        200 + 100 + 50 = ₹350 — largest denomination first, never reconsidered
      </motion.text>
      <motion.text x={150} y={132} textAnchor="middle" fontSize={9} fontWeight={700} fill="#8fb069" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
        faster than counting 35 ten-rupee notes
      </motion.text>
    </svg>
  );
}

function DPSVG() {
  return (
    <svg viewBox="0 0 260 150" className="h-auto w-full" role="img" aria-label="Dynamic programming: a timeline of months where past decisions inform future ones — order more before March summer peak, reduce before the rainy season">
      <defs>
        <marker id="atbDpA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#9cbf62" /></marker>
      </defs>
      <motion.line x1={18} y1={104} x2={242} y2={104} stroke="#c99a5b" strokeWidth={2} initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
      {[
        { x: 40, l: "Jan" },
        { x: 90, l: "Mar" },
        { x: 140, l: "Jun" },
        { x: 190, l: "Sep" },
      ].map((m, i) => (
        <motion.g key={m.l} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 + i * 0.18 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <circle cx={m.x} cy={104} r={8} fill="#b45309" stroke="#f5a623" />
          <text x={m.x} y={124} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#cbb392">{m.l}</text>
        </motion.g>
      ))}
      <motion.path
        d="M40 96 C 60 60 75 58 90 96 C 105 62 120 56 140 96 C 152 66 170 54 190 96 C 200 70 210 62 224 92"
        fill="none" stroke="#9cbf62" strokeWidth={2} strokeDasharray="4 5" strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.7 }}
      />
      <motion.g initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 1.9 }} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx={224} cy={104} r={9} fill="rgba(124,154,62,.25)" stroke="#9cbf62" />
        <text x={224} y={124} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#dcebc2">Dec</text>
      </motion.g>
      <motion.text x={130} y={34} textAnchor="middle" fontSize={10} fontWeight={700} fill="#cbb392" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2 }}>
        order up before March (summer peak) · trim before monsoon
      </motion.text>
      <FlowEdgeDark d="M224 92 V 78" marker="atbDpA" delay={2.1} />
    </svg>
  );
}

const ALGO_TYPES = [
  {
    icon: Split,
    name: "Divide-and-Conquer",
    tag: "Split it",
    def: "Divide a large problem into smaller sub-problems, solve each independently, and combine the results to obtain the final solution.",
    story: "A large company splits its audit across regional offices — North, South, East, West, Northeast. Each regional team audits its own office accounts; all the regional reports combine into one company-wide audit report. A smaller company may instead use a single auditor who examines each office sequentially and combines the findings.",
  },
  {
    icon: Coins,
    name: "Greedy",
    tag: "Grab the best now",
    def: "Make the best possible decision at the current point in time, based on available information and constraints — assuming the locally optimal choice leads to a useful overall solution.",
    story: "A customer pays ₹500 for a ₹150 ticket — ₹350 change due. The cashier hands over one ₹200 note, one ₹100 note and one ₹50 note: the largest denominations first, faster and more practical than counting 35 ten-rupee notes. Investors do the same: limited budget → highest immediate return first, potentially selling later when better opportunities emerge.",
  },
  {
    icon: History,
    name: "Dynamic Programming",
    tag: "Remember the past",
    def: "Make decisions for the future based on analysis of past data and current conditions.",
    story: "Inventory reordering reviews three years of purchase history, holding costs and demand patterns, then plans the next 12 months. The air-cooler manufacturer orders more inventory before March — the summer demand peak — and trims orders before the rainy season, when cooler demand drops as the cold season approaches.",
  },
];

export function AtbAlgoTypesSection() {
  return (
    <Section id="algotypes" dark>
      <SectionHead
        dark
        eyebrow={eyebrowOf("algotypes")}
        title={
          <>
            Three ways to <span className="grad-text">eat the elephant</span>
          </>
        }
        lead="Every algorithmic strategy you will ever meet is a remix of three instincts: split the problem, grab what looks best now, or remember where you have been."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {ALGO_TYPES.map((t, i) => (
          <Reveal key={t.name} delay={i * 130}>
            <div className="card-warm flex h-full flex-col p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(245,158,11,.15)" }}>
                  <t.icon className="h-4 w-4" style={{ color: "#f5c889" }} />
                </span>
                <div>
                  <h3 className="font-extrabold leading-tight text-[#f5e6cd]">{t.name}</h3>
                  <p className="text-[.7rem] font-bold uppercase tracking-[.14em] text-[#f5c889]">{t.tag}</p>
                </div>
              </div>
              <p className="mt-3 text-[.85rem] leading-relaxed text-[#e9d7bf]">{t.def}</p>
              <p className="mt-2 text-[.8rem] leading-relaxed text-[#cbb392]">
                <strong className="text-[#f5c889]">Business story · </strong>{t.story}
              </p>
              <div className="mt-auto pt-4">
                {i === 0 ? <DivideConquerSVG /> : i === 1 ? <GreedySVG /> : <DPSVG />}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <AtbStepper
        dark
        className="mt-6"
        title="What happens next? — the greedy cashier returns ₹350"
        steps={[
          {
            label: "Ticket ₹150, customer pays ₹500 → change due ₹350.",
            detail: "Available denominations include 200, 100 and 50 rupee notes.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="paid" v={500} />
                <AtbPill k="ticket" v={150} />
                <AtbPill k="change due" v={350} tone="active" />
                <AtbPill k="given" v={0} />
              </div>
            ),
          },
          {
            label: "Greedy choice: the largest note available is ₹200 → hand it over.",
            detail: "Locally optimal at this point in time — never reconsidered later.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="given" v="200" tone="twin" />
                <AtbPill k="remaining" v={150} tone="active" />
              </div>
            ),
          },
          {
            label: "Largest remaining need: ₹100 → hand it over.",
            detail: "Still the biggest note that fits the remaining change.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="given" v="200 + 100" tone="twin" />
                <AtbPill k="remaining" v={50} tone="active" />
              </div>
            ),
          },
          {
            label: "₹50 → hand it over. Remaining ₹0 — done in 3 notes.",
            detail: "200 + 100 + 50 = ₹350. The locally-optimal chain produced a practical solution — faster than 35 ten-rupee notes.",
            frame: (
              <div className="flex flex-wrap items-center gap-3">
                <AtbPill k="given" v="200 + 100 + 50" tone="twin" />
                <AtbPill k="remaining" v={0} tone="twin" />
                <AtbPill k="notes used" v={3} tone="twin" />
                <AtbPill k="vs 10-rupee notes" v={35} tone="broken" />
              </div>
            ),
          },
        ]}
      />

      <Reveal className="mt-5">
        <Callout dark kind="insight" title="The matching exercise, worked">
          <strong>1 · Production planning</strong> (monthly production from current inventory, previous production
          levels and expected future demand) → <strong>dynamic programming</strong>: past data feeding future plans.
          <br />
          <strong>2 · National sales reporting</strong> (each regional office prepares its report; head office
          combines them) → <strong>divide and conquer</strong>: national calculation broken into regional
          sub-problems, then combined.
          <br />
          <strong>3 · Investment portfolio</strong> (limited budget into the highest immediate return first) →{" "}
          <strong>greedy</strong>: the locally best choice at each point in time, potentially sold later when better
          opportunities emerge.
        </Callout>
      </Reveal>

      <Reveal className="mt-6">
        <Quiz
          q="Planning next year’s inventory using last year’s levels and demand forecasts is…"
          options={["Divide-and-conquer", "Greedy", "Dynamic programming", "Binary search"]}
          answer={2}
          explain="Past inventory levels and forecasts are memory feeding future decisions — the definition of dynamic programming. Greedy would decide month-by-month with no memory; divide-and-conquer would need independent subproblems."
          source="Lecture 5 · algorithm classes"
        />
      </Reveal>

      <Reveal className="mt-4">
        <Takeaways
          dark
          items={[
            <>Core technical: <strong>Finiteness, Definiteness, Well-defined inputs, Well-defined outputs, Effectiveness</strong> (Lecture 4).</>,
            <>Execution &amp; design: <strong>Language independence, Determinism, Feasibility, Generality</strong> (Lecture 5).</>,
            <>Three major classes: <strong>divide &amp; conquer</strong> (split &amp; combine), <strong>greedy</strong> (best at this point in time), <strong>dynamic programming</strong> (decide for the future with the past in mind).</>,
            <>Feasibility is a moving line: cloud and ML existed decades before the internet speeds, costs, computing power and data made them practical.</>,
          ]}
        />
      </Reveal>

      <Reveal className="mt-4">
        <Practice
          title="Strategy spotting"
          items={[
            { q: "A warehouse chain audits 40 stores. Which of the three classes fits, and how would you divide the work?", hint: "Stores are independent → divide-and-conquer; audit teams per region (the official example: North/South/East/West/Northeast), then merge findings into one report." },
            { q: "Why does the cashier’s greedy chain work for ₹350 with notes {200, 100, 50}?", hint: "Each largest-fit note lands exactly: 200+100+50 = 350 with zero remainder — no note is ever reconsidered." },
          ]}
        />
      </Reveal>
    </Section>
  );
}
