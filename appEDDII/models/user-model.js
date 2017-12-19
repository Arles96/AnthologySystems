'use strict'

var conn = require('./connection.js'),
  UserModel = () =>{}

UserModel.getAll = (cb) => conn.query('SELECT * FROM usuarios', cb)

UserModel.getOne = (id, cb) => conn.query('SELECT * FROM usuarios WHERE usuario_id = ?', id, cb)

UserModel.insert = (data, cb) => conn.query('INSERT INTO usuarios SET ?', data, cb)

UserModel.update = (data, cb) => conn.query('UPDATE usuarios SET ? WHERE usuario_id = ?', [data, data.usuario_id], cb)

UserModel.delete = (id, cb) => conn.query('DELETE FROM usuarios WHERE usuario_id = ?', id, cb)

module.exports = UserModel
