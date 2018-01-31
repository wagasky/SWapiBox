import React, { Component } from 'react';
import Header from '../Header/Header'
import CardDisplay from '../CardDisplay/CardDisplay'
import { BrowserRouter } from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <CardDisplay />
      </div>
    );
  }
}

export default App;
