import { useCallback, useRef, useState } from 'react'
import { templates, totalTemplatesCount, templateCategories } from './data/templates/index.js'
import LibraryView from './components/LibraryView.jsx'
import DetailView from './components/DetailView.jsx'
import HelpCenterBrowser from './components/HelpCenterBrowser.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [tab, setTab] = useState('templates')
  const [query, setQuery] = useState('')
  const [activeCat, setActiveCat] = useState('all')
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef(null)

  const showToast = useCallback((msg) => {
    setToast(msg)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 1900)
  }, [])

  const openTemplate = useCallback((t) => {
    setSelected(t)
    window.scrollTo({ top: 0 })
  }, [])

  const back = useCallback(() => setSelected(null), [])

  const copyTemplate = useCallback((tpl) => {
    showToast('Copied “' + tpl.title + '”')
  }, [showToast])

  return (
    <div className="app" data-nav="sidebar" data-cards="standard" data-density="comfortable" data-amber="confident">
      <header className="masthead">
        <div className="masthead-id">
          <span className="eyebrow">Stripo · Night Shift</span>
          <h1 className="font-display">Template Library</h1>
          <span className="sub">
            <b>{totalTemplatesCount}</b> templates · <b>{templateCategories.length}</b> categories
          </span>
        </div>
        <div className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'templates'} onClick={() => { setTab('templates'); setSelected(null) }}>
            Templates
          </button>
          <button role="tab" aria-selected={tab === 'help'} onClick={() => setTab('help')}>
            Help Center
          </button>
        </div>
      </header>

      {tab === 'help' ? (
        <HelpCenterBrowser />
      ) : selected ? (
        <DetailView
          t={selected}
          onBack={back}
          onOpen={openTemplate}
          onToast={showToast}
        />
      ) : (
        <LibraryView
          query={query}
          setQuery={setQuery}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
          onOpen={openTemplate}
          onCopy={copyTemplate}
        />
      )}

      <Toast msg={toast} />
    </div>
  )
}
