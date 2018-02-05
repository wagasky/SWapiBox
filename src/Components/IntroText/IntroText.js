import React from 'react';
import propTypes from 'prop-types';
import './IntroText.css'

const IntroText = ({ film }) => {

  const { title, releaseYear, numeral, text } = film;

  return (
    <div className="main">

      <div className="fade"></div>
        <audio preload="auto">
          <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
          <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
        </audio>
  
      <section className="star-wars">
      <div className="crawl">
       <div className="title">
          <h4>Episode {numeral}</h4>
          <h1>{title}</h1>
          <h4>{releaseYear}</h4>
        </div>
          <p>{ text }</p> 
        </div>
     </section>
    </div>
  );
};

IntroText.propTypes = {
  film: propTypes.oneOfType([propTypes.array, propTypes.object]),
};

export default IntroText;

// <audio src{Theme} autoPlay />