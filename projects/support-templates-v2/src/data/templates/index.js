/**
 * Templates index — обʼєднує всі категорії шаблонів в один масив.
 *
 * Категорії:
 *   - core           — основні (perші відповіді, ескалація, handover)
 *   - espExport      — експорт у 90+ ESP (згенеровані)
 *   - plugin         — Plugin v1 і v2 specific
 *   - editor         — Editor how-to (old + new)
 *   - troubleshooting — типові проблеми клієнтів
 *   - billing        — підписки, рефанди, екстри
 *   - setup          — реєстрація, SSO, workspace
 *   - knowledgeBase  — загальні поясники термінів
 */

import { coreTemplates } from './core.js'
import { espExportTemplates } from './esp-exports.js'
import { pluginTemplates } from './plugin.js'
import { editorTemplates } from './editor.js'
import { newEditorTemplates } from './new-editor.js'
import { troubleshootingTemplates } from './troubleshooting.js'
import { billingTemplates } from './billing.js'
import { setupTemplates } from './setup.js'
import { knowledgeBaseTemplates } from './knowledge-base.js'

export const templates = [
  ...coreTemplates.map(t => ({ ...t, category: 'core' })),
  ...espExportTemplates.map(t => ({ ...t, category: 'esp' })),
  ...pluginTemplates.map(t => ({ ...t, category: 'plugin' })),
  ...editorTemplates.map(t => ({ ...t, category: 'editor' })),
  ...newEditorTemplates.map(t => ({ ...t, category: 'new-editor' })),
  ...troubleshootingTemplates.map(t => ({ ...t, category: 'troubleshooting' })),
  ...billingTemplates.map(t => ({ ...t, category: 'billing' })),
  ...setupTemplates.map(t => ({ ...t, category: 'setup' })),
  ...knowledgeBaseTemplates.map(t => ({ ...t, category: 'kb' }))
]

// Всі унікальні теги для фільтрації в UI.
export const allTags = [
  ...new Set(templates.flatMap((t) => t.tags))
].sort()

// Метадані для блоків в UI.
export const templateCategories = [
  { id: 'core', name: 'Core', count: coreTemplates.length },
  { id: 'esp', name: 'ESP', count: espExportTemplates.length },
  { id: 'plugin', name: 'Plugin', count: pluginTemplates.length },
  { id: 'editor', name: 'Editor', count: editorTemplates.length },
  { id: 'new-editor', name: 'New Editor', count: newEditorTemplates.length },
  { id: 'troubleshooting', name: 'Troubleshooting', count: troubleshootingTemplates.length },
  { id: 'billing', name: 'Billing', count: billingTemplates.length },
  { id: 'setup', name: 'Setup', count: setupTemplates.length },
  { id: 'kb', name: 'Knowledge Base', count: knowledgeBaseTemplates.length }
]

// Загальний підрахунок — для info-line в UI
export const totalTemplatesCount = templates.length
