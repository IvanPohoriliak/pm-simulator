# Workflow Gates

## Team gate map

| Workflow stage | AI may do automatically | BA working checkpoint (default) | Organizational gate | Approver/role | Blocking? | Evidence / source |
|---|---|---|---|---|---|---|
| Requirement Intake | Structure request, identify gaps and assumptions, label facts/unknowns | On — BA reviews intake summary before proceeding | None | N/A | N/A | Solo project; no organizational approval process |
| Investigation | Search confirmed sources, inspect code/docs, summarize existing behaviour, surface conflicts | Off — findings reported, no checkpoint | None | N/A | N/A | Solo project |
| Clarification | Generate questions, options, tradeoffs | On — BA answers questions; answers become facts only when confirmed | None (BA is the sole decision-maker) | BA | Yes — blocking questions must be resolved | Solo project |
| Specification | Draft requirement specification | On — draft → BA comments → revise → BA approval before stories/AC | None | N/A | N/A | Solo project |
| Stories & Acceptance Criteria | Draft decomposition and Given/When/Then AC | On — draft → BA comments → revise → BA approval before quality review | None | N/A | N/A | Solo project |
| Quality Review | Check completeness, contradictions, traceability and readiness gaps | Off — findings reported to BA only | None | N/A | N/A | Solo project; assistant is the only quality gate |
| Ready for Development | Run readiness assessment, report gaps | Off — report shown to BA | None (no formal DoR) | N/A | N/A | No formal DoR defined; team confirmed |
| Publish / Update Work Items | Format approved story as GitHub Issue | On — BA approves each individual issue text before any write | None beyond BA approval | BA | Yes — explicit per-issue approval required | GitHub MCP tools available; one issue = one approval |

## BA working checkpoints

These are collaboration points between the BA and the Assistant — not organizational approvals. On by default for intake, specification, and stories/AC.

| Checkpoint | Default | Description |
|---|---|---|
| After intake | On | Assistant stops, shows intake summary; BA reviews and approves or comments; proceeds only after BA approval |
| After specification draft | On | Assistant stops, shows spec draft; BA reviews and approves or comments; stories/AC do not start until approved |
| After stories/AC draft | On | Assistant stops, shows stories/AC draft; BA reviews and approves or comments; quality review does not start until approved |

## Additional team-specific gates

None confirmed.
