/**
 * Бібліотека шаблонів відповідей для Stripo Support.
 *
 * Структура шаблону:
 *   id, title (UA), tags, body (EN), notes (UA, опціонально)
 *
 * Змінні в body: {{variable_name}}
 * Поширені змінні:
 *   {{client_name}}   - ім'я клієнта
 *   {{plan}}          - тарифний план (Free / Basic / Medium / Pro / Prime / Plugin)
 *   {{ticket_id}}     - номер тікету
 *   {{eta}}           - орієнтовний час відповіді
 *   {{issue}}         - короткий опис проблеми
 *   {{esp}}           - назва ESP (Mailchimp, Salesforce, etc.)
 *   {{follow_up}}     - час фолоу-апу
 */

export const coreTemplates = [
  {
    id: 'acknowledge-general',
    title: 'Підтвердження прийому тікету',
    tags: ['general', 'first-response'],
    body: `Hi {{client_name}},

Thanks for reaching out. I have your request about {{issue}} and I am looking into it now. I will get back to you within {{eta}} with an update.

Best,
Denys
Stripo Support`,
    notes: 'Універсальна перша відповідь. Якщо клієнт злий, бери "Empathic acknowledgment".'
  },
  {
    id: 'acknowledge-empathic',
    title: 'Перша відповідь, клієнт роздратований',
    tags: ['general', 'first-response', 'empathy'],
    body: `Hi {{client_name}},

I am sorry you are running into this with {{issue}}, that is frustrating. I am owning this from our side and will come back to you within {{eta}} with a concrete next step.

In the meantime, if there is anything additional you can share (screenshots, console errors, the affected template ID), it will help me move faster.

Best,
Denys
Stripo Support`,
    notes: 'Більше емпатії, прямо беремо проблему на себе. Не пиши "by design" якщо клієнт справді страждає.'
  },
  {
    id: 'cache-clear',
    title: 'Попросити очистити кеш',
    tags: ['editor', 'troubleshooting'],
    body: `Hi {{client_name}},

Could you try clearing the cache for app.stripo.email and reload the page? In Chrome: DevTools (F12) -> right-click the reload button -> "Empty Cache and Hard Reload". In Firefox: Ctrl+Shift+Delete -> Cached Web Content -> Clear.

If the issue persists after a hard reload, please share a screenshot of the browser console (F12 -> Console tab) so I can dig deeper.

Best,
Denys
Stripo Support`,
    notes: 'Базовий тришутер. Кажи конкретно "app.stripo.email", не просто "clear cache".',
    helpLinks: [
      'https://support.stripo.email/en/articles/4319421-why-i-can-t-load-open-the-editor',
      'https://support.stripo.email/en/articles/3986926-the-impact-of-browser-extensions-on-the-editor'
    ]
  },
  {
    id: 'escalation-engineering',
    title: 'Ескалація до інженерів',
    tags: ['escalation', 'bug'],
    body: `Hi {{client_name}},

Thanks for the details on {{issue}}. I have reproduced this on my side and escalated it to our engineering team with ticket {{ticket_id}}.

I will follow up by {{follow_up}} with the next update from engineering. If anything changes before that, I will reach out sooner.

Best,
Denys
Stripo Support`,
    notes: 'Завжди давай конкретний час фолоу-апу. US клієнти на 7-10 годин позаду Києва, врахуй передачу денній зміні.'
  },
  {
    id: 'shift-handover',
    title: 'Передача денній зміні',
    tags: ['general', 'handover'],
    body: `Hi {{client_name}},

Quick heads-up: my shift is ending and I am handing this over to our day team in Kyiv. They will pick it up from {{follow_up}} and continue investigation on {{issue}}.

All context (logs, repro steps, the engineering ticket) is in the thread, so no need to repeat anything on your side.

Best,
Denys
Stripo Support`,
    notes: 'Використовуй наприкінці зміни, коли проблема ще не вирішена. Чесно скажи, що передаєш.'
  },
  {
    id: 'plugin-v1-v2-migration',
    title: 'Plugin v1 -> v2: куди дивитись',
    tags: ['plugin', 'docs'],
    body: `Hi {{client_name}},

For migrating from Plugin v1 to v2, the official guide is here:
https://plugin.stripo.email/getting-started/v2-migration-guide

The main changes that usually catch teams off-guard:
1. Authentication flow has moved
2. Initialization settings have a new structure
3. Some v1 callbacks are renamed or replaced

If you tell me what your current integration looks like (custom modules? AI assistant? webhooks?), I can point to the specific v2 pages relevant to your setup.

Best,
Denys
Stripo Support`,
    notes: 'Для Plugin клієнтів. Не вгадуй, питай, як саме вони інтегровані.',
    helpLinks: [
      'https://support.stripo.email/en/articles/11365290-new-plugin-how-to-fix-loading-issues-when-switching-from-plugin-v1-to-v2',
      'https://support.stripo.email/en/articles/11331259-new-plugin-architecture-and-integration',
      'https://support.stripo.email/en/articles/9823311-new-plugin-authentication',
      'https://support.stripo.email/en/articles/11331310-new-plugin-creating-an-application'
    ]
  },
  {
    id: 'eoa-test-fail',
    title: 'EOA тест не проходить',
    tags: ['testing', 'troubleshooting'],
    body: `Hi {{client_name}},

For the Email on Acid test that did not complete, could you check the following:

1. Which clients did you select? (some have longer queue times than others)
2. Did you receive an error in the editor, or did the test just hang?
3. Have you reached your monthly EOA tests quota? You can check it under Settings -> Billing -> Subscriptions.

If you are out of tests, you can buy 10 extra for $20 via Extra Services. Otherwise I will dig into the test session logs once I have the details above.

Best,
Denys
Stripo Support`,
    notes: 'Спочатку дізнайся причину (квота, помилка, час очікування), потім дій.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3174221-how-to-test-email-templates-across-multiple-email-clients-with-emailonacid',
      'https://support.stripo.email/en/articles/8541313-testing-configuration',
      'https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services'
    ]
  },
  {
    id: 'export-esp-issue',
    title: 'Проблема з експортом в ESP',
    tags: ['export', 'troubleshooting'],
    body: `Hi {{client_name}},

For the export issue to {{esp}}, a few things to check on my side first:

1. Is the integration still authorized? Settings -> Integrations -> {{esp}} -> Reconnect if needed.
2. Was the template exported in HTML or AMP+HTML mode?
3. Does the issue happen with all templates or just this specific one ({{ticket_id}})?

If you can share the template ID and the exact error message from {{esp}}, I can reproduce it on a test account.

Best,
Denys
Stripo Support`,
    notes: 'ESP-specific експорти найчастіше падають через токени, AMP, або кастомні merge-теги.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3174252-how-to-export-email-templates',
      'https://support.stripo.email/en/articles/3174255-what-if-my-esp-is-not-on-the-export-list',
      'https://support.stripo.email/en/articles/3174270-how-to-export-the-amp-html-version-of-your-email-template'
    ]
  },
  {
    id: 'feature-request',
    title: 'Прийняли feature request',
    tags: ['general', 'product'],
    body: `Hi {{client_name}},

Thanks for the suggestion about {{issue}}. That is a fair point, especially for {{plan}} customers who rely on this flow daily.

I have logged this with our product team. I cannot promise a timeline because it depends on the roadmap, but I will flag it as coming from a {{plan}} user, which carries weight in prioritization.

If you have a workaround in mind that would unblock you in the meantime, happy to discuss.

Best,
Denys
Stripo Support`,
    notes: 'Не обіцяй timeline. Кажи що передаєш продукту, але без хибних надій.'
  },
  {
    id: 'billing-redirect',
    title: 'Білінг питання — перенаправлення',
    tags: ['billing'],
    body: `Hi {{client_name}},

For billing questions like {{issue}}, our billing team handles those directly. I have already forwarded your message to them with ticket {{ticket_id}}, and they will respond within 1 business day.

If it is urgent (failed payment, account locked), let me know and I will escalate the priority.

Best,
Denys
Stripo Support`,
    notes: 'Білінг — окрема команда. Передавай, але не залишай клієнта без відповіді.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8592166-how-do-billings-work',
      'https://support.stripo.email/en/articles/3174401-can-i-get-a-refund',
      'https://support.stripo.email/en/articles/8559806-are-there-any-discounts',
      'https://support.stripo.email/en/articles/8557973-how-to-update-the-payment-method'
    ]
  },
  {
    id: 'plugin-auth-401',
    title: 'Plugin: помилка авторизації 401',
    tags: ['plugin', 'troubleshooting'],
    body: `Hi {{client_name}},

The 401 you are seeing on Plugin init usually points to one of three things:

1. Plugin token expired or was rotated (check your backend response in the Network tab)
2. Wrong pluginId or secret in the initialization settings
3. Token was generated for a different environment (staging vs production)

Could you share:
- The full request/response from the failing auth call (you can redact the token)
- Whether this started happening recently or right after a deploy

Docs reference: https://plugin.stripo.email/getting-started/authentication

Best,
Denys
Stripo Support`,
    notes: 'Plugin v2 auth. Для v1 referense інший URL: stripo.email/plugin-api/',
    helpLinks: [
      'https://support.stripo.email/en/articles/3726060-plugin-authentication',
      'https://support.stripo.email/en/articles/9823311-new-plugin-authentication',
      'https://support.stripo.email/en/articles/3726002-plugin-initialization',
      'https://support.stripo.email/en/articles/4338989-plugin-what-does-the-console-s-error-please-specify-correct-config-params-mean'
    ]
  },
  {
    id: 'bug-confirmed',
    title: 'Підтверджуємо баг + timeline',
    tags: ['bug', 'escalation'],
    body: `Hi {{client_name}},

I was able to reproduce {{issue}} on my side, so this is a confirmed bug. Engineering has it as ticket {{ticket_id}}.

Current ETA from the team: {{eta}}. I will follow up by {{follow_up}} either way (with the fix or with a status update).

If a workaround is critical for your team right now, let me know what your current workflow looks like and I will see what we can offer.

Best,
Denys
Stripo Support`,
    notes: 'Чесно визнаємо баг, даємо timeline, пропонуємо workaround якщо є.'
  }
]


