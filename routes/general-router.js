'use strict'

//Este archivo es donde estaran las rutas o url que la aplicacion usara
const express = require('express'),
  router = express.Router()

router
  // Esta funcion tiene de parametro la url y una funcion que llevara la logica
  // de que datos llevera en una vista o plantilla (pagina web)
  .get('/', (req, res)=> {
    res.render('index')
  })

//Lo exportamos para poderlo usar en el archivo app.js
module.exports = router
