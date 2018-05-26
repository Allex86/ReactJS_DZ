let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
   userId: String,
	id: String,
	title: String,
	body: String
});

mongoose.model('Post', postSchema, 'posts');