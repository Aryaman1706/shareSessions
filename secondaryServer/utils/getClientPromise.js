import { connectionPromise } from "../config/connectDB.js";

const clientPromise = connectionPromise.then((c) => c.getClient());

export default clientPromise;
