#!/usr/bin/env python3
"""Surgical edits for the FoC rebuild — Part8 (arguments).

ArgsSection keeps the argument-passing half (Lecture 27: positional,
keyword, defaults, errors). The return-value half (return vs print,
optional middle name, dict builders, while-greeter) moves to the new
#returns section for Lecture 28 (FocParts9).
"""
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/Part8.tsx")
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
# 1) remove blocks 9-12 (return values → returns section)
# ------------------------------------------------------------------
POINTER = '''      {/* 9 — pointer to the returns lecture */}
      <Reveal className="mt-8">
        <Callout kind="story" title="Answers, going back — next lecture">
          Passing information <strong>in</strong> is mastered here. Sending answers{" "}
          <strong>back out</strong> — return vs print, the optional middle name, building
          dictionaries, and the greeter that loops — is Lecture 28&rsquo;s
          &ldquo;Return values&rdquo; chapter. One keyword stands between you and it.
        </Callout>
      </Reveal>
'''

src = cut(
    src,
    "      {/* 9 — return values */}",
    "      {/* quiz */}",
    "__CUT_A__",
)
src = cut(
    src,
    "__CUT_A__",
    '          <Quiz\n            q="What does return full_name.title() do',
    POINTER + "\n",
    keep_end=True,
)

# ------------------------------------------------------------------
# 2) drop the return quiz (keep the keyword-arguments quiz)
# ------------------------------------------------------------------
RET_QUIZ = '''          <Quiz
            q="What does return full_name.title() do that print(full_name.title()) inside the function does not?"
            options={[
              "Nothing — they're interchangeable",
              "It formats the name differently",
              "It sends the value back to the calling line so it can be stored in a variable",
              "It makes the function run faster",
            ]}
            answer={2}
            explain="return sends the value back to the caller — developer = get_formatted_name(...) can store it, reuse it, pass it on. print() just displays and the value is gone."
            source="Functions · return values"
          />
'''
assert src.count(RET_QUIZ) == 1, "return quiz anchor missing"
src = src.replace(RET_QUIZ, "")

# ------------------------------------------------------------------
# 3) practice: drop the re-homed drills (items 4-6)
# ------------------------------------------------------------------
def drop_lines_containing(text, markers):
    return "".join(l for l in text.splitlines(keepends=True) if not any(m in l for m in markers))

src = drop_lines_containing(src, [
    "<>Rewrite <code className=\"font-mono\">get_formatted_name</code> so the middle name is optional",
    "<>Make <code className=\"font-mono\">build_person(first, last, age='')</code> return a dictionary",
    "<>Combine get_formatted_name() with a while loop that quits",
])

# ------------------------------------------------------------------
# 4) takeaways: trim the return/optional/while lines
# ------------------------------------------------------------------
old_tk = [
    "<><strong>return</strong> sends a value back to the caller (store it in a variable) — print only displays. Functions can return dictionaries too.</>,\n",
    "            <>Optional arguments: empty-string default + <strong>if middle_name:</strong>, listed last in the definition.</>,\n",
    "            <>Functions compose with while loops — always give an infinite <strong>while True</strong> an exit via <strong>break</strong>.</>,\n",
]
for it in old_tk:
    assert src.count(it) == 1, f"args takeaway not unique: {it[:60]!r}"
    src = src.replace(it, "")

# ------------------------------------------------------------------
# 5) section head: scope the lead to argument-passing
# ------------------------------------------------------------------
old_lead = "Now the complete toolkit: passing information in three styles, letting defaults do quiet work, catching argument errors — and the return keyword that sends answers back to the caller."
new_lead = "The argument toolkit: passing information in three styles, letting defaults do quiet work, and catching argument errors. The return keyword that sends answers back lives in Lecture 28."
assert src.count(old_lead) == 1, "args lead not found"
src = src.replace(old_lead, new_lead)

P.write_text(src)
print("Part8.tsx surgery complete:", len(src.splitlines()), "lines")
