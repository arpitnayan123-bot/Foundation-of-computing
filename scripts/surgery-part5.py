#!/usr/bin/env python3
"""Surgical edits for the FoC rebuild — Part5 (basics + lists).

- BasicsSection (L10): add float-precision + str() conversion blocks.
- ListsSection (L11): remove the organizing / looping / range / slices /
  tuples cards (re-homed to Lectures 12, 13, 15, 16), drop the sort quiz,
  add the guest-list invitation exercise, rewrite Practice + Takeaways.
- Remove the SORTED_TABLE constant (moved to FocParts3).
"""
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/Part5.tsx")
src = P.read_text()

def cut(src, start_marker, end_marker, replacement, keep_end=False):
    i = src.find(start_marker)
    assert i != -1, f"start not found: {start_marker[:70]!r}"
    assert src.find(start_marker, i + 1) == -1, f"start not unique: {start_marker[:70]!r}"
    j = src.find(end_marker, i + len(start_marker))
    assert j != -1, f"end not found: {end_marker[:70]!r}"
    if not keep_end:
        j += len(end_marker)
    return src[:i] + replacement + src[j:]

# ------------------------------------------------------------------
# 0) drop the SORTED_TABLE constant (re-homed in FocParts3)
# ------------------------------------------------------------------
i = src.find("const SORTED_TABLE = [")
assert i != -1, "SORTED_TABLE not found"
j = src.find("];", i) + len("];\n\n")
src = src[:i] + src[j:]

# ------------------------------------------------------------------
# 1) BasicsSection: float precision + type conversion (Lecture 10)
# ------------------------------------------------------------------
FLOAT_BLOCKS = '''      <Reveal className="mt-6">
        <div className="card-warm p-6 md:p-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <CodeBlock
              title="float_precision.py — the 0.30000000000000004 surprise"
              code={`print(0.2 + 0.1)          # expect 0.3?
print(0.2 + 0.1 == 0.3)   # False!

# Every language has this quirk: computers store
# decimals in BINARY, and 0.1 has no exact binary
# form. Harmless for most apps — and fixable for
# display:
result = 0.2 + 0.1
print(f"{result:.2f}")    # two decimal places`}
              output={"0.30000000000000004\\nFalse\\n0.30"}
              note="A float is any number with a decimal point. The precision anomaly appears in ALL programming languages — generally of little concern, but now you can recognize it instead of fearing it."
            />
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
              output={"happy 23rd birthday\\n24 next year"}
              note="str() converts the integer to a string for the concatenation while preserving the numeric variable for calculations — exactly why the deck prefers it over typing quotes around the number."
            />
          </div>
        </div>
      </Reveal>

      {/* Comments */}'''

anchor = "      {/* Comments */}"
assert src.count(anchor) == 1, "comments marker missing"
src = src.replace(anchor, FLOAT_BLOCKS, 1)

# ------------------------------------------------------------------
# 2) ListsSection: remove organizing card
# ------------------------------------------------------------------
ORG_CARD_START = "      {/* Organizing */}"
ORG_CARD_END = "      {/* Loops */}"
src = cut(src, ORG_CARD_START, ORG_CARD_END, "")

# remove loops card
src = cut(src, "      <Reveal className=\"mt-10\">\n        <div className=\"card-warm p-6 md:p-8\">\n          <p className=\"eyebrow\">Looping through an entire list</p>", "      {/* Numerical lists + range */}", "")

# remove range card (up to slices)
src = cut(src, "      <Reveal className=\"mt-10\">\n        <div className=\"card-warm p-6 md:p-8\">\n          <p className=\"eyebrow\">Making numerical lists</p>", "      {/* Slices */}", "")

# remove slices card (up to tuples)
src = cut(src, "      <Reveal className=\"mt-10\">\n        <div className=\"card-warm p-6 md:p-8\">\n          <p className=\"eyebrow\">Working with part of a list</p>", "      {/* Tuples */}", "")

# remove tuples card (up to the quiz grid)
src = cut(src, "      <Reveal className=\"mt-10\">\n        <div className=\"card-warm p-6 md:p-8\">\n          <p className=\"eyebrow\">Lists that cannot change</p>", "      <div className=\"mt-8 grid gap-5 md:grid-cols-2\">", "")

# replace the two quizzes: sort quiz out, keep bicycles quiz + add one
OLD_QUIZ = '''        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="What is the key difference between cars.sort() and sorted(cars)?"
            options={["No difference", "sort() sorts permanently; sorted() returns a sorted copy", "sorted() is only for numbers", "sort() is faster but wrong"]}
            answer={1}
            explain="sort() mutates the list permanently; sorted(cars) leaves the original untouched and hands you a new sorted list. Same for reverse=True on both."
          />
        </Reveal>'''
NEW_QUIZ = '''        <Reveal delay={100}>
          <Quiz
            source="Concept check"
            q="Which removal method returns the removed value so you can keep using it?"
            options={["del motorcycles[0]", "motorcycles.remove('ducati')", "popped = motorcycles.pop()", "None of them"]}
            answer={2}
            explain="pop() removes AND returns — perfect when the removed value still matters (a popped player, a printed design). del is gone forever; remove() drops by value with nothing returned."
          />
        </Reveal>'''
assert src.count(OLD_QUIZ) == 1, "sort quiz anchor missing"
src = src.replace(OLD_QUIZ, NEW_QUIZ)

# ------------------------------------------------------------------
# 3) ListsSection: add guest_list exercise before the quiz grid
# ------------------------------------------------------------------
GUEST = '''      <Reveal className="mt-8">
        <div className="card-warm p-6 md:p-8">
          <p className="eyebrow">The deck&rsquo;s dinner-party drill</p>
          <h3 className="mt-2 text-2xl font-bold">guest_list.py — invitations, edits and apologies</h3>
          <p className="mt-2 max-w-4xl text-[.9rem] text-[#e9d7bf]">
            The classic exercise that touches every operation: invite three guests, one declines —
            replace them, find a bigger table — insert a guest mid-list, append one to the end, then
            cut the list down with pop.
          </p>
          <div className="mt-5">
            <CodeBlock
              dark
              title="guest_list.py"
              code={`guests = ['ida', 'leo', 'asma']
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\\nSadly, asma can't make it.")
guests[guests.index('asma')] = 'amir'      # replace by index
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\\nBigger table found!")
guests.insert(1, 'kabir')                  # middle
guests.append('tara')                      # end
for g in guests:
    print(f"{g.title()}, please come to dinner.")

print("\\nOnly two seats now.")
while len(guests) > 2:
    sorry = guests.pop()
    print(f"Sorry, {sorry.title()} — no room this time.")
for g in guests:
    print(f"{g.title()}, you're still invited.")`}
              output={"Ida, please come to dinner.\\nLeo, please come to dinner.\\nAsma, please come to dinner.\\n\\nSadly, asma can't make it.\\nIda, please come to dinner.\\nLeo, please come to dinner.\\nAmir, please come to dinner.\\n\\nBigger table found!\\nIda, please come to dinner.\\nKabir, please come to dinner.\\nLeo, please come to dinner.\\nAmir, please come to dinner.\\nTara, please come to dinner.\\n\\nOnly two seats now.\\nSorry, Tara — no room this time.\\nSorry, Amir — no room this time.\\nSorry, Kabir — no room this time.\\nIda, you're still invited.\\nLeo, you're still invited."}
              note="Replace via index assignment, grow with insert/append, shrink with pop — the whole Lecture-11 toolkit in one storyline. This is also the deck's assigned homework: personalize every name."
            />
          </div>
        </div>
      </Reveal>
'''
qidx = src.find('q="What does bicycles[1] return')
assert qidx != -1, "bicycles quiz missing"
gidx = src.rfind('<div className="mt-8 grid gap-5 md:grid-cols-2">', 0, qidx)
assert gidx != -1, "quiz grid not found before bicycles quiz"
src = src[:gidx] + GUEST + src[gidx:]

# ------------------------------------------------------------------
# 4) ListsSection practice: keep list basics; drop re-homed drills
# ------------------------------------------------------------------
def drop_lines_containing(text, markers):
    return "".join(l for l in text.splitlines(keepends=True) if not any(m in l for m in markers))

src = drop_lines_containing(src, [
    "<>Use a for loop to print numbers 1 to 20, inclusive.",
    "<>Make a list of 1 → 1,000,000",
    "<>Verify the million-list with min()",
    "<>Use range()’s third argument",
    "<>Make a list of multiples of 3",
    "<>Build the first ten cubes",
    "<>With a 9-car list, slice and print",
    "<>Pizzas: loop your pizza list",
    "<>Buffet: store five foods in a tuple",
])

# add L11 drills
ADD_DRILLS = '''            { q: <>Guest list: three invites → one declines (replace by index) → bigger table (insert + append) → only two seats (pop down to two, del the rest). Print every message.</> },
            { q: <>Deliberately cause an IndexError by reading one past the end — then fix it with len()−1 or a negative index.</> },
'''
anchor2 = "            { q: <>Intentionally cause an index error"
# the million/odd drills are gone; append new drills before the closing "]}"
i = src.find("title=\"Try It Yourself — lists drills\"")
assert i != -1, "lists practice title missing"
j = src.find("]}", i)
src = src[:j] + ADD_DRILLS + src[j:]

# rename the drill title
src = src.replace("Try It Yourself — lists drills", "Try It Yourself — list-basics drills")

# ------------------------------------------------------------------
# 5) ListsSection takeaways rewrite (L11 scope)
# ------------------------------------------------------------------
i = src.find("        <Takeaways\n          dark\n          items={[\n            <>Lists are <strong>ordered and mutable</strong>")
assert i != -1, "takeaways block not found"
j = src.find("</Section>", i)
TAKE = '''        <Takeaways
          dark
          items={[
            <>Lists are <strong>ordered and mutable</strong>; indexes start at <strong>0</strong>; <strong>-1</strong> is the last item.</>,
            <>Grow with <strong>append()/insert()</strong>; shrink with <strong>del/pop()/remove()</strong> — pop returns the value.</>,
            <>remove() deletes only the <strong>first occurrence</strong>; loop it to purge them all (Lecture 26 does exactly that).</>,
            <>Ordering, slicing and tuples moved to their own lectures — <strong>12, 15 and 16</strong>.</>,
          ]}
        />
      </Reveal>
'''
src = src[:i] + TAKE + src[j:]

P.write_text(src)
print("Part5.tsx surgery complete:", len(src.splitlines()), "lines")
