const { Router } = require('express');

const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos.controller');

const router = Router();

router.get('/todos', getAllTodos);

router.get('/todos/:id', getTodoById);

router.post('/todos', createTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

module.exports = router;