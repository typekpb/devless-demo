import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState('X')

  const handleClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const checkWin = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }

    if (board.every(square => square !== null)) {
      return 'Tie'
    }

    return null
  }

  const winner = checkWin()

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square, index) => (
          <div
            key={index}
            className={`square ${square === 'X' ? 'x' : square === 'O' ? 'o' : ''}`}
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
      {winner && (
        <div className="result">
          {winner === 'Tie' ? 'It\'s a tie!' : `Player ${winner} wins!`}
        </div>
      )}
    </div>
  )
}

export default App
