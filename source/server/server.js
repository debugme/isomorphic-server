import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import renderInHtml from '../helper/renderInHtml'
import buildStore from '../helper/buildStore'
import Routes from '../client/Routes'

const server = express()

server.use(express.static('public'))

server.get('*', (request, response) => {
  const { path: location } = request

  const store = buildStore()
  const context = {}
  const code = (
    <Provider store={store}>
      <StaticRouter { ...{ location, context } }>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const html = renderInHtml(code)
  response.send(html)
})

const { env: { IP = 'http://localhost', PORT = 3000 } } = process
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
