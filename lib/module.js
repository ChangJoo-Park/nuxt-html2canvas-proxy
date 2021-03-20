module.exports = function (moduleOptions) {
  const proxy = require('html2canvas-proxy')
  const defu = require('defu')
  const express = require('express')
  const html2canvas = defu(this.options.html2canvas, { path: '/_proxy' })
  const app = express()
  app.use('/', proxy())
  this.addServerMiddleware({
    path: html2canvas.path,
    handler: app
  })
}

module.exports.meta = require('../package.json')
