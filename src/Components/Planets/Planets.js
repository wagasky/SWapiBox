import React from 'react';
import Card from '../Card/Card'

const Planets = ({ planets }) => {
  const renderedCards = planets.map( (planet, index) => {

    return(
      <Card 
            key={index}
            planet={planet}
       />
    )
  });


  return (
    <div className="planetCards">
      { renderedCards }
    </div>
  )
}

export default Planets;