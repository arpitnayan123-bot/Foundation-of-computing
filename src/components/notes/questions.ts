/* ============================================================
   TEST MY KNOWLEDGE — question banks, one per chapter group.
   Framed for PEN-PAPER exams: heavy on "write the output",
   trace-the-code, definitions and small write-the-program
   tasks — the formats that actually appear on paper.
   Every answer has been hand-checked by executing the logic.
   ============================================================ */

export type ExamGroup = "foundations" | "machines" | "pycore" | "pro";
export type QuestionType = "mcq" | "output" | "short" | "code";

export interface ExamQuestion {
  id: string;
  type: QuestionType;
  q: string;
  code?: string; // optional code/pseudocode panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact printed result; short → model answer
  solution?: string; // code → model program
  explain?: string;
}

export interface ExamBank {
  group: ExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: ExamQuestion[];
}

/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (why · computing · pillars · data)
   ------------------------------------------------------------ */
const FOUNDATIONS: ExamQuestion[] = [
  {
    id: "f1",
    type: "mcq",
    q: "The IPO model — the core idea of computing — stands for…",
    options: ["Input → Print → Output", "Input → Process → Output", "Internet → Program → Object", "Integrate → Process → Optimise"],
    answer: 1,
    explain: "A computer accepts INPUT (data), PROCESSES it (the CPU follows instructions) and produces OUTPUT (the result). Your phone, an ATM, a washing machine — every device is an IPO machine.",
  },
  {
    id: "f2",
    type: "mcq",
    q: "Your smartwatch records the raw number 72. When the app shows “72 bpm — resting heart rate, healthy zone”, the number has become…",
    options: ["hardware", "information — processed, organised data that carries meaning", "a flowchart", "binary"],
    answer: 1,
    explain: "Raw 72 is DATA. Once it is processed and given context it becomes INFORMATION. Data is the ingredient; information is the cooked dish.",
  },
  {
    id: "f3",
    type: "mcq",
    q: "The DIKW ladder, in the correct order, is…",
    options: [
      "Data → Information → Knowledge → Wisdom",
      "Information → Data → Knowledge → Wisdom",
      "Data → Knowledge → Information → Wisdom",
      "Wisdom → Knowledge → Information → Data",
    ],
    answer: 0,
    explain: "Data (raw) → Information (organised) → Knowledge (patterns applied) → Wisdom (knowing which action is right). Remember it as D-I-K-W.",
  },
  {
    id: "f4",
    type: "mcq",
    q: "The binary number 1101 is which decimal number?",
    options: ["11", "13", "9", "26"],
    answer: 1,
    explain: "Place values double from the right: 8, 4, 2, 1. Add the places holding a 1: 8 + 4 + 0 + 1 = 13.",
  },
  {
    id: "f5",
    type: "output",
    q: "Convert the decimal number 45 into binary. Show the division-by-2 work, then write the final answer.",
    answerText:
      "45 ÷ 2 = 22 remainder 1\n22 ÷ 2 = 11 remainder 0\n11 ÷ 2 =  5 remainder 1\n 5 ÷ 2 =  2 remainder 1\n 2 ÷ 2 =  1 remainder 0\n 1 ÷ 2 =  0 remainder 1\n\nRead the remainders BOTTOM-UP →  45₁₀ = 101101₂",
    explain: "Repeatedly divide by 2 and collect remainders; reading them in reverse gives the binary. Check: 32 + 8 + 4 + 1 = 45 ✓",
  },
  {
    id: "f6",
    type: "short",
    q: "Why do computers work in binary (only 0s and 1s)? Give two reasons.",
    answerText:
      "1. A transistor — the computer's smallest building block — has two perfectly reliable states: ON (high voltage) and OFF (low voltage). Two states map naturally to 1 and 0.\n2. Binary is extremely noise-resistant: a slightly distorted voltage still snaps to the nearest state, so signals rarely get misread.\n(Bonus: with just two symbols, any number, letter, pixel or sound can be encoded as patterns of bits.)",
    explain: "Two clear states = cheap to build, fast, and almost impossible to misread. That reliability is why binary won.",
  },
  {
    id: "f7",
    type: "mcq",
    q: "Which sequence of storage units is correct, smallest to largest?",
    options: [
      "1 Byte → 8 Bits → 1 KB → 1 MB → 1 GB",
      "8 Bits → 1 Byte → 1 KB → 1 MB → 1 GB",
      "1 Bit → 1 Byte → 1 MB → 1 KB → 1 GB",
      "8 Bits → 1 KB → 1 Byte → 1 MB → 1 GB",
    ],
    answer: 1,
    explain: "8 bits = 1 byte; 1024 B = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB.",
  },
  {
    id: "f8",
    type: "mcq",
    q: "Google Maps shows your route as a simple line on a simplified map — it hides lane widths, buildings and traffic-light timings. This is an example of which pillar?",
    options: ["Decomposition", "Abstraction — hiding low-level detail to show what matters", "Debugging", "Binary encoding"],
    answer: 1,
    explain: "Abstraction = keeping the essential, hiding the irrelevant. A metro map, a phone icon, a function — all abstractions.",
  },
  {
    id: "f9",
    type: "short",
    q: "State the difference between DATA and INFORMATION, with one example of each.",
    answerText:
      "DATA = raw facts and figures with no context on their own.  Example: 98.6, 37.5, 72.\nINFORMATION = data that has been processed / organised so it carries meaning.  Example: “The patient's temperature readings (98.6°F, 37.5°C) are both normal.”\nData is the raw ingredient; information is the processed, meaningful result.",
    explain: "Examiners want the word pair: raw vs processed/organised + meaning — and an example.",
  },
  {
    id: "f10",
    type: "mcq",
    q: "Which of these is UNSTRUCTURED data?",
    options: ["A marks table with Name / Roll No / Marks columns", "A photograph taken on your phone", "A spreadsheet of monthly sales", "A railway timetable"],
    answer: 1,
    explain: "A photo has no fixed rows-and-columns schema — it is unstructured (like video and voice). Tables and spreadsheets are structured.",
  },
  {
    id: "f11",
    type: "mcq",
    q: "“Eye colour (brown / green / hazel)” is which type of data?",
    options: ["Quantitative — discrete", "Quantitative — continuous", "Qualitative — categorical", "Binary — machine code"],
    answer: 2,
    explain: "It describes a QUALITY/ category, not a measurable amount → qualitative (categorical).",
  },
  {
    id: "f12",
    type: "output",
    q: "Trace this algorithm and write BOTH lines of output.",
    code: "STEP 1: total ← 0\nSTEP 2: FOR each mark IN [12, 18, 30]\nSTEP 3:     total ← total + mark\nSTEP 4: PRINT total\nSTEP 5: PRINT total / 3",
    answerText: "60\n20.0",
    explain: "total accumulates 12 → 30 → 60. Then it prints 60, and 60 ÷ 3. In Python, / ALWAYS gives a float → 20.0 (a favourite trick in pen-paper questions!).",
  },
  {
    id: "f13",
    type: "short",
    q: "One of the Four Pillars is DECOMPOSITION. Define it and give one example.",
    answerText:
      "Decomposition = breaking a big problem into smaller, independent sub-problems that are easier to solve.\nExample: a food-delivery app splits into login, restaurant listing, cart, payment and order tracking — each part is built and tested separately, then combined.",
    explain: "Definition + example = full marks. Mention 'smaller, manageable parts'.",
  },
  {
    id: "f14",
    type: "mcq",
    q: "Which of these is NOT one of the Four Pillars of computational thinking?",
    options: ["Pattern recognition", "Abstraction", "Algorithm design", "Debugging"],
    answer: 3,
    explain: "The four pillars are: Decomposition, Pattern recognition, Abstraction and Algorithm design. Debugging is a skill you use while programming, not a pillar.",
  },
  {
    id: "f15",
    type: "mcq",
    q: "Which of these is CONTINUOUS quantitative data?",
    options: ["Number of students in a class", "Height of a plant measured every day", "Shoe sizes", "Number of bugs fixed this week"],
    answer: 1,
    explain: "Height can take ANY value in a range (21.3 cm, 21.37 cm…) — measured, not counted → continuous. Counts come in whole steps → discrete.",
  },
];

/* ------------------------------------------------------------
   GROUP 2 — MACHINES  (algorithms · hardware · software)
   ------------------------------------------------------------ */
const MACHINES: ExamQuestion[] = [
  {
    id: "m1",
    type: "mcq",
    q: "Which one is NOT a property of a good algorithm?",
    options: ["Finiteness — it must end", "Definiteness — every step is unambiguous", "Ambiguity — steps can be read two ways", "Effectiveness — each step is basic enough to actually perform"],
    answer: 2,
    explain: "An algorithm must be the OPPOSITE of ambiguous: each step has exactly one meaning. Finiteness, definiteness, input, output and effectiveness are the classic properties.",
  },
  {
    id: "m2",
    type: "mcq",
    q: "In a flowchart, the DIAMOND symbol represents…",
    options: ["Start / End", "A process step", "A decision (Yes / No branch)", "Input / Output"],
    answer: 2,
    explain: "Oval = start/end · parallelogram = input/output · rectangle = process · diamond = decision. Draw them correctly — symbols carry marks!",
  },
  {
    id: "m3",
    type: "mcq",
    q: "In a flowchart, the PARALLELOGRAM represents…",
    options: ["Input / Output", "A decision", "Start / End", "A connector"],
    answer: 0,
    explain: "Parallelogram = INPUT or OUTPUT (e.g., INPUT marks, PRINT total).",
  },
  {
    id: "m4",
    type: "output",
    q: "Trace the algorithm and write the output.",
    code: "total ← 0\nFOR i FROM 1 TO 5:\n    total ← total + i\nPRINT total",
    answerText: "15",
    explain: "1 + 2 + 3 + 4 + 5 = 15. Accumulator loops like this are the #1 paper question.",
  },
  {
    id: "m5",
    type: "code",
    q: "Write a pseudocode / flowchart logic that inputs three numbers and prints the LARGEST of them.",
    solution: "INPUT a, b, c\nlargest ← a\nIF b > largest:\n    largest ← b\nIF c > largest:\n    largest ← c\nPRINT largest",
    answerText: "Example run — input 7, 19, 12 → prints 19",
    explain: "Keep a running maximum: assume the first value is largest, then challenge it with each remaining value. This pattern extends to N numbers.",
  },
  {
    id: "m6",
    type: "mcq",
    q: "Which part of the CPU performs arithmetic (+, −) and logic (AND, OR, comparisons)?",
    options: ["Control Unit", "ALU — the Arithmetic Logic Unit", "Registers", "RAM"],
    answer: 1,
    explain: "ALU does the maths and comparisons; the Control Unit directs traffic; registers are tiny ultra-fast storage inside the CPU.",
  },
  {
    id: "m7",
    type: "mcq",
    q: "The correct order of the machine (instruction) cycle is…",
    options: ["Decode → Fetch → Execute", "Fetch → Decode → Execute", "Execute → Fetch → Decode", "Fetch → Execute → Decode"],
    answer: 1,
    explain: "FETCH the instruction from memory → DECODE what it means (Control Unit) → EXECUTE it (ALU). Billions of times per second.",
  },
  {
    id: "m8",
    type: "mcq",
    q: "Why is RAM called VOLATILE memory?",
    options: ["It is very slow", "Its contents vanish when the power is switched off", "It cannot be read twice", "It stores only pictures"],
    answer: 1,
    explain: "RAM holds the programs you are running right now — cut the power and it's empty. That's why you save your file to disk (non-volatile).",
  },
  {
    id: "m9",
    type: "mcq",
    q: "Which of these is SECONDARY storage?",
    options: ["RAM", "CPU cache", "SSD / hard disk", "Registers"],
    answer: 2,
    explain: "Secondary storage keeps data when power is off — SSD/HDD, pen drives, CDs. RAM, cache and registers are primary (volatile) memory.",
  },
  {
    id: "m10",
    type: "short",
    q: "State the difference between a COMPILER and an INTERPRETER.",
    answerText:
      "COMPILER — translates the ENTIRE program into machine code BEFORE it runs; after that the program runs fast; all errors are reported together after compiling.  (e.g., C)\nINTERPRETER — translates and runs the code LINE BY LINE; stops at the first error it meets, which makes it easier to test and debug.  (e.g., Python)",
    explain: "Key words: whole-at-once vs line-by-line; errors together vs stops at first error. Give one language example of each.",
  },
  {
    id: "m11",
    type: "mcq",
    q: "MACHINE language is written in…",
    options: ["English keywords like PRINT", "0s and 1s (binary) that the CPU executes directly", "Flowchart symbols", "Python"],
    answer: 1,
    explain: "Machine language = raw binary the CPU understands natively. Assembly adds short mnemonics; high-level languages (Python) read like English and must be translated down.",
  },
  {
    id: "m12",
    type: "mcq",
    q: "Windows, Linux and macOS are examples of…",
    options: ["Application software", "System software — the Operating System", "Programming languages", "Hardware"],
    answer: 1,
    explain: "The OS is system software: it manages the hardware and lets application software run. Apps like Chrome or Word sit ON TOP of it.",
  },
  {
    id: "m13",
    type: "short",
    q: "Name any THREE functions of an operating system.",
    answerText:
      "Any three of:\n• Memory management — giving programs their RAM\n• Process / CPU scheduling — deciding which program runs when\n• File management — folders, saving, opening files\n• Device management — drivers for keyboard, printer, etc.\n• User interface — GUI / CLI\n• Security — passwords, permissions",
    explain: "Pick the three you can explain in one line each — definition + micro-example.",
  },
  {
    id: "m14",
    type: "mcq",
    q: "Python is called a HIGH-LEVEL language because…",
    options: ["It runs only on supercomputers", "It reads like English and hides hardware details from the programmer", "It is compiled to assembly", "It cannot do arithmetic"],
    answer: 1,
    explain: "High-level = close to human thinking, far from the machine; portable and easy to read. The translation to binary is handled for you.",
  },
  {
    id: "m15",
    type: "output",
    q: "A flowchart inputs MARKS, then decides: IF marks ≥ 40 → print PASS, otherwise → print FAIL. What is the output if the input is 75?",
    answerText: "PASS",
    explain: "75 ≥ 40 is true, so control follows the YES branch of the decision diamond. Trace both branches before answering — examiners love the boundary case marks = 40.",
  },
];

/* ------------------------------------------------------------
   GROUP 3 — PYTHON CORE  (python · basics · lists · if · dicts · while)
   ------------------------------------------------------------ */
const PYCORE: ExamQuestion[] = [
  {
    id: "p1",
    type: "output",
    q: "Write the output of this program (one line, four values).",
    code: 'x = 7\ny = 2\nprint(x * y, x ** y, x // y, x % y)',
    answerText: "14 49 3 1",
    explain: "* multiply → 14 · ** power → 49 · // floor division → 3 (7 ÷ 2 = 3.5, floored) · % remainder → 1. The // and % pair is asked CONSTANTLY on paper.",
  },
  {
    id: "p2",
    type: "mcq",
    q: "What data type does input() ALWAYS return in Python?",
    options: ["int", "str — even if the user types a number", "float", "bool"],
    answer: 1,
    explain: "input() returns a string. To do maths you must convert: age = int(input(\"age: \")). Forgetting this cast is the classic paper trap: input 5 + 5 gives \"55\", not 10.",
  },
  {
    id: "p3",
    type: "output",
    q: "Write the output (all three values on one line).",
    code: 'name = "python"\nprint(name[0], name[-1], name[2:5])',
    answerText: "p n tho",
    explain: "Index 0 → first letter 'p' · index −1 → last letter 'n' · slice [2:5] → positions 2,3,4 → 'tho' (stop index 5 is EXCLUDED).",
  },
  {
    id: "p4",
    type: "output",
    q: "Write all three lines of output exactly.",
    code: 'print("3" + "4")\nprint(3 + 4)\nprint("ha" * 3)',
    answerText: "34\n7\nhahaha",
    explain: "\"3\" + \"4\" CONCATENATES strings → \"34\".  3 + 4 adds numbers → 7.  string * int REPEATS the string. Mixing types on purpose is a favourite exam trick.",
  },
  {
    id: "p5",
    type: "mcq",
    q: "Which is a VALID Python variable name?",
    options: ["2marks", "my-name", "student_name", "class"],
    answer: 2,
    explain: "Names can't start with a digit (2marks ✗), can't contain a hyphen (my-name ✗ — Python reads it as minus), and can't be a reserved keyword (class ✗). Letters, digits and _ are allowed; don't start with a digit.",
  },
  {
    id: "p6",
    type: "output",
    q: "Write the output exactly as Python would print it.",
    code: 'colors = ["red", "green", "blue", "yellow"]\nprint(colors[1:3])',
    answerText: "['green', 'blue']",
    explain: "Slice [1:3] starts at index 1 and stops BEFORE index 3 → 'green' and 'blue'. Print a list and Python shows it with quotes and brackets.",
  },
  {
    id: "p7",
    type: "output",
    q: "Write the output of this list program.",
    code: "nums = [1, 2, 3]\nnums.append(4)\nnums.insert(0, 0)\nprint(nums)",
    answerText: "[0, 1, 2, 3, 4]",
    explain: "append(4) adds at the END → [1,2,3,4]; insert(0, 0) pushes 0 in at INDEX 0 → [0,1,2,3,4]. Order of operations matters — do them one line at a time on paper.",
  },
  {
    id: "p8",
    type: "mcq",
    q: "What is the difference between list.sort() and sorted(list)?",
    options: [
      "They are identical",
      "sort() rearranges the ORIGINAL list and returns None; sorted() leaves the original alone and returns a NEW sorted list",
      "sorted() only works on numbers",
      "sort() returns a new list",
    ],
    answer: 1,
    explain: "x = nums.sort() gives you None (a classic trap!); x = sorted(nums) gives you the new sorted copy. sort() mutates, sorted() returns.",
  },
  {
    id: "p9",
    type: "output",
    q: "Write the output of this program.",
    code: "scores = [10, 20, 30]\nscores[1] = 99\nprint(len(scores), scores)",
    answerText: "3 [10, 99, 30]",
    explain: "Assigning to scores[1] REPLACES the value at index 1 (20 → 99); the length stays 3. Lists are mutable — paper exams test this constantly.",
  },
  {
    id: "p10",
    type: "output",
    q: "Write BOTH lines of output.",
    code: 'd = {"name": "Aman", "age": 19}\nprint(d["age"] + 1)\nprint(d.get("city"))',
    answerText: "20\nNone",
    explain: "d[\"age\"] finds the value 19 → +1 prints 20. d.get(\"city\") returns None for a MISSING key instead of crashing — while d[\"city\"] would raise KeyError.",
  },
  {
    id: "p11",
    type: "code",
    q: 'Write a program that counts how many vowels are in word = "programming" and prints the count.',
    solution: 'word = "programming"\ncount = 0\nfor ch in word:\n    if ch in "aeiou":\n        count = count + 1\nprint(count)',
    answerText: "Output: 3   (o, a, i)",
    explain: "Loop over each character; `ch in \"aeiou\"` is the membership test; add 1 when it's True. Same skeleton counts digits, spaces or any character set.",
  },
  {
    id: "p12",
    type: "output",
    q: "Write the output on one line, exactly as printed.",
    code: 'for i in range(1, 6, 2):\n    print(i, end=" ")',
    answerText: "1 3 5",
    explain: "range(1, 6, 2) → start 1, stop 6 (excluded), step 2 → 1, 3, 5. end=\" \" replaces the usual newline, so everything lands on one line with spaces.",
  },
  {
    id: "p13",
    type: "output",
    q: "Write all lines of output, in order.",
    code: "n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1",
    answerText: "3\n2\n1",
    explain: "Runs while n > 0: prints 3, 2, 1. When n becomes 0 the condition fails and the loop ends. If you forget n = n − 1 the loop never stops — infinite loop!",
  },
  {
    id: "p14",
    type: "mcq",
    q: "Inside a loop, what does `continue` do?",
    options: ["Exits the loop completely", "Skips the rest of the CURRENT iteration and jumps to the next one", "Restarts the program", "Pauses the loop forever"],
    answer: 1,
    explain: "break = leave the loop. continue = skip to the next round. Mixing these two up is one of the most common paper mistakes.",
  },
  {
    id: "p15",
    type: "output",
    q: "Write the output.",
    code: 'x = 12\nif x % 2 == 0 and x % 3 == 0:\n    print("six")\nelse:\n    print("no")',
    answerText: "six",
    explain: "12 % 2 == 0 → True; 12 % 3 == 0 → True; True and True → the if-branch runs. Swap x to 9 and the answer changes to no (9 % 2 is 1).",
  },
  {
    id: "p16",
    type: "code",
    q: 'Write a program: marks = 78 is given. Print "A" if marks ≥ 90, "B" if ≥ 75, "C" if ≥ 60, otherwise "D". State the output for 78.',
    solution: 'marks = 78\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 60:\n    print("C")\nelse:\n    print("D")',
    answerText: "Output: B",
    explain: "Conditions are tested TOP-DOWN and the first True wins: 78 fails 90, passes 75 → B. Writing the branches in the wrong order breaks the logic — mention that ordering matters!",
  },
  {
    id: "p17",
    type: "mcq",
    q: 'colors = ["red", "green", "blue"] — what happens when Python runs print(colors[5])?',
    options: ["Prints an empty string", "IndexError — list index out of range", "Prints None", "Prints blue"],
    answer: 1,
    explain: "Valid indexes are 0–2 (or −3 to −1). Index 5 doesn't exist → IndexError: list index out of range.",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — FUNCTIONS & OOP  (functions · args · funcs×lists · classes)
   ------------------------------------------------------------ */
const PRO: ExamQuestion[] = [
  {
    id: "r1",
    type: "mcq",
    q: "Which keyword DEFINES a function in Python?",
    options: ["func", "define", "def", "function"],
    answer: 2,
    explain: "def name(parameters):  …  — then CALL it with name(arguments).",
  },
  {
    id: "r2",
    type: "output",
    q: "Write the output (both values on one line).",
    code: "def f(a, b=2):\n    return a * b\n\nprint(f(3), f(3, 4))",
    answerText: "6 12",
    explain: "f(3) → b uses its DEFAULT 2 → 3×2 = 6. f(3, 4) → the given 4 overrides the default → 12. Default parameters: used when the caller stays silent.",
  },
  {
    id: "r3",
    type: "mcq",
    q: "What does `return` do inside a function?",
    options: ["Prints a value on the screen", "Sends a value back to the caller and ends the function", "Loops the function forever", "Deletes the function"],
    answer: 1,
    explain: "print just DISPLAYS; return HANDS THE VALUE BACK so the caller can store it: result = f(3). A function with no return gives None.",
  },
  {
    id: "r4",
    type: "output",
    q: "Write ALL lines of output.",
    code: 'def greet(*names):\n    for n in names:\n        print("Hi", n)\n\ngreet("Aman", "Riya")',
    answerText: "Hi Aman\nHi Riya",
    explain: "*names packs the extra positional arguments into a TUPLE ('Aman', 'Riya'); the for-loop greets each one. Say 'tuple' on paper — naming the type earns the mark.",
  },
  {
    id: "r5",
    type: "mcq",
    q: "Inside a function, **kwargs collects extra KEYWORD arguments into a…",
    options: ["tuple", "list", "dictionary", "string"],
    answer: 2,
    explain: "*args → tuple of positionals · **kwargs → dict of keyword pairs. {'key': value} — that's why you can loop .items() over it.",
  },
  {
    id: "r6",
    type: "mcq",
    q: "Which function signature is VALID in Python?",
    options: ["def f(a=1, b):", "def f(a, b=1):", "def f(b=1, a):", "Both A and B"],
    answer: 1,
    explain: "Default parameters must come AFTER non-default ones. In def f(a=1, b): a call like f(5) would be ambiguous — Python refuses to guess.",
  },
  {
    id: "r7",
    type: "output",
    q: "Write the output exactly.",
    code: 'def build(first, last, **extra):\n    d = {"first": first, "last": last}\n    d.update(extra)\n    return d\n\nprint(build("Aman", "Sharma", age=19))',
    answerText: "{'first': 'Aman', 'last': 'Sharma', 'age': 19}",
    explain: "The two positionals fill first/last; the leftover keyword age=19 lands in **extra as {'age': 19} and is merged with update(). Full parameter-order questions are built from this idea.",
  },
  {
    id: "r8",
    type: "output",
    q: "What EXACTLY happens when this program runs? Write the error line.",
    code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet("hamster")',
    answerText: 'TypeError: describe_pet() missing 1 required positional argument: \'name\'',
    explain: "Two parameters, one argument → Python raises TypeError and TELLS YOU which one is missing. Reading tracebacks (function name + missing argument) is a guaranteed exam question.",
  },
  {
    id: "r9",
    type: "code",
    q: "Write a function area(width, height=10) that RETURNS width × height. What does print(area(5)) output?",
    solution: "def area(width, height=10):\n    return width * height\n\nprint(area(5))\nprint(area(5, 2))",
    answerText: "Output: 50  (and area(5, 2) → 10)",
    explain: "area(5) keeps the default height 10 → 50. The second call overrides it → 10. One function, two behaviours — that's the power of defaults.",
  },
  {
    id: "r10",
    type: "mcq",
    q: "The `__init__` method of a class…",
    options: [
      "Must be called manually after creating an object",
      "Runs automatically every time a new object is created, to set up its attributes",
      "Only runs when the program exits",
      "Is optional decoration with no effect",
    ],
    answer: 1,
    explain: "__init__ is the initialiser: Dog(\"Rex\") → Python creates the instance and calls __init__ with it, so self.name = \"Rex\" happens immediately.",
  },
  {
    id: "r11",
    type: "output",
    q: "Write the output of this class program.",
    code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return self.name + " says woof"\n\nd = Dog("Rex")\nprint(d.bark())',
    answerText: "Rex says woof",
    explain: "__init__ stores \"Rex\" ON the instance (self.name). bark() reads it back through self. self = the object the method was called on.",
  },
  {
    id: "r12",
    type: "mcq",
    q: "Inside a class method, `self` refers to…",
    options: ["The class itself", "The specific INSTANCE the method was called on", "The parent class", "A global variable"],
    answer: 1,
    explain: "d.bark() → self IS d. Two Dogs each carry their own self.name — that's why instances stay independent.",
  },
  {
    id: "r13",
    type: "output",
    q: "Write the output (both values on one line).",
    code: "class Car:\n    def wheels(self):\n        return 4\n\nclass Bike(Car):\n    def wheels(self):   # same name as the parent's method\n        return 2\n\nprint(Car().wheels(), Bike().wheels())",
    answerText: "4 2",
    explain: "Bike INHERITS from Car but OVERRIDES wheels(); the child's version wins for Bike objects. Car objects keep the parent's 4.",
  },
  {
    id: "r14",
    type: "mcq",
    q: "Inside a child class, `super().__init__(…)` is used to…",
    options: [
      "Delete the parent class",
      "Call the PARENT'S version of __init__ so the inherited setup still runs",
      "Create a second object",
      "Skip initialisation entirely",
    ],
    answer: 1,
    explain: "super() = 'the parent class'. Child adds its own attributes (battery_size…) while super().__init__ handles the parent's (make, model…) — no copy-paste.",
  },
  {
    id: "r15",
    type: "code",
    q: 'Write a class Book with __init__(self, title, pages) that stores both values, plus a method describe() that returns the text "TITLE — PAGES pages". Show one object being created and describe() being printed.',
    solution: 'class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def describe(self):\n        return f"{self.title} — {self.pages} pages"\n\nb = Book("Python Basics", 250)\nprint(b.describe())',
    answerText: 'Output: Python Basics — 250 pages',
    explain: "Blueprint → __init__ stores attributes on self → methods use self.xxx → instantiate with Book(title, pages). This 8-line skeleton answers most 'write a class' paper questions.",
  },
  {
    id: "r16",
    type: "mcq",
    q: "`import pizza` vs `from pizza import make_pizza` — what changes at call time?",
    options: [
      "Nothing, they are identical",
      "With `import pizza` you call pizza.make_pizza(); with `from pizza import make_pizza` you call make_pizza() directly",
      "`from … import` is always an error",
      "`import pizza` copies the whole file into your program",
    ],
    answer: 1,
    explain: "import pizza brings the MODULE (prefix with pizza.); from pizza import make_pizza brings the NAME itself (call it bare). Importing * is discouraged — it can silently overwrite names.",
  },
];

/* ------------------------------------------------------------ */

export const EXAM_BANKS: Record<ExamGroup, ExamBank> = {
  foundations: {
    group: "foundations",
    title: "Foundations",
    subtitle: "IPO · data vs information · DIKW · the Four Pillars · binary",
    topics: "Why code? · Computing · 4 Pillars · Data",
    questions: FOUNDATIONS,
  },
  machines: {
    group: "machines",
    title: "Machines",
    subtitle: "algorithms · flowcharts · CPU · memory · compilers · software",
    topics: "Algorithms · Hardware · Software",
    questions: MACHINES,
  },
  pycore: {
    group: "pycore",
    title: "Python Core",
    subtitle: "variables · strings · lists · if/else · dictionaries · while",
    topics: "Python · Basics · Lists · If/Else · Dicts · While",
    questions: PYCORE,
  },
  pro: {
    group: "pro",
    title: "Functions & OOP",
    subtitle: "def · return · *args · **kwargs · classes · inheritance",
    topics: "Functions · Args & Return · Funcs × Lists · Classes",
    questions: PRO,
  },
};

export const EXAM_GROUPS: ExamGroup[] = ["foundations", "machines", "pycore", "pro"];

export const TOTAL_QUESTIONS = EXAM_GROUPS.reduce((n, g) => n + EXAM_BANKS[g].questions.length, 0);
