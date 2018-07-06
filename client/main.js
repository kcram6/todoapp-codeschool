new Vue({
	el: '#app',
	data: {
		newTodo: '',
		editedTodo: null,
		todos: []
	},
	created() {
		fetch('http://localhost:3000/todos')
			.then(res => res.json())
			.then(todos => this.todos = todos)
	},
	computed: {
		remaining() {
			let remainder = 0
			for ( const todo of this.todos ) {
				if (!todo.completed) {
					remainder ++
				}
			} return remainder
		}
	},
	methods: {
		addTodo() {
			fetch('http://localhost:3000/todos', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({ title: this.newTodo })
			})
				.then(res => res.json())
				.then(todo => {
					this.todos.push(todo)
					this.newTodo = ''
				})

		},
		deleteTodo(todo) {
			fetch(`http://localhost:3000/todos/${todo._id}`, {
				method: 'DELETE'
			})
				.then(() => this.todos.splice(this.todos.indexOf(todo), 1))
		},
		editTodo(todo) {
			this.editedTodo = todo
			this.cachedTitle = todo.title
		},
		checkTodo(todo) {
			fetch(`http://localhost:3000/todos/${todo._id}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					title: todo.title,
					completed: !todo.completed
				})
			})
				.then(() => todo.completed = !todo.completed)
		},
		doneEdit(todo) {
			fetch(`http://localhost:3000/todos/${todo._id}`, {
				method: 'PUT',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					title: todo.title,
					completed: todo.completed
				})
			})
				.then(() => this.editedTodo = null)
		},
		cancel(todo) {
			this.editedTodo = null
			todo.title = this.cachedTitle
		},
	},
	directives: {
		'todo-focus'(el, binding) {
			if (binding.value)
				el.focus()
		}
	}
})
