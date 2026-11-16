/* ============================================================
   FoC · END-TERM MOCK — the official L34 blueprint, built 1:1.

   Lecture 34 (Course Assessment & Examination Guidelines) fixes
   the paper format: 2 hours, 60 marks, 25 questions —
     · 20 Short Answer  × 2 marks  (max 3 sentences of theory,
       optional 2–4 line snippet, point-to-point answers)
     ·  5 Code Output   × 4 marks  (exact output, case-sensitive,
       all-or-nothing grading)
   100% of the paper comes from the programming syllabus only:
   strings, lists, conditionals, loops, dictionaries, functions,
   classes and modules.

   Every short-answer `answerText` obeys the 3-sentence cap and
   every output `answerText` was executed with python3 and pasted
   character-for-character — blanks, case and spacing included.
   ============================================================ */

import type { EngineQuestion } from "@/components/notes/ExamEngine";

export const ENDTERM_MOCK_META = {
  id: "endterm",
  title: "Official 60-Mark End-Term Mock",
  subtitle: "Lecture 34 format · 20 short answer × 2m + 5 output × 4m · 2 hours",
  marksShort: 2,
  marksOutput: 4,
  totalMarks: 60,
} as const;

/* ------------------------------------------------------------
   SECTION A — SHORT ANSWER  (Q1–Q20 · 2 marks each · 40 marks)
   Answer in at most 3 sentences, point-to-point.
   ------------------------------------------------------------ */
const SHORT_ANSWER: EngineQuestion[] = [
  {
    id: "et-s01",
    type: "short",
    q: 'Given word = "ada lovelace", state what .title(), .upper(), .lower() and .strip() each do, with the result of one on word.',
    answerText:
      '.title() capitalises the first letter of every word: word.title() is "Ada Lovelace". .upper() makes every letter uppercase ("ADA LOVELACE"), .lower() makes every letter lowercase, and .strip() removes only the leading and trailing whitespace ("  hi  ".strip() is "hi"). All of them return a NEW string — the original word never changes.',
    explain:
      "2 marks: (1) title/upper/lower correctly explained with one example (1) (2) strip() removes only the ENDS, not inner spaces, + methods return a new string (1).",
  },
  {
    id: "et-s02",
    type: "short",
    q: "What is an f-string? Rewrite print(\"Name: \" + name + \", age \" + str(age)) as a single f-string.",
    code: 'name = "Aman"\nage = 19\nprint("Name: " + name + ", age " + str(age))',
    answerText:
      'An f-string is a string prefixed with f that embeds variables or expressions directly inside { } braces. The rewrite is print(f"Name: {name}, age {age}") — the {age} placeholder converts the int automatically, so no str() cast is needed. F-strings are the cleanest way to mix text and values in one line.',
    explain:
      "2 marks: (1) definition — f prefix + { } placeholders evaluated at run time (1) (2) correct rewritten line, noting str() is unnecessary inside { } (1).",
  },
  {
    id: "et-s03",
    type: "short",
    q: 'For letters = ["a", "b", "c", "d", "e"], state letters[-1], letters[1:4] and letters[:2], and state the rule every slice follows.',
    code: 'letters = ["a", "b", "c", "d", "e"]',
    answerText:
      'letters[-1] is "e" (negative indexes count from the end), letters[1:4] is ["b", "c", "d"], and letters[:2] is ["a", "b"]. A slice copies from the start index and stops BEFORE the stop index — the stop position is never included — and a missing start/stop defaults to the beginning/end of the list. Slicing returns a new list; the original is untouched.',
    explain:
      "2 marks: (1) all three values correct (1) (2) the stop-index-is-EXCLUDED rule stated (1).",
  },
  {
    id: "et-s04",
    type: "short",
    q: "Differentiate what append(), insert(), del, pop() and remove() each do to a list nums.",
    code: "nums = [10, 20, 30]",
    answerText:
      "append(x) adds x at the END, while insert(i, x) pushes x in at index i and shifts the rest right. del nums[i] deletes by index and returns nothing, pop() removes by index AND returns the removed value (the last item if no index is given), and remove(x) deletes the first occurrence of the VALUE x. So: add with append/insert; remove by index with del or pop, by value with remove.",
    explain:
      "2 marks: (1) append vs insert vs any removal method correct (1) (2) pop() returns the value, remove() targets a value not an index, del returns nothing (1).",
  },
  {
    id: "et-s05",
    type: "short",
    q: "What is the difference between nums.sort() and sorted(nums)? Why does x = nums.sort() leave x holding None?",
    answerText:
      "nums.sort() rearranges the ORIGINAL list in place and returns None, so x = nums.sort() makes x None. sorted(nums) leaves the original untouched and RETURNS a brand-new sorted list, so x = sorted(nums) gives the sorted copy. Remember the pair: sort() mutates, sorted() returns.",
    explain:
      "2 marks: (1) sort() = in-place, returns None (1) (2) sorted() = new list, original safe (1). The x = nums.sort() → None trap is the favourite paper trick here.",
  },
  {
    id: "et-s06",
    type: "short",
    q: "What is the difference between = and == in Python? What happens on the line if grade = 80: ?",
    answerText:
      "= is the assignment operator — it stores a value into a variable (grade = 80) — while == is the comparison operator — it tests whether two values are equal and gives True or False. Writing if grade = 80: is a SyntaxError, because a condition must be a comparison, not a store. One equals sign assigns; two equals signs ask.",
    explain:
      "2 marks: (1) assign vs compare (1) (2) if grade = 80: is a SyntaxError — conditions need == (1).",
  },
  {
    id: "et-s07",
    type: "short",
    q: "In an if / elif / else ladder, what happens when more than one condition is true? Trace the snippet for score = 85.",
    code: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 50:\n    print("C")\nelse:\n    print("F")',
    answerText:
      "Python checks the conditions top to bottom and runs ONLY the first branch that is True — every later elif is skipped even if it would also have been true. For score = 85, score >= 90 is False but score >= 80 is True, so it prints B and never tests the score >= 50 branch. The else block runs only when every condition above it failed.",
    explain:
      "2 marks: (1) first-true-branch-wins, remaining branches skipped (1) (2) trace of the snippet → B (1).",
  },
  {
    id: "et-s08",
    type: "short",
    q: "What does `if items:` evaluate to when items = []? Which other values behave the same way, and why is this style preferred?",
    answerText:
      "An empty list is falsy, so if items: is False and the block is skipped; a list holding even one element is truthy and the block runs. Python treats the empty containers and zeros — [], (), \"\", 0 and None — as False, and everything else as True. So `if items:` is simply the cleaner, shorter way of writing `if len(items) > 0:`.",
    explain:
      "2 marks: (1) empty list → False, block skipped (1) (2) the falsy family (empty containers, 0, \"\", None) vs everything else truthy (1).",
  },
  {
    id: "et-s09",
    type: "short",
    q: "When do you choose a for loop and when a while loop? Give one example use of each.",
    answerText:
      "A for loop walks over a KNOWN sequence — a list, a string or a range — once per item, e.g. for i in range(5). A while loop repeats as long as its condition stays True, for an UNKNOWN number of rounds, e.g. while balance > 0. Choose for when you know what you are iterating over; choose while when you only know the stopping condition.",
    explain:
      "2 marks: (1) for = fixed/known collection or count (1) (2) while = condition-controlled, unknown repetitions (1).",
  },
  {
    id: "et-s10",
    type: "short",
    q: "What do break and continue do inside a loop? Show the difference using for n in [1, 2, 3, 4]: .",
    answerText:
      "break stops the ENTIRE loop immediately and jumps to the first line after it, while continue skips only the REST of the current iteration and jumps to the next one. In for n in [1, 2, 3, 4]:, a break at n == 2 ends the loop after printing 1, but a continue at n == 2 skips only the 2 and still prints 3 and 4. break = leave the loop; continue = skip this round.",
    explain:
      "2 marks: (1) break exits the whole loop (1) (2) continue jumps to the next iteration, loop keeps running (1).",
  },
  {
    id: "et-s11",
    type: "short",
    q: "How many numbers does range(1, 6) produce, and which ones? State the rule and how you would include the stop value.",
    answerText:
      "range(1, 6) produces 1, 2, 3, 4, 5 — five numbers — because the stop value is always EXCLUDED. The rule is start inclusive, stop exclusive: range(a, b) runs a, a+1, … up to b − 1. To include 6 you write range(1, 7).",
    explain:
      "2 marks: (1) 1 to 5, five values (1) (2) stop-exclusive rule + bump the stop by 1 to include it (1).",
  },
  {
    id: "et-s12",
    type: "short",
    q: 'For d = {"name": "Aman"}, how do you read a value by key, and how do d["city"] and d.get("city") differ?',
    answerText:
      'You read a value with its key in square brackets — d["name"] gives "Aman" — and you add or update a pair with d[key] = value. The difference shows on a MISSING key: d["city"] raises a KeyError crash, while d.get("city") quietly returns None instead (or the default you pass: d.get("city", "N/A")). Use [] when the key must exist; use get() when it might not.',
    explain:
      '2 marks: (1) key access d[key] + assignment (1) (2) KeyError vs None (plus optional default) on a missing key (1).',
  },
  {
    id: "et-s13",
    type: "short",
    q: "What do d.keys(), d.values() and d.items() give, and how do you loop over both keys and values at once?",
    code: 'marks = {"Ram": 88, "Sita": 92}',
    answerText:
      "d.keys() gives all the keys, d.values() gives all the values, and d.items() gives the (key, value) pairs. To walk both at once, unpack the pairs in the loop header: for name, m in marks.items(): — on each round name receives a key and m receives its matching value. .items() is the standard way to traverse an entire dictionary.",
    explain:
      "2 marks: (1) what each of the three methods returns (1) (2) the two-variable for loop over .items() (1).",
  },
  {
    id: "et-s14",
    type: "short",
    q: 'How do you delete a key from a dictionary, and how do you read a value from a dictionary stored INSIDE another? Show both with student = {"name": "Riya", "marks": {"math": 91}}.',
    code: 'student = {"name": "Riya", "marks": {"math": 91}}',
    answerText:
      'Delete with del d[key] — del student["name"] removes that key together with its value for good. For the nested dictionary, chain the brackets: student["marks"]["math"] gives 91, reading the inner dict first and then its key. Each [ ] steps one level deeper into the nesting.',
    explain:
      '2 marks: (1) del removes the key AND its value (1) (2) chained [ ][ ] access into the inner dictionary (1).',
  },
  {
    id: "et-s15",
    type: "short",
    q: "Distinguish a parameter from an argument. What is a docstring and where exactly does it sit in a def?",
    code: 'def greet(name):        # name is a parameter\n    """Say hello to one person."""\n    print("Hello", name)\n\ngreet("Aman")           # "Aman" is an argument',
    answerText:
      'A parameter is the variable name listed in the def (name); an argument is the actual value supplied in the call ("Aman"). A docstring is the """…""" description written as the FIRST line of the function body, stating what the function does. The same def can then be called many times with different arguments.',
    explain:
      '2 marks: (1) parameter = in the definition, argument = in the call (1) (2) docstring = first """ line describing the function (1).',
  },
  {
    id: "et-s16",
    type: "short",
    q: 'In def bill(item, price=50): what are the two ways to pass arguments, and why must price=50 come after item?',
    answerText:
      'Arguments can be passed POSITIONALLY, matched by order (bill("Pen", 20)), or by KEYWORD, matched by name (bill(price=20, item="Pen")) — keyword form lets you reorder them. A parameter with a default may be skipped in the call, but default parameters must come AFTER every non-default one: def bill(item, price=50) is legal, while def bill(price=50, item) is a SyntaxError. Python would have no way to fill a required parameter sitting behind an optional one.',
    explain:
      '2 marks: (1) positional = by order, keyword = by name and order-free (1) (2) defaults-last rule + omitting the argument uses the default 50 (1).',
  },
  {
    id: "et-s17",
    type: "short",
    q: "What is the difference between return and print inside a function? What does “TypeError: greet() missing 1 required positional argument” tell you?",
    answerText:
      "print only DISPLAYS a value on the screen, while return hands a value BACK to the caller so it can be stored or reused — a function with no return gives None. That TypeError means the call supplied fewer arguments than there are required parameters: greet() was called with nothing for name. It is Python reporting that the call and the def do not match.",
    explain:
      "2 marks: (1) print = display only, return = value back to caller, missing return → None (1) (2) TypeError = wrong number/type of arguments against the parameter list (1).",
  },
  {
    id: "et-s18",
    type: "short",
    q: "What do __init__ and self do in a class? Distinguish a class attribute from an instance attribute, and name one more thing an attribute can hold.",
    code: 'class Student:\n    school = "IITJ"          # a ______ attribute\n\n    def __init__(self, name):\n        self.name = name     # a ______ attribute',
    answerText:
      "__init__ is the method that runs automatically when an object is created and sets up its starting attributes; self is the object itself inside the class, which is why every method takes self as its first parameter. A class attribute (school = \"IITJ\") is shared by all instances, while an instance attribute (self.name = name) belongs to that one object only. An attribute can even hold another instance — self.pet = Pet(\"Milo\") — an object inside an object.",
    explain:
      '2 marks: (1) __init__ auto-runs at creation, self = the current object (1) (2) class attribute shared vs instance attribute per-object (1); recognising instances-as-attributes earns credit.',
  },
  {
    id: "et-s19",
    type: "short",
    q: "What does inheritance give a child class? What do super() and method overriding each do?",
    code: 'class Animal:\n    def speak(self):\n        return "..."\n\nclass Dog(Animal):\n    def speak(self):\n        return super().speak() + " Woof"',
    answerText:
      "Inheritance — class Dog(Animal) — lets the child reuse the parent's attributes and methods without rewriting them. Method overriding means the child defines a method with the SAME name as the parent's, and when called on a child object, the child's version wins. super() calls the parent's version from inside the override, so Dog can extend Animal's speak() instead of replacing it completely.",
    explain:
      "2 marks: (1) child reuses the parent's members via class Dog(Animal) (1) (2) overriding = same-name method replaces the parent's, super() still reaches the parent's version (1).",
  },
  {
    id: "et-s20",
    type: "short",
    q: "Show three ways of bringing the math module into a program, and explain why `from math import *` is avoided.",
    answerText:
      "`import math` brings the whole module — call as math.sqrt(16); `import numpy as np` attaches an ALIAS so you type the short np. prefix instead of the long name; `from math import sqrt` imports one function you call directly as sqrt(16). `from math import *` dumps every name of the module into your program, so its names can silently overwrite your own variables and functions, and it becomes impossible to tell where a name came from. That namespace pollution is exactly why the star import is discouraged.",
    explain:
      "2 marks: (1) any two import styles / an alias shown correctly (1) (2) import * = namespace pollution — silent name clashes, origins hard to trace (1).",
  },
];

/* ------------------------------------------------------------
   SECTION B — CODE OUTPUT  (Q21–Q25 · 4 marks each · 20 marks)
   Write the EXACT output — case, quotes and spacing count.
   All-or-nothing: correct output = 4, anything else = 0.
   Every answerText below was produced by executing the snippet
   with python3 and pasted character-for-character.
   ------------------------------------------------------------ */
const CODE_OUTPUT: EngineQuestion[] = [
  {
    id: "et-o01",
    type: "output",
    q: "Write the exact output (all three lines).",
    code: 's = "  grace hopper  "\nclean = s.strip()\nprint(clean)\nprint(clean.title())\nprint(clean.upper())',
    answerText: "grace hopper\nGrace Hopper\nGRACE HOPPER",
    explain:
      "4 marks: all-or-nothing. strip() trims the leading/trailing spaces first, so every later line works on \"grace hopper\". .title() capitalises each word → Grace Hopper; .upper() → GRACE HOPPER. Watch the CASE — title-case is neither lowercase nor uppercase.",
  },
  {
    id: "et-o02",
    type: "output",
    q: "Write the exact output (both lines).",
    code: "nums = [4, 2, 7, 2]\nnums.append(2)\nnums.sort()\nfirst_two = nums[:2]\nprint(nums)\nprint(first_two)",
    answerText: "[2, 2, 2, 4, 7]\n[2, 2]",
    explain:
      "4 marks: all-or-nothing. append(2) grows the list to [4, 2, 7, 2, 2]; sort() rearranges the SAME list to [2, 2, 2, 4, 7]; the slice [:2] copies the first two items. Note the printed list carries brackets and commas — and sort() mutates the original, it returns nothing.",
  },
  {
    id: "et-o03",
    type: "output",
    q: "Write the exact output (all three lines).",
    code: 'for n in [4, 7, 2, 9]:\n    if n % 2 == 0:\n        continue\n    print(n)\nprint("done")',
    answerText: "7\n9\ndone",
    explain:
      "4 marks: all-or-nothing. continue skips the REST of the current round, so the even numbers 4 and 2 are never printed; the odd 7 and 9 print, then the loop ends and done prints. break here would have stopped after 7 — continue only skips a round.",
  },
  {
    id: "et-o04",
    type: "output",
    q: "Write the exact output (all three lines).",
    code: 'stock = {"pen": 12, "book": 3}\ncount = 0\nfor item, qty in stock.items():\n    print(item, qty)\n    count = count + qty\nprint(count)',
    answerText: "pen 12\nbook 3\n15",
    explain:
      "4 marks: all-or-nothing. .items() yields (key, value) pairs in insertion order, so pen 12 prints before book 3; print(item, qty) puts ONE space between them; count accumulates 12 + 3 = 15. Same-name keys would collide, but none do here — the output is fully deterministic.",
  },
  {
    id: "et-o05",
    type: "output",
    q: "Write the exact output (one line).",
    code: 'class Pet:\n    def __init__(self, name):\n        self.name = name\n    def greet(self):\n        return "I am " + self.name\nprint(Pet("Milo").greet())',
    answerText: "I am Milo",
    explain:
      '4 marks: all-or-nothing. Pet("Milo") runs __init__, storing self.name = "Milo"; greet() returns the STRING "I am Milo" and print shows it WITHOUT quotes. The method returns — it does not print — and __init__ needs no explicit call.',
  },
];

/* Official order: Q1–Q20 short answer, then Q21–Q25 code output. */
export const ENDTERM_MOCK_QUESTIONS: EngineQuestion[] = [...SHORT_ANSWER, ...CODE_OUTPUT];
