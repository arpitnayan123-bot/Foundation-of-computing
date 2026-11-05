"use client";

/* ============================================================
   OPEN SIGNALS — the landing's live strip, powered by free,
   key-less public APIs, every one of them live-tested before
   it earned a card (status 200 + open CORS, from the same
   network the app ships on):

     · Wikipedia REST API        → concept of the day
     · Wikipedia On-This-Day API → the day in history
     · DummyJSON                 → a line to carry (quote)
     · Open-Meteo                → revision weather over Jodhpur
     · Frankfurter (ECB data)    → the rupee today
     · JokeAPI v2                → the study break
     · Advice Slip               → one nudge from the wire
     · WheretheISS.at            → the night shift overhead

   Each card wears a small name-tag crediting the API it runs
   on — free stuff, credited, as the public-apis catalogue
   intends. Every fetch is abortable and fails quiet: if the
   internet hiccups, the card shows an honest "resting" line
   and never breaks the page it sits on.
   ============================================================ */

import React, { useEffect, useState } from "react";
import {
  BookMarked,
  CloudSun,
  Coffee,
  History,
  IndianRupee,
  Lightbulb,
  Quote,
  Satellite,
  type LucideIcon,
} from "lucide-react";
import { Rise } from "./AtlasLanding";

/* --------------------------------------------------------------- */
/* tiny fetch-with-timeout — every signal rides the same harness    */
/* --------------------------------------------------------------- */

async function getJson<T>(url: string, ms = 8000): Promise<T | null> {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms);
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/* --------------------------------------------------------------- */
/* the card mould — tagline, icon, body, and the credit name-tag    */
/* --------------------------------------------------------------- */

function NameTag({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Powered by the ${label} — free public API`}
      className="mt-auto inline-flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/[.04] px-2 py-0.5 font-mono text-[.5rem] font-bold uppercase tracking-[.14em] text-[#8d7b63] transition-colors hover:border-[#f59e0b]/40 hover:text-[#f5c889]"
    >
      <span className="h-1 w-1 rounded-full bg-[#f59e0b]/70" aria-hidden />
      via {label}
    </a>
  );
}

const cardClass =
  "flex h-full flex-col gap-2.5 rounded-[1.25rem] border border-white/10 bg-black/70 p-5 transition-colors duration-500 hover:border-white/20";

const tagline =
  "text-[.56rem] font-black uppercase tracking-[.22em] text-[#8d7b63]";

const restClass =
  "text-[.78rem] leading-relaxed text-[#685c4c]";

function SignalCard({
  tag,
  icon: Icon,
  credit,
  children,
}: {
  tag: string;
  icon: LucideIcon;
  credit: { label: string; href: string };
  children: React.ReactNode;
}) {
  return (
    <div className={cardClass}>
      <div className="flex items-center justify-between">
        <span className={tagline}>{tag}</span>
        <Icon className="h-4 w-4 shrink-0 text-[#f59e0b]" aria-hidden />
      </div>
      {children}
      <NameTag label={credit.label} href={credit.href} />
    </div>
  );
}

/* --------------------------------------------------------------- */
/* signal 01 — concept of the day (Wikipedia REST API)              */
/* --------------------------------------------------------------- */

const CONCEPTS = [
  "Algorithm",
  "Double-entry bookkeeping system",
  "Supply and demand",
  "Compound interest",
  "Marketing mix",
  "Normal distribution",
  "Opportunity cost",
  "Flowchart",
  "Gross domestic product",
  "Consumer behaviour",
  "Balance sheet",
  "Game theory",
  "Operating system",
  "Demand curve",
  "Marginal utility",
  "Cash flow",
];

function ConceptCard() {
  const [signal, setSignal] = useState<{ title: string; extract: string } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    /* one concept a day — everyone on the shelf sees the same one */
    const day = Math.floor(Date.now() / 86_400_000);
    const title = CONCEPTS[day % CONCEPTS.length];
    let alive = true;
    void (async () => {
      const d = await getJson<{
        title: string;
        extract?: string;
      }>(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}?redirect=true`);
      if (!alive) return;
      if (d?.extract) setSignal({ title: d.title, extract: d.extract });
      else setDead(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="concept of the day" icon={BookMarked} credit={{ label: "Wikipedia API", href: "https://en.wikipedia.org/api/rest_v1/" }}>
      {signal ? (
        <>
          <p className="font-display text-[1rem] font-black leading-snug text-[#f7ecdd]">{signal.title}</p>
          <p className="line-clamp-3 text-[.78rem] leading-relaxed text-[#a89a86]">{signal.extract}</p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The archive is resting right now." : "Reaching the archive…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 02 — on this day in history (Wikipedia Feed API)          */
/* --------------------------------------------------------------- */

function OnThisDayCard() {
  const [signal, setSignal] = useState<{ year: string; text: string } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      /* "today" in IST — the shelf runs on campus time */
      const now = new Date();
      const ist = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60_000);
      const mm = String(ist.getMonth() + 1).padStart(2, "0");
      const dd = String(ist.getDate()).padStart(2, "0");
      const d = await getJson<{ events?: { text?: string; year?: number }[] }>(
        `https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${mm}/${dd}`,
      );
      if (!alive) return;
      const events = (d?.events ?? []).filter(
        (e): e is { text: string; year: number } =>
          typeof e.text === "string" && typeof e.year === "number",
      );
      if (!events.length) {
        setDead(true);
        return;
      }
      /* one event a day, stable for everyone — seeded by the date itself */
      const seed = Number(`${mm}${dd}`);
      const pick = events[seed % events.length];
      const year = pick.year < 0 ? `${Math.abs(pick.year)} BCE` : `${pick.year}`;
      setSignal({ year, text: pick.text });
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="on this day" icon={History} credit={{ label: "Wikipedia Feed API", href: "https://en.wikipedia.org/api/rest_v1" }}>
      {signal ? (
        <>
          <p className="font-display text-[1rem] font-black leading-snug text-[#f7ecdd]">{signal.year}</p>
          <p className="line-clamp-3 text-[.78rem] leading-relaxed text-[#a89a86]">{signal.text}</p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The almanac is resting right now." : "Opening the almanac…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 03 — a line to carry (DummyJSON quotes)                   */
/* --------------------------------------------------------------- */

/* the wire occasionally hands over raw-title-cased text —
   "Don'T" → "Don't", so the card reads typeset, not machine-fed */
function polishQuote(q: string): string {
  return q.replace(/([a-z])'([A-Z])/g, (_m, a, b) => `${a}'${b.toLowerCase()}`).trim();
}

/* a college desk deserves a considerate voice — if the wire hands
   over one of the few voices the shelf would rather not quote, it
   quietly draws again (once; the wire is wide enough) */
const AUTHOR_REROLL = /cosby|fritzl|weinstein|epstein/i;

function QuoteCard() {
  const [signal, setSignal] = useState<{ quote: string; author: string } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const pull = () =>
        getJson<{ quote?: string; author?: string }>("https://dummyjson.com/quotes/random");
      let d = await pull();
      if (d?.author && AUTHOR_REROLL.test(d.author)) d = await pull();
      if (!alive) return;
      if (d?.quote && d?.author)
        setSignal({ quote: polishQuote(d.quote), author: d.author });
      else setDead(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="a line to carry" icon={Quote} credit={{ label: "DummyJSON", href: "https://dummyjson.com/docs/quotes" }}>
      {signal ? (
        <>
          <p className="line-clamp-3 text-[.82rem] leading-relaxed text-[#e9d7bf]">
            &ldquo;{signal.quote}&rdquo;
          </p>
          <p className="text-[.64rem] font-bold uppercase tracking-[.14em] text-[#8d7b63]">
            — {signal.author}
          </p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The wire is quiet right now." : "Listening for a line…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 04 — revision weather over the campus (Open-Meteo)        */
/* --------------------------------------------------------------- */

function weatherLabel(code: number): string {
  if (code === 0) return "Clear skies";
  if (code === 1) return "Mainly clear";
  if (code === 2) return "Partly cloudy";
  if (code === 3) return "Overcast";
  if (code === 45 || code === 48) return "Fog";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Showers";
  if (code === 85 || code === 86) return "Snow showers";
  if (code >= 95) return "Thunderstorm";
  return "Somewhere in between";
}

function WeatherCard() {
  const [signal, setSignal] = useState<{ temp: number; code: number } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const d = await getJson<{ current?: { temperature_2m?: number; weather_code?: number } }>(
        "https://api.open-meteo.com/v1/forecast?latitude=26.2389&longitude=73.0243&current=temperature_2m,weather_code",
      );
      if (!alive) return;
      const cur = d?.current;
      if (typeof cur?.temperature_2m === "number" && typeof cur?.weather_code === "number") {
        setSignal({ temp: Math.round(cur.temperature_2m), code: cur.weather_code });
      } else {
        setDead(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="revision weather · jodhpur" icon={CloudSun} credit={{ label: "Open-Meteo", href: "https://open-meteo.com/" }}>
      {signal ? (
        <>
          <p className="font-display text-[1rem] font-black leading-snug text-[#f7ecdd]">
            {signal.temp}°C · {weatherLabel(signal.code)}
          </p>
          <p className="text-[.78rem] leading-relaxed text-[#a89a86]">
            {signal.code >= 61
              ? "Rain outside — a warm chair and one more chapter will do nicely."
              : "Good light for one more chapter before the day folds."}
          </p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The sky is offline right now." : "Reading the sky…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 05 — the rupee today (Frankfurter, ECB reference rates)   */
/* --------------------------------------------------------------- */

/* "2026-11-04" → "4 Nov 2026" — a desk reads dates, not ISO stamps */
function prettyDate(iso: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [, y, mm, dd] = m;
  return `${Number(dd)} ${months[Number(mm) - 1] ?? ""} ${y}`;
}

function RupeeCard() {
  const [signal, setSignal] = useState<{ rate: number; date: string } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const d = await getJson<{ rates?: { INR?: number }; date?: string }>(
        "https://api.frankfurter.dev/v1/latest?base=USD&symbols=INR",
      );
      if (!alive) return;
      if (typeof d?.rates?.INR === "number") {
        setSignal({ rate: d.rates.INR, date: d.date ?? "" });
      } else {
        setDead(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="the rupee today" icon={IndianRupee} credit={{ label: "Frankfurter · ECB", href: "https://frankfurter.dev" }}>
      {signal ? (
        <>
          <p className="font-display text-[1rem] font-black leading-snug text-[#f7ecdd]">
            ₹{signal.rate.toFixed(2)} to a dollar
          </p>
          <p className="text-[.78rem] leading-relaxed text-[#a89a86]">
            The ECB&apos;s reference rate{signal.date ? `, ${prettyDate(signal.date)}` : ""} — handy when
            the accounting caselets go international.
          </p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The exchange desk is closed right now." : "Calling the exchange desk…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 06 — the study break (JokeAPI v2, programming, safe-mode) */
/* --------------------------------------------------------------- */

function StudyBreakCard() {
  const [signal, setSignal] = useState<string | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const d = await getJson<{ error?: boolean; joke?: string }>(
        "https://v2.jokeapi.dev/joke/Programming?safe-mode&type=single",
      );
      if (!alive) return;
      if (d && !d.error && d.joke) setSignal(d.joke);
      else setDead(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="the study break" icon={Coffee} credit={{ label: "JokeAPI v2", href: "https://jokeapi.dev" }}>
      {signal ? (
        <p className="line-clamp-3 text-[.82rem] leading-relaxed text-[#e9d7bf]">{signal}</p>
      ) : (
        <p className={restClass}>{dead ? "The comedian is between sets." : "Warming up the comedian…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 07 — one nudge from the wire (Advice Slip API)            */
/* --------------------------------------------------------------- */

function NudgeCard() {
  const [signal, setSignal] = useState<string | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      /* cache-buster — the slip hands out fresh advice per request */
      const d = await getJson<{ slip?: { advice?: string } }>(
        `https://api.adviceslip.com/advice?t=${Math.floor(Date.now() / 60_000)}`,
      );
      if (!alive) return;
      if (d?.slip?.advice) setSignal(d.slip.advice);
      else setDead(true);
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="one nudge" icon={Lightbulb} credit={{ label: "Advice Slip", href: "https://api.adviceslip.com" }}>
      {signal ? (
        <p className="line-clamp-3 text-[.82rem] leading-relaxed text-[#e9d7bf]">
          <span className="text-[#f5c889]">·</span> {signal}
        </p>
      ) : (
        <p className={restClass}>{dead ? "The mentor is mid-thought." : "Consulting the mentor…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* signal 08 — the night shift overhead (WheretheISS.at)            */
/* --------------------------------------------------------------- */

function NightShiftCard() {
  const [signal, setSignal] = useState<{ alt: number; vel: number; vis: string } | null>(null);
  const [dead, setDead] = useState(false);

  useEffect(() => {
    let alive = true;
    void (async () => {
      const d = await getJson<{ altitude?: number; velocity?: number; visibility?: string }>(
        "https://api.wheretheiss.at/v1/satellites/25544",
      );
      if (!alive) return;
      if (typeof d?.altitude === "number" && typeof d?.velocity === "number") {
        setSignal({
          alt: Math.round(d.altitude),
          vel: Math.round(d.velocity),
          vis: d.visibility === "daylight" ? "in daylight" : "in night-side shadow",
        });
      } else {
        setDead(true);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  return (
    <SignalCard tag="the night shift overhead" icon={Satellite} credit={{ label: "WheretheISS.at", href: "https://wheretheiss.at/w/1" }}>
      {signal ? (
        <>
          <p className="font-display text-[1rem] font-black leading-snug text-[#f7ecdd]">
            ISS · {signal.alt} km up, {signal.vel.toLocaleString("en-IN")} km/h
          </p>
          <p className="text-[.78rem] leading-relaxed text-[#a89a86]">
            Right now it is {signal.vis} — somebody&apos;s doing the night shift at 400 km while
            you hold the desk down.
          </p>
        </>
      ) : (
        <p className={restClass}>{dead ? "The station is behind the horizon." : "Pinging the station…"}</p>
      )}
    </SignalCard>
  );
}

/* --------------------------------------------------------------- */
/* the strip                                                        */
/* --------------------------------------------------------------- */

const SIGNALS = [
  <ConceptCard key="concept" />,
  <OnThisDayCard key="onthisday" />,
  <QuoteCard key="quote" />,
  <WeatherCard key="weather" />,
  <RupeeCard key="rupee" />,
  <StudyBreakCard key="break" />,
  <NudgeCard key="nudge" />,
  <NightShiftCard key="iss" />,
];

export function OpenSignals() {
  return (
    <section
      aria-label="Open signals — live public-API strip"
      className="relative mx-auto w-full max-w-6xl px-4 pb-6 pt-4 sm:px-6"
    >
      <Rise className="mb-8">
        <span className="flex items-center gap-2 text-[.7rem] font-extrabold uppercase tracking-[.24em] text-[#f5c889]">
          <span className="h-px w-8 bg-gradient-to-r from-[#ea580c] to-transparent" />
          open signals
        </span>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-black leading-tight text-[#f7ecdd] md:text-3xl">
          The shelf meets the <span className="atlas-sheen">open web.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-[.92rem] leading-relaxed text-[#a89a86]">
          Eight free, open public APIs doing quiet work under the shelf — a concept, a
          line, a sky, a rupee, a laugh and a nudge, refreshed live. Every card credits
          the wire it rides.
        </p>
      </Rise>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {SIGNALS.map((card, i) => (
          <Rise key={i} delay={0.05 * i} className="h-full">
            {card}
          </Rise>
        ))}
      </div>
    </section>
  );
}
