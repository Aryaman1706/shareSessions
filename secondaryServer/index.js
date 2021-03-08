// * Environment Variables Init
import dotenv from "dotenv";
dotenv.config();

import express from "express";

// * Server Init
const app = express();

// * DB Connection
import "./config/connectDB.js";

// * Auth Init
import "./config/auth.js";

// * Middlewares
import middlewares from "./config/middlewares.js";
import clientPromise from "./utils/getClientPromise.js";
middlewares(app, express, clientPromise);

// * Routes
import routes from "./config/routes.js";
routes(app);

// * Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
