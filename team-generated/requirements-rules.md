# Requirements Rules

## Status
- Team-specific rules confirmed: Partial (baseline Accelerator rules + team-confirmed rules below)

## Accelerator baseline rules

- Do not invent missing information.
- Mark unknown information explicitly.
- Separate facts, assumptions, and decisions.
- Cite or reference material sources when available.
- Do not silently choose the authoritative source; authority must be confirmed by a human.
- Surface contradictions between trusted sources.
- Identify affected systems and dependencies when relevant.
- Make acceptance criteria testable when acceptance criteria are part of the configured requirement type.
- Do not hide blocking questions.
- Do not change business scope, priority, estimates, commitments, or release decisions independently.
- Do not bypass a configured human approval for Ready for Development. If no such approval exists, do not invent one.
- Do not publish changes to work management tools without the configured permission/approval model.

## Team-confirmed rules

| Rule | Applies to | Blocking? | Source / human decision |
|---|---|---|---|
| Code wins over README.md for current behaviour when they conflict | All investigation, specification | Yes | Product baseline conflict confirmed by BA 2026-09-29 |
| No batch-create of GitHub Issues — one issue = one BA approval | Publish | Yes | Workflow gates confirmed by BA 2026-09-29 |
| Output language: English | All BA-facing outputs | Yes | Team discovery confirmed by BA 2026-09-29 |

## Requirement-type rules

| Requirement type | Required structure/template | Acceptance criteria style | Additional rules | Source |
|---|---|---|---|---|
| User story | Title + Description + Acceptance Criteria | Given/When/Then | None additional | Team discovery |

## Terminology / conventions

| Term / convention | Meaning / usage | Source |
|---|---|---|
| PM Simulator | The product — an interactive project management simulation game | README.md |
| Week | Simulation week (1–12) — not a calendar week | Codebase (App.jsx) |
| CSAT / Velocity / Scope / Burn Rate | The four simulation metrics tracked per week | Codebase (metrics logic) |
| Scenario | A structured challenge event in the simulation | scenario-data.json |

## Explicit exclusions

- Do not set or change story points, estimates, sprint assignments, or priority without explicit BA decision.
- Do not mark any item Ready for Development — no formal DoR is defined; the quality-review skill reports gaps but issues no formal verdict.
- Do not create or modify GitHub Issues without explicit per-issue BA approval.
- Do not rely on README.md as authoritative for current implementation behaviour (use codebase instead).
