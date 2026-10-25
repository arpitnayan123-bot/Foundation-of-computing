# MKTG — "Principles of Marketing" reader (shelf 06) — BUILD SPEC

You are building one part of the **sixth subject** of THE ATLAS: *Principles of Marketing*,
a lecture reader exactly like `src/components/atb/` (shelf 02). Read this spec fully before
writing any code. Content fidelity to the lecture notes is non-negotiable.

## Source material (READ FIRST)
- `/home/z/my-project/upload/marketing-lectures.txt` — the full extracted lecture notes,
  Lectures 1–28, separated by lines `Lecture N starts`. **Every fact, example, brand story,
  number and rupee figure you ship must come from this file.** Never invent examples.
- Your assignment covers a specific lecture range (see your task prompt).

## Reference implementations (PATTERN SOURCE)
- `src/components/atb/AtbParts4.tsx` — smallest complete parts file: study its structure first.
- `src/components/atb/AtbParts5.tsx` — richer machines (trees/graphs).
- `src/components/notes/ui.tsx` — the shared UI kit you must use.
- `src/components/mktg/lectures.ts` — the chapter table (chapter ids are FIXED; do not edit it).

## Your deliverable
ONE file: `src/components/mktg/MktgParts{N}.tsx` (see task prompt for N) exporting the exact
named section components listed in your task prompt. Nothing else. Do not edit any shared file,
do not touch other subjects, do not create extra files.

## File skeleton (mandatory)

```tsx
"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ... } from "lucide-react"; // only icons you actually use
import {
  Callout, KV, ReadStep, Reveal, Section, SectionHead, StepsFlow, Takeaways,
} from "@/components/notes/ui";

/* ============================================================
   MKTG · Principles of Marketing — Parts {N}
   Lectures {range} — shelf 06 of THE ATLAS.
   ============================================================ */

...machines + sections...
```

## UI kit API (from notes/ui.tsx — use these, don't rebuild)

- `<Section id="chapterId">…</Section>` — outer shell (id MUST equal the chapter id in lectures.ts).
- `<SectionHead eyebrow="…" title={<>…</>} lead="…"/>` — the chapter's hero head. **eyebrow is
  always `Principles of Marketing · Lecture N`** (the user demands the lecture number in every hero).
- `<Reveal delay={n}>` — scroll-in fade. `<ReadStep n="1" title sub/>` — numbered story beats.
- `<Callout kind="insight|why|warn|story" title>…</Callout>` — highlighted boxes.
- `<KV k="…" v="…"/>` — definition rows. `<Takeaways items={[…]} />` — closing bullets (ReactNode[]).
- `<StepsFlow steps={[{t, d}]} />` — horizontal step flow.
- Custom inline-styled cards are fine: `className="card-warm lift p-5"` etc.

## Design system — shelf 06 "Boutique Teal & Champagne"

The canvas is warm ivory (`.mktg-canvas`), cards `card-warm`. Palette (inline styles /
arbitrary Tailwind values ONLY these hues — NEVER indigo/blue/purple):

| token          | value      | use                              |
|----------------|-----------|----------------------------------|
| teal deep      | `#0f766e` | primary accent, headings' spans  |
| teal bright    | `#14b8a6` | gradient ends, active states     |
| teal ink       | `#1f2b2b` | main text                        |
| teal muted     | `#5f7472` | secondary text                   |
| champagne      | `#a97d2c` | gold accent, eyebrows            |
| champagne lite | `#e3c26b` | gradient ends, highlights        |
| lagoon dark    | `#0c2124` → `#143236` | dark panels gradient |
| cream panel    | `#f2efe7` / border `#e3ddcf` | light panels |
| rosewood       | `#9f3d54` | failure/warn accents (sparing)   |

- Gradients: `linear-gradient(135deg,#14b8a6,#0f766e)` (primary), `linear-gradient(135deg,#e3c26b,#a97d2c)` (gold).
- Dark panels: `background:"linear-gradient(165deg,#0c2124 0%,#12302f 60%,#143236 100%)"`,
  light text `#e9f2ee`, muted `#9fbcb4`, gold-on-dark `#e3c26b`.
- SectionHead eyebrows: `<span>` inside SectionHead uses `.eyebrow` class (warm) — fine as-is.
- `grad-text` class is ATB-orange — do NOT use it; use inline `backgroundClip:"text"` teal-gold
  gradient spans instead.

## Interactive machines — the soul of the shelf (AT LEAST ONE per chapter, ideally two)

Every chapter ships 1–2 bespoke animated machines built from framer-motion + inline SVG/DOM.
Mirror the quality of ATB's machines (memory-box machines, hash table you can poke, Venns).
Recurring quality bars:

1. **SVG diagrams**: `motion.path`/`motion.circle` with `whileInView` draw-in
   (`initial={{pathLength:0,opacity:0}} whileInView={{pathLength:1,opacity:1}} viewport={{once:true}}`).
2. **CRITICAL framer-motion rule (learned the hard way)**: every `motion.line`, `motion.path`,
   `motion.rect` that animates attributes MUST carry the same attributes STATICALLY as base
   props (stroke, strokeWidth, opacity, strokeDasharray) so `animate` only *changes* them.
   Missing base props throw console warnings ("animate from undefined").
3. **Interactive state machines**: useState-driven step players with Play/Next/Reset buttons,
   aria-labels on all buttons, `aria-live="polite"` status lines. e.g.:
   - L2 `anticipation`: BlackBerry/Hertz/Blockbuster stock-decline machines (drawn line charts
     with annotated collapse years, one per brand, tabbed).
   - L2 `topline`: cold-coffee P&L calculator (sliders/steppers for price & glasses → live
     revenue/cost/profit computation, 120×80−70×80 = ₹4,000 default).
   - L3 `mktg-system`: industry↔market exchange diagram — four animated flow arrows
     (communication, goods/services, money, information) looping along dashed paths.
   - L3 `demand-states`: 8-state grid with hover/selected detail card.
   - L4 `closed-system`: interest-vs-openness linear chart with a draggable-feel slider
     "interest" that slides the mind from closed to open; interrupt buttons (offer, celebrity,
     limited drop) that crack the loop.
   - L5 `cpv-formula`: benefits−costs balance scale animating as you toggle benefit/cost chips;
     chai context cards (₹20 roadside / ₹250 café / ₹500 airport).
   - L8 `es-ds`: existing-state vs desired-state bars with three strategy buttons
     (lower ES / raise DS / dual — Itch Guard, Kohler, Clean & Clear) animating the gap.
   - L9 `context-matters`: the same 34-minute delivery rendered twice (2★ vs 5★) — a side-by-side
     perception machine with the anchor expectation dial.
   - L9 `loyalty-econ`: animated counters (5% retention → 20–90% profit; $100 vs $20; 60–70%
     vs 5–8% conversion).
   - L11 `heterogeneity`: 100 Netflix dots that zoom apart into 6 content segments.
   - L12 `behavioral`: Surf Excel 25%→75% penetration bar + four segment product cards.
   - L14 `safe-targeting`: SAFE four-gate filter pipeline animating four segments through.
   - L15 `accor-map`: perceptual map (price × luxury scatter with Ibis/Novotel/Pullman/Sofitel).
   - L16 `four-levels`: mass→segment→niche→one zoom spectrum (crowd → group → few → single).
   - L17 `three-circles`: the POP/POD three-circle Venn (consumer desires × competitor features
     × your features) with buttons lighting up POP zone / POD zone / invalid zone.
   - L19 `five-stages`: 5-stage decision flow with a step player; L19 `messy-middle`: the
     infinity-loop exploration-evaluation animation (looping SVG path with a token travelling it).
   - L23 `motivation-theories`: Freud iceberg (10/90), Maslow pyramid (5 levels, climbable),
     Herzberg two-factor dials; L23 `theory-match`: the six quote→theory matching game.
   - L24 `almonds-price`: packaging options A–D with rating bars, then a "reveal prices" step
     that reshuffles preference.
   - L25 `gestalt-lab`: five mini-canvases (figure/ground, continuity, similarity, proximity,
     closure) — small pure-SVG demos per principle.
   - L28 `bias-lab`: four bias demo cards (anchoring "Save 16%", bandwagon "15,000 learning",
     scarcity "Only 3 rooms left", endowment sell/buy price gap slider).
   These are examples — implement the ones in your range faithfully to the notes; add more
   where the content is rich.
4. All machines are client components in your one file; keep each machine ≤ ~140 lines;
   share tiny helper components at the top of your file (like AtbParts1's FlowNode/FlowEdge).

## Text content rules
- Chapters are READERS, not slides: mix prose paragraphs (max-w-3xl, `text-[#3a4a48]`,
  leading-relaxed), `ReadStep` story beats, `Callout` boxes, `KV` definition rows, and the machines.
- Use the notes' own language where it sings ("too old for baby products but too young for adult
  products", "if everyone is your priority, then nobody is your priority", "Free Chai Rule",
  "messy middle", "Sting means it's working"). Quote precisely.
- ₹ figures, years, percentages: exactly as the notes state.
- End every chapter with `<Takeaways>` items drawn from the notes.
- Lecture 22 has NO notes in the PDF (the page is blank). Its chapter `recap22` is an honest
  recap machine of the Lectures 19–21 arc (non-linear journey, infinity loop, integrated
  framework) labelled "Session notes not captured — recap of the decision-journey arc".

## A11y & polish (same bar as ATB)
- aria-label on every icon-only button; aria-live on machine status; semantic sections.
- No fixed pixel widths — machines scale (viewBox + w-full, max-w wrappers).
- Mobile: machines stay readable at 375px; stacks not rows below `sm:`.
- `prefers-reduced-motion` is globally handled by MotionConfig — still avoid infinite loops
  except tiny ambient pulses.

## TypeScript
- Strict; no `any`; no unused imports (lint fails the build); named exports only.
- Import React hooks you use; `useMemo`/`useState` from the react import at top.

## When done
1. Run `cd /home/z/my-project && bunx tsc --noEmit -p tsconfig.json 2>&1 | grep MktgParts` —
   your file must produce zero errors. (If errors appear in OTHER files, ignore them; report them.)
2. Run `bun run lint 2>&1 | grep MktgParts` — zero issues in your file.
3. Append your work record to `/home/z/my-project/worklog.md` (read it first; append, never
   overwrite) using the `---` / `Task ID:` / `Agent:` / `Task:` / `Work Log:` / `Stage Summary:`
   template with your assigned Task ID.
