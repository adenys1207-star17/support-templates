export default function CategoryNav({ categories, counts, total, active, onPick }) {
  return (
    <nav className="rail" aria-label="Categories">
      <div className="rail-label section-label">Categories</div>
      <button className="cat" aria-current={active === 'all' || undefined} onClick={() => onPick('all')}>
        <span className="badge">ALL</span>
        <span>All templates</span>
        <span className="count">{total}</span>
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          className="cat"
          aria-current={active === c.id || undefined}
          onClick={() => onPick(c.id)}
        >
          <span className="badge">{c.code}</span>
          <span>{c.label}</span>
          <span className="count">{counts[c.id] || 0}</span>
        </button>
      ))}
    </nav>
  )
}
