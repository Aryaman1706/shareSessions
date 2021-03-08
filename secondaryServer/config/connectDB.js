const mongoose = require("mongoose");

const connection = mongoose.createConnection(process.env.COMMON_MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = connection;
