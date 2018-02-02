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


const {
  peopleData, 
  planetData, 
  vehicleData, 
  filmData,
  homeWorldData,
  speciesData,
  residentNamesData,
  mockRawData } = '../mockApiData.js'

  describe('generateRandomNumber tests', () => {

    it('returns a random number between 0 and 6', () => {
      const randomNumber = generateRandomNumber()
      const numberArray= [0, 1, 2, 3, 4, 5, 6]

      expect(numberArray).toContain(randomNumber)
    }) 

  })

  describe.skip('formatFilm tests', () => {
    let filmData


    it('should take raw filmData and return a formatted object', () => {
      const rawData = filmData
      const cleanData = formatFilm(rawData, 1)

      expect(cleanData.title).toEqual('')

    })
  })

  describe('formatPeople tests', () => {

  })

  describe('formatPlanets tests', () => {

  })

  describe('formatVehicles tests', () => {

  })