const express = require("express");
const passport = require("passport");

// * Middlewares
const { userIsLoggedIn } = require("./middlewares");

// * Controllers
const controllers = require("./controllers");

// * API Endpoints ->
const router = express.Router();

router.post("/signup", controllers.signup);

// router.post("/login");

router.get("/profile", userIsLoggedIn, controllers.profile);

router.get("/logout", userIsLoggedIn, controllers.logout);

// * End of API Endpoints ->

module.exports = router;
