const express = require('express');
const initModels = require('./models/init.model');
const db = require('./utils/database');
const cors = require('cors');

const userRoutes = require('./routes/users.routes');
const todosRoutes = require('./routes/todos.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());
app.use(cors());

//Routes---------------
app.use('/api/v1', userRoutes);
app.use('/api/v1', todosRoutes);
app.use('/api/v1', authRoutes);

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

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`)
});