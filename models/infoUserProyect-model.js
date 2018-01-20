/* Requiriendo la coneccion de MYSQL*/

const conn = require('./connection.js'),
  InfoUserProyectModel = ()=> {}

/*
Funcion para insertar todos los datos de un registro en la tabla infouserproyect
@param Objeto tipo json que contendra: id(Puede ser NULL), titleProyect, username
@param callback que contendra la logica de la solicitud de la base de datos
*/
InfoUserProyectModel.insert = (data, cb)=> {
  conn.query('INSERT INTO infouserproyect SET ?', data, cb)
}

/*
Funcion para actualizar todos los datos de un registro
@param Objeto tipo json que contendra: id(Puede ser NULL), titleProyect, username
@param callback que contendra la logica de la solicitud de la base de datos
*/
InfoUserProyectModel.update = (data, cb)=> {
  conn.query('UPDATE infouserproyect SET ? WHERE id = ?', [data, data.id], cb)
}

/*
Funcion para obtener todos los registros de la tabla
@param callback que contendra la logica de la solicitud de la base de datos
*/
InfoUserProyectModel.getAll = (cb) => {
  conn.query('SELECT * FROM infouserproyect', cb)
}

/*
Funcion para obtener un registro de la tabla
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
InfoUserProyectModel.getOne = (id, cb)=> {
  conn.query('SELECT * FROM infouserproyect WHERE id = ?', id, cb)
}

/*
Funcion para eliminar un registro de la tabla
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
InfoUserProyectModel.delete = (id, cb)=> {
  conn.query('DELETE FROM infouserproyect WHERE id = ?', id, cb)
}


module.exports = InfoUserProyectModel
