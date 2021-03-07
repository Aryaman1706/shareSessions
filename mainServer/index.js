const express = require("express");

// * Server Init
const app = express();

// * DB Connection
const mongooseConnection = require("./config/connectDB");

// * Auth Init

// * Middlewares

// * Routes

// * Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
