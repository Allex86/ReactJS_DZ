let express = require('express');
let mongoose = require('mongoose');

let router = express.Router();
let User = mongoose.model('User');

router.get('/', function (req, res, next) {
    User.find({}, function (err, users) {
        if(err){
            return next(err);
        }
        // res.json(users);
        let users3 = require('../models/users.json');
        res.json(users3);
    });
});

module.exports = router;