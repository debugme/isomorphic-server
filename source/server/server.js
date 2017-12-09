import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import renderInHtml from '../helper/renderInHtml'
import Home from '../client/components/Home'

const server = express()

server.use(express.static('public'))

server.get('/', (request, response) => {
  response.send(renderInHtml(Home))
})

const { env: { IP = 'http://localhost', PORT = 3000 } } = process
const callback = () => console.log(`listening on ${IP}:${PORT}`)
server.listen(PORT, callback)
