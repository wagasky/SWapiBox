import React from 'react';
import People from '../People/People'
import Vehicles from '../Vehicles/Vehicles'
import Planets from '../Planets/Planets'
import Favorites from '../Favorites/Favorites'
import { Switch, Route } from 'react-router-dom';

const CardDisplay = (props) => {

return (
  <div>
  <p>I'm a CardDisplay!</p>
    <Switch>
      <Route exact path='/people' render={ () => ( <People props={this.props} /> ) } />
      <Route exact path='/vehicles' component={ Vehicles }/>
      <Route exact path='/planets' component={ Planets }/>
      <Route exact path='/favorites' component={ Favorites }/>
    </Switch>
  </div>
  )

}

export default CardDisplay;



