import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';
import './People.css';

const People = ({ data, handleFavorite } ) => {

  const renderedCards = data.map( (person, index) => {

    return (
      <Card 
        key={index}
        data={person}
        handleFavorite={handleFavorite}
      />
    );
  });

  return (
    <div className="people-cards">
      { renderedCards }
    </div>
  );
};

People.propTypes = {
  data: array,
  handleFavorite: func,
};

export default People;