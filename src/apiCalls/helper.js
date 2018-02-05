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
        category: 'people',
        info: {
          Homeworld: homeworldName,
          Species: speciesData,
          Population: population,
        },
      }
    }) 
    return Promise.all(unresolvedPromises)
}

const formatPlanets = async (arrayOfPlanetObjects) => {

    const unresolvedPromises = arrayOfPlanetObjects.map( async (planet) => {
      const { name, terrain, population, climate, residents } = planet;

      const residentData = await getResidentNames(residents)
      const none = 'none'


      return {
        name: planet.name,
        favorite: false,
        category: 'planets',
        info: {
          Terrain: planet.terrain,
          Population: planet.population,
          Climate: planet.climate,
          Residents: residentData.join(', '),
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
        category: 'vehicles',
        favorite: false,
        info: {
          Model: vehicle.model,
          VehicleClass: vehicle.vehicle_class,
          Passengers: vehicle.passengers,
        }
      }
    })
    return Promise.all(unresolvedPromises)

}

export { generateRandomNumber, formatFilm, formatPeople, formatPlanets, formatVehicles }