/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';
import { shallow } from 'enzyme';

describe('Planets', () => {

  let renderedComponent;
  let mockHandleFavorite;

  const mockData = [
      {"name":"Alderaan","terrain":"grasslands, mountains","population":"2000000000","climate":"temperate","residents":"Leia Organa\nBail Prestor Organa\nRaymus Antilles"},
      {"name":"Yavin IV","terrain":"jungle, rainforests","population":"1000","climate":"temperate, tropical","residents":"none"},
      {"name":"Hoth","terrain":"tundra, ice caves, mountain ranges","population":"unknown","climate":"frozen","residents":"none"},
    ]

  it('should match snapshot', () => {
    renderedComponent = shallow(<Planets data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});