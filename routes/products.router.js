//traemos el modulo de express
const express = require('express');
const faker  = require('faker');

//se crea un routing propio o especifico
const router = express.Router();


router.get('/', (req, res) => {
  const productos = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    productos.push({
      nombre: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }

  res.json(productos);
});


router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
})

//metodo post
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

//metodo patch: actualiza parcialmente
//no es necesario enviar todos los atributos, recibe el objeto de forma parcial
router.patch('/:id', (req, res) => {
  //const { id }  = req.params;
  //const body    = req.body;
  const { body, params: { id }} = req;
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

//metodo delete: borra un registro
router.delete('/:id', (req, res) => {
  const { id }  = req.params;
  res.json({
    message: 'registro eliminado',
    id
  })
})

module.exports = router;
