import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../client/reducers/rootReducer'

const buildStore = () => {
  const state = {}
  const middleware = applyMiddleware(thunk)
  const store = createStore(reducers, state, middleware)
  return store
}

export default buildStore
