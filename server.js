const express = require('express')
const mongoose = require('mongoose')
const passport = require('./lib/passportConfig')
const session = require('express-session')
const config = require('./config/database')

const port = 3000
const app = express()

//Express Layouts, ejs

const expressLayouts = require('express-ejs-layouts')
app.use(expressLayouts)
app.set('view engine', 'ejs')


//MiddleWare
app.use(session({
    secret: 'supersecuresecret!',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 604800} // a week of seconds
}))

app.use(passport.initialize())
app.use(passport.session())

// Import and Mount Routes here

const indexRoute = require('./routes/index')
const comicRoute = require('./routes/comics')
const authRoute = require('./routes/auth')

app.use('/', indexRoute)
app.use('/', comicRoute)
app.use('/',authRoute)

// Start Server and output message on terminal 

app.listen(port, function(){
    console.log(`Comics App running on port ${port}`)
})

// Connect to MongoDB

config.run()
