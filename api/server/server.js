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
      // Conectar a la base de datos
    const usuarios = await collection.find().toArray();  // Obtener todos los documentos
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error en el servidor');
  }
});
//Ruta para validar el nombre de un usuario
app.get('/validar-nombre', async (req, res) => {
  const nombre = req.query.nombre;

  try {
      const collection = await connectMongo();
      const cliente = await collection.findOne({ nombre: nombre });

      if (cliente) {
          res.json({ valido: false, mensaje: 'El nombre ya existe en la base de datos' });
      } else {
          res.json({ valido: true });
      }
  } catch (error) {
      console.error('Error al consultar la base de datos:', error);
      res.status(500).json({ valido: false, mensaje: 'Error en el servidor' });
  }
});
//Ruta para validar el correo de un usuario
app.get('/validar-correo', async (req, res) => {
  const correo = req.query.email;

  try {
      const collection = await connectMongo();
      const cliente = await collection.findOne({ email: correo });

      if (cliente) {
          res.json({ valido: false, mensaje: 'El correo ya existe en la base de datos' });
      } else {
          res.json({ valido: true });
      }
  } catch (error) {
      console.error('Error al consultar la base de datos:', error);
      res.status(500).json({ valido: false, mensaje: 'Error en el servidor' });
  }
});
// Ruta para crear un usuario
app.post('/', async (req, res) => {
  const nuevoUsuario = req.body
  console.log(nuevoUsuario)
  try {
    const collection = await connectMongo();
      // Conectar a la base de datos
    const usuarios = await collection.insertOne(nuevoUsuario);
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al insertar usuario:', error);
    res.status(500).send('Error en el servidor');
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
