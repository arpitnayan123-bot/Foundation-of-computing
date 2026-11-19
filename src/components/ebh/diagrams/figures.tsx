"use client";

/* ============================================================
   EBH figures — the inline SVG family of shelf 04.

   Four figures migrate INTACT from the deployed shelf (same
   geometry, same colours, same marker ids): the signature
   circular flow, the open-field/enclosure pair, and the time-
   standardisation flowchart. Everything else is new work under
   the colour law: gold draws, oxblood marks the legal line,
   grey marks the superseded branch, red never appears.

   Time runs left to right in every chronological figure.
   Marker ids are unique across the whole shelf.
   ============================================================ */

import React from "react";
import { motion } from "framer-motion";
import { GOLD, GOLD_LITE, OX, GREY, INK, PAPER, EDGE } from "./kit";

/* ============================================================
   MIGRATED — the signature circular flow (deployed as the
   economics chapter's one diagram; marker `ebh-arrow`, dashed
   gold arcs, strokeDasharray "6 7", revealed on scroll).
   ============================================================ */
export function EbhCircularFlow() {
  return (
    <div className="card-warm overflow-hidden p-4 sm:p-6">
      <svg viewBox="0 0 760 340" className="h-auto w-full" role="img" aria-label="Circular flow: businesses produce and sell products to households; households provide labour, capital, land and entrepreneurship back to businesses">
        <defs>
          <marker id="ebh-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#a16207" />
          </marker>
        </defs>
        {/* businesses node */}
        <rect x="30" y="120" width="200" height="110" rx="18" fill="#fffdf6" stroke="#e0cb84" strokeWidth="2" />
        <text x="130" y="162" textAnchor="middle" fontSize="17" fontWeight="800" fill="#3e2c1d">Businesses</text>
        <text x="130" y="188" textAnchor="middle" fontSize="11.5" fill="#7c6248">· produce and sell products</text>
        <text x="130" y="206" textAnchor="middle" fontSize="11.5" fill="#7c6248">· hire inputs from households</text>
        {/* households node */}
        <rect x="530" y="120" width="200" height="110" rx="18" fill="#fffdf6" stroke="#e0cb84" strokeWidth="2" />
        <text x="630" y="162" textAnchor="middle" fontSize="17" fontWeight="800" fill="#3e2c1d">Households</text>
        <text x="630" y="188" textAnchor="middle" fontSize="11.5" fill="#7c6248">· buy products from firms</text>
        <text x="630" y="206" textAnchor="middle" fontSize="11.5" fill="#7c6248">· provide inputs to firms</text>
        {/* top arc — outputs */}
        <motion.path
          d="M 230 130 C 330 40, 430 40, 530 130"
          fill="none" stroke="#a16207" strokeWidth="2.5" markerEnd="url(#ebh-arrow)"
          strokeDasharray="6 7" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
        />
        <text x="380" y="42" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#854d0e">OUTPUTS — goods and services (products)</text>
        {/* bottom arc — inputs */}
        <motion.path
          d="M 530 220 C 430 316, 330 316, 230 220"
          fill="none" stroke="#7c6248" strokeWidth="2.5" markerEnd="url(#ebh-arrow)"
          strokeDasharray="6 7" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut", delay: 0.8 }}
        />
        <text x="380" y="316" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#7c6248">INPUTS — labour · capital · land · entrepreneurship</text>
      </svg>
    </div>
  );
}

/* ============================================================
   MIGRATED — the enclosure pair (open-field commons vs enclosed
   private farms), deployed inside the agrarian-to-industry arc.
   ============================================================ */
export function EbhOpenField() {
  return (
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
  );
}

export function EbhEnclosed() {
  return (
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
  );
}

/* ============================================================
   MIGRATED — the time-standardisation flowchart (marker
   `t22-arrow`): railways force the clocks to agree.
   ============================================================ */
export function EbhTimeStandardization() {
  return (
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
            fill={i === 2 ? "#fdf6dc" : PAPER}
            stroke={i === 2 ? "#ca8a04" : EDGE} strokeWidth="2"
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
  );
}

/* ============================================================
   NEW — the three lenses (L01): economics, business, history
   as three overlapping lenses on one past.
   ============================================================ */
export function EbhThreeLenses() {
  return (
    <svg viewBox="0 0 640 240" className="h-auto w-full" role="img" aria-label="Three lenses on one past: economics studies rules and logic, business studies the players, history supplies change over time and evidence">
      <defs>
        <marker id="lens-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={OX} />
        </marker>
      </defs>
      {[
        { x: 150, t: "ECONOMICS", d: "rules & logic of economies", c: GOLD },
        { x: 320, t: "HISTORY", d: "context · time · change · evidence", c: INK },
        { x: 490, t: "BUSINESS", d: "the players inside economies", c: OX },
      ].map((b, i) => (
        <motion.g
          key={b.t}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.22, duration: 0.5 }}
        >
          <rect x={b.x - 118} y={30} width={236} height={86} rx={16} fill={PAPER} stroke={b.c} strokeWidth="2.5" />
          <text x={b.x} y={68} textAnchor="middle" fontSize="15" fontWeight="800" fill={b.c}>{b.t}</text>
          <text x={b.x} y={92} textAnchor="middle" fontSize="11" fill="#7c6248">{b.d}</text>
        </motion.g>
      ))}
      <motion.line x1="320" y1="120" x2="320" y2="152" stroke={INK} strokeWidth="2.2" markerEnd="url(#lens-arrow)" strokeDasharray="5 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 }} />
      <motion.rect x="170" y="158" width="300" height="52" rx="14" fill="#fdf6dc" stroke={GOLD} strokeWidth="2"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, duration: 0.5 }} />
      <text x="320" y="180" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#854d0e">ECONOMIC &amp; BUSINESS HISTORY</text>
      <text x="320" y="198" textAnchor="middle" fontSize="10.5" fill="#7c6248">how the rules and the players changed, argued from evidence</text>
    </svg>
  );
}

/* ============================================================
   NEW — the module ribbon (L04 / L34): the five modules as the
   deck itself lays them out, left to right. Time runs forward.
   ============================================================ */
export function EbhModuleRibbon() {
  const mods = [
    { n: "M1", t: "The Lens", span: "L01–L07", c: GOLD },
    { n: "M2", t: "Early Systems", span: "L08–L12", c: GOLD_LITE },
    { n: "M3", t: "The Machine Age", span: "L13–L22", c: OX },
    { n: "M4", t: "The Corporation", span: "L23–L27", c: GOLD },
    { n: "M5", t: "Indian Business", span: "L28–L34", c: OX },
  ];
  return (
    <svg viewBox="0 0 760 130" className="h-auto w-full" role="img" aria-label="The five modules left to right: The Lens L01 to L07, Early Systems L08 to L12, The Machine Age L13 to L22 (the widest), The Corporation L23 to L27, Indian Business L28 to L34">
      {mods.map((m, i) => (
        <motion.g key={m.n} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.14, duration: 0.45 }}>
          <rect x={16 + i * 146} y={28} width={132} height={64} rx={12} fill={i % 2 ? "#fbf3df" : PAPER} stroke={m.c} strokeWidth="2.2" />
          <text x={82 + i * 146} y={54} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={m.c}>{m.n} · {m.t}</text>
          <text x={82 + i * 146} y={76} textAnchor="middle" fontSize="10.5" fill="#7c6248">{m.span}</text>
          {i < 4 ? (
            <line x1={148 + i * 146} y1={60} x2={162 + i * 146} y2={60} stroke={GOLD} strokeWidth="2" markerEnd="url(#ribbon-arrow)" />
          ) : null}
        </motion.g>
      ))}
      <defs>
        <marker id="ribbon-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={GOLD} />
        </marker>
      </defs>
      <text x="380" y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="#854d0e">the course's own five modules — L22 concludes Module 3 · L28 opens Module 5 · L34 reviews all five</text>
    </svg>
  );
}

/* ============================================================
   NEW — the guild ladder (L11): apprentice → journeyman →
   master, each rung with its gate.
   ============================================================ */
export function EbhGuildLadder() {
  const rungs = [
    { t: "APPRENTICE", d: "trainee — learns the craft inside a master's workshop", c: INK },
    { t: "JOURNEYMAN", d: "skilled worker with income — works for wages", c: GOLD },
    { t: "MASTER", d: "workshop owner — enters by the masterpiece", c: OX },
  ];
  return (
    <svg viewBox="0 0 640 220" className="h-auto w-full" role="img" aria-label="Guild ladder: apprentice trains, journeyman earns wages, master owns the workshop — each rung gated by the guild's rules">
      <defs>
        <marker id="guild-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={GOLD} />
        </marker>
      </defs>
      {rungs.map((r, i) => (
        <motion.g key={r.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.45 }}>
          <rect x={140} y={24 + i * 62} width={360} height={50} rx={12} fill={PAPER} stroke={r.c} strokeWidth="2.2" />
          <text x={170} y={46 + i * 62} fontSize="12.5" fontWeight="800" fill={r.c}>{r.t}</text>
          <text x={170} y={64 + i * 62} fontSize="10.5" fill="#7c6248">{r.d}</text>
          {i < 2 ? (
            <line x1={510} y1={74 + i * 62} x2={510} y2={46 + (i + 1) * 62} stroke={GOLD} strokeWidth="2.4" markerEnd="url(#guild-arrow)" strokeDasharray="5 5" />
          ) : null}
        </motion.g>
      ))}
      <text x="500" y={22} textAnchor="middle" fontSize="10" fontWeight="700" fill={GOLD}>advancement ↑</text>
      <text x="320" y={210} textAnchor="middle" fontSize="10.5" fill="#7c6248">charters from city authorities · prices, quality, entry, courts, welfare — all regulated at city level</text>
    </svg>
  );
}

/* ============================================================
   NEW — the charter erosion (L28): 1600's full monopoly wears
   away through 1813. Gold = the company's surviving privileges;
   oxblood = the state's legal cuts; grey = what is gone.
   ============================================================ */
export function EbhCharterErosion() {
  const steps = [
    { y: "1600", t: "Charter of 1600", d: "Queen Elizabeth I grants the trade monopoly", s: "surviving" as const },
    { y: "1661", t: "Charter of 1661", d: "Charles II adds political and military powers", s: "surviving" as const },
    { y: "1726–53", t: "Judicial powers limited", d: "courts reined in under Crown oversight", s: "legal" as const },
    { y: "1773–84", t: "Political powers transferred", d: "Regulating & Pitt's India Acts move control to the state", s: "legal" as const },
    { y: "1813", t: "Trade monopoly ends", d: "India trade opened to British merchants", s: "superseded" as const },
  ];
  const col = { surviving: GOLD, legal: OX, superseded: GREY } as const;
  return (
    <svg viewBox="0 0 760 210" className="h-auto w-full" role="img" aria-label="Charter erosion 1600 to 1813: two charters grant power, three legal phases take it away, ending with the trade monopoly's abolition in 1813">
      <defs>
        <marker id="charter-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={GOLD} />
        </marker>
      </defs>
      <line x1="40" y1="105" x2="720" y2="105" stroke={EDGE} strokeWidth="2.5" />
      {steps.map((s, i) => (
        <motion.g key={s.y} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.16, duration: 0.45 }}>
          <circle cx={70 + i * 158} cy={105} r={9} fill={col[s.s]} />
          <rect x={18 + i * 158} y={i % 2 ? 118 : 22} width={144} height={58} rx={10} fill={PAPER} stroke={col[s.s]} strokeWidth="2" />
          <text x={90 + i * 158} y={i % 2 ? 138 : 42} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={col[s.s]}>{s.t}</text>
          <text x={90 + i * 158} y={i % 2 ? 154 : 58} textAnchor="middle" fontSize="9.5" fill="#7c6248">{s.d.length > 44 ? s.d.slice(0, 44) + "…" : s.d}</text>
          <text x={70 + i * 158} y={i % 2 ? 200 : 14} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#854d0e">{s.y}</text>
          {i < steps.length - 1 ? (
            <line x1={82 + i * 158} y1={105} x2={218 + i * 158} y2={105} stroke={GOLD} strokeWidth="2" markerEnd="url(#charter-arrow)" strokeDasharray="5 5" />
          ) : null}
        </motion.g>
      ))}
    </svg>
  );
}

/* ============================================================
   NEW — the opium triangle (L30/L31): Britain–India–China, the
   trade that paid for tea. Gold = the surviving trade flows.
   ============================================================ */
export function EbhOpiumTriangle() {
  return (
    <svg viewBox="0 0 640 260" className="h-auto w-full" role="img" aria-label="The opium triangle: Indian opium flows to China, Chinese tea flows to Britain, British manufactures and silver flow back to India">
      <defs>
        <marker id="opium-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={GOLD} />
        </marker>
        <marker id="opium-arrow-ox" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={OX} />
        </marker>
      </defs>
      {[
        { x: 320, y: 42, t: "BRITAIN", d: "tea imports · textile exports", c: OX },
        { x: 90, y: 190, t: "INDIA", d: "opium · raw cotton · indigo", c: GOLD },
        { x: 550, y: 190, t: "CHINA", d: "tea · silver · the captive market", c: INK },
      ].map((b, i) => (
        <motion.g key={b.t} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.5 }}>
          <rect x={b.x - 108} y={b.y - 34} width={216} height={68} rx={16} fill={PAPER} stroke={b.c} strokeWidth="2.5" />
          <text x={b.x} y={b.y - 8} textAnchor="middle" fontSize="14" fontWeight="800" fill={b.c}>{b.t}</text>
          <text x={b.x} y={b.y + 14} textAnchor="middle" fontSize="10.5" fill="#7c6248">{b.d}</text>
        </motion.g>
      ))}
      <motion.path d="M 210 168 C 320 120, 420 120, 500 168" fill="none" stroke={GOLD} strokeWidth="2.6" markerEnd="url(#opium-arrow)" strokeDasharray="7 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} />
      <text x="356" y="118" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={GOLD}>opium west→east (Patna &amp; Malwa)</text>
      <motion.path d="M 520 178 C 580 120, 560 70, 440 52" fill="none" stroke={OX} strokeWidth="2.4" markerEnd="url(#opium-arrow-ox)" strokeDasharray="6 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.9 }} />
      <text x="590" y="100" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={OX}>tea to Britain</text>
      <motion.path d="M 118 178 C 60 110, 120 62, 208 50" fill="none" stroke={GOLD} strokeWidth="2.4" markerEnd="url(#opium-arrow)" strokeDasharray="6 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 1.2 }} />
      <text x="62" y="104" textAnchor="middle" fontSize="10.5" fontWeight="700" fill={GOLD}>silver &amp; cotton cloth</text>
    </svg>
  );
}

/* ============================================================
   NEW — the Swadeshi wheel (L32): partition → boycott →
   indigenous demand → Indian industry, 1905 onward.
   ============================================================ */
export function EbhSwadeshiWheel() {
  const steps = [
    { t: "Partition of Bengal", d: "1905 — the movement's trigger" },
    { t: "Boycott of British goods", d: "political protest becomes economic" },
    { t: "Swadeshi demand", d: "indigenous goods carry the movement" },
    { t: "Indian industry grows", d: "entrepreneurs fund and supply it" },
    { t: "Symbiosis locked in", d: "business supports Swadeshi; Swadeshi supports business" },
  ];
  return (
    <svg viewBox="0 0 640 300" className="h-auto w-full" role="img" aria-label="The Swadeshi cycle: Bengal's 1905 partition triggers boycott, boycott creates swadeshi demand, demand grows Indian industry, and industry and movement lock into symbiosis">
      <defs>
        <marker id="swadeshi-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={GOLD} />
        </marker>
      </defs>
      {steps.map((s, i) => {
        const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const x = 320 + 190 * Math.cos(a);
        const y = 150 + 112 * Math.sin(a);
        return (
          <motion.g key={s.t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.18, duration: 0.45 }}>
            <rect x={x - 118} y={y - 26} width={236} height={52} rx={12} fill={PAPER} stroke={i === steps.length - 1 ? OX : GOLD} strokeWidth="2.2" />
            <text x={x} y={y - 5} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={i === steps.length - 1 ? OX : "#854d0e"}>{s.t}</text>
            <text x={x} y={y + 13} textAnchor="middle" fontSize="9.5" fill="#7c6248">{s.d}</text>
            <path
              d={`M ${x + 128 * Math.cos(a + 0.45)} ${y + 34 * Math.sin(a + 0.45)}`}
              fill="none"
            />
          </motion.g>
        );
      })}
      {[0, 1, 2, 3, 4].map((i) => {
        const a1 = (i / steps.length) * Math.PI * 2 - Math.PI / 2 + 0.42;
        const a2 = ((i + 1) / steps.length) * Math.PI * 2 - Math.PI / 2 - 0.42;
        const x1 = 320 + 190 * Math.cos(a1), y1 = 150 + 112 * Math.sin(a1);
        const x2 = 320 + 190 * Math.cos(a2), y2 = 150 + 112 * Math.sin(a2);
        return (
          <motion.path
            key={i}
            d={`M ${x1} ${y1} Q 320 ${150 + (y1 + y2) / 2 - 150 + 150 * 0.55} ${x2} ${y2}`}
            fill="none" stroke={GOLD} strokeWidth="2" markerEnd="url(#swadeshi-arrow)" strokeDasharray="6 6"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
          />
        );
      })}
    </svg>
  );
}

/* ============================================================
   NEW — the systems spectrum (L21/L22): who owns the means of
   production, from Smith's markets to Marx's classless society.
   ============================================================ */
export function EbhSystemsSpectrum() {
  return (
    <svg viewBox="0 0 760 170" className="h-auto w-full" role="img" aria-label="Ownership spectrum: capitalism at the private extreme, communism at the collective extreme, socialism between, with the industrial revolution as their common birth">
      {[
        { x: 120, t: "CAPITALISM", d: "private ownership · markets · Adam Smith", c: GOLD },
        { x: 380, t: "SOCIALISM", d: "mixed ownership · state-led welfare", c: INK },
        { x: 640, t: "COMMUNISM", d: "collective ownership · Marx &amp; Engels", c: OX },
      ].map((b, i) => (
        <motion.g key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.22, duration: 0.5 }}>
          <rect x={b.x - 118} y={54} width={236} height={64} rx={14} fill={PAPER} stroke={b.c} strokeWidth="2.4" />
          <text x={b.x} y={82} textAnchor="middle" fontSize="13.5" fontWeight="800" fill={b.c} dangerouslySetInnerHTML={{ __html: b.t }} />
          <text x={b.x} y={102} textAnchor="middle" fontSize="10.5" fill="#7c6248" dangerouslySetInnerHTML={{ __html: b.d }} />
        </motion.g>
      ))}
      <line x1="30" y1="140" x2="730" y2="140" stroke={EDGE} strokeWidth="2.5" />
      <text x="30" y="158" fontSize="10" fontWeight="700" fill={GOLD}>private</text>
      <text x="730" y="158" textAnchor="end" fontSize="10" fontWeight="700" fill={OX}>collective</text>
      <text x="380" y="158" textAnchor="middle" fontSize="10" fill="#7c6248">one question — who should own the means of production?</text>
    </svg>
  );
}
