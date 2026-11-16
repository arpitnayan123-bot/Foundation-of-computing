/* ============================================================
   TEST MY KNOWLEDGE — Economic & Business History question
   banks, one per module of the 28-lecture deck (shelf 04 of
   The Atlas). History is argued, not computed — so the banks
   stick to mcq | output | short: name-the-actor,
   recall-the-year, pick-the-cause, and argue-the-connection
   in your own words. Every date and figure below is taken
   straight from the lecture deck (Dr. Manu Kanchan, IIT
   Jodhpur) and hand-checked: IPR 1956, Bajaj 1945–1971,
   guild charters, Silk Road speeds, the 1760s machine wave,
   Peterloo, the 1825 Act, Tolpuddle 1834, the Ten Hours Act,
   the Chartists, Schmidt's 12.5→47 tons, Fayol's 14,
   DuPont's 40%, the charters 1600→1813.
   ============================================================ */

export type EbhExamGroup = "lens" | "before" | "machines" | "corporation" | "india";
export type EbhQuestionType = "mcq" | "output" | "short";

export interface EbhExamQuestion {
  id: string;
  type: EbhQuestionType;
  q: string;
  code?: string; // optional timeline / ledger panel shown with the question
  options?: string[]; // mcq only
  answer?: number; // mcq only — index of the correct option
  answerText?: string; // output → exact term/date; short → model answer
  explain?: string;
}

export interface EbhExamBank {
  group: EbhExamGroup;
  title: string;
  subtitle: string;
  topics: string;
  questions: EbhExamQuestion[];
}

/* ------------------------------------------------------------
   GROUP 1 — THE LENS  (what economics, business and history
             actually are; the rules-vs-players frame)
   ------------------------------------------------------------ */
const LENS: EbhExamQuestion[] = [
  {
    id: "l1",
    type: "mcq",
    q: "Three definitions of economics appear in Lecture 1. Which of the following is NOT one of them?",
    options: [
      "The study of the production, distribution and consumption of goods and services",
      "The study of scarcity — how people use resources and respond to incentives",
      "The study of decision-making",
      "The study of how to eliminate scarcity from society",
    ],
    answer: 3,
    explain:
      "Economics studies scarcity; it does not promise to abolish it. The lecture's three definitions: production–distribution–consumption of goods and services; scarcity and how people use resources and respond to incentives; and decision-making. Wants are unlimited, resources are limited — economics exists precisely because that gap never closes.",
  },
  {
    id: "l2",
    type: "mcq",
    q: "Sort the questions into the two branches of economics. \u201CWhy does unemployment rise?\u201D and \u201CWhat causes inflation?\u201D belong to\u2026",
    options: [
      "Microeconomics — they ask about firms",
      "Macroeconomics — the economy as a whole",
      "Both are micro, because households are affected",
      "Neither — they are history questions",
    ],
    answer: 1,
    explain:
      "\u201CMacro\u201D means large: unemployment, inflation, growth and crises are questions about the economy as a whole (Set B in the lecture). \u201CMicro\u201D means small: consumers, households and firms — the price of tomatoes, hiring workers, how consumers choose (Set A).",
  },
  {
    id: "l3",
    type: "mcq",
    q: "A first-year student has 24 hours a day, limited pocket money and limited energy — but wants good grades, OTT subscriptions, sports and time with friends. The lecture uses this example to show that\u2026",
    options: [
      "Students should focus only on grades",
      "Unlimited wants meeting limited resources force choices — which is why economics exists",
      "Money matters more than time",
      "Entertainment is an inferior good",
    ],
    answer: 1,
    explain:
      "Resources (time, money, energy) are limited; wants (grades, entertainment, sports, friends) are not. Because resources must be allocated, choices become necessary — for a student, a family, a state, a nation. That is the lecture's birth-of-economics moment.",
  },
  {
    id: "l4",
    type: "mcq",
    q: "Which definition of business matches the lecture word-for-word?",
    options: [
      "Any organisation that employs more than ten people",
      "An economic activity involving the production and sale of goods and services, undertaken with a motive of earning profit by satisfying human needs",
      "Any activity that generates tax revenue for the state",
      "A mechanism for distributing government licences",
    ],
    answer: 1,
    explain:
      "Business = economic activity + production and sale of goods and services + the profit motive, earned by satisfying human needs. The lecture adds the second half of the story: business is a mechanism through which societies organize production and exchange.",
  },
  {
    id: "l5",
    type: "output",
    q: "A firm sells goods worth \u20B95,00,000 and incurs costs of \u20B93,60,000. Compute its profit.",
    code: "Revenue = \u20B95,00,000\nCost    = \u20B93,60,000\n\nProfit  = Revenue \u2212 Cost\n        = ?",
    answerText: "\u20B91,40,000",
    explain:
      "The lecture's identity: Profit = Revenue \u2212 Cost. \u20B95,00,000 \u2212 \u20B93,60,000 = \u20B91,40,000. State the formula, substitute, answer with the rupee sign — that is the full mark scheme.",
  },
  {
    id: "l6",
    type: "short",
    q: "Why do businesses exist at all? Answer the way the lecture does — starting from the individual.",
    answerText:
      "Begin with the counterfactual: could each individual satisfy their own needs — grow their own food, make their own clothes, build their own houses, manufacture their own smartphones? No. Businesses exist to satisfy human needs efficiently, and to earn profits; they specialise, and specialisation is what makes efficiency possible.\nSo business is a mechanism through which societies organize production and exchange.",
    explain:
      "Two marks for the pair: efficiency through specialisation, and the profit motive. The third mark is the biggest idea in the lecture: business as society's mechanism for organising production and exchange.",
  },
  {
    id: "l7",
    type: "mcq",
    q: "\u201CHistory is not just memorizing dates.\u201D According to the lecture, history is\u2026",
    options: [
      "A fixed list of kings and battles",
      "The study of change over time, through evidence",
      "The art of predicting stock markets",
      "A collection of verified facts about the past",
    ],
    answer: 1,
    explain:
      "History is the study of change over time through evidence. The lecture's framing: why (& how) did events happen; why did some institutions rise or fall. Context matters, change happens over time, and cause and effect are complex — the science/study of context, time and change.",
  },
  {
    id: "l8",
    type: "mcq",
    q: "Which of these is a source FROM the actual time period, rather than a later analysis?",
    options: [
      "A textbook chapter written in 2020",
      "A business ledger, an old advertisement, or a contract from the period",
      "A modern magazine retrospective",
      "A university lecture summary",
    ],
    answer: 1,
    explain:
      "The lecture's source list splits in two: from the period — policy documents, parliamentary debates, annual reports, court verdicts, letters, business ledgers, old advertisements, contracts; and written later — textbooks, articles and analyses. The ledger sits in the first pile.",
  },
  {
    id: "l9",
    type: "mcq",
    q: "The lecture's two-by-two: \u201CStudies how the players — firms, entrepreneurs, organisations — changed over time\u201D names which cell?",
    options: [
      "Economics",
      "Economic History",
      "Business",
      "Business History",
    ],
    answer: 3,
    explain:
      "Economics studies the rules and logic of economies; Economic History studies how those rules and logic changed over time; Business studies the players that operate within those economies; Business History studies how the players changed over time. Players changing over time = Business History.",
  },
  {
    id: "l10",
    type: "short",
    q: "Why does this course argue that studying economic and business history helps you understand the PRESENT? Give the lecture's examples.",
    answerText:
      "Because the present is the past's outcome. On the economic side: recognising patterns — economic policies and economic crashes repeat in shape. On the business side: the rise of big corporations, and the rise (& fall) of whole sectors.\nThe lecture's own questions prove the method: why did the Industrial Revolution happen in the UK in the 17–18th century? Why did LPG policies emerge in India in 1991? Why did guilds fall? Answer those, and today's headlines stop being surprises.",
    explain:
      "The full-credit answer names both halves — economic (patterns, policies, crashes) and business (corporations, sectors rising and falling) — and uses at least one of the lecture's why-questions as evidence.",
  },
];

/* ------------------------------------------------------------
   GROUP 2 — THREE CURRENTS  (economy → business · society →
             business · business → society/economy/technology)
   ------------------------------------------------------------ */
const CURRENTS: EbhExamQuestion[] = [
  {
    id: "c1",
    type: "mcq",
    q: "What was the License Raj in independent India?",
    options: [
      "A licence tax every family paid to the state",
      "A system of extensive government controls — through licences and regulations — that governed most economic activities after independence",
      "The railway's ticketing monopoly",
      "A British-era law that survived until 1991 untouched",
    ],
    answer: 1,
    explain:
      "The License Raj refers to the system of extensive government controls — through licences and regulations — that governed most economic activities in India after independence (roughly until the 1991 liberalisation). Businesses needed government permission for a long list of basic acts.",
  },
  {
    id: "c2",
    type: "mcq",
    q: "Under the licence system, what all did the government control? Pick the complete list from the lecture.",
    options: [
      "Only heavy industry",
      "Starting new companies, manufacturing new products or expanding capacity, prices, laying off workers and shutting down, and imports",
      "Only imports and exports",
      "Only the banking sector",
    ],
    answer: 1,
    explain:
      "Licences were required for starting new companies, for manufacturing — producing new products or expanding production capacities — the government controlled prices, government approval was needed for laying off workers and for shutting down, and imports faced high tariffs, low quotas and outright bans on certain products.",
  },
  {
    id: "c3",
    type: "mcq",
    q: "Industrial Policy Resolution 1956 classified industries into schedules. Schedule A meant\u2026",
    options: [
      "Open to the private sector alone",
      "12 industries open to both private and public sectors",
      "17 industries the exclusive responsibility of the Government (Central & State)",
      "Industries reserved for cooperatives",
    ],
    answer: 2,
    explain:
      "Schedule A: 17 industries the exclusive responsibility of the Government — arms and ammunition, atomic energy, railways and air transport, heavy industries, utilities and mining. Schedule B: 12 industries open to both private and public sectors. Schedule C: everything else, open to the private sector. The resolution also set the mood: socialist pattern, state-led development, expansion of the public sector, equitable distribution, balanced regional growth, small-scale and cottage industries, cooperatives.",
  },
  {
    id: "c4",
    type: "output",
    q: "Under the Scooters (Distribution & Sales) Control Order 1960, a buyer needed a written guarantee from the bank to pay the dealer. What amount was the guarantee for?",
    code: "Procedure to purchase the scooter (1960):\n1. Apply to the dealer\n2. A written guarantee from the bank\n   to pay the dealer ____ Rs.\n3. Maintenance of Register by Dealer",
    answerText: "\u20B9250",
    explain:
      "\u20B9250. The Control Order even scripted how you bought a scooter: apply to the dealer, produce a bank guarantee of \u20B9250, and the dealer maintained a register. That is what \u201Cthe economy influencing business\u201D looked like at the counter.",
  },
  {
    id: "c5",
    type: "mcq",
    q: "Bajaj Auto's story under the licence system: what happened in 1960?",
    options: [
      "It was incorporated",
      "It began selling imported two- and three-wheelers",
      "It obtained a licence from Piaggio (the Italian company) to manufacture the Vespa 150",
      "Its collaboration with Piaggio ended",
    ],
    answer: 2,
    explain:
      "The Bajaj timeline: 1945 incorporated; 1948 started selling imported two- and three-wheelers; 1959/60 obtained the Government of India licence to manufacture two- and three-wheelers — 6,000 a year — and in 1960 licensed Piaggio's Vespa 150. In 1971 the collaboration ended and Bajaj began selling the Bajaj 150 and the Bajaj Chetak.",
  },
  {
    id: "c6",
    type: "mcq",
    q: "Why doesn't McDonald's sell the same menu in India as in its home market?",
    options: [
      "Indian law bans beef in every state",
      "Indian society consumes vegetarian food in a major way — so the McAloo Tikki Burger, introduced in 1998, became the face of the menu",
      "Potatoes are cheaper than beef in India",
      "Franchise law requires a vegetarian flagship",
    ],
    answer: 1,
    explain:
      "Society — its food habits — shapes what businesses produce and sell. McDonald's in India launched the McAloo Tikki Burger in 1998, and it became the face of the Indian menu, because Indian society consumes vegetarian food in a major way — different from the countries where McDonald's originated and operated.",
  },
  {
    id: "c7",
    type: "mcq",
    q: "Cadbury's Dairy Milk ads changed between the mid-1990s (\u201CKya Swad hai Zindagi mein\u201D) and 2021. The lecture's explanation is\u2026",
    options: [
      "New chocolate recipes required new ads",
      "Indian society changed — including women's position — and as society changes, businesses change/adapt",
      "Competitors forced a redesign",
      "Television formats changed",
    ],
    answer: 1,
    explain:
      "The advertisement is the business's message; society — here the changing position of women in India — is the audience. Businesses are embedded within society: as society changes, businesses change/adapt. The two Cadbury ads are the lecture's evidence.",
  },
  {
    id: "c8",
    type: "output",
    q: "In the story of the weekend: in which year did the US see its first five-day workweek — and why?",
    code: "1886  eight-hour day (Labor Movement)\n____  US first five-day workweek\n1926  Ford shuts factories Sat–Sun\n1938  Fair Labor Standards Act",
    answerText: "1908 — Jewish workers attending sabbath on Saturday",
    explain:
      "1908: the US's first five-day workweek, so Jewish workers could attend sabbath on Saturday. The weekend was not handed down by nature — it was built inside industrial society, step by step: 1886 eight-hour day (Labor Movement), 1908 five-day week, 1926 Ford shutting factories on Saturday and Sunday, 1938 Fair Labor Standards Act (40-hour week, overtime pay, national minimum wage, child labor bans).",
  },
  {
    id: "c9",
    type: "mcq",
    q: "Businesses affect economies positively and negatively. Which pairing matches the lecture?",
    options: [
      "Positive: job creation, rising incomes, industry growth, faster growth — Negative: rising unemployment, slower growth, decline in international trade (the 2007–08 crisis)",
      "Positive: lower taxes — Negative: higher wages",
      "Positive: monopolies — Negative: competition",
      "Positive: unemployment falls forever — Negative: none",
    ],
    answer: 0,
    explain:
      "On economies: positive — job creation, rising incomes, growth of industries, faster economic growth (Ford and mass production). Negative — the lecture's example is the financial crisis of 2007–08: risky home loans (subprime mortgages) bundled into complex financial products and sold to investors globally; many borrowers could not repay — crisis; rising unemployment, slower growth, decline in international trade. On society the ledger reads: employment, innovation, growth, taxes, technology, CSR vs pollution, inequality, exploitation, consumerism, environmental damage.",
  },
  {
    id: "c10",
    type: "short",
    q: "Technology → Business: tell the Netflix story the lecture tells, and name what technology changed.",
    answerText:
      "Netflix was founded in 1997 in the US as a DVD rental business. In 2007 it introduced streaming and video-on-demand — high-speed internet had arrived, and consumer behaviour (watching movies) followed. In 2010 it began offering a standalone streaming service separate from DVD rentals; by 2020/2023 DVD rentals were discontinued.\nThe internet changed the complete business — the business model itself — and older technologies became obsolete. Generally: technology changes products (can create new markets), production, advertising/promotional campaigns, and distribution.",
    explain:
      "Marks for the four dates (1997, 2007, 2010, 2020/2023) and the punchline — the internet changed the complete business and the business model. Then zoom out: technology changes products, production, advertising and distribution — the PESTLE frame (Political, Economic, Social, Technological, Legal, Environment) holds it all.",
  },
];

/* ------------------------------------------------------------
   GROUP 3 — BEFORE THE MACHINES  (agrarian economies · guilds
             · trade routes · the world just before factories)
   ------------------------------------------------------------ */
const BEFORE: EbhExamQuestion[] = [
  {
    id: "b1",
    type: "mcq",
    q: "In an agrarian economy, what is the core asset — and what does owning more of it mean?",
    options: [
      "Machinery — owning more means higher output",
      "Land — owning more land means rich; wealth, power and production capacity all hang on it",
      "Cash reserves — owning more means liquidity",
      "Ships — owning more means trade",
    ],
    answer: 1,
    explain:
      "Land is the main asset: life revolved around agriculture and the seasons (harvest, sowing, rainfall), agriculture meant families, and owning more land meant rich. Land ownership was not just property — it was the primary source of capital and of social stratification: the core asset determining wealth, power and production capacity.",
  },
  {
    id: "b2",
    type: "mcq",
    q: "Serfdom — the feudal institution — is best defined as\u2026",
    options: [
      "A tax paid by merchants to the crown",
      "A legal and economic system where a peasant is bound to a plot of land owned by a lord — unable to leave, move, or marry without the lord's direct permission",
      "A guild for agricultural workers",
      "An apprenticeship for farmers",
    ],
    answer: 1,
    explain:
      "The feudal model (Western Europe): the Crown/Lords owned the land and provided military protection; the peasants/serfs were bound to the land and paid rent via crop shares or manual labour. Serfdom is that binding made legal: no leaving, no moving to another town, no marrying — without the direct permission of their lord.",
  },
  {
    id: "b3",
    type: "mcq",
    q: "The Zamindari/colonial land model worked like this:",
    options: [
      "Peasants owned land jointly and elected their headmen",
      "The State granted revenue-collection rights to intermediaries (Zamindars); tenant farmers bore high fixed tax rates — leading to systemic debt cycles",
      "The Church collected tithes and stored grain in granaries",
      "Companies farmed land directly with wage labour",
    ],
    answer: 1,
    explain:
      "Zamindari: the State granted revenue-collection rights to Zamindars. Under British colonial rule the chain ran: British Colonial Government (demanded tax) → Zamindars — hereditary, land-owning elites (extracted variable, highly inflated rents) → Cultivators/Tenant Ryots (vulnerable farmers). High fixed tax rates pushed tenant farmers into systemic debt cycles.",
  },
  {
    id: "b4",
    type: "output",
    q: "Two waves of guilds, two windows of years. Fill in the merchant-guild window: The Rise of Merchant Guilds (____ AD), followed by Craft Guilds (1100–1300 AD).",
    code: "Classical Roman collegia  →  vanish with Rome\nMerchant guilds           →  ______ \u2013 1150 AD\nCraft guilds              →  1100 \u2013 1300 AD",
    answerText: "1000–1150 AD",
    explain:
      "Merchant guilds rose 1000–1150 AD — driven by innovation in agriculture (food surplus: the three-field crop rotation, the heavy plough), the revival of long-distance trade, and urbanization. Merchants pooled resources for protection against robbery, high transit tolls and arbitrary seizures by feudal lords. Craft guilds followed, 1100–1300 AD, as urban manufacturing and specialised crafts expanded.",
  },
  {
    id: "b5",
    type: "mcq",
    q: "The guild ladder — Apprentice, Journeyman, Master. Which row matches the lecture?",
    options: [
      "Apprentice: earns wages · Journeyman: owns the workshop · Master: paid nothing",
      "Apprentice: learns skills, no ownership, paid nothing · Journeyman: skilled worker, earns wages, can work with any master · Master: owns the workshop, trains apprentices, full guild member",
      "All three ranks earned the same wages",
      "Apprentice: full member · Journeyman: trains the master",
    ],
    answer: 1,
    explain:
      "Apprentice — learns skills, no ownership, paid nothing (the hatters' rules even fixed a term of no less than seven years). Journeyman — a skilled worker who earns wages and can work independently with any master. Master — owns the workshop, can train apprentices, a full guild member. And the gate to mastery: produce a masterpiece, judged by other Masters.",
  },
  {
    id: "b6",
    type: "mcq",
    q: "Guild functions came in four kinds — economic, social, religious, political. Which pairing is correct?",
    options: [
      "Religious: setting prices · Political: patron saints",
      "Economic: quality control, training, price regulation, regulated competition · Social: care for the sick and elderly, burial benefits, support for dependents",
      "Economic: burial benefits · Social: quality control",
      "Political: the Worshipful Company of Weavers · Economic: sabbath observance",
    ],
    answer: 1,
    explain:
      "Economic — quality control (wardens searched hats for sale and hauled defects before the Mayor), training, price regulation, production control, market reputation, regulated competition. Social — care for the sick and elderly, burial and funeral benefits, support for dependents (the Tailors' Guild of Lincoln, 1328: a penny every day from the common box for a brother in poverty). Religious — patron saints and altars (St. Joseph for carpenters, St. Crispin for shoemakers). Political — guilds operated their own courts, settled commercial disputes, and craft guilds revolted against merchant guilds.",
  },
  {
    id: "b7",
    type: "mcq",
    q: "Why did overland caravans on the Silk Road carry only high-value luxury goods — silk, gems, incense?",
    options: [
      "Luxury goods were the lightest to pack",
      "Caravans moved at 30–40 km/day and the animals' feeding costs were enormous — only high margins survived the maths",
      "Bandits refused to rob luxury goods",
      "Luxury goods paid no customs duty",
    ],
    answer: 1,
    explain:
      "The lecture's transport table: overland caravan — camels/mules/horses — 30–40 km/day, high-value luxury only, due to high feeding costs. River barges (10–20 km/day upstream) hauled bulk domestic goods — grain, stone, agricultural tax revenue. Ocean-going ships on monsoon and trade winds (100–150 km/day) carried international bulk and luxury — spices, textiles, timber, ceramics.",
  },
  {
    id: "b8",
    type: "output",
    q: "By the Commercial Revolution in Europe, the urban merchant class had made wealth liquid. Complete the lecture's line: wealth was measured in ______ rather than land.",
    answerText: "money and goods",
    explain:
      "The Commercial Revolution — a European economy based on trade, from the 11th century to the mid-18th — lifted cities like Venice, Florence and Milan past 1,00,000 residents. The rising urban merchant class changed what wealth even was: liquid — measured in money and goods rather than land — and they wrote the laws and policies to match.",
  },
  {
    id: "b9",
    type: "mcq",
    q: "What did the Enclosure movement actually do?",
    options: [
      "Distributed land equally among peasants",
      "Created legal property rights to land previously held in common — abolishing communal rights and consolidating small strips into massive private farms",
      "Built walls around medieval towns",
      "Ended feudal taxation",
    ],
    answer: 1,
    explain:
      "Before enclosures, the open-field system held a portion of land as \u201Ccommon\u201D — grazing rights, and a necessity of co-operation among the residents of the manor/village. Enclosure Acts through Parliament abolished communal rights and consolidated small strips into massive private farms, marked by fences, hedges and stone walls. Resistance was real: the Midland Revolt (1607) — thousands of peasants calling themselves \u201CDiggers\u201D and \u201CLevellers\u201D levelled enclosure fences in Northamptonshire and Warwickshire.",
  },
  {
    id: "b10",
    type: "short",
    q: "Explain the putting-out system: how did it work, and why does the lecture call it the beginning of the breaking of the guild system?",
    answerText:
      "Labour was available (the agricultural revolution had seen to that), but the guilds were the bottleneck: they held a monopoly on manufacturing, strictly limited the number of workers, set prices, and banned new technology.\nSo merchants developed a method of subcontracting production: the merchant distributed raw materials to workers; the workers completed the work in their own homes or small workshops; workers were paid wages.\nProduction slipped out of the guilds' city walls and into the countryside — the beginning of the breaking of the guild system, and the road to the factory.",
    explain:
      "Full marks name the four guild bottlenecks (monopoly, worker limits, price-setting, technology ban), the merchant's role (raw materials out, wages back), home workshops, and the consequence — the guild system begins to break.",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — THE MACHINE AGE  (why machines came · the textile
             wave · steam and Cottonopolis · labour · empire)
   ------------------------------------------------------------ */
const MACHINES: EbhExamQuestion[] = [
  {
    id: "m1",
    type: "mcq",
    q: "Why did people begin using machines for production? The lecture's demand story includes\u2026",
    options: [
      "Population rise (5–6.5 million in 1700 → 9–11 million by 1801), rising global trade, and textiles at 70–90% of manufactured exports",
      "A fall in population creating cheap labour",
      "The king ordering factories to be built",
      "Cotton prices falling to zero",
    ],
    answer: 0,
    explain:
      "Three engines: the Agricultural Revolution freed up labour; growing demand — population rose from 5–6.5 million in 1700 to 9–11 million by 1801, and global trade climbed from £6.5 million in 1700 to £14.7 million in 1760, reaching £43.2 million by 1800; and textiles accounted for 70% to 90% of all manufactured exports. Meanwhile the putting-out system had hit its ceiling — decentralised, slow, limited by human muscle.",
  },
  {
    id: "m2",
    type: "output",
    q: "Global trade figures from the lecture: £6.5 million in 1700, £14.7 million in 1760 — what was it by 1800?",
    code: "1700  \u00A36.5 million\n1760  \u00A314.7 million\n1800  ?",
    answerText: "£43.2 million",
    explain:
      "£43.2 million by 1800. Trade did not merely grow — it multiplied, and every twist of that demand put more pressure on the old ways of making things. Textiles, at 70–90% of manufactured exports, felt it first.",
  },
  {
    id: "m3",
    type: "mcq",
    q: "The Flying Shuttle (John Kay, 1733) let one weaver weave twice as much cloth, alone, at any width. What was the response?",
    options: [
      "Weavers celebrated a shorter working day",
      "In 1753 an angry mob attacked Kay, smashing his furniture and models; factory owners pirated the design (the \u201CShuttle Club\u201D) to avoid paying royalty; Kay fled to France",
      "Parliament granted Kay a monopoly and a pension",
      "The guilds licensed it immediately",
    ],
    answer: 1,
    explain:
      "Productivity doubled — and terror followed. In 1753 an angry mob attacked, smashing his furniture and destroying his models. Factory owners quickly pirated his design — the \u201CShuttle Club\u201D — to avoid paying royalty to John Kay. Kay fled to France. The pattern repeats with every machine of this era: productivity up, resistance violent, inventors unlucky.",
  },
  {
    id: "m4",
    type: "mcq",
    q: "The Spinning Jenny (James Hargreaves, 1764) changed spinning because\u2026",
    options: [
      "It used water power instead of muscle",
      "A single worker turned a wheel that rotated multiple spindles at once — the old wheel spun one thread; yarn output rose eightfold",
      "It wove cloth instead of spinning yarn",
      "It ran on coal from Lancashire",
    ],
    answer: 1,
    explain:
      "One worker, many spindles: the traditional wheel could spin only one single thread of yarn at a time; the Jenny rotated multiple spindles at once — an eightfold jump in an individual's yarn production. The spinners answered in 1768: a mob broke into Hargreaves' house in Blackburn, smashed his spinning jennies and forced him to flee the town.",
  },
  {
    id: "m5",
    type: "output",
    q: "Richard Arkwright — a barber and wigmaker — built the world's first water-powered cotton spinning mill in Derbyshire. Name the mill and the year.",
    code: "Water frame patented      → 1769\n____ Mill, Derbyshire     → ____\n(world's first water-powered\ncotton spinning mill)",
    answerText: "Cromford Mill, 1771",
    explain:
      "Cromford Mill, 1771 — the world's first water-powered cotton spinning mill, today the centerpiece of the Derwent Valley Mills UNESCO World Heritage Site. Arkwright's second mill, Birkacre (1777, Lancashire), was burnt in the 1779 machine-breaking riots.",
  },
  {
    id: "m6",
    type: "mcq",
    q: "Why did the Water Frame — machines too heavy for homes — give birth to the factory system?",
    options: [
      "Workers preferred commuting",
      "Water-powered machinery could not fit in a cottage: production had to move to the machine — centralised mills, mass production of cloth, 300–400 workers per complex by 1800",
      "The government banned home production",
      "Home workers went on strike",
    ],
    answer: 1,
    explain:
      "Spinning had relied strictly on human muscle — limited in strength and speed. Arkwright's water-powered machinery was too heavy for homes: workers moved to the machine, and the factory system was born, enabling mass production of cloth. By 1788 Arkwright-style water mills jumped to 143; by 1800, 300 of the 900 factories were massive, centralised \u201CArkwright-type\u201D complexes employing 300–400 workers each. His patents (1769, Grand Patent 1775) built a monopoly — broken in 1785 when courts invalidated them.",
  },
  {
    id: "m7",
    type: "mcq",
    q: "What did James Watt's rotary steam engine (patented 1781) break?",
    options: [
      "The guilds' price controls",
      "The dependence on geography and nature — water power needed fast-flowing rivers; steam meant factories could be built anywhere, and they relocated to urban centres closer to ports",
      "The Navigation Acts",
      "The cloth mill monopoly in Derbyshire",
    ],
    answer: 1,
    explain:
      "Water power was captive to geography — fast-flowing rivers to turn the wheels, far from consumer markets and ports. Watt's engine — a mechanical device converting heat energy into mechanical work using pressurised steam — liberated production from the river valley: factories moved to urban centres closer to ports. Steam mill towns grew organized around factories.",
  },
  {
    id: "m8",
    type: "output",
    q: "Manchester — \u201CCottonopolis.\u201D Its population was about 20,000 in 1771. What was it by 1851?",
    code: "Mills: 1802 → 50+   |   1816 → 43 large\n       1853 → 108 massive cotton mills\nPopulation: 1771 → 20,000   |   1851 → ?",
    answerText: "3,00,000 (300,000)",
    explain:
      "From 20,000 in 1771 to 3,00,000 (300,000) in 1851. The mills tell the same story: over 50 textile mills by 1802; 43 large-scale working mills by 1816 — McConnel & Kennedy alone employed over 1,000 workers in a single location; 108 massive cotton mills by 1853. Inputs made it possible: coal from the nearby South Lancashire coalfield, carried by the Bridgewater Canal (opened 1761), and cotton arriving at the Liverpool port.",
  },
  {
    id: "m9",
    type: "mcq",
    q: "The Luddite protests (1811–1816): what were they, and what did the state answer with?",
    options: [
      "Peaceful petitions — answered with a royal commission",
      "Workers breaking into factories to smash automated knitting frames and power looms — \u201Ccollective bargaining by riot\u201D; the Frame Breaking Act 1812 made machine-wrecking a capital crime, and seventeen Luddites were executed in 1813",
      "A political party contesting elections",
      "A merchant strike against taxes",
    ],
    answer: 1,
    explain:
      "The Luddites — named for Ned Ludd, folklore's young weaver's apprentice who broke two knitting frames — broke into factories to smash automated knitting frames and power looms: collective bargaining by riot. The British government prioritised industrial property over human lives: the Frame Breaking Act 1812 made machine-wrecking a capital crime — \u201CIs there not blood enough upon your penal code?\u201D (Lord Byron) — and in 1813 seventeen Luddites were executed. Then came Peterloo (1819): a peaceful crowd of 60,000 workers in Manchester demanding parliamentary reform; cavalry charged; 18 people died and hundreds were injured.",
  },
  {
    id: "m10",
    type: "short",
    q: "Trace the labor movement from the Combination Acts to the Combinations of Workmen Act 1825. What changed — and what didn't?",
    answerText:
      "Phase 1 (1760s–1820s): early \u201CFriendly Societies\u201D — secret mutual-aid groups; unions were looked at with suspicion. The Combination Acts (1799 & 1800) outlawed trade unions and collective bargaining. Resistance went riotous: the Luddite protests (1811–16), and the state answered with the Frame Breaking Act 1812 (a capital crime) and, at Peterloo (1819), cavalry against 60,000 peaceful workers — 18 dead.\nPhase 2 (1824–1830s): the Repeal of the Combination Act (1824) — 35 separate statutes had banned workers from organising over a 520-year period — unleashed a wave of strikes through late 1824 and early 1825. The panicked manufacturing elite approached the government, and the Combinations of Workmen Act 1825 legalized \u201Cstatutory unions\u201D — but stripped them of effective collective action: unions could meet and combine only to discuss their own wages, prices or hours; combining to strike over machinery use, hiring/firing practices or the number of apprentices stayed illegal.\nSo: unions existed now, but real bargaining was still driven underground.",
    explain:
      "The arc that earns full marks: outlawed (1799/1800) → riot (Luddites) → blood (Frame Breaking Act 1812, 1813 executions, Peterloo 1819) → repeal (1824) → strike wave → the 1825 Act's half-freedom (wages and hours only) → underground and alternate methods.",
  },
  {
    id: "m11",
    type: "mcq",
    q: "Phase Three (1830s–1850s) took the fight into law and politics. In 1834, six farm labourers from Tolpuddle, Dorset — the Tolpuddle Martyrs — were punished for…",
    options: [
      "Smashing threshing machines at night",
      "Swearing unlawful secret oaths while organising a friendly society — lawful organising, punished anyway",
      "Refusing to work more than ten hours a day",
      "Printing the Chartist petition without a licence",
    ],
    answer: 1,
    explain:
      "The Tolpuddle Martyrs (1834) prove the era's central lesson: even lawful organising was punished. The six men had formed a friendly society — legal after the 1825 Act — but were convicted for swearing unlawful secret oaths and transported to Australia. The outcry won them a pardon and a famous place in union history: Tolpuddle proved the movement needed political power, not just members.",
  },
  {
    id: "m12",
    type: "mcq",
    q: "The legislative wins of Phase Three include the Factory Act 1833 and the Ten Hours Act 1847. What exactly did the Ten Hours Act do?",
    options: [
      "Banned all child labour in textile mills",
      "Set a ten-hour working-day limit for women and children/teenagers — the fruit of a 15-year movement",
      "Legalised strikes for the first time",
      "Created the position of Governor-General of factories",
    ],
    answer: 1,
    explain:
      "The Factory Act 1833 was the first major workplace regulation; the Ten Hours Act 1847 capped the working day at ten hours for women and children/teenagers — the fruit of a fifteen-year campaign. Together with the Public Health Act 1848, the state had begun to regulate what the market had been left to abuse.",
  },
  {
    id: "m13",
    type: "mcq",
    q: "The Chartist Movement (1838–1848) petitioned Parliament with the 'People's Charter'. What did it demand?",
    options: [
      "A ten-hour day and a minimum wage for mill workers",
      "Nationalisation of the cotton mills",
      "Political democracy for workers: votes for all men, secret ballots, no property requirements for MPs",
      "Repeal of the Corn Laws only",
    ],
    answer: 2,
    explain:
      "The Chartists demanded political democracy for workers — votes for all men, the secret ballot, and no property requirements for MPs. The petitions were defeated (the movement's defeat), but nearly every demand on the list is ordinary politics today: the defeat that won.",
  },
  {
    id: "m14",
    type: "mcq",
    q: "The lecture dates the three economic systems' rise in order. Which sequence is correct?",
    options: [
      "Socialism → capitalism → communism",
      "Capitalism 1760s–90s → socialism 1830s–50s → communism 1850s–90s",
      "Communism → socialism → capitalism",
      "All three emerged together after 1815",
    ],
    answer: 1,
    explain:
      "Capitalism rose first (1760s–90s): machines needed concentrated capital, Adam Smith's laissez-faire supplied the ideology, and canals, turnpikes, railways and the stock market provided the infrastructure and legal innovations. Socialism (1830s–50s) and communism (1850s–90s) were responses to what capitalism did to labour — exploitation, inequality, insecurity.",
  },
  {
    id: "m15",
    type: "mcq",
    q: "Marx & Engels' communist answer rests on one prediction about capitalism. Which is it?",
    options: [
      "Capitalism will slowly reform itself into socialism through elections",
      "Capitalism inevitably creates two classes — the bourgeoisie who own the means of production and the proletariat who sell labour — and revolution leads to a stateless, classless society",
      "Capitalism and socialism will merge into a mixed economy",
      "Markets maximise efficiency when left unregulated",
    ],
    answer: 1,
    explain:
      "Marx & Engels: capitalism inevitably creates two classes — bourgeoisie (owners of the means of production) and proletariat (those who must sell their labour) — and class struggle ends in revolution, producing a stateless, classless society. Option D is Adam Smith's argument, not Marx's; option A is the reformist path the lecture contrasts with it.",
  },
  {
    id: "m16",
    type: "short",
    q: "The Industrial Revolution's social-cultural ledger: name three ways it rewrote everyday life, and connect each to the machine age.",
    answerText:
      "Cities: populations swelled around mills and factories — Manchester's ~20,000 (1771) became over 300,000 by 1851 — urbanisation is the factory system written in geography. Classes: society re-sorted into the industrial middle class (owners, managers, merchants) and the working class (wage labourers in the mills) — the two classes Marx named. Time: the clock became the boss — working hours replaced sun and season, 'time is money' became the industrial creed, and time-discipline (shifts, schedules, the factory bell) governed the day. Any three with the causal link to machines earns the marks.",
    explain:
      "The connective thread the lecture wants: each social change is a downstream effect of the factory system — machines required factories, factories required cities, cities resorted classes, and all of them re-ordered time.",
  },
];

/* ------------------------------------------------------------
   GROUP 4 — THE CORPORATION  (Taylor, the impact recap, Fayol,
             the rise of large corporations, the World Wars)
   ------------------------------------------------------------ */
const CORPORATION: EbhExamQuestion[] = [
  {
    id: "r1",
    type: "mcq",
    q: "Adam Smith's pin factory (1776) opens the division-of-labour story. What did dividing the job into 18 distinct operations demonstrate?",
    options: [
      "Pins could only be made by machines",
      "One artisan working alone made 1 pin a day; with the job divided, output exploded to thousands per day",
      "Pins were cheaper to import than to make",
      "Eighteen foremen were needed per worker",
    ],
    answer: 1,
    explain:
      "Smith's pin factory: one worker producing an entire pin alone managed only one pin per day; the job divided into 18 distinct operations — each person assigned one task — and productivity exploded. Division of labour is the seed idea that Taylor will scientificise a century later.",
  },
  {
    id: "r2",
    type: "mcq",
    q: "Taylor's pig-iron experiments at Bethlehem Steel (1898–1901): what did direction by time-and-motion study do to Schmidt's daily output?",
    options: [
      "12.5 tons → 47 tons per day",
      "47 tons → 12.5 tons per day",
      "1 ton → 18 tons per day",
      "No measurable change — it was a theory exercise",
    ],
    answer: 0,
    explain:
      "Taylor selected a physically fit, highly motivated worker — Schmidt — and directed him through precise timed movements: output rose from 12.5 to 47 tons per day. The stopwatch worked — and both raised a human cost the lecture is careful to weigh.",
  },
  {
    id: "r3",
    type: "mcq",
    q: "Taylorism replaced which way of organising work?",
    options: [
      "The joint-stock charter",
      "Rule-of-thumb — work done by tradition and guesswork — with stopwatch-measured, standardised 'science'",
      "The guild apprenticeship ladder",
      "Fayol's fourteen principles",
    ],
    answer: 1,
    explain:
      "From rule-of-thumb to stopwatch: Taylor timed the shop floor, standardised every task, and made management itself a science. (The guild ladder is centuries earlier; Fayol is the contemporary he argued with.)",
  },
  {
    id: "r4",
    type: "mcq",
    q: "Fayol's fourth principle, 'unity of command', directly contradicts which feature of Taylor's system?",
    options: [
      "Taylor's time-and-motion studies",
      "Taylor's assignment of eight foremen per worker (functional foremanship)",
      "Taylor's piece-rate pay",
      "Taylor's standardised tools",
    ],
    answer: 1,
    explain:
      "Taylor assigned eight foremen per worker, each ruling one aspect of the job; Fayol insisted each employee receive orders from only one supervisor. The disagreement is the clearest marker of their two altitudes: shop-floor efficiency vs organisational order.",
  },
  {
    id: "r5",
    type: "mcq",
    q: "The Taylor-vs-Fayol ledger: what altitude does each man write from?",
    options: [
      "Both write from the executive desk",
      "Taylor = the technical/operational shop floor; Fayol = the broader administrative frame of the whole firm",
      "Taylor = government policy; Fayol = the union hall",
      "Taylor = the boardroom; Fayol = the machine shop",
    ],
    answer: 1,
    explain:
      "Taylor examined efficiency at the shop floor — the technical/operational level (time studies, standardised tasks, piece rates). Fayol — French engineer, mining-firm CEO from the 1880s — asked the bigger question: how do you run the whole firm? His answer: six business activities, five functions, fourteen principles. Both still anchor management curricula.",
  },
  {
    id: "r6",
    type: "mcq",
    q: "The joint-stock corporation solved the capital problem that railroads and massive factories created. How?",
    options: [
      "By borrowing only from the government",
      "By share-based ownership — e.g. 1,000 shares at ₹50 each — so many investors pool capital, with ownership continuing indefinitely through transferred shares",
      "By guild-level fundraising",
      "By refusing to pay debts — corporations cannot be sued",
    ],
    answer: 1,
    explain:
      "The joint-stock corporation answered with share-based ownership: 1,000 shares at ₹50 each lets thousands of small investors pool the enormous capital railroads and factories demanded, ownership continues indefinitely through transferred shares, and limited liability caps each investor's loss if the corporation fails to pay debts. Legal innovation, not just machinery, built the modern firm.",
  },
  {
    id: "r7",
    type: "mcq",
    q: "Ford's assembly line (1910s–1920s) is the mass-production exhibit. How many distinct steps did it split automobile manufacturing into?",
    options: [
      "18 steps — one per pin",
      "84 distinct steps, flowing to 50–60 cars per day",
      "8 steps, one per foreman",
      "1,000 steps, one per shareholder",
    ],
    answer: 1,
    explain:
      "Ford's assembly line split automobile manufacturing into 84 distinct steps, each standardised by Taylor-style task analysis, flowing to 50–60 cars per day. Taylor's and Fayol's standardised-task concepts enabled mass-production efficiency — the ideas and the moving belt meet.",
  },
  {
    id: "r8",
    type: "mcq",
    q: "WWI (1914–1918) put business under the state — 'state capitalism'. Which pairing from the war-industries ledger is correct?",
    options: [
      "Renault supplied 40% of Allied explosives; DuPont built the first modern tank",
      "DuPont supplied approximately 40% of all explosives to the Allies (1914–1917); Renault's FT became the world's first modern tank",
      "Coca-Cola supplied explosives; Gillette built tanks",
      "Jagat Seth financed the war effort",
    ],
    answer: 1,
    explain:
      "DuPont ran from 1914 to 1917 and supplied approximately 40% of all explosives to the Allies — output multiplied ×70. Renault transitioned from civilian vehicles to armaments; the Renault FT, recognised as the world's first modern tank, became foundational for all tank design that followed.",
  },
  {
    id: "r9",
    type: "mcq",
    q: "Coca-Cola's WWII story is the consumer-goods case in the war ledger. What did the company secure?",
    options: [
      "A monopoly on steel rationing",
      "A rationing exemption and 64 overseas bottling plants — plus Fanta, invented for the German market when syrup supplies were cut",
      "The exclusive contract to feed the US Army",
      "State ownership of its bottling network",
    ],
    answer: 1,
    explain:
      "Coca-Cola lobbied successfully for a rationing exemption (its product declared essential for morale), rode the war to 64 overseas bottling plants, and Fanta was created for the German market when wartime shortages cut off syrup supplies. War, ironically, built the global distribution network.",
  },
  {
    id: "r10",
    type: "short",
    q: "Trace how the World Wars (1914–1945) redrew the business map: state control during the wars, disruption between them, and the 1945 settlement.",
    answerText:
      "During the wars: 'state capitalism' — governments directed industry, fixed priorities and prices; business converted to war production (Renault's FT tank, DuPont's ~40% of Allied explosives, Coca-Cola's rationing exemption and 64 overseas bottling plants, Gillette's 3-in-1). Between the wars: trade disrupted — blocks, tariffs, the Depression — and the international system that free trade had built came apart. The 1945 settlement: European powers too weakened to maintain imperial control — decolonisation follows through 1945–1950s — and the United States emerges as number one global power militarily and economically. Two wars, one lesson: the state can mobilise an economy overnight — and business learned to live with that fact.",
    explain:
      "The three-beat answer that earns full marks: mobilisation (state capitalism, war industries) → disruption (trade blocks, Depression, broken international system) → settlement (US superpower, decolonisation 1945–1950s, Module 5's road into Indian business history).",
  },
];

/* ------------------------------------------------------------
   GROUP 5 — INDIAN BUSINESS  (Module 5: the EIC charters and
             the entrepreneurs beside them, 1600s–1813)
   ------------------------------------------------------------ */
const INDIA: EbhExamQuestion[] = [
  {
    id: "i1",
    type: "mcq",
    q: "The East India Company's Charter of 1600 — granted by Queen Elizabeth I — was deliberately limited in scope. What did it contain?",
    options: [
      "Trade monopoly plus the right to govern territory and raise armies",
      "An exclusive trade monopoly for 15 years in the East Indies — purely commercial, with no administrative, judicial or military powers",
      "Permanent sovereignty over Bengal",
      "A banking licence for all of Asia",
    ],
    answer: 1,
    explain:
      "The 1600 charter was purely commercial: an exclusive trade monopoly for 15 years in the East Indies, deliberately withholding any administrative, judicial or military powers. A company of merchants — not a state. That comes later.",
  },
  {
    id: "i2",
    type: "mcq",
    q: "The Charter of 1661 changed the Company's character. What did Charles II's charter add?",
    options: [
      "A longer monopoly — 30 years instead of 15",
      "Territorial & administrative powers, judicial powers (civil and criminal justice under English law), and military powers — troops, fortifications, weapons, even declaring war or peace",
      "The exclusive right to trade with China",
      "Permission to manufacture in England",
    ],
    answer: 1,
    explain:
      "The 1661 charter confirmed the monopoly but added territorial & administrative powers, judicial powers (civil and criminal justice under English law), and military powers — raising troops, fortifying bases, building weapons, declaring war or peace. A trading company had become a quasi-state.",
  },
  {
    id: "i3",
    type: "mcq",
    q: "The charters then eroded, step by step, through 1726–1784. Which pairing is correct?",
    options: [
      "1726 created the Governor-General; 1773 built the Mayor's Courts",
      "1726 established Royal Mayor's Courts in Madras, Bombay and Calcutta; 1753 limited judicial authority; 1773 created the position of Governor-General; 1784 extended Crown oversight of company operations",
      "1784 ended the monopoly; 1726 nationalised the Company",
      "1753 granted the military powers; 1784 removed them",
    ],
    answer: 1,
    explain:
      "The erosion sequence: 1726 — Royal Mayor's Courts in Madras, Bombay and Calcutta; 1753 — further limits on the Company's judicial authority; 1773 — superseded parts of the 1753 Charter and created the position of Governor-General; 1784 — extended Crown oversight of company operations. The quasi-state is being reeled back in, decade by decade.",
  },
  {
    id: "i4",
    type: "mcq",
    q: "1813 is the watershed year of Module 5. What happened?",
    options: [
      "The Company lost its Indian territories",
      "The Charter Act stripped the Company's exclusive trade monopoly — the doors opened to other British traders, and manufacturing began rising in India",
      "The Company was founded",
      "The Crown seized all Company assets",
    ],
    answer: 1,
    explain:
      "1813 stripped the East India Company of its exclusive trade monopoly (retaining only the China trade). The doors opened to other traders, manufacturing began rising in India, and Indian business roles evolved — the road runs to 1857 and beyond. 1600 → 1813: roughly 200 years of controlled colonial commerce.",
  },
  {
    id: "i5",
    type: "mcq",
    q: "Why did the Company need Indian intermediaries and middlemen at all?",
    options: [
      "British law required local partners",
      "The Company lacked local languages, geographical knowledge and social connections — Indian merchants brokered between company officials and local people/suppliers, facilitating purchases of local products and sales of British goods",
      "Middlemen were cheaper than ships",
      "The Mughal court banned direct European trade",
    ],
    answer: 1,
    explain:
      "Role 1 — intermediaries & middlemen: the East India Company lacked local languages, geographical knowledge and social connections. Indian merchants brokered between company officials and local people/suppliers — facilitating the purchase of local products and the sale of British goods. The Company could not operate without them.",
  },
  {
    id: "i6",
    type: "mcq",
    q: "Which figure embodies Role 2 — financiers & bankers — and which battle proved it?",
    options: [
      "Lovji Wadia — the Battle of Plassey",
      "Jagat Seth and his house — massive credit lines to the Company; a crucial player in the Battle of Plassey (1757), after which the Company captured significant Bengal territory",
      "Jamsetji Tata — the Third Anglo-Mysore War",
      "Queen Elizabeth I — Plassey",
    ],
    answer: 1,
    explain:
      "Jagat Seth and his house supplied massive credit lines to the East India Company and other trading companies — capital for military campaigns, trade operations, soldier payments, weapons and uniforms — and were a crucial player in the Battle of Plassey (1757), after which the Company captured significant Bengal territory.",
  },
  {
    id: "i7",
    type: "mcq",
    q: "Lovji Wadia, the Parsi entrepreneur of 1736, built which business — and what stands of it today?",
    options: [
      "Opium trading in Calcutta — ended by 1813",
      "Shipbuilding in the Bombay dockyards on East India Company contracts for ships and docks — the group still exists after nearly 300 years, later expanding into clothing and apparel (the Bombay Dyeing brand)",
      "Silk weaving in Bengal — absorbed by the Crown",
      "Banking in Surat — dissolved in 1757",
    ],
    answer: 1,
    explain:
      "Role 3 — shipping & maritime trade: Lovji Wadia established the Wadia Group in 1736, shipbuilding in the Bombay dockyards on British East India Company contracts for ships and docks. Still in existence after nearly 300 years; Bombay grew as a major port, and the group later expanded into clothing and apparel — the Bombay Dyeing brand.",
  },
  {
    id: "i8",
    type: "mcq",
    q: "Between the Company's gaps, Indian entrepreneurs built their own trades. Which triangle of commerce does the lecture name?",
    options: [
      "Tea, silk and indigo to Europe",
      "Opium, China and the raw-cotton trade",
      "Salt, spices and pepper to Arabia",
      "Steel, coal and railways",
    ],
    answer: 1,
    explain:
      "Beside the intermediary, financier and shipbuilder roles, Indian entrepreneurs filled the Company's gaps with their own long-distance commerce: opium, China and the raw-cotton trade — the triangle that funded many of the great Indian business houses.",
  },
  {
    id: "i9",
    type: "mcq",
    q: "Put the Company's arc in order. Which sequence is right?",
    options: [
      "1661 commercial charter → 1600 quasi-state → 1813 monopoly begins",
      "1600 commercial charter → 1661 quasi-state → erosion (1726/1753, 1773/1784) → 1813 monopoly ends",
      "1600 military charter → 1661 monopoly ends → 1773 charter begins",
      "1726 charter founded → 1773 monopoly → 1813 Governor-General",
    ],
    answer: 1,
    explain:
      "The arc: 1600 commercial charter (Elizabeth I, trade only) → 1661 quasi-state (Charles II adds territorial, judicial, military powers) → erosion (1726/1753 Mayor's Courts and judicial limits, 1773/1784 Governor-General and Crown oversight) → 1813 monopoly ends. ~200 years of controlled colonial commerce.",
  },
  {
    id: "i10",
    type: "short",
    q: "'The Company wrote the rules, but Indian entrepreneurs did the work the Company couldn't.' Trace the charters 1600→1813 and the entrepreneur roles beside them.",
    answerText:
      "The rules: 1600 — Elizabeth I's purely commercial charter (15-year East Indies monopoly, no governing powers); 1661 — Charles II adds territorial & administrative, judicial and military powers, making the Company a quasi-state; 1726/1753 — Royal Mayor's Courts and judicial limits begin the erosion; 1773/1784 — the Governor-General position and Crown oversight complete it; 1813 — the Charter Act strips the trade monopoly, doors open, manufacturing rises in India. The work: Indian entrepreneurs filled the Company's gaps — Role 1, intermediaries & middlemen (the Company lacked local languages, geography, connections); Role 2, financiers & bankers (Jagat Seth's credit lines, crucial at Plassey 1757); Role 3, shipping & maritime trade (Lovji Wadia's 1736 Bombay shipyards, still alive ~300 years later as Bombay Dyeing's parent). Plus the triangle: opium, China, raw cotton.",
    explain:
      "Full marks needs both tracks in order: the charter arc (1600 commercial → 1661 quasi-state → 1726/1753/1773/1784 erosion → 1813 watershed) AND the three entrepreneur roles with their named figures — Jagat Seth, Lovji Wadia — plus the opium–China–cotton triangle.",
  },
];

export const EBH_EXAM_BANKS: Record<EbhExamGroup, EbhExamBank> = {
  lens: {
    group: "lens",
    title: "Module 1 · The Lens",
    subtitle: "Economics, business, history — the frame, and the three currents flowing through it",
    topics: "What is economics · what is business · what is history · rules & players · License Raj · IPR 1956 · Bajaj Auto · McDonald's & Cadbury · the weekend · Netflix · PESTLE",
    questions: [...LENS, ...CURRENTS],
  },
  before: {
    group: "before",
    title: "Module 2 · Early Systems",
    subtitle: "Pre-industrial economies — land, guilds and the first trade webs",
    topics: "Agrarian economies · feudal Europe · zamindari · guilds · Silk Road · enclosures · putting-out · trade routes",
    questions: BEFORE,
  },
  machines: {
    group: "machines",
    title: "Module 3 · The Machine Age",
    subtitle: "The Industrial Revolution and everyone it swept up",
    topics: "Flying shuttle · Spinning Jenny · Water Frame · Watt · Cottonopolis · Luddites · 1825 · Empire · Tolpuddle · Factory Acts · Chartists · economic systems",
    questions: MACHINES,
  },
  corporation: {
    group: "corporation",
    title: "Module 4 · The Corporation",
    subtitle: "Taylor, Fayol, the modern firm — and the World Wars that remade it",
    topics: "Pin factory · scientific management · Schmidt 12.5→47 · Fayol's 14 principles · joint-stock · Ford's 84 steps · state capitalism · DuPont 40% · Coca-Cola",
    questions: CORPORATION,
  },
  india: {
    group: "india",
    title: "Module 5 · Indian Business",
    subtitle: "The charters 1600→1813 — and the entrepreneurs beside them",
    topics: "Charter 1600 · Charter 1661 · erosion 1726–1784 · 1813 · middlemen · Jagat Seth · Lovji Wadia · opium-China-cotton",
    questions: INDIA,
  },
};

export const EBH_EXAM_GROUPS = Object.keys(EBH_EXAM_BANKS) as EbhExamGroup[];

export const EBH_TOTAL_QUESTIONS = EBH_EXAM_GROUPS.reduce(
  (n, g) => n + EBH_EXAM_BANKS[g].questions.length,
  0
);
