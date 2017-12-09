import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

// Create the Home component
const element = <Home />

// Find the DOM node the component needs to be rendered within
const domNode = document.querySelector('#root')

// Render the component in the DOM node
ReactDOM.hydrate(element, domNode)
