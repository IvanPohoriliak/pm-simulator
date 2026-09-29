# Product Baseline

## Product
- Name: PM Simulator
- What it is: Interactive web-based Project Management simulator where users experience a 12-week software project by making irreversible decisions
- Primary users: PMs and aspiring PMs learning project management decision-making
- Problem / outcome: Provides hands-on experience with PM trade-offs in a safe, low-stakes simulation environment; shows how decisions cascade across metrics
- Main functional areas:
  1. 12-week simulation loop (make a decision each week, see consequences)
  2. 4 tracked metrics: clientTrust, teamMood, techDebt, timelineRisk (all start at 50, range 0–100)
  3. AI-generated feedback at week end and final review
  4. Scenario-driven decisions from scenario-data.json (1 scenario "Subflow" currently)
  5. Final review screen with metric summary and decision history

## Provenance
- Baseline source: README.md (IvanPohoriliak/pm-simulator, main branch)
- Supporting sources: App.jsx (implementation evidence); scenario-data.json (scenario content)
- Confirmed by BA: No — pending Phase 3 confirmation
- Confirmation notes: Known conflict — README says "3 weeks" (step 4 of Quick Start) but code implementation is 12 weeks (App.jsx:84, scenario-data.json). Implementation is authoritative for current behaviour; README needs update.

This baseline is the minimum confirmed product description for setup. Detailed source authority remains governed by `team-generated/trusted-sources.md`.
