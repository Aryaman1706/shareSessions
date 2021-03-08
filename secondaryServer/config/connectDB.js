import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectionPromise = mongoose
  .createConnection(process.env.COMMON_MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((c) => {
    console.log("Connected to mongo db");
    return c;
  });

export const connection = await connectionPromise;
