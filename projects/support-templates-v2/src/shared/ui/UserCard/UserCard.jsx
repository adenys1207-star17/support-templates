import PropTypes from 'prop-types'
import { cn } from '../../lib/cn'
import styles from './UserCard.module.css'

export function UserCard({ name, role, avatarUrl, className }) {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.avatar}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className={styles.avatarImg} />
        ) : (
          <span className={styles.initials}>
            {name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        {role && <span className={styles.role}>{role}</span>}
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string,
  avatarUrl: PropTypes.string,
  className: PropTypes.string,
}
