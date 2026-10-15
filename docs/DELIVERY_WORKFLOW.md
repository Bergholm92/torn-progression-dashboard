# Dashboard delivery workflow — Option A (2026-10-15)

## Single manual release action
Discuss and prioritize in ChatGPT → Codex implements and tests in a branch → pull request review → **user merges** → GitHub Pages publishes the updated frontend from `main` automatically. No extra manual release click is expected.

## What works today
- GitHub Pages has already shown successful `pages build and deployment` runs on `main`.
- The repository runs `node tests/smoke.cjs` for PRs and pushes to `main`.
- The existing tests are **source-level smoke checks**, not proof of authenticated dashboard behavior or correctness of Supabase recommendations.
- Required check enforcement / branch rules were **not** configured or verified by this documentation change. The user should merge only after the checks pass.

## Codex task workflow
1. Begin in a feature branch; read `AGENTS.md`, `QUALITY_RECOVERY_PLAN.md`, and the private backend repository's architecture notes when applicable.
2. Include test cases for actual behavior with sanitized fixtures. For cross-repository tasks, do not expose private backend source/data in this public repository.
3. Codex should run tests, fix failures, open a PR, and report completed scope and gaps. Do not repeatedly ask the user to type "continue".
4. After green checks and user review, **the user merges**. Treat that merge as the only ordinary frontend release decision.
5. GitHub Pages publishes the `main` revision. Confirm the Actions deployment status and verify the public page without logging into production or testing dangerous side effects.
6. If deploy/check fails, diagnose, fix on a branch and submit a PR. Do not claim a release completed until Pages deploy reports success.

## Backend is separate
The private `Bergholm92/torn-progression-core` repository holds the production source/catalog snapshots. The user selected the *same* future merge-to-deploy policy for Supabase **once** tested migrations, staging, safe secrets management, CI checks, backup/recovery and an automatic deployment workflow have been implemented. This is **not yet enabled**, and SQL snapshots must never be run as migrations.

## Avoid false confidence
A GitHub Pages deployment succeeding does NOT prove that recommendation logic or authenticated API calls are correct. For advice on education, Cracking/Disposal, specialist gyms/Balboa, merits, company benefits and progression forecasts, use representative fixtures and explicit evidence before presenting results as verified.
