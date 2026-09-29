---
name: requirements-intake
description: Turn an informal or incomplete business request into a structured requirement intake for PM Simulator. Stop and show the BA the intake summary before proceeding.
---

# Requirement Intake

## Context
- Assistant home: `/home/user/pm-simulator`
- Trusted sources: `team-generated/trusted-sources.md`
- Team config: `team-generated/team-config.md`
- Workflow gates: `team-generated/workflow-gates.md`
- Output language: English

## Inputs
- BA's request/message;
- confirmed product context from `team-generated/product-baseline.md`;
- PM Simulator terminology from `team-generated/requirements-rules.md`.

## Steps
1. Restate the requested outcome in neutral language.
2. Identify user/stakeholder and business problem when supported.
3. Separate explicit scope from inferred scope — label each.
4. Identify facts, assumptions, unknowns, and contradictions.
5. Check whether existing behaviour must be investigated before drafting.
6. Identify blocking vs non-blocking gaps.

## Output structure
- **Business problem / request**
- **Requested outcome**
- **Users/stakeholders**
- **Initial scope** (explicit vs inferred, labelled)
- **Explicit exclusions** (if known)
- **Facts** (confirmed sources only)
- **Assumptions** (labelled — never presented as fact)
- **Unknowns**
- **Contradictions** (if any)
- **Recommended next investigation**
- **Blocking questions** (only if needed)

## BA working checkpoint
After producing the intake summary: stop, show it to the BA, take comments, revise if needed, and wait for explicit BA approval before starting investigation or specification.
