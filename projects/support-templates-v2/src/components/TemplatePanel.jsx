import { useEffect, useMemo, useState } from 'react'
import {
  extractVariables,
  substituteVariables,
  variableLabels,
  variablePlaceholders
} from '../utils/variables.js'
import { copyToClipboard } from '../utils/clipboard.js'
import { helpArticlesByUrl } from '../data/helpArticles.js'
import { supabase } from '../lib/supabase.js'

export default function TemplatePanel({ template }) {
  const variables = useMemo(
    () => extractVariables(template.body),
    [template.body]
  )

  const [values, setValues] = useState({})
  const [copied, setCopied] = useState(false)
  const [copiedPreview, setCopiedPreview] = useState(false)

  // Скидаємо значення при зміні шаблону
  useEffect(() => {
    setValues({})
    setCopied(false)
    setCopiedPreview(false)
  }, [template.id])

  const rendered = substituteVariables(template.body, values)

  async function handleCopy() {
    const ok = await copyToClipboard(rendered)
    if (ok) {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
      supabase?.from('copy_events').insert({
        template_id: template.id,
        template_title: template.title,
      }).then(() => {})
    }
  }

  async function handleCopyPreview() {
    const ok = await copyToClipboard(rendered)
    if (ok) {
      setCopiedPreview(true)
      setTimeout(() => setCopiedPreview(false), 1800)
    }
  }

  function handleReset() {
    setValues({})
  }

  return (
    <div className="panel">
      <header className="panel__header">
        <div>
          <h2 className="panel__title">{template.title}</h2>
          <div className="panel__tags">
            {template.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="panel__actions">
          {variables.length > 0 && (
            <button className="btn btn--ghost" onClick={handleReset}>
              Очистити
            </button>
          )}
          <button
            className={`btn ${copied ? 'btn--success' : 'btn--primary'}`}
            aria-label={copied ? 'Скопійовано' : 'Скопіювати шаблон'}
            onClick={handleCopy}
          >
            {copied ? '✓ Скопійовано' : 'Скопіювати'}
          </button>
        </div>
      </header>

      {variables.length > 0 && (
        <section className="panel__vars">
          <h4 className="panel__section-title">Змінні</h4>
          <div className="vars-grid">
            {variables.map((name) => (
              <label key={name} className="var-field">
                <span className="var-field__label">
                  {variableLabels[name] || name}
                </span>
                <input
                  type="text"
                  className="var-field__input"
                  placeholder={variablePlaceholders[name] || name}
                  value={values[name] || ''}
                  onChange={(e) =>
                    setValues({ ...values, [name]: e.target.value })
                  }
                />
              </label>
            ))}
          </div>
        </section>
      )}

      <section className="panel__preview">
        <div className="panel__preview-header">
          <h4 className="panel__section-title">Превʼю</h4>
          <button
            className={`btn--preview-copy ${copiedPreview ? 'btn--success' : ''}`}
            aria-label={copiedPreview ? 'Скопійовано' : 'Скопіювати превʼю'}
            onClick={handleCopyPreview}
          >
            {copiedPreview ? '✓ Скопійовано' : 'Скопіювати'}
          </button>
        </div>
        <pre className="preview-box">{rendered}</pre>
      </section>

      {template.notes && (
        <section className="panel__notes">
          <h4 className="panel__section-title">Нотатки</h4>
          <p>{template.notes}</p>
        </section>
      )}

      {template.helpLinks && template.helpLinks.length > 0 && (
        <section className="panel__help-links">
          <h4 className="panel__section-title">Релевантні статті Help Center</h4>
          <ul className="help-links-list">
            {template.helpLinks.map((url) => {
              const article = helpArticlesByUrl[url]
              return (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="help-link"
                  >
                    {article ? article.title : url}
                  </a>
                  {article && (
                    <span className="help-link-meta">
                      {article.collectionName}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </div>
  )
}
