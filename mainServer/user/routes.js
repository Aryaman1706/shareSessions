const express = require("express");
const passport = require("passport");

// * Middlewares
const { userIsLoggedIn } = require("./middlewares");

// * Controllers
const controllers = require("./controllers");

// * API Endpoints ->
const router = express.Router();

router.post("/signup", controllers.signup);

router.post("/login", (req, res, next) => {
  passport.authenticate("user", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(404).json({ error: info.message, body: null });

    req.logIn(user, (error) => {
      if (error) return next(error);
      const body = user;
      body.password = undefined;
      return res.status(200).json({
        error: null,
        body: body,
      });
    });
  })(req, res, next);
});

router.get("/profile", userIsLoggedIn, controllers.profile);

router.get("/logout", userIsLoggedIn, controllers.logout);

// * End of API Endpoints ->

module.exports = router;
