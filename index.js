const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const UserRouter = require('./routes/UserRouter')
const TodoRouter = require('./routes/TodoRouter')
const db = require('./db')
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/users', UserRouter)
app.use('/todos', TodoRouter)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
