/**
 * Setup templates — реєстрація, профіль, безпека, SSO, workspace, користувачі.
 */

export const setupTemplates = [
  {
    id: 'setup-register',
    title: 'Як зареєструвати акаунт',
    tags: ['setup', 'onboarding', 'registration'],
    body: `Hi {{client_name}},

To register a Stripo account: https://support.stripo.email/en/articles/9490697-how-to-register-an-account-in-stripo

After signup you will need to validate your email — that step is covered here: https://support.stripo.email/en/articles/1627693-create-and-validate-your-stripo-account

If you do not receive the validation email within a few minutes, check spam first. If still missing: https://support.stripo.email/en/articles/7941134-issues-with-verification-or-password-reset-emails

Best,
Denys
Stripo Support`,
    notes: 'Reg + validation + missing email — три зв\'язані статті.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9490697-how-to-register-an-account-in-stripo',
      'https://support.stripo.email/en/articles/1627693-create-and-validate-your-stripo-account',
      'https://support.stripo.email/en/articles/7941134-issues-with-verification-or-password-reset-emails'
    ]
  },
  {
    id: 'setup-verification-email-missing',
    title: 'Не приходить лист підтвердження або скидання паролю',
    tags: ['setup', 'troubleshooting', 'email'],
    body: `Hi {{client_name}},

For issues with verification or password reset emails not arriving: https://support.stripo.email/en/articles/7941134-issues-with-verification-or-password-reset-emails

Quick checks:
1. Spam / Junk folder (most common cause)
2. Email filters or rules blocking automated mail
3. Corporate firewall stripping links
4. The email is on a typo

If after checking these the email is still missing, share the exact email address you used and I will trigger a manual resend from our side.

Best,
Denys
Stripo Support`,
    notes: 'Перевір spam, filters, corp firewall. Manual resend — через білінг.',
    helpLinks: ['https://support.stripo.email/en/articles/7941134-issues-with-verification-or-password-reset-emails']
  },
  {
    id: 'setup-2fa',
    title: 'Налаштувати two-factor authentication (2FA)',
    tags: ['setup', 'security', '2fa'],
    body: `Hi {{client_name}},

To enable 2FA on your Stripo account: https://support.stripo.email/en/articles/8393879-how-to-use-two-factor-authentication-in-stripo

In short:
1. Settings -> Profile -> Security
2. Click "Enable 2FA"
3. Scan the QR code with your authenticator app (Google Authenticator, Authy, 1Password)
4. Enter the 6-digit code to confirm

Save the recovery codes Stripo gives you somewhere safe — without them you cannot get back in if you lose the authenticator device.

Best,
Denys
Stripo Support`,
    notes: 'Recovery codes — critical. Завжди нагадуй зберегти.',
    helpLinks: ['https://support.stripo.email/en/articles/8393879-how-to-use-two-factor-authentication-in-stripo']
  },
  {
    id: 'setup-leaked-password',
    title: 'Втік пароль — як захистити акаунт',
    tags: ['setup', 'security', 'password'],
    body: `Hi {{client_name}},

If your password may have leaked (data breach, suspicious activity, accidentally shared): https://support.stripo.email/en/articles/9595689-protecting-your-account-dealing-with-a-leaked-password

Immediate steps:
1. Change the password — Settings -> Profile -> Security -> Change password
2. Enable 2FA if not already
3. Review recent account activity (Stripo logs significant changes)
4. If you suspect unauthorized access — let me know and I will pull session logs for you

Best,
Denys
Stripo Support`,
    notes: 'Security incident — швидко. Логи можемо витягнути на запит.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9595689-protecting-your-account-dealing-with-a-leaked-password',
      'https://support.stripo.email/en/articles/8540845-password-management'
    ]
  },
  {
    id: 'setup-account-removal',
    title: 'Видалити акаунт Stripo',
    tags: ['setup', 'account', 'deletion'],
    body: `Hi {{client_name}},

To delete your Stripo account permanently: https://support.stripo.email/en/articles/8557917-account-removal

Important warnings:
1. Account deletion is permanent — all templates, projects, and exports are lost
2. Active subscriptions are cancelled (no refund for unused period unless within 30 days)
3. Cannot recover the account afterwards

If you are deleting because something is not working — let me know what triggered it, we can usually solve issues. If you are sure, I can guide through the actual delete step.

Best,
Denys
Stripo Support`,
    notes: 'Завжди питай "чому" перш ніж підтвердити. Часто баг можна виправити.',
    helpLinks: ['https://support.stripo.email/en/articles/8557917-account-removal']
  },
  {
    id: 'setup-sso',
    title: 'Налаштувати Single Sign-On (SSO)',
    tags: ['setup', 'sso', 'enterprise'],
    body: `Hi {{client_name}},

For Single Sign-On in Stripo: https://support.stripo.email/en/articles/9581909-single-sign-on

SSO is available on Pro+ plans. We support:
- Okta: https://support.stripo.email/en/articles/10231014-configure-okta-for-sso
- Microsoft Entra ID (former Azure AD): https://support.stripo.email/en/articles/10235550-configure-entra-id-for-sso
- OneLogin: https://support.stripo.email/en/articles/10245781-configure-onelogin-for-sso

Generic SAML is supported too — for other identity providers, the configuration is similar. Which provider are you using? I will share the exact steps.

Best,
Denys
Stripo Support`,
    notes: 'SSO — Pro+. Питай провайдера, давай конкретну статтю.',
    helpLinks: [
      'https://support.stripo.email/en/articles/9581909-single-sign-on',
      'https://support.stripo.email/en/articles/10231014-configure-okta-for-sso',
      'https://support.stripo.email/en/articles/10235550-configure-entra-id-for-sso',
      'https://support.stripo.email/en/articles/10245781-configure-onelogin-for-sso'
    ]
  },
  {
    id: 'setup-sso-okta',
    title: 'SSO: Okta — налаштування',
    tags: ['setup', 'sso', 'okta'],
    body: `Hi {{client_name}},

For Okta SSO configuration step-by-step: https://support.stripo.email/en/articles/10231014-configure-okta-for-sso

Key steps:
1. In Okta: create a new SAML application
2. Copy Identity Provider SSO URL and X.509 Certificate from Okta
3. In Stripo: Settings -> Security -> SSO -> paste those values
4. Configure the SAML attribute mapping (email, first name, last name)
5. Test with one user before rolling out

If you get a SAML response error during testing, share the error from the browser network tab — most are attribute-mapping issues.

Best,
Denys
Stripo Support`,
    notes: 'Okta — найпопулярніший варіант. Attribute mapping — типова проблема.',
    helpLinks: ['https://support.stripo.email/en/articles/10231014-configure-okta-for-sso']
  },
  {
    id: 'setup-sso-entra',
    title: 'SSO: Microsoft Entra ID (Azure AD)',
    tags: ['setup', 'sso', 'entra'],
    body: `Hi {{client_name}},

For Entra ID (former Azure AD) SSO: https://support.stripo.email/en/articles/10235550-configure-entra-id-for-sso

Setup at a glance:
1. Entra: add Stripo as Enterprise Application
2. Configure SSO with SAML
3. Download the federation metadata XML
4. In Stripo: paste IdP URL, entity ID, and certificate from Entra
5. Map email attribute

If your tenant has conditional access policies, make sure they do not block external SSO flows during testing.

Best,
Denys
Stripo Support`,
    notes: 'Entra ID — багато enterprise клієнтів. CA-policies можуть блокувати.',
    helpLinks: ['https://support.stripo.email/en/articles/10235550-configure-entra-id-for-sso']
  },
  {
    id: 'setup-invite-members',
    title: 'Запросити людей в команду',
    tags: ['setup', 'team', 'invite'],
    body: `Hi {{client_name}},

To invite members to your Stripo account: https://support.stripo.email/en/articles/8557951-how-to-invite-members-to-the-stripo-account

Flow:
1. Settings -> Members -> Invite member
2. Enter their email and select a role
3. They receive an invite email
4. Once accepted, they appear in the members list

Roles overview: https://support.stripo.email/en/articles/3173877-understanding-of-roles-and-permissions

Number of available seats depends on your plan and any extra members you have purchased. If you need more seats: https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services

Best,
Denys
Stripo Support`,
    notes: 'Seats обмежені планом. Можна докупити extra members.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8557951-how-to-invite-members-to-the-stripo-account',
      'https://support.stripo.email/en/articles/3173877-understanding-of-roles-and-permissions',
      'https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services'
    ]
  },
  {
    id: 'setup-roles',
    title: 'Ролі і дозволи (Roles & Permissions)',
    tags: ['setup', 'team', 'permissions'],
    body: `Hi {{client_name}},

Full breakdown of Stripo roles and what each can do: https://support.stripo.email/en/articles/3173877-understanding-of-roles-and-permissions

The built-in roles cover most workflows. If you need finer control (e.g., a role that can only edit certain projects), that is plan-dependent — Pro+ has project-level permissions.

What workflow are you trying to set up? I will point to the exact role configuration.

Best,
Denys
Stripo Support`,
    notes: 'Role-based access — fine control тільки на Pro+.',
    helpLinks: ['https://support.stripo.email/en/articles/3173877-understanding-of-roles-and-permissions']
  },
  {
    id: 'setup-workspace',
    title: 'Workspace: Projects і Groups',
    tags: ['setup', 'workspace', 'projects'],
    body: `Hi {{client_name}},

Workspace overview: https://support.stripo.email/en/articles/8582214-workspace-exploration

Key concepts:
- Projects = logical containers for related templates (e.g., one project per client or campaign). Guide: https://support.stripo.email/en/articles/8559828-what-is-a-project-and-how-to-use-it
- Groups = sub-folders inside a project for organization. Guide: https://support.stripo.email/en/articles/8544471-what-is-group-and-how-to-use-it

For most teams, one project per client or per major brand works well. Groups help keep templates findable inside a busy project.

Best,
Denys
Stripo Support`,
    notes: 'Project vs Group — pojєкт це більший контейнер.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8582214-workspace-exploration',
      'https://support.stripo.email/en/articles/8559828-what-is-a-project-and-how-to-use-it',
      'https://support.stripo.email/en/articles/8544471-what-is-group-and-how-to-use-it'
    ]
  },
  {
    id: 'setup-image-storage',
    title: 'Налаштування Image Storage',
    tags: ['setup', 'workspace', 'images'],
    body: `Hi {{client_name}},

For configuring Image Storage in your Stripo workspace: https://support.stripo.email/en/articles/8540479-image-storage-configuration

By default, images you upload are stored in Stripo's CDN. Pro+ plans can configure custom storage (AWS S3, etc.) — useful if you need:
- Compliance (data residency requirements)
- Brand-controlled image URLs in exports
- Existing image library reuse

What is your scenario — Stripo CDN works for you, or do you need to bring your own bucket?

Best,
Denys
Stripo Support`,
    notes: 'Custom storage — Pro+ фіча. Compliance use case найпоширеніший.',
    helpLinks: ['https://support.stripo.email/en/articles/8540479-image-storage-configuration']
  },
  {
    id: 'setup-custom-fonts',
    title: 'Підключити кастомні шрифти',
    tags: ['setup', 'workspace', 'fonts'],
    body: `Hi {{client_name}},

To add custom fonts to your Stripo workspace: https://support.stripo.email/en/articles/3174076-managing-custom-fonts

Two paths:
1. Web fonts (Google Fonts URL or your own font CDN) — simplest, works everywhere
2. Self-hosted (upload .woff/.woff2) — requires CORS setup: https://support.stripo.email/en/articles/4241059-how-to-set-up-cors-policy-for-fonts

Note: even with custom fonts loaded, many email clients (Outlook desktop, in particular) fall back to system fonts. Always set a sensible fallback in the font stack.

Best,
Denys
Stripo Support`,
    notes: 'Outlook desktop ігнорує web fonts. Завжди fallback.',
    helpLinks: [
      'https://support.stripo.email/en/articles/3174076-managing-custom-fonts',
      'https://support.stripo.email/en/articles/4241059-how-to-set-up-cors-policy-for-fonts'
    ]
  },
  {
    id: 'setup-personalization-tags',
    title: 'Налаштування dynamic tags для персоналізації',
    tags: ['setup', 'workspace', 'personalization'],
    body: `Hi {{client_name}},

To set up dynamic tags for personalization: https://support.stripo.email/en/articles/8560549-personalization-configuration-create-a-list-of-dynamic-tags

You define a list of merge tags that will be available in the editor (e.g., {{first_name}}, {{order_id}}). When the email is exported to your ESP, these tags should match what your ESP expects.

Each ESP has different syntax (Mailchimp uses *|FNAME|*, Klaviyo uses {{ first_name }}, Salesforce uses %%FirstName%%). What ESP are you targeting? I will help you set up the right tag format.

Best,
Denys
Stripo Support`,
    notes: 'Tag syntax залежить від ESP. Завжди питай який ESP.',
    helpLinks: ['https://support.stripo.email/en/articles/8560549-personalization-configuration-create-a-list-of-dynamic-tags']
  },
  {
    id: 'setup-custom-domain-preview',
    title: 'Custom domain для preview-посилань',
    tags: ['setup', 'workspace', 'domain'],
    body: `Hi {{client_name}},

To configure a custom domain for email previews: https://support.stripo.email/en/articles/8587448-custom-domain-for-email-previews

This is for the preview URLs Stripo generates (used in share links, tests, etc). By default they look like preview.stripo.email/..., with a custom domain they look like preview.yourbrand.com/....

Steps:
1. Add a CNAME record at your DNS pointing to Stripo
2. In Stripo: Settings -> Workspace -> Custom domain -> enter your domain
3. Wait for DNS propagation (up to 24h)

For Cloudflare-managed domains, there is a specific guide: https://support.stripo.email/en/articles/4738720-how-to-configure-a-custom-domain-name-using-dns-configurations-for-cloudflare-providers-only

Best,
Denys
Stripo Support`,
    notes: 'Custom domain — Pro+. DNS пропагація — до 24 годин.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8587448-custom-domain-for-email-previews',
      'https://support.stripo.email/en/articles/4738720-how-to-configure-a-custom-domain-name-using-dns-configurations-for-cloudflare-providers-only'
    ]
  },
  {
    id: 'setup-archive-project',
    title: 'Архівувати неактивний project',
    tags: ['setup', 'workspace', 'archive'],
    body: `Hi {{client_name}},

To archive an inactive project: https://support.stripo.email/en/articles/8540501-archive-project

Archiving keeps the templates accessible (read-only) but removes them from the main workspace view. Useful for old campaigns or finished client work.

Archived projects do not count toward active project limits on your plan. You can unarchive them anytime if you need to reuse a template.

Best,
Denys
Stripo Support`,
    notes: 'Архів = read-only, не рахується в limits.',
    helpLinks: ['https://support.stripo.email/en/articles/8540501-archive-project']
  },
  {
    id: 'setup-predefined-templates',
    title: 'Показ predefined templates',
    tags: ['setup', 'workspace', 'templates'],
    body: `Hi {{client_name}},

To control which predefined Stripo templates are shown to your team: https://support.stripo.email/en/articles/8573182-displaying-of-predefined-templates

You can:
- Hide Stripo's default gallery (useful for agencies who want only branded templates)
- Pick specific categories to surface
- Combine with your own custom template library

Best,
Denys
Stripo Support`,
    notes: 'Часто потрібно агенствам — приховати дефолтні Stripo шаблони.',
    helpLinks: ['https://support.stripo.email/en/articles/8573182-displaying-of-predefined-templates']
  },
  {
    id: 'setup-minimize-css',
    title: 'Minimize CSS для кращої продуктивності',
    tags: ['setup', 'performance', 'css'],
    body: `Hi {{client_name}},

To enable CSS minimization for better email performance: https://support.stripo.email/en/articles/10577934-minimize-css-for-better-email-performance

Why it matters:
- Smaller email size = faster load in clients
- Less likely to hit Gmail's 102KB clipping limit
- Improves preview rendering speed

Settings -> Workspace -> Email optimization -> Enable CSS minimization. Test rendering after enabling, since aggressive minimization can occasionally affect dark mode tricks or AMP styles.

Best,
Denys
Stripo Support`,
    notes: 'Gmail 102KB ліміт — типова причина clipping.',
    helpLinks: ['https://support.stripo.email/en/articles/10577934-minimize-css-for-better-email-performance']
  }
]
