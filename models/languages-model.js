/* Requiriendo la coneccion de MYSQL */

const conn = require('./connection.js'),
  LanguagesModel = ()=> {}
/*
Funcion para insertar todos los datos del registro en la tabla languages
@param Objeto tipo json que contendra: id(Puede ser Null), language, percentage, username
@param callback que contendra la logica de la solicitud de la base de datos
*/
LanguagesModel.insert = (data, cb)=> {
  conn.query('INSERT INTO languages SET ?', data, cb)
}

/*
Funcion para actualizar todos los datos de un registro
@param Objeto tipo json que contendra: id(Puede ser Null), language, percentage, username
@param callback que contendra la logica de la solicitud de la base de datos
*/
LanguagesModel.update = (data, cb)=> {
  conn.query('UPDATE languages SET WHERE id = ?', [data, data.id], cb)
}

/*
Funcion para obtener todos los registros de la tabla
@param callback que contendra la logica de la solicitud de la base de datos
*/
LanguagesModel.getAll = (cb)=> {
  conn.query('SELECT * FROM languages', cb)
}

/*
Funcion para obtener un registro de la tabla
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
LanguagesModel.getOne = (id, cb)=> {
  conn.query('SELECT * FROM languages WHERE id = ?', id, cb)
}

/*
Funcion para eliminar un registro de la tabla
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
LanguagesModel.delete = (id, cb)=> {
  conn.query('DELETE FROM languages WHERE id = ?', id, cb)
}

module.exports = LanguagesModel
