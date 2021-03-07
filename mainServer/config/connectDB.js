const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    process.env.MONGO_URI,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) console.error("Connection to MongoDB failed.");
      console.log("Connected to MongoDB");
    },
  );

  return mongoose.connection;
};
