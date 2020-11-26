const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
  excerpt: {
    type: String,
  },
  content: {
    type: String,
  },
  featuredImage: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
