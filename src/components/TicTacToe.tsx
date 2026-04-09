import React, { useState } from 'react';

interface Square {
  value: 'X' | 'O' | null;
}

const TicTacToe: React.FC = () => {
  const [squares, setSquares] = useState<Square[]>(Array(9).fill({ value: null }));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (squares[index].value === null) {
      const newSquares = [...squares];
      newSquares[index] = { value: isXNext ? 'X' : 'O' };
      setSquares(newSquares);
      setIsXNext(!isXNext);
    }
  };

  const renderSquare = (index: number) => (
    <div
      className={`square ${squares[index].value === 'X' ? 'x' : squares[index].value === 'O' ? 'o' : ''}`}
      onClick={() => handleClick(index)}
    >
      {squares[index].value}
    </div>
  );

  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
