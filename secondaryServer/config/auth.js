const passport = require("passport");

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
