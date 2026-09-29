# Codebase Scope

| Repository / component | URL/path | Relationship to product | In scope? | Read test | Notes |
|---|---|---|---|---|---|
| pm-simulator | https://github.com/IvanPohoriliak/pm-simulator | Full product codebase — single repository | Yes | PASS | React 18 + Vite app; contains all screens, scenario data, API integration, and styles |

## Repository structure (confirmed readable)

- `src/App.jsx` — main router and state management
- `src/screens/` — 6 screens (Welcome, Brief, Week, Consequences, Feedback, FinalReview)
- `src/data/scenario-data.json` — all scenario content (3 weeks)
- `src/utils/claudeAPI.js` — Claude API integration
- `src/index.css` — all styles
- `README.md` — product documentation and setup instructions
- `QUICKSTART.md` — quick-start guide (Ukrainian)

## Important

In scope does not equal authoritative. Source authority is defined separately in `team-generated/trusted-sources.md`.
