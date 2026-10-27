"use client";

/* ============================================================
   QUIZ 2 — the mock banks.

   Aggregates the four question banks into the papers the war
   room serves:

     · ONE OFFICIAL MOCK per subject — twice the paper: 2× the
       official question count drawn at random (Fisher–Yates)
       from the bank, on 2× the official clock, 1 mark a
       question (FoC 120Q/40min · ATB 80Q/40min · FA 80Q/60min
       · EBH 80Q/40min). A fresh draw every attempt.
     · one DRILL per syllabus sliver — just that topic's
       questions, untimed, for targeted practice

   The banks are pure data modules (questions-foc/atb/fa/ebh)
   written against the Quiz2Question shape, which is structurally
   compatible with the shared notes/ExamEngine.
   ============================================================ */

import type { EngineBank } from "../notes/ExamEngine";
import { QUIZ2_SUBJECTS, type Quiz2Question, type Quiz2Subject } from "./quiz2-data";
import { FOC_QUIZ2_QUESTIONS } from "./questions-foc";
import { ATB_QUIZ2_QUESTIONS } from "./questions-atb";
import { FA_QUIZ2_QUESTIONS } from "./questions-fa";
import { EBH_QUIZ2_QUESTIONS } from "./questions-ebh";

const BANKS: Record<string, Quiz2Question[]> = {
  foc: FOC_QUIZ2_QUESTIONS,
  atb: ATB_QUIZ2_QUESTIONS,
  fa: FA_QUIZ2_QUESTIONS,
  ebh: EBH_QUIZ2_QUESTIONS,
};

/** the full question bank of one subject */
export function quiz2Questions(subjectId: string): Quiz2Question[] {
  return BANKS[subjectId] ?? [];
}

/* Fisher–Yates, in place */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** the ONE official mock — twice the paper, exactly as trained:
 *  2× the official question count (a fresh random draw from the
 *  bank each attempt) on 2× the official clock, one mark a
 *  question. */
export function quiz2MockBank(subject: Quiz2Subject): EngineBank {
  const bank = quiz2Questions(subject.id);
  const n = Math.min(subject.officialQuestions * 2, bank.length);
  const qs = n >= bank.length ? shuffle([...bank]) : shuffle([...bank]).slice(0, n);
  return {
    title: `${subject.short} · Official Mock`,
    subtitle: `${qs.length} questions · ${subject.mockMinutes} min · twice the paper — ${subject.marks * 2} marks, 1 each`,
    questions: qs,
  };
}

/** one drill paper — a single sliver's questions, untimed */
export function quiz2DrillBank(subject: Quiz2Subject, sliverId: string): EngineBank | null {
  const sliver = subject.slivers.find((s) => s.id === sliverId);
  if (!sliver) return null;
  const qs = quiz2Questions(subject.id).filter((q) => q.topic === sliverId);
  if (qs.length === 0) return null;
  return {
    title: `${subject.short} Drill · ${sliver.label}`,
    subtitle: `${qs.length} questions · untimed · ${sliver.lectures}`,
    questions: qs,
  };
}

/** question count for one sliver (window cards + stats) */
export function quiz2SliverCount(subjectId: string, sliverId: string): number {
  return quiz2Questions(subjectId).filter((q) => q.topic === sliverId).length;
}

/** total mock questions across the four subjects */
export const QUIZ2_TOTAL_QUESTIONS = QUIZ2_SUBJECTS.reduce(
  (acc, s) => acc + quiz2Questions(s.id).length,
  0
);

/** the questions on one official mock — twice the official paper */
export function quiz2MockCount(subject: Quiz2Subject): number {
  return Math.min(subject.officialQuestions * 2, quiz2Questions(subject.id).length);
}
