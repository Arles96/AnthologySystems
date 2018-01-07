'use strict'

const conn = query('./connection.js'),
  WorkExperienceModel = ()=>{}

/*
  Se obtiene toda la experiencia laboral de usuario
  @param el usuario y la callback
*/
WorkExperienceModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM workexperience WHERE username = ?', username, cb)
}

/*
  Se obtiene el dato solicitado
  @param el id y la callback
*/
WorkExperienceModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM workexperience WHERE id = ?', id , cb)
}

/*
  Insertar los datos en la tabla workexperience
  @param Un objeto tipo json con lo siguiente: company, ocupation, MyDate, y username.
  Tambien tiene una callback
*/
WorkExperienceModel.insert = (data, cb)=> {
  conn.query('INSERT INTO workexperience (id, company, ocupation, MyDate, username) VALUE (NULL, ?, ?, ?, ?)',
    [data.company, data.ocupation, data.MyDate, data.username], cb)
}

/*
  Actualiza los datos del registro
  @param Un objeto tipo json que con lo siguiente: company, ocupation, MyDate y id.
  Tambien tiene como parametro una callback
*/
WorkExperienceModel.update = (data, cb) => {
  conn.query('UPDATE workexperience SET company = ?, ocupation = ?, MyDate = ? WHERE id = ?',
    [data.company, data.ocupation, data.MyDate, data.id], cb)
}

/*
  Elimina el registro de la tabla
  @param el id y la callback
*/
WorkExperienceModel.delete = (id, cb) => {
  conn.query('DELETE FROM workexperience WHERE id = ?', id, cb)
}

module.exports = WorkExperienceModel
