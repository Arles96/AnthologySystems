'use strict'

const conn = require('./connection'),
  SingleProyectModel = () => {}

SingleProyectModel.getAll = (username, cb)=> {
  conn.query('SELECT * FROM singleproyect WHERE username = ?', username, cb)
}

SingleProyectModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM singleproyect WHERE id = ?', id , cb)
}

SingleProyectModel.insert = (data, cb) => {
  conn.query('INSERT INTO singleproyect (id, title, description, img, MyDate, username, url)
    VALUE (NULL, ?, ?, ?, ?, ?, ?)', [data.title, data.description, data.img, data.MyDate,
    data.username, data.url] , cb)
}

SingleProyectModel.UPDATE = (data, cb) => {
  conn.query('UPDATE singleproyect SET title = ?, description = ?, img = ?, myDate = ?,
    url = ? WHERE id = ?', [data.title, data.description, data.img, data.myDate, data.url, data.id], cb)
}

SingleProyectModel.delete = (id, cb) => {
  conn.query('DELETE FROM singleproyect WHERE id = ?', id, cb)
}

module.exports = SingleProyectModel
