import React from 'react'
import { renderToString } from 'react-dom/server'

const renderInHtml = (Tag) => {
  const content = renderToString(<Tag />)
  const template = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src='client.bundle.js'></script>
      </body>
    </html>
  `
  return template
}

export default renderInHtml