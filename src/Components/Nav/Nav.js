import React from 'react';
import { NavLink } from 'react-router-dom';
import { func } from 'prop-types';


const Nav = ({ handleButton }) => {

  return (
    <div className="nav">
      <nav>
        <ul className="nav">
          <button 
            className="nav"><NavLink to='/people'>People</NavLink></button>
          <button 
            className="nav"
            onClick={() => handleButton('vehicles')}>
            <NavLink to='/vehicles'>Vehicles</NavLink>
          </button>
          <button 
            className="nav"
            onClick={() => handleButton('planets')}>
            <NavLink to='/planets'>Planets</NavLink>
          </button>
          <button
          // eslint-disable-next-line 
            className="nav"><NavLink to='/favorites'>Favorites</NavLink></button>
        </ul>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  handleButton: func,
};

export default Nav;