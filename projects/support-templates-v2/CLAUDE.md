# CLAUDE.md

@.claude/rules/code-style.md

## Про проєкт

Учбовий React-проєкт. Інструмент для команди саппорту Stripo: бібліотека 304 шаблонів відповідей зі змінними, тегами, пошуком і копіюванням, плюс браузер 437 статей Help Center.

## Команди

```bash
npm run dev      # dev-сервер на http://localhost:5173
npm run build    # production-збірка в dist/
npm run preview  # перегляд production-збірки локально
```

## Перевірки перед комітом

```bash
npm run typecheck
npm run test
npm run lint
```

Всі три мають пройти успішно. Запускай без нагадування.

## Стек і архітектура

React 18 + Vite 5, без TypeScript, без роутера, без state-manager. Весь UI-стан — в `App.jsx`.

Два режими: `VIEWS.TEMPLATES` і `VIEWS.HELP_CENTER`.

**Деталі → читай `agent_docs/` за потреби:**

| Тема | Файл |
|------|------|
| Режими застосунку, потік даних, стан | [agent_docs/architecture.md](agent_docs/architecture.md) |
| Структура шаблону, factory-функції, змінні | [agent_docs/templates.md](agent_docs/templates.md) |
| Дані Help Center | [agent_docs/helpcenter.md](agent_docs/helpcenter.md) |
| Дизайн-токени, кольори, шрифти | [agent_docs/design.md](agent_docs/design.md) |
| Ідеї для розширення | [agent_docs/roadmap.md](agent_docs/roadmap.md) |
