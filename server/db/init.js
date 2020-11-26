const seed = require('./seed');
const Post = require('../models/Post.model');

async function InitDB() {
  try {
    const posts = seed.posts.generateMany();
    const results = await Post.insertMany(posts);
    console.log(`Succesfully inserted ${results.length} Post Entries`);
  } catch (error) {
    throw error;
  }
}

InitDB();
