import { useEffect, useMemo, useState } from 'react'
import { templates, templateCategories } from '../data/templates/index.js'
import { extractVariables, variablePlaceholders } from '../utils/variables.js'
import { copyToClipboard } from '../utils/clipboard.js'
import { supabase } from '../lib/supabase.js'
import Icon from './Icon.jsx'

const CAT_BY_ID = Object.fromEntries(templateCategories.map((c) => [c.id, c]))

function labelFor(k) {
  return k.replace(/_/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase())
}

function FillPreview({ body, values }) {
  const parts = body.split(/(\{\{\w+\}\})/g)
  return parts.map((part, i) => {
    const m = part.match(/^\{\{(\w+)\}\}$/)
    if (!m) return part
    const key = m[1]
    const v = values[key]
    if (v) return <span key={i} className="filled">{v}</span>
    const placeholder = variablePlaceholders[key] || key
    return <span key={i} className="unfilled" title="Not filled — using sample">{placeholder}</span>
  })
}

export default function DetailView({ t, onBack, onOpen, onToast }) {
  const variables = useMemo(() => extractVariables(t.body), [t.body])
  const cat = CAT_BY_ID[t.category]

  const [values, setValues] = useState(() => {
    const v = {}
    extractVariables(t.body).forEach((k) => { v[k] = '' })
    return v
  })
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const v = {}
    extractVariables(t.body).forEach((k) => { v[k] = '' })
    setValues(v)
    setCopied(false)
    window.scrollTo({ top: 0 })
  }, [t.id])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        const tag = document.activeElement?.tagName
        if (tag !== 'INPUT' && tag !== 'TEXTAREA') onBack()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onBack])

  const resolvedBody = t.body.replace(/\{\{(\w+)\}\}/g, (_, k) =>
    values[k] || variablePlaceholders[k] || `{{${k}}}`
  )

  async function doCopy() {
    const ok = await copyToClipboard(resolvedBody)
    if (ok) {
      setCopied(true)
      onToast('Copied to clipboard — ready to paste')
      setTimeout(() => setCopied(false), 1600)
      supabase?.from('copy_events').insert({ template_id: t.id, template_title: t.title }).then(() => {})
    }
  }

  const related = templates.filter((x) => x.category === t.category && x.id !== t.id).slice(0, 4)

  return (
    <div className="detail fade-in">
      <button className="back" onClick={onBack}>
        <Icon name="arrow-left" size={15} /> Back to library
      </button>

      <div className="detail-head">
        <div>
          <h2>{t.title}</h2>
          <div className="detail-meta">
            {cat && <span className="card-badge">{cat.code} · {cat.label}</span>}
            {t.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
        </div>
        <div className="detail-actions">
          {variables.length > 0 && (
            <button className="btn btn-ghost" onClick={() => setValues(Object.fromEntries(variables.map((k) => [k, ''])))}>
              Clear
            </button>
          )}
          <button className={'btn btn-primary' + (copied ? ' done' : '')} onClick={doCopy}>
            <Icon name={copied ? 'check' : 'copy'} size={15} stroke={2} />
            {copied ? 'Copied' : 'Copy reply'}
          </button>
        </div>
      </div>

      <hr className="rule" />

      {variables.length > 0 && (
        <div className="block">
          <div className="block-head">
            <span className="section-label">Variables</span>
            <span className="result-meta">{variables.length} fields</span>
          </div>
          <div className="vars">
            {variables.map((k) => (
              <div className="field" key={k}>
                <label>
                  {labelFor(k)}<span className="vname">{`{{${k}}}`}</span>
                </label>
                <input
                  value={values[k] || ''}
                  placeholder={variablePlaceholders[k] || k}
                  onChange={(e) => setValues((p) => ({ ...p, [k]: e.target.value }))}
                  aria-label={labelFor(k)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="block">
        <div className="block-head">
          <span className="section-label">Preview</span>
          <button className={'btn btn-ghost' + (copied ? ' done' : '')} onClick={doCopy} style={{ padding: '7px 14px', fontSize: 13 }}>
            <Icon name={copied ? 'check' : 'copy'} size={13} /> {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div className="preview">
          <pre><FillPreview body={t.body} values={values} /></pre>
        </div>
      </div>

      {t.notes && (
        <div className="block">
          <div className="note">
            <div className="note-label">Internal note</div>
            <p>{t.notes}</p>
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="block">
          <div className="block-head">
            <span className="section-label">More in {cat?.label}</span>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <button key={r.id} className="related" onClick={() => onOpen(r)}>
                <span className="rt">{r.title}</span>
                <span className="rb mono">{r.tags.slice(0, 2).join(' · ')}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
