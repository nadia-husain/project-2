const Profile = require('../models/User')
const bcrypt = require('bcrypt')

exports.profile_index_get = function (req, res) {
    Profile.findById(req.user._id)
        .then(function (user) {
            res.render('profile/index', { user })
        })
        .catch(function (err) {
            console.log(err)
            res.send('something went wrong, please try again later.')
        })
}

// HTTP Update GET - profile
exports.profile_update_get = function (req, res) {
    Profile.findById(req.session.passport.user)
        .then(function (user) {
            res.render('profile/edit', { user })
        })
        .catch(function (err) {
            console.log(err)
        })
}

// HTTP Update POST - profile
exports.profile_update_post = function (req, res) {
    Profile.findByIdAndUpdate(req.session.passport.user, req.body)
        .then(function () {
            console.log('meowww', req.session.passport.user)
            res.redirect('/profile/index')
        })
        .catch(function (err) {
            console.log(err)
        })
}

//change password - GET
exports.profile_changePass_get = (req, res) => {
    Profile.findById(req.user._id)
        .then(user=> {
            res.render('profile/changePass', { user })
        })
        .catch(err => {
            console.log(err)
        })
}

//change password - Post
exports.profile_changePass_post = (req, res) => {
    const hashedPass = bcrypt.hashSync(req.body.password, 8)
    Profile.findByIdAndUpdate(req.body.id, { password: hashedPass })
        .then(() => {
            res.redirect('/profile/index')
        })
        .catch(err => {
            console.log(err)
        })
}

