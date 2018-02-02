import React from 'react';
import Card from '../Card/Card'

const Vehicles = ({ vehicles }) => {

const renderedCards = vehicles.map( (vehicle, index) => {

    return(
      <Card 
            key={index}
            vehicle={vehicle}
       />
    )
  });


  return (
    <div className="vehicleCards">
      { renderedCards }
    </div>
  )
}

export default Vehicles;