# Workflow Gates

This file defines where human confirmation or approval is required in the requirements workflow for PM Simulator.

## Rules applied

- Solo project: no organizational approvers or blocking org gates.
- Requirements publish to GitHub Issues; every write requires BA approval.
- No formal DoR — the Assistant reports readiness assessments but implies no approval process.
- BA working checkpoints are on by default for Intake, Specification, and Stories/AC (BA confirms at Gate B).

## Team gate map

| Workflow stage | AI may do automatically | BA working checkpoint (default on) | Organizational gate | Approver/role | Blocking? | Evidence / source |
|---|---|---|---|---|---|---|
| Requirement Intake | Structure request, identify gaps and assumptions, draft intake summary | **On** — BA reviews intake summary before proceeding | None | N/A | N/A | Solo project; human decision Gate B |
| Investigation | Search confirmed sources, inspect code, summarize existing behaviour | Off — findings reported to BA | None | N/A | N/A | Solo project |
| Clarification | Generate questions, options, trade-offs | **On** — BA answers questions; answers become facts only when confirmed | None | N/A | N/A | Solo project |
| Specification | Draft requirement specification | **On** — draft → BA comments → revise → BA approval | None | N/A | N/A | Solo project; human decision Gate B |
| Stories & Acceptance Criteria | Draft decomposition and testable AC | **On** — draft → BA comments → revise → BA approval | None | N/A | N/A | Solo project; human decision Gate B |
| Quality Review | Check completeness, contradictions, traceability and readiness gaps | Off — findings reported to BA | None | N/A | N/A | Solo project |
| Ready for Development | Run readiness assessment and report status | Off — assessment reported to BA; no formal approval process | None | N/A | N/A | No formal DoR (BA confirmed); human decision Gate B |
| Publish to GitHub Issues | Prepare proposed issue text | **On** — BA approves each write before any GitHub Issue is created or modified | None | BA (solo) | Yes | Solo project; BA decision; environment permission model |

## Additional team-specific gates

None confirmed.

## BA working checkpoints (on by default)

The Assistant stops, shows draft to BA, takes comments, revises, and waits for BA approval before starting the next dependent stage:

1. After Intake — before investigation or specification
2. After Specification draft — before stories/AC
3. After Stories/AC draft — before quality review or GitHub Issue creation

BA may keep, add, or switch off any checkpoint at Gate B.
