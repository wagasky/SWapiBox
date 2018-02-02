import { getHomeWorld, getSpecies, getResidentNames } from './apiCalls'

const generateRandomNumber = () => {
  const randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber
}

const formatFilm = (results, number) => {

    let filmNumber = number - 1
    const numeral = [ 'IV', 'V', 'VI', 'I', 'II', 'III', 'VII' ]

    return {
      title: results.title,
      releaseYear: results.release_date,
      text: results.opening_crawl,
      numeral: numeral[filmNumber],
    }
}

const formatPeople = (arrayOfPeopleObjects) => {

    const unresolvedPromises = arrayOfPeopleObjects.map( async (person) => {
      const { name, homeworld, species } = person;

      const { homeworldName, population } = await getHomeWorld(homeworld);
      const speciesData = await getSpecies(species);

      return { 
        name: name,
        favorite: false, 
        category: 'person',
        info: {
          homeworld: homeworldName,
          species: speciesData,
          population: population,
        },
      }
    }) 
    return Promise.all(unresolvedPromises)
}

const formatPlanets = async (arrayOfPlanetObjects) => {

    const unresolvedPromises = arrayOfPlanetObjects.map( async (planet) => {
      const { name, terrain, population, climate, residents } = planet;

      const residentData = await getResidentNames(residents)

      return {
        name: planet.name,
        favorite: false,
        category: 'planet',
        info: {
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residentData ? residentData : 'none',
        }, 
      }
    })
    return Promise.all(unresolvedPromises)
}

const formatVehicles = async (arrayOfVehicleObjects) => {

    const unresolvedPromises = arrayOfVehicleObjects.map( async (vehicle) => {
      const { name, model, vehicle_class, passengers } = vehicle;

      return {
        name: vehicle.name,
        category: 'vehicle',
        favorite: false,
        info: {
          model: vehicle.model,
          vehicleClass: vehicle.vehicle_class,
          passengers: vehicle.passengers,
        }
      }
    })
    return Promise.all(unresolvedPromises)

}

export { generateRandomNumber, formatFilm, formatPeople, formatPlanets, formatVehicles }