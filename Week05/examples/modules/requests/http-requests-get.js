const http = require('http')

http.get('http://albertcervantes.com/hello.html', (res) => {

    // Read some information about the response
    const statusCode = res.statusCode;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error(`Request Failed.\n` +
            `Status Code: ${statusCode}`);
    }
    if (error) {
        console.log(error.message);

        // consume response data to free up memory
        res.resume();

        return;
    }

    // Read the contents of the response in chunks
    res.setEncoding('utf8');
    let html = '';
    res.on('data', (chunk) => html += chunk);

    res.on('end', () => {
        console.log(html)
    });

}).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
});