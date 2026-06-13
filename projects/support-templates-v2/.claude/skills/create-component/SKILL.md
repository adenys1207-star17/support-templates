---
name: create-component
description: Створює React компонент за шаблоном команди. Використовуй: /create-component ComponentName
disable-model-invocation: true
---

Створи React компонент $ARGUMENTS у `src/shared/ui/`.

Вимоги:

- TypeScript з PropTypes інтерфейсом
- SCSS module (`$ARGUMENTS.module.scss`)
- `export function`, не `export default`
- Базовий unit тест у `__tests__/`
- Barrel export через `index.ts`

Структура:

```
src/shared/ui/$ARGUMENTS/
├── $ARGUMENTS.tsx
├── $ARGUMENTS.module.scss
├── __tests__/
│   └── $ARGUMENTS.test.tsx
└── index.ts
```
