/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import CardDisplay from './CardDisplay';
import { MemoryRouter, matchRoutes } from 'react-router-dom'
import { shallow, mount } from 'enzyme';


describe('CardDisplay', () => {

  let renderedComponent;
  let mockHandleFavorite = jest.fn();
  let mockData
  let mockFilmData = [
    {
      "title":"A New Hope",
      "releaseYear":"1977-05-25",
      "number": 'IV',
      "text":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    }
  ]
  let mockPeopleData = [
    {"name":"Luke Skywalker","homeworld":"Tatooine","species":"Human","population":"200000"},
    {"name":"C-3PO","homeworld":"Tatooine","species":"Droid","population":"200000"},
  ]

  let mockPlanetsData = [
    {"name":"Alderaan","terrain":"grasslands, mountains","population":"2000000000","climate":"temperate","residents":"Leia Organa\nBail Prestor Organa\nRaymus Antilles"},
   ]

  it('should match snapshot', () => {
    renderedComponent = shallow(<CardDisplay film={mockFilmData} data={mockData} handleFavorite={mockHandleFavorite} />);

    expect(renderedComponent).toMatchSnapshot();
  });

  it.skip('should render People by default', async () => {
    renderedComponent = await mount(
      <MemoryRouter>
        <CardDisplay  data={mockFilmData} handleFavorite={mockHandleFavorite} />
      </MemoryRouter>
    )
    const expectedPeopleLength = 1;
    expect(renderedComponent.find('People').length).toEqual(expectedPeopleLength)
  })

  it.skip('should render Planets component when the router path is to Planets', async () => {
     renderedComponent = await shallow(
      <MemoryRouter initialEntries={['/planets']}>
        <CardDisplay planets={mockPlanetsData} handleFavorite={mockHandleFavorite} />
      </MemoryRouter>
    )

      console.log(CardDisplay)

     const expectedPlanetsLength = 1;

     await expect(renderedComponent.find('.Planets').length).toEqual(expectedPlanetsLength)

  })



});



