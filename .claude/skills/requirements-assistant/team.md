# Team profile

The Requirements Assistant reads this file at the start of every session. The BA may edit it at any time, or ask the assistant to; such edits need no separate re-approval. The `Trial mode` line is a service field set by setup, not part of the approved profile.

Status: Draft
Trial mode: OFF   (set to ON only during validation; the assistant never writes outside while ON)

## Setup choice
- Approach: BMAD

## Product
- Name: PM Simulator
- What it is: An interactive simulation game where users experience a 12-week software project in ~30 minutes by making irreversible PM decisions. Four metrics are tracked: Client Trust, Team Mood, Tech Debt, Timeline Risk. Claude API generates AI feedback after each decision. Currently MVP with 3 weeks implemented; weeks 4–12 are planned next steps.
- Users: Product Managers (validated with 10 PM testers)
- Team terms:

## Trusted sources

| Source | Where (link or path) | Trusted for | Notes (e.g. outdated parts) |
|---|---|---|---|
| Code | this repository | current behaviour | |
| Jira KAN | https://ipogorilyak.atlassian.net/jira/software/projects/KAN/boards/1 | existing stories and requirements | |

Unless stated otherwise, the code is the truth for how the product behaves today.

## Where requirements go
- Tracker or other system for requirements: Jira KAN
- Project, board or repository: project KAN, https://ipogorilyak.atlassian.net/jira/software/projects/KAN/boards/1
- Item types used: Story
- Connections:

| Connection | Used for | Read | Write |
|---|---|---|---|
| Jira (Atlassian MCP) | Reading and publishing requirements to KAN | checked read | write tool present — never tested by writing |
| GitHub (GitHub MCP) | Reading repository code | present | present |

- If the write connection is missing: the assistant prepares the text for manual creation.

## How we write requirements
- Language of artefacts: English
- Story format: As a …, I want …, so that … (default)
- Acceptance criteria style: Given / When / Then (confirmed from existing issues in KAN)
- Acceptance criteria location: in the description field (no dedicated AC field in Jira KAN)
- Specification template: default
- Drafts folder: `requirements/`

## Approvals and Definition of Ready
- Who approves requirements: BA (Ivan)
- Definition of Ready: not defined — the assistant reports gaps but gives no READY verdict

## Team rules and things the assistant never does
- No formal processes defined

## Setup record
- Package version: Requirements Accelerator v5.8
- Environment: Claude Code
- Setup date: 2026-10-02
- Validation: (to be filled after Stage 5)
