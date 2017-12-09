import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home'

const element = <Home />
const domNode = document.querySelector('#root')
ReactDOM.hydrate(element, domNode)
