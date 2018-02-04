/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {

  let renderedComponent;
  let mockHandleButton

  it('should match snapshot', () => {
    renderedComponent = shallow(<header handleButton={mockHandleButton} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});