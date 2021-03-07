const mongoose = require("mongoose");

module.exports = () => {
  const clientPromise = mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then((m) => {
      console.log("Connected to mongoDB");
      return m.connection.getClient();
    });

  return clientPromise;
};
