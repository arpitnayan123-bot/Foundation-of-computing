"use client";

/* ============================================================
   Economic & Business History — PART 8 (shelf 04 of The Atlas).
   The 28-lecture deck's finale chapters: Lecture 27 (the world
   wars and business) and Lecture 28 (Module 5 — Indian business
   history and colonial rule, 1600s–1813).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Factory,
  FlaskConical,
  Landmark,
  Package,
  Scale,
  ScrollText,
  Ship,
  TrendingUp,
  Users,
  Wallet,
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
   CHAPTER — L27 · THE WORLD WARS  (#world-wars)
   with Machine — the war-file switcher
   ============================================================ */
const WARS = [
  {
    id: "wwi",
    name: "World War I",
    years: "1914–1918",
    allies: "Great Britain (and British Empire), France, Russia (until 1917), Italy, United States (from 1917)",
    axis: "Central Powers — Germany, Austria-Hungary, Ottoman Empire, Bulgaria",
    outcome: "Allied victory; the Treaty of Versailles imposed heavy penalties on Germany",
    tone: EBH_G[700],
  },
  {
    id: "wwii",
    name: "World War II",
    years: "1939–1945",
    allies: "Great Britain, Soviet Union, United States (from 1941), China, France",
    axis: "Axis Powers — Nazi Germany, Japan, Italy",
    outcome: "Allied victory; Japan surrendered following the atomic bombings of Hiroshima (August 6) and Nagasaki (August 9)",
    tone: "#b3402c",
  },
];

function WarFile() {
  const [idx, setIdx] = useState(0);
  const w = WARS[idx];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the war files · open each theatre
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {WARS.map((ww, i) => (
          <button
            key={ww.id}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className="rounded-2xl border px-3 py-3 text-left transition-all duration-200"
            style={
              i === idx
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            <p className="text-[.86rem] font-black">{ww.name}</p>
            <p className="font-mono text-[.68rem] opacity-80">{ww.years}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={w.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4 space-y-2"
        >
          {[
            { k: "Allied Forces", v: w.allies },
            { k: w.id === "wwi" ? "Central Powers" : "Axis Powers", v: w.axis },
            { k: "Outcome", v: w.outcome },
          ].map((row, i) => (
            <motion.div
              key={row.k}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.09, duration: 0.32 }}
              className="rounded-xl border border-[#e0cb84] bg-white p-3"
            >
              <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>{row.k}</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#2b2014]">{row.v}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <p className="mt-3 rounded-xl border border-[#e0cb84] bg-[#fdfae9] p-3 text-[.8rem] leading-relaxed text-[#2b2014]">
        <b style={{ color: EBH_G[700] }}>Important context: </b>the wars were concentrated primarily
        in Europe and the Pacific. Many countries — particularly colonies — were drawn in by their
        colonial status rather than independent choice. <b>India participated in both wars as a
        British colony.</b>
      </p>
    </div>
  );
}

const WAR_INDUSTRIES = [
  { co: "Renault", country: "France", sector: "Automobile", d: "Transitioned from civilian vehicles to tanks — the Renault FT, recognised as the world's first modern tank, became foundational for all tank design that followed." },
  { co: "Ford", country: "United States", sector: "Automobile", d: "Shifted from civilian automobiles to military vehicles and aircraft — and perfected mass-production techniques during the war years, connected directly to the management theories of earlier lectures." },
  { co: "DuPont", country: "United States", sector: "Chemicals & explosives", d: "Increased production capacity by 70 times between 1914 and 1917; supplied approximately 40% of all explosives to Allied forces by 1917 — war demand creating massive growth, employment and tax revenue." },
  { co: "IG Farben", country: "Germany", sector: "Chemicals", d: "Synthesized fuel and rubber from domestic coal — supporting Nazi Germany's war effort through World War II." },
  { co: "Gillette", country: "United States", sector: "Consumer goods", d: "The US government ordered 3.5 million safety razors and 32 million blades in 1917 — establishing daily shaving as standard military practice and guaranteeing revenue and market expansion." },
  { co: "Coca-Cola", country: "United States", sector: "Consumer goods", d: "Lobbied successfully for exemption from sugar rationing (boosting troop morale); established 64 overseas bottling plants near combat zones in WWII; expanded globally — and notably operated in Nazi Germany under the brand name Fanta." },
  { co: "IBM & Dehomag", country: "US / Germany", sector: "Information technology", d: "IBM's German subsidiary supplied punch-card computing machines to Nazi Germany for population enumeration and administration — businesses operating across war lines for profit." },
];

const WAR_IMPACTS = [
  {
    n: "1",
    t: "Government control & state capitalism",
    d: "Before the wars, governments regulated through licensing and policies and facilitated trade. During them: allocating raw materials, controlling production quantities and prices, directing factories toward military production, regulating imports and exports comprehensively. State capitalism — government controls what to produce, how much, where to sell, at what price — proved government-regulated development viable (a preview of pre-1991 India's License Raj).",
  },
  {
    n: "2",
    t: "Growth of war industries & innovation",
    d: "Massive expansion across automobiles, chemicals, explosives, consumer goods and technology. Operations Research was developed in WWII for optimal resource allocation; GPS was created for military purposes and later adapted for civilians (Google Maps). The general pattern: military innovations transition to civilian applications in peacetime.",
  },
  {
    n: "3",
    t: "Trade disruption & emerging-market restructuring",
    d: "Traditional trade routes disrupted; British manufacturing capacity diverted to military production; supply of finished goods to colonies severely reduced. Indian businesses stepped into supply gaps for military and civilian needs — steel, rails, jute, textiles for uniforms — capturing market share previously held by British manufacturers, and laying the foundation for post-independence industrial development.",
  },
  {
    n: "4",
    t: "Geopolitical shift — the US as superpower",
    d: "Geographic distance from combat zones protected US infrastructure while it supplied all Allied forces. Employment, consumer spending and tax revenue rose; no domestic reconstruction was needed. WWI began the rise; WWII cemented it — industrial dominance, military might, nuclear weapons (August 1945), number one global power militarily and economically. Decolonization followed: weakened European powers, a global consensus against repeated warfare, and a wave of independence across Asia and Africa (1945–1950s).",
  },
];

const US_VS_EUROPE = [
  { k: "Industrial production", us: "Expanded significantly", eu: "Severely impacted" },
  { k: "Infrastructure", us: "Remained undamaged", eu: "Heavily destroyed — factories, railways, cities" },
  { k: "Exports", us: "Increased substantially", eu: "Struggled due to damage" },
  { k: "Economic position", us: "Rose as superpower", eu: "Weakened" },
  { k: "Military status", us: "Emerged as military power", eu: "Diminished" },
];

export function EbhWorldWarsSection() {
  return (
    <Section id="world-wars">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 4 · Lecture 27 — when the world went to war, business followed"
          title={
            <>
              The World Wars &amp; <span className="grad-gold">business</span> (1914–1945)
            </>
          }
          lead="Two wars transformed government–business relationships, sparked industrial innovation, and reshaped the global economic landscape — ending with the United States as economic and military superpower."
        />

        <EbhReadStep n="01" title="The two wars, filed" sub="Who fought, and how it ended" />
        <Reveal>
          <WarFile />
        </Reveal>

        <EbhReadStep n="02" title="Impact 1 — state capitalism arrives" sub="The government takes the wheel" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e0cb84] bg-white p-4">
                <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Before the wars</p>
                <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                  <li>· Regulated through licensing and policies</li>
                  <li>· Facilitated trade through raw-material provision</li>
                  <li>· No control over production quantities, prices, or raw-material allocation</li>
                </ul>
              </div>
              <div className="rounded-2xl border p-4" style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)" }}>
                <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>During the wars</p>
                <ul className="mt-2 space-y-1.5 text-[.82rem] leading-relaxed text-[#2b2014]">
                  <li>· Allocated raw materials</li>
                  <li>· Controlled production quantities and prices</li>
                  <li>· Directed factories toward military production</li>
                  <li>· Regulated imports and exports comprehensively</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 rounded-xl border border-[#e0cb84] bg-white p-3 text-[.82rem] leading-relaxed text-muted-warm">
              <b style={{ color: EBH_G[700] }}>State capitalism: </b>government controls what to
              produce, how much to produce, where to sell, and at what price — a departure from
              free-market principles, strikingly similar to concepts later seen in{" "}
              <b>pre-1991 India&rsquo;s License Raj</b>. It demonstrated that government-regulated
              economic development was viable — and military production demanded it: massive
              industrial mobilisation, consumer goods swapped for military supplies, raw materials
              allocated strategically.
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Impact 2 — the war-industries gallery" sub="Seven companies that grew inside the war economy" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WAR_INDUSTRIES.map((c, i) => (
            <Reveal key={c.co} delay={i * 60}>
              <div className="card-warm lift h-full p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">{c.co}</p>
                  <span className="rounded-full bg-[#f2ecd9] px-2 py-0.5 text-[.6rem] font-black uppercase tracking-wide" style={{ color: EBH_G[700] }}>
                    {c.country}
                  </span>
                </div>
                <p className="mt-0.5 text-[.64rem] font-black uppercase tracking-[.14em] text-[#a08a5a]">{c.sector}</p>
                <p className="mt-1.5 text-[.78rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="04" title="Impact 3 — the opening for Indian business" sub="Britain's war need became India's opportunity" />
        <Reveal>
          <EbhPanel label="The emerging-market chain (India)" tone="sepia">
{`War disrupts trade routes
        ↓
British manufacturing capacity diverted to the military
        ↓
Supply of finished goods to colonies severely reduced
        ↓
Domestic industries step in — military weapons and
supplies: steel, rails, jute, textiles for uniforms
        ↓
Indian businesses capture British-held market share
        ↓
Long term: experience + market access → the foundation
of post-independence industrial development`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="05" title="Impact 4 — America rises, Europe recedes, empires dissolve" sub="The comparative ledger — then decolonization" />
        <Reveal>
          <div className="card-warm overflow-hidden">
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] rounded-t-2xl border-b text-[.7rem] font-black uppercase tracking-[.1em]" style={{ borderColor: EBH_G.border, background: "#faf3d9", color: EBH_G[700] }}>
              <div className="px-3 py-2.5">Aspect</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>United States</div>
              <div className="border-l px-3 py-2.5" style={{ borderColor: EBH_G.border }}>Europe</div>
            </div>
            {US_VS_EUROPE.map((r, i) => (
              <motion.div
                key={r.k}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className={`grid grid-cols-[1fr_1.2fr_1.2fr] text-[.8rem] leading-snug ${i < US_VS_EUROPE.length - 1 ? "border-b" : ""}`}
                style={{ borderColor: "#efe6cd" }}
              >
                <div className="px-3 py-2.5 font-extrabold text-[#3e2c1d]">{r.k}</div>
                <div className="border-l px-3 py-2.5 text-[#2f3d1c]" style={{ borderColor: "#efe6cd", background: "#eef4dd" }}>{r.us}</div>
                <div className="border-l px-3 py-2.5 text-[#5a2a24]" style={{ borderColor: "#efe6cd", background: "#fbeae5" }}>{r.eu}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="insight" title="Decolonization — the wave of independence">
            After 1945: European powers too weakened to maintain imperial control; power shifted
            from Europe to the United States; a global consensus emerged against repeated warfare
            and for granting colonies independence. Multiple Asian and African colonies gained
            freedom — India achieved independence following its strong freedom movement — during
            the <b>1945–1950s</b>. Emerging nations began formulating independent economic policies,
            setting the stage for new international business relationships.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 27"
              q="DuPont's wartime numbers are the lecture's most extreme growth story. What were they?"
              options={[
                "Capacity doubled; 10% of Allied explosives",
                "Production capacity increased 70 times between 1914 and 1917 — supplying approximately 40% of all explosives to Allied forces by 1917",
                "Capacity tripled; 90% of German explosives",
                "Capacity unchanged — but profits doubled",
              ]}
              answer={1}
              explain="DuPont increased production capacity by 70 times between 1914 and 1917, and supplied approximately 40% of all explosives to Allied forces by 1917 — the lecture's example of war demand creating massive economic growth, employment and tax revenue. The consumer side matched it: Gillette's 3.5 million razors and 32 million blades in 1917; Coca-Cola's rationing exemption and 64 overseas bottling plants."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The wars turned governments into economic commanders — <b>state capitalism</b>, the rehearsal for pre-1991 India&rsquo;s License Raj.</>,
              <>War industries boomed: <b>Renault&rsquo;s FT tank, DuPont ×70 (40% of Allied explosives), Gillette&rsquo;s 3.5M razors, Coca-Cola&rsquo;s Fanta</b>, IBM&rsquo;s punch cards — and <b>Operations Research &amp; GPS</b> crossed into civilian life.</>,
              <>The ledger flips: <b>India&rsquo;s industries capture wartime demand</b>; the US rises to superpower; <b>decolonization follows (1945–1950s)</b>.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L28 · INDIAN BUSINESS HISTORY  (#indian-business)
   with Machine — the charter timeline
   ============================================================ */
const CHARTER_TIMELINE = [
  {
    y: "1600",
    t: "Charter of 1600 — Queen Elizabeth I",
    d: "Established the East India Company's legal foundation for overseas operations. Purpose: commercial expansion of the British Empire. Granted an exclusive trade monopoly for 15 years in the East Indies. Limited scope: no administrative, judicial, or military powers.",
    tone: EBH_G[700],
  },
  {
    y: "1661",
    t: "Charter of 1661 — King Charles II",
    d: "Confirmed the trade monopoly — and dramatically expanded powers: territorial & administrative (create rules in designated regions), judicial (administer justice in civil and criminal matters under English law), and military (raise troops, fortify bases, build weapons, declare war or peace).",
    tone: EBH_G[800],
  },
  {
    y: "1726–1753",
    t: "Phase 1 — judicial powers limited",
    d: "Charter of 1726 established Royal Mayor's Courts in Madras, Bombay and Calcutta; the Charter of 1753 further limited the Company's judicial authority. Outcome: the Crown's legal authority over company territories strengthened.",
    tone: "#8a6d4f",
  },
  {
    y: "1773–1784",
    t: "Phase 2 — political powers transferred",
    d: "The Regulating Act of 1773 superseded parts of the 1753 Charter — creating the position of Governor General of Bengal (held by Warren Hastings) and transferring political control to the British Crown. Pitt's India Act of 1784 extended Crown oversight of company operations.",
    tone: "#92400e",
  },
  {
    y: "1813",
    t: "Phase 3 — the trade monopoly ends",
    d: "The Charter Act of 1813 stripped the East India Company of its exclusive trade monopoly (retained only for tea and China trade). Reason: Industrial Revolution pressure — access to raw materials (especially cotton), markets for finished goods, and British merchants' demands for trading freedom. British merchants could now trade with India, subject to restrictions and licensing.",
    tone: "#b3402c",
  },
];

function CharterTimeline() {
  const [open, setOpen] = useState(1);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the charter timeline · two centuries in five steps
      </p>
      <div className="relative mt-5">
        <div className="absolute bottom-4 left-4 top-4 w-px" style={{ background: `linear-gradient(180deg,${EBH_G[500]},#cec2a4)` }} aria-hidden />
        <div className="space-y-2">
          {CHARTER_TIMELINE.map((row, i) => {
            const isOpen = i === open;
            return (
              <motion.div
                key={row.y}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="relative pl-10"
              >
                <span
                  className="absolute left-4 top-5 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                  style={{ background: isOpen ? row.tone : "#cec2a4", boxShadow: isOpen ? `0 0 0 4px ${row.tone}22` : undefined }}
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className="w-full rounded-xl border p-3 text-left transition-all duration-200"
                  style={
                    isOpen
                      ? { borderColor: "transparent", background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 10px 22px -12px rgba(161,98,7,.4)" }
                      : { borderColor: "#e0cb84", background: "#fffdf6" }
                  }
                >
                  <span className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-[.8rem] font-black" style={{ color: row.tone }}>{row.y}</span>
                    <span className="text-[.9rem] font-extrabold text-[#3e2c1d]">{row.t}</span>
                  </span>
                  {isOpen ? (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-1.5 block text-[.82rem] leading-relaxed text-muted-warm"
                    >
                      {row.d}
                    </motion.span>
                  ) : null}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ENTREPRENEUR_ROLES = [
  {
    icon: Users,
    t: "Role 1 — Intermediaries & middlemen",
    d: "The East India Company lacked local languages, geographical knowledge and social connections. Indian merchants brokered between company officials and local people/suppliers — facilitating the purchase of local products and the sale of British goods.",
  },
  {
    icon: Wallet,
    t: "Role 2 — Financiers & bankers",
    d: "Essential capital and credit lines for military campaigns, trade operations, soldier payments, weapons and uniforms. Key figure: Jagat Seth and his house — massive credit lines to the East India Company and other trading companies; a crucial player in the Battle of Plassey (1757), after which the Company captured significant Bengal territory.",
  },
  {
    icon: Ship,
    t: "Role 3 — Shipping & maritime trade",
    d: "Lovji Wadia (Parsi entrepreneur) established the Wadia Group in 1736 — shipbuilding in Bombay dockyards, on British East India Company contracts for ships and docks. Still in existence after nearly 300 years. Impact: Bombay grew as a major port; the group later expanded into clothing and apparel — the Bombay Dyeing brand.",
  },
];

export function EbhIndianBusinessSection() {
  return (
    <Section id="indian-business">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 5 · Lecture 28 — the Indian chapter opens"
          title={
            <>
              Indian business history &amp; <span className="grad-gold">colonial rule</span> (1600s–1813)
            </>
          }
          lead="Module 4 ended in 1945. Module 5 rewinds to the 1750s–60s and shifts to India: the East India Company's charters, their slow erosion — and the Indian entrepreneurs who worked in the spaces between."
        />

        <EbhReadStep n="01" title="The East India Company — chartered, then reined in" sub="From 15-year monopoly to stripped powers, 1600 → 1813" />
        <Reveal>
          <CharterTimeline />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card-warm lift p-5 text-center">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>The monopoly&rsquo;s lifespan</p>
              <p className="mt-2 font-mono text-[1.3rem] font-black" style={{ color: EBH_G[800] }}>≈ 200 years</p>
              <p className="mt-1 text-[.78rem] text-muted-warm">1600 → 1813 — a substantial period of controlled colonial commerce that shaped Indian entrepreneurial development</p>
            </div>
            <div className="card-warm lift p-5 text-center">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>Why 1813 happened</p>
              <p className="mt-2 text-[.82rem] font-extrabold" style={{ color: EBH_G[800] }}>The Industrial Revolution&rsquo;s pressure</p>
              <p className="mt-1 text-[.78rem] leading-relaxed text-muted-warm">Textile expansion demanded raw materials (especially cotton) and markets for finished goods — and British merchants demanded trading freedom</p>
            </div>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="The three roles of Indian entrepreneurs" sub="1600s–1813 — the work the Company couldn't do itself" />
        <div className="space-y-3">
          {ENTREPRENEUR_ROLES.map((r, i) => (
            <Reveal key={r.t} delay={i * 70}>
              <div className="card-warm lift flex gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: EBH_BTN_GRAD }}>
                  <r.icon className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[.95rem] font-extrabold text-[#3e2c1d]">{r.t}</p>
                  <p className="mt-1 text-[.83rem] leading-relaxed text-muted-warm">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="03" title="The trade floors" sub="Opium, China — and raw cotton for the machines" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Package className="h-4 w-4" /> Opium &amp; the China trade
              </p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Parsi merchants engaged in the lucrative opium trade between China and British
                territories — and in trade with the UK and other British possessions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <FlaskConical className="h-4 w-4" /> Raw cotton
              </p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Parsi and Gujarati merchants participated extensively in raw-cotton exports to{" "}
                <b>both Britain</b> (feeding Industrial Revolution textile manufacturing){" "}
                <b>and China</b>. Raw cotton became one of India&rsquo;s major exports — the essential
                raw material for British textile factories.
              </p>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="04" title="1813 — the watershed, and what came after" sub="Doors open; the next module loads" />
        <Reveal>
          <EbhPanel label="After 1813 — the transition">
{`• End of the EIC trade monopoly (except tea & China trade)
• Doors open for independent British merchants AND
  Indian entrepreneurs
• Rise of manufacturing and factory systems in India
• Stage set for increased industrialization — followed
  by major events like the 1857 First War of Independence
• Multiple economic sectors develop beyond trading;
  Indian entrepreneurs' roles evolve
• World Wars leave their impact — the foundation of
  modern Indian industrial development`}
          </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="story" title="What the next lectures cover (1813 → 1900s)">
            Changes in the colonial rule structure · the evolution of Indian entrepreneurs&rsquo;
            roles · the rise of manufacturing and factories · the impact of the First and Second
            World Wars on Indian businesses. The Module 5 story runs from the 1750s to independence
            and beyond.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 28"
              q="The Charter of 1661 changed the East India Company's character. What did it add that the Charter of 1600 deliberately withheld?"
              options={[
                "A longer trade monopoly — 30 years instead of 15",
                "Administrative, judicial and military powers — create rules in designated regions, administer justice under English law, and raise troops, fortify bases, build weapons, even declare war or peace",
                "The right to trade with China only",
                "Permission to build factories in England",
              ]}
              answer={1}
              explain="The 1600 charter was purely commercial: an exclusive trade monopoly for 15 years in the East Indies, with no administrative, judicial or military powers. Charles II's 1661 charter confirmed the monopoly but added territorial & administrative powers, judicial powers (civil and criminal justice under English law), and military powers — troops, fortifications, weapons, war and peace. A trading company had become a quasi-state."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>The EIC&rsquo;s arc: <b>1600 commercial charter → 1661 quasi-state → erosion (1726/1753, 1773/1784) → 1813 monopoly ends</b> — ~200 years of controlled colonial commerce.</>,
              <>Indian entrepreneurs filled the Company&rsquo;s gaps: <b>middlemen · Jagat Seth&rsquo;s finance · the Wadia shipyards (1736)</b> — plus opium, China and the raw-cotton trade.</>,
              <>After <b>1813</b>: manufacturing rises in India, roles evolve, and the road runs to <b>1857</b>, the World Wars, and modern Indian industry.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
