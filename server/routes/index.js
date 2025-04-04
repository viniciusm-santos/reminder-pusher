import { Router } from "express";
// import UserController from "../controller/User.js";
// import HomeController from "../controller/Home.js";
import reminderRoutes from "./reminder.js";

const routes = new Router();

routes.use((req, res, next) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    res.end("");
  } else {
    next();
  }
});

routes.use("/reminder", reminderRoutes);

// routes.get("/", HomeController.index);

// routes.get("/users", UserController.index);
// routes.post("/users", UserController.create);

export default routes;
