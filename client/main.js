new Vue({
    el: '#app',
    data: {
        newTodo: '',
        editedTodo: null,
        todos: [],

    },
    created() {
        fetch('http://localhost:3000/todos')
            .then(res => res.json())
            .then(todos => this.todos = todos)
    },
    methods: {
        addTodo() {
            fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    title: this.newTodo,
                })
            })
                .then(res => res.json())
                .then(todo => {
                    this.todos.unshift(todo)
                    this.newTodo = ''
                })
        },
        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        editTodo(todo){
            this.editedTodo = todo
            this.cachedTitle = todo.title

        },
        saveEditedTodo(todo) {
            todo.title = this.editedTodo.title
            this.editedTodo = null
        },
        cancelEdit(todo) {
            this.editedTodo = null
            todo.title = this.cachedTitle
        }
    },
    directives: {
        'todo-focus'(el, binding) {
            if (binding.value) {
                el.focus()
            }
        }
    }
})