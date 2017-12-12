import 'babel-polyfill'
import express from 'express'
import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import renderInHtml from '../helper/renderInHtml'
import buildStore from '../helper/buildStore'
import Routes from '../client/Routes'

const server = express()

server.use(express.static('public'))

server.get('*', (request, response) => {
  const { path: location } = request
  const matchList = matchRoutes(Routes, request.path)
  const store = buildStore()
  const context = {}
  const promiseList = matchList.map((match) => {
    const { route: { loadData = () => { } } } = match
    return loadData(store)
  })
  Promise.all(promiseList).then(() => {
    const code = (
      <Provider store={store}>
        <StaticRouter { ...{ location, context } }>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>
    )
    const html = renderInHtml(code)
    response.send(html)
  })
})

const { env: { IP = 'http://localhost', PORT = 3000 } } = process
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
