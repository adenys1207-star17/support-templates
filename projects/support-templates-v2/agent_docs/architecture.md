# Архітектура застосунку

## Два режими

`App.jsx` керує перемикачем `VIEWS.TEMPLATES` / `VIEWS.HELP_CENTER`:

- **Шаблони** — сайдбар: пошук + теги + список карток (`TemplateCard`); головна панель: `TemplatePanel` з формою підстановки змінних і превʼю.
- **Help Center** — весь правий контент замінюється на `HelpCenterBrowser`. Клік на статтю копіює URL, іконка ↗ відкриває в новій вкладці.

## Потік даних шаблонів

```
src/data/templates/index.js   — збирає всі 9 категорій в один масив
  → App.jsx                   — фільтрація (search + activeTag) через useMemo
    → TemplateCard             — клік → setSelectedId
    → TemplatePanel            — рендер вибраного шаблону
```

## Стан

`App.jsx` зберігає весь UI-стан: `search`, `activeTag`, `selectedId`, `showAllTags`, `view`.

Жодного контексту чи пропс-дриллінгу — компоненти отримують лише те, що їм потрібно.
