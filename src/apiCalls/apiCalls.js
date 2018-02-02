import {
  generateRandomNumber,
  formatFilm,
  formatPeople,
  formatPlanets,
  formatVehicles,

} from './helper'

const fetchAndParse = async (url) => {

  const initialFetch = await fetch(url);

  if (initialFetch.status <= 200) {
    return await initialFetch.json()
  } else {
    throw(new Error('Error in fetchAndParse'))
  }
}

const getFilm = async () => {
  let number = generateRandomNumber()
  try {
    const results  = await fetchAndParse(`https://swapi.co/api/films/${number}`);
    const film = await formatFilm(results, number)

    return film
  } catch(e) {
    const error = new Error('getFilm failed to fetch');
    return error;
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
  try {
    const { name, population } = await fetchAndParse(homeworldUrl)

    return { homeworldName: name, population }

  } catch(e) {
    const error = new Error('getHomeWorld failed to fetch')
    return error;
  }
  
}

const getSpecies = async (speciesURL) => {
  try {
    const { name } = await fetchAndParse(speciesURL)

    return name

  } catch(e) {
    const error = new Error('getSpecies failed to fetch');
    return error;
  }
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

export { fetchAndParse, getPeople, getFilm, getVehicles, getPlanets, getResidentNames, getSpecies, getHomeWorld }

