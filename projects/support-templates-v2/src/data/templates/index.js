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
  { id: 'core',           code: 'GEN', label: 'General & First Response', count: coreTemplates.length },
  { id: 'esp',            code: 'INT', label: 'Integrations & Export',    count: espExportTemplates.length },
  { id: 'plugin',         code: 'PLG', label: 'Plugin',                   count: pluginTemplates.length },
  { id: 'editor',         code: 'EDT', label: 'Editor & Blocks',          count: editorTemplates.length },
  { id: 'new-editor',     code: 'NEW', label: 'New Editor',               count: newEditorTemplates.length },
  { id: 'troubleshooting',code: 'TRB', label: 'Troubleshooting',          count: troubleshootingTemplates.length },
  { id: 'billing',        code: 'BIL', label: 'Billing & Plans',          count: billingTemplates.length },
  { id: 'setup',          code: 'ACC', label: 'Account & Access',         count: setupTemplates.length },
  { id: 'kb',             code: 'KB',  label: 'Knowledge Base',           count: knowledgeBaseTemplates.length },
]

// Загальний підрахунок — для info-line в UI
export const totalTemplatesCount = templates.length
