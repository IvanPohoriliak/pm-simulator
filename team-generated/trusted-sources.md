# Trusted Sources Registry

| Source | Type | Link/Path | Purpose | Authority scope / priority | Freshness | Confirmed by BA | Execution copy of |
|---|---|---|---|---|---|---|---|
| pm-simulator GitHub repo | Git repository | https://github.com/IvanPohoriliak/pm-simulator | Full product codebase | Authoritative for current implementation | Live (origin) | Yes — Phase 3, 2026-09-29 | — |
| README.md | Product documentation | https://github.com/IvanPohoriliak/pm-simulator/blob/main/README.md | Product description, goals, tech stack, next steps | Authoritative for intended product behaviour (note: "3 weeks" claim is outdated — all 12 weeks implemented) | As of last commit | Yes — Phase 3, 2026-09-29 | — |
| Local clone at /home/user/pm-simulator | Local filesystem | /home/user/pm-simulator | Execution environment for setup and analysis | Execution copy only — no independent authority | Pinned to commit at session start | N/A | pm-simulator GitHub repo |

## Rules

- Discovered does not mean trusted.
- Every authoritative source must be confirmed by the BA.
- The local clone is an execution copy of the GitHub repo, not an independent source.
- No other sources exist for this project (confirmed by BA: no Jira, ADO, Notion, Drive, Figma, or other docs).
