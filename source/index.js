import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'

const server = express()

server.use(express.static('public'))

server.get('/', (request, response) => {
  const content = renderToString(<Home />)
  const template = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src='client.bundle.js'></script>
      </body>
    </html>
  `
  response.send(template)
})

const { env: { IP = 'http://localhost', PORT = 3000 } } = process
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
