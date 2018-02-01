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
      films: [],
    }
  }

  async componentDidMount() {
    let people = await getPeople(); 
    let planets = await getPlanets();
    let vehicles = await getVehicles();
    let films = await getFilm();
    this.setState({ people, planets, vehicles, films })
  }

  // planets and vehicle on click

  render() {
    return (
      <div className="App">
        <Header />
        <CardDisplay props={this.state} />
      </div>
    );
  }
}

export default App;
