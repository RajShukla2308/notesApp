const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/routing')
const errorLogger = require('./utilities/errorLogger')
const requestLogger = require('./utilities/requestLogger')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(requestLogger)
app.use('/',router)
app.use(errorLogger)

var corsOptionns = {
    origin:['http://localhost:4200'],
    optionsSuccessStatus : 200,
    credentials:true
}

app.listen(1050)
console.log("Server listing on port 1050");
