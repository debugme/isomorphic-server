import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from '../client/reducers/rootReducer'

// Create the client-side store using state provided from the server store
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, window.INITIAL_STATE, middleware)

// Create the Routes component
const element = (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>
)

// Find the DOM node the component needs to be rendered within
const domNode = document.querySelector('#root')

// Render the component in the DOM node
ReactDOM.hydrate(element, domNode)
