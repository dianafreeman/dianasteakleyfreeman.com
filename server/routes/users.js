const express = require('express');
const logger = require('morgan');
const router = express.Router();
const User = require('../models/User.model');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const [err, users] = await User.find();
  if (err) return logger.error(err);
  res.json({ users });
});

/* POST user listing. */
router.get('/', function (req, res, next) {
  User.create({ name: 'superuser' }, function (err, user) {
    if (err) return console.error(err);
    res.json({ user });
  });
});

module.exports = router;
