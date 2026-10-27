#!/usr/bin/env python3
"""Verify every PDF lecture's signature facts exist in the app source.
Each fact is a distinctive string/number/name taken directly from the
PDF (Notes_261027_010112.pdf, 28 lectures). Case-insensitive substring
search across all lecture-bearing source files."""
import os, re, sys

ROOT = "/home/z/my-project/src/components"
FILES = []
for d in ("notes", "foc", "quiz2"):
    dd = os.path.join(ROOT, d)
    for f in sorted(os.listdir(dd)):
        if f.endswith((".tsx", ".ts")):
            FILES.append(os.path.join(dd, f))

BODIES = {}
for p in FILES:
    BODIES[p] = open(p, encoding="utf-8").read()

# PDF-signature facts per lecture. Note: written bracket-h safe (no "[h").
FACTS = {
 1: ["Google Pay", "sentiment analysis", "Computing Fundamentals", "Data Visualization",
     "most popular programming language", "reads almost like English"],
 2: ["IPO", "Input", "Process", "Output", "four essential pillars", "zettabytes",
     "algorithm", "decompose", "abstraction", "pattern"],
 3: ["NREGA", "Delhi", "500 students", "Structured", "Unstructured", "Semi-structured",
     "Quantitative", "Qualitative", "temporal", "election polls", "blood group",
     "discrete", "continuous"],
 4: ["vibe coding", "evaluation scheme", "accountable", "Uber", "surge",
     "natural language prompts", "production"],
 5: ["al-Khwarizmi", "flowchart", "Finiteness", "Definiteness", "Effectiveness",
     "Do-While", "step-by-step", "recipe"],
 6: ["sensor", "CPU", "GPU", "RAM", "ROM", "AlexNet", "CUDA", "abacus", "3000 BC",
     "storage", "input device", "output device"],
 7: ["operating system", "compiler", "interpreter", "utility", "Colab", "Chrome OS",
     "Android", "application software", "Linux", "macOS"],
 8: ["Python", "interpreter", "IDE", "IDEA", "IDLE", "syntax"],
 9: ["Knight Capital", "Zara", "AgroStar", "ECG", "redlining", "Netflix",
     "DIKW", "Data → Information → Knowledge → Wisdom"],
 10: ["variable", "comment", "#", "snake_case", "NameError", "TypeError",
      "title()", "upper()", "lower()", "str(", "familiar with", "underscore"],
 11: ["append", "insert", "remove", "index", "motorcycle", "bicycle", "guest"],
 12: ["sort()", "sorted()", "reverse", "len(", "min(", "max(", "permanent"],
 13: ["for ", "indentation", "magician", "colon", "forget to indent",
      "unnecessary indent"],
 14: ["60 MCQ", "20 minutes", "September 20", "best of three", "code writing",
      "Quantitative", "Qualitative", "primary", "secondary", "IMF", "World Bank"],
 15: ["range(", "list(range", "comprehension", "squares", "min(", "max(",
      "sum(", "slice", "million", "census"],
 16: ["copy", "reference", "tuple", "immutable", "parentheses",
      "cannot assign", "dimensions"],
 17: ["BMW", "upper()", "title()", "conditional test", "Audi", "lower()",
      "anchovies", "age_0", "age_1", "banned_users", "Mary", "game_active",
      "can_edit", "mushrooms", "onions", "pineapple", "pepperoni",
      "username", "keywords"],
 18: ["if-else", "elif", "amusement park", "age", "admission", "$", "independent if"],
 19: ["LLM", "ABCD", "elvish", "title()", "upper()", "lower()", "strip()",
      "lstrip", "rstrip", "tab", "newline", "str(", "Happy", "TypeError",
      "shipment", "inventory"],
 20: ["green peppers", "french fries", "extra cheese", "empty list", "requested_toppings",
      "pizza", "while \"cat\"", "multiple lists", "available_toppings"],
 21: ["dictionary", "key", "value", "alien", "color", "points", "get("],
 22: ["items()", "keys()", "values()", "set(", "favorite_languages", "jen",
      "sarah", "edward", "phil", "sorted("],
 23: ["list of dictionaries", "alien_0", "range(30)", "dictionary of lists",
      "dictionary of dictionaries", "users", "favorite_languages", "nest"],
 24: ["student_records", "lambda", "filter", "reward", "insert", "sort",
      "October", "no third quiz", "code + explanation"],
 25: ["input(", "prompt", "int(", "ValueError", "modulo", "%", "even", "odd",
      "while", "current_number", "quit", "rental car", "multiple of 10",
      "table is ready"],
 26: ["flag", "break", "continue", "infinite loop", "unconfirmed_users",
      "pop()", "confirmed_users", "pets", "cat", "goldfish", "rabbit",
      "responses", "mountain", "polling_active"],
 27: ["def ", "greet_user", "docstring", "triple quotes", "parameter",
      "argument", "positional", "keyword argument", "describe_pet",
      "hamster", "Harry", "parrot", "Kyle", "Willie", "default value",
      "TypeError", "display_message", "favorite_book", "make_shirt",
      "I love Python", "describe_city"],
 28: ["return", "get_formatted_name", "full_name", "optional", "middle name",
      "build_person", "first", "last", "while", "greeting", "show_magicians",
      "make_great", "the Great", "copy", "3D print", "printer"],
}

LECT_SECTION = {
 1: ["course-map"], 2: ["computing", "pillars", "data"], 3: ["data-types"],
 4: ["why"], 5: ["algorithm"], 6: ["hardware"], 7: ["software"], 8: ["python"],
 9: ["case-files"], 10: ["basics"], 11: ["lists"], 12: ["list-organize"],
 13: ["for-loops"], 14: ["checkpoint-1"], 15: ["numeric-lists"],
 16: ["copies-tuples"], 17: ["if"], 18: ["branches"], 19: ["skills-lab"],
 20: ["if-lists"], 21: ["dicts"], 22: ["dict-loops"], 23: ["nesting"],
 24: ["records-lab"], 25: ["while"], 26: ["loop-control"], 27: ["functions"],
 28: ["returns"],
}

allsrc = "\n".join(BODIES.values())
missing_total = 0
for lec in range(1, 29):
    facts = FACTS[lec]
    missing = [f for f in facts if f.lower() not in allsrc.lower()]
    status = "OK  " if not missing else "MISS"
    print(f"L{lec:2d} [{status}] {len(facts)-len(missing)}/{len(facts)} facts present", flush=True)
    for f in missing:
        print(f"      ✗ {f!r}")
    missing_total += len(missing)
print(f"\nTOTAL missing: {missing_total}")
