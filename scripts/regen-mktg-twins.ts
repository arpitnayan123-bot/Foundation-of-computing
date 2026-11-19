/* ============================================================
   Regenerate the MKTG slices of the static twins:
     · src/lib/chapter-index.ts   (the ⌘K palette's chapter catalog)
     · src/lib/search-corpus.json (MiniSearch note documents)
     · src/lib/section-counts.ts  (mktg: N)
     · src/lib/question-counts.ts (mktg: total questions)
   derived from src/components/mktg/lectures.ts (registry +
   MKTG_GROUPS — the group/label/desc mapping lives in the
   GROUPS items, matching the existing twin format) and the
   real section source files (text extracted).

   Run: bun scripts/regen-mktg-twins.ts
        bun scripts/regen-mktg-twins.ts --chapters=53   (hard-fail on drift)
        bun scripts/regen-mktg-twins.ts --lectures=28   (override lecture guard)

   RESTRUCTURE NOTE — when the Principles-of-Marketing rebuild
   lands: rewrite lectures.ts + the MktgParts files first, then
   run this with --chapters=<new count> so it hard-fails on any
   parse drift instead of silently writing a wrong twin.
   ============================================================ */

import fs from "node:fs";
import path from "node:path";
import { MKTG_LECTURES, MKTG_PARTS, lectureOfChapter, partOfLecture } from "../src/components/mktg/lectures";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

/* ---------- expected shape (pin --chapters after a restructure) ---------- */
const EXPECTED_LECTURES = Number((process.argv.find((a) => a.startsWith("--lectures=")) ?? "").split("=")[1]) || 40;
const EXPECTED_CHAPTERS: number | null = Number((process.argv.find((a) => a.startsWith("--chapters=")) ?? "").split("=")[1]) || null;

/* ---------- 1. registry — imported directly (single source) ---------- */
if (MKTG_LECTURES.length !== EXPECTED_LECTURES) {
  throw new Error(`expected ${EXPECTED_LECTURES} lectures — registry drifted (got ${MKTG_LECTURES.length})`);
}
const idsFromRegistry = MKTG_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
if (EXPECTED_CHAPTERS && idsFromRegistry.length !== EXPECTED_CHAPTERS) {
  throw new Error(`expected ${EXPECTED_CHAPTERS} chapters — registry drifted (got ${idsFromRegistry.length})`);
}

/* ---------- 2. part mapping — the six teaching arcs ----------
   Every chapter belongs to the arc its lecture number falls in;
   reserved lectures sit inside their arc (L22 → part3, L39 → part6). */
const groupOf = new Map<string, { group: string; groupLabel: string; label: string; desc: string }>();
for (const l of MKTG_LECTURES) {
  const part = partOfLecture(l.n);
  if (!part) throw new Error(`lecture ${l.code} maps to no teaching arc`);
  for (const c of l.chapters) {
    if (groupOf.has(c.id)) throw new Error(`chapter "${c.id}" listed twice in the registry`);
    groupOf.set(c.id, { group: part.id, groupLabel: part.label, label: c.label, desc: `${l.code} · ${c.desc}` });
  }
}
const orphans = idsFromRegistry.filter((id) => !groupOf.has(id));
if (orphans.length) throw new Error(`registry chapters missing from the arc map: ${orphans.join(", ")}`);
console.log(`registry: ${MKTG_LECTURES.length} lectures, ${idsFromRegistry.length} chapters, ${MKTG_PARTS.length} arcs`);

/* ---------- 3. chapter id → source slice ---------- */
const SECTION_FILES = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `components/mktg/MktgParts${n}.tsx`);

const fileTexts = new Map<string, string>();
for (const f of SECTION_FILES) fileTexts.set(f, fs.readFileSync(path.join(SRC, f), "utf8"));

function sliceSection(sectionId: string): string | null {
  for (const [, text] of fileTexts) {
    /* anchor on the real opening tag — a bare `id="…"` search can hit
       a comment or a nav reference BEFORE the section itself */
    const m = text.match(new RegExp(`<Section\\s+id="${sectionId}"[\\s\\S]*?</Section>`));
    if (m) return m[0];
  }
  return null;
}

/* ---------- 4. text extraction: tag/brace-aware scanner ----------
   The original corpus was scraped from the rendered DOM, so its
   text order is document order (eyebrow → title → lead → body).
   A state-machine scanner walks the slice: JSX text nodes in
   document order, content strings harvested where they appear;
   styling/noise attributes (className, style, SVG geometry…) are
   denied, and `attr={<jsx>}` expressions contribute their inner
   text. Prose apostrophes stay prose. */
const ATTR_DENY = new Set([
  "className", "style", "id", "viewBox", "fill", "stroke", "strokeWidth", "strokeLinecap",
  "strokeLinejoin", "fillRule", "clipRule", "d", "x", "y", "x1", "x2", "y1", "y2", "cx", "cy",
  "r", "width", "height", "points", "transform", "gradientUnits", "offset", "stopColor",
  "stopOpacity", "color", "key", "type", "n", "kind", "role", "xmlns", "preserveAspectRatio",
  "css", "ref", "onClick", "onChange", "onOpen", "onClose", "step", "active", "disabled",
]);

/* attr name whose `=` sits exactly at index eq */
function attrNameOfEq(s: string, eq: number): string {
  let j = eq - 1;
  while (j >= 0 && /\s/.test(s[j])) j--;
  const end = j + 1;
  while (j >= 0 && /[a-zA-Z-]/.test(s[j])) j--;
  if (end === j + 1) return "";
  return s.slice(j + 1, end);
}

/* attr name for a quote at index q — the `=` must sit just before it */
function attrOfQuote(s: string, q: number): string {
  let j = q - 1;
  while (j >= 0 && /\s/.test(s[j])) j--;
  if (s[j] !== "=") return "";
  return attrNameOfEq(s, j);
}

/* index of the closing brace itself (callers step past it once) */
function matchBrace(s: string, open: number): number {
  let d = 1;
  let j = open + 1;
  while (j < s.length) {
    const c = s[j];
    if (c === '"' || c === "'" || c === "`") { j = findStrEnd(s, j) + 1; continue; }
    if (c === "{") d++;
    else if (c === "}") { d--; if (d === 0) return j; }
    j++;
  }
  return s.length - 1;
}

function harvestStrings(seg: string): string[] {
  const out: string[] = [];
  for (let j = 0; j < seg.length; j++) {
    const c = seg[j];
    if (c === '"' || c === "'" || c === "`") {
      const close = findStrEnd(seg, j);
      out.push(unescapeStr(seg.slice(j + 1, close)));
      j = close;
    }
  }
  return out;
}

function findStrEnd(s: string, open: number): number {
  const q = s[open];
  for (let j = open + 1; j < s.length; j++) {
    if (s[j] === "\\") { j++; continue; }
    if (s[j] === q) return j;
  }
  return s.length - 1;
}

const unescapeStr = (t: string) =>
  t.replace(/\\n/g, " ").replace(/\\t/g, " ").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\`/g, "`").replace(/\\\$/g, "$");

function extractText(src: string): string {
  const s = src.replace(/^<Section\s+id="[^"]+"\s*>/, " ");
  const out: string[] = [];
  const flush = () => {
    const t = buf.replace(/\s+/g, " ").trim();
    if (t) out.push(t);
    buf = "";
  };
  let buf = "";
  let i = 0;
  let mode: "text" | "tag" = "text";
  let depth = 0; // brace depth inside a tag (JSX attr expressions)
  let tagStart = 0;
  while (i < s.length) {
    const c = s[i];
    if (mode === "text") {
      if (c === "<" && /[a-zA-Z/]/.test(s[i + 1] ?? "")) { flush(); mode = "tag"; depth = 0; tagStart = i; i++; continue; }
      if (c === "{") {
        flush();
        let d = 1;
        i++;
        while (i < s.length && d > 0) {
          const ch = s[i];
          if (ch === "{") d++;
          else if (ch === "}") { d--; if (d === 0) break; }
          else if (ch === '"' || ch === "'" || ch === "`") {
            const close = findStrEnd(s, i);
            out.push(unescapeStr(s.slice(i + 1, close)));
            i = close + 1;
            continue;
          }
          i++;
        }
        i++; // past the closing brace
        continue;
      }
      buf += c;
      i++;
      continue;
    }
    /* tag mode */
    if (c === '"' || c === "'" || c === "`") {
      const close = findStrEnd(s, i);
      if (!ATTR_DENY.has(attrOfQuote(s, i))) out.push(unescapeStr(s.slice(i + 1, close)));
      i = close + 1;
      continue;
    }
    if (c === "=" && s[i + 1] === "{" && !ATTR_DENY.has(attrNameOfEq(s, i))) {
      const close = matchBrace(s, i + 1);
      const expr = s.slice(i + 2, close);
      if (expr.includes("<")) {
        /* attr={<jsx>} — keep the rendered inner text */
        out.push(expr.replace(/<[^<>]*>/g, " ").replace(/[{}]/g, " "));
      } else {
        out.push(...harvestStrings(expr));
      }
      i = close + 1;
      continue;
    }
    if (c === "=" && s[i + 1] === "{") {
      /* denied attr with an expression — skip the whole expression */
      i = matchBrace(s, i + 1) + 1;
      continue;
    }
    if (c === "{") { depth++; i++; continue; }
    if (c === "}") { depth = Math.max(0, depth - 1); i++; continue; }
    if (c === ">" && depth === 0) { mode = "text"; i++; continue; }
    /* bail out of a run-away "tag" that is really prose with a stray < */
    if (i - tagStart > 600 && depth === 0) { mode = "text"; continue; }
    i++;
  }
  flush();
  return out
    .join(" ")
    .replace(/&apos;|&rsquo;|&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "-")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 12000);
}

/* ---------- 5. build the mktg corpus chapters ----------
   The sections' interactive machines live in helper components
   ABOVE the sections (rendered by reference), so the slice alone
   misses their copy. Resolve same-file helper references (plus
   the data consts they read, one level) and append their text.
   The NEW lectures (L29–L40) carry their verbatim text in
   corpus.ts, imported via CorpusBlocks — resolve that import so
   the corpus chapter contains the real prose too. */
const corpusTs = fs.readFileSync(path.join(SRC, "components/mktg/corpus.ts"), "utf8");
function corpusChapterText(id: string): string | null {
  const m = corpusTs.match(new RegExp(`  "${id}": \\[[\\s\\S]*?\\n  \\]`));
  if (!m) return null;
  return [...m[0].matchAll(/s: ("(?:[^"\\]|\\.)*")/g)].map((x) => JSON.parse(x[1])).join(" ");
}
const helpersByFile = new Map<string, Map<string, string>>();
const constsByFile = new Map<string, Map<string, string>>();
for (const [f, text] of fileTexts) {
  const marks: { at: number; kind: "fn" | "const" | "boundary"; name: string }[] = [];
  for (const m of text.matchAll(/^function (\w+)\(/gm)) marks.push({ at: m.index!, kind: "fn", name: m[1] });
  for (const m of text.matchAll(/^export function (\w+)\(/gm)) marks.push({ at: m.index!, kind: "fn", name: m[1] });
  for (const m of text.matchAll(/^const (\w+)\s*=/gm)) marks.push({ at: m.index!, kind: "const", name: m[1] });
  for (const m of text.matchAll(/<Section\s+id="/g)) marks.push({ at: m.index!, kind: "boundary", name: "" });
  marks.sort((a, b) => a.at - b.at);
  const helpers = new Map<string, string>();
  const consts = new Map<string, string>();
  for (let i = 0; i < marks.length; i++) {
    const end = marks.slice(i + 1).find((x) => x.at > marks[i].at)?.at ?? text.length;
    if (marks[i].kind === "fn") helpers.set(marks[i].name, text.slice(marks[i].at, end));
    if (marks[i].kind === "const") consts.set(marks[i].name, text.slice(marks[i].at, end));
  }
  helpersByFile.set(f, helpers);
  constsByFile.set(f, consts);
}

/* chrome = helpers/consts reachable from many sections (GT, P, MBtn,
   the color constants…) — shared shell, not chapter content */
const chromeByFile = new Map<string, Set<string>>();
for (const [f, text] of fileTexts) {
  const counts = new Map<string, number>();
  for (const m of text.matchAll(/<Section\s+id="([a-z0-9-]+)"/g)) {
    const slice = text.slice(m.index!, text.indexOf("</Section>", m.index!));
    const reach = new Set<string>();
    const q = [...slice.matchAll(/<([A-Z]\w+)\b/g)].map((x) => x[1]);
    while (q.length) {
      const name = q.shift()!;
      if (reach.has(name)) continue;
      reach.add(name);
      const body = helpersByFile.get(f)!.get(name) ?? constsByFile.get(f)!.get(name);
      if (!body) continue;
      for (const mm of body.matchAll(/\b([A-Z][A-Za-z0-9_]{2,})\b/g)) q.push(mm[1]);
    }
    for (const name of reach) counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  const chrome = new Set<string>();
  for (const [name, n] of counts) if (n >= 6) chrome.add(name);
  /* tiny const blocks are chrome too (color strings, gradients) */
  for (const [name, body] of constsByFile.get(f)!) if (body.length < 80) chrome.add(name);
  chromeByFile.set(f, chrome);
}

/* strip the `function Name(...) {` shell — otherwise the scanner
   meets the signature's `{` in text mode and swallows the whole
   function as one brace expression, harvesting quoted strings
   while losing every JSX text node (machine copy) */
function fnBody(block: string): string {
  const open = block.indexOf("{");
  const close = block.lastIndexOf("}");
  return open !== -1 && close > open ? block.slice(open + 1, close) : block;
}

function machineText(file: string, segment: string): string {
  const helpers = helpersByFile.get(file)!;
  const consts = constsByFile.get(file)!;
  const chrome = chromeByFile.get(file)!;
  const seen = new Set<string>();
  const out: string[] = [];
  const queue: string[] = [...[...segment.matchAll(/<([A-Z]\w+)\b/g)].map((m) => m[1])];
  while (queue.length) {
    const name = queue.shift()!;
    if (seen.has(name) || chrome.has(name)) continue;
    seen.add(name);
    const raw = helpers.get(name) ?? consts.get(name);
    if (!raw) continue;
    const body = helpers.has(name) ? fnBody(raw) : raw;
    out.push(body);
    for (const m of body.matchAll(/\b([A-Z][A-Za-z0-9_]{2,})\b/g)) queue.push(m[1]);
  }
  return out.join("\n");
}

const corpusChapters = idsFromRegistry.map((id) => {
  const g = groupOf.get(id)!;
  const slice = sliceSection(id);
  if (!slice) throw new Error(`no section slice found for chapter "${id}"`);
  const file = SECTION_FILES.find((f) => fileTexts.get(f)!.includes(`<Section id="${id}"`))!;
  /* the SectionHead eyebrow ("Part N · Lecture NN · title") is
     captured in document order by extractText — no manual prefix;
     chapters rendered through CorpusBlocks get their verbatim
     corpus prose appended (the generated data lives outside the
     section slice) */
  const extra = corpusChapterText(id) ?? "";
  const text = extractText(slice + "\n" + machineText(file, slice) + "\n" + extra);
  return {
    shelfId: "mktg",
    chapterKey: id,
    label: g.label,
    group: g.group,
    groupLabel: g.groupLabel,
    text,
  };
});

/* ---------- 6. rewrite search-corpus.json (mktg replaced, others kept) ---------- */
const corpusPath = path.join(SRC, "lib/search-corpus.json");
const oldCorpus = JSON.parse(fs.readFileSync(corpusPath, "utf8")) as {
  generatedAt: string;
  chapters: { shelfId: string; chapterKey: string; label: string; group: string; groupLabel: string; text: string }[];
};
const kept = oldCorpus.chapters.filter((c) => c.shelfId !== "mktg");
const nextCorpus = {
  generatedAt: new Date().toISOString(),
  chapters: [...kept, ...corpusChapters],
};
fs.writeFileSync(corpusPath, JSON.stringify(nextCorpus, null, 1) + "\n");
console.log(`search-corpus.json: kept ${kept.length} non-mktg chapters, wrote ${corpusChapters.length} mktg chapters`);

/* ---------- 7. rewrite the mktg block of chapter-index.ts ---------- */
const indexPath = path.join(SRC, "lib/chapter-index.ts");
let indexSrc = fs.readFileSync(indexPath, "utf8");

const mktgEntries = corpusChapters.map((c) =>
  `  { subject: "mktg", section: "${c.chapterKey}", label: ${JSON.stringify(c.label)}, desc: ${JSON.stringify(groupOf.get(c.chapterKey)!.desc)}, group: "${c.group}", groupLabel: "${c.groupLabel}" },`,
);
const mktgBlock = mktgEntries.join("\n");

const firstAt = indexSrc.indexOf('{ subject: "mktg"');
if (firstAt === -1) throw new Error("could not locate the mktg block in chapter-index.ts");
/* back up over the old entry's leading spaces so the new block does
   not inherit them as extra indentation */
let blockStart = firstAt;
while (blockStart > 0 && indexSrc[blockStart - 1] === " ") blockStart--;
let cursor = firstAt;
let endAt = -1;
const OTHERS = ['{ subject: "foc"', '{ subject: "fa"', '{ subject: "atb"', '{ subject: "ebh"', '{ subject: "stm"'];
while (true) {
  const entryEnd = indexSrc.indexOf("},\n", cursor);
  if (entryEnd === -1) throw new Error("unterminated mktg block");
  const after = entryEnd + 3;
  if (OTHERS.some((o) => indexSrc.startsWith(o, after))) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(after).trimStart().startsWith("];")) { endAt = entryEnd + 3; break; }
  const nextEntry = indexSrc.indexOf("{ subject: ", after);
  if (nextEntry === -1 || nextEntry > indexSrc.indexOf("];", after)) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(nextEntry).startsWith('{ subject: "mktg"')) { cursor = nextEntry; continue; }
  endAt = entryEnd + 3;
  break;
}
indexSrc = indexSrc.slice(0, blockStart) + mktgBlock + "\n" + indexSrc.slice(endAt);

/* refresh the counts note in the header comment */
indexSrc = indexSrc.replace(/mktg \d+/, `mktg ${idsFromRegistry.length}`);
fs.writeFileSync(indexPath, indexSrc);
console.log("chapter-index.ts: mktg block regenerated");

/* ---------- 8. section-counts.ts + question-counts.ts ---------- */
const scPath = path.join(SRC, "lib/section-counts.ts");
let sc = fs.readFileSync(scPath, "utf8");
sc = sc.replace(/mktg:\s*\d+/, `mktg: ${idsFromRegistry.length}`);
fs.writeFileSync(scPath, sc);
console.log(`section-counts.ts: mktg → ${idsFromRegistry.length}`);

/* count questions straight out of questions.ts — every
   MktgExamQuestion object carries exactly one `id: "…"`, and
   nothing else in the file does */
const qSrc = fs.readFileSync(path.join(SRC, "components/mktg/questions.ts"), "utf8");
const total = (qSrc.match(/id:\s*"/g) ?? []).length;
const qcPath = path.join(SRC, "lib/question-counts.ts");
let qc = fs.readFileSync(qcPath, "utf8");
qc = qc.replace(/mktg:\s*\d+/, `mktg: ${total}`);
fs.writeFileSync(qcPath, qc);
console.log(`question-counts.ts: mktg → ${total}`);
