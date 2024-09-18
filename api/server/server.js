const express = require('express');
const cors = require('cors');
const { connectMongo } = require('../db/connect');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar JSON

/* app.get('/', (req, res) => {
    res.send('Servidor Express funcionando correctamente');
  }); */
// Ruta para obtener todos los usuarios
app.get('/', async (req, res) => {
  try {
    const collection = await connectMongo();
    console.log(collection);
      // Conectar a la base de datos
    const usuarios = await collection.find().toArray();  // Obtener todos los documentos
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error en el servidor');
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
