# Environment Profile

- AI environment / surface: Claude Code (cloud remote session, claude.ai/code)
- Environment adapter status: Verified
- Adapter used: Claude Code adapter — project skills via `.claude/skills/`, project memory via `CLAUDE.md`
- Adapter verification evidence: Claude Code is a listed supported environment in `providers/native/ENVIRONMENT-ADAPTERS.md`; shell, filesystem write, and Git access confirmed functional in this session
- Version if observable: claude-sonnet-4-6 (model), Claude Code CLI
- Assistant home: /home/user/pm-simulator (GitHub: IvanPohoriliak/pm-simulator)
- Dedicated requirements workspace or shared development repo: Shared development repository (contains application source code)
- Terminal/shell: Available
- Filesystem write: Available
- Git/repository access: Available (origin: https://github.com/IvanPohoriliak/pm-simulator)
- Workspace persistence: Ephemeral (cloud container — files written locally are lost when session ends; G1 approved for working branch persistence)
- Working branch: claude/determined-heisenberg-ldimz4
- Existing project instructions: None (no CLAUDE.md, AGENTS.md, or .claude/ directory)
- Existing skills/agents: None
- Existing BMAD: No
- Permission/approval mode if observable: Auto (dontAsk)
- Limitations/blockers: None

## Integration capability summary

| Capability | Status | Notes |
|---|---|---|
| GitHub (source) | Available | Git access confirmed; GitHub MCP tools available in session |
| Filesystem | Available | Read/write confirmed |
| Google Drive | Available (session) | Google Drive MCP tools present in this session |
| Jira | Unknown | Not checked yet |
| Azure DevOps | Unknown | Not checked yet |
| Confluence | Unknown | Not checked yet |
| Local files | Available | Filesystem access confirmed |
