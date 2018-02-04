/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';
import { shallow } from 'enzyme';

describe('People', () => {

  let renderedComponent;
  let mockHandleFavorite;

  const mockData = [
      {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
      {"name":"C-3PO","homeworld":"Tatooine","species":"Droid","population":"200000"},
      {"name":"R2-D2","homeworld":"Naboo","species":"Droid","population":"4500000000"},
    ]

  it('should match snapshot', () => {
    renderedComponent = shallow(<People data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});