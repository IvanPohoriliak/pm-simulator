# Capability Profile

| Capability | Status | Evidence / Reason |
|---|---|---|
| Requirement intake/structuring | Required | Solo PM needs help structuring ideas into GitHub Issues; main entry point for all requirements work |
| Existing behaviour investigation | Required | Essential before specifying anything — must check what's already implemented (12 weeks, scenario mechanics, App.jsx routing, metrics logic) |
| Documentation investigation | Required | README.md and scenario-data.json are the primary sources; need to inspect them when writing specs |
| Codebase investigation | Required | Covered by existing-behaviour skill (same building block: `investigate-existing-behaviour`) |
| Impact/dependency analysis | Optional | Useful when changing scenario-data.json or metrics logic — changes can cascade; not always needed |
| Clarification questions | Required | Solo project — no colleague to sanity-check with; assistant fills that role |
| Requirement specification | Required | Core purpose of the assistant |
| Stories + acceptance criteria | Required | Final output format for GitHub Issues |
| Quality review | Required | No second reviewer on solo project; assistant is the only quality gate |
| Ready for Development | Optional | No formal DoR; assistant can still run a readiness check and report gaps before implementation starts |
| UX investigation | Not needed | No design files; solo project; UI decisions made directly by BA |
| Architecture consultation | Not needed | Simple React app; no dedicated architect; BA makes architecture decisions |
| Publish to work management | Required | GitHub Issues is the confirmed destination; **no ready building block exists** (see note below) |

## Note on Publish to work management

The INSTALL.md building-block map shows "none" for this capability in both Native and BMAD providers. It can be enabled only as a **newly drafted skill** that goes through Gate F sign-off and validation like any other. The draft skill will use the GitHub MCP tools available in this environment to create/update GitHub Issues, with every write behind a BA working checkpoint.

## Status semantics

- **Required** — must have an installed and verified execution route before setup can pass.
- **Optional** — useful but not required; if installed, treated exactly like Required for Gate F and validation coverage.
- **Not needed** — not installed or routed.
