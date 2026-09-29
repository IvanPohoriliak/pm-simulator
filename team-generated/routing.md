# Requirements Assistant Routing

Every enabled capability (Required, plus Optional ones the BA enabled) must have exactly one primary execution route.

| User intent / capability | Primary owner | Entry skill | Supporting route | Required artifacts | External write? |
|---|---|---|---|---|---|
| Requirement intake / structure a new idea | Assistant | `.claude/skills/requirements-intake.md` | — | `trusted-sources.md`, `team-config.md`, `workflow-gates.md` | No |
| Investigate existing behaviour | Assistant | `.claude/skills/requirements-investigate.md` | — | `trusted-sources.md`, `codebase-scope.md` | No |
| Investigate documentation | Assistant | `.claude/skills/requirements-investigate.md` | — | `trusted-sources.md` | No |
| Investigate codebase | Assistant | `.claude/skills/requirements-investigate.md` | — | `trusted-sources.md`, `codebase-scope.md` | No |
| Ask clarification questions | Assistant | `.claude/skills/requirements-clarify.md` | — | `workflow-gates.md` | No |
| Write a requirement specification | Assistant | `.claude/skills/requirements-specify.md` | Intake summary must be BA-approved first | `requirements-rules.md`, `workflow-gates.md` | No |
| Break into stories and acceptance criteria | Assistant | `.claude/skills/requirements-stories-ac.md` | Specification must be BA-approved first | `requirements-rules.md`, `workflow-gates.md` | No |
| Quality review | Assistant | `.claude/skills/requirements-quality-review.md` | — | `requirements-rules.md`, `trusted-sources.md` | No |
| Publish to GitHub Issues | Assistant (with BA approval) | `.claude/skills/requirements-publish-github.md` | Stories/AC must be BA-approved first | `workflow-gates.md` | **Yes — BA approval required per issue** |
| Impact / dependency analysis | Assistant | `.claude/skills/requirements-impact.md` | — | `trusted-sources.md`, `codebase-scope.md` | No |
| Ready for Development check | Assistant | `.claude/skills/requirements-ready.md` | — | `ready-for-development.md` | No |

## Rules
- One user-facing Requirements Assistant entry point (the router in CLAUDE.md).
- No competing primary owners — all capabilities owned by Assistant, with BA approval gates as configured.
- External writes (GitHub Issues) are disabled by default and require explicit BA approval per write.
- All runtime references resolve from the Assistant home: `/home/user/pm-simulator`.
