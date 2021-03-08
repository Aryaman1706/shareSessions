const commonDBConnectionPromise = require("../config/connectDB");

const clientPromise = commonDBConnectionPromise.then((c) => c.getClient());

module.exports = clientPromise;
