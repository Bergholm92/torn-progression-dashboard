# Database migrations

This directory contains version-controlled database changes for the Torn progression dashboard.

## Deployment

Database migrations are intentionally kept separate from the static GitHub Pages deployment. Apply them to Supabase using the Supabase CLI or another trusted deployment environment with database credentials.

Project ref: `sdczpggpsrikncdzpsie`

Do not commit database passwords, access tokens, service-role keys, or other credentials to this repository.

## Rule

Prefer small, atomic migrations. Verify the live dashboard payload after each migration before adding the next change.
