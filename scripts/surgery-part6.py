#!/usr/bin/env python3
"""Surgical edits for the FoC rebuild — Part6 (if + dicts).

- IfSection: replace STEP 3 (chain) + STEP 4 (if x lists) + quizzes with a
  pointer callout + L17-appropriate quizzes; rewrite Practice + Takeaways.
- DictsSection: remove STEP 3 (loop lenses) + STEP 4 (nesting) + set quiz;
  add a pointer callout; rewrite Practice + Takeaways.

Every anchor must match exactly once — otherwise abort without writing.
"""
import sys
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/Part6.tsx")
src = P.read_text()

def cut(src: str, start_marker: str, end_marker: str, replacement: str, keep_end: bool = False) -> str:
    """Replace [start_marker .. end_marker) with replacement.
    keep_end=True keeps end_marker (replacement is inserted before it)."""
    i = src.find(start_marker)
    assert i != -1, f"start marker not found: {start_marker[:60]!r}"
    assert src.find(start_marker, i + 1) == -1, f"start marker not unique: {start_marker[:60]!r}"
    j = src.find(end_marker, i)
    assert j != -1, f"end marker not found after start: {end_marker[:60]!r}"
    if not keep_end:
        j += len(end_marker)
    return src[:i] + replacement + src[j:]

# ------------------------------------------------------------------
# 1) IfSection: STEP 3 + STEP 4 + the two quizzes -> pointer + new quizzes
# ------------------------------------------------------------------
NEW_IF = '''      {/* STEP 3 — pointer to the branches lecture */}
      <Reveal>
        <Callout kind="story" title="Where the questions go next">
          You can now ask any yes/no question Python can answer. The next lecture builds the
          roads: <strong>if-else, the elif ladder and independent ifs</strong> live in the
          &ldquo;If, Elif, Else&rdquo; chapter of Lecture 18 — and the list-filtering patterns
          (special items, empty guards, multiple lists) live in Lecture 20.
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
'''

src = cut(
    src,
    "      {/* STEP 3 — the chain */}",
    '      {/* STEP 4 — if + lists */}',
    "__CUT_A__",
)
src = cut(
    src,
    "__CUT_A__",
    '      <Reveal className="mt-6">\n        <Practice',
    NEW_IF + "\n",
    keep_end=True,
)

# ------------------------------------------------------------------
# 2) IfSection Practice + Takeaways rewrite
# ------------------------------------------------------------------
IF_PRACTICE = '''      <Reveal className="mt-6">
        <Practice
          title="Try It Yourself — conditional-test drills"
          items={[
            { q: <>Series of conditional tests with printed predictions (car = 'subaru' pattern) — at least 10 tests evaluating to True and False.</> },
            { q: <>At least one True and one False for: string equality/inequality · lower() tests · numerical {'==, !=, >, <, >=, <='} · and / or · in a list · not in a list.</> },
            { q: <>Banned users: check whether 'marie' can post — and whether 'david' can.</>, hint: "user not in banned_users" },
            { q: <>Booleans: track game_active and can_edit; write two if statements that behave differently from the same pattern.</> },
          ]}
        />
      </Reveal>'''

start = src.find('      <Reveal className="mt-6">\n        <Practice\n          title="Try It Yourself — if drills"')
assert start != -1, "if practice not found"
end_marker = "      </Reveal>"
end = src.find(end_marker, start) + len(end_marker)
src = src[:start] + IF_PRACTICE + src[end:]

old_tk = "<><strong>if-elif-else</strong> chains pick exactly one path; <strong>independent ifs</strong> allow many; you can omit <strong>else</strong>.</>,\n            <>With lists: treat <strong>special items</strong> inside loops, guard <strong>empty lists</strong> with a truthiness check, and filter across <strong>multiple lists</strong>.</>,"
new_tk = "These tests are the <strong>heart of every if statement</strong> — the branches they drive live in Lecture 18.</>,"
assert src.count(old_tk) == 1, "if takeaways anchor not unique"
src = src.replace(old_tk, new_tk)

# ------------------------------------------------------------------
# 3) DictsSection: STEP 3 (loop lenses) + STEP 4 (nesting) + set quiz
# ------------------------------------------------------------------
NEW_DICT = '''      {/* STEP 3 — pointer to the dict-loops & nesting lectures */}
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
'''

src = cut(
    src,
    "      {/* STEP 3 — the loop lenses */}",
    "      {/* STEP 4 — nesting */}",
    "__CUT_B__",
)
src = cut(
    src,
    "__CUT_B__",
    '      <div className="mt-8 grid gap-5 md:grid-cols-2">\n        <Reveal>\n          <Quiz\n            source="Concept check"\n            q="What does alien_0.get',
    NEW_DICT + "\n",
    keep_end=True,
)

# remove the set() quiz from the remaining pair
set_quiz = '''        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Why wrap favorite_languages.values() in set() before looping?"
            options={["To sort alphabetically", "To make each language appear only once", "To speed up the loop", "To convert values to keys"]}
            answer={1}
            explain="A set keeps only unique items — so 'python' appearing for both jen and phil prints once. Use sorted(keys) when you want order instead."
          />
        </Reveal>
'''
assert src.count(set_quiz) == 1, "set quiz anchor not found/unique"
src = src.replace(set_quiz, "")

# DictsSection practice: keep dict-build drills, drop loop/nesting drills (line-based)
def drop_lines_containing(text: str, markers: list[str]) -> str:
    out = []
    for line in text.splitlines(keepends=True):
        if any(m in line for m in markers):
            continue
        out.append(line)
    return "".join(out)

src = drop_lines_containing(src, [
    "<>Loop the glossary with .items()",
    "<>Rivers:",
    "<>Polling: loop a list of people",
    "<>Pets: several dictionaries",
    "<>favorite_places: three people",
    "<>Cities: three cities as keys",
])

# DictsSection takeaways: drop loops + nesting lines
old_tk2 = [
    "            <>Loop <strong>.items()</strong> for pairs, <strong>.keys()</strong> for names, <strong>sorted()</strong> for order, <strong>.values()</strong> + <strong>set()</strong> for unique values.</>,\n",
    "            <>Nesting models reality: <strong>list of dicts</strong> (fleets, users), <strong>dict with lists</strong> (pizza toppings), <strong>dict of dicts</strong> (city profiles).</>,\n",
]
for it in old_tk2:
    assert src.count(it) == 1, f"dict takeaway not unique: {it[:60]!r}"
    src = src.replace(it, "")

P.write_text(src)
print("Part6.tsx surgery complete:", len(src.splitlines()), "lines")
