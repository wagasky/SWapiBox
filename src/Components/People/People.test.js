/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import People from './People';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<People />, div);
  ReactDOM.unmountComponentAtNode(div);
});