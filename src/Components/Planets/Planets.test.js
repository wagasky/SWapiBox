/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Planets from './Planets';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Planets />, div);
  ReactDOM.unmountComponentAtNode(div);
});