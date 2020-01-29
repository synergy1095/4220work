const
    bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '..', '/client')))
app.use(require('./api/routes')())

app.listen(8080, () => {
    console.log('Server is running')
})