import React from 'react';
import { object, func } from 'prop-types';
import './Card.css';

const Card = ({ data, handleFavorite }) => {

  const info = data.info;
  const infoKeys = Object.keys(info);

  const classList = data.favorite ? 'favorite' : 'notFavorite';
  
  const renderedInfo = infoKeys.map( (key, index) => {
    return (
      <li key={index}>
        {key}: {info[key]}
      </li>
    );
  });

  return (
    <div className={data.category}>
      <button
        className={classList}
        onClick={() => handleFavorite(data.name, data.category)}
        value={data}> &#9733;
      </button>
      <h5>{data.name}</h5>
      <ul>
        { renderedInfo }
      </ul>
    </div>
  );
};

Card.propTypes = {
  data: object,
  handleFavorite: func,
};

export default Card;