# Dashboard quality recovery plan — 2026-10-15

## Non-negotiable rules
- Observed Torn data, derived metrics, assumptions, and recommendations must be clearly distinguished.
- No hardcoded current role, star milestone, education sequence, or crime priority.
- Every recommendation must have evidence, timestamp, prerequisites, alternatives, and a confidence calibrated to that evidence.
- When ranking cannot be justified, use REVIEW / HOLD rather than a false NEXT or HIGH.
- Preserve historical snapshots; never rewrite them to match user-reported changes.
- Validate API payload and visible UI before declaring deployment successful.

## Issue register and acceptance criteria
| ID | Priority | Scope | Status | Acceptance |
|---|---|---|---|---|
| Q01 | P0 | Work role mismatch | BACKEND FIXED / API CHECKED | Waiter cannot receive Keep Manager; current role matches latest source |
| Q02 | P0 | Pub milestone | BACKEND FIXED / API CHECKED | 5-star company and unlocked Liquid Courage cannot be recommended as future unlocks |
| Q03 | P0 | Education priority | BACKEND SAFEGUARD / API CHECKED | Intermediate Programming not asserted best without comparing current Cracking options and prerequisites |
| Q04 | P0 | Regression tests | PARTIAL | Quality checks for work, stars, education, merits pass; expand to all domains and CI |
| Q05 | P1 | Crime progression | OPEN | Compare Disposal, Cracking, and others by objectives, risk, gains, and prerequisite unlocks; no single-skill heuristic as optimum |
| Q06 | P1 | Gym and battle | OPEN | Specialist gym access and Balboas ratio enforced, recommendation validated with snapshots |
| Q07 | P1 | Economy and work projections | OPEN | Separate observed vs projected vs scenario; compare options with costs and confidence |
| Q08 | P1 | Merit optimization | PARTIAL | Community source review plus mechanics and actual ranks; no unsupported win-rate claims |
| Q09 | P1 | Data lineage and freshness | OPEN | Per-section source, capture time, refresh time, and conflicts |
| Q10 | P2 | Release gate | OPEN | Automated API checks and frontend smoke tests on preview before production |
| Q11 | P2 | UI acceptance | OPEN | Verify live Pages build on desktop/mobile and handle cache versioning |
| Q12 | P2 | Continuous source review | PARTIAL | Weekly community meta watch exists; changes require verification and explicit release |

## Verified 2026-10-15
- Database `analytics.education_recommendation` now presents REVIEW and a prerequisite-checked candidate set including rig heat, virus coding, overclocking, and Intermediate Programming.
- Database `analytics.progression_planner_v1` now derives current role from `analytics.work_company_decision_context_v3`.
- Cache refreshed through `public.refresh_dashboard_extension_cache()`.
- `analytics.dashboard_recommendation_quality_checks_v1`: 4 checks passed.
- No claim of comprehensive QA or browser verification. More domains remain unreviewed.

## Next engineering work
1. Expand quality checks to crime and gym plus data freshness and projections.
2. Trace each recommendation to the source tables and verify logic with representative snapshots.
3. Add CI tests and a staging deployment; block promotion if checks fail.
4. Verify published UI and remove obsolete or contradictory copy.
