import { useMemo } from 'react'

const CATEGORIES = [
  { id: null, name: 'All' },
  { id: 'core', name: 'Core' },
  { id: 'billing', name: 'Billing' },
  { id: 'esp', name: 'ESP' },
  { id: 'plugin', name: 'Plugin' },
  { id: 'editor', name: 'Editor' },
  { id: 'new-editor', name: 'New Editor' },
  { id: 'troubleshooting', name: 'Troubleshooting' },
  { id: 'setup', name: 'Setup' },
  { id: 'kb', name: 'Knowledge Base' },
]

export default function FilterPanel({
  isOpen,
  onToggle,
  activeTags,
  setActiveTags,
  tagLogic,
  setTagLogic,
  category,
  setCategory,
  searchFiltered,
  categoryFiltered,
}) {
  const activeFilterCount = (category !== null ? 1 : 0) + activeTags.length

  const categoryCounts = useMemo(() => {
    const counts = {}
    searchFiltered.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1
    })
    return counts
  }, [searchFiltered])

  const tagCounts = useMemo(() => {
    const counts = {}
    categoryFiltered.forEach((t) => {
      t.tags.forEach((tag) => {
        counts[tag] = (counts[tag] || 0) + 1
      })
    })
    return counts
  }, [categoryFiltered])

  // Active tags with count > 0 first (alphabetical), then inactive tags sorted by count desc
  const visibleTags = useMemo(() => {
    const activePart = activeTags
      .filter((tag) => tagCounts[tag] > 0)
      .slice()
      .sort()
    const inactivePart = Object.entries(tagCounts)
      .filter(([tag]) => !activeTags.includes(tag))
      .sort(([, a], [, b]) => b - a)
      .map(([tag]) => tag)
    return [...activePart, ...inactivePart]
  }, [tagCounts, activeTags])

  function toggleTag(tag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  function resetAll() {
    setActiveTags([])
    setCategory(null)
    setTagLogic('AND')
  }

  const activeCategoryName = category
    ? CATEGORIES.find((c) => c.id === category)?.name
    : null

  return (
    <div className="filter-panel">
      <div className="filter-panel__bar">
        <button
          className={`filter-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={onToggle}
        >
          <span>Фільтри</span>
          {activeFilterCount > 0 && (
            <span className="filter-badge">{activeFilterCount}</span>
          )}
          <span className="filter-toggle-arrow">{isOpen ? '▲' : '▼'}</span>
        </button>
      </div>

      {activeFilterCount > 0 && (
        <div className="active-filters">
          {activeCategoryName && (
            <button
              className="active-filter-pill"
              aria-label={`Видалити фільтр: ${activeCategoryName}`}
              onClick={() => setCategory(null)}
            >
              {activeCategoryName} ✕
            </button>
          )}
          {activeTags.map((tag) => (
            <button
              key={tag}
              className="active-filter-pill"
              aria-label={`Видалити тег: ${tag}`}
              onClick={() => toggleTag(tag)}
            >
              {tag} ✕
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="filter-panel__body">
          <div className="filter-section">
            <p className="filter-section__label">Категорія</p>
            <div className="category-chips">
              {CATEGORIES.map((cat) => {
                const count =
                  cat.id === null
                    ? searchFiltered.length
                    : categoryCounts[cat.id] || 0
                return (
                  <button
                    key={cat.id ?? 'all'}
                    className={`category-chip ${category === cat.id ? 'active' : ''}`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.name}
                    <span className="chip-count">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {visibleTags.length > 0 && (
            <div className="filter-section">
              <p className="filter-section__label">Теги</p>
              <div className="tag-chips">
                {visibleTags.map((tag) => (
                  <button
                    key={tag}
                    className={`tag-chip ${activeTags.includes(tag) ? 'active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                    <span className="chip-count">{tagCounts[tag]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTags.length >= 2 && (
            <div className="filter-section filter-section--row">
              <p className="filter-section__label">Логіка</p>
              <div className="andor-toggle">
                <button
                  className={`andor-btn ${tagLogic === 'AND' ? 'active' : ''}`}
                  onClick={() => setTagLogic('AND')}
                >
                  AND
                </button>
                <button
                  className={`andor-btn ${tagLogic === 'OR' ? 'active' : ''}`}
                  onClick={() => setTagLogic('OR')}
                >
                  OR
                </button>
              </div>
            </div>
          )}

          {activeFilterCount > 0 && (
            <button className="filter-reset-btn" onClick={resetAll}>
              Скинути все
            </button>
          )}
        </div>
      )}
    </div>
  )
}
