/* FoC Shelf Audit Report — docx generator (R1 cover + DM-1 palette, English report). */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, PageNumber, NumberFormat, AlignmentType, HeadingLevel,
  WidthType, BorderStyle, ShadingType, TableLayoutType, SectionType,
  TableOfContents, PageBreak,
} = require("docx");
const fs = require("fs");

/* ---------- palettes (design-system: Dawn Mist Tech body + DM-1 cover) ---------- */
const BODY = { primary: "0A1628", text: "000000", secondary: "6878A0" };
const COVER = { bg: "162235", titleColor: "FFFFFF", subtitleColor: "B0B8C0", metaColor: "90989F", footerColor: "687078", accent: "37DCF2" };
const TBL = { headerBg: "1B6B7A", headerText: "FFFFFF", accentLine: "1B6B7A", innerLine: "C8DDE2", surface: "EDF3F5" };

const noB = { style: BorderStyle.NONE };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB };
const allNoBorders = { ...noBorders, insideHorizontal: noB, insideVertical: noB };

/* ---------- cover helpers (calcTitleLayout, Latin-aware) ---------- */
function splitTitleLines(title, charsPerLine) {
  if (title.length <= charsPerLine) return [title];
  const words = title.split(" ");
  const lines = []; let cur = "";
  for (const w of words) {
    const cand = cur ? cur + " " + w : w;
    if (cand.length > charsPerLine && cur) { lines.push(cur); cur = w; } else cur = cand;
  }
  if (cur) lines.push(cur);
  if (lines.length > 1 && lines[lines.length - 1].length <= 2) {
    const last = lines.pop(); lines[lines.length - 1] += " " + last;
  }
  return lines;
}
function calcTitleLayout(title, maxWidthTwips, preferredPt = 40, minPt = 24) {
  const charW = (pt) => pt * 11; // Latin average width
  let titlePt = preferredPt, lines;
  while (titlePt >= minPt) {
    const cpl = Math.floor(maxWidthTwips / charW(titlePt));
    if (cpl < 4) { titlePt -= 2; continue; }
    lines = splitTitleLines(title, cpl);
    if (lines.length <= 3) break;
    titlePt -= 2;
  }
  if (!lines || lines.length > 3) { lines = splitTitleLines(title, Math.floor(maxWidthTwips / charW(minPt))); titlePt = minPt; }
  return { titlePt, titleLines: lines };
}
function calcCoverSpacing(p) {
  const { titleLineCount = 1, titlePt = 36, hasSubtitle = false, hasEnglishLabel = false, metaLineCount = 0, fixedHeight = 400, pageHeight = 16838 } = p;
  const SAFETY = 1200;
  const usable = pageHeight - SAFETY;
  const content = titleLineCount * (titlePt * 23 + 200) + (hasSubtitle ? 12 * 23 + 600 : 0) + (hasEnglishLabel ? 9 * 23 + 600 : 0) + metaLineCount * (10 * 23 + 100) + fixedHeight + 900;
  const rem = Math.max(usable - content, 400);
  const FOOTER_MIN = 800;
  const rawTop = Math.floor(rem * 0.45), rawBottom = Math.floor(rem * 0.45);
  const bottomSpacing = Math.max(rawBottom, FOOTER_MIN);
  const topSpacing = Math.max(rawTop - Math.max(0, FOOTER_MIN - rawBottom), 400);
  return { topSpacing, bottomSpacing };
}

function buildCoverR1(cfg) {
  const P = cfg.palette;
  const padL = 1200, padR = 800;
  const availableWidth = 11906 - padL - padR - 300;
  const { titlePt, titleLines } = calcTitleLayout(cfg.title, availableWidth, 40, 24);
  const titleSize = titlePt * 2;
  const spacing = calcCoverSpacing({
    titleLineCount: titleLines.length, titlePt,
    hasSubtitle: !!cfg.subtitle, hasEnglishLabel: !!cfg.englishLabel,
    metaLineCount: (cfg.metaLines || []).length, fixedHeight: 400,
  });
  const accentLeft = { style: BorderStyle.SINGLE, size: 8, color: P.accent, space: 12 };
  const children = [];
  children.push(new Paragraph({ spacing: { before: spacing.topSpacing } }));
  if (cfg.englishLabel) {
    children.push(new Paragraph({
      indent: { left: padL, right: padR }, spacing: { after: 500 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: P.accent, space: 8 } },
      children: [new TextRun({ text: cfg.englishLabel.split("").join("  "), size: 18, color: P.accent, font: { ascii: "Arial" }, characterSpacing: 40 })],
    }));
  }
  for (let i = 0; i < titleLines.length; i++) {
    children.push(new Paragraph({
      indent: { left: padL },
      spacing: { after: i < titleLines.length - 1 ? 100 : 300, line: Math.ceil(titlePt * 23), lineRule: "atLeast" },
      children: [new TextRun({ text: titleLines[i], size: titleSize, bold: true, color: P.titleColor, font: { ascii: "Arial" } })],
    }));
  }
  if (cfg.subtitle) {
    children.push(new Paragraph({
      indent: { left: padL, right: padR }, spacing: { after: 800, line: 312 },
      children: [new TextRun({ text: cfg.subtitle, size: 24, color: P.subtitleColor, font: { ascii: "Arial" } })],
    }));
  }
  for (const line of (cfg.metaLines || [])) {
    children.push(new Paragraph({
      indent: { left: padL + 200 }, spacing: { after: 80 },
      border: { left: accentLeft },
      children: [new TextRun({ text: line, size: 22, color: P.metaColor, font: { ascii: "Arial" } })],
    }));
  }
  children.push(new Paragraph({ spacing: { before: spacing.bottomSpacing } }));
  children.push(new Paragraph({
    indent: { left: padL, right: padR },
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: P.accent, space: 8 } },
    spacing: { before: 200 },
    children: [
      new TextRun({ text: cfg.footerLeft || "", size: 16, color: P.footerColor, font: { ascii: "Arial" } }),
      new TextRun({ text: "                                        " }),
      new TextRun({ text: cfg.footerRight || "", size: 16, color: P.footerColor, font: { ascii: "Arial" } }),
    ],
  }));
  return [new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: allNoBorders,
    rows: [new TableRow({
      height: { value: 16838, rule: "exact" },
      children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: P.bg }, borders: noBorders, children })],
    })],
  })];
}

/* ---------- body helpers ---------- */
function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1, spacing: { before: 360, after: 160, line: 312 },
    children: [new TextRun({ text, bold: true, size: 32, color: BODY.primary, font: { ascii: "Times New Roman" } })],
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 120, line: 312 },
    children: [new TextRun({ text, bold: true, size: 26, color: BODY.primary, font: { ascii: "Times New Roman" } })],
  });
}
function body(runs) {
  const children = (typeof runs === "string")
    ? [new TextRun({ text: runs, size: 22, color: BODY.text, font: { ascii: "Times New Roman" } })]
    : runs;
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED, spacing: { line: 312, after: 120 }, children,
  });
}
function r(text, opts = {}) { return new TextRun({ text, size: 22, color: BODY.text, font: { ascii: "Times New Roman" }, ...opts }); }
function bold(text) { return r(text, { bold: true }); }
function tableTitle(text) {
  return new Paragraph({
    keepNext: true, spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, bold: true, size: 21, color: BODY.primary, font: { ascii: "Times New Roman" } })],
  });
}
function mkTable(headers, rows, widths) {
  const mkCell = (text, isHeader, w, i) => new TableCell({
    width: { size: w, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill: isHeader ? TBL.headerBg : (i % 2 === 1 ? TBL.surface : "FFFFFF") },
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    children: [new Paragraph({
      spacing: { line: 276 },
      children: [new TextRun({
        text: String(text), bold: isHeader, size: isHeader ? 20 : 19,
        color: isHeader ? TBL.headerText : BODY.text, font: { ascii: "Times New Roman" },
      })],
    })],
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: TBL.accentLine },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: TBL.accentLine },
      left: noB, right: noB,
      insideHorizontal: { style: BorderStyle.SINGLE, size: 1, color: TBL.innerLine },
      insideVertical: noB,
    },
    rows: [
      new TableRow({ tableHeader: true, cantSplit: true, children: headers.map((t, i) => mkCell(t, true, widths[i], 0)) }),
      ...rows.map((row, ri) => new TableRow({ cantSplit: true, children: row.map((t, i) => mkCell(t, false, widths[i], ri)) })),
    ],
  });
}

/* ================= DATA ================= */
const CHECKS = [
  ["1", "Lecture sequence continuity", "Registry L1 to L29: n increments by exactly 1, every code badge equals L+n, no gaps or duplicates", "PASS"],
  ["2", "Chapter id uniqueness", "33 chapter ids across 29 lectures, all unique", "PASS"],
  ["3", "Top-nav GROUPS vs registry", "33 nav items, exact one-to-one match with registry ids (no unreachable chapter, no orphan nav link)", "PASS"],
  ["4", "SECTION_COMPONENTS map vs registry", "33 entries, exact one-to-one match (every chapter has a component, no dead component)", "PASS"],
  ["5", "Rendered <Section id> vs registry", "33 rendered sections across the 19 chapter files, exact one-to-one match", "PASS"],
  ["6", "Exam bank integrity", "160 questions in 6 windows; every MCQ answer index in range; every output/short question has a model answer; every code question has a solution; every question carries an explanation - 0 defects", "PASS"],
  ["7", "Search corpus consistency", "33 of 33 foc chapters present with text matching current section sources; 160 foc questions matching the bank", "PASS"],
  ["8", "Count libraries and Atlas registry", "section-counts foc=33, question-counts foc=160, chapter-index covers all ids, hero and shelf card fully registry-driven", "PASS"],
];

const EXAM = [
  ["foundations", "Foundations", "Course map · Computing · 4 Pillars · Data & DIKW · Data types", "36"],
  ["pillars", "Pillars & Cases", "Why code? · Algorithms · Hardware · Software · Python intro · Case files", "38"],
  ["pycore", "Python Core", "Basics · Lists · Organize · For loops · Checkpoint 1 · Numeric lists · Copies & tuples", "22"],
  ["decisions", "Decisions & Data", "If/Else · Branches · Skills lab · If x lists · Dicts · Dict loops · Nesting · Records lab", "15"],
  ["loops", "Loops", "While loops · Loop control", "13"],
  ["pro", "Functions & OOP", "Functions · Arguments · Return values · Funcs x Lists · Classes", "36"],
];

const MATRIX = [
  ["L1", "Welcome to Foundations of Computing", "course-map", "2", "0", "1", "1", "ObjectiveDeck"],
  ["L2", "What Is Computing? The IPO Model", "computing · pillars · data", "10", "0", "1", "0", "DikwPyramid · NetflixCase · StructureTabs"],
  ["L3", "Data, Classified", "data-types", "2", "0", "0", "1", "FormatSwitcher · TimeMachine"],
  ["L4", "Programming in the Age of AI", "why", "0", "0", "0", "0", "none"],
  ["L5", "Algorithms - Recipes a Machine Can Follow", "algorithm", "0", "0", "0", "1", "EvenOddFlow + F-D-I-O-E property wall"],
  ["L6", "Hardware - Silicon That Makes Ideas Run", "hardware", "2", "0", "0", "0", "CpuViz · GpuViz"],
  ["L7", "Software - Telling the Hardware What to Do", "software", "0", "0", "0", "0", "InterpCompiler"],
  ["L8", "Python, First Contact", "python", "0", "0", "1", "0", "Colab feature cards"],
  ["L9", "When Computing Meets the World", "case-files", "2", "0", "0", "3", "case-study cards"],
  ["L10", "Numbers, Strings & Comments", "basics", "2", "1", "0", "9", "none"],
  ["L11", "Lists - the Workhorse Data Structure", "lists", "2", "1", "0", "3", "ListVisualizer"],
  ["L12", "Putting Lists in Order", "list-organize", "2", "1", "0", "2", "IndexErrorLab"],
  ["L13", "Loops & the Indentation Law", "for-loops", "2", "1", "0", "1", "IndentationLaw"],
  ["L14", "Checkpoint - Quiz One", "checkpoint-1", "0", "0", "0", "1", "RecapBoard"],
  ["L15", "Numeric Lists, Ranges & Slices", "numeric-lists", "2", "1", "0", "5", "none"],
  ["L16", "Copies & Tuples", "copies-tuples", "2", "1", "0", "4", "AliasVsCopy"],
  ["L17", "Conditional Tests", "if", "2", "1", "0", "4", "IfAnatomy"],
  ["L18", "If, Elif, Else", "branches", "2", "1", "0", "4", "none"],
  ["L19", "The Skills Lab", "skills-lab", "2", "1", "0", "1", "none"],
  ["L20", "If x Lists", "if-lists", "2", "1", "0", "3", "none"],
  ["L21", "Dictionaries - Connecting Pieces of Information", "dicts", "3", "1", "0", "2", "ListVsDict · DictViz"],
  ["L22", "Looping Through Dictionaries", "dict-loops", "2", "1", "0", "2", "none"],
  ["L23", "Nesting - Structures Inside Structures", "nesting", "2", "1", "0", "4", "NestSwitcher"],
  ["L24", "The Records Lab", "records-lab", "2", "1", "0", "2", "none"],
  ["L25", "Input & While Loops", "while", "1", "1", "0", "4", "InputJourney · WhileCycle"],
  ["L26", "Flags, Break & Continue", "loop-control", "2", "1", "0", "5", "none"],
  ["L27", "Functions I - Define & Call", "functions · args", "1", "1", "1", "9", "FunctionMachine · DefAnatomy · ArgumentMatcher"],
  ["L28", "Functions II - Return & Deliver", "returns · funcs2", "4", "2", "1", "19", "PizzaBuilder · ProfileBuilder"],
  ["L29", "Classes - Ahead of the Deck", "classes", "2", "1", "1", "22", "DogInstantiator · OdometerLab"],
];

const DECKMAP = [
  ["L1", "Welcome to Foundations of Computing", "App L1 (course-map)", "Four objectives and why-Python taught; matches deck"],
  ["L2", "What is Computing?", "App L2 (computing + pillars)", "IPO model and four pillars taught"],
  ["L3", "Understanding Data: Classification and Organization", "App L3 (data-types) + L2 (data)", "Format, time and nature classifications; DIKW ladder"],
  ["L4", "Introduction to Computing and Programming Foundations", "App L4 (why)", "PARTIAL - vibe-coding trap taught; Google/Meta rehiring, zettabyte enterprise IPO and the 10-30-60 scheme are missing (Finding F2)"],
  ["L5", "Data Classification and Introduction to Algorithms", "App L3 (data-types) + L5 (algorithm)", "Origin-based data (primary, secondary, metadata) taught in the data chapters; recipe and five-property wall taught in L5"],
  ["L6", "Hardware: The Physical Foundation of Computing", "App L6 (hardware)", "CPU, GPU, memory hierarchy and AlexNet taught"],
  ["L7", "Overview of Application Software and Programming Fundamentals", "App L7 (software)", "Interpreter vs compiler translator problem taught"],
  ["L8", "Introduction to Python Programming", "App L8 (python) + L10 (basics)", "SPLIT - Colab taught in L8; variables, naming rules, NameError and strings taught in L10; .ipynb mechanics only named in the L14 recap card (Finding F1)"],
  ["L9", "Overview of Computing Models and Data Classification", "App L9 (case-files)", "Knight Capital, Netflix, Zara and redlining anchors verified in the deck and taught"],
  ["L10", "Python Programming: Variables, Numbers, Strings, Comments, and Lists", "App L10 (basics)", "Arithmetic, the 0.30000000000000004 surprise, comments taught"],
  ["L11", "Introduction to Lists in Python", "App L11 (lists)", "Indexing, append, insert, del, pop, remove taught"],
  ["L12", "Organizing a List", "App L12 (list-organize)", "sort, sorted, reverse, len and index errors taught"],
  ["L13", "Working with Lists: Looping and Indentation", "App L13 (for-loops)", "For loops and the indentation law machine taught"],
  ["L14", "Overview of Computing Fundamentals (Quiz One)", "App L14 (checkpoint-1)", "Quiz syllabus, 60 MCQ format, 20 minutes, best-2-of-3 taught"],
  ["L15", "Working with Numeric Lists", "App L15 (numeric-lists)", "range, comprehensions, statistics and slices taught"],
  ["L16", "Working with Lists: Copies and Tuples", "App L16 (copies-tuples)", "Copy vs alias and immutable tuples taught"],
  ["L17", "Introduction to Conditional Tests", "App L17 (if)", "Comparisons, and/or, in/not-in taught"],
  ["L18", "If Statements", "App L18 (branches)", "if-else, elif ladder and independent ifs taught"],
  ["L19", "Python Programming Fundamentals (recap)", "App L19 (skills-lab)", "Recap plus shipment-inventory challenge (deck anchor verified)"],
  ["L20", "Using If Statements with Lists", "App L20 (if-lists)", "Special items, empty-list checks, multiple lists taught"],
  ["L21", "Introduction to Dictionaries in Python", "App L21 (dicts)", "Key-value pairs and safe lookups taught"],
  ["L22", "Looping Through a Dictionary", "App L22 (dict-loops)", "items, keys, sorted, set taught"],
  ["L23", "List of Dictionaries", "App L23 (nesting)", "List-of-dicts, dict-of-lists, dict-of-dicts taught"],
  ["L24", "Python Lists: Operations, Control Flow, and Data Manipulation", "App L24 (records-lab)", "Five-student records pipeline (deck anchors verified)"],
  ["L25", "User Input and While Loops", "App L25 (while)", "input(), int(), modulo parity taught"],
  ["L26", "User Input and While Loops (continuation)", "App L26 (loop-control)", "Flags, break, continue and list-moving loops taught"],
  ["L27", "Introduction to Functions in Python", "App L27 (functions + args)", "def, docstrings, positional and keyword arguments taught"],
  ["L28", "Second Lecture on Functions: Return Values", "App L28 (returns + funcs2)", "return, optional arguments, lists into functions taught"],
];

const PLAN = [
  ["1", "Extract and diff the new PDF", "Run pdftotext on the 34-lecture PDF; diff lecture-by-lecture against the current 28-lecture extraction to isolate what L30-L34 add"],
  ["2", "Extend the registry", "Append 5 rows to src/components/foc/lectures.ts (ids l30-l34, codes L30-L34, titles, blurbs, chapter keys)"],
  ["3", "Build the new chapters", "New section components in the house style - ReadStep narrative, StepsFlow workflow diagrams, runnable CodeBlock pattern, Quiz and Practice walls, Takeaways"],
  ["4", "Mount the chapters", "Import and render-map them in src/components/notes/FocApp.tsx (SECTION_COMPONENTS) and add nav items to the right GROUPS"],
  ["5", "Grow the exam bank", "Add questions to the matching group banks in src/components/notes/questions.ts (or a new ExamGroup if the PDF warrants one)"],
  ["6", "Bump the count libraries", "question-counts.ts foc literal; section-counts.ts foc 33 to 38 (or the final chapter count)"],
  ["7", "Regenerate the search corpus", "Run scripts/build-search-corpus.ts; verify chapter and question counts in search-corpus.json"],
  ["8", "Refresh course-info cards", "Update the L14 checkpoint syllabus card if quiz cutoffs move; hero badges re-derive automatically"],
  ["9", "Re-run the audit gates", "scripts/audit-foc-v2.ts and audit-foc-content.ts - all one-to-one maps must stay exact; 0 exam integrity defects"],
  ["10", "Lint and browser pass", "bun run lint plus an end-to-end browser check of every new chapter, machine and exam window"],
];

/* ================= BODY ================= */
const bodyChildren = [];

/* --- 1. Executive summary --- */
bodyChildren.push(h1("1. Executive Summary"));
bodyChildren.push(body([r("This report is the baseline audit of the "), bold("Foundations of Computing (FoC) shelf (Shelf 01)"), r(" of The Atlas, performed before the full 34-lecture course PDF is integrated. The audit covered every subsystem that carries FoC content: the lecture registry, the chapter components, the top navigation, the exam bank, the search corpus, the count libraries and the live rendered application. The purpose is to establish exactly what exists today, verify that it is internally correct, and prepare a verified foundation so that the upcoming word-level match against the 34-lecture PDF can start from a clean, trusted state.")]));
bodyChildren.push(body([r("The structural verdict is fully positive. The shelf carries "), bold("29 lectures (L1-L29) rendered as 33 chapters"), r(", and every hard-coded view of that content agrees exactly: the navigation menu, the component map and the rendered sections each match the registry one-to-one with no gaps, duplicates or orphans. The pen-paper exam bank holds "), bold("160 questions across 6 windows with zero integrity defects"), r(" (every answer index in range, every question explained, every output or code question carrying a model answer). The search corpus, the count libraries and the Atlas shelf card all quote the same numbers, and an end-to-end browser session confirmed the shelf, its machines, the Python Lab and the exam windows all work with a clean console.")]));
bodyChildren.push(body([r("Against the course deck that the shelf currently mirrors (the 244-page "), bold("Notes_261027_010112.pdf with 28 recorded lectures"), r("), the coverage is substantially complete, with three findings. Finding F2 (high priority): deck lecture 4 teaches why Google and Meta rehired after the AI layoffs, the enterprise IPO model at zettabyte scale and the 10-30-60 evaluation scheme, but the app L4 chapter teaches only the vibe-coding material; the rehiring story is absent from the entire shelf. Finding F1 (medium): the L8 chapter does not deliver the topics its own description promises (variables and the naming law, the NameError traceback, string methods, .ipynb mechanics) - they are taught in the L10 chapter instead, and .ipynb is only ever named in the L14 recap card. Finding F3 (low): four chapters (L4, L5, L7, L8) have no self-check quiz or practice wall. All three findings are cheap to fix and slot naturally into the 34-lecture integration pass. The delta between the current deck (28 recorded lectures) and the full course (34 lectures) is five lectures that must be built, mounted and wired end to end; Section 8 gives the ten-step integration workflow for exactly that.")]));

/* --- 2. Scope --- */
bodyChildren.push(h1("2. Scope, Sources and Method"));
bodyChildren.push(body([r("Scope. "), r("Shelf 01 only - Foundations of Computing. The other five shelves were not touched beyond confirming that no FoC dependency leaks into them. The audit examined: the lecture registry (src/components/foc/lectures.ts), the application shell (src/components/notes/FocApp.tsx, 1,035 lines), all 19 chapter component files (src/components/foc/FocParts1-9.tsx and src/components/notes/Part1-10.tsx, 10,455 lines combined), the exam bank (src/components/notes/questions.ts, 1,563 lines), the search corpus (src/lib/search-corpus.json), the count libraries (section-counts.ts, question-counts.ts, chapter-index.ts), the shelf hero and the Atlas subjects registry, and the repo's own prior audit artifact (scripts/foc-audit.json).")]));
bodyChildren.push(body([r("Sources. "), r("The reference deck is the PDF shipped inside the repository at upload/Notes_261027_010112.pdf (244 pages, 28 recorded lectures, verified by a fresh pdftotext extraction rather than by trusting the author's cached extraction). The registry header states the shelf mirrors this deck lecture-for-lecture, plus one ahead-of-deck row for Classes (L29).")]));
bodyChildren.push(body([r("Method. "), r("Four instruments were used. First, two purpose-built audit scripts (scripts/audit-foc-v2.ts and scripts/audit-foc-content.ts) re-derive every structural map from the source code and cross-check them pairwise. Second, a per-section content scan inventoried every quiz, practice wall, workflow diagram, code block, callout and custom interactive machine per chapter. Third, a keyword-coverage pass compared each deck lecture's vocabulary against its mapped app chapters - used as a signal for where to inspect manually, not as proof by itself, because the shelf deliberately rewords the deck into living notes rather than transcribing slides. Fourth, a browser session exercised the shelf end to end (hero sequence, chapter jump, Python Lab code execution, command palette, exam hub and one full exam window) with zero console errors. Every flagged item was then verified by hand in the source before being reported here.")]));

/* --- 3. Architecture --- */
bodyChildren.push(h1("3. Shelf Architecture Baseline"));
bodyChildren.push(body([r("The FoC shelf is a hybrid assembly, and knowing the exact seams matters because the 34-lecture integration has to touch each of them deliberately. The single source of truth is the registry "), bold("src/components/foc/lectures.ts"), r(": 29 FocLecture rows (id, number, code badge, title, blurb, chapters), where the chapters array holds the canonical section keys. The registry header documents that the command palette, the search corpus, the progress store and the SM-2 card deck all depend on those chapter keys staying identical - they are load-bearing identifiers, not display labels.")]));
bodyChildren.push(body([r("The shell is "), bold("src/components/notes/FocApp.tsx"), r(", mounted by the Atlas router at src/app/page.tsx under the hash route #/subject/foc. It owns three hard-coded views of the same registry: the GROUPS constant (six chapter groups - Orientation, Pillars & Cases, Python Core, Decisions & Data, Loops, Functions & OOP - which double as the six exam windows via the ExamGroup type), the SECTION_COMPONENTS record (chapter id to rendered component), and the lecture reader that renders exactly the slice a chosen lecture owns under a Foundations of Computing Lecture N band. The chapter bodies themselves are split across two folders: seventeen earlier-course sections in src/components/notes/Part1-10.tsx and fifteen later sections in src/components/foc/FocParts1-9.tsx.")]));
bodyChildren.push(body([r("Everything else derives from the registry or agrees with it by literal count: the hero (FocHero.tsx) renders its 29-row lecture sequence straight from FOC_LECTURES with no hard-coded numbers; the Atlas landing card and the count libraries carry the headline totals (33 sections, 160 questions) as plain literals that today match the real arrays; the search corpus (214 chapters, 459 questions across all shelves) carries the FoC slice with the same 33 chapter keys. The prior audit artifact in scripts/foc-audit.json reflects an older generation of this shelf and counts icon components as machines; it is retained for reference but superseded by this audit.")]));

/* --- 4. Structural verification --- */
bodyChildren.push(h1("4. Structural Verification Results"));
bodyChildren.push(body([r("Eight cross-checks were run programmatically against the live source files; all eight pass. Table 1 summarises them. The practical meaning is that today the FoC shelf has "), bold("no structural debt"), r(": adding five new lectures cannot break a hidden duplicate, an unreachable chapter or an unrendered section, because none exist.")]));
bodyChildren.push(tableTitle("Table 1: Structural cross-checks (all re-derived from source, not from memory)"));
bodyChildren.push(mkTable(["#", "Cross-check", "Result detail", "Verdict"], CHECKS, [6, 24, 58, 12]));
bodyChildren.push(body([r("The one-to-one property deserves emphasis. Registry ids, navigation items, component map keys and rendered section ids form four views of the same 33-element set. The audit scripts compute these sets independently - by importing the registry module and by regex-parsing the shell source - so a future edit that adds a chapter in one place but forgets another will fail loudly at the gate rather than silently at runtime.")]));

/* --- 5. Exam bank --- */
bodyChildren.push(h1("5. Exam Bank and Practice Audit"));
bodyChildren.push(body([r("The pen-paper exam bank contains "), bold("160 questions in six windows"), r(", one window per chapter group. Every question was validated programmatically: each MCQ has an answer index inside its options range; every write-the-output and short-answer question carries an answerText model answer; every code question carries a solution program; and every question - 160 of 160 - carries an explanation. Table 2 shows the distribution. At runtime the hub renders the same totals (160 QUESTIONS - 6 WINDOWS), and a window was opened live: countdown timer, question navigator, answer flow and scoring all functioned.")]));
bodyChildren.push(tableTitle("Table 2: Pen-paper exam windows (questions.ts, runtime-verified)"));
bodyChildren.push(mkTable(["Group", "Window title", "Chapter coverage", "Questions"], EXAM, [14, 18, 56, 12]));
bodyChildren.push(body([r("Inside the reading surface, the shelf carries "), bold("57 in-chapter Quiz concept checks, 20 Practice walls, 6 StepsFlow workflow diagrams, 112 runnable-pattern code blocks and 86 callouts"), r(" across the 33 chapters. Fifteen chapters running from L10 to L26 (excluding the L14 checkpoint) follow the full house pattern of quiz plus practice wall. The exceptions are concentrated in the earliest lectures and are recorded as Finding F3 below.")]));

/* --- 6. Findings --- */
bodyChildren.push(h1("6. Findings and Issues"));
bodyChildren.push(body([r("Three findings resulted from the audit, ordered by priority. Each lists the evidence, the impact and the recommended fix; all three are independent of the 34-lecture integration and can be fixed in the same working session.")]));
bodyChildren.push(h2("F2 (High) - Deck lecture 4 topics missing from the app L4 chapter"));
bodyChildren.push(body([r("The deck's Lecture 4 carries four distinct topics: the vibe-coding trap (deck mentions AI 24 times, vibe 3 times), why Google and Meta rehired after the AI layoffs (Google 5, Meta 1, layoff 1), the enterprise IPO model at zettabyte scale (zettabyte 1, IPO 4), and the grading scheme (10 percent participation, 30 percent quizzes as best-2-of-3 at 15 percent each, 60 percent offline final). The app's L4 chapter (WhySection in Part1.tsx, 11.7 KB of source) teaches the vibe-coding arc well - Day-1 versus Day-30 collapse, the iceberg, the architect principle, the Forbes proof of hiring - but a full-shelf search confirms "), bold("the Google/Meta rehiring story appears nowhere on the shelf"), r(", the zettabyte-scale enterprise IPO framing appears nowhere in the L4 chapter (zettabytes exist only as a data-scale aside in the L2 computing chapter), and the 10-30-60 scheme exists on the shelf only inside the L14 checkpoint chapter, not where L4 readers will meet it. The registry blurb for L4 promises all three missing pieces, so the reader-facing description over-promises. Recommended fix: extend WhySection with the rehiring proof cards, the enterprise-IPO-at-scale machine and the evaluation-scheme strip (or restate the blurb if the editorial intent is to keep those topics in L14), and re-sync the blurb to the final content.")]));
bodyChildren.push(h2("F1 (Medium) - L8 chapter does not deliver its promised topics"));
bodyChildren.push(body([r("The registry blurb for L8 (Python, First Contact) promises Google Colab, .ipynb notebooks, variables and their naming law, the NameError traceback and everyday string methods. The chapter itself (ProgrammingSection in Part4.tsx, 5.6 KB - the shortest content chapter on the shelf) teaches the problem-to-algorithm-to-code bridge, why Python, Guido van Rossum and a Colab feature grid - good content, but none of the variable, naming, NameError or string-methods material. That material genuinely exists on the shelf, but one lecture later: the L10 chapter (BasicsSection) teaches variables (19 mentions), the naming rules, NameError diagnosis and string methods. The .ipynb notebook mechanics, however, are only ever named in the L14 recap card - never taught anywhere. L8 is also one of the four chapters with no self-check. This is editorial drift rather than a content hole: the deck's L8-to-L10 span was split across two chapters, but the L8 row's description was never re-synced. Recommended fix: either move the naming-law and NameError machines into L8 where readers expect them (with the blurb left intact) or rewrite the L8 blurb to describe what the chapter actually teaches, and teach .ipynb notebook mechanics explicitly in whichever chapter owns Colab.")]));
bodyChildren.push(h2("F3 (Low) - Four chapters without any self-check"));
bodyChildren.push(body([r("Chapters L4 (why), L5 (algorithm), L7 (software) and L8 (python) contain no Quiz component and no Practice wall - the only content chapters without one (L14 is intentionally a recap-and-checkpoint lecture and is excluded from this criticism). The shelf's own README promises practice walls as a shelf-wide trait. L5 and L7 do carry interactive machines (the EvenOddFlow recipe machine and the F-D-I-O-E property wall; the InterpCompiler translator machine), so the gap is narrower than it looks, but a reader finishing those chapters gets no instant check. Recommended fix: add one two-to-three-question Quiz per chapter in the established style - natural candidates are a predict-the-property question for L5, an interpreter-or-compiler sort for L7, and a naming-law spot check for L8 and L4.")]));
bodyChildren.push(h2("F4 (Note) - Deck titles are unreliable; content mapping is authoritative"));
bodyChildren.push(body([r("The deck's printed lecture titles are notebook-export titles and frequently mismatch their content (deck L5 prints as a data-classification title while carrying the algorithms introduction and the five-property wall; deck L4 prints as a foundations title while carrying the AI-age material). The mapping in Section 7 was therefore verified by content anchors, not by titles. This matters for the 34-lecture integration: the new PDF's lecture titles should likewise be treated as hints and the mapping decided on content.")]));

/* --- 7. Deck mapping --- */
bodyChildren.push(h1("7. Deck Baseline and Lecture Mapping"));
bodyChildren.push(body([r("Table 3 maps all 28 recorded deck lectures to their app chapters, with the verification basis for each row. The deck ends at Functions (L28); the app's L29 (Classes) is explicitly ahead-of-deck, exactly as its registry title states, with 22 runnable code blocks and the DogInstantiator and OdometerLab machines. Content anchors were verified in the fresh PDF text for every row marked as verified; the PARTIAL and SPLIT rows correspond to Findings F2 and F1.")]));
bodyChildren.push(tableTitle("Table 3: Deck lecture to app chapter mapping (28 recorded lectures + app L29 ahead of deck)"));
bodyChildren.push(mkTable(["Deck", "Deck title (as printed)", "App mapping", "Verification"], DECKMAP, [8, 30, 22, 40]));

/* --- 8. Integration plan --- */
bodyChildren.push(h1("8. Integration Plan for the 34-Lecture PDF"));
bodyChildren.push(body([r("The course totals 34 lectures; the current deck carries 28 recorded ones and the app carries 29 rows. The delta is therefore "), bold("five new lectures to build and wire end to end"), r(" (their exact identity and numbering will follow the new PDF). Because every subsystem agrees one-to-one today, the integration is a clean extension with a well-defined workflow. The sequence runs: extract and diff the new PDF; extend the registry; build the chapter components in the house style; mount them; grow the exam bank; bump the count libraries; regenerate the search corpus; refresh the course-info cards; re-run the audit gates; lint and verify in the browser. Table 4 names the exact file touched at each step.")]));
bodyChildren.push(tableTitle("Table 4: Ten-step integration workflow (executed in order)"));
bodyChildren.push(mkTable(["Step", "Action", "Exact files and detail"], PLAN, [8, 24, 68]));
bodyChildren.push(body([r("Two constraints shape the plan. First, the chapter ids are load-bearing: the registry header warns that the command palette, search corpus, progress store and SM-2 deck depend on them staying identical, so new chapters get new stable ids and no existing id is ever renamed. Second, the three pre-existing findings should be resolved in the same pass - F1 and F2 while the relevant chapters are open, F3 as a sweep across the four quiet chapters - so that after integration the shelf is simultaneously complete to 34 lectures and free of known drift. The audit scripts from this session stay in scripts/ and serve as the acceptance gate for step 9.")]));

/* --- 9. Conclusion --- */
bodyChildren.push(h1("9. Conclusion and Next Steps"));
bodyChildren.push(body([r("The Foundations of Computing shelf is structurally sound, internally consistent and runtime-verified: 29 lectures, 33 chapters, 160 exam questions across 6 windows, one search corpus, zero integrity defects, zero console errors. Its gaps are narrow and precisely located: one high-priority content gap (deck L4's rehiring, zettabyte-IPO and grading-scheme material), one metadata drift (L8's description versus its chapter), and four chapters lacking self-checks. None of them blocks the integration.")]));
bodyChildren.push(body([r("Next steps, in order: first, fix F1, F2 and F3 in a short working session; second, receive the 34-lecture PDF and the bug list, run the Section 8 workflow to build lectures L30-L34 to the house standard; third, re-run the audit gates and the browser pass so the shelf exits the integration with the same clean bill of health it holds today. This report plus the two audit scripts constitute the baseline: every number quoted here is re-derivable from source in seconds, which is exactly the property that makes the word-level match against the new PDF trustworthy.")]));

/* --- Appendix --- */
bodyChildren.push(h1("Appendix A. Per-Lecture Content Matrix"));
bodyChildren.push(body([r("Table 5 inventories every lecture's chapters and interactive inventory as scanned from source. Quiz and Practice count the in-chapter concept checks and practice walls; Flow counts StepsFlow workflow diagrams; Code counts runnable-pattern code blocks; Machines lists the custom interactive components. Totals across the shelf: 57 quizzes, 20 practice walls, 6 flows, 112 code blocks, 86 callouts.")]));
bodyChildren.push(tableTitle("Table 5: Content inventory per lecture (29 rows, scanned from source)"));
bodyChildren.push(mkTable(
  ["Lec", "Title", "Chapter ids", "Q", "P", "F", "C", "Machines"],
  MATRIX, [6, 24, 18, 6, 6, 6, 6, 28]
));

/* ================= DOCUMENT ================= */
const pgSize = { width: 11906, height: 16838 };
const pgMargin = { top: 1440, bottom: 1440, left: 1701, right: 1417 };
const footerNum = () => new Footer({
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ children: [PageNumber.CURRENT], size: 18, color: "808080", font: { ascii: "Times New Roman" } })],
  })],
});
const headerTitle = () => new Header({
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "C8DDE2", space: 4 } },
    children: [new TextRun({ text: "The Atlas - FoC Shelf Audit (Baseline before the 34-Lecture PDF)", size: 16, color: "808080", font: { ascii: "Times New Roman" } })],
  })],
});

const doc = new Document({
  creator: "Atlas Audit",
  title: "Foundations of Computing Shelf Audit",
  styles: {
    default: {
      document: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimSun" }, size: 22, color: "000000" },
        paragraph: { spacing: { line: 312 } },
      },
      heading1: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimHei" }, size: 32, bold: true, color: BODY.primary },
        paragraph: { spacing: { before: 360, after: 160, line: 312 }, outlineLevel: 0 },
      },
      heading2: {
        run: { font: { ascii: "Times New Roman", eastAsia: "SimHei" }, size: 26, bold: true, color: BODY.primary },
        paragraph: { spacing: { before: 240, after: 120, line: 312 }, outlineLevel: 1 },
      },
    },
  },
  sections: [
    { /* cover */
      properties: { page: { size: pgSize, margin: { top: 0, bottom: 0, left: 0, right: 0 } } },
      children: buildCoverR1({
        title: "Foundations of Computing Shelf Audit",
        subtitle: "Structure, content and exam-bank verification - baseline before the 34-lecture PDF integration",
        englishLabel: "THE ATLAS - SHELF 01 AUDIT",
        metaLines: [
          "Shelf: 01 - Foundations of Computing (FoC)",
          "Repository: arpitnayan123-bot/Foundation-of-computing",
          "Deck audited: Notes_261027_010112.pdf (244 pages, 28 lectures)",
          "Date: 17 November 2026",
        ],
        footerLeft: "THE ATLAS - VISUAL REVISION NOTES",
        footerRight: "BASELINE AUDIT / 2026",
        palette: COVER,
      }),
    },
    { /* TOC - Roman */
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: pgSize, margin: pgMargin, pageNumbers: { start: 1, formatType: NumberFormat.UPPER_ROMAN } },
      },
      footers: { default: footerNum() },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER, spacing: { before: 480, after: 360 },
          children: [new TextRun({ text: "Table of Contents", bold: true, size: 32, font: { ascii: "Times New Roman" }, color: BODY.primary })],
        }),
        new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-2" }),
        new Paragraph({
          spacing: { before: 200 },
          children: [new TextRun({ text: "Note: This Table of Contents is generated via field codes. To ensure page number accuracy after editing, please right-click the TOC and select \"Update Field.\"", italics: true, size: 18, color: "888888", font: { ascii: "Times New Roman" } })],
        }),
        /* body follows in its own NEXT_PAGE section - no PageBreak here (double break = blank page) */
      ],
    },
    { /* body - Arabic */
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: pgSize, margin: pgMargin, pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL } },
      },
      headers: { default: headerTitle() },
      footers: { default: footerNum() },
      children: bodyChildren,
    },
  ],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("/home/z/my-project/download/FoC_Shelf_Audit_Report.docx", buf);
  console.log("written: FoC_Shelf_Audit_Report.docx", buf.length, "bytes");
});
