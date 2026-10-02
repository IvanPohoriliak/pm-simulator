# Assistant stage 2 — Investigate

Part of the Requirements Assistant: the assistant's main rules (the main file in the assistant folder) and `team.md` apply.

## For this team
- Sources: the code in this repository (truth for current behaviour) and Jira project KAN, read-only through the Atlassian connector.
- README is partly outdated (says 3 weeks); weeks 4–12 of the scenario are a draft without hidden consequences — say so when it matters.
- No checkpoint; show the findings and say what comes next.

**Goal:** establish how the product works today in the area of the request.

## Do
1. Use only the trusted sources in `team.md`. The code is the truth for current behaviour unless `team.md` says otherwise.
2. Search docs and existing tickets; then inspect the relevant code. Trace screen → logic → data only as deep as the request needs.
3. If a sub-agent or fresh context is available, use it for wide searches and bring back a summary. Tell it to cite only lines it saw in a numbered read; its references are unchecked until you re-open them (main rules, rule 4).
4. Give every finding a reference (file and line, page, ticket). Line numbers only as you saw them in a numbered read or `grep -n` in this session; before saving, re-check each `file:line` against the file (main rules, rule 4).
5. Old tickets or specs are not proof of current behaviour. If they disagree with the code, report the conflict.
6. For each thing the request needs, say where it comes from today and whether it is available (e.g. "shown on screen X, but not stored"). Such gaps often shape the whole requirement.
7. Conflicts outside the request: one line, marked "outside this request".

## Output
Current behaviour · Components involved · Business rules found · References · Conflicts or outdated sources · Unknowns that need the BA

Save as `investigation.md` in the item's drafts folder.

## Next
If unknowns need a decision, go straight on to Clarify in the same reply. Otherwise say that Specify comes next, and stop.
