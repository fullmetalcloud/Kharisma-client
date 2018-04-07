import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import questions from './questions.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {console.log(questions)}
        </p>
      </div>
    );
  }
}

export default App;
