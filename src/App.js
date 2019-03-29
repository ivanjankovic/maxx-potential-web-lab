import React, { Component } from 'react';
import hero from './assets/hero1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>Header</p>
        </header>
        <div className="hero">
          <p>Hero</p>
          {/* <img src={hero} alt=''/> */}
        </div>
        <main>
          <p>Main</p>
        </main>
        <footer>
        <p>Footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
