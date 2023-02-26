const express = require('express')
const router = express.Router()

const profileController = require('../controllers/profile')

router.get('/profile/index', profileController.profile_index_get)

module.exports = router