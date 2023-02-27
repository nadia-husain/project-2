const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')

const profileController = require('../controllers/profile')

router.get('/profile/index', isLoggedIn, profileController.profile_index_get)

module.exports = router