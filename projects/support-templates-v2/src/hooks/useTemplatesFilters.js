import { useMemo } from 'react'

function matchesSearch(t, search) {
  const q = search.trim().toLowerCase()
  return (
    !q ||
    t.title.toLowerCase().includes(q) ||
    t.body.toLowerCase().includes(q) ||
    t.tags.some((tag) => tag.toLowerCase().includes(q))
  )
}

export function useTemplatesFilters(templates, { search, activeTags, tagLogic, category }) {
  const searchFiltered = useMemo(
    () => templates.filter((t) => matchesSearch(t, search)),
    [templates, search]
  )

  const categoryFiltered = useMemo(
    () => searchFiltered.filter((t) => !category || t.category === category),
    [searchFiltered, category]
  )

  const filtered = useMemo(() => {
    if (activeTags.length === 0) return categoryFiltered
    return categoryFiltered.filter((t) =>
      tagLogic === 'AND'
        ? activeTags.every((tag) => t.tags.includes(tag))
        : activeTags.some((tag) => t.tags.includes(tag))
    )
  }, [categoryFiltered, activeTags, tagLogic])

  return { filtered, count: filtered.length, searchFiltered, categoryFiltered }
}
