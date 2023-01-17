const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserTasks,
} = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id", authMiddleware, getUserById);

router.get("/users/:id/tasks", authMiddleware, getUserTasks);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
