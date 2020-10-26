const Product = require("../models/productModel");
const { getPostData } = require("../utils");

// @desc  Gets All Products
// @route GET /api/product/
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log("Controller Error: ", error);
  }
}

// @desc  Create a Product
// @route POST /api/products/
async function createProduct(req, res) {
  try {
    let body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);

    if (!title || !description || !price) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message:
            "Please, enter title, description and price to create product.",
        })
      );
    }

    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log("Controller Error: ", error);
  }
}

// @desc  Gets All Product by Id
// @route GET /api/product/:id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Product with Id ${id} not found.` }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log("Controller Error: ", error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
