import React from 'react';
import Card from '../Card/Card'

const Favorites = ({ data, handleFavorite }) => {

  const renderedCards = data.map((favorite, index) => {
    return (
      <Card 
        key={index}
        data={favorite}
        handleFavorite={handleFavorite}
      />
    )
  })

  return (
    <div className="favoriteCards">
      { renderedCards }
    </div>
  )
}

export default Favorites;