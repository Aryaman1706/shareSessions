// * Environment Variables Init
import dotenv from "dotenv";
dotenv.config();

import express from "express";

// * Server Init
const app = express();

// * Middlewares
import middlewares from "./config/middlewares.js";

// * DB Connection
import connection from "./config/connectDB.js";

// * Auth Init
import "./config/auth.js";

// * Routes
import routes from "./config/routes.js";

// prettier-ignore
(async function(){
  const mongoClient =  (await connection).getClient()
  const mongoClientPromise = Promise.resolve(mongoClient)
  middlewares(app, express, mongoClientPromise)
  routes(app);
}())

// * Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
