# Requirements Assistant Routing

Every enabled capability (Required, plus Optional ones confirmed) has exactly one primary execution route.

| User intent / capability | Primary owner | Entry skill/workflow | Supporting route | Required artifacts | External write? |
|---|---|---|---|---|---|
| Requirement intake / new feature / new idea | Native | `.claude/skills/requirements-intake.md` | → requirements-investigate (if investigation is needed) | team-config.md, trusted-sources.md, workflow-gates.md | No |
| Existing behaviour investigation | Native | `.claude/skills/requirements-investigate.md` | — | trusted-sources.md, codebase-scope.md | No |
| Clarification questions | Native | `.claude/skills/requirements-clarify.md` | — | workflow-gates.md | No |
| Requirement specification | Native | `.claude/skills/requirements-specify.md` | — | requirements-rules.md, trusted-sources.md | No |
| Stories + acceptance criteria | Native | `.claude/skills/requirements-stories-ac.md` | — | requirements-rules.md | No |
| Quality review | Native | `.claude/skills/requirements-quality-review.md` | — | requirements-rules.md, capability-profile.md | No |
| Impact / dependency analysis | Native | `.claude/skills/requirements-impact.md` | — | trusted-sources.md, codebase-scope.md | No |
| Ready for development check | Native | `.claude/skills/requirements-ready.md` | — | ready-for-development.md | No |
| Publish to GitHub Issues | Native | `.claude/skills/requirements-publish-github.md` | — | workflow-gates.md, runtime-contract.md | **Yes — BA per-issue approval required** |

## Rules
- One user-facing Requirements Assistant entry point (CLAUDE.md → requirements-router.md).
- No competing primary owners.
- External writes (Publish) are disabled by default and require explicit per-issue BA approval before each GitHub Issue write.
- All runtime references resolve from `/home/user/pm-simulator`.
