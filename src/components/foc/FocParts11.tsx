"use client";

/* ============================================================
   FocParts11 — the FoC rebuild, file 11.

   #numbers  (Lecture 10 — Introduction to Python Programming:
              Variables, Numbers, Strings, Comments, and Lists)

   The lecture builds progressively from basic string
   manipulation to working with numbers and handling mixed
   data types: a recap of string operations, the arithmetic
   five with **, PEMDAS/BODMAS ordering, the 0.30000000000000004
   float surprise, str() conversion, comments — then a first
   look at lists. The number/float/type-conversion/comment
   blocks and drills 2-8..2-10 are re-homed here from
   notes/Part5's old BasicsSection. Every output in this file
   is execution-verified with python3.
   ============================================================ */

import { Hash, ListOrdered, Sigma } from "lucide-react";
import {
  Callout,
  CodeBlock,
  KV,
  Practice,
  Quiz,
  ReadStep,
  Reveal,
  Section,
  SectionHead,
  Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   LECTURE 10 — #numbers
   ============================================================ */
export function NumbersSection() {
  return (
    <Section id="numbers">
      <SectionHead
        eyebrow="Lecture 10 · numbers, strings & comments"
        title={
          <>
            Numbers, strings &amp; comments — and a first look at{" "}
            <span className="grad-text">lists</span>
          </>
        }
        lead="This lecture builds progressively from basic string manipulation to working with numbers and handling mixed data types — the arithmetic five, order of operations, the float precision surprise, str() conversion and comments, before lists enter the story."
      />

      {/* 1 — String operations recap */}
      <ReadStep
        n="1"
        title="String operations — the recap"
        sub="Everything strings can do so far, in one compact card"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-2.5">
            <KV
              k="Series of characters"
              v="Strings are series of characters written between single or double quotes — anything inside quotes is a string."
            />
            <KV
              k="Concatenation"
              v="Combine multiple strings with the + operator."
            />
            <KV
              k="Special characters"
              v="\\t adds a tab; \\n starts a new line."
            />
            <KV
              k="Whitespace management"
              v="strip() removes unwanted spaces from both sides; lstrip() from the left; rstrip() from the right."
            />
            <KV
              k="Displaying quotes"
              v={'Alternate the quote types — \'He said "Hello"\' — or escape the marks with backslashes to print quotation marks in output.'}
            />
          </div>
        </div>
      </Reveal>

      {/* 2 — Numerical operations */}
      <ReadStep
        n="2"
        title="Numerical operations"
        sub="The arithmetic five, PEMDAS/BODMAS ordering, and integers vs floats"
      />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Hash className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">The arithmetic five — and how Python orders them</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Python treats numbers in several ways depending on use: <strong>integers</strong> are
            whole numbers; <strong>floats</strong> are any number with a decimal point. Division
            deserves a flag — it always comes back as a float, even when the result is whole.
          </p>
          <CodeBlock
            className="mt-5"
            title="try_arithmetic.py"
            code={`# The arithmetic five
print(2 + 3)      # addition         → 5
print(3 - 2)      # subtraction      → 1
print(2 * 3)      # multiplication   → 6  (asterisk)
print(3 / 2)      # division         → 1.5
print(3 ** 2)     # exponentiation   → 9  (double asterisk)

# Order of operations — Python follows PEMDAS/BODMAS;
# parentheses override the default order
print(2 + 3 * 4)      # 14
print((2 + 3) * 4)    # 20

# Integers vs floats — whole numbers vs a decimal point
print(16 / 2)     # 8.0 — division always returns a float
print(1_000_000)  # underscores make big numbers readable`}
            output={"5\n1\n6\n1.5\n9\n14\n20\n8.0\n1000000"}
            note="Multiplication wears an asterisk; exponentiation wears two — 3 ** 2 squares the number. Parentheses override the PEMDAS/BODMAS order whenever you need them to."
          />
        </div>
      </Reveal>

      {/* 3 — Float precision */}
      <ReadStep
        n="3"
        title="Float precision — the 0.30000000000000004 surprise"
        sub="Why 0.2 + 0.1 refuses to equal 0.3 — and why nobody worries"
      />
      <Reveal>
        <CodeBlock
          title="float_precision.py"
          code={`print(0.2 + 0.1)          # expect 0.3?
print(0.2 + 0.1 == 0.3)   # False!

# Every language has this quirk: computers store
# decimals in BINARY, and 0.1 has no exact binary
# form. Harmless for most apps — and fixable for
# display:
result = 0.2 + 0.1
print(f"{result:.2f}")    # two decimal places`}
          output={"0.30000000000000004\nFalse\n0.30"}
          note="A float is any number with a decimal point — a floating-point number. Python may display unexpected decimal places because of how computers internally represent numbers; this minor precision issue occurs in ALL programming languages and is generally of little concern for most applications. When display matters, :.2f trims it."
        />
      </Reveal>

      {/* 4 — Combining strings and numbers */}
      <ReadStep
        n="4"
        title="Combining strings and numbers"
        sub="The TypeError, two fixes — and the one that keeps your number numeric"
      />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Callout kind="warn" title="The TypeError problem">
            <code className="font-mono-warm">"happy" + 23 + "rd birthday"</code> raises a{" "}
            <strong>TypeError</strong> — Python cannot combine string and integer types. The{" "}
            <code className="font-mono-warm">+</code> joins two strings or adds two numbers, never
            both at once.
          </Callout>
          <div className="card-warm p-6">
            <p className="text-[.8rem] font-extrabold uppercase tracking-[.16em] text-[#8a5a10]">
              Two fixes — one keeps the number alive
            </p>
            <ul className="mt-3 grid gap-2.5 text-[.88rem] leading-relaxed text-[#2b2014]">
              <li>
                <strong>Solution 1 — quotation marks.</strong> Type the number as{" "}
                <code className="font-mono-warm">"23"</code> and the error disappears — but it is
                not ideal if the number is needed for calculations elsewhere in the program.
              </li>
              <li>
                <strong>Solution 2 — str().</strong>{" "}
                <code className="font-mono-warm">"happy " + str(23) + "rd birthday"</code> works
                correctly — and the advantage is real: it preserves the original numeric variable
                for other uses.
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5">
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="type_conversion.py — str() rescues the TypeError"
            code={`age = 23
# message = "happy " + age + "rd birthday"   # TypeError!
# Python refuses: + joins strings OR adds numbers,
# never both.

message = "happy " + str(age) + "rd birthday"
print(message)

# The number stays a number for maths elsewhere:
print(age + 1, "next year")`}
            output={"happy 23rd birthday\n24 next year"}
            note="str() converts the integer to a string for the concatenation while preserving the numeric variable for calculations — exactly why the lecture prefers it over typing quotes around the number."
          />
          <CodeBlock
            title="favorite_number.py"
            code={`favorite_number = 7
message = f"My favorite number is {favorite_number}."
print(message)`}
            output={"My favorite number is 7."}
            note="The f-string is the third way to mix numbers into text — and the model answer for Task 2 below."
          />
        </div>
      </Reveal>

      {/* 5 — Comments */}
      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Sigma className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Comments — notes in English, inside code</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Comments let programmers write notes in plain English within code, explaining the
            program&rsquo;s logic and approach. The hash symbol{" "}
            <code className="font-mono-warm font-bold">#</code> marks one — anything following it
            on a line is ignored by the Python interpreter. They are essential for collaborative
            programming, helping team members understand code functionality across different
            locations and projects — so write meaningful comments that describe{" "}
            <em>what the code does and how</em>.
          </p>
          <CodeBlock
            className="mt-5"
            title="comments.py"
            code={`# Say hello to everyone.
print("Hello Python people!")

# The hash (#) starts a comment — Python ignores the rest of the line.
# Write comments for the WHY, not the what: the code already says what it does.`}
            output={"Hello Python people!"}
          />
        </div>
      </Reveal>

      {/* 6 — A first look at lists */}
      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ListOrdered className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">A first look at lists</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Lists are Python&rsquo;s structures for storing <strong>sets of information in one
            place</strong> — from a few items to millions. They are one of Python&rsquo;s most
            powerful features, and unlike most powerful features they are accessible to new
            programmers. Lists tie together many important concepts explored in upcoming lectures
            — <strong>Lecture 11</strong> opens the door.
          </p>
          <CodeBlock
            className="mt-5"
            title="lists_teaser.py"
            code={`bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)      # a whole set of information, one variable
print(bicycles[0])   # one item out of the set`}
            output={"['trek', 'cannondale', 'redline', 'specialized']\ntrek"}
            note="Square brackets, comma-separated items — the full toolkit (indexes, negative indexing, append/insert/del/pop/remove) is Lecture 11's territory."
          />
        </div>
      </Reveal>

      {/* Exercises — the lecture's three tasks */}
      <Reveal className="mt-8">
        <Practice
          title="Try It Yourself — numbers & comments (Lecture 10)"
          items={[
            {
              q: <>Write four arithmetic operations — addition, subtraction, multiplication and division — that each result in the number 8, enclosed in print statements.</>,
              hint: "print(5 + 3) is the model — 10 - 2, 2 * 4 and 16 / 2 land on 8 too (division arrives as 8.0, a float)",
            },
            {
              q: <>Store a favorite number in a variable, then create a message that reveals it — and print that message.</>,
              hint: 'f"My favorite number is {favorite_number}." — or concatenate with str()',
            },
            {
              q: <>Choose two previously written programs and add at least one comment to each describing what the program does.</>,
              hint: "one # line per program — describe the approach, not the obvious",
            },
          ]}
        />
      </Reveal>

      {/* Quizzes */}
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="print(0.2 + 0.1) — what does Python actually display?"
            options={["0.3", "0.30", "0.30000000000000004", "It raises a TypeError"]}
            answer={2}
            explain="Computers store decimals in binary and 0.1 has no exact binary form, so the sum drags stray digits along. This minor precision issue occurs in ALL programming languages and is generally of little concern — format the display with :.2f when it matters."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="age = 23 — which line prints happy 23rd birthday and keeps age usable for maths elsewhere?"
            options={[
              'message = "happy " + age + "rd birthday"',
              'message = "happy " + "23" + "rd birthday"',
              'message = "happy " + str(age) + "rd birthday"',
              "message = happy + 23 + rd birthday",
            ]}
            answer={2}
            explain='+ joins two strings or adds two numbers — never both, so mixing them raises a TypeError. Quoting ("23") works but freezes the number as text; str(age) converts just for the concatenation while the numeric variable survives for calculations.'
          />
        </Reveal>
      </div>

      {/* Takeaways */}
      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>The arithmetic five: <strong>+ - * /</strong> and <strong>**</strong> — the double asterisk is exponentiation (3 ** 2 → 9). Integers are whole numbers, floats carry a decimal point, and division always returns a float.</>,
            <>Python evaluates in <strong>PEMDAS/BODMAS</strong> order — parentheses override it: (2 + 3) * 4 → 20.</>,
            <>The <strong>float precision quirk</strong> (0.30000000000000004) appears in every language and is of little concern; <strong>str()</strong> weaves a number into a string while preserving the numeric variable.</>,
            <>Comments (<code className="font-mono-warm">#</code>) explain the <em>why</em> — anything after the hash is ignored, and meaningful comments keep collaboration alive across locations and projects.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
