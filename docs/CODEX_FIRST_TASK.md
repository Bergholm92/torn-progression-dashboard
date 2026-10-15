# First Codex task — copy the prompt below

> Work as the lead engineer for Torn Progression Dashboard. Read AGENTS.md, docs/ARCHITECTURE.md, docs/CODEX_MIGRATION.md, QUALITY_RECOVERY_PLAN.md and tests/smoke.cjs. The repository contains the public frontend, NOT the complete Supabase backend.
>
> Audit the frontend and the existing Q01–Q12 quality plan. Identify untested behavioral risks and implement a sensible first batch of frontend regression tests using representative, sanitized fixtures; fix any verified frontend defects found. Run all available tests, commit your code changes in a branch and open a PR with exact test results and remaining gaps.
>
> Work through the full authorized task without repeatedly asking me to type "continue". Pause only if a required permission, credential, security decision or unclear requirement prevents safe progress. Do not deploy to production, change Supabase, claim backend coverage, or publish secrets. Clearly mark any backend-dependent work as BLOCKED until a private backend repository is connected.

## Follow-up once private backend repository is connected

Ask Codex to inventory the exact production Supabase Edge Function and SQL definitions in the **private repository**, produce a reviewed and reproducible baseline with migrations, and validate it against a disposable development environment. Do not allow it to deploy or modify production until review.
