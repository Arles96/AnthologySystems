'use strict'

//Requerimos el archivo de la coneccion de la base de datos
const conn = require('./connection.js'),
//Estos son los prototipos de JavaScript
  UserModel = () =>{}

/*TODO: Todas estas funciones deben tener de parametro un callback
  donde llevara toda la logica de lso datos que mostraremos en la base de datos
*/

//Esta funcion entraga todos los usuarios de la tabla
UserModel.getAll = (cb) =>{
  //Con esta funcion query nos permite ejecutar codigo sql
  conn.query('SELECT * FROM users', cb)
}

UserModel.getOne = (username, cb) => {
  /* TODO:  Usar siempre las almohadillas para evitar la inyeccion sql*/
  conn.query('SELECT * FROM users WHERE username = ?', username, cb)
}

UserModel.insert = (data, cb) => {
  conn.query('INSERT INTO users SET ?', data, cb)
}

UserModel.update = (data, cb) => {
  conn.query('UPDATE users SET ? username = ?', [data, data.username], cb)
}

UserModel.delete = (username, cb) => {
  conn.query('DELETE FROM users WHERE username = ?', username, cb)
}

module.exports = UserModel
