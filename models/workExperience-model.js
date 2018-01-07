'use strict'

const conn = query('./connection.js'),
  WorkExperienceModel = ()=>{}

WorkExperienceModel.getAll = (username, cb) => {
  conn.query('SELECT * FROM workexperience WHERE username = ?', username, cb)
}

WorkExperienceModel.getOne = (id, cb) => {
  conn.query('SELECT * FROM workexperience WHERE id = ?', id , cb)
}

WorkExperienceModel.insert = (data, cb)=> {
  conn.query('INSERT INTO workexperience (id, company, ocupation, MyDate, username) VALUE (NULL, ?, ?, ?, ?)',
    [data.company, data.ocupation, data.MyDate, data.username], cb)
}

WorkExperienceModel.update = (data, cb) => {
  conn.query('UPDATE workexperience SET company = ?, ocupation = ?, MyDate = ? WHERE id = ?',
    [data.company, data.ocupation, data.MyDate, data.id], cb)
}

WorkExperienceModel.delete = (id, cb) => {
  conn.query('DELETE FROM workexperience WHERE id = ?', id, cb)
}

module.exports = WorkExperienceModel
