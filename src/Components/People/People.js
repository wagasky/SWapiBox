import React from 'react';
import Card from '../Card/Card'

const People = ({ people }) => {

  console.log(people)

  return (
    <div>
      <p>I'm People!</p>
      <Card />
    </div>
  )
}

export default People;