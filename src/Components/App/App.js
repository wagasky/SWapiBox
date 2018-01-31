import React, { Component } from 'react';
import Header from '../Header/Header'
import CardDisplay from '../CardDisplay/CardDisplay'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { getPeople } from '../../apiCalls.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      people: []
    }
  }

  async componentDidMount() {
    let people = await getPeople();
    this.setState({ people })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CardDisplay people={this.state.people} />
      </div>
    );
  }
}

export default App;
