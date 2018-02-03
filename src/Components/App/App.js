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
    const film = localStorage.film ? await this.pullFromStorage('film') : await getFilm();
    const people = localStorage.people ? await this.pullFromStorage('people') : await getPeople();
    const planets = localStorage.planets ? await this.pullFromStorage('planets') : await getPlanets();
    const vehicles = localStorage.vehicles ? await this.pullFromStorage('vehicles'): await getVehicles();
    const favorites =  localStorage.favorites ? await this.pullFromStorage('favorites') : [] 
    
    
    await this.setState({ film, people, planets, vehicles, favorites })
    await this.putIntoStorage('people', people)
    await this.putIntoStorage('favorites', favorites)
    await this.putIntoStorage('planets', planets)
    await this.putIntoStorage('vehicles', vehicles)
  }

  // click the button, 
  // get the button category
  // if localstorage is set from that category, update state from storage
  // if not, call the api
  // set state

  putIntoStorage = async (category, object) =>  {
    const stringifiedObject = JSON.stringify(object);

    localStorage.setItem(category, stringifiedObject)
  }

  pullFromStorage(category) {

    const retrievedObject = localStorage.getItem(category);
    const parsedObject = JSON.parse(retrievedObject)

    return parsedObject
  }

  handleFavorite = async (name, category) => {
    const favoritedItem = this.state[category].find( object => object.name === name)
    
    favoritedItem.favorite = !favoritedItem.favorite
  
    const updatedFavorites = favoritedItem.favorite ? 
    [...this.state.favorites, favoritedItem]
    : this.state.favorites.filter( favorite => favorite.name !== name);

    await this.setState({
      favorites: updatedFavorites,
    })

    await this.putIntoStorage('favorites', this.state.favorites);
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
                     handleFavorite={this.handleFavorite}
         />
      </div>
    );
  }
}

export default App;
