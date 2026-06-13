import { render, screen, fireEvent } from '@testing-library/react'
import { SearchInput } from '../SearchInput'

// Requires: npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

describe('SearchInput', () => {
  it('renders with placeholder', () => {
    render(<SearchInput value="" onChange={() => {}} placeholder="Знайти..." />)
    expect(screen.getByPlaceholderText('Знайти...')).toBeInTheDocument()
  })

  it('displays current value', () => {
    render(<SearchInput value="hello" onChange={() => {}} />)
    expect(screen.getByDisplayValue('hello')).toBeInTheDocument()
  })

  it('calls onChange with new value on input', () => {
    const handleChange = vi.fn()
    render(<SearchInput value="" onChange={handleChange} />)
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledWith('test')
  })
})
