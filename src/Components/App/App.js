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
    let film = await getFilm();
    let people = await getPeople(); 
    let planets = await getPlanets();
    let vehicles = await getVehicles();
    
    this.setState({ film, people, planets, vehicles, film })
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

    await this.putFavoriteInStorage(this.state.favorites);
  }

  putFavoriteInStorage(favorites) {
    const stringifiedObject = JSON.stringify(favorites);

    localStorage.setItem('favorites', stringifiedObject)
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
