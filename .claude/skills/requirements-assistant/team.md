# Team profile

The Requirements Assistant reads this file at the start of every session. The BA may edit it at any time, or ask the assistant to; such edits need no separate re-approval. The `Trial mode` line is a service field set by setup, not part of the approved profile.

Status: Approved by BA — "так, профіль схвалюю" — 2026-10-02
Trial mode: ON   (set to ON only during validation; the assistant never writes outside while ON)

## Setup choice
- Approach: BMAD (chosen by the BA at setup: «давай спочатку BMAD»)
- Skills installed (approved at setup): BMAD skills `bmad`, `bmad-build`, `bmad-product-brief` and the module records `bmod-method`, `bmod-core-tools`; the Native `requirements-assistant` skill is not installed

## Product
- Name: PM Simulator
- What it is: An interactive simulation where the player is the PM of Subflow (a B2B SaaS startup) and lives through a 12-week software project by making irreversible decisions. Four metrics are tracked (Client Trust, Team Mood, Tech Debt, Timeline Risk). Claude API generates feedback after each decision and a final review. Stack: React 18, Vite, Claude API, plain CSS, Vercel.
- Status of weeks 4–12: draft, without hidden consequences (BA: «так, аналіз правильний, познач як чернетку без прихованих наслідків»). Code check: `src/data/scenario-data.json` has all 12 weeks with 4 options each; weeks 1–3 options carry a `hidden` field (delayed consequence), weeks 4–12 do not; `src/App.jsx:84` caps the game at week 12 and the UI runs through all 12. README says "3 weeks" (outdated).
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
- Story format: as in KAN-8…KAN-12 (User/Business Outcome, Business Value, Scope, Dependencies, Assumptions, Status) (seen in existing tickets; the BA confirmed only the language and the Given/When/Then format)
- Acceptance criteria style: Given / When / Then, in the description under "Acceptance Criteria" (no separate field)
- Specification template: default
- Drafts folder: `requirements/`

## Approvals and Definition of Ready
- Who approves requirements: not stated by the BA — the assistant treats the BA in the conversation as the approver (my reading, to confirm)
- Definition of Ready: not defined — the assistant reports gaps but gives no READY verdict

## Team rules and things the assistant never does
- No formal process is written down («Нема формально прописаних процесів»)

## Setup record
- Package version: Requirements Accelerator v5.10
- Environment: Claude Code
- Setup date: 2026-10-02
- Validation: not validated yet
