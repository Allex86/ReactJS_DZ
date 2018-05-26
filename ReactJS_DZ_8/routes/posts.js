let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
let Post = mongoose.model('Post');

router.get('/', function (req, res, next) {
    Post.find({}, function (err, posts) {
        if(err){
            return next(err);
        }
        // res.json(posts);
        let posts3 = require('../models/posts.json');
        res.json(posts3);
    });
});

module.exports = router;