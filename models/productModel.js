const products = require("../data/products");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    resolve(
      products.find((product) => {
        return product.id === id;
      })
    );
  });
}

module.exports = {
  findAll,
  findById,
};
