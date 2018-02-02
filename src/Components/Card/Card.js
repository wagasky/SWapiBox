import React from 'react';

const Card = (props) => {


  const category = Object.keys(props)
  const card = props[category]
  const info = card.info
  const infoKeys = Object.keys(card.info)
  
  const renderedInfo = infoKeys.map( key => {
      return (
        <li>{key}: {info[key]}</li>
      )
    })

  selectFavorite(event) {

    const { value } = event.target;
    this.props.handleFavorite(value)

  }

  return (
    <div className={card.category}>
      <h5>{card.name}</h5>
      <ul>
        { renderedInfo }
      </ul>
      <button
      onClick={() => handleFavorite()}
      value={card.name}
      >Fav</button>
    </div>

  )

}

export default Card;