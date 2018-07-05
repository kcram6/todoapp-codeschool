const TodoModel = require('../models/todos')

const controller = {
    listTodos: (req, res) => 
        TodoModel.find()
            .then(todos => res.json(todos)),
    createTodo: (req, res) =>
        TodoModel.create({
            title: req.body.title //should be provided by client
        })
            .then(todo => res.status(201).json(todo)),

    updateTodo: (res, req) =>
        TodoModel.findById(req.params.id)
            .then(todo => {
                todo.completed = req.body.completed
                todo.title = req.body.title
                return todo.save()
            })
            .then(todo => res.json(todo)),

    deleteTodo: (res, req) =>
        TodoModel.findByIdAndRemove(req.params.id)
            .then(() => res.status(204).send())


}

module.exports = controller