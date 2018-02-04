import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';

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
    <div className="Planets">
      { renderedCards }
    </div>
  );
};

Planets.propTypes = {
  data: array,
  handleFavorite: func,
};

export default Planets;