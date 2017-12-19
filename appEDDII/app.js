'use strict'

var express = require('express'),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  routes = require('./routes/router.js'),
  //Definir un favicon
  faviconURL = `${__dirname}/public/img/favicon.jpg`,
  publicDir = express.static(`${__dirname}/public`),
  viewDir = `${__dirname}/views`,
  port = (process.env.PORT || 3000),
  app = express()

// configurando app :
app
  .set('views', viewDir)
  .set('view engine', 'jade')
  .set('port', port)
  //Ejecutando middlewares
  .use(favicon(faviconURL))
  //parse application/json
  .use( bodyParser.json() )
  // parse application/x-www-form-urlencoded
  .use( bodyParser.urlencoded({extended : false}))
  .use(morgan('dev'))
  .use(publicDir)
  //Ejecuto el middleware enrutador
  .use('/',routes)

module.exports = app
