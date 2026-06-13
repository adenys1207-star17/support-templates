/**
 * Знаходить усі унікальні змінні в шаблоні: {{name}} -> 'name'.
 */
export function extractVariables(body) {
  const regex = /\{\{(\w+)\}\}/g
  const found = new Set()
  let match
  while ((match = regex.exec(body)) !== null) {
    found.add(match[1])
  }
  return [...found]
}

/**
 * Підставляє значення змінних в шаблон.
 * Якщо змінна порожня, лишається {{name}} як плейсхолдер.
 */
export function substituteVariables(body, values) {
  return body.replace(/\{\{(\w+)\}\}/g, (full, name) => {
    const value = values[name]
    return value && value.trim() !== '' ? value : full
  })
}

/**
 * Лейбли для змінних в UI (українською).
 */
export const variableLabels = {
  client_name: "Ім'я клієнта",
  plan: 'Тариф клієнта',
  ticket_id: 'Номер тікету',
  eta: 'ETA (час відповіді)',
  issue: 'Опис проблеми',
  esp: 'ESP (Mailchimp, Salesforce...)',
  follow_up: 'Час фолоу-апу'
}

export const variablePlaceholders = {
  client_name: 'John',
  plan: 'Pro',
  ticket_id: 'SUP-12345',
  eta: '2 hours',
  issue: 'export to Mailchimp failing',
  esp: 'Mailchimp',
  follow_up: '10:00 Kyiv time'
}
