const http = require('http')

// returned a new instance of the built in http server in Node.js
const app = http.createServer((request, response) => {

    // as incoming requests hit our server we have to handle the
    // request and response back to the requestor
    if (request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.end('Hello World')
    }

    if (request.url === '/json') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify({ hello: 'world'}))
    }
})

// begin accepting connections on the specified port and hostname
app.listen(8080, 'localhost')