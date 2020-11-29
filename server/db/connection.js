const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = 'DianaWeb';
const uri = process.env.MONGO_URI || 'mongodb://mongo:27017';
const user = process.env.MONGO_USER || 'root';
const pass = process.env.MONGO_PASS || 'example';

function connection() {
  return mongoose.connect(`${uri}/${db}?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: user,
    pass: pass,
  });
}

module.exports = connection;
