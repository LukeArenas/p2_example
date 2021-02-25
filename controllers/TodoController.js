const { Todo } = require('../models')

const CreateTodo = async (req, res) => {
  try {
    const todo = new Todo({ ...req.body, user_id: req.params.user_id })
    todo.save()
    res.send(Todo)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const GetTodos = async (req, res) => {
  try {
    const Todos = await Todo.find({ user_id: req.params.user_id })
    res.send(Todos)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

const DeleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.todo_id })
    res.send({ msg: 'Todo Deleted', payload: req.params.todo_id, status: 'Ok' })
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}

module.exports = {
  CreateTodo,
  GetTodos,
  DeleteTodo
}
