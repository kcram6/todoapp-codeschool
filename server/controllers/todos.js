const Todo = require('../models/todos')

const controller = {
	listTodos: (req, res) =>
		Todo.find()
			.then(todos => res.json(todos)),
	createTodo: (req, res) =>
		Todo.create({
			title: req.body.title
		})
			.then(todo => res.status(201).json(todo)),
	updateTodo: (req, res) =>
		Todo.findById(req.params.id)
			.then(todo => {
				todo.completed = req.body.completed
				todo.title = req.body.title
				return todo.save()
			})
			.then(todo => res.json(todo)),
	deleteTodo: (req, res) =>
		Todo.findByIdAndRemove(req.params.id)
			.then(() => res.status(204).send())
}

module.exports = controller