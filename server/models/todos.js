const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('TodoModel', todoSchema)