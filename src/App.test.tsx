import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the get started heading', () => {
  render(<App />)
  expect(screen.getByText('Get started')).toBeInTheDocument()
})
