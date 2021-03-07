const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { compare } = require("bcryptjs");

// * Models
const { model: User } = require("../user");

// * Utils
const { validators } = require("../user");

// * Authentication
passport.use(
  "user",
  new LocalStrategy(async (username, password, done) => {
    // Validating req.body
    const { error, value } = validators.login({ username, password });
    if (error)
      return done(null, false, {
        message: "Validation Error",
      });

    // Finding user
    const user = await User.findOne({ email: value.username }).exec();
    if (!user)
      return done(null, false, {
        message: "Invalid Credentials",
      });

    // Comparing Password
    if (!(await compare(value.password, user.password)))
      return done(null, false, {
        message: "Invalid Credentials",
      });

    return done(null, user, { message: "Successfull Login" });
  }),
);

// * Serialize User
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// * Deserialize User
passport.deserializeUser((id, done) => {
  User.findById(id)
    .exec()
    .then((doc) => {
      done(null, doc);
    })
    .catch((err) => {
      done(err, null, { message: "User not found" });
    });
});
