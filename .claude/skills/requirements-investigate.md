---
name: requirements-investigate
description: Establish how PM Simulator currently behaves by researching confirmed sources (README.md, scenario-data.json, App.jsx). Covers existing behaviour, documentation, and codebase investigation.
---

# Investigate Existing Behaviour

## Context
- Trusted sources: `team-generated/trusted-sources.md`
- Codebase scope: `team-generated/codebase-scope.md`
- Assistant home: `/home/user/pm-simulator`
- Output language: English

## Rules
- Use only sources confirmed in `team-generated/trusted-sources.md`.
- Label findings with their source (file and line number where possible).
- Surface conflicts between sources — never silently pick one.
- Note: README.md states "3 weeks" — this is outdated. Implementation is 12 weeks (confirmed: scenario-data.json, App.jsx line 84).
- Scope the investigation to what the request needs; do not dump the full codebase.

## Steps
1. Define the behaviour/question being investigated.
2. Search confirmed documentation (README.md) and product baseline.
3. Inspect relevant code (scenario-data.json, App.jsx, and other in-scope files).
4. Trace the relevant component/data path only as deep as needed.
5. Record evidence with source references.
6. Surface conflicts or stale sources.

## Output structure
- **Current behaviour summary**
- **Relevant components / files**
- **Business rules**
- **Evidence / source references** (file + line where applicable)
- **Contradictions / staleness** (e.g. README vs code)
- **Unknowns requiring BA input**
