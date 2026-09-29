---
name: requirements-stories-ac
description: Break a BA-approved PM Simulator requirement spec into implementable stories with testable acceptance criteria. Stop for BA review before finalising.
---

# Stories and Acceptance Criteria

## Context
- Requirements rules: `team-generated/requirements-rules.md`
- Workflow gates: `team-generated/workflow-gates.md`
- Output language: English

## Preconditions
Use a BA-approved requirement specification. State clearly when working from a draft.

## Steps
1. Split by coherent user/business outcome — not arbitrary technical layers.
2. Keep dependencies visible between stories.
3. Write acceptance criteria that can be verified.
4. Use Given/When/Then style for AC (configured in `requirements-rules.md`).
5. Flag stories that remain too broad or depend on unresolved decisions.

## Default story output
- **Title**
- **User/business outcome** (who benefits and how)
- **Business value / context**
- **Scope**
- **Acceptance Criteria** (Given/When/Then)
- **Dependencies** (other stories or external)
- **Assumptions / unknowns**
- **Source / reference**

## PM Simulator specifics
- Reference scenario, week, metric, and decision terminology consistently.
- When AC involves metric changes: cite the metric name exactly (clientTrust, teamMood, techDebt, timelineRisk).
- Flag stories whose AC cannot be written until a BA decision is made.

## BA working checkpoint
After producing the draft: stop, show it to the BA, take comments, revise if needed, and wait for explicit BA approval before quality review or GitHub Issue creation.
