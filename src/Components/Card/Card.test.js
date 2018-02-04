/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot - if one card, show one
// snapshot - if 3 cards, show three
// handleFave is called on click

