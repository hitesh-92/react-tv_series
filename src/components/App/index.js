import React, { Component } from 'react';
import Main from '../Main';
// import logo from './logo.svg'; //react logo in App-logo // <img src={logo} className="App-logo" alt="logo" />
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series Listings</h1>
        </header>
        <Main />
        <footer className="App-footer">
          <small>
            All information about all tv series viewed is from http://www.tvmaze.com/
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
