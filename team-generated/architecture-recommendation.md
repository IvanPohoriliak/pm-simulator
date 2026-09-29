# Architecture Recommendation

## Recommendation
- Recommended: **Native**

## Functional reasons
- Solo project with low workflow complexity — BMAD's multi-agent/multi-role orchestration provides no practical benefit
- No UX investigation or architecture consultation needed (BMAD's main differentiators vs. Native)
- All 7 Required capabilities have Native building blocks; the one capability without a building block (GitHub Issues publish) requires a new skill regardless of provider
- Simple linear workflow: intake → investigate → clarify → specify → stories/AC → quality check → publish; no branching orchestration needed
- Primary goal is requirements work up to Ready for Development — exactly the Native sweet spot

## Technical feasibility
- Environment support: Claude Code — Native adapter is Verified (defined in ENVIRONMENT-ADAPTERS.md)
- Installation/configuration feasibility: High — scoped project skills install without external approvals
- Existing setup conflicts: None (no existing CLAUDE.md, no existing .claude/ directory)
- Known limitations: ASSISTANT_HOME is a shared development repo, not a dedicated requirements workspace. Native will install scoped skills under `.claude/skills/` to avoid making requirements instructions always-on for all Claude Code tasks in this repo. CLAUDE.md will be created only with a minimal reference to the Requirements Assistant, not full always-on instructions.

## Footprint
- What gets added: ~10 scoped skill files under `.claude/skills/requirements-*/`, one CLAUDE.md (minimal router reference), and `team-generated/` artifacts already in place. Total: approximately 10–12 files, one-time.
- Side effects: No unrelated capabilities installed. No framework added. Each file corresponds directly to an enabled capability.

## Alternative
- Option: BMAD-based
- Main tradeoff: Installs the full BMAD framework (potentially hundreds of files) to gain capabilities (UX, architecture orchestration, multi-agent planning) that are explicitly Not Needed for this solo project. No functional advantage for PM Simulator's confirmed capability set.

## Human choice
- Chosen architecture: Native
- Decision: "native"
- Date/context: BA, 2026-09-29 (Gate D)
