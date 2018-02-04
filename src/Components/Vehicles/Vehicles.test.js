/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles';
import { shallow } from 'enzyme';

describe('Vehicles', () => {

  let renderedComponent;
  let mockHandleFavorite;

  const mockData = [
      {"name":"Sand Crawler","model":"Digger Crawler","vehicleClass":"wheeled","passengers":"30"},
      {"name":"T-16 skyhopper","model":"T-16 skyhopper","vehicleClass":"repulsorcraft","passengers":"1"},
      {"name":"X-34 landspeeder","model":"X-34 landspeeder","vehicleClass":"repulsorcraft","passengers":"1"},
    ]
    
  it('should match snapshot', () => {
    renderedComponent = shallow(<Vehicles data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});