(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/notes/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   TEST MY KNOWLEDGE — question banks, one per chapter group.
   Framed for PEN-PAPER exams: heavy on "write the output",
   trace-the-code, definitions and small write-the-program
   tasks — the formats that actually appear on paper.
   Every answer has been hand-checked by executing the logic.
   ============================================================ */ __turbopack_context__.s([
    "EXAM_BANKS",
    ()=>EXAM_BANKS,
    "EXAM_GROUPS",
    ()=>EXAM_GROUPS,
    "TOTAL_QUESTIONS",
    ()=>TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — FOUNDATIONS  (why · computing · pillars · data)
   ------------------------------------------------------------ */ const FOUNDATIONS = [
    {
        id: "f1",
        type: "mcq",
        q: "The IPO model — the core idea of computing — stands for…",
        options: [
            "Input → Print → Output",
            "Input → Process → Output",
            "Internet → Program → Object",
            "Integrate → Process → Optimise"
        ],
        answer: 1,
        explain: "A computer accepts INPUT (data), PROCESSES it (the CPU follows instructions) and produces OUTPUT (the result). Your phone, an ATM, a washing machine — every device is an IPO machine."
    },
    {
        id: "f2",
        type: "mcq",
        q: "Your smartwatch records the raw number 72. When the app shows “72 bpm — resting heart rate, healthy zone”, the number has become…",
        options: [
            "hardware",
            "information — processed, organised data that carries meaning",
            "a flowchart",
            "binary"
        ],
        answer: 1,
        explain: "Raw 72 is DATA. Once it is processed and given context it becomes INFORMATION. Data is the ingredient; information is the cooked dish."
    },
    {
        id: "f3",
        type: "mcq",
        q: "The DIKW ladder, in the correct order, is…",
        options: [
            "Data → Information → Knowledge → Wisdom",
            "Information → Data → Knowledge → Wisdom",
            "Data → Knowledge → Information → Wisdom",
            "Wisdom → Knowledge → Information → Data"
        ],
        answer: 0,
        explain: "Data (raw) → Information (organised) → Knowledge (patterns applied) → Wisdom (knowing which action is right). Remember it as D-I-K-W."
    },
    {
        id: "f4",
        type: "mcq",
        q: "The binary number 1101 is which decimal number?",
        options: [
            "11",
            "13",
            "9",
            "26"
        ],
        answer: 1,
        explain: "Place values double from the right: 8, 4, 2, 1. Add the places holding a 1: 8 + 4 + 0 + 1 = 13."
    },
    {
        id: "f5",
        type: "output",
        q: "Convert the decimal number 45 into binary. Show the division-by-2 work, then write the final answer.",
        answerText: "45 ÷ 2 = 22 remainder 1\n22 ÷ 2 = 11 remainder 0\n11 ÷ 2 =  5 remainder 1\n 5 ÷ 2 =  2 remainder 1\n 2 ÷ 2 =  1 remainder 0\n 1 ÷ 2 =  0 remainder 1\n\nRead the remainders BOTTOM-UP →  45₁₀ = 101101₂",
        explain: "Repeatedly divide by 2 and collect remainders; reading them in reverse gives the binary. Check: 32 + 8 + 4 + 1 = 45 ✓"
    },
    {
        id: "f6",
        type: "short",
        q: "Why do computers work in binary (only 0s and 1s)? Give two reasons.",
        answerText: "1. A transistor — the computer's smallest building block — has two perfectly reliable states: ON (high voltage) and OFF (low voltage). Two states map naturally to 1 and 0.\n2. Binary is extremely noise-resistant: a slightly distorted voltage still snaps to the nearest state, so signals rarely get misread.\n(Bonus: with just two symbols, any number, letter, pixel or sound can be encoded as patterns of bits.)",
        explain: "Two clear states = cheap to build, fast, and almost impossible to misread. That reliability is why binary won."
    },
    {
        id: "f7",
        type: "mcq",
        q: "Which sequence of storage units is correct, smallest to largest?",
        options: [
            "1 Byte → 8 Bits → 1 KB → 1 MB → 1 GB",
            "8 Bits → 1 Byte → 1 KB → 1 MB → 1 GB",
            "1 Bit → 1 Byte → 1 MB → 1 KB → 1 GB",
            "8 Bits → 1 KB → 1 Byte → 1 MB → 1 GB"
        ],
        answer: 1,
        explain: "8 bits = 1 byte; 1024 B = 1 KB; 1024 KB = 1 MB; 1024 MB = 1 GB."
    },
    {
        id: "f8",
        type: "mcq",
        q: "Google Maps shows your route as a simple line on a simplified map — it hides lane widths, buildings and traffic-light timings. This is an example of which pillar?",
        options: [
            "Decomposition",
            "Abstraction — hiding low-level detail to show what matters",
            "Debugging",
            "Binary encoding"
        ],
        answer: 1,
        explain: "Abstraction = keeping the essential, hiding the irrelevant. A metro map, a phone icon, a function — all abstractions."
    },
    {
        id: "f9",
        type: "short",
        q: "State the difference between DATA and INFORMATION, with one example of each.",
        answerText: "DATA = raw facts and figures with no context on their own.  Example: 98.6, 37.5, 72.\nINFORMATION = data that has been processed / organised so it carries meaning.  Example: “The patient's temperature readings (98.6°F, 37.5°C) are both normal.”\nData is the raw ingredient; information is the processed, meaningful result.",
        explain: "Examiners want the word pair: raw vs processed/organised + meaning — and an example."
    },
    {
        id: "f10",
        type: "mcq",
        q: "Which of these is UNSTRUCTURED data?",
        options: [
            "A marks table with Name / Roll No / Marks columns",
            "A photograph taken on your phone",
            "A spreadsheet of monthly sales",
            "A railway timetable"
        ],
        answer: 1,
        explain: "A photo has no fixed rows-and-columns schema — it is unstructured (like video and voice). Tables and spreadsheets are structured."
    },
    {
        id: "f11",
        type: "mcq",
        q: "“Eye colour (brown / green / hazel)” is which type of data?",
        options: [
            "Quantitative — discrete",
            "Quantitative — continuous",
            "Qualitative — categorical",
            "Binary — machine code"
        ],
        answer: 2,
        explain: "It describes a QUALITY/ category, not a measurable amount → qualitative (categorical)."
    },
    {
        id: "f12",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output.",
        code: "STEP 1: total ← 0\nSTEP 2: FOR each mark IN [12, 18, 30]\nSTEP 3:     total ← total + mark\nSTEP 4: PRINT total\nSTEP 5: PRINT total / 3",
        answerText: "60\n20.0",
        explain: "total accumulates 12 → 30 → 60. Then it prints 60, and 60 ÷ 3. In Python, / ALWAYS gives a float → 20.0 (a favourite trick in pen-paper questions!)."
    },
    {
        id: "f13",
        type: "short",
        q: "One of the Four Pillars is DECOMPOSITION. Define it and give one example.",
        answerText: "Decomposition = breaking a big problem into smaller, independent sub-problems that are easier to solve.\nExample: a food-delivery app splits into login, restaurant listing, cart, payment and order tracking — each part is built and tested separately, then combined.",
        explain: "Definition + example = full marks. Mention 'smaller, manageable parts'."
    },
    {
        id: "f14",
        type: "mcq",
        q: "Which of these is NOT one of the Four Pillars of computational thinking?",
        options: [
            "Pattern recognition",
            "Abstraction",
            "Algorithm design",
            "Debugging"
        ],
        answer: 3,
        explain: "The four pillars are: Decomposition, Pattern recognition, Abstraction and Algorithm design. Debugging is a skill you use while programming, not a pillar."
    },
    {
        id: "f15",
        type: "mcq",
        q: "Which of these is CONTINUOUS quantitative data?",
        options: [
            "Number of students in a class",
            "Height of a plant measured every day",
            "Shoe sizes",
            "Number of bugs fixed this week"
        ],
        answer: 1,
        explain: "Height can take ANY value in a range (21.3 cm, 21.37 cm…) — measured, not counted → continuous. Counts come in whole steps → discrete."
    },
    {
        id: "f16",
        type: "mcq",
        q: "A PROGRAM is best described as…",
        options: [
            "an electronic chip inside the CPU",
            "a set of step-by-step instructions that tells the computer exactly what to do",
            "any folder full of files on the desktop",
            "the electricity that powers the machine"
        ],
        answer: 1,
        explain: "A program is just INSTRUCTIONS written in a language the computer can translate and follow. Programming = writing those instructions so the machine can execute them without guessing."
    },
    {
        id: "f17",
        type: "mcq",
        q: "Renaming 500 files by hand takes hours. You write a 6-line script that finishes the job in one second. This is the biggest everyday reason to learn coding — it is called…",
        options: [
            "decoration",
            "automation — letting the computer repeat boring work perfectly",
            "encryption",
            "simulation"
        ],
        answer: 1,
        explain: "Computers never get bored and never typo. Automating a repetitive task is the first superpower coding gives you — write the steps ONCE, run them a thousand times."
    },
    {
        id: "f18",
        type: "mcq",
        q: "At an ATM you insert your card, the machine checks your PIN against the bank's records and then dispenses cash. In IPO terms, CHECKING the PIN is the…",
        options: [
            "Input",
            "Process",
            "Output",
            "Storage"
        ],
        answer: 1,
        explain: "Input = card + PIN entered. Process = the checking/decision (the actual work). Output = cash + receipt. Spotting which stage a sentence describes is a standard 1-mark question."
    },
    {
        id: "f19",
        type: "mcq",
        q: "A washing machine takes in dirty clothes, detergent and water, runs the wash cycle, and gives out clean clothes. Which IPO mapping is CORRECT?",
        options: [
            "Input: clean clothes · Process: wash cycle · Output: dirty clothes",
            "Input: dirty clothes, detergent, water · Process: wash cycle · Output: clean clothes",
            "Input: wash cycle · Process: dirty clothes · Output: water",
            "Input: electricity only · Process: none · Output: clean clothes"
        ],
        answer: 1,
        explain: "Input = what goes IN (raw materials), process = what the machine DOES, output = the result that comes OUT. Every device — ATM, oven, phone — can be mapped like this."
    },
    {
        id: "f20",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output, in order.",
        code: "STEP 1: FOR each n IN [3, 8, 5, 10]\nSTEP 2:     IF n is EVEN:\nSTEP 3:         PRINT n × 2",
        answerText: "16\n20",
        explain: "3 → odd, skipped. 8 → even → 8 × 2 = 16. 5 → odd, skipped. 10 → even → 10 × 2 = 20. Tracing means playing computer: one step at a time, no shortcuts."
    },
    {
        id: "f21",
        type: "mcq",
        q: "Look at the sequence 2, 4, 8, 16, … — a computer spotting the rule 'each number DOUBLES' and predicting the next term (32) is using which pillar?",
        options: [
            "Decomposition",
            "Pattern recognition",
            "Generalisation by abstraction",
            "Debugging"
        ],
        answer: 1,
        explain: "Pattern recognition = spotting similarities or repeating rules (doubling here) and using them to predict or simplify. Finding the rule is the pillar; 32 is just the payoff."
    },
    {
        id: "f22",
        type: "short",
        q: "State the difference between ABSTRACTION and DECOMPOSITION — one line each, plus one example of each.",
        answerText: "DECOMPOSITION = breaking a big problem DOWN into smaller sub-problems.  Example: building a food app → login + cart + payment + tracking.\nABSTRACTION = HIDING low-level detail and keeping only what matters.  Example: the 'call' button on a phone hides radio, SIM and network layers behind one tap.\nDecomposition splits the problem into parts; abstraction simplifies each part by hiding its internals.",
        explain: "The examiner wants the verb pair: break DOWN vs hide detail. If your two definitions use those verbs, the mark is yours."
    },
    {
        id: "f23",
        type: "mcq",
        q: "Which of these is an ALGORITHM (and which are not)?",
        options: [
            "“Cook the rice until it tastes right.”",
            "“Add some sugar, maybe a lot, depending on mood.”",
            "“Boil 1 cup water → add rice → stir for exactly 10 min → drain → serve.” — exact, ordered, finishable steps",
            "“Rice is tasty.” — an opinion about the outcome"
        ],
        answer: 2,
        explain: "An algorithm is finite, definite and effective: every step has ONE meaning, the steps are in order, and it ends. 'To taste' and 'some/maybe' are ambiguous — opinions describe, they don't instruct."
    },
    {
        id: "f24",
        type: "mcq",
        q: "In the binary number 1011, what is the PLACE VALUE of the third digit from the RIGHT?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: 2,
        explain: "Binary place values double from the right: 1, 2, 4, 8, 16… The third place from the right is 4. Nail the place values and every conversion question becomes easy addition."
    },
    {
        id: "f25",
        type: "output",
        q: "Convert the binary number 101011 into decimal. Show the place-value addition.",
        answerText: "1 0 1 0 1 1\n32+16 +8 +4 +2 +1  →  add the places holding a 1:\n32 + 8 + 2 + 1 = 43\n\nSo  101011₂ = 43₁₀",
        explain: "Places from the right: 1, 2, 4, 8, 16, 32. A 1 sits at 32, 8, 2 and 1 → 43. The zero places (16, 4) contribute nothing. Reverse-check by converting 43 back by repeated division."
    },
    {
        id: "f26",
        type: "short",
        q: "One song is 5 MB. Roughly how many such songs fit on a 1 GB pen drive (1 GB = 1024 MB)? Show your working.",
        answerText: "1 GB = 1024 MB\nNumber of songs = 1024 ÷ 5 = 204.8\n→ about 204 full songs (the .8 song doesn't fit).\n\nRemind yourself of the ladder: 8 bits = 1 Byte · 1024 B = 1 KB · 1024 KB = 1 MB · 1024 MB = 1 GB.",
        explain: "Two marks live here: the conversion (GB → MB, ×1024) and the division. Say 'about 204' — estimating with the binary ladder is the expected method."
    },
    {
        id: "f27",
        type: "mcq",
        q: "“Number of students present out of 60” is which type of data?",
        options: [
            "Quantitative — DISCRETE (counted in whole steps)",
            "Quantitative — continuous (measured)",
            "Qualitative — categorical",
            "Unstructured data"
        ],
        answer: 0,
        explain: "You can't have 30.5 students — attendance comes in whole steps you COUNT → discrete quantitative. Height/weight are the measured (continuous) pair; eye colour is the categorical one."
    },
    {
        id: "f28",
        type: "mcq",
        q: "A marks sheet with fixed columns — Roll No / Name / Marks — is called STRUCTURED data because…",
        options: [
            "it is printed on paper",
            "it has no fixed schema",
            "every row follows the same fixed schema (rows × columns), so a program can store and search it directly",
            "it contains only numbers"
        ],
        answer: 2,
        explain: "Structured = a fixed, repeating organisation (rows and columns) that software can query directly. Photos, audio and free text have no such schema → unstructured."
    },
    {
        id: "f29",
        type: "mcq",
        q: "A weather app stores raw rainfall numbers, draws tomorrow's rain chart, and finally advises “carry an umbrella”. On the DIKW ladder, the ADVICE is which level?",
        options: [
            "Data",
            "Information",
            "Knowledge",
            "Wisdom — knowing which ACTION to take"
        ],
        answer: 3,
        explain: "Numbers = data; the organised chart = information; the derived pattern = knowledge; the recommendation to ACT (take the umbrella) = wisdom. Wisdom always answers 'so what should I do?'."
    },
    {
        id: "f30",
        type: "output",
        q: "Trace this algorithm and write BOTH lines of output.",
        code: "marks ← [40, 62, 91, 55, 70]\npassed ← 0\nFOR each m IN marks:\n    IF m ≥ 60:\n        passed ← passed + 1\nPRINT passed\nPRINT LENGTH(marks)",
        answerText: "3\n5",
        explain: "62, 91 and 70 pass the ≥ 60 test → passed counts 1, 2, 3. 40 and 55 fail. The list length is 5 regardless — 3 out of 5 passed. Counter + condition inside a loop is the most-traced pattern on paper."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — MACHINES  (algorithms · hardware · software)
   ------------------------------------------------------------ */ const MACHINES = [
    {
        id: "m1",
        type: "mcq",
        q: "Which one is NOT a property of a good algorithm?",
        options: [
            "Finiteness — it must end",
            "Definiteness — every step is unambiguous",
            "Ambiguity — steps can be read two ways",
            "Effectiveness — each step is basic enough to actually perform"
        ],
        answer: 2,
        explain: "An algorithm must be the OPPOSITE of ambiguous: each step has exactly one meaning. Finiteness, definiteness, input, output and effectiveness are the classic properties."
    },
    {
        id: "m2",
        type: "mcq",
        q: "In a flowchart, the DIAMOND symbol represents…",
        options: [
            "Start / End",
            "A process step",
            "A decision (Yes / No branch)",
            "Input / Output"
        ],
        answer: 2,
        explain: "Oval = start/end · parallelogram = input/output · rectangle = process · diamond = decision. Draw them correctly — symbols carry marks!"
    },
    {
        id: "m3",
        type: "mcq",
        q: "In a flowchart, the PARALLELOGRAM represents…",
        options: [
            "Input / Output",
            "A decision",
            "Start / End",
            "A connector"
        ],
        answer: 0,
        explain: "Parallelogram = INPUT or OUTPUT (e.g., INPUT marks, PRINT total)."
    },
    {
        id: "m4",
        type: "output",
        q: "Trace the algorithm and write the output.",
        code: "total ← 0\nFOR i FROM 1 TO 5:\n    total ← total + i\nPRINT total",
        answerText: "15",
        explain: "1 + 2 + 3 + 4 + 5 = 15. Accumulator loops like this are the #1 paper question."
    },
    {
        id: "m5",
        type: "code",
        q: "Write a pseudocode / flowchart logic that inputs three numbers and prints the LARGEST of them.",
        solution: "INPUT a, b, c\nlargest ← a\nIF b > largest:\n    largest ← b\nIF c > largest:\n    largest ← c\nPRINT largest",
        answerText: "Example run — input 7, 19, 12 → prints 19",
        explain: "Keep a running maximum: assume the first value is largest, then challenge it with each remaining value. This pattern extends to N numbers."
    },
    {
        id: "m6",
        type: "mcq",
        q: "Which part of the CPU performs arithmetic (+, −) and logic (AND, OR, comparisons)?",
        options: [
            "Control Unit",
            "ALU — the Arithmetic Logic Unit",
            "Registers",
            "RAM"
        ],
        answer: 1,
        explain: "ALU does the maths and comparisons; the Control Unit directs traffic; registers are tiny ultra-fast storage inside the CPU."
    },
    {
        id: "m7",
        type: "mcq",
        q: "The correct order of the machine (instruction) cycle is…",
        options: [
            "Decode → Fetch → Execute",
            "Fetch → Decode → Execute",
            "Execute → Fetch → Decode",
            "Fetch → Execute → Decode"
        ],
        answer: 1,
        explain: "FETCH the instruction from memory → DECODE what it means (Control Unit) → EXECUTE it (ALU). Billions of times per second."
    },
    {
        id: "m8",
        type: "mcq",
        q: "Why is RAM called VOLATILE memory?",
        options: [
            "It is very slow",
            "Its contents vanish when the power is switched off",
            "It cannot be read twice",
            "It stores only pictures"
        ],
        answer: 1,
        explain: "RAM holds the programs you are running right now — cut the power and it's empty. That's why you save your file to disk (non-volatile)."
    },
    {
        id: "m9",
        type: "mcq",
        q: "Which of these is SECONDARY storage?",
        options: [
            "RAM",
            "CPU cache",
            "SSD / hard disk",
            "Registers"
        ],
        answer: 2,
        explain: "Secondary storage keeps data when power is off — SSD/HDD, pen drives, CDs. RAM, cache and registers are primary (volatile) memory."
    },
    {
        id: "m10",
        type: "short",
        q: "State the difference between a COMPILER and an INTERPRETER.",
        answerText: "COMPILER — translates the ENTIRE program into machine code BEFORE it runs; after that the program runs fast; all errors are reported together after compiling.  (e.g., C)\nINTERPRETER — translates and runs the code LINE BY LINE; stops at the first error it meets, which makes it easier to test and debug.  (e.g., Python)",
        explain: "Key words: whole-at-once vs line-by-line; errors together vs stops at first error. Give one language example of each."
    },
    {
        id: "m11",
        type: "mcq",
        q: "MACHINE language is written in…",
        options: [
            "English keywords like PRINT",
            "0s and 1s (binary) that the CPU executes directly",
            "Flowchart symbols",
            "Python"
        ],
        answer: 1,
        explain: "Machine language = raw binary the CPU understands natively. Assembly adds short mnemonics; high-level languages (Python) read like English and must be translated down."
    },
    {
        id: "m12",
        type: "mcq",
        q: "Windows, Linux and macOS are examples of…",
        options: [
            "Application software",
            "System software — the Operating System",
            "Programming languages",
            "Hardware"
        ],
        answer: 1,
        explain: "The OS is system software: it manages the hardware and lets application software run. Apps like Chrome or Word sit ON TOP of it."
    },
    {
        id: "m13",
        type: "short",
        q: "Name any THREE functions of an operating system.",
        answerText: "Any three of:\n• Memory management — giving programs their RAM\n• Process / CPU scheduling — deciding which program runs when\n• File management — folders, saving, opening files\n• Device management — drivers for keyboard, printer, etc.\n• User interface — GUI / CLI\n• Security — passwords, permissions",
        explain: "Pick the three you can explain in one line each — definition + micro-example."
    },
    {
        id: "m14",
        type: "mcq",
        q: "Python is called a HIGH-LEVEL language because…",
        options: [
            "It runs only on supercomputers",
            "It reads like English and hides hardware details from the programmer",
            "It is compiled to assembly",
            "It cannot do arithmetic"
        ],
        answer: 1,
        explain: "High-level = close to human thinking, far from the machine; portable and easy to read. The translation to binary is handled for you."
    },
    {
        id: "m15",
        type: "output",
        q: "A flowchart inputs MARKS, then decides: IF marks ≥ 40 → print PASS, otherwise → print FAIL. What is the output if the input is 75?",
        answerText: "PASS",
        explain: "75 ≥ 40 is true, so control follows the YES branch of the decision diamond. Trace both branches before answering — examiners love the boundary case marks = 40."
    },
    {
        id: "m16",
        type: "mcq",
        q: "An algorithm for making tea contains this step: “Add sugar to taste.” Which property of a good algorithm does it BREAK?",
        options: [
            "Finiteness — it never ends",
            "Definiteness — the step is ambiguous ('to taste' can mean anything)",
            "Input — tea has no input",
            "Effectiveness — nobody can add sugar"
        ],
        answer: 1,
        explain: "'To taste', 'some', 'a little' — ambiguous steps are the classic defect. A machine needs ONE exact meaning per step: 'add 2 teaspoons of sugar' would be definite."
    },
    {
        id: "m17",
        type: "output",
        q: "Trace this find-the-maximum algorithm and write the output.",
        code: "nums ← [7, 19, 4, 25, 3]\nlargest ← nums[0]\nFOR each n IN nums:\n    IF n > largest:\n        largest ← n\nPRINT largest",
        answerText: "25",
        explain: "largest starts at 7, then 19 beats it → 19; 4 and 3 lose; 25 beats 19 → 25. This running-maximum skeleton is the same one you'd write for 3 numbers (m5) or 3 million — trace it line by line."
    },
    {
        id: "m18",
        type: "mcq",
        q: "You look for your friend's name in an UNSORTED attendance list by reading every line from the top until you find it. This method is called…",
        options: [
            "binary search — it halves the list every step",
            "linear search — check items one by one from the start",
            "sorting",
            "the machine cycle"
        ],
        answer: 1,
        explain: "Checking items one-by-one = LINEAR search — it works on any list (sorted or not) but is slow for big lists. Binary search is far faster but needs a SORTED list first."
    },
    {
        id: "m19",
        type: "mcq",
        q: "In a flowchart, the plain RECTANGLE represents…",
        options: [
            "A decision (Yes / No)",
            "Start / End",
            "A process step — 'do this calculation / action'",
            "A connector between pages"
        ],
        answer: 2,
        explain: "Full symbol set: oval = start/end · parallelogram = input/output · rectangle = process · diamond = decision · small circle = connector. Symbols carry marks — use the right shape."
    },
    {
        id: "m20",
        type: "output",
        q: "The input given is temp = 30. Which line does this algorithm PRINT?",
        code: "INPUT temp\nIF temp > 40:\n    PRINT \"very hot\"\nELIF temp > 25:\n    PRINT \"warm\"\nELSE:\n    PRINT \"cool\"",
        answerText: "warm",
        explain: "30 > 40 is FALSE → first branch skipped. 30 > 25 is TRUE → 'warm' prints and the else is never read. Conditions are tested top-down and the FIRST true one wins — a classic trap when two conditions could both hold."
    },
    {
        id: "m21",
        type: "mcq",
        q: "Which part of the CPU acts like the TRAFFIC POLICE — deciding which instruction runs next and directing the ALU, memory and registers?",
        options: [
            "ALU",
            "Control Unit (CU)",
            "Cache",
            "Hard disk"
        ],
        answer: 1,
        explain: "CU = Control Unit: it fetches, decodes and orchestrates; it does NO maths itself. The ALU is the calculator under the CU's direction. 'Traffic police / manager' is the standard one-line answer."
    },
    {
        id: "m22",
        type: "mcq",
        q: "The SMALLEST and FASTEST kind of memory — sitting right inside the CPU and holding data the CPU is working on this instant — is…",
        options: [
            "RAM",
            "Registers",
            "SSD",
            "ROM"
        ],
        answer: 1,
        explain: "Speed ladder: registers (inside CPU, fastest, tiniest) → cache → RAM → SSD/HDD. The further from the CPU, the bigger and slower the storage gets."
    },
    {
        id: "m23",
        type: "short",
        q: "The CPU executes the instruction ADD A, B. Describe what happens in each of the three machine-cycle stages (fetch · decode · execute).",
        answerText: "FETCH — the Control Unit collects the ADD instruction from memory (it sits at some address).\nDECODE — the CU works out what the instruction MEANS: 'add the value in B to the value in A'.\nEXECUTE — the ALU performs the addition and the result is stored back (in A / a register).\nThen the cycle repeats for the next instruction — billions of times per second.",
        explain: "One line per stage is enough, but each line must name the stage's job: collect → interpret → do. Mentioning the CU (fetch/decode) and ALU (execute) earns the third mark."
    },
    {
        id: "m24",
        type: "mcq",
        q: "Which memory keeps its contents even when the power is OFF and holds the startup instructions the computer needs to boot?",
        options: [
            "RAM",
            "Cache",
            "ROM — Read-Only Memory",
            "Registers"
        ],
        answer: 2,
        explain: "ROM is non-volatile and (as good as) read-only — the boot firmware lives there. RAM is the volatile opposite: fast workspace, empty the moment power is cut."
    },
    {
        id: "m25",
        type: "mcq",
        q: "Which device is BOTH an input AND an output device?",
        options: [
            "Printer",
            "Keyboard",
            "Touchscreen — it displays AND accepts touch",
            "Mouse"
        ],
        answer: 2,
        explain: "A touchscreen shows you the screen (output) and reads your finger taps (input). Printer = output only; keyboard and mouse = input only. Device classification is a guaranteed 1-marker."
    },
    {
        id: "m26",
        type: "short",
        q: "Your laptop has BOTH 16 GB RAM and a 512 GB SSD. Why does a computer need both? Give two clear reasons.",
        answerText: "1. Different jobs: RAM is the fast, temporary WORKSPACE holding the programs currently running; the SSD is permanent STORAGE holding files and software while the power is off.\n2. Different trade-offs: RAM is much faster but volatile (contents vanish on power-off) and costlier per GB; the SSD is slower but non-volatile and roomy.\nBoot with nothing in RAM — copy your file from SSD to RAM to work on it, and save it back when done.",
        explain: "Key contrast words: workspace vs storage, volatile vs non-volatile, fast+small vs slower+big. One example of the save/load flow seals the answer."
    },
    {
        id: "m27",
        type: "mcq",
        q: "MS Word, Chrome and the Camera app are examples of…",
        options: [
            "System software",
            "Application software — programs the USER chooses to run",
            "Firmware",
            "Operating systems"
        ],
        answer: 1,
        explain: "Application software = the tools you directly use (Word, Chrome, games). They run ON TOP of system software (the OS), which manages the hardware underneath."
    },
    {
        id: "m28",
        type: "mcq",
        q: "A program written in an INTERPRETED language has an error on line 3 and another on line 10. What happens when you run it?",
        options: [
            "Both errors are reported together before anything runs",
            "Lines 1–2 run, the interpreter stops at line 3 — line 10 is never reached until line 3 is fixed",
            "The whole program runs, ignoring errors",
            "Only line 10 runs"
        ],
        answer: 1,
        explain: "An interpreter translates and runs line by line and stops at the FIRST error. A compiler (m10) would have reported both errors together before running anything. That difference is the classic comparison question."
    },
    {
        id: "m29",
        type: "mcq",
        q: "Which statement about ASSEMBLY language is TRUE?",
        options: [
            "It is written in raw 0s and 1s with no helper tools",
            "It uses short mnemonics like ADD and MOV (one step above machine language) and still needs a translator (assembler)",
            "It is a high-level language like Python",
            "It is another name for the flowchart language"
        ],
        answer: 1,
        explain: "The ladder: machine language (raw binary) → assembly (mnemonics like ADD/MOV, translated by an ASSEMBLER) → high-level languages (Python, human-friendly, translated by compiler/interpreter)."
    },
    {
        id: "m30",
        type: "short",
        q: "Hardware is often called the 'body' and software the 'mind/soul' of a computer. Explain the relationship between the two with one example of each.",
        answerText: "HARDWARE = the physical parts you can touch — CPU, RAM, keyboard, screen, SSD.\nSOFTWARE = the invisible instructions that tell the hardware what to do — OS, apps, games.\nThey need each other: software without hardware has nothing to run on; hardware without software is a lifeless box.\nExample pair: the printer (hardware) prints because the printer driver + Word (software) send it instructions; pressing 'P' (hardware) only types because the OS + editor (software) interpret the signal.",
        explain: "Define both, state the dependence both ways, then one concrete example pair. 'Touch it vs can't touch it' is the fastest definition line for the exam."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — PYTHON CORE  (python · basics · lists · if · dicts · while)
   ------------------------------------------------------------ */ const PYCORE = [
    {
        id: "p1",
        type: "output",
        q: "Write the output of this program (one line, four values).",
        code: 'x = 7\ny = 2\nprint(x * y, x ** y, x // y, x % y)',
        answerText: "14 49 3 1",
        explain: "* multiply → 14 · ** power → 49 · // floor division → 3 (7 ÷ 2 = 3.5, floored) · % remainder → 1. The // and % pair is asked CONSTANTLY on paper."
    },
    {
        id: "p2",
        type: "mcq",
        q: "What data type does input() ALWAYS return in Python?",
        options: [
            "int",
            "str — even if the user types a number",
            "float",
            "bool"
        ],
        answer: 1,
        explain: "input() returns a string. To do maths you must convert: age = int(input(\"age: \")). Forgetting this cast is the classic paper trap: input 5 + 5 gives \"55\", not 10."
    },
    {
        id: "p3",
        type: "output",
        q: "Write the output (all three values on one line).",
        code: 'name = "python"\nprint(name[0], name[-1], name[2:5])',
        answerText: "p n tho",
        explain: "Index 0 → first letter 'p' · index −1 → last letter 'n' · slice [2:5] → positions 2,3,4 → 'tho' (stop index 5 is EXCLUDED)."
    },
    {
        id: "p4",
        type: "output",
        q: "Write all three lines of output exactly.",
        code: 'print("3" + "4")\nprint(3 + 4)\nprint("ha" * 3)',
        answerText: "34\n7\nhahaha",
        explain: "\"3\" + \"4\" CONCATENATES strings → \"34\".  3 + 4 adds numbers → 7.  string * int REPEATS the string. Mixing types on purpose is a favourite exam trick."
    },
    {
        id: "p5",
        type: "mcq",
        q: "Which is a VALID Python variable name?",
        options: [
            "2marks",
            "my-name",
            "student_name",
            "class"
        ],
        answer: 2,
        explain: "Names can't start with a digit (2marks ✗), can't contain a hyphen (my-name ✗ — Python reads it as minus), and can't be a reserved keyword (class ✗). Letters, digits and _ are allowed; don't start with a digit."
    },
    {
        id: "p6",
        type: "output",
        q: "Write the output exactly as Python would print it.",
        code: 'colors = ["red", "green", "blue", "yellow"]\nprint(colors[1:3])',
        answerText: "['green', 'blue']",
        explain: "Slice [1:3] starts at index 1 and stops BEFORE index 3 → 'green' and 'blue'. Print a list and Python shows it with quotes and brackets."
    },
    {
        id: "p7",
        type: "output",
        q: "Write the output of this list program.",
        code: "nums = [1, 2, 3]\nnums.append(4)\nnums.insert(0, 0)\nprint(nums)",
        answerText: "[0, 1, 2, 3, 4]",
        explain: "append(4) adds at the END → [1,2,3,4]; insert(0, 0) pushes 0 in at INDEX 0 → [0,1,2,3,4]. Order of operations matters — do them one line at a time on paper."
    },
    {
        id: "p8",
        type: "mcq",
        q: "What is the difference between list.sort() and sorted(list)?",
        options: [
            "They are identical",
            "sort() rearranges the ORIGINAL list and returns None; sorted() leaves the original alone and returns a NEW sorted list",
            "sorted() only works on numbers",
            "sort() returns a new list"
        ],
        answer: 1,
        explain: "x = nums.sort() gives you None (a classic trap!); x = sorted(nums) gives you the new sorted copy. sort() mutates, sorted() returns."
    },
    {
        id: "p9",
        type: "output",
        q: "Write the output of this program.",
        code: "scores = [10, 20, 30]\nscores[1] = 99\nprint(len(scores), scores)",
        answerText: "3 [10, 99, 30]",
        explain: "Assigning to scores[1] REPLACES the value at index 1 (20 → 99); the length stays 3. Lists are mutable — paper exams test this constantly."
    },
    {
        id: "p10",
        type: "output",
        q: "Write BOTH lines of output.",
        code: 'd = {"name": "Aman", "age": 19}\nprint(d["age"] + 1)\nprint(d.get("city"))',
        answerText: "20\nNone",
        explain: "d[\"age\"] finds the value 19 → +1 prints 20. d.get(\"city\") returns None for a MISSING key instead of crashing — while d[\"city\"] would raise KeyError."
    },
    {
        id: "p11",
        type: "code",
        q: 'Write a program that counts how many vowels are in word = "programming" and prints the count.',
        solution: 'word = "programming"\ncount = 0\nfor ch in word:\n    if ch in "aeiou":\n        count = count + 1\nprint(count)',
        answerText: "Output: 3   (o, a, i)",
        explain: "Loop over each character; `ch in \"aeiou\"` is the membership test; add 1 when it's True. Same skeleton counts digits, spaces or any character set."
    },
    {
        id: "p12",
        type: "output",
        q: "Write the output on one line, exactly as printed.",
        code: 'for i in range(1, 6, 2):\n    print(i, end=" ")',
        answerText: "1 3 5",
        explain: "range(1, 6, 2) → start 1, stop 6 (excluded), step 2 → 1, 3, 5. end=\" \" replaces the usual newline, so everything lands on one line with spaces."
    },
    {
        id: "p13",
        type: "output",
        q: "Write all lines of output, in order.",
        code: "n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1",
        answerText: "3\n2\n1",
        explain: "Runs while n > 0: prints 3, 2, 1. When n becomes 0 the condition fails and the loop ends. If you forget n = n − 1 the loop never stops — infinite loop!"
    },
    {
        id: "p14",
        type: "mcq",
        q: "Inside a loop, what does `continue` do?",
        options: [
            "Exits the loop completely",
            "Skips the rest of the CURRENT iteration and jumps to the next one",
            "Restarts the program",
            "Pauses the loop forever"
        ],
        answer: 1,
        explain: "break = leave the loop. continue = skip to the next round. Mixing these two up is one of the most common paper mistakes."
    },
    {
        id: "p15",
        type: "output",
        q: "Write the output.",
        code: 'x = 12\nif x % 2 == 0 and x % 3 == 0:\n    print("six")\nelse:\n    print("no")',
        answerText: "six",
        explain: "12 % 2 == 0 → True; 12 % 3 == 0 → True; True and True → the if-branch runs. Swap x to 9 and the answer changes to no (9 % 2 is 1)."
    },
    {
        id: "p16",
        type: "code",
        q: 'Write a program: marks = 78 is given. Print "A" if marks ≥ 90, "B" if ≥ 75, "C" if ≥ 60, otherwise "D". State the output for 78.',
        solution: 'marks = 78\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 60:\n    print("C")\nelse:\n    print("D")',
        answerText: "Output: B",
        explain: "Conditions are tested TOP-DOWN and the first True wins: 78 fails 90, passes 75 → B. Writing the branches in the wrong order breaks the logic — mention that ordering matters!"
    },
    {
        id: "p17",
        type: "mcq",
        q: 'colors = ["red", "green", "blue"] — what happens when Python runs print(colors[5])?',
        options: [
            "Prints an empty string",
            "IndexError — list index out of range",
            "Prints None",
            "Prints blue"
        ],
        answer: 1,
        explain: "Valid indexes are 0–2 (or −3 to −1). Index 5 doesn't exist → IndexError: list index out of range."
    },
    {
        id: "p18",
        type: "output",
        q: "Write all THREE lines of output exactly.",
        code: 'name = "ada lovelace"\nprint(name.title())\nprint(name.upper())\nprint(len(name))',
        answerText: "Ada Lovelace\nADA LOVELACE\n12",
        explain: ".title() capitalises each word · .upper() makes everything capitals · len() counts characters — and the SPACE between the words counts too: 3 + 1 + 8 = 12. Methods don't change the original string unless you reassign it."
    },
    {
        id: "p19",
        type: "mcq",
        q: 'age = 19 — why does print("I am " + age) FAIL, and which line is a correct fix?',
        options: [
            "print() cannot use +; the fix is print(\"I am \" . age)",
            "Strings and ints can't be joined with + — fix it with an f-string: print(f\"I am {age}\") (or \"I am \" + str(age))",
            "age must be written in capital letters",
            "It does not fail — it prints I am 19"
        ],
        answer: 1,
        explain: "+ means different things per type: str + str joins, int + int adds, but str + int is a TypeError. Convert with str(age) or let an f-string do it for you: f\"I am {age}\"."
    },
    {
        id: "p20",
        type: "output",
        q: "Write the output exactly as printed.",
        code: "print(int(7.9), float(4))",
        answerText: "7 4.0",
        explain: "int() CHOPS the decimal part (it never rounds up — 7.9 → 7). float(4) makes the whole number into 4.0. Casting questions like this are free marks if you remember: int() truncates, it doesn't round."
    },
    {
        id: "p21",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'a = "5"\nb = "6"\nprint(a + b, int(a) + int(b))',
        answerText: "56 11",
        explain: "a and b are STRINGS, so a + b glues them → \"56\". int(a) + int(b) converts first, then adds → 11. Same symbols, two totally different results — the #1 string-vs-number trap on paper."
    },
    {
        id: "p22",
        type: "mcq",
        q: "Which line correctly creates a TUPLE with the single value 5?",
        options: [
            "t = (5)",
            "t = (5,)",
            "t = [5]",
            "t = tuple(5)"
        ],
        answer: 1,
        explain: "The COMMA makes the tuple, not the parentheses — (5) is just the number 5 in brackets. [5] is a list, and tuple(5) is an error. Say 'one-element tuple needs a trailing comma' for the mark."
    },
    {
        id: "p23",
        type: "output",
        q: "Write the output of this list program.",
        code: "nums = [10, 20, 30, 20]\nnums.remove(20)\nprint(nums)",
        answerText: "[10, 30, 20]",
        explain: "remove(20) deletes only the FIRST occurrence of 20 (index 1) and shifts the rest left — the second 20 stays. To delete all copies you'd need a loop. 'First occurrence only' is the trap this question hunts for."
    },
    {
        id: "p24",
        type: "output",
        q: "Write the output on one line.",
        code: "marks = [45, 82, 77]\nprint(min(marks), max(marks), sum(marks))",
        answerText: "45 82 204",
        explain: "min → 45, max → 82, sum → 45 + 82 + 77 = 204. These three built-ins + len() are the standard list toolbox — combine them freely: average = sum(marks) / len(marks)."
    },
    {
        id: "p25",
        type: "output",
        q: "Write BOTH lines of output (True or False).",
        code: 'day = "sunday"\nprint(day == "saturday" or day == "sunday")\nprint(not day == "monday")',
        answerText: "True\nTrue",
        explain: "or needs ONE True → day is sunday, so the first line is True (even though the saturday test fails). not flips: day == monday is False, not False → True. Trace or = 'either passes', not = 'opposite day'."
    },
    {
        id: "p26",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'stock = {"pen": 10}\nstock["book"] = 5\nstock["pen"] = 3\nprint(stock, "pen" in stock)',
        answerText: "{'pen': 3, 'book': 5} True",
        explain: "Assigning to a NEW key (book) ADDS the pair; assigning to an EXISTING key (pen) OVERWRITES 10 → 3. The membership test in checks KEYS, and \"pen\" is a key → True."
    },
    {
        id: "p27",
        type: "output",
        q: "Write both lines of output.",
        code: 'd = {"a": 1, "b": 2, "c": 3}\nprint(list(d.keys()))\nprint(list(d.values()))',
        answerText: "['a', 'b', 'c']\n[1, 2, 3]",
        explain: "d.keys() gives the labels, d.values() gives the data; list() turns each view into a real list so print shows it with brackets. Order follows the order the keys were written in the dictionary."
    },
    {
        id: "p28",
        type: "output",
        q: "Write the output of this program.",
        code: "n = 1\ntotal = 0\nwhile True:\n    total = total + n\n    if total > 10:\n        break\n    n = n + 1\nprint(n, total)",
        answerText: "5 15",
        explain: "total grows 1 → 3 → 6 → 10 (not yet > 10) → 15. The moment total hits 15, break fires and prints the CURRENT pair: n = 5, total = 15. Note n was already bumped before total crossed the limit — trace slowly, line by line."
    },
    {
        id: "p29",
        type: "output",
        q: "A user runs this program and types 4, then 7, then done. What is printed?",
        code: 'total = 0\ncommand = ""\nwhile command != "done":\n    command = input("number or done: ")\n    if command != "done":\n        total = total + int(command)\nprint(total)',
        answerText: "11",
        explain: "The sentinel loop: 'done' is the exit word. 4 arrives → total 4; 7 arrives → total 11; 'done' fails the if (so no int() on it) and also fails the while condition → loop ends → print 11. This input-and-respond pattern is exactly how real menu programs work."
    },
    {
        id: "p30",
        type: "code",
        q: "Write a program that stores three friends' names and ages in a dictionary, then uses .items() to print one line per friend in the form:  Name is AGE years old",
        solution: 'ages = {"Aman": 19, "Riya": 18, "Kabir": 20}\n\nfor name, age in ages.items():\n    print(name, "is", age, "years old")',
        answerText: "Aman is 19 years old\nRiya is 18 years old\nKabir is 20 years old",
        explain: ".items() hands you each (key, value) pair, and two loop variables unpack them in one go: for name, age in ages.items(). This for-over-items skeleton answers every 'loop through a dictionary' paper question."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — FUNCTIONS & OOP  (functions · args · funcs×lists · classes)
   ------------------------------------------------------------ */ const PRO = [
    {
        id: "r1",
        type: "mcq",
        q: "Which keyword DEFINES a function in Python?",
        options: [
            "func",
            "define",
            "def",
            "function"
        ],
        answer: 2,
        explain: "def name(parameters):  …  — then CALL it with name(arguments)."
    },
    {
        id: "r2",
        type: "output",
        q: "Write the output (both values on one line).",
        code: "def f(a, b=2):\n    return a * b\n\nprint(f(3), f(3, 4))",
        answerText: "6 12",
        explain: "f(3) → b uses its DEFAULT 2 → 3×2 = 6. f(3, 4) → the given 4 overrides the default → 12. Default parameters: used when the caller stays silent."
    },
    {
        id: "r3",
        type: "mcq",
        q: "What does `return` do inside a function?",
        options: [
            "Prints a value on the screen",
            "Sends a value back to the caller and ends the function",
            "Loops the function forever",
            "Deletes the function"
        ],
        answer: 1,
        explain: "print just DISPLAYS; return HANDS THE VALUE BACK so the caller can store it: result = f(3). A function with no return gives None."
    },
    {
        id: "r4",
        type: "output",
        q: "Write ALL lines of output.",
        code: 'def greet(*names):\n    for n in names:\n        print("Hi", n)\n\ngreet("Aman", "Riya")',
        answerText: "Hi Aman\nHi Riya",
        explain: "*names packs the extra positional arguments into a TUPLE ('Aman', 'Riya'); the for-loop greets each one. Say 'tuple' on paper — naming the type earns the mark."
    },
    {
        id: "r5",
        type: "mcq",
        q: "Inside a function, **kwargs collects extra KEYWORD arguments into a…",
        options: [
            "tuple",
            "list",
            "dictionary",
            "string"
        ],
        answer: 2,
        explain: "*args → tuple of positionals · **kwargs → dict of keyword pairs. {'key': value} — that's why you can loop .items() over it."
    },
    {
        id: "r6",
        type: "mcq",
        q: "Which function signature is VALID in Python?",
        options: [
            "def f(a=1, b):",
            "def f(a, b=1):",
            "def f(b=1, a):",
            "Both A and B"
        ],
        answer: 1,
        explain: "Default parameters must come AFTER non-default ones. In def f(a=1, b): a call like f(5) would be ambiguous — Python refuses to guess."
    },
    {
        id: "r7",
        type: "output",
        q: "Write the output exactly.",
        code: 'def build(first, last, **extra):\n    d = {"first": first, "last": last}\n    d.update(extra)\n    return d\n\nprint(build("Aman", "Sharma", age=19))',
        answerText: "{'first': 'Aman', 'last': 'Sharma', 'age': 19}",
        explain: "The two positionals fill first/last; the leftover keyword age=19 lands in **extra as {'age': 19} and is merged with update(). Full parameter-order questions are built from this idea."
    },
    {
        id: "r8",
        type: "output",
        q: "What EXACTLY happens when this program runs? Write the error line.",
        code: 'def describe_pet(animal, name):\n    print(f"I have a {animal} named {name}.")\n\ndescribe_pet("hamster")',
        answerText: 'TypeError: describe_pet() missing 1 required positional argument: \'name\'',
        explain: "Two parameters, one argument → Python raises TypeError and TELLS YOU which one is missing. Reading tracebacks (function name + missing argument) is a guaranteed exam question."
    },
    {
        id: "r9",
        type: "code",
        q: "Write a function area(width, height=10) that RETURNS width × height. What does print(area(5)) output?",
        solution: "def area(width, height=10):\n    return width * height\n\nprint(area(5))\nprint(area(5, 2))",
        answerText: "Output: 50  (and area(5, 2) → 10)",
        explain: "area(5) keeps the default height 10 → 50. The second call overrides it → 10. One function, two behaviours — that's the power of defaults."
    },
    {
        id: "r10",
        type: "mcq",
        q: "The `__init__` method of a class…",
        options: [
            "Must be called manually after creating an object",
            "Runs automatically every time a new object is created, to set up its attributes",
            "Only runs when the program exits",
            "Is optional decoration with no effect"
        ],
        answer: 1,
        explain: "__init__ is the initialiser: Dog(\"Rex\") → Python creates the instance and calls __init__ with it, so self.name = \"Rex\" happens immediately."
    },
    {
        id: "r11",
        type: "output",
        q: "Write the output of this class program.",
        code: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        return self.name + " says woof"\n\nd = Dog("Rex")\nprint(d.bark())',
        answerText: "Rex says woof",
        explain: "__init__ stores \"Rex\" ON the instance (self.name). bark() reads it back through self. self = the object the method was called on."
    },
    {
        id: "r12",
        type: "mcq",
        q: "Inside a class method, `self` refers to…",
        options: [
            "The class itself",
            "The specific INSTANCE the method was called on",
            "The parent class",
            "A global variable"
        ],
        answer: 1,
        explain: "d.bark() → self IS d. Two Dogs each carry their own self.name — that's why instances stay independent."
    },
    {
        id: "r13",
        type: "output",
        q: "Write the output (both values on one line).",
        code: "class Car:\n    def wheels(self):\n        return 4\n\nclass Bike(Car):\n    def wheels(self):   # same name as the parent's method\n        return 2\n\nprint(Car().wheels(), Bike().wheels())",
        answerText: "4 2",
        explain: "Bike INHERITS from Car but OVERRIDES wheels(); the child's version wins for Bike objects. Car objects keep the parent's 4."
    },
    {
        id: "r14",
        type: "mcq",
        q: "Inside a child class, `super().__init__(…)` is used to…",
        options: [
            "Delete the parent class",
            "Call the PARENT'S version of __init__ so the inherited setup still runs",
            "Create a second object",
            "Skip initialisation entirely"
        ],
        answer: 1,
        explain: "super() = 'the parent class'. Child adds its own attributes (battery_size…) while super().__init__ handles the parent's (make, model…) — no copy-paste."
    },
    {
        id: "r15",
        type: "code",
        q: 'Write a class Book with __init__(self, title, pages) that stores both values, plus a method describe() that returns the text "TITLE — PAGES pages". Show one object being created and describe() being printed.',
        solution: 'class Book:\n    def __init__(self, title, pages):\n        self.title = title\n        self.pages = pages\n\n    def describe(self):\n        return f"{self.title} — {self.pages} pages"\n\nb = Book("Python Basics", 250)\nprint(b.describe())',
        answerText: 'Output: Python Basics — 250 pages',
        explain: "Blueprint → __init__ stores attributes on self → methods use self.xxx → instantiate with Book(title, pages). This 8-line skeleton answers most 'write a class' paper questions."
    },
    {
        id: "r16",
        type: "mcq",
        q: "`import pizza` vs `from pizza import make_pizza` — what changes at call time?",
        options: [
            "Nothing, they are identical",
            "With `import pizza` you call pizza.make_pizza(); with `from pizza import make_pizza` you call make_pizza() directly",
            "`from … import` is always an error",
            "`import pizza` copies the whole file into your program"
        ],
        answer: 1,
        explain: "import pizza brings the MODULE (prefix with pizza.); from pizza import make_pizza brings the NAME itself (call it bare). Importing * is discouraged — it can silently overwrite names."
    },
    {
        id: "r17",
        type: "output",
        q: "Write BOTH lines of output exactly.",
        code: 'def shout(word):\n    return word + "!"\n\nprint(shout("hey"))\nprint(shout(shout("go")))',
        answerText: "hey!\ngo!!",
        explain: "The inner call runs FIRST: shout(\"go\") → \"go!\", and that result is fed straight back into shout → \"go!!\". A function's return value can always be used as the next call's argument."
    },
    {
        id: "r18",
        type: "output",
        q: "Write the output — note the order of the arguments in the call.",
        code: 'def intro(name, city):\n    print(name, "lives in", city)\n\nintro(city="Delhi", name="Riya")',
        answerText: "Riya lives in Delhi",
        explain: "KEYWORD arguments match by NAME, not position — so writing city first changes nothing. Riya lands in name, Delhi lands in city. (Positional args would have printed 'Delhi lives in Riya' — a great trap to mention on paper.)"
    },
    {
        id: "r19",
        type: "output",
        q: "Write the output of this program.",
        code: "x = 5\n\ndef change():\n    x = 99\n\nchange()\nprint(x)",
        answerText: "5",
        explain: "The x = 99 inside the function creates a LOCAL variable that dies when the function ends. The global x was never touched → 5 prints. Variables created INSIDE a function stay inside it — that is exactly why functions are safe to reuse."
    },
    {
        id: "r20",
        type: "output",
        q: "Write the output.",
        code: "def add(a, b):\n    return a + b\n\nresult = add(2, 3) * 2\nprint(result)",
        answerText: "10",
        explain: "add(2, 3) RETURNS 5, so the line becomes result = 5 * 2 → 10. That's the whole point of return: the value comes back and can be used inside bigger expressions. (If the function had printed instead of returned, the answer would be an error.)"
    },
    {
        id: "r21",
        type: "mcq",
        q: "A function is carefully DEFINED at the top of a program but is never CALLED anywhere. What happens when the program runs?",
        options: [
            "The function body runs once automatically",
            "Python remembers the definition but the body NEVER runs — nothing inside it executes",
            "The program refuses to run until you call it",
            "The function is deleted automatically"
        ],
        answer: 1,
        explain: "def just TEACHES Python the recipe and stores it away — the body only cooks when you call it with (). No call → no execution → no output. Definition ≠ execution is the concept this tests."
    },
    {
        id: "r22",
        type: "output",
        q: "Write the output of this program.",
        code: "def double_all(nums):\n    for i in range(len(nums)):\n        nums[i] = nums[i] * 2\n\nscores = [1, 2, 3]\ndouble_all(scores)\nprint(scores)",
        answerText: "[2, 4, 6]",
        explain: "The list is passed by reference — nums and scores are TWO NAMES for the SAME list. Editing nums[i] inside the function edits the real list, and the change is visible outside. Lists are mutable: functions that modify them change the original."
    },
    {
        id: "r23",
        type: "output",
        q: "Write the output.",
        code: "def add_all(*nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total\n\nprint(add_all(1, 2, 3, 4))",
        answerText: "10",
        explain: "*nums packs the four arguments into the tuple (1, 2, 3, 4); the loop accumulates 1 → 3 → 6 → 10 and return hands it back. One flexible function — any number of arguments, no list needed at call time."
    },
    {
        id: "r24",
        type: "output",
        q: "Write BOTH lines of output exactly.",
        code: 'def profile(name, role="student", city="Jodhpur"):\n    print(name, "-", role, "-", city)\n\nprofile("Aman")\nprofile("Riya", city="Delhi")',
        answerText: "Aman - student - Jodhpur\nRiya - student - Delhi",
        explain: "First call: both defaults fill in. Second call: Riya is positional → name, and city=\"Delhi\" skips OVER role by naming it — role keeps its default 'student'. Keyword args let you override any single default without retyping the ones before it."
    },
    {
        id: "r25",
        type: "mcq",
        q: "Your file imports a helper from a file called pizza.py with: from pizza import make_pizza. What IS pizza.py, in Python terms?",
        options: [
            "A module — any .py file whose functions/classes you can import into another program",
            "A package that must be installed with pip first",
            "A special Python folder that cannot contain variables",
            "A compiled C library"
        ],
        answer: 0,
        explain: "A module is just a saved .py file — every program you write can be imported by another. pip-installed 'packages' are bundles of modules, but pizza.py here is simply your own module sitting next to your program."
    },
    {
        id: "r26",
        type: "output",
        q: "Write the output on one line.",
        code: "class Counter:\n    def __init__(self):\n        self.count = 0\n\n    def bump(self):\n        self.count = self.count + 1\n\na = Counter()\nb = Counter()\na.bump()\na.bump()\nb.bump()\nprint(a.count, b.count)",
        answerText: "2 1",
        explain: "Each Counter() call builds a SEPARATE object with its own count. a was bumped twice → 2; b was bumped once → 1; neither knows about the other. self always refers to the object the method was called on."
    },
    {
        id: "r27",
        type: "mcq",
        q: "d = Dog(\"Rex\") — which sentence captures the difference between d.name and d.bark()?",
        options: [
            "Both are methods; the parentheses are optional decoration",
            "d.name is stored DATA (an attribute — no parentheses); d.bark() is an ACTION (a method — call it with parentheses)",
            "d.name is a method and d.bark() is an attribute",
            "Both are attributes, but only bark() needs self"
        ],
        answer: 1,
        explain: "Attributes = nouns (name, age, breed — data stored on the object). Methods = verbs (bark(), roll_over() — behaviour you call). The parentheses are the calling signal — leaving them off bark prints '<bound method …>' instead of running it."
    },
    {
        id: "r28",
        type: "output",
        q: "Write the output exactly as printed.",
        code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog("Rex", "lab")\nprint(d.name, d.breed)',
        answerText: "Rex lab",
        explain: "Dog's __init__ first delegates to super().__init__(name) → the PARENT sets self.name = \"Rex\"; then the child adds its own self.breed = \"lab\". One call, two classes cooperating — that is inheritance doing the work without copy-paste."
    },
    {
        id: "r29",
        type: "code",
        q: "Write a function average(nums) that takes a list of numbers and RETURNS their average. Show the print for the list [10, 20, 30]. (Remember what / returns in Python!)",
        solution: "def average(nums):\n    return sum(nums) / len(nums)\n\nprint(average([10, 20, 30]))",
        answerText: "Output: 20.0",
        explain: "sum + len inside the function, return the division. 60 / 3 = 20.0 — the single slash ALWAYS gives a float, so the model answer must print 20.0, not 20. That .0 is the mark-scoring detail."
    },
    {
        id: "r30",
        type: "mcq",
        q: "class ElectricCar(Car): — which statement is TRUE about ElectricCar?",
        options: [
            "It is completely independent — it shares nothing with Car",
            "It IS a Car: it inherits Car's attributes and methods, and may add its own or override existing ones",
            "Car automatically gains all of ElectricCar's methods",
            "It can never have an __init__ of its own"
        ],
        answer: 1,
        explain: "The IS-A test: an electric car IS a car, so the child starts with everything the parent has, then specialises (battery_size, or an overridden describe()). The parent stays untouched — inheritance flows one way."
    }
];
const EXAM_BANKS = {
    foundations: {
        group: "foundations",
        title: "Foundations",
        subtitle: "IPO · data vs information · DIKW · the Four Pillars · binary",
        topics: "Why code? · Computing · 4 Pillars · Data",
        questions: FOUNDATIONS
    },
    machines: {
        group: "machines",
        title: "Machines",
        subtitle: "algorithms · flowcharts · CPU · memory · compilers · software",
        topics: "Algorithms · Hardware · Software",
        questions: MACHINES
    },
    pycore: {
        group: "pycore",
        title: "Python Core",
        subtitle: "variables · strings · lists · if/else · dictionaries · while",
        topics: "Python · Basics · Lists · If/Else · Dicts · While",
        questions: PYCORE
    },
    pro: {
        group: "pro",
        title: "Functions & OOP",
        subtitle: "def · return · *args · **kwargs · classes · inheritance",
        topics: "Functions · Args & Return · Funcs × Lists · Classes",
        questions: PRO
    }
};
const EXAM_GROUPS = [
    "foundations",
    "machines",
    "pycore",
    "pro"
];
const TOTAL_QUESTIONS = EXAM_GROUPS.reduce(_c = (n, g)=>n + EXAM_BANKS[g].questions.length, 0);
_c1 = TOTAL_QUESTIONS;
var _c, _c1;
__turbopack_context__.k.register(_c, "TOTAL_QUESTIONS$EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c1, "TOTAL_QUESTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_notes_questions_ts_36ffa2a9._.js.map