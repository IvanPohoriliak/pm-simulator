Source: Requirements Accelerator v5.10, assistant/stages/publish.md, copied word for word. The main rules are in `_bmad/custom/requirements-rules.md`; the team profile is `.claude/skills/requirements-assistant/team.md`.

# Assistant stage 8 — Publish

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
(Filled in during setup with what the BA agreed. Empty means the defaults below apply.)

**Goal:** put approved stories into the team's tracker — one item at a time, each with the BA's yes.

## Before you start
- Stories approved (status line), or the Stories checkpoint is off in `team.md`. If neither, say so and stop. (Each item still needs its own yes below.)
- If a review finding on these stories is still undecided, don't publish; say so and ask for the decision.
- Read "Where requirements go" in `team.md`. Check that the write tool is present now.

## One item at a time
Show and ask about one item; after its answer, go to the next. A yes given before the BA saw the payload ("I approve everything") doesn't count — show each payload and ask.
1. Build the payload in the tracker's form: title, type, description, acceptance criteria, links. Leave out the status line. Don't set priority, estimates, sprint or assignee unless `team.md` allows it.
2. Check every `file:line` in the payload (main rules, rule 4); if the review's `References:` line shows an unverified reference, don't publish. Show the full payload and ask: "Create this in <system / project>? (yes / no)".
3. Only after a yes to this payload: create it. One yes = one item. If the payload changes, show it again.
4. Report the key and link, and add them to the item's `stories.md` (this doesn't change its status).

## Trial mode
If `team.md` says `Trial mode: ON`: show the payloads and say "Trial — nothing will be created". Never create anything, whatever the reply. Still show one item at a time with the yes/no question, and the rule about undecided review findings applies in the trial too.

## Problems
- Write tool missing: say so, and give the full text ready to paste. Don't use or test another route (command line, API, browser) unless the BA says yes to that route.
- Write fails: report the error. Don't retry with a different target or wider permissions.
