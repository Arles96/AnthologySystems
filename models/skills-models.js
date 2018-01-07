'use strict'

const conn = require('./connection.js'),
  SkillsModel = () =>{}

/*
  muestra todas las habilidades de un usuario
  @param el usuario y un callback
*/
SkillsModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM skills WHERE username = ?', username, cb)
}

/*
  Inserta los datos en la tabla Skills
  @param un objeto tipo json que deben tener en su interior lo siguiente:
   title, percentage y username. Tambien la callback
*/
SkillsModel.insert = (data, cb) => {
  conn.query('INSERT INTO skilss (id, title, percentage, username) VALUE  (NULL, ?, ?, ?)',
    [data.title, data.percentage, data.username], cb)
}

/*
  Actualiza los datos en la tabla Skills
  @param un objeto tipo json que deben tener en su interior lo siguiente:
  title, percentage y id .la callback
*/
SkillsModel.update = (data, cb) => {
  conn.query('UPDATE skills SET title = ?, percentage = ? WHERE id = ?', [data.title, data.percentage, data.id] , cb)
}

/*
  Obtiene el dato solicitado
  @param el id y la callback
*/

SkillsModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM skills WHERE id = ?', id, cb)
}

/*
  Elimina el dato
  @param el id y la callback
*/

SkillsModel.delete = (id, cb) => {
  conn.query('DELETE FROM skills WHERE id = ?', id , cb)
}

module.exports = SkillsModel
