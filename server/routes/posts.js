const express = require('express');
const logger = require('morgan');
const Post = require('../models/Post.model');
const debug = require('debug')('server:posts');
const router = express.Router();
const mongoose = require('mongoose');

const connection = mongoose.connection;
/* GET posts listing. */
router.get('/', async function (req, res, next) {
  const session = await connection.startSession();
  try {
    const posts = await Post.find({}, null, session);
    res.json({ posts });
  } catch (err) {
    return res.json({ error: err });
  }
});

/* POST post listing. */
router.post('/', async function (req, res, next) {
  const post = await Post.create({ name: 'Post Name' });
  // post.save();
  res.json({ post });
});

/* UPDATE post listing. */
router.patch('/', async function (req, res, next) {
  const post = await Post.findOneAndUpdate({ name: 'Post Name' });
  // post.save();
  res.json({ post });
});

module.exports = router;
