import React from 'react'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'

const Routes = [
  { path: '/', exact: true, ...HomePage },
  { path: '/users', ...UserPage }
]

export default Routes
