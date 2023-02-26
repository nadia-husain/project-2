const Comic = require('../models/Comic')

exports.comic_index_get = function (req, res) {
    res.render('comic/index')
}
