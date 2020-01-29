// Include http to create a new web server
var http = require('http');

// Include our custom module
const mymodule = require('./my-module')

http.createServer(function (request, response) {
    
    // Extract Query String parameters from the request
    const params = mymodule.getParameters(request.url)

    // Set the content type in the header
    response.writeHead(200, {'Content-Type': 'text/html'})

    // Write the welcome message    
    response.write( mymodule.getWelcomeMessage(params.name) )

    // Conclude our response
    response.end();
}).listen(8080);
