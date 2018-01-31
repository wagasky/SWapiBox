export const fetchAndParse = async (url) => {
  const initialFetch = await fetch(url);

  return initialFetch.json();
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