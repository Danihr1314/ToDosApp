const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');
const Categories = require('../models/categories.model');
const TodosCategories = require('../models/todos-categories.model');

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

const categories = [
  { name: 'personal' },
  { name: 'educacion' },
  { name: 'salud' },
  { name: 'trabajo' },
  { name: 'hogar' },
  { name: 'cocina' },
  { name: 'deporte' },
  { name: 'ocio' },
  { name: 'financiero' },
  { name: 'entretenimiento' },
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 }
];

db.sync({ force: true })
  .then(() => {
    console.log('Insertando info...');
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(()=>{
      categories.forEach((category)=> Categories.create(category));
    }, 250);
    setTimeout(()=>{
      todosCategories.forEach((tc)=> TodosCategories.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));