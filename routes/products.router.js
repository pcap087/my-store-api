//traemos el modulo de express
const express = require('express');

//importamos el servicio
const ProductsService = require('./../services/products.services');

//se crea un routing propio o especifico
const router = express.Router();

//se instancia el servicio
const services = new ProductsService(); 

router.get('/', async(req, res) => {
    //obtenemos directamamente del servicio
    const products = await services.find(); 
    res.json(products);
});


//metodo get con codigo de estados
router.get('/:id', async(req, res, next) => {
   try {
        const { id } = req.params;
        const product = await services.findOne(id);
        res.json(product);
   } catch (error) {
        next(error);
   }
})

//metodo post
router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await services.create(body);
  res.json(newProduct);
})

//metodo patch: actualiza parcialmente
//no es necesario enviar todos los atributos, recibe el objeto de forma parcial
router.patch('/:id', async (req, res, next) => {
  //const { id }  = req.params;
  //const body    = req.body;

    try {
        const { body, params: { id }} = req;
        const product = await services.update(id, body);
        res.json(product);

    } catch(error){

        next(error);
    }
})

//metodo delete: borra un registro
router.delete('/:id', async (req, res) => {
    const { id }  = req.params;
    const rta =  await services.delete(id);
    res.json(rta);
})

module.exports = router;


//todos los parametros que se reciban por el metodo get o de tipo query se envian como string
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     if (id === '999') {
//       res.status(404).json({
//         message: 'Not Found'
//       });
//     } else {
//       res.status(200).json({
//         id,
//         name: 'Product 2',
//         price: 2000
//       });
//     }
//   })