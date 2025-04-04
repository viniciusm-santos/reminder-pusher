const AppController = {
  notFound(req, res, next) {
    var err = new Error("Not found.");
    err.status = 404;
    next(err);
  },
  handleError(err, req, res, next) {
    if (err.status !== 404) console.log(err.stack);
    res.status(err.status || 500).json({ err: err.message });
  },
};

export default AppController;
