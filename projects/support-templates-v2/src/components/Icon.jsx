export default function Icon({ name, size = 16, stroke = 1.6 }) {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round',
  }
  switch (name) {
    case 'search':     return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>
    case 'copy':       return <svg {...p}><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>
    case 'check':      return <svg {...p}><path d="M20 6 9 17l-5-5"/></svg>
    case 'x':          return <svg {...p}><path d="M18 6 6 18M6 6l12 12"/></svg>
    case 'arrow-left': return <svg {...p}><path d="M19 12H5m6-7-7 7 7 7"/></svg>
    default:           return null
  }
}
