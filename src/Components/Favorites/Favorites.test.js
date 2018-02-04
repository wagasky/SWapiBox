/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import { shallow } from 'enzyme';

describe('Favorites', () => {

  let renderedComponent;
  let mockHandleFavorite;

  const mockData = [
      {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
      {"name":"Alderaan","terrain":"grasslands, mountains","population":"2000000000","climate":"temperate","residents":"Leia Organa\nBail Prestor Organa\nRaymus Antilles"},
      {"name":"Snowspeeder","model":"t-47 airspeeder","vehicleClass":"airspeeder","passengers":"0"},
    ]

  it('should match snapshot with 3 cards', () => {
    renderedComponent = shallow(<Favorites data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it('should match snapshot with 1 card', () => {
    const mockData = [
      {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
    ]

    renderedComponent = shallow(<Favorites data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});


