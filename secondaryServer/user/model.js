const commonDBConnection = require("../config/connectDB");
const mongoose = require("mongoose");

const User = mongoose.model("User", {});

module.exports = User;
