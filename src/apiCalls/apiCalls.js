
const fetchAndParse = async (url) => {

  const initialFetch = await fetch(url);

  if (initialFetch.status <= 200) {
    return await initialFetch.json()
  } else {
    throw(new Error('Error in fetchAndParse'))
  }
}

const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 7)
  return randomNumber
}

const getFilm = async (randomNumber) => {

  let number = randomNumber

  debugger
  
  try {
    const results  = await fetchAndParse(`https://swapi.co/api/films/${number}`);
    const film = await formatFilm(results, number)

    return film
  } catch(e) {
    const error = new Error('getFilm failed to fetch');
    return error;
  }

}

const formatFilm = (results, randomNumber) => {

    let filmNumber = randomNumber - 1
    const numeral = [ 'IV', 'V', 'VI', 'I', 'II', 'III', 'VII' ]

    return {
      title: results.title,
      releaseYear: results.release_date,
      text: results.opening_crawl,
      numeral: numeral[filmNumber],
    }
}

const getPeople = async () => {
  try {
    const { results } = await fetchAndParse('https://swapi.co/api/people/');
    const people = await formatPeople(results)

    return people;
  } catch(e) {
    const error = new Error('getPeople failed to fetch');
    return error;
  }
};

const getHomeWorld = async (homeworldUrl) => {
  const { name, population } = await fetchAndParse(homeworldUrl)

  return { homeworldName: name, population }
}

const getSpecies = async (speciesURL) => {
  const { name } = await fetchAndParse(speciesURL)

  return name
}

const formatPeople = (arrayOfPeopleObjects) => {

    const unresolvedPromises = arrayOfPeopleObjects.map( async (person) => {
      const { name, homeworld, species } = person;

      const { homeworldName, population } = await getHomeWorld(homeworld);
      const speciesData = await getSpecies(species);

      return { 
        name: name,
        favorite: false, 
        homeworld: homeworldName,
        species: speciesData,
        population: population,
      }
    }) 
    return Promise.all(unresolvedPromises)

}

const getPlanets = async () => {
  try {
    const { results } = await fetchAndParse('https://swapi.co/api/planets/')
    const planets = await formatPlanets(results)

    return planets;
  } catch(e) {
    const error = new Error('getPlanets failed to fetch');
    return error;
  }
}

const getResidentNames = async (residents) => {

  try {
     const residentData = await residents.map( async (url) => {
      let residentObject = await fetchAndParse(url)

      return residentObject.name
    })
     return Promise.all(residentData);
  } catch(e) {
    const error = new Error('getResidentNames failed to fetch');
    return error;
  }    
}
  

const formatPlanets = async (arrayOfPlanetObjects) => {

    const unresolvedPromises = arrayOfPlanetObjects.map( async (planet) => {
      const { name, terrain, population, climate, residents } = planet;

      const residentData = await getResidentNames(residents)

      return {
        name: planet.name,
        terrain: planet.terrain,
        population: planet.population,
        climate: planet.climate,
        residents: residentData,
      }
    })
    return Promise.all(unresolvedPromises)
}

const getVehicles = async () => {

  try {
    const { results } = await fetchAndParse('https://swapi.co/api/vehicles/')
    const vehicles = await formatVehicles(results)

    return vehicles
  } catch(e) {
    const error = new Error('getVehicles failed to fetch');
    return error;
  }
}

const formatVehicles = async (arrayOfVehicleObjects) => {

    const unresolvedPromises = arrayOfVehicleObjects.map( async (vehicle) => {
      const { name, model, vehicle_class, passengers } = vehicle;

      return {
        name: vehicle.name,
        model: vehicle.model,
        vehicleClass: vehicle.vehicle_class,
        passengers: vehicle.passengers
      }
    })
    return Promise.all(unresolvedPromises)

}

export { fetchAndParse, getPeople, getFilm, getVehicles, getPlanets, getResidentNames, getSpecies, getHomeWorld }

