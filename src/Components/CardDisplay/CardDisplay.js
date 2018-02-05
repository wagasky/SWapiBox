import React from 'react';
import People from '../People/People';
import Vehicles from '../Vehicles/Vehicles';
import Planets from '../Planets/Planets';
import Favorites from '../Favorites/Favorites';
import IntroText from '../IntroText/IntroText';
import { Switch, Route } from 'react-router-dom';
import propTypes, { array, func } from 'prop-types';
import './CardDisplay.css';

const CardDisplay = 
({ people, planets, vehicles, favorites, film, handleFavorite }) => {

  return (
    <div className="card-display">
      <Switch>
        <Route 
          exact path='/' 
          component={ () => <IntroText film={film} /> } />
        <Route 
          exact path='/people' 
          component={ () => <People 
            data={people} 
            handleFavorite={handleFavorite} /> } />
        <Route 
          exact path='/vehicles' 
          component={ () => <Vehicles 
            data={vehicles} 
            handleFavorite={handleFavorite}/> }/>
        <Route 
          exact path='/planets' 
          component={ () => <Planets 
            data={planets} 
            handleFavorite={handleFavorite}/> } />
        <Route 
          exact path='/favorites' 
          component={ () => <Favorites 
            data={favorites} 
            handleFavorite={handleFavorite}/> }/>
      </Switch>
    </div>
  );
};

export default CardDisplay;


CardDisplay.propTypes = {
  people: array,
  planets: array,
  vehicles: array,
  favorites: array,
  film: propTypes.oneOfType([propTypes.array, propTypes.object]),
  handleFavorite: func,
};