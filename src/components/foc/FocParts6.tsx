"use client";

/* ============================================================
   FocParts6 — the FoC rebuild, file 6 of 9.

   #branches  (Lecture 18 — If, Elif, Else)
   #if-lists  (Lecture 20 — If × Lists)

   The old single "if" chapter compressed the deck's lectures
   17–20 into one section. Here the chain half (voting if-else,
   alien_points, the toppings design decision) becomes its own
   Lecture-18 section, and the list-filtering half
   (special items, empty guards, multiple lists) becomes
   Lecture 20. The ChainWalk / IfElseChainViz machines are
   imported from Part6 rather than duplicated.
   ============================================================ */

import React from "react";
import { ChainWalk, IfElseChainViz } from "@/components/notes/Part6";
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
   LECTURE 18 — #branches
   ============================================================ */

export function BranchesSection() {
  return (
    <Section id="branches">
      <SectionHead
        eyebrow="Lecture 18 · if statements"
        title={
          <>
            <span className="grad-text">if</span>, elif, else — building the branch
          </>
        }
        lead="Lecture 17 taught you to ASK yes/no questions; this lecture builds the roads the answers choose. Simple if, if-else, the elif ladder — and the design decision every programmer makes: exclusive chain, or independent checks?"
      />

      <ReadStep n="1" title="The chain, walked" sub="Python tests conditions in order — the first door that opens wins, the rest are never looked at" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="mb-5 text-[.92rem] leading-relaxed text-[#2b2014]">
            <strong>if-else</strong> covers two paths. The moment you need three or more, add
            <strong> elif</strong> (= &ldquo;else-if&rdquo;) blocks between them. Watch how Python walks the chain
            for <code className="font-mono-warm font-bold">age = 15</code> — every test is a door; the first one that
            opens wins:
          </p>
          <div className="rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
            <ChainWalk />
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="voting.py — if-else: two paths, always exactly one"
              code={`age = 17
if age >= 18:
    print("Old enough to vote.")
else:
    print("Sorry, you are too young to vote.")

# else needs NO condition — it is the
# catch-all path when everything above failed`}
              output={"Sorry, you are too young to vote."}
              note="if-else guarantees exactly one of the two blocks runs. The else block never gets its own test — it is simply 'everything else'."
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
            <p className="mt-2 text-center text-[.8rem] text-[#7a5b39]">
              The age bands as full-life mapping — notice each elif needs only one bound,
              because reaching it means every band above has already been ruled out.
            </p>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="The amusement park — one price ladder" sub="Under 4 free · 4–18 $5 · 18+ $10 · 65+ $3 — the deck's if-elif-else in the wild" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="amusement_park.py — the admission ladder"
            code={`age = 12

if age < 4:
    price = 0
elif age < 18:
    price = 5
elif age < 65:
    price = 10
else:
    price = 3

print(f"Your admission cost is \${price}.")`}
            output={"Your admission cost is $5."}
            note="age = 12: the first test (12 < 4) fails, the second (12 < 18) passes — price becomes 5 and Python skips the rest of the chain. Try age = 4, 18, 70 and run each."
          />
          <div className="grid content-start gap-4">
            <Callout kind="insight" title="Many elifs, one print">
              Instead of a separate print in every block, each branch just <strong>assigns</strong> a
              variable; a single print after the chain does the talking. Change the wording once —
              not four times. The deck&rsquo;s own optimization tip.
            </Callout>
            <Callout kind="why" title="Omitting the else">
              Python does not require a final else. For age validation you might test only specific
              ranges and let invalid data fall through untouched — <strong>no accidental catch-all</strong>{" "}
              executing for data no branch expected.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="3" title="Independent ifs — when EVERY answer matters" sub="Exclusive chains stop at the first True; separate if statements check them all" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
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
          <div className="grid content-start gap-4">
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
            q="age = 12 in the amusement-park ladder. Which price sticks?"
            options={["$0 — first branch", "$5 — second branch, then Python skips the rest", "$10 — the 18+ branch", "$3 — the senior discount"]}
            answer={1}
            explain="Python tests top to bottom; 12 < 4 fails, 12 < 18 passes → price = 5, and NO later test in the chain is even evaluated."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — branch drills"
          items={[
            { q: <>Alien color, simple if: green → print 5 points. Write one version that passes and one that fails silently.</> },
            { q: <>Alien if-else: green → 5 points, else → 10 points. One version runs the if block, another the else.</> },
            { q: <>Turn it into if-elif-else: green 5, yellow 10, red 15 — three versions, one per color.</> },
            { q: <>Stage of life: {'<2 baby, <4 toddler, <13 kid, <20 teenager, <65 adult, 65+ elder'} — one assignment per branch, one print at the end.</> },
            { q: <>favorite_fruits: five independent if statements checking membership — &ldquo;You really like bananas!&rdquo;</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>if-else</strong> guarantees exactly one of two paths; <strong>elif</strong> extends it to any number — tested top to bottom, first True wins.</>,
            <>Assign a <strong>price variable</strong> per branch and print once — the chain stays easy to maintain.</>,
            <>Omitting <strong>else</strong> is legal and sometimes safer — no catch-all for unexpected data.</>,
            <><strong>Independent ifs</strong> check every condition — use them when multiple blocks should run.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 20 — #if-lists
   ============================================================ */

export function IfListsSection() {
  return (
    <Section id="if-lists" dark>
      <SectionHead
        dark
        eyebrow="Lecture 20 · if statements with lists"
        title={
          <>
            If <span className="grad-text">×</span> lists — filtering the real world
          </>
        }
        lead="The third act of the if chapter: conditional statements wrapped around lists. Special items that need apologies, the empty list that is secretly False, and two lists checked against each other before the kitchen fires up."
      />

      <ReadStep dark n="1" title="Special items & the empty-list guard" sub="An if INSIDE the loop treats one topping differently; the list name itself IS the emptiness test" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
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
            <div className="grid content-start gap-4">
              <Callout dark kind="insight" title="A list name is a truth test">
                <code className="font-mono-warm">if requested_toppings:</code> — Python returns{" "}
                <strong>True if the list holds at least one item</strong>, False if it is empty. That
                one line is the idiomatic guard before any &ldquo;process the list&rdquo; loop.
              </Callout>
              <Callout dark kind="why" title="Why guard at all?">
                User input arrives empty more often than anyone expects. Without the guard, an empty
                order would loop zero times and print nothing — a silent failure. With it, the
                program asks: <em>plain pizza, really?</em>
              </Callout>
            </div>
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="Multiple lists — validate before you cook" sub="Compare what was REQUESTED against what is AVAILABLE before committing" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            dark
            title="available_toppings.py — the availability check"
            code={`available_toppings = ['mushrooms', 'olives', 'green peppers',
                      'pepperoni', 'pineapple', 'extra cheese']

requested_toppings = ['mushrooms', 'french fries', 'extra cheese']

for requested in requested_toppings:
    if requested in available_toppings:
        print(f"Adding {requested}.")
    else:
        print(f"Sorry, we don't have {requested}.")`}
            output={"Adding mushrooms.\nSorry, we don't have french fries.\nAdding extra cheese."}
            note="Nested loop + membership test: every requested item is checked against the available list. The 'in' operator you met in Lecture 17, doing real kitchen management."
          />
          <CodeBlock
            dark
            title="unique_usernames.py — multiple lists"
            code={`current_users = ['john', 'admin', 'maria', 'priya', 'sam']
new_users = ['MARIA', 'rahul', 'SAM', 'zoe', 'kiran']

for new_user in new_users:
    if new_user.lower() in [u.lower() for u in current_users]:
        print(f"Sorry, {new_user} — that name is taken.")
    else:
        print(f"Good news, {new_user} — the name is available.")`}
            output={"Sorry, MARIA — that name is taken.\nGood news, rahul — the name is available.\nSorry, SAM — that name is taken.\nGood news, zoe — the name is available.\nGood news, kiran — the name is available."}
            note="Real systems compare case-insensitively: if 'John' exists, 'JOHN' must be rejected too — that's why we lower() both sides before comparing."
          />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout dark kind="story" title="Chapter closed — where the course goes next">
          Conditional tests evaluate to true or false; simple if, if-else and if-elif-else chains
          handle the roads; combined with loops they filter real data. Up next in the deck:{" "}
          <strong>dictionaries</strong> — a structure that connects related pieces of information,
          loops through pairs, and nests into the real world.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="if requested_toppings: — what does this test when the list is empty?"
            options={["True — an empty list is truthy", "False — an empty list is falsy", "SyntaxError", "It depends on the toppings"]}
            answer={1}
            explain="An empty list evaluates to False. That one line is the idiomatic Python guard for 'does the list actually contain anything?'"
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="requested = ['french fries']; available has no french fries. What prints?"
            options={["Adding french fries.", "Nothing — the loop skips it", "Sorry, we don't have french fries.", "IndexError"]}
            answer={2}
            explain="'french fries' in available_toppings is False, so the else branch runs and apologizes. This is data validation: requests checked against reality before processing."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — if × lists drills"
          items={[
            { q: <>Loop usernames: special greeting for &rsquo;admin&rsquo; (&ldquo;Hello admin, would you like a status report?&rdquo;), generic for everyone else.</> },
            { q: <>Add an if test for an empty user list → &ldquo;We need to find some users!&rdquo;; empty the list and verify.</> },
            { q: <>Ordinal numbers: loop 1–9 printing 1st, 2nd, 3rd, then 4th…9th via an if-elif-else inside the loop.</> },
            { q: <>Build the available/requested kitchen check with YOUR two lists — including one item nobody stocks.</> },
            { q: <>Case-insensitive username checks for three new sign-ups, one of them a capitalized duplicate.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>If <strong>inside a for loop</strong> gives special items special treatment — apologies included.</>,
            <>An empty list is <strong>falsy</strong>: <code className="font-mono-warm">if list:</code> guards every processing loop.</>,
            <>Two lists + <strong>in</strong> = validation — requests checked against availability (kitchen, usernames, permissions).</>,
            <>Case-insensitive compares (<strong>lower()</strong> both sides) are how real systems treat names.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
