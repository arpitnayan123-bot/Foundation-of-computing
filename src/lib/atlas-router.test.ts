/* ============================================================
   Regression tests for the Atlas route parser — the one
   canonical source of truth for URL → view resolution.

   Run: bun test src/lib/atlas-router.test.ts
   ============================================================ */
import { describe, expect, test } from "bun:test";

import { parseRouteHash, viewFromLocation, SUBJECT_ROUTE } from "./atlas-router";

const IDS = ["foc", "atb", "fa", "ebh", "stm", "mktg"];

describe("parseRouteHash", () => {
  test("every live subject id resolves to its shelf", () => {
    for (const id of IDS) {
      const view = parseRouteHash(`#/subject/${id}`, IDS);
      expect(view).toEqual({ name: "subject", id });
    }
  });

  test("known atlas windows resolve", () => {
    expect(parseRouteHash("#/atlas", IDS)).toEqual({ name: "atlas" });
    expect(parseRouteHash("#/ledger", IDS)).toEqual({ name: "ledger" });
    expect(parseRouteHash("#/cockpit", IDS)).toEqual({ name: "cockpit" });
  });

  test("bare anchors never change the view (null)", () => {
    expect(parseRouteHash("#notes-top", IDS)).toBeNull();
    expect(parseRouteHash("#top", IDS)).toBeNull();
    expect(parseRouteHash("", IDS)).toBeNull();
  });

  test("unknown subject ids get the honest reserved bay", () => {
    expect(parseRouteHash("#/subject/xyz", IDS)).toEqual({ name: "reserved", id: "xyz" });
  });

  test("unknown routes fall home to the shelf, never a dead end", () => {
    expect(parseRouteHash("#/nonsense", IDS)).toEqual({ name: "atlas" });
  });

  test("subject ids are normalized — case, spaces, trailing slash", () => {
    expect(parseRouteHash("#/subject/FOC", IDS)).toEqual({ name: "subject", id: "foc" });
    expect(parseRouteHash("#/subject/  Mktg ", IDS)).toEqual({ name: "subject", id: "mktg" });
    expect(parseRouteHash("#/subject/fa/", IDS)).toEqual({ name: "subject", id: "fa" });
    expect(parseRouteHash("#/subject/FoC/", IDS)).toEqual({ name: "subject", id: "foc" });
  });

  test("percent-encoded ids still resolve", () => {
    expect(parseRouteHash("#/subject/%73tm", IDS)).toEqual({ name: "subject", id: "stm" });
  });

  test("route prefix constant is stable", () => {
    expect(SUBJECT_ROUTE).toBe("#/subject/");
  });

  test("prefix-adjacent hashes are not subjects", () => {
    // '#/subjects/foc' (plural) must NOT resolve as a subject —
    // it is an unknown route and falls home to the atlas
    expect(parseRouteHash("#/subjects/foc", IDS)).toEqual({ name: "atlas" });
  });

  test("viewFromLocation is SSR-safe", () => {
    // no window in this bun test runtime → always the landing
    expect(viewFromLocation(IDS)).toEqual({ name: "atlas" });
  });
});
