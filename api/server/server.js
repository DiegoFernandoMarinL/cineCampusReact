const express = require('express');
const cors = require('cors');
const { connectMongo } = require('../db/connect');
const { ObjectId } = require('mongodb');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para manejar JSON
//ruta para traer los asientos ocupados
app.get('/seatOn/:id', async (req, res) => {
  const id = req.params.id;  
  try {
    const db = await connectMongo();
    const collection = db.collection('funcion');
    const val = await collection.aggregate(
        [
          {
            $unwind: "$asiento"
          },
          {
            $match: {
              "_id": new ObjectId({id}),
              "asiento.estado": "ocupado"
            }
          },
          {
            $group: {
              _id: "$_id",
              asientos_ocupados: { $push: "$asiento.codigo" }
            }
          }
        ]
    ).toArray();    
    res.status(200).json(val);
  } catch (error) {
    console.error('Error al obtener los asientos de la funcion:', error);
    res.status(500).send('Error en el servidor');  
  }
});
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
          "_id": 1,  /* Incluimos el _id de la función */
          "pelicula": { "$arrayElemAt": ["$pelicula", 0] }  /* Obtener el primer (y único) documento de 'pelicula' */
        }
      },
      {
        "$group": {
          "_id": "$_id",  /* Agrupamos por el _id de la función */
          "peliculaData": { "$first": "$pelicula" },  /* Guardamos la información completa de 'pelicula' */
          "funcionId": { "$first": "$_id" }  /* Guardamos el _id de la función */
        }
      },
      {
        "$project": {
          "_id": "$funcionId",  /* Proyectamos el _id de la función */
          "peliculaId": "$peliculaData._id",  /* Proyectamos el _id de la película */
          "titulo": "$peliculaData.titulo",
          "sinopsis": "$peliculaData.sinopsis",
          "caratula": "$peliculaData.caratula",
          "genero": "$peliculaData.genero"
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
      const db = await connectMongo();
      const collection = db.collection('cliente');
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
      const db = await connectMongo();
      const collection = db.collection('cliente');
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
//Ruta para validar el correo de un usuario
app.get('/validar-login', async (req, res) => {
  const correo = req.query.email;
  const pass = req.query.pass;
  try {
      const db = await connectMongo();
      const collection = db.collection('cliente');
      const cliente = await collection.findOne({ email: correo , pass: pass});

      if (cliente) {
        res.json({ valido: true, nombre: cliente.nombre, apellido: cliente.apellido });
      } else {
        res.json({ valido: false, message: 'El correo o contraseña no son validos' });
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
    const db = await connectMongo();
    const collection = db.collection('cliente');
      // Conectar a la base de datos
    const usuarios = await collection.insertOne(nuevoUsuario);
    /* const usuarioDB = await collection.createUser() */
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Error al insertar usuario:', error);
    res.status(500).send('Error en el servidor');
  }
});
// Ruta para comprar un ticket
app.post('/confirmSeats', async (req, res) => {
  const { id_funcion, selectedSeats } = req.body;
  console.log(id_funcion);
  
  // Validación de entrada
  if (!id_funcion || !Array.isArray(selectedSeats) || selectedSeats.length === 0) {
    return res.status(400).json({ error: 'Datos inválidos o faltantes' });
  }

  try {
    const db = await connectMongo();
    const collection = db.collection('funcion');

    // Actualización de los asientos seleccionados, cambiando el estado a "ocupado"
    const result = await collection.updateOne(
      { _id: new ObjectId(id_funcion), "asiento.codigo": { $in: selectedSeats } },  // Buscar la función y los asientos
      { $set: { "asiento.$[elem].estado": "ocupado" } },  // Cambia el estado a "ocupado"
      { arrayFilters: [{ "elem.codigo": { $in: selectedSeats } }] }  // Filtrar los asientos por código
    );

    // Si no se encuentra la función
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Función o asientos no encontrados' });
    }

    res.json({ message: 'Asientos actualizados exitosamente', selectedSeats });
  } catch (error) {
    console.error('Error al actualizar los asientos:', error);
    res.status(500).json({ error: 'Error del servidor al actualizar los asientos' });
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
