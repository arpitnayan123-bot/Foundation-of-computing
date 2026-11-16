"use client";

/* ============================================================
   EBH — the lecture sequence (shelf 04).

   "Economic & Business History" is one continuous course, now
   mapped 1:1 to the official lecture deck (Prof. Manu Kanchan,
   IIT Jodhpur): Lecture 1 → Lecture 28, in order, no gaps.
   Each lecture opens with an "Economic & Business History
   Lecture N" band and renders exactly the chapters it owns.
   Editing this one table re-maps the whole reader.

   Section ids / labels / descs stay byte-identical wherever a
   chapter already existed — the search corpus, the ⌘K palette,
   the progress store and the SM-2 cards all key off them.
   ============================================================ */

export interface EbhLectureChapter {
  id: string; // the rendered <Section id> — also the ⌘K / flash-jump key
  label: string;
  desc: string;
}

export interface EbhLecture {
  id: string; // "l1".."l28"
  n: number; // lecture number — matches the official deck
  code: string; // badge text: "L1".."L28"
  title: string;
  blurb: string;
  chapters: EbhLectureChapter[];
}

export const EBH_LECTURES: EbhLecture[] = [
  {
    id: "l1",
    n: 1,
    code: "L1",
    title: "Introduction to the Course",
    blurb:
      "The course map: three objectives (conceptual foundation, historical evolution, the economics–business relationship) and the five modules ahead.",
    chapters: [
      { id: "course-intro", label: "The course map", desc: "Objectives, audience, and the five modules" },
    ],
  },
  {
    id: "l2",
    n: 2,
    code: "L2",
    title: "What Is Economics? Scarcity & the Two Branches",
    blurb:
      "Scarcity is the door: wants outrun resources, so every economy must choose. Micro and macro — the two branches — and the choices that follow.",
    chapters: [
      { id: "economics", label: "What is economics?", desc: "Scarcity, choices, and the two branches" },
    ],
  },
  {
    id: "l3",
    n: 3,
    code: "L3",
    title: "What Is Business? The Firm & the Profit Motive",
    blurb:
      "Business is economic activity organised for profit — firms as the players who take the risks. Why firms exist at all, and what profit really pays for.",
    chapters: [
      { id: "business", label: "What is business?", desc: "Economic activity, profit, and why firms exist" },
    ],
  },
  {
    id: "l4",
    n: 4,
    code: "L4",
    title: "What Is History? Rules & Players, Modules & Sources",
    blurb:
      "The first live session: history as change over time argued from evidence — and the rules-vs-players frame plus the five modules that organise everything ahead.",
    chapters: [
      { id: "history", label: "What is history?", desc: "Change over time — through evidence" },
      { id: "rules-players", label: "Rules & players", desc: "The two-by-two that names this course" },
    ],
  },
  {
    id: "l5",
    n: 5,
    code: "L5",
    title: "The License Raj & the Bajaj Auto Case",
    blurb:
      "India after independence: licences, quotas and IPR 1956 — the rules telling industry what it could build, where, and how much. Then Bajaj Auto runs the gauntlet.",
    chapters: [
      { id: "license-raj", label: "Economy → business", desc: "The License Raj and IPR 1956" },
      { id: "bajaj", label: "Case: Bajaj Auto", desc: "Two tracks — the economy and the scooter" },
    ],
  },
  {
    id: "l6",
    n: 6,
    code: "L6",
    title: "Society → Business: McDonald's & Cadbury",
    blurb:
      "Society writes the brief: the McAloo Tikki priced for the day's pocket, Cadbury ads that sell celebration — culture flowing into products.",
    chapters: [
      { id: "society-business", label: "Society → business", desc: "McAloo Tikki and the Cadbury ads" },
    ],
  },
  {
    id: "l7",
    n: 7,
    code: "L7",
    title: "Business → Society: The Invention of the Weekend",
    blurb:
      "The weekend was built, not found: 1886–1938, factories, unions and the long argument that won the second day off.",
    chapters: [
      { id: "weekend", label: "Business → society", desc: "The story of the weekend, 1886–1938" },
    ],
  },
  {
    id: "l8",
    n: 8,
    code: "L8",
    title: "Agrarian Economies: Land, Lords & Zamindars",
    blurb:
      "Module Two opens: before factories, the year was a harvest — seasons set the calendar, land was wealth, and lords and zamindars collected.",
    chapters: [
      { id: "agrarian", label: "Agrarian economies", desc: "Seasons, land, lords and zamindars" },
    ],
  },
  {
    id: "l9",
    n: 9,
    code: "L9",
    title: "Society, Economics & Technology: Ford to Netflix",
    blurb:
      "Module One's recap through technology's lens: Ford's assembly line, 2008's crash course, Netflix's pivot — scanned with PESTLE.",
    chapters: [
      { id: "business-econ-tech", label: "Economies & technology", desc: "Ford, 2008, Netflix, PESTLE" },
    ],
  },
  {
    id: "l10",
    n: 10,
    code: "L10",
    title: "Land Ownership: Feudal Europe & the Zamindari",
    blurb:
      "Three questions organise the agrarian world — who owned, who decided, how was it organised — answered by the feudal model and the colonial zamindari.",
    chapters: [
      { id: "feudal-zamindari", label: "Land ownership", desc: "Feudal Europe vs the zamindari system" },
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
    title: "Life Before Machines",
    blurb:
      "Enclosures fence the fields, seed drills reorder them, and the putting-out system carries work into cottages — the countryside already reorganising before steam.",
    chapters: [
      { id: "life-before", label: "Life before machines", desc: "Enclosures, seed drills, putting-out" },
    ],
  },
  {
    id: "l13",
    n: 13,
    code: "L13",
    title: "Why Machines, Why Then — Shuttle & Jenny",
    blurb:
      "Population grows, trade quickens, muscle hits its ceiling — the flying shuttle and the Spinning Jenny answer, and the mobs answer back.",
    chapters: [
      { id: "why-machines", label: "Why machines?", desc: "Population, trade, and the thread bottleneck" },
      { id: "textile-machines", label: "Shuttle & Jenny", desc: "Kay 1733, Hargreaves 1764 — and the mobs" },
    ],
  },
  {
    id: "l14",
    n: 14,
    code: "L14",
    title: "Recap: Trade Routes & the Road to Industry",
    blurb:
      "The live-session recap: Silk Road speeds, the Commercial Revolution, and every development that paved the road into the machine age.",
    chapters: [
      { id: "trade-routes", label: "Trade routes", desc: "Silk Road speeds, the Commercial Revolution" },
    ],
  },
  {
    id: "l15",
    n: 15,
    code: "L15",
    title: "The Water Frame & the Birth of the Factory",
    blurb:
      "Arkwright's water frame moves the machine out of the cottage: patents, Cromford Mill, a cascade of mills — and the working class takes shape.",
    chapters: [
      { id: "water-frame", label: "The water frame", desc: "Arkwright, patents, and the factory system" },
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
    title: "The Labour Movement: Phase One (1760s–1820s)",
    blurb:
      "Twelve-hour days, child labour and unsafe mills breed resistance: Ned Ludd's frames, the Combination Acts, and Peterloo's charge.",
    chapters: [
      { id: "labor-movement", label: "Phase One", desc: "Conditions, Luddites, 1799 Acts, Peterloo" },
    ],
  },
  {
    id: "l18",
    n: 18,
    code: "L18",
    title: "The Labour Movement: Phase Two (1824–1830)",
    blurb:
      "Place and Hume repeal 500 years of bans, the strike wave rolls — and the 1825 Act hands back a half-freedom. Victory and defeat in one breath.",
    chapters: [
      { id: "labor-phase2", label: "Phase Two", desc: "1824 repeal, the strike wave, the 1825 Act" },
    ],
  },
  {
    id: "l19",
    n: 19,
    code: "L19",
    title: "Empire & Mercantilism: the Revolution Goes Global",
    blurb:
      "Chartered companies, colonies as suppliers of raw material, and British ships carrying the system — empire as economic architecture.",
    chapters: [
      { id: "empire", label: "Empire & mercantilism", desc: "Companies, colonies, British ships" },
    ],
  },
  {
    id: "l20",
    n: 20,
    code: "L20",
    title: "Political Action & Legislative Wins (1830s–1850s)",
    blurb:
      "Phase Three: Doherty's national union, Owen's grand alliance, the Tolpuddle Martyrs — then the Factory Acts, the Ten Hours Act and the Chartists.",
    chapters: [
      { id: "labor-phase3", label: "Phase Three", desc: "National unions, Tolpuddle, the Factory Acts" },
    ],
  },
  {
    id: "l21",
    n: 21,
    code: "L21",
    title: "Economic Systems: Capitalism, Socialism, Communism",
    blurb:
      "The Industrial Revolution mints three answers to one question — who should own the means of production — from Adam Smith's markets to Marx's classless society.",
    chapters: [
      { id: "econ-systems", label: "Economic systems", desc: "Capitalism · socialism · communism" },
    ],
  },
  {
    id: "l22",
    n: 22,
    code: "L22",
    title: "Systems Compared & the Social-Cultural Impact",
    blurb:
      "Pros, cons and sector-fit for each system — then the revolution's human ledger: cities swelling, classes forming, time itself standardised.",
    chapters: [
      { id: "systems-society", label: "Systems & society", desc: "Pros & cons, cities, classes, 'time is money'" },
    ],
  },
  {
    id: "l23",
    n: 23,
    code: "L23",
    title: "Division of Labour & Taylor's Scientific Management",
    blurb:
      "From rule-of-thumb to stopwatch: Adam Smith's pin factory, Taylor's time-and-motion studies, the pig-iron experiment — and the human cost.",
    chapters: [
      { id: "management-taylor", label: "Taylorism", desc: "Pin factory, time studies, pig iron" },
    ],
  },
  {
    id: "l24",
    n: 24,
    code: "L24",
    title: "Recap: the Revolution's Impact — Labour, Economy, Society",
    blurb:
      "The live-session sweep: unionisation attempts, the Factory Acts, global trade behind the reforms, mixed systems in practice — one connecting thread.",
    chapters: [
      { id: "ir-impact", label: "The impact recap", desc: "Unions, reforms, systems — one thread" },
    ],
  },
  {
    id: "l25",
    n: 25,
    code: "L25",
    title: "From Taylor to Fayol: the Administrative Frame",
    blurb:
      "Fayol flips the view to the executive desk: six business activities, five functions, fourteen principles — and the Taylor-vs-Fayol ledger.",
    chapters: [
      { id: "management-fayol", label: "Fayolism", desc: "6 activities · 5 functions · 14 principles" },
    ],
  },
  {
    id: "l26",
    n: 26,
    code: "L26",
    title: "The Rise of Large Corporations",
    blurb:
      "Railroads and telegraph, mass production, the joint-stock corporation and strategic consolidation — four forces that built the modern firm.",
    chapters: [
      { id: "corporations", label: "Large corporations", desc: "Railroads, Ford, joint-stock, monopolies" },
    ],
  },
  {
    id: "l27",
    n: 27,
    code: "L27",
    title: "The World Wars & Business (1914–1945)",
    blurb:
      "Two wars redraw the rules: state capitalism, war industries from Renault to Coca-Cola, disrupted trade, and America's rise to superpower.",
    chapters: [
      { id: "world-wars", label: "The world wars", desc: "State control, war industries, US superpower" },
    ],
  },
  {
    id: "l28",
    n: 28,
    code: "L28",
    title: "Module 5: Indian Business History & Colonial Rule",
    blurb:
      "The East India Company's charters and their slow erosion — and the Indian entrepreneurs in between: financiers, shipbuilders, traders, 1600s–1813.",
    chapters: [
      { id: "indian-business", label: "Indian business history", desc: "EIC charters, Jagat Seth, Wadia, 1813" },
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
