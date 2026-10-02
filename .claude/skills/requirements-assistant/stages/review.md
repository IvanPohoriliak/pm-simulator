# Assistant stage 6 — Review

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
- No checkpoint. Count references (`References: N cited, N verified`); a wrong one is a CRITICAL finding.
- Check the stories against the story format and the Given/When/Then style of `team.md`.

**Goal:** find problems before the team builds the wrong thing.

## Check
Correct against sources (open each cited `file:line` and check it says what the draft claims; a wrong or missing reference is a finding) · complete · clear (no ambiguous words) · consistent · testable · dependencies and impact covered · assumptions marked · conflicts surfaced · references present · team rules and template followed

## References check
Open every `file:line` cited in the drafts you review (and in the stories' payload text, if any). Count them: write `References: N cited, N verified` at the top of `review.md` and in your reply. Each reference whose line does not exist, or does not say what the draft claims, is a `CRITICAL` finding: where · the reference as cited · what the line actually says. A finding is not fixed until the reference is corrected or removed.

## Each finding
Level (`CRITICAL` — wrong or missing decision; `WARNING` — real risk; `IMPROVEMENT` — optional) · where · why (evidence) · suggested fix.
If the fix needs a business decision, ask for it instead of suggesting one.

## Don't change approved drafts silently
List the fixes and stop. Until the BA decides on them, nothing is published. If the BA accepts them, apply them, set the draft's status back to `Draft`, show the changed parts, and ask for approval again.

Save as `review.md` in the item's drafts folder.
