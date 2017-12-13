import React from 'react'
import { renderToString } from 'react-dom/server'

const renderInHtml = (code, store) => {
  const initialState = JSON.stringify(store.getState())
  const content = renderToString(code)
  const template = `
    <html>
      <head>
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.INITIAL_STATE=${initialState}</script>
        <script src="client.bundle.js"></script>
      </body>
    </html>
  `
  return template
}

export default renderInHtml
