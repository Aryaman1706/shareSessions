const express = require("express");

// * Environment Variables Init
require("dotenv").config();

// * Server Init
const app = express();

// * DB Connection
const clientPromise = require("./config/connectDB")();

// * Auth Init
require("./config/auth");

// * Middlewares
require("./config/middlewares")(app, express, clientPromise);

// * Routes
require("./config/routes")(app);

// * Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
