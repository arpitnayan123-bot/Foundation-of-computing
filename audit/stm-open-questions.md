# STM — open questions & the watchlist (report-only)

Nothing here blocks the rebuild; every item below is preserved as received
and gated on both sides. If the course owner ever rules on one, the fix is a
one-line transcript/corpus change and a regen — the gates keep both sides
honest until then.

## The nine gated source conflicts (both sides render; nothing reconciled)

1. Chebyshev's floors — L06: "at least 75% / 89% / 94%" (Z = 2/3/4, any
   distribution) vs L12's empirical bands "68.26% / 95.45% / 99.72%"
2. The σ-known z-road (L22: x̄ ± z(α/2)·σ/√n) vs the t-switch (L24: "the
   t-distribution is employed for interval estimation instead of the normal
   distribution")
3. The Marrian spelling — the deck's own, 8 occurrences in L21; the
   prescribed text's published case name differs; the deck's spelling ships
4. The empirical rule's precision — L06: "approximately 68% / 95% / 99.7%"
   vs L12: "68.26% / 95.45% / 99.72%"
5. Type I/II double-treatment — L27 (α = level of significance, the 2×2
   decision table) vs L29's re-teaching (false positive / false negative
   framing, common α = 0.05 / 0.01, the FDA / fire-alarm / court analogies)
6. The standard-error symbol variance — σₓ (L21) vs σ_x̄ (L19/L23);
   σ_p̂ (L19) vs σ(p̂) (L25) vs σ_{p̂} (L31); the proportion SE's
   radical carrying population p (L19, L25's skeleton table) and sample p̂
   (L25's interval formula, L31)
7. L26's interval — stated margin 7,076 (bounds 66,264 / 80,416) against
   its own inputs σ = 24,849 and n = 50 (implied margin ≈ 6,888); the
   planner prints n ≈ 95.26 → "approximately 100 vehicles"
8. L22's sample size — the narrative samples 50 of 1,000 stores; the worked
   interval runs n = 36 (σ(x̄) = 4,500/√36 = 750; margins 1,234 / 1,470 /
   1,932 all exact at n = 36); both render
9. The finite-population rule — L19: "σ_x̄ = √[(N-n)/(N-1)] × (σ/√n)" with
   the n/N < 0.05 exemption; L23's lab samples 50 of a finite 2,500
   employees and computes plain σ/√n without the factor

## Watchlist (observed, registered, not counted in the nine)

- z(0.005) = **2.576** (L22, L25) vs **2.57** (L32's control-limit
  calculation) — the same 0.01-level critical value at two precisions
- L29: "Common choices for α are 0.05 and 0.01" — while L31's worked
  two-tail example runs α = 0.03 (z(0.015) = 2.17)
- L13: "adding 80 days of 10 units sold … E(X) increases from 1.2 to 5.2" —
  the arithmetic checks only if the 80 zero-sale days are REPLACED by
  10-unit days (200 days total, E(X) = 5.2); a true addition over 280 days
  gives 3.71. The prose ships verbatim; the diagram renders the replacement
  reading that matches the stated 5.2
- L26's planner prints n ≈ 95.26 where the stated inputs recompute to
  ≈ 94.9 — both readings ship in the corpus and the CalcFlow carries the
  case's own 95.26 → 100

## Word-count variance (the one number the brief asserts that material cannot confirm)

The brief asserts the corpus is 27,198 words. The verbatim compendium body —
the only content authority that exists in the sandbox — carries 24,785
content tokens (100% shipped, machine-verified against the PDF page text by
per-lecture token-multiset diff, extra=0 missing=0). The ~2.4k-token delta is
per-lecture transcript furniture (timestamps, speaker noise) that the
compendium's own build stripped; the same family of gap the POM compendium
showed (cover 34,414 vs body 31,960) and EBH (cover 31,994 vs body 29,426).
The delta is not recoverable and was not invented. The PDF bundle's cover
badge carries the official 27,198 and the builder reports the measured count
on the record. If the owner's raw transcripts ever arrive, re-running
`scripts/extract_stm_corpus.py` against them replaces the corpus in one pass.

## Watchlist (report-only, from the audit)

- none currently — the audit's watchlist prints 0.
