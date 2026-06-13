import { useState } from 'react'
import Icon from './Icon.jsx'
import { copyToClipboard } from '../utils/clipboard.js'
import { supabase } from '../lib/supabase.js'

function cardPreview(body) {
  return body
    .split('\n')
    .filter((l) => l.trim())
    .filter((l) => !/^Hi \{\{/.test(l) && !/^Best,$/.test(l) && !/Stripo Support$/.test(l))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function PreviewText({ text }) {
  const parts = text.split(/(\{\{\w+\}\})/g)
  return parts.map((part, i) =>
    /^\{\{\w+\}\}$/.test(part)
      ? <span key={i} className="var">{part.replace(/[{}]/g, '')}</span>
      : part
  )
}

export default function Card({ t, cat, onOpen, onCopy, focusRef }) {
  const [done, setDone] = useState(false)

  async function handleCopy(e) {
    e.stopPropagation()
    const ok = await copyToClipboard(t.body)
    if (ok) {
      setDone(true)
      setTimeout(() => setDone(false), 1400)
      onCopy(t)
      supabase?.from('copy_events').insert({ template_id: t.id, template_title: t.title }).then(() => {})
    }
  }

  return (
    <button
      ref={focusRef}
      className="card stag"
      data-id={t.id}
      onClick={() => onOpen(t)}
      aria-label={t.title}
    >
      <div className="card-top">
        <span className="card-badge">{cat ? cat.code : '—'}</span>
      </div>
      <h3 className="card-title">{t.title}</h3>
      <p className="card-preview"><PreviewText text={cardPreview(t.body)} /></p>
      <div className="card-foot">
        <div className="tags">
          {t.tags.slice(0, 3).map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <span
          className={'copy-mini' + (done ? ' done' : '')}
          role="button"
          tabIndex={-1}
          onClick={handleCopy}
          aria-label={'Copy ' + t.title}
        >
          <Icon name={done ? 'check' : 'copy'} size={13} />
          {done ? 'Copied' : 'Copy'}
        </span>
      </div>
    </button>
  )
}
