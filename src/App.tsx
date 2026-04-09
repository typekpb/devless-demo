import React from 'react'
import './App.css'
import { ReactComponent as ReactLogo } from './assets/react.svg'
import { ReactComponent as ViteLogo } from './assets/vite.svg'
import TicTacToe from './tic-tac-toe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <ReactLogo className="App-logo" />
          <ViteLogo className="App-logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="tic-tac-toe-container">
        <TicTacToe />
      </div>
    </div>
  )
}

export default App
