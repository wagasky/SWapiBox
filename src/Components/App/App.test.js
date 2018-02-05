/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import mockApiData from '../../mockApiData.js'


describe('App state', () => {

  let renderedComponent;

  beforeEach(() => {
   renderedComponent = shallow(<App />, {disableLifecycleMethods: true});
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have default states of empty arrays', () => {
    expect(renderedComponent.state().film).toEqual([]);
    expect(renderedComponent.state().people).toEqual([]);
    expect(renderedComponent.state().planets).toEqual([]);
    expect(renderedComponent.state().vehicles).toEqual([]);
    expect(renderedComponent.state().favorites).toEqual([]);
  })
});

describe('Beginning Lifecycle Methods - componentDidMount()', () => {
    let renderedComponent

    beforeEach(() => {
      renderedComponent = shallow(<App />);


    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({ })
    }))
  })

  it.skip('should setState', async () => {
    const expectedFilmLength = 1;
    const expectedPeopleLength = 10;
    const expectedFavoritesLength = 3;

    // renderedComponent = shallow(<App />);

    expect(renderedComponent.state('film').length).toEqual(expectedFilmLength)

  })

  it('should put film, people, and favorites into storage', () => {

    const expectedFavoritesLength = 3;

    expect(renderedApp.state('favorites').length).toEqual(expectedFavoritesLength);

  })
})

describe('initialDataCalls', () => {

  it('should pull data from storage if it exists', () => {

  })

  it('should call the api for only film and people', () => {

  })
})

describe('localStorage', () => {
  let renderedComponent
  let mockState

  beforeAll(() => {
    renderedComponent = shallow(<App />, {disableLifecycleMethods: true});
  })

  mockState = {
    film: [],
    people: [],
    vehicles: [],
    planets: [],
    favorites: [],
  }

  it('putIntoStorage() should send data to localStorage', () => {
   
  })

  it('pullFromStorage() should retreive data from localStorage', () => {

  })

})

describe('callGetPlanets', () => {

  it('should make a fetch call when called', () => {

  })

  it('should put planets into localStorage when called', () => {

  })

  it('should set state for planets when called', () => {

  })
})

describe('callGetVehicles', () => {

  it('should make a fetch call when called', () => {

  })

  it('should put vehicles into localStorage when called', () => {

  })

  it('should set state for vehicles when called', () => {
    
  })
})

describe('handleButton', () => {

  it('should call callGetPlanets() when the param is planets', () => {

  })

  it('should call callGetVehicles() when the param is vehicles', () => {
    
  })
})


describe('handlefavorite', () => {

  it('should be called with the correct params', () => {

  })

  it('should toggle the favorite status when called', () => {

  })

  it('should set state for favorites when called', () => {

  })

  it('should add a favorite if the favorite does not yet exist', () => {

  })

  it('should remove a favorite if the favorite already exists', () => {

  })

  it('should put favorites into storage when called', () => {

  })
})

