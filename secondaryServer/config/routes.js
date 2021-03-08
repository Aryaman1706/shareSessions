import { routes as user } from "../user/index.js";

export default (app) => {
  app.use("/api/user", user);
};
