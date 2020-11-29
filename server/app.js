const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const connect = require('./db/connection');
const init = require('./db/init');

const connection = mongoose.connection;

connect().then(function () {
  console.log(`MongoDB database connection established successfully at ${process.env.MONGO_URI}`);
  connection.startSession();
  console.log(`---------------Started DB Session | ${new Date().toISOString()}------------------`);
  init();
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
