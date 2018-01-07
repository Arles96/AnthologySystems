'use strict'

const conn = require('./connection.js'),
  SkillsModel = () =>{}

SkillsModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM skills WHERE username = ?', username, cb)
}

SkillsModel.insert = (data, cb) => {
  conn.query('INSERT INTO skilss (id, title, percentage, username) VALUE  (NULL, ?, ?, ?)',
    [data.title, data.percentage, data.username], cb)
}

SkillsModel.update = (data, cb) => {
  conn.query('UPDATE skills SET title = ?, percentage = ? WHERE id = ?', [data.title, data.percentage, data.id] , cb)
}

SkillsModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM skills WHERE id = ?', id, cb)
}

SkillsModel.delete = (id, cb) => {
  conn.query('DELETE FROM skills WHERE id = ?', id , cb)
}

module.exports = SkillsModel
