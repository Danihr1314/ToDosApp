const express = require('express');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const db = require('./utils/database');

const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => console.log('Autenticacion exitosa'))
  .catch((error) => console.log(error));

initModels();
db.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor :D" })
})

//endpoints
//get all users

app.get('/users', async (req, res) => {
  try {
    const result = await Users.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
})

//user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//user by username
app.get('/users/username/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//create user
app.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

//update password
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = Users.update(field, {
      where: { id }
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
})

//delete user
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id }
    });
    res.status(200).json(resutl);
  } catch (error) {
    res.status(400).json(error.message);
  }
})



app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`)
});

