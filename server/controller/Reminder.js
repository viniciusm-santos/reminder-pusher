import { response } from "express";
import repository from "../repository/Reminder.js";
import createError from "http-errors";

const handleNotFound = (result) => {
  if (!result) {
    throw createError(404, "reminder not found");
  }

  return result;
};

const Reminder = {
  list(req, res, next) {
    const { q, page } = req.query;
    repository
      .list(q, page)
      .then((result) => res.json(result))
      .catch(next);
  },
  async byId(req, res, next) {
    const id = req.params.id;
    try {
      const result = await repository.byId(id).then(handleNotFound);
      res.json(result);
    } catch (e) {
      next(e);
    }
  },
  create(req, res, next) {
    repository
      .create(req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
  updateById(req, res, next) {
    const id = req.params.id;
    repository
      .updateById(id, req.body)
      .then((result) => res.json(result))
      .catch(next);
  },
  deleteById(req, res, next) {
    const id = req.params.id;
    repository
      .deleteById(id)
      .then((_) => res.sendStatus(204))
      .catch(next);
  },
};

export default Reminder;
