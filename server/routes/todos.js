const express = require('express')
const router = express.Router()

router.get('/', controller.listTodos)
router.post('/', controller.createTodo)
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router

