import React from 'react';
import propTypes from 'prop-types';
import './IntroText.css';

const IntroText = ({ film }) => {

  const { title, numeral, text } = film;

  // eslint-disable-next-line
  const url = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"

  return (
    <div className="main">
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>

              <img src={url}/>
            </h1>
            <h4>Episode {numeral}</h4>
            <h1>{title}</h1>
          </div>
          <p>{ text }</p> 
          <p>Click people to build the resistance...</p> 
        </div>
      </section>
    </div>
  );
};

IntroText.propTypes = {
  film: propTypes.oneOfType([propTypes.array, propTypes.object]),
};

export default IntroText;
