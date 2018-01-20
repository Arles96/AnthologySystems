/* Requiriendo la conección de MYSQL */

const conn = require('./connection.js'),
  GroupProyectModel = ()=>{}

/*
Funcion para ingresar todos los datos de un registro en la tabla groupProyect
@param Objeto tipo json que contendra: title, description, img, MyDate, url
@param callback que contendra la logica de la solicitud de la base de datos
*/
GroupProyectModel.insert = (data, cb) => {
  conn.query('INSERT INTO groupproyect SET ?', data, cb)
}

/*
Funcion para actualizar todos los datos de un registro
@param Objeto tipo json que contendra: title, description, img, MyDate, url
callback que contendra la logica de la solicitud de la base de datos
*/
GroupProyectModel.update = (data, cb)=> {
  conn.query('UPDATE groupproyect SET ? WHERE title = ?',[data, data.title], cb)
}

/*
Funcion para obtener todos los registros de la tabla
@param callback que contendra la logica de la solicitud de la base de datos
*/
GroupProyectModel.getAll = (cb)=> {
  conn.query('SELECT * FROM groupproyect', cb)
}

/*
Funcion para obtener un registro de la tabla
@param title del proyecto
@param callback que contendra la logica de la solicitud de la base de datos
*/
GroupProyectModel.getOne(title, cb)=> {
  conn.query('SELECT * FROM groupproyect WHERE title = ?', title, cb)
}

/*
Funcion para eliminar un registro de la tabla
@param title del proyecto
@param callback que contendra la logica de la solicitud de la base de datos
*/
GroupProyectModel.delete = (title, cb)=> {
  conn.query('DELETE FROM groupproyect WHERE title = ?', title, cb)
}

module.exports = GroupProyectModel
