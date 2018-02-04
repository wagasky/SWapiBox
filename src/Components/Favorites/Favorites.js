import React from 'react';
import Card from '../Card/Card';
import { array, func } from 'prop-types';

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
    <div className="favoriteCards">
      { renderedCards }
    </div>
  );
};

Favorites.propTypes = {
  data: array.isRequired,
  handleFavorite: func.isRequired,
};

export default Favorites;