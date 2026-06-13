import { useCallback, useEffect, useMemo, useRef } from 'react'
import { templateCategories, templates, totalTemplatesCount } from '../data/templates/index.js'
import Card from './Card.jsx'
import CategoryNav from './CategoryNav.jsx'
import CatBar from './CatBar.jsx'
import SearchBar from './SearchBar.jsx'
import Icon from './Icon.jsx'

const CAT_BY_ID = Object.fromEntries(templateCategories.map((c) => [c.id, c]))

export default function LibraryView({ query, setQuery, activeCat, setActiveCat, onOpen, onCopy }) {
  const searchRef = useRef(null)

  const counts = useMemo(() => {
    const m = {}
    templates.forEach((t) => { m[t.category] = (m[t.category] || 0) + 1 })
    return m
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return templates.filter((t) => {
      if (activeCat !== 'all' && t.category !== activeCat) return false
      if (!q) return true
      return (
        t.title.toLowerCase().includes(q) ||
        t.body.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (CAT_BY_ID[t.category] && CAT_BY_ID[t.category].label.toLowerCase().includes(q))
      )
    })
  }, [query, activeCat])

  const cardRefs = useRef([])
  cardRefs.current = []
  const addRef = useCallback((el) => { if (el) cardRefs.current.push(el) }, [])

  useEffect(() => {
    function onKey(e) {
      const tag = document.activeElement?.tagName
      const typing = tag === 'INPUT' || tag === 'TEXTAREA'
      if (e.key === '/' && !typing) { e.preventDefault(); searchRef.current?.focus(); return }
      if (typing && e.key === 'Escape') { document.activeElement.blur(); return }
      const cards = cardRefs.current
      if (!cards.length) return
      const cur = cards.indexOf(document.activeElement)
      if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        if (typing) return
        e.preventDefault()
        const grid = document.querySelector('.grid')
        const cols = grid ? getComputedStyle(grid).gridTemplateColumns.split(' ').length : 1
        let next = cur < 0 ? 0
          : e.key === 'ArrowRight' ? Math.min(cur + 1, cards.length - 1)
          : e.key === 'ArrowLeft'  ? Math.max(cur - 1, 0)
          : e.key === 'ArrowDown'  ? Math.min(cur + cols, cards.length - 1)
          : Math.max(cur - cols, 0)
        cards[next]?.focus()
      }
      if ((e.key === 'c' || e.key === 'C') && !typing && cur >= 0) {
        const t = results[cur]
        if (t) onCopy(t)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [results, onCopy])

  const activeCategory = activeCat !== 'all' ? CAT_BY_ID[activeCat] : null

  return (
    <div className="workspace">
      <CategoryNav
        categories={templateCategories}
        counts={counts}
        total={totalTemplatesCount}
        active={activeCat}
        onPick={setActiveCat}
      />
      <main className="main">
        <CatBar
          categories={templateCategories}
          counts={counts}
          total={totalTemplatesCount}
          active={activeCat}
          onPick={setActiveCat}
        />
        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} inputRef={searchRef} />
          <div className="filter-pills">
            {activeCategory && (
              <span className="pill">
                <span className="mono">{activeCategory.code}</span> {activeCategory.label}
                <button aria-label="Clear category" onClick={() => setActiveCat('all')}>
                  <Icon name="x" size={12} />
                </button>
              </span>
            )}
            <span className="result-meta">
              <b>{results.length}</b> {results.length === 1 ? 'template' : 'templates'}
            </span>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="empty fade-in">
            <p className="big">No templates match.</p>
            <p className="mono">Try a different term or clear the {activeCat !== 'all' ? 'category filter' : 'search'}.</p>
          </div>
        ) : (
          <div className="grid" key={activeCat + '|' + query}>
            {results.map((t) => (
              <Card
                key={t.id}
                t={t}
                cat={CAT_BY_ID[t.category]}
                onOpen={onOpen}
                onCopy={onCopy}
                focusRef={addRef}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
