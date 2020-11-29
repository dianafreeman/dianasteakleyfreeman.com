const { fakeMany } = require('./posts');
const Post = require('../../models/Post.model');

async function tryInsertMany(Model, posts) {
  try {
    await Model.insertMany(posts);
  } catch (err) {
    throw err;
  }
}

function tryGenerateMany(numToCreate = 10) {
  try {
    return fakeMany(numToCreate);
  } catch (err) {
    throw err;
  }
}

async function seedPosts() {
  const posts = tryGenerateMany();
  const inserted = await tryInsertMany(Post, posts);
  console.log(`Succesfully inserted ${inserted.length} records`);
}

if (process.env.NODE_ENV === 'task') {
  seedPosts();
}
