import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {

  return (
    <div>
      <p>I'm a nav!</p>
      <nav>
        <ul>
          <button><NavLink to='/people'>People</NavLink></button>
          <button><NavLink to='/vehicles'>Vehicles</NavLink></button>
          <button><NavLink to='/planets'>Planets</NavLink></button>
          <button><NavLink to='/favorites'>Favorites</NavLink></button>
        </ul>
      </nav>
    </div>
  )
}


export default Nav