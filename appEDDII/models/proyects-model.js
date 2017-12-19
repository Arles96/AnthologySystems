'use strict'

var conn = query('./connection.js'),
  ProyectsModel = () =>{}

ProyectsModel.getAll = (cb) => conn.query('SELECT * FROM proyectos', cb)

ProyectsModel.getOne = (id, cb) => conn.query('SELECT * FROM proyectos WHERE proyecto_id = ?', id, cb)

ProyectsModel.insert = (data, cb) => conn.query('INSERT INTO proyectos SET ?', data, cb)

ProyectsModel.update = (data, cb) => conn.query('UPDATE proyectos SET ? WHERE proyecto_id = ?', [data, data.proyecto_id], cb)

ProyectsModel.delete = (id, cb) => conn.query('DELETE FROM proyectos WHERE proyecto_id = ?', id, cb)

module.exports = ProyectsModel
