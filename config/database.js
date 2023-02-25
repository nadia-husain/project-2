const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: '.env'})

const dbURI = process.env.DATABASE_URI

mongoose.set('strictQuery', true)

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', function(){
    console.log(`Connected to MongoDB at: ${db.host} : ${db.port}`)
})