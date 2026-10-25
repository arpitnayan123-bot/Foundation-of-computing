"use client";

/* ============================================================
   Economic & Business History — PART 3 of 4 (shelf 04 of The
   Atlas). Module 2 — the world before the machines: agrarian
   economies (feudal and zamindari), the guild systems that
   ruled the towns, the trade routes that stitched continents
   together — and the agricultural revolution that cracked the
   whole pre-industrial order open.
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Church,
  Crown,
  Hammer,
  Landmark,
  ScrollText,
  Shield,
  Ship,
  Sprout,
  Wheat,
} from "lucide-react";
import { Reveal, Section, SectionHead, Takeaways } from "@/components/notes/ui";
import {
  EBH_BTN_GRAD,
  EBH_G,
  EbhCallout,
  EbhPanel,
  EbhQuiz,
  EbhReadStep,
} from "@/components/ebh/EbhParts1";

/* ============================================================
   CHAPTER 10 — AGRARIAN ECONOMIES  (#agrarian)
   ============================================================ */
const FEUDAL_ROWS = [
  { rank: "King / Crown", owes: "Grants land (fiefs)", gets: "Loyalty of the realm", top: 8 },
  { rank: "Nobles / Lords", owes: "Provides estate management", gets: "Land from the crown", top: 32 },
  { rank: "Vassals / Knights", owes: "Offers military protection", gets: "Land & money, knights", top: 56 },
  { rank: "Peasants / Hereditary Serfs", owes: "Manual cultivation", gets: "Protection & a strip to live from", top: 80 },
];

export function EbhAgrarianSection() {
  return (
    <Section id="agrarian">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 2 · Lecture 7 — pre-industrial economies"
          title={
            <>
              Agrarian <span className="grad-gold">economies</span>
            </>
          }
          lead="Before factories, before corporations — economies where the calendar was agricultural, the family was the factory, and land was the only wealth that mattered."
        />

        <EbhReadStep n="01" title="What is an agrarian economy?" sub="Seasons controlled the economy — and society" />
        <EbhCallout kind="insight" title="The lecture's four marks">
          <b>Seasons controlled the economy and society.</b> Life revolved around{" "}
          <b>agriculture and the seasons</b> — harvest, sowing seasons, the rainfall cycle.{" "}
          <b>Agriculture meant families</b> — the family was the unit of production. And{" "}
          <b>land was the main asset</b>: owning more land meant rich.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="why" title="Land as the core asset">
            Land ownership was not just property — it was the primary source of{" "}
            <b>capital and social stratification</b>. Land functioned as the core asset{" "}
            <b>determining wealth, power, and production capacity</b>. Social stratification: a
            society&rsquo;s categorisation of its people into groups based on socioeconomic
            factors — wealth, income, race, education, ethnicity, gender, occupation, social
            status, or derived power.
          </EbhCallout>
        </div>

        <EbhReadStep n="02" title="Three questions organise the whole module" sub="Who owned · who decided · how was it organised" />
        <Reveal>
          <EbhPanel label="Module 2's spine — memorise these three">
{`1. Who owned the land?
2. Who decided what and how much to produce?
3. How was the production, distribution and
   consumption of agricultural products organized?`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="03" title="Answer 1 — the feudal model (Western Europe)" sub="The crown, the lords, and the bound peasants" />
        <EbhCallout kind="story" title="The pyramid">
          <b>The Crown/Lords</b> owned the land and provided military protection.{" "}
          <b>The Peasants/Serfs</b> were bound to the land, paying rent via crop shares or manual
          labour. <b>Serfdom</b>: a legal and economic system where a peasant is{" "}
          <b>bound to a plot of land owned by a lord</b> — they could not leave, move to another
          town, or marry without <b>the direct permission of their lord</b>.
        </EbhCallout>
        <Reveal delay={80}>
          <div className="card-warm mt-4 p-4 sm:p-6">
            <p className="text-center font-mono text-[.66rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
              The feudal pyramid of power — obligations flowing both ways
            </p>
            <div className="mx-auto mt-4 max-w-xl">
              {FEUDAL_ROWS.map((r, i) => (
                <motion.div
                  key={r.rank}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-2"
                >
                  <div
                    className="flex flex-col gap-1 rounded-xl border p-3 sm:flex-row sm:items-center sm:justify-between"
                    style={{
                      borderColor: i === FEUDAL_ROWS.length - 1 ? "#cec2a4" : EBH_G.border,
                      background: i === FEUDAL_ROWS.length - 1 ? "#f5f1e8" : "#fffdf6",
                      marginLeft: `${r.top * 0.18}%`,
                      marginRight: `${r.top * 0.18}%`,
                    }}
                  >
                    <p className="flex items-center gap-2 text-[.88rem] font-extrabold text-[#3e2c1d]">
                      {i === 0 ? <Crown className="h-4 w-4" style={{ color: EBH_G[700] }} /> : i === FEUDAL_ROWS.length - 1 ? <Wheat className="h-4 w-4" style={{ color: EBH_G.sepia }} /> : <Landmark className="h-4 w-4" style={{ color: EBH_G[700] }} />}
                      {r.rank}
                    </p>
                    <p className="text-[.72rem] leading-snug text-muted-warm">
                      <b style={{ color: EBH_G[700] }}>gives:</b> {r.owes} · <b>gets:</b> {r.gets}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="04" title="Answer 1 — the zamindari / colonial model" sub="The state, the intermediaries, the squeezed ryots" />
        <EbhCallout kind="story" title="The chain">
          <b>The State</b> granted revenue-collection rights to intermediaries (<b>Zamindars</b>).
          <b> The tenant farmers</b> bore the brunt of high fixed tax rates — leading to systemic
          debt cycles. Under British colonial rule the chain ran:{" "}
          <b>British Colonial Government</b> [demanded tax] → <b>the Zamindars</b> — hereditary,
          land-owning elites [extracted variable, highly inflated rents] →{" "}
          <b>Cultivators / Tenant Ryots</b> [vulnerable farmers].
        </EbhCallout>

        <EbhReadStep n="05" title="Answer 2 — who decided what to produce?" sub="Nobody asked the market" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>The feudal model</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Production was heavily <b>localised and traditional</b></li>
                <li>· The lord mandated how much labour went to his personal fields</li>
                <li>· Peasants decided what to grow on their <b>subsistence plots</b> based purely on <b>immediate survival needs</b></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>The zamindari / colonial model</p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· Zamindars demanded <b>heavy cash rents</b>; the British state required specific revenues</li>
                <li>· Cultivators were <b>forced away from food crops</b> toward <b>high-value, risky cash crops</b> (like indigo, opium, or cotton) to pay their debts</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="mt-4">
          <EbhCallout kind="warn" title="The line to remember">
            Production was <b>not determined by a free market of consumer demand</b>. It was
            dictated either by the <b>survival needs of the worker</b> or the{" "}
            <b>coercive financial demands of the ruling elite</b>.
          </EbhCallout>
        </div>

        <EbhReadStep n="06" title="Answer 3 — how was it organised?" sub="Production, distribution, consumption" />
        <Reveal>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { t: "Production", d: "Labour-intensive, low-technology farming organised around the family unit — or forced communal labour days." },
              { t: "Distribution — feudalism", d: "Moving goods was highly inefficient: surplus distributed locally via mandatory tithes to the Church and physical crop deliveries to the Lord's granary." },
              { t: "Distribution — zamindari", d: "Extractive and global: crops sold into colonial merchant supply chains, shipped to overseas markets — often leaving the local region vulnerable to famine." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="card-warm lift h-full p-5">
                  <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                  <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="insight" title="Consumption realities — a deeply unequal split">
            The <b>vast majority</b> of the population — peasants/tenants — lived on{" "}
            <b>subsistence consumption</b>. Luxury and surplus consumption were entirely{" "}
            <b>restricted to the tiny landlord and merchant elite</b>.
          </EbhCallout>
        </div>

        <EbhReadStep n="07" title="The impact — why this world couldn't industrialise" sub="Three locks holding the economy shut" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Immobile labour", d: "Workers could not leave the land — preventing the rise of a free labour market." },
            { t: "Zero disposable income", d: "Surplus crops went to landlords, so the peasant class could not buy external goods — stalling retail consumer markets." },
            { t: "Land as wealth", d: "Wealth was stored in land rather than reinvested into commercial innovation or banking systems." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="h-full rounded-2xl border p-5" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
                <p className="text-[.9rem] font-extrabold" style={{ color: "#b3402c" }}>{c.t}</p>
                <p className="mt-1.5 text-[.82rem] leading-relaxed text-[#5a2a24]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 7"
              q="A colonial ryot switches from rice to indigo — a high-value, risky cash crop. Which mechanism from the lecture forced that choice?"
              options={[
                "A free market signal: indigo prices rose",
                "Zamindars demanded heavy cash rents and the British state required specific revenues — debts pushed cultivators toward cash crops",
                "The guild mandated indigo over food",
                "The Church's tithe schedule",
              ]}
              answer={1}
              explain="Under zamindari, heavy cash rents + state revenue demands meant debts — and debts pushed cultivators away from food crops toward high-value, risky cash crops like indigo, opium or cotton. Production followed coercion, not consumer demand; and when distribution ran global while local stores thinned, famine vulnerability followed."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Seasons ran the economy; <b>land was the core asset</b> — wealth, power and stratification all grew from it.</>,
              <>Feudal model: <b>Crown → lords → knights → serfs</b>, bound by permission, paid in crop shares. Zamindari: <b>state → zamindars → ryots</b>, paid in inflated rents and debt.</>,
              <>Three locks: <b>immobile labour, zero disposable income, land as wealth</b> — the pre-industrial world could not break its own chains.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 11 — GUILD SYSTEMS  (#guilds)
   with Machine 02 — the Guild Ladder
   ============================================================ */
const GUILD_RANKS = [
  {
    rank: "Apprentice",
    pay: "Paid nothing",
    rights: "Learns skills — no ownership",
    limit: "Bound to a master; the hatters' rules fixed a term of no less than seven years — and only a freeman could take an apprentice at all",
  },
  {
    rank: "Journeyman",
    pay: "Earns wages",
    rights: "A skilled worker — can work independently (with any master)",
    limit: "Still not a full guild member; the workshop belongs to someone else",
  },
  {
    rank: "Master",
    pay: "Owns the workshop",
    rights: "Can train apprentices — a full guild member",
    limit: "The gate: produce a MASTERPIECE, judged by other Masters",
  },
];

function GuildLadder() {
  const [stage, setStage] = useState(0);
  const r = GUILD_RANKS[stage];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 02 — the guild ladder · climb it
      </p>

      {/* rail */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {GUILD_RANKS.map((g, i) => (
          <React.Fragment key={g.rank}>
            <button
              type="button"
              onClick={() => setStage(i)}
              aria-label={`Show the ${g.rank} stage`}
              className="flex h-11 items-center gap-2 rounded-full border px-4 text-[.78rem] font-extrabold transition-all duration-200"
              style={
                i === stage
                  ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 8px 18px -8px rgba(161,98,7,.55)" }
                  : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
              }
            >
              {i === 2 ? <Hammer className="h-3.5 w-3.5" /> : i === 0 ? <Sprout className="h-3.5 w-3.5" /> : <Shield className="h-3.5 w-3.5" />}
              {g.rank}
            </button>
            {i < GUILD_RANKS.length - 1 ? (
              <ArrowRight className={`h-4 w-4 shrink-0 ${i < stage ? "" : "opacity-40"}`} style={{ color: EBH_G[700] }} />
            ) : null}
          </React.Fragment>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-5 rounded-2xl border p-5"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[1.05rem] font-black" style={{ color: EBH_G[800] }}>{r.rank}</p>
            <span className="rounded-full border border-[#e0cb84] bg-white px-3 py-1 text-[.7rem] font-bold" style={{ color: EBH_G[700] }}>
              step {stage + 1} of 3
            </span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-[#e0cb84] bg-white p-3">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Pay</p>
              <p className="mt-1 text-[.84rem] font-bold text-[#3e2c1d]">{r.pay}</p>
            </div>
            <div className="rounded-xl border border-[#e0cb84] bg-white p-3">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Rights</p>
              <p className="mt-1 text-[.84rem] font-bold text-[#3e2c1d]">{r.rights}</p>
            </div>
            <div className="rounded-xl border border-[#e0cb84] bg-white p-3">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">The catch</p>
              <p className="mt-1 text-[.82rem] leading-snug text-[#3e2c1d]">{r.limit}</p>
            </div>
          </div>
          {stage === 2 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-center text-[.82rem] font-semibold leading-relaxed"
              style={{ color: EBH_G[700] }}
            >
              To become a Master: produce a <b>Masterpiece</b> — judged by other Masters. Quality
              control as a career gate.
            </motion.p>
          ) : (
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                onClick={() => setStage((s) => Math.min(s + 1, 2))}
                className="rounded-full px-4 py-2 text-[.78rem] font-bold text-white shadow-md transition hover:scale-[1.03]"
                style={{ background: EBH_BTN_GRAD }}
              >
                Climb to {GUILD_RANKS[stage + 1].rank} →
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhGuildsSection() {
  return (
    <Section id="guilds">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 2 · Lecture 8 — the city's operating system"
          title={
            <>
              Guild <span className="grad-gold">systems</span> &amp; early trade organizations
            </>
          }
          lead="For three centuries, if you wanted to weave, smith, brew or bake in a European town, you asked the guild first. It was employer, union, quality bureau, court and church all at once."
        />

        <EbhReadStep n="01" title="What is a guild?" sub="Mutual aid, protection, standards" />
        <EbhCallout kind="insight" title="The definition">
          An association of <b>craftsmen or merchants</b> formed for{" "}
          <b>mutual aid and protection</b>, and <b>to maintain standards</b>. Two families:{" "}
          <b>Merchant guilds</b> — the traders — and <b>Craft guilds</b>: blacksmiths, weavers,
          potters, hatters, goldsmiths, carpenters, and more.
        </EbhCallout>

        <EbhReadStep n="02" title="History & rise" sub="From Rome's collegia to the craft explosion" />
        <Reveal>
          <EbhPanel label="The timeline of the guilds">
{`Classical Rome    →  collegia: associations of merchants
                     & artisans. Vanish in Western Europe
                     after Rome's collapse.

1000–1150 AD      →  RISE OF MERCHANT GUILDS
                     · innovation in agriculture (food surplus:
                       three-field crop rotation, the heavy plough)
                     · revival of long-distance trade
                     · urbanization (growth of towns)
                     · protection: merchants pooled resources against
                       robbery, high transit tolls, arbitrary
                       seizures by feudal lords

1100–1300 AD      →  CRAFT GUILDS
                     · urban manufacturing & specialised crafts expand
                     · weavers, blacksmiths, carpenters, goldsmiths…

Throughout        →  guilds provided predictability
                     and a social security net`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="03" title="Charters — permission on parchment" sub="The Weaver's Guild of London, 1155" />
        <EbhCallout kind="story" title="Granted by King Henry II">
          Guilds were established by <b>charters</b> from the city or the ruler. The Charter of
          the Weaver&rsquo;s Guild of London (1155), granted by <b>King Henry II</b>:{" "}
          <i>&ldquo;Know ye that I have granted to the weavers of London to have their guild in
          London with all the liberties and customs which they had in the time of King Henry my
          grandfather; and so that none shall intermeddle within the city concerning their craft,
          unless he belong to the guild…&rdquo;</i> That guild exists to this day — as the{" "}
          <b>Worshipful Company of Weavers</b>.
        </EbhCallout>

        <EbhReadStep n="04" title="Structure of the guild" sub="Apprentice → journeyman → master" />
        <Reveal>
          <GuildLadder />
        </Reveal>

        <EbhReadStep n="05" title="Functions of the guild" sub="Economic, social, religious, political" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Hammer className="h-4 w-4" /> Economic
              </p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· <b>Quality control</b> — wardens searched all hats for sale; defects went before the Mayor of London for punishment</li>
                <li>· <b>Training</b> — the apprenticeship system itself</li>
                <li>· <b>Price regulation</b> &amp; <b>production control</b></li>
                <li>· <b>Worker welfare</b> · <b>market reputation</b> · <b>regulated competition</b></li>
                <li>· Even <b>daylight-only work</b> — night work hid defects from inspection</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Church className="h-4 w-4" /> Social · religious · political
              </p>
              <ul className="mt-2 space-y-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                <li>· <b>Social</b> — care for the sick and elderly; burial and funeral benefits; support for dependents. The Guild of the Tailors (Lincoln, 1328): if a brother falls into poverty, &ldquo;he shall have a penny every day from the common box&rdquo;</li>
                <li>· <b>Religious</b> — patron saints and altars: St. Joseph for carpenters, St. Crispin for shoemakers</li>
                <li>· <b>Political</b> — guilds operated their own courts, settling commercial disputes; &ldquo;guild wars&rdquo;: craft guilds frequently launched political revolts against the merchant guilds</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 8"
              q="A journeyman in 1250 wants to open his own hat workshop in London. Standing in his way, per the lecture, are…"
              options={[
                "Nothing — journeymen were free to open shops",
                "A masterpiece to produce, judged by other Masters — plus guild rules on who may take apprentices",
                "A royal licence costing 250 rupees",
                "A seven-year waiting list at the Worshipful Company",
              ]}
              answer={1}
              explain="The gate to mastery was the masterpiece — judged by other Masters. The hatters' regulations show how thick the rules ran: apprenticeships of no less than seven years, and no one may take an apprentice unless he is himself a freeman of London. The guild controlled entry, quality, training and competition — all at once."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Guild = craftsmen/merchants organised for <b>mutual aid, protection, standards</b> — merchant guilds <b>1000–1150 AD</b>, craft guilds <b>1100–1300 AD</b>.</>,
              <>The ladder: <b>apprentice</b> (unpaid, learning) → <b>journeyman</b> (wages, any master) → <b>master</b> (workshop, apprentices — via the <b>masterpiece</b>).</>,
              <>Four function-faces: <b>economic</b> (quality, prices, competition), <b>social</b> (sickness, burial, poverty), <b>religious</b> (patron saints), <b>political</b> (own courts, revolts).</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 12 — TRADE ROUTES  (#trade-routes)
   with Machine 03 — the Silk Road Speedway
   ============================================================ */
const MODES = [
  {
    id: "caravan",
    label: "Overland caravan",
    engine: "Camels / mules / horses",
    lo: 30,
    hi: 40,
    viability: "High-value luxury only — silk, gems, incense. The animals' feeding costs eat anything cheaper.",
  },
  {
    id: "barge",
    label: "River barge",
    engine: "River currents / human towing",
    lo: 10,
    hi: 20,
    viability: "Bulk domestic goods — grain, stone, agricultural tax revenue. Slow, but cheap per ton (upstream is the crawl).",
  },
  {
    id: "ship",
    label: "Ocean-going ship",
    engine: "Monsoon winds / trade winds",
    lo: 100,
    hi: 150,
    viability: "International bulk & luxury — spices, textiles, timber, ceramics. The wind is free; the ocean is a highway.",
  },
];

function SilkSpeed() {
  const [modeIdx, setModeIdx] = useState(2);
  const [days, setDays] = useState(30);
  const m = MODES[modeIdx];
  const lo = m.lo * days;
  const hi = m.hi * days;
  const maxKm = 18000; // ship at 120 days
  const pct = Math.min(100, (hi / maxKm) * 100);
  const fmt = (n: number) => n.toLocaleString("en-IN");
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine 03 — the Silk Road speedway · pick a mode, drag the days
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {MODES.map((mm, i) => (
          <button
            key={mm.id}
            type="button"
            onClick={() => setModeIdx(i)}
            aria-pressed={i === modeIdx}
            className="rounded-2xl border p-3 text-left transition-all duration-200"
            style={
              i === modeIdx
                ? { borderColor: "transparent", background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 10px 22px -12px rgba(161,98,7,.45)" }
                : { borderColor: "#e0cb84", background: "#fffdf6" }
            }
          >
            <p className="flex items-center gap-1.5 text-[.85rem] font-extrabold text-[#3e2c1d]">
              {i === 2 ? <Ship className="h-4 w-4" style={{ color: EBH_G[700] }} /> : i === 1 ? <Boxes className="h-4 w-4" style={{ color: EBH_G[700] }} /> : <Wheat className="h-4 w-4" style={{ color: EBH_G[700] }} />}
              {mm.label}
            </p>
            <p className="mt-1 text-[.72rem] leading-snug text-muted-warm">{mm.engine}</p>
          </button>
        ))}
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-[.78rem] font-bold text-[#6f5438]">
          <span>Days of travel</span>
          <span className="font-mono" style={{ color: EBH_G[800] }}>{days} days</span>
        </div>
        <input
          type="range"
          min={1}
          max={120}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          aria-label="Days of travel"
          className="mt-2 w-full"
          style={{ accentColor: "#ca8a04" }}
        />
      </div>

      <div className="mt-4 rounded-2xl border p-4" style={{ borderColor: EBH_G.border, background: EBH_G.wash }}>
        <p className="font-mono text-[.8rem] font-bold" style={{ color: EBH_G[800] }}>
          {fmt(lo)} – {fmt(hi)} km covered
        </p>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white">
          <motion.div
            className="h-full rounded-full"
            style={{ background: EBH_BTN_GRAD }}
            animate={{ width: `${pct}%` }}
            transition={{ type: "spring", stiffness: 90, damping: 20 }}
          />
        </div>
        <p className="mt-3 text-[.82rem] leading-relaxed text-[#2b2014]">
          <b>Economic viability:</b> {m.viability}
        </p>
      </div>
      <p className="mt-3 text-center text-[.78rem] leading-relaxed text-muted-warm">
        Average daily speeds from the lecture: caravan <b>30–40 km/day</b> · river barge{" "}
        <b>10–20 km/day</b> (upstream) · ocean ship <b>100–150 km/day</b>.
      </p>
    </div>
  );
}

export function EbhTradeSection() {
  return (
    <Section id="trade-routes">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 2 · Live Session 3 — the long distance"
          title={
            <>
              Trade routes &amp; the <span className="grad-gold">Commercial Revolution</span>
            </>
          }
          lead="The Silk Road was less a road than a relay of speeds — and the maths of those speeds decided what could be traded, by whom, and which cities got rich."
        />

        <EbhReadStep n="01" title="Three ways to move a bale of silk" sub="Speed decided the cargo" />
        <Reveal>
          <div className="card-warm overflow-x-auto p-4 sm:p-5">
            <table className="warm-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Transport mode</th>
                  <th>Primary engine</th>
                  <th>Average daily speed</th>
                  <th>Economic viability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold" style={{ color: EBH_G[800] }}>Overland caravan</td>
                  <td>Camels / mules / horses</td>
                  <td className="font-mono">30–40 km / day</td>
                  <td>High-value luxury only (silk, gems, incense) — due to high feeding costs</td>
                </tr>
                <tr>
                  <td className="font-bold" style={{ color: EBH_G[800] }}>River barge</td>
                  <td>River currents / human towing</td>
                  <td className="font-mono">10–20 km / day (upstream)</td>
                  <td>Bulk domestic goods (grain, stone, agricultural tax revenue)</td>
                </tr>
                <tr>
                  <td className="font-bold" style={{ color: EBH_G[800] }}>Ocean-going ship</td>
                  <td>Monsoon winds / trade winds</td>
                  <td className="font-mono">100–150 km / day</td>
                  <td>International bulk &amp; luxury (spices, textiles, timber, ceramics)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="Feel the maths" sub="Why the sea beat the camel for everything cheap" />
        <Reveal>
          <SilkSpeed />
        </Reveal>

        <EbhReadStep n="03" title="What the routes did to the world" sub="Power, faith, and ideas moved with the cargo" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Shield className="h-4 w-4" /> Political power and conflict
              </p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                Strategic control of key <b>mountain passes and desert oases</b> — whoever held
                the choke points taxed the flow.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <ScrollText className="h-4 w-4" /> Cultural and technological exchange
              </p>
              <p className="mt-2 text-[.85rem] leading-relaxed text-muted-warm">
                <b>Spread of faith</b> — and <b>new ideas</b>. Goods travel with their makers&rsquo;
                gods, scripts and techniques attached.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="04" title="The Commercial Revolution — Europe" sub="11th century to the mid-18th: trade builds a continent" />
        <EbhCallout kind="insight" title="Two headlines">
          A European economy develops <b>based on trade</b> — 11th century AD until the
          mid-18th century. <b>Italy</b>: <b>1,00,000+ residents</b> in Venice, Florence, and
          Milan. And beneath it, a new class: the <b>rising urban merchant class</b> —{" "}
          <b>wealth became liquid</b>, measured in <b>money and goods rather than land</b> — and
          the <b>laws/policies</b> began to be written by that urban merchant class.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="why" title="Connect it back">
            Remember the agrarian world&rsquo;s third lock — <b>land as wealth</b>? The Commercial
            Revolution is where that lock starts to rust: once wealth is measured in{" "}
            <b>money and goods</b>, it can move, split, pool and multiply — land cannot.
          </EbhCallout>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Live Session 3"
              q="A merchant in Venice wants to ship 40 tonnes of ordinary grain to a domestic buyer, 600 km upriver. A rival wants to move 2 crates of gems 3,000 km overland. Using the lecture's speeds and viability logic, who has the cheaper per-kg journey?"
              options={[
                "The gem merchant — luxury goods travel cheapest",
                "The grain merchant — barges (10–20 km/day) exist precisely for bulk domestic goods; the caravan's feeding costs forbid cheap cargo",
                "Both pay the same per km",
                "Neither — grain never travelled in the pre-industrial world",
              ]}
              answer={1}
              explain="The transport table is a cost-sorting machine: river barges at 10–20 km/day hauled bulk domestic goods — grain, stone, tax grain. Overland caravans at 30–40 km/day carried high-value luxury only, because feeding camels/mules/horses was ruinous per kg. Cargo followed the engine's economics."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Three engines: <b>caravan 30–40</b> · <b>barge 10–20</b> · <b>ship 100–150 km/day</b> — speed sorted luxury from bulk.</>,
              <>Routes carried more than goods: <b>power</b> (passes, oases) and <b>culture</b> (faith, ideas).</>,
              <>The Commercial Revolution made wealth <b>liquid</b> — money and goods, not land — and merchant classes wrote the laws.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER 13 — LIFE BEFORE MACHINES  (#life-before)
   ============================================================ */
export function EbhLifeBeforeSection() {
  return (
    <Section id="life-before">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 9 — the threshold"
          title={
            <>
              Life <span className="grad-gold">before machines</span>
            </>
          }
          lead="The Industrial Revolution arrives around the 1760s, in Great Britain. To feel what it shattered, imagine England around 1700: you want 100 shirts — and there are no factories, no power looms, no steam-powered production lines."
        />

        <EbhReadStep n="01" title="The world as it stood" sub="Agriculture the mainstay, guilds the rulebook" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Agriculture</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                The <b>mainstay of the population</b> — most people, most fields, most hours.
                Hand work on the land, made viable by skill and sweat.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Guilds</p>
              <p className="mt-1.5 text-[.85rem] leading-relaxed text-muted-warm">
                Craftsmen worked in guilds — <b>regulated professions and markets at the city
                level</b>. Your 100 shirts would be slow, manual, skilled labour — produced under
                guild rules, workshop by workshop.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="02" title="How did the system break?" sub="Two cracks: the agricultural revolution and the putting-out system" />
        <Reveal>
          <EbhPanel label="The lecture's answer, in two lines">
{`How did the agriculture and guild system break,
allowing the factories to exist?

  → the AGRICULTURE REVOLUTION
  → the PUTTING-OUT SYSTEM developed`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="03" title="The agricultural revolution" sub="Rotation, tools, and enclosure" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Sprout, t: "Four-field crop rotation", d: "Clover · barley · wheat · turnips — fields never exhausted, animals fed through winter, soil renewed in a cycle." },
            { icon: Wheat, t: "Innovation in tools", d: "Jethro Tull's seed drill (1701) — seed sown in neat rows instead of scattered, yields up." },
            { icon: Landmark, t: "…and then enclosure", d: "The legal earthquake that redrew the countryside — next step." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.9rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="04" title="The enclosure movement" sub="Common land becomes private property — by Act of Parliament" />
        <EbhCallout kind="story" title="Before and after">
          Before: the <b>open-field system</b> — a portion of land categorised as{" "}
          <b>&ldquo;common&rdquo;</b>, with <b>grazing rights</b>, and life that{" "}
          <b>necessitated co-operation among the residents of the manor/village</b>. Then:{" "}
          <b>Enclosure Acts through Parliament</b> — created legal property rights to land
          previously held in common; <b>abolished communal rights</b>;{" "}
          <b>consolidated small strips into massive private farms</b>; landowners built physical
          boundaries — <b>fences, hedges, or stone walls</b>.
        </EbhCallout>
        <Reveal delay={80}>
          <div className="card-warm mt-4 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-center font-mono text-[.64rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G.sepia }}>
                  Before — open fields &amp; commons
                </p>
                <svg viewBox="0 0 300 170" className="mt-2 h-auto w-full" role="img" aria-label="Open-field system: many small strips of land with a shared common area">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <rect
                      key={i}
                      x={10 + (i % 6) * 48}
                      y={10 + Math.floor(i / 6) * 34}
                      width="42"
                      height="28"
                      rx="3"
                      fill={i % 2 === 0 ? "#f3ecc9" : "#ece1ad"}
                      stroke="#cdbd7d"
                      strokeWidth="1"
                    />
                  ))}
                  <rect x="10" y="146" width="280" height="16" rx="4" fill="#dcead2" stroke="#9ab86b" />
                  <text x="150" y="158" textAnchor="middle" fontSize="9" fontWeight="700" fill="#44621d">THE COMMON — grazing rights, shared by all</text>
                </svg>
              </div>
              <div>
                <p className="text-center font-mono text-[.64rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
                  After — enclosed private farms
                </p>
                <svg viewBox="0 0 300 170" className="mt-2 h-auto w-full" role="img" aria-label="Enclosed landscape: a few large private farms separated by hedges and walls">
                  <rect x="10" y="10" width="170" height="92" rx="4" fill="#f6efc6" stroke="#a16207" strokeWidth="2" />
                  <text x="95" y="60" textAnchor="middle" fontSize="10" fontWeight="800" fill="#854d0e">MASSIVE PRIVATE FARM</text>
                  <rect x="190" y="10" width="100" height="92" rx="4" fill="#f3ecc9" stroke="#a16207" strokeWidth="1.5" />
                  <text x="240" y="60" textAnchor="middle" fontSize="9" fontWeight="700" fill="#854d0e">FARM II</text>
                  <rect x="10" y="112" width="130" height="48" rx="4" fill="#f3ecc9" stroke="#a16207" strokeWidth="1.5" />
                  <text x="75" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="#854d0e">FARM III</text>
                  <rect x="150" y="112" width="140" height="48" rx="4" fill="#f6efc6" stroke="#a16207" strokeWidth="1.5" />
                  <text x="220" y="140" textAnchor="middle" fontSize="9" fontWeight="700" fill="#854d0e">FARM IV</text>
                  {[102, 104].map((y, i) => (
                    <line key={i} x1="10" y1={y} x2="290" y2={y} stroke="#7c6248" strokeWidth="1.6" strokeDasharray="4 3" />
                  ))}
                  <text x="150" y="98" textAnchor="middle" fontSize="8.5" fill="#7c6248">fences · hedges · stone walls</text>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="mt-4">
          <EbhCallout kind="warn" title="Not bloodless — the Midland Revolt, 1607">
            <b>Enclosure riots.</b> In the Midland Revolt (1607), thousands of peasants in{" "}
            <b>Northamptonshire and Warwickshire</b> — calling themselves{" "}
            <b>&ldquo;Diggers&rdquo; and &ldquo;Levellers&rdquo;</b> — organised to{" "}
            <b>level enclosure fences</b>.
          </EbhCallout>
        </div>
        <Reveal>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Easier to manage", d: "Land became easier to manage as a single economic unit" },
              { t: "Greater incentive", d: "For agricultural improvement — your farm, your profit" },
              { t: "Higher productivity", d: "More food available than ever before" },
              { t: "Labour released", d: "Some labour now available for non-agricultural work" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70}>
                <div className="card-warm lift h-full p-4">
                  <p className="text-[.86rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                  <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <EbhReadStep n="05" title="The putting-out system" sub="Subcontracting around the guild — the first crack" />
        <EbhCallout kind="why" title="The bottleneck">
          Labour was <b>available</b> (enclosure had seen to that). But the <b>guild</b> was the
          bottleneck: it held a <b>monopoly on manufacturing</b>, strictly{" "}
          <b>limited the number of workers</b>, <b>set prices</b>, and <b>banned new
          technology</b>.
        </EbhCallout>
        <div className="mt-4">
          <EbhCallout kind="insight" title="The workaround">
            Merchants developed a method of <b>subcontracting production</b>: the{" "}
            <b>merchant</b> provided distributed raw materials to workers; the{" "}
            <b>workers</b> completed the work in their own homes or small workshops;{" "}
            <b>workers were paid wages</b>. This was the <b>beginning of the breaking of the
            guild system</b> — and the first sketch of the factory, drawn in cottages.
          </EbhCallout>
        </div>
        <Reveal delay={80}>
          <p className="mt-4 text-center text-[.85rem] leading-relaxed text-muted-warm">
            Looming ahead, the lecture&rsquo;s last word of the day: <b>Machines — the Spinning
            Jenny, the Steam Engine.</b> Module 3 is their story.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 9"
              q="Chain the causes: enclosure → food → factories. Which rung is the lecture's explicit link?"
              options={[
                "Enclosure made farming romantic, so more people farmed",
                "Enclosure consolidated strips and raised productivity — more food available, and some labour now free for non-agricultural work",
                "Enclosure banned guilds directly",
                "Enclosure created the seed drill",
              ]}
              answer={1}
              explain="Enclosure's outcomes: land easier to manage as a single economic unit, greater incentive for improvement, higher agricultural productivity — more food — and some labour available for non-agricultural work. Food plus freed hands: exactly the two inputs the coming factories would consume. (The seed drill was Tull's, 1701 — a separate innovation.)"
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Pre-industrial Britain: <b>agriculture the mainstay</b>, guilds regulating trades city by city.</>,
              <>Agriculture revolution: <b>four-field rotation</b>, Tull&rsquo;s <b>seed drill (1701)</b>, and <b>enclosure</b> — commons into private farms, resistance from the Diggers &amp; Levellers (1607).</>,
              <>Putting-out: merchants subcontracted <b>raw materials → homes → wages</b> — the guild system begins to break.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
