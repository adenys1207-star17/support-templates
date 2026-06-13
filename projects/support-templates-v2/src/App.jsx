import { useEffect, useState } from 'react'
import { useTemplatesFilters } from './hooks/useTemplatesFilters.js'
import { templates, allTags, totalTemplatesCount } from './data/templates/index.js'
import TemplateCard from './components/TemplateCard.jsx'
import TemplatePanel from './components/TemplatePanel.jsx'
import HelpCenterBrowser from './components/HelpCenterBrowser.jsx'
import FilterPanel from './components/FilterPanel.jsx'

const VIEWS = {
  TEMPLATES: 'templates',
  HELP_CENTER: 'help_center'
}

export default function App() {
  const [view, setView] = useState(VIEWS.TEMPLATES)
  const [search, setSearch] = useState('')
  const [activeTags, setActiveTags] = useState([])
  const [tagLogic, setTagLogic] = useState('AND')
  const [category, setCategory] = useState(null)
  const [selectedId, setSelectedId] = useState(templates[0].id)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const { filtered, count, searchFiltered, categoryFiltered } = useTemplatesFilters(
    templates,
    { search, activeTags, tagLogic, category }
  )

  useEffect(() => {
    if (filtered.length === 0) return
    const isSelectedInFiltered = filtered.some((t) => t.id === selectedId)
    if (!isSelectedInFiltered) {
      setSelectedId(filtered[0].id)
    }
  }, [filtered, selectedId])

  const selected =
    templates.find((t) => t.id === selectedId) || filtered[0] || templates[0]

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar__head">
          <p className="brand-eyebrow">Stripo · Night Shift</p>
          <h1 className="brand">Бібліотека шаблонів</h1>
          <p className="brand-sub">
            {totalTemplatesCount} шаблонів · {allTags.length} тегів
          </p>
          <div className="view-switcher">
            <button
              className={`view-tab ${view === VIEWS.TEMPLATES ? 'active' : ''}`}
              onClick={() => setView(VIEWS.TEMPLATES)}
            >
              Шаблони
            </button>
            <button
              className={`view-tab ${view === VIEWS.HELP_CENTER ? 'active' : ''}`}
              onClick={() => setView(VIEWS.HELP_CENTER)}
            >
              Help Center
            </button>
          </div>
        </div>

        {view === VIEWS.TEMPLATES && (
          <>
            <div className="search-wrap">
              <input
                type="search"
                className="search-input"
                placeholder="Пошук за назвою, текстом, тегом..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <p className="filter-status">
                {count === totalTemplatesCount
                  ? `${totalTemplatesCount} шаблонів`
                  : `Знайдено ${count} з ${totalTemplatesCount}`}
              </p>
            </div>

            <FilterPanel
              isOpen={filtersOpen}
              onToggle={() => setFiltersOpen((o) => !o)}
              activeTags={activeTags}
              setActiveTags={setActiveTags}
              tagLogic={tagLogic}
              setTagLogic={setTagLogic}
              category={category}
              setCategory={setCategory}
              searchFiltered={searchFiltered}
              categoryFiltered={categoryFiltered}
            />

            <div className="list-wrap">
              {count === 0 && (
                <p className="empty">Нічого не знайдено.</p>
              )}
              {filtered.map((t) => (
                <TemplateCard
                  key={t.id}
                  template={t}
                  isActive={t.id === selected.id}
                  onClick={() => setSelectedId(t.id)}
                />
              ))}
            </div>
          </>
        )}

        {view === VIEWS.HELP_CENTER && (
          <div className="sidebar-hint">
            <p>
              Browser статей Help Center справа. Шукай по всіх статтях, або
              перемикайся між колекціями.
            </p>
          </div>
        )}
      </aside>

      <main className="main">
        {view === VIEWS.TEMPLATES && <TemplatePanel template={selected} />}
        {view === VIEWS.HELP_CENTER && <HelpCenterBrowser />}
      </main>
    </div>
  )
}
