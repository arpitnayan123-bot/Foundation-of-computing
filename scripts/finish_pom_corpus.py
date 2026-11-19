#!/usr/bin/env python3
"""Post-process the POM corpus: add H1 title lines; verify L36/L33 quirks."""
import os
import re

ROOT = "/home/z/my-project"
DIR = os.path.join(ROOT, "scripts", "mktg_lectures")

TITLES = {
    1: "Introduction to Marketing: Understanding Customers, Markets, Brands and Value",
    2: "Introduction to Marketing: Understanding Customer Value and Business Success",
    3: "Understanding Marketing: Definitions, Concepts, and Application",
    4: "Introduction to Marketing and Understanding Consumer Behavior",
    5: "Understanding Customer Perceived Value",
    6: "Marketing Environment and Exchange Systems",
    7: "Fundamental Concepts in Customer Perceived Value and Marketing Exchange",
    8: "Expectation Gap, Satisfaction, and Loyalty in Marketing",
    9: "Understanding Customer Satisfaction and Loyalty: Key Concepts and Financial Impact",
    10: "Understanding Existing State, Desired State, and Consumer Decision-Making in Marketing",
    11: "Segmentation, Targeting, and Positioning (STP): Fundamentals and Market Strategy",
    12: "Behavioral and Benefit-Based Market Segmentation",
    13: "Segmentation and Targeting in Real-World Marketing: The Tupo Case Study",
    14: "Targeting and Positioning in Marketing Strategy",
    15: "Understanding Positioning Strategy in Marketing",
    16: "Segmentation, Targeting, Positioning, and Micro-Marketing in Modern Marketing",
    17: "Points of Differentiation (POD) and Points of Parity (POP) in Marketing Strategy",
    18: "Understanding Consumer Behavior: Perception, Opinion Formation, and Purchase Decisions",
    19: "Overview of Consumer Buying Decision Process",
    20: "Consumer Behavior: Understanding Purchase Decisions and Consumer Journey",
    21: "Overview of Consumer Decision-Making Journey and Integrated Behavior Framework",
    22: "The Decision Journey — Consolidated (reserved, blank)",
    23: "Understanding Theories of Motivation in Consumer Behavior",
    24: "Understanding Perception in Consumer Behavior",
    25: "Understanding Perception and Gestalt Principles in Marketing",
    26: "Understanding Consumer Behavior: Motivation, Perception, and Brand Humanization",
    27: "Understanding Humanizing a Brand Through Product Attributes and Human Characteristics",
    28: "Understanding Cognitive Biases in Consumer Decision-Making",
    29: "Product and Product Strategy",
    30: "Overview of Product Concepts and Portfolio Management",
    31: "Product Portfolio, Mix, and Strategy Fundamentals",
    32: "Deepening into Product Strategy: Line Extensions and Market Stretching",
    33: "Market Stretch and Product Portfolio Strategy",
    34: "Understanding Product Narratives and Brand Humanization",
    35: "Overview of Product Strategy and Co-Branding",
    36: "Pricing Strategy: Frameworks, Psychology, and Implementation",
    37: "Common Pricing Strategies and Their Execution",
    38: "Principles of Marketing and Marketing Communications",
    39: "Lecture 39 (reserved, blank)",
    40: "Final Class: Three C's in Marketing Communication and Examination Guidelines",
}

total = 0
for n in range(1, 41):
    path = os.path.join(DIR, f"L{n:02d}.md")
    text = open(path, encoding="utf-8").read().strip()
    if text.startswith("# Lecture"):
        continue  # already titled (reserved files)
    h1 = f"# Lecture {n}: {TITLES[n]}\n\n"
    open(path, "w", encoding="utf-8").write(h1 + text + "\n")
    total += len(re.findall(r"\S+", text))
print(f"titled 38 lecture files · body words still {total}")

# ---- L36: hunt the shattered math + currency anchors
l36 = open(os.path.join(DIR, "L36.md"), encoding="utf-8").read()
for needle in ("49,199", "49 199", "9 . 9 9", "9.99", "4.99"):
    hits = [m.start() for m in re.finditer(re.escape(needle), l36)]
    print(f"L36 {needle!r}: {len(hits)} hits")
# letter-spaced junk heuristic: runs of single chars separated by spaces
junk = re.findall(r"(?:\b[A-Za-z$] ){4,}[A-Za-z$]", l36)
print(f"L36 letter-spaced runs: {len(junk)}")
for j in junk[:10]:
    print(f"   {j!r}")

# ---- L33 quirk contexts (for the authoring note)
l33 = open(os.path.join(DIR, "L33.md"), encoding="utf-8").read()
for needle in ("Kéels", "Detal"):
    i = l33.find(needle)
    print(f"\n--- L33 {needle!r} context ---")
    print(l33[max(0, i - 160): i + 200].replace("\n", " ⏎ "))

# ---- L28 tail (the promised-but-absent biases)
l28 = open(os.path.join(DIR, "L28.md"), encoding="utf-8").read()
print("\n--- L28 tail ---")
print(l28[-700:])
