"use client";

/* ============================================================
   Economic & Business History — PART 6 (shelf 04 of The Atlas).
   The 28-lecture deck's new chapters: Lecture 18 (the labour
   movement's phase two), Lecture 20 (political action &
   legislative wins), Lecture 21 (economic systems) and
   Lecture 22 (systems compared + the social-cultural impact).
   ============================================================ */

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Coins,
  Crown,
  Factory,
  Gavel,
  HeartPulse,
  Landmark,
  Lightbulb,
  Scale,
  Users,
  Vote,
  X,
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
   CHAPTER — L18 · PHASE TWO (1824–1830)  (#labor-phase2)
   with Machine — the Paradox Ledger
   ============================================================ */
const PHASE2_TIMELINE = [
  { y: "1799–1800", t: "Combination Acts", d: "Unions and collective bargaining outlawed — organising becomes conspiracy." },
  { y: "1824", t: "The Repeal", d: "Place & Hume strike down 35 statutes spanning ~500 years — including the Laborer's Act of 1425." },
  { y: "Late 1824–1825", t: "The strike wave", d: "Shipping, Manchester's textile mills, the coal mines — miners win wage rises of up to 80%." },
  { y: "1825", t: "Combinations of Workmen Act", d: "Unions legal but stripped: wages and hours only — nothing else may be negotiated." },
  { y: "1825–1870s", t: "Legal stagnation", d: "No major reform for 45–50 years — the tensions of the 1830s–50s build toward Phase Three." },
];

function Phase2Ledger() {
  const [open, setOpen] = useState(1);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the phase-two ledger · tap a year
      </p>
      <div className="mt-5 space-y-2">
        {PHASE2_TIMELINE.map((row, i) => {
          const isOpen = i === open;
          return (
            <motion.div
              key={row.y}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all duration-200"
                style={
                  isOpen
                    ? { borderColor: "transparent", background: "linear-gradient(135deg,#fdf6dc,#faf0cd)", boxShadow: "0 10px 22px -12px rgba(161,98,7,.4)" }
                    : { borderColor: "#e0cb84", background: "#fffdf6" }
                }
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-[.6rem] font-black leading-none"
                  style={isOpen ? { background: EBH_BTN_GRAD, color: "#fff" } : { background: "#f2ecd9", color: EBH_G[700] }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline gap-2">
                    <span className="font-mono text-[.78rem] font-black" style={{ color: EBH_G[700] }}>{row.y}</span>
                    <span className="text-[.9rem] font-extrabold text-[#3e2c1d]">{row.t}</span>
                  </span>
                  {isOpen ? (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-1 block text-[.82rem] leading-relaxed text-muted-warm"
                    >
                      {row.d}
                    </motion.span>
                  ) : null}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function EbhLaborPhase2Section() {
  return (
    <Section id="labor-phase2">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 18 — the great repeal"
          title={
            <>
              Phase Two: <span className="grad-gold">Legalization &amp; Grand Alliances</span> (1824–1830)
            </>
          }
          lead="From secret resistance to legal recognition — and then straight back to restriction. The most paradoxical half-decade in labour history, run by a tailor and a radical MP."
        />

        <EbhReadStep n="01" title="The repeal architects" sub="A tailor's files and an MP's bill" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Francis Place — the tailor</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Compiled extensive documentation of working-class conditions — the crucial evidence
                of workers&rsquo; hardships that made the argument for repeal.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>Joseph Hume — the radical MP</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                Introduced the repeal legislation. Their combined case: the Combination Acts were
                the primary cause of industrial violence and labour disputes — legalise unions and
                the artificial tensions dissolve through improved communication.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="mt-4">
            <EbhCallout kind="why" title="The market-based argument that won">
              Wages, Place and Hume contended, are determined by <b>natural laws of supply and
              demand</b> — not by factory owners&rsquo; decisions alone. Legalising unions wouldn&rsquo;t
              break the market; it would merely let the market speak. That economic logic —
              addressed to a Parliament of political economists — convinced enough members to
              support the repeal.
            </EbhCallout>
          </div>
        </Reveal>

        <EbhReadStep n="02" title="1824 — what the repeal actually did" sub="Not just two acts — thirty-five statutes, five centuries" />
        <Reveal>
          <EbhPanel label="The 1824 repeal — scope">
{`Repealed: 35 separate statutes, passed over ~500 years
          (dating back to the 14th century)
Included: the Laborer's Act of 1425 — which had
          banned collective bargaining among masons

Legalised:
  • the right to form and join labour unions
  • collective bargaining over wages, hours,
    and working conditions
  • protection from conspiracy prosecution for
    organising or recruiting workers`}
        </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="insight" title="A watershed moment">
            Centuries-old legal barriers to worker organisation — gone in one statute. Workers
            could no longer be prosecuted simply for combining or organising. The UK labour
            movement&rsquo;s legal winter had ended.
          </EbhCallout>
        </Reveal>

        <EbhReadStep n="03" title="The strike wave (late 1824 – early 1825)" sub="The unexpected consequence" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { t: "Where", d: "A massive wave of coordinated strikes swept Britain — shipping, textile mills (particularly Manchester), and the coal mines." },
            { t: "Why owners caved", d: "An economic boom meant high market demand — factories could not afford idle machinery or closures, so wage demands were accepted." },
            { t: "The number", d: "Coal miners secured wage increases of up to 80% — concrete proof of what unified action could achieve." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                <p className="mt-1 text-[.82rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="04" title="1825 — the Combinations of Workmen Act" sub="Passed within one year of the repeal: the doors close again" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border p-5" style={{ borderColor: "#b7d49a", background: "#eef4dd" }}>
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: "#44621d" }}>
                <Check className="h-4 w-4" /> What survived
              </p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-[#2f3d1c]">
                <li>· Unions could <b>legally exist</b> — statutory unions, a historic first</li>
                <li>· Negotiation over <b>wages and working hours</b> remained lawful</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border p-5" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: "#b3402c" }}>
                <X className="h-4 w-4" /> What was stripped away
              </p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-[#5a2a24]">
                <li>· No negotiation over <b>machinery use, hiring/firing, or apprentice numbers</b></li>
                <li>· No pressure on non-union workers to join strikes or unions</li>
                <li>· <b>Common law immunity removed</b> — prosecution risk returned</li>
                <li>· Pressuring others to support labour actions: <b>criminalised</b></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="05" title="The paradox — victory and defeat in one act" sub="Three consequences that shaped the next fifty years" />
        <Reveal>
          <Phase2Ledger />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card-warm lift p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: "#44621d" }}>The victory</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                The repeal of 500 years of restrictive legislation, and unions&rsquo; first legal
                recognition — a watershed no amount of 1825 fine print could erase.
              </p>
            </div>
            <div className="card-warm lift p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: "#b3402c" }}>The defeat</p>
              <p className="mt-1.5 text-[.82rem] leading-relaxed text-muted-warm">
                The 1825 Act nullified much of the practical benefit — unions existed legally but
                lacked meaningful bargaining power, pushing organising underground again.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 18"
              q="The 1824 repeal was a watershed. How many separate statutes did it sweep away — and which medieval law went with them?"
              options={[
                "2 statutes — just the Combination Acts of 1799–1800",
                "35 separate statutes over ~500 years, including the Laborer's Act of 1425 which had banned collective bargaining among masons",
                "500 statutes over 35 years",
                "12 statutes, none older than 1800",
              ]}
              answer={1}
              explain="The 1824 repeal removed not just the Combination Acts of 1799–1800 but 35 separate statutes passed over approximately 500 years — notably the Laborer's Act of 1425. It legalised unions, collective bargaining, and protection from conspiracy prosecution. The 1825 Act then clawed back most of the practical power — wages and hours only — opening 45–50 years of legal stagnation."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Repeal engineers: <b>Francis Place (evidence) + Joseph Hume (legislation)</b> — the wages-are-supply-and-demand argument carried it.</>,
              <>1824 legalised unions → <b>strike wave</b> (coal miners +80%) → 1825 Act legal-but-toothless: <b>wages and hours only</b>.</>,
              <>The paradox: <b>victory (500 years of bans repealed)</b> and <b>defeat (bargaining power stripped)</b> — stagnation until the 1870s.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L20 · PHASE THREE (1830s–1850s)  (#labor-phase3)
   with Machine — the Three-Phase strip
   ============================================================ */
const PHASES3 = [
  { id: "p1", label: "Phase One", years: "1760s–1820s", d: "Secret resistance: friendly societies, machine-breaking, Luddites — suppressed by the Combination & Framebreaking Acts." },
  { id: "p2", label: "Phase Two", years: "1824–1830", d: "Legalisation & grand alliances: the 1824 repeal, the strike wave, the 1825 half-freedom." },
  { id: "p3", label: "Phase Three", years: "1830s–1850s", d: "Political action & legislation: national unions, the Tolpuddle test, the Factory Acts, and the Chartists." },
];

function PhaseStrip() {
  const [open, setOpen] = useState(2);
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the labour movement in three phases
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {PHASES3.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(i)}
            aria-pressed={i === open}
            className="rounded-2xl border px-3 py-3 text-center transition-all duration-200"
            style={
              i === open
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            <p className="text-[.84rem] font-black">{p.label}</p>
            <p className="mt-0.5 font-mono text-[.64rem] opacity-80">{p.years}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={PHASES3[open].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="mt-4 rounded-2xl border p-4"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <p className="text-[.88rem] leading-relaxed text-[#2b2014]">
            <b style={{ color: EBH_G[800] }}>{PHASES3[open].label} ({PHASES3[open].years}): </b>
            {PHASES3[open].d}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhLaborPhase3Section() {
  return (
    <Section id="labor-phase3">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 20 — the phase that changed the law"
          title={
            <>
              Political action &amp; <span className="grad-gold">legislative wins</span> (1830s–1850s)
            </>
          }
          lead="Union power was still capped at wages and hours — so workers went national, went political, and went to Parliament. Some attempts failed spectacularly; some laws changed the world."
        />

        <EbhReadStep n="01" title="Where the movement stands" sub="Three phases, one arc" />
        <Reveal>
          <PhaseStrip />
        </Reveal>

        <EbhReadStep n="02" title="Two attempts at a national union" sub="Both failed — both proved the demand" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Users className="h-4 w-4" /> NAPL — 1830
              </p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· <b>National Association for the Protection of Labor</b> — founded July 1830 by Irish unionist <b>John Doherty</b></li>
                <li>· First attempt at a national trade-union centre; <b>10,000–20,000 members</b> within 6–12 months</li>
                <li>· Textile workers, mechanics, blacksmiths, potters, miners under one umbrella</li>
                <li>· Failed by 1832 — internal disagreements and high fees (£1 per society, one shilling a member); published the <b>United Trades Cooperative Journal</b> (later <i>Voice of the People</i>)</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="flex items-center gap-2 text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>
                <Landmark className="h-4 w-4" /> GNCTU — 1834
              </p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· <b>Grand National Consolidated Trades Union</b> — founded February 1834 by <b>Robert Owen</b>, textile manufacturer &amp; philanthropist</li>
                <li>· One mega-union for all British workers; core principle: <b>cooperation over competition</b></li>
                <li>· Failed within months — internal splits, and workers&rsquo; suspicion of a founder who owned factories</li>
                <li>· Still: it proved national-level organisation was <b>viable and wanted</b></li>
              </ul>
            </div>
          </Reveal>
        </div>

        <EbhReadStep n="03" title="The Tolpuddle Martyrs (1834)" sub="Lawful organising, punished anyway" />
        <Reveal>
          <EbhPanel label="The Tolpuddle ledger — six men of Dorset" tone="sepia">
{`1833     Six agricultural laborers form the Friendly
         Society of Agricultural Laborers
Wages    cut from 9 → 7 shillings/week;
         they demand 10 shillings
Law?     Formation + wage talks were LEGAL under
         the Combinations Act of 1825
Charge   Instead: the Unlawful Oaths Act of 1797
         (built for naval mutinies!) — members took
         initiation oaths
Verdict  Convicted → 7 years' transportation to
         Australia
1834–35  Massive public protests
1836     Pardoned; sentences rescinded`}
        </EbhPanel>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="insight" title="What Tolpuddle proved">
            The government <b>could not suppress lawful union activity using alternative
            legislation</b> — the public would not stand for it. The pardon raised national
            awareness of workers&rsquo; rights and government overreach. The movement had learned to
            fight in the courtroom of public opinion.
          </EbhCallout>
        </Reveal>

        <EbhReadStep n="04" title="The legislative wins" sub="Four laws that rebuilt the industrial world" />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: Gavel, y: "1833", t: "Factory Act", d: "First major workplace regulation. Children under 9 banned from textile mills; ages 9–15 capped at 8–12 hours/day — after parliamentary investigations recorded child workers describing 12–13-hour days. Government becomes responsible for worker protection." },
            { icon: Scale, y: "1847", t: "Ten Hours Act", d: "10-hour limit for women and children/teenagers — the fruit of a 15-year movement. Supported, paradoxically, by landowners retaliating against the 1846 Corn Laws repeal (factory owners had pushed the repeal to cut food prices and wage demands; landowners answered by capping factory profits)." },
            { icon: HeartPulse, y: "1848", t: "Public Health Act", d: "Answers the cholera epidemic of 1846–47 and widespread pollution: air and water quality regulated in industrial cities — protecting workers and entire urban populations." },
            { icon: Vote, y: "1838–48", t: "The Chartist Movement", d: "Political democracy for workers: votes for all men, secret ballots, no property requirements for MPs. Its specific demands failed in its lifetime — but it connected the economic movement to political action and set the precedent for workers organising around democratic rights." },
          ].map((c, i) => (
            <Reveal key={c.y} delay={i * 80}>
              <div className="card-warm lift h-full p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ background: EBH_BTN_GRAD }}>
                    <c.icon className="h-4 w-4" />
                  </span>
                  <p className="font-mono text-[.8rem] font-black" style={{ color: EBH_G[700] }}>{c.y}</p>
                </div>
                <p className="mt-2 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="05" title="The movement divides — and the ceiling holds" sub="New Model Unions and the 1871 horizon" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>New Model Unions (1850s)</p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· Skilled workers organise separately — engineers, machinists, carpenters, bricklayers, smiths, millwrights, pattern makers</li>
                <li>· <b>Amalgamated Society of Engineers</b> (c. 1850s); strategy: <b>negotiation over strikes</b></li>
                <li>· A move toward what would later be called &ldquo;white-collar&rdquo; — and a new <b>skilled/unskilled divide</b></li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5">
              <p className="text-[.92rem] font-extrabold" style={{ color: EBH_G[700] }}>What remained pending</p>
              <ul className="mt-2 space-y-1.5 text-[.84rem] leading-relaxed text-muted-warm">
                <li>· Unions still limited to <b>wages and working hours</b> — hiring/firing, machine usage, other workplace issues remained out of bounds</li>
                <li>· Full legal recognition came only in <b>1871</b>, with new legislation recognising unions as fully legal entities</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 20"
              q="Six agricultural labourers formed a legal Friendly Society in 1833 — and were transported to Australia for seven years anyway. Under which law were they prosecuted?"
              options={[
                "The Combinations Act of 1825",
                "The Unlawful Oaths Act of 1797 — originally designed to suppress naval mutinies",
                "The Framebreaking Act of 1812",
                "The Corn Law of 1815",
              ]}
              answer={1}
              explain="The Unlawful Oaths Act of 1797 — built for naval mutinies — was stretched to cover the initiation oaths taken by the Friendly Society of Agricultural Laborers. Wages had been cut from nine to seven shillings and the men demanded ten; the formation and the wage talks were legal under the Combinations Act of 1825. Public protest (1834–35) won their pardon in 1836 — proving government could not suppress lawful union activity through alternative legislation."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>National unions: <b>NAPL 1830 (Doherty)</b> and <b>GNCTU 1834 (Owen)</b> — both collapsed, both proved the demand for national organisation.</>,
              <>The <b>Tolpuddle Martyrs</b> tested the state — prosecuted under the 1797 Oaths Act, pardoned by 1836; public opinion became a weapon.</>,
              <>Legislative wins: <b>Factory Act 1833 · Ten Hours Act 1847 · Public Health Act 1848 · Chartists 1838–48</b> — and full union legality only in <b>1871</b>.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L21 · ECONOMIC SYSTEMS  (#econ-systems)
   with Machine — the system switcher
   ============================================================ */
const SYSTEMS = [
  {
    id: "capitalism",
    name: "Capitalism",
    tag: "Private ownership",
    color: EBH_G[700],
    soft: "#fdf6dc",
    owns: "Private individuals and businesses own the means of production — factories, tools, land, service institutions.",
    decides: "Supply and demand set prices and production; minimal government interference (laissez-faire).",
    why: [
      "Expensive industrial technology — steam machinery & boilers priced far beyond any artisan; only wealthy investors (capitalists) could finance industry",
      "Transport innovations — canals, Turnpike Trusts (1770s–1830s), railways (1830s–40s) — widened markets and demanded stock-market financing",
      "Free-market ideology — Adam Smith (1770s–1790s): unregulated markets maximise efficiency and wealth for society",
      "Legal innovations — the company as a legal entity separate from its owners (Companies Acts; 1956 & 2013 in India)",
    ],
    note: "The ownership precedent came early: the Agricultural Revolution's enclosures converted common lands into private property 100–150 years before industrialisation.",
  },
  {
    id: "socialism",
    name: "Socialism",
    tag: "Collective ownership, democratic road",
    color: "#44621d",
    soft: "#eef4dd",
    owns: "Government or community collectively owns and regulates the major means of production — factories, mines, railways.",
    decides: "Democratic pressure: labour protections, voting rights, redistribution of profits between owners and workers.",
    why: [
      "A response to capitalism's effects on workers — exploitation, inequality, insecurity",
      "Robert Owen's utopian socialism (1830s–40s): equal profit-sharing without class struggle",
      "Legislative achievements: Factory Act (1833), Ten Hours Act (1847), Chartist Movement (1838–1848)",
    ],
    note: "Often viewed as a transitional stage toward communism — though that theoretical progression has not been realised in practice.",
  },
  {
    id: "communism",
    name: "Communism",
    tag: "Stateless, classless society",
    color: "#b3402c",
    soft: "#fbeae5",
    owns: "Small communities own and control the means of production — private property (in the capitalist sense) eliminated.",
    decides: "Decentralised decision-making about what to produce and how much; no government apparatus (stateless).",
    why: [
      "Karl Marx & Friedrich Engels: capitalism inevitably creates two classes — bourgeoisie (owners) and proletariat (propertyless workers)",
      "Class struggle over exploitation — long hours, low wages, inhumane conditions — culminates in workers' revolution",
      "Developed 1850s–1890s as the theoretical answer to capitalist exploitation",
    ],
    note: "The labour movement's three phases directly fed socialism and communism's rise — workers' lived exploitation provided the impetus for alternative systems.",
  },
];

function SystemSwitcher() {
  const [idx, setIdx] = useState(0);
  const s = SYSTEMS[idx];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the system switcher · three answers to one question
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {SYSTEMS.map((sys, i) => (
          <button
            key={sys.id}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className="rounded-2xl border px-2 py-3 text-center transition-all duration-200"
            style={
              i === idx
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            <p className="text-[.84rem] font-black">{sys.name}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4 rounded-2xl border p-5"
          style={{ borderColor: EBH_G.border, background: EBH_G.wash }}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[1.05rem] font-black" style={{ color: s.color }}>{s.name}</p>
            <span className="rounded-full px-3 py-1 text-[.68rem] font-black" style={{ color: s.color, background: s.soft }}>
              {s.tag}
            </span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-[#e0cb84] bg-white p-3">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Who owns?</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#2b2014]">{s.owns}</p>
            </div>
            <div className="rounded-xl border border-[#e0cb84] bg-white p-3">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em] text-[#a08a5a]">Who decides?</p>
              <p className="mt-1 text-[.82rem] leading-relaxed text-[#2b2014]">{s.decides}</p>
            </div>
          </div>
          <p className="mt-3 text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: s.color }}>Why it rose</p>
          <ul className="mt-1 space-y-1.5">
            {s.why.map((w, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                className="flex gap-2 text-[.82rem] leading-relaxed text-[#2b2014]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.color }} />
                {w}
              </motion.li>
            ))}
          </ul>
          <p className="mt-3 rounded-xl border border-[#e0cb84] bg-white p-3 text-[.8rem] leading-relaxed text-muted-warm">{s.note}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function EbhEconSystemsSection() {
  return (
    <Section id="econ-systems">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 21 — three answers to ownership"
          title={
            <>
              Economic systems: <span className="grad-gold">Capitalism, Socialism, Communism</span>
            </>
          }
          lead="The Industrial Revolution didn't just change how things were made — it forced the question of who should own the making. Three systems answered, in sequence: capitalism first, then socialism and communism as responses to what capitalism did to labour."
        />

        <EbhReadStep n="01" title="Capitalism — and why it rose first" sub="Ownership, machines, transport, ideology, law" />
        <Reveal>
          <SystemSwitcher />
        </Reveal>

        <EbhReadStep n="02" title="The infrastructure that made capitalism inevitable" sub="Canals, turnpikes, railways — and the stock market they demanded" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
              {[
                { t: "Canals", d: "Cut transport costs; Manchester's coal arrived cheap", y: "1700s–" },
                { t: "Turnpike Trusts", d: "Parliament-chartered toll roads, better surfaces", y: "1770s–1830s" },
                { t: "Railways", d: "Steam replaces horse-drawn boats; global market reach", y: "1830s–1840s" },
              ].map((s, i, arr) => (
                <React.Fragment key={s.t}>
                  <div className="flex-1 rounded-2xl border p-3 text-center" style={{ borderColor: EBH_G[600], background: "linear-gradient(135deg,#fdf6dc,#faf0cd)" }}>
                    <p className="font-mono text-[.62rem] font-black" style={{ color: EBH_G[700] }}>{s.y}</p>
                    <p className="text-[.9rem] font-extrabold text-[#3e2c1d]">{s.t}</p>
                    <p className="mt-0.5 text-[.7rem] leading-snug text-muted-warm">{s.d}</p>
                  </div>
                  {i < arr.length - 1 ? <ArrowRight className="mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0" style={{ color: EBH_G[700] }} /> : null}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-3 rounded-xl border border-[#e0cb84] bg-white p-3 text-[.8rem] leading-relaxed text-muted-warm">
              Every link demanded <b>massive capital investment</b> — which is precisely why stock
              markets and modern financing mechanisms grew alongside them. Raw materials in (coal
              from Manchester, cotton from America and India), finished goods out, worldwide.
            </p>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="The timeline of three systems" sub="A century of emergence, 1760s–1890s" />
        <Reveal>
          <EbhPanel label="Systems × Industrial Revolution — the timeline">
{`1760s–1790s   Industrial Revolution begins; capitalism &
              free-market ideology emerge
1770s–1790s   Adam Smith writes — laissez-faire economics
1770s–1830s   Canal & road revolutions expand transport
1830s–1840s   Railway mania; the labour movement gains momentum
1830s–1850s   Socialism & utopian socialism answer capitalism
1850s–1890s   Communism develops as the theoretical response
              to capitalist exploitation`}
          </EbhPanel>
        </Reveal>

        <EbhReadStep n="04" title="No pure systems exist" sub="The modern economy is a mix" />
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Private ownership", d: "Capitalism's engine — most production, most innovation" },
              { t: "Public ownership of sectors", d: "Socialism's footprint — healthcare, education, utilities" },
              { t: "Community-based initiatives", d: "Communist elements — local resource management" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 80}>
                <div className="card-warm lift h-full p-5">
                  <p className="text-[.9rem] font-extrabold" style={{ color: EBH_G[700] }}>{c.t}</p>
                  <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <EbhCallout kind="why" title="Why the mixing matters for a history course">
            These systems emerged as <b>distinct ideologies during industrialisation</b> — but
            real-world economies require <b>combinations of their principles</b> to function:
            government regulation and safety nets, democratic participation alongside market
            mechanisms. That pragmatism is itself a historical outcome of the Industrial
            Revolution.
          </EbhCallout>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 21"
              q="Why did capitalism rise first, rather than socialism or communism?"
              options={[
                "Because kings ordered it",
                "Industrial technology was prohibitively expensive — only wealthy investors could finance it; transport revolutions demanded stock markets; Adam Smith's laissez-faire provided the ideology; and company law made ownership scalable",
                "Because workers voted for it in 1776",
                "Because the guilds supported it",
              ]}
              answer={1}
              explain="Four converging reasons: (1) expensive industrial technology created demand for capitalists — wealthy investors who could finance factories; (2) transport innovations (canals, Turnpike Trusts, railways) connected markets and required modern financing; (3) free-market ideology — Adam Smith's laissez-faire — supplied the justification; (4) legal innovations made companies legal entities able to own production collectively. The precedent of private ownership had been set a century earlier by the enclosures."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Capitalism = <b>private ownership</b>, born from expensive technology, transport revolutions, Smith's ideology and company law — with the enclosures as precedent.</>,
              <>Socialism = <b>collective ownership via democratic pressure</b> (Owen, Factory Acts, Chartists); Communism = <b>Marx &amp; Engels' stateless, classless society</b> after class struggle.</>,
              <>Timeline: <b>capitalism 1760s–90s → socialism 1830s–50s → communism 1850s–90s</b> — and no pure system survives in practice.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}

/* ============================================================
   CHAPTER — L22 · SYSTEMS COMPARED + SOCIAL IMPACT  (#systems-society)
   with Machine — the class pyramid
   ============================================================ */
const PROS_CONS = [
  {
    id: "capitalism",
    name: "Capitalism",
    def: "Private ownership of businesses, corporations and means of production; prices and production controlled by supply and demand.",
    pros: ["Drives innovation — individual incentives create products and services", "Economic freedom — consumer choice; anyone can start a business", "High growth potential — 7–8%+ GDP growth in developing economies"],
    cons: ["Wealth inequality — growth benefits are not distributed equally", "Market failure — assumes consumers have information & negotiating power they often lack (healthcare, education)", "Environmental degradation — air, water and industrial pollution"],
  },
  {
    id: "socialism",
    name: "Socialism",
    def: "Collective/public ownership with state control; government planning mixed with market mechanisms; social cohesion and equity.",
    pros: ["Guaranteed safety net — universal healthcare & education access", "Public interest focus — collective welfare over individual profit", "Economic stability & reduced inequality — minimum wages, essential services under control"],
    cons: ["Higher tax burden — government services need substantial taxes", "Inefficiency & slow action — bureaucracy slows decisions and growth (pre-1991 India: 2–3% growth)", "Loss of personal freedom — autonomy shifts to government/collectives"],
  },
  {
    id: "communism",
    name: "Communism",
    def: "Decentralised collective control at the local level; classless society; equal distribution of resources and income.",
    pros: ["Classless society — no class distinctions; equal income", "Full employment — employment for all citizens", "Local decision-making — villages and towns govern; good for environmental management"],
    cons: ["Severe shortages — limited resources mean scarcity of goods", "Loss of personal freedom — heavy restriction on autonomy and choice", "Practical challenges — very difficult to implement and maintain at scale"],
  },
];

function ProsConsBoard() {
  const [idx, setIdx] = useState(0);
  const s = PROS_CONS[idx];
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the pros & cons board · pick a system
      </p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {PROS_CONS.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setIdx(i)}
            aria-pressed={i === idx}
            className="rounded-2xl border px-2 py-2.5 text-[.82rem] font-black transition-all duration-200"
            style={
              i === idx
                ? { borderColor: "transparent", background: EBH_BTN_GRAD, color: "#fff", boxShadow: "0 10px 22px -10px rgba(161,98,7,.5)" }
                : { borderColor: "#e0cb84", background: "#fffdf6", color: "#8a6d4f" }
            }
          >
            {p.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.24 }}
          className="mt-4"
        >
          <p className="rounded-xl border border-[#e0cb84] bg-white p-3 text-[.82rem] leading-relaxed text-muted-warm">{s.def}</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border p-4" style={{ borderColor: "#b7d49a", background: "#eef4dd" }}>
              <p className="flex items-center gap-1.5 text-[.8rem] font-black uppercase tracking-[.12em]" style={{ color: "#44621d" }}>
                <Check className="h-4 w-4" /> Pros
              </p>
              <ul className="mt-2 space-y-1.5">
                {s.pros.map((p, i) => (
                  <li key={i} className="text-[.8rem] leading-relaxed text-[#2f3d1c]">· {p}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-4" style={{ borderColor: "#e8a896", background: "#fbeae5" }}>
              <p className="flex items-center gap-1.5 text-[.8rem] font-black uppercase tracking-[.12em]" style={{ color: "#b3402c" }}>
                <X className="h-4 w-4" /> Cons
              </p>
              <ul className="mt-2 space-y-1.5">
                {s.cons.map((p, i) => (
                  <li key={i} className="text-[.8rem] leading-relaxed text-[#5a2a24]">· {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 rounded-2xl border border-[#e0cb84] bg-[#fdfae9] p-4">
        <p className="text-[.62rem] font-black uppercase tracking-[.18em]" style={{ color: EBH_G[700] }}>Sector–system fit (Part 2 of the lecture)</p>
        <p className="mt-1.5 text-[.82rem] leading-relaxed text-[#2b2014]">
          <b>Capitalist systems</b> fit sectors where consumers hold power and information ·{" "}
          <b>socialist systems</b> fit essential services with information asymmetry (healthcare,
          education) · <b>communist systems</b> fit local resource management and environmental
          protection.
        </p>
      </div>
    </div>
  );
}

const CLASSES = [
  { t: "Bourgeoisie (industrial owners)", d: "Owners of factories, tools, land and services — they controlled the means of production.", w: "18%" },
  { t: "Middle class (the new class)", d: "Small factory owners & merchants · professionals (engineers, managers, carpenters) · skilled laborers · the educated with purchasing power and cultural preferences.", w: "44%" },
  { t: "Proletariat (working class)", d: "Factory workers earning minimal wages, working long hours under poor conditions.", w: "82%" },
];

function ClassPyramid() {
  return (
    <div className="card-warm p-5 sm:p-6">
      <p className="text-center font-mono text-[.68rem] font-bold uppercase tracking-[.2em]" style={{ color: EBH_G[700] }}>
        Machine — the class pyramid · three classes, one revolution
      </p>
      <div className="mt-4 space-y-2">
        {CLASSES.map((c, i) => (
          <motion.div
            key={c.t}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border p-4"
            style={{
              marginLeft: i === 0 ? "24%" : i === 1 ? "12%" : "0%",
              marginRight: i === 0 ? "24%" : i === 1 ? "12%" : "0%",
              borderColor: i === 1 ? EBH_G[600] : "#e0cb84",
              background: i === 1 ? "linear-gradient(135deg,#fdf6dc,#faf0cd)" : "#fffdf6",
            }}
          >
            <p className="text-[.92rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
            <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-3 rounded-xl border border-[#e0cb84] bg-[#fdfae9] p-3 text-[.8rem] leading-relaxed text-[#2b2014]">
        <b style={{ color: EBH_G[700] }}>Why the middle class mattered: </b>it demanded new cultural
        products and experiences — different leisure, theater choices and artistic interests from
        the working class — stimulating new literature, theater, fashion and the arts. Education
        and literacy let it engage with emerging cultural forms.
      </p>
    </div>
  );
}

export function EbhSystemsSocietySection() {
  return (
    <Section id="systems-society">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
        <SectionHead
          eyebrow="Module 3 · Lecture 22 — the human ledger"
          title={
            <>
              Systems compared &amp; the <span className="grad-gold">social-cultural impact</span>
            </>
          }
          lead="Module 3's finale: weigh each economic system honestly, match it to the right sectors — then watch what industrialisation did to cities, families, classes, science, women and time itself."
        />

        <EbhReadStep n="01" title="Part 1 — the honest scorecard" sub="Every system buys its strengths with real costs" />
        <Reveal>
          <ProsConsBoard />
        </Reveal>

        <EbhReadStep n="02" title="Part 3 — cities swelled beyond recognition" sub="Urbanisation, in two numbers" />
        <div className="grid gap-3 md:grid-cols-2">
          <Reveal>
            <div className="card-warm lift h-full p-5 text-center">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>Manchester</p>
              <p className="mt-2 font-mono text-[1.3rem] font-black" style={{ color: EBH_G[800] }}>20,000 → 300,000+</p>
              <p className="mt-1 text-[.78rem] text-muted-warm">1760s → 1850s — a <b>13–14 fold increase</b> in roughly 80 years</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-warm lift h-full p-5 text-center">
              <p className="text-[.62rem] font-black uppercase tracking-[.16em]" style={{ color: EBH_G[700] }}>London</p>
              <p className="mt-2 font-mono text-[1.3rem] font-black" style={{ color: EBH_G[800] }}>1.1M → 4.7M</p>
              <p className="mt-1 text-[.78rem] text-muted-warm">1801 → mid-19th century — overcrowding, poor sanitation, inadequate housing</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={80}>
          <div className="mt-4">
            <EbhCallout kind="warn" title="Work and family pulled apart">
              Industrial work became <b>divorced from household activities</b> — employment moved
              to factories, not homes. Two distinct life spheres emerged: <b>working life</b> and{" "}
              <b>family life</b>. Family arrangements shifted as members worked different shifts in
              different places — and <b>10–12-hour workdays</b> left minimal time for either.
            </EbhCallout>
          </div>
        </Reveal>

        <EbhReadStep n="03" title="Three new classes" sub="The pyramid the factories built" />
        <Reveal>
          <ClassPyramid />
        </Reveal>

        <EbhReadStep n="04" title="Science, awareness and the rise of the individual" sub="Reason takes the throne" />
        <div className="grid gap-3 md:grid-cols-3">
          {[
            { icon: Lightbulb, t: "Science applied", d: "Discoveries went straight to work: the spinning jenny, flying shuttle, steam engine. Knowledge from observation and experiment replaced tradition. Kant: \u201CHave courage to use your own understanding.\u201D Darwin's observations of species variation became the theory of evolution." },
            { icon: BookOpen, t: "Social awareness", d: "Poverty, overcrowded housing, sanitation, exploitative conditions, women and child labour — addressed through novels (Dickens' Hard Times: \u201CIt was a town of red brick, or of brick that would have been red if the smoke and ashes had allowed it\u201D), newspapers, and theater — feeding the Factory Acts (1833) and Ten Hours Act (1847)." },
            { icon: Users, t: "Individualism & women", d: "Self-reliance, personal ambition, individual freedom, the individual as consumer. Women moved into factory work — conditions worse than men's, but the shift led to 20th-century voting-rights and equality movements." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="card-warm lift h-full p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md" style={{ background: EBH_BTN_GRAD }}>
                  <c.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[.95rem] font-extrabold text-[#3e2c1d]">{c.t}</p>
                <p className="mt-1 text-[.8rem] leading-relaxed text-muted-warm">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <EbhReadStep n="05" title="Standardisation of time" sub="Railways forced the clocks to agree" />
        <Reveal>
          <div className="card-warm overflow-hidden p-4 sm:p-6">
            <svg viewBox="0 0 720 150" className="h-auto w-full" role="img" aria-label="Flowchart: railways require uniform timekeeping; city time zones become national and global standards; 'Time is Money' enters the culture">
              <defs>
                <marker id="t22-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#a16207" />
                </marker>
              </defs>
              {[
                { x: 20, t: "Railways span regions", d: "every city keeps its own time — chaos" },
                { x: 260, t: "Time standardised", d: "national, then global standards" },
                { x: 500, t: "\u201CTime is Money\u201D", d: "society re-values temporal resources" },
              ].map((b, i, arr) => (
                <g key={b.t}>
                  <motion.rect
                    x={b.x} y={40} width={190} height={70} rx={14}
                    fill={i === 2 ? "linear-gradient(135deg,#fdf6dc,#faf0cd)" : "#fffdf6"}
                    style={i === 2 ? { fill: "#fdf6dc" } : undefined}
                    stroke={i === 2 ? EBH_G[600] : "#e0cb84"} strokeWidth="2"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.25, duration: 0.5 }}
                  />
                  <text x={b.x + 95} y={70} textAnchor="middle" fontSize="13" fontWeight="800" fill="#3e2c1d">{b.t}</text>
                  <text x={b.x + 95} y={90} textAnchor="middle" fontSize="10.5" fill="#7c6248">{b.d}</text>
                  {i < arr.length - 1 ? (
                    <motion.line
                      x1={b.x + 192} y1={75} x2={b.x + 238} y2={75}
                      stroke="#a16207" strokeWidth="2.5" markerEnd="url(#t22-arrow)"
                      strokeDasharray="5 6" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.25, duration: 0.5 }}
                    />
                  ) : null}
                </g>
              ))}
            </svg>
            <p className="mt-2 text-center text-[.8rem] leading-relaxed text-muted-warm">
              Transportation technology — especially <b>railways</b> — required uniform timekeeping
              across regions. Different cities had kept different times; standardisation enabled
              efficient transport and communication networks — <b>the connective tissue of
              modernity</b>.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-6">
            <EbhQuiz
              source="Lecture 22"
              q="The lecture's sector–system fit: where do socialist principles belong?"
              options={[
                "Everywhere — socialism always outperforms",
                "Essential services like healthcare and education — where consumer power is limited and information asymmetry exists",
                "Luxury goods — where brands matter most",
                "Nowhere — markets handle everything",
              ]}
              answer={1}
              explain="Sector fit: capitalist/free-market systems suit sectors where consumers have significant power, information and negotiating ability. Socialist systems suit essential services (healthcare, education) where consumer power is limited and information asymmetry exists. Communist systems fit local-level resource management and environmental protection. Most modern economies mix all three."
            />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Takeaways
            items={[
              <>Every system pays: capitalism buys growth with <b>inequality and market failure</b>; socialism buys safety nets with <b>taxes and slow growth</b>; communism buys equality with <b>shortages</b>.</>,
              <>The social ledger: <b>Manchester ×15, London ×4</b>, work and family split apart, <b>three new classes</b>, and a middle class that demanded culture.</>,
              <>Science, social awareness, individualism — and <b>&ldquo;Time is Money&rdquo;</b>: the railways forced clocks, and clocks changed how society valued life itself.</>,
            ]}
          />
        </Reveal>
      </div>
    </Section>
  );
}
