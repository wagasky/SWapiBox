/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Vehicles from './Vehicles';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Vehicles />, div);
  ReactDOM.unmountComponentAtNode(div);
});