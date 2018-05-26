let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');

require('./models/post');
require('./models/comment');
require('./models/user');

let routePost = require('./routes/posts');
let routeComment = require('./routes/comments');
let routeUser = require('./routes/users');

mongoose.connect('mongodb://localhost:27017/blog');

let app = new express();
app.set('view engine', 'html');

//Работа с роутингом
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');

    next();
});

app.use(express.static(__dirname + '/dist'));

app.use(logger('combined'));

//Наши запросы
app.use('/api/posts', routePost);
app.use('/api/comments', routeComment);
app.use('/api/users', routeUser);

//Обработка ошибок
app.use(function (req, res, next) {
    let err = new Error('Not Fount');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.listen(8082, function () {
    console.log('Сервер запущен!');
});