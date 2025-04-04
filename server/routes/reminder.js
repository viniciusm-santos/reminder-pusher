import { Router } from "express";
import createError from "http-errors";
import controller from "../controller/Reminder.js";

const reminderRoutes = new Router();

const verifyId = (req, res, next) => {
  const id = req.params.id;
  if (!/^[0-9]+$/.test(id)) {
    return next(createError(422, "invalid id"));
  }
  next();
};

reminderRoutes.get("/", controller.list);
reminderRoutes.get("/:id", verifyId, controller.byId);
reminderRoutes.post("/", controller.create);
reminderRoutes.put("/:id", verifyId, controller.updateById);
reminderRoutes.delete("/:id", verifyId, controller.deleteById);

export default reminderRoutes;
