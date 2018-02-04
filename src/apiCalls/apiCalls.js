import {
  generateRandomNumber,
  formatFilm,
  formatPeople,
  formatPlanets,
  formatVehicles,

} from './helper'

const fetchAndParse = async (url) => {

  try {

  const initialFetch = await fetch(url);
  const fetchedObj = await initialFetch.json()

    if (initialFetch.status <= 200) {
      return fetchedObj
    } else {
      throw new Error('Bad status code') 
    }
  } catch(err) {
     throw new Error('Error in fetchAndParse')
  }
}

const getFilm = async () => {
  let number = generateRandomNumber()
  try {
    const results  = await fetchAndParse(`https://swapi.co/api/films/${number}`);
    console.log(results)
    const film = await formatFilm(results, number)

    return film

  } catch(err) {
    throw new Error('getFilm failed to fetch') ;
  }
}

const getPeople = async () => {
  try {
    const { results } = await fetchAndParse('https://swapi.co/api/people/');
    const people = await formatPeople(results)

    return people;
  } catch(err) {
    throw new Error('getPeople failed to fetch') ;
  }
};

const getHomeWorld = async (homeworldUrl) => {
  try {
    const { name, population } = await fetchAndParse(homeworldUrl)

    return { homeworldName: name, population }

  } catch(err) {
    throw new Error('getHomeWorld failed to fetch'); 
  
  }
  
}

const getSpecies = async (speciesURL) => {
  try {
    const { name } = await fetchAndParse(speciesURL)

    return name

  } catch(err) {
    throw new Error('getSpecies failed to fetch') ;
  }
}

const getPlanets = async () => {
  try {
    const fetchedObj = await fetchAndParse('https://swapi.co/api/planets/')
    const planets = await formatPlanets(fetchedObj.results)


    return planets
  } catch(err) {
    throw new Error('getPlanets failed to fetch') ;
  }
}

const getResidentNames = async (residents) => {

  try {
     const residentData = await residents.map( async (url) => {
      let residentObject = await fetchAndParse(url)

      return residentObject.name
    })
     return Promise.all(residentData);
  } catch(err) {
    throw new Error('getResidentNames failed to fetch');
  }    
}

const getVehicles = async () => {

  try {
    const { results } = await fetchAndParse('https://swapi.co/api/vehicles/')
    const vehicles = await formatVehicles(results)

    return vehicles
  } catch(err) {
    throw new Error('getVehicles failed to fetch');
  }
}

export { fetchAndParse, getPeople, getFilm, getVehicles, getPlanets, getResidentNames, getSpecies, getHomeWorld }

