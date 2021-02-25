const UserRouter = require('express').Router()
const userController = require('../controllers/UserController')

UserRouter.get('/view', userController.GetUsers)
UserRouter.post('/register', userController.CreateUser)

module.exports = UserRouter
