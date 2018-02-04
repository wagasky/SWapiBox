/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {

  let renderedComponent;
  let mockHandleButton;


  it('should match snapshot', () => {
    renderedComponent = shallow(<Nav handleButton={mockHandleButton} />);

    expect(renderedComponent).toMatchSnapshot();
  });

});