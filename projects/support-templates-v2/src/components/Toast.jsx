import Icon from './Icon.jsx'

export default function Toast({ msg }) {
  if (!msg) return null
  return (
    <div className="toast-wrap">
      <div className="toast" role="status">
        <span className="ck"><Icon name="check" size={16} stroke={2} /></span>
        {msg}
      </div>
    </div>
  )
}
