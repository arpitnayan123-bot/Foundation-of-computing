"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Repeat,
  SquareStack,
  Puzzle,
  Play,
  CornerDownRight,
  Cog,
  RotateCcw,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, Practice, Takeaways, StepsFlow, ReadStep } from "./ui";

/* The journey of input() — five stages from prompt to usable number. */
function InputJourney() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const stages = [
    { label: "① prompt appears", code: `"How old are you? "`, sub: "your prompt is shown" },
    { label: "② you type", code: "21", sub: "plain text at the keyboard" },
    { label: "③ press Enter", code: "↵", sub: "the program wakes up" },
    { label: "④ input() returns", code: '“21”', sub: "a STRING — always!", warn: true },
    { label: "⑤ convert", code: 'int(“21”) → 21', sub: "now it is a number" },
  ];
  return (
    <svg viewBox="0 0 780 236" className="mx-auto w-full max-w-3xl" role="img" aria-label="The journey of input()">
      <defs>
        <marker id="ij-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>
      {stages.map((s, i) => (
        <g key={s.label} transform={`translate(${24 + i * 152}, 30)`}>
          <rect x="0" y="0" width="136" height="86" rx="12" fill="#fff" stroke={s.warn ? "#be4a4a" : "#e0b98a"} strokeWidth={s.warn ? 2.5 : 1.5} />
          <text x="68" y="22" textAnchor="middle" fontSize="10" fontWeight="800" fill={s.warn ? "#a13636" : "#8a4508"}>{s.label}</text>
          <text x="68" y="48" textAnchor="middle" fontFamily={mono} fontSize="12.5" fontWeight="700" fill="#2b2014">{s.code}</text>
          <text x="68" y="70" textAnchor="middle" fontSize="9.5" fill={s.warn ? "#a13636" : "#7a5b39"}>{s.sub}</text>
          {i < stages.length - 1 ? (
            <path d="M138 43 L150 43" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#ij-arr)" />
          ) : null}
        </g>
      ))}
      {/* the trap */}
      <rect x="24" y="138" width="736" height="80" rx="12" fill="#fdeeea" stroke="#f0c1b4" />
      <text x="42" y="164" fontSize="12" fontWeight="800" fill="#a13636">THE classic trap</text>
      <text x="42" y="186" fontFamily={mono} fontSize="12" fill="#2b2014">age = input("How old are you? ")   →   age &gt;= 18   →   TypeError!</text>
      <text x="42" y="206" fontSize="11.5" fill="#7a5b39">you can’t compare text with a number — wrap with int() the moment the value arrives: age = int(input(...))</text>
    </svg>
  );
}

/* The exit toolkit — four ways a while loop ends (or skips). */
const EXITS = [
  {
    name: "sentinel value",
    tagline: "the loop itself asks a question",
    code: "while message != 'quit':\n    message = input(...)" ,
    note: "the user types the magic word and the condition goes False on its own",
    color: "#c2410c",
  },
  {
    name: "flag",
    tagline: "one variable governs everything",
    code: "while active:\n    if message == 'quit':\n        active = False",
    note: "many different events can flip the flag — handy in bigger programs",
    color: "#d97706",
  },
  {
    name: "break",
    tagline: "leave RIGHT NOW",
    code: "while True:\n    if city == 'quit':\n        break",
    note: "jumps straight out of the loop — the rest of the body is skipped too",
    color: "#be4a4a",
  },
  {
    name: "continue",
    tagline: "skip this round only",
    code: "if current % 2 == 0:\n    continue",
    note: "jumps back to the condition test — abandons only this pass of the body",
    color: "#7c9a3e",
  },
];

/* (Shared with FocParts8 — the loop-control section imports it.) */
export function ExitToolkit() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {EXITS.map((e) => (
        <div key={e.name} className="card-warm overflow-hidden p-0">
          <div className="px-4 py-2.5" style={{ background: e.color }}>
            <p className="text-[.82rem] font-extrabold uppercase tracking-[.1em] text-[#fff7ec]">{e.name}</p>
            <p className="text-[.68rem] font-semibold text-[#fde8cf]">{e.tagline}</p>
          </div>
          <div className="p-4">
            <pre className="rounded-lg px-3 py-2 font-mono-warm text-[.72rem] leading-relaxed text-[#f5deb0]" style={{ background: "#2b1b10" }}>
              {e.code}
            </pre>
            <p className="mt-2.5 text-[.8rem] leading-relaxed text-[#2b2014]">{e.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

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
        lead="Until now your programs ran top to bottom and finished. input() makes them listen; while makes them persist. This chapter is one conversation: ask the user something, keep responding until they say stop. Two steps here — the exits live in Lecture 26."
      />

      {/* STEP 1 — input() */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
            <strong>input()</strong> takes one argument — the <strong>prompt</strong> — prints it, then
            <em> freezes the whole program</em> until the user presses Enter. Whatever they typed comes
            back <strong>as a string</strong>, and you store it in a variable. Follow the value on its
            journey — and watch the trap at the bottom of the diagram:
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <InputJourney />
          </div>
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

      {/* STEP 2 — while loops */}
      <ReadStep n="2" title="while — repeat until the job is done" sub="A for loop counts items; a while loop keeps going as long as its condition stays True" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="mb-5 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            Use a <strong>while loop</strong> when you <em>don’t know in advance</em> how many times
            to repeat — how many users will log in? how many toppings will they ask for? Python
            tests the condition, runs the body, tests again… The diagram is the whole story:
          </p>
          <div className="rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
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
              title="the three moving parts — name them in every while you write"
              code={`# 1) where the variable starts
runs = 0

# 2) the condition that decides to keep going
while runs < 3:
    print(f"lap {runs + 1}")

    # 3) the change that moves toward False
    runs += 1

print("done — the condition finally failed")`}
              output={"lap 1\nlap 2\nlap 3\ndone — the condition finally failed"}
              note="Every correct while loop answers three questions: where does the variable start, what must stay True, and what changes it each pass? Miss the third and you loop forever."
            />
          </div>
          <Callout kind="warn" title="Avoiding infinite loops">
            Every while loop needs something that can make its condition False: a
            counter that increments, a flag that flips, a break. If the loop never
            ends, trace the variable the condition depends on — is anything changing it?
          </Callout>
        </div>
      </Reveal>

      {/* STEP 3 — pointer to the loop-control lecture */}
      <Reveal>
        <Callout kind="story" title="Four ways out — next lecture">
          The exit toolkit — <strong>flags, break, continue</strong> — and while loops that
          drain lists and fill dictionaries are the whole of Lecture 26,
          &ldquo;Flags, Break &amp; Continue&rdquo;. First, make the counting loop below
          second nature.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
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
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>input() shows a prompt and returns a string</strong>; convert with <strong>int()</strong> for math; <strong>% modulo</strong> gives remainders.</>,
            <><strong>while condition:</strong> repeats while True — the counter, flag or break must guarantee eventual False, or you have an infinite loop.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   FUNCTIONS PREVIEW + GRAND SUMMARY + FOOTER
   ============================================================ */

/* The function machine — inputs in, named job, output out. */
function FunctionMachine() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <svg viewBox="0 0 780 262" className="mx-auto w-full max-w-3xl" role="img" aria-label="A function is a machine with a name">
      <defs>
        <marker id="fm-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>

      {/* inputs */}
      <text x="130" y="36" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#8a4508">ARGUMENTS GO IN</text>
      <rect x="48" y="52" width="164" height="42" rx="10" fill="#fff" stroke="#e0b98a" strokeWidth="1.5" />
      <text x="130" y="79" textAnchor="middle" fontFamily={mono} fontSize="13" fontWeight="700" fill="#2b2014">greet_user('jesse')</text>
      <rect x="48" y="112" width="164" height="42" rx="10" fill="#fff" stroke="#e0b98a" strokeWidth="1.5" />
      <text x="130" y="139" textAnchor="middle" fontFamily={mono} fontSize="13" fontWeight="700" fill="#2b2014">greet_user('arpit')</text>
      <path d="M214 73 L268 105" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#fm-arr)" />
      <path d="M214 133 L268 118" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#fm-arr)" />

      {/* the machine */}
      <text x="385" y="36" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#8a4508">DEFINED ONCE — WITH def</text>
      <rect x="272" y="50" width="226" height="150" rx="16" fill="#c2410c" />
      <text x="385" y="80" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff7ec">greet_user</text>
      <rect x="292" y="94" width="186" height="86" rx="10" fill="#2b1b10" />
      <text x="304" y="120" fontFamily={mono} fontSize="10.5" fill="#8a6d4f">&quot;&quot;&quot;say hello&quot;&quot;&quot;</text>
      <text x="304" y="146" fontFamily={mono} fontSize="10.5" fill="#a3c76d">print(f&quot;Hello,</text>
      <text x="304" y="164" fontFamily={mono} fontSize="10.5" fill="#a3c76d">  {`{username}`}!&quot;)</text>
      <path d="M385 208 L385 226" stroke="#8a5a22" strokeWidth="1.6" fill="none" />
      <text x="385" y="244" textAnchor="middle" fontSize="10.5" fill="#7a5b39">called whenever you need it — a body that only runs on demand</text>

      {/* output */}
      <path d="M500 118 L546 118" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#fm-arr)" />
      <text x="660" y="36" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#8a4508">THE JOB GETS DONE</text>
      <rect x="552" y="52" width="216" height="42" rx="10" fill="#3e2c1d" />
      <text x="660" y="79" textAnchor="middle" fontFamily={mono} fontSize="12.5" fontWeight="700" fill="#f5c889">Hello, Jesse!</text>
      <rect x="552" y="112" width="216" height="42" rx="10" fill="#3e2c1d" />
      <text x="660" y="139" textAnchor="middle" fontFamily={mono} fontSize="12.5" fontWeight="700" fill="#f5c889">Hello, Arpit!</text>

      {/* caption */}
      <rect x="130" y="212" width="0" height="0" />
      <text x="660" y="196" textAnchor="middle" fontSize="11" fill="#7a5b39">same machine</text>
      <text x="660" y="212" textAnchor="middle" fontSize="11" fill="#7a5b39">different input → different result</text>
      <text x="130" y="212" textAnchor="middle" fontSize="11" fill="#7a5b39">write the steps once,</text>
      <text x="130" y="228" textAnchor="middle" fontSize="11" fill="#7a5b39">summon them by name forever</text>
    </svg>
  );
}

/* Anatomy of a function definition + its call — every piece labeled. */
function DefAnatomy() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <svg viewBox="0 0 780 348" className="mx-auto w-full max-w-3xl" role="img" aria-label="Anatomy of a function definition and call">
      {/* code panel */}
      <rect x="24" y="20" width="380" height="240" rx="14" fill="#2b1b10" />
      <circle cx="48" cy="42" r="4.5" fill="#be4a4a" />
      <circle cx="64" cy="42" r="4.5" fill="#d97706" />
      <circle cx="80" cy="42" r="4.5" fill="#7c9a3e" />

      <text x="46" y="82" fontFamily={mono} fontSize="13.5">
        <tspan fill="#fb923c" fontWeight="800">def</tspan>
        <tspan fill="#e9d7bf"> greet_user</tspan>
        <tspan fill="#e9d7bf">(</tspan>
        <tspan fill="#f5c889" fontWeight="700">username</tspan>
        <tspan fill="#e4674a" fontWeight="800">)</tspan>
        <tspan fill="#e4674a" fontWeight="800">:</tspan>
      </text>
      <text x="70" y="116" fontFamily={mono} fontSize="13" fill="#8a6d4f">&quot;&quot;&quot;Display a simple greeting.&quot;&quot;&quot;</text>
      <text x="70" y="150" fontFamily={mono} fontSize="13" fill="#a3c76d">print(f&quot;Hello, {'{username.title()}'}!&quot;)</text>
      <text x="46" y="196" fontFamily={mono} fontSize="13.5">
        <tspan fill="#e9d7bf" fontWeight="700">greet_user</tspan>
        <tspan fill="#e9d7bf">(</tspan>
        <tspan fill="#f5c889" fontWeight="700">'jesse'</tspan>
        <tspan fill="#e9d7bf">)</tspan>
      </text>
      <text x="46" y="236" fontFamily={mono} fontSize="11" fill="#6b5238"># ← the call: Python finally runs the body</text>

      {/* legend */}
      {[
        { c: "#fb923c", t: "① def — the keyword: “I’m defining a function”" },
        { c: "#e9d7bf", t: "② the name — you’ll call it by this; pick a verb" },
        { c: "#f5c889", t: "③ parameter — an empty slot that catches input" },
        { c: "#8a6d4f", t: "④ docstring — one line naming the job" },
        { c: "#a3c76d", t: "⑤ body — indented steps that do the work" },
      ].map((r, i) => (
        <g key={r.t}>
          <circle cx="440" cy={52 + i * 34} r="5.5" fill={r.c} />
          <text x="456" y={56 + i * 34} fontSize="12" fill="#2b2014">{r.t}</text>
        </g>
      ))}
      <circle cx="440" cy="222" r="5.5" fill="#e9d7bf" />
      <circle cx="454" cy="222" r="5.5" fill="#f5c889" />
      <text x="470" y="226" fontSize="12" fill="#2b2014">⑥ the call — name + (); &apos;jesse&apos; lands in username</text>

      {/* def vs call strip */}
      <rect x="24" y="276" width="380" height="52" rx="12" fill="#eef3e2" stroke="#b9cc8f" />
      <text x="44" y="297" fontSize="12" fontWeight="800" fill="#4d6b1f">the def line</text>
      <text x="44" y="315" fontSize="12" fill="#4d6b1f">Python REMEMBERS the recipe — nothing runs</text>
      <rect x="424" y="276" width="332" height="52" rx="12" fill="#fdeeea" stroke="#f0c1b4" />
      <text x="444" y="297" fontSize="12" fontWeight="800" fill="#a13636">the call line</text>
      <text x="444" y="315" fontSize="12" fill="#a13636">Python finally RUNS the body — with 'jesse' inside</text>
    </svg>
  );
}

export function FunctionsSection() {
  return (
    <>
      <Section id="functions" dark>
        <SectionHead
          dark
          eyebrow="Python · functions · chapter 6"
          title={
            <>
              <span className="grad-text">Functions</span> — named blocks that do one job
            </>
          }
          lead="You have already felt the pain of repetition: the same greeting logic, the same printing pattern, again and again. A function lets you write a job ONCE, give it a name, and summon it by that name forever after. Three steps — the machine, the shape, the call — and it clicks."
        />

        {/* STEP 1 — the machine */}
        <Reveal>
          <div className="card-warm p-6 md:p-8">
            <p className="text-[.95rem] leading-relaxed text-[#e9d7bf]">
              The mental model first: <strong>a function is a machine with a name</strong>. You feed
              it inputs (<em>arguments</em>), it does its job (the <em>body</em>), and it hands a result
              back. Define the machine once — then call it a hundred times with different inputs:
            </p>
            <div className="mt-5 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
              <FunctionMachine />
            </div>
          </div>
        </Reveal>

        {/* STEP 2 — the shape */}
        <ReadStep dark n="2" title="See the shape — anatomy of a definition" sub="Two lines of vocabulary — def, parameter, docstring, call — carry the entire chapter" />
        <Reveal>
          <div className="rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <DefAnatomy />
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <CodeBlock
            dark
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

        {/* STEP 3 — the call */}
        <ReadStep dark n="3" title="What a call actually does — four beats" sub="Follow the jump: call → bind → run → return. This rhythm never changes, no matter how big the function" />
        <Reveal>
          <StepsFlow
            steps={[
              {
                label: "You call",
                sub: "greet_user('jesse') — Python pauses this line",
                icon: <Play className="h-5 w-5" style={{ color: "#c2410c" }} />,
              },
              {
                label: "Python jumps",
                sub: "to the def; 'jesse' is copied into username",
                icon: <CornerDownRight className="h-5 w-5" style={{ color: "#c2410c" }} />,
              },
              {
                label: "The body runs",
                sub: "the indented steps do their job",
                icon: <Cog className="h-5 w-5" style={{ color: "#c2410c" }} />,
              },
              {
                label: "Back you go",
                sub: "to the line after the call, as if nothing happened",
                icon: <RotateCcw className="h-5 w-5" style={{ color: "#c2410c" }} />,
              },
            ]}
          />
        </Reveal>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
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
          <div className="grid content-start gap-4">
            <Reveal delay={200}>
              <Callout dark kind="insight" title="Connect it back to Pillar 2">
                A function is an <strong>algorithm with a name</strong> — it has input
                (parameters), defined steps (the body) and output (return values). All
                five properties still apply. You’ve been training for this since the
                flowchart.
              </Callout>
            </Reveal>
            <Reveal delay={300}>
              <Callout dark kind="story" title="Where the story goes next">
                This page is the shape of the idea. The next two chapters go deeper:
                <strong> arguments & return values</strong> (positional vs keyword, defaults,
                what return really does), then <strong>functions at scale</strong> (passing
                lists, *args/**kwargs, modules). Master the machine here and they’ll feel easy.
              </Callout>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

