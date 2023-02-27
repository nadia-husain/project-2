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

exports.comic_delete_get = (req, res) => {
    comic.findByIdAndDelete(req.query.id)

        .then(() => {
            // you can use key : value
            res.redirect('/comic/index')
        })
        .catch((err) => {
            console.log(err);
            res.send('please try again later')
        })
}