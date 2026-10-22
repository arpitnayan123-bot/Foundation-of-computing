"use client";

import React from "react";
import {
  Terminal,
  Repeat,
  Flag,
  SquareStack,
  Puzzle,
  Heart,
  ArrowUp,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, Practice, Takeaways, StepsFlow } from "./ui";

/* ---------- while loop cycle diagram ---------- */
function WhileCycle() {
  return (
    <svg viewBox="0 0 380 230" className="mx-auto w-full max-w-md" role="img" aria-label="while loop flow with break and continue">
      <defs>
        <marker id="ah3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>
      {/* main ring */}
      <g className="while-ring">
        <circle cx="190" cy="105" r="72" fill="none" stroke="#f0c98f" strokeWidth="3" strokeDasharray="10 8" />
      </g>
      {/* test */}
      <path d="M190 33 L242 105 L190 177 L138 105 Z" fill="#c2410c" />
      <text x="190" y="101" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#fff7ec">condition</text>
      <text x="190" y="116" textAnchor="middle" fontSize="9" fill="#fde8cf">True?</text>
      {/* loop body */}
      <rect x="66" y="88" width="86" height="34" rx="8" fill="#d97706" />
      <text x="109" y="109" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff7ec">loop body</text>
      {/* break */}
      <rect x="256" y="30" width="92" height="30" rx="8" fill="#be4a4a" />
      <text x="302" y="49" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff7ec">break → EXIT</text>
      <path d="M242 105 L285 105 L285 64" stroke="#be4a4a" strokeWidth="2" fill="none" markerEnd="url(#ah3)" />
      <text x="252" y="98" fontSize="8" fill="#7a5b39">False / break</text>
      {/* continue */}
      <rect x="30" y="150" width="96" height="30" rx="8" fill="#7c9a3e" />
      <text x="78" y="169" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff7ec">continue → skip</text>
      <path d="M138 160 L120 160 L108 122" stroke="#7c9a3e" strokeWidth="2" fill="none" markerEnd="url(#ah3)" />
      {/* exit */}
      <ellipse cx="302" cy="196" rx="52" ry="20" fill="#3e2c1d" />
      <text x="302" y="201" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff7ec">rest of code</text>
      <path d="M285 60 L285 176" stroke="#be4a4a" strokeWidth="2" fill="none" markerEnd="url(#ah3)" />
    </svg>
  );
}

export function WhileSection() {
  return (
    <Section id="while">
      <SectionHead
        eyebrow="Python · chapter 5"
        title={
          <>
            User input & <span className="grad-text">while</span> loops — interactive programs
          </>
        }
        lead="The input() function pauses your program and waits for the user. The while loop runs as long as a condition stays True — together they make programs that listen, respond and keep going."
      />

      {/* input() */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Terminal className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">How the input() function works</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            input() takes one argument — the <strong>prompt</strong> — shows it, waits
            for the user to press Enter, and returns whatever they typed <strong>as a
            string</strong>. Write clear, natural prompts ending with a space.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="greeter.py — clear prompts"
              code={`name = input("Please enter your name: ")
print(f"\\nHello, {name}!")

# Multi-line prompt with += 
prompt = "If you share your name, we can personalize it. "
prompt += "\\nWhat is your first name? "
name = input(prompt)`}
              output={"Please enter your name: Eric\n\nHello, Eric!"}
            />
            <CodeBlock
              title="rollercoaster.py — int() for numbers"
              code={`# input() ALWAYS returns a string!
age = input("How old are you? ")   # "21" not 21
# age >= 18 would crash — str vs int

# Convert with int():
age = int(input("How old are you? "))
if age >= 18:
    print("You are old enough to vote!")

# The modulo operator % — the remainder
number = int(input("Enter a number: "))
if number % 10 == 0:
    print(f"{number} is a multiple of 10.")
else:
    print(f"{number} is not a multiple of 10.")
print(4 % 3)   # 1  (odd/even check uses % 2)`}
              output={"How old are you? 21\nYou are old enough to vote!\nEnter a number: 40\n40 is a multiple of 10.\n1"}
            />
          </div>
        </div>
      </Reveal>

      {/* while loops */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Repeat className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Introducing while loops — run while True</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            A <strong>for loop</strong> runs once per item of a collection. A{" "}
            <strong>while loop</strong> runs <em>as long as a condition is True</em> —
            perfect when you don’t know in advance how many times to repeat (how many
            users will log in? how many toppings will they ask for?).
          </p>
          <div className="mt-6 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <WhileCycle />
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="counting.py — the while loop in action"
              code={`current_number = 1
while current_number <= 5:
    print(current_number)
    current_number += 1   # the update is ESSENTIAL`}
              output={"1\n2\n3\n4\n5"}
              note="Forget current_number += 1 and the condition stays True forever — an infinite loop. (In a terminal: Ctrl-C to stop; in Colab: interrupt the cell.)"
            />
            <CodeBlock
              title="quit_flag_break_continue.py — the full toolkit"
              code={`# 1) Let the user choose when to quit
prompt = "\\nTell me something, and I will repeat it back. "
prompt += "\\nEnter 'quit' to end. "
message = ""
while message != 'quit':
    message = input(prompt)
    if message != 'quit':
        print(message)

# 2) Using a FLAG — one variable governs the loop
active = True
while active:
    message = input(prompt)
    if message == 'quit':
        active = False      # flips the flag
    else:
        print(message)

# 3) break — exit the loop immediately
while True:
    city = input("\\nWhich city? ('quit' to stop) ")
    if city == 'quit':
        break
    print(f"{city.title()} — great choice!")

# 4) continue — skip back to the test
current = 0
while current < 10:
    current += 1
    if current % 2 == 0:
        continue            # skip the print for evens
    print(current)`}
              output={"1\n3\n5\n7\n9"}
            />
          </div>
          <Callout kind="warn" title="Avoiding infinite loops">
            Every while loop needs something that can make its condition False: a
            counter that increments, a flag that flips, a break. If the loop never
            ends, trace the variable the condition depends on — is anything changing it?
          </Callout>
        </div>
      </Reveal>

      {/* while with lists & dicts */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <SquareStack className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Using a while loop with lists and dictionaries</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="sandwich_shop.py — moving between lists"
              code={`sandwich_orders = ['tuna', 'pastrami', 'pastrami',
                   'veg', 'pastrami', 'grilled cheese']
finished_sandwiches = []

# The deli ran out of pastrami — remove ALL of them:
while 'pastrami' in sandwich_orders:
    sandwich_orders.remove('pastrami')

while sandwich_orders:          # while list not empty
    sandwich = sandwich_orders.pop()
    print(f"I made your {sandwich} sandwich.")
    finished_sandwiches.append(sandwich)

print("\\nAll sandwiches made:")
for s in finished_sandwiches:
    print(f"  · {s}")`}
              output={"I made your grilled cheese sandwich.\nI made your veg sandwich.\nI made your tuna sandwich.\n\nAll sandwiches made:\n  · grilled cheese\n  · veg\n  · tuna"}
              note="Two idioms to memorize: while x in list: list.remove(x) purges every occurrence; while list: pop() drains it."
            />
            <CodeBlock
              title="mountain_poll.py — filling a dictionary"
              code={`responses = {}

polling_active = True          # the flag again
while polling_active:
    name = input("\\nWhat is your name? ")
    response = input("Which mountain would you like to climb someday? ")
    responses[name] = response     # store key → value

    repeat = input("Another responder? (yes/ no) ")
    if repeat == 'no':
        polling_active = False

print("\\n--- Poll Results ---")
for name, mountain in responses.items():
    print(f"{name} would like to climb {mountain}.")`}
              output={"--- Poll Results ---\nEric would like to climb Denali.\nLynn would like to climb Devil's Thumb."}
              note="A while loop + a dictionary = a program that collects data until you tell it to stop. This tiny pattern is the seed of every survey app."
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What is the difference between break and continue inside a while loop?"
            options={[
              "They are identical",
              "break exits the loop entirely; continue jumps back to the condition test",
              "continue exits; break skips one iteration",
              "Only for-loops can use break",
            ]}
            answer={1}
            explain="break abandons the loop and moves to the code after it; continue abandons only the current iteration and returns to the while test."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Why does age = input('How old are you? ') followed by age >= 18 crash?"
            options={[
              "input() cannot store numbers",
              "input() returns a string; comparing str >= int raises TypeError",
              "The prompt must not contain a question mark",
              "It doesn’t crash",
            ]}
            answer={1}
            explain="input() always returns a string ('21', not 21). Wrap with int() to convert before numerical comparison — and remember the modulo % for remainder tests like multiples of 10."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — input & while drills"
          items={[
            { q: <>Ask what kind of rental car the user would like; print “Let me see if I can find you a Subaru.”</> },
            { q: <>Ask how many people are in their dinner group: more than eight → wait for a table; otherwise → table is ready.</> },
            { q: <>Ask for a number and report whether it is a multiple of 10.</>, hint: "number % 10 == 0" },
            { q: <>While loop for pizza toppings until 'quit'; confirm each topping: “I’ll add that topping to their pizza.”</> },
            { q: <>Movie tickets: while loop asking age — under 3 free, 3–12 $10, over 12 $15.</> },
            { q: <>Three versions of a loop exit: a conditional test in the while statement · an active flag variable · a break statement.</> },
            { q: <>Write a loop that never ends — and run it. Then stop it (Ctrl-C / interrupt) and explain why it never stops.</> },
            { q: <>sandwich_orders → finished_sandwiches: make each, move it, then list everything made.</> },
            { q: <>Ensure ‘pastrami’ appears three times, announce the deli ran out, while-remove all of them; prove none end up in finished_sandwiches.</> },
            { q: <>Dream-vacation poll: store name → place in a dictionary while polling; then print the results block.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>input() shows a prompt and returns a string</strong>; convert with <strong>int()</strong> for math; <strong>% modulo</strong> gives remainders.</>,
            <><strong>while condition:</strong> repeats while True — the counter, flag or break must guarantee eventual False, or you have an infinite loop.</>,
            <>Exit toolkit: <strong>sentinel value</strong> (‘quit’) · <strong>active flag</strong> · <strong>break</strong>; skip with <strong>continue</strong>.</>,
            <>Lists: <strong>while x in list: remove(x)</strong> purges all copies; <strong>while list: pop()</strong> transfers items. Dictionaries: collect responses while a flag is active, then report with .items().</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FUNCTIONS PREVIEW + GRAND SUMMARY + FOOTER
   ============================================================ */
export function FunctionsSection() {
  return (
    <>
      <Section id="functions" dark>
        <SectionHead
          dark
          eyebrow="Python · functions · the one-screen preview"
          title={
            <>
              <span className="grad-text">Functions</span> — named blocks that do one job
            </>
          }
          lead="The whole idea in one screen, so the shape is familiar — then the full story unfolds below: arguments and return values, functions at scale with *args and modules, and finally classes."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <CodeBlock
              title="greeter.py — your first function"
              code={`def greet_user(username):
    """Display a simple greeting."""
    print(f"Hello, {username.title()}!")

greet_user('jesse')     # call it — reuse forever
greet_user('arpit')`}
              output={"Hello, Jesse!\nHello, Arpit!"}
              note="def names the function · the string is a docstring describing what it does · parentheses pass information in."
            />
          </Reveal>
          <div className="grid content-start gap-4">
            <Reveal delay={100}>
              <div className="card-warm p-6">
                <div className="flex items-center gap-2">
                  <Puzzle className="h-5 w-5" style={{ color: "#f5c889" }} />
                  <h3 className="text-lg font-bold">Why functions matter</h3>
                </div>
                <ul className="mt-3 grid gap-2 text-[.88rem] leading-relaxed text-[#cbb392]">
                  <li>• They break programs into <strong>small parts</strong>, each doing <strong>one specific job</strong></li>
                  <li>• You can <strong>call a function as many times as you want</strong>, and store functions in separate files</li>
                  <li>• The result: <strong>more efficient code</strong> that is easier to troubleshoot and maintain — and reusable across many different programs</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <Callout dark kind="insight" title="Connect it back to Pillar 2">
                A function is an <strong>algorithm with a name</strong> — it has input
                (parameters), defined steps (the body) and output (return values). All
                five properties still apply. You’ve been training for this since the
                flowchart.
              </Callout>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ============================================================
   FOOTER (sticky)
   ============================================================ */
export function Footer() {
  return (
    <footer className="footer-stick relative overflow-hidden" style={{ background: "linear-gradient(165deg,#241608 0%,#2b1b10 45%,#402818 100%)" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(620px 300px at 22% 0%, rgba(245,158,11,.22), transparent 60%), radial-gradient(560px 280px at 78% 100%, rgba(194,65,12,.22), transparent 60%)",
        }}
      />
      {/* gold hairline on top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(245,200,137,.65), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-center gap-5 text-center">

          {/* monogram seal */}
          <div className="footer-seal" aria-hidden>
            AN
          </div>

          {/* created-by ornament line */}
          <div className="ornament w-full max-w-[16rem]">
            <span className="whitespace-nowrap text-[.62rem] font-extrabold uppercase tracking-[.4em] text-[#c99a63]">
              Created by
            </span>
          </div>

          {/* the name — serif italic, molten gold */}
          <p className="footer-name">Arpit&nbsp;Nayan</p>

          <p className="-mt-1 flex items-center gap-1.5 text-[.7rem] font-bold uppercase tracking-[.26em] text-[#b99a75]">
            design <Heart className="h-3 w-3" style={{ color: "#e4674a", fill: "#e4674a" }} /> code · pedagogy
          </p>

          <div className="mt-3 flex items-center gap-2 text-[.78rem] font-bold uppercase tracking-[.24em] text-[#e8b878]">
            <Flag className="h-4 w-4" />
            Foundations of Computing · Revision Notes
          </div>

          <p className="max-w-2xl text-[.92rem] leading-relaxed text-[#cbb392]">
            Every concept of the course — IPO, DIKW, the Four Pillars, Python from
            variables to classes — distilled into living, interactive notes for
            revision. B.S. in Management and Technology · IIT Jodhpur.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-[#5a3c24] px-5 py-2.5 text-[.8rem] font-bold text-[#f5c889] transition hover:bg-[rgba(245,158,11,.12)]"
          >
            <ArrowUp className="h-4 w-4" />
            Back to the top
          </a>

          <div className="mt-4 flex w-full flex-col items-center gap-2 border-t border-white/[.07] pt-5 sm:flex-row sm:justify-between">
            <p className="text-[.66rem] tracking-[.2em] text-[#8a6d4f]">
              WARM · PREMIUM · ANIMATED — BUILT FOR FULL UNDERSTANDING
            </p>
            <p className="text-[.66rem] tracking-[.14em] text-[#8a6d4f]">
              © {new Date().getFullYear()} Arpit Nayan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
