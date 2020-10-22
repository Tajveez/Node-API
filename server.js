const http = require("http");
const products = require("./data/products");

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found." }));
  }
});
const PORT = 5000;

server.listen(PORT, () => console.log(`server running on PORT: ${PORT}`));
