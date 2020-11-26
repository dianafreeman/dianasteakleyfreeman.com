
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const MONGO_URI = process.env.MONGO_URI || "";

module.exports = () => {
  return mongoose.connect(MONGO_URI, { useNewUrlParser: true } );
};;

