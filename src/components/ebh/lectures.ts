"use client";

/* ============================================================
   EBH — the official 34-lecture sequence (shelf 04).

   "Economic & Business History" (Prof. Manu Kanchan, IIT Jodhpur,
   School of Management & Entrepreneurship) rebuilt 1:1 against
   the official deck: Lecture 1 → Lecture 34, in order, no gaps.
   The transcripts in scripts/ebh_lectures/L01-L34.md are the sole
   content authority; the live 28-lecture registry that preceded
   this file was stale scaffolding and was never used to infer
   numbering, ordering or total.

   Five modules — the course's own count, stated in its own voice:
   L22 concludes Module 3; L28 opens Module 5; L34 reviews all five.
   There is no sixth module anywhere.

   Record field order is pinned: id, n, code, title, blurb, group,
   groupLabel, examStatus, chapters — the twins parser reads it.

   Fifty chapters — the ten lectures the rebuild brief names
   (L01, L04, L14, L19, L22, L25, L27, L28, L29, L34) carry 2-3
   chapters each so no lecture can ever be merged away again.
   ============================================================ */

export type EbhExamStatus = "quiz-1" | "major-exam" | null;

export interface EbhLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string; // sidebar + eyebrow short topic
  desc: string;
}

export interface EbhLecture {
  id: string; // "l1".."l34"
  n: number; // lecture number — matches the official deck
  code: string; // badge text: "L1".."L34"
  title: string; // official title, byte-exact (L13 carries the en dash)
  blurb: string;
  group: string; // "m1".."m5"
  groupLabel: string; // "Module N · <name>"
  examStatus: EbhExamStatus;
  chapters: EbhLectureChapter[];
}

/** The 34 official titles, byte-exact from the compendium bookmarks. */
export const EBH_TITLES: string[] = [
  "Introduction to Economic and Business History Course",
  "Introduction to Economic and Business History",
  "Introduction to Economic and Business History",
  "Introduction to Economic and Business History",
  "Overview of Economic and Business History in Independent India",
  "Economic and Business History: Society's Influence on Business Operations",
  "Overview of Economic and Business History: Interconnections Between Economics, Business, and Society",
  "Introduction to Agrarian Economies",
  "Overview of Economic and Business History: Society, Economics, and Technology",
  "Economic and Business History: Agrarian Economies - Land Ownership, Production, and Society Organization",
  "Economic and Business History - Module 2: Guilds and Medieval Trade Organizations",
  "Life Before Machines: Economic Conditions Before the Industrial Revolution",
  "Economic and Business History – The Beginning of Machine Usage in Production",
  "Overview of Economic and Business History Course Structure and Agrarian to Industrial Transition",
  "The Beginning of Machines Usage in Textile Production",
  "Steam Engine and Its Impact on Industrial Production",
  "Labour Movements During the Industrial Revolution",
  "Continuation of the Labour Movement During the Industrial Revolution in the UK (1824-1830)",
  "Fourth Live Session on Economic and Business History",
  "Overview of Political Action and Legislative Wins in the Labor Movement (1830s-1850s)",
  "Economic Systems Arising from the Industrial Revolution",
  "Economic Systems and Social-Cultural Impact of Industrial Revolution",
  "Evolution of Management Thought and Practices",
  "Overview of Industrial Revolution's Impact on Labor, Economics, and Society",
  "Evolution of Management Thought and Practices: From Taylor to Fayol",
  "Rise of Large Corporations in Business History",
  "Module 4: Evolution of Management Thought, Rise of Corporations, and Impact of World Wars on Businesses",
  "Introduction to Module 5: Indian Business History and Colonial Rule",
  "Overview of the Lecture on History of Business and Evolution of Management Thought",
  "Overview of Indian Business History During Colonial Rule (1813-1850s)",
  "The Role of Indian Entrepreneurs and Agency Houses During Colonial Rule",
  "Impact of World War I on Indian Businesses and the Swadeshi Movement",
  "Impact of World War II on Indian Businesses",
  "Economic and Business History - Module 5: Indian Business History",
];

export const EBH_LECTURES: EbhLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to Economic and Business History Course",
    blurb: "The course front door: Professor Manu Kanchan's three objectives — conceptual foundation, historical evolution, and the economics–business relationship — plus who the course is for.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "course-map", label: "The course map", desc: "What the course covers and how it thinks" },
      { id: "course-objectives", label: "Objectives & audience", desc: "The relationship lens and who the course serves" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "Introduction to Economic and Business History",
    blurb: "Scarcity opens the course: limited time, money and energy against unlimited wants — macro and micro, and the two branches' questions.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "scarcity-branches", label: "Scarcity & the two branches", desc: "Limited resources, unlimited wants, macro vs micro" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "Introduction to Economic and Business History",
    blurb: "Business defined — economic activity, profit motive, goods versus services — and the critical questions every firm must answer, from Apple's production map downward.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "firm-profit-motive", label: "The firm & the profit motive", desc: "Definitions, classification, and why businesses exist" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Introduction to Economic and Business History",
    blurb: "The first live session: the five modules and their span, history as change over time argued from evidence, and the sources — policy documents, debates, annual reports, court verdicts — history is built from.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "course-architecture", label: "Course architecture", desc: "The five modules and their spans, from the deck's own voice" },
      { id: "lens-definitions", label: "The three lenses defined", desc: "Economics, business, history — and the two histories" },
      { id: "evidence-sources", label: "Evidence & sources", desc: "What historians actually read, and how change is timed" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "Overview of Economic and Business History in Independent India",
    blurb: "Economy → business through the License Raj: IPR 1948 and 1956, the Scooters' Control Order 1960, and Bajaj Auto's road from Piaggio collaboration to Hamara Bajaj.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "license-raj-bajaj", label: "License Raj & Bajaj Auto", desc: "Licenses, schedules, and the scooter case study" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Economic and Business History: Society's Influence on Business Operations",
    blurb: "Society → business: why no firm sells the same product everywhere — McAloo Tikki, Netflix in regional languages, and the Cadbury ad that swapped who plays and who watches.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "society-business", label: "Society → business", desc: "Culture, family structure, and the products they write" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Overview of Economic and Business History: Interconnections Between Economics, Business, and Society",
    blurb: "Business → society: the weekend was built, not found — 8-hour segments, a Jewish cotton mill's five-day week in 1908, Ford in 1926, the Fair Labor Standards Act in 1938.",
    group: "m1",
    groupLabel: "Module 1 · The Lens",
    examStatus: null,
    chapters: [
      { id: "business-society-weekend", label: "Business → society: the weekend", desc: "Working classes, crises, and the invention of time off" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Introduction to Agrarian Economies",
    blurb: "Module Two opens: most people live off the land — agriculture's GDP share from 70-80% in India circa 1800 to under 1% in the UK today, seasons as the calendar, land as the asset.",
    group: "m2",
    groupLabel: "Module 2 · Early Systems",
    examStatus: null,
    chapters: [
      { id: "agrarian-basics", label: "Agrarian economies", desc: "GDP shares, seasons, family farms, and Salem 1953" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Overview of Economic and Business History: Society, Economics, and Technology",
    blurb: "A live-session scan of society, economics and technology together: Ford's assembly line, the 2008 crisis, Netflix's pivot — read through PESTLE.",
    group: "m2",
    groupLabel: "Module 2 · Early Systems",
    examStatus: null,
    chapters: [
      { id: "econ-tech-recap", label: "Economies & technology", desc: "Ford to Netflix, scanned with PESTLE" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Economic and Business History: Agrarian Economies - Land Ownership, Production, and Society Organization",
    blurb: "Who owned, who decided, how it was organised: the feudal triangle in Europe — king, lords, serfs — and the zamindari system the colonial state ran in India from the 1700s to 1947.",
    group: "m2",
    groupLabel: "Module 2 · Early Systems",
    examStatus: null,
    chapters: [
      { id: "feudal-zamindari", label: "Feudal Europe & the zamindari", desc: "Land ownership on two continents" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Economic and Business History - Module 2: Guilds and Medieval Trade Organizations",
    blurb: "The guild ladder — apprentice, journeyman, master — as quality control, price regulator, training system and city court, centuries before machines.",
    group: "m2",
    groupLabel: "Module 2 · Early Systems",
    examStatus: null,
    chapters: [
      { id: "guild-ladder", label: "The guild ladder", desc: "Charters, tiers, regulatory powers, and the drawbacks" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Life Before Machines: Economic Conditions Before the Industrial Revolution",
    blurb: "The countryside is already reorganising before the machines: enclosures fence the fields, seed drills reorder them, and the putting-out system carries work into cottages.",
    group: "m2",
    groupLabel: "Module 2 · Early Systems",
    examStatus: null,
    chapters: [
      { id: "life-before-machines", label: "Life before machines", desc: "Enclosures, agricultural revolution, putting-out" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Economic and Business History – The Beginning of Machine Usage in Production",
    blurb: "Why machines, why then: population grows, trade quickens, muscle hits its ceiling — the flying shuttle and the Spinning Jenny answer, and the mobs answer back.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "shuttle-jenny", label: "The shuttle & the jenny", desc: "The thread bottleneck and the first machines" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Overview of Economic and Business History Course Structure and Agrarian to Industrial Transition",
    blurb: "The live session that carries the Quiz One specification — quizzes 40%, best two of three at 20% each, Quiz 1 on September 27 — then the full agrarian-to-industrial bridge, from guilds to the water frame at 1768.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: "quiz-1",
    chapters: [
      { id: "quiz-one-scheme", label: "Course structure & Quiz One", desc: "The evaluation scheme, exactly as stated" },
      { id: "agrarian-guilds", label: "Agrarian & guild foundations", desc: "Land, stratification, and guild regulation" },
      { id: "trade-roads-industry", label: "Trade routes into industry", desc: "Enclosures, putting-out, and the 1760s convergence" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "The Beginning of Machines Usage in Textile Production",
    blurb: "Arkwright's water frame moves the machine out of the cottage: the 1769 patent, Cromford Mill, a cascade of mills — and the working class takes shape around the factory bell.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "water-frame-factory", label: "The water frame", desc: "Patents, Cromford, and the birth of the factory" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Steam Engine and Its Impact on Industrial Production",
    blurb: "Watt's engine frees the mill from the river: factories relocate to Manchester, coal replaces water, and Cottonopolis becomes the first industrial city.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "steam-cottonopolis", label: "Steam & Cottonopolis", desc: "From riverbanks to the first industrial city" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "Labour Movements During the Industrial Revolution",
    blurb: "Phase one (1760s-1820s): twelve-hour days, child labour and unsafe mills breed resistance — friendly societies, Ned Ludd's frames, the Combination Acts, and Peterloo's 18 dead.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "labor-phase-one", label: "Labour movement — phase one", desc: "Conditions, unions, Luddites, Peterloo" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Continuation of the Labour Movement During the Industrial Revolution in the UK (1824-1830)",
    blurb: "Phase two: Place and Hume repeal five centuries of bans in 1824, the strike wave rolls — and the 1825 Act hands back a half-freedom, with 18-20 dead at Peterloo remembered.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "labor-phase-two", label: "Labour movement — phase two", desc: "1824 repeal, the strike wave, the 1825 Act" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Fourth Live Session on Economic and Business History",
    blurb: "The fourth live session in full — machines recapped, empire and mercantilism explained, and both labour phases retold: a whole review lecture, never again one misfiled chapter.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "machines-recap-live", label: "Machines, recapped live", desc: "Shuttle to steam, in one pass" },
      { id: "empire-mercantilism", label: "Empire & mercantilism", desc: "Colonies, charters, and the navigation logic" },
      { id: "labor-phases-recap", label: "The labour phases, recapped", desc: "From secret societies to the 1825 Act" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Overview of Political Action and Legislative Wins in the Labor Movement (1830s-1850s)",
    blurb: "Phase three: Doherty's national union, Owen's Grand National Consolidated Trades Union, the Tolpuddle Martyrs — then the Factory Acts, the Ten Hours Act and the Chartists.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "labor-phase-three", label: "Political action & legislative wins", desc: "Unions, Tolpuddle, the Factory Acts, Chartists" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Economic Systems Arising from the Industrial Revolution",
    blurb: "The revolution mints three answers to one question — who should own the means of production: Adam Smith's markets, Marx and Engels' class struggle, and the planned economies between.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "economic-systems", label: "Capitalism, socialism, communism", desc: "Three systems from one question" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Economic Systems and Social-Cultural Impact of Industrial Revolution",
    blurb: "Pros, cons and sector-fit for each system — then the revolution's human ledger: cities swelling, classes forming, women's roles shifting, time itself standardised. This lecture concludes Module 3.",
    group: "m3",
    groupLabel: "Module 3 · The Machine Age",
    examStatus: null,
    chapters: [
      { id: "systems-compared", label: "Systems compared", desc: "Pros, cons, and sector-system fit" },
      { id: "social-cultural-impact", label: "The social-cultural ledger", desc: "Cities, classes, women, time — and Module 3 closes" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Evolution of Management Thought and Practices",
    blurb: "Module Four begins at the shop floor: Adam Smith's pin factory, Taylor's time-and-motion studies, Schmidt's 12.5-to-47 tons of pig iron — and the human cost of the stopwatch.",
    group: "m4",
    groupLabel: "Module 4 · The Corporation",
    examStatus: null,
    chapters: [
      { id: "taylor-scientific", label: "Taylor's scientific management", desc: "Pin factory, time studies, pig iron" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Overview of Industrial Revolution's Impact on Labor, Economics, and Society",
    blurb: "The live-session sweep: unionisation attempts, the Factory Acts, global trade behind the reforms, mixed systems in practice — one connecting thread through the revolution's impact.",
    group: "m4",
    groupLabel: "Module 4 · The Corporation",
    examStatus: null,
    chapters: [
      { id: "ir-impact-recap", label: "The impact recap", desc: "Unions, reforms, systems — one thread" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "Evolution of Management Thought and Practices: From Taylor to Fayol",
    blurb: "Fayol flips the view to the executive desk: six business activities, five functions (POTCC), fourteen principles — and the Taylor-vs-Fayol ledger that separates task from organisation.",
    group: "m4",
    groupLabel: "Module 4 · The Corporation",
    examStatus: null,
    chapters: [
      { id: "taylorism-review", label: "Taylorism, reviewed", desc: "The shop-floor theory, one more time" },
      { id: "fayol-framework", label: "The Fayol framework", desc: "6 activities · 5 functions · 14 principles" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "Rise of Large Corporations in Business History",
    blurb: "Four forces build the modern firm: railroads and telegraph, mass production, the joint-stock corporation, and strategic consolidation — with Foyol's administration and Raurkela's steel plants on the Indian side.",
    group: "m4",
    groupLabel: "Module 4 · The Corporation",
    examStatus: null,
    chapters: [
      { id: "large-corporations", label: "The rise of large corporations", desc: "Railroads, Ford, joint-stock, managerial revolution" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "Module 4: Evolution of Management Thought, Rise of Corporations, and Impact of World Wars on Businesses",
    blurb: "Two wars redraw the rules: state capitalism, war industries from Renault and Ford to DuPont, IBM and Coca-Cola, India's wartime rise — and America's emergence as a superpower with decolonization behind it.",
    group: "m4",
    groupLabel: "Module 4 · The Corporation",
    examStatus: null,
    chapters: [
      { id: "wars-context", label: "The world wars in context", desc: "Timelines, alliances, and state capitalism's birth" },
      { id: "war-industries", label: "War industries & state capitalism", desc: "Renault, Ford, DuPont, IG Farben, IBM, Coca-Cola" },
      { id: "india-superpower", label: "India's rise & the American century", desc: "Wartime India, decolonization, the superpower ledger" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Introduction to Module 5: Indian Business History and Colonial Rule",
    blurb: "Module 5 — the final module — opens: the East India Company's charters of 1600 and 1661, their slow erosion through 1813, and the Indian intermediaries, financiers and shipbuilders working in between.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "eic-charters", label: "The East India Company charters", desc: "1600, 1661, and the three phases of erosion" },
      { id: "indian-intermediaries", label: "Intermediaries, financiers, traders", desc: "The roles Indian entrepreneurs played" },
      { id: "turning-point-1813", label: "1813 — the turning point", desc: "Trade monopoly ends; the next phase opens" },
    ],
  },
  {
    id: "l29",
    n: 29,
    code: "L29",
    title: "Overview of the Lecture on History of Business and Evolution of Management Thought",
    blurb: "The arc recapped from the summit: division of labour to Taylor to Foyol to the large corporation, then the world wars' effects on developing countries and India — Drucker's knowledge workers included.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "management-evolution-recap", label: "Management thought, recapped", desc: "Division of labour to Drucker, in one pass" },
      { id: "wars-india-recap", label: "The wars & India, recapped", desc: "WWI, WWII, and the developing world" },
    ],
  },
  {
    id: "l30",
    n: 30,
    code: "L30",
    title: "Overview of Indian Business History During Colonial Rule (1813-1850s)",
    blurb: "The colonial export ledger: 45-50% of Indian exports in three raw commodities — indigo down from 27% to 6.1%, raw cotton, opium — and the Palmer British agency houses that ran the system until their 1830s collapse.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "colonial-commodities", label: "Colonial rule & commodity exports", desc: "Indigo, cotton, opium — and the agency houses" },
    ],
  },
  {
    id: "l31",
    n: 31,
    code: "L31",
    title: "The Role of Indian Entrepreneurs and Agency Houses During Colonial Rule",
    blurb: "The Indian side of the ledger: Sir Jamshedji Gaikwad's opium warehouses, the Wadia dockyards, Carr Tagore's indigo, Dwarkanath's banks — then the mill founders from 1854, Tata's three mills, Godrej's 1890s locks, Walchandnagar in 1903.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "agency-entrepreneurs", label: "Entrepreneurs & agency houses", desc: "Opium, ships, indigo, mills — the founders' ledger" },
    ],
  },
  {
    id: "l32",
    n: 32,
    code: "L32",
    title: "Impact of World War I on Indian Businesses and the Swadeshi Movement",
    blurb: "War as industrial incubator: TISCO's steel rails, the textile boom, British procurement reaching 90% of TISCO's output — and the Swadeshi movement, born of Bengal's 1905 partition, funding it all.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "wwi-swadeshi", label: "WWI & the Swadeshi movement", desc: "Procurement, industry, and the indigenous turn" },
    ],
  },
  {
    id: "l33",
    n: 33,
    code: "L33",
    title: "Impact of World War II on Indian Businesses",
    blurb: "The second war diversifies Indian industry into chemicals, engineering and defense — while the 1943 Bengal Famine and inflation price the cost, and the nationalist capitalist class consolidates.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: null,
    chapters: [
      { id: "wwii-famine", label: "WWII, expansion & the famine", desc: "Diversification, supply diversion, consolidation" },
    ],
  },
  {
    id: "l34",
    n: 34,
    code: "L34",
    title: "Economic and Business History - Module 5: Indian Business History",
    blurb: "The finale: all five modules reviewed from the 1600s colonial span to the Bombay Plan, the major examination specified — 60%, late November into December, closed book, pen and paper only — and post-1945 management theory ruled out of scope.",
    group: "m5",
    groupLabel: "Module 5 · Indian Business",
    examStatus: "major-exam",
    chapters: [
      { id: "module5-review-colonial", label: "Module 5 reviewed — the colonial span", desc: "EIC, entrepreneurs, and the three trades" },
      { id: "agency-bombay-plan", label: "Agency houses to the Bombay Plan", desc: "Tagore, Jijibhoy, the mills, the wars, the plan" },
      { id: "course-review-major-exam", label: "The course in review — & the major exam", desc: "All five modules and the examination rules" },
    ],
  },
];

export const EBH_DEFAULT_LECTURE = EBH_LECTURES[0].id;

/** The five modules, in order — the course's own five, never a sixth. */
export const EBH_MODULES: { id: string; label: string; start: number; end: number }[] = [
  { id: "m1", label: "Module 1 · The Lens", start: 1, end: 7 },
  { id: "m2", label: "Module 2 · Early Systems", start: 8, end: 12 },
  { id: "m3", label: "Module 3 · The Machine Age", start: 13, end: 22 },
  { id: "m4", label: "Module 4 · The Corporation", start: 23, end: 27 },
  { id: "m5", label: "Module 5 · Indian Business", start: 28, end: 34 },
];

/** Every chapter id in reading order — the full chapter shelf. */
export const EBH_ALL_CHAPTER_IDS = EBH_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));

export function lectureOfChapter(chapterId: string): EbhLecture | null {
  return EBH_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): EbhLecture | null {
  return EBH_LECTURES.find((l) => l.id === id) ?? null;
}

export function moduleOfLecture(l: EbhLecture): { id: string; label: string; index: number } {
  const index = EBH_MODULES.findIndex((m) => m.start <= l.n && l.n <= m.end);
  if (index === -1) throw new Error(`lecture ${l.code} (${l.n}) falls outside all five modules`);
  const m = EBH_MODULES[index];
  return { id: m.id, label: m.label, index: index + 1 };
}

/**
 * The single eyebrow scheme: `Module <N> · Lecture <NN> · <short topic>`,
 * derived from the registry — groupLabel supplies the module, n the number,
 * the chapter label the short topic. No chapter may hard-code an eyebrow.
 */
export function eyebrowFor(chapterId: string): string {
  const l = lectureOfChapter(chapterId);
  if (!l) throw new Error(`unknown chapter id "${chapterId}" — no registry lecture owns it`);
  const c = l.chapters.find((x) => x.id === chapterId);
  if (!c) throw new Error(`unknown chapter id "${chapterId}" — registry drift`);
  const mod = moduleOfLecture(l);
  return `Module ${mod.index} · Lecture ${String(l.n).padStart(2, "0")} · ${c.label}`;
}
