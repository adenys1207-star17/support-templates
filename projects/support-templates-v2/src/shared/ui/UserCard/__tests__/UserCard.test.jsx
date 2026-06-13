import { render, screen } from '@testing-library/react'
import { UserCard } from '../UserCard'

// Requires: npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

describe('UserCard', () => {
  it('renders name and role', () => {
    render(<UserCard name="Anna Koval" role="Support Lead" />)
    expect(screen.getByText('Anna Koval')).toBeInTheDocument()
    expect(screen.getByText('Support Lead')).toBeInTheDocument()
  })

  it('shows initials when no avatarUrl', () => {
    render(<UserCard name="Anna Koval" />)
    expect(screen.getByText('AK')).toBeInTheDocument()
  })

  it('renders avatar image when avatarUrl provided', () => {
    render(<UserCard name="Anna Koval" avatarUrl="https://example.com/avatar.png" />)
    expect(screen.getByRole('img', { name: 'Anna Koval' })).toBeInTheDocument()
  })

  it('renders without role', () => {
    render(<UserCard name="Anna Koval" />)
    expect(screen.getByText('Anna Koval')).toBeInTheDocument()
  })
})
