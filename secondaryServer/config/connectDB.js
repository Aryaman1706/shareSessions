import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = mongoose.createConnection(
  process.env.COMMON_MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.error("Connection failed");
    else console.log("Connected");
  },
);
export default connection;
