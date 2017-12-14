import React from 'react'
import { renderToString } from 'react-dom/server'
import serialize from 'serialize-javascript'

const renderInHtml = (code, store) => {
  // Pull out state in a way which guards against XSS (CrossSiteScripting) attacks
  const initialState = serialize(store.getState())

  // Generate dynamic content to render inside the html template
  const content = renderToString(code)

  // Put dynamic content into html template
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
  // Return composed template back to the caller
  return template
}

export default renderInHtml
