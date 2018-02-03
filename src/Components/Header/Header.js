import React, { Component } from 'react'
import Nav from '../Nav/Nav'

const Header = ({ handleButton }) => {
  return(
    <div>
     <h1>SWapiBox</h1>
     <Nav handleButton={handleButton} />
    </div>
  )
}

export default Header;