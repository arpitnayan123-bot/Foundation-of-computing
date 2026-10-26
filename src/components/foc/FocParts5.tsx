"use client";

/* ============================================================
   FocParts5 — the FoC rebuild, file 5 of 9.

   #copies-tuples  (Lecture 16 — Copies & Tuples)
   #skills-lab     (Lecture 19 — the Skills Lab)

   Lecture 16 splits the copy/reference problem and tuples out
   of the old lists chapter — foods.py, dimensions.py and
   buffet.py are re-homed here byte-for-byte, and a live
   AliasVsCopy machine makes the two-name-one-list bug
   impossible to unsee. Lecture 19 is the deck's applied
   recap: the shipment-inventory challenge, every step from
   the PDF, runnable.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link2, Scissors, Sparkles } from "lucide-react";
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
   LECTURE 16 — #copies-tuples
   ============================================================ */

/* The machine: same append, two link modes, two different worlds */
function AliasVsCopy() {
  const [mode, setMode] = useState<"copy" | "alias">("copy");
  const copy = ["pizza", "falafel", "carrot cake", "ice cream"];
  const alias = ["pizza", "falafel", "carrot cake", "ice cream", "cannoli"];
  const shown = mode === "copy" ? copy : alias;
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap gap-2">
        {(
          [
            { key: "copy", label: "friend_foods = my_foods[:]", icon: <Scissors className="h-3.5 w-3.5" />, good: true },
            { key: "alias", label: "friend_foods = my_foods", icon: <Link2 className="h-3.5 w-3.5" />, good: false },
          ] as const
        ).map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono-warm text-[.78rem] font-bold transition-all"
            style={
              mode === m.key
                ? {
                    background: m.good ? "#7c9a3e" : "#8c2f2f",
                    color: "#fff7ec",
                    boxShadow: "0 8px 18px -8px rgba(140,47,47,.5)",
                  }
                : { background: "#fff", color: "#8a4508", border: "1px solid #e5c79d" }
            }
          >
            {m.icon}
            {m.label}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[.86rem] text-[#2b2014]">
        Story: <strong>cannoli</strong> was appended to <em>my_foods</em>, <strong>ice cream</strong> to{" "}
        <em>friend_foods</em>. Then <strong>cannoli</strong> again — to whichever list the variable points at:
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <AnimatePresence mode="popLayout">
          {shown.map((f) => (
            <motion.span
              layout
              key={f}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-lg px-3 py-1.5 font-mono-warm text-[.78rem] font-bold"
              style={{ background: "#fff", border: "1px solid #e0b98a", color: "#2b2014" }}
            >
              {f}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
      <p className="mt-3 text-[.85rem] font-bold" style={{ color: mode === "copy" ? "#4d6b1f" : "#8c2f2f" }}>
        {mode === "copy"
          ? "✓ Two SEPARATE lists — each kept its own items. my_foods still ends with cannoli, friend_foods with ice cream."
          : "✗ ONE list, two names — cannoli appended through friend_foods lands in my_foods too. The ice cream has vanished from this view because you are looking at my_foods through a second label."}
      </p>
    </div>
  );
}

export function CopiesTuplesSection() {
  return (
    <Section id="copies-tuples" dark>
      <SectionHead
        dark
        eyebrow="Lecture 16 · working with lists & tuples"
        title={
          <>
            Copies &amp; <span className="grad-text">tuples</span>
          </>
        }
        lead="Sometimes you want a real second list — and sometimes Python quietly gives you the same list wearing a second name tag. Then meet the tuple: the immutable list whose TypeError is a feature, not a bug."
      />

      <ReadStep dark n="1" title="The slice that copies — and the assignment that doesn't" sub="Same words, nearly: my_foods[:] versus my_foods — two utterly different universes" />
      <Reveal>
        <AliasVsCopy />
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            dark
            title="foods.py — copying lists"
            code={`my_foods = ['pizza', 'falafel', 'carrot cake']

# CORRECT — a real, independent copy:
friend_foods = my_foods[:]

my_foods.append('cannoli')
friend_foods.append('ice cream')

print(my_foods)     # both lists grow independently
print(friend_foods)

# THE TRAP — this is NOT a copy:
alias = my_foods    # two names, ONE list
alias.append('sprouts')
print(my_foods)     # sprouts appears here too!`}
            note="Omitting the slice (my_foods[:] vs my_foods) is one of the most common beginner bugs. Always copy with [:]."
          />
          <CodeBlock
            dark
            title="reference_problem.py — the bug, staged"
            code={`my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods        # no slice — a REFERENCE

my_foods.append('cannoli')     # via my_foods…
print(friend_foods)            # …cannoli is HERE too

friend_foods.append('ice cream')
print(my_foods)                # …and ice cream lands here

print(my_foods is friend_foods)  # True: same object!`}
            output={"['pizza', 'falafel', 'carrot cake', 'cannoli']\n['pizza', 'falafel', 'carrot cake', 'cannoli', 'ice cream']\nTrue"}
            note="The `is` check proves it: both names point to ONE list object in memory. This is why the deck says the two variables are aliases, not copies."
          />
        </div>
      </Reveal>

      <ReadStep dark n="2" title="Tuples — the immutable list" sub="Parentheses instead of brackets; Python enforces the promise" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="mt-2 max-w-4xl text-[.9rem] text-[#e9d7bf]">
            Lists work well for sets of items that <strong>can change</strong> throughout
            the life of a program — users on a website, characters in a game. But
            sometimes we want <strong>a list of items that cannot change</strong>.
            Python calls values that cannot change <strong>immutable</strong>, and an
            immutable list is called a <strong>tuple</strong>. Write it with parentheses
            instead of brackets.
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
              title="dimensions.py"
              code={`dimensions = (200, 50)   # parentheses, not brackets
print(dimensions[0])
print(dimensions[1])

dimensions[0] = 250   # try to change one item`}
              output={"200\n50\n\nTraceback (most recent call last):\nTypeError: 'tuple' object does not support item assignment"}
              note="Python rejects the change — exactly what we wanted: protection."
            />
            <CodeBlock
              dark
              title="buffet.py — rewriting a tuple"
              code={`menu = ('rice', 'dal', 'paneer', 'salad', 'curd')
for food in menu:
    print(food)

# The restaurant changes its menu:
# you can't edit an item, but you CAN
# redefine the whole tuple:
menu = ('rice', 'dal', 'biryani', 'halwa', 'lassi')
print("\\nRevised menu:")
for food in menu:
    print(food)`}
              note="Assigning a NEW tuple to the same variable is legal — mutating the existing one is not."
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <KV k="List [ ]" v="mutable — users, scores, carts: anything that grows and shrinks" />
          <KV k="Tuple ( )" v="immutable — rectangle dimensions, config values: data that must not drift" />
          <KV k="Looping" v="identical syntax for both — for item in structure: works the same" />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="friend_foods = my_foods (no slice). You append 'cannoli' to my_foods. What does friend_foods hold?"
            options={["The original three items only", "The original plus cannoli — same underlying list", "An empty list", "A TypeError is raised"]}
            answer={1}
            explain="Without the slice you created a second NAME, not a second list — both variables are aliases for the same object, so the append shows through both names."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="dimensions = (200, 50); dimensions[0] = 250 — what happens?"
            options={["dimensions becomes (250, 50)", "TypeError: 'tuple' object does not support item assignment", "The tuple gains a third item", "250 silently replaces 200"]}
            answer={1}
            explain="Tuples are immutable — item assignment raises TypeError. You may, however, redefine the ENTIRE tuple: dimensions = (400, 100) is legal."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — copies & tuples drills"
          items={[
            { q: <>Pizzas: loop your pizza list; copy with [:] into friend_pizzas; add different pizzas to each; prove the two lists are separate with two loops.</> },
            { q: <>Now repeat the pizza program WITHOUT the slice and watch the contamination — then fix it.</> },
            { q: <>Store five basic foods in a tuple; loop and print each.</> },
            { q: <>Try to modify one item — meet the TypeError on purpose; read it aloud.</> },
            { q: <>Rewrite the whole tuple with a new menu and loop again — the legal way to &ldquo;change&rdquo; a tuple.</> },
            { q: <>Nine cars: slice and print the first three, middle three and last three.</>, hint: "cars[:3], cars[3:6], cars[-3:]" },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <><strong>list[:] creates an independent copy</strong>; plain assignment creates a reference — one list, two names.</>,
            <>Changes through either alias affect the <strong>same object</strong> — prove it with <code className="font-mono-warm">a is b</code>.</>,
            <><strong>Tuples are immutable</strong>: item assignment raises TypeError; redefining the whole tuple is allowed.</>,
            <>Choose <strong>lists for dynamic data</strong>, <strong>tuples for fixed data</strong> — loops work identically on both.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 19 — #skills-lab
   ============================================================ */

const SHIPMENT_STEPS = [
  { n: 1, call: 'starting_inventory = ["router", "switch", "firewall", "server", "cable"]', why: "create the list" },
  { n: 2, call: 'starting_inventory.remove("server")', why: "remove by VALUE — first occurrence" },
  { n: 3, call: 'starting_inventory.insert(0, "fiber_optic")', why: "insert at the FRONT; everything shifts right" },
  { n: 4, call: 'starting_inventory[-1] = "USB_hub"', why: "replace by index — 'cable' is gone" },
  { n: 5, call: "allocated_device = starting_inventory.pop(1)", why: "pop INDEX 1 and keep the value" },
  { n: 6, call: 'starting_inventory.append("rack_mount")', why: "grow at the end" },
  { n: 7, call: "del starting_inventory[2]", why: "delete by index — value unrecoverable" },
];

export function SkillsLabSection() {
  return (
    <Section id="skills-lab">
      <SectionHead
        eyebrow="Lecture 19 · the skills lab"
        title={
          <>
            The <span className="grad-text">skills lab</span> — everything, applied
          </>
        }
        lead="The deck's consolidation lecture: why fundamentals still matter in the age of LLMs, the tools you own so far, and one challenge that uses all of them — the shipment inventory."
      />

      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6" style={{ color: "#c2410c" }} />
            <h3 className="text-2xl font-bold">Why fundamentals, when AI can write code?</h3>
          </div>
          <p className="mt-3 max-w-4xl text-[.92rem] leading-relaxed text-[#2b2014]">
            LLMs generate code from plain English — but using them well requires the basics: you must be able
            to <strong>write meaningful prompts</strong>, <strong>judge whether the output is correct and efficient</strong>,{" "}
            <strong>debug and modify it</strong> for your context. The analogy from the deck: children learn the
            alphabet (ABCD) before writing essays, even with help. Without the fundamentals, AI&rsquo;s output is{" "}
            <em>elvish</em> — you can paste it, but you can&rsquo;t read, evaluate, or repair it.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Callout kind="why" title="What you can do after this lap">
              Read and write strings, numbers, comments · build and manage lists · organize, slice, copy ·
              decide with if · loop with for · already smell what functions will feel like.
            </Callout>
            <Callout kind="story" title="How the exam will test it">
              Code <strong>interpretation</strong> over syntax memory: trace the logic, explain it in plain
              English, spot the indentation and logical errors — pen and paper, flexible evaluation.
            </Callout>
          </div>
        </div>
      </Reveal>

      <ReadStep n="2" title="The shipment inventory challenge" sub="Seven moves on one list — every removal method you own, in one program" />
      <Reveal>
        <div className="card-warm p-6 md:p-8">
          <p className="text-[.92rem] leading-relaxed text-[#2b2014]">
            A hardware shipment just arrived. The deck assigns six operations — read each step, predict
            the list after it, <em>then</em> run the block and check yourself:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="warm-table min-w-[680px]">
              <thead>
                <tr><th>#</th><th>Operation</th><th>Why this tool</th></tr>
              </thead>
              <tbody>
                {SHIPMENT_STEPS.map((s) => (
                  <tr key={s.n}>
                    <td className="font-black text-[#c2410c]">{s.n}</td>
                    <td className="font-mono-warm text-[.8rem]">{s.call}</td>
                    <td>{s.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <CodeBlock
              title="shipment_inventory.py — the full challenge"
              code={`starting_inventory = ["router", "switch", "firewall", "server", "cable"]
print("start         :", starting_inventory)

starting_inventory.remove("server")            # 2 — by value
starting_inventory.insert(0, "fiber_optic")    # 3 — to the front
starting_inventory[-1] = "USB_hub"             # 4 — replace last
allocated_device = starting_inventory.pop(1)   # 5 — pop & store
starting_inventory.append("rack_mount")        # 6 — grow at the end
del starting_inventory[2]                      # 7 — delete by index

print("final         :", starting_inventory)
print("allocated     :", allocated_device)`}
              output={"start         : ['router', 'switch', 'firewall', 'server', 'cable']\nfinal         : ['fiber_optic', 'firewall', 'rack_mount']\nallocated     : 'switch'"}
              note="Trace it by hand first: remove 'server' → [router, switch, firewall, cable] → insert 'fiber_optic' at 0 → [fiber_optic, router, switch, firewall, cable] → replace last → pop(1) takes 'switch' → append 'rack_mount' → del index 2 (the 'firewall'). If your prediction matches the run, you OWN this chapter."
            />
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout kind="warn" title="The three removal tools, one last time">
          <strong>del</strong> — by index, gone forever · <strong>pop()</strong> — by index (default: last),
          value returned · <strong>remove()</strong> — by value, first occurrence only. The challenge above
          uses all three; choosing the right one is the skill.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="In the shipment challenge, why pop(1) instead of del starting_inventory[1]?"
            options={["They are identical", "pop() returns the removed value so it can be stored in allocated_device", "del only works on the last item", "pop() removes ALL occurrences of index 1"]}
            answer={1}
            explain="Both remove the item, but pop() hands the value back — and the task says 'store it in allocated_device'. When you need the removed value, pop; when you don't, del."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="After insert(0, 'fiber_optic'), where do 'router' and the rest sit?"
            options={["Overwritten — insert replaces index 0", "Shifted one position to the right", "Deleted", "Moved to the end of the list"]}
            answer={1}
            explain="insert() adds WITHOUT replacing — every element at and after the target index shifts right by one. That's why the final inventory still holds 'router' after the pop."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Lab extensions — remix the shipment"
          items={[
            { q: <>Add a step: insert <code className="font-mono">&ldquo;firewall&rdquo;</code> back at index 1 after the del — then print and explain the order.</> },
            { q: <>Swap the pop(1) for pop() — what is allocated_device now, and why?</>, hint: "no index = the LAST item" },
            { q: <>Use remove() on <code className="font-mono">&ldquo;router&rdquo;</code> instead of del by index — does the final list change?</> },
            { q: <>Write the challenge&rsquo;s expected final list on paper FIRST, then run and compare. Full marks is matching yourself.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <>LLMs amplify programmers who know the basics — <strong>prompts, evaluation, debugging</strong> all rest on fundamentals.</>,
            <>The shipment challenge exercises <strong>remove · insert · index-assignment · pop · append · del</strong> in one program.</>,
            <>Trace lists <strong>by hand, step by step</strong> — prediction before execution is the exam skill.</>,
            <>Comments (<strong>#</strong>) explain what and how — Google, Microsoft and Siemens all have style guides for a reason.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
