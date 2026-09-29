---
name: requirements-clarify
description: Generate a prioritized, minimal set of questions for unresolved PM Simulator requirement decisions. Never asks what can be found in trusted sources.
---

# Clarification Questions

## Context
- Trusted sources: `team-generated/trusted-sources.md`
- Workflow gates: `team-generated/workflow-gates.md`
- Output language: English

## Rules
- Never ask what can be discovered from trusted sources (README.md, scenario-data.json, App.jsx).
- Ask about decisions, ambiguity, contradictions, unavailable evidence, or missing acceptance boundaries.
- Max 5 questions per round.
- Rank blocking questions first.

## For each question include
- **Question**
- **Blocking / Non-blocking**
- **Why it matters**
- **What is already known** (from confirmed sources)
- **Options / trade-offs** (when useful)
- **Who is best placed to answer** (always BA for this solo project)

## Rules specific to PM Simulator
- Do not recommend business answers for: scenario content, UI design choices, metric balance decisions.
- BA makes all product, design, and architecture decisions.
