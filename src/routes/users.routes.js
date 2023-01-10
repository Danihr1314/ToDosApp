const { Router } = require('express');
const { getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controller');

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users', updateUser);

router.delete('/users', deleteUser);

module.exports = router;