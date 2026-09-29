# Integration Map

| Capability | System | Link/Path | Access mechanism | Read test | Required? | Notes |
|---|---|---|---|---|---|---|
| Source code | IvanPohoriliak/pm-simulator (GitHub) | https://github.com/IvanPohoriliak/pm-simulator | Git clone (local) + GitHub MCP tools | PASS — src/App.jsx, src/screens/, src/data/ all readable | Yes | Local clone at /home/user/pm-simulator |
| Product baseline | README.md | /home/user/pm-simulator/README.md | Local filesystem | PASS — README.md read; conflict noted: says "3 weeks" but 12 weeks implemented in code | Yes | Conflict to be surfaced in Phase 3 |
| Work management | GitHub Issues | https://github.com/IvanPohoriliak/pm-simulator/issues | GitHub MCP tools (mcp__github__*) | PASS — GitHub MCP available; 0 existing issues | Required | Confirmed write capability via mcp__github__create_pull_request and related tools |

## Read-test rule

PASS means the AI successfully retrieved real content from the supplied source.

## Security

No credentials, tokens, or secrets stored here.
