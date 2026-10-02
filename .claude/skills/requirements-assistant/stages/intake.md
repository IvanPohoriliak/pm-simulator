# Assistant stage 1 — Intake

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
- Checkpoint: yes — show the short summary and stop for the BA's approval.
- Product: PM Simulator (`team.md`). Talk to the BA in Ukrainian; write the file in English.
- Drafts folder: `requirements/`.

**Goal:** understand the request before investigating. Don't solve it yet. A quick look at the sources to ground the facts is fine; the deep dive is the next stage.

## Do
1. Restate the requested outcome in neutral words.
2. Who is it for, and what problem does it solve — only as far as the request or sources say.
3. Separate explicit scope (what was asked) from inferred scope (your reading — label it).
4. Sort what you know into: facts (with source), assumptions, unknowns, contradictions.
5. Name what must be investigated next.
6. Blocking questions only if investigation can't answer them (at most 5). Other decisions the BA will have to make go under "Decisions expected later" — they are asked in Clarify.

## Output (one screen)
Request · Outcome · Users / problem · Scope (explicit / inferred) · Facts · Assumptions · Unknowns · Contradictions · To investigate · Decisions expected later · Blocking questions

Before saving: check every `file:line` you cite (main rules, rule 4).
Save as `intake.md` in the item's drafts folder with `Status: Draft`.

## End
If Intake is a checkpoint in `team.md`: ask the BA to approve the summary or say what to change, and stop.
