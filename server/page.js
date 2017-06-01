var React = require('react')
var ReactDOMServer = require('react-dom/server')
var Main = require('../public/js/hello');

function renderFullPage (html) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
    ${html}
    </body>
    </html>
  `
}

function page () {
  return renderFullPage(ReactDOMServer.renderToString(React.createElement(Main, {url: 'https://facebook.github.io/react/'})))
}

module.exports = page;
