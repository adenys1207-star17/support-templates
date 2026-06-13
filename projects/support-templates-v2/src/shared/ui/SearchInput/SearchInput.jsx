import PropTypes from 'prop-types'
import { cn } from '../../lib/cn'
import styles from './SearchInput.module.css'

export function SearchInput({ value, onChange, placeholder = 'Пошук...', className }) {
  return (
    <input
      type="search"
      className={cn(styles.input, className)}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
}

