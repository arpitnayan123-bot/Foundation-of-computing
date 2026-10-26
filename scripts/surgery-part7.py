#!/usr/bin/env python3
"""Surgical edits for the FoC rebuild — Part7 (while + functions).

WhileSection keeps Lecture 25 (input, int/modulo, while counting) and hands
the exit-toolkit / flags / break / continue / while-with-structures half to
Lecture 26 (FocParts8). ExitToolkit is exported for FocParts8.
"""
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/Part7.tsx")
src = P.read_text()

def cut(src, start_marker, end_marker, replacement="", keep_end=False):
    i = src.find(start_marker)
    assert i != -1, f"start not found: {start_marker[:70]!r}"
    assert src.find(start_marker, i + 1) == -1, f"start not unique: {start_marker[:70]!r}"
    j = src.find(end_marker, i + len(start_marker))
    assert j != -1, f"end not found: {end_marker[:70]!r}"
    if not keep_end:
        j += len(end_marker)
    return src[:i] + replacement + src[j:]

# ------------------------------------------------------------------
# 1) STEP 3 (exit toolkit + quit/flag/break/continue + continue blocks)
# ------------------------------------------------------------------
POINTER = '''      {/* STEP 3 — pointer to the loop-control lecture */}
      <Reveal>
        <Callout kind="story" title="Four ways out — next lecture">
          The exit toolkit — <strong>flags, break, continue</strong> — and while loops that
          drain lists and fill dictionaries are the whole of Lecture 26,
          &ldquo;Flags, Break &amp; Continue&rdquo;. First, make the counting loop below
          second nature.
        </Callout>
      </Reveal>
'''

src = cut(
    src,
    "      {/* STEP 3 — the exit toolkit */}",
    "      {/* STEP 4 — while with lists & dicts */}",
    "__CUT_A__",
)
src = cut(
    src,
    "__CUT_A__",
    '      <div className="mt-8 grid gap-5 md:grid-cols-2">',
    POINTER + "\n",
    keep_end=True,
)

# ------------------------------------------------------------------
# 2) quizzes: drop the break/continue one, keep the int() one
# ------------------------------------------------------------------
BC_QUIZ = '''          <Quiz
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
'''
assert src.count(BC_QUIZ) == 1, "break/continue quiz anchor missing"
src = src.replace(BC_QUIZ, "")

# ------------------------------------------------------------------
# 3) practice: drop the re-homed drills
# ------------------------------------------------------------------
def drop_lines_containing(text, markers):
    return "".join(l for l in text.splitlines(keepends=True) if not any(m in l for m in markers))

src = drop_lines_containing(src, [
    "<>Movie tickets: while loop asking age",
    "<>Three versions of a loop exit",
    "<>Write a loop that never ends",
    "<>sandwich_orders → finished_sandwiches",
    "<>Ensure ‘pastrami’ appears three times",
    "<>Dream-vacation poll",
])

# ------------------------------------------------------------------
# 4) takeaways: trim to Lecture-25 scope
# ------------------------------------------------------------------
old_tk = [
    "            <>Exit toolkit: <strong>sentinel value</strong> (‘quit’) · <strong>active flag</strong> · <strong>break</strong>; skip with <strong>continue</strong>.</>,\n",
    "            <>Lists: <strong>while x in list: remove(x)</strong> purges all copies; <strong>while list: pop()</strong> transfers items. Dictionaries: collect responses while a flag is active, then report with .items().</>,\n",
]
for it in old_tk:
    assert src.count(it) == 1, f"while takeaway not unique: {it[:60]!r}"
    src = src.replace(it, "")

# ------------------------------------------------------------------
# 5) section lead: four steps -> two steps + pointer
# ------------------------------------------------------------------
old_lead = "input() makes them listen; while makes them persist. This chapter is one conversation: ask the user something, keep responding until they say stop. Four steps — follow the numbers."
new_lead = "input() makes them listen; while makes them persist. This chapter is one conversation: ask the user something, keep responding until they say stop. Two steps here — the exits live in Lecture 26."
assert src.count(old_lead) == 1, "while lead not found"
src = src.replace(old_lead, new_lead)

P.write_text(src)
print("Part7.tsx surgery complete:", len(src.splitlines()), "lines")
