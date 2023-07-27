const express = require('express');

const productsRouter = require('./products.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router) //patch global

  router.use('/productos', productsRouter);
}

module.exports = routerApi;
