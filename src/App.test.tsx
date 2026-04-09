import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the tic-tac-toe game', () => {
  render(<App />)
  expect(screen.getByText('Tic Tac Toe')).toBeInTheDocument()
  expect(screen.getByText('Player X wins!')).not.toBeInTheDocument()
  expect(screen.getByText('It\'s a tie!')).not.toBeInTheDocument()
})
