export const getPeople = async () => {

  const initialFetch = await fetch('https://swapi.co/api/people/')
  const { results } = await initialFetch.json()
  const people = await formatPeople(results)
  return people;
};

const fetchAndParse = async (url) => {
  const initialFetch = await fetch(url);
  const { results } = await initialFetch.json();
  return results;
}

const formatPeople = (arrayOfPeopleObjects) => {
  const unresolvedPromises = arrayOfPeopleObjects.map( async (person) => {
    const { name, homeworld, species } = person;
    const initialHomeworld = await fetch(homeworld);
    const homeworldData = await initialHomeworld.json();
    const initialSpecies = await fetch(species);
    const speciesData = await initialSpecies.json();

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
  const initialFetch = await fetch('https://swapi.co/api/planets/')

}