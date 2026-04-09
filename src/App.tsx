import React from 'react';
import TicTacToe from './components/TicTacToe';

const App: React.FC = () => {
  const isPublishedPage = window.location.pathname === '/published';

  return (
    <div className="app">
      {isPublishedPage && <TicTacToe />}
      {/* Other components */}
    </div>
  );
};

export default App;
