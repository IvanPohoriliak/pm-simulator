---
name: requirements-impact
description: Identify affected functionality, files, data structures, and risks for a proposed PM Simulator change. Distinguishes confirmed from suspected impact.
---

# Impact Analysis

## Context
- Trusted sources: `team-generated/trusted-sources.md`
- Codebase scope: `team-generated/codebase-scope.md`
- Output language: English

## Inputs
- Confirmed request or approved spec;
- Investigation findings where available.

## Steps
1. Identify the changed behaviour.
2. Trace direct affected components (App.jsx, scenario-data.json, CSS, etc.).
3. Trace downstream/upstream interfaces and data flow.
4. Check data model impact (scenario-data.json structure).
5. Check UI impact where relevant.
6. Distinguish confirmed impact (evidence in code) from suspected impact (inferred).

## Output structure
- **Changed behaviour**
- **Confirmed impact** (with source references)
- **Suspected impact** (labelled — not confirmed)
- **Risks**
- **Unknowns**
- **Evidence references**

## PM Simulator specifics
- Key files to check: App.jsx, scenario-data.json, src/components/, src/styles/
- scenario-data.json structure changes are breaking for App.jsx — always flag as risk.
- README.md is documentation only — not authoritative for current runtime behaviour.
