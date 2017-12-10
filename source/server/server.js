import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import renderInHtml from '../helper/renderInHtml'
import Routes from '../client/Routes'
import Home from '../client/components/Home'

const server = express()

server.use(express.static('public'))

server.get('/', (request, response) => {
  const { path: location } = request
  const context = {}
  const code = (
    <StaticRouter { ...{ location, context } }>
      <Routes />
    </StaticRouter>
  )
  const html = renderInHtml(code)
  response.send(html)
})

const { env: { IP = 'http://localhost', PORT = 3000 } } = process
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
