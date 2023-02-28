const express = require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))


const comicController = require('../controllers/comics')

router.get('/comic/index', comicController.comic_index_get)
router.get('/comic/all', comicController.comic_all_get)
router.get('/comic/detail', comicController.comic_detail_get)
router.get('/comic/add', comicController.comic_create_get)
router.post('/comic/add', comicController.comic_create_post)
router.get('/comic/delete',comicController.comic_delete_get)
router.get('/comic/edit', comicController.comic_update_get)
router.post('/comic/edit', comicController.comic_update_post)


router.post('/comic/all', comicController.review_create_post)

module.exports = router
