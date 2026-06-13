import Icon from './Icon.jsx'

export default function SearchBar({ value, onChange, inputRef }) {
  return (
    <div className="search">
      <span className="ico"><Icon name="search" size={17} /></span>
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Search by title, body, tag…"
        aria-label="Search templates"
        onChange={(e) => onChange(e.target.value)}
      />
      {value
        ? <button className="clearx" aria-label="Clear search" onClick={() => onChange('')}><Icon name="x" size={13} /></button>
        : <span className="kbd">/</span>}
    </div>
  )
}
