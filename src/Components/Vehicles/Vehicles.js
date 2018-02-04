import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';

const Vehicles = ({ data, handleFavorite }) => {

  const renderedCards = data.map( (vehicle, index) => {

    return (
      <Card 
        key={index}
        data={vehicle}
        handleFavorite={handleFavorite}
      />
    );
  });

  return (
    <div className="vehicleCards">
      { renderedCards }
    </div>
  );
};

Vehicles.propTypes = {
  data: array.isRequired,
  handleFavorite: func.isRequired, 
};

export default Vehicles;