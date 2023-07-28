const faker = require('faker');

class ProductsService {
  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      productos.push({
        nombre: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  create(){

  }

  //obtener la lista de productos
  find(){
    return this.products;
  }

  findOne(){

  }

  update(){

  }

  delete(){

  }

}

module.exports = ProductsService;
