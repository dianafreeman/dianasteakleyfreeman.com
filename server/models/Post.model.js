const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
