# Requirements Rules

## Status
- Team-specific rules confirmed: No

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
| Not defined | — | — | — |

## Requirement-type rules

| Requirement type | Required structure/template | Acceptance criteria style | Additional rules | Source |
|---|---|---|---|---|
| GitHub Issue | Title + description + acceptance criteria | Testable Given/When/Then or checklist | — | BA confirmed (Gate B) |

## Terminology / conventions

| Term / convention | Meaning / usage | Source |
|---|---|---|
| BA | The solo product owner / requirements author for PM Simulator | BA, 2026-09-29 |
| Week | One simulation week in PM Simulator (1–12) | scenario-data.json |
| Scenario | A named simulation run (only one: "Subflow") | scenario-data.json |
| Metric | One of: clientTrust, teamMood, techDebt, timelineRisk | App.jsx |

## Explicit exclusions

- The Assistant must not set or change priority, estimates, or release commitments.
- The Assistant must not publish GitHub Issues without explicit BA approval per issue.
- The Assistant must not invent UX design decisions (solo BA makes all UI choices).
- The Assistant must not invent architecture decisions (solo BA makes all architecture choices).
