#!/usr/bin/env python3
"""Reorganize FoC exam banks: 4 groups -> 6, matching the new nav groups.

- ExamGroup type: foundations | pillars | pycore | decisions | loops | pro
- PYCORE split by question id: decisions (if/dicts) + loops (while/input)
- 40 NEW hand-checked questions across six EXTRA arrays
- EXAM_BANKS / EXAM_GROUPS rewritten; titles/topics updated
"""
from pathlib import Path

P = Path("/home/z/my-project/src/components/notes/questions.ts")
src = P.read_text()

# ------------------------------------------------------------------
# 1) ExamGroup type
# ------------------------------------------------------------------
OLD_TYPE = 'export type ExamGroup = "foundations" | "machines" | "pycore" | "pro";'
NEW_TYPE = 'export type ExamGroup = "foundations" | "pillars" | "pycore" | "decisions" | "loops" | "pro";'
assert src.count(OLD_TYPE) == 1
src = src.replace(OLD_TYPE, NEW_TYPE)

# ------------------------------------------------------------------
# 2) new EXTRA arrays + split of PYCORE, inserted before EXAM_BANKS
# ------------------------------------------------------------------
EXTRAS = r'''/* ------------------------------------------------------------
   LECTURE-ALIGNED EXTENSIONS — questions for the new sections
   (course map · data taxonomy · case files · organizing lists ·
   comprehensions · branches · dict loops · nesting · records lab ·
   loop control · return values). Every figure hand-executed.
   ------------------------------------------------------------ */

/* ORIENTATION — course map + data-types additions */
const FOUNDATIONS_EXTRA: ExamQuestion[] = [
  {
    id: "fc1",
    type: "mcq",
    q: "Which of these is NOT one of the course's four learning objectives?",
    options: ["Computing fundamentals", "Programming with Python", "Chip-level hardware design", "A sentiment-analysis project"],
    answer: 2,
    explain: "The four objectives: computing fundamentals, programming with Python, data visualization, and the real-world sentiment-analysis project. Hardware design is electrical engineering's territory.",
  },
  {
    id: "fc2",
    type: "mcq",
    q: "Roughly what share of all data generated globally is UNSTRUCTURED?",
    options: ["About 20%", "About 50%", "About 80%", "About 99%"],
    answer: 2,
    explain: "≈80% is unstructured — emails, images, audio, video, sensor streams — which is why NLP and computer vision skills command a premium.",
  },
  {
    id: "fc3",
    type: "mcq",
    q: "A logistics firm tracks the fuel efficiency of ONE truck every day for a year. This is…",
    options: ["Cross-sectional data", "Panel data", "Time-series data", "Unstructured data"],
    answer: 2,
    explain: "ONE subject tracked over MANY time periods = time series. Panel data would need MANY trucks followed over time.",
  },
  {
    id: "fc4",
    type: "mcq",
    q: "\"Number of students in a class: 30\" is quantitative and…",
    options: ["Continuous — decimals allowed", "Discrete — countable whole numbers", "Nominal", "Ordinal"],
    answer: 1,
    explain: "You can't have 30.5 students — countable whole numbers are DISCRETE. Height or temperature would be continuous.",
  },
  {
    id: "fc5",
    type: "mcq",
    q: "A web API returns {\"user\": \"asha\", \"score\": 91}. What kind of data is that?",
    options: ["Structured (rows and columns)", "Semi-structured — key-value markers, no rigid table", "Unstructured free text", "Metadata only"],
    answer: 1,
    explain: "JSON has organizational markers (key-value pairs) but no fixed row-column format — the textbook semi-structured case, stored in NoSQL databases.",
  },
  {
    id: "fc6",
    type: "mcq",
    q: "File name, creation date, GPS location and camera model stored alongside a photo are…",
    options: ["Primary data", "Secondary data", "Metadata — data about data", "Unstructured data"],
    answer: 2,
    explain: "Metadata DESCRIBES the data without being its content — critical for organizing, finding and governing large datasets.",
  },
];

/* PILLARS & CASES — case files + AI-age additions */
const PILLARS_EXTRA: ExamQuestion[] = [
  {
    id: "pc1",
    type: "mcq",
    q: "In 2012, Knight Capital's buggy trading algorithm executed 4 million trades in 45 minutes. What did it cost?",
    options: ["$44,000", "$440,000", "$4.4 million", "$440 million — and the company"],
    answer: 3,
    explain: "$440 million in 45 minutes (~$163,000 per second) and bankruptcy. The lesson: correctness of transactions matters more than speed — test and verify before deployment.",
  },
  {
    id: "pc2",
    type: "mcq",
    q: "Zara collects sales data from all stores daily and plans production six months ahead. The data type behind that advantage is…",
    options: ["Cross-sectional", "Time series — sales tracked over time", "Metadata", "Nominal"],
    answer: 1,
    explain: "Each design's sales form a time series (one subject, many periods). Algorithms detect fast vs slow sellers — and the PROCESS phase is where the advantage lives.",
  },
  {
    id: "pc3",
    type: "mcq",
    q: "A bank denies everyone from certain PIN codes because defaults there are 3.4× higher. What is the ethical failure?",
    options: ["Using too little hardware", "Stopping at the information level — correlation treated as a decision, instead of climbing to knowledge and wisdom", "Storing PIN codes as strings", "Too many quizzes"],
    answer: 1,
    explain: "That is redlining — geographic discrimination from incomplete analysis. The correct path investigates WHY and adds variables (income, occupation) within RBI guidelines.",
  },
  {
    id: "pc4",
    type: "mcq",
    q: "CPU vs GPU — which comparison is correct?",
    options: [
      "CPU: thousands of weak cores · GPU: a few powerful ones",
      "CPU: a few powerful cores for complex sequential tasks · GPU: thousands of small cores for the same operation on millions of data points at once",
      "They are interchangeable with no trade-offs",
      "GPUs can only display graphics",
    ],
    answer: 1,
    explain: "CPUs have 4–24 powerful cores for sequential complexity; GPUs pack thousands of simple cores for massive parallel work — the reason modern AI exists.",
  },
  {
    id: "pc5",
    type: "mcq",
    q: "The 2012 breakthrough that showed the world what GPU-powered AI could do was…",
    options: ["The first iPhone", "AlexNet for computer vision", "The first Google search", "Bitcoin's whitepaper"],
    answer: 1,
    explain: "AlexNet was trained on GPUs and blew away the ImageNet competition — after that, GPUs (led by NVIDIA's CUDA platform, with PyTorch and TensorFlow on top) became AI's engine.",
  },
  {
    id: "pc6",
    type: "mcq",
    q: "Your phone rotates the map when you turn it and counts your steps. Which sensor pair does that?",
    options: ["Barometer + light sensor", "Accelerometer + gyroscope", "Proximity + fingerprint", "Temperature + GPS"],
    answer: 1,
    explain: "The accelerometer detects movement/orientation (rotation, step counting); the gyroscope detects rotational movement (gaming, camera stabilization).",
  },
  {
    id: "pc7",
    type: "mcq",
    q: "Why does the course insist on fundamentals when LLMs can write code?",
    options: [
      "LLMs are always wrong",
      "Because debugging, evaluating and fixing AI-generated code — plus legal accountability — still requires understanding the code yourself",
      "Because AI cannot type fast enough",
      "Because tokens are free",
    ],
    answer: 1,
    explain: "AI generates ~80% of prototype work but struggles with architecture and legacy integration; token costs pile up, production failures need human troubleshooting, and RBI/SEBI/IRDAI hold humans accountable.",
  },
  {
    id: "pc8",
    type: "mcq",
    q: "Your phone loses power. The unsaved document vanishes but the bootloader still works. Why?",
    options: [
      "Both lived in RAM",
      "The document was in volatile RAM; the bootloader lives in non-volatile ROM burned at the factory",
      "The document moved to the GPU",
      "ROM is faster than RAM",
    ],
    answer: 1,
    explain: "RAM is fast but volatile (6–12 GB in phones); ROM is non-volatile and permanent, holding firmware/bootloader instructions that survive power loss.",
  },
];

/* PYTHON CORE — organizing + numeric lists + copies/tuples additions */
const PYCORE_EXTRA: ExamQuestion[] = [
  {
    id: "px1",
    type: "output",
    q: "Write the output of this program.",
    code: 'bicycles = ["trek", "cannondale", "specialized"]\nprint(bicycles[-1], bicycles[-2])',
    answerText: "specialized cannondale",
    explain: "Negative indexes count from the END: −1 is the last item, −2 the second-to-last. Useful when you don't know the list's length.",
  },
  {
    id: "px2",
    type: "mcq",
    q: "cars = ['a', 'b', 'c', 'd'] — which index is INVALID?",
    options: ["cars[0]", "cars[3]", "cars[-1]", "cars[4]"],
    answer: 3,
    explain: "Length 4 → valid indices 0…3 (and −1…−4). Index 4 is one past the end → IndexError: list index out of range.",
  },
  {
    id: "px3",
    type: "mcq",
    q: "Which line builds [1, 4, 9, 16, 25] in ONE comprehension?",
    options: [
      "squares = [n**2 for n in range(1, 6):]",
      "squares = [n**2 for n in range(1, 6)]",
      "squares = for n**2 in range(1, 6)",
      "squares = [range(1, 6)**2]",
    ],
    answer: 1,
    explain: "Expression first, then for, NO colon inside a comprehension, and range stops before 6 → five squares. The colon belongs to ordinary for loops only.",
  },
  {
    id: "px4",
    type: "output",
    q: "Write the output.",
    code: 'players = ["charles", "martina", "michael", "florence", "eli"]\nprint(players[-3:])',
    answerText: "['michael', 'florence', 'eli']",
    explain: "−3: means 'from the third-to-last to the end' — the last three players. Slices never modify the original list.",
  },
  {
    id: "px5",
    type: "mcq",
    q: "friend_foods = my_foods — no slice. What did you create?",
    options: ["A real copy — two independent lists", "A second NAME for the same list — aliases", "An empty list", "A tuple"],
    answer: 1,
    explain: "Without [:] both variables point at ONE list object: appending through either name shows up through both. Copy with my_foods[:].",
  },
  {
    id: "px6",
    type: "output",
    q: "Write both outputs.",
    code: 'menu = ("rice", "dal", "paneer")\nprint(menu[0])\nmenu = ("rice", "biryani", "halwa")\nprint(menu[1])',
    answerText: "rice\nbiryani",
    explain: "Reading a tuple element is fine (menu[0]); ITEM assignment would raise TypeError. But redefining the WHOLE tuple is legal — the variable now points at a new tuple.",
  },
];

/* DECISIONS — if/branches/if-lists/dicts additions */
const DECISIONS_EXTRA: ExamQuestion[] = [
  {
    id: "d1",
    type: "mcq",
    q: "In an if-elif-else chain, how many blocks run?",
    options: ["All whose conditions are True", "Exactly one — the first True; the rest are skipped", "At least two", "None if else exists"],
    answer: 1,
    explain: "The chain is a series of exclusive doors: Python tests top-to-bottom, the FIRST True wins, and every later test is never even evaluated.",
  },
  {
    id: "d2",
    type: "output",
    q: "Write the output.",
    code: 'age = 12\nif age < 4:\n    price = 0\nelif age < 18:\n    price = 5\nelif age < 65:\n    price = 10\nelse:\n    price = 3\nprint(price)',
    answerText: "5",
    explain: "12 < 4 fails; 12 < 18 passes → price = 5, and the 65-branch is never checked. One bound per elif is enough because earlier branches already failed.",
  },
  {
    id: "d3",
    type: "mcq",
    q: "requested = ['mushrooms', 'extra cheese']. Why SEPARATE if statements (not elif) for toppings?",
    options: ["Style", "An elif chain stops at the first match — the cheese would be skipped", "elif cannot compare strings", "Separate ifs are faster"],
    answer: 1,
    explain: "Toppings are INDEPENDENT conditions — many can be true at once. Exclusive chains are for either/or choices like life stages or alien colours.",
  },
  {
    id: "d4",
    type: "output",
    q: "Write the output.",
    code: 'requested_toppings = []\nif requested_toppings:\n    print("building your pizza")\nelse:\n    print("plain pizza? really?")',
    answerText: "plain pizza? really?",
    explain: "An EMPTY list is falsy — the if fails and the else runs. This one-line truthiness guard is the idiomatic 'does the list contain anything?' check.",
  },
  {
    id: "d5",
    type: "output",
    q: "Write the output.",
    code: 'alien_color = "yellow"\nif alien_color == "green":\n    points = 5\nelif alien_color == "yellow":\n    points = 10\nelse:\n    points = 15\nprint(f"{points} points")',
    answerText: "10 points",
    explain: "First test fails, second passes → 10. Note the f-string prints just the number followed by ' points'.",
  },
  {
    id: "d6",
    type: "mcq",
    q: "for name, language in fav.items(): — what lands in the two variables?",
    options: ["Indexes and lengths", "The key AND its value, pair by pair", "Two copies of the key", "Random pairs"],
    answer: 1,
    explain: ".items() yields (key, value) tuples each pass; two loop variables unpack them — name gets the key, language the value.",
  },
  {
    id: "d7",
    type: "output",
    q: "Write the output.",
    code: 'd = {"phil": "python", "jen": "c", "sarah": "ruby"}\nfor name in sorted(d.keys()):\n    print(name)',
    answerText: "jen\nphil\nsarah",
    explain: "sorted() loops a sorted COPY of the keys — alphabetical: jen, phil, sarah. The dictionary itself keeps its insertion order.",
  },
  {
    id: "d8",
    type: "mcq",
    q: "set(d.values()) is used in a loop because a set…",
    options: ["Sorts values", "Keeps only UNIQUE items — duplicates vanish", "Reverses values", "Counts values"],
    answer: 1,
    explain: "Four people, two favouring python: .values() prints python twice; set() prints each language once. sorted() is for order, set() is for uniqueness.",
  },
];

/* LOOPS — input & while additions */
const LOOPS_EXTRA: ExamQuestion[] = [
  {
    id: "w1",
    type: "output",
    q: "Write the output.",
    code: "n = 1\nwhile n <= 3:\n    print(n)\n    n += 1",
    answerText: "1\n2\n3",
    explain: "The three moving parts: initialize (n = 1), condition (n <= 3), update (n += 1). Forget the update and the condition never turns False — infinite loop.",
  },
  {
    id: "w2",
    type: "mcq",
    q: "In loop-control, a FLAG is…",
    options: [
      "A syntax error",
      "A Boolean variable that governs whether the loop keeps running — one switch for many exit conditions",
      "A comment marker",
      "The loop's indentation",
    ],
    answer: 1,
    explain: "Set active = True before the loop, write while active:, flip it to False when any exit event fires. Cleaner than cramming many conditions into one while line.",
  },
  {
    id: "w3",
    type: "output",
    q: "Write the output.",
    code: "current = 0\nwhile current < 10:\n    current += 1\n    if current % 2 == 0:\n        continue\n    print(current)",
    answerText: "1\n3\n5\n7\n9",
    explain: "continue abandons the REST of this pass and jumps back to the test — evens skip their print, odds (1,3,5,7,9) print. break would have left the loop entirely.",
  },
  {
    id: "w4",
    type: "output",
    q: "Write the final list.",
    code: 'pets = ["dog", "cat", "dog", "goldfish", "cat"]\nwhile "cat" in pets:\n    pets.remove("cat")\nprint(pets)',
    answerText: "['dog', 'dog', 'goldfish']",
    explain: "remove() kills only the FIRST occurrence per pass — wrapping it in while 'cat' in pets: purges every one, then the condition goes False and the loop ends.",
  },
  {
    id: "w5",
    type: "mcq",
    q: "age = input('age: ') then age >= 18 crashes. Why, and the fix?",
    options: [
      "input() cannot read digits — use getnumber()",
      "input() ALWAYS returns a string; wrap with int(): age = int(input('age: '))",
      "Add quotes around 18",
      "The prompt needs a colon",
    ],
    answer: 1,
    explain: "'21' is a string; str >= int raises TypeError. int() converts — and % 2 == 0 after int() is the even/odd test. Typing a decimal would raise ValueError.",
  },
  {
    id: "w6",
    type: "output",
    q: "A user types 5, then 3, then done. What is printed?",
    code: 'total = 0\ncommand = ""\nwhile command != "done":\n    command = input("number or done: ")\n    if command != "done":\n        total = total + int(command)\nprint(total)',
    answerText: "8",
    explain: "The sentinel loop: 'done' is the exit word — 5 → total 5; 3 → total 8; 'done' fails the if AND the while → loop ends, prints 8.",
  },
];

/* PRO — return values & functions at scale additions */
const PRO_EXTRA: ExamQuestion[] = [
  {
    id: "c1",
    type: "mcq",
    q: "def greet_user(username): … greet_user('jesse') — which is the PARAMETER and which the ARGUMENT?",
    options: [
      "Both are arguments",
      "username (in the definition) is the parameter; 'jesse' (in the call) is the argument",
      "'jesse' is the parameter; username is the argument",
      "Both are parameters",
    ],
    answer: 1,
    explain: "Parameters are the empty slots in the DEFINITION; arguments are the actual values passed in the CALL. The terms are used interchangeably — but the exam wants this distinction.",
  },
  {
    id: "c2",
    type: "output",
    q: "Write the output.",
    code: 'def get_formatted_name(first, last):\n    full = first + " " + last\n    return full.title()\n\ndeveloper = get_formatted_name("agastya", "gupta")\nprint(developer)',
    answerText: "Agastya Gupta",
    explain: "The function builds and returns the title-cased string; the CALLER stores it in developer and prints. print() inside would display too — but return lets the value be reused.",
  },
  {
    id: "c3",
    type: "mcq",
    q: "def describe_pet(pet_name, animal_type='dog'): — which rule does this follow?",
    options: [
      "Defaults must come FIRST",
      "Parameters with defaults must be listed AFTER all non-defaulted ones",
      "Defaults are illegal",
      "Order never matters",
    ],
    answer: 1,
    explain: "def func(a, b='x') is legal; def func(a='x', b) is a SyntaxError. Defaults go last so positional calls stay unambiguous.",
  },
  {
    id: "c4",
    type: "mcq",
    q: "make_great(names) appends 'the Great' to each entry. To keep the ORIGINAL list intact, call it with…",
    options: ["make_great(names)", "make_great(names[:])", "make_great(names.sort())", "make_great(tuple(names))"],
    answer: 1,
    explain: "names[:] passes a COPY — the function modifies the copy, the original survives. Passing names directly would permanently change it (functions mutate lists they receive).",
  },
  {
    id: "c5",
    type: "output",
    q: "Write the output.",
    code: 'def greet_users(names):\n    for name in names:\n        print("Hello, " + name.title() + "!")\n\ngreet_users(["hana", "eli"])',
    answerText: "Hello, Hana!\nHello, Eli!",
    explain: "The list travels into the function whole; the for loop greets each item. Passing lists lets one function handle any number of users.",
  },
  {
    id: "c6",
    type: "mcq",
    q: "In the 3D-printer design queue, print_models(unprinted, completed) pops designs across. What is true afterwards?",
    options: [
      "unprinted is unchanged — functions copy lists automatically",
      "unprinted is empty — the function modified the ORIGINAL list, permanently",
      "completed is empty",
      "Both lists vanish",
    ],
    answer: 1,
    explain: "Changes to a list inside a function ARE permanent — pop() drained unprinted into completed. That's the design (work done!), and [:] is the escape hatch when you need the original back.",
  },
];

/* PYCORE split — decisions & loops carve-outs from the original bank */
const DECISION_IDS = new Set(["p10", "p15", "p16", "p25", "p26", "p27", "p30"]);
const LOOP_IDS = new Set(["p2", "p11", "p12", "p13", "p14", "p28", "p29"]);

const DECISIONS_CARVED: ExamQuestion[] = PYCORE.filter((q) => DECISION_IDS.has(q.id));
const LOOPS_CARVED: ExamQuestion[] = PYCORE.filter((q) => LOOP_IDS.has(q.id));
const PYCORE_CARVED: ExamQuestion[] = PYCORE.filter((q) => !DECISION_IDS.has(q.id) && !LOOP_IDS.has(q.id));

'''

anchor = "export const EXAM_BANKS: Record<ExamGroup, ExamBank> = {"
assert src.count(anchor) == 1
src = src.replace(anchor, EXTRAS + "\n" + anchor)

# ------------------------------------------------------------------
# 3) EXAM_BANKS + EXAM_GROUPS rewrite (replace to end of file)
# ------------------------------------------------------------------
i = src.find("export const EXAM_BANKS")
src = src[:i] + '''export const EXAM_BANKS: Record<ExamGroup, ExamBank> = {
  foundations: {
    group: "foundations",
    title: "Foundations",
    subtitle: "course map · IPO · data vs information · DIKW · data taxonomy",
    topics: "Course map · Computing · 4 Pillars · Data & DIKW · Data types",
    questions: [...FOUNDATIONS, ...FOUNDATIONS_EXTRA],
  },
  pillars: {
    group: "pillars",
    title: "Pillars & Cases",
    subtitle: "vibe coding · algorithms · hardware · software · the case files",
    topics: "Why code? · Algorithms · Hardware · Software · Python intro · Cases",
    questions: [...MACHINES, ...PILLARS_EXTRA],
  },
  pycore: {
    group: "pycore",
    title: "Python Core",
    subtitle: "variables · strings · numbers · lists · slices · copies · tuples",
    topics: "Basics · Lists · Organize · For loops · Checkpoint · Numeric lists · Copies & tuples",
    questions: [...PYCORE_CARVED, ...PYCORE_EXTRA],
  },
  decisions: {
    group: "decisions",
    title: "Decisions & Data",
    subtitle: "conditional tests · branches · if × lists · dictionaries · nesting",
    topics: "If · Branches · Skills lab · If × lists · Dicts · Dict loops · Nesting · Records lab",
    questions: [...DECISIONS_CARVED, ...DECISIONS_EXTRA],
  },
  loops: {
    group: "loops",
    title: "Loops",
    subtitle: "input() · while loops · flags · break · continue · while with data",
    topics: "Input & While · Loop control",
    questions: [...LOOPS_CARVED, ...LOOPS_EXTRA],
  },
  pro: {
    group: "pro",
    title: "Functions & OOP",
    subtitle: "def · arguments · return · *args · **kwargs · modules · classes",
    topics: "Functions · Args · Return values · Funcs × Lists · Classes",
    questions: [...PRO, ...PRO_EXTRA],
  },
};

export const EXAM_GROUPS: ExamGroup[] = ["foundations", "pillars", "pycore", "decisions", "loops", "pro"];

export const TOTAL_QUESTIONS = EXAM_GROUPS.reduce((n, g) => n + EXAM_BANKS[g].questions.length, 0);
'''

P.write_text(src)
print("questions.ts reorganized:", len(src.splitlines()), "lines")
