"use client";

import React, { useState } from "react";
import {
  GitBranch,
  Equal,
  Braces,
  Scale,
  ListChecks,
  KeyRound,
  Repeat,
  Boxes,
} from "lucide-react";
import { Reveal, Section, SectionHead, Callout, Quiz, CodeBlock, Practice, Takeaways } from "./ui";

/* Hidden setup — these loop demos continue the poll dictionary from the
   previous step; the runner recreates it so the Run matches the page. */
const POLL_PRE = `favorite_languages = {
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

function IfElseChainViz() {
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
        lead="At the heart of every decision your program makes is a conditional test — an expression that evaluates to True or False. Chain those tests together and your program gains judgement."
      />

      {/* conditional tests */}
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Equal className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Conditional tests — the atoms of decisions</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {TEST_OPS.map((o) => (
              <span key={o.op} className="chip">
                <code className="font-mono-warm font-bold">{o.op}</code> {o.read}
              </span>
            ))}
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="equality_tests.py"
              code={`car = 'subaru'
print("Is car == 'subaru'? I predict True.")
print(car == 'subaru')      # True

print("\\nIs car == 'audi'? I predict False.")
print(car == 'audi')        # False

# Remember: = assigns, == asks "are these equal?"

# Case matters — 'Audi' != 'audi'
car = 'Audi'
print(car == 'audi')              # False
print(car.lower() == 'audi')      # True  (normalize first!)

# != checks inequality
requested_topping = 'mushrooms'
if requested_topping != 'anchovies':
    print("Hold the anchovies!")`}
              output={"Is car == 'subaru'? I predict True.\nTrue\n\nIs car == 'audi'? I predict False.\nFalse\nFalse\nTrue\nHold the anchovies!"}
            />
            <CodeBlock
              title="numerical_and_logical.py"
              code={`# Numerical comparisons
age = 18
print(age == 18)      # True
print(age < 21)       # True
print(age >= 21)      # False

# Multiple conditions
age_0, age_1 = 22, 18
print(age_0 >= 21 and age_1 >= 21)   # False — both must hold
print(age_0 >= 21 or age_1 >= 21)    # True  — at least one

# Membership: in / not in
banned = ['andrew', 'carolina', 'david']
user = 'marie'
print(user not in banned)   # True

# Boolean expressions — a name for a value that is True/False
game_active = True
can_edit = False`}
            />
          </div>
        </div>
      </Reveal>

      {/* if / if-else / if-elif-else */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <GitBranch className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Simple if → if-else → the if-elif-else chain</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="voting.py — simple if"
              code={`age = 19
if age >= 18:
    print("You are old enough to vote!")
    print("Have you registered to vote yet?")

# if-else — one of two paths, always
age = 17
if age >= 18:
    print("Old enough to vote.")
else:
    print("Sorry, you are too young to vote.")`}
              output={"You are old enough to vote!\nHave you registered to vote yet?\n\nSorry, you are too young to vote."}
            />
            <CodeBlock
              title="alien_points.py — if-elif-else"
              code={`alien_color = 'yellow'   # try 'green' and 'red' too

if alien_color == 'green':
    points = 5
elif alien_color == 'yellow':
    points = 10
elif alien_color == 'red':
    points = 15
else:
    points = 0
print(f"You just earned {points} points!")`}
              output={"You just earned 10 points!"}
              note="Python runs ONLY the first branch whose condition is True — the chain is a series of exclusive doors. You can use as many elif blocks as needed, and you may omit the else entirely when a specific final condition is more precise than a catch-all."
            />
          </div>

          <div className="mt-6 rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <IfElseChainViz />
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="toppings.py — testing MULTIPLE conditions"
              code={`requested_toppings = ['mushrooms', 'extra cheese']

if 'mushrooms' in requested_toppings:
    print("Adding mushrooms.")
if 'pepperoni' in requested_toppings:
    print("Adding pepperoni.")
if 'extra cheese' in requested_toppings:
    print("Adding extra cheese.")

print("\\nFinished making your pizza!")`}
              output={"Adding mushrooms.\nAdding extra cheese.\n\nFinished making your pizza!"}
              note="An if-elif chain stops at the first match — it would have skipped the cheese! Use SEPARATE if statements when every relevant condition must run. Choosing between a chain and independent ifs is a real design decision."
            />
            <div>
              <Callout kind="insight" title="Independent vs exclusive">
                <strong>if-elif-else</strong> = exactly one path runs (mutually
                exclusive: alien colors, life stages). <strong>Separate ifs</strong> = any
                number of paths may run (independent features: pizza toppings).
              </Callout>
              <Callout kind="why" title="Stage of life — the classic chain">
                &lt;2 baby · 2–3 toddler · 4–12 kid · 13–19 teenager · 20–64 adult ·
                65+ elder. Order matters: test from youngest to oldest, and each elif
                only needs one bound because earlier branches already failed.
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      {/* if + lists */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ListChecks className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Using if statements with lists</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="special_items_and_empty.py"
              code={`# Special items inside a loop
requested_toppings = ['mushrooms', 'green peppers', 'extra cheese']
for topping in requested_toppings:
    if topping == 'green peppers':
        print("Sorry, we are out of green peppers right now.")
    else:
        print(f"Adding {topping}.")

# Checking that a list is NOT empty
requested_toppings = []
if requested_toppings:            # empty list is False!
    for topping in requested_toppings:
        print(f"Adding {topping}.")
else:
    print("Are you sure you want a plain pizza?")`}
              output={"Adding mushrooms.\nSorry, we are out of green peppers right now.\nAdding extra cheese.\n\nAre you sure you want a plain pizza?"}
            />
            <CodeBlock
              title="unique_usernames.py — multiple lists"
              code={`current_users = ['john', 'admin', 'maria', 'priya', 'sam']
new_users = ['MARIA', 'rahul', 'SAM', 'zoe', 'kiran']

for new_user in new_users:
    if new_user.lower() in [u.lower() for u in current_users]:
        print(f"Sorry, {new_user} — that name is taken.")
    else:
        print(f"Good news, {new_user} — the name is available.")`}
              output={"Sorry, MARIA — that name is taken.\nGood news, rahul — the name is available.\nSorry, SAM — that name is taken.\nGood news, zoe — the name is available.\nGood news, kiran — the name is available."}
              note="Real systems compare case-insensitively: if 'John' exists, 'JOHN' must be rejected too — that’s why we lower() both sides before comparing."
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Why use separate if statements instead of an if-elif chain for pizza toppings?"
            options={[
              "It looks cleaner",
              "An elif chain stops at the first True — other valid toppings would be skipped",
              "elif cannot be used with lists",
              "Separate ifs run faster",
            ]}
            answer={1}
            explain="An if-elif chain is exclusive — only the first True branch runs. For independent conditions that may all be true (multiple toppings), use a series of independent if statements."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="if requested_toppings: — what does this test when the list is empty?"
            options={["True — an empty list is truthy", "False — an empty list is falsy", "SyntaxError", "It depends on the toppings"]}
            answer={1}
            explain="An empty list evaluates to False. That one line is the idiomatic Python guard for 'does the list actually contain anything?'"
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — if drills"
          items={[
            { q: <>Series of conditional tests with printed predictions (car = 'subaru' pattern) — at least 10 tests evaluating to True and False.</> },
            { q: <>At least one True and one False for: string equality/inequality · lower() tests · numerical {'==, !=, >, <, >=, <='} · and / or · in a list · not in a list.</> },
            { q: <>Alien color simple if: green → 5 points. Write one version that passes and one that fails (no output).</> },
            { q: <>Alien if-else: green → 5 points, else → 10 points. One version runs the if block, another the else.</> },
            { q: <>Turn it into if-elif-else: green 5, yellow 10, red 15 — three versions, one per color.</> },
            { q: <>Stage of life: {'<2 baby, <4 toddler, <13 kid, <20 teenager, <65 adult, 65+ elder'}.</> },
            { q: <>favorite_fruits: five independent if statements checking membership with ‘in’ — “You really like bananas!”</> },
            { q: <>Usernames: special greeting for 'admin' (status report), generic greeting for everyone else.</> },
            { q: <>Add an if test for an empty user list → “We need to find some users!”; empty the list and verify.</> },
            { q: <>Unique usernames: current_users vs new_users, case-insensitive comparison.</> },
            { q: <>Ordinals: loop 1–9 printing 1st, 2nd, 3rd, then 4th…9th via an if-elif-else inside the loop.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Conditional tests always evaluate to <strong>True or False</strong>; <strong>= assigns, == compares</strong>; normalize case with <strong>lower()</strong>.</>,
            <><strong>and</strong> requires both, <strong>or</strong> requires one; <strong>in / not in</strong> test membership; booleans like <code className="font-mono-warm">game_active</code> name your states.</>,
            <><strong>if-elif-else</strong> chains pick exactly one path; <strong>independent ifs</strong> allow many; you can omit <strong>else</strong>.</>,
            <>With lists: treat <strong>special items</strong> inside loops, guard <strong>empty lists</strong> with a truthiness check, and filter across <strong>multiple lists</strong>.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   DICTIONARIES
   ============================================================ */
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
        lead="A dictionary is like a list, but instead of positions it lets us connect keys to values — alien_0['color'] reads like English. This one structure models users, games, glossaries, entire databases."
      />

      {/* working with dicts */}
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

      {/* looping */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Repeat className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Looping through a dictionary — four ways</h3>
          </div>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="loop_all_pairs.py"
              pre={POLL_PRE}
              code={`user_0 = {
    'username': 'efermi',
    'first': 'enrico',
    'last': 'fermi',
}

# ALL key-value pairs — .items()
for key, value in user_0.items():
    print(f"\\nKey: {key}")
    print(f"Value: {value}")

# ALL keys — .keys()  (default!)
for name in favorite_languages.keys():
    print(name.title())

# Keys in order — sorted()
for name in sorted(favorite_languages.keys()):
    print(f"{name.title()}, thank you for taking the poll.")`}
              output={"Key: username\nValue: efermi\n..."}
            />
            <CodeBlock
              title="loop_values_and_set.py"
              pre={POLL_PRE}
              code={`# ALL values — .values()
print("Languages chosen:")
for language in favorite_languages.values():
    print(language.title())

# Repetition is natural ('python' appears twice).
# Use set() when each item should appear ONCE:
print("\\nThe following languages have been chosen:")
for language in set(favorite_languages.values()):
    print(language.title())

# Polling: who already responded vs who to invite
if 'erin' not in favorite_languages.keys():
    print("Erin, please take our poll!")`}
              output={"Languages chosen:\nPython\nC\nRust\nPython\n\nThe following languages have been chosen:\nC\nPython\nRust\nErin, please take our poll!"}
              note="A set is a collection in which each item must be unique — a list wrapped in set() loses duplicates."
            />
          </div>
        </div>
      </Reveal>

      {/* nesting */}
      <Reveal className="mt-10">
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Boxes className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Nesting — dictionaries inside lists inside dictionaries</h3>
          </div>
          <p className="mt-2 max-w-4xl text-[.9rem] text-[#e9d7bf]">
            Python lets you nest lists inside dictionaries, dictionaries inside lists,
            and dictionaries inside dictionaries. This is how you model the real world —
            fleets of aliens, pizza orders, city profiles.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <CodeBlock
              title="a list of dictionaries"
              code={`aliens = []

for n in range(3):
    aliens.append({
        'color': 'green',
        'points': 5,
        'speed': 'slow',
    })

for alien in aliens[:3]:
    print(alien)`}
            />
            <CodeBlock
              title="a list in a dictionary"
              code={`pizza = {
    'crust': 'thick',
    'toppings': ['mushrooms', 'extra cheese'],
}

print(pizza['crust'])
for topping in pizza['toppings']:
    print(topping)`}
            />
            <CodeBlock
              title="a dictionary in a dictionary"
              code={`users = {
    'aeinstein': {
        'first': 'albert',
        'last': 'einstein',
    },
    'mcurie': {
        'first': 'marie',
        'last': 'curie',
    },
}

for username, info in users.items():
    print(f"\\n{username}")
    print(info['first'].title(),
          info['last'].title())`}
            />
          </div>
        </div>
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
            q="Why wrap favorite_languages.values() in set() before looping?"
            options={["To sort alphabetically", "To make each language appear only once", "To speed up the loop", "To convert values to keys"]}
            answer={1}
            explain="A set keeps only unique items — so 'python' appearing for both jen and phil prints once. Use sorted(keys) when you want order instead."
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
            { q: <>Loop the glossary with .items(); then add five more terms — the loop picks them up automatically.</> },
            { q: <>Rivers: {'{'}'nile': 'egypt', …{'}'} — print “The Nile runs through Egypt.”, then all river names, then all countries.</> },
            { q: <>Polling: loop a list of people; thank those already in favorite_languages, invite the rest.</> },
            { q: <>Pets: several dictionaries (kind of animal + owner’s name) inside a list called pets; loop and print everything about each.</> },
            { q: <>favorite_places: three people as keys, one to three favorite places each as lists; loop and print.</> },
            { q: <>Cities: three cities as keys, each mapping to a nested dictionary {'{'}country, population, fact{'}'}; print each city with all its information.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>Dictionaries store <strong>key-value pairs</strong>; access by key, add/modify anytime, delete with <strong>del</strong>, build from <strong>empty {"{}"}</strong>.</>,
            <><strong>get(key, default)</strong> avoids KeyError; dictionaries of similar objects map one value per key (favorite languages, favorite numbers).</>,
            <>Loop <strong>.items()</strong> for pairs, <strong>.keys()</strong> for names, <strong>sorted()</strong> for order, <strong>.values()</strong> + <strong>set()</strong> for unique values.</>,
            <>Nesting models reality: <strong>list of dicts</strong> (fleets, users), <strong>dict with lists</strong> (pizza toppings), <strong>dict of dicts</strong> (city profiles).</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
