const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const UserRouter = require('./routes/UserRouter')
const TodoRouter = require('./routes/TodoRouter')
const db = require('./db')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

app.use('/users', UserRouter)
app.use('/todos', TodoRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
