import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import noop from 'no-op'
import renderInHtml from '../helper/renderInHtml'
import buildStore from '../helper/buildStore'
import Routes from '../client/Routes'

// Pull of variables from process environment
const { env: { IP = 'http://localhost', PORT = 3000 } } = process

// Create a new http server
const server = express()

// Proxy all routes on the /api path to the remote API server
const path = '/api'
const endpoint = 'http://react-ssr-api.herokuapp.com'
const options = {
  proxyReqOptDecorator(opts) {
    opts.header['x-forwarded-host'] = `${IP}:${PORT}`
    return opts
  }
}
server.use(path, proxy(endpoint, options))

// Make the contents of the public folder available
server.use(express.static('public'))

// Handle all requests from the caller in here
server.get('*', async (request, response, next) => {

  // Build an empty server store
  const store = buildStore()

  // Create promises to fill up server store
  const { path: location } = request
  const matchList = matchRoutes(Routes, request.path)
  const promiseList = matchList.map((match) => {
    const { route: { loadData = noop } } = match
    return loadData(store)
  })

  // Wait for server store to be filled up
  await Promise.all(promiseList)

  // Build mark-up using data from server store
  const code = (
    <Provider store={store} >
      <StaticRouter location={location} context={{}}>
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  )

  // Send mark-up back to caller with server store state embedded in mark-up
  const html = renderInHtml(code, store)
  response.send(html)
})

// Start the http server up on the provided host and port
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
