const express = require('express')
const app = express()
const todos = require('./routes/todos')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') //let everybody through
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type')
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT')

    next()
})
app.use(bodyParser.json()) //takes req bodies that resemble json data
app.use('/todos', todos)


mongoose.connect('mongodb://dev:mlabpass1@ds127771.mlab.com:27771/todo-app')
    .then(() => app.listen(3000))
    


