const express = require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))


const comicController = require('../controllers/comics')

router.get('/comic/index', comicController.comic_index_get)
router.get('/comic/add', comicController.comic_create_get)
router.post('/comic/add', comicController.comic_create_post)
router.get('/comic/delete',comicController.comic_delete_get)

module.exports = router