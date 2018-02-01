/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import IntroText from './IntroText';
import { shallow } from 'enzyme';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IntroText />, div);
  ReactDOM.unmountComponentAtNode(div);
});