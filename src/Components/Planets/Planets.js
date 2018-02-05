import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';
import './Planets.css';

const Planets = ({ data, handleFavorite }) => {
  
  const renderedCards = data.map( (planet, index) => {

    return (
      <Card 
        key={index}
        data={planet}
        handleFavorite={handleFavorite}
      />
    );
  });

  return (
    <div className="planet-cards">
      { renderedCards }
    </div>
  );
};

Planets.propTypes = {
  data: array,
  handleFavorite: func,
};

export default Planets;