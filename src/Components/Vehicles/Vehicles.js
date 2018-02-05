import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';
import './Vehicles.css'

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
    <div className="vehicle-cards">
      { renderedCards }
    </div>
  );
};

Vehicles.propTypes = {
  data: array,
  handleFavorite: func, 
};

export default Vehicles;