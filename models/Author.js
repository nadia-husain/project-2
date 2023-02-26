const mongoose = require('mongoose')
const authorSchema = mongoose.Schema({
    name: String,
    bio: String,
    comics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comic' // the Comic model
    }],
    socialMedia: String,
    email: String
},
{
    timestamps: true
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author