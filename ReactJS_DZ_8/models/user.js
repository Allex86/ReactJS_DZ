let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    website: String
});

mongoose.model('User', userSchema, 'users');