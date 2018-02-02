import React from 'react';


const IntroText = ({ film }) => {

const { title, releaseYear, numeral, text } = film

  return (
    <div>
      <p>{ text }</p>
      <h5>{title}</h5>
      <h5>Episode {numeral}</h5>
      <h5>{releaseYear}</h5>
    </div>

  )
}

export default IntroText;