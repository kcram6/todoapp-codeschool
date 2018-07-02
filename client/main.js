new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos:[]
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
        }
    }
})