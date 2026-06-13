/**
 * Stripo Help Center — повний реєстр статей.
 *
 * Дані: https://support.stripo.email/en (станом на ~2026)
 *
 * Структура:
 *   helpCenterCollections — масив колекцій, кожна з sections, в кожній articles.
 *   allHelpArticles       — плаский список усіх статей (для пошуку).
 *
 * Як оновлювати: пройтись по https://support.stripo.email/en/collections/...,
 * скопіювати назви + URL. Можна попросити Claude Code зробити скрипт-парсер.
 */

export const helpCenterCollections = [
  {
    id: 'setting-up',
    name: 'Setting Up Stripo',
    description: 'Налаштування акаунту, профілю, воркспейсу, користувачів',
    url: 'https://support.stripo.email/en/collections/405288-setting-up-stripo',
    sections: [
      {
        name: 'General Information',
        articles: [
          { title: 'How to register an account in Stripo?', url: 'https://support.stripo.email/en/articles/9490697-how-to-register-an-account-in-stripo' },
          { title: 'Create and validate your Stripo account', url: 'https://support.stripo.email/en/articles/1627693-create-and-validate-your-stripo-account' },
          { title: 'Issues with verification or password reset emails', url: 'https://support.stripo.email/en/articles/7941134-issues-with-verification-or-password-reset-emails' },
          { title: 'The Settings tab management', url: 'https://support.stripo.email/en/articles/8556870-the-settings-tab-management' },
          { title: 'Account environment', url: 'https://support.stripo.email/en/articles/8570627-account-environment' }
        ]
      },
      {
        name: 'Profile Configuration',
        articles: [
          { title: 'Changing personal data in the "Profile" menu', url: 'https://support.stripo.email/en/articles/8582585-changing-personal-data-in-the-profile-menu' },
          { title: 'Password Management', url: 'https://support.stripo.email/en/articles/8540845-password-management' },
          { title: 'How to use two-factor authentication in Stripo?', url: 'https://support.stripo.email/en/articles/8393879-how-to-use-two-factor-authentication-in-stripo' },
          { title: 'Account removal', url: 'https://support.stripo.email/en/articles/8557917-account-removal' },
          { title: 'Protecting Your Account: Dealing with a Leaked Password', url: 'https://support.stripo.email/en/articles/9595689-protecting-your-account-dealing-with-a-leaked-password' }
        ]
      },
      {
        name: 'Workspace Configuration',
        articles: [
          { title: 'Workspace Exploration', url: 'https://support.stripo.email/en/articles/8582214-workspace-exploration' },
          { title: 'What is a Project and how to use it?', url: 'https://support.stripo.email/en/articles/8559828-what-is-a-project-and-how-to-use-it' },
          { title: 'What is Group and how to use it?', url: 'https://support.stripo.email/en/articles/8544471-what-is-group-and-how-to-use-it' },
          { title: 'Image Storage configuration', url: 'https://support.stripo.email/en/articles/8540479-image-storage-configuration' },
          { title: 'Archive Project', url: 'https://support.stripo.email/en/articles/8540501-archive-project' },
          { title: 'Managing custom fonts', url: 'https://support.stripo.email/en/articles/3174076-managing-custom-fonts' },
          { title: 'Define default social networks', url: 'https://support.stripo.email/en/articles/8540509-define-default-social-networks' },
          { title: 'Personalization configuration. Create a list of dynamic tags', url: 'https://support.stripo.email/en/articles/8560549-personalization-configuration-create-a-list-of-dynamic-tags' },
          { title: 'Custom domain for email previews', url: 'https://support.stripo.email/en/articles/8587448-custom-domain-for-email-previews' },
          { title: 'Displaying of Predefined Templates', url: 'https://support.stripo.email/en/articles/8573182-displaying-of-predefined-templates' },
          { title: 'Minimize CSS for Better Email Performance', url: 'https://support.stripo.email/en/articles/10577934-minimize-css-for-better-email-performance' },
          { title: 'Single Sign-On', url: 'https://support.stripo.email/en/articles/9581909-single-sign-on' },
          { title: 'Configure Okta for SSO', url: 'https://support.stripo.email/en/articles/10231014-configure-okta-for-sso' },
          { title: 'Configure Entra ID for SSO', url: 'https://support.stripo.email/en/articles/10235550-configure-entra-id-for-sso' },
          { title: 'Configure OneLogin for SSO', url: 'https://support.stripo.email/en/articles/10245781-configure-onelogin-for-sso' }
        ]
      },
      {
        name: 'User Management',
        articles: [
          { title: 'How to invite members to the Stripo account?', url: 'https://support.stripo.email/en/articles/8557951-how-to-invite-members-to-the-stripo-account' },
          { title: 'Understanding of Roles and Permissions', url: 'https://support.stripo.email/en/articles/3173877-understanding-of-roles-and-permissions' },
          { title: 'How to change the owner of the Medium, Pro, or Prime account?', url: 'https://support.stripo.email/en/articles/5481108-how-to-change-the-owner-of-the-medium-pro-or-prime-account' },
          { title: 'How to switсh from a personal account to a shared one?', url: 'https://support.stripo.email/en/articles/8548611-how-to-switсh-from-a-personal-account-to-a-shared-one' }
        ]
      }
    ]
  },
  {
    id: 'billing',
    name: 'Billing Questions',
    description: 'Тарифи, підписки, платежі, рефанди',
    url: 'https://support.stripo.email/en/collections/1842972-billing-questions',
    sections: [
      {
        name: 'Understanding of Pricing Plans',
        articles: [
          { title: 'How long can I use the FREE subscription?', url: 'https://support.stripo.email/en/articles/8575250-how-long-can-i-use-the-free-subscription' },
          { title: "What's the difference between FREE, BASIC, and MEDIUM plans?", url: 'https://support.stripo.email/en/articles/8607303-what-s-the-difference-between-free-basic-and-medium-plans' },
          { title: "What's the difference between PRO and PRIME plans?", url: 'https://support.stripo.email/en/articles/7854142-what-s-the-difference-between-pro-and-prime-plans' },
          { title: "What's the difference between FREE and BASIC plans?", url: 'https://support.stripo.email/en/articles/5882638-what-s-the-difference-between-free-and-basic-plans' }
        ]
      },
      {
        name: 'Subscriptions',
        articles: [
          { title: 'Are there any discounts?', url: 'https://support.stripo.email/en/articles/8559806-are-there-any-discounts' },
          { title: 'Could I make a one-time payment?', url: 'https://support.stripo.email/en/articles/8559819-could-i-make-a-one-time-payment' },
          { title: 'Could I make a payment by bank transfer?', url: 'https://support.stripo.email/en/articles/8592123-could-i-make-a-payment-by-bank-transfer' },
          { title: 'How do billings work?', url: 'https://support.stripo.email/en/articles/8592166-how-do-billings-work' },
          { title: 'How can I cancel my subscription?', url: 'https://support.stripo.email/en/articles/8558025-how-can-i-cancel-my-subscription' },
          { title: 'How to apply the promo-code?', url: 'https://support.stripo.email/en/articles/8550260-how-to-apply-the-promo-code' },
          { title: "Exploring Stripo's Extra Services", url: 'https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services' },
          { title: 'How to update the payment method?', url: 'https://support.stripo.email/en/articles/8557973-how-to-update-the-payment-method' }
        ]
      },
      {
        name: 'Payments and Refunds',
        articles: [
          { title: 'Can I get a refund?', url: 'https://support.stripo.email/en/articles/3174401-can-i-get-a-refund' },
          { title: 'How can I receive a bill for my financial team?', url: 'https://support.stripo.email/en/articles/8568647-how-can-i-receive-a-bill-for-my-financial-team' },
          { title: 'How can I use a different email for billing?', url: 'https://support.stripo.email/en/articles/8568633-how-can-i-use-a-different-email-for-billing' },
          { title: 'Tax-Exempt Subscription Payments', url: 'https://support.stripo.email/en/articles/11906175-tax-exempt-subscription-payments' }
        ]
      }
    ]
  },
  {
    id: 'plugin',
    name: 'Plugin Questions',
    description: 'Stripo Plugin v1 — інтеграція, налаштування, troubleshooting',
    url: 'https://support.stripo.email/en/collections/1843109-plugin-questions',
    sections: [
      {
        name: 'Getting Started',
        articles: [
          { title: '(Plugin) How to create a Plugin Application in Stripo?', url: 'https://support.stripo.email/en/articles/9496554-plugin-how-to-create-a-plugin-application-in-stripo' },
          { title: '(Plugin) General Information', url: 'https://support.stripo.email/en/articles/3725989-plugin-general-information' },
          { title: '(Plugin) Displaying the editor', url: 'https://support.stripo.email/en/articles/3726183-plugin-displaying-the-editor' },
          { title: '(Plugin) Initialization', url: 'https://support.stripo.email/en/articles/3726002-plugin-initialization' },
          { title: '(Plugin) Authentication', url: 'https://support.stripo.email/en/articles/3726060-plugin-authentication' },
          { title: "(Plugin) What's the difference between Free, Startup, Business, and Enterprise plans?", url: 'https://support.stripo.email/en/articles/8442478-plugin-what-s-the-difference-between-free-startup-business-and-enterprise-plans' },
          { title: '(Plugin) The Enterprise plan benefits', url: 'https://support.stripo.email/en/articles/9614381-plugin-the-enterprise-plan-benefits' }
        ]
      },
      {
        name: 'UI Configuration',
        articles: [
          { title: '(Plugin) Interface appearance configuration', url: 'https://support.stripo.email/en/articles/3738282-plugin-interface-appearance-configuration' },
          { title: '(Plugin) Image Gallery', url: 'https://support.stripo.email/en/articles/3738305-plugin-image-gallery' },
          { title: '(Plugin) Image gallery. Folders configuration', url: 'https://support.stripo.email/en/articles/3726061-plugin-image-gallery-folders-configuration' },
          { title: '(Plugin) Stock images configuration', url: 'https://support.stripo.email/en/articles/3738479-plugin-stock-images-configuration' },
          { title: '(Plugin) Configuration of custom modules library', url: 'https://support.stripo.email/en/articles/3726064-plugin-configuration-of-custom-modules-library' },
          { title: '(Plugin) Merge Tags', url: 'https://support.stripo.email/en/articles/3726070-plugin-merge-tags' },
          { title: '(Plugin) Special Links', url: 'https://support.stripo.email/en/articles/6614827-plugin-special-links' },
          { title: '(Plugin) Managing fonts', url: 'https://support.stripo.email/en/articles/3726072-plugin-managing-fonts' },
          { title: '(Plugin) List of custom font sizes', url: 'https://support.stripo.email/en/articles/3726077-plugin-list-of-custom-font-sizes' },
          { title: '(Plugin) Custom Color Palette', url: 'https://support.stripo.email/en/articles/3726081-plugin-custom-color-palette' },
          { title: '(Plugin) Menu Items', url: 'https://support.stripo.email/en/articles/6614852-plugin-menu-items' },
          { title: '(Plugin) Display Сonditions', url: 'https://support.stripo.email/en/articles/4233629-plugin-display-сonditions' },
          { title: '(Plugin) Undo-redo features', url: 'https://support.stripo.email/en/articles/3726085-plugin-undo-redo-features' },
          { title: '(Plugin) Social Networks', url: 'https://support.stripo.email/en/articles/3726091-plugin-social-networks' },
          { title: '(Plugin) Managing basic blocks', url: 'https://support.stripo.email/en/articles/3726093-plugin-managing-basic-blocks' },
          { title: '(Plugin) Advanced controls settings', url: 'https://support.stripo.email/en/articles/3726094-plugin-advanced-controls-settings' },
          { title: '(Plugin) Artificial intelligence assistant for text blocks and smart modules', url: 'https://support.stripo.email/en/articles/7906763-plugin-artificial-intelligence-assistant-for-text-blocks-and-smart-modules' }
        ]
      },
      {
        name: 'Server Configuration',
        articles: [
          { title: '(Plugin) Permissions checker API', url: 'https://support.stripo.email/en/articles/3726109-plugin-permissions-checker-api' },
          { title: '(Plugin) AutoSaving feature', url: 'https://support.stripo.email/en/articles/3726112-plugin-autosaving-feature' },
          { title: '(Plugin) Version History and Template Recovery', url: 'https://support.stripo.email/en/articles/3726114-plugin-version-history-and-template-recovery' },
          { title: '(Plugin) How to track plugin usage with webhook integration?', url: 'https://support.stripo.email/en/articles/9166974-plugin-how-to-track-plugin-usage-with-webhook-integration' }
        ]
      },
      {
        name: 'Plugin Invocations',
        articles: [
          { title: '(Plugin) Backend API', url: 'https://support.stripo.email/en/articles/3726124-plugin-backend-api' },
          { title: '(Plugin) JS API functions', url: 'https://support.stripo.email/en/articles/3726123-plugin-js-api-functions' }
        ]
      },
      {
        name: 'Roles and access managements',
        articles: [
          { title: '(Plugin) Roles and access management', url: 'https://support.stripo.email/en/articles/3726128-plugin-roles-and-access-management' }
        ]
      },
      {
        name: 'Custom Components',
        articles: [
          { title: '(Plugin) External Images Library', url: 'https://support.stripo.email/en/articles/3726134-plugin-external-images-library' },
          { title: '(Plugin) External Video Library', url: 'https://support.stripo.email/en/articles/3726136-plugin-external-video-library' },
          { title: '(Plugin) External Merge tags Library', url: 'https://support.stripo.email/en/articles/5135974-plugin-external-merge-tags-library' },
          { title: '(Plugin) File picker for links', url: 'https://support.stripo.email/en/articles/3726139-plugin-file-picker-for-links' },
          { title: '(Plugin) Smart Modules', url: 'https://support.stripo.email/en/articles/3978498-plugin-smart-modules' },
          { title: '(Plugin) AMP-Form Services', url: 'https://support.stripo.email/en/articles/4290267-plugin-amp-form-services' },
          { title: '(Plugin) Editor extensions (Custom blocks in the editor)', url: 'https://support.stripo.email/en/articles/4290277-plugin-editor-extensions-custom-blocks-in-the-editor' },
          { title: "(Plugin) Blocks' Custom Order", url: 'https://support.stripo.email/en/articles/6622348-plugin-blocks-custom-order' },
          { title: '(Plugin) Plugin notifications', url: 'https://support.stripo.email/en/articles/3726096-plugin-plugin-notifications' },
          { title: '(Plugin) External Display Conditions', url: 'https://support.stripo.email/en/articles/7923785-plugin-external-display-conditions' }
        ]
      },
      {
        name: 'Helpers',
        articles: [
          { title: '(Plugin) Configuration of AWS S3 image storage', url: 'https://support.stripo.email/en/articles/3726140-plugin-configuration-of-aws-s3-image-storage' },
          { title: '(Plugin) Dependence of incorrect email display on HTML Email line length', url: 'https://support.stripo.email/en/articles/8290138-plugin-dependence-of-incorrect-email-display-on-html-email-line-length' },
          { title: '(Plugin) How to manage user behavior using the Permission Checker API?', url: 'https://support.stripo.email/en/articles/8255727-plugin-how-to-manage-user-behavior-using-the-permission-checker-api' },
          { title: '(Plugin) How can I connect my custom storage?', url: 'https://support.stripo.email/en/articles/3978543-plugin-how-can-i-connect-my-custom-storage' },
          { title: '(Plugin) How to change an icon for the "broken" image?', url: 'https://support.stripo.email/en/articles/6231328-plugin-how-to-change-an-icon-for-the-broken-image' },
          { title: '(Plugin) How to override any translation?', url: 'https://support.stripo.email/en/articles/7923549-plugin-how-to-override-any-translation' },
          { title: '(Plugin) How to prohibit image modification?', url: 'https://support.stripo.email/en/articles/6231097-plugin-how-to-prohibit-image-modification' },
          { title: '(Plugin) Update timer links in the cloned email template', url: 'https://support.stripo.email/en/articles/9160176-plugin-update-timer-links-in-the-cloned-email-template' },
          { title: '(Plugin) How to protect your customers from ID substitution in the ApiRequestData?', url: 'https://support.stripo.email/en/articles/7733322-plugin-how-to-protect-your-customers-from-id-substitution-in-the-apirequestdata' },
          { title: '(Plugin) How to save a template and get the code?', url: 'https://support.stripo.email/en/articles/7924086-plugin-how-to-save-a-template-and-get-the-code' },
          { title: '(Plugin) How to create a preview?', url: 'https://support.stripo.email/en/articles/7964034-plugin-how-to-create-a-preview' },
          { title: '(Plugin) How to remove the "Last change" info from the Version history button?', url: 'https://support.stripo.email/en/articles/8174393-plugin-how-to-remove-the-last-change-info-from-the-version-history-button' },
          { title: '(Plugin) How to acquire additional Unique emails for your subscription?', url: 'https://support.stripo.email/en/articles/7902376-plugin-how-to-acquire-additional-unique-emails-for-your-subscription' },
          { title: "(Plugin) How to access Stripo's public templates via API?", url: 'https://support.stripo.email/en/articles/9089077-plugin-how-to-access-stripo-s-public-templates-via-api' },
          { title: '(Plugin) How to enable CSS optimization in the Plugin and prevent CSS inline after compilation?', url: 'https://support.stripo.email/en/articles/9099649-plugin-how-to-enable-css-optimization-in-the-plugin-and-prevent-css-inline-after-compilation' },
          { title: '(Plugin) Initialization error in the IE browser', url: 'https://support.stripo.email/en/articles/4719256-plugin-initialization-error-in-the-ie-browser' },
          { title: '(Plugin) The folder in the image gallery has the wrong name', url: 'https://support.stripo.email/en/articles/4338795-plugin-the-folder-in-the-image-gallery-has-the-wrong-name' },
          { title: '(Plugin) The toast.effect error in the console and how to solve it?', url: 'https://support.stripo.email/en/articles/3992992-plugin-the-toast-effect-error-in-the-console-and-how-to-solve-it' },
          { title: "(Plugin) What does the console's error \"Please specify correct config params\" mean?", url: 'https://support.stripo.email/en/articles/4338989-plugin-what-does-the-console-s-error-please-specify-correct-config-params-mean' },
          { title: "(Plugin) What is the Unique email's ID?", url: 'https://support.stripo.email/en/articles/3728960-plugin-what-is-the-unique-email-s-id' },
          { title: '(Plugin) Why can I not scroll through the Settings Panel?', url: 'https://support.stripo.email/en/articles/6972307-plugin-why-can-i-not-scroll-through-the-settings-panel' },
          { title: '(Plugin) Why can I not change the Settings Panel styles?', url: 'https://support.stripo.email/en/articles/7923974-plugin-why-can-i-not-change-the-settings-panel-styles' }
        ]
      }
    ]
  },
  {
    id: 'new-plugin',
    name: 'New Plugin Questions',
    description: 'Stripo Plugin v2 — нова версія з реалтайм колаборацією',
    url: 'https://support.stripo.email/en/collections/12835879-new-plugin-questions',
    sections: [
      {
        name: 'Getting Started',
        articles: [
          { title: '(New Plugin) Architecture and Integration', url: 'https://support.stripo.email/en/articles/11331259-new-plugin-architecture-and-integration' },
          { title: '(New Plugin) Creating an Application', url: 'https://support.stripo.email/en/articles/11331310-new-plugin-creating-an-application' },
          { title: '(New Plugin) Connecting the Editor', url: 'https://support.stripo.email/en/articles/9739899-new-plugin-connecting-the-editor' },
          { title: '(New Plugin) Authentication', url: 'https://support.stripo.email/en/articles/9823311-new-plugin-authentication' },
          { title: "(New Plugin) What's the difference between Free, Startup, Business, and Enterprise plans?", url: 'https://support.stripo.email/en/articles/11331457-new-plugin-what-s-the-difference-between-free-startup-business-and-enterprise-plans' },
          { title: '(New Plugin) The Enterprise plan benefits', url: 'https://support.stripo.email/en/articles/11331499-new-plugin-the-enterprise-plan-benefits' }
        ]
      },
      {
        name: 'Helpers',
        articles: [
          { title: '(New Plugin) How to fix loading issues when switching from Plugin v1 to v2?', url: 'https://support.stripo.email/en/articles/11365290-new-plugin-how-to-fix-loading-issues-when-switching-from-plugin-v1-to-v2' },
          { title: '(New Plugin) How to receive the HTML and CSS from Plugin v2?', url: 'https://support.stripo.email/en/articles/11384493-new-plugin-how-to-receive-the-html-and-css-from-plugin-v2' },
          { title: 'New Plugin Extensions', url: 'https://support.stripo.email/en/articles/11930155-new-plugin-extensions' },
          { title: '(New Plugin) Configuration of custom modules library', url: 'https://support.stripo.email/en/articles/12750443-new-plugin-configuration-of-custom-modules-library' }
        ]
      }
    ]
  },
  {
    id: 'exporting-testing',
    name: 'Exporting and Testing',
    description: 'Експорт в ESP (90+ систем), тестування через EOA, troubleshooting',
    url: 'https://support.stripo.email/en/collections/1843108-exporting-and-testing',
    sections: [
      {
        name: 'General Questions',
        articles: [
          { title: 'How to preview email templates?', url: 'https://support.stripo.email/en/articles/3174213-how-to-preview-email-templates' },
          { title: 'Testing configuration', url: 'https://support.stripo.email/en/articles/8541313-testing-configuration' },
          { title: 'How to test email templates across multiple email clients with EmailonAcid?', url: 'https://support.stripo.email/en/articles/3174221-how-to-test-email-templates-across-multiple-email-clients-with-emailonacid' },
          { title: 'How to export email templates?', url: 'https://support.stripo.email/en/articles/3174252-how-to-export-email-templates' },
          { title: 'How to purchase extra exports?', url: 'https://support.stripo.email/en/articles/6995606-how-to-purchase-extra-exports' },
          { title: 'Bulk export', url: 'https://support.stripo.email/en/articles/5511771-bulk-export' }
        ]
      },
      {
        name: 'Export to Specific ESP',
        articles: [
          { title: 'What if my ESP is not on the export list?', url: 'https://support.stripo.email/en/articles/3174255-what-if-my-esp-is-not-on-the-export-list' },
          { title: 'How to export an email template to ActiveCampaign?', url: 'https://support.stripo.email/en/articles/3174256-how-to-export-an-email-template-to-activecampaign' },
          { title: 'How to export an email template to ActiveTrail?', url: 'https://support.stripo.email/en/articles/5652189-how-to-export-an-email-template-to-activetrail' },
          { title: 'How to export an email template to Act-On?', url: 'https://support.stripo.email/en/articles/3535121-how-to-export-an-email-template-to-act-on' },
          { title: 'How to export emails to Acoustic Campaign?', url: 'https://support.stripo.email/en/articles/3535016-how-to-export-emails-to-acoustic-campaign' },
          { title: 'How to export an email template to Acumbamail?', url: 'https://support.stripo.email/en/articles/5095011-how-to-export-an-email-template-to-acumbamail' },
          { title: 'How to export an email template to Amazon Pinpoint?', url: 'https://support.stripo.email/en/articles/4803139-how-to-export-an-email-template-to-amazon-pinpoint' },
          { title: 'How to export an email template to Amazon SES?', url: 'https://support.stripo.email/en/articles/3334640-how-to-export-an-email-template-to-amazon-ses' },
          { title: 'How to export the AMP HTML version of your email template?', url: 'https://support.stripo.email/en/articles/3174270-how-to-export-the-amp-html-version-of-your-email-template' },
          { title: 'How to export an email template to AWeber?', url: 'https://support.stripo.email/en/articles/3461966-how-to-export-an-email-template-to-aweber' },
          { title: 'How to export an email template to Benchmark Email?', url: 'https://support.stripo.email/en/articles/3871555-how-to-export-an-email-template-to-benchmark-email' },
          { title: 'How to export an email template to Bird (former SparkPost)?', url: 'https://support.stripo.email/en/articles/3174329-how-to-export-an-email-template-to-bird-former-sparkpost' },
          { title: 'How to export an email template to BirdSend?', url: 'https://support.stripo.email/en/articles/4803155-how-to-export-an-email-template-to-birdsend' },
          { title: 'How to export an email template to Blueshift?', url: 'https://support.stripo.email/en/articles/6525996-how-to-export-an-email-template-to-blueshift' },
          { title: 'How to export an email template to Braze?', url: 'https://support.stripo.email/en/articles/3174276-how-to-export-an-email-template-to-braze' },
          { title: 'How to export an email template to Brevo (former SendinBlue)?', url: 'https://support.stripo.email/en/articles/4149574-how-to-export-an-email-template-to-brevo-former-sendinblue' },
          { title: 'How to export an email template to Campaign Monitor?', url: 'https://support.stripo.email/en/articles/3174279-how-to-export-an-email-template-to-campaign-monitor' },
          { title: 'How to export an email template to CleverReach?', url: 'https://support.stripo.email/en/articles/5743118-how-to-export-an-email-template-to-cleverreach' },
          { title: 'How to export an email template to CleverTap?', url: 'https://support.stripo.email/en/articles/10183895-how-to-export-an-email-template-to-clevertap' },
          { title: 'How to export an email template to Constant Contact?', url: 'https://support.stripo.email/en/articles/3174281-how-to-export-an-email-template-to-constant-contact' },
          { title: 'How to export an email template to Dotdigital?', url: 'https://support.stripo.email/en/articles/3551991-how-to-export-an-email-template-to-dotdigital' },
          { title: 'How to export an email template to EcoMail?', url: 'https://support.stripo.email/en/articles/6771647-how-to-export-an-email-template-to-ecomail' },
          { title: 'How to export an email template to E-goi?', url: 'https://support.stripo.email/en/articles/4803145-how-to-export-an-email-template-to-e-goi' },
          { title: 'How to export an email template to Elastic Email?', url: 'https://support.stripo.email/en/articles/4410231-how-to-export-an-email-template-to-elastic-email' },
          { title: 'How to export an email template to eSputnik?', url: 'https://support.stripo.email/en/articles/3174282-how-to-export-an-email-template-to-esputnik' },
          { title: 'How to export an email template to ExpertSender?', url: 'https://support.stripo.email/en/articles/5477841-how-to-export-an-email-template-to-expertsender' },
          { title: 'How to export an email template to Follow Up Boss?', url: 'https://support.stripo.email/en/articles/12841627-how-to-export-an-email-template-to-follow-up-boss' },
          { title: 'How to export an email template to GetResponse?', url: 'https://support.stripo.email/en/articles/3174284-how-to-export-an-email-template-to-getresponse' },
          { title: 'How to export an email template to GetResponse MAX?', url: 'https://support.stripo.email/en/articles/6554581-how-to-export-an-email-template-to-getresponse-max' },
          { title: 'How to export an email template to Gmail?', url: 'https://support.stripo.email/en/articles/3174291-how-to-export-an-email-template-to-gmail' },
          { title: 'How to export email templates to Google Cloud?', url: 'https://support.stripo.email/en/articles/11929369-how-to-export-email-templates-to-google-cloud' },
          { title: 'How to export email templates as HTML code?', url: 'https://support.stripo.email/en/articles/3174293-how-to-export-email-templates-as-html-code' },
          { title: 'How to export an email template to HubSpot?', url: 'https://support.stripo.email/en/articles/3174298-how-to-export-an-email-template-to-hubspot' },
          { title: 'How to export an email template to iContact?', url: 'https://support.stripo.email/en/articles/3353704-how-to-export-an-email-template-to-icontact' },
          { title: 'How to export an email template as an image?', url: 'https://support.stripo.email/en/articles/4997096-how-to-export-an-email-template-as-an-image' },
          { title: 'How to export an email template to Iterable?', url: 'https://support.stripo.email/en/articles/3601444-how-to-export-an-email-template-to-iterable' },
          { title: 'How to export an email template to Klaviyo?', url: 'https://support.stripo.email/en/articles/3174301-how-to-export-an-email-template-to-klaviyo' },
          { title: 'How to export an email template to Mailchimp?', url: 'https://support.stripo.email/en/articles/3174302-how-to-export-an-email-template-to-mailchimp' },
          { title: 'How to export an email template to MailClickConvert?', url: 'https://support.stripo.email/en/articles/3461975-how-to-export-an-email-template-to-mailclickconvert' },
          { title: 'How to export an email template to Maileon?', url: 'https://support.stripo.email/en/articles/3174304-how-to-export-an-email-template-to-maileon' },
          { title: 'How to export an email template to Mailerlite?', url: 'https://support.stripo.email/en/articles/8866827-how-to-export-an-email-template-to-mailerlite' },
          { title: 'How to export an email template to Mailgun?', url: 'https://support.stripo.email/en/articles/3174307-how-to-export-an-email-template-to-mailgun' },
          { title: 'How to export an email template to Mailjet?', url: 'https://support.stripo.email/en/articles/3174311-how-to-export-an-email-template-to-mailjet' },
          { title: 'How to export email templates to Mailercloud?', url: 'https://support.stripo.email/en/articles/9886946-how-to-export-email-templates-to-mailercloud' },
          { title: 'How to export an email template to Mailpro?', url: 'https://support.stripo.email/en/articles/6771534-how-to-export-an-email-template-to-mailpro' },
          { title: 'How to export an email template to Mailtrap?', url: 'https://support.stripo.email/en/articles/11431744-how-to-export-an-email-template-to-mailtrap' },
          { title: 'How to export an email template to MailUp?', url: 'https://support.stripo.email/en/articles/4894315-how-to-export-an-email-template-to-mailup' },
          { title: 'How to export an email template to MailWizz?', url: 'https://support.stripo.email/en/articles/4517600-how-to-export-an-email-template-to-mailwizz' },
          { title: 'How to export an email template to Make?', url: 'https://support.stripo.email/en/articles/9587487-how-to-export-an-email-template-to-make' },
          { title: 'How to export an email template to Mandrill?', url: 'https://support.stripo.email/en/articles/3477402-how-to-export-an-email-template-to-mandrill' },
          { title: 'How to export an email template to Marketo?', url: 'https://support.stripo.email/en/articles/3535147-how-to-export-an-email-template-to-marketo' },
          { title: 'How to export an email template to Mautic?', url: 'https://support.stripo.email/en/articles/6530643-how-to-export-an-email-template-to-mautic' },
          { title: 'How to export an email template to Mindbaz?', url: 'https://support.stripo.email/en/articles/9822531-how-to-export-an-email-template-to-mindbaz' },
          { title: 'How to export an email template to MoEngage?', url: 'https://support.stripo.email/en/articles/6771604-how-to-export-an-email-template-to-moengage' },
          { title: 'How to export an email template to MoonMail?', url: 'https://support.stripo.email/en/articles/5095067-how-to-export-an-email-template-to-moonmail' },
          { title: 'How to export an email template to Moosend?', url: 'https://support.stripo.email/en/articles/3722694-how-to-export-an-email-template-to-moosend' },
          { title: 'How to export email templates to n8n.io?', url: 'https://support.stripo.email/en/articles/11053864-how-to-export-email-templates-to-n8n-io' },
          { title: 'How to export an email template to Netcore?', url: 'https://support.stripo.email/en/articles/12257492-how-to-export-an-email-template-to-netcore' },
          { title: 'How to export an email template to Ongage?', url: 'https://support.stripo.email/en/articles/3462010-how-to-export-an-email-template-to-ongage' },
          { title: 'How to export an email template to OneSignal?', url: 'https://support.stripo.email/en/articles/8393855-how-to-export-an-email-template-to-onesignal' },
          { title: 'How to export an email template to Ontraport?', url: 'https://support.stripo.email/en/articles/6531230-how-to-export-an-email-template-to-ontraport' },
          { title: 'How to export an email template as PDF file?', url: 'https://support.stripo.email/en/articles/3174320-how-to-export-an-email-template-as-pdf-file' },
          { title: 'How to export email templates to Omnisend?', url: 'https://support.stripo.email/en/articles/6486213-how-to-export-email-templates-to-omnisend' },
          { title: 'How to export an email template to OpenCRM?', url: 'https://support.stripo.email/en/articles/4803060-how-to-export-an-email-template-to-opencrm' },
          { title: 'How to export an email template to Optimove?', url: 'https://support.stripo.email/en/articles/9351635-how-to-export-an-email-template-to-optimove' },
          { title: 'How to export an email template to Oracle Eloqua?', url: 'https://support.stripo.email/en/articles/4893186-how-to-export-an-email-template-to-oracle-eloqua' },
          { title: 'How to export an email template to the Outlook app?', url: 'https://support.stripo.email/en/articles/3174312-how-to-export-an-email-template-to-the-outlook-app' },
          { title: 'How to export an email template to Outlook Web?', url: 'https://support.stripo.email/en/articles/4410226-how-to-export-an-email-template-to-outlook-web' },
          { title: 'How to export an email template to Pabbly?', url: 'https://support.stripo.email/en/articles/5358400-how-to-export-an-email-template-to-pabbly' },
          { title: 'How to export an email template to Pardot?', url: 'https://support.stripo.email/en/articles/7174220-how-to-export-an-email-template-to-pardot' },
          { title: 'How to export an email template to Pega?', url: 'https://support.stripo.email/en/articles/6485634-how-to-export-an-email-template-to-pega' },
          { title: 'How to export an email template to Pepipost?', url: 'https://support.stripo.email/en/articles/3462259-how-to-export-an-email-template-to-pepipost' },
          { title: 'How to export an email template to Postmark?', url: 'https://support.stripo.email/en/articles/3477420-how-to-export-an-email-template-to-postmark' },
          { title: 'How to export an email template to Postup?', url: 'https://support.stripo.email/en/articles/9495715-how-to-export-an-email-template-to-postup' },
          { title: 'How to export an email template to Promio.Connect?', url: 'https://support.stripo.email/en/articles/6771555-how-to-export-an-email-template-to-promio-connect' },
          { title: 'How to export an email template to Pubrio?', url: 'https://support.stripo.email/en/articles/12647251-how-to-export-an-email-template-to-pubrio' },
          { title: 'How to export an email template to ReachMail?', url: 'https://support.stripo.email/en/articles/5603387-how-to-export-an-email-template-to-reachmail' },
          { title: 'How to export an email template to Reteno?', url: 'https://support.stripo.email/en/articles/8304139-how-to-export-an-email-template-to-reteno' },
          { title: 'How to export an email template to RULE?', url: 'https://support.stripo.email/en/articles/5627514-how-to-export-an-email-template-to-rule' },
          { title: 'How to export an email template to Salesforce Marketing Cloud?', url: 'https://support.stripo.email/en/articles/3174321-how-to-export-an-email-template-to-salesforce-marketing-cloud' },
          { title: 'How to export email templates to Selzy?', url: 'https://support.stripo.email/en/articles/9858739-how-to-export-email-templates-to-selzy' },
          { title: 'How to export an email template to Sender?', url: 'https://support.stripo.email/en/articles/10666959-how-to-export-an-email-template-to-sender' },
          { title: 'How to export an email template to SendGrid?', url: 'https://support.stripo.email/en/articles/3174323-how-to-export-an-email-template-to-sendgrid' },
          { title: 'How to export an email template to Sendloop?', url: 'https://support.stripo.email/en/articles/3462319-how-to-export-an-email-template-to-sendloop' },
          { title: 'How to export an email template to SendPulse?', url: 'https://support.stripo.email/en/articles/3174327-how-to-export-an-email-template-to-sendpulse' },
          { title: 'How to export an email template to SendWithUs?', url: 'https://support.stripo.email/en/articles/5358345-how-to-export-an-email-template-to-sendwithus' },
          { title: 'How to export an email template to Sendy?', url: 'https://support.stripo.email/en/articles/4594551-how-to-export-an-email-template-to-sendy' },
          { title: 'How to export an email template to SharpSpring?', url: 'https://support.stripo.email/en/articles/3601483-how-to-export-an-email-template-to-sharpspring' },
          { title: 'How to export email templates to Ticketor?', url: 'https://support.stripo.email/en/articles/11929922-how-to-export-email-templates-to-ticketor' },
          { title: 'How to export an email template to UniOne?', url: 'https://support.stripo.email/en/articles/13335279-how-to-export-an-email-template-to-unione' },
          { title: 'How to export an email template to UseINBOX?', url: 'https://support.stripo.email/en/articles/5676293-how-to-export-an-email-template-to-useinbox' },
          { title: 'How to export an email template to Useinsider?', url: 'https://support.stripo.email/en/articles/8340627-how-to-export-an-email-template-to-useinsider' },
          { title: 'How to export an email template to User.com?', url: 'https://support.stripo.email/en/articles/5358421-how-to-export-an-email-template-to-user-com' },
          { title: 'How to export an email template to WhatCounts?', url: 'https://support.stripo.email/en/articles/12257489-how-to-export-an-email-template-to-whatcounts' },
          { title: 'How to export an email template by using a Webhook?', url: 'https://support.stripo.email/en/articles/4194155-how-to-export-an-email-template-by-using-a-webhook' },
          { title: 'How to export an email template to Yespo?', url: 'https://support.stripo.email/en/articles/8304163-how-to-export-an-email-template-to-yespo' },
          { title: 'How to export an email template to Zapier?', url: 'https://support.stripo.email/en/articles/3462537-how-to-export-an-email-template-to-zapier' },
          { title: 'How to export an email template to Zeta?', url: 'https://support.stripo.email/en/articles/3725789-how-to-export-an-email-template-to-zeta' },
          { title: 'How to export an email template to Zoho Campaigns?', url: 'https://support.stripo.email/en/articles/3871552-how-to-export-an-email-template-to-zoho-campaigns' },
          { title: 'How to export an email template to Zoho Mail?', url: 'https://support.stripo.email/en/articles/6525989-how-to-export-an-email-template-to-zoho-mail' },
          { title: 'How to export an email template to Zoho MarketingHub (Marketing Automation)?', url: 'https://support.stripo.email/en/articles/5361332-how-to-export-an-email-template-to-zoho-marketinghub-marketing-automation' }
        ]
      },
      {
        name: 'Troubleshooting',
        articles: [
          { title: "I see a notification that my email is being exported, but it's not delivered yet", url: 'https://support.stripo.email/en/articles/3174245-i-see-a-notification-that-my-email-is-being-exported-but-it-s-not-delivered-yet' },
          { title: 'How to update existing templates in your Braze account?', url: 'https://support.stripo.email/en/articles/7175850-how-to-update-existing-templates-in-your-braze-account' },
          { title: "OFT file can't be opened on MacOs", url: 'https://support.stripo.email/en/articles/3174317-oft-file-can-t-be-opened-on-macos' },
          { title: 'My test email sent to my email address has still not been delivered', url: 'https://support.stripo.email/en/articles/3174226-my-test-email-sent-to-my-email-address-has-still-not-been-delivered' },
          { title: 'Why could my email not be delivered to HubSpot?', url: 'https://support.stripo.email/en/articles/3174239-why-could-my-email-not-be-delivered-to-hubspot' },
          { title: 'Why my exports were not renewed at the beginning of the month?', url: 'https://support.stripo.email/en/articles/5500164-why-my-exports-were-not-renewed-at-the-beginning-of-the-month' },
          { title: 'What should I do if I face an error while exporting to Mautic?', url: 'https://support.stripo.email/en/articles/4528725-what-should-i-do-if-i-face-an-error-while-exporting-to-mautic' },
          { title: 'Why is the background color changed in Braze?', url: 'https://support.stripo.email/en/articles/4175114-why-is-the-background-color-changed-in-braze' },
          { title: 'What to do if an error occurs during export to Klaviyo?', url: 'https://support.stripo.email/en/articles/4519417-what-to-do-if-an-error-occurs-during-export-to-klaviyo' },
          { title: 'Why the email reach SPAM?', url: 'https://support.stripo.email/en/articles/5480967-why-the-email-reach-spam' }
        ]
      }
    ]
  },
  {
    id: 'editor',
    name: 'Editor Questions',
    description: 'Old Editor — базові концепції, як використовувати, troubleshooting',
    url: 'https://support.stripo.email/en/collections/1843110-editor-questions',
    sections: [
      {
        name: 'General Questions',
        articles: [
          { title: 'How does Stripo editor work?', url: 'https://support.stripo.email/en/articles/3173900-how-does-stripo-editor-work' },
          { title: 'How to switch between the old and new editors?', url: 'https://support.stripo.email/en/articles/9929424-how-to-switch-between-the-old-and-new-editors' },
          { title: 'Understanding of Email Storage Templates', url: 'https://support.stripo.email/en/articles/9159155-understanding-of-email-storage-templates' },
          { title: 'How to create an email template with Stripo?', url: 'https://support.stripo.email/en/articles/3174016-how-to-create-an-email-template-with-stripo' },
          { title: 'How to save email templates?', url: 'https://support.stripo.email/en/articles/3174028-how-to-save-email-templates' },
          { title: 'How to tune Mobile View?', url: 'https://support.stripo.email/en/articles/3173998-how-to-tune-mobile-view' },
          { title: 'Understanding of Stripo Template Layout', url: 'https://support.stripo.email/en/articles/3173888-understanding-of-stripo-template-layout' },
          { title: "What's the Appearance?", url: 'https://support.stripo.email/en/articles/6575955-what-s-the-appearance' },
          { title: 'What are the Basic Blocks? How to use them?', url: 'https://support.stripo.email/en/articles/3173914-what-are-the-basic-blocks-how-to-use-them' },
          { title: 'What are the Modules? How to use them?', url: 'https://support.stripo.email/en/articles/3173943-what-are-the-modules-how-to-use-them' },
          { title: "What's the Stripe and how to use it?", url: 'https://support.stripo.email/en/articles/3173893-what-s-the-stripe-and-how-to-use-it' },
          { title: 'What are the Structures and Containers? How to use them?', url: 'https://support.stripo.email/en/articles/3173911-what-are-the-structures-and-containers-how-to-use-them' },
          { title: 'What are the Brand Guidelines, and how to generate them?', url: 'https://support.stripo.email/en/articles/8582088-what-are-the-brand-guidelines-and-how-to-generate-them' }
        ]
      },
      {
        name: 'Additional Features',
        articles: [
          { title: "Enhance Your Email Workflow with Stripo's AI Hub", url: 'https://support.stripo.email/en/articles/10489559-enhance-your-email-workflow-with-stripo-s-ai-hub' },
          { title: 'Display conditions', url: 'https://support.stripo.email/en/articles/4658803-display-conditions' },
          { title: 'Email Accessibility', url: 'https://support.stripo.email/en/articles/8360859-email-accessibility' },
          { title: 'How simply create emails with Stripo API with canonical JSON', url: 'https://support.stripo.email/en/articles/5986297-how-simply-create-emails-with-stripo-api-with-canonical-json' },
          { title: 'How simply create emails with Stripo API using the SRT transformer', url: 'https://support.stripo.email/en/articles/6075698-how-simply-create-emails-with-stripo-api-using-the-srt-transformer' },
          { title: 'How to export emails with translation versions via Stripo API?', url: 'https://support.stripo.email/en/articles/11582829-how-to-export-emails-with-translation-versions-via-stripo-api' },
          { title: 'Improve Subject Lines and Hidden Preheaders using AI', url: 'https://support.stripo.email/en/articles/7211158-improve-subject-lines-and-hidden-preheaders-using-artificial-intelligence-ai' },
          { title: 'Improve your text using artificial intelligence AI', url: 'https://support.stripo.email/en/articles/7890599-improve-your-text-using-artificial-intelligence-ai' },
          { title: 'Share an Email Template', url: 'https://support.stripo.email/en/articles/4765660-share-an-email-template' },
          { title: 'Shorten the link length, integrating with the Bit.ly account', url: 'https://support.stripo.email/en/articles/6525868-shorten-the-link-length-integrating-with-the-bit-ly-account' },
          { title: "Data collection via email using AMP's GET parameters on the web", url: 'https://support.stripo.email/en/articles/5817675-data-collection-via-email-using-amp-s-get-parameters-on-the-web' },
          { title: 'Responsive control for images', url: 'https://support.stripo.email/en/articles/7984129-responsive-control-for-images' },
          { title: 'What is the Accordion block? How to use it?', url: 'https://support.stripo.email/en/articles/6575856-what-is-the-accordion-block-how-to-use-it' },
          { title: 'What is the Carousel block? How to use it?', url: 'https://support.stripo.email/en/articles/6583420-what-is-the-carousel-block-how-to-use-it' },
          { title: 'What are the Data Services? How to use it?', url: 'https://support.stripo.email/en/articles/4601438-what-are-the-data-services-how-to-use-it' },
          { title: 'What are the Data Sources? How to use it?', url: 'https://support.stripo.email/en/articles/4594578-what-are-the-data-sources-how-to-use-it' },
          { title: 'What are the Google Promotional Annotations and how to use them?', url: 'https://support.stripo.email/en/articles/3174008-what-are-the-google-promotional-annotations-and-how-to-use-them' },
          { title: 'What are link protocols compatible with emails?', url: 'https://support.stripo.email/en/articles/5332466-what-are-link-protocols-compatible-with-emails' },
          { title: 'What are the smart elements and how to use them?', url: 'https://support.stripo.email/en/articles/5462454-what-are-the-smart-elements-and-how-to-use-them' },
          { title: 'What is the code editor, and how to use it?', url: 'https://support.stripo.email/en/articles/3174003-what-is-the-code-editor-and-how-to-use-it' },
          { title: 'What is the difference between images saved to Template and Project folders?', url: 'https://support.stripo.email/en/articles/5227276-what-is-the-difference-between-images-saved-to-template-and-project-folders' },
          { title: 'What is the hidden preheader and how to set it?', url: 'https://support.stripo.email/en/articles/3173999-what-is-the-hidden-preheader-and-how-to-set-it' },
          { title: 'What is the Version History? How to use it?', url: 'https://support.stripo.email/en/articles/3174023-what-is-the-version-history-how-to-use-it' },
          { title: 'Tricks with containers and other elements on mobile', url: 'https://support.stripo.email/en/articles/7991238-tricks-with-containers-and-other-elements-on-mobile' }
        ]
      },
      {
        name: 'How-To Questions',
        articles: [
          { title: 'All about images. How to work with an image block?', url: 'https://support.stripo.email/en/articles/7982808-all-about-images-how-to-work-with-an-image-block' },
          { title: 'How to adapt my own HTML code to Stripo?', url: 'https://support.stripo.email/en/articles/6420354-how-to-adapt-my-own-html-code-to-stripo' },
          { title: 'Google Sheets. How to Pull Data from Google Sheets into Emails?', url: 'https://support.stripo.email/en/articles/4506759-google-sheets-how-to-pull-data-from-google-sheets-into-emails' },
          { title: 'How to add a background image to your designs?', url: 'https://support.stripo.email/en/articles/7958972-how-to-add-a-background-image-to-your-designs' },
          { title: 'How to add a button to the image?', url: 'https://support.stripo.email/en/articles/5480587-how-to-add-a-button-to-the-image' },
          { title: 'How to add a Calendar event to emails?', url: 'https://support.stripo.email/en/articles/7205625-how-to-add-a-calendar-event-to-emails' },
          { title: 'How to add a video to your email template?', url: 'https://support.stripo.email/en/articles/3174105-how-to-add-a-video-to-your-email-template' },
          { title: 'How to add a table to an email template?', url: 'https://support.stripo.email/en/articles/3274099-how-to-add-a-table-to-an-email-template' },
          { title: 'How to add the feedback form to my email?', url: 'https://support.stripo.email/en/articles/3997464-how-to-add-the-feedback-form-to-my-email' },
          { title: 'How to add the shadow effect?', url: 'https://support.stripo.email/en/articles/4006223-how-to-add-the-shadow-effect' },
          { title: 'How to add UTM tags to the email template?', url: 'https://support.stripo.email/en/articles/4006297-how-to-add-utm-tags-to-the-email-template' },
          { title: 'How to add/remove hyperlinks to text?', url: 'https://support.stripo.email/en/articles/3174100-how-to-add-remove-hyperlinks-to-text' },
          { title: 'How to align containers?', url: 'https://support.stripo.email/en/articles/5490150-how-to-align-containers' },
          { title: 'How to apply anchor hyperlinks?', url: 'https://support.stripo.email/en/articles/3174098-how-to-apply-anchor-hyperlinks' },
          { title: 'How to add rounding to your email?', url: 'https://support.stripo.email/en/articles/7984029-how-to-add-rounding-to-your-email' },
          { title: 'How to change the date in the timer if the email is already exported?', url: 'https://support.stripo.email/en/articles/4190151-how-to-change-the-date-in-the-timer-if-the-email-is-already-exported' },
          { title: 'How to configure a custom domain name for the Microsoft IIS?', url: 'https://support.stripo.email/en/articles/4683868-how-to-configure-a-custom-domain-name-for-the-microsoft-iis' },
          { title: 'How to customize your Bullet list in the template?', url: 'https://support.stripo.email/en/articles/5378775-how-to-customize-your-bullet-list-in-the-template' },
          { title: 'How to configure a custom domain name using DNS configurations (Cloudflare)?', url: 'https://support.stripo.email/en/articles/4738720-how-to-configure-a-custom-domain-name-using-dns-configurations-for-cloudflare-providers-only' },
          { title: 'How to copy/move and delete template elements?', url: 'https://support.stripo.email/en/articles/4541027-how-to-copy-move-and-delete-template-elements' },
          { title: 'How to create an email-signature?', url: 'https://support.stripo.email/en/articles/4877809-how-to-create-an-email-signature' },
          { title: 'How to create an HTML carousel for your emails?', url: 'https://support.stripo.email/en/articles/7127353-how-to-create-an-html-carousel-for-your-emails' },
          { title: 'How to make containers and structures rounding?', url: 'https://support.stripo.email/en/articles/4030715-how-to-make-containers-and-structures-rounding' },
          { title: 'How to move/copy email templates to another project/account?', url: 'https://support.stripo.email/en/articles/5240697-how-to-move-copy-email-templates-to-another-project-account' },
          { title: 'How to put text to the image?', url: 'https://support.stripo.email/en/articles/5480409-how-to-put-text-to-the-image' },
          { title: 'How to set up CORS policy for fonts?', url: 'https://support.stripo.email/en/articles/4241059-how-to-set-up-cors-policy-for-fonts' },
          { title: 'How to reduce the image for mobile devices?', url: 'https://support.stripo.email/en/articles/7978355-how-to-reduce-the-image-for-mobile-devices' },
          { title: 'How to use fields Modifier, Format, and Separator?', url: 'https://support.stripo.email/en/articles/6179720-how-to-use-fields-modifier-format-and-separator-helpers-for-smart-elements' },
          { title: 'How to test and export AMP emails with Stripo to your ESP?', url: 'https://support.stripo.email/en/articles/5480604-how-to-test-and-export-amp-emails-with-stripo-to-your-esp' },
          { title: 'How to write texts from right to left (RTL)?', url: 'https://support.stripo.email/en/articles/5481431-how-to-write-texts-from-right-to-left-rtl' },
          { title: 'How do I get a plain text version of my email?', url: 'https://support.stripo.email/en/articles/6867505-how-do-i-get-a-plain-text-version-of-my-email' },
          { title: 'How to create an abandoned cart block in your email template?', url: 'https://support.stripo.email/en/articles/8005814-how-to-create-an-abandoned-cart-block-in-your-email-template' },
          { title: 'How to translate an email template?', url: 'https://support.stripo.email/en/articles/5420116-how-to-translate-an-email-template' },
          { title: 'What do you mean by "Timer block, monthly opens"?', url: 'https://support.stripo.email/en/articles/3174378-what-do-you-mean-by-timer-block-monthly-opens' },
          { title: 'How simply export emails/templates to HTML file using Stripo API', url: 'https://support.stripo.email/en/articles/9784895-how-simply-export-emails-templates-to-html-file-using-stripo-api' }
        ]
      },
      {
        name: 'Troubleshooting',
        articles: [
          { title: 'Border thicknesses are not the same, or why do the lines appear "blurry"?', url: 'https://support.stripo.email/en/articles/5703136-border-thicknesses-are-not-the-same-or-why-do-the-lines-appear-blurry' },
          { title: 'Best Practices for Dark Mode Template Design', url: 'https://support.stripo.email/en/articles/3988734-best-practices-for-dark-mode-template-design' },
          { title: 'Common Issues in Dark Mode and How to Work Around Them', url: 'https://support.stripo.email/en/articles/11822709-common-issues-in-dark-mode-and-how-to-work-around-them' },
          { title: 'Common issues with Outlook', url: 'https://support.stripo.email/en/articles/8340622-common-issues-with-outlook' },
          { title: 'Email gets non-responsive after I send it from Gmail or Outlook', url: 'https://support.stripo.email/en/articles/3174126-email-gets-non-responsive-after-i-send-it-from-gmail-or-outlook' },
          { title: 'Incorrect displaying of an email in a mailbox connected to another mail client', url: 'https://support.stripo.email/en/articles/5194050-incorrect-displaying-of-an-email-in-a-mailbox-connected-to-another-mail-client' },
          { title: 'The impact of browser extensions on the editor', url: 'https://support.stripo.email/en/articles/3986926-the-impact-of-browser-extensions-on-the-editor' },
          { title: 'Why are symbols added to the template replaced in the code editor?', url: 'https://support.stripo.email/en/articles/4617773-why-are-symbols-added-to-the-template-replaced-in-the-code-editor' },
          { title: "Why aren't the images showing up in the Stripo editor?", url: 'https://support.stripo.email/en/articles/9099731-why-aren-t-the-images-showing-up-in-the-stripo-editor' },
          { title: 'Why do I see the email text in my hidden preheader?', url: 'https://support.stripo.email/en/articles/11364875-why-do-i-see-the-email-text-in-my-hidden-preheader' },
          { title: 'Why does my email in Outlook have extra colors?', url: 'https://support.stripo.email/en/articles/3978229-why-does-my-email-in-outlook-have-extra-colors' },
          { title: 'Why does text change its color after sending?', url: 'https://support.stripo.email/en/articles/6445075-why-does-text-change-its-color-after-sending' },
          { title: 'Why do buttons appear differently in Outlook?', url: 'https://support.stripo.email/en/articles/6441017-why-do-buttons-appear-differently-in-outlook' },
          { title: 'Why does my email get clipped in Gmail?', url: 'https://support.stripo.email/en/articles/6404810-why-does-my-email-get-clipped-in-gmail' },
          { title: 'Why cannot I upload an image?', url: 'https://support.stripo.email/en/articles/7960968-why-cannot-i-upload-an-image' },
          { title: "Why I can't load (open) the editor?", url: 'https://support.stripo.email/en/articles/4319421-why-i-can-t-load-open-the-editor' },
          { title: "Why I can't see the background image in Outlook?", url: 'https://support.stripo.email/en/articles/3174119-why-i-can-t-see-the-background-image-in-outlook' },
          { title: "Why I can't find my templates/emails?", url: 'https://support.stripo.email/en/articles/3988610-why-i-can-t-find-my-templates-emails' },
          { title: "Why exported OFT file links aren't replaced after change?", url: 'https://support.stripo.email/en/articles/6451883-why-if-i-change-a-link-in-an-exported-oft-file-the-link-isn-t-replaced-with-a-new-one-after-sending-it' }
        ]
      }
    ]
  },
  {
    id: 'new-editor',
    name: 'New Editor Questions',
    description: 'Новий Stripo Editor — нові фічі, AI, collab, troubleshooting',
    url: 'https://support.stripo.email/en/collections/3954321-new-editor-questions',
    sections: [
      {
        name: 'General Information',
        articles: [
          { title: '(New editor) How does Stripo editor work?', url: 'https://support.stripo.email/en/articles/6448082-new-editor-how-does-stripo-editor-work' },
          { title: '(New Editor) How to create an email template with Stripo?', url: 'https://support.stripo.email/en/articles/13546116-new-editor-how-to-create-an-email-template-with-stripo' },
          { title: '(New editor) Understanding of Stripo Template Layout', url: 'https://support.stripo.email/en/articles/6414520-new-editor-understanding-of-stripo-template-layout' },
          { title: "(New editor) What's the Stripe and how to use it?", url: 'https://support.stripo.email/en/articles/6418450-new-editor-what-s-the-stripe-and-how-to-use-it' },
          { title: '(New editor) What are the structures and containers? How to use them?', url: 'https://support.stripo.email/en/articles/6424840-new-editor-what-are-the-structures-and-containers-how-to-use-them' },
          { title: '(New Editor) What are the Basic Blocks? How to use them?', url: 'https://support.stripo.email/en/articles/6446095-new-editor-what-are-the-basic-blocks-how-to-use-them' },
          { title: '(New editor) The General styles for Desktop and Mobile views', url: 'https://support.stripo.email/en/articles/6433986-new-editor-the-general-styles-for-desktop-and-mobile-views' },
          { title: '(New Editor) How to optimize the Mobile Version of your email?', url: 'https://support.stripo.email/en/articles/6417983-new-editor-how-to-optimize-the-mobile-version-of-your-email' },
          { title: '(New Editor) What are the Modules? How to use them?', url: 'https://support.stripo.email/en/articles/6446064-new-editor-what-are-the-modules-how-to-use-them' },
          { title: '(New Editor) What are the Brand Guidelines, and how to generate them?', url: 'https://support.stripo.email/en/articles/13374732-new-editor-what-are-the-brand-guidelines-and-how-to-generate-them' },
          { title: '(New Editor) Understanding of Email Storage Templates', url: 'https://support.stripo.email/en/articles/13374988-new-editor-understanding-of-email-storage-templates' },
          { title: '(New Editor) How to save email templates?', url: 'https://support.stripo.email/en/articles/13392141-new-editor-how-to-save-email-templates' },
          { title: 'Advantages of the New editor', url: 'https://support.stripo.email/en/articles/14156998-advantages-of-the-new-editor' }
        ]
      },
      {
        name: 'Additional Features',
        articles: [
          { title: '(New Editor) Improve Subject Lines and Hidden Preheaders using AI', url: 'https://support.stripo.email/en/articles/10522042-new-editor-improve-subject-lines-and-hidden-preheaders-using-ai' },
          { title: "(New Editor) Co-Editing Feature", url: 'https://support.stripo.email/en/articles/9651951-new-editor-upgrade-your-email-creation-with-stripo-s-new-co-editing-feature' },
          { title: "(New Editor) Stripo's Commenting Feature", url: 'https://support.stripo.email/en/articles/10316159-new-editor-what-is-stripo-s-commenting-feature-and-how-can-it-boost-your-workflow' },
          { title: '(New Editor) Improve your text using AI', url: 'https://support.stripo.email/en/articles/10244214-new-editor-improve-your-text-using-artificial-intelligence-ai' },
          { title: '(New editor) Display conditions', url: 'https://support.stripo.email/en/articles/6459670-new-editor-display-conditions' },
          { title: '(New Editor) Share an Email Template', url: 'https://support.stripo.email/en/articles/11712283-new-editor-share-an-email-template' },
          { title: '(New Editor) Google Promotional Annotations', url: 'https://support.stripo.email/en/articles/6449035-new-editor-what-are-the-google-promotional-annotations-and-how-to-use-them' },
          { title: '(New Editor) Images: Template vs Project folders', url: 'https://support.stripo.email/en/articles/6450946-new-editor-what-is-the-difference-between-images-saved-to-template-and-project-folders' },
          { title: '(New Editor) Code editor', url: 'https://support.stripo.email/en/articles/6419682-new-editor-what-is-the-code-editor-and-how-to-use-it' },
          { title: '(New Editor) Hidden preheader', url: 'https://support.stripo.email/en/articles/6419773-new-editor-what-is-the-hidden-preheader-and-how-to-set-it' },
          { title: '(New Editor) MIME type', url: 'https://support.stripo.email/en/articles/8005926-new-editor-what-is-the-mime-type' },
          { title: '(New Editor) Smart-elements', url: 'https://support.stripo.email/en/articles/6448476-new-editor-what-are-the-smart-element-and-how-to-use-them' },
          { title: '(New Editor) Carousel block', url: 'https://support.stripo.email/en/articles/10650362-new-editor-what-is-the-carousel-block-how-to-use-it' },
          { title: '(New Editor) Accordion block', url: 'https://support.stripo.email/en/articles/11122946-new-editor-what-is-the-accordion-block-how-to-use-it' },
          { title: "(New editor) AI Hub", url: 'https://support.stripo.email/en/articles/13374670-new-editor-enhance-your-email-workflow-with-stripo-s-ai-hub' },
          { title: '(New Editor) Bit.ly integration', url: 'https://support.stripo.email/en/articles/13374681-new-editor-shorten-the-link-length-integrating-with-the-bit-ly-account' },
          { title: '(New Editor) Link protocols', url: 'https://support.stripo.email/en/articles/13374693-new-editor-what-are-link-protocols-compatible-with-emails' },
          { title: '(New Editor) Email Accessibility', url: 'https://support.stripo.email/en/articles/13374766-new-editor-email-accessibility' },
          { title: '(New Editor) Version History', url: 'https://support.stripo.email/en/articles/13375181-new-editor-what-is-the-version-history-how-to-use-it' },
          { title: '(New Editor) Export with translations via API', url: 'https://support.stripo.email/en/articles/13376015-new-editor-how-to-export-emails-with-translation-versions-via-stripo-api' },
          { title: '(New Editor) Data Storage', url: 'https://support.stripo.email/en/articles/13384958-new-editor-what-are-the-data-storage-how-to-use-it' },
          { title: '(New Editor) Data Sources', url: 'https://support.stripo.email/en/articles/13385008-new-editor-what-are-the-data-sources-how-to-use-it' },
          { title: '(New Editor) AMP GET parameters', url: 'https://support.stripo.email/en/articles/13385750-new-editor-data-collection-via-email-using-amp-s-get-parameters-on-the-web' },
          { title: '(New Editor) Responsive control for images', url: 'https://support.stripo.email/en/articles/13406580-new-editor-responsive-control-for-images' },
          { title: '(New Editor) Tricks with containers on mobile', url: 'https://support.stripo.email/en/articles/13407474-new-editor-tricks-with-containers-and-other-elements-on-mobile' },
          { title: '(New Editor) Stripo API with canonical JSON', url: 'https://support.stripo.email/en/articles/13428428-new-editor-how-simply-create-emails-with-stripo-api-with-canonical-json' },
          { title: '(New Editor) Stripo API with SRT transformer', url: 'https://support.stripo.email/en/articles/13435617-new-editor-how-simply-create-emails-with-stripo-api-using-the-srt-transformer' }
        ]
      },
      {
        name: 'How-To Questions',
        articles: [
          { title: '(New Editor) How to add UTM tags', url: 'https://support.stripo.email/en/articles/6433423-new-editor-how-to-add-utm-tags-to-the-email-template' },
          { title: '(New editor) How to add a button to the image', url: 'https://support.stripo.email/en/articles/6417532-new-editor-how-to-add-a-button-to-the-image' },
          { title: '(New Editor) How to add a video', url: 'https://support.stripo.email/en/articles/6449494-new-editor-how-to-add-a-video-to-your-email-template' },
          { title: '(New editor) How to apply anchor hyperlinks', url: 'https://support.stripo.email/en/articles/6450954-new-editor-how-to-apply-anchor-hyperlinks' },
          { title: '(New Editor) How to add the shadow effect', url: 'https://support.stripo.email/en/articles/6450911-new-editor-how-to-add-the-shadow-effect' },
          { title: '(New Editor) How to add a table', url: 'https://support.stripo.email/en/articles/6450963-new-editor-how-to-add-a-table-to-the-email-template' },
          { title: '(New editor) How to apply/remove hyperlinks', url: 'https://support.stripo.email/en/articles/6420905-new-editor-how-to-apply-remove-hyperlinks-to-text' },
          { title: '(New editor) How to align containers', url: 'https://support.stripo.email/en/articles/6421483-new-editor-how-to-align-containers' },
          { title: '(New editor) How to copy/move/delete elements', url: 'https://support.stripo.email/en/articles/6427511-new-editor-how-to-copy-move-and-delete-elements-in-the-email-template' },
          { title: '(New Editor) How to combine text and images in a single block', url: 'https://support.stripo.email/en/articles/12019197-new-editor-how-to-combine-text-and-images-in-a-single-block' },
          { title: '(New editor) How to create an email signature', url: 'https://support.stripo.email/en/articles/6448922-new-editor-how-to-create-an-email-signature' },
          { title: '(New Editor) How to customize Bullet list', url: 'https://support.stripo.email/en/articles/6397732-new-editor-how-to-customize-your-bullet-list-in-the-email-template' },
          { title: '(New Editor) How to customize view options button', url: 'https://support.stripo.email/en/articles/11832127-new-editor-how-to-customize-the-view-options-button' },
          { title: '(New editor) How to make containers rounding', url: 'https://support.stripo.email/en/articles/6421142-new-editor-how-to-make-containers-and-structures-rounding' },
          { title: '(New Editor) How to move the setting panel', url: 'https://support.stripo.email/en/articles/9305925-new-editor-how-to-move-the-setting-panel' },
          { title: '(New editor) How to put text on the image', url: 'https://support.stripo.email/en/articles/6420470-new-editor-how-to-put-text-on-the-image' },
          { title: '(New editor) How to wrap text around an image', url: 'https://support.stripo.email/en/articles/6442722-new-editor-how-to-wrap-text-around-an-image' },
          { title: '(New editor) How to write RTL text', url: 'https://support.stripo.email/en/articles/6417283-new-editor-how-to-write-text-from-right-to-left-rtl' },
          { title: '(New Editor) AI-Generated Images', url: 'https://support.stripo.email/en/articles/10714093-new-editor-how-to-use-ai-generated-images-in-the-image-block' },
          { title: '(New Editor) Feedback form in email', url: 'https://support.stripo.email/en/articles/11602951-new-editor-how-to-add-the-feedback-form-to-my-email' },
          { title: '(New Editor) Export to HTML via API', url: 'https://support.stripo.email/en/articles/13374703-new-editor-how-simply-export-emails-templates-to-html-file-using-stripo-api' },
          { title: '(New Editor) Calendar event in email', url: 'https://support.stripo.email/en/articles/13374742-new-editor-how-to-add-a-calendar-event-to-emails' },
          { title: '(New Editor) Timer block, monthly opens', url: 'https://support.stripo.email/en/articles/13374755-new-editor-what-do-you-mean-by-timer-block-monthly-opens' },
          { title: '(New Editor) Plain text version', url: 'https://support.stripo.email/en/articles/13374776-new-editor-how-do-i-get-a-plain-text-version-of-my-email' },
          { title: '(New Editor) Change date in already-exported timer', url: 'https://support.stripo.email/en/articles/13374791-new-editor-how-to-change-the-date-in-the-timer-if-the-email-is-already-exported' },
          { title: '(New Editor) CORS for fonts', url: 'https://support.stripo.email/en/articles/13374818-new-editor-how-to-set-up-cors-policy-for-fonts' },
          { title: '(New Editor) Custom domain for Microsoft IIS', url: 'https://support.stripo.email/en/articles/13374850-new-editor-how-to-configure-a-custom-domain-name-for-the-microsoft-iis' },
          { title: '(New Editor) Move/copy templates between projects', url: 'https://support.stripo.email/en/articles/13374879-new-editor-how-to-move-copy-email-templates-to-another-project-account' },
          { title: '(New Editor) Adapt own HTML', url: 'https://support.stripo.email/en/articles/13376041-new-editor-how-to-adapt-my-own-html-code-to-stripo' },
          { title: '(New Editor) Pull data from Google Sheets', url: 'https://support.stripo.email/en/articles/13385858-new-editor-google-sheets-how-to-pull-data-from-google-sheets-into-emails' },
          { title: '(New Editor) Translate template', url: 'https://support.stripo.email/en/articles/13393929-new-editor-how-to-translate-an-email-template' },
          { title: '(New Editor) Abandoned cart block', url: 'https://support.stripo.email/en/articles/13394034-new-editor-how-to-create-an-abandoned-cart-block-in-your-email-template' },
          { title: '(New Editor) All about images', url: 'https://support.stripo.email/en/articles/13395480-new-editor-all-about-images-how-to-work-with-an-image-block' },
          { title: '(New Editor) Reduce image for mobile', url: 'https://support.stripo.email/en/articles/13395512-new-editor-how-to-reduce-the-image-for-mobile-devices' },
          { title: '(New Editor) Background image in designs', url: 'https://support.stripo.email/en/articles/13395706-new-editor-how-to-add-a-background-image-to-your-designs' },
          { title: '(New Editor) Custom domain via DNS (Cloudflare)', url: 'https://support.stripo.email/en/articles/13424074-new-editor-how-to-configure-a-custom-domain-name-using-dns-configurations-for-cloudflare-providers-only' },
          { title: '(New Editor) Expression and Format helpers', url: 'https://support.stripo.email/en/articles/13585446-new-editor-how-to-use-fields-expression-and-format-helpers-for-smart-elements' },
          { title: '(New Editor) Test and export AMP', url: 'https://support.stripo.email/en/articles/13374805-new-editor-how-to-test-and-export-amp-emails-with-stripo-to-your-esp' }
        ]
      },
      {
        name: 'Troubleshooting',
        articles: [
          { title: '(New Editor) Border blurry lines', url: 'https://support.stripo.email/en/articles/13375235-new-editor-border-thicknesses-are-not-the-same-or-why-do-the-lines-appear-blurry' },
          { title: '(New Editor) Dark Mode Best Practices', url: 'https://support.stripo.email/en/articles/13375252-new-editor-best-practices-for-dark-mode-template-design' },
          { title: '(New Editor) Dark Mode workarounds', url: 'https://support.stripo.email/en/articles/13375260-new-editor-common-issues-in-dark-mode-and-how-to-work-around-them' },
          { title: '(New Editor) Non-responsive after Gmail/Outlook', url: 'https://support.stripo.email/en/articles/13375284-new-editor-email-gets-non-responsive-after-i-send-it-from-gmail-or-outlook' },
          { title: '(New Editor) Incorrect mailbox display', url: 'https://support.stripo.email/en/articles/13375300-new-editor-incorrect-displaying-of-an-email-in-a-mailbox-connected-to-another-mail-client' },
          { title: '(New Editor) Images not showing up', url: 'https://support.stripo.email/en/articles/13375387-new-editor-why-aren-t-the-images-showing-up-in-the-stripo-editor' },
          { title: '(New Editor) Outlook extra colors', url: 'https://support.stripo.email/en/articles/13375424-new-editor-why-does-my-email-in-outlook-have-extra-colors' },
          { title: '(New Editor) Text color changes after sending', url: 'https://support.stripo.email/en/articles/13375449-new-editor-why-does-text-change-its-color-after-sending' },
          { title: '(New Editor) Buttons differ in Outlook', url: 'https://support.stripo.email/en/articles/13375462-new-editor-why-do-buttons-appear-differently-in-outlook' },
          { title: '(New Editor) Email clipped in Gmail', url: 'https://support.stripo.email/en/articles/13375560-new-editor-why-does-my-email-get-clipped-in-gmail' },
          { title: "(New Editor) Can't load editor", url: 'https://support.stripo.email/en/articles/13375589-new-editor-why-i-can-t-load-open-the-editor' },
          { title: "(New Editor) Can't find templates", url: 'https://support.stripo.email/en/articles/13375615-new-editor-why-i-can-t-find-my-templates-emails' },
          { title: '(New Editor) Exported OFT link not replaced', url: 'https://support.stripo.email/en/articles/13375663-new-editor-why-if-i-change-a-link-in-an-exported-oft-file-the-link-isn-t-replaced-with-a-new-one-after-sending-it' },
          { title: '(New Editor) Cannot upload image', url: 'https://support.stripo.email/en/articles/13375683-new-editor-why-cannot-i-upload-an-image' },
          { title: '(New Editor) Background image in Outlook', url: 'https://support.stripo.email/en/articles/13375869-new-editor-why-i-can-t-see-the-background-image-in-outlook' },
          { title: '(New Editor) Symbols replaced in code', url: 'https://support.stripo.email/en/articles/13392194-new-editor-why-are-symbols-added-to-the-template-replaced-in-the-code-editor' },
          { title: '(New Editor) Common Outlook issues', url: 'https://support.stripo.email/en/articles/13585110-new-editor-common-issues-with-outlook' }
        ]
      }
    ]
  },
  {
    id: 'knowledge-base',
    name: 'Knowledge Base',
    description: 'Загальні питання про email marketing, не специфічні до Stripo',
    url: 'https://support.stripo.email/en/collections/3858573-knowledge-base',
    sections: [
      {
        name: 'Email Marketing',
        articles: [
          { title: 'Opt-In Email Marketing Examples That Drive Results', url: 'https://support.stripo.email/en/articles/7936265-opt-in-email-marketing-examples-that-drive-results' },
          { title: 'Which email provider is the most secure', url: 'https://support.stripo.email/en/articles/7936206-which-email-provider-is-the-most-secure' },
          { title: 'What is SMTP mean for email marketing', url: 'https://support.stripo.email/en/articles/7936189-what-is-smtp-mean-for-email-marketing' },
          { title: 'How to make an email distribution list', url: 'https://support.stripo.email/en/articles/7936170-how-to-make-an-email-distribution-list' },
          { title: 'What is an email autoresponder?', url: 'https://support.stripo.email/en/articles/7912962-what-is-an-email-autoresponder' },
          { title: 'How to Make a Promotional Email?', url: 'https://support.stripo.email/en/articles/7912901-how-to-make-a-promotional-email' },
          { title: 'What is an Email Template?', url: 'https://support.stripo.email/en/articles/7912785-what-is-an-email-template' },
          { title: 'What is an Automated Email?', url: 'https://support.stripo.email/en/articles/7912747-what-is-an-automated-email' },
          { title: 'What to Say in a Follow-Up Email After an Interview', url: 'https://support.stripo.email/en/articles/7436029-what-to-say-in-a-follow-up-email-after-an-interview' },
          { title: 'What is an Email Whitelist?', url: 'https://support.stripo.email/en/articles/7329783-what-is-an-email-whitelist' },
          { title: 'What is an Email Service Provider?', url: 'https://support.stripo.email/en/articles/7262292-what-is-an-email-service-provider' },
          { title: 'What is a Bulk Email?', url: 'https://support.stripo.email/en/articles/7262233-what-is-a-bulk-email' },
          { title: 'What is a Confirmation Email?', url: 'https://support.stripo.email/en/articles/7262192-what-is-a-confirmation-email' },
          { title: 'What is a Hard Bounce in Email?', url: 'https://support.stripo.email/en/articles/7262161-what-is-a-hard-bounce-in-email' },
          { title: 'What is A/B Testing in Email Marketing?', url: 'https://support.stripo.email/en/articles/7262148-what-is-a-b-testing-in-email-markeing' },
          { title: 'What is the Average Open Rate for Email Marketing?', url: 'https://support.stripo.email/en/articles/7169724-what-is-the-average-open-rate-for-email-marketing' },
          { title: 'What is an Email Campaign?', url: 'https://support.stripo.email/en/articles/7169611-what-is-an-email-campaign' },
          { title: 'Understanding the Transactional Email', url: 'https://support.stripo.email/en/articles/7135237-understanding-the-transactional-email' },
          { title: 'What is a Good Open Rate for Email Marketing?', url: 'https://support.stripo.email/en/articles/7109296-what-is-a-good-open-rate-for-email-marketing' },
          { title: 'What is a Blast Email?', url: 'https://support.stripo.email/en/articles/7109292-what-is-a-blast-email' },
          { title: 'What is a Drip Email Campaign?', url: 'https://support.stripo.email/en/articles/7109285-what-is-a-drip-email-campaign' },
          { title: 'What is Web Email?', url: 'https://support.stripo.email/en/articles/7109266-what-is-web-email' },
          { title: 'What is a Cold Email?', url: 'https://support.stripo.email/en/articles/7025281-what-is-a-cold-email' },
          { title: 'What is an Email Bounce?', url: 'https://support.stripo.email/en/articles/7004155-what-is-an-email-bounce' },
          { title: 'What is HTML Email?', url: 'https://support.stripo.email/en/articles/7004114-what-is-html-email' },
          { title: 'Understanding the Meaning of "Re" in Email Communication', url: 'https://support.stripo.email/en/articles/6995974-understanding-the-meaning-of-re-in-email-communication' },
          { title: 'What Does BCC Mean in Email', url: 'https://support.stripo.email/en/articles/6995584-what-does-bcc-mean-in-email' },
          { title: 'Understanding the Importance of the Subject Line in Emails', url: 'https://support.stripo.email/en/articles/6991216-understanding-the-importance-of-the-subject-line-in-emails' },
          { title: 'What to Include in an Email Signature', url: 'https://support.stripo.email/en/articles/6991176-what-to-include-in-an-email-signature' },
          { title: 'What is a Dynamic Email?', url: 'https://support.stripo.email/en/articles/6991008-what-is-a-dynamic-email' },
          { title: 'Understanding the CC Field in Email Communication', url: 'https://support.stripo.email/en/articles/6995596-understanding-the-cc-field-in-email-communication' }
        ]
      },
      {
        name: 'Email Features',
        articles: [
          { title: 'What is an Email Thread', url: 'https://support.stripo.email/en/articles/6996145-what-is-an-email-thread' },
          { title: 'What is an Outbox in Email', url: 'https://support.stripo.email/en/articles/6996162-what-is-an-outbox-in-email' },
          { title: 'What is an Inbox in Email?', url: 'https://support.stripo.email/en/articles/6996215-what-is-an-inbox-in-email' },
          { title: 'What Does a Flagged Email Mean?', url: 'https://support.stripo.email/en/articles/6996259-what-does-a-flagged-email-mean' },
          { title: 'What Does Archiving an Email Do', url: 'https://support.stripo.email/en/articles/7025203-what-does-archiving-an-email-do' },
          { title: 'What Is SSL Email?', url: 'https://support.stripo.email/en/articles/7047042-what-is-ssl-email' },
          { title: 'What is SPF Email?', url: 'https://support.stripo.email/en/articles/7047063-what-is-spf-email' },
          { title: 'What is a POP3 email?', url: 'https://support.stripo.email/en/articles/7135177-what-is-a-pop3-email' },
          { title: 'What Does IMAP Mean in Email?', url: 'https://support.stripo.email/en/articles/7135192-what-does-imap-mean-in-email' },
          { title: 'What is a Recovery Email', url: 'https://support.stripo.email/en/articles/7172639-what-is-a-recovery-email' },
          { title: 'What is Spam Email?', url: 'https://support.stripo.email/en/articles/7329771-what-is-spam-email' },
          { title: 'What is a Queued Email?', url: 'https://support.stripo.email/en/articles/7329796-what-is-a-queued-email' },
          { title: 'What Does "Draft" Mean in Email?', url: 'https://support.stripo.email/en/articles/7330342-what-does-draft-mean-in-email' },
          { title: 'What is a "No-Reply" Email?', url: 'https://support.stripo.email/en/articles/7330421-what-is-a-no-reply-email' },
          { title: 'How to View Emails in HTML Format', url: 'https://support.stripo.email/en/articles/7936228-how-to-view-emails-in-html-format' }
        ]
      },
      {
        name: 'Email Tips and Tricks',
        articles: [
          { title: 'Tips for Writing a Professional Email', url: 'https://support.stripo.email/en/articles/7029590-tips-for-writing-a-professional-email' }
        ]
      },
      {
        name: 'Email Design',
        articles: [
          { title: 'Choosing a Professional Font for Email', url: 'https://support.stripo.email/en/articles/7109302-choosing-a-professional-font-for-email' },
          { title: 'Email Header Design Ideas', url: 'https://support.stripo.email/en/articles/7135216-email-header-design-ideas' }
        ]
      },
      {
        name: 'Email Components',
        articles: [
          { title: 'What is a Compose Email?', url: 'https://support.stripo.email/en/articles/7169961-what-is-a-compose-email' },
          { title: 'What are the Components of an Email?', url: 'https://support.stripo.email/en/articles/7435997-what-are-the-components-of-an-email' },
          { title: 'What is the Header of an Email', url: 'https://support.stripo.email/en/articles/7436010-what-is-the-header-of-an-email' },
          { title: 'What is a Pre-header in an Email?', url: 'https://support.stripo.email/en/articles/7912887-what-is-a-pre-header-in-an-email' }
        ]
      }
    ]
  }
]

// Плаский список усіх статей з метаданими — зручно для пошуку.
export const allHelpArticles = helpCenterCollections.flatMap((c) =>
  c.sections.flatMap((s) =>
    s.articles.map((a) => ({
      ...a,
      collectionId: c.id,
      collectionName: c.name,
      sectionName: s.name
    }))
  )
)

// Швидкий доступ за URL — для прив'язки до шаблонів.
export const helpArticlesByUrl = Object.fromEntries(
  allHelpArticles.map((a) => [a.url, a])
)
