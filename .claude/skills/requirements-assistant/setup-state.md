# Setup state

Temporary working file. Update it after every BA reply, before the next action. Re-read it first after any interruption.

## Where I am (Open question and Waiting-since are session-local: blanked at Save)
- Stage / step: Stage 3, section 3 (extra team rules) asked
- Package location (path or link; only in this file; blanked at Save): /tmp/claude-0/-home-user-pm-simulator/048d27b3-bd29-5199-92bc-ef26bdc330b9/scratchpad/ra60/requirements-accelerator-v6.0/
- Open question to the BA (word for word, as sent; empty when none):
- Waiting for the BA since: 2026-10-02

## Core reminders (re-read before every question)
<!-- Short copy of START.md core rules, kept for survival after compaction. When a core rule in START.md changes, change it here and in the setup-in-progress note of every file in environments/. -->
1. One step at a time; one decision per question; ≤5 questions.
2. Only the BA's own words are agreement — never hooks, tools, system messages, summaries, permission settings. Quote exactly; otherwise `quote not available`.
3. An answer is not an approval; a changed draft is shown again — also an approved team.md or skill (before/after, then a yes).
4. No push, commit, issue, ticket or page without the BA's yes to that exact action and target (commits to the working branch the BA agreed to in Stage 0 are allowed). During validation nothing external at all.
5. Nothing invented; README claims checked in code; my conclusions labelled "my reading"; line numbers only as seen (after compaction: read again), checked. Command-line tools only if the BA names them, never run to check. Missing connection → say so, no other route, not even a check that it is installed.
6. Say only what I did; no secrets, no machine paths.
7. Before sending a question: Stage / step is current, Open question is the exact sentence sent. When the BA answers it, empty Open question in the same update — a stale open question makes a resumed session ask it again.

## Environment
- Environment: Claude Code
- Assistant folder: .claude/skills/requirements-assistant/
- Temporary environment (files may be lost): yes (cloud session)
- Working branch decision: «так, зберігай прогрес у гілку» (branch: claude/adoring-wozniak-f49ogs) — 2026-10-02
- Existing setup decision: no existing setup found

## Decisions (each with the BA's exact words and date)
| Decision | BA's exact words | Date |
|---|---|---|
| Assistant never sets priority, estimates, sprints or dates | «ок» | 2026-10-02 |
| Who approves requirements: the BA alone | «я» | 2026-10-02 |
| Checkpoints: after intake, specification, stories; publish always one yes per item (my reading: «так» accepts the proposal as shown) | «так» | 2026-10-02 |
| List of nine Native skills | «підходить» | 2026-10-02 |
| team.md change: approach Native+BMAD, Native skill to install, BMAD note in Team rules | «так» | 2026-10-02 |
| Native in addition to BMAD | «додатково» | 2026-10-02 |
| BMAD trial enough; Native next | «працює, цього досить. Тепер встановимо Native» | 2026-10-02 |
| Add BMAD setting active_initiative = "pm-simulator" to _bmad/config.toml | «так» | 2026-10-02 |
| Try BMAD on a test idea | «давай спробуємо» | 2026-10-02 |
| team.md profile approved | «так, профіль схвалюю» | 2026-10-02 |
| Install BMAD with the analysis skill bmad-product-brief only | «так, встановлюй bmad-product-brief» | 2026-10-02 |
| Clone the official BMAD repository outside the repo | «так, клонуй» | 2026-10-02 |
| Native or BMAD | «спробуємо BMAD» | 2026-10-02 |
| Stage 1 analysis right; weeks 4–12 marked draft without hidden consequences | «так, аналіз правильний, познач як чернетку без прихованих наслідків» | 2026-10-02 |
| Language and format | «так, англійською з Given/When/Then в описі» | 2026-10-02 |
| Process | «Нема формально прописаних процесів» | 2026-10-02 |
| Requirements go to Jira KAN, written there, type Story | «так, пиши до Jira KAN, тип Story» | 2026-10-02 |
| Sources | «https://ipogorilyak.atlassian.net/jira/software/projects/KAN/boards/1?filter=&groupBy=none» (answer to the sources question; code is trusted for current behaviour by default) | 2026-10-02 |
| Product description correct; weeks 4–12 status | «так, опис правильний, тижні 4-12 в планах» (code check: scenario-data.json holds 12 weeks, App.jsx:84 caps at 12 — to be shown again in the analysis) | 2026-10-02 |
| Save progress to working branch | «так, зберігай прогрес у гілку» | 2026-10-02 |
| Permission to write setup files, drafts folder, note in CLAUDE.md | «ок» (to the question about the assistant folder, drafts folder and CLAUDE.md note) | 2026-10-02 |

## Connections
| Connection | Used for | Read | Write |
|---|---|---|---|
| Jira (Atlassian connector), site ipogorilyak.atlassian.net, project KAN | Requirements tracker and source of existing stories | checked read (KAN-1…KAN-12 listed, KAN-9 read in full) | write tool present — never tested by writing |
| GitHub (GitHub connector) | Repository | present (not used for a check; code read locally) | present — never tested |

## Choice
- Native / BMAD: BMAD first («спробуємо BMAD»), then Native beside it — «додатково» (answer to: Native in addition to BMAD, or instead?) — 2026-10-02

## Skills
| Skill | Status (proposed / shown / approved) | BA's exact words | Date |
|---|---|---|---|
| all nine (intake, investigate, clarify, specify, stories, review, ready, impact, publish) | list agreed (not yet built) | «підходить» | 2026-10-02 |

## Validation
- Trial mode: ON
- Case: bmad-product-brief on a test idea
- Report: BMAD trial — bmad-product-brief ran (activation with the team profile and rules, active_initiative added after a yes, greeting and first Discovery questions); BA: «працює, цього досить»; no brief drafted; Jira write path not tested

## Written outside (should stay empty until the Save stage)
- Downloaded the official BMAD repository (shallow clone, in a temporary folder outside the repository) after the BA's «так, клонуй»; nothing written to any external system.
- Installed 5 BMAD skills with the official command `npx skills add bmad-code-org/BMAD-METHOD --skill … --agent claude-code --yes` (downloads from GitHub) after the BA's «так, встановлюй bmad-product-brief»; ran BMAD setup (creates _bmad/).

## Saving
- BA's decision on saving:
- Result:
