import React from 'react';
import Card from '../Card/Card'

const People = ({ people }) => {
  
  const renderedCards = people.map( (person, index) => {

    return(
      <Card 
            key={index}
            person={person}
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