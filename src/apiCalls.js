export const fetchAndParse = async (url) => {
  const initialFetch = await fetch(url);

  return await initialFetch.json();
}

export const getPeople = async () => {
  const { results } = await fetchAndParse('https://swapi.co/api/people/');
  const people = await formatPeople(results)

  return people;
};

const formatPeople = (arrayOfPeopleObjects) => {
  const unresolvedPromises = arrayOfPeopleObjects.map( async (person) => {
    const { name, homeworld, species } = person;

    const homeworldData = await fetchAndParse(homeworld);
    const speciesData = await fetchAndParse(species);

    return { 
      name: name,
      favorite: false, 
      homeworld: homeworldData.name,
      species: speciesData.name,
      population: homeworldData.population,
    }
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanets = async () => {
  const { results } = await fetchAndParse('https://swapi.co/api/planets/')

  const planets = await formatPlanets(results)

  return planets;
}


const cleanResidents = async (residents) => {
   const residentData = await residents.map( async (url) => {
      let residentObject = await fetchAndParse(url)
      return residentObject.name
    })
   return Promise.all(residentData);
}
  

const formatPlanets = async (arrayOfPlanetObjects) => {

  const unresolvedPromises = arrayOfPlanetObjects.map( async (planet) => {
    const { name, terrain, population, climate, residents } = planet;

    const residentData = await cleanResidents(residents)

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

export const getVehicles = async () => {
  const { results } = await fetchAndParse('https://swapi.co/api/vehicles/')
  const vehicles = await formatVehicles(results)

  return vehicles
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



