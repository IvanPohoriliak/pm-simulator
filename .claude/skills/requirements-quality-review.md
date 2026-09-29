---
name: requirements-quality-review
description: Review a PM Simulator requirement artifact for correctness, completeness, clarity, consistency, testability, and traceability. Report findings to BA — no automatic fixes.
---

# Requirement Quality Review

## Context
- Trusted sources: `team-generated/trusted-sources.md`
- Requirements rules: `team-generated/requirements-rules.md`
- Ready for Development: `team-generated/ready-for-development.md`
- Output language: English

## Review dimensions
- Business correctness against trusted sources (README.md, scenario-data.json, App.jsx)
- Completeness for a GitHub Issue (title, description, AC)
- Clarity and ambiguity
- Internal consistency
- Testability of acceptance criteria
- Dependency / impact coverage
- Unsupported assumptions
- Contradictions (including README "3 weeks" vs 12-week implementation)
- Traceability / source coverage
- Compliance with `requirements-rules.md`

## Finding levels
- **CRITICAL** — factual contradiction, missing decision, or quality failure that prevents a reliable artifact
- **WARNING** — material quality risk
- **IMPROVEMENT** — optional refinement

Mark a finding as a workflow blocker only when a confirmed team rule makes it blocking. Do not invent a Definition of Ready (none is defined for this team).

## For every finding include
- Evidence / reason
- Concrete correction suggestion
- When fixing requires a business decision: ask for that decision instead of inventing an answer

## Output
Findings listed CRITICAL first, then WARNING, then IMPROVEMENT. Findings reported to BA — no automatic changes to the reviewed artifact.
