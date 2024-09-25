const express = require('express');
const cors = require('cors');
const { connectMongo } = require('../db/connect');
const { ObjectId } = require('mongodb');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar JSON

/* app.get('/', (req, res) => {
    res.send('Servidor Express funcionando correctamente');
  }); */
// Ruta para obtener todos los usuarios
app.get('/movie/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const db = await connectMongo();
    const collection = db.collection('pelicula');
    // Conectar a la base de datos
    const movie = await collection.find({_id: new ObjectId({id})}).toArray();
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error al obtener los datos de la pelicula:', error);
    res.status(500).send('Error en el servidor');
  }
});
app.get('/movie', async (req, res) => {
  try {
    const db = await connectMongo();
    const collection = db.collection('funcion');
    // Conectar a la base de datos
    const movies = await collection.aggregate([
      {
        "$lookup": {
          "from": "pelicula",
          "localField": "id_pelicula",
          "foreignField": "_id",
          "as": "pelicula"
        }
      },
      {
        "$project": {
          "_id": 0,
          "pelicula": { "$arrayElemAt": ["$pelicula", 0] }  /* Obtener todo el documento de 'pelicula' */
        }
      },
      {
        "$group": {
          "_id": "$pelicula.titulo",  /* Agrupamos por el título */
          "peliculaData": { "$first": "$pelicula" }  /* Guardamos la información completa de 'pelicula' */
        }
      },
      {
        "$project": {
          "_id": "$peliculaData._id",
          "titulo": "$peliculaData.titulo",
          "sinopsis": "$peliculaData.sinopsis",  /* Por ejemplo, traer el director */
          "caratula": "$peliculaData.caratula",  /* Traer el año de la película */
          "genero": "$peliculaData.genero"  /* Traer el género de la película */
        }
      },
      {
        "$sort": {
          "titulo": 1  /* Orden ascendente por el título */
        }
      }           
    ]).toArray();  // Obtener todos los documentos
    res.status(200).json(movies);
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
    /* const usuarioDB = await collection.createUser() */
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
