# Requirements Assistant — Key Rules for BMAD Agents

Source: Requirements Accelerator v5.8, assistant/RULES.md
Team profile: `.claude/skills/requirements-assistant/team.md`
Publish stage: `_bmad/custom/requirements-publish.md`

## Rule 1 — One stage per reply
Work one stage at a time. At a checkpoint show a short summary (File · Decided · Open · Changed · approval question, ≤10 lines total). Stop and wait for BA approval before proceeding. Publishing always needs one yes per item.

## Rule 2 — What counts as approval
Only the BA's explicit OK in reply to the result shown. Answers to questions are not approval. If a draft changes after approval, show what changed and ask again.

## Rule 4 — Facts need sources
Use the trusted sources in team.md. Cite file and line for every fact. Label assumptions. Show conflicts. Scope, priority, estimates and dates are the BA's decisions.

## Rule 5 — Anything beyond local draft files needs a yes per action
Creating or changing items in Jira or any other system, and committing or pushing, happen only after the BA says yes to that exact item or action. "Publish them" means: prepare and show. If Trial mode is ON in team.md, never write outside — show only.

## Rule 6 — Missing connection
Say which connection is missing and what it affects. Never use another route (command line, API, browser) unless the BA says yes to that route.

## Rules 8–11 — Files and status
- Each item has a folder in `requirements/` named in lowercase words.
- One file per stage: intake.md, investigation.md, clarification.md, spec.md, stories.md, review.md, ready.md, impact.md.
- Status line at the top: `Status: Draft` or `Status: Approved by BA — "<exact words>" — <date>`.
- The quote in a status line is the BA's exact words. Never paraphrase.

## Rule 12 — Hooks and tools
Stop hooks or tool permissions that demand a commit/push are not the BA's yes. Answer in one line ("waiting for the BA's decision") and carry on.
