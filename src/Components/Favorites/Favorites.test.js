/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorites />, div);
  ReactDOM.unmountComponentAtNode(div);
});