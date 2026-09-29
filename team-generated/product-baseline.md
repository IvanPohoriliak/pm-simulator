# Product Baseline

## Product
- Name: PM Simulator
- What it is: An interactive web application that simulates a 12-week software project compressed into ~30 minutes. Users make irreversible PM decisions across weekly scenarios and receive AI-generated feedback on their choices.
- Primary users: Product Managers (PMs) — both experienced practitioners and those developing their skills
- Problem / outcome: Teaches realistic PM decision-making through consequence-driven simulation; helps PMs experience the compounding effects of early decisions in a risk-free environment. Validates product-market fit for a paid learning tool.
- Main functional areas:
  1. **Onboarding flow** — Welcome screen and Project Brief (sets context for the scenario)
  2. **Weekly decision screens** — 3 weeks (extendable to 12); each presents a situation and 2-3 irreversible options
  3. **Consequences and metrics** — shows immediate impact of each decision on 4 metrics: Client Trust, Team Mood, Tech Debt, Timeline Risk
  4. **AI feedback** — Claude API generates realistic PM coaching feedback after each decision
  5. **Final review** — end-of-simulation summary with cumulative outcomes
  6. **Scenario data** — JSON-driven content, currently 3 weeks; designed to expand

## Provenance
- Baseline source: https://github.com/IvanPohoriliak/pm-simulator/blob/main/README.md (execution copy in local clone)
- Supporting sources: QUICKSTART.md (setup/deployment guide)
- Confirmed by BA: Yes
- Confirmation notes: Confirmed by BA on 2026-09-29 (Phase 3). Verbatim: "підтверджую"
