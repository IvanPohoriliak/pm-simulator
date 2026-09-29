---
name: requirements-specify
description: Draft a requirement specification for PM Simulator using confirmed intake, investigation findings, and BA decisions. Stop for BA review before finalising.
---

# Requirement Specification

## Context
- Trusted sources: `team-generated/trusted-sources.md`
- Requirements rules: `team-generated/requirements-rules.md`
- Workflow gates: `team-generated/workflow-gates.md`
- Output language: English

## Preconditions
- Work from a BA-approved intake summary.
- Do not finalise while critical blocking decisions remain unresolved — produce a draft with blockers clearly marked.

## Build from
- Approved intake summary;
- Investigation findings (if run);
- Confirmed BA decisions from clarification;
- Impact analysis (if run);
- PM Simulator terminology (scenario, week, metric, decision).

## Default structure
- **Objective / business outcome**
- **Current behaviour** (with source references)
- **Proposed behaviour**
- **Scope**
- **Out of scope**
- **Business rules**
- **Functional requirements**
- **Dependencies**
- **Assumptions** (labelled — never presented as fact)
- **Unknowns / blockers** (clearly marked)
- **Source references**

Skip sections that add no value for the specific requirement. Do not add sections purely to fill the template.

## BA working checkpoint
After producing the draft: stop, show it to the BA, take comments, revise if needed, and wait for explicit BA approval before moving to stories/AC.
