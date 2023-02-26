const Author = require('../models/Author')

exports.author_index_get = function (req, res) {
    res.render('author/index')
}
