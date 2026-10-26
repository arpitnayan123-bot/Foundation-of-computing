"use client";

/* ============================================================
   FocParts4 — the FoC rebuild, file 4 of 9.

   #checkpoint-1    (Lecture 14 — the recap + Quiz One briefing)
   #numeric-lists   (Lecture 15 — ranges, comprehensions, slices)

   Lecture 14 is the deck's planned checkpoint: everything so
   far, compressed into one guided lap. Lecture 15 splits the
   "numerical lists" half out of the old lists chapter — the
   range_basics.py and players.py blocks are re-homed here
   byte-for-byte, and the comprehension story gets its own
   stage.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpenCheck, ClipboardList, Clock3 } from "lucide-react";
import {
  Callout,
  CodeBlock,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   LECTURE 14 — #checkpoint-1
   ============================================================ */

const RECAP_STATIONS = [
  { n: "L2", t: "IPO + pillars + DIKW", d: "input → process → output; four pillars; 38.5 becomes a diagnosis; Netflix pauses at 42:15" },
  { n: "L3", t: "Data, classified", d: "structured vs the 80% unstructured flood; snapshot, panel, time series; quant vs qual" },
  { n: "L4", t: "Programming in the AI age", d: "vibe coding's Day-30 collapse; 10·30·60 evaluation; enterprise IPO at zettabyte scale" },
  { n: "L5", t: "Algorithms", d: "five properties — finiteness, definiteness, input, output, effectiveness; the odd/even recipe" },
  { n: "L6", t: "Hardware", d: "sensors → CPU/GPU → RAM/ROM/storage → output; AlexNet proved GPUs change everything" },
  { n: "L7", t: "Software", d: "OS, utilities, apps; interpreter line-by-line vs compiler all-at-once" },
  { n: "L8", t: "Python, first contact", d: "Colab, .ipynb, the naming law, NameError tracebacks, string methods" },
  { n: "L9", t: "Case files", d: "Knight Capital's 45 minutes; Zara's six months; redlining's missing climb" },
  { n: "L10–L13", t: "Your first Python", d: "numbers & comments · lists · organizing · loops and the indentation law" },
];

function RecapBoard() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {RECAP_STATIONS.map((s, i) => (
        <motion.div
          key={s.n}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.35 }}
          className="card-warm p-4"
        >
          <span
            className="inline-flex h-7 items-center rounded-md px-2 text-[.7rem] font-black"
            style={{ background: "#f7ecdc", color: "#b45309" }}
          >
            {s.n}
          </span>
          <p className="mt-2 font-bold leading-tight text-[#3e2c1d]">{s.t}</p>
          <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{s.d}</p>
        </motion.div>
      ))}
    </div>
  );
}

export function Checkpoint1Section() {
  return (
    <Section id="checkpoint-1">
      <SectionHead
        eyebrow="Lecture 14 · checkpoint"
        title={
          <>
            Checkpoint — <span className="grad-text">Quiz One</span>
          </>
        }
        lead="Half the foundations, one guided lap. This is the deck's own consolidation lecture: the syllabus for Quiz One, the exam format, and a predict-the-output drill that is exactly the kind of question the paper asks."
      />

      <Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card-warm p-5">
            <ClipboardList className="h-5 w-5" style={{ color: "#c2410c" }} />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">60 MCQs</p>
            <p className="text-[.85rem] text-muted-warm">≈ 20 seconds per question — pace is part of the test</p>
          </div>
          <div className="card-warm p-5">
            <Clock3 className="h-5 w-5" style={{ color: "#c2410c" }} />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">20 minutes</p>
            <p className="text-[.85rem] text-muted-warm">next Saturday, 8:00 AM sharp</p>
          </div>
          <div className="card-warm p-5">
            <BookOpenCheck className="h-5 w-5" style={{ color: "#c2410c" }} />
            <p className="mt-2 text-2xl font-black text-[#3e2c1d]">Best 2 of 3</p>
            <p className="text-[.85rem] text-muted-warm">quizzes: 15% each — one bad day never defines you</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout kind="insight" title="Syllabus & stakes">
          Everything recorded up to <strong>September 20th — including &ldquo;Working with Lists Part 2&rdquo;</strong>.
          The evaluation scheme: class participation 10% · quizzes 30% · final exam 60%, held{" "}
          <strong>offline, pen and paper</strong> — with real Python code writing, so practise writing code by hand,
          not just reading it.
        </Callout>
      </Reveal>

      <ReadStep n="2" title="The lap — everything so far in nine cards" sub="Skim each station; if one feels foggy, jump back to that lecture before Saturday" />
      <Reveal>
        <RecapBoard />
      </Reveal>

      <ReadStep n="3" title="Predict the output — the quiz, rehearsed" sub="Cover the output panel, write your prediction on paper, then run the block" />
      <Reveal>
        <CodeBlock
          title="quiz_rehearsal.py"
          code={`digits = list(range(1, 8))          # ① what is digits?

print(len(digits))                  # ②
print(max(digits) - min(digits))    # ③
print(sum(digits))                  # ④

words = ["mumbai", "delhi", "chennai"]
words.sort()                        # ⑤ what order now?
print(words[0])

age = 17
print(age >= 18 or age > 15)        # ⑥ True or False?`}
          output={"[1, 2, 3, 4, 5, 6, 7]\n7\n6\n28\n['chennai', 'delhi', 'mumbai']\nchennai\nTrue"}
          note="① [1..7] — range stops before 8 · ② seven items · ③ 7−1=6 · ④ 1+2+…+7=28 · ⑤ sort() is permanent, 'chennai' is first · ⑥ False or True → True. Every one of these is a Quiz-One-style question."
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Quiz One: <strong>60 MCQs · 20 minutes · best 2 of 3 count</strong> (15% each).</>,
            <>Syllabus: all recorded lectures up to <strong>September 20th</strong>, including Working with Lists Part 2.</>,
            <>The final exam is <strong>offline pen-and-paper with code writing</strong> — practise writing code by hand.</>,
            <>The evaluation rewards <strong>interpretation, not memorization</strong>: trace the code, predict the output, explain the logic.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 15 — #numeric-lists
   ============================================================ */

export function NumericListsSection() {
  return (
    <Section id="numeric-lists" dark>
      <SectionHead
        dark
        eyebrow="Lecture 15 · numerical lists"
        title={
          <>
            Numeric lists, <span className="grad-text">ranges &amp; slices</span>
          </>
        }
        lead="Half of all programming is generating numbers and looking at parts of them. range() is the number factory, list comprehensions fold four lines into one, min/max/sum do the maths, and slices cut lists without wounding them."
      />

      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">Making numerical lists</p>
          <h3 className="mt-2 text-2xl font-bold">range() — Python&rsquo;s number factory</h3>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
              title="range_basics.py"
              code={`for value in range(1, 5):   # 1,2,3,4 — stops BEFORE 5
    print(value)

even = list(range(2, 11, 2))  # start, stop, step
print(even)                    # [2,4,6,8,10]

odds = list(range(1, 21, 2))   # odd numbers 1..20
threes = list(range(3, 31, 3)) # multiples of 3

digits = list(range(1, 10))
print(min(digits), max(digits), sum(digits))  # 1 9 45

cubes = [n**3 for n in range(1, 11)]  # 2**3 means 2 cubed
print(cubes)`}
              output={"1\n2\n3\n4\n[2, 4, 6, 8, 10]\n1 9 45\n[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]"}
            />
            <div>
              <Callout dark kind="insight" title="Off-by-one, memorized once">
                <code className="font-mono-warm">range(1, 5)</code> gives 1, 2, 3, 4 — it
                <strong> stops before the second number</strong>. To reach 5, write{" "}
                <code className="font-mono-warm">range(1, 6)</code>. This habit will save
                you a hundred bugs.
              </Callout>
              <Callout dark kind="why" title="Million-element lists are fine">
                <code className="font-mono-warm">list(range(1, 1_000_001))</code> is a
                million numbers — Python builds it in a blink. Printing them takes a
                while; press <strong>Ctrl-C</strong> (or stop the cell) if the output
                floods.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="List comprehensions — four lines into one" sub="The for loop and the list birth, fused into a single readable line" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            dark
            title="squares.py — the same list, two ways"
            code={`# The traditional way — 3 lines:
squares = []
for value in range(1, 11):
    squares.append(value ** 2)
print(squares)

# The comprehension — 1 line, same result:
squares = [value ** 2 for value in range(1, 11)]
print(squares)`}
            output={"[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]"}
            note="Read a comprehension out loud: 'give me value squared, for each value in range 1 to 10.' The expression comes FIRST — and note: no colon at the end. That's the grammar."
          />
          <div className="grid content-start gap-4">
            <Callout dark kind="insight" title="Why Pythonists love these">
              Comprehensions are the signature &ldquo;Pythonic&rdquo; move: concise, readable, and
              faster to write than the loop they replace. You will use them in the data-visualization
              and sentiment-analysis chapters constantly.
            </Callout>
            <Callout dark kind="warn" title="Two grammar traps">
              <strong>No colon</strong> after the for inside a comprehension, and the expression
              sits <strong>before</strong> the for — the reverse of the loop order. Both feel wrong
              for exactly one day, then forever natural.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="3" title="Simple statistics — min, max, sum" sub="Three functions that answer three questions every dataset gets asked" />
      <Reveal>
        <CodeBlock
          dark
          title="digits.py — the one-liner statistics kit"
          code={`digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

print("min:", min(digits))   # 0
print("max:", max(digits))   # 9
print("sum:", sum(digits))   # 45`}
          output={"min: 0\nmax: 9\nsum: 45"}
          note="These scale from ten digits to ten million — the million-element list from the checkpoint drill? min, max and sum still answer instantly."
        />
      </Reveal>

      <ReadStep dark n="4" title="Slices — working with part of a list" sub="[start:stop] includes start, excludes stop — the same off-by-one rule as range()" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            dark
            title="players.py — slicing"
            code={`players = ['charles', 'martina', 'michael',
           'florence', 'eli']

print(players[0:3])   # first three
print(players[1:4])   # middle three
print(players[-3:])   # last three
print(players[:3])    # from start
print(players[3:])    # to the end`}
            output={"['charles', 'martina', 'michael']\n['martina', 'michael', 'florence']\n['michael', 'florence', 'eli']\n['charles', 'martina', 'michael']\n['florence', 'eli']"}
            note="A slice [start:stop] includes start, excludes stop — same off-by-one rule as range()."
          />
          <CodeBlock
            dark
            title="chunks.py — looping a slice"
            code={`players = ['charles', 'martina', 'michael',
           'florence', 'eli']

print("Here are the first three players on my roster:")
for player in players[:3]:
    print(player.title())`}
            output={"Here are the first three players on my roster:\nCharles\nMartina\nMichael"}
            note="Looping through a slice processes a PORTION of a list — chunks of a dataset, one page of results at a time — without ever touching the original."
          />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout dark kind="why" title="Where this pays off">
          Chunks of a specific size = <strong>batch processing</strong>. Controlled amounts per view ={" "}
          <strong>pagination</strong>. Subsets without modifying the original = <strong>safe analysis</strong>. In
          machine learning you will slice datasets into training and testing sets exactly this way.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What does list(range(2, 11, 2)) produce?"
            options={["[2, 4, 6, 8, 10, 11]", "[2, 4, 6, 8, 10]", "[2, 3, 5, 7, 9, 11]", "[4, 6, 8, 10]"]}
            answer={1}
            explain="Start 2, stop 11 (excluded), step 2 → [2, 4, 6, 8, 10]. The step skips between values; the stop is never included."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Which one line replaces the loop form: squares = []; for v in range(1, 6): squares.append(v**2)?"
            options={["squares = [v**2 for v in range(1, 6):]", "squares = [v**2 for v in range(1, 6)]", "squares = for v**2 in range(1, 6)", "squares = (v**2 for v in range(1, 6):)"]}
            answer={1}
            explain="Expression first, then for, then the range — and NO colon inside a comprehension. [v**2 for v in range(1, 6)] → [1, 4, 9, 16, 25]."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — numeric-list drills"
          items={[
            { q: <>Use a for loop to print numbers 1 to 20, inclusive.</>, hint: "range(1, 21)" },
            { q: <>Make a list of 1 → 1,000,000 and verify it with min() (1), max() (1,000,000) and sum().</> },
            { q: <>Use range()&rsquo;s third argument to list the odd numbers 1–20; print each.</>, hint: "range(1, 21, 2)" },
            { q: <>Make a list of multiples of 3 from 3 to 30; loop and print.</>, hint: "range(3, 31, 3)" },
            { q: <>Build the first ten cubes — once with a loop, once with a comprehension. (2**3 is 2 cubed.)</>, hint: "[n**3 for n in range(1,11)]" },
            { q: <>With a 9-car list, slice and print the first three, middle three and last three — with a message before each.</>, hint: "cars[:3], cars[3:6], cars[-3:]" },
            { q: <>Loop through a slice of your favourite players and print them in title case — the original list must not change.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <><strong>range(start, stop, step)</strong> stops BEFORE stop; wrap in <strong>list()</strong> to materialize it.</>,
            <><strong>List comprehensions</strong> fuse the loop and the append into one line — expression first, no colon.</>,
            <><strong>min() · max() · sum()</strong> — instant statistics on any numeric list.</>,
            <>Slices <strong>[a:b]</strong> cut without wounding — start included, stop excluded, negatives count from the end.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
