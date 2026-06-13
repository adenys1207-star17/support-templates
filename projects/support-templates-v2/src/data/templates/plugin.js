/**
 * Plugin templates — Stripo Plugin v1 і v2 specific cases.
 */

export const pluginTemplates = [
  // === PLUGIN V1 ===
  {
    id: 'plugin-init-error',
    title: 'Plugin: помилка ініціалізації',
    tags: ['plugin', 'v1', 'troubleshooting', 'init'],
    body: `Hi {{client_name}},

The initialization error usually means one of the following:

1. The plugin script is loaded before the DOM is ready
2. Configuration params (pluginId, secret, userId, html, css) are missing or wrong
3. The auth call to your backend returns something other than 200 OK

Could you share:
- The exact error from the browser console
- The full plugin configuration object (you can redact tokens)
- The response from your auth endpoint

Reference: https://support.stripo.email/en/articles/3726002-plugin-initialization

Best,
Denys
Stripo Support`,
    notes: 'Перші питання при будь-якій init-помилці Plugin v1.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3726002-plugin-initialization',
      'https://support.stripo.email/en/articles/3725989-plugin-general-information',
      'https://support.stripo.email/en/articles/4338989-plugin-what-does-the-console-s-error-please-specify-correct-config-params-mean'
    ]
  },
  {
    id: 'plugin-config-params-error',
    title: 'Plugin: "Please specify correct config params"',
    tags: ['plugin', 'v1', 'troubleshooting', 'init'],
    body: `Hi {{client_name}},

The "Please specify correct config params" error means one of the required initialization parameters is missing or has the wrong type. The plugin checks these fields strictly.

Could you double-check that you are passing:
- pluginId (string)
- secretKey (string)
- userId (string)
- html (string, even if empty)
- css (string, even if empty)

If any of these is undefined or null, you will get this error. Full reference: https://support.stripo.email/en/articles/4338989-plugin-what-does-the-console-s-error-please-specify-correct-config-params-mean

Best,
Denys
Stripo Support`,
    notes: 'Дуже типова помилка. Зазвичай undefined в html або css.',
    helpLinks: ['https://support.stripo.email/en/articles/4338989-plugin-what-does-the-console-s-error-please-specify-correct-config-params-mean']
  },
  {
    id: 'plugin-image-gallery-setup',
    title: 'Plugin: налаштування Image Gallery',
    tags: ['plugin', 'v1', 'config', 'images'],
    body: `Hi {{client_name}},

For configuring the Image Gallery in Plugin, the documentation walks through both basic and advanced setups: https://support.stripo.email/en/articles/3738305-plugin-image-gallery

The key parts are:
1. Setting imageGalleryEnabled: true in init config
2. Implementing the gallery API endpoints on your backend
3. Optionally configuring folders: https://support.stripo.email/en/articles/3726061-plugin-image-gallery-folders-configuration

If you want to use AWS S3 specifically, there is a dedicated guide: https://support.stripo.email/en/articles/3726140-plugin-configuration-of-aws-s3-image-storage

What is your current setup so I can point to the most relevant section?

Best,
Denys
Stripo Support`,
    notes: 'Image Gallery — складна тема. Завжди питай про їхній backend.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3738305-plugin-image-gallery',
      'https://support.stripo.email/en/articles/3726061-plugin-image-gallery-folders-configuration',
      'https://support.stripo.email/en/articles/3726140-plugin-configuration-of-aws-s3-image-storage'
    ]
  },
  {
    id: 'plugin-merge-tags',
    title: 'Plugin: налаштування Merge Tags',
    tags: ['plugin', 'v1', 'config', 'merge-tags'],
    body: `Hi {{client_name}},

For setting up Merge Tags in Plugin, you have two options:

1. Static merge tags (defined in init config) — guide: https://support.stripo.email/en/articles/3726070-plugin-merge-tags
2. External merge tags library (loaded dynamically) — guide: https://support.stripo.email/en/articles/5135974-plugin-external-merge-tags-library

The external library is more flexible if your tags depend on the current user or campaign. Static is simpler if your tags are fixed.

Which one fits your use case?

Best,
Denys
Stripo Support`,
    notes: 'Питай static vs external. Це різні шляхи інтеграції.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3726070-plugin-merge-tags',
      'https://support.stripo.email/en/articles/5135974-plugin-external-merge-tags-library'
    ]
  },
  {
    id: 'plugin-custom-modules',
    title: 'Plugin: кастомні модулі (library)',
    tags: ['plugin', 'v1', 'config', 'modules'],
    body: `Hi {{client_name}},

For configuring a custom modules library in Plugin, the docs cover the schema and integration steps: https://support.stripo.email/en/articles/3726064-plugin-configuration-of-custom-modules-library

The main building blocks:
1. modules array in init config — each module has html, css, thumbnail, and metadata
2. Categories for grouping modules in the UI
3. Optional Smart Modules for dynamic data: https://support.stripo.email/en/articles/3978498-plugin-smart-modules

If you want to load modules from your backend dynamically (instead of hardcoding), let me know — there is a separate flow for that.

Best,
Denys
Stripo Support`,
    notes: 'Кастомні модулі — улюблена фіча Enterprise клієнтів.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3726064-plugin-configuration-of-custom-modules-library',
      'https://support.stripo.email/en/articles/3978498-plugin-smart-modules'
    ]
  },
  {
    id: 'plugin-autosave',
    title: 'Plugin: AutoSave не працює',
    tags: ['plugin', 'v1', 'troubleshooting', 'autosave'],
    body: `Hi {{client_name}},

For AutoSave issues in Plugin, the feature requires:

1. An onTemplateUpdated callback in your init config
2. A backend endpoint that accepts the save payload
3. The callback should return a promise that resolves on successful save

Full reference: https://support.stripo.email/en/articles/3726112-plugin-autosaving-feature

Could you share:
- Your current onTemplateUpdated implementation (you can simplify it)
- Whether the callback is being triggered at all (check console logs)
- The network tab response for the save endpoint

Best,
Denys
Stripo Support`,
    notes: 'AutoSave потребує і фронт-колбек, і бекенд-енд.',
    helpLinks: ['https://support.stripo.email/en/articles/3726112-plugin-autosaving-feature']
  },
  {
    id: 'plugin-version-history',
    title: 'Plugin: Version History setup',
    tags: ['plugin', 'v1', 'config', 'version-history'],
    body: `Hi {{client_name}},

For enabling Version History in Plugin, you need to implement these backend endpoints:

- GET versions list
- GET specific version content
- POST to save current version as new

Full schema: https://support.stripo.email/en/articles/3726114-plugin-version-history-and-template-recovery

This is a backend-heavy feature, so the actual implementation depends on your storage (DB, S3, etc.). What stack are you using? I can point to common pitfalls.

Best,
Denys
Stripo Support`,
    notes: 'Version History — Enterprise фіча. Питай про стек.',
    helpLinks: ['https://support.stripo.email/en/articles/3726114-plugin-version-history-and-template-recovery']
  },
  {
    id: 'plugin-webhook-tracking',
    title: 'Plugin: webhook для відстеження активності',
    tags: ['plugin', 'v1', 'config', 'webhook'],
    body: `Hi {{client_name}},

For tracking plugin usage via webhooks, the integration guide is here: https://support.stripo.email/en/articles/9166974-plugin-how-to-track-plugin-usage-with-webhook-integration

You will receive webhook events for plugin launches, template saves, and exports. This is useful for billing/usage analytics on your side.

To set it up, you need:
1. A public endpoint that accepts POST requests
2. Webhook configuration in your Stripo Plugin application settings

Let me know if you need help with the payload schema or signature verification.

Best,
Denys
Stripo Support`,
    notes: 'Webhook integration — частіше потрібно Plugin клієнтам з аналітикою.',
    helpLinks: ['https://support.stripo.email/en/articles/9166974-plugin-how-to-track-plugin-usage-with-webhook-integration']
  },
  {
    id: 'plugin-permissions-api',
    title: 'Plugin: Permissions Checker API',
    tags: ['plugin', 'v1', 'config', 'permissions'],
    body: `Hi {{client_name}},

The Permissions Checker API lets you control which UI actions are available to a specific user (e.g., hide "Save", disable "Export"). Reference: https://support.stripo.email/en/articles/3726109-plugin-permissions-checker-api

For managing user behavior dynamically, there is a more detailed guide: https://support.stripo.email/en/articles/8255727-plugin-how-to-manage-user-behavior-using-the-permission-checker-api

What permission are you trying to control? Some are simple (hide a button), others require server-side checks.

Best,
Denys
Stripo Support`,
    notes: 'Permissions API — для тонкого контролю UI.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3726109-plugin-permissions-checker-api',
      'https://support.stripo.email/en/articles/8255727-plugin-how-to-manage-user-behavior-using-the-permission-checker-api'
    ]
  },
  {
    id: 'plugin-amp-forms',
    title: 'Plugin: AMP Form Services',
    tags: ['plugin', 'v1', 'config', 'amp'],
    body: `Hi {{client_name}},

For AMP Form Services in Plugin, the docs cover both the data structure and the rendering flow: https://support.stripo.email/en/articles/4290267-plugin-amp-form-services

AMP forms in email need a server endpoint that accepts CORS-allowed requests and returns JSON. The endpoint URL is what users enter in the form action.

Are you having trouble with form rendering inside the editor, or with form submission from the actual email in Gmail?

Best,
Denys
Stripo Support`,
    notes: 'AMP — складна тема. Editor display vs actual email submission — два різні випадки.',
    helpLinks: ['https://support.stripo.email/en/articles/4290267-plugin-amp-form-services']
  },
  {
    id: 'plugin-translations',
    title: 'Plugin: змінити переклад інтерфейсу',
    tags: ['plugin', 'v1', 'config', 'i18n'],
    body: `Hi {{client_name}},

To override any translation in Plugin, you can pass a translations object in your init config. Full instructions: https://support.stripo.email/en/articles/7923549-plugin-how-to-override-any-translation

Pattern:
\`\`\`
translations: {
  "editor.toolbar.save": "Your custom label",
  ...
}
\`\`\`

You can find the original keys by inspecting the DOM (data-i18n attribute) or in the documentation. Let me know which specific strings you are trying to change and I can list the exact keys.

Best,
Denys
Stripo Support`,
    notes: 'i18n override — питай конкретні строки.',
    helpLinks: ['https://support.stripo.email/en/articles/7923549-plugin-how-to-override-any-translation']
  },
  {
    id: 'plugin-custom-storage',
    title: 'Plugin: підключити власне сховище',
    tags: ['plugin', 'v1', 'config', 'storage'],
    body: `Hi {{client_name}},

For connecting your custom storage to Stripo Plugin, the integration covers both image and template storage: https://support.stripo.email/en/articles/3978543-plugin-how-can-i-connect-my-custom-storage

This requires implementing backend endpoints that follow our schema. For images specifically, AWS S3 has a dedicated guide: https://support.stripo.email/en/articles/3726140-plugin-configuration-of-aws-s3-image-storage

What storage backend are you planning to use? S3, Google Cloud, Azure, on-prem?

Best,
Denys
Stripo Support`,
    notes: 'Custom storage — Enterprise тема. Питай який бекенд.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3978543-plugin-how-can-i-connect-my-custom-storage',
      'https://support.stripo.email/en/articles/3726140-plugin-configuration-of-aws-s3-image-storage'
    ]
  },
  {
    id: 'plugin-broken-image-icon',
    title: 'Plugin: змінити іконку зламаного зображення',
    tags: ['plugin', 'v1', 'config', 'images'],
    body: `Hi {{client_name}},

To change the broken image icon, you can override it via CSS or config. Guide: https://support.stripo.email/en/articles/6231328-plugin-how-to-change-an-icon-for-the-broken-image

The simplest way is to add a custom CSS rule targeting the broken image class. If you want to swap the icon globally (not just CSS-hide), there is a config option for that too.

Best,
Denys
Stripo Support`,
    notes: 'Дрібна косметика. CSS-override зазвичай достатньо.',
    helpLinks: ['https://support.stripo.email/en/articles/6231328-plugin-how-to-change-an-icon-for-the-broken-image']
  },
  {
    id: 'plugin-no-image-modify',
    title: 'Plugin: заборонити модифікацію зображень',
    tags: ['plugin', 'v1', 'config', 'images', 'permissions'],
    body: `Hi {{client_name}},

To prevent image modification in Plugin, use this config option: https://support.stripo.email/en/articles/6231097-plugin-how-to-prohibit-image-modification

You can prohibit either:
- Editing image properties (crop, resize) but still allow replacing
- Replacing images entirely
- Both

Combine with the Permissions Checker API for finer control if needed.

Best,
Denys
Stripo Support`,
    notes: 'Часто питають клієнти з регульованими галузями.',
    helpLinks: [
      'https://support.stripo.email/en/articles/6231097-plugin-how-to-prohibit-image-modification',
      'https://support.stripo.email/en/articles/3726109-plugin-permissions-checker-api'
    ]
  },
  {
    id: 'plugin-roles',
    title: 'Plugin: Roles and Access Management',
    tags: ['plugin', 'v1', 'config', 'permissions', 'roles'],
    body: `Hi {{client_name}},

For Roles and Access Management in Plugin, the docs cover both built-in roles and how to extend them: https://support.stripo.email/en/articles/3726128-plugin-roles-and-access-management

The built-in roles (Owner, Editor, Viewer) cover most cases. For custom roles or fine-grained permissions, you combine roles with the Permissions Checker API.

What is your team setup? That helps me point to the right pattern.

Best,
Denys
Stripo Support`,
    notes: 'Питай про team setup перед deep-dive.',
    helpLinks: ['https://support.stripo.email/en/articles/3726128-plugin-roles-and-access-management']
  },
  {
    id: 'plugin-toast-effect-error',
    title: 'Plugin: помилка "toast.effect"',
    tags: ['plugin', 'v1', 'troubleshooting'],
    body: `Hi {{client_name}},

The "toast.effect" error usually appears when a CSS dependency is missing or conflicts with your host page styles. Full troubleshooting: https://support.stripo.email/en/articles/3992992-plugin-the-toast-effect-error-in-the-console-and-how-to-solve-it

Quick checks:
1. Make sure you load the plugin CSS file
2. Check for global CSS overrides on .toast or .effect classes in your app
3. Try loading the plugin in an isolated iframe to confirm it is a host CSS conflict

Best,
Denys
Stripo Support`,
    notes: 'Стара специфічна помилка. CSS-conflict майже завжди.',
    helpLinks: ['https://support.stripo.email/en/articles/3992992-plugin-the-toast-effect-error-in-the-console-and-how-to-solve-it']
  },
  {
    id: 'plugin-unique-emails',
    title: 'Plugin: купити додаткові Unique emails',
    tags: ['plugin', 'v1', 'billing', 'unique-emails'],
    body: `Hi {{client_name}},

For acquiring additional Unique emails on your Plugin subscription: https://support.stripo.email/en/articles/7902376-plugin-how-to-acquire-additional-unique-emails-for-your-subscription

The flow goes through the Plugin admin panel under Subscription / Extra Services. If you are on Enterprise, your sales contact can also process it directly.

What is your current plan and how many extra Unique emails do you need? I will forward this to billing.

Best,
Denys
Stripo Support`,
    notes: 'Unique email = окрема одиниця білінгу для Plugin клієнтів.',
    helpLinks: [
      'https://support.stripo.email/en/articles/7902376-plugin-how-to-acquire-additional-unique-emails-for-your-subscription',
      'https://support.stripo.email/en/articles/3728960-plugin-what-is-the-unique-email-s-id'
    ]
  },
  {
    id: 'plugin-public-templates-api',
    title: 'Plugin: доступ до публічних шаблонів через API',
    tags: ['plugin', 'v1', 'api', 'templates'],
    body: `Hi {{client_name}},

For accessing Stripo's public templates library via API: https://support.stripo.email/en/articles/9089077-plugin-how-to-access-stripo-s-public-templates-via-api

You will need API credentials (separate from the plugin auth). The API exposes the catalog by category and lets you import a template into your account.

What is your use case — pre-loading a gallery in your app, or letting users browse?

Best,
Denys
Stripo Support`,
    notes: 'Цей API окремий від Plugin core. Питай use case.',
    helpLinks: ['https://support.stripo.email/en/articles/9089077-plugin-how-to-access-stripo-s-public-templates-via-api']
  },
  {
    id: 'plugin-css-optimization',
    title: 'Plugin: CSS optimization (запобігти inline)',
    tags: ['plugin', 'v1', 'config', 'css'],
    body: `Hi {{client_name}},

To enable CSS optimization and prevent inlining after compilation: https://support.stripo.email/en/articles/9099649-plugin-how-to-enable-css-optimization-in-the-plugin-and-prevent-css-inline-after-compilation

Why this matters: some ESPs handle inlined CSS poorly, or the inlined output blows up the email size beyond limits.

The config flag is documented in the article. Just be aware: disabling inline means more email clients may show degraded rendering, so test in Outlook/Gmail before turning it on permanently.

Best,
Denys
Stripo Support`,
    notes: 'CSS optimization vs inline — компроміс. Не вмикай без тесту.',
    helpLinks: ['https://support.stripo.email/en/articles/9099649-plugin-how-to-enable-css-optimization-in-the-plugin-and-prevent-css-inline-after-compilation']
  },
  {
    id: 'plugin-line-length',
    title: 'Plugin: некоректне відображення через довжину рядка',
    tags: ['plugin', 'v1', 'troubleshooting', 'html'],
    body: `Hi {{client_name}},

The issue with incorrect email display due to HTML line length is documented here: https://support.stripo.email/en/articles/8290138-plugin-dependence-of-incorrect-email-display-on-html-email-line-length

Some email clients (notably older Outlook) wrap long lines automatically, which can break rendering. The fix is to compile the HTML with proper line breaks. This is configurable in plugin's compile settings.

Could you share the HTML output that is causing the issue? I will spot whether it is a line-length issue or something else.

Best,
Denys
Stripo Support`,
    notes: 'Outlook-specific edge case. Просити HTML output.',
    helpLinks: ['https://support.stripo.email/en/articles/8290138-plugin-dependence-of-incorrect-email-display-on-html-email-line-length']
  },
  {
    id: 'plugin-settings-panel-scroll',
    title: 'Plugin: Settings Panel не скролиться',
    tags: ['plugin', 'v1', 'troubleshooting', 'ui'],
    body: `Hi {{client_name}},

For the Settings Panel scroll issue: https://support.stripo.email/en/articles/6972307-plugin-why-can-i-not-scroll-through-the-settings-panel

Usually this is a CSS conflict with your host app — overflow: hidden somewhere up the DOM tree, or a fixed height that does not allow scrolling.

Could you check in DevTools:
1. The .settings-panel container — what is its overflow setting?
2. Any parent containers with overflow: hidden

Best,
Denys
Stripo Support`,
    notes: 'CSS-конфлікт. Завжди питай DevTools.',
    helpLinks: ['https://support.stripo.email/en/articles/6972307-plugin-why-can-i-not-scroll-through-the-settings-panel']
  },

  // === PLUGIN V2 (New Plugin) ===
  {
    id: 'new-plugin-architecture',
    title: 'New Plugin: архітектура і інтеграція',
    tags: ['plugin', 'v2', 'docs', 'architecture'],
    body: `Hi {{client_name}},

For understanding Plugin v2 architecture and integration patterns: https://support.stripo.email/en/articles/11331259-new-plugin-architecture-and-integration

The main changes from v1:
1. Real-time collaboration is built-in (no setup needed for basic use)
2. Authentication has moved to a simpler token-exchange flow
3. The initialization API has a different shape

If you are migrating from v1, also check: https://support.stripo.email/en/articles/11365290-new-plugin-how-to-fix-loading-issues-when-switching-from-plugin-v1-to-v2

What is your current state — fresh integration or migration from v1?

Best,
Denys
Stripo Support`,
    notes: 'Перше питання для будь-якого Plugin v2 запиту.',
    helpLinks: [
      'https://support.stripo.email/en/articles/11331259-new-plugin-architecture-and-integration',
      'https://support.stripo.email/en/articles/11365290-new-plugin-how-to-fix-loading-issues-when-switching-from-plugin-v1-to-v2'
    ]
  },
  {
    id: 'new-plugin-create-app',
    title: 'New Plugin: створити Application',
    tags: ['plugin', 'v2', 'docs', 'setup'],
    body: `Hi {{client_name}},

For creating a Plugin v2 application: https://support.stripo.email/en/articles/11331310-new-plugin-creating-an-application

Steps in summary:
1. Log in to your Stripo Plugin admin
2. Create new application — choose v2 (not v1)
3. Configure the basic settings (domain, callback URLs)
4. You will get a pluginId and secret to use in init config

If you already have a v1 app and want to switch — let me know, the transition is supported but needs some manual steps.

Best,
Denys
Stripo Support`,
    notes: 'Чіткі кроки. Якщо migration — окремий шлях.',
    helpLinks: ['https://support.stripo.email/en/articles/11331310-new-plugin-creating-an-application']
  },
  {
    id: 'new-plugin-connect-editor',
    title: 'New Plugin: підключити редактор',
    tags: ['plugin', 'v2', 'docs', 'init'],
    body: `Hi {{client_name}},

For connecting the Plugin v2 editor to your app: https://support.stripo.email/en/articles/9739899-new-plugin-connecting-the-editor

In short:
1. Load the plugin script from our CDN
2. Call \`window.StripoEditor.init(config)\` with your pluginId, userToken, and container element
3. Handle the onReady callback to know when it is initialized

Authentication details (how to generate userToken): https://support.stripo.email/en/articles/9823311-new-plugin-authentication

Best,
Denys
Stripo Support`,
    notes: 'v2 init простіший за v1, але інакший. Не плутай.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9739899-new-plugin-connecting-the-editor',
      'https://support.stripo.email/en/articles/9823311-new-plugin-authentication'
    ]
  },
  {
    id: 'new-plugin-receive-html',
    title: 'New Plugin: як отримати HTML і CSS з v2',
    tags: ['plugin', 'v2', 'docs', 'export'],
    body: `Hi {{client_name}},

To receive the compiled HTML and CSS from Plugin v2: https://support.stripo.email/en/articles/11384493-new-plugin-how-to-receive-the-html-and-css-from-plugin-v2

The API is event-based:
- Subscribe to the "save" event
- Call \`editor.getCompiledHtml()\` to retrieve current state
- Receive { html, css } payload

The CSS is separated by default in v2 (different from v1, where it could be inlined). If you need it inlined, there is a flag for that.

Best,
Denys
Stripo Support`,
    notes: 'v2 HTML/CSS API. Питай чи треба inline.',
    helpLinks: ['https://support.stripo.email/en/articles/11384493-new-plugin-how-to-receive-the-html-and-css-from-plugin-v2']
  },
  {
    id: 'new-plugin-extensions',
    title: 'New Plugin: Extensions (кастомні фічі)',
    tags: ['plugin', 'v2', 'docs', 'extensions'],
    body: `Hi {{client_name}},

Plugin v2 Extensions let you add custom blocks, panels, and behaviors without forking the codebase: https://support.stripo.email/en/articles/11930155-new-plugin-extensions

Each extension is a JS module that exports a manifest plus React components for any UI parts. You register them with editor.registerExtension(...).

What kind of extension do you want to build? Custom block, custom panel, or something else?

Best,
Denys
Stripo Support`,
    notes: 'Extensions — найпотужніша фіча v2. Питай тип.',
    helpLinks: ['https://support.stripo.email/en/articles/11930155-new-plugin-extensions']
  },
  {
    id: 'new-plugin-custom-modules',
    title: 'New Plugin: кастомні модулі (v2)',
    tags: ['plugin', 'v2', 'docs', 'modules'],
    body: `Hi {{client_name}},

For configuring custom modules library in Plugin v2: https://support.stripo.email/en/articles/12750443-new-plugin-configuration-of-custom-modules-library

The schema is similar to v1 but with a few differences:
1. Modules are passed via the modules option in init config
2. Each module needs html, css, and a thumbnail
3. Categories work the same way

If you are migrating modules from v1, most of them will work as-is — just verify the structure matches the v2 schema.

Best,
Denys
Stripo Support`,
    notes: 'Custom modules v2. Migration v1->v2 — структура схожа.',
    helpLinks: ['https://support.stripo.email/en/articles/12750443-new-plugin-configuration-of-custom-modules-library']
  },
  {
    id: 'new-plugin-enterprise-benefits',
    title: 'New Plugin: переваги Enterprise',
    tags: ['plugin', 'v2', 'billing', 'enterprise'],
    body: `Hi {{client_name}},

For Plugin v2 Enterprise plan benefits: https://support.stripo.email/en/articles/11331499-new-plugin-the-enterprise-plan-benefits

Key benefits over Business:
1. White-label (no Stripo branding)
2. Custom storage for templates and images
3. SLA-backed support with dedicated CSM
4. Unlimited unique emails
5. Custom integrations and feature requests

For plan comparison: https://support.stripo.email/en/articles/11331457-new-plugin-what-s-the-difference-between-free-startup-business-and-enterprise-plans

If you want to discuss Enterprise pricing for your specific volume — I can connect you with our sales team. What is your expected scale?

Best,
Denys
Stripo Support`,
    notes: 'Enterprise sales — питай scale, потім ескалація.',
    helpLinks: [
      'https://support.stripo.email/en/articles/11331499-new-plugin-the-enterprise-plan-benefits',
      'https://support.stripo.email/en/articles/11331457-new-plugin-what-s-the-difference-between-free-startup-business-and-enterprise-plans'
    ]
  }
]
