"use client";

/* ============================================================
   FocParts8 — the FoC rebuild, file 8 of 9.

   #records-lab   (Lecture 24 — Lists: the Records Lab)
   #loop-control  (Lecture 26 — Flags, Break & Continue)

   Lecture 24 is the deck's grand applied problem: five
   students, three scores each, four operations — filter,
   reward, insert, sort. Lecture 26 splits the loop-control
   half out of the old while chapter — the exit toolkit,
   quit/flag/break/continue, sandwich_shop and mountain_poll
   blocks are re-homed byte-for-byte (ExitToolkit imported
   from Part7), joined by a pets purge straight from the deck.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import { ExitToolkit } from "@/components/notes/Part7";
import {
  Award,
  Filter,
  ListOrdered,
  Pin,
} from "lucide-react";
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
   LECTURE 24 — #records-lab
   ============================================================ */

const LAB_OPS = [
  {
    icon: <Filter className="h-5 w-5" style={{ color: "#8c2f2f" }} />,
    title: "1 · Filter the underperformers",
    detail: "Average = sum(scores) / len(scores). Students below 60 leave — build a NEW list and reassign; never modify a list while iterating it.",
  },
  {
    icon: <Award className="h-5 w-5" style={{ color: "#b45309" }} />,
    title: "2 · Reward the top scorers",
    detail: "max(scores) finds the highest single paper. 90+ earns the 'distinction' marker — appended right into the student's record.",
  },
  {
    icon: <Pin className="h-5 w-5" style={{ color: "#c2410c" }} />,
    title: "3 · Prioritized enrollment",
    detail: "New students join at the FRONT: insert(0, new_student) — append() would put them last.",
  },
  {
    icon: <ListOrdered className="h-5 w-5" style={{ color: "#7c9a3e" }} />,
    title: "4 · Sort and display",
    detail: "student_records.sort(key=lambda x: x[0]) — the lambda tells sort() to rank by the name element of each nested list.",
  },
];

export function RecordsLabSection() {
  return (
    <Section id="records-lab">
      <SectionHead
        eyebrow="Lecture 24 · the records lab"
        title={
          <>
            The <span className="grad-text">records lab</span> — a complete data pipeline
          </>
        }
        lead="Five students, three scores each, four operations. This is the deck's interpretation-over-syntax finale: read the nested structure, run the pipeline, and understand every line — not memorize it."
      />

      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {LAB_OPS.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card-warm p-4"
            >
              {o.icon}
              <p className="mt-2 font-bold leading-tight text-[#3e2c1d]">{o.title}</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">{o.detail}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-8">
        <CodeBlock
          title="student_records.py — the full pipeline"
          code={`student_records = [
    ['Alice',   [75, 88, 92]],
    ['Bob',     [65, 70, 72]],
    ['Charlie', [88, 90, 95]],
    ['David',   [78, 82, 85]],
    ['Eve',     [45, 50, 55]],
]

# 1 — FILTER: keep students whose average is at least 60
eligible = []
for name, scores in student_records:
    avg = sum(scores) / len(scores)
    if avg >= 60:
        eligible.append([name, scores])
student_records = eligible          # reassign, don't mutate while looping
print("after filter :", student_records)

# 2 — REWARD: any paper at 90+ earns 'distinction'
for name, scores in student_records:
    if max(scores) >= 90:
        scores.append('distinction')

# 3 — INSERT: a new student joins at the FRONT
student_records.insert(0, ['Zoya', [91, 84, 88]])

# 4 — SORT: alphabetically by name (the lambda picks the key)
student_records.sort(key=lambda x: x[0])

for record in student_records:
    print(record)`}
          output={"after filter : [['Alice', [75, 88, 92]], ['Bob', [65, 70, 72]], ['Charlie', [88, 90, 95]], ['David', [78, 82, 85]]]\n['Alice', [75, 88, 92, 'distinction']]\n['Bob', [65, 70, 72]]\n['Charlie', [88, 90, 95, 'distinction']]\n['David', [78, 82, 85]]\n['Zoya', [91, 84, 88]]"}
          note="Trace it: Eve averages 50 → filtered out. Alice (92) and Charlie (95) hit 90+ → distinction. Zoya lands at the front via insert(0, …). The sort's lambda x: x[0] says 'rank by element 0 of each record' — the name."
        />
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Callout kind="why" title="Why build a new list instead of removing while looping?">
            Modifying a list <strong>while iterating it</strong> shifts the ground under Python&rsquo;s
            feet — items get skipped. The safe pattern: collect survivors into a new list, then{" "}
            <strong>reassign</strong>. The deck calls this out explicitly; the exam will too.
          </Callout>
          <Callout kind="insight" title="Reading vs writing code">
            The final exam cares more about <strong>interpretation</strong> than syntax memory: given
            this pipeline, explain what each operation does, spot the indentation and logical errors,
            and write small programs with the logic right — pen and paper, flexible syntax.
          </Callout>
        </div>
      </Reveal>

      <Reveal className="mt-4">
        <Callout kind="story" title="Course logistics straight from the deck">
          One more quiz is scheduled for the <strong>end of October</strong> — and{" "}
          <strong>no third quiz</strong>, so every assessment counts double. Assignments will ask
          for <strong>both code and a detailed explanation</strong>; the descriptive questions come
          primarily from the foundational topics, while the coding sections test how well you
          interpret and trace programs like this one.
        </Callout>
      </Reveal>

      <Reveal className="mt-6">
        <p className="eyebrow mb-3">The toolbox this lab leaned on — all re-run, one page</p>
        <CodeBlock
          title="toolbox_recap.py"
          code={`names = ['charlie', 'alice', 'bob']
names.sort()                       # permanent sort
print(names)

print(sorted(names, reverse=True)) # temporary, reversed
print(names[:2])                   # slice — first two
copied = names[:]                  # deep copy
copied.append('zoya')
print(names, "|", copied)

point = (200, 50)                  # tuple: immutable
print(point[0])`}
          output={"['alice', 'bob', 'charlie']\n['charlie', 'bob', 'alice']\n['alice', 'bob']\n['alice', 'bob', 'charlie'] | ['alice', 'bob', 'charlie', 'zoya']\n200"}
          note="Sort, sorted-reverse, slicing, deep copy, tuple indexing — every Lecture 11–16 tool, one screen. If any line surprises you, that lecture is your revision spot."
        />
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Why does the lab build `eligible` and reassign, instead of removing entries from student_records during the loop?"
            options={["It looks tidier", "Removing items while iterating skips elements — the loop's ground shifts", "del cannot be used inside loops", "It is faster"]}
            answer={1}
            explain="Python iterates by index; removing items mid-loop shifts positions and skips elements. Collect survivors into a new list, then reassign — the deck's explicit rule."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="What does sort(key=lambda x: x[0]) rank by, for records like ['Alice', [75, 88, 92]]?"
            options={["The scores list", "The first score (75)", "Element 0 of each record — the name", "The record's length"]}
            answer={2}
            explain="The lambda receives each record and returns x[0] — the name — so the sort is alphabetical by name. Without the key, Python would try comparing lists against strings and fail."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Lab extensions — own the pipeline"
          items={[
            { q: <>Add operation 5: print each student&rsquo;s average next to their name, rounded to one decimal.</>, hint: "f-string with :.1f" },
            { q: <>Change the filter to 65 and predict WHO leaves before running. Eve goes — anyone else?</> },
            { q: <>Insert TWO new students at the front, in reverse priority order — then sort and explain why the order they were inserted doesn&rsquo;t matter.</> },
            { q: <>Reward differently: distinction only if the AVERAGE is 90+ (not any single paper). Who keeps it?</> },
            { q: <>Sort by best score instead of name — rewrite the lambda.</>, hint: "key=lambda x: max(x[1]), reverse=True" },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>Filter with <strong>sum/len + a new list</strong>; never mutate while iterating.</>,
            <><strong>max(scores) ≥ 90</strong> → append the distinction marker to the record itself.</>,
            <><strong>insert(0, …)</strong> puts arrivals first; <strong>append()</strong> would bury them last.</>,
            <><strong>sort(key=lambda x: x[0])</strong> — lambdas tell sort() what to rank by; here, the name.</>,
            <>The exam rewards <strong>interpretation and explanation</strong> — trace the pipeline on paper.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 26 — #loop-control
   ============================================================ */

export function LoopControlSection() {
  return (
    <Section id="loop-control" dark>
      <SectionHead
        dark
        eyebrow="Lecture 26 · loop control"
        title={
          <>
            Flags, <span className="grad-text">break</span> &amp; continue
          </>
        }
        lead="Lecture 25 taught the while loop; this lecture hands you the steering wheel. One Boolean to rule the loop, break to leave mid-stride, continue to skip a beat — then while loops that safely drain lists and fill dictionaries."
      />

      <Reveal>
        <ExitToolkit />
      </Reveal>

      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <p className="mb-5 text-[.92rem] leading-relaxed text-[#e9d7bf]">
            All four exits, side by side in runnable code — read them in order and the
            escalation makes sense: sentinel → flag → break, with continue as the
            &ldquo;skip one&rdquo; companion:
          </p>
          <div className="grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
              title="quit_flag_break_continue.py — three ways to stop"
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
    print(f"{city.title()} — great choice!")`}
              note="All three produce the same conversation — the difference is WHO decides to stop: the while test itself, a variable you flip, or an emergency exit. Pick whichever reads clearest."
            />
            <CodeBlock
              dark
              title="continue — skip one, keep the loop"
              code={`current = 0
while current < 10:
    current += 1
    if current % 2 == 0:
        continue            # skip the print for evens
    print(current)`}
              output={"1\n3\n5\n7\n9"}
              note="continue never exits — it only abandons the rest of THIS pass and jumps back to the test. break exits; continue skips. That pair is all you need to remember."
            />
          </div>
        </div>
      </Reveal>

      <ReadStep dark n="2" title="while + lists — where it beats the for loop" sub="Drain a list, purge an item — while loops can safely modify the list they're watching" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
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
              dark
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

      <Reveal className="mt-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            dark
            title="pet_purge.py — remove ALL instances"
            code={`pets = ['dog', 'cat', 'dog', 'goldfish',
        'cat', 'rabbit', 'cat']
print(pets)

while 'cat' in pets:
    pets.remove('cat')

print(pets)   # cats: gone. All of them.`}
            output={"['dog', 'cat', 'dog', 'goldfish', 'cat', 'rabbit', 'cat']\n['dog', 'dog', 'goldfish', 'rabbit']"}
            note="remove() alone kills only the FIRST occurrence — the deck flagged that in Lecture 11. Wrap it in while x in list: and every instance falls. When remove() finds nothing, the condition goes False and the loop ends."
          />
          <div className="grid content-start gap-4">
            <Callout dark kind="insight" title="Why while, not for, here?">
              A <strong>for loop iterates by position</strong> — remove items mid-loop and elements
              get skipped. A <strong>while loop re-tests its condition each pass</strong>: pop from the
              list, append to the new one, and Python never loses track. That is why unverified→verified
              user pipelines are written with while.
            </Callout>
            <Callout dark kind="warn" title="Infinite loops & the stop button">
              No exit condition, no counter update, no flag flip — the loop never ends. In Colab,
              press the <strong>pause/interrupt button</strong>; in a terminal, Ctrl-C. Then re-read the
              three moving parts from Lecture 25: initialize, condition, update.
            </Callout>
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
            q="pets = ['dog', 'cat', 'dog', 'cat'] — after while 'cat' in pets: pets.remove('cat'), pets holds…"
            options={["['dog', 'cat', 'dog']", "['dog', 'dog']", "['dog', 'dog', 'cat']", "An infinite loop runs"]}
            answer={1}
            explain="Each pass removes ONE 'cat' and re-tests. When the last 'cat' is gone, 'cat' in pets is False and the loop ends — leaving ['dog', 'dog']."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — control drills"
          items={[
            { q: <>Pizza toppings until &rsquo;quit&rsquo;; confirm each: &ldquo;I&rsquo;ll add that topping.&rdquo;</> },
            { q: <>Movie tickets: while loop asking age — under 3 free, 3–12 $10, over 12 $15.</> },
            { q: <>Three versions of one exit: a conditional test in the while statement · an active flag · a break.</> },
            { q: <>Write a loop that never ends — run it, stop it (Ctrl-C / interrupt), then explain exactly why it never stopped.</> },
            { q: <>Dream-vacation poll: name → place into a dictionary while polling; print the results block.</> },
            { q: <>Unconfirmed → confirmed users: while unconfirmed_users: pop from one list, append to the other — then print both.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <>A <strong>flag</strong> is one Boolean governing the whole loop — many events, one off-switch.</>,
            <><strong>break</strong> leaves immediately (perfect with while True:); <strong>continue</strong> skips to the next test.</>,
            <><strong>while x in list: remove(x)</strong> purges every instance; <strong>while list: pop()</strong> transfers between lists.</>,
            <>while + dict + flag = <strong>programs that collect data until told to stop</strong> — then report with .items().</>,
            <>Every loop needs a guaranteed path to False — or the stop button becomes your exit.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
