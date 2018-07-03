new Vue({
    el: '#app',
    data: {
        newTodo: '',
        editedTodo: null,
        todos: [
            {
                title: 'my todo',
                completed: false
            }
        ]
    },
    methods: {
        addTodo() {
            this.todos.unshift({
                title: this.newTodo,
                completed: false
            })
            this.newTodo = ''
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