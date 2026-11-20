/* ============================================================
   Regenerate the STM slices of the static twins:
     · src/lib/chapter-index.ts   (the ⌘K palette's chapter catalog)
     · src/lib/search-corpus.json (MiniSearch note documents)
     · src/lib/section-counts.ts  (stm: N)
     · src/lib/question-counts.ts (stm: total questions)
   derived from src/components/stm/lectures.ts (registry + the
   six module groups — sidebar order = ascending lecture number)
   and the real section source files (text extracted). The
   chapters' verbatim corpus slices live in corpus.ts and are
   appended to each chapter's searchable text.

   Run: bun scripts/regen-stm-twins.ts
        bun scripts/regen-stm-twins.ts --chapters=67  (hard-fail on drift)
   ============================================================ */

import fs from "node:fs";
import path from "node:path";
import { STM_LECTURES, STM_MODULES, lectureOfChapter } from "../src/components/stm/lectures";

const ROOT = path.resolve(import.meta.dir, "..");
const SRC = path.join(ROOT, "src");

const EXPECTED_LECTURES = Number((process.argv.find((a) => a.startsWith("--lectures=")) ?? "").split("=")[1]) || 33;
const EXPECTED_CHAPTERS: number | null = Number((process.argv.find((a) => a.startsWith("--chapters=")) ?? "").split("=")[1]) || null;

/* ---------- 1. registry — imported directly (single source) ---------- */
if (STM_LECTURES.length !== EXPECTED_LECTURES) {
  throw new Error(`expected ${EXPECTED_LECTURES} lectures — registry drifted (got ${STM_LECTURES.length})`);
}
const idsFromRegistry = STM_LECTURES.flatMap((l) => l.chapters.map((c) => c.id));
if (EXPECTED_CHAPTERS && idsFromRegistry.length !== EXPECTED_CHAPTERS) {
  throw new Error(`expected ${EXPECTED_CHAPTERS} chapters — registry drifted (got ${idsFromRegistry.length})`);
}

/* ---------- 2. module mapping — the six groups, ordered by n ---------- */
const groupOf = new Map<string, { group: string; groupLabel: string; label: string; desc: string }>();
for (const l of STM_LECTURES) {
  const mod = STM_MODULES.find((m) => l.n >= m.range[0] && l.n <= m.range[1]);
  if (!mod) throw new Error(`lecture ${l.code} maps to no module — the six-module structure is broken`);
  for (const c of l.chapters) {
    if (groupOf.has(c.id)) throw new Error(`chapter "${c.id}" listed twice in the registry`);
    groupOf.set(c.id, { group: mod.id, groupLabel: mod.label, label: c.label, desc: `${l.code} · ${c.desc}` });
  }
}
const orphans = idsFromRegistry.filter((id) => !groupOf.has(id));
if (orphans.length) throw new Error(`registry chapters missing from the module map: ${orphans.join(", ")}`);
console.log(`registry: ${STM_LECTURES.length} lectures, ${idsFromRegistry.length} chapters, ${STM_MODULES.length} modules`);

/* ---------- 3. chapter id → source slice ---------- */
const SECTION_FILES = Array.from({ length: 16 }, (_, i) => `components/stm/StmParts${i + 1}.tsx`);

const fileTexts = new Map<string, string>();
for (const f of SECTION_FILES) fileTexts.set(f, fs.readFileSync(path.join(SRC, f), "utf8"));

function sliceSection(sectionId: string): string | null {
  for (const [, text] of fileTexts) {
    /* anchor on the real opening tag — a bare `id="…"` search can hit
       a comment or a nav reference BEFORE the section itself */
    const m = text.match(new RegExp(`<section\\s+id="${sectionId}"[\\s\\S]*?</section>`));
    if (m) return m[0];
  }
  return null;
}

/* ---------- 4. text extraction: tag/brace-aware scanner ---------- */
const ATTR_DENY = new Set([
  "className", "style", "id", "viewBox", "fill", "stroke", "strokeWidth", "strokeLinecap",
  "strokeLinejoin", "fillRule", "clipRule", "d", "x", "y", "x1", "x2", "y1", "y2", "cx", "cy",
  "r", "width", "height", "points", "transform", "gradientUnits", "offset", "stopColor",
  "stopOpacity", "color", "key", "type", "n", "kind", "role", "xmlns", "preserveAspectRatio",
  "css", "ref", "onClick", "onChange", "onOpen", "onClose", "step", "active", "disabled",
  "answer", "stepper", "initial", "animate", "whileInView", "viewport", "transition", "delay",
  "markerWidth", "markerHeight", "refX", "refY", "orient", "strokeOpacity", "fillOpacity",
  "strokeDasharray", "textAnchor", "fontSize", "fontWeight", "fontFamily", "stop", "lineX",
  "lambda", "from", "to", "prob", "label", "at", "tone", "span", "meanLabel", "sigmaTicks",
  "axisLabel", "strokeTone", "flatTop", "chip", "detail", "math", "note", "head", "rows",
]);

function attrNameOfEq(s: string, eq: number): string {
  let j = eq - 1;
  while (j >= 0 && /\s/.test(s[j])) j--;
  const end = j + 1;
  while (j >= 0 && /[a-zA-Z-]/.test(s[j])) j--;
  if (end === j + 1) return "";
  return s.slice(j + 1, end);
}

function attrOfQuote(s: string, q: number): string {
  let j = q - 1;
  while (j >= 0 && /\s/.test(s[j])) j--;
  if (s[j] !== "=") return "";
  return attrNameOfEq(s, j);
}

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
  const s = src.replace(/^<section\s+id="[^"]+"\s*[^>]*>/, " ");
  const out: string[] = [];
  const flush = () => {
    const t = buf.replace(/\s+/g, " ").trim();
    if (t) out.push(t);
    buf = "";
  };
  let buf = "";
  let i = 0;
  let mode: "text" | "tag" = "text";
  let depth = 0;
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
        i++;
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
        out.push(expr.replace(/<[^<>]*>/g, " ").replace(/[{}]/g, " "));
      } else {
        out.push(...harvestStrings(expr));
      }
      i = close + 1;
      continue;
    }
    if (c === "=" && s[i + 1] === "{") {
      i = matchBrace(s, i + 1) + 1;
      continue;
    }
    if (c === "{") { depth++; i++; continue; }
    if (c === "}") { depth = Math.max(0, depth - 1); i++; continue; }
    if (c === ">" && depth === 0) { mode = "text"; i++; continue; }
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
    .slice(0, 16000);
}

/* ---------- 5. build the stm corpus chapters ---------- */
const corpusTs = fs.readFileSync(path.join(SRC, "components/stm/corpus.ts"), "utf8");
function corpusChapterText(id: string): string | null {
  const m = corpusTs.match(new RegExp(`  "${id}": \\[[\\s\\S]*?\\n  \\]`));
  if (!m) return null;
  return [...m[0].matchAll(/s: ("(?:[^"\\]|\\.)*")/g)].map((x) => JSON.parse(x[1])).join(" ");
}

const corpusChapters = idsFromRegistry.map((id) => {
  const g = groupOf.get(id)!;
  const slice = sliceSection(id);
  if (!slice) throw new Error(`no section slice found for chapter "${id}"`);
  const extra = corpusChapterText(id) ?? "";
  if (!extra) throw new Error(`no corpus text found for chapter "${id}" — corpus.ts drifted from the registry`);
  const text = extractText(slice + "\n" + extra);
  return {
    shelfId: "stm",
    chapterKey: id,
    label: g.label,
    group: g.group,
    groupLabel: g.groupLabel,
    text,
  };
});

const corpusWords = corpusChapters.reduce((n, c) => n + c.text.split(/\s+/).length, 0);
console.log(`search-corpus text total (stm): ${corpusWords} whitespace tokens (the deployed 27-lecture shelf carried 24,602)`);

/* ---------- 6. rewrite search-corpus.json (stm replaced, others kept) ---------- */
const corpusPath = path.join(SRC, "lib/search-corpus.json");
const oldCorpus = JSON.parse(fs.readFileSync(corpusPath, "utf8")) as {
  generatedAt: string;
  chapters: { shelfId: string; chapterKey: string; label: string; group: string; groupLabel: string; text: string }[];
};
const kept = oldCorpus.chapters.filter((c) => c.shelfId !== "stm");
const nextCorpus = {
  generatedAt: new Date().toISOString(),
  chapters: [...kept, ...corpusChapters],
};
fs.writeFileSync(corpusPath, JSON.stringify(nextCorpus, null, 1) + "\n");
console.log(`search-corpus.json: kept ${kept.length} non-stm chapters, wrote ${corpusChapters.length} stm chapters`);

/* ---------- 7. rewrite the stm block of chapter-index.ts ---------- */
const indexPath = path.join(SRC, "lib/chapter-index.ts");
let indexSrc = fs.readFileSync(indexPath, "utf8");

const stmEntries = corpusChapters.map((c) =>
  `  { subject: "stm", section: "${c.chapterKey}", label: ${JSON.stringify(c.label)}, desc: ${JSON.stringify(groupOf.get(c.chapterKey)!.desc)}, group: "${c.group}", groupLabel: "${c.groupLabel}" },`,
);
const stmBlock = stmEntries.join("\n");

const firstAt = indexSrc.indexOf('{ subject: "stm"');
if (firstAt === -1) throw new Error("could not locate the stm block in chapter-index.ts");
let blockStart = firstAt;
while (blockStart > 0 && indexSrc[blockStart - 1] === " ") blockStart--;
let cursor = firstAt;
let endAt = -1;
const OTHERS = ['{ subject: "foc"', '{ subject: "fa"', '{ subject: "atb"', '{ subject: "mktg"', '{ subject: "ebh"'];
while (true) {
  const entryEnd = indexSrc.indexOf("},\n", cursor);
  if (entryEnd === -1) throw new Error("unterminated stm block");
  const after = entryEnd + 3;
  if (OTHERS.some((o) => indexSrc.startsWith(o, after))) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(after).trimStart().startsWith("];")) { endAt = entryEnd + 3; break; }
  const nextEntry = indexSrc.indexOf("{ subject: ", after);
  if (nextEntry === -1 || nextEntry > indexSrc.indexOf("];", after)) { endAt = entryEnd + 3; break; }
  if (indexSrc.slice(nextEntry).startsWith('{ subject: "stm"')) { cursor = nextEntry; continue; }
  endAt = entryEnd + 3;
  break;
}
indexSrc = indexSrc.slice(0, blockStart) + stmBlock + "\n" + indexSrc.slice(endAt);

indexSrc = indexSrc.replace(/stm \d+/, `stm ${idsFromRegistry.length}`);
fs.writeFileSync(indexPath, indexSrc);
console.log("chapter-index.ts: stm block regenerated");

/* ---------- 8. section-counts.ts + question-counts.ts ---------- */
const scPath = path.join(SRC, "lib/section-counts.ts");
let sc = fs.readFileSync(scPath, "utf8");
sc = sc.replace(/stm:\s*\d+/, `stm: ${idsFromRegistry.length}`);
fs.writeFileSync(scPath, sc);
console.log(`section-counts.ts: stm → ${idsFromRegistry.length}`);

const qSrc = fs.readFileSync(path.join(SRC, "components/stm/questions.ts"), "utf8");
const total = (qSrc.match(/id:\s*"/g) ?? []).length;
const qcPath = path.join(SRC, "lib/question-counts.ts");
let qc = fs.readFileSync(qcPath, "utf8");
qc = qc.replace(/stm:\s*\d+/, `stm: ${total}`);
fs.writeFileSync(qcPath, qc);
console.log(`question-counts.ts: stm → ${total}`);
