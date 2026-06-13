import { useMemo, useState } from 'react'
import { helpCenterCollections, allHelpArticles } from '../data/helpArticles.js'
import { copyToClipboard } from '../utils/clipboard.js'

export default function HelpCenterBrowser() {
  const [search, setSearch] = useState('')
  const [activeCollection, setActiveCollection] = useState(
    helpCenterCollections[0].id
  )
  const [copiedUrl, setCopiedUrl] = useState(null)

  const isSearching = search.trim().length > 0

  const searchResults = useMemo(() => {
    if (!isSearching) return []
    const q = search.toLowerCase()
    return allHelpArticles.filter((a) => a.title.toLowerCase().includes(q))
  }, [search, isSearching])

  const currentCollection = helpCenterCollections.find(
    (c) => c.id === activeCollection
  )

  async function handleCopyLink(url) {
    const ok = await copyToClipboard(url)
    if (ok) {
      setCopiedUrl(url)
      setTimeout(() => setCopiedUrl(null), 1500)
    }
  }

  return (
    <div className="hc-browser">
      <header className="hc-header">
        <h2 className="panel__title">Help Center</h2>
        <p className="hc-subtitle">
          {allHelpArticles.length} статей з{' '}
          {helpCenterCollections.length} колекцій. <strong>Клік на статтю — копіює URL у буфер.</strong>{' '}
          Іконка ↗ відкриває в новій вкладці.
        </p>
      </header>

      <div className="hc-search-wrap">
        <input
          type="search"
          className="search-input"
          placeholder={`Пошук по всіх ${allHelpArticles.length} статтях...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {!isSearching && (
        <div className="hc-collections-row">
          {helpCenterCollections.map((c) => (
            <button
              key={c.id}
              className={`hc-collection-tab ${
                activeCollection === c.id ? 'active' : ''
              }`}
              onClick={() => setActiveCollection(c.id)}
            >
              <span className="hc-collection-tab__name">{c.name}</span>
              <span className="hc-collection-tab__count">
                {c.sections.reduce((sum, s) => sum + s.articles.length, 0)}
              </span>
            </button>
          ))}
        </div>
      )}

      {isSearching ? (
        <div className="hc-results">
          <p className="panel__section-title">
            Знайдено {searchResults.length}
          </p>
          {searchResults.map((a) => (
            <ArticleRow
              key={a.url}
              article={a}
              showMeta
              copied={copiedUrl === a.url}
              onCopy={handleCopyLink}
            />
          ))}
          {searchResults.length === 0 && (
            <p className="empty">Нічого не знайдено за «{search}»</p>
          )}
        </div>
      ) : (
        <div className="hc-collection-content">
          <p className="hc-collection-desc">{currentCollection.description}</p>
          {currentCollection.sections.map((s) => (
            <section key={s.name} className="hc-section">
              <h4 className="hc-section-title">{s.name}</h4>
              <div className="hc-section-articles">
                {s.articles.map((a) => (
                  <ArticleRow
                    key={a.url}
                    article={a}
                    copied={copiedUrl === a.url}
                    onCopy={handleCopyLink}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

function ArticleRow({ article, showMeta, copied, onCopy }) {
  return (
    <div className="hc-article-row">
      <button
        className="hc-article-main"
        aria-label={`${copied ? 'Скопійовано URL:' : 'Копіювати URL:'} ${article.title}`}
        onClick={() => onCopy(article.url)}
      >
        <span className="hc-article-title">
          {copied ? '✓ Скопійовано: ' : ''}
          {article.title}
        </span>
        {showMeta && (
          <span className="hc-article-meta">
            {article.collectionName} · {article.sectionName}
          </span>
        )}
      </button>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="hc-article-open"
        title="Відкрити в новій вкладці"
      >
        ↗
      </a>
    </div>
  )
}
