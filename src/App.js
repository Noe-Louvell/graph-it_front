import React from 'react';
import './App.css';
import Header from "./Header"
import { ReactComponent as Logo } from './logo_2.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Logo/>

      </header>
    </div>
  );
}

export default App;
