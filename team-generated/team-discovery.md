# Team Discovery

## Confirmed facts

| Fact | Evidence/source or human decision |
|---|---|
| Solo PM project — no team members | GitHub repo: single contributor (IvanPohoriliak); no collaborators observed |
| GitHub Issues = final requirement destination | GitHub Issues is the only work management system linked to this repo |
| No formal Definition of Ready criteria | Human decision (confirmed Phase 3; no DoR doc found in repo) |
| No UX design files or dedicated UX role | No design directory in repo; solo project; UI decisions made directly by BA |
| No dedicated architecture role | Simple React SPA; BA makes architecture decisions |
| Product uses 4 metrics: clientTrust, teamMood, techDebt, timelineRisk | App.jsx:18-23 (confirmed) |
| 12-week simulation (not 3) | App.jsx:84; scenario-data.json (README conflict confirmed — 12 weeks is correct) |
| 1 scenario currently ("Subflow") | scenario-data.json (confirmed) |
| Requirement type: GitHub Issue (title + description + AC) | Confirmed by team practice — no other format used |
| Output language for artifacts: English | Human decision (confirmed Phase 0) |

## Candidate evidence pending authority confirmation

| Candidate | Source | Why relevant |
|---|---|---|
| — | — | — |

## Human decisions

| Decision | Decided by / source |
|---|---|
| English for all generated artifacts | BA (Phase 0) |
| README.md = authoritative for business intent | BA (Phase 3) |
| Code = authoritative for current implementation | BA (Phase 3) |
| BA working checkpoints active (intake, spec, stories/AC) | Default per runtime contract; confirmed at Gate B |

## Unknowns

| Unknown | Blocking for setup? | Who/what can resolve it |
|---|---|---|
| — | — | — |

## Team requirement practices
- Work item hierarchy: Single GitHub Issue per requirement (no epics/sprints in use)
- Final requirement location: IvanPohoriliak/pm-simulator GitHub Issues
- Requirement templates: None formal; convention is title + description + acceptance criteria
- Good historical examples: None available (0 existing issues at setup time)
- Formal Ready for Development criteria: Not defined
- UX involvement: None
- Architecture involvement: None
- Typical dependencies: Changes to scenario-data.json may cascade to App.jsx; new screens require routing updates in App.jsx
- Publication destination: GitHub Issues (IvanPohoriliak/pm-simulator)
- Estimates/priority/release scope: Out of scope for this Assistant
