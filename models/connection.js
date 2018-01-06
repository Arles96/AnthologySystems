'use strict'

//Este archivo es la coneccion de la base de datos

//Requerimos del modulo mysql
const mysql = require('mysql'),
  // Requerimos los datos del archivo json para los datos correspondientes para
  // la coneccion de la base de datos
  conf = require('./db-conf.json'),
  // Estos datos son los que usa el modulo de mysql para la coneccion
  dbOption = {
    host : conf.mysql.host,
    port : conf.mysql.port,
    user : conf.mysql.user,
    password : conf.mysql.password,
    database : conf.mysql.db
  },
  //Creamos la coneccion
  myConn = mysql.createConnection(dbOption)

// Nos conectamos con la base de datos y tiene de parametro una funcion
// La funcion tiene como parametro un err
myConn.connect( (err)=>{
  if (err) {
    console.log(`Ocurrio el siguiente error: ${err}`)
  }
  else {
    console.log(`Conexion establecida con MySQL N°: ${myConn.threadId}`)
  }
} )

module.exports = myConn
