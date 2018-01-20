'use strict'

const conn = require('./connection.js'),
  SkillsModel = () =>{}

/*
muestra todas las habilidades de un usuario
@param el usuario del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
SkillsModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM skills WHERE username = ?', username, cb)
}

/*
Inserta todos los datos del registro en la tabla Skills
@param Un objeto tipo json que deben tener en su interior lo siguiente:
       title, percentage, username y id
@param callback que contendra la logica de la solicitud de la base de datos
*/
SkillsModel.insert = (data, cb) => {
  conn.query('INSERT INTO skilss (id, title, percentage, username) VALUE  (NULL, ?, ?, ?)',
    [data.title, data.percentage, data.username], cb)
}

/*
Actualiza todos los datos del registro excepto el id
@param un objeto tipo json que deben tener en su interior lo siguiente:
       title, percentage y id(Puede ser NULL)
@param callback que contendra la logica de la solicitud de la base de datos
*/
SkillsModel.update = (data, cb) => {
  conn.query('UPDATE skills SET title = ?, percentage = ? WHERE id = ?', [data.title, data.percentage, data.id] , cb)
}

/*
Obtiene el registro solicitado
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/

SkillsModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM skills WHERE id = ?', id, cb)
}

/*
Elimina un registro
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/

SkillsModel.delete = (id, cb) => {
  conn.query('DELETE FROM skills WHERE id = ?', id , cb)
}

module.exports = SkillsModel
