# Architecture Recommendation

## Recommendation
- Recommended: **Native**

## Functional reasons
- Solo PM project with a simple linear requirements workflow (intake → investigate → clarify → spec → stories/AC → quality → publish)
- No UX or architecture consultation roles — those capabilities are Not needed
- No multi-agent orchestration benefit: one BA, one workflow
- All 7 Required capabilities have Native building blocks; only Publish to GitHub Issues needs a newly drafted custom skill (same for BMAD)
- Lightweight scoped skills are a better fit than a full planning framework for this use case

## Technical feasibility
- Environment support: Claude Code (cloud/remote) with CLAUDE.md + .claude/skills/ — fully supported per ENVIRONMENT-ADAPTERS.md
- Installation/configuration feasibility: Fully automated; no manual steps required
- Existing setup conflicts: None (existing v3.9 skills will be replaced by this v3.10 fresh setup)
- Known limitations: None

## Footprint
- What gets added: ~10 skill files in .claude/skills/ + CLAUDE.md entry point + 16 team-generated configuration files. No framework installed.
- Side effects: No unrelated capabilities installed. Only the capabilities confirmed in the capability profile are added.

## Alternative
- Option: BMAD-based
- Main tradeoff: BMAD installs a larger framework (~hundreds of files module-wide) for a solo project that needs only linear requirements workflow. No UX/architecture orchestration is needed, so BMAD's multi-agent value would not be realized. Unrelated BMAD capabilities would be installed on disk even if unused.

## Human choice
- Chosen architecture: Native
- Decision: Confirmed — "підтверджую"
- Date/context: 2026-09-29, consolidated Gate D confirmation
