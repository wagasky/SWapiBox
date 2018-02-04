import React from 'react';
import { object, func } from 'prop-types';

const Card = ({ data, handleFavorite }) => {

  const info = data.info;
  const infoKeys = Object.keys(info);
  
  const renderedInfo = infoKeys.map( (key, index) => {
    return (
      <li key={index}>
        {key}: {info[key]}
      </li>
    );
  });

  return (
    <div className={data.category}>
      <h5>{data.name}</h5>
      <ul>
        { renderedInfo }
      </ul>
      <button
        onClick={() => handleFavorite(data.name, data.category)}
        value={data}>Fav
      </button>
    </div>
  );
};

Card.propTypes = {
  data: object,
  handleFavorite: func,
};

export default Card;