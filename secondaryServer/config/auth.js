import passport from "passport";
import { model as User } from "../user/index.js";

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
