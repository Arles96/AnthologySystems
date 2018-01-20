/* Requiriendo la conección de MYSQL */

const conn = require('./connection.js'),
  EducationModel = ()=> {}

/*
Funcion para insertar los datos en la tabla de education
@param Objecto tipo json que contendra : id(Puede ser Null), institute,
       description, certificate, MyDate, username
@param callback que contendra la logica de la solicitud de la base de datos
*/
EducationModel.insert = (data, cb)=>{
  conn.query('INSERT INTO education SET ?', cb)
}

/*
Funcion para actualizar todos los datos de la tabla
@param Objecto tipo json que contendra : id(Puede ser Null), institute,
       description, certificate, MyDate, username
@param callback callback que contendra la logica de la solicitud de la base de datos
*/
EducationModel.update = (data, cb)=> {
  conn.query('UPDATE education SET ? WHERE id = ?', [data, data.id], cb)
}

/*
Funcion para obtener todos los resgistros de la tabla
@param callback que contendra la logica de la solicitud de la base de datos
*/
EducationModel.getAll(cb) => {
  conn.query('SELECT * FROM education', cb)
}

/*
Funcion para obtener un resgistro de la tabla
@param id
@param callback que contendra la logica de la solicitud de la base de datos
*/
EducationModel.getOne(id, cb)=> {
  conn.query('SELECT * FROM education WHERE id = ?', id, cb)
}

/*
Funcion para eliminar un registro de la tabla
@param id
@param callback que contendra la logica de la solicitud de la base de datos
*/
EducationModel.delete = (id, cb)=> {
  conn.query('DELETE FROM education WHERE id = ?', id, cb)
}

module.exports = EducationModel
