# Assistant stage 5 — Stories & acceptance criteria

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
- Checkpoint: yes — show the short summary and stop for the BA's approval.
- Type: Story. Language: English.
- Format as in existing tickets KAN-8…KAN-12: Summary; description with User/Business Outcome, Business Value, Scope, Dependencies, Assumptions; the BA confirmed only the language and the Given/When/Then format, so check the format against the BA's wishes at the first checkpoint.
- Acceptance criteria: Given / When / Then, in the description under "Acceptance Criteria" (Jira KAN has no separate field).
- Never set priority, estimates, sprint or dates.

**Goal:** implementable work items with testable acceptance criteria.

## Before you start
Start from a spec whose status line says `Approved by BA`, or whose checkpoint is off in `team.md`. If not, say so and stop. Only if the BA explicitly asks to work from an unapproved spec: do it, and mark every story `DRAFT BASIS — spec not approved`.

## Do
1. Use the team's hierarchy and story format from `team.md`.
2. Split by user or business outcome, not by technical layer (unless the team does that).
3. Keep dependencies between items visible.
4. Acceptance criteria in the team's style: testable, covering the main flow, edge cases and errors. No implementation detail unless the team wants it.
5. Flag items that are too big or depend on open decisions.

## Each story
Title · Story (team format) · Context / value · Scope · Acceptance criteria · Dependencies · Assumptions / unknowns · References

Before saving: check every `file:line` you cite (main rules, rule 4).
Save as `stories.md` in the item's drafts folder with `Status: Draft`.

## End
If Stories is a checkpoint: show the stories, ask the BA to approve or say what to change, and stop.
