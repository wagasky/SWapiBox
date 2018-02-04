import React from 'react';
import { NavLink } from 'react-router-dom';
import { func } from 'prop-types';


const Nav = ({ handleButton }) => {

  return (
    <div>
      <nav>
        <ul>
          <button><NavLink to='/people'>People</NavLink></button>
          <button onClick={() => handleButton('vehicles')}><NavLink to='/vehicles'>Vehicles</NavLink></button>
          <button onClick={() => handleButton('planets')}><NavLink to='/planets'>Planets</NavLink></button>
          <button><NavLink to='/favorites'>Favorites</NavLink></button>
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  handleButton: func,
};

export default Nav;