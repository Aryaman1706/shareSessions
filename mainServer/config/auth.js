const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { compare } = require("bcryptjs");

// * Models
const { model: User } = require("../user");
