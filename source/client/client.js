import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from '../client/reducers/rootReducer'

// Create the client-side store
const state = {}
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, state, middleware)

// Create the Routes component
const element = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
)

// Find the DOM node the component needs to be rendered within
const domNode = document.querySelector('#root')

// Render the component in the DOM node
ReactDOM.hydrate(element, domNode)
