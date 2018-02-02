import React, { Component } from 'react';
import Header from '../Header/Header'
import CardDisplay from '../CardDisplay/CardDisplay'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'; 
import './App.css';
import { getPeople, getPlanets, getVehicles, getFilm } from '../../apiCalls/apiCalls'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      film: [],
    }
  }

  async componentDidMount() {
    let people = await getPeople(); 
    let planets = await getPlanets();
    let vehicles = await getVehicles();
    let film = await getFilm();
    this.setState({ people, planets, vehicles, film })
  }

  // planets and vehicle on click

  render() {
    return (
      <div className="App">
        <Header />
        <CardDisplay people={this.state.people} 
                     planets={this.state.planets}
                     vehicles={this.state.vehicles}
                     favorites={this.state.favorites}
                     film={this.state.film}
         />
      </div>
    );
  }
}

export default App;
