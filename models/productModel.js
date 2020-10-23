const products = require("../data/products");

function findAll() {
  return new Promise((resolve, reject) => {
    reslove(products);
  });
}

module.exports = {
  findAll,
};
