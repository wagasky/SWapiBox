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


