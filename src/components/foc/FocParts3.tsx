"use client";

/* ============================================================
   FocParts3 — the FoC rebuild, file 3 of 9.

   #list-organize  (Lecture 12 — Putting Lists in Order)
   #for-loops      (Lecture 13 — Loops & the Indentation Law)

   Lecture 12 splits the "organizing" half out of the old lists
   chapter: sort() vs sorted(), reverse(), len(), and the
   off-by-one index error. Lecture 13 splits the looping half:
   the for loop and the four classic indentation errors — the
   magicians.py block is re-homed here from the old chapter,
   byte-for-byte.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Check, RotateCcw, Terminal } from "lucide-react";
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
   LECTURE 12 — #list-organize
   ============================================================ */

const SORTED_TABLE = [
  { call: "cars.sort()", effect: "sorts alphabetically, permanently — original order lost", alt: "cars.sort(reverse=True) sorts Z→A" },
  { call: "sorted(cars)", effect: "returns a sorted COPY — original order preserved", alt: "sorted(cars, reverse=True)" },
  { call: "cars.reverse()", effect: "flips the current order permanently (not alphabetical!)", alt: "call twice to undo" },
  { call: "len(cars)", effect: "returns how many items the list holds", alt: "works on strings too" },
];

export function ListOrganizeSection() {
  return (
    <Section id="list-organize">
      <SectionHead
        eyebrow="Lecture 12 · organizing a list"
        title={
          <>
            Putting lists <span className="grad-text">in order</span>
          </>
        }
        lead="Data rarely arrives sorted. Python gives you four tools — two that rearrange forever, two that only look. The difference between them is the difference between a tidy program and a mysterious bug."
      />

      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">The four calls, side by side</p>
          <h3 className="mt-2 text-2xl font-bold">sort() · sorted() · reverse() · len()</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr><th>Call</th><th>Effect</th><th>Variation</th></tr>
              </thead>
              <tbody>
                {SORTED_TABLE.map((r) => (
                  <tr key={r.call}>
                    <td className="font-mono-warm font-bold text-[#8a4508]">{r.call}</td>
                    <td>{r.effect}</td>
                    <td>{r.alt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="cars.py — permanent vs temporary"
            code={`cars = ['bmw', 'audi', 'toyota', 'subaru']

# sorted() — a temporary look, the list survives
print("sorted copy :", sorted(cars))
print("original    :", cars)

print("reverse copy:", sorted(cars, reverse=True))

# sort() — permanent, the original order is GONE
cars.sort()
print("after sort  :", cars)

cars.sort(reverse=True)
print("after sort R:", cars)

# reverse() — flips the CURRENT order, not alphabetical
cars.reverse()
print("after flip  :", cars)`}
            output={"sorted copy : ['audi', 'bmw', 'subaru', 'toyota']\noriginal    : ['bmw', 'audi', 'toyota', 'subaru']\nreverse copy: ['toyota', 'subaru', 'bmw', 'audi']\nafter sort  : ['audi', 'bmw', 'subaru', 'toyota']\nafter sort R: ['toyota', 'subaru', 'bmw', 'audi']\nafter flip  : ['audi', 'bmw', 'subaru', 'toyota']"}
            note="Run it and watch: sorted() always prints the same answer from the same list — until sort() permanently rewrites the original. Editing the code to add your own cars is encouraged."
          />
          <div className="grid content-start gap-4">
            <Callout kind="insight" title="Which one do I want?">
              Need a one-off <strong>view</strong> of the data in order — for display, for a report —
              while the program keeps its own order? Use <strong>sorted()</strong>. Want every later line
              of the program to see the new order? Use <strong>sort()</strong>. Choose deliberately,
              never accidentally.
            </Callout>
            <Callout kind="warn" title="reverse() is not sort(reverse=True)">
              <strong>reverse()</strong> simply flips whatever order the list is currently in — no
              alphabetical arrangement at all. Flip it again and you are back where you started.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="len() — and the off-by-one trap" sub="A list of length 4 has indices 0, 1, 2, 3 — never 4" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="index_bounds.py — the length/index handshake"
            code={`motorcycles = ['honda', 'yamaha', 'suzuki']

print("len() =", len(motorcycles))          # 3 items
print("valid indices: 0 …", len(motorcycles) - 1)
print("last item, safely:", motorcycles[len(motorcycles) - 1])
print("shortcut to last :", motorcycles[-1])

# THE CLASSIC CRASH — uncomment to meet it:
# print(motorcycles[3])
# IndexError: list index out of range`}
            output={"len() = 3\nvalid indices: 0 … 2\nlast item, safely: suzuki\nshortcut to last : suzuki"}
            note="The error message 'list index out of range' is Python telling you the index you asked for doesn't exist. An EMPTY list errors on any index at all."
          />
          <div className="grid content-start gap-4">
            <Callout kind="story" title="Why 'off-by-one' is a rite of passage">
              Humans count from 1; Python counts from 0. The third item lives at index <strong>2</strong>.
              Every programmer has asked a list for the item one past its end — the error is
              harmless, and now you can read it like a native.
            </Callout>
            <IndexErrorLab />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What is the key difference between cars.sort() and sorted(cars)?"
            options={["No difference", "sort() sorts permanently; sorted() returns a sorted copy", "sorted() is only for numbers", "sort() is faster but wrong"]}
            answer={1}
            explain="sort() mutates the list permanently; sorted(cars) leaves the original untouched and hands you a new sorted list. Same for reverse=True on both."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="A list holds 4 items. Which index crashes?"
            options={["cars[0]", "cars[3]", "cars[-1]", "cars[4]"]}
            answer={3}
            explain="Valid indices run 0–3 (length − 1). cars[4] is one past the end → IndexError: list index out of range. cars[-1] is always safe for the last item."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — organizing drills"
          items={[
            { q: <>Store at least five travel destinations in a list, deliberately unsorted. Print the original order.</> },
            { q: <>Show the list in alphabetical order with sorted() — then print the original to prove it survived.</> },
            { q: <>Show reverse-alphabetical order with sorted(reverse=True) — original still untouched?</> },
            { q: <>Use reverse() to flip the real list, print it, then reverse() again to restore the original order.</> },
            { q: <>Now commit: sort() the list alphabetically and print. There is no going back — that is the point.</> },
            { q: <>Apply all four tools (sort, sorted, reverse, len) to a list of mountains, rivers, countries or languages.</> },
            { q: <>Intentionally cause an index error (motorcycles[5] on a three-item list). Read the error, fix it with len()-1 or a negative index.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>sort()</strong> changes the list forever; <strong>sorted()</strong> hands back a sorted copy — <strong>reverse=True</strong> works on both.</>,
            <><strong>reverse()</strong> flips the current order permanently (call twice to undo) — it is not alphabetical sorting.</>,
            <><strong>len()</strong> counts items; valid indices run <strong>0 … len−1</strong>, and <strong>−1</strong> is always the last.</>,
            <>Requesting an index that does not exist raises <strong>IndexError: list index out of range</strong> — empty lists error on everything.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* Interactive: press the button, trigger the error, read it like a pro */
function IndexErrorLab() {
  const [fired, setFired] = useState(false);
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a4508]">The error, on demand</p>
      <p className="mt-2 text-[.86rem] text-[#2b2014]">
        motorcycles has 3 items — valid indices 0, 1, 2. Press the button to ask for index 3:
      </p>
      <button
        onClick={() => setFired(true)}
        className="mt-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[.85rem] font-bold text-white transition-transform hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg,#ea580c,#c2410c)", boxShadow: "0 10px 22px -10px rgba(194,65,12,.7)" }}
      >
        <Terminal className="h-4 w-4" /> print(motorcycles[3])
      </button>
      <AnimatePresence>
        {fired && (
          <motion.pre
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 overflow-x-auto rounded-xl p-3 font-mono-warm text-[.78rem] leading-relaxed"
            style={{ background: "#2b1b10", color: "#f5c889" }}
          >
{`Traceback (most recent call last):
  File "index_bounds.py", line 12, in <module>
    print(motorcycles[3])
IndexError: list index out of range`}
          </motion.pre>
        )}
      </AnimatePresence>
      {fired && (
        <button onClick={() => setFired(false)} className="mt-3 inline-flex items-center gap-1.5 text-[.78rem] font-bold text-[#b45309]">
          <RotateCcw className="h-3.5 w-3.5" /> reset the lab
        </button>
      )}
    </div>
  );
}

/* ============================================================
   LECTURE 13 — #for-loops
   ============================================================ */

const INDENT_ERRORS = [
  {
    name: "Forgot to indent",
    kind: "SyntaxError: expected an indented block",
    broken: `magicians = ['alice', 'david', 'carolina']
for magician in magicians:
print(magician)`,
    fix: "Indent the line after the colon — 4 spaces.",
    impact: "The program will not run at all.",
  },
  {
    name: "Forgot to indent MORE lines",
    kind: "Logical error — no syntax complaint!",
    broken: `for magician in magicians:
    print(f"{magician.title()}, that was great!")
print("I can't wait to see your next trick.")`,
    fix: "Indent every line that belongs inside the loop.",
    impact: "Runs — but the last line fires ONCE, using only the final value. Sneaky.",
  },
  {
    name: "Indented by accident",
    kind: "SyntaxError: unexpected indent",
    broken: `message = "Hello world!"
    print(message)`,
    fix: "Remove the whitespace that shouldn't be there.",
    impact: "The program will not run at all.",
  },
  {
    name: "Forgot the colon",
    kind: "SyntaxError: expected ':'",
    broken: `for magician in magicians
    print(magician)`,
    fix: "End the for line with a colon — it opens the loop body.",
    impact: "The program will not run at all.",
  },
];

function IndentationLaw() {
  const [active, setActive] = useState(0);
  const e = INDENT_ERRORS[active];
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap gap-2">
        {INDENT_ERRORS.map((err, i) => (
          <button
            key={err.name}
            onClick={() => setActive(i)}
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[.78rem] font-bold transition-all"
            style={
              active === i
                ? { background: "#8c2f2f", color: "#fff7ec" }
                : { background: "#fff", color: "#8a4508", border: "1px solid #e5c79d" }
            }
          >
            <AlertTriangle className="h-3.5 w-3.5" /> error {i + 1}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={e.name}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="mt-4 grid gap-4 lg:grid-cols-2"
        >
          <div>
            <p className="font-bold text-[#3e2c1d]">{e.name}</p>
            <p className="mt-1 text-[.8rem] font-bold text-[#8c2f2f]">{e.kind}</p>
            <pre className="mt-2 overflow-x-auto rounded-xl p-3 font-mono-warm text-[.76rem] leading-relaxed" style={{ background: "#2b1b10", color: "#f0b8a4" }}>
              {e.broken}
            </pre>
          </div>
          <div className="grid content-start gap-3">
            <Callout kind="warn" title="Impact">
              {e.impact}
            </Callout>
            <Callout kind="why" title="The fix">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4" style={{ color: "#7c9a3e" }} />
                {e.fix}
              </span>
            </Callout>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ForLoopsSection() {
  return (
    <Section id="for-loops" dark>
      <SectionHead
        dark
        eyebrow="Lecture 13 · working with lists"
        title={
          <>
            Loops &amp; the <span className="grad-text">indentation law</span>
          </>
        }
        lead="Printing 250 values means 250 print statements — until the for loop. One line walks the whole list for you, and whitespace stops being a style choice: in Python, indentation IS the grammar."
      />

      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="mb-5 text-[.92rem] leading-relaxed text-[#e9d7bf]">
            The for loop takes the first value from the list, stores it in your loop variable, runs
            every indented line, then moves to the next value — and stops automatically when the list
            is exhausted. Code adapts to the list&rsquo;s length with zero changes:
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
              title="magicians.py"
              code={`magicians = ['alice', 'david', 'carolina']
for magician in magicians:
    print(magician)

# Doing more work inside the loop
for magician in magicians:
    print(f"{magician.title()}, that was a great trick!")
    print(f"I can't wait to see your next trick, {magician.title()}.\\n")

print("Thank you, everyone. That was a great magic show!")  # runs once, after the loop`}
              output={"alice\ndavid\ncarolina\n\nAlice, that was a great trick!\n..."}
            />
            <div>
              <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#d9b88c]">
                Reading the syntax, piece by piece
              </p>
              <ul className="mt-2 grid gap-1.5 text-[.88rem] text-[#e9d7bf]">
                <li>• <code className="font-mono-warm">for</code> — keyword that opens the loop</li>
                <li>• <code className="font-mono-warm">magician</code> — a fresh variable that holds one item per pass</li>
                <li>• <code className="font-mono-warm">in magicians</code> — the list to walk through</li>
                <li>• <code className="font-mono-warm">:</code> — the colon that opens the body</li>
                <li>• the <strong>indented block</strong> — runs once PER item</li>
                <li>• unindented lines after — run ONCE, after the loop finishes</li>
              </ul>
              <Callout dark kind="insight" title="Why this beats copy-paste">
                Loop code adapts automatically if the list length changes — add a fourth magician
                and every line still works. That is the difference between code and paperwork.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="The indentation law" sub="Four classic errors — click through each one and learn to read the traceback" />
      <Reveal>
        <IndentationLaw />
      </Reveal>

      <Reveal className="mt-6">
        <Callout dark kind="why" title="The key principle">
          The scope of a for loop is determined <strong>entirely by indentation levels</strong>. Any
          indented line after the <code className="font-mono-warm">for</code> statement is part of the loop;
          non-indented lines that follow are outside it. Before running: verify colons, verify
          indentation.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="for magician in magicians\\nprint(magician) — what happens?"
            options={["It prints all three names", "IndentationError: expected an indented block", "It prints only the last name", "NameError: magician is not defined"]}
            answer={1}
            explain="The body after the colon MUST be indented. With no indentation Python cannot even start — SyntaxError: expected an indented block."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="In a for loop, the LAST print line is accidentally NOT indented. What happens?"
            options={["SyntaxError — program won't run", "It runs once, after the loop, using the final loop value", "It runs once per item, like the rest", "The loop is skipped entirely"]}
            answer={1}
            explain="The nastiest of the four: no syntax error is raised, the program runs — but the unindented line executes only once, after the loop, holding the last value. A logical error in disguise."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — loop drills"
          items={[
            { q: <>Store three friends&rsquo; names; print a personalized message to each with a for loop.</> },
            { q: <>Loop a list of transport modes (motorcycle, car, bicycle…) printing &ldquo;I would like to own a {`{mode}`}!&rdquo;</> },
            { q: <>Write a loop with the body deliberately unindented — meet the error, then fix it.</> },
            { q: <>Write a loop whose second statement escapes the body by accident — predict the output BEFORE running, then verify.</> },
            { q: <>Break a loop with a missing colon, read the SyntaxError, repair it.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <><strong>for item in list:</strong> runs the indented body once per item — the loop ends automatically.</>,
            <>Indentation (4 spaces) is <strong>syntax, not style</strong>: it decides what is inside the loop and what is not.</>,
            <>Four classic errors: <strong>missing indent · escaped body line · unexpected indent · missing colon</strong> — two crash, two misbehave.</>,
            <>Unindented lines after the loop run <strong>exactly once</strong>, when the loop completes.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
