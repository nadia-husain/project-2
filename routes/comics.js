const express = require('express')
const router = express.Router()

const comicController = require('../controllers/comics')

router.get('/comic/index', comicController.comic_index_get)

module.exports = router