import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';


class App extends Component {
  render() {
    return (
      <div className="App">
        { 
          <WordCard value = "HELLO"/>
        }
      </div>
    );
  }
}

export default App;
