'use strict'

const conn = require('./connection'),
  SingleProyectModel = () => {}

/*
Muestra todos los proyectos individuales del usuario
@param username del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
SingleProyectModel.getAll = (username, cb)=> {
  conn.query('SELECT * FROM singleproyect WHERE username = ?', username, cb)
}

/*
Muestra el registro solicitado
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
SingleProyectModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM singleproyect WHERE id = ?', id , cb)
}

/*
Inserta los datos correspondientes para el registro
@param Un objeto tipo json que contiene lo siguiente: title, description,
       img, MyDate, username y url
@param callback que contendra la logica de la solicitud de la base de datos
*/
SingleProyectModel.insert = (data, cb) => {
  conn.query('INSERT INTO singleproyect (id, title, description, img, MyDate, username, url)
    VALUE (NULL, ?, ?, ?, ?, ?, ?)', [data.title, data.description, data.img, data.MyDate,
    data.username, data.url] , cb)
}

/*
Actualiza los datos del registro
@param Un objeto tipo json que contiene lo siguiente: title, description, img, myDate
       url y id(Puede ser NUll)
@param callback que contendra la logica de la solicitud de la base de datos
*/
SingleProyectModel.update = (data, cb) => {
  conn.query('UPDATE singleproyect SET title = ?, description = ?, img = ?, MyDate = ?,
    url = ? WHERE id = ?', [data.title, data.description, data.img, data.MyDate, data.url, data.id], cb)
}

/*
Eliminar el registro solicitado
@param id del registro
@param callback que contendra la logica de la solicitud de la base de datos
*/
SingleProyectModel.delete = (id, cb) => {
  conn.query('DELETE FROM singleproyect WHERE id = ?', id, cb)
}

module.exports = SingleProyectModel
