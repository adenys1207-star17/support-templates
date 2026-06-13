export default function CatBar({ categories, counts, total, active, onPick }) {
  return (
    <div className="catbar">
      <div className="catbar-scroll" role="tablist" aria-label="Categories">
        <button className="chip-cat" aria-current={active === 'all' || undefined} onClick={() => onPick('all')}>
          <span className="badge">ALL</span> All <span className="badge">{total}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className="chip-cat"
            aria-current={active === c.id || undefined}
            onClick={() => onPick(c.id)}
          >
            <span className="badge">{c.code}</span>{c.label}
            <span className="badge">{counts[c.id] || 0}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
