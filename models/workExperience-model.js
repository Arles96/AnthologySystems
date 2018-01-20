'use strict'

const conn = query('./connection.js'),
  WorkExperienceModel = ()=>{}

/*
  Se obtiene toda la experiencia laboral de usuario
  @param username del registro
  @param callback que contendra la logica de la solicitud de la base de datos
*/
WorkExperienceModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM workexperience WHERE username = ?', username, cb)
}

/*
  Se obtiene el dato solicitado
  @param id del registro
  @param callback que contendra la logica de la solicitud de la base de datos
*/
WorkExperienceModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM workexperience WHERE id = ?', id , cb)
}

/*
  Insertar los datos en la tabla workexperience
  @param Un objeto tipo json con lo siguiente: id(Pude ser Null), company, ocupation, MyDate, y username.
  @param callback que contendra la logica de la solicitud de la base de datos
*/
WorkExperienceModel.insert = (data, cb)=> {
  conn.query('INSERT INTO workexperience (id, company, ocupation, MyDate, username) VALUE (NULL, ?, ?, ?, ?)',
    [data.company, data.ocupation, data.MyDate, data.username], cb)
}

/*
  Actualiza los datos del registro excepto el id
  @param Un objeto tipo json que con lo siguiente: company, ocupation, MyDate y id.
  @param callback que contendra la logica de la solicitud de la base de datos
*/
WorkExperienceModel.update = (data, cb) => {
  conn.query('UPDATE workexperience SET company = ?, ocupation = ?, MyDate = ? WHERE id = ?',
    [data.company, data.ocupation, data.MyDate, data.id], cb)
}

/*
  Elimina un registro de la tabla
  @param id del registro
  @param callback que contendra la logica de la solicitud de la base de datos
*/
WorkExperienceModel.delete = (id, cb) => {
  conn.query('DELETE FROM workexperience WHERE id = ?', id, cb)
}

module.exports = WorkExperienceModel
