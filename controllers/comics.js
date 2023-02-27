const Comic = require('../models/Comic')
const User = require('../models/User')

exports.comic_create_get = function (req, res) {
    res.render('comic/add')
}

exports.comic_create_post = function (req, res) {
    console.log(req.body)
    let comic = new Comic(req.body)
  
    // add the logged-in user's information to the comic
    comic.user.push(req.session.user._id)
  
    comic.save()
      .then(function () {
        res.redirect('/comic/index')
      })
      .catch(function (err) {
        console.log(err)
        res.send('An error occurred please try again later')
      })
  }

exports.comic_index_get = function (req, res) {
    Comic.find().populate('user')
    .then(function(comics) {
        console.log(comics[0].author)
        res.render('comic/index', {comics}) // articles: articles
    })
    .catch(function(err) {
        console.log(err)
    })
}





// exports.comic_show_get = function(req,res) {
//     Comic.findById(req.query.id)
//     .then(function (comic) {
//         res.render('comic/detail', {comic})
//     })
//     .catch(function(err) {
//         console.log(err)
//     })
// }

exports.comic_delete_get = (req, res) => {
    Comic.findByIdAndDelete(req.query.id)

        .then(() => {
            // you can use key : value
            res.redirect('/comic/index')
        })
        .catch((err) => {
            console.log(err);
            res.send('please try again later')
        })
}