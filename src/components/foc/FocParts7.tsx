"use client";

/* ============================================================
   FocParts7 — the FoC rebuild, file 7 of 9.

   #dict-loops  (Lecture 22 — Looping Through a Dictionary)
   #nesting     (Lecture 23 — Structures Inside Structures)

   The loop-lens half of the old dictionaries chapter becomes
   Lecture 22 (loop_all_pairs / loop_values_and_set re-homed
   byte-for-byte, DictLenses + POLL_PRE imported from Part6);
   the three nesting patterns become Lecture 23, joined by a
   new 30-alien fleet machine straight from the deck.
   ============================================================ */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DictLenses, POLL_PRE } from "@/components/notes/Part6";
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
   LECTURE 22 — #dict-loops
   ============================================================ */

export function DictLoopsSection() {
  return (
    <Section id="dict-loops" dark>
      <SectionHead
        dark
        eyebrow="Lecture 22 · looping dictionaries"
        title={
          <>
            Looping through <span className="grad-text">dictionaries</span>
          </>
        }
        lead="A dictionary can hold a few pairs or a few million. Python gives you three lenses — pairs, keys, values — and one deduplicator. Pick the lens that matches the question you're asking."
      />

      <Reveal>
        <div className="rounded-2xl p-4" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
          <DictLenses />
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <CodeBlock
              dark
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
              note="Two variables in the loop header — .items() hands you the key AND its value each pass. Name them for meaning (name, language) rather than key, value. And note: for name in dictionary: is identical to .keys() — the keys ARE the default."
            />
            <CodeBlock
              dark
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

      <Reveal className="mt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Callout dark kind="insight" title=".items() — the pair lens">
            For greeting every user BY their answer: <em>&ldquo;Jen&rsquo;s favorite language is Python.&rdquo;</em>
          </Callout>
          <Callout dark kind="insight" title="sorted(.keys()) — the order lens">
            The dictionary stores pairs in insertion order; <strong>sorted()</strong> loops a sorted
            COPY — the original dict is untouched.
          </Callout>
          <Callout dark kind="insight" title="set(.values()) — the dedupe lens">
            Thousands of respondents, four languages: <strong>set()</strong> answers &ldquo;which languages
            exist?&rdquo; without repetition.
          </Callout>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="Why wrap favorite_languages.values() in set() before looping?"
            options={["To sort alphabetically", "To make each language appear only once", "To speed up the loop", "To convert values to keys"]}
            answer={1}
            explain="A set keeps only unique items — so 'python' appearing for both jen and phil prints once. Use sorted(keys) when you want order instead."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="for name in favorite_languages: — what does this loop over?"
            options={["Key-value pairs", "The keys — .keys() is the default", "The values", "Nothing — it needs .items()"]}
            answer={1}
            explain="Looping a dictionary directly loops its KEYS — writing .keys() explicitly is optional (though it can read more clearly)."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — dict-loop drills"
          items={[
            { q: <>Glossary: five programming terms as keys, definitions as values — loop with .items() and print each neatly. Then expand to ten: the loop picks them up automatically.</> },
            { q: <>Rivers: {'{’nile’: ’egypt’, ’amazon’: ’brazil’, …}'} — print “The Nile runs through Egypt.”, then all river names, then all countries.</> },
            { q: <>Polling: loop a list of people; thank those already in favorite_languages, invite the rest.</>, hint: "if name in favorite_languages.keys()" },
            { q: <>Loop the glossary keys in ALPHABETICAL order with sorted() — prove the dictionary itself kept its order.</> },
            { q: <>Print the distinct languages with set() — then add a fifth person favouring python and confirm the set does not change.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          dark
          items={[
            <><strong>.items()</strong> walks key-value pairs into two loop variables.</>,
            <><strong>.keys()</strong> is the default lens — looping the dict directly is the same; <strong>sorted()</strong> imposes order on a copy.</>,
            <><strong>.values()</strong> reads just the answers; wrap in <strong>set()</strong> to dedupe.</>,
            <>Combine loops + membership (<strong>in .keys()</strong>) for poll invitations and filters.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* ============================================================
   LECTURE 23 — #nesting
   ============================================================ */

const NEST_MODES = [
  {
    key: "lod",
    label: "List of dictionaries",
    sub: "many objects, same shape",
    example: "a fleet of aliens, a roster of users",
    loop: "for alien in aliens: → alien['color']",
  },
  {
    key: "lid",
    label: "List in a dictionary",
    sub: "one key, many values",
    example: "a pizza with a list of toppings; a person with several favourite languages",
    loop: "for topping in pizza['toppings']:",
  },
  {
    key: "did",
    label: "Dictionary in a dictionary",
    sub: "hierarchical records",
    example: "users keyed by username, each holding first/last/location",
    loop: "for username, info in users.items(): → info['last']",
  },
];

function NestSwitcher() {
  const [active, setActive] = useState(0);
  const m = NEST_MODES[active];
  return (
    <div className="rounded-2xl p-5" style={{ background: "#fbf3e3", border: "1px dashed #e5c79d" }}>
      <div className="flex flex-wrap gap-2">
        {NEST_MODES.map((mm, i) => (
          <button
            key={mm.key}
            onClick={() => setActive(i)}
            className="rounded-full px-4 py-2 text-[.8rem] font-bold transition-all"
            style={
              active === i
                ? { background: "#c2410c", color: "#fff7ec" }
                : { background: "#fff", color: "#8a4508", border: "1px solid #e5c79d" }
            }
          >
            {mm.label}
          </button>
        ))}
      </div>
      <motion.p
        key={m.key}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 text-[.92rem] text-[#2b2014]"
      >
        <strong className="text-[#8a4508]">{m.sub}.</strong> {m.example}
      </motion.p>
      <p className="mt-2 font-mono-warm text-[.8rem] font-bold text-[#c2410c]">{m.loop}</p>
    </div>
  );
}

export function NestingSection() {
  return (
    <Section id="nesting">
      <SectionHead
        eyebrow="Lecture 23 · nesting"
        title={
          <>
            Nesting — <span className="grad-text">structures inside structures</span>
          </>
        }
        lead="Python lets you nest lists inside dictionaries, dictionaries inside lists, and dictionaries inside dictionaries. The moment real data shows up, structures combine — this is how you model fleets, orders and user bases."
      />

      <Reveal>
        <NestSwitcher />
      </Reveal>

      <ReadStep n="2" title="The three patterns, runnable" sub="Same ideas you saw in Lecture 21 — now with room to breathe and edit" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
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
      </Reveal>

      <ReadStep n="3" title="Generating a fleet — 30 aliens from one loop" sub="The deck's video-game pattern: create thousands of objects, then steer them by condition" />
      <Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <CodeBlock
            title="aliens_30.py — generate, then modify"
            code={`aliens = []
for alien_number in range(30):
    aliens.append({'color': 'green', 'points': 5,
                   'speed': 'slow'})

print("created:", len(aliens), "aliens")

# The first three speed up and turn yellow:
for alien in aliens[:3]:
    if alien['color'] == 'green':
        alien['color'] = 'yellow'
        alien['speed'] = 'medium'
        alien['points'] = 10

for alien in aliens[:5]:
    print(alien)`}
            output={"created: 30 aliens\n{'color': 'yellow', 'points': 10, 'speed': 'medium'}\n{'color': 'yellow', 'points': 10, 'speed': 'medium'}\n{'color': 'yellow', 'points': 10, 'speed': 'medium'}\n{'color': 'green', 'points': 5, 'speed': 'slow'}\n{'color': 'green', 'points': 5, 'speed': 'slow'}"}
            note="range(30) iterates the loop 30 times, creating one dictionary per pass. Then a for + if combo modifies only the aliens that meet the criterion — game engines are built on exactly this beat."
          />
          <div className="grid content-start gap-4">
            <Callout kind="insight" title="Why fleets, not variables">
              Thirty dictionaries hand-typed is bureaucracy; thirty generated by one loop is{" "}
              <strong>data engineering</strong>. Change the blueprint once and every alien in the
              fleet changes with it.
            </Callout>
            <Callout kind="why" title="Slices + loops + conditions = management">
              <code className="font-mono-warm">aliens[:3]</code> picks the front of the fleet, the if
              filters by colour, the assignments steer. The same trio later powers the
              records-lab in Lecture 24.
            </Callout>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <Callout kind="warn" title="Nesting has a depth cost">
          Two levels (a dict of dicts, a list of dicts) models most of reality cleanly. Three-plus
          levels get hard to read — when you feel that pain, that&rsquo;s your cue for{" "}
          <strong>classes</strong>, waiting at the end of the course.
        </Callout>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <Quiz
            source="Concept check"
            q="aliens holds 30 dictionaries. What does aliens[:3] give you?"
            options={["The last three aliens", "The first three aliens — as a slice of the list", "Three random aliens", "An error — you can't slice a list of dicts"]}
            answer={1}
            explain="Lists of anything slice identically: [:3] is the first three ITEMS — here, three whole dictionaries, which you can then modify key by key."
          />
        </Reveal>
        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="In users = {'aeinstein': {'first': 'albert', ...}}, how do you reach 'albert'?"
            options={["users.first", "users['first']", "users['aeinstein']['first']", "users['aeinstein.first']"]}
            answer={2}
            explain="Two lookups in sequence: the outer key 'aeinstein' returns the INNER dictionary, then ['first'] reads from it — that's dictionary-in-dictionary access."
          />
        </Reveal>
      </div>

      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — nesting drills"
          items={[
            { q: <>Pets: several dictionaries (kind of animal + owner&rsquo;s name) inside a list called pets; loop and print everything about each.</> },
            { q: <>favorite_places: three people as keys, one to three favorite places each as lists; loop and print.</> },
            { q: <>Cities: three cities as keys, each mapping to a nested dictionary {'{'}country, population, fact{'}'}; print each city with all its information.</> },
            { q: <>Scale the fleet: generate 50 aliens, promote the first 5 to yellow, the next 5 to red — then count how many remain green.</>, hint: "sum(1 for a in aliens if a['color'] == 'green')" },
            { q: <>Pizza orders: a list of pizza dictionaries (crust + toppings list) — loop the orders, then loop each order&rsquo;s toppings.</> },
          ]}
        />
      </Reveal>

      <Reveal className="mt-6">
        <Takeaways
          items={[
            <><strong>List of dicts</strong> — fleets and rosters: many objects, one shape, generated by a loop.</>,
            <><strong>Dict with a list value</strong> — one key, many values: pizza toppings, favourite languages.</>,
            <><strong>Dict of dicts</strong> — hierarchical records: username → profile.</>,
            <>Access nests the same way the data does: <strong>outer[key][innerKey]</strong>; loops nest to match.</>,
          ]}
        />
      </Reveal>
    </Section>
  );
}
