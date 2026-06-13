export default function TemplateCard({ template, onClick, isActive }) {
  const preview = template.body.slice(0, 140).replace(/\n/g, ' ')

  return (
    <button
      className={`template-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="template-card__head">
        <h3 className="template-card__title">{template.title}</h3>
      </div>
      <p className="template-card__preview">{preview}...</p>
      <div className="template-card__tags">
        {template.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}
