import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';
import './Favorites.css'

const Favorites = ({ data, handleFavorite }) => {

  const renderedCards = data.map((favorite, index) => {
    return (
      <Card 
        key={index}
        data={favorite}
        handleFavorite={handleFavorite}
      />
    );
  });

  return (
    <div className="favorite-cards">
      { renderedCards }
    </div>
  );
};

Favorites.propTypes = {
  data: array,
  handleFavorite: func,
};

export default Favorites;