const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello</h1>')
    res.end()
    // res.send('hello')
})
const PORT = 5000

server.listen(PORT,()=>console.log(`server running on PORT: ${PORT}`))