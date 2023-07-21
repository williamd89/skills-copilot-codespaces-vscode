// create web service
// http://localhost:3000/api/comments

// import express
var express = require('express')

// import router
var router = express.Router()

// import comments model
var Comments = require('../models/comments')

// create web service
// http://localhost:3000/api/comments
router.get('/comments', function (req, res) {
    Comments.find(function (err, comments) {
        if (err) {
            res.send(err)
        }
        res.json(comments)
    })
})

// create web service
// http://localhost:3000/api/comments
router.post('/comments', function (req, res) {
    var comments = new Comments()
    comments.name = req.body.name
    comments.comment = req.body.comment
    comments.save(function (err) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Comments created!' })
    })
})

// create web service
// http://localhost:3000/api/comments/5d4a1a5b1c9d4400008a2a0e
router.delete('/comments/:id', function (req, res) {
    Comments.remove({ _id: req.params.id }, function (err, comments) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Comment has been deleted' })
    })
})

// export router
module.exports = router