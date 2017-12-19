'use strict'

var express = require('express'),
  router = express.Router()

router
  .get('/', (req, res, next)=>{
    let locals = {
      title : "Proyectos de fSociety",
      description : "Somo estudiantes de Unitec con ganas de trabajar"
    }
    res.render('index', locals)
  })

module.exports = router
