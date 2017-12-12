import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'

const routes = () => (
  <div>
    <Route exact path='/' component={Home}/>
    <Route path='/users' component={UsersList}/>
  </div>
)

export default routes
