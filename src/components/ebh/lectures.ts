"use client";

/* ============================================================
   EBH — the lecture sequence (shelf 04).

   "Economic & Business History" is one continuous course: the
   lens (economics · business · history · rules & players), the
   three currents flowing into the firm, the pre-industrial
   world, and the machine age. The reader picks a lecture in the
   hero and the page below renders exactly that lecture's
   chapter. Editing this one table re-maps the whole reader.

   Section ids / labels / descs stay byte-identical to the old
   single-scroll page — the search corpus, the ⌘K palette, the
   progress store and the SM-2 cards all key off them.
   ============================================================ */

export interface EbhLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface EbhLecture {
  id: string; // "l1".."l18"
  n: number; // lecture number
  code: string; // badge text: "L1".."L18"
  title: string;
  blurb: string;
  chapters: EbhLectureChapter[];
}

export const EBH_LECTURES: EbhLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "What Is Economics? Scarcity & the Two Branches",
    blurb:
      "Scarcity is the door: wants outrun resources, so every economy must choose. Micro and macro — the two branches — and the choices that follow.",
    chapters: [
      { id: "economics", label: "What is economics?", desc: "Scarcity, choices, and the two branches" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "What Is Business? The Firm & the Profit Motive",
    blurb:
      "Business is economic activity organised for profit — firms as the players who take the risks. Why firms exist at all, and what profit really pays for.",
    chapters: [
      { id: "business", label: "What is business?", desc: "Economic activity, profit, and why firms exist" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "What Is History? Change Over Time, Through Evidence",
    blurb:
      "History is change over time — argued from evidence, never memorised. How to read a date as the answer to a question: why then, and why there?",
    chapters: [
      { id: "history", label: "What is history?", desc: "Change over time — through evidence" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "Rules & Players: The Frame of the Course",
    blurb:
      "The two-by-two that names the course: economic history follows the rules, business history follows the players. Every later lecture hangs on this frame.",
    chapters: [
      { id: "rules-players", label: "Rules & players", desc: "The two-by-two that names this course" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "The License Raj: When the Economy Wrote the Rules",
    blurb:
      "India after independence: licences, quotas and IPR 1956 — the rules telling industry what it could build, where, and how much.",
    chapters: [
      { id: "license-raj", label: "Economy → business", desc: "The License Raj and IPR 1956" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Case Study: Bajaj Auto on Two Tracks",
    blurb:
      "One company, two tracks: the economy's story of policy and the scooter's story of queues and waiting lists — running side by side.",
    chapters: [
      { id: "bajaj", label: "Case: Bajaj Auto", desc: "Two tracks — the economy and the scooter" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Society → Business: McDonald's & Cadbury",
    blurb:
      "Society writes the brief: the McAloo Tikki priced for the day's pocket, Cadbury ads that sell celebration — culture flowing into products.",
    chapters: [
      { id: "society-business", label: "Society → business", desc: "McAloo Tikki and the Cadbury ads" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Business → Society: The Invention of the Weekend",
    blurb:
      "The weekend was built, not found: 1886–1938, factories, unions and the long argument that won the second day off.",
    chapters: [
      { id: "weekend", label: "Business → society", desc: "The story of the weekend, 1886–1938" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Economies & Technology: Ford to Netflix",
    blurb:
      "Ford's assembly line, 2008's crash course, Netflix's pivot — technology and the economy reshaping each other, scanned with PESTLE.",
    chapters: [
      { id: "business-econ-tech", label: "Economies & technology", desc: "Ford, 2008, Netflix, PESTLE" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Agrarian Economies: Land, Lords & Zamindars",
    blurb:
      "Before factories, the year was a harvest: seasons set the calendar, land was wealth, and lords and zamindars collected.",
    chapters: [
      { id: "agrarian", label: "Agrarian economies", desc: "Seasons, land, lords and zamindars" },
    ],
  },
  {
    id: "l11",
    n: 11,
    code: "L11",
    title: "Guild Systems: The Ladder to Mastery",
    blurb:
      "The guild ladder — apprentice, journeyman, master — as quality control, training system and city gate, centuries before machines.",
    chapters: [
      { id: "guilds", label: "Guild systems", desc: "Apprentice, journeyman, master" },
    ],
  },
  {
    id: "l12",
    n: 12,
    code: "L12",
    title: "Trade Routes & the Commercial Revolution",
    blurb:
      "The Silk Road speedometer: months per mile — then bills of exchange and banking quicken trade, and the Commercial Revolution picks up speed.",
    chapters: [
      { id: "trade-routes", label: "Trade routes", desc: "Silk Road speeds, the Commercial Revolution" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Life Before the Machines",
    blurb:
      "Enclosures fence the fields, seed drills reorder them, and the putting-out system carries work into cottages — the countryside already reorganising before steam.",
    chapters: [
      { id: "life-before", label: "Life before machines", desc: "Enclosures, seed drills, putting-out" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Why Machines, Why Then: The Thread Bottleneck",
    blurb:
      "Population grows, trade quickens — and thread can't keep up. The bottleneck that made Britain beg for a machine.",
    chapters: [
      { id: "why-machines", label: "Why machines?", desc: "Population, trade, and the thread bottleneck" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "The Textile Machines & the Mobs",
    blurb:
      "Flying shuttle, Spinning Jenny, water frame — each machine breaks the bottleneck and raises a mob; the Luddites answer in the dark.",
    chapters: [
      { id: "textile-machines", label: "Textile machines", desc: "Shuttle, jenny, water frame — and the mobs" },
    ],
  },
  {
    id: "l16",
    n: 16,
    code: "L16",
    title: "Steam & Cottonopolis",
    blurb:
      "Watt's engine frees the mill from the river, and Manchester's mills count themselves up — Cottonopolis, the first industrial city.",
    chapters: [
      { id: "steam-cottonopolis", label: "Steam & Cottonopolis", desc: "Watt's liberation, Manchester's mills" },
    ],
  },
  {
    id: "l17",
    n: 17,
    code: "L17",
    title: "The Labor Movement: Luddites to the 1825 Act",
    blurb:
      "Labour organises its answer: Luddite frames, Peterloo's charge and the 1825 Act — the long fight over who the machine age serves.",
    chapters: [
      { id: "labor-movement", label: "The labor movement", desc: "Luddites, Peterloo, and the 1825 Act" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "Empire & Mercantilism",
    blurb:
      "Chartered companies, colonies as suppliers of raw material, and British ships carrying the system — empire as economic architecture.",
    chapters: [
      { id: "empire", label: "Empire & mercantilism", desc: "Companies, colonies, British ships" },
    ],
  },
];

export const EBH_DEFAULT_LECTURE = EBH_LECTURES[0].id;

export function lectureOfChapter(chapterId: string): EbhLecture | null {
  return EBH_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterId)) ?? null;
}

export function lectureById(id: string): EbhLecture | null {
  return EBH_LECTURES.find((l) => l.id === id) ?? null;
}

/** Every chapter id in reading order — the full chapter shelf. */
export const EBH_ALL_CHAPTER_IDS = EBH_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
