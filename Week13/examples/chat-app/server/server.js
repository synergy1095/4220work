const
    express = require('express'),
    path = require('path')

const
    app = express(),
    server = require('http').Server(app)

app.use(express.static('../client'))
const db = require('./db')
require('./sockets')(server, db)


server.listen(8080)
