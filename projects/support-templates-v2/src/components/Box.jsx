export default function Box({ variant = 'info', icon, children }) {
  return (
    <div className={`box box--${variant}`}>
      {icon && <span className="box__icon">{icon}</span>}
      <div className="box__content">{children}</div>
    </div>
  )
}
