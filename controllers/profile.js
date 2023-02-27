const Profile = require('../models/User')

exports.profile_index_get = function (req, res) {
    //res.render('profile/index')
    Profile.findById(req.user._id)
    .then(function(user) {
        res.render('profile/index', {user})
    })
    .catch(function(err) {
        console.log(err)
        res.send('something went wrong, please try again later.')
    })
 }
// HTTP Update GET - profile

exports.profile_update_get = function(req, res) {
    Profile.findById(req.user._id)
    .then(function(user){
        res.render('profile/edit', {user})
    })
    .catch(function(err){
        console.log(err)
    })
}

// HTTP Update POST - profile

exports.profile_update_post = function(req, res) {
    Profile.findByIdAndUpdate(req.user._id, req.user)
    .then(function(){
        console.log(req.user)
        res.redirect('/profile/index')
    })
    .catch(function(err){
        console.log(err)
    })
}