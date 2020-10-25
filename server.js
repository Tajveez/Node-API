const http = require("http");
const products = require("./data/products");
const {
  getProducts,
  getProduct,
  createProduct,
} = require("./controllers/productController");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    console.log(req.url);
    const id = req.url.split("/")[3];
    getProduct(req, res, id);
    console.log(id);
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found." }));
  }
});
const PORT = 5000;
// https://youtu.be/_1xa8Bsho6A?t=2366
server.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
