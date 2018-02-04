import React from 'react';
import propTypes from 'prop-types';

const IntroText = ({ film }) => {

  const { title, releaseYear, numeral, text } = film;

  return (
    <div>
      <p>{ text }</p>
      <h5>{title}</h5>
      <h5>Episode {numeral}</h5>
      <h5>{releaseYear}</h5>
    </div>

  );
};

IntroText.propTypes = {
  film: propTypes.oneOfType([propTypes.array, propTypes.object]),
};

export default IntroText;