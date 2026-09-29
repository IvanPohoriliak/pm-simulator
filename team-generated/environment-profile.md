# Environment Profile

- AI environment / surface: Claude Code (cloud/remote session)
- Environment adapter status: Verified
- Adapter used: Claude Code — CLAUDE.md project instructions + .claude/skills/ project skills
- Adapter verification evidence: CLAUDE.md root-level entry point confirmed; .claude/skills/ directory exists and is loaded by Claude Code as invocable skills; both documented in providers/native/ENVIRONMENT-ADAPTERS.md
- Version if observable: Claude Code (web / remote container)
- Assistant home: /home/user/pm-simulator
- Dedicated requirements workspace or shared development repo: Shared development repo (sole PM — no overlap risk)
- Terminal/shell: Available
- Filesystem write: Available
- Git/repository access: Available (IvanPohoriliak/pm-simulator, GitHub MCP tools)
- Workspace persistence: Ephemeral (cloud container — files written locally are lost when session ends)
- Existing project instructions: CLAUDE.md (present; router reference from v3.9 setup)
- Existing skills/agents: .claude/skills/requirements-*.md (10 skills from v3.9 setup)
- Existing BMAD: No
- Permission/approval mode if observable: Auto (default dontAsk)
- Limitations/blockers: None

## Integration capability summary

| System | Type | Status | Notes |
|---|---|---|---|
| IvanPohoriliak/pm-simulator | GitHub repository (local clone + GitHub MCP) | Available | Git access confirmed; GitHub MCP tools available |
| README.md | Local documentation | Available | Readable from clone |
| GitHub Issues | Work management write | Available via MCP | mcp__github__* tools present |
