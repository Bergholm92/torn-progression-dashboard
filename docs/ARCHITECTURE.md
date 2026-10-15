# Torn Progression Agent — architecture inventory

Inventory date: 2026-10-15. This is a **read-only inventory**, not proof of a complete migration or working CI/CD.

## Existing public frontend
- GitHub: `Bergholm92/torn-progression-dashboard`, default branch `main`, public.
- Main browser application: `index.html` (single-file HTML/CSS/JS).
- Static images: `assets/`.
- Existing smoke checks: `tests/smoke.cjs`.
- Previous recovery work: `QUALITY_RECOVERY_PLAN.md`.
- The browser talks to the Supabase `torn-dashboard` endpoint; the static frontend is not the backend.
- Avoid changing GitHub Pages visibility/deployment settings without first verifying the live website's hosting requirements.

## Existing production backend (outside this repository)
Supabase project: `Torn Progression Agent` (project ref `sdczpggpsrikncdzpsie`, region `eu-north-1`).

At the inventory date:
- `torn-collector` Edge Function, active, version 45: reads Torn API and stores snapshots.
- `torn-dashboard` Edge Function, active, version 15: handles dashboard authentication and API payloads.
- `torn-brief-delivery` Edge Function, active, version 1: email delivery component; source itself warns that server-side preflight/idempotency is not complete.
- PostgreSQL: 40 tables in `public`, 2 tables in `analytics`, 137 views in `analytics`, and 22 SQL functions across `public` (16) and `analytics` (6).
- Most recommendation logic is implemented in database views, not in frontend JavaScript. Important examples: `analytics.education_recommendation`, `analytics.progression_planner_v1`, `analytics.training_optimizer_v1`, `analytics.crime_decision_support_v1`, and `analytics.dashboard_recommendation_quality_checks_v1`.
- Current running code/database definitions are the production baseline. Their exact versions must be exported and validated before replacement by source-controlled versions.

## Data flow (conceptual)
1. Torn API -> `torn-collector` -> historical snapshot tables.
2. Snapshot tables -> `analytics` views and PostgreSQL functions -> derived metrics, advice, quality checks.
3. `torn-dashboard` reads from Supabase and serves the authenticated dashboard API.
4. GitHub Pages frontend renders the API response.
5. `torn-brief-delivery` handles a separate delivery flow; do not assume unattended delivery is safe just because the function is ACTIVE.

## Not yet established
- A complete, reviewed SQL schema/migration history in Git.
- Backend code in a *private* Git repository.
- Reproducible local/staging database with sanitized test data.
- Comprehensive database, integration and deployment checks.
- Codex Cloud environment/repository authorization by the user's account.

See `docs/CODEX_MIGRATION.md` for safe next steps.
