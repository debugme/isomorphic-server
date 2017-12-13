import React, { Fragment } from 'react'

const HomePage = () => (
  <Fragment>
    <h1>Home</h1>
    <button onClick={() => console.log('clicked...')}>Click Me</button>
  </Fragment>
)

export default {
  component: HomePage
}
