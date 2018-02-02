import React from 'react';
import Card from '../Card/Card'

const People = ({ data, handleFavorite } ) => {

  const renderedCards = data.map( (person, index) => {

    return(
      <Card 
            key={index}
            data={person}
            handleFavorite={handleFavorite}
       />
    )
  });


  return (
    <div className="peopleCards">
      { renderedCards }
    </div>
  )
}

export default People;