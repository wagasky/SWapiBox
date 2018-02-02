import React from 'react';
import People from '../People/People'
import Vehicles from '../Vehicles/Vehicles'
import Planets from '../Planets/Planets'
import Favorites from '../Favorites/Favorites'
import IntroText from '../IntroText/IntroText'
import { Switch, Route } from 'react-router-dom';

const CardDisplay = ({ people, planets, vehicles, favorites, film, handleFavorite }) => {

return (
  <div>
  <p>I'm a CardDisplay!</p>
    <Switch>
      <Route exact path='/people' component={ () => <People people={people} handleFavorite={handleFavorite} /> } />
      <Route exact path='/vehicles' component={ () => <Vehicles vehicles={vehicles} /> }/>
      <Route exact path='/planets' component={ () => <Planets planets={planets} /> } />
      <Route exact path='/favorites' component={ () => <Favorites favorites={favorites} /> }/>
    </Switch>
    <IntroText film={film}/>
  </div>
  )

}

export default CardDisplay;



