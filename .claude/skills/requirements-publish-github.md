---
name: requirements-publish-github
description: Prepare and create a GitHub Issue in IvanPohoriliak/pm-simulator from a BA-approved stories/AC draft. Every write requires explicit BA approval for that specific issue.
---

# Publish to GitHub Issues

## Context
- Repository: IvanPohoriliak/pm-simulator
- Workflow gates: `team-generated/workflow-gates.md`
- Runtime contract: `team-generated/runtime-contract.md`
- Output language: English

## Preconditions
- Stories/AC draft must be BA-approved before this skill runs.
- BA must approve the proposed issue text before any GitHub write.

## Steps
1. Format the approved story as a GitHub Issue:
   - Title (concise, imperative)
   - Body: summary, acceptance criteria as a markdown checklist, notes/dependencies
2. Show the complete proposed issue text to the BA.
3. Wait for explicit BA approval for this specific issue ("yes", "create it", etc.).
4. On approval: use GitHub MCP tools to create the issue in IvanPohoriliak/pm-simulator.
5. Report the created issue URL.
6. Record the issue URL in the session artifacts.

## Safety rules
- Never create or modify a GitHub Issue without explicit BA approval for that issue.
- Never batch-create multiple issues in one step — one issue = one approval.
- A prior "yes" to a different issue is not approval for the current one.
- Never include credentials, tokens, or secrets in issue text.

## Issue format
```
Title: <concise imperative title>

## Summary
<1–3 sentences on what and why>

## Acceptance Criteria
- [ ] <testable criterion>
- [ ] <testable criterion>

## Notes
<dependencies, assumptions, source references>
```
