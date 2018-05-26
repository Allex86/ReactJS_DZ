let mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
   postId: String,
	id: String,
	name: String,
	email: String,
	body: String
});

mongoose.model('Comment', commentSchema, 'comments');