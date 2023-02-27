const express = require('express')
const router = express.Router()

const profileController = require('../controllers/profile')

router.get('/profile/index', profileController.profile_index_get)
router.get('/profile/edit', profileController.profile_update_get)
router.post('/profile/edit', profileController.profile_update_post)

module.exports = router