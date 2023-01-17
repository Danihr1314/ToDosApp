const { Router } = require("express");

const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoCategories,
} = require("../controllers/todos.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);

router.get("/todos/:id", authMiddleware, getTodoById);

router.get("/todos/:id/categories", authMiddleware, getTodoCategories);

router.post("/todos", createTodo);

router.put("/todos/:id", updateTodo);

router.delete("/todos/:id", deleteTodo);

module.exports = router;
