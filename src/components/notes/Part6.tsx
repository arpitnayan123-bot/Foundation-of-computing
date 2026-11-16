"use client";

import React, { useState } from "react";
import {
  Repeat,
  Boxes,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, Practice, Takeaways, ReadStep } from "./ui";

/* Hidden setup — these loop demos continue the poll dictionary from the
   previous step; the runner recreates it so the Run matches the page.
   (Shared with FocParts7 — the dict-loops section reuses it.) */
export const POLL_PRE = `favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python',
    }`;

/* ---------- If section ---------- */
const TEST_OPS = [
  { op: "==", read: "is equal to" },
  { op: "!=", read: "is not equal to" },
  { op: ">", read: "greater than" },
  { op: "<", read: "less than" },
  { op: ">=", read: "greater than or equal to" },
  { op: "<=", read: "less than or equal to" },
];

/* Anatomy of an if statement — every part of the syntax, labeled. */
function IfAnatomy() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <svg viewBox="0 0 780 320" className="mx-auto w-full max-w-3xl" role="img" aria-label="Anatomy of an if statement">
      {/* code panel */}
      <rect x="24" y="20" width="356" height="212" rx="14" fill="#2b1b10" />
      <circle cx="48" cy="42" r="4.5" fill="#be4a4a" />
      <circle cx="64" cy="42" r="4.5" fill="#d97706" />
      <circle cx="80" cy="42" r="4.5" fill="#7c9a3e" />

      <text x="46" y="82" fontFamily={mono} fontSize="13.5" fill="#e9d7bf">age = 19</text>
      <text x="46" y="116" fontFamily={mono} fontSize="13.5">
        <tspan fill="#fb923c" fontWeight="800">if</tspan>
        <tspan fill="#f5deb0"> age &gt;= 18</tspan>
        <tspan fill="#e4674a" fontWeight="800">:</tspan>
      </text>
      {/* indent guide next to the body line */}
      <rect x="46" y="132" width="5" height="20" rx="2.5" fill="#7c9a3e" />
      <text x="62" y="148" fontFamily={mono} fontSize="13.5" fill="#a3c76d">print(&quot;Old enough to vote!&quot;)</text>
      <text x="46" y="180" fontFamily={mono} fontSize="13.5" fill="#9a8168">print(&quot;This line always runs.&quot;)</text>
      <text x="46" y="212" fontFamily={mono} fontSize="11" fill="#6b5238"># ← not indented, so it is OUTSIDE the if</text>

      {/* legend */}
      {[
        { c: "#fb923c", t: "the keyword if — announces a decision" },
        { c: "#f5deb0", t: "the condition — a question answered True or False" },
        { c: "#e4674a", t: "the colon — “an indented block follows”" },
        { c: "#a3c76d", t: "the body — 4-space indent = inside the if" },
        { c: "#9a8168", t: "no indent = outside — runs every time" },
      ].map((r, i) => (
        <g key={r.t}>
          <circle cx="420" cy={46 + i * 34} r="5.5" fill={r.c} />
          <text x="436" y={50 + i * 34} fontSize="12.5" fill="#2b2014">{r.t}</text>
        </g>
      ))}

      {/* outcomes */}
      <rect x="24" y="252" width="356" height="52" rx="12" fill="#eef3e2" stroke="#b9cc8f" />
      <text x="44" y="273" fontSize="12" fontWeight="800" fill="#4d6b1f">condition True</text>
      <text x="44" y="291" fontSize="12" fill="#4d6b1f">→ the indented body runs</text>
      <rect x="400" y="252" width="356" height="52" rx="12" fill="#fdeeea" stroke="#f0c1b4" />
      <text x="420" y="273" fontSize="12" fontWeight="800" fill="#a13636">condition False</text>
      <text x="420" y="291" fontSize="12" fill="#a13636">→ body skipped — Python moves on</text>
    </svg>
  );
}

/* How Python walks an if-elif-else chain — classic True/False flowchart.
   (Shared with FocParts6 — the branches section imports it.) */
export function ChainWalk() {
  const rows = [
    { cy: 112, test: "age < 2 ?", hit: "baby", y: 94 },
    { cy: 224, test: "age < 4 ?", hit: "toddler", y: 206 },
    { cy: 336, test: "age < 13 ?", hit: "kid", y: 318 },
  ];
  return (
    <svg viewBox="0 0 620 470" className="mx-auto w-full max-w-xl" role="img" aria-label="How Python walks an if-elif-else chain">
      <defs>
        <marker id="cw-arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>

      {/* start */}
      <rect x="146" y="14" width="150" height="38" rx="10" fill="#3e2c1d" />
      <text x="221" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff7ec">start · age = 15</text>
      <path d="M221 52 L221 72" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#cw-arr)" />

      {rows.map((r, i) => (
        <g key={r.test}>
          {/* diamond */}
          <path d={`M221 ${r.cy - 40} L321 ${r.cy} L221 ${r.cy + 40} L121 ${r.cy} Z`} fill="#c2410c" />
          <text x="221" y={r.cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff7ec">{r.test}</text>
          {/* True branch */}
          <path d={`M321 ${r.cy} L381 ${r.cy}`} stroke="#7c9a3e" strokeWidth="2" fill="none" markerEnd="url(#cw-arr)" />
          <text x="338" y={r.cy - 8} fontSize="10.5" fontWeight="800" fill="#5c7a2a">True</text>
          <rect x="385" y={r.cy - 19} width="140" height="38" rx="10" fill="#7c9a3e" />
          <text x="455" y={r.cy + 5} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff7ec">{r.hit}</text>
          {/* False path down */}
          {i < rows.length - 1 ? (
            <>
              <path d={`M221 ${r.cy + 40} L221 ${r.cy + 72}`} stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#cw-arr)" />
              <text x="233" y={r.cy + 62} fontSize="10.5" fontWeight="800" fill="#a13636">False</text>
            </>
          ) : null}
        </g>
      ))}

      {/* else */}
      <path d="M221 376 L221 398" stroke="#8a5a22" strokeWidth="2" fill="none" markerEnd="url(#cw-arr)" />
      <text x="233" y="392" fontSize="10.5" fontWeight="800" fill="#a13636">False</text>
      <rect x="146" y="402" width="150" height="38" rx="10" fill="#3e2c1d" />
      <text x="221" y="426" textAnchor="middle" fontSize="12" fontWeight="700" fill="#f5c889">else → teenager</text>

      {/* the walkthrough note for age = 15 */}
      <rect x="385" y="402" width="200" height="38" rx="10" fill="#fbf3e3" stroke="#e5c79d" />
      <text x="485" y="417" textAnchor="middle" fontSize="10" fill="#7a5b39">age 15: all three False</text>
      <text x="485" y="431" textAnchor="middle" fontSize="10" fontWeight="700" fill="#8a4508">→ else catches it</text>

      <text x="310" y="465" textAnchor="middle" fontSize="11" fill="#7a5b39">
        check top → bottom · first True wins and runs · everything after is skipped
      </text>
    </svg>
  );
}

export function IfElseChainViz() {
  return (
    <svg viewBox="0 0 640 250" className="mx-auto w-full max-w-2xl" role="img" aria-label="if-elif-else chain">
      <defs>
        <marker id="ah2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>
      {[
        { x: 80, label: "if age < 2:", body: "baby", fill: "#7c9a3e", y: 20 },
        { x: 250, label: "elif age < 4:", body: "toddler", fill: "#d97706", y: 20 },
        { x: 420, label: "elif age < 13:", body: "kid", fill: "#ea580c", y: 20 },
        { x: 560, label: "else:", body: "…", fill: "#3e2c1d", y: 20 },
      ].map((n, i, arr) => (
        <React.Fragment key={n.label}>
          <path d={`M${n.x} ${n.y} L${n.x + 92} ${n.y} L${n.x + 76} ${n.y + 44} L${n.x - 16} ${n.y + 44} Z`} fill={n.fill} />
          <text x={n.x + 38} y={n.y + 17} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff7ec">
            {n.label}
          </text>
          <text x={n.x + 38} y={n.y + 33} textAnchor="middle" fontSize="9" fill="#fde8cf">
            {n.body}
          </text>
          {i < arr.length - 1 ? (
            <path d={`M${n.x + 88} ${n.y + 22} L${n.x + 130} ${n.y + 22} L${n.x + 130} ${n.y + 70} L${arr[i + 1].x - 24} ${n.y + 70} L${arr[i + 1].x - 24} ${n.y + 44}`} stroke="#8a5a22" strokeWidth="1.6" fill="none" strokeDasharray="4 4" markerEnd="url(#ah2)" />
          ) : null}
        </React.Fragment>
      ))}
      <text x="320" y="130" textAnchor="middle" fontSize="10" fill="#7a5b39">
        conditions checked top → bottom · the FIRST True branch wins · the rest are skipped
      </text>
      <text x="320" y="150" textAnchor="middle" fontSize="10" fill="#7a5b39">
        an elif only runs when everything above it was False
      </text>
      {/* stage of life strip */}
      {[
        ["0–1", "baby", "#7c9a3e"],
        ["2–3", "toddler", "#d97706"],
        ["4–12", "kid", "#ea580c"],
        ["13–19", "teenager", "#b45309"],
        ["20–64", "adult", "#8a5a22"],
        ["65+", "elder", "#3e2c1d"],
      ].map(([a, b, c], i) => (
        <g key={a}>
          <rect x={20 + i * 100} y="185" width="96" height="40" rx="8" fill={c as string} />
          <text x={68 + i * 100} y="202" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#fff7ec">{a} yrs</text>
          <text x={68 + i * 100} y="216" textAnchor="middle" fontSize="9.5" fill="#fde8cf">{b}</text>
        </g>
      ))}
    </svg>
  );
}

export function IfSection() {
  return (
    <Section id="if">
      <SectionHead
        eyebrow="Python · chapter 3"
        title={
          <>
            <span className="grad-text">if</span> statements — teaching code to decide
          </>
        }
        lead="Programs feel smart because they make choices: show this if the user is logged in, charge full price unless you're a student. The deck splits this chapter into three major topics — conditional tests, if statements, and using if statements with lists — and this session focuses exclusively on the conditional tests. Four-step first-read path: see the shape, ask the question, build the chain, then meet the classic traps."
      />

      {/* STEP 1 — the mental model */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
            Think of an <strong>if statement as a fork in the road</strong>. Python walks up to it,
            asks exactly one yes/no question (the <em>condition</em>), and takes one path only —
            <strong> True</strong> steps into the indented body, <strong>False</strong> skips straight past it. That is
            the entire idea. Everything else in this chapter is just progressively better ways of
            asking that one question. Here is every piece of the syntax on one diagram:
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <IfAnatomy />
          </div>
          <div className="mt-5">
            <CodeBlock
              title="voting.py — the smallest useful decision"
              code={`age = 19
if age >= 18:
    print("You are old enough to vote!")
    print("Have you registered yet?")

print("(this line is not indented — it always runs)")`}
              output={"You are old enough to vote!\nHave you registered yet?\n(this line is not indented — it always runs)"}
              note="The condition age >= 18 is True, so both indented lines run. Set age = 17 and Python silently skips them — no error, it just takes the other path. Indentation IS the structure: 4 spaces say 'I belong to the if'."
            />
          </div>
        </div>
      </Reveal>

      {/* The deck's practical introduction — the car-names demo (PDF Lecture 17) */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="text-[.95rem] leading-relaxed text-[#2b2014]">
            The lecture opens with a <strong>car-names demo</strong>: display every car in
            title case — except <strong>BMW</strong>, which must appear in ALL uppercase.
            One loop, one conditional test, two different reactions. The key concept: the
            <strong> indentation after the if and else keywords</strong> tells Python which
            code block executes based on the test result.
          </p>
          <div className="mt-5">
            <CodeBlock
              title="cars.py — the lecture's opening example"
              code={`cars = ['audi', 'bmw', 'ferrari', 'jaguar', 'tesla']
for car in cars:
    if car == 'bmw':
        print(car.upper())    # test is True  → this indented block runs
    else:
        print(car.title())    # test is False → this indented block runs`}
              output={"Audi\nBMW\nFerrari\nJaguar\nTesla"}
              note="Every if statement has a conditional test at its heart — an expression evaluated as True or False. Python uses that true/false answer to decide whether the code following the if runs or is ignored. The else branch is Lecture 18's star; here it just completes the demo."
            />
          </div>
        </div>
      </Reveal>

      {/* STEP 2 — conditional tests */}
      <ReadStep n="2" title="Conditional tests — asking yes/no questions" sub="Every if begins with an expression that is True or False — master these six operators and the logic words" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            {TEST_OPS.map((o) => (
              <span key={o.op} className="chip">
                <code className="font-mono-warm font-bold">{o.op}</code> {o.read}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="equality_tests.py"
              code={`# Single = assigns a value; double == compares two values
car = 'BMW'               # assignment
print(car == 'BMW')       # comparison → True (values match)
print(car == 'Audi')      # comparison → False

# The exercise pattern: print a prediction, then the test
car = 'subaru'
print("Is car == 'subaru'? I predict True.")
print(car == 'subaru')      # True

print("\\nIs car == 'audi'? I predict False.")
print(car == 'audi')        # False

# Case matters — Python treats upper and lower as different: 'Audi' != 'audi'
car = 'Audi'
print(car == 'audi')              # False
print(car.lower() == 'audi')      # True  — lower() affects only the comparison
print(car)                        # Audi — the stored value is NOT changed

# Real world: websites lower() both sides when checking sign-ups, so
# 'John', 'JOHN' and 'john' are ONE username — never three accounts.

# != checks inequality — the exclamation point means "not"
requested_topping = 'mushrooms'
if requested_topping != 'anchovies':
    print("Hold the anchovies!")`}
              output={"True\nFalse\nIs car == 'subaru'? I predict True.\nTrue\n\nIs car == 'audi'? I predict False.\nFalse\nFalse\nTrue\nAudi\nHold the anchovies!"}
              note="The equality operator returns True if the values on both sides match, False otherwise. case-sensitive comparisons trip up beginners: two values with different capitalization are simply not equal."
            />
            <CodeBlock
              title="numerical_and_logical.py"
              code={`# Numerical comparisons — age = 19 from the deck
age = 19
print(age < 21)       # True
print(age >= 21)      # False
print(age == 19)      # True

# and / or — parentheses around each test = readability best practice
age_0, age_1 = 22, 18
print((age_0 >= 21) and (age_1 >= 21))   # False — BOTH tests must pass
print((age_0 >= 21) or (age_1 >= 21))    # True  — at least one passes

# in — does the value exist in the list?
requested_toppings = ['mushrooms', 'onions', 'pineapple']
print('mushrooms' in requested_toppings)   # True
print('pepperoni' in requested_toppings)   # False

# not in — is the value absent? (forum banned-users check)
banned_users = ['Andrew', 'Carolina', 'David']
user = 'Mary'
if user not in banned_users:
    print("Mary, you can post a response")

# Boolean expressions — another name for a conditional test.
# True and False are Python keywords (capital first letter).
game_active = True
can_edit = False
if game_active:
    print("Game is running")    # runs — the flag is True
if can_edit:
    print("You can edit")       # ignored — the flag is False`}
              output={"True\nFalse\nTrue\nFalse\nTrue\nTrue\nFalse\nMary, you can post a response\nGame is running"}
              note="in shines for questions like: is this username already taken? is this city in our delivery list? is this topping available? not in is its mirror — presence vs absence. Booleans are the efficient way to track a program's state, like whether a game is active."
            />
          </div>
        </div>
      </Reveal>

      {/* STEP 3 — pointer to the branches lecture */}
      <Reveal>
        <Callout kind="story" title="Where the questions go next">
          You can now ask any yes/no question Python can answer. The deck&apos;s roadmap for
          this chapter: <strong>conditional tests (this lecture) → if statements (Lecture 18:
          if-else, the elif ladder, independent ifs) → using if statements with lists
          (Lecture 20: special items, empty guards, multiple lists)</strong>. Each sitting
          builds directly on the one before.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What does car.lower() == 'audi' return if car = 'Audi'?"
            options={["False — lower() changes car permanently", "True — lower() normalizes just for this comparison", "TypeError", "It depends on the locale"]}
            answer={1}
            explain=".lower() does NOT change the stored value — it returns a lowercase copy used only in this comparison. print(car) would still show 'Audi'."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="(age_0 >= 21) or (age_1 >= 21) with age_0 = 22, age_1 = 18 evaluates to…"
            options={["False — one of them failed", "True — or needs at least one pass", "Error — you cannot combine tests", "True only if both pass"]}
            answer={1}
            explain="or passes when EITHER test passes: True or False → True. and would have demanded both."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — conditional-test drills"
          items={[
            { q: <>Series of conditional tests with printed predictions (car = 'subaru' pattern) — at least 10 tests evaluating to True and False.</> },
            { q: <>At least one True and one False for: string equality/inequality · lower() tests · numerical {'==, !=, >, <, >=, <='} · and / or · in a list · not in a list.</> },
            { q: <>Banned users: check whether 'Mary' can post a response — and whether 'David' can.</>, hint: "user not in banned_users" },
            { q: <>Booleans: track game_active and can_edit; write two if statements that behave differently from the same pattern.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Conditional tests always evaluate to <strong>True or False</strong>; <strong>= assigns, == compares</strong>; normalize case with <strong>lower()</strong>.</>,
            <><strong>and</strong> requires both, <strong>or</strong> requires one; <strong>in / not in</strong> test membership; booleans like <code className="font-mono-warm">game_active</code> name your states.</>,
            <>These tests are the <strong>heart of every if statement</strong> — the branches they drive live in Lecture 18.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   DICTIONARIES
   ============================================================ */

/* The core mental model — same data as a list (by position) and
   as a dictionary (by label). Wrapped in a light panel so the
   warm palette reads well on the dark section. */
function ListVsDict() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <svg viewBox="0 0 780 300" className="mx-auto w-full max-w-3xl" role="img" aria-label="A list finds things by position, a dictionary by label">
      {/* ---------- left: list ---------- */}
      <text x="195" y="34" textAnchor="middle" fontSize="14" fontWeight="800" fill="#8a4508">a LIST — numbered shelf</text>
      {["'green'", "5", "'slow'"].map((v, i) => (
        <g key={v}>
          <text x={72 + i * 108} y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="#a13636">{`[0]`.replace("0", String(i))}</text>
          <rect x={40 + i * 108} y="78" width="90" height="46" rx="10" fill="#fff" stroke="#e0b98a" strokeWidth="1.5" />
          <text x={85 + i * 108} y="106" textAnchor="middle" fontFamily={mono} fontSize="12.5" fill="#2b2014">{v}</text>
        </g>
      ))}
      <text x="195" y="162" textAnchor="middle" fontFamily={mono} fontSize="12.5" fill="#8a4508">list[0] → 'green'</text>
      <text x="195" y="188" textAnchor="middle" fontSize="11.5" fill="#7a5b39">you must REMEMBER what position 0,</text>
      <text x="195" y="204" textAnchor="middle" fontSize="11.5" fill="#7a5b39">1, 2 … mean. Positions say nothing.</text>

      {/* divider */}
      <path d="M390 20 L390 275" stroke="#e5c79d" strokeWidth="1.5" strokeDasharray="5 6" />

      {/* ---------- right: dictionary ---------- */}
      <text x="585" y="34" textAnchor="middle" fontSize="14" fontWeight="800" fill="#8a4508">a DICTIONARY — labeled drawers</text>
      {[
        { k: "'color'", v: "'green'" },
        { k: "'points'", v: "5" },
        { k: "'speed'", v: "'slow'" },
      ].map((p, i) => (
        <g key={p.k}>
          <rect x={430 + i * 108} y="52" width="94" height="32" rx="8" fill="#8a4508" />
          <text x={477 + i * 108} y="73" textAnchor="middle" fontFamily={mono} fontSize="11.5" fontWeight="700" fill="#fde8cf">{p.k}</text>
          <path d={`M${477 + i * 108} 88 L${477 + i * 108} 106`} stroke="#8a5a22" strokeWidth="1.6" fill="none" markerEnd="url(#lvd-a)" />
          <rect x={430 + i * 108} y="110" width="94" height="46" rx="10" fill="#fff" stroke="#e0b98a" strokeWidth="1.5" />
          <text x={477 + i * 108} y="138" textAnchor="middle" fontFamily={mono} fontSize="12.5" fill="#2b2014">{p.v}</text>
        </g>
      ))}
      <text x="585" y="196" textAnchor="middle" fontFamily={mono} fontSize="12.5" fill="#8a4508">alien['color'] → 'green'</text>
      <text x="585" y="222" textAnchor="middle" fontSize="11.5" fill="#7a5b39">the label IS the meaning — color is a</text>
      <text x="585" y="238" textAnchor="middle" fontSize="11.5" fill="#7a5b39">color, points are points. Reads like English.</text>

      {/* caption */}
      <rect x="60" y="256" width="660" height="36" rx="10" fill="#fbf3e3" stroke="#e5c79d" />
      <text x="390" y="279" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#7a4a10">
        same data, two shapes — lists answer “which position?”, dictionaries answer “which label?”
      </text>

      <defs>
        <marker id="lvd-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill="#8a5a22" />
        </marker>
      </defs>
    </svg>
  );
}

/* The three loop lenses — .items() / .keys() / .values()
   (Shared with FocParts7 — the dict-loops section imports it.) */
export function DictLenses() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const lenses = [
    {
      method: ".items()",
      gives: "key AND value, together",
      code: "for name, lang in d.items():",
      out: ["jen → python", "sarah → c"],
      fill: "#c2410c",
    },
    {
      method: ".keys()",
      gives: "just the labels (the default)",
      code: "for name in d.keys():",
      out: ["jen", "sarah"],
      fill: "#d97706",
    },
    {
      method: ".values()",
      gives: "just the answers",
      code: "for lang in d.values():",
      out: ["python", "c"],
      fill: "#7c9a3e",
    },
  ];
  return (
    <svg viewBox="0 0 780 236" className="mx-auto w-full max-w-3xl" role="img" aria-label="Three ways to loop through a dictionary">
      {/* source dict */}
      <rect x="24" y="22" width="470" height="42" rx="10" fill="#2b1b10" />
      <text x="42" y="48" fontFamily={mono} fontSize="12" fill="#e9d7bf">d = {'{'}&apos;jen&apos;: &apos;python&apos;, &apos;sarah&apos;: &apos;c&apos;{'}'}</text>
      <text x="516" y="48" fontSize="11.5" fill="#7a5b39">← one dictionary,</text>
      <text x="516" y="62" fontSize="11.5" fill="#7a5b39">three ways to walk it</text>

      {lenses.map((l, i) => (
        <g key={l.method} transform={`translate(${24 + i * 252}, 86)`}>
          <rect x="0" y="0" width="228" height="132" rx="14" fill="#fff" stroke="#e5c79d" strokeWidth="1.5" />
          <rect x="0" y="0" width="228" height="34" rx="14" fill={l.fill} />
          <rect x="0" y="18" width="228" height="16" fill={l.fill} />
          <text x="114" y="23" textAnchor="middle" fontFamily={mono} fontSize="13" fontWeight="800" fill="#fff7ec">{l.method}</text>
          <text x="114" y="56" textAnchor="middle" fontSize="11" fontWeight="700" fill="#7a5b39">{l.gives}</text>
          <text x="114" y="80" textAnchor="middle" fontFamily={mono} fontSize="10.5" fill="#8a4508">{l.code}</text>
          {l.out.map((o, j) => (
            <text key={o} x="114" y={102 + j * 17} textAnchor="middle" fontFamily={mono} fontSize="10.5" fill="#2b2014">{o}</text>
          ))}
        </g>
      ))}

      <text x="390" y="232" textAnchor="middle" fontSize="11.5" fill="#7a5b39">
        .items() when you need both · .keys() to check membership · .values() to read the answers (wrap in set() to dedupe)
      </text>
    </svg>
  );
}

function DictViz() {
  const pairs = [
    { k: "color", v: "'green'" },
    { k: "points", v: "5" },
    { k: "x_position", v: "0" },
    { k: "y_position", v: "25" },
    { k: "speed", v: "'medium'" },
  ];
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono-warm text-[.82rem] font-bold text-[#8a4508]">alien_0&nbsp;=&nbsp;{"{"}</span>
        {pairs.map((p, i) => (
          <button
            key={p.k}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            className="lv-item rounded-lg px-2.5 py-1.5 font-mono-warm text-[.78rem] font-bold"
            style={hover === i ? { transform: "translateY(-4px)", boxShadow: "0 10px 18px -10px rgba(194,65,12,.6)" } : undefined}
          >
            <span style={{ color: "#8a3d10" }}>'{p.k}'</span>
            <span className="mx-1 text-[#be4a4a]">:</span>
            {p.v}
          </button>
        ))}
        <span className="font-mono-warm text-[.82rem] font-bold text-[#8a4508]">{"}"}</span>
      </div>
      <p className="mt-3 font-mono-warm text-[.8rem] text-[#7c4a12]">
        {hover === null
          ? "# hover a key-value pair — a dictionary maps KEYS to VALUES, not positions"
          : `# alien_0['${pairs[hover].k}'] → ${pairs[hover].v}   (instant lookup, no index needed)`}
      </p>
    </div>
  );
}

export function DictsSection() {
  return (
    <Section id="dicts" dark>
      <SectionHead
        dark
        eyebrow="Python · chapter 4"
        title={
          <>
            <span className="grad-text">Dictionaries</span> — connecting pieces of information
          </>
        }
        lead="You already know lists — but list[0] forces you to memorise what position 0 means. A dictionary replaces positions with labels: alien_0['color'] reads like English. One structure that models users, games, glossaries, entire databases. Four steps and it clicks."
      />

      {/* STEP 1 — mental model */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="text-[.95rem] leading-relaxed text-[#e9d7bf]">
            The one idea before any syntax: <strong>a list finds things by position, a dictionary
            finds things by label</strong>. Same data, two very different shapes — and the shape on the
            right is the one that scales to real programs, because “which label?” is a question
            you can actually answer while writing code:
          </p>
          <div className="mt-5 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <ListVsDict />
          </div>
        </div>
      </Reveal>

      {/* STEP 2 — build & manage */}
      <ReadStep dark n="2" title="Build it — create · read · add · modify · delete" sub="A dictionary starts empty or full, and every pair can be added, changed or removed at any time" />
      <Reveal>
        <DictViz />
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="alien.py — add · modify · delete"
            code={`alien_0 = {'color': 'green', 'points': 5}
print(alien_0['color'])   # green
print(alien_0['points'])  # 5

# ADD new key-value pairs at any time
alien_0['x_position'] = 0
alien_0['y_position'] = 25

# Start with an empty dictionary and fill it
alien = {}
alien['color'] = 'green'
alien['points'] = 5

# MODIFY a value
alien_0['color'] = 'yellow'

# DELETE a pair
del alien_0['points']

# A dictionary of similar objects (one key → one value per person)
favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'rust',
    'phil': 'python',
}
language = favorite_languages['sarah'].title()
print(f"Sarah's favorite language is {language}.")`}
              output={"green\n5\n\nSarah's favorite language is C."}
          />
          <CodeBlock
            title="get() — the safe lookup"
            code={`alien_0 = {'color': 'green', 'speed': 'slow'}

# This CRASHES if the key is missing:
# print(alien_0['points'])   → KeyError

# get() returns a default instead:
point_value = alien_0.get('points', 'No point value assigned.')
print(point_value)

# get() with no default returns None
# (None means "the absence of a value")
speed = alien_0.get('speed')
print(speed)`}
              output={"No point value assigned.\nslow"}
              note="get() is the difference between a program that crashes on missing data and one that handles it gracefully."
          />
        </div>
      </Reveal>

      {/* STEP 3 — pointer to the dict-loops & nesting lectures */}
      <Reveal>
        <Callout kind="story" title="Where dictionaries go next">
          You can build, read, modify and delete pairs. Next: <strong>loop through them three
          ways</strong> (.items() / .keys() / .values()) in Lecture 22 — and then{" "}
          <strong>nest</strong> dictionaries inside lists inside dictionaries in Lecture 23,
          where fleets of aliens and user databases get built.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What does alien_0.get('points', 0) do if 'points' is missing?"
            options={["Crashes with KeyError", "Returns None", "Returns 0 instead of crashing", "Adds the key with value 0"]}
            answer={2}
            explain="get() looks up the key and returns your provided default (0) when it’s absent — graceful handling instead of a KeyError."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="del alien_0['points'] — what happens to the pair?"
            options={["It is hidden until needed", "It is permanently removed — unrecoverable", "Its value becomes None", "A KeyError is raised"]}
            answer={1}
            explain="del permanently removes the key-value pair; a later lookup of 'points' would raise KeyError (that's what get() protects against)."
          />
        </Reveal>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="What does alien_0.get('points', 0) do if 'points' is missing?"
            options={["Crashes with KeyError", "Returns None", "Returns 0 instead of crashing", "Adds the key with value 0"]}
            answer={2}
            explain="get() looks up the key and returns your provided default (0) when it’s absent — graceful handling instead of a KeyError."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — dictionary drills"
          items={[
            { q: <>Person: store first_name, last_name, age, city in a dictionary; print each piece of information.</> },
            { q: <>Favorite numbers: five people as keys, a number each as values; print each pair (poll real friends!).</> },
            { q: <>Glossary: five programming words as keys, meanings as values; print each word and meaning neatly separated with \\n.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>Dictionaries store <strong>key-value pairs</strong>; access by key, add/modify anytime, delete with <strong>del</strong>, build from <strong>empty {"{}"}</strong>.</>,
            <><strong>get(key, default)</strong> avoids KeyError; dictionaries of similar objects map one value per key (favorite languages, favorite numbers).</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
