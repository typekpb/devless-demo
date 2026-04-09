import React from 'react';
import TicTacToe from './components/TicTacToe';

const App: React.FC = () => {
  const isPublishedPage = window.location.pathname === '/published';

  return (
    <div className="app">
      {isPublishedPage && <TicTacToe />}
      <h1>Get started</h1>
      {/* Other components */}
    </div>
  );
};

export default App;
