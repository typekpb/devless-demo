import React, { useState } from 'react';

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const handleClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const renderSquare = (index: number) => (
    <div
      className="square"
      onClick={() => handleClick(index)}
      style={{
        width: '50px',
        height: '50px',
        border: '1px solid black',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '50px',
        fontSize: '24px',
        cursor: 'pointer',
      }}
    >
      {board[index]}
    </div>
  );

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div style={{ marginTop: '10px' }}>
        Current player: {currentPlayer}
      </div>
    </div>
  );
};

export default TicTacToe;
