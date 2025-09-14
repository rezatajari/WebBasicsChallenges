# Challenge 01 — NewsArticleWithAnnotations

**Goal:** practice inline HTML text tags by marking up a short news-style paragraph.  
This challenge uses only simple HTML — no CSS or JavaScript required.

---

## Description
You are given a plain paragraph about coffee. Convert it into an HTML file and apply the following inline tags correctly:

- `b` — stylistic bold (no extra semantic importance)
- `strong` — semantic emphasis for important content
- `i` — italic for technical or foreign words / terms
- `em` — emphasize part of a sentence (semantic emphasis)
- `mark` — highlight a keyword (like using a marker)
- `small` — for a disclaimer or small footnote text
- `del` — show removed/incorrect text
- `ins` — show inserted/corrected text (paired with `del`)
- `sub` — subscript for chemical formula numbers
- `sup` — superscript for exponents (e.g. 2³)

---

## Given paragraph (use this text — do not change meaning)
Coffee is one of the most popular drinks in the world. In Italy, people often enjoy espresso as a daily habit. Some research shows that coffee may improve focus and give more energy, but drinking too much can be harmful. Years ago, people believed coffee caused dehydration, but scientists later corrected this fact. The chemical formula of caffeine is C8H10N4O2, and in math 2³ equals 8.

---

## Requirements
- Create an HTML file: `index.html` inside the challenge folder.
- Use **all** of these tags at least once: `b`, `strong`, `i`, `em`, `mark`, `small`, `del`, `ins`, `sub`, `sup`.
- `del` and `ins` should form a meaningful correction pair (show a removed wrong fact and the inserted correct fact).
- Use `sub` for the numbers in the caffeine formula (e.g. C<span>&lt;sub&gt;8&lt;/sub&gt;</span>—see example below).
- Use `sup` for the exponent `3` in `2³`.
- Keep markup semantic — prefer `strong`/`em` when meaning/importance is intended; use `b`/`i` for presentation.

---

## Deliverables
- `index.html` — the article HTML using the required tags
- `README.md` — this file (already present)
- Optional: `solution.html` (only if you want to include a reference solution in a separate file or folder)

---

## Success checklist (self-verify)
- [ ] `index.html` exists in `challenges/Challenge-01-NewsArticleWithAnnotations/`
- [ ] All tags `b, strong, i, em, mark, small, del, ins, sub, sup` appear at least once
- [ ] `del` and `ins` show a correction (not random text)
- [ ] Caffeine chemical formula uses `sub` for numbers
- [ ] The exponent `2³` uses `sup` (e.g., `2<sup>3</sup>`)

---

## Example hints
- Chemical formula: `C8H10N4O2` → `C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>`
- Exponent: `2³` → `2<sup>3</sup>`
- Correction pair example: `<del>caused dehydration</del> <ins>did not cause dehydration</ins>`

---

## Notes
- Keep the HTML minimal and readable.
- No CSS required — focus on correct tag usage and semantic meaning.
- After finishing, commit to a feature branch using the suggested git workflow above.
