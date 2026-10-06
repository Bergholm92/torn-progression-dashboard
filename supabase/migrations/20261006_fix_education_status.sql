-- Education status hardening.
-- A stale API snapshot may still label a completed course as "current".
-- Any dashboard recommendation must also respect ends_at.

create or replace view analytics.action_center_display_dashboard as
select d.*
from analytics.action_center_display_en d
where (
  d.category <> 'war'
  or exists (
    select 1
    from analytics.latest_war w
    where analytics.is_current_war_active(w.status, w.ends_at)
  )
)
and (
  d.category <> 'education'
  or d.state <> 'IN_PROGRESS'
  or exists (
    select 1
    from analytics.latest_education e
    where e.status = 'current'
      and (e.ends_at is null or e.ends_at > now())
  )
);
