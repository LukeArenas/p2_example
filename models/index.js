const { model } = require('mongoose')
const TodoSchema = require('./Todo')
const UserSchema = require('./User')

const User = model('users', UserSchema)
const Todo = model('todos', TodoSchema)

module.exports = {
  User,
  Todo
}
