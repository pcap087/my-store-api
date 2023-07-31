//traemos el modulo de express
const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

//creamos una aplicacion
const app = express();

//especificamos el puerto en donde va a correr la app
const port = 9090;

//se crea el middleware
app.use(express.json());

//definimos la ruta
// tiene un callback que va a ejecutar la respuesta que enviemos al cliente.
//el callback siempre tiene dos parámetros "req" y "res".
app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


// app.get('/nacionalidad', (req, res) => {
//   res.json(
//     [
//       {name: 'Pablo A.', nacionalidad: 'Paraguaya'},
//       {name: 'Carlos S.', nacionalidad: 'Uruguaya'},
//       {name: 'Rafael O.', nacionalidad: 'Argentina'}
//     ]);
// });

// app.get('/nacionalidad/:id', (req, resul) => {
//   const { id } = req.params;

//   resul.json({
//     id,
//     name: 'Pablo A.',
//     nacionalidad: 'Paraguaya'
//   });
// });

// //capturar los parametros de la url y los estamos capturando
// app.get('/nacionalidad/:nacionalidadId/nombres/:nombreId', (req, res) => {
//   const { nacionalidadId, nombreId } = req.params;

//   res.json({
//     nacionalidadId,
//     nombreId
//   });
// });

// app.get('/users', (req, res) => {
//   const {limit, offset} = req.query;
//   if(limit && offset){
//     res.json({
//       limit,
//       offset
//     })
//   }else {
//     res.send('No hay parametros');
//   }
// })


app.listen(port, () => {
  console.log('Mi puerto ' + port);
});


routerApi(app);
