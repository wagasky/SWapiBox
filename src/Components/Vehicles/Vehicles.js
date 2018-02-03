import React from 'react';
import Card from '../Card/Card';

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

export default Vehicles;