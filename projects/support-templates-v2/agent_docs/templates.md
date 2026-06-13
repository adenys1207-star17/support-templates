# Шаблони

## Структура шаблону

```js
{
  id: 'unique-id',            // унікальний, kebab-case
  title: 'UA назва',          // відображається в карточці і панелі
  tags: ['tag1', 'tag2'],     // для фільтрації; allTags будується автоматично в index.js
  body: `EN текст {{var}}`,   // англійська — саме тіло відповіді
  notes: 'UA підказка',       // (опц.) нотатка для агента
  helpLinks: ['url1']         // (опц.) посилання резолвляться через helpArticlesByUrl
}
```

## Factory-функції

Більшість шаблонів створена через factory-функції — достатньо розширити список:

```js
makeEspTemplate(esp)                          // esp-exports.js — 95 шт
makeHowToTemplate({ topic, url, slug })       // editor.js
makeTroubleshootingTemplate({ issue, url })   // troubleshooting.js
makeKbTemplate({ topic, url, slug })          // knowledge-base.js
```

Hand-crafted шаблони — для нюансованих кейсів (рефанди, ескалації, SSO).

## Система змінних

`src/utils/variables.js` — два чистих хелпери:
- `extractVariables(body)` → `string[]` — знаходить `{{name}}` у тексті шаблону.
- `substituteVariables(body, values)` → `string` — підставляє значення; якщо поле порожнє, `{{name}}` лишається як плейсхолдер.

`variableLabels` і `variablePlaceholders` — UI-метадані для відомих змінних: `client_name`, `plan`, `ticket_id`, `eta`, `issue`, `esp`, `follow_up`. Для невідомих — fallback на ім'я змінної.
