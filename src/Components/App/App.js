import React, { Component } from 'react';
import Header from '../Header/Header';
import CardDisplay from '../CardDisplay/CardDisplay';
import './App.css';
import { 
  getPeople, 
  getPlanets, 
  getVehicles, 
  getFilm } from '../../apiCalls/apiCalls';
import 'normalize.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      film: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      filmLoaded: false,
    };
  }

  async componentDidMount() {
    
    const { film, people, planets, vehicles, favorites } 
      = await this.initialDataCalls();
    
    await this.setState({
      film: film,
      filmLoaded: true,
    });
    await this.setState({ people, planets, vehicles, favorites });
    await this.putIntoStorage('film', film);
    await this.putIntoStorage('people', people);
    await this.putIntoStorage('favorites', favorites);
  }

  initialDataCalls = async () => {

    const film = localStorage.film ? 
      await this.pullFromStorage('film') : await getFilm();
    const people = localStorage.people ? 
      await this.pullFromStorage('people') : await getPeople();
    const planets = localStorage.planets ? 
      await this.pullFromStorage('planets') : [];
    const vehicles = localStorage.vehicles ? 
      await this.pullFromStorage('vehicles'): [];
    const favorites =  localStorage.favorites ? 
      await this.pullFromStorage('favorites') : [];

    return { film, people, planets, vehicles, favorites };

  }

  handleButton = async (category) => {
    (category === 'planets') ? this.callGetPlanets() : this.callGetVehicles();
  }


  callGetPlanets = async () => {
    const planets = localStorage.planets ? 
      await this.pullFromStorage('planets') : await getPlanets();

    await this.putIntoStorage('planets', planets);
    await this.setState({ planets });
  }

  callGetVehicles = async () => {
    const vehicles = localStorage.vehicles ? 
      await this.pullFromStorage('vehicles'): await getVehicles();
    
    await this.putIntoStorage('vehicles', vehicles);
    await this.setState({ vehicles });
  }

  putIntoStorage = (category, object) =>  {
    const stringifiedObject = JSON.stringify(object);

    localStorage.setItem(category, stringifiedObject);
  }

  pullFromStorage = (category) => {

    const retrievedObject = localStorage.getItem(category);
    const parsedObject = JSON.parse(retrievedObject);

    return parsedObject;
  }

  handleFavorite = async (name, category) => {

    const favoritedItem = this.state[category]
      .find( object => object.name === name );
    
    favoritedItem.favorite = !favoritedItem.favorite;
  
    const updatedFavorites = favoritedItem.favorite ? 
      [...this.state.favorites, favoritedItem] 
      : this.state.favorites.filter( favorite => favorite.name !== name);

    await this.setState({
      favorites: updatedFavorites,
    });

    await this.putIntoStorage('favorites', this.state.favorites);
  }


  render() {
    return (
      ! this.state.filmLoaded ?
        <div className="loading">
          <p>Be patient with the force...</p> 
        </div>  
        : <div className="App">
          <Header handleButton={this.handleButton}/>
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
