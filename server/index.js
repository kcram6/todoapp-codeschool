const express = require('express')
const app = express()
const todos = require('./routes/todos')



app.use('/todos', todos)

app.listen(3000)

