const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');

const users = [
  { username: 'Dani', email: 'dani@gmail.com', password: '1234' },
  { username: 'Juan', email: 'juan@gmail.com', password: '1234' },
  { username: 'Jose', email: 'jose@gmail.com', password: '1234' },
];

const todos = [
  { title: 'Tarea 1', description: 'Terminar base de datos', userId: 1 },
  { title: 'Node JS', description: 'Prepararse para no dormir', userId: 2 },
  { title: 'Tarea 1', description: 'Pasear el perro', userId: 3 },
  { title: 'Tarea 2', description: 'Nadar', userId: 1 },
];

//const categories = [];

//const todosCategories = [];

db.sync({ force: true })
  .then(() => {
    console.log('Insertando info...');
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));