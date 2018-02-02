/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import mockApiData from '../mockApiData'
import { shallow } from 'enzyme';
import {
    fetchAndParse,
    getFilm,
    getPeople,
    getPlanets,
    getResidentNames,
    getVehicles,
    getSpecies,
    getHomeWorld
  } from './apiCalls';

const {
  peopleData, 
  planetData, 
  vehicleData, 
  filmData } = mockApiData


describe('getFilm tests', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: filmData,
      })
    }));
  });

  it('fetch is called', async () => {
    expect(window.fetch).not.toHaveBeenCalled();

    getFilm(2);

    expect(window.fetch).toHaveBeenCalled();
  });

  it('should return an object of results', async() => {
    const filmData = await getFilm(7);

    expect(typeof filmData).toEqual('object');
  })

  it('should throw the error for getFilms when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const filmData = await getFilm(2)
    const expectedError = Error('getFilm failed to fetch')

    expect(filmData).toEqual(expectedError)
  });
});

describe('getPeople tests', () => {
  let mockPeople
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: peopleData,
      })
    }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [ "https://swapi.co/api/people/" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getPeople();

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an object of results', async() => {
    const data = await getPeople();

    expect(typeof data).toEqual('object');
  })

  it('should throw the error for getPeople when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const peopleData = await getPeople()
    const expectedError = Error('getPeople failed to fetch')

    expect(peopleData).toEqual(expectedError)
  });
});

describe('getPlanets tests', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: planetData,
      })
    }));
  });

  it('fetch is called with the correct params', async () => {
    const expected = [ "https://swapi.co/api/planets/" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getPlanets();

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an object of results', async() => {
    const planetData = await getPlanets();

    expect(typeof planetData).toEqual('object');
  })

  it('should throw the error for getPlanets when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const planetData = await getPlanets()
    const expectedError = Error('getPlanets failed to fetch')

    expect(planetData).toEqual(expectedError)
  });
});

describe('getVehicles tests', () => {
  
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: vehicleData,
      })
    }));
  });

  it('fetch should be called with the correct params', async () => {
    const expected = [ "https://swapi.co/api/vehicles/" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getVehicles();

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an object of results', async() => {
    const vehicleData = await getVehicles();

    expect(typeof vehicleData).toEqual('object');
  })

  it('should throw the error for getVehicles when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const vehicleData = await getVehicles()
    const expectedError = Error('getVehicles failed to fetch')

    expect(vehicleData).toEqual(expectedError)
  });
});

describe('fetchAndParse tests', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'Returned results',
      })
    }));
  });

  it('fetch should be called', async () => {
    expect(window.fetch).not.toHaveBeenCalled();

    fetchAndParse();

    expect(window.fetch).toHaveBeenCalled();
  });

  it('should throw the error for fetchAndParse when catch is hit in the Promise', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 404
    }))

    const expectedError = 'Error in fetchAndParse'

    expect(fetchAndParse('')).rejects.toEqual(Error(expectedError))
  });
})

describe('getResidentNames tests', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'Returned results',
      })
    }));
  });

  it('fetch should be called with the correct params', async () => {
    const expected = [ "test url" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getResidentNames(expected);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  })

  it('should throw the error for getResidentNames', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const residentData = await getResidentNames()
    const expectedError = 'getResidentNames failed to fetch'

    expect(residentData).toEqual(Error(expectedError))
  })
})

describe('getSpecies tests', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'Returned results',
      })
    }));
  });

  it('fetch should be called with the correct params', async () => {
    const expected = [ "test url" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getSpecies(expected);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should throw the error for getSpecies', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const speciesData = await getSpecies()
    const expectedError = 'getSpecies failed to fetch'

    expect(speciesData).toEqual(Error(expectedError))
  })
})

describe('getHomeWorld tests', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        results: 'Returned results',
      })
    }));
  });

  it('fetch should be called with the correct params', async () => {
    const expected = [ "test url" ];
    expect(window.fetch).not.toHaveBeenCalled();

    getHomeWorld(expected);

    expect(window.fetch).toHaveBeenCalled();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should throw the error for getHomeWorld', async () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }))

    const homeWorldData = await getHomeWorld()
    const expectedError = 'getHomeWorld failed to fetch'

    expect(homeWorldData).toEqual(Error(expectedError))
  })
})








