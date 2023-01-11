const { Router } = require('express');
const { getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserTasks
} = require('../controllers/users.controller');

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/tasks', getUserTasks);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;