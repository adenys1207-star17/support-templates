-- Таблиця для трекінгу копіювань шаблонів
-- Виконай в Supabase SQL Editor: https://supabase.com/dashboard/project/_/sql

create table if not exists copy_events (
  id           uuid        primary key default gen_random_uuid(),
  template_id  text        not null,
  template_title text      not null,
  created_at   timestamptz default now()
);

-- Row Level Security
alter table copy_events enable row level security;

-- Анонімні користувачі можуть додавати події (фронтенд без авторизації)
create policy "anon can insert copy_events"
  on copy_events for insert
  to anon
  with check (true);

-- Анонімні можуть читати (для майбутніх usage stats)
create policy "anon can select copy_events"
  on copy_events for select
  to anon
  using (true);
