import React from 'react';
import Card from '../Card/Card'

const Planets = ({ data, handleFavorite }) => {
  
  const renderedCards = data.map( (planet, index) => {

    return(
      <Card 
            key={index}
            data={planet}
            handleFavorite={handleFavorite}
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