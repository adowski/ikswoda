import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="intro-container">
          <div className="intro">Alison Dowski</div>
          <div className="links">
            <div className="link-orange">
              artist
            </div>
            <div className="link-blue">
              technologist
            </div>
            <div className="link-orange">
              <a href='#'>student</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
