References: 31 cited, 31 verified
Status: Draft

# Review: Jira KAN stories (KAN-1 … KAN-12) against the code

Sources: Jira KAN (read-only, read in this session), code in this repository. Trial run, written in the main context (not a fresh one).

## Findings

### CRITICAL
1. **KAN-11 (and the premise of KAN-3 AC 3): on an API failure the code shows no error message.**
   - KAN-11 says "If API call fails, an error string is shown instead of feedback" (AC: "an error message is displayed instead of feedback").
   - Code: `generateAIFeedback` returns the text 'Error generating feedback. Please try again.' on failure (`src/utils/claudeAPI.js:135`, `:137`), but `FeedbackScreen` awaits it without using the result (`src/screens/FeedbackScreen.jsx:15`) and shows the spinner while `loading && feedback === ''` (`:43`); Continue stays disabled (`:72`); only "Skip feedback →" (`:53`) works.
   - KAN-3 AC 3 ("when the feedback area shows an error") starts from a state that does not exist.
   - Needs the BA's decision: on failure, should the user see an error and be able to continue?
2. **KAN-3: wrong line references.** KAN-3 names the call sites as "L54 skip button, L73 continue button". The handlers are at `src/screens/FeedbackScreen.jsx:50` and `:71`; `:54` is `</button>` and `:73` is `>`.
3. **KAN-5: AC 4 contradicts the Assumption.** AC 4 requires that the AI review text is preserved with no re-fetch; the Assumption says the implementation may "accept the re-fetch". In code the review lives in local state (`src/screens/FinalReviewScreen.jsx:5`), is fetched when the screen mounts (`:9`), and the screen is rendered only while `currentScreen === 'final'` (`src/App.jsx:156`), so it remounts on return. Needs the BA's decision: hoist the state, or accept a second API call.

### WARNING
4. **KAN-1 is not a story yet.** Two sentences, no acceptance criteria, no outcome/scope; "separate tab" and "completed scenario" are undefined; the app has no tabs, it switches screens (`src/App.jsx:117`). It is not linked in its text to KAN-2…KAN-5.
5. **KAN-4 and KAN-5 disagree on when the Progress screen is reachable.** KAN-4: "before or during the Final Review". KAN-5 AC 5: not reachable before the Final Review. Needs the BA's decision.
6. **KAN-12: nothing specified for an API failure, and the code leaves the user stuck.** The Restart button is disabled while `loading && aiReview === ''` (`src/screens/FinalReviewScreen.jsx:130`) and `generateFinalReview` returns its error text (`src/utils/claudeAPI.js:245`, `:247`) which the screen does not use, so on failure Restart stays disabled. Needs the BA's decision.

### IMPROVEMENT
7. KAN-2…KAN-5 use internal labels S-1…S-4; only KAN-3 maps S-1 to KAN-2. Use Jira keys.
8. KAN-4 Assumption "entries built before KAN-2/KAN-3 are merged": the history is in memory only (`src/App.jsx:26`, KAN-8: no persistence), so such entries cannot exist; defensive code is harmless but the reason is wrong.
9. KAN-12 AC says "Week N — Chose: [title]"; the screen shows the week and "Chose: …" as separate elements (`src/screens/FinalReviewScreen.jsx:121`).
10. KAN-2…KAN-5 lack "Business Value" and "Status" used in KAN-6…KAN-12; the BA confirmed only language and Given/When/Then.

## Checked and matching the code
KAN-2 "L45–63" (`src/App.jsx:45`, `:63`) and history reset (`:104`) · KAN-8 `makeDecision` (`:40`), `continueToNextWeek` (`:83`), `restartSimulation` (`:95`) · KAN-6 title, subtitle, button (`src/screens/WelcomeScreen.jsx:7`, `:10`, `:13`) · KAN-9 "Week N of 12", Make Decision disabled (`src/screens/WeekScreen.jsx:23`, `:142`) · KAN-11 Continue disabled while loading (`src/screens/FeedbackScreen.jsx:72`).
