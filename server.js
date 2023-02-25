const express = require('express')
const mongoose = require('mongoose')

const port = 3000
const app = express()

//Express Layouts, ejs

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Import and Mount Routes here

const indexRoute = require('./routes/index')
const comicRoute = require('./routes/comics')

app.use('/', indexRoute)
app.use('/', comicRoute)

// Start Server and output message on terminal 

app.listen(port, function(){
    console.log(`Comics App running on port ${port}`)
})
