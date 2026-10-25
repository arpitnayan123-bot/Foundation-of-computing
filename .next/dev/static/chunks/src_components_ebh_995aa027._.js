(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ebh/lectures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EBH_ALL_CHAPTER_IDS",
    ()=>EBH_ALL_CHAPTER_IDS,
    "EBH_DEFAULT_LECTURE",
    ()=>EBH_DEFAULT_LECTURE,
    "EBH_LECTURES",
    ()=>EBH_LECTURES,
    "lectureById",
    ()=>lectureById,
    "lectureOfChapter",
    ()=>lectureOfChapter
]);
"use client";
const EBH_LECTURES = [
    {
        id: "l1",
        n: 1,
        code: "L1",
        title: "What Is Economics? Scarcity & the Two Branches",
        blurb: "Scarcity is the door: wants outrun resources, so every economy must choose. Micro and macro — the two branches — and the choices that follow.",
        chapters: [
            {
                id: "economics",
                label: "What is economics?",
                desc: "Scarcity, choices, and the two branches"
            }
        ]
    },
    {
        id: "l2",
        n: 2,
        code: "L2",
        title: "What Is Business? The Firm & the Profit Motive",
        blurb: "Business is economic activity organised for profit — firms as the players who take the risks. Why firms exist at all, and what profit really pays for.",
        chapters: [
            {
                id: "business",
                label: "What is business?",
                desc: "Economic activity, profit, and why firms exist"
            }
        ]
    },
    {
        id: "l3",
        n: 3,
        code: "L3",
        title: "What Is History? Change Over Time, Through Evidence",
        blurb: "History is change over time — argued from evidence, never memorised. How to read a date as the answer to a question: why then, and why there?",
        chapters: [
            {
                id: "history",
                label: "What is history?",
                desc: "Change over time — through evidence"
            }
        ]
    },
    {
        id: "l4",
        n: 4,
        code: "L4",
        title: "Rules & Players: The Frame of the Course",
        blurb: "The two-by-two that names the course: economic history follows the rules, business history follows the players. Every later lecture hangs on this frame.",
        chapters: [
            {
                id: "rules-players",
                label: "Rules & players",
                desc: "The two-by-two that names this course"
            }
        ]
    },
    {
        id: "l5",
        n: 5,
        code: "L5",
        title: "The License Raj: When the Economy Wrote the Rules",
        blurb: "India after independence: licences, quotas and IPR 1956 — the rules telling industry what it could build, where, and how much.",
        chapters: [
            {
                id: "license-raj",
                label: "Economy → business",
                desc: "The License Raj and IPR 1956"
            }
        ]
    },
    {
        id: "l6",
        n: 6,
        code: "L6",
        title: "Case Study: Bajaj Auto on Two Tracks",
        blurb: "One company, two tracks: the economy's story of policy and the scooter's story of queues and waiting lists — running side by side.",
        chapters: [
            {
                id: "bajaj",
                label: "Case: Bajaj Auto",
                desc: "Two tracks — the economy and the scooter"
            }
        ]
    },
    {
        id: "l7",
        n: 7,
        code: "L7",
        title: "Society → Business: McDonald's & Cadbury",
        blurb: "Society writes the brief: the McAloo Tikki priced for the day's pocket, Cadbury ads that sell celebration — culture flowing into products.",
        chapters: [
            {
                id: "society-business",
                label: "Society → business",
                desc: "McAloo Tikki and the Cadbury ads"
            }
        ]
    },
    {
        id: "l8",
        n: 8,
        code: "L8",
        title: "Business → Society: The Invention of the Weekend",
        blurb: "The weekend was built, not found: 1886–1938, factories, unions and the long argument that won the second day off.",
        chapters: [
            {
                id: "weekend",
                label: "Business → society",
                desc: "The story of the weekend, 1886–1938"
            }
        ]
    },
    {
        id: "l9",
        n: 9,
        code: "L9",
        title: "Economies & Technology: Ford to Netflix",
        blurb: "Ford's assembly line, 2008's crash course, Netflix's pivot — technology and the economy reshaping each other, scanned with PESTLE.",
        chapters: [
            {
                id: "business-econ-tech",
                label: "Economies & technology",
                desc: "Ford, 2008, Netflix, PESTLE"
            }
        ]
    },
    {
        id: "l10",
        n: 10,
        code: "L10",
        title: "Agrarian Economies: Land, Lords & Zamindars",
        blurb: "Before factories, the year was a harvest: seasons set the calendar, land was wealth, and lords and zamindars collected.",
        chapters: [
            {
                id: "agrarian",
                label: "Agrarian economies",
                desc: "Seasons, land, lords and zamindars"
            }
        ]
    },
    {
        id: "l11",
        n: 11,
        code: "L11",
        title: "Guild Systems: The Ladder to Mastery",
        blurb: "The guild ladder — apprentice, journeyman, master — as quality control, training system and city gate, centuries before machines.",
        chapters: [
            {
                id: "guilds",
                label: "Guild systems",
                desc: "Apprentice, journeyman, master"
            }
        ]
    },
    {
        id: "l12",
        n: 12,
        code: "L12",
        title: "Trade Routes & the Commercial Revolution",
        blurb: "The Silk Road speedometer: months per mile — then bills of exchange and banking quicken trade, and the Commercial Revolution picks up speed.",
        chapters: [
            {
                id: "trade-routes",
                label: "Trade routes",
                desc: "Silk Road speeds, the Commercial Revolution"
            }
        ]
    },
    {
        id: "l13",
        n: 13,
        code: "L13",
        title: "Life Before the Machines",
        blurb: "Enclosures fence the fields, seed drills reorder them, and the putting-out system carries work into cottages — the countryside already reorganising before steam.",
        chapters: [
            {
                id: "life-before",
                label: "Life before machines",
                desc: "Enclosures, seed drills, putting-out"
            }
        ]
    },
    {
        id: "l14",
        n: 14,
        code: "L14",
        title: "Why Machines, Why Then: The Thread Bottleneck",
        blurb: "Population grows, trade quickens — and thread can't keep up. The bottleneck that made Britain beg for a machine.",
        chapters: [
            {
                id: "why-machines",
                label: "Why machines?",
                desc: "Population, trade, and the thread bottleneck"
            }
        ]
    },
    {
        id: "l15",
        n: 15,
        code: "L15",
        title: "The Textile Machines & the Mobs",
        blurb: "Flying shuttle, Spinning Jenny, water frame — each machine breaks the bottleneck and raises a mob; the Luddites answer in the dark.",
        chapters: [
            {
                id: "textile-machines",
                label: "Textile machines",
                desc: "Shuttle, jenny, water frame — and the mobs"
            }
        ]
    },
    {
        id: "l16",
        n: 16,
        code: "L16",
        title: "Steam & Cottonopolis",
        blurb: "Watt's engine frees the mill from the river, and Manchester's mills count themselves up — Cottonopolis, the first industrial city.",
        chapters: [
            {
                id: "steam-cottonopolis",
                label: "Steam & Cottonopolis",
                desc: "Watt's liberation, Manchester's mills"
            }
        ]
    },
    {
        id: "l17",
        n: 17,
        code: "L17",
        title: "The Labor Movement: Luddites to the 1825 Act",
        blurb: "Labour organises its answer: Luddite frames, Peterloo's charge and the 1825 Act — the long fight over who the machine age serves.",
        chapters: [
            {
                id: "labor-movement",
                label: "The labor movement",
                desc: "Luddites, Peterloo, and the 1825 Act"
            }
        ]
    },
    {
        id: "l18",
        n: 18,
        code: "L18",
        title: "Empire & Mercantilism",
        blurb: "Chartered companies, colonies as suppliers of raw material, and British ships carrying the system — empire as economic architecture.",
        chapters: [
            {
                id: "empire",
                label: "Empire & mercantilism",
                desc: "Companies, colonies, British ships"
            }
        ]
    }
];
const EBH_DEFAULT_LECTURE = EBH_LECTURES[0].id;
function lectureOfChapter(chapterId) {
    return EBH_LECTURES.find((l)=>l.chapters.some((c)=>c.id === chapterId)) ?? null;
}
function lectureById(id) {
    return EBH_LECTURES.find((l)=>l.id === id) ?? null;
}
const EBH_ALL_CHAPTER_IDS = EBH_LECTURES.flatMap(_c = (l)=>l.chapters.map((c)=>c.id));
_c1 = EBH_ALL_CHAPTER_IDS;
var _c, _c1;
__turbopack_context__.k.register(_c, "EBH_ALL_CHAPTER_IDS$EBH_LECTURES.flatMap");
__turbopack_context__.k.register(_c1, "EBH_ALL_CHAPTER_IDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ebh/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* ============================================================
   TEST MY KNOWLEDGE — Economic & Business History question
   banks, one per chapter group (shelf 04 of The Atlas).
   History is argued, not computed — so the bank sticks to
   mcq | output | short: name-the-actor, recall-the-year,
   pick-the-cause, and argue-the-connection in your own words.
   Every date and figure below is taken straight from the
   lecture deck (Dr. Manu Kanchan, IIT Jodhpur) and
   hand-checked: IPR 1956, Bajaj 1945–1971, guild charters,
   Silk Road speeds, the 1760s machine wave, Peterloo, the
   1825 Act, Manchester's mills.
   ============================================================ */ __turbopack_context__.s([
    "EBH_EXAM_BANKS",
    ()=>EBH_EXAM_BANKS,
    "EBH_EXAM_GROUPS",
    ()=>EBH_EXAM_GROUPS,
    "EBH_TOTAL_QUESTIONS",
    ()=>EBH_TOTAL_QUESTIONS
]);
/* ------------------------------------------------------------
   GROUP 1 — THE LENS  (what economics, business and history
             actually are; the rules-vs-players frame)
   ------------------------------------------------------------ */ const LENS = [
    {
        id: "l1",
        type: "mcq",
        q: "Three definitions of economics appear in Lecture 1. Which of the following is NOT one of them?",
        options: [
            "The study of the production, distribution and consumption of goods and services",
            "The study of scarcity — how people use resources and respond to incentives",
            "The study of decision-making",
            "The study of how to eliminate scarcity from society"
        ],
        answer: 3,
        explain: "Economics studies scarcity; it does not promise to abolish it. The lecture's three definitions: production–distribution–consumption of goods and services; scarcity and how people use resources and respond to incentives; and decision-making. Wants are unlimited, resources are limited — economics exists precisely because that gap never closes."
    },
    {
        id: "l2",
        type: "mcq",
        q: "Sort the questions into the two branches of economics. \u201CWhy does unemployment rise?\u201D and \u201CWhat causes inflation?\u201D belong to\u2026",
        options: [
            "Microeconomics — they ask about firms",
            "Macroeconomics — the economy as a whole",
            "Both are micro, because households are affected",
            "Neither — they are history questions"
        ],
        answer: 1,
        explain: "\u201CMacro\u201D means large: unemployment, inflation, growth and crises are questions about the economy as a whole (Set B in the lecture). \u201CMicro\u201D means small: consumers, households and firms — the price of tomatoes, hiring workers, how consumers choose (Set A)."
    },
    {
        id: "l3",
        type: "mcq",
        q: "A first-year student has 24 hours a day, limited pocket money and limited energy — but wants good grades, OTT subscriptions, sports and time with friends. The lecture uses this example to show that\u2026",
        options: [
            "Students should focus only on grades",
            "Unlimited wants meeting limited resources force choices — which is why economics exists",
            "Money matters more than time",
            "Entertainment is an inferior good"
        ],
        answer: 1,
        explain: "Resources (time, money, energy) are limited; wants (grades, entertainment, sports, friends) are not. Because resources must be allocated, choices become necessary — for a student, a family, a state, a nation. That is the lecture's birth-of-economics moment."
    },
    {
        id: "l4",
        type: "mcq",
        q: "Which definition of business matches the lecture word-for-word?",
        options: [
            "Any organisation that employs more than ten people",
            "An economic activity involving the production and sale of goods and services, undertaken with a motive of earning profit by satisfying human needs",
            "Any activity that generates tax revenue for the state",
            "A mechanism for distributing government licences"
        ],
        answer: 1,
        explain: "Business = economic activity + production and sale of goods and services + the profit motive, earned by satisfying human needs. The lecture adds the second half of the story: business is a mechanism through which societies organize production and exchange."
    },
    {
        id: "l5",
        type: "output",
        q: "A firm sells goods worth \u20B95,00,000 and incurs costs of \u20B93,60,000. Compute its profit.",
        code: "Revenue = \u20B95,00,000\nCost    = \u20B93,60,000\n\nProfit  = Revenue \u2212 Cost\n        = ?",
        answerText: "\u20B91,40,000",
        explain: "The lecture's identity: Profit = Revenue \u2212 Cost. \u20B95,00,000 \u2212 \u20B93,60,000 = \u20B91,40,000. State the formula, substitute, answer with the rupee sign — that is the full mark scheme."
    },
    {
        id: "l6",
        type: "short",
        q: "Why do businesses exist at all? Answer the way the lecture does — starting from the individual.",
        answerText: "Begin with the counterfactual: could each individual satisfy their own needs — grow their own food, make their own clothes, build their own houses, manufacture their own smartphones? No. Businesses exist to satisfy human needs efficiently, and to earn profits; they specialise, and specialisation is what makes efficiency possible.\nSo business is a mechanism through which societies organize production and exchange.",
        explain: "Two marks for the pair: efficiency through specialisation, and the profit motive. The third mark is the biggest idea in the lecture: business as society's mechanism for organising production and exchange."
    },
    {
        id: "l7",
        type: "mcq",
        q: "\u201CHistory is not just memorizing dates.\u201D According to the lecture, history is\u2026",
        options: [
            "A fixed list of kings and battles",
            "The study of change over time, through evidence",
            "The art of predicting stock markets",
            "A collection of verified facts about the past"
        ],
        answer: 1,
        explain: "History is the study of change over time through evidence. The lecture's framing: why (& how) did events happen; why did some institutions rise or fall. Context matters, change happens over time, and cause and effect are complex — the science/study of context, time and change."
    },
    {
        id: "l8",
        type: "mcq",
        q: "Which of these is a source FROM the actual time period, rather than a later analysis?",
        options: [
            "A textbook chapter written in 2020",
            "A business ledger, an old advertisement, or a contract from the period",
            "A modern magazine retrospective",
            "A university lecture summary"
        ],
        answer: 1,
        explain: "The lecture's source list splits in two: from the period — policy documents, parliamentary debates, annual reports, court verdicts, letters, business ledgers, old advertisements, contracts; and written later — textbooks, articles and analyses. The ledger sits in the first pile."
    },
    {
        id: "l9",
        type: "mcq",
        q: "The lecture's two-by-two: \u201CStudies how the players — firms, entrepreneurs, organisations — changed over time\u201D names which cell?",
        options: [
            "Economics",
            "Economic History",
            "Business",
            "Business History"
        ],
        answer: 3,
        explain: "Economics studies the rules and logic of economies; Economic History studies how those rules and logic changed over time; Business studies the players that operate within those economies; Business History studies how the players changed over time. Players changing over time = Business History."
    },
    {
        id: "l10",
        type: "short",
        q: "Why does this course argue that studying economic and business history helps you understand the PRESENT? Give the lecture's examples.",
        answerText: "Because the present is the past's outcome. On the economic side: recognising patterns — economic policies and economic crashes repeat in shape. On the business side: the rise of big corporations, and the rise (& fall) of whole sectors.\nThe lecture's own questions prove the method: why did the Industrial Revolution happen in the UK in the 17–18th century? Why did LPG policies emerge in India in 1991? Why did guilds fall? Answer those, and today's headlines stop being surprises.",
        explain: "The full-credit answer names both halves — economic (patterns, policies, crashes) and business (corporations, sectors rising and falling) — and uses at least one of the lecture's why-questions as evidence."
    }
];
/* ------------------------------------------------------------
   GROUP 2 — THREE CURRENTS  (economy → business · society →
             business · business → society/economy/technology)
   ------------------------------------------------------------ */ const CURRENTS = [
    {
        id: "c1",
        type: "mcq",
        q: "What was the License Raj in independent India?",
        options: [
            "A licence tax every family paid to the state",
            "A system of extensive government controls — through licences and regulations — that governed most economic activities after independence",
            "The railway's ticketing monopoly",
            "A British-era law that survived until 1991 untouched"
        ],
        answer: 1,
        explain: "The License Raj refers to the system of extensive government controls — through licences and regulations — that governed most economic activities in India after independence (roughly until the 1991 liberalisation). Businesses needed government permission for a long list of basic acts."
    },
    {
        id: "c2",
        type: "mcq",
        q: "Under the licence system, what all did the government control? Pick the complete list from the lecture.",
        options: [
            "Only heavy industry",
            "Starting new companies, manufacturing new products or expanding capacity, prices, laying off workers and shutting down, and imports",
            "Only imports and exports",
            "Only the banking sector"
        ],
        answer: 1,
        explain: "Licences were required for starting new companies, for manufacturing — producing new products or expanding production capacities — the government controlled prices, government approval was needed for laying off workers and for shutting down, and imports faced high tariffs, low quotas and outright bans on certain products."
    },
    {
        id: "c3",
        type: "mcq",
        q: "Industrial Policy Resolution 1956 classified industries into schedules. Schedule A meant\u2026",
        options: [
            "Open to the private sector alone",
            "12 industries open to both private and public sectors",
            "17 industries the exclusive responsibility of the Government (Central & State)",
            "Industries reserved for cooperatives"
        ],
        answer: 2,
        explain: "Schedule A: 17 industries the exclusive responsibility of the Government — arms and ammunition, atomic energy, railways and air transport, heavy industries, utilities and mining. Schedule B: 12 industries open to both private and public sectors. Schedule C: everything else, open to the private sector. The resolution also set the mood: socialist pattern, state-led development, expansion of the public sector, equitable distribution, balanced regional growth, small-scale and cottage industries, cooperatives."
    },
    {
        id: "c4",
        type: "output",
        q: "Under the Scooters (Distribution & Sales) Control Order 1960, a buyer needed a written guarantee from the bank to pay the dealer. What amount was the guarantee for?",
        code: "Procedure to purchase the scooter (1960):\n1. Apply to the dealer\n2. A written guarantee from the bank\n   to pay the dealer ____ Rs.\n3. Maintenance of Register by Dealer",
        answerText: "\u20B9250",
        explain: "\u20B9250. The Control Order even scripted how you bought a scooter: apply to the dealer, produce a bank guarantee of \u20B9250, and the dealer maintained a register. That is what \u201Cthe economy influencing business\u201D looked like at the counter."
    },
    {
        id: "c5",
        type: "mcq",
        q: "Bajaj Auto's story under the licence system: what happened in 1960?",
        options: [
            "It was incorporated",
            "It began selling imported two- and three-wheelers",
            "It obtained a licence from Piaggio (the Italian company) to manufacture the Vespa 150",
            "Its collaboration with Piaggio ended"
        ],
        answer: 2,
        explain: "The Bajaj timeline: 1945 incorporated; 1948 started selling imported two- and three-wheelers; 1959/60 obtained the Government of India licence to manufacture two- and three-wheelers — 6,000 a year — and in 1960 licensed Piaggio's Vespa 150. In 1971 the collaboration ended and Bajaj began selling the Bajaj 150 and the Bajaj Chetak."
    },
    {
        id: "c6",
        type: "mcq",
        q: "Why doesn't McDonald's sell the same menu in India as in its home market?",
        options: [
            "Indian law bans beef in every state",
            "Indian society consumes vegetarian food in a major way — so the McAloo Tikki Burger, introduced in 1998, became the face of the menu",
            "Potatoes are cheaper than beef in India",
            "Franchise law requires a vegetarian flagship"
        ],
        answer: 1,
        explain: "Society — its food habits — shapes what businesses produce and sell. McDonald's in India launched the McAloo Tikki Burger in 1998, and it became the face of the Indian menu, because Indian society consumes vegetarian food in a major way — different from the countries where McDonald's originated and operated."
    },
    {
        id: "c7",
        type: "mcq",
        q: "Cadbury's Dairy Milk ads changed between the mid-1990s (\u201CKya Swad hai Zindagi mein\u201D) and 2021. The lecture's explanation is\u2026",
        options: [
            "New chocolate recipes required new ads",
            "Indian society changed — including women's position — and as society changes, businesses change/adapt",
            "Competitors forced a redesign",
            "Television formats changed"
        ],
        answer: 1,
        explain: "The advertisement is the business's message; society — here the changing position of women in India — is the audience. Businesses are embedded within society: as society changes, businesses change/adapt. The two Cadbury ads are the lecture's evidence."
    },
    {
        id: "c8",
        type: "output",
        q: "In the story of the weekend: in which year did the US see its first five-day workweek — and why?",
        code: "1886  eight-hour day (Labor Movement)\n____  US first five-day workweek\n1926  Ford shuts factories Sat–Sun\n1938  Fair Labor Standards Act",
        answerText: "1908 — Jewish workers attending sabbath on Saturday",
        explain: "1908: the US's first five-day workweek, so Jewish workers could attend sabbath on Saturday. The weekend was not handed down by nature — it was built inside industrial society, step by step: 1886 eight-hour day (Labor Movement), 1908 five-day week, 1926 Ford shutting factories on Saturday and Sunday, 1938 Fair Labor Standards Act (40-hour week, overtime pay, national minimum wage, child labor bans)."
    },
    {
        id: "c9",
        type: "mcq",
        q: "Businesses affect economies positively and negatively. Which pairing matches the lecture?",
        options: [
            "Positive: job creation, rising incomes, industry growth, faster growth — Negative: rising unemployment, slower growth, decline in international trade (the 2007–08 crisis)",
            "Positive: lower taxes — Negative: higher wages",
            "Positive: monopolies — Negative: competition",
            "Positive: unemployment falls forever — Negative: none"
        ],
        answer: 0,
        explain: "On economies: positive — job creation, rising incomes, growth of industries, faster economic growth (Ford and mass production). Negative — the lecture's example is the financial crisis of 2007–08: risky home loans (subprime mortgages) bundled into complex financial products and sold to investors globally; many borrowers could not repay — crisis; rising unemployment, slower growth, decline in international trade. On society the ledger reads: employment, innovation, growth, taxes, technology, CSR vs pollution, inequality, exploitation, consumerism, environmental damage."
    },
    {
        id: "c10",
        type: "short",
        q: "Technology → Business: tell the Netflix story the lecture tells, and name what technology changed.",
        answerText: "Netflix was founded in 1997 in the US as a DVD rental business. In 2007 it introduced streaming and video-on-demand — high-speed internet had arrived, and consumer behaviour (watching movies) followed. In 2010 it began offering a standalone streaming service separate from DVD rentals; by 2020/2023 DVD rentals were discontinued.\nThe internet changed the complete business — the business model itself — and older technologies became obsolete. Generally: technology changes products (can create new markets), production, advertising/promotional campaigns, and distribution.",
        explain: "Marks for the four dates (1997, 2007, 2010, 2020/2023) and the punchline — the internet changed the complete business and the business model. Then zoom out: technology changes products, production, advertising and distribution — the PESTLE frame (Political, Economic, Social, Technological, Legal, Environment) holds it all."
    }
];
/* ------------------------------------------------------------
   GROUP 3 — BEFORE THE MACHINES  (agrarian economies · guilds
             · trade routes · the world just before factories)
   ------------------------------------------------------------ */ const BEFORE = [
    {
        id: "b1",
        type: "mcq",
        q: "In an agrarian economy, what is the core asset — and what does owning more of it mean?",
        options: [
            "Machinery — owning more means higher output",
            "Land — owning more land means rich; wealth, power and production capacity all hang on it",
            "Cash reserves — owning more means liquidity",
            "Ships — owning more means trade"
        ],
        answer: 1,
        explain: "Land is the main asset: life revolved around agriculture and the seasons (harvest, sowing, rainfall), agriculture meant families, and owning more land meant rich. Land ownership was not just property — it was the primary source of capital and of social stratification: the core asset determining wealth, power and production capacity."
    },
    {
        id: "b2",
        type: "mcq",
        q: "Serfdom — the feudal institution — is best defined as\u2026",
        options: [
            "A tax paid by merchants to the crown",
            "A legal and economic system where a peasant is bound to a plot of land owned by a lord — unable to leave, move, or marry without the lord's direct permission",
            "A guild for agricultural workers",
            "An apprenticeship for farmers"
        ],
        answer: 1,
        explain: "The feudal model (Western Europe): the Crown/Lords owned the land and provided military protection; the peasants/serfs were bound to the land and paid rent via crop shares or manual labour. Serfdom is that binding made legal: no leaving, no moving to another town, no marrying — without the direct permission of their lord."
    },
    {
        id: "b3",
        type: "mcq",
        q: "The Zamindari/colonial land model worked like this:",
        options: [
            "Peasants owned land jointly and elected their headmen",
            "The State granted revenue-collection rights to intermediaries (Zamindars); tenant farmers bore high fixed tax rates — leading to systemic debt cycles",
            "The Church collected tithes and stored grain in granaries",
            "Companies farmed land directly with wage labour"
        ],
        answer: 1,
        explain: "Zamindari: the State granted revenue-collection rights to Zamindars. Under British colonial rule the chain ran: British Colonial Government (demanded tax) → Zamindars — hereditary, land-owning elites (extracted variable, highly inflated rents) → Cultivators/Tenant Ryots (vulnerable farmers). High fixed tax rates pushed tenant farmers into systemic debt cycles."
    },
    {
        id: "b4",
        type: "output",
        q: "Two waves of guilds, two windows of years. Fill in the merchant-guild window: The Rise of Merchant Guilds (____ AD), followed by Craft Guilds (1100–1300 AD).",
        code: "Classical Roman collegia  →  vanish with Rome\nMerchant guilds           →  ______ \u2013 1150 AD\nCraft guilds              →  1100 \u2013 1300 AD",
        answerText: "1000–1150 AD",
        explain: "Merchant guilds rose 1000–1150 AD — driven by innovation in agriculture (food surplus: the three-field crop rotation, the heavy plough), the revival of long-distance trade, and urbanization. Merchants pooled resources for protection against robbery, high transit tolls and arbitrary seizures by feudal lords. Craft guilds followed, 1100–1300 AD, as urban manufacturing and specialised crafts expanded."
    },
    {
        id: "b5",
        type: "mcq",
        q: "The guild ladder — Apprentice, Journeyman, Master. Which row matches the lecture?",
        options: [
            "Apprentice: earns wages · Journeyman: owns the workshop · Master: paid nothing",
            "Apprentice: learns skills, no ownership, paid nothing · Journeyman: skilled worker, earns wages, can work with any master · Master: owns the workshop, trains apprentices, full guild member",
            "All three ranks earned the same wages",
            "Apprentice: full member · Journeyman: trains the master"
        ],
        answer: 1,
        explain: "Apprentice — learns skills, no ownership, paid nothing (the hatters' rules even fixed a term of no less than seven years). Journeyman — a skilled worker who earns wages and can work independently with any master. Master — owns the workshop, can train apprentices, a full guild member. And the gate to mastery: produce a masterpiece, judged by other Masters."
    },
    {
        id: "b6",
        type: "mcq",
        q: "Guild functions came in four kinds — economic, social, religious, political. Which pairing is correct?",
        options: [
            "Religious: setting prices · Political: patron saints",
            "Economic: quality control, training, price regulation, regulated competition · Social: care for the sick and elderly, burial benefits, support for dependents",
            "Economic: burial benefits · Social: quality control",
            "Political: the Worshipful Company of Weavers · Economic: sabbath observance"
        ],
        answer: 1,
        explain: "Economic — quality control (wardens searched hats for sale and hauled defects before the Mayor), training, price regulation, production control, market reputation, regulated competition. Social — care for the sick and elderly, burial and funeral benefits, support for dependents (the Tailors' Guild of Lincoln, 1328: a penny every day from the common box for a brother in poverty). Religious — patron saints and altars (St. Joseph for carpenters, St. Crispin for shoemakers). Political — guilds operated their own courts, settled commercial disputes, and craft guilds revolted against merchant guilds."
    },
    {
        id: "b7",
        type: "mcq",
        q: "Why did overland caravans on the Silk Road carry only high-value luxury goods — silk, gems, incense?",
        options: [
            "Luxury goods were the lightest to pack",
            "Caravans moved at 30–40 km/day and the animals' feeding costs were enormous — only high margins survived the maths",
            "Bandits refused to rob luxury goods",
            "Luxury goods paid no customs duty"
        ],
        answer: 1,
        explain: "The lecture's transport table: overland caravan — camels/mules/horses — 30–40 km/day, high-value luxury only, due to high feeding costs. River barges (10–20 km/day upstream) hauled bulk domestic goods — grain, stone, agricultural tax revenue. Ocean-going ships on monsoon and trade winds (100–150 km/day) carried international bulk and luxury — spices, textiles, timber, ceramics."
    },
    {
        id: "b8",
        type: "output",
        q: "By the Commercial Revolution in Europe, the urban merchant class had made wealth liquid. Complete the lecture's line: wealth was measured in ______ rather than land.",
        answerText: "money and goods",
        explain: "The Commercial Revolution — a European economy based on trade, from the 11th century to the mid-18th — lifted cities like Venice, Florence and Milan past 1,00,000 residents. The rising urban merchant class changed what wealth even was: liquid — measured in money and goods rather than land — and they wrote the laws and policies to match."
    },
    {
        id: "b9",
        type: "mcq",
        q: "What did the Enclosure movement actually do?",
        options: [
            "Distributed land equally among peasants",
            "Created legal property rights to land previously held in common — abolishing communal rights and consolidating small strips into massive private farms",
            "Built walls around medieval towns",
            "Ended feudal taxation"
        ],
        answer: 1,
        explain: "Before enclosures, the open-field system held a portion of land as \u201Ccommon\u201D — grazing rights, and a necessity of co-operation among the residents of the manor/village. Enclosure Acts through Parliament abolished communal rights and consolidated small strips into massive private farms, marked by fences, hedges and stone walls. Resistance was real: the Midland Revolt (1607) — thousands of peasants calling themselves \u201CDiggers\u201D and \u201CLevellers\u201D levelled enclosure fences in Northamptonshire and Warwickshire."
    },
    {
        id: "b10",
        type: "short",
        q: "Explain the putting-out system: how did it work, and why does the lecture call it the beginning of the breaking of the guild system?",
        answerText: "Labour was available (the agricultural revolution had seen to that), but the guilds were the bottleneck: they held a monopoly on manufacturing, strictly limited the number of workers, set prices, and banned new technology.\nSo merchants developed a method of subcontracting production: the merchant distributed raw materials to workers; the workers completed the work in their own homes or small workshops; workers were paid wages.\nProduction slipped out of the guilds' city walls and into the countryside — the beginning of the breaking of the guild system, and the road to the factory.",
        explain: "Full marks name the four guild bottlenecks (monopoly, worker limits, price-setting, technology ban), the merchant's role (raw materials out, wages back), home workshops, and the consequence — the guild system begins to break."
    }
];
/* ------------------------------------------------------------
   GROUP 4 — THE MACHINE AGE  (why machines came · the textile
             wave · steam and Cottonopolis · labour · empire)
   ------------------------------------------------------------ */ const MACHINES = [
    {
        id: "m1",
        type: "mcq",
        q: "Why did people begin using machines for production? The lecture's demand story includes\u2026",
        options: [
            "Population rise (5–6.5 million in 1700 → 9–11 million by 1801), rising global trade, and textiles at 70–90% of manufactured exports",
            "A fall in population creating cheap labour",
            "The king ordering factories to be built",
            "Cotton prices falling to zero"
        ],
        answer: 0,
        explain: "Three engines: the Agricultural Revolution freed up labour; growing demand — population rose from 5–6.5 million in 1700 to 9–11 million by 1801, and global trade climbed from £6.5 million in 1700 to £14.7 million in 1760, reaching £43.2 million by 1800; and textiles accounted for 70% to 90% of all manufactured exports. Meanwhile the putting-out system had hit its ceiling — decentralised, slow, limited by human muscle."
    },
    {
        id: "m2",
        type: "output",
        q: "Global trade figures from the lecture: £6.5 million in 1700, £14.7 million in 1760 — what was it by 1800?",
        code: "1700  \u00A36.5 million\n1760  \u00A314.7 million\n1800  ?",
        answerText: "£43.2 million",
        explain: "£43.2 million by 1800. Trade did not merely grow — it multiplied, and every twist of that demand put more pressure on the old ways of making things. Textiles, at 70–90% of manufactured exports, felt it first."
    },
    {
        id: "m3",
        type: "mcq",
        q: "The Flying Shuttle (John Kay, 1733) let one weaver weave twice as much cloth, alone, at any width. What was the response?",
        options: [
            "Weavers celebrated a shorter working day",
            "In 1753 an angry mob attacked Kay, smashing his furniture and models; factory owners pirated the design (the \u201CShuttle Club\u201D) to avoid paying royalty; Kay fled to France",
            "Parliament granted Kay a monopoly and a pension",
            "The guilds licensed it immediately"
        ],
        answer: 1,
        explain: "Productivity doubled — and terror followed. In 1753 an angry mob attacked, smashing his furniture and destroying his models. Factory owners quickly pirated his design — the \u201CShuttle Club\u201D — to avoid paying royalty to John Kay. Kay fled to France. The pattern repeats with every machine of this era: productivity up, resistance violent, inventors unlucky."
    },
    {
        id: "m4",
        type: "mcq",
        q: "The Spinning Jenny (James Hargreaves, 1764) changed spinning because\u2026",
        options: [
            "It used water power instead of muscle",
            "A single worker turned a wheel that rotated multiple spindles at once — the old wheel spun one thread; yarn output rose eightfold",
            "It wove cloth instead of spinning yarn",
            "It ran on coal from Lancashire"
        ],
        answer: 1,
        explain: "One worker, many spindles: the traditional wheel could spin only one single thread of yarn at a time; the Jenny rotated multiple spindles at once — an eightfold jump in an individual's yarn production. The spinners answered in 1768: a mob broke into Hargreaves' house in Blackburn, smashed his spinning jennies and forced him to flee the town."
    },
    {
        id: "m5",
        type: "output",
        q: "Richard Arkwright — a barber and wigmaker — built the world's first water-powered cotton spinning mill in Derbyshire. Name the mill and the year.",
        code: "Water frame patented      → 1769\n____ Mill, Derbyshire     → ____\n(world's first water-powered\ncotton spinning mill)",
        answerText: "Cromford Mill, 1771",
        explain: "Cromford Mill, 1771 — the world's first water-powered cotton spinning mill, today the centerpiece of the Derwent Valley Mills UNESCO World Heritage Site. Arkwright's second mill, Birkacre (1777, Lancashire), was burnt in the 1779 machine-breaking riots."
    },
    {
        id: "m6",
        type: "mcq",
        q: "Why did the Water Frame — machines too heavy for homes — give birth to the factory system?",
        options: [
            "Workers preferred commuting",
            "Water-powered machinery could not fit in a cottage: production had to move to the machine — centralised mills, mass production of cloth, 300–400 workers per complex by 1800",
            "The government banned home production",
            "Home workers went on strike"
        ],
        answer: 1,
        explain: "Spinning had relied strictly on human muscle — limited in strength and speed. Arkwright's water-powered machinery was too heavy for homes: workers moved to the machine, and the factory system was born, enabling mass production of cloth. By 1788 Arkwright-style water mills jumped to 143; by 1800, 300 of the 900 factories were massive, centralised \u201CArkwright-type\u201D complexes employing 300–400 workers each. His patents (1769, Grand Patent 1775) built a monopoly — broken in 1785 when courts invalidated them."
    },
    {
        id: "m7",
        type: "mcq",
        q: "What did James Watt's rotary steam engine (patented 1781) break?",
        options: [
            "The guilds' price controls",
            "The dependence on geography and nature — water power needed fast-flowing rivers; steam meant factories could be built anywhere, and they relocated to urban centres closer to ports",
            "The Navigation Acts",
            "The cloth mill monopoly in Derbyshire"
        ],
        answer: 1,
        explain: "Water power was captive to geography — fast-flowing rivers to turn the wheels, far from consumer markets and ports. Watt's engine — a mechanical device converting heat energy into mechanical work using pressurised steam — liberated production from the river valley: factories moved to urban centres closer to ports. Steam mill towns grew organized around factories."
    },
    {
        id: "m8",
        type: "output",
        q: "Manchester — \u201CCottonopolis.\u201D Its population was about 20,000 in 1771. What was it by 1851?",
        code: "Mills: 1802 → 50+   |   1816 → 43 large\n       1853 → 108 massive cotton mills\nPopulation: 1771 → 20,000   |   1851 → ?",
        answerText: "3,00,000 (300,000)",
        explain: "From 20,000 in 1771 to 3,00,000 (300,000) in 1851. The mills tell the same story: over 50 textile mills by 1802; 43 large-scale working mills by 1816 — McConnel & Kennedy alone employed over 1,000 workers in a single location; 108 massive cotton mills by 1853. Inputs made it possible: coal from the nearby South Lancashire coalfield, carried by the Bridgewater Canal (opened 1761), and cotton arriving at the Liverpool port."
    },
    {
        id: "m9",
        type: "mcq",
        q: "The Luddite protests (1811–1816): what were they, and what did the state answer with?",
        options: [
            "Peaceful petitions — answered with a royal commission",
            "Workers breaking into factories to smash automated knitting frames and power looms — \u201Ccollective bargaining by riot\u201D; the Frame Breaking Act 1812 made machine-wrecking a capital crime, and seventeen Luddites were executed in 1813",
            "A political party contesting elections",
            "A merchant strike against taxes"
        ],
        answer: 1,
        explain: "The Luddites — named for Ned Ludd, folklore's young weaver's apprentice who broke two knitting frames — broke into factories to smash automated knitting frames and power looms: collective bargaining by riot. The British government prioritised industrial property over human lives: the Frame Breaking Act 1812 made machine-wrecking a capital crime — \u201CIs there not blood enough upon your penal code?\u201D (Lord Byron) — and in 1813 seventeen Luddites were executed. Then came Peterloo (1819): a peaceful crowd of 60,000 workers in Manchester demanding parliamentary reform; cavalry charged; 18 people died and hundreds were injured."
    },
    {
        id: "m10",
        type: "short",
        q: "Trace the labor movement from the Combination Acts to the Combinations of Workmen Act 1825. What changed — and what didn't?",
        answerText: "Phase 1 (1760s–1820s): early \u201CFriendly Societies\u201D — secret mutual-aid groups; unions were looked at with suspicion. The Combination Acts (1799 & 1800) outlawed trade unions and collective bargaining. Resistance went riotous: the Luddite protests (1811–16), and the state answered with the Frame Breaking Act 1812 (a capital crime) and, at Peterloo (1819), cavalry against 60,000 peaceful workers — 18 dead.\nPhase 2 (1824–1830s): the Repeal of the Combination Act (1824) — 35 separate statutes had banned workers from organising over a 520-year period — unleashed a wave of strikes through late 1824 and early 1825. The panicked manufacturing elite approached the government, and the Combinations of Workmen Act 1825 legalized \u201Cstatutory unions\u201D — but stripped them of effective collective action: unions could meet and combine only to discuss their own wages, prices or hours; combining to strike over machinery use, hiring/firing practices or the number of apprentices stayed illegal.\nSo: unions existed now, but real bargaining was still driven underground.",
        explain: "The arc that earns full marks: outlawed (1799/1800) → riot (Luddites) → blood (Frame Breaking Act 1812, 1813 executions, Peterloo 1819) → repeal (1824) → strike wave → the 1825 Act's half-freedom (wages and hours only) → underground and alternate methods."
    }
];
const EBH_EXAM_BANKS = {
    lens: {
        group: "lens",
        title: "The Lens",
        subtitle: "Economics · business · history — and the frame that binds them",
        topics: "What is economics · what is business · what is history · rules & players",
        questions: LENS
    },
    currents: {
        group: "currents",
        title: "Three Currents",
        subtitle: "Economy, society and technology flowing into business",
        topics: "License Raj · IPR 1956 · Bajaj Auto · McDonald's & Cadbury · the weekend · Netflix · PESTLE",
        questions: CURRENTS
    },
    before: {
        group: "before",
        title: "Before the Machines",
        subtitle: "Pre-industrial economies — land, guilds and the first trade webs",
        topics: "Agrarian economies · serfdom · zamindari · guilds · Silk Road · enclosures · putting-out",
        questions: BEFORE
    },
    machines: {
        group: "machines",
        title: "The Machine Age",
        subtitle: "The Industrial Revolution and everyone it swept up",
        topics: "Flying shuttle · Spinning Jenny · Water Frame · Watt · Cottonopolis · Luddites · 1825 · Empire",
        questions: MACHINES
    }
};
const EBH_EXAM_GROUPS = Object.keys(EBH_EXAM_BANKS);
_c = EBH_EXAM_GROUPS;
const EBH_TOTAL_QUESTIONS = EBH_EXAM_GROUPS.reduce(_c1 = (n, g)=>n + EBH_EXAM_BANKS[g].questions.length, 0);
_c2 = EBH_TOTAL_QUESTIONS;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "EBH_EXAM_GROUPS");
__turbopack_context__.k.register(_c1, "EBH_TOTAL_QUESTIONS$EBH_EXAM_GROUPS.reduce");
__turbopack_context__.k.register(_c2, "EBH_TOTAL_QUESTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ebh/EbhHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EbhHero",
    ()=>EbhHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* ============================================================
   EbhHero — shelf 04 of THE ATLAS.

   "Economic & Business History" — the lecture sequence hero.
   Every lecture card carries its "Lecture N" eyebrow, and the
   notes below open with a matching "Economic & Business History
   Lecture N" band (see EbhLectureHead in EbhApp). Palette:
   archive gold & ivory paper. Facts from the EBH course notes.
   ============================================================ */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as PenLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ebh/lectures.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ebh/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/* archive gold, renamed from the MKTG teal/gold kit */ const BRASS = "#a16207";
const BRASS_BRIGHT = "#eab308";
const UMBER = "#854d0e";
const GOLD_LITE = "#ca8a4a";
const PAPER = "#faf7ef";
const PAPER_BORDER = "#e8e0cd";
const CHIP_BG = "#f2ecd9";
/* floating archive tokens — coin, charter, ledger, cog */ const HERO_TOKENS = [
    {
        kind: "coin",
        top: "14%",
        left: "5%",
        size: 54,
        dur: 7.4,
        delay: 0,
        rot: -10,
        color: BRASS
    },
    {
        kind: "charter",
        top: "66%",
        left: "8%",
        size: 48,
        dur: 8.6,
        delay: 0.8,
        rot: 8,
        color: UMBER
    },
    {
        kind: "cog",
        top: "18%",
        left: "88%",
        size: 52,
        dur: 7.9,
        delay: 0.4,
        rot: 6,
        color: GOLD_LITE
    },
    {
        kind: "ledger",
        top: "62%",
        left: "90%",
        size: 48,
        dur: 8.9,
        delay: 1.4,
        rot: -6,
        color: BRASS_BRIGHT
    },
    {
        kind: "coin",
        top: "40%",
        left: "3%",
        size: 40,
        dur: 9.3,
        delay: 2,
        rot: 5,
        color: UMBER
    },
    {
        kind: "charter",
        top: "82%",
        left: "46%",
        size: 40,
        dur: 8.1,
        delay: 1.1,
        rot: -8,
        color: BRASS_BRIGHT
    }
];
function HeroToken({ b }) {
    const s = b.size;
    const paths = {
        coin: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.3
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.18,
                    strokeDasharray: "3 4"
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        charter: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${s * 0.26} 4 h ${s * 0.42} a 3 3 0 0 1 3 3 v ${s * 0.5 - 10} a 3 3 0 0 1 -3 3 h -${s * 0.42} a 3 3 0 0 1 -3 -3 V 7 a 3 3 0 0 1 3 -3 Z`
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.3,
                    y1: s * 0.24,
                    x2: s * 0.7,
                    y2: s * 0.24
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.3,
                    y1: s * 0.36,
                    x2: s * 0.7,
                    y2: s * 0.36
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.3,
                    y1: s * 0.48,
                    x2: s * 0.58,
                    y2: s * 0.48
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true),
        cog: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.22
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: s / 2,
                    cy: s * 0.4,
                    r: s * 0.08
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                [
                    0,
                    60,
                    120
                ].map((deg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: s / 2 + s * 0.3 * Math.cos(deg * Math.PI / 180),
                        y1: s * 0.4 + s * 0.3 * Math.sin(deg * Math.PI / 180),
                        x2: s / 2 + s * 0.3 * Math.cos((deg + 180) * Math.PI / 180),
                        y2: s * 0.4 + s * 0.3 * Math.sin((deg + 180) * Math.PI / 180)
                    }, deg, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true),
        ledger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: s * 0.22,
                    y: s * 0.08,
                    width: s * 0.56,
                    height: s * 0.64,
                    rx: 2.5
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.34,
                    y1: s * 0.26,
                    x2: s * 0.66,
                    y2: s * 0.26
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.34,
                    y1: s * 0.4,
                    x2: s * 0.66,
                    y2: s * 0.4
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: s * 0.34,
                    y1: s * 0.54,
                    x2: s * 0.58,
                    y2: s * 0.54
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true)
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": true,
        className: "pointer-events-none absolute",
        style: {
            top: b.top,
            left: b.left,
            rotate: b.rot,
            opacity: 0.5
        },
        animate: {
            y: [
                0,
                -12,
                0
            ]
        },
        transition: {
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: s,
            height: s * 0.8,
            viewBox: `0 0 ${s} ${s * 0.8}`,
            fill: "none",
            stroke: b.color,
            strokeWidth: 2,
            children: paths[b.kind]
        }, void 0, false, {
            fileName: "[project]/src/components/ebh/EbhHero.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhHero.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c = HeroToken;
function EbhHero({ activeId, onSelect, onPractice, seen, totalQuestions }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const q = query.trim().toLowerCase();
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EbhHero.useMemo[filtered]": ()=>{
            const words = q.split(/\s+/).filter(Boolean);
            if (words.length === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_LECTURES"];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_LECTURES"].filter({
                "EbhHero.useMemo[filtered]": (l)=>{
                    const hay = [
                        `lecture ${l.n}`,
                        l.code.toLowerCase(),
                        l.title.toLowerCase(),
                        l.blurb.toLowerCase(),
                        ...l.chapters.map({
                            "EbhHero.useMemo[filtered].hay": (c)=>`${c.label} ${c.desc}`.toLowerCase()
                        }["EbhHero.useMemo[filtered].hay"])
                    ].join(" ");
                    return words.every({
                        "EbhHero.useMemo[filtered]": (w)=>hay.includes(w)
                    }["EbhHero.useMemo[filtered]"]);
                }
            }["EbhHero.useMemo[filtered]"]);
        }
    }["EbhHero.useMemo[filtered]"], [
        q
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        id: "top",
        className: "relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-16 sm:pb-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -left-24 top-16 h-80 w-80 rounded-full blur-3xl",
                        style: {
                            background: "rgba(234,179,8,.16)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -right-16 bottom-24 h-96 w-96 rounded-full blur-3xl",
                        style: {
                            background: "rgba(161,98,7,.15)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/3 top-1/2 h-64 w-64 rounded-full blur-3xl",
                        style: {
                            background: "rgba(124,98,72,.10)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 1200 620",
                preserveAspectRatio: "none",
                className: "pointer-events-none absolute inset-0 h-full w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: "508",
                        x2: "1200",
                        y2: "508",
                        stroke: "#dcc98e",
                        strokeWidth: 1.4,
                        opacity: 0.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    [
                        120,
                        300,
                        480,
                        660,
                        840,
                        1020
                    ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                            x1: x,
                            y1: 502,
                            x2: x,
                            y2: 514,
                            stroke: "#dcc98e",
                            strokeWidth: 1.2,
                            opacity: 0.4
                        }, x, false, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: "M -30 470 C 180 430 320 468 540 380 C 760 296 900 330 1230 168",
                        fill: "none",
                        stroke: UMBER,
                        strokeWidth: "2",
                        strokeDasharray: "3 10",
                        strokeLinecap: "round",
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: 1,
                            opacity: 0.5
                        },
                        transition: {
                            duration: 2.6,
                            ease: "easeInOut",
                            delay: 0.4
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    [
                        {
                            x: 180,
                            y: 438
                        },
                        {
                            x: 540,
                            y: 380
                        },
                        {
                            x: 940,
                            y: 272
                        }
                    ].map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                            cx: p.x,
                            cy: p.y,
                            r: 6,
                            fill: "none",
                            stroke: BRASS,
                            strokeWidth: 2,
                            style: {
                                transformBox: "fill-box",
                                transformOrigin: "center"
                            },
                            animate: {
                                opacity: [
                                    0.2,
                                    0.85,
                                    0.2
                                ],
                                scale: [
                                    1,
                                    1.4,
                                    1
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.7
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0",
                children: HERO_TOKENS.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroToken, {
                        b: b
                    }, i, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "chip mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                "Shelf 04 · Economic & Business History · IIT Jodhpur"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 120,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#3e2c1d] md:text-7xl",
                            children: [
                                "Economic & Business",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-clip-text text-transparent",
                                    style: {
                                        backgroundImage: `linear-gradient(120deg,${BRASS_BRIGHT},${BRASS} 45%,${UMBER})`
                                    },
                                    children: "History"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 240,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6b563d]",
                            children: "The rules and the players, followed across five centuries — scarcity to the Silk Road, guild halls to steam, Luddites to empire — every era drawn as a machine you can walk through."
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 300,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mt-8 w-full max-w-3xl text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "ebh-lecture-search",
                                    className: "sr-only",
                                    children: "Search the lecture sequence"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#a16207]",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "ebh-lecture-search",
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>setQuery(e.target.value),
                                            placeholder: "Search the sequence — try “1886”, “guilds”, or “empire”…",
                                            autoComplete: "off",
                                            className: "w-full rounded-2xl border border-[#e8e0cd] bg-[#fbf8f0]/90 py-3.5 pl-11 pr-4 text-[.95rem] font-semibold text-[#3e2c1d] shadow-[0_10px_30px_-14px_rgba(62,44,29,.35)] backdrop-blur-md placeholder:font-normal placeholder:text-[#a16207] focus:outline-none focus:ring-2 focus:ring-[#eab308]/40"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                filtered.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "scrollbar-thin mt-3 grid max-h-[23rem] gap-2.5 overflow-y-auto pr-1 sm:grid-cols-2",
                                    "aria-label": "Lecture sequence — pick a lecture to open its notes below",
                                    children: filtered.map((l)=>{
                                        const isActive = l.id === activeId;
                                        const readCount = l.chapters.filter((c)=>seen.has(c.id)).length;
                                        const allRead = l.chapters.length > 0 && readCount === l.chapters.length;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "min-w-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onSelect(l.id),
                                                "aria-pressed": isActive,
                                                className: `group flex h-full w-full items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 ${isActive ? "border-[#a16207] bg-white shadow-[0_16px_40px_-18px_rgba(161,98,7,.5)] ring-2 ring-[#eab308]/25" : "border-[#e8e0cd] bg-[#faf7ef]/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_34px_-18px_rgba(62,44,29,.4)]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[.72rem] font-black ${isActive ? "text-white" : ""}`,
                                                        style: isActive ? {
                                                            background: `linear-gradient(135deg,${BRASS_BRIGHT},${BRASS})`,
                                                            boxShadow: "0 6px 14px -6px rgba(161,98,7,.6)"
                                                        } : {
                                                            background: CHIP_BG,
                                                            color: BRASS
                                                        },
                                                        children: l.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[.58rem] font-extrabold uppercase tracking-[.18em]",
                                                                        style: {
                                                                            color: UMBER
                                                                        },
                                                                        children: [
                                                                            "Lecture ",
                                                                            l.n
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                        lineNumber: 247,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    allRead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        className: "h-3.5 w-3.5",
                                                                        style: {
                                                                            color: "#8fae5d"
                                                                        },
                                                                        "aria-label": "Every chapter read"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 31
                                                                    }, this) : null,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "ml-auto font-mono text-[.6rem] font-bold text-[#a16207]",
                                                                        children: [
                                                                            readCount,
                                                                            "/",
                                                                            l.chapters.length,
                                                                            " read"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                        lineNumber: 253,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `mt-0.5 block text-[.94rem] font-extrabold leading-tight ${isActive ? "text-[#a16207]" : "text-[#3e2c1d]"}`,
                                                                children: l.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-1 block text-[.76rem] leading-snug text-[#6b563d]",
                                                                children: l.blurb
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-2 flex flex-wrap gap-1.5",
                                                                children: l.chapters.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full border border-[#e8e0cd] bg-[#f2ecd9] px-2 py-0.5 text-[.62rem] font-bold text-[#854d0e]",
                                                                        children: c.label
                                                                    }, c.id, false, {
                                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this),
                                                    isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-0.5 shrink-0 self-center rounded-full bg-[#a16207]/10 px-2 py-1 text-[.55rem] font-black uppercase tracking-[.14em] text-[#a16207]",
                                                        children: "reading"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 27
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this)
                                        }, l.id, false, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 224,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 215,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-2xl border border-dashed border-[#e8e0cd] bg-[#faf7ef]/70 p-4 text-center text-[.82rem] font-semibold text-[#a1876a]",
                                    role: "status",
                                    children: [
                                        "No lecture matches “",
                                        query,
                                        "” — try a number, a topic (“guilds”), or clear the search."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 280,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex flex-col items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onPractice,
                                            title: "The practice hub — pen-paper exam windows with instant checking",
                                            className: "group inline-flex items-center gap-2 rounded-full border border-[#e8e0cd] bg-[#fdfbf4] px-7 py-3 text-sm font-bold text-[#854d0e] shadow-sm transition hover:bg-[#f5efdc]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenLine$3e$__["PenLine"], {
                                                    className: "h-4 w-4 text-[#a16207] transition-transform duration-300 group-hover:-rotate-12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 17
                                                }, this),
                                                "Test my knowledge"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[.64rem] font-bold uppercase tracking-[.16em] text-[#a1876a]",
                                            children: [
                                                "pen-paper practice · ",
                                                totalQuestions,
                                                " questions · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_EXAM_GROUPS"].length,
                                                " exam windows"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: 560,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3",
                            children: [
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_LECTURES"].length),
                                    "lectures"
                                ],
                                [
                                    String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$lectures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_ALL_CHAPTER_IDS"].length),
                                    "chapters"
                                ],
                                [
                                    String(totalQuestions),
                                    "exam questions"
                                ]
                            ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "bg-clip-text text-3xl font-black text-transparent",
                                            style: {
                                                backgroundImage: `linear-gradient(120deg,${BRASS_BRIGHT},${BRASS} 55%,${UMBER})`
                                            },
                                            children: n
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[.72rem] font-bold uppercase tracking-[.18em] text-[#8a7a5c]",
                                            children: l
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l, true, {
                                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ebh/EbhHero.tsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-8 z-10 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#notes-top",
                    "aria-label": "Scroll to the lecture notes",
                    className: "anim-bob rounded-full border border-[#e8e0cd] bg-[#fdfbf4]/80 p-3 text-[#a16207]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ebh/EbhHero.tsx",
                        lineNumber: 328,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ebh/EbhHero.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ebh/EbhHero.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ebh/EbhHero.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(EbhHero, "DOWiSTOb/BUd8qeG7DR+mR3x4Qg=");
_c1 = EbhHero;
var _c, _c1;
__turbopack_context__.k.register(_c, "HeroToken");
__turbopack_context__.k.register(_c1, "EbhHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ebh/EbhExamWindow.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EbhExamWindow",
    ()=>EbhExamWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/* EBH exam window — theme + engine shared (see notes/ExamEngine.tsx
   and notes/exam-themes.ts). The gold sigil marks shelf 04; "output"
   questions recall years and terms rather than compute values. */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ebh/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/ExamEngine.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/notes/exam-themes.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function EbhExamWindow({ group, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$ExamEngine$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExamEngine"], {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$notes$2f$exam$2d$themes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_EXAM_THEME"],
        bank: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ebh$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EBH_EXAM_BANKS"][group],
        draftId: group,
        onClose: onClose
    }, void 0, false, {
        fileName: "[project]/src/components/ebh/EbhExamWindow.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = EbhExamWindow;
var _c;
__turbopack_context__.k.register(_c, "EbhExamWindow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ebh/EbhApp.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ebh/EbhApp.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_ebh_995aa027._.js.map