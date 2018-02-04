/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  let renderedComponent;

  beforeEach(() => {
   renderedComponent = shallow(<App />, {disableLifecycleMethods: true});
  })

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});


// test cDM
// test that state is set
// test that storage is set

// test the initial data calls

// handle button
// if it's given planets, it calls planets
// if it's given vehicles, etc.

// put into storage

// handlefavorite
// if a favorite doesn't exist, it gets put into storage
// if it does, it gets taken out of storage
// state is updated as well in both

// render - snapshot