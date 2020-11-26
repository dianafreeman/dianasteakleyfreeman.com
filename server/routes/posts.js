const express = require('express');
const logger = require('morgan');
const router = express.Router();
const Post = require("../models/Post.model");


/* GET posts listing. */
router.get('/', async function (req, res, next) {
  const [err, posts] = await Post.find()
  if (err) return logger.error(err);
  res.json({ posts });
});

/* POST post listing. */
router.post('/', async function (req, res, next) {
  const post = await Post.create({ name: 'Post Name' })
  post.save()
  res.json({ post });

});

/* UPDATE post listing. */
router.patch('/', async function (req, res, next) {
  const post = await Post.findOneAndUpdate({ name: 'Post Name' })
  post.save()
  res.json({ post });

});

module.exports = router;
