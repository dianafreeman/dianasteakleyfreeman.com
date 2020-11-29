const express = require('express');
const logger = require('morgan');
const Post = require('../models/Post.model');
const debug = require('debug')('server:posts');
const router = express.Router();

/* GET all posts listing. */
router.get('/', async function (req, res, next) {
  try {
    const posts = await Post.find({}, null);
    res.json({ posts });
  } catch (err) {
    return res.json({ error: err });
  }
});
/* GET single post. */
router.get('/:postId', async function (req, res, next) {
  try {
    const post = await Post.find({ _id: req.params.post }, null);
    res.json({ post });
  } catch (err) {
    return res.json({ error: err });
  }
});

/* POST post listing. */
router.post('/', async function (req, res, next) {
  const post = await Post.create({ name: 'Post Name' });
  res.json({ post });
});

/* UPDATE post listing. */
router.patch('/:id', async function (req, res, next) {
  const post = await Post.findOneAndUpdate({ name: 'Post Name' });
  res.json({ post });
});

module.exports = router;
