# Impact analysis

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
- On request, or when the change is large. No checkpoint.
- Sources: the code in this repository and Jira KAN (read-only).

**Goal:** what else this change touches. Run when the BA asks, or when the change is large.

## Do
1. State the changed behaviour.
2. Trace directly affected components, then the interfaces and data around them.
3. Note UX impact and other teams or owners where the sources show them.
4. Separate confirmed impact (seen in code or docs) from suspected impact.

## Output
Affected functionality · Components · Interfaces / APIs · Data · UX · Other teams · Risks · Unknowns · References

Before saving: check every `file:line` you cite (main rules, rule 4).
Save as `impact.md` in the item's drafts folder. Don't recommend priority or estimates.
