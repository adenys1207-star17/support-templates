/**
 * ESP-specific export templates.
 *
 * Stripo підтримує експорт у 90+ ESP. Замість писати 90 шаблонів вручну,
 * генеруємо їх з одного списку через makeEspTemplate().
 *
 * Якщо треба підкоригувати конкретний ESP — додай override-ключ
 * (notes, customBody) в espList.
 */

const espList = [
  { name: 'ActiveCampaign', url: 'https://support.stripo.email/en/articles/3174256-how-to-export-an-email-template-to-activecampaign' },
  { name: 'ActiveTrail', url: 'https://support.stripo.email/en/articles/5652189-how-to-export-an-email-template-to-activetrail' },
  { name: 'Act-On', url: 'https://support.stripo.email/en/articles/3535121-how-to-export-an-email-template-to-act-on' },
  { name: 'Acoustic Campaign', url: 'https://support.stripo.email/en/articles/3535016-how-to-export-emails-to-acoustic-campaign' },
  { name: 'Acumbamail', url: 'https://support.stripo.email/en/articles/5095011-how-to-export-an-email-template-to-acumbamail' },
  { name: 'Amazon Pinpoint', url: 'https://support.stripo.email/en/articles/4803139-how-to-export-an-email-template-to-amazon-pinpoint' },
  { name: 'Amazon SES', url: 'https://support.stripo.email/en/articles/3334640-how-to-export-an-email-template-to-amazon-ses' },
  { name: 'AWeber', url: 'https://support.stripo.email/en/articles/3461966-how-to-export-an-email-template-to-aweber' },
  { name: 'Benchmark Email', url: 'https://support.stripo.email/en/articles/3871555-how-to-export-an-email-template-to-benchmark-email' },
  { name: 'Bird (former SparkPost)', url: 'https://support.stripo.email/en/articles/3174329-how-to-export-an-email-template-to-bird-former-sparkpost', tagSlug: 'bird' },
  { name: 'BirdSend', url: 'https://support.stripo.email/en/articles/4803155-how-to-export-an-email-template-to-birdsend' },
  { name: 'Blueshift', url: 'https://support.stripo.email/en/articles/6525996-how-to-export-an-email-template-to-blueshift' },
  { name: 'Braze', url: 'https://support.stripo.email/en/articles/3174276-how-to-export-an-email-template-to-braze' },
  { name: 'Brevo (former SendinBlue)', url: 'https://support.stripo.email/en/articles/4149574-how-to-export-an-email-template-to-brevo-former-sendinblue', tagSlug: 'brevo' },
  { name: 'Campaign Monitor', url: 'https://support.stripo.email/en/articles/3174279-how-to-export-an-email-template-to-campaign-monitor' },
  { name: 'CleverReach', url: 'https://support.stripo.email/en/articles/5743118-how-to-export-an-email-template-to-cleverreach' },
  { name: 'CleverTap', url: 'https://support.stripo.email/en/articles/10183895-how-to-export-an-email-template-to-clevertap' },
  { name: 'Constant Contact', url: 'https://support.stripo.email/en/articles/3174281-how-to-export-an-email-template-to-constant-contact' },
  { name: 'Dotdigital', url: 'https://support.stripo.email/en/articles/3551991-how-to-export-an-email-template-to-dotdigital' },
  { name: 'EcoMail', url: 'https://support.stripo.email/en/articles/6771647-how-to-export-an-email-template-to-ecomail' },
  { name: 'E-goi', url: 'https://support.stripo.email/en/articles/4803145-how-to-export-an-email-template-to-e-goi' },
  { name: 'Elastic Email', url: 'https://support.stripo.email/en/articles/4410231-how-to-export-an-email-template-to-elastic-email' },
  { name: 'eSputnik', url: 'https://support.stripo.email/en/articles/3174282-how-to-export-an-email-template-to-esputnik' },
  { name: 'ExpertSender', url: 'https://support.stripo.email/en/articles/5477841-how-to-export-an-email-template-to-expertsender' },
  { name: 'Follow Up Boss', url: 'https://support.stripo.email/en/articles/12841627-how-to-export-an-email-template-to-follow-up-boss' },
  { name: 'GetResponse', url: 'https://support.stripo.email/en/articles/3174284-how-to-export-an-email-template-to-getresponse' },
  { name: 'GetResponse MAX', url: 'https://support.stripo.email/en/articles/6554581-how-to-export-an-email-template-to-getresponse-max' },
  { name: 'Gmail', url: 'https://support.stripo.email/en/articles/3174291-how-to-export-an-email-template-to-gmail' },
  { name: 'Google Cloud', url: 'https://support.stripo.email/en/articles/11929369-how-to-export-email-templates-to-google-cloud' },
  { name: 'HubSpot', url: 'https://support.stripo.email/en/articles/3174298-how-to-export-an-email-template-to-hubspot' },
  { name: 'iContact', url: 'https://support.stripo.email/en/articles/3353704-how-to-export-an-email-template-to-icontact' },
  { name: 'Iterable', url: 'https://support.stripo.email/en/articles/3601444-how-to-export-an-email-template-to-iterable' },
  { name: 'Klaviyo', url: 'https://support.stripo.email/en/articles/3174301-how-to-export-an-email-template-to-klaviyo' },
  { name: 'Mailchimp', url: 'https://support.stripo.email/en/articles/3174302-how-to-export-an-email-template-to-mailchimp' },
  { name: 'MailClickConvert', url: 'https://support.stripo.email/en/articles/3461975-how-to-export-an-email-template-to-mailclickconvert' },
  { name: 'Maileon', url: 'https://support.stripo.email/en/articles/3174304-how-to-export-an-email-template-to-maileon' },
  { name: 'Mailerlite', url: 'https://support.stripo.email/en/articles/8866827-how-to-export-an-email-template-to-mailerlite' },
  { name: 'Mailgun', url: 'https://support.stripo.email/en/articles/3174307-how-to-export-an-email-template-to-mailgun' },
  { name: 'Mailjet', url: 'https://support.stripo.email/en/articles/3174311-how-to-export-an-email-template-to-mailjet' },
  { name: 'Mailercloud', url: 'https://support.stripo.email/en/articles/9886946-how-to-export-email-templates-to-mailercloud' },
  { name: 'Mailpro', url: 'https://support.stripo.email/en/articles/6771534-how-to-export-an-email-template-to-mailpro' },
  { name: 'Mailtrap', url: 'https://support.stripo.email/en/articles/11431744-how-to-export-an-email-template-to-mailtrap' },
  { name: 'MailUp', url: 'https://support.stripo.email/en/articles/4894315-how-to-export-an-email-template-to-mailup' },
  { name: 'MailWizz', url: 'https://support.stripo.email/en/articles/4517600-how-to-export-an-email-template-to-mailwizz' },
  { name: 'Make', url: 'https://support.stripo.email/en/articles/9587487-how-to-export-an-email-template-to-make' },
  { name: 'Mandrill', url: 'https://support.stripo.email/en/articles/3477402-how-to-export-an-email-template-to-mandrill' },
  { name: 'Marketo', url: 'https://support.stripo.email/en/articles/3535147-how-to-export-an-email-template-to-marketo' },
  { name: 'Mautic', url: 'https://support.stripo.email/en/articles/6530643-how-to-export-an-email-template-to-mautic' },
  { name: 'Mindbaz', url: 'https://support.stripo.email/en/articles/9822531-how-to-export-an-email-template-to-mindbaz' },
  { name: 'MoEngage', url: 'https://support.stripo.email/en/articles/6771604-how-to-export-an-email-template-to-moengage' },
  { name: 'MoonMail', url: 'https://support.stripo.email/en/articles/5095067-how-to-export-an-email-template-to-moonmail' },
  { name: 'Moosend', url: 'https://support.stripo.email/en/articles/3722694-how-to-export-an-email-template-to-moosend' },
  { name: 'n8n.io', url: 'https://support.stripo.email/en/articles/11053864-how-to-export-email-templates-to-n8n-io', tagSlug: 'n8n' },
  { name: 'Netcore', url: 'https://support.stripo.email/en/articles/12257492-how-to-export-an-email-template-to-netcore' },
  { name: 'Ongage', url: 'https://support.stripo.email/en/articles/3462010-how-to-export-an-email-template-to-ongage' },
  { name: 'OneSignal', url: 'https://support.stripo.email/en/articles/8393855-how-to-export-an-email-template-to-onesignal' },
  { name: 'Ontraport', url: 'https://support.stripo.email/en/articles/6531230-how-to-export-an-email-template-to-ontraport' },
  { name: 'Omnisend', url: 'https://support.stripo.email/en/articles/6486213-how-to-export-email-templates-to-omnisend' },
  { name: 'OpenCRM', url: 'https://support.stripo.email/en/articles/4803060-how-to-export-an-email-template-to-opencrm' },
  { name: 'Optimove', url: 'https://support.stripo.email/en/articles/9351635-how-to-export-an-email-template-to-optimove' },
  { name: 'Oracle Eloqua', url: 'https://support.stripo.email/en/articles/4893186-how-to-export-an-email-template-to-oracle-eloqua' },
  { name: 'Outlook (app)', url: 'https://support.stripo.email/en/articles/3174312-how-to-export-an-email-template-to-the-outlook-app', tagSlug: 'outlook-app' },
  { name: 'Outlook Web', url: 'https://support.stripo.email/en/articles/4410226-how-to-export-an-email-template-to-outlook-web' },
  { name: 'Pabbly', url: 'https://support.stripo.email/en/articles/5358400-how-to-export-an-email-template-to-pabbly' },
  { name: 'Pardot', url: 'https://support.stripo.email/en/articles/7174220-how-to-export-an-email-template-to-pardot' },
  { name: 'Pega', url: 'https://support.stripo.email/en/articles/6485634-how-to-export-an-email-template-to-pega' },
  { name: 'Pepipost', url: 'https://support.stripo.email/en/articles/3462259-how-to-export-an-email-template-to-pepipost' },
  { name: 'Postmark', url: 'https://support.stripo.email/en/articles/3477420-how-to-export-an-email-template-to-postmark' },
  { name: 'Postup', url: 'https://support.stripo.email/en/articles/9495715-how-to-export-an-email-template-to-postup' },
  { name: 'Promio.Connect', url: 'https://support.stripo.email/en/articles/6771555-how-to-export-an-email-template-to-promio-connect', tagSlug: 'promio' },
  { name: 'Pubrio', url: 'https://support.stripo.email/en/articles/12647251-how-to-export-an-email-template-to-pubrio' },
  { name: 'ReachMail', url: 'https://support.stripo.email/en/articles/5603387-how-to-export-an-email-template-to-reachmail' },
  { name: 'Reteno', url: 'https://support.stripo.email/en/articles/8304139-how-to-export-an-email-template-to-reteno' },
  { name: 'RULE', url: 'https://support.stripo.email/en/articles/5627514-how-to-export-an-email-template-to-rule' },
  { name: 'Salesforce Marketing Cloud', url: 'https://support.stripo.email/en/articles/3174321-how-to-export-an-email-template-to-salesforce-marketing-cloud', tagSlug: 'salesforce' },
  { name: 'Selzy', url: 'https://support.stripo.email/en/articles/9858739-how-to-export-email-templates-to-selzy' },
  { name: 'Sender', url: 'https://support.stripo.email/en/articles/10666959-how-to-export-an-email-template-to-sender' },
  { name: 'SendGrid', url: 'https://support.stripo.email/en/articles/3174323-how-to-export-an-email-template-to-sendgrid' },
  { name: 'Sendloop', url: 'https://support.stripo.email/en/articles/3462319-how-to-export-an-email-template-to-sendloop' },
  { name: 'SendPulse', url: 'https://support.stripo.email/en/articles/3174327-how-to-export-an-email-template-to-sendpulse' },
  { name: 'SendWithUs', url: 'https://support.stripo.email/en/articles/5358345-how-to-export-an-email-template-to-sendwithus' },
  { name: 'Sendy', url: 'https://support.stripo.email/en/articles/4594551-how-to-export-an-email-template-to-sendy' },
  { name: 'SharpSpring', url: 'https://support.stripo.email/en/articles/3601483-how-to-export-an-email-template-to-sharpspring' },
  { name: 'Ticketor', url: 'https://support.stripo.email/en/articles/11929922-how-to-export-email-templates-to-ticketor' },
  { name: 'UniOne', url: 'https://support.stripo.email/en/articles/13335279-how-to-export-an-email-template-to-unione' },
  { name: 'UseINBOX', url: 'https://support.stripo.email/en/articles/5676293-how-to-export-an-email-template-to-useinbox' },
  { name: 'Useinsider', url: 'https://support.stripo.email/en/articles/8340627-how-to-export-an-email-template-to-useinsider' },
  { name: 'User.com', url: 'https://support.stripo.email/en/articles/5358421-how-to-export-an-email-template-to-user-com' },
  { name: 'WhatCounts', url: 'https://support.stripo.email/en/articles/12257489-how-to-export-an-email-template-to-whatcounts' },
  { name: 'Yespo', url: 'https://support.stripo.email/en/articles/8304163-how-to-export-an-email-template-to-yespo' },
  { name: 'Zapier', url: 'https://support.stripo.email/en/articles/3462537-how-to-export-an-email-template-to-zapier' },
  { name: 'Zeta', url: 'https://support.stripo.email/en/articles/3725789-how-to-export-an-email-template-to-zeta' },
  { name: 'Zoho Campaigns', url: 'https://support.stripo.email/en/articles/3871552-how-to-export-an-email-template-to-zoho-campaigns' },
  { name: 'Zoho Mail', url: 'https://support.stripo.email/en/articles/6525989-how-to-export-an-email-template-to-zoho-mail' },
  { name: 'Zoho MarketingHub', url: 'https://support.stripo.email/en/articles/5361332-how-to-export-an-email-template-to-zoho-marketinghub-marketing-automation' }
]

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

function makeEspTemplate({ name, url, tagSlug }) {
  const slug = tagSlug || slugify(name)
  return {
    id: `export-${slug}`,
    title: `Експорт в ${name}`,
    tags: ['export', 'esp', slug],
    body: `Hi {{client_name}},

For exporting your email template to ${name}, here is the step-by-step guide: ${url}

A few quick checks before you start:
1. Make sure your ${name} integration is authorized in Stripo (Settings -> Integrations)
2. Save the template in Stripo first, then trigger the export
3. If the template uses AMP or merge tags, confirm ${name} supports them on your plan

If you hit an error during the export, share the exact error text and the template ID ({{ticket_id}}) and I will dig in from our side.

Best,
Denys
Stripo Support`,
    notes: `Базовий шаблон для ${name}. Якщо помилка специфічна (auth, AMP, merge-теги, rate limit) — використай troubleshooting-шаблон.`,
    helpLinks: [url]
  }
}

export const espExportTemplates = espList.map(makeEspTemplate)
