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
