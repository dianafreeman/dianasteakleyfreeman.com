const express = require('express');
const dotenv = require('dotenv');
const debugDb = require('debug')('server:database');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDb = require("./db/connect")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

dotenv.config()

const app = express();
connectDb().then(() => {
 debugDb("MongoDb connected");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
