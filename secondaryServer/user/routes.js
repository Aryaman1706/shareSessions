import express from "express";

// * Middlewares
import { userIsLoggedIn } from "./middlewares.js";

// * Controllers
import * as controllers from "./controllers.js";

// * API Endpoints ->
const router = express.Router();

router.get("/profile", userIsLoggedIn, controllers.profile);

// * End of API Endpoints ->

export default router;
