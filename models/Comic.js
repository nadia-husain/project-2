const mongoose = require('mongoose')
const comicSchema = mongoose.Schema({
    title: String,
    genre: String,
    datePublished: String,
    noEpisodes: Number,
    description: String,
    reviews: String,
    // Author
    completed: Boolean
},
{
    timestamps: true
})

const Comic = mongoose.model('Comic', comicSchema)

module.exports = Comic