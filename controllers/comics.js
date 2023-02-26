// const Comic = require('../models/Comic')

exports.comic_index_get = function (req, res) {
    res.render('comic/index')
}

exports.comic_create_get = function (req, res) {
    res.render('comic/add')
}

exports.comic_create_post = function (req, res) {
     console.log(req.body)
     let comic = new Comic(req.body)
}