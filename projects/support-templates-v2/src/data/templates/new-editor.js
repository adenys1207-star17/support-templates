/**
 * New Editor specific templates — фічі та troubleshooting нового редактора.
 */

const newEditorHowTo = [
  { topic: 'add UTM tags (new editor)', url: 'https://support.stripo.email/en/articles/6433423-new-editor-how-to-add-utm-tags-to-the-email-template', slug: 'new-utm' },
  { topic: 'add a video (new editor)', url: 'https://support.stripo.email/en/articles/6449494-new-editor-how-to-add-a-video-to-your-email-template', slug: 'new-video' },
  { topic: 'add a table (new editor)', url: 'https://support.stripo.email/en/articles/6450963-new-editor-how-to-add-a-table-to-the-email-template', slug: 'new-table' },
  { topic: 'combine text and images in one block (new editor)', url: 'https://support.stripo.email/en/articles/12019197-new-editor-how-to-combine-text-and-images-in-a-single-block', slug: 'new-text-image-combo' },
  { topic: 'customize bullet lists (new editor)', url: 'https://support.stripo.email/en/articles/6397732-new-editor-how-to-customize-your-bullet-list-in-the-email-template', slug: 'new-bullets' },
  { topic: 'create an email signature (new editor)', url: 'https://support.stripo.email/en/articles/6448922-new-editor-how-to-create-an-email-signature', slug: 'new-signature' },
  { topic: 'wrap text around an image (new editor)', url: 'https://support.stripo.email/en/articles/6442722-new-editor-how-to-wrap-text-around-an-image', slug: 'new-text-wrap' },
  { topic: 'optimize the mobile version of your email (new editor)', url: 'https://support.stripo.email/en/articles/6417983-new-editor-how-to-optimize-the-mobile-version-of-your-email', slug: 'new-mobile' },
  { topic: 'use AI-generated images in the Image block (new editor)', url: 'https://support.stripo.email/en/articles/10714093-new-editor-how-to-use-ai-generated-images-in-the-image-block', slug: 'new-ai-images' },
  { topic: 'customize the view options button (new editor)', url: 'https://support.stripo.email/en/articles/11832127-new-editor-how-to-customize-the-view-options-button', slug: 'new-view-options' },
  { topic: 'translate templates (new editor)', url: 'https://support.stripo.email/en/articles/13393929-new-editor-how-to-translate-an-email-template', slug: 'new-translate' },
  { topic: 'create an abandoned cart block (new editor)', url: 'https://support.stripo.email/en/articles/13394034-new-editor-how-to-create-an-abandoned-cart-block-in-your-email-template', slug: 'new-abandoned-cart' }
]

function makeNewEditorHowTo({ topic, url, slug }) {
  return {
    id: `howto-${slug}`,
    title: `New Editor: ${topic}`,
    tags: ['new-editor', 'how-to', slug],
    body: `Hi {{client_name}},

For ${topic}, follow this guide: ${url}

This is for the new editor specifically. If you are on the old editor, the steps differ — let me know and I will point to the old-editor version.

If something is not working as the guide describes, share a screenshot and the template ID ({{ticket_id}}) and I will look at your specific case.

Best,
Denys
Stripo Support`,
    notes: `New editor how-to. Якщо клієнт на old — окрема стаття.`,
    helpLinks: [url]
  }
}

const newEditorTrouble = [
  { issue: 'borders blurry in new editor', url: 'https://support.stripo.email/en/articles/13375235-new-editor-border-thicknesses-are-not-the-same-or-why-do-the-lines-appear-blurry', slug: 'new-blurry-borders', title: 'New Editor: розмиті рамки' },
  { issue: 'images not showing in new editor', url: 'https://support.stripo.email/en/articles/13375387-new-editor-why-aren-t-the-images-showing-up-in-the-stripo-editor', slug: 'new-no-images', title: 'New Editor: зображення не відображаються' },
  { issue: 'buttons look different in Outlook (new editor)', url: 'https://support.stripo.email/en/articles/13375462-new-editor-why-do-buttons-appear-differently-in-outlook', slug: 'new-outlook-btn', title: 'New Editor: кнопки Outlook' },
  { issue: 'email clipped in Gmail (new editor)', url: 'https://support.stripo.email/en/articles/13375560-new-editor-why-does-my-email-get-clipped-in-gmail', slug: 'new-gmail-clip', title: 'New Editor: clipping в Gmail' },
  { issue: "cannot load the new editor", url: 'https://support.stripo.email/en/articles/13375589-new-editor-why-i-can-t-load-open-the-editor', slug: 'new-cant-load', title: 'New Editor: не завантажується' },
  { issue: "cannot find templates in new editor", url: 'https://support.stripo.email/en/articles/13375615-new-editor-why-i-can-t-find-my-templates-emails', slug: 'new-templates-missing', title: 'New Editor: шаблони пропали' }
]

function makeNewEditorTrouble({ issue, url, slug, title }) {
  return {
    id: `trouble-${slug}`,
    title,
    tags: ['new-editor', 'troubleshooting', slug],
    body: `Hi {{client_name}},

For the issue where ${issue}, the new-editor-specific guide is here: ${url}

To narrow it down on my side:
1. Confirm you are on the new editor (look for the "new" badge in the top bar)
2. Share the template ID ({{ticket_id}})
3. Browser + version
4. Console log if any errors appear

If you have already followed the guide, tell me at which step it stopped helping.

Best,
Denys
Stripo Support`,
    notes: `New editor troubleshooting: ${title}. Завжди підтверджуй що на новому редакторі.`,
    helpLinks: [url]
  }
}

export const newEditorTemplates = [
  ...newEditorHowTo.map(makeNewEditorHowTo),
  ...newEditorTrouble.map(makeNewEditorTrouble),

  {
    id: 'new-editor-commenting',
    title: 'New Editor: коментарі під час review',
    tags: ['new-editor', 'collaboration', 'comments'],
    body: `Hi {{client_name}},

The Commenting feature in the new editor lets reviewers leave inline comments without editing the template — useful for client approvals or internal review cycles. Guide: https://support.stripo.email/en/articles/10316159-new-editor-what-is-stripo-s-commenting-feature-and-how-can-it-boost-your-workflow

How it works:
1. Open the template -> Comments tab in the right panel
2. Select a block to attach the comment to
3. Mention team members with @
4. Comments stay with the template version

If you want notifications when someone comments, check Settings -> Notifications.

Best,
Denys
Stripo Support`,
    notes: 'Commenting — review workflow без надання edit-прав.',
    helpLinks: ['https://support.stripo.email/en/articles/10316159-new-editor-what-is-stripo-s-commenting-feature-and-how-can-it-boost-your-workflow']
  },
  {
    id: 'new-editor-ai-text',
    title: 'New Editor: AI для покращення тексту',
    tags: ['new-editor', 'ai', 'text'],
    body: `Hi {{client_name}},

The AI text improvement in the new editor works on a per-block basis: https://support.stripo.email/en/articles/10244214-new-editor-improve-your-text-using-artificial-intelligence-ai

Use cases it handles well:
- Make a paragraph shorter / longer
- Change tone (formal / casual)
- Fix grammar
- Translate to another language

For subject lines specifically, there is a dedicated tool: https://support.stripo.email/en/articles/10522042-new-editor-improve-subject-lines-and-hidden-preheaders-using-ai

Both require a paid plan with AI credits.

Best,
Denys
Stripo Support`,
    notes: 'AI features — paid plans. Перевір credits клієнта.',
    helpLinks: [
      'https://support.stripo.email/en/articles/10244214-new-editor-improve-your-text-using-artificial-intelligence-ai',
      'https://support.stripo.email/en/articles/10522042-new-editor-improve-subject-lines-and-hidden-preheaders-using-ai'
    ]
  },
  {
    id: 'new-editor-data-sources',
    title: 'New Editor: Data Sources (динамічні дані)',
    tags: ['new-editor', 'data-sources'],
    body: `Hi {{client_name}},

Data Sources in the new editor let you pull external data into your email at design time (not send time): https://support.stripo.email/en/articles/13385008-new-editor-what-are-the-data-sources-how-to-use-it

Useful when:
- You want product cards populated from a feed
- Newsletter sections fed from an RSS or JSON endpoint
- A/B variants based on data lookup

For storage of structured data, see Data Storage: https://support.stripo.email/en/articles/13384958-new-editor-what-are-the-data-storage-how-to-use-it

What is your use case?

Best,
Denys
Stripo Support`,
    notes: 'Data Sources != ESP merge tags. Design-time vs send-time — поясни.',
    helpLinks: [
      'https://support.stripo.email/en/articles/13385008-new-editor-what-are-the-data-sources-how-to-use-it',
      'https://support.stripo.email/en/articles/13384958-new-editor-what-are-the-data-storage-how-to-use-it'
    ]
  },
  {
    id: 'new-editor-mime',
    title: 'New Editor: MIME type — що це і нащо',
    tags: ['new-editor', 'export', 'mime'],
    body: `Hi {{client_name}},

For understanding MIME types in the new editor exports: https://support.stripo.email/en/articles/8005926-new-editor-what-is-the-mime-type

Short version:
- Email is sent as multipart/alternative MIME (HTML + plain text)
- The plain text version is what shows when HTML cannot render (e.g., screen readers, security scanners)
- Stripo generates both automatically on export

If you need to customize the plain text version manually, that is done in the editor before export.

Best,
Denys
Stripo Support`,
    notes: 'MIME — технічне питання, рідко. Plain text auto generated.',
    helpLinks: ['https://support.stripo.email/en/articles/8005926-new-editor-what-is-the-mime-type']
  },
  {
    id: 'new-editor-accordion',
    title: 'New Editor: Accordion block',
    tags: ['new-editor', 'blocks', 'accordion'],
    body: `Hi {{client_name}},

The Accordion block in the new editor: https://support.stripo.email/en/articles/11122946-new-editor-what-is-the-accordion-block-how-to-use-it

This is an interactive block that collapses/expands content. Note: support varies by email client — Gmail web supports it well, Outlook desktop does not. Always provide a fallback (e.g., the content visible by default in the static state).

For comparison, the Carousel block has similar caveats: https://support.stripo.email/en/articles/10650362-new-editor-what-is-the-carousel-block-how-to-use-it

Best,
Denys
Stripo Support`,
    notes: 'Інтерактивні блоки — Gmail так, Outlook ні. Завжди fallback.',
    helpLinks: [
      'https://support.stripo.email/en/articles/11122946-new-editor-what-is-the-accordion-block-how-to-use-it',
      'https://support.stripo.email/en/articles/10650362-new-editor-what-is-the-carousel-block-how-to-use-it'
    ]
  },
  {
    id: 'new-editor-stripo-api-json',
    title: 'New Editor: Stripo API з canonical JSON',
    tags: ['new-editor', 'api', 'integration'],
    body: `Hi {{client_name}},

For programmatic email creation via Stripo API using canonical JSON: https://support.stripo.email/en/articles/13428428-new-editor-how-simply-create-emails-with-stripo-api-with-canonical-json

The canonical JSON describes the email structure (stripes, structures, blocks) in a machine-readable form. You can:
1. Generate emails programmatically from a JSON payload
2. Diff and merge changes
3. Store templates in your own DB and re-hydrate them in Stripo

This is API-heavy. Are you integrating with a backend or just exploring? I will point to the right starting docs.

Best,
Denys
Stripo Support`,
    notes: 'Canonical JSON — для серйозних API integrations.',
    helpLinks: ['https://support.stripo.email/en/articles/13428428-new-editor-how-simply-create-emails-with-stripo-api-with-canonical-json']
  }
]
