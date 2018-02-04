/* eslint-disable */ 

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import helper from './helper'
import {
    getResidentNames,
    getSpecies,
    getHomeWorld
  } from './apiCalls';

import {
  generateRandomNumber, 
  formatFilm, 
  formatPeople, 
  formatPlanets, 
  formatVehicles
} from './helper'


// import {
//   peopleData, 
//   planetData, 
//   vehicleData, 
//   filmData,
//   homeWorldData,
//   speciesData,
//   residentNamesData,
//   mockRawData } from '../mockApiData.js'


  const filmData = [
      {
        "title":"A New Hope",
        "releaseYear":"1977-05-25",
        "number": 'IV',
        "text":"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      }
    ]

  const rawFilmData = [ { title: 'A New Hope',
             releaseYear: '1977-05-25',
             number: 'IV',
             text: 'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire\'s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....' } ]

  describe('generateRandomNumber tests', () => {

    it('returns a random number between 0 and 6', () => {
      const randomNumber = generateRandomNumber()
      const numberArray= [0, 1, 2, 3, 4, 5, 6]

      expect(numberArray).toContain(randomNumber)
    }) 

  })

  describe('formatFilm tests', () => {


    it('should take raw filmData and return a formatted object', async () => {
  
      let filmData
      const cleanData = await formatFilm(rawFilmData, 2)
      console.log(cleanData)

      expect(cleanData).toEqual(filmData)

    })
  })

  describe('formatPeople tests', () => {

  })

  describe('formatPlanets tests', () => {

  })

  describe('formatVehicles tests', () => {

  })