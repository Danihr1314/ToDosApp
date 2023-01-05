const express = require('express');
const initModels = require('./models/init.model');
const db = require('./utils/database');

const app = express();

const PORT = 8000;

db.authenticate()
  .then(() => console.log('Autenticacion exitosa'))
  .catch((error) => console.log(error));

initModels();
db.sync()
  .then(()=> console.log('Base de datos sincronizada'))
  .catch((error)=> console.log(error))

app.get('/', (req,res) => {
  res.status(200).json({message: "Bienvenido al servidor :D"})
})

app.listen(PORT, ()=>{
  console.log(`Servidor activo en el puerto ${PORT}`)
})