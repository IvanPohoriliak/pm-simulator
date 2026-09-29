# Trusted Sources Registry

| Source | Type | Link/Path | Purpose | Authority scope / priority | Freshness | Confirmed by BA | Execution copy of |
|---|---|---|---|---|---|---|---|
| IvanPohoriliak/pm-simulator (GitHub) | Git repository | https://github.com/IvanPohoriliak/pm-simulator | Sole codebase — all product source files | Authoritative for current implementation behaviour | Live (default branch: main) | Pending Phase 5 confirmation | — |
| README.md | Documentation | /home/user/pm-simulator/README.md | Product intent, user-facing description, setup instructions | Authoritative for intended business behaviour (conflict: says "3 weeks" but implementation is 12 weeks — code wins for current behaviour) | As of last commit | Pending Phase 5 confirmation | — |
| Local clone (/home/user/pm-simulator) | Execution copy | /home/user/pm-simulator | AI execution context for reading code | Execution copy of IvanPohoriliak/pm-simulator (GitHub) | Pinned to session clone commit | N/A — inherits parent source authority | IvanPohoriliak/pm-simulator (GitHub) |

## Rules

- Discovered does not mean trusted.
- Every authoritative source must be confirmed by the BA.
- Authority may be topic-specific.
- A local clone inherits the identity and authority of its parent source.
