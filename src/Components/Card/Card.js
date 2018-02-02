import React from 'react';

const Card = (props) => {

  const category = Object.keys(props)
  const card = props[category]
  const info = Object.entries(card.info)
  const renderedInfo = info.map( item => {
      return (
        <div>
        <p>{item}</p>
        </div>
      )
    })

  debugger
  return (
    <div className={card.category}>
      <h5>{card.name}</h5>
      { renderedInfo }
    </div>

  )

  // const { homeworld, species, population } = person
  // const { terrain, population, climate, residents } = planet
  // const { model, className, passengers } = vehicle

  // if ( person ) {
  //   return (
  //     <div className="personCard">
  //       <p>{person.name}</p>
  //       <p>{person.homeworld}</p>
  //       <p>{person.species}</p>
  //       <p>{person.population}</p>
  //     </div>
  //   )
  // } else if ( vehicle ) {
  //   return (
  //     <div className="vehicleCard">
  //       <p>{vehicle.name}</p>
  //       <p>{vehicle.model}</p>
  //       <p>{vehicle.vehicleClass}</p>
  //       <p>{vehicle.passengers}</p>
  //     </div>
  //   )
  // } else if ( planet ) {
  //   return (
  //     <div className="planetCard">
  //       <p>{planet.terrain}</p>
  //       <p>{planet.climate}</p>
  //       <p>{planet.population}</p>
  //       <p>{planet.residents}</p>
  //     </div>
  //   )
  // } else {
    return null
  // }

}

export default Card;