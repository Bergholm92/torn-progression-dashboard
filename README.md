# Torn Progression Dashboard

Public frontend for the Torn Progression Agent. The live system also depends on a **separate Supabase backend**; this repository alone is not a full restore or development environment.

## Quick start

Open `index.html` in a browser to inspect the static application. Its authenticated API calls require the running dashboard backend.

Run the existing frontend checks:

```bash
node tests/smoke.cjs
```

## Development with Codex

Start with:
- [AGENTS.md](AGENTS.md) — instructions for coding agents and safety rules.
- [Architecture inventory](docs/ARCHITECTURE.md) — which code lives where.
- [Codex migration plan](docs/CODEX_MIGRATION.md) — phased migration without touching production.
- [First Codex task](docs/CODEX_FIRST_TASK.md) — ready-to-use task prompt.
- [Dashboard quality recovery plan](QUALITY_RECOVERY_PLAN.md) — known correctness issues and acceptance criteria.

**Warning:** this repository is public. Keep Torn/Supabase API keys, service-role/secret keys, dashboard passwords, tokens, private snapshots and backend-only internals out of public commits. Full Supabase source control is planned for a separate private repository.
