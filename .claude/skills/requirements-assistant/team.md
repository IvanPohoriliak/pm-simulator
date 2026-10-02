# Team profile

The Requirements Assistant reads this file at the start of every session. The BA may edit it at any time, or ask the assistant to; such edits need no separate re-approval. The `Trial mode` line is a service field set by setup, not part of the approved profile.

Status: Draft
Trial mode: OFF   (set to ON only during validation; the assistant never writes outside while ON)

## Setup choice
- Approach: (chosen in Setup stage 2)
- Skills installed (approved one by one at setup): (Setup stages 3–4)

## Product
- Name: PM Simulator
- What it is: An interactive simulation where the player is the PM of Subflow (a B2B SaaS startup) and lives through a 12-week software project by making irreversible decisions. Four metrics are tracked (Client Trust, Team Mood, Tech Debt, Timeline Risk). Claude API generates feedback after each decision and a final review. Stack: React 18, Vite, Claude API, plain CSS, Vercel.
- Status of weeks 4–12: BA says they are planned («так, опис правильний, тижні 4-12 це в планах»). Code check: `src/data/scenario-data.json` holds 12 weeks with 4 options each and `src/App.jsx` caps the game at week 12; README says "3 weeks"; Jira KAN-8, KAN-9, KAN-12 describe 12 weeks as "Implemented". Open: to be settled with the BA.
- Users: Product managers (README: validation with 10 testers)
- Team terms:

## Trusted sources

| Source | Where (link or path) | Trusted for | Notes (e.g. outdated parts) |
|---|---|---|---|
| Code | this repository | current behaviour | README is partly outdated (says 3 weeks) |
| Jira KAN | https://ipogorilyak.atlassian.net/jira/software/projects/KAN/boards/1 | existing stories and requirements | |

Unless stated otherwise, the code is the truth for how the product behaves today.

## Where requirements go
- Tracker or other system for requirements: Jira
- Project, board or repository: project KAN, https://ipogorilyak.atlassian.net/jira/software/projects/KAN/boards/1
- Item types used: Story
- Connections:

| Connection | Used for | Read | Write |
|---|---|---|---|
| Jira (Atlassian connector) | Reading and publishing requirements to KAN | checked (KAN-8 to KAN-12 read) | tool present (never tested by writing) |
| GitHub (connector) | Repository | present | present (never tested by writing) |

- If the write connection is missing: the assistant prepares the text for manual creation.

## How we write requirements
- Language of artefacts: English
- Story format: as in KAN-8…KAN-12 (User/Business Outcome, Business Value, Scope, Dependencies, Assumptions, Status) — to be confirmed in Setup stage 3
- Acceptance criteria style: Given / When / Then, in the description under "Acceptance Criteria" (no separate field)
- Specification template: default
- Drafts folder: `requirements/`

## Approvals and Definition of Ready
- Who approves requirements: (Setup stage 3)
- Definition of Ready: not defined — the assistant reports gaps but gives no READY verdict

## Team rules and things the assistant never does
- No formal process is written down («Нема формально прописаних процесів»)

## Setup record
- Package version: Requirements Accelerator v5.10
- Environment: Claude Code
- Setup date: 2026-10-02
- Validation: not validated yet
