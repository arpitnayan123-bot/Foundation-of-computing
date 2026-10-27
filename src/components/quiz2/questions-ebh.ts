/* ============================================================
   QUIZ 2 — Economic & Business History mock bank (80 questions).

   Coverage — the Industrial Revolution stretch, L15 to L23,
   sliver by sliver exactly as the Quiz-2 syllabus reads:

     · factory  (L15 · L16)      — the factory is born: Arkwright's
                                   water frame, patents, Cromford Mill,
                                   mill discipline, Watt's engine,
                                   Manchester / Cottonopolis  (16)
     · labour   (L17 · L18 · L20)— the labour movement in three
                                   phases: conditions & Ned Ludd, the
                                   1799 Combination Acts, Peterloo,
                                   the 1824 repeal & 1825 half-freedom,
                                   Doherty & Owen, Tolpuddle, the
                                   Factory Acts, Ten Hours Act,
                                   Chartists                  (24)
     · empire   (L19)            — chartered companies, colonies as
                                   raw-material suppliers & markets,
                                   British ships & credit       (10)
     · systems  (L21 · L22)      — capitalism / socialism / communism,
                                   who owns the means of production,
                                   pros, cons & sector-fit, cities,
                                   classes, time discipline     (18)
     · taylor   (L23)            — Smith's pin factory, Taylor's
                                   time-and-motion studies, the
                                   pig-iron experiment, the human
                                   cost                         (12)

   The OLD EBH bank (topic "nonlinear" — trees, graphs and
   traversals) was WRONG for this history course and has been
   RETIRED wholesale: non-linear data structures belong to ATB,
   not to Economic & Business History.

   Every name, date, act and figure below is traced to the EBH
   deck itself (EbhParts4–7: water-frame, steam-cottonopolis,
   labor-movement, labor-phase2, empire, labor-phase3,
   econ-systems, systems-society, management-taylor). Currency is
   the deck's own: £ and shillings where the deck uses them.

   Type mix: 66 mcq · 10 short · 4 output (code panels carry
   timelines and before/after comparisons).
   ============================================================ */

import type { Quiz2Question } from "./quiz2-data";

export const EBH_QUIZ2_QUESTIONS: Quiz2Question[] = [
  /* ---------------- THE FACTORY IS BORN — L15 · L16 (16) ---------------- */

  {
    id: "ebh2-factory-01",
    type: "mcq",
    topic: "factory",
    q: "Richard Arkwright patents the water frame in 1769. By trade, before industry made him rich, Arkwright was a…",
    options: [
      "blacksmith and farrier",
      "weaver and shuttle-maker",
      "barber and wigmaker",
      "millwright and canal engineer",
    ],
    answer: 2,
    explain:
      "The deck introduces him as a barber and wigmaker by trade — industrialist by instinct. The machine that moved power from muscle to water came from outside the craft, which is exactly why the guild-trained spinners never saw it coming.",
  },
  {
    id: "ebh2-factory-02",
    type: "mcq",
    topic: "factory",
    q: "The water frame's key transformation, as the lecture frames it, was that it…",
    options: [
      "spun finer thread than the Spinning Jenny",
      "shifted the power source from human beings to natural resources — the first water-powered cotton spinning machine",
      "let one weaver weave cloth of any width alone",
      "replaced coal with water as the fuel of industry",
    ],
    answer: 1,
    explain:
      "Power moved from muscle to water: machines could run continuously without fatigue, drive heavier and more numerous machines at once, and hold productivity steady — roughly ten metres of cloth per hour, with any drop below that signalling a machine problem to repair.",
  },
  {
    id: "ebh2-factory-03",
    type: "mcq",
    topic: "factory",
    q: "Kay's shuttle and Hargreaves' Jenny stayed in cottages. Why did the water frame give birth to the FACTORY system?",
    options: [
      "Parliament banned home-based spinning after the riots of 1768",
      "It was the first machine cheaper than hand spinning",
      "Its water-powered machines were too heavy for homes and needed a constant, perennial water supply — so production moved to dedicated industrial spaces",
      "The guilds required all spinning to be licensed inside towns",
    ],
    answer: 2,
    explain:
      "Water power demanded machinery no cottage could hold and streams that didn't freeze in winter, for year-round 24/7 operation. The worker moved to the machine; large, centralised factories were born.",
  },
  {
    id: "ebh2-factory-04",
    type: "mcq",
    topic: "factory",
    q: "One Arkwright-type mill, specified: how many workers, and how many water-powered machines?",
    options: [
      "50–60 workers, about 10 machines",
      "100–150 workers, 15–20 machines",
      "300–400 workers, 25–40+ machines",
      "1,000+ workers under one roof, 60 machines",
    ],
    answer: 2,
    explain:
      "The factory, specified: 300–400 workers per facility and 25–40+ machines powered by water, running continuously — mass production at unprecedented scale. (The 1,000-worker figure belongs to McConnel & Kennedy's Manchester mill, decades later.)",
  },
  {
    id: "ebh2-factory-05",
    type: "mcq",
    topic: "factory",
    q: "Which mill — the world's first water-powered cotton spinning mill — did Arkwright open at Cromford in 1771?",
    options: [
      "Birkacre Mill",
      "Cromford Mill",
      "McConnel & Kennedy's mill",
      "The Derwent Mill",
    ],
    answer: 1,
    explain:
      "Cromford Mill, 1771, in Derbyshire — the world's first water-powered cotton spinning mill, strategically placed in the Derwent Valley, today a UNESCO World Heritage Site. Birkacre (1777) was the Lancashire mill later burnt in the 1779 machine-breaking riots.",
  },
  {
    id: "ebh2-factory-06",
    type: "mcq",
    topic: "factory",
    q: "Arkwright's 1775 'GRAND PATENT' extended his monopoly beyond the water frame itself to cover…",
    options: [
      "the preparatory carding process too",
      "the rotary motion of the steam engine",
      "the Bridgewater Canal's coal trade",
      "all spinning in Lancashire, by name",
    ],
    answer: 0,
    explain:
      "1775: a second massive patent covering the preparatory carding process. Other mill owners copied the technology anyway, court cases flew both ways — and in 1785 the courts invalidated the patents.",
  },
  {
    id: "ebh2-factory-07",
    type: "mcq",
    topic: "factory",
    q: "What happened to Arkwright's patents in 1785 — and what followed?",
    options: [
      "They were renewed for another fourteen years",
      "They were bought out by Parliament for the public",
      "The courts invalidated them — the monopoly broke, and expansion exploded: 143 Arkwright-type water mills by 1788, 300 massive centralised factories by 1800",
      "They were destroyed in the 1779 machine-breaking riots",
    ],
    answer: 2,
    explain:
      "1785: the monopoly broke. Removal of restrictions meant rapid expansion — one year later, 143 large-scale water mills; by 1800, 300 of the 900 factories were massive centralised 'Arkwright-type' complexes of 300–400 workers each.",
  },
  {
    id: "ebh2-factory-08",
    type: "output",
    topic: "factory",
    q: "The patent ledger, 1769–1800. Two lines are left blank — supply the missing counts.",
    code: "1769   Initial patent — the water frame machine\n1775   GRAND PATENT — preparatory carding\n       process covered too\n1785   Patents INVALIDATED — monopoly breaks\n1788   ____ large-scale water mills\n1800   ____ massive centralised factories",
    answerText:
      "1788 — 143 large-scale (Arkwright-type) water mills; 1800 — 300 massive centralised factories.",
    explain:
      "One year after the courts invalidated the patents the floodgates opened: 143 mills by 1788; by 1800, 300 massive centralised factories of 300–400 workers each — the factory system at scale.",
  },
  {
    id: "ebh2-factory-09",
    type: "mcq",
    topic: "factory",
    q: "Birkacre Mill (1777) and Arkwright's other Lancashire mills were burned in the 1779 machine-breaking riots. Why did workers destroy the machines?",
    options: [
      "They saw the machines as symbols of their exploitation",
      "To force the repeal of the Combination Acts",
      "To protest wage cuts from nine to seven shillings a week",
      "To answer the government's Frame Breaking Act",
    ],
    answer: 0,
    explain:
      "Workers burned and destroyed mills, Arkwright's included, seeing machines as symbols of their exploitation. (The nine-to-seven-shillings wage cut belongs to the Tolpuddle Martyrs of 1833; the Combination Acts were repealed only in 1824; the Frame Breaking Act of 1812 answered machine-breaking — it didn't cause these riots.)",
  },
  {
    id: "ebh2-factory-10",
    type: "mcq",
    topic: "factory",
    q: "What the factory 'achieved' and what workers 'endured', per the lecture. Which pairing is correct?",
    options: [
      "Achieved: equal wages for all hands · Endured: slower production",
      "Achieved: the end of the working class · Endured: shorter hours",
      "Achieved: a return to cottage industry at scale · Endured: the guilds' collapse",
      "Achieved: mass production and new social divisions — factory owners vs working class · Endured: 10–14-hour days, low wages, child labour",
    ],
    answer: 3,
    explain:
      "Achieved: energy moved from human power to renewable natural resources, the factory system, mass production, and new social divisions with wealth concentrating among industrialists. Endured: 10–14-hour days, low wages despite rising productivity, children employed in harsh conditions — and a distinct working class demanding shorter hours, higher wages, better conditions.",
  },
  {
    id: "ebh2-factory-11",
    type: "mcq",
    topic: "factory",
    q: "Before steam, water-powered mills were 'dependent on geography and nature'. What did that mean in practice?",
    options: [
      "They required fast-flowing rivers to turn water wheels, so mills sat in rural river valleys — away from consumer markets and ports",
      "They could only operate during the winter months",
      "They had to be built on the coast to receive cotton",
      "They required royal licenses tied to land ownership",
    ],
    answer: 0,
    explain:
      "Water wheels only turn where rivers run fast — so mills sat in rural, mountainous river valleys, far from consumer markets and ports. Geography, not commerce, chose the site.",
  },
  {
    id: "ebh2-factory-12",
    type: "mcq",
    topic: "factory",
    q: "James Watt's rotary steam engine — patented 1781 — broke the limitation. What does it do?",
    options: [
      "Converts heat energy into mechanical work by using pressurized steam",
      "Converts river current into rotary motion at higher speed",
      "Converts coal gas into municipal lighting",
      "Converts human muscle power into continuous rotation",
    ],
    answer: 0,
    explain:
      "Heat in (burning fuel) → pressurized steam (the working fluid) → mechanical work (rotation, on demand) — anywhere, no fast-flowing river required. It broke the limitation.",
  },
  {
    id: "ebh2-factory-13",
    type: "mcq",
    topic: "factory",
    q: "After Watt, where did factories go — and what grew around them?",
    options: [
      "They stayed in the valleys; canals brought the workers in",
      "They relocated to urban centres closer to ports, and steam mill towns organised around factories grew up around them",
      "They moved onto the surface of the coalfields themselves",
      "They returned to cottages, now with small steam engines",
    ],
    answer: 1,
    explain:
      "Geographical liberation: factories could be built anywhere, and they relocated to urban centres closer to ports. Around them grew steam mill towns — towns organised around factories. The next chapter of the deck is what that did to people: the labour movement, Luddites et cetera.",
  },
  {
    id: "ebh2-factory-14",
    type: "mcq",
    topic: "factory",
    q: "Why Manchester? The three inputs the lecture lists for Cottonopolis are…",
    options: [
      "Yorkshire wool, Thames banking, and the royal mint",
      "Iron ore, deep-sea fishing, and London insurance",
      "Peat, windmills, and canal tolls from Bristol",
      "South Lancashire coal, the Bridgewater Canal (1761) carrying coal 10 miles / 16 km, and Liverpool's port for cotton",
    ],
    answer: 3,
    explain:
      "Coal was available nearby — the South Lancashire coalfield; the Bridgewater Canal (1761) carried it 10 miles / 16 km to Manchester; and Liverpool's port brought cotton arriving from across the seas. Fuel, water-route and raw material in one town.",
  },
  {
    id: "ebh2-factory-15",
    type: "mcq",
    topic: "factory",
    q: "Manchester's mill count, year by year — the Cottonopolis counter reads:",
    options: [
      "20 mills (1802) → 43 (1816) → 68 (1853)",
      "50+ mills (1802) → 43 (1816) → 108 (1853)",
      "108 mills (1802) → 143 (1816) → 300 (1853)",
      "12 mills (1802) → 25 (1816) → 50 (1853)",
    ],
    answer: 1,
    explain:
      "Over 50 textile mills by 1802, 43 large-scale working mills by 1816 — McConnel & Kennedy employed over 1,000 workers in a single location — and 108 massive cotton mills by 1853, Cottonopolis at full roar. (143 by 1788 and 300 by 1800 are Arkwright's national counts — a different ledger.)",
  },
  {
    id: "ebh2-factory-16",
    type: "short",
    topic: "factory",
    q: "Why was Manchester christened 'Cottonopolis' — and which two population numbers tell the story?",
    answerText:
      "Watt's engine freed the mills from the rivers, and Manchester reorganised itself around the factory: over 50 mills by 1802, 43 by 1816 and 108 massive cotton mills by 1853 — fed by South Lancashire coal, the Bridgewater Canal and Liverpool's port. The population tells the growth: from 20,000 in 1771 to 3,00,000 by 1851 — Cottonopolis, the first industrial city.",
    explain:
      "The mill count climbs and the town swells with it — a 15-fold population rise across the steam age, the deck's definition of a city built around the factory.",
  },

  /* ---------------- THE LABOUR MOVEMENT — L17 · L18 · L20 (24) ---------------- */

  {
    id: "ebh2-labour-01",
    type: "mcq",
    topic: "labour",
    q: "The deck defines the labour movement as…",
    options: [
      "a political party of factory owners campaigning for free trade",
      "the collective organisation of the working class to further their shared political and economic interests",
      "a charitable society funded by industrialists to reform the poorhouses",
      "the government's inspection service for factory safety",
    ],
    answer: 1,
    explain:
      "Its tool: collective bargaining — negotiation between employers and a labor union representing the workers, to set wages, working hours and employment conditions. Its form: trade unions.",
  },
  {
    id: "ebh2-labour-02",
    type: "short",
    topic: "labour",
    q: "What factory conditions bred the labour movement — and what were the movement's tool and its form?",
    answerText:
      "Dangerous conditions — unguarded machines, dust, injury — long hours of 12–16 a day, and child labour ('small hands, smaller wages') bred resistance, first as unorganised secret societies from the 1760s. The movement's tool was collective bargaining — negotiation between employers and a labor union over wages, working hours and employment conditions — and its form was the trade union.",
    explain:
      "The factory's conditions built their own opposition: the movement is defined by whom it organises (the working class) and how (collectively).",
  },
  {
    id: "ebh2-labour-03",
    type: "mcq",
    topic: "labour",
    q: "'Ned Ludd' — the flag name of the machine-breakers — began as…",
    options: [
      "a Midlands mill owner who cut wages",
      "folklore: a young weaver's apprentice who broke two knitting frames",
      "the MP who drafted the Combination Acts",
      "a Manchester newspaper's pseudonymous editor",
    ],
    answer: 1,
    explain:
      "Folklore first: a young weaver's apprentice who broke two knitting frames. His name became the flag for everyone who answered the machine with a hammer.",
  },
  {
    id: "ebh2-labour-04",
    type: "mcq",
    topic: "labour",
    q: "What did the Combination Acts of 1799–1800 do?",
    options: [
      "Legalised friendly societies for the first time",
      "Outlawed trade unions and collective bargaining — organising became conspiracy",
      "Fixed a maximum twelve-hour day for children",
      "Created the first factory inspection service",
    ],
    answer: 1,
    explain:
      "Unions and collective bargaining outlawed; organising became conspiracy. The secret resistance of the 1760s–90s was driven deeper underground — the first state answer to worker organising.",
  },
  {
    id: "ebh2-labour-05",
    type: "mcq",
    topic: "labour",
    q: "The Luddite protests of 1811–1816: what did the machine-breakers smash, and what did the lecture call it?",
    options: [
      "Steam engines in the coalfields — 'the machinery tax riots'",
      "Automated knitting frames and power looms — 'collective bargaining by riot'",
      "Canal boats and toll houses — 'the turnpike war'",
      "Parish workhouses — 'the poor man's petition'",
    ],
    answer: 1,
    explain:
      "1811–1816: smashing automated knitting frames and power looms — the deck's unforgettable phrase is 'collective bargaining by riot'.",
  },
  {
    id: "ebh2-labour-06",
    type: "mcq",
    topic: "labour",
    q: "The state's answer, 1812: the Frame Breaking Act made machine-wrecking…",
    options: [
      "punishable by seven years' transportation",
      "a capital crime — punishable by death",
      "an offence fined at one shilling per frame",
      "legal if the machines were more than ten years old",
    ],
    answer: 1,
    explain:
      "The British government prioritised industrial property over human lives — machine-wrecking became a capital crime. Lord Byron protested the same year: 'Is there not blood enough upon your penal code?'",
  },
  {
    id: "ebh2-labour-07",
    type: "mcq",
    topic: "labour",
    q: "Under the Frame Breaking Act, how many Luddites were executed in 1813?",
    options: ["three", "seven", "seventeen", "seventy"],
    answer: 2,
    explain:
      "Seventeen Luddites were executed in 1813 under the new law. (The 'seven' distractor echoes the seven years' transportation handed to the Tolpuddle Martyrs — a different case, two decades later.)",
  },
  {
    id: "ebh2-labour-08",
    type: "mcq",
    topic: "labour",
    q: "Peterloo, 1819. Which pairing of facts is correct?",
    options: [
      "6,000 weavers struck in Manchester; two died; the Combination Acts were repealed the next year",
      "60,000 peaceful workers gathered in Manchester demanding parliamentary reform; the cavalry charged; 18 people died and hundreds were injured",
      "60,000 workers rioted in London; the army fired; reform passed within months",
      "16,000 spinners marched on Cromford; the mill was burned; Arkwright fled",
    ],
    answer: 1,
    explain:
      "A peaceful crowd of 60,000 workers in Manchester — demanding parliamentary reform — met by a cavalry charge: 18 dead, hundreds injured. The massacre became the movement's symbol of the state answering organising with blood.",
  },
  {
    id: "ebh2-labour-09",
    type: "mcq",
    topic: "labour",
    q: "The repeal of 1824 had two architects. Who did what?",
    options: [
      "Joseph Hume organised the strike wave; Francis Place drafted the 1825 Act",
      "Robert Owen supplied the funds; John Doherty collected the petitions",
      "Francis Place, a tailor, compiled the evidence of working-class hardship; Joseph Hume, the radical MP, introduced the repeal legislation",
      "Lord Byron moved the bill; Lord Baltimore seconded it",
    ],
    answer: 2,
    explain:
      "A tailor's files and an MP's bill: Place documented workers' hardships — the crucial evidence; Hume carried the legislation. Their combined case: the Combination Acts were the primary cause of industrial violence and labour disputes.",
  },
  {
    id: "ebh2-labour-10",
    type: "mcq",
    topic: "labour",
    q: "How much did the 1824 repeal actually sweep away?",
    options: [
      "Only the two Combination Acts of 1799–1800",
      "35 separate statutes passed over ~500 years — including the Laborer's Act of 1425, which had banned collective bargaining among masons",
      "500 statutes over 35 years, none older than 1800",
      "Every labour law since the Norman conquest, with no exceptions kept",
    ],
    answer: 1,
    explain:
      "Not just two acts — 35 statutes spanning roughly 500 years, back to the 14th century, including the Laborer's Act of 1425. The repeal legalised forming and joining unions, collective bargaining over wages, hours and conditions, and protection from conspiracy prosecution for organising or recruiting.",
  },
  {
    id: "ebh2-labour-11",
    type: "mcq",
    topic: "labour",
    q: "The market-based argument that won the repeal, as Place and Hume told Parliament:",
    options: [
      "Wages are set by royal commissioners, so unions would change nothing",
      "Unions raise wages by restricting labour supply, which harms exports",
      "Machinery taxes should fund wages instead of collective bargaining",
      "Wages are determined by natural laws of supply and demand — legalising unions wouldn't break the market; it would merely let the market speak",
    ],
    answer: 3,
    explain:
      "Economic logic addressed to a Parliament of political economists: legalise unions and the artificial tensions dissolve through improved communication. That argument carried the 1824 watershed.",
  },
  {
    id: "ebh2-labour-12",
    type: "mcq",
    topic: "labour",
    q: "The unexpected consequence: a massive strike wave rolled through late 1824 and early 1825. Where — and why did owners cave?",
    options: [
      "The Cornish tin mines; owners feared the loss of naval contracts",
      "The London docks only; owners feared Parliament's new inspectors",
      "The Scottish linen mills; owners preferred a winter shutdown",
      "Shipping, Manchester's textile mills and the coal mines; an economic boom meant high demand, so factories could not afford idle machinery and accepted wage demands",
    ],
    answer: 3,
    explain:
      "A wave of coordinated strikes swept shipping, the textile mills (particularly Manchester) and the coal mines. The boom was the lever: high market demand meant closures were unaffordable, so wage demands were accepted.",
  },
  {
    id: "ebh2-labour-13",
    type: "mcq",
    topic: "labour",
    q: "The strike wave's headline number, per the lecture:",
    options: [
      "textile weavers won a 50% wage rise across Lancashire",
      "coal miners secured wage increases of up to 80%",
      "dock workers doubled their pay in one month",
      "miners won the eight-hour day in the pits",
    ],
    answer: 1,
    explain:
      "Coal miners secured wage increases of up to 80% — concrete proof of what unified action could achieve, and a lesson that fed Phase Three's national unions.",
  },
  {
    id: "ebh2-labour-14",
    type: "mcq",
    topic: "labour",
    q: "Why did the 1825 Combinations of Workmen Act hand back only a HALF-freedom?",
    options: [
      "It legalised unions as 'statutory unions' but stripped effective collective action — negotiation only over wages and hours; striking over machinery use, hiring/firing or apprentice numbers stayed illegal",
      "It repealed the 1824 Act outright and restored the 1799 bans",
      "It legalised unions only for miners and textile weavers",
      "It banned unions but tolerated friendly societies as before",
    ],
    answer: 0,
    explain:
      "Read the 1825 Act like a lawyer: legalised — unions may exist; permitted — meeting and combining to discuss their own wages, prices or hours of work; still illegal — combining to strike over machinery use, hiring/firing practices, or the number of apprentices. Pressuring non-union workers was criminalised and common-law immunity removed — so organising drifted underground again.",
  },
  {
    id: "ebh2-labour-15",
    type: "short",
    topic: "labour",
    q: "Why is 1824–1825 remembered as 'victory and defeat in one breath' — and how long did the legal stagnation that followed last?",
    answerText:
      "The 1824 repeal swept away 35 statutes spanning ~500 years and gave unions their first legal recognition — the victory no fine print could erase. Within a year the 1825 Act stripped practical bargaining power — wages and hours only — pushing organising underground: the defeat. No major reform followed for 45–50 years, into the 1870s; full legal recognition came only in 1871.",
    explain:
      "The paradox ledger: historic recognition and renewed restriction in the space of twelve months — the tension that builds toward Phase Three.",
  },
  {
    id: "ebh2-labour-16",
    type: "mcq",
    topic: "labour",
    q: "Phase Three's first attempt at a national trade-union centre — who founded it, when, and how big did it get?",
    options: [
      "Robert Owen — the GNCTU, February 1834, reaching 100,000 members",
      "Francis Place — the ASE, 1830, reaching 500 London members",
      "Joseph Hume — the Chartists, 1838, reaching one million signatures",
      "John Doherty, an Irish unionist — the NAPL, July 1830, reaching 10,000–20,000 members within 6–12 months",
    ],
    answer: 3,
    explain:
      "The National Association for the Protection of Labor, founded July 1830 by John Doherty: textile workers, mechanics, blacksmiths, potters and miners under one umbrella — the first attempt at a national trade-union centre.",
  },
  {
    id: "ebh2-labour-17",
    type: "mcq",
    topic: "labour",
    q: "The NAPL was finished by 1832. What killed it?",
    options: [
      "The Unlawful Oaths Act prosecutions of 1831",
      "Internal disagreements and high fees — £1 per society, one shilling a member",
      "A parliamentary ban passed in 1831",
      "Robert Owen bought up its member societies",
    ],
    answer: 1,
    explain:
      "Internal disagreements and high fees (£1 per society, one shilling a member) sank it, despite publishing the United Trades Cooperative Journal — later Voice of the People. (The Unlawful Oaths Act belongs to the Tolpuddle story, 1834.)",
  },
  {
    id: "ebh2-labour-18",
    type: "mcq",
    topic: "labour",
    q: "February 1834: the GNCTU. What was it, who founded it, and on what core principle?",
    options: [
      "The General National Council of Trade Unions — founded by John Doherty; separate unions for each craft",
      "The Great Northern Congress of Trades — founded by Lord Byron; a strike-first strategy",
      "The Grand National Consolidated Trades Union — founded by Robert Owen, textile manufacturer and philanthropist; one mega-union for all British workers, on the principle of cooperation over competition",
      "The Grand New Combination of Trades Unions — founded by Francis Place; a wages-only strategy",
    ],
    answer: 2,
    explain:
      "Robert Owen's one mega-union for all British workers — cooperation over competition. It failed within months: internal splits, and workers' suspicion of a founder who owned factories. Still, it proved national-level organisation was viable and wanted.",
  },
  {
    id: "ebh2-labour-19",
    type: "mcq",
    topic: "labour",
    q: "The Tolpuddle Martyrs, 1833–34: six agricultural labourers formed a Friendly Society — lawful under the Combinations Act of 1825. Under which law were they nevertheless convicted?",
    options: [
      "The Frame Breaking Act of 1812, for threatening machinery",
      "The Combinations Act of 1825 itself, for striking over wages",
      "The Unlawful Oaths Act of 1797 — built for naval mutinies — stretched over their initiation oaths",
      "The Corn Law of 1815, for hoarding grain",
    ],
    answer: 2,
    explain:
      "Wages had been cut from 9 to 7 shillings a week and the men demanded 10; formation and wage talks were legal — so the prosecution reached for the Unlawful Oaths Act of 1797, written for naval mutinies, because members took initiation oaths.",
  },
  {
    id: "ebh2-labour-20",
    type: "mcq",
    topic: "labour",
    q: "The Tolpuddle verdict — and its undoing:",
    options: [
      "Fined £1 each and released; no protest followed",
      "Seven years' transportation to Australia; massive public protests in 1834–35; pardoned and sentences rescinded in 1836",
      "Seventeen executed in 1834; the King pardoned the survivors in 1835",
      "Life imprisonment; forgotten until the 1871 Act",
    ],
    answer: 1,
    explain:
      "Convicted → seven years' transportation; protests filled 1834–35; by 1836 they were pardoned and the sentences rescinded. The lesson: government could not suppress lawful union activity using alternative legislation — the public would not stand for it.",
  },
  {
    id: "ebh2-labour-21",
    type: "output",
    topic: "labour",
    q: "The Tolpuddle ledger — two lines are blank. Fill in the charge used and the pardon year.",
    code: "1833     Six farm laborers form the Friendly Society\n         of Agricultural Laborers (Dorset)\nWages    cut from 9 → 7 shillings/week;\n         they demand 10 shillings\nLaw?     Formation + wage talks LEGAL under the\n         Combinations Act of 1825 — so instead: ____\nVerdict  Convicted → 7 years' transportation\n         to Australia\n1834–35  Massive public protests\n1836     ____ — sentences rescinded",
    answerText:
      "Charge: the Unlawful Oaths Act of 1797 (built for naval mutinies — the members had taken initiation oaths). 1836: pardoned, sentences rescinded.",
    explain:
      "The pardon raised national awareness of workers' rights and government overreach — the movement had learned to fight in the courtroom of public opinion.",
  },
  {
    id: "ebh2-labour-22",
    type: "mcq",
    topic: "labour",
    q: "The Factory Act of 1833 — the first major workplace regulation — did what?",
    options: [
      "Limited every worker, of any age, to a ten-hour day",
      "Legalised trade unions for the first time in Britain",
      "Banned all child labour in every industry outright",
      "Banned children under 9 from textile mills and capped ages 9–15 at 8–12 hours a day, making government responsible for worker protection",
    ],
    answer: 3,
    explain:
      "Parliamentary investigations had recorded child workers describing 12–13-hour days; the Act answered with the under-9 ban and the 8–12-hour cap — the first time government took responsibility for worker protection. (The ten-hour limit is 1847; union legality is 1824, fully in 1871.)",
  },
  {
    id: "ebh2-labour-23",
    type: "mcq",
    topic: "labour",
    q: "The Ten Hours Act of 1847: what did it limit — and why, paradoxically, did landowners support it?",
    options: [
      "A 10-hour limit for women and children/teenagers; landowners were retaliating against the 1846 Corn Laws repeal — capping factory profits after factory owners had pushed the repeal to cut food prices and wage demands",
      "A 10-hour limit for all men; landowners wanted fathers home by dusk",
      "A 12-hour limit for children under 13; landowners wanted them schooled",
      "A 10-hour limit for miners; landowners feared fires in the pits",
    ],
    answer: 0,
    explain:
      "The fruit of a 15-year movement — carried, ironically, by landowners settling their own score over the Corn Laws. The Act capped the hours of women and children/teenagers at ten.",
  },
  {
    id: "ebh2-labour-24",
    type: "short",
    topic: "labour",
    q: "Name the four legislative wins of Phase Three (1830s–1850s) with their years, and say in a line what each did.",
    answerText:
      "Factory Act 1833 — children under 9 banned from textile mills, ages 9–15 capped at 8–12 hours, government made responsible for worker protection. Ten Hours Act 1847 — a 10-hour limit for women and children/teenagers. Public Health Act 1848 — air and water quality regulated in industrial cities, answering the cholera epidemic of 1846–47. The Chartist Movement 1838–48 — votes for all men, secret ballots, no property requirements for MPs; its demands failed in its lifetime but connected the economic movement to political action.",
    explain:
      "And the horizon: unions were still capped at wages and hours — full legal recognition came only in 1871, after the New Model Unions of the 1850s chose negotiation over strikes.",
  },

  /* ---------------- EMPIRE & MERCANTILISM — L19 (10) ---------------- */

  {
    id: "ebh2-empire-01",
    type: "mcq",
    topic: "empire",
    q: "Efforts to establish Britain's overseas settlements began in which century?",
    options: ["the 1400s", "the 1500s", "the 1600s", "the 1700s"],
    answer: 1,
    explain:
      "The 1500s saw the first efforts; the great corporate land-grab followed in the 1600s — in America (New England, Virginia, Maryland) and in the East (the East India Company's posts from 1600).",
  },
  {
    id: "ebh2-empire-02",
    type: "mcq",
    topic: "empire",
    q: "Jamestown, 1607, was established by…",
    options: [
      "the English crown's royal navy",
      "the Virginia Company of London",
      "the Massachusetts Bay Company",
      "the East India Company",
    ],
    answer: 1,
    explain:
      "The Virginia Company of London planted Jamestown in 1607 — one of the British colonies taking root in New England, Virginia and Maryland through the 1600s.",
  },
  {
    id: "ebh2-empire-03",
    type: "mcq",
    topic: "empire",
    q: "Maryland was granted to…",
    options: [
      "Cecilius Calvert (Lord Baltimore)",
      "the Massachusetts Bay Company",
      "the Virginia Company of London",
      "the East India Company",
    ],
    answer: 0,
    explain:
      "Maryland went to Cecilius Calvert, Lord Baltimore; the Massachusetts Bay Company took New England; the Virginia Company held Jamestown. Three colonies, three corporate grants.",
  },
  {
    id: "ebh2-empire-04",
    type: "mcq",
    topic: "empire",
    q: "In the East, the East India Company began establishing trading posts in India in…",
    options: [
      "1757 — the year of its royal charter",
      "1607 — together with the Jamestown settlement",
      "1600 — leading, by the 1700s, to the 1757 Battle of Plassey",
      "1425 — under the Laborer's Act's trade clauses",
    ],
    answer: 2,
    explain:
      "EIC trading posts from 1600; by the 1700s the story reaches the 1757 Battle of Plassey. (1425 is the Laborer's Act — masons, not merchants.)",
  },
  {
    id: "ebh2-empire-05",
    type: "short",
    topic: "empire",
    q: "What is the lecture's 'kicker' about how Britain's empire actually began? Give two examples with their dates.",
    answerText:
      "Early colonies were efforts of particular companies rather than of the English crown. Examples: the Virginia Company of London planted Jamestown in 1607; the Massachusetts Bay Company took New England; Maryland was granted to Cecilius Calvert (Lord Baltimore); and the East India Company ran trading posts in India from 1600.",
    explain:
      "Empire began as business — the crown came later. (Jamestown, 1607, and the EIC posts, 1600, are the deck's two headline examples.)",
  },
  {
    id: "ebh2-empire-06",
    type: "mcq",
    topic: "empire",
    q: "Inside the mercantilist loop, what were the colonies FOR?",
    options: [
      "Independent manufacturing centres kept supplied with British coal",
      "Military garrisons with no economic function",
      "Producers of finished goods imported back into Britain",
      "A source of necessary raw materials and markets for British manufactured goods — with British monopolies on their tobacco, cotton, indigo and sugar",
    ],
    answer: 3,
    explain:
      "Raw materials out, manufactures back in: the colonies supplied England's mills and bought its goods, with Britain holding monopolies on tobacco, cotton, indigo and sugar in its own market.",
  },
  {
    id: "ebh2-empire-07",
    type: "mcq",
    topic: "empire",
    q: "Which rule put the empire's trade on British hulls?",
    options: [
      "The Navigation Act (1600s) — all colonial trade conducted by British ships",
      "The Combination Act (1799) — colonial crews banned from organising",
      "The Frame Breaking Act (1812) — colonial machines protected by law",
      "The Ten Hours Act (1847) — colonial sailors limited to ten-hour watches",
    ],
    answer: 0,
    explain:
      "The Navigation Act (1600s) reserved colonial trade for British ships — the 'British ships and British credit' spine of the system.",
  },
  {
    id: "ebh2-empire-08",
    type: "mcq",
    topic: "empire",
    q: "And what did Britain do to rival countries inside its colonial trade system?",
    options: [
      "Taxed them exactly as it taxed British merchants",
      "Invited them in as shipping partners on equal terms",
      "Auctioned the colonies' raw materials to the highest foreign bidder",
      "Excluded them from trading with its colonies — the flow was focused onto Britain",
    ],
    answer: 3,
    explain:
      "Rivals excluded, the whole flow focused onto Britain — raw material in, manufactures out, British ships between. Empire as economic architecture.",
  },
  {
    id: "ebh2-empire-09",
    type: "mcq",
    topic: "empire",
    q: "The lecture's closing frame on the Industrial Revolution itself:",
    options: [
      "It succeeded because Britain alone had coal and no need of empire",
      "It was financed entirely by the East India Company's China trade",
      "It didn't happen in isolation — not in a single country: colonies supplied raw material and served as markets for manufactured goods",
      "It spread only after 1850, once the Chartists had won the vote",
    ],
    answer: 2,
    explain:
      "The globalization of the Industrial Revolution: colonies fed it raw material and bought its goods — the empire sits inside the arithmetic, with trade climbing to £43.2 million by 1800.",
  },
  {
    id: "ebh2-empire-10",
    type: "short",
    topic: "empire",
    q: "Describe the mercantilist loop in two or three sentences: what flowed each way, and on whose ships?",
    answerText:
      "The colonies supplied the raw materials — tobacco, cotton, indigo, sugar — and bought Britain's manufactured goods in return. Britain processed the raw materials into manufactures, and all colonial trade had to move on British ships under the Navigation Act, with rival countries excluded from trading with the colonies. The empire was economic architecture — the Industrial Revolution never happened in isolation.",
    explain:
      "Three moves: raw materials in, manufactures out, British ships between — and the whole loop closed to rivals.",
  },

  /* ---------------- ECONOMIC SYSTEMS — L21 · L22 (18) ---------------- */

  {
    id: "ebh2-systems-01",
    type: "mcq",
    topic: "systems",
    q: "The Industrial Revolution minted three economic systems. All three answer one question:",
    options: [
      "Who should own the means of production?",
      "Who should issue the currency?",
      "Who should command the navy?",
      "Who should set the calendar?",
    ],
    answer: 0,
    explain:
      "One question, three answers: Smith's markets (private ownership), socialism's shared ownership, Marx's classless society — asked in sequence as capitalism's effects on labour became visible.",
  },
  {
    id: "ebh2-systems-02",
    type: "mcq",
    topic: "systems",
    q: "Under capitalism, who owns the means of production — and who decides prices and output?",
    options: [
      "Private individuals and businesses own; supply and demand set prices and production, with minimal government interference — laissez-faire",
      "The government owns; planners set prices and quotas",
      "Small communities own; village councils decide",
      "The guilds own; the masters set output",
    ],
    answer: 0,
    explain:
      "Factories, tools, land, service institutions — all private. The free-market ideology came from Adam Smith (1770s–1790s): unregulated markets maximise efficiency and wealth for society.",
  },
  {
    id: "ebh2-systems-03",
    type: "mcq",
    topic: "systems",
    q: "Why did capitalism rise FIRST, rather than socialism or communism? Three of these are the lecture's reasons. Which one is NOT?",
    options: [
      "Expensive industrial technology — steam machinery and boilers priced far beyond any artisan; only wealthy investors could finance industry",
      "Transport innovations — canals, Turnpike Trusts (1770s–1830s), railways (1830s–40s) — widened markets and demanded stock-market financing",
      "Free-market ideology (Adam Smith's laissez-faire) plus legal innovations making the company a legal entity separate from its owners",
      "Workers voted capitalism into power in the 1770s",
    ],
    answer: 3,
    explain:
      "Four converging reasons — expensive technology, transport revolutions, Smith's ideology, company law — and the precedent had come even earlier: the enclosures converted common lands into private property 100–150 years before industrialisation. Socialism and communism were responses to what capitalism did to labour.",
  },
  {
    id: "ebh2-systems-04",
    type: "mcq",
    topic: "systems",
    q: "Canals, then Turnpike Trusts (1770s–1830s), then railways (1830s–40s). What did every link of that chain demand?",
    options: [
      "Royal monopolies renewed every twenty years",
      "Naval escorts for every wagon road",
      "The abolition of private property in land",
      "Massive capital investment — which is precisely why stock markets and modern financing mechanisms grew alongside them",
    ],
    answer: 3,
    explain:
      "Raw materials in (coal from Manchester, cotton from America and India), finished goods out, worldwide — and every link of the transport chain demanded capital, drawing stock markets into the story.",
  },
  {
    id: "ebh2-systems-05",
    type: "mcq",
    topic: "systems",
    q: "Under socialism, who owns the means of production — and how is change pushed?",
    options: [
      "Private shareholders own; the market allocates everything",
      "Nobody owns; production itself is ended",
      "Government or community collectively owns and regulates the major means of production — factories, mines, railways; democratic pressure brings labour protections, voting rights and redistribution of profits",
      "The crown owns; ministers allocate by decree",
    ],
    answer: 2,
    explain:
      "Socialism answered capitalism's effects on workers — exploitation, inequality, insecurity — through democratic pressure, not revolution.",
  },
  {
    id: "ebh2-systems-06",
    type: "mcq",
    topic: "systems",
    q: "Robert Owen's utopian socialism (1830s–40s) proposed — and what does the deck call it in the systems timeline?",
    options: [
      "Immediate armed revolution by the proletariat",
      "Handing all factories back to the crown",
      "Equal profit-sharing without class struggle; often viewed as a transitional stage toward communism",
      "Restoring the guilds for the skilled trades",
    ],
    answer: 2,
    explain:
      "Owen's socialism shared profits equally and refused class struggle. Socialism's record arrived legislatively — Factory Act 1833, Ten Hours Act 1847, Chartist Movement 1838–48 — and is often viewed as a transitional stage toward communism, though that progression has not been realised in practice.",
  },
  {
    id: "ebh2-systems-07",
    type: "mcq",
    topic: "systems",
    q: "Under communism as the lecture defines it, who owns and controls production?",
    options: [
      "Small communities own and control the means of production — private property (in the capitalist sense) eliminated, decisions decentralised, no government apparatus (stateless)",
      "The central state owns everything and plans all output",
      "Private capitalists own under strict regulation",
      "The church owns through its parish councils",
    ],
    answer: 0,
    explain:
      "The deck's communism is decentralised and stateless: communities decide what to produce and how much, with private property in the capitalist sense eliminated.",
  },
  {
    id: "ebh2-systems-08",
    type: "mcq",
    topic: "systems",
    q: "Marx and Engels' argument, per the lecture:",
    options: [
      "Capitalism and socialism will merge peacefully by 1900",
      "Class struggle ends once wages rise above subsistence",
      "The bourgeoisie will dissolve itself out of conscience",
      "Capitalism inevitably creates two classes — bourgeoisie (owners) and proletariat (propertyless workers) — whose struggle over exploitation culminates in workers' revolution",
    ],
    answer: 3,
    explain:
      "Class struggle over long hours, low wages, inhumane conditions — culminating in workers' revolution. Communism developed 1850s–1890s as the theoretical answer to capitalist exploitation, fed directly by the labour movement's three phases.",
  },
  {
    id: "ebh2-systems-09",
    type: "output",
    topic: "systems",
    q: "The systems × Industrial Revolution timeline — fill in the three missing date-ranges.",
    code: "______        Industrial Revolution begins; capitalism\n              & free-market ideology emerge\n1770s–1790s   Adam Smith writes — laissez-faire economics\n1770s–1830s   Canal & road revolutions expand transport\n1830s–1840s   Railway mania; the labour movement\n              gains momentum\n______        Socialism & utopian socialism answer\n              capitalism\n______        Communism develops as the theoretical\n              response to capitalist exploitation",
    answerText:
      "1760s–1790s (capitalism emerges); 1830s–1850s (socialism & utopian socialism); 1850s–1890s (communism).",
    explain:
      "A century of emergence, in order: capitalism first, socialism answering it through democratic pressure, communism theorising beyond it.",
  },
  {
    id: "ebh2-systems-10",
    type: "mcq",
    topic: "systems",
    q: "'No pure systems exist.' Which trio describes the modern mixed economy, per the lecture?",
    options: [
      "Private ownership (capitalism's engine — most production, most innovation) · public ownership of sectors like healthcare, education, utilities (socialism's footprint) · community-based initiatives for local resources (communist elements)",
      "Only private ownership survives; the other two systems failed historically",
      "Only state ownership survives after the crises of the 20th century",
      "Guilds, manors and monasteries share the economy equally",
    ],
    answer: 0,
    explain:
      "Real-world economies require combinations of the principles — government regulation and safety nets, democratic participation alongside market mechanisms. That pragmatism is itself a historical outcome of the Industrial Revolution.",
  },
  {
    id: "ebh2-systems-11",
    type: "mcq",
    topic: "systems",
    q: "The honest scorecard — capitalism's CONS, as the lecture lists them:",
    options: [
      "Guaranteed shortages of goods · full unemployment · no markets at all",
      "High taxes · slow bureaucracy · loss of personal freedom",
      "No innovation · no consumer choice · no growth whatsoever",
      "Wealth inequality (growth benefits not distributed equally) · market failure where consumers lack information and negotiating power (healthcare, education) · environmental degradation",
    ],
    answer: 3,
    explain:
      "Capitalism's pros — innovation, economic freedom, high growth potential (7–8%+ GDP in developing economies) — are bought with inequality, market failure and environmental damage. Every system pays.",
  },
  {
    id: "ebh2-systems-12",
    type: "mcq",
    topic: "systems",
    q: "And socialism's cons?",
    options: [
      "Severe shortages of goods · no employment · no local decision-making",
      "Environmental collapse · mass inequality · runaway growth",
      "Higher tax burden · inefficiency and slow action (pre-1991 India grew at just 2–3%) · loss of personal freedom to government/collectives",
      "Free markets · low taxes · rapid innovation",
    ],
    answer: 2,
    explain:
      "Socialism's pros — universal healthcare and education, public-interest focus, stability and reduced inequality — cost taxes, bureaucratic slowness (pre-1991 India: 2–3% growth) and personal autonomy. (Severe shortages are communism's con.)",
  },
  {
    id: "ebh2-systems-13",
    type: "mcq",
    topic: "systems",
    q: "The lecture's sector–system fit. Which matching is right?",
    options: [
      "Capitalist healthcare · socialist luxury goods · communist stock exchanges",
      "Socialist systems everywhere and always — they outperform",
      "Capitalist systems where consumers hold power and information · socialist systems for essential services with information asymmetry (healthcare, education) · communist systems for local resource management and environmental protection",
      "Communist banking · capitalist village commons · socialist shipping",
    ],
    answer: 2,
    explain:
      "Fit follows information and power: markets where consumers can judge and choose; the state where they can't (healthcare, education); communities where resources are local. Most modern economies mix all three.",
  },
  {
    id: "ebh2-systems-14",
    type: "mcq",
    topic: "systems",
    q: "The human ledger — cities swelling. Which pair of numbers is the lecture's?",
    options: [
      "Manchester 3,000 → 30,000 · London 100,000 → 400,000",
      "Manchester 50,000 → 60,000 · London 2M → 2.5M",
      "Manchester 10,000 → 1M · London 5M → 6M",
      "Manchester 20,000 → 300,000+ (a 13–14-fold increase in roughly 80 years) · London 1.1M → 4.7M",
    ],
    answer: 3,
    explain:
      "Manchester 1760s → 1850s: 20,000 to 300,000+, a 13–14-fold increase; London 1801 → mid-19th century: 1.1M to 4.7M — with overcrowding, poor sanitation, inadequate housing (and, by 1848, a Public Health Act chasing the cholera behind them).",
  },
  {
    id: "ebh2-systems-15",
    type: "mcq",
    topic: "systems",
    q: "Three new classes, one pyramid. Which line matches class to role?",
    options: [
      "Bourgeoisie — owners of factories, tools, land and services · middle class — small factory owners, merchants, professionals, skilled laborers (the NEW class) · proletariat — factory workers on minimal wages under poor conditions",
      "Bourgeoisie — the factory workers · middle class — land-owning peasants · proletariat — the factory owners",
      "Middle class — owners of the means of production · proletariat — the managers · bourgeoisie — the apprentices",
      "All three classes owned the means of production in equal shares",
    ],
    answer: 0,
    explain:
      "The bourgeoisie controlled the means of production; the proletariat worked it; the middle class was the revolution's new creation — demanding new cultural products, different leisure and theatre, stimulating literature, fashion and the arts.",
  },
  {
    id: "ebh2-systems-16",
    type: "short",
    topic: "systems",
    q: "State the one question the three economic systems answer — and each system's answer to it.",
    answerText:
      "The question: who should own the means of production? Capitalism — private individuals and businesses own, with prices and output set by supply and demand under laissez-faire. Socialism — government or community collectively owns and regulates the major means of production, pressing change through democratic politics. Communism — small communities own and control production in a stateless, classless society, after Marx and Engels' class struggle culminates in workers' revolution.",
    explain:
      "Sequence matters: capitalism rose first (1760s–90s); socialism (1830s–50s) and communism (1850s–90s) answered what it did to labour.",
  },
  {
    id: "ebh2-systems-17",
    type: "short",
    topic: "systems",
    q: "What did industrialisation do to the boundary between working life and family life?",
    answerText:
      "Industrial work became divorced from household activities — employment moved to factories, not homes — and two distinct life spheres emerged: working life and family life. Family arrangements shifted as members worked different shifts in different places, and 10–12-hour workdays left minimal time for either.",
    explain:
      "The same ledger records women moving into factory work — conditions worse than men's — a shift that led toward the 20th-century voting-rights and equality movements.",
  },
  {
    id: "ebh2-systems-18",
    type: "short",
    topic: "systems",
    q: "How did 'time itself' get standardised during the Industrial Revolution — and what phrase entered the culture?",
    answerText:
      "Railways spanned regions while every city kept its own time — chaos for transport. Time was standardised, first nationally and then globally, enabling efficient transport and communication networks — the connective tissue of modernity. With the clocks agreed, 'Time is Money' entered the culture: society re-valued temporal resources.",
    explain:
      "Transportation technology forced the clocks to agree; standardised time changed how society valued life itself.",
  },

  /* ---------------- DIVISION OF LABOUR & TAYLORISM — L23 (12) ---------------- */

  {
    id: "ebh2-taylor-01",
    type: "mcq",
    topic: "taylor",
    q: "Before the science: pre-industrial workshops of 5–10 skilled artisans ran on…",
    options: [
      "'rule of thumb' — intuition and personal experience, with no standardised rules for hiring, firing, or measuring productivity",
      "Taylor's stopwatch tables from the first day",
      "Smith's 18-operation pin schedule",
      "the guilds' written time budgets",
    ],
    answer: 0,
    explain:
      "Management by rule of thumb: metrics subjective and inconsistent across workplaces. And no standard existed for a 'fair day's work' — the minimum acceptable output under proper conditions.",
  },
  {
    id: "ebh2-taylor-02",
    type: "mcq",
    topic: "taylor",
    q: "What made the old management unworkable after the Industrial Revolution?",
    options: [
      "Workshops became smaller and quieter than before",
      "Skilled artisans became too expensive for any factory",
      "Machines ran entirely without workers",
      "Factories packed thousands of unskilled workers into single facilities — one company employed 17,000 across sites, and managing 400–500 at a single site was unprecedented",
    ],
    answer: 3,
    explain:
      "Small-workshop intuition could not scale to thousands of unskilled hands — and owners lacked any standard for a fair day's work. Hence the science.",
  },
  {
    id: "ebh2-taylor-03",
    type: "mcq",
    topic: "taylor",
    q: "Adam Smith's pin factory, 1776 — what multiplied output?",
    options: [
      "New pin-making machines replaced the workers entirely",
      "Steam power let pins be cast in moulds by the gross",
      "Imported French wire halved the cost of every pin",
      "One artisan making an entire pin alone managed 1 pin a day; the job divided into 18 distinct operations, each person assigned one task, produced thousands a day",
    ],
    answer: 3,
    explain:
      "Division of labour: one worker, 18 steps → 1 pin/day; 18 workers, one step each → thousands/day. Productivity exploded — that is the multiplication.",
  },
  {
    id: "ebh2-taylor-04",
    type: "mcq",
    topic: "taylor",
    q: "The three gains of dividing the labour, per the lecture:",
    options: [
      "Specialization (unskilled workers become task-specific skilled workers) · efficiency (no time lost switching tools, machines or workstations) · mass production (goods produced far faster and significantly cheaper)",
      "Higher wages · shorter hours · stronger unions",
      "Fewer workers · bigger factories · deeper mines",
      "Craft pride · apprenticeships · guild rank",
    ],
    answer: 0,
    explain:
      "Specialization, efficiency, mass production — combined with machinery, division of labour let factories outproduce anything the workshop age had seen.",
  },
  {
    id: "ebh2-taylor-05",
    type: "mcq",
    topic: "taylor",
    q: "Who is the 'Father of Scientific Management'?",
    options: ["Adam Smith", "Robert Owen", "Frederick Taylor", "John Doherty"],
    answer: 2,
    explain:
      "Frederick Taylor moved management from rule of thumb to the stopwatch — a science of work built on three core principles.",
  },
  {
    id: "ebh2-taylor-06",
    type: "mcq",
    topic: "taylor",
    q: "Taylor's principle 1 — the rule of science for each task — requires developing scientific rules for every job aspect from…",
    options: [
      "the foreman's personal many years of service",
      "the workers' own preferences about method",
      "objective data, not intuition: which tools, how the work is performed, the time required, the body motions needed",
      "the accounting department's quarterly cost targets",
    ],
    answer: 2,
    explain:
      "Rule of science, not rule of thumb: every job aspect specified from objective data — tools, method, time, motions.",
  },
  {
    id: "ebh2-taylor-07",
    type: "mcq",
    topic: "taylor",
    q: "Taylor's principle 2 — scientific worker selection — means hiring on…",
    options: [
      "job requirements and abilities — fitness and skills must match the job's demands — not favoritism or nepotism",
      "family connections within the mill village",
      "the longest possible waiting list for the job",
      "piece-rate output alone, whatever the job's nature",
    ],
    answer: 1,
    explain:
      "Scientific selection matches fitness and skills to job demands. (The criticism came later: motivation was assumed to be money alone — piece-rate incentives.)",
  },
  {
    id: "ebh2-taylor-08",
    type: "mcq",
    topic: "taylor",
    q: "Taylor's principle 3 — time and motion studies — used stopwatches to…",
    options: [
      "break movements into seconds and minutes, eliminate unnecessary motions, and set objective performance benchmarks based on research, not manager judgment",
      "count only the hours workers spent at the gate",
      "measure the fuel consumption of each machine",
      "time the workers' lunch and rest breaks for the canteen",
    ],
    answer: 0,
    explain:
      "Stopwatches break movements into seconds and minutes; unnecessary motions are eliminated and time benchmarks set — standards from research, not from manager judgment.",
  },
  {
    id: "ebh2-taylor-09",
    type: "output",
    topic: "taylor",
    q: "The pig-iron gauge, Bethlehem Steel 1898–1901. Give the two figures the bars hide — and the percentage increase.",
    code: "BEFORE — the average worker          ____ tons/day\nSCHMIDT, after time & motion\n        direction                     ____ tons/day\n                              ≈ ____ % increase",
    answerText:
      "Before — 12.5 tons a day; Schmidt — 47.5 tons a day; roughly a 400% increase.",
    explain:
      "Taylor selected a physically fit, highly motivated worker and directed him through precise movements and rest periods — 'pick up the pig, walk, sit down and rest, walk' — lifting iron loading from 12.5 to 47.5 tons a day.",
  },
  {
    id: "ebh2-taylor-10",
    type: "mcq",
    topic: "taylor",
    q: "In the pig-iron experiment, who was 'Schmidt' — and where did Taylor run the test?",
    options: [
      "The foreman of the Manchester cotton mills, 1816",
      "A plant accountant who redesigned the loading ledgers, 1776",
      "A physically fit, highly motivated pig-iron handler selected at the Bethlehem Steel plant, 1898–1901",
      "A Chartist pamphleteer who timed the docks, 1848",
    ],
    answer: 2,
    explain:
      "1898–1901, the Bethlehem Steel plant: Taylor picked Schmidt for fitness and motivation, then directed every movement and rest — the experiment that made 'scientific management' famous.",
  },
  {
    id: "ebh2-taylor-11",
    type: "mcq",
    topic: "taylor",
    q: "The stopwatch's blind spots — the lecture's four critical limitations of scientific management:",
    options: [
      "Too many holidays · excessively high wages · short hours · strong unions",
      "Slow machines · cheap coal · large canteens · long lunches",
      "Too much science · too little engineering · no accounting · weak sales",
      "Mechanistic view of humans · monotony and alienation · worker exploitation (quotas raised without proportionally raising wages) · loss of autonomy (planning separated from doing)",
    ],
    answer: 3,
    explain:
      "Workers treated as extensions of machines, motivation assumed to be money alone; one standardized task across an 8–10-hour day bred psychological boredom; quotas rose without proportional wages; and workers could not innovate or modify methods — managers decided, workers executed.",
  },
  {
    id: "ebh2-taylor-12",
    type: "short",
    topic: "taylor",
    q: "Explain the human cost of scientific management in two or three sentences, ending with its labour-relations fallout.",
    answerText:
      "Scientific management treated workers as extensions of machines — motivation assumed to be money alone — while repeating one standardized task across an 8–10-hour day created monotony, boredom and alienation. Time studies raised production quotas without proportionally raising wages, and planning was separated from doing, so workers lost all autonomy over their own work. Efficiency and productivity rose — but management–worker relationships deteriorated, producing significant workplace tensions and, in some cases, labour unrest.",
    explain:
      "The deck's own warning: the same stopwatch that filled the ledgers emptied the goodwill — the human cost is half of Lecture 23's story.",
  },
];
