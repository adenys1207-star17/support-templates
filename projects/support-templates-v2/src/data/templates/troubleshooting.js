/**
 * Troubleshooting templates — поширені проблеми клієнтів.
 * Частина згенерована з troubleList, частина — кастомні для важливих кейсів.
 */

const troubleList = [
  {
    issue: "the editor will not load",
    url: 'https://support.stripo.email/en/articles/4319421-why-i-can-t-load-open-the-editor',
    slug: 'editor-not-loading',
    title: 'Editor не завантажується'
  },
  {
    issue: "images do not show up in the editor",
    url: 'https://support.stripo.email/en/articles/9099731-why-aren-t-the-images-showing-up-in-the-stripo-editor',
    slug: 'images-not-showing',
    title: "Зображення не відображаються"
  },
  {
    issue: "an image will not upload",
    url: 'https://support.stripo.email/en/articles/7960968-why-cannot-i-upload-an-image',
    slug: 'image-upload-fail',
    title: 'Не вдається завантажити зображення'
  },
  {
    issue: "buttons look different in Outlook",
    url: 'https://support.stripo.email/en/articles/6441017-why-do-buttons-appear-differently-in-outlook',
    slug: 'outlook-buttons',
    title: 'Кнопки в Outlook виглядають інакше'
  },
  {
    issue: "the email gets clipped in Gmail",
    url: 'https://support.stripo.email/en/articles/6404810-why-does-my-email-get-clipped-in-gmail',
    slug: 'gmail-clipping',
    title: 'Лист обрізається в Gmail'
  },
  {
    issue: "text color changes after sending",
    url: 'https://support.stripo.email/en/articles/6445075-why-does-text-change-its-color-after-sending',
    slug: 'text-color-change',
    title: 'Колір тексту змінюється після відправки'
  },
  {
    issue: "Outlook adds extra colors",
    url: 'https://support.stripo.email/en/articles/3978229-why-does-my-email-in-outlook-have-extra-colors',
    slug: 'outlook-extra-colors',
    title: 'Outlook додає зайві кольори'
  },
  {
    issue: "background image will not show in Outlook",
    url: 'https://support.stripo.email/en/articles/3174119-why-i-can-t-see-the-background-image-in-outlook',
    slug: 'outlook-bg-image',
    title: 'Background image не видно в Outlook'
  },
  {
    issue: "the email goes non-responsive after sending from Gmail or Outlook",
    url: 'https://support.stripo.email/en/articles/3174126-email-gets-non-responsive-after-i-send-it-from-gmail-or-outlook',
    slug: 'non-responsive-after-send',
    title: 'Лист не адаптивний після відправки'
  },
  {
    issue: "borders look blurry or inconsistent",
    url: 'https://support.stripo.email/en/articles/5703136-border-thicknesses-are-not-the-same-or-why-do-the-lines-appear-blurry',
    slug: 'blurry-borders',
    title: 'Розмиті/нерівні рамки'
  },
  {
    issue: "the hidden preheader is showing in the body",
    url: 'https://support.stripo.email/en/articles/11364875-why-do-i-see-the-email-text-in-my-hidden-preheader',
    slug: 'preheader-visible',
    title: 'Hidden preheader видно в тілі листа'
  },
  {
    issue: "templates or emails are missing",
    url: 'https://support.stripo.email/en/articles/3988610-why-i-can-t-find-my-templates-emails',
    slug: 'templates-missing',
    title: 'Не можу знайти свої шаблони'
  },
  {
    issue: "the editor behaves oddly because of a browser extension",
    url: 'https://support.stripo.email/en/articles/3986926-the-impact-of-browser-extensions-on-the-editor',
    slug: 'extension-conflict',
    title: 'Browser extension ламає редактор'
  },
  {
    issue: "the email is being exported but not delivered",
    url: 'https://support.stripo.email/en/articles/3174245-i-see-a-notification-that-my-email-is-being-exported-but-it-s-not-delivered-yet',
    slug: 'export-not-delivered',
    title: 'Експорт триває, але лист не приходить'
  },
  {
    issue: "the test email did not arrive",
    url: 'https://support.stripo.email/en/articles/3174226-my-test-email-sent-to-my-email-address-has-still-not-been-delivered',
    slug: 'test-email-missing',
    title: 'Test email не доставився'
  },
  {
    issue: "monthly exports were not renewed",
    url: 'https://support.stripo.email/en/articles/5500164-why-my-exports-were-not-renewed-at-the-beginning-of-the-month',
    slug: 'exports-not-renewed',
    title: 'Експорти не оновились на початку місяця'
  },
  {
    issue: "the email is going to spam",
    url: 'https://support.stripo.email/en/articles/5480967-why-the-email-reach-spam',
    slug: 'spam',
    title: 'Листи потрапляють в спам'
  },
  {
    issue: "the OFT file will not open on macOS",
    url: 'https://support.stripo.email/en/articles/3174317-oft-file-can-t-be-opened-on-macos',
    slug: 'oft-macos',
    title: 'OFT не відкривається на macOS'
  },
  {
    issue: "symbols are being replaced in the code editor",
    url: 'https://support.stripo.email/en/articles/4617773-why-are-symbols-added-to-the-template-replaced-in-the-code-editor',
    slug: 'symbols-replaced',
    title: 'Символи замінюються в code editor'
  },
  {
    issue: "the email is incorrectly displayed in a forwarded mailbox",
    url: 'https://support.stripo.email/en/articles/5194050-incorrect-displaying-of-an-email-in-a-mailbox-connected-to-another-mail-client',
    slug: 'forwarded-mailbox',
    title: 'Некоректне відображення у форвард-mailbox'
  },
  {
    issue: "common issues with Outlook rendering",
    url: 'https://support.stripo.email/en/articles/8340622-common-issues-with-outlook',
    slug: 'outlook-common',
    title: 'Outlook: типові проблеми рендерингу'
  },
  {
    issue: "the link in an exported OFT is not replaced after a change",
    url: 'https://support.stripo.email/en/articles/6451883-why-if-i-change-a-link-in-an-exported-oft-file-the-link-isn-t-replaced-with-a-new-one-after-sending-it',
    slug: 'oft-link-not-replaced',
    title: 'OFT: посилання не оновлюється після зміни'
  },
  {
    issue: "dark mode is breaking the template",
    url: 'https://support.stripo.email/en/articles/11822709-common-issues-in-dark-mode-and-how-to-work-around-them',
    slug: 'dark-mode-issues',
    title: 'Dark mode ламає шаблон'
  }
]

function makeTroubleshootingTemplate({ issue, url, slug, title }) {
  return {
    id: `trouble-${slug}`,
    title,
    tags: ['troubleshooting', slug],
    body: `Hi {{client_name}},

For the issue where ${issue}, our doc covers the most common causes and fixes: ${url}

To narrow it down quickly on my side, could you share:
1. The template ID ({{ticket_id}})
2. Which browser and version you are on
3. A screenshot (or screen recording if the issue is dynamic)
4. The exact steps that trigger it

If you have already tried the steps in the guide and still hit the problem, mention that — I will skip those and go straight to deeper investigation.

Best,
Denys
Stripo Support`,
    notes: `Troubleshooting: "${title}". Завжди питай template ID, браузер, репро-кроки.`,
    helpLinks: [url]
  }
}

export const troubleshootingTemplates = [
  ...troubleList.map(makeTroubleshootingTemplate),

  // === Спеціальні кастомні шаблони для важливих кейсів ===
  {
    id: 'dark-mode-best-practices',
    title: 'Dark Mode: рекомендації при дизайні',
    tags: ['dark-mode', 'design', 'how-to'],
    body: `Hi {{client_name}},

For dark mode best practices when designing in Stripo: https://support.stripo.email/en/articles/3988734-best-practices-for-dark-mode-template-design

Key takeaways:
1. Use transparent PNGs where possible — they adapt to both light and dark backgrounds
2. Avoid pure white (#FFFFFF) backgrounds; off-white softens the inversion
3. Test with the Stripo preview in dark mode AND with at least one real client (Gmail mobile is the strictest)

If your specific issue is more about a broken render, see the workarounds doc: https://support.stripo.email/en/articles/11822709-common-issues-in-dark-mode-and-how-to-work-around-them

Best,
Denys
Stripo Support`,
    notes: 'Дві окремі статті — best practices vs troubleshooting.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3988734-best-practices-for-dark-mode-template-design',
      'https://support.stripo.email/en/articles/11822709-common-issues-in-dark-mode-and-how-to-work-around-them'
    ]
  },
  {
    id: 'braze-bg-color-changed',
    title: 'Braze: чому змінюється background колір',
    tags: ['troubleshooting', 'export', 'braze'],
    body: `Hi {{client_name}},

The background color issue in Braze after export is a known one — Braze processes HTML differently than other ESPs and sometimes strips or alters background styles. Full breakdown: https://support.stripo.email/en/articles/4175114-why-is-the-background-color-changed-in-braze

The recommended workaround is documented in the article. If it does not fully solve your case, share the template ID ({{ticket_id}}) and a screenshot of the rendered email in Braze and I will look at the HTML differences.

Best,
Denys
Stripo Support`,
    notes: 'Специфічна Braze edge case. Workaround в статті.',
    helpLinks: [
      'https://support.stripo.email/en/articles/4175114-why-is-the-background-color-changed-in-braze',
      'https://support.stripo.email/en/articles/7175850-how-to-update-existing-templates-in-your-braze-account'
    ]
  },
  {
    id: 'klaviyo-export-error',
    title: 'Klaviyo: помилка під час експорту',
    tags: ['troubleshooting', 'export', 'klaviyo'],
    body: `Hi {{client_name}},

For Klaviyo export errors, the troubleshooting steps depend on the exact error message: https://support.stripo.email/en/articles/4519417-what-to-do-if-an-error-occurs-during-export-to-klaviyo

Most common causes:
1. API token expired or has wrong scopes
2. Template uses unsupported merge tag syntax for Klaviyo
3. Image URLs blocked (private S3, etc.)

Could you share the exact error message from Klaviyo? That narrows it down in seconds.

Best,
Denys
Stripo Support`,
    notes: 'Klaviyo помилки 80% — токени або merge-теги.',
    helpLinks: [
      'https://support.stripo.email/en/articles/4519417-what-to-do-if-an-error-occurs-during-export-to-klaviyo',
      'https://support.stripo.email/en/articles/3174301-how-to-export-an-email-template-to-klaviyo'
    ]
  },
  {
    id: 'mautic-export-error',
    title: 'Mautic: помилка експорту',
    tags: ['troubleshooting', 'export', 'mautic'],
    body: `Hi {{client_name}},

For Mautic export errors: https://support.stripo.email/en/articles/4528725-what-should-i-do-if-i-face-an-error-while-exporting-to-mautic

Mautic-specific gotchas:
1. CSRF protection sometimes blocks the connection
2. Self-hosted Mautic instances need their domain whitelisted
3. Custom merge tag formats differ from Mautic 3 vs 4

Share the error message and whether you are on self-hosted or Mautic Cloud — that will speed things up.

Best,
Denys
Stripo Support`,
    notes: 'Mautic — часто self-hosted, особливі підводні камені.',
    helpLinks: [
      'https://support.stripo.email/en/articles/4528725-what-should-i-do-if-i-face-an-error-while-exporting-to-mautic',
      'https://support.stripo.email/en/articles/6530643-how-to-export-an-email-template-to-mautic'
    ]
  },
  {
    id: 'hubspot-not-delivered',
    title: 'HubSpot: експорт пройшов, але листа немає',
    tags: ['troubleshooting', 'export', 'hubspot'],
    body: `Hi {{client_name}},

For HubSpot delivery issues after a successful export: https://support.stripo.email/en/articles/3174239-why-could-my-email-not-be-delivered-to-hubspot

The export shows success but the template might be in a different folder than expected, or the integration permissions are read-only.

Could you check in HubSpot:
1. Marketing -> Email -> Drafts (Stripo creates new templates there by default)
2. The connected user's permissions (needs write access to email assets)

Best,
Denys
Stripo Support`,
    notes: 'HubSpot шаблони часто в Drafts, не там де клієнт шукає.',
    helpLinks: ['https://support.stripo.email/en/articles/3174239-why-could-my-email-not-be-delivered-to-hubspot']
  }
]
