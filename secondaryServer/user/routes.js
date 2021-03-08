const express = require("express");

// * Middlewares
const { userIsLoggedIn } = require("./middlewares");

// * Controllers
const controllers = require("./controllers");

// * API Endpoints ->
const router = express.Router();

router.get("/profile", userIsLoggedIn, controllers.profile);

// * End of API Endpoints ->

module.exports = router;
