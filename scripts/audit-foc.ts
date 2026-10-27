#!/usr/bin/env bun
/**
 * FoC shelf auditor — extracts the full content inventory of every chapter
 * rendered in the FoC reader (notes/Part1-10 + foc/FocParts1-9), mapped to
 * its lecture via foc/lectures.ts.
 *
 * Output: JSON to stdout -> scripts/foc-audit.json
 */
import { FOC_LECTURES } from "../src/components/foc/lectures";

const FILES = [
  "src/components/notes/Part1.tsx",
  "src/components/notes/Part2.tsx",
  "src/components/notes/Part3.tsx",
  "src/components/notes/Part4.tsx",
  "src/components/notes/Part5.tsx",
  "src/components/notes/Part6.tsx",
  "src/components/notes/Part7.tsx",
  "src/components/notes/Part8.tsx",
  "src/components/notes/Part9.tsx",
  "src/components/notes/Part10.tsx",
  "src/components/foc/FocParts1.tsx",
  "src/components/foc/FocParts2.tsx",
  "src/components/foc/FocParts3.tsx",
  "src/components/foc/FocParts4.tsx",
  "src/components/foc/FocParts5.tsx",
  "src/components/foc/FocParts6.tsx",
  "src/components/foc/FocParts7.tsx",
  "src/components/foc/FocParts8.tsx",
  "src/components/foc/FocParts9.tsx",
];

interface ChapterAudit {
  lecture: string;
  lectureTitle: string;
  chapterId: string;
  label: string;
  file: string;
  component: string;
  sectionHead: string | null;
  h3: string[];
  codeBlocks: string[];
  machines: string[]; // custom interactive component usages
  quizzes: number; // number of <Quiz blocks
  callouts: number;
  tables: number;
  stepsFlows: number;
}

// map chapter id -> component usage found in FocApp render map
const RENDER_MAP: Record<string, string> = {
  "course-map": "CourseMapSection",
  computing: "ComputingSection",
  pillars: "PillarsSection",
  data: "DataSection",
  "data-types": "DataTypesSection",
  why: "WhySection",
  algorithm: "AlgorithmSection",
  hardware: "HardwareSection",
  software: "SoftwareSection",
  python: "ProgrammingSection",
  "case-files": "CaseFilesSection",
  basics: "BasicsSection",
  lists: "ListsSection",
  "list-organize": "ListOrganizeSection",
  "for-loops": "ForLoopsSection",
  "checkpoint-1": "Checkpoint1Section",
  "numeric-lists": "NumericListsSection",
  "copies-tuples": "CopiesTuplesSection",
  if: "IfSection",
  branches: "BranchesSection",
  "skills-lab": "SkillsLabSection",
  "if-lists": "IfListsSection",
  dicts: "DictsSection",
  "dict-loops": "DictLoopsSection",
  nesting: "NestingSection",
  "records-lab": "RecordsLabSection",
  while: "WhileSection",
  "loop-control": "LoopControlSection",
  functions: "FunctionsSection",
  args: "ArgsSection",
  returns: "ReturnsSection",
  funcs2: "FuncsScaleSection",
  classes: "ClassesSection",
};

const KNOWN_MACHINES = new Set([
  "StepsFlow", "Pillars", "DikwPyramid", "ChainWalk", "DictLenses", "IfElseChainViz",
  "Venn", "Bell", "Ladder", "Runner", "Stack", "Queue", "Sort", "Hash", "Balance",
  "TAcount", "Dial", "Bayes", "ScaleLadder", "Outlier", "Guild", "Speedometer",
  "Counter", "Courtroom", "Switcher", "Alias", "Indentation", "Records", "Pipeline",
  "Burn", "Equation", "Prepaid", "RangeSlider", "PythonRunner",
]);

const audits: ChapterAudit[] = [];

for (const rel of FILES) {
  const src = await Bun.file(rel).text();
  const lines = src.split("\n");

  // find exported section components and their extents
  const fns: { name: string; start: number; end: number }[] = [];
  const fnRe = /export function (\w+)\(/g;
  const matches = [...src.matchAll(fnRe)].map((m) => ({
    name: m[1],
    start: src.slice(0, m.index).split("\n").length, // 1-based line
    idx: m.index!,
  }));
  for (let i = 0; i < matches.length; i++) {
    const end = i + 1 < matches.length ? matches[i + 1].start - 1 : lines.length;
    fns.push({ name: matches[i].name, start: matches[i].start, end });
  }

  for (const fn of fns) {
    // only section components (rendered chapters)
    const chapterEntry = Object.entries(RENDER_MAP).find(([, comp]) => comp === fn.name);
    if (!chapterEntry) continue;
    const [chapterId, component] = chapterEntry;
    const body = lines.slice(fn.start - 1, fn.end).join("\n");

    const secId = body.match(/<Section\s+id="([^"]+)"/)?.[1] ?? "(none)";
    const head = body.match(/<SectionHead[\s\S]{0,400}?title="([^"]+)"/)?.[1] ??
      body.match(/<SectionHead[\s\S]{0,400}?kicker="([^"]+)"/)?.[1] ?? null;

    // h3 headings within the section body
    const h3s = [...body.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)]
      .map((m) => m[1].replace(/<[^>]+>/g, "").replace(/\{[^}]*\}/g, "").replace(/\s+/g, " ").trim())
      .filter((t) => t.length > 0 && t.length < 120);

    const codeBlocks = [...body.matchAll(/<CodeBlock[^>]*?title="([^"]+)"/g)].map((m) => m[1]);

    // custom machine-ish components: capitalized JSX tags that are imported, not html
    const htmlTags = new Set(["div", "span", "h3", "h4", "p", "ul", "li", "ol", "code", "pre", "table", "thead", "tbody", "tr", "td", "th", "button", "strong", "em", "a", "section", "svg", "path", "circle", "rect", "line", "text", "g", "defs", "stop", "motion", "AnimatePresence", "img", "br", "input", "label", "select", "option", "small", "b", "i", "sup", "sub"]);
    const machines = [...body.matchAll(/<([A-Z][A-Za-z0-9]+)[\s/>]/g)]
      .map((m) => m[1])
      .filter((t) => !htmlTags.has(t) && !t.endsWith("Section") && t !== "Section" && t !== "SectionHead" && t !== "CodeBlock" && t !== "Quiz" && t !== "Callout" && t !== "Reveal" && t !== "Pill" && t !== "PartBoundary")
      .filter((t, i, a) => a.indexOf(t) === i);

    const quizzes = (body.match(/<Quiz[\s\n]/g) ?? []).length;
    const callouts = (body.match(/<Callout/g) ?? []).length;
    const tables = (body.match(/<table/g) ?? []).length;
    const stepsFlows = (body.match(/<StepsFlow/g) ?? []).length;

    const lect = FOC_LECTURES.find((l) => l.chapters.some((c) => c.id === chapterEntry[0]))!;
    audits.push({
      lecture: lect.code,
      lectureTitle: lect.title,
      chapterId,
      label: lect.chapters.find((c) => c.id === chapterId)?.label ?? "?",
      file: rel.replace("src/components/", ""),
      component,
      sectionHead: head,
      h3: h3s,
      codeBlocks,
      machines,
      quizzes,
      callouts,
      tables,
      stepsFlows,
    });
  }
}

// summary + json out
const missing = Object.keys(RENDER_MAP).filter((id) => !audits.some((a) => a.chapterId === id));
console.error(`Chapters audited: ${audits.length}/36 · missing: ${missing.join(", ") || "none"}`);
await Bun.write("scripts/foc-audit.json", JSON.stringify(audits, null, 2));
console.error("Wrote scripts/foc-audit.json");
