(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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

//# sourceMappingURL=src_components_ebh_651ed33d._.js.map