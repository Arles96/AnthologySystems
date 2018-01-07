'use strict'
// En este archivo se ejecuta el servidor web
var app = require('./app'),
  server = app.listen(app.get('port'), ()=>{
    console.log(`Iniciando Express en el puerto ${app.get('port')}`)
  })
