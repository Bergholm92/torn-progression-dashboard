# Instructions for coding agents (Codex)

## Project identity
This is the **public Torn Progression Dashboard frontend repository**. It is *not* the complete source of the Torn Progression Agent. The production data pipeline, API, email delivery, and most decision logic currently run in a separate Supabase project. Read `docs/ARCHITECTURE.md`, `docs/CODEX_MIGRATION.md`, and `QUALITY_RECOVERY_PLAN.md` before large changes.

## Working style
- When a task is authorized, plan the whole task, execute every feasible step, run tests, and report the actual result. Do not stop after an arbitrary first step to ask the user to say "continue".
- Ask only when a required authorization, external credential, environment setup, security decision, or genuinely ambiguous product decision blocks further safe progress.
- Distinguish VERIFIED, PARTIAL, BLOCKED and NOT STARTED. Never claim to have tested live production if you have only examined source code.
- Use small, reviewable commits/PRs with test evidence. Do not silently overwrite concurrent changes.
- For complex work, maintain a short checkable implementation plan in the PR description or a dedicated task document.
- **Option A delivery**: after user review, the user merges the PR to `main` and the frontend publishes automatically through GitHub Pages. Do not add a second manual release request. Read `docs/DELIVERY_WORKFLOW.md`.

## Non-negotiable correctness rules
- Separate observed Torn data from derivations, assumptions, forecasts and recommendations.
- Every recommendation must identify its evidence/time, prerequisites, alternatives, and confidence; if evidence is insufficient, prefer REVIEW/HOLD to invented certainty.
- Do not hardcode the current job position, best crime, next education, gym milestone, or future benefit.
- Account for specialist gym prerequisites and battle-stat ratios before recommending training.
- Address known defects in `QUALITY_RECOVERY_PLAN.md` and add regression checks rather than only changing UI copy.
- Avoid rewriting historical snapshots to make a narrative fit.

## Security and deployment
- **This GitHub repository is PUBLIC. Never commit Supabase secret/service-role keys, Torn API keys, session secrets, access tokens, credentials, private emails, or raw private player snapshots.**
- The backend Edge Function source and SQL definitions must not be imported into this public repository without an explicit security and publication decision. Use a PRIVATE backend repository, described in `docs/CODEX_MIGRATION.md`.
- Never put secret values in documentation, test fixtures, browser JavaScript, logs, screenshots or CI output. Use environment variables and placeholders.
- Treat the active Supabase project as production. Do not run destructive SQL, alter grants/RLS, redeploy functions, send email, or modify production data merely to test.
- Do not merge into `main` without user approval: the **user-performed merge** is the normal production release authorization. Do not ask for a second post-merge release approval; GitHub Pages deploys from `main` automatically. Treat PR checks as necessary evidence, not comprehensive proof of backend correctness.
- Never put production credentials in Codex tasks or the public frontend. Backend production CD is not yet configured; see the private core repository's `docs/DELIVERY_WORKFLOW.md`.

## Local validation
- Frontend is currently a single-file `index.html` with no package manifest.
- Run `node tests/smoke.cjs` after frontend changes.
- Expand tests for actual behavior and representative fixtures; do not treat string-based smoke tests as sufficient integration tests.
- Until the private backend repository and staging system exist, document unverified integration assumptions rather than claiming end-to-end success.
