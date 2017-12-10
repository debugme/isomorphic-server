import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

// Create the Routes component
const element = (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

// Find the DOM node the component needs to be rendered within
const domNode = document.querySelector('#root')

// Render the component in the DOM node
ReactDOM.hydrate(element, domNode)
