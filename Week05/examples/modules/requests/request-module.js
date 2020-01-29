var request = require('request');

request('http://albertcervantes.com/hello.html', (error, response, body) => {

    // Print the error if one occurred
    console.log('error:', error);

    // Print the response status code if a response was received
    console.log('statusCode:', response && response.statusCode);

    // Print the HTML for the hello.html doc
    console.log('body:', body);

});