/**
 * Knowledge Base templates — загальні питання про email і email marketing.
 * Генеруються з KB-статей через makeKbTemplate.
 *
 * Це корисно, коли клієнт-новачок питає базові речі типу "what is SPF",
 * "what is a hard bounce" — швидко даєш статтю з посиланням.
 */

const kbList = [
  {
    topic: 'SMTP for email marketing',
    url: 'https://support.stripo.email/en/articles/7936189-what-is-smtp-mean-for-email-marketing',
    slug: 'smtp'
  },
  {
    topic: 'an email autoresponder',
    url: 'https://support.stripo.email/en/articles/7912962-what-is-an-email-autoresponder',
    slug: 'autoresponder'
  },
  {
    topic: 'an email template',
    url: 'https://support.stripo.email/en/articles/7912785-what-is-an-email-template',
    slug: 'email-template-def'
  },
  {
    topic: 'an automated email',
    url: 'https://support.stripo.email/en/articles/7912747-what-is-an-automated-email',
    slug: 'automated-email'
  },
  {
    topic: 'an email whitelist',
    url: 'https://support.stripo.email/en/articles/7329783-what-is-an-email-whitelist',
    slug: 'whitelist'
  },
  {
    topic: 'an Email Service Provider (ESP)',
    url: 'https://support.stripo.email/en/articles/7262292-what-is-an-email-service-provider',
    slug: 'esp-definition'
  },
  {
    topic: 'a bulk email',
    url: 'https://support.stripo.email/en/articles/7262233-what-is-a-bulk-email',
    slug: 'bulk-email'
  },
  {
    topic: 'a confirmation email',
    url: 'https://support.stripo.email/en/articles/7262192-what-is-a-confirmation-email',
    slug: 'confirmation-email'
  },
  {
    topic: 'a hard bounce in email',
    url: 'https://support.stripo.email/en/articles/7262161-what-is-a-hard-bounce-in-email',
    slug: 'hard-bounce'
  },
  {
    topic: 'A/B testing in email marketing',
    url: 'https://support.stripo.email/en/articles/7262148-what-is-a-b-testing-in-email-markeing',
    slug: 'ab-testing'
  },
  {
    topic: 'the average open rate for email marketing',
    url: 'https://support.stripo.email/en/articles/7169724-what-is-the-average-open-rate-for-email-marketing',
    slug: 'open-rate-avg'
  },
  {
    topic: 'an email campaign',
    url: 'https://support.stripo.email/en/articles/7169611-what-is-an-email-campaign',
    slug: 'campaign-def'
  },
  {
    topic: 'a transactional email',
    url: 'https://support.stripo.email/en/articles/7135237-understanding-the-transactional-email',
    slug: 'transactional'
  },
  {
    topic: 'a good open rate',
    url: 'https://support.stripo.email/en/articles/7109296-what-is-a-good-open-rate-for-email-marketing',
    slug: 'open-rate-good'
  },
  {
    topic: 'a blast email',
    url: 'https://support.stripo.email/en/articles/7109292-what-is-a-blast-email',
    slug: 'blast-email'
  },
  {
    topic: 'a drip email campaign',
    url: 'https://support.stripo.email/en/articles/7109285-what-is-a-drip-email-campaign',
    slug: 'drip-campaign'
  },
  {
    topic: 'a cold email',
    url: 'https://support.stripo.email/en/articles/7025281-what-is-a-cold-email',
    slug: 'cold-email'
  },
  {
    topic: 'an email bounce (overview)',
    url: 'https://support.stripo.email/en/articles/7004155-what-is-an-email-bounce',
    slug: 'bounce-overview'
  },
  {
    topic: 'HTML email',
    url: 'https://support.stripo.email/en/articles/7004114-what-is-html-email',
    slug: 'html-email'
  },
  {
    topic: 'SPF for email authentication',
    url: 'https://support.stripo.email/en/articles/7047063-what-is-spf-email',
    slug: 'spf'
  },
  {
    topic: 'SSL email',
    url: 'https://support.stripo.email/en/articles/7047042-what-is-ssl-email',
    slug: 'ssl'
  },
  {
    topic: 'POP3 email protocol',
    url: 'https://support.stripo.email/en/articles/7135177-what-is-a-pop3-email',
    slug: 'pop3'
  },
  {
    topic: 'IMAP email protocol',
    url: 'https://support.stripo.email/en/articles/7135192-what-does-imap-mean-in-email',
    slug: 'imap'
  },
  {
    topic: 'spam email',
    url: 'https://support.stripo.email/en/articles/7329771-what-is-spam-email',
    slug: 'spam-def'
  },
  {
    topic: 'a dynamic email',
    url: 'https://support.stripo.email/en/articles/6991008-what-is-a-dynamic-email',
    slug: 'dynamic-email'
  },
  {
    topic: 'the importance of subject lines',
    url: 'https://support.stripo.email/en/articles/6991216-understanding-the-importance-of-the-subject-line-in-emails',
    slug: 'subject-line-importance'
  },
  {
    topic: 'what to include in an email signature',
    url: 'https://support.stripo.email/en/articles/6991176-what-to-include-in-an-email-signature',
    slug: 'signature-content'
  },
  {
    topic: 'BCC in email',
    url: 'https://support.stripo.email/en/articles/6995584-what-does-bcc-mean-in-email',
    slug: 'bcc'
  },
  {
    topic: 'CC in email',
    url: 'https://support.stripo.email/en/articles/6995596-understanding-the-cc-field-in-email-communication',
    slug: 'cc'
  },
  {
    topic: '"Re" in email subject lines',
    url: 'https://support.stripo.email/en/articles/6995974-understanding-the-meaning-of-re-in-email-communication',
    slug: 're-meaning'
  },
  {
    topic: 'an email thread',
    url: 'https://support.stripo.email/en/articles/6996145-what-is-an-email-thread',
    slug: 'thread'
  },
  {
    topic: 'a flagged email',
    url: 'https://support.stripo.email/en/articles/6996259-what-does-a-flagged-email-mean',
    slug: 'flagged'
  },
  {
    topic: 'archiving an email',
    url: 'https://support.stripo.email/en/articles/7025203-what-does-archiving-an-email-do',
    slug: 'archive-email'
  },
  {
    topic: 'a recovery email',
    url: 'https://support.stripo.email/en/articles/7172639-what-is-a-recovery-email',
    slug: 'recovery-email'
  },
  {
    topic: 'a queued email',
    url: 'https://support.stripo.email/en/articles/7329796-what-is-a-queued-email',
    slug: 'queued'
  },
  {
    topic: 'a "Draft" email',
    url: 'https://support.stripo.email/en/articles/7330342-what-does-draft-mean-in-email',
    slug: 'draft'
  },
  {
    topic: 'a no-reply email',
    url: 'https://support.stripo.email/en/articles/7330421-what-is-a-no-reply-email',
    slug: 'no-reply'
  },
  {
    topic: 'how to view emails in HTML format',
    url: 'https://support.stripo.email/en/articles/7936228-how-to-view-emails-in-html-format',
    slug: 'view-as-html'
  },
  {
    topic: 'tips for writing a professional email',
    url: 'https://support.stripo.email/en/articles/7029590-tips-for-writing-a-professional-email',
    slug: 'professional-email-tips'
  },
  {
    topic: 'choosing a professional font for email',
    url: 'https://support.stripo.email/en/articles/7109302-choosing-a-professional-font-for-email',
    slug: 'professional-font'
  },
  {
    topic: 'email header design ideas',
    url: 'https://support.stripo.email/en/articles/7135216-email-header-design-ideas',
    slug: 'header-design'
  },
  {
    topic: 'the components of an email',
    url: 'https://support.stripo.email/en/articles/7435997-what-are-the-components-of-an-email',
    slug: 'email-components'
  },
  {
    topic: 'a pre-header in an email',
    url: 'https://support.stripo.email/en/articles/7912887-what-is-a-pre-header-in-an-email',
    slug: 'preheader-def'
  },
  {
    topic: 'how to make a promotional email',
    url: 'https://support.stripo.email/en/articles/7912901-how-to-make-a-promotional-email',
    slug: 'promotional-email'
  },
  {
    topic: 'opt-in email marketing examples',
    url: 'https://support.stripo.email/en/articles/7936265-opt-in-email-marketing-examples-that-drive-results',
    slug: 'opt-in-examples'
  },
  {
    topic: 'how to make an email distribution list',
    url: 'https://support.stripo.email/en/articles/7936170-how-to-make-an-email-distribution-list',
    slug: 'distribution-list'
  }
]

function makeKbTemplate({ topic, url, slug }) {
  return {
    id: `kb-${slug}`,
    title: `KB: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`,
    tags: ['knowledge-base', slug],
    body: `Hi {{client_name}},

Good question — here is a clear explainer on ${topic}: ${url}

If after reading the article you have a follow-up question specific to your Stripo setup (e.g., how this applies to your campaigns), share the context and I will give a more targeted answer.

Best,
Denys
Stripo Support`,
    notes: `KB-шаблон про "${topic}". Базовий поясник, доповнюй контекстом якщо треба.`,
    helpLinks: [url]
  }
}

export const knowledgeBaseTemplates = kbList.map(makeKbTemplate)
