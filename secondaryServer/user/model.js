const mongoose = require("mongoose");
const commonConnection = require("../utils/getConnection");

const userSchema = new mongoose.Schema({});

const User = commonConnection.model("User", userSchema);

module.exports = User;
