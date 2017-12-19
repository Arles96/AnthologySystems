'use strict'

var mysql = require('mysql'),
  conf = require('./db-conf.json'),
  dbOptions = {
    host : conf.mysql.host,
    port : conf.mysql.port,
    user : conf.mysql.user,
    password : conf.mysql.pass,
    database : conf.mysql.db
  },
  myConn = mysql.createConnection(dbOptions)

myConn.connect((err){
  return (err) ? console.log(`Error al Conectarse a MySQL: ${err.stack}`) : console.log(`Conexion establecida con MySQL N°: ${myConn.threadID}`)
})

module.exports = myConn
