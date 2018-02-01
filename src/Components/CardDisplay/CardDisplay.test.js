/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import CardDisplay from './CardDisplay';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});