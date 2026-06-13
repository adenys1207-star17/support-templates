/**
 * Billing templates — підписки, рефанди, екстра-сервіси, тарифи.
 */

export const billingTemplates = [
  {
    id: 'billing-free-plan-duration',
    title: 'Free plan: як довго можна користуватись',
    tags: ['billing', 'pricing', 'free-plan'],
    body: `Hi {{client_name}},

Yes, the FREE Stripo subscription has no time limit — you can use it as long as you want. Full details on what is included: https://support.stripo.email/en/articles/8575250-how-long-can-i-use-the-free-subscription

The main limitations vs paid plans are number of saved templates, exports per month, and lack of premium features (AI tools, advanced collaboration). For comparison: https://support.stripo.email/en/articles/8607303-what-s-the-difference-between-free-basic-and-medium-plans

If you outgrow the FREE plan, the BASIC tier is the cheapest paid step.

Best,
Denys
Stripo Support`,
    notes: 'Free plan безлімітний за часом, обмежений за фічами.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8575250-how-long-can-i-use-the-free-subscription',
      'https://support.stripo.email/en/articles/8607303-what-s-the-difference-between-free-basic-and-medium-plans'
    ]
  },
  {
    id: 'billing-free-vs-basic',
    title: 'Різниця між FREE і BASIC',
    tags: ['billing', 'pricing'],
    body: `Hi {{client_name}},

The main differences between FREE and BASIC: https://support.stripo.email/en/articles/5882638-what-s-the-difference-between-free-and-basic-plans

In short:
- FREE: limited templates, 4 exports/month, Stripo branding in emails
- BASIC: unlimited templates, more exports, no branding, custom domain for previews

For specifics on prices and exact limits, check the article — they change occasionally, so I will not paste numbers here.

Best,
Denys
Stripo Support`,
    notes: "Не пиши прайси в шаблоні — вони змінюються. Кажи 'дивись статтю'.",
    helpLinks: ['https://support.stripo.email/en/articles/5882638-what-s-the-difference-between-free-and-basic-plans']
  },
  {
    id: 'billing-basic-vs-medium',
    title: 'Різниця між FREE / BASIC / MEDIUM',
    tags: ['billing', 'pricing'],
    body: `Hi {{client_name}},

Quick comparison of FREE, BASIC, and MEDIUM plans: https://support.stripo.email/en/articles/8607303-what-s-the-difference-between-free-basic-and-medium-plans

Main MEDIUM benefits over BASIC:
- More monthly exports
- More EOA tests included
- Team collaboration features
- Better support SLA

If you can share how many templates you build per month and whether you need a team workspace, I can suggest the right plan.

Best,
Denys
Stripo Support`,
    notes: 'Питай volume + team setup, потім рекомендуй.',
    helpLinks: ['https://support.stripo.email/en/articles/8607303-what-s-the-difference-between-free-basic-and-medium-plans']
  },
  {
    id: 'billing-pro-vs-prime',
    title: 'Різниця між PRO і PRIME',
    tags: ['billing', 'pricing', 'pro', 'prime'],
    body: `Hi {{client_name}},

Detailed comparison of PRO and PRIME: https://support.stripo.email/en/articles/7854142-what-s-the-difference-between-pro-and-prime-plans

The main differentiators on PRIME:
- White-label (no Stripo branding anywhere)
- Significantly more EOA tests included
- Priority support with faster SLA
- Custom storage option
- Higher seat count

For most teams under 10 people, PRO is enough. PRIME makes sense for agencies or larger marketing teams.

Best,
Denys
Stripo Support`,
    notes: 'PRO підходить більшості. PRIME — для агенств і великих teams.',
    helpLinks: ['https://support.stripo.email/en/articles/7854142-what-s-the-difference-between-pro-and-prime-plans']
  },
  {
    id: 'billing-cancel-subscription',
    title: 'Як скасувати підписку',
    tags: ['billing', 'subscription', 'cancel'],
    body: `Hi {{client_name}},

To cancel your Stripo subscription: https://support.stripo.email/en/articles/8558025-how-can-i-cancel-my-subscription

In short:
1. Settings -> Billing -> Subscriptions
2. Click "Cancel subscription"
3. Confirm the reason (optional, helps us improve)
4. You will keep access until the end of the current billing period

If you are cancelling because something is not working as expected — let me know what triggered it before you cancel, maybe I can resolve it.

Best,
Denys
Stripo Support`,
    notes: 'Завжди спитай чому, перед тим як підтвердити cancel. Часом баг.',
    helpLinks: ['https://support.stripo.email/en/articles/8558025-how-can-i-cancel-my-subscription']
  },
  {
    id: 'billing-refund-request',
    title: 'Запит на повернення коштів (refund)',
    tags: ['billing', 'refund'],
    body: `Hi {{client_name}},

For refund requests, our policy is documented here: https://support.stripo.email/en/articles/3174401-can-i-get-a-refund

The main rules:
- Refunds within 30 days of purchase, no questions asked
- After 30 days — case by case (e.g., billing error, unused subscription)

To process a refund, I will forward this to our billing team (ticket {{ticket_id}}) and they will respond within 1 business day. If urgent (failed payment, locked account), let me know and I will escalate.

Best,
Denys
Stripo Support`,
    notes: '30 днів — стандарт. Білінг команда вирішує case by case.',
    helpLinks: ['https://support.stripo.email/en/articles/3174401-can-i-get-a-refund']
  },
  {
    id: 'billing-promo-code',
    title: 'Як застосувати промо-код',
    tags: ['billing', 'promo'],
    body: `Hi {{client_name}},

To apply a promo code: https://support.stripo.email/en/articles/8550260-how-to-apply-the-promo-code

The flow:
1. Settings -> Billing -> Subscriptions
2. Click "Upgrade" or "Change plan"
3. On the checkout page, enter the promo code in the dedicated field
4. The discount applies before payment

If the code is not accepting, common reasons: expired, plan-specific, or already used on your account. Share the code and I will check on my side.

Best,
Denys
Stripo Support`,
    notes: 'Коди мають expiry і часто plan-specific. Питай конкретний код.',
    helpLinks: ['https://support.stripo.email/en/articles/8550260-how-to-apply-the-promo-code']
  },
  {
    id: 'billing-discounts',
    title: 'Чи є знижки на тариф',
    tags: ['billing', 'discount'],
    body: `Hi {{client_name}},

For available discounts: https://support.stripo.email/en/articles/8559806-are-there-any-discounts

We currently offer:
- Annual billing discount (vs monthly) — significant savings
- Non-profit and education discounts (case by case)
- Sometimes seasonal promos

If you fit any of the special categories (non-profit, education, agency), share your details and I will check what we can apply.

Best,
Denys
Stripo Support`,
    notes: 'Annual завжди дешевше. Non-profit вимагає верифікації.',
    helpLinks: ['https://support.stripo.email/en/articles/8559806-are-there-any-discounts']
  },
  {
    id: 'billing-one-time-payment',
    title: 'Чи можна оплатити одноразово',
    tags: ['billing', 'payment'],
    body: `Hi {{client_name}},

For one-time payments instead of recurring billing: https://support.stripo.email/en/articles/8559819-could-i-make-a-one-time-payment

Stripo subscriptions are recurring by default (monthly or yearly), but you can:
1. Choose annual billing for a single yearly charge (most cost-effective)
2. Cancel the auto-renew after first payment if you want exactly one cycle

For pure one-time license payments (e.g., for a specific project), that is typically available only on Enterprise. Let me know if that applies.

Best,
Denys
Stripo Support`,
    notes: 'One-time = Enterprise only. Annual + cancel auto-renew — workaround.',
    helpLinks: ['https://support.stripo.email/en/articles/8559819-could-i-make-a-one-time-payment']
  },
  {
    id: 'billing-bank-transfer',
    title: 'Оплата банківським переказом',
    tags: ['billing', 'payment'],
    body: `Hi {{client_name}},

For payment via bank transfer: https://support.stripo.email/en/articles/8592123-could-i-make-a-payment-by-bank-transfer

Bank transfer is available for:
- Annual subscriptions on Pro, Prime, and Plugin plans
- Enterprise contracts
- Custom invoicing arrangements

Smaller monthly subscriptions are credit card only. If you need bank transfer setup, share your billing details (company name, country, plan) and I will forward to billing for an invoice.

Best,
Denys
Stripo Support`,
    notes: 'Bank transfer — від certain plan tiers. Питай деталі.',
    helpLinks: ['https://support.stripo.email/en/articles/8592123-could-i-make-a-payment-by-bank-transfer']
  },
  {
    id: 'billing-how-it-works',
    title: 'Як працює білінг у Stripo',
    tags: ['billing', 'general'],
    body: `Hi {{client_name}},

For a full overview of how Stripo billing works: https://support.stripo.email/en/articles/8592166-how-do-billings-work

The essentials:
- Charges happen on the same date each cycle (monthly or yearly)
- Failed payments retry automatically for a few days, then the account is downgraded to FREE
- Invoices are emailed automatically to the billing contact
- You can change plan mid-cycle (proration applies)

If there is a specific question about your account ({{ticket_id}}), I can dig into the billing log on our side.

Best,
Denys
Stripo Support`,
    notes: 'Загальний overview. Уточнюй конкретне питання.',
    helpLinks: ['https://support.stripo.email/en/articles/8592166-how-do-billings-work']
  },
  {
    id: 'billing-update-payment-method',
    title: 'Оновити спосіб оплати',
    tags: ['billing', 'payment'],
    body: `Hi {{client_name}},

To update your payment method: https://support.stripo.email/en/articles/8557973-how-to-update-the-payment-method

Quick steps:
1. Settings -> Billing -> Payment methods
2. Click "Add payment method" or "Replace"
3. Enter the new card details
4. Make sure to set it as default before next charge

If the new card is failing the verification charge, it is usually a 3D Secure issue or the card has restrictions on online subscriptions. Share the error from your bank statement and I will help debug.

Best,
Denys
Stripo Support`,
    notes: '3D Secure часто блокує. Питай помилку від банку.',
    helpLinks: ['https://support.stripo.email/en/articles/8557973-how-to-update-the-payment-method']
  },
  {
    id: 'billing-invoice-for-finance',
    title: 'Отримати рахунок для бухгалтерії',
    tags: ['billing', 'invoice'],
    body: `Hi {{client_name}},

For getting a proper bill/invoice for your finance team: https://support.stripo.email/en/articles/8568647-how-can-i-receive-a-bill-for-my-financial-team

You can:
1. Download past invoices from Settings -> Billing -> Invoices
2. Add company billing details (VAT, address) so they appear on the invoice
3. Set a separate billing email if your finance team should receive copies automatically: https://support.stripo.email/en/articles/8568633-how-can-i-use-a-different-email-for-billing

If you need a specific past invoice with custom details, share the invoice number and what details to add — I will request a re-issue.

Best,
Denys
Stripo Support`,
    notes: 'Інвойси легко скачати самим. Custom details — через billing team.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8568647-how-can-i-receive-a-bill-for-my-financial-team',
      'https://support.stripo.email/en/articles/8568633-how-can-i-use-a-different-email-for-billing'
    ]
  },
  {
    id: 'billing-tax-exempt',
    title: 'Tax-exempt subscription (звільнення від податку)',
    tags: ['billing', 'tax'],
    body: `Hi {{client_name}},

For tax-exempt subscription payments: https://support.stripo.email/en/articles/11906175-tax-exempt-subscription-payments

To process this, we need:
1. A valid tax exemption certificate (US) or VAT ID (EU)
2. The certificate / VAT must match the billing entity name

Share the document (or VAT ID) and your billing entity name. I will forward to billing for verification and they will adjust the subscription accordingly.

Best,
Denys
Stripo Support`,
    notes: 'Tax-exempt — потрібна офіційна довідка. US/EU різні документи.',
    helpLinks: ['https://support.stripo.email/en/articles/11906175-tax-exempt-subscription-payments']
  },
  {
    id: 'billing-extra-services',
    title: 'Extra Services — додаткові пакети',
    tags: ['billing', 'extras'],
    body: `Hi {{client_name}},

Stripo has Extra Services for when you need more capacity without upgrading the whole plan: https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services

The most-used extras:
- Extra Members ($7/month per member) — add a team seat
- Extra Email Client Tests (10 tests for $20, EOA) — for QA-heavy weeks
- Extra Exports (10 for $5, multiples up to 50)
- Extra Timer Views (200k views for $15) — for time-sensitive campaigns

These are one-off purchases (or short-term for members). Settings -> Billing -> Extra Services.

What capacity are you trying to add?

Best,
Denys
Stripo Support`,
    notes: 'Extras = коротко-термінове розширення без зміни плану.',
    helpLinks: ['https://support.stripo.email/en/articles/8570861-exploring-stripo-s-extra-services']
  },
  {
    id: 'billing-extra-exports-buy',
    title: 'Як купити Extra Exports',
    tags: ['billing', 'extras', 'exports'],
    body: `Hi {{client_name}},

To purchase extra exports: https://support.stripo.email/en/articles/6995606-how-to-purchase-extra-exports

In short:
1. Settings -> Billing -> Extra Services
2. Select "Extra Exports"
3. Choose quantity (10, 20, 30, 40, or 50)
4. $5 per 10 exports

These are one-time additions to your monthly quota — they roll forward if unused.

Best,
Denys
Stripo Support`,
    notes: 'Extra exports — multiples of 10, max 50.',
    helpLinks: ['https://support.stripo.email/en/articles/6995606-how-to-purchase-extra-exports']
  },
  {
    id: 'billing-change-owner',
    title: 'Як змінити власника акаунту',
    tags: ['billing', 'account', 'ownership'],
    body: `Hi {{client_name}},

To change the owner of a Medium / Pro / Prime account: https://support.stripo.email/en/articles/5481108-how-to-change-the-owner-of-the-medium-pro-or-prime-account

The flow requires:
1. Current owner initiates the transfer
2. New owner accepts the invitation
3. The plan + billing move to the new owner's account

This usually applies when a team member who set up the account is leaving the company. If the previous owner is unreachable, billing can help with manual transfer — share the situation and I will escalate.

Best,
Denys
Stripo Support`,
    notes: 'Ownership transfer — типова ситуація при звільненнях. Якщо власник недоступний — манульно через billing.',
    helpLinks: ['https://support.stripo.email/en/articles/5481108-how-to-change-the-owner-of-the-medium-pro-or-prime-account']
  },
  {
    id: 'billing-personal-to-shared',
    title: 'Перевести персональний акаунт на shared',
    tags: ['billing', 'account', 'team'],
    body: `Hi {{client_name}},

To switch a personal account to a shared (team) one: https://support.stripo.email/en/articles/8548611-how-to-switсh-from-a-personal-account-to-a-shared-one

This is needed when:
- Your team is growing and you want central billing
- You want shared templates and assets across team members
- You need role-based access control

The switch is a one-way operation (you cannot revert easily), so make sure you back up your templates before doing it. After the switch, you invite team members via Settings -> Members.

Best,
Denys
Stripo Support`,
    notes: 'One-way операція. Попередь про backup.',
    helpLinks: [
      'https://support.stripo.email/en/articles/8548611-how-to-switсh-from-a-personal-account-to-a-shared-one',
      'https://support.stripo.email/en/articles/8557951-how-to-invite-members-to-the-stripo-account'
    ]
  }
]
