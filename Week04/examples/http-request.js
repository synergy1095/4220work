const http = require('http')

http.get('http://jsonplaceholder.typicode.com/posts', (res) => {

    console.log(res.headers)
    let body = ''
    res.on('data', (data) => {
        body += data
        // console.log('BODY' + data)
    })

    res.on('end', () => {
        // console.log(body)
    })

}).on('error', (err) => {
    console.log('Error: ' + err)
})