'use strict'

const express = require('express'),
  favicon = require('serve-favicon'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  routes = require('./routes/general-router.js'),
  faviconURL = `${__dirname}/public/img/node-favicon.png`,
  publicDir = express.static(`${__dirname}/public`),
  viewDir = `${__dirname}/views`,
  port = (process.env.PORT || 3000),
  app = express()

app
  //Indicamos cual va ser el directorio de las vistas
  .set('views', viewDir)
  //Indicamos cual sera el motor de plantillas de la app web
  .set('view engine', 'jade')
  // Seteamos el puerto del servidor
  .set('port', port)
  // Indicamos cual sera el favicon
  .use(favicon(faviconURL))
  // Indicamos el middleware que vamos a usar
  .use( bodyParser.json() )
  .use( bodyParser.urlencoded({ extended : false }) )
  // Este middleware se usa para mostrar las peticiones en la consola. Esto se usa solamente cuando se esta desarrollando
  .use( morgan('dev') )
  //Indicamos el directorio que sera publico para el cliente
  .use(publicDir)
  // Indicamos las rutas o url que va usar la aplicacion web
  .use(routes)

module.exports = app
