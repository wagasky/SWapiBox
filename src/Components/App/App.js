import React, { Component } from 'react';
import Header from '../Header/Header'
import CardDisplay from '../CardDisplay/CardDisplay'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import { getPeople, getPlanets, getVehicles } from '../../apiCalls.js'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      people: [],
      planets: [],
      vehicles: [],
    }
  }

  async componentDidMount() {
    let people = await getPeople(); 
    let planets = await getPlanets();
    let vehicles = await getVehicles();
    this.setState({ people, planets, vehicles })
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
