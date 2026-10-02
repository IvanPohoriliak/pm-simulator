Status: Draft

# Intake: hidden consequences for weeks 4-12

## Request
BA (verbatim): "додати до симулятора приховані наслідки (hidden) для тижнів 4–12, щоб рішення з тижнів 1–3 впливали на пізніші тижні".

## Outcome (neutral words)
Weeks 4-12 of the simulator get `hidden` (delayed-consequence) content, so that decisions made in weeks 1-3 visibly affect later weeks.

## Users / problem
- Users: product managers playing the simulator (team.md, Product).
- Problem (only as far as sources say): README lists "Cumulative Effects: Early decisions affect later weeks" as a design principle (README.md:146), but weeks 4-12 have no `hidden` field, so that principle is not delivered beyond weeks 1-3 data.

## Scope
Explicit: add hidden consequences for weeks 4-12; weeks 1-3 decisions must influence later weeks.
Inferred (my reading, to confirm): 
- "hidden" = the same `hidden` option field that weeks 1-3 already have in `src/data/scenario-data.json`.
- Weeks 4-12 options (4 per week) each get one; weeks 1-3 content is not changed.
- Whether the effect is only text, or also changes metrics/options in later weeks, is not stated.

## Facts
- `scenario-data.json` top-level keys: projectBrief, weeks, finalReview (checked by loading the file; no line number).
- `hidden` appears only 12 times in the data file, at lines 89, 105, 121, 137, 188, 204, 220, 236, 287, 303, 319, 335 (grep -n) = 3 weeks x 4 options. Weeks 4-12 have none. Matches team.md.
- Hidden texts are written as forward references with a week number, e.g. line 89 "Week 4: Yana will tell you half-built features are blocking each other. Week 6: Team burnout begins."; line 137 "Week 11: You'll have 1 week buffer...".
- No UI code reads `hidden`: grep over `src` finds no use besides the data file (the only match, `src/utils/claudeAPI.js:62`, is the prompt phrase "hidden cost"). So today `hidden` is data only; I did not find where or whether it is shown to the player.
- `src/App.jsx:84` `if (currentWeek >= 12)` goes to the final review; `src/App.jsx:66-72` records decisionHistory (week, optionId, title).
- Prompt building in `src/utils/claudeAPI.js:20` and `:48` uses only `consequences.immediate`.
- README says "3 weeks" at line 128 (outdated; 12 weeks elsewhere, line 1).

## Assumptions (unconfirmed)
- Existing weeks 1-3 `hidden` texts are the model for the new ones in style.
- Content in English (team.md language).

## Unknowns
- How `hidden` is meant to reach the player (shown at the week named? revealed in the final review? only passed to Claude API?). Code does not show it.
- Whether weeks 4-12 decisions should also carry forward to later weeks (not only 1-3).
- Whether existing weeks 1-3 hidden promises (e.g. "Week 6", "Week 8", "Week 11") must actually come true in those weeks' content.

## Contradictions
- README says the game has 3 weeks (README.md:128) vs 12 weeks in README.md:1, data and App.jsx:84. Per team.md, code wins.
- Weeks 1-3 `hidden` texts promise events in weeks 4-12, but I have not yet checked that weeks 4-12 content contains them (to investigate).

## To investigate
1. Where `hidden` is (not) rendered; how decisionHistory is used by later weeks and by Claude prompts.
2. Weeks 4-12 content: scenarios, options, metrics, and whether weeks 1-3 hidden promises are already reflected.
3. Which weeks-1-3 options point to which later weeks (a map of 12 promises).
4. Existing Jira stories KAN-8 to KAN-12 for overlap (team.md says they were read).

## Decisions expected later (Clarify)
- Mechanism: text-only hidden vs. conditional later content vs. metric effects.
- When and how it is revealed to the player.
- Whether weeks 4-12 options also get `hidden`, and with what depth.
- Whether to fix README ("3 weeks") in this item.

## Blocking questions
None; the investigation can answer the next step.
