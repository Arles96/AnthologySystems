'use strict'

//Requerimos el archivo de la coneccion de la base de datos
const conn = require('./connection.js'),
//Estos son los prototipos de JavaScript
  UserModel = () =>{}

/*TODO: Todas estas funciones deben tener de parametro un callback
  donde llevara toda la logica de lso datos que mostraremos en la base de datos
*/

/*
Obtiene todos los registros de la tabla users
@param callback que contendra la logica de la solicitud de la base de datos
*/
UserModel.getAll = (cb) =>{
  //Con esta funcion query nos permite ejecutar codigo sql
  conn.query('SELECT * FROM users', cb)
}

/*
Obtiene un registro de la tabla
@param username del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
UserModel.getOne = (username, cb) => {
  /* TODO:  Usar siempre las almohadillas para evitar la inyeccion sql*/
  conn.query('SELECT * FROM users WHERE username = ?', username, cb)
}

/*
Inserta todos los datos del registro en la tabla users
@param Objeto tipo json que contendra: username(No puede ser Null), password, image, completeName, email, career
@param callback que contendra la logica de la solicitud de la base de datos
*/
UserModel.insert = (data, cb) => {
  conn.query('INSERT INTO users SET ?', data, cb)
}

/*
Actualiza todos los datos del registro excepto el username
@param Objeto tipo json que contendra: username(No puede ser Null), password, image, completeName, email, career
@param callback que contendra la logica de la solicitud de la base de datos
*/
UserModel.update = (data, cb) => {
  conn.query('UPDATE users SET ? WHERE username = ?', [data, data.username], cb)
}

/*
Elimina un registro de la tabla
@param username del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
UserModel.delete = (username, cb) => {
  conn.query('DELETE FROM users WHERE username = ?', username, cb)
}

module.exports = UserModel
