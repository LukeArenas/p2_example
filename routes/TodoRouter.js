const TodoRouter = require('express').Router()
const todoController = require('../controllers/TodoController')

TodoRouter.get('/view/:user_id', todoController.GetTodos)
TodoRouter.post('/add/:user_id', todoController.CreateTodo)
TodoRouter.delete('/remove/:todo_id', todoController.DeleteTodo)

module.exports = TodoRouter
