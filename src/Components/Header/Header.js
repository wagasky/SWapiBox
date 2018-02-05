import React from 'react';
import Nav from '../Nav/Nav';
import { func } from 'prop-types';

const Header = ({ handleButton }) => {
  return (

    <div className="header">
      <Nav handleButton={handleButton} />
    </div>

  );
};

Header.propTypes = {
  handleButton: func.isRequired,
};

export default Header;