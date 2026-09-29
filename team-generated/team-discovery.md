# Team Discovery

## Confirmed facts

| Fact | Evidence/source or human decision |
|---|---|
| Team structure | Solo project — single person owns product, design, development, and requirements | Human decision (BA, 2026-09-29) |
| Final requirement location | GitHub Issues (IvanPohoriliak/pm-simulator) | Human decision (BA, 2026-09-29) |
| Formal Definition of Ready criteria | Not defined | Human decision (BA, 2026-09-29) |
| Product name | PM Simulator | README.md (confirmed Phase 3) |
| Product type | Interactive web simulator for PM skill-building | README.md (confirmed Phase 3) |
| Primary users | Product Managers | README.md (confirmed Phase 3) |
| Tech stack | React 18, Vite, Claude API, Vanilla CSS | src/package.json, src/App.jsx |
| Content scope | 12 weeks of simulation content, all implemented | scenario-data.json + App.jsx line 84 |
| README states "3 weeks" | README is outdated — all 12 weeks are in data and code | scenario-data.json (12 week entries), App.jsx (`if (currentWeek >= 12)`) |
| Scenario | Single scenario: Subflow (B2B SaaS analytics startup, 12-week MVP project) | scenario-data.json |
| Work item tracking | No formal tracker in use | GitHub Issues: 0 open; BA confirmed no Jira/ADO |
| Approval process | None — solo project | Human decision (BA, 2026-09-29) |
| Estimates/priority/release scope | Not in scope for the Assistant | Inferred from solo/informal process |

## Candidate evidence pending authority confirmation

| Candidate | Source | Why relevant |
|---|---|---|
| Requirement types: new scenario weeks, AI prompt improvements, UI/UX changes, bug fixes | README.md "Next Steps" section | Identifies the main categories of future work |
| No design system or Figma files | No design assets found in repo; CSS is inline | Affects UX investigation capability |

## Human decisions

| Decision | Decided by / source |
|---|---|
| Solo project | BA, 2026-09-29 |
| Requirements go in GitHub Issues | BA, 2026-09-29 |
| No formal DoR criteria | BA, 2026-09-29 |
| Output language: English | BA, 2026-09-29 |

## Unknowns

| Unknown | Blocking for setup? | Who/what can resolve it |
|---|---|---|
| BA working checkpoints — which to keep, add, or remove | No — defaults applied; BA confirms at Gate B | BA at Gate B |

## Team requirement practices

- Work item hierarchy: Informal — ideas → GitHub Issues (no epics/stories hierarchy defined)
- Final requirement location: GitHub Issues
- Requirement templates: None found
- Good historical examples: None in tracker; scenario-data.json weeks serve as implicit implementation spec
- Formal Ready for Development criteria: Not defined
- UX involvement: Solo — no dedicated designer; decisions made by the BA
- Architecture involvement: Solo — no dedicated architect; decisions made by the BA
- Typical dependencies: External API (Claude API) — main external dependency
- Approval points: None — solo project
- Expected publication destination: GitHub Issues
- Estimates/priority/release scope: Not in scope for the Assistant
