/**
 * Editor templates — Stripo Editor (old + new) how-to and troubleshooting.
 *
 * Частина шаблонів згенерована з howToList через makeHowToTemplate.
 */

const howToList = [
  { topic: 'add UTM tags', url: 'https://support.stripo.email/en/articles/4006297-how-to-add-utm-tags-to-the-email-template', slug: 'utm-tags' },
  { topic: 'add a button to an image', url: 'https://support.stripo.email/en/articles/5480587-how-to-add-a-button-to-the-image', slug: 'button-on-image' },
  { topic: 'add a video', url: 'https://support.stripo.email/en/articles/3174105-how-to-add-a-video-to-your-email-template', slug: 'video' },
  { topic: 'add a table', url: 'https://support.stripo.email/en/articles/3274099-how-to-add-a-table-to-an-email-template', slug: 'table' },
  { topic: 'add a calendar event (.ics)', url: 'https://support.stripo.email/en/articles/7205625-how-to-add-a-calendar-event-to-emails', slug: 'calendar-event' },
  { topic: 'add a feedback form', url: 'https://support.stripo.email/en/articles/3997464-how-to-add-the-feedback-form-to-my-email', slug: 'feedback-form' },
  { topic: 'add a shadow effect', url: 'https://support.stripo.email/en/articles/4006223-how-to-add-the-shadow-effect', slug: 'shadow' },
  { topic: 'create rounded corners', url: 'https://support.stripo.email/en/articles/4030715-how-to-make-containers-and-structures-rounding', slug: 'rounded' },
  { topic: 'add a background image', url: 'https://support.stripo.email/en/articles/7958972-how-to-add-a-background-image-to-your-designs', slug: 'background-image' },
  { topic: 'create an email signature', url: 'https://support.stripo.email/en/articles/4877809-how-to-create-an-email-signature', slug: 'signature' },
  { topic: 'translate a template', url: 'https://support.stripo.email/en/articles/5420116-how-to-translate-an-email-template', slug: 'translate' },
  { topic: 'use Google Sheets data', url: 'https://support.stripo.email/en/articles/4506759-google-sheets-how-to-pull-data-from-google-sheets-into-emails', slug: 'google-sheets' },
  { topic: 'create an abandoned cart block', url: 'https://support.stripo.email/en/articles/8005814-how-to-create-an-abandoned-cart-block-in-your-email-template', slug: 'abandoned-cart' },
  { topic: 'change the timer date after export', url: 'https://support.stripo.email/en/articles/4190151-how-to-change-the-date-in-the-timer-if-the-email-is-already-exported', slug: 'timer-date' },
  { topic: 'add anchor hyperlinks', url: 'https://support.stripo.email/en/articles/3174098-how-to-apply-anchor-hyperlinks', slug: 'anchor-links' },
  { topic: 'adapt your own HTML to Stripo', url: 'https://support.stripo.email/en/articles/6420354-how-to-adapt-my-own-html-code-to-stripo', slug: 'adapt-html' },
  { topic: 'set up a custom domain (Cloudflare DNS)', url: 'https://support.stripo.email/en/articles/4738720-how-to-configure-a-custom-domain-name-using-dns-configurations-for-cloudflare-providers-only', slug: 'custom-domain' },
  { topic: 'tune mobile view', url: 'https://support.stripo.email/en/articles/3173998-how-to-tune-mobile-view', slug: 'mobile-view' },
  { topic: 'get a plain text version', url: 'https://support.stripo.email/en/articles/6867505-how-do-i-get-a-plain-text-version-of-my-email', slug: 'plain-text' },
  { topic: 'write RTL text', url: 'https://support.stripo.email/en/articles/5481431-how-to-write-texts-from-right-to-left-rtl', slug: 'rtl' },
  { topic: 'test and export AMP emails', url: 'https://support.stripo.email/en/articles/5480604-how-to-test-and-export-amp-emails-with-stripo-to-your-esp', slug: 'amp' },
  { topic: 'set up CORS for custom fonts', url: 'https://support.stripo.email/en/articles/4241059-how-to-set-up-cors-policy-for-fonts', slug: 'cors-fonts' },
  { topic: 'reduce image size for mobile', url: 'https://support.stripo.email/en/articles/7978355-how-to-reduce-the-image-for-mobile-devices', slug: 'image-mobile' },
  { topic: 'create an HTML carousel', url: 'https://support.stripo.email/en/articles/7127353-how-to-create-an-html-carousel-for-your-emails', slug: 'carousel' },
  { topic: 'move templates between projects', url: 'https://support.stripo.email/en/articles/5240697-how-to-move-copy-email-templates-to-another-project-account', slug: 'move-templates' },
  { topic: 'customize bullet lists', url: 'https://support.stripo.email/en/articles/5378775-how-to-customize-your-bullet-list-in-the-template', slug: 'bullet-list' },
  { topic: 'set up a hidden preheader', url: 'https://support.stripo.email/en/articles/3173999-what-is-the-hidden-preheader-and-how-to-set-it', slug: 'preheader' }
]

function makeHowToTemplate({ topic, url, slug }) {
  const capitalized = topic.charAt(0).toUpperCase() + topic.slice(1)
  return {
    id: `howto-${slug}`,
    title: `How-To: ${capitalized}`,
    tags: ['editor', 'how-to', slug],
    body: `Hi {{client_name}},

For ${topic}, here is the step-by-step guide from our docs: ${url}

If after following the guide you still hit something specific (a missing button, an unexpected behavior, or a particular template ID where it does not work), share a screenshot or the template ID ({{ticket_id}}) and I will check on my side.

Best,
Denys
Stripo Support`,
    notes: `How-to для "${topic}". Якщо клієнт скаржиться що не зрозумів — питай конкретно де застряг.`,
    helpLinks: [url]
  }
}

export const editorTemplates = [
  ...howToList.map(makeHowToTemplate),

  // === Editor concepts (хто питає "як працює") ===
  {
    id: 'editor-how-it-works',
    title: 'Як працює Stripo Editor (загально)',
    tags: ['editor', 'onboarding'],
    body: `Hi {{client_name}},

Welcome to Stripo. Here is the general overview of how the editor works: https://support.stripo.email/en/articles/3173900-how-does-stripo-editor-work

The core concepts:
1. Stripes are the horizontal sections of your email (header, content, footer)
2. Structures inside stripes hold containers (1, 2, 3 columns)
3. Containers hold basic blocks (text, image, button, video, etc.)
4. Modules are pre-built reusable combinations of blocks

Once you grasp these four levels, building emails becomes fast. For a hands-on tutorial: https://support.stripo.email/en/articles/3174016-how-to-create-an-email-template-with-stripo

Best,
Denys
Stripo Support`,
    notes: 'Базовий onboarding шаблон. Для нових клієнтів.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3173900-how-does-stripo-editor-work',
      'https://support.stripo.email/en/articles/3174016-how-to-create-an-email-template-with-stripo'
    ]
  },
  {
    id: 'editor-modules-vs-blocks',
    title: 'Modules vs Basic Blocks — пояснення',
    tags: ['editor', 'concepts'],
    body: `Hi {{client_name}},

The difference between Modules and Basic Blocks often confuses new users:

- Basic Blocks are atomic — single text, image, button, divider, etc.
- Modules are pre-built combinations of basic blocks (e.g., a hero section with image + heading + button).

Modules:
https://support.stripo.email/en/articles/3173943-what-are-the-modules-how-to-use-them

Basic Blocks:
https://support.stripo.email/en/articles/3173914-what-are-the-basic-blocks-how-to-use-them

Best,
Denys
Stripo Support`,
    notes: 'Поширене непорозуміння. Поясни різницю на прикладі.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3173943-what-are-the-modules-how-to-use-them',
      'https://support.stripo.email/en/articles/3173914-what-are-the-basic-blocks-how-to-use-them'
    ]
  },
  {
    id: 'editor-ai-hub',
    title: 'AI Hub — як використовувати',
    tags: ['editor', 'ai'],
    body: `Hi {{client_name}},

Stripo's AI Hub centralizes all AI features: text improvement, subject line generation, AI-generated images, and more. Full guide: https://support.stripo.email/en/articles/10489559-enhance-your-email-workflow-with-stripo-s-ai-hub

For specific use cases:
- Improving text: https://support.stripo.email/en/articles/7890599-improve-your-text-using-artificial-intelligence-ai
- Subject lines: https://support.stripo.email/en/articles/7211158-improve-subject-lines-and-hidden-preheaders-using-artificial-intelligence-ai

AI features are available on paid plans. Let me know what you are trying to generate and I will point to the right tool.

Best,
Denys
Stripo Support`,
    notes: 'AI Hub — групова тема. Питай конкретно що треба.',
    helpLinks: [
      'https://support.stripo.email/en/articles/10489559-enhance-your-email-workflow-with-stripo-s-ai-hub',
      'https://support.stripo.email/en/articles/7890599-improve-your-text-using-artificial-intelligence-ai',
      'https://support.stripo.email/en/articles/7211158-improve-subject-lines-and-hidden-preheaders-using-artificial-intelligence-ai'
    ]
  },
  {
    id: 'editor-display-conditions',
    title: 'Display Conditions — показати блок певній аудиторії',
    tags: ['editor', 'advanced', 'segmentation'],
    body: `Hi {{client_name}},

Display Conditions let you show or hide blocks based on the recipient's data (e.g., show one CTA to free users, another to paid). Guide: https://support.stripo.email/en/articles/4658803-display-conditions

The feature relies on conditional syntax that your ESP processes during send. So before using it, confirm your ESP supports the same conditional language. Most major ESPs (Mailchimp, Klaviyo, Salesforce) do — but the syntax differs.

Which ESP are you targeting? I will point to the right reference.

Best,
Denys
Stripo Support`,
    notes: 'Display Conditions — ESP-залежна фіча. Питай ESP перш ніж відповідати детально.',
    helpLinks: ['https://support.stripo.email/en/articles/4658803-display-conditions']
  },
  {
    id: 'editor-version-history',
    title: 'Version History — повернутись до попередньої версії',
    tags: ['editor', 'recovery'],
    body: `Hi {{client_name}},

Stripo keeps a Version History for each template, so you can revert to a previous state if something gets accidentally deleted or changed. Guide: https://support.stripo.email/en/articles/3174023-what-is-the-version-history-how-to-use-it

How to access:
1. Open the template
2. Click the "Version History" button in the top bar
3. Pick a version and either preview it or restore

Note: Version History retention depends on your plan. Free plans have limited history, paid plans keep more versions.

Best,
Denys
Stripo Support`,
    notes: 'Часто рятує клієнтів. Перевір retention на їхньому плані.',
    helpLinks: ['https://support.stripo.email/en/articles/3174023-what-is-the-version-history-how-to-use-it']
  },
  {
    id: 'editor-share-template',
    title: 'Share Email Template — поділитись з колегою',
    tags: ['editor', 'collaboration'],
    body: `Hi {{client_name}},

To share a template with a colleague or external reviewer: https://support.stripo.email/en/articles/4765660-share-an-email-template

You can either:
1. Invite them to the account (if they need full edit access)
2. Generate a shareable preview link (read-only, no account needed)
3. For real-time collaboration (new editor): https://support.stripo.email/en/articles/9651951-new-editor-upgrade-your-email-creation-with-stripo-s-new-co-editing-feature

Which option fits — quick review or active co-editing?

Best,
Denys
Stripo Support`,
    notes: 'Share = read-only або edit. Co-editing — окрема фіча (new editor).',
    helpLinks: [
      'https://support.stripo.email/en/articles/4765660-share-an-email-template',
      'https://support.stripo.email/en/articles/9651951-new-editor-upgrade-your-email-creation-with-stripo-s-new-co-editing-feature'
    ]
  },
  {
    id: 'editor-old-vs-new',
    title: 'Old Editor vs New Editor — як переключитись',
    tags: ['editor', 'onboarding'],
    body: `Hi {{client_name}},

For switching between the old and new editors: https://support.stripo.email/en/articles/9929424-how-to-switch-between-the-old-and-new-editors

The new editor has:
- Real-time co-editing
- Improved commenting
- New AI tools
- Better dark mode handling

Switching is per-template, not account-wide — so you can experiment on a copy without affecting your existing templates. If you want to compare features: https://support.stripo.email/en/articles/14156998-advantages-of-the-new-editor

Best,
Denys
Stripo Support`,
    notes: 'New editor поступово замінює old. Можна спробувати на копії.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9929424-how-to-switch-between-the-old-and-new-editors',
      'https://support.stripo.email/en/articles/14156998-advantages-of-the-new-editor'
    ]
  },
  {
    id: 'new-editor-co-editing',
    title: 'New Editor: Co-Editing (живе спільне редагування)',
    tags: ['new-editor', 'collaboration'],
    body: `Hi {{client_name}},

Co-Editing in the new editor lets multiple team members work on the same template at the same time, with live cursor positions and changes visible to everyone. Guide: https://support.stripo.email/en/articles/9651951-new-editor-upgrade-your-email-creation-with-stripo-s-new-co-editing-feature

For comments and review workflows: https://support.stripo.email/en/articles/10316159-new-editor-what-is-stripo-s-commenting-feature-and-how-can-it-boost-your-workflow

This works only in the new editor. Make sure all collaborators have access to the account and the template.

Best,
Denys
Stripo Support`,
    notes: 'Co-editing — тільки в новому редакторі. Класичний use case Pro+ команд.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9651951-new-editor-upgrade-your-email-creation-with-stripo-s-new-co-editing-feature',
      'https://support.stripo.email/en/articles/10316159-new-editor-what-is-stripo-s-commenting-feature-and-how-can-it-boost-your-workflow'
    ]
  }
]
