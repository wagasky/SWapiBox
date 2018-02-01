import React, { Component } from 'react';
import Header from '../Header/Header'
import CardDisplay from '../CardDisplay/CardDisplay'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { getPeople, getPlanets } from '../../apiCalls.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      people: [],
      planets: [],
    }
  }

  async componentDidMount() {
    let people = await getPeople(); 
    let planets = await getPlanets();
    this.setState({ people, planets })
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
