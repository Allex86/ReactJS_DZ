let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
let Comments = mongoose.model('Comment');

router.get('/', function (req, res, next) {
    Comments.find({}, function (err, comments) {
        if(err){
            return next(err);
        }
        // res.json(comments);
        let comments3 = require('../models/comments.json');
        res.json(comments3);
    });
});

module.exports = router;