const { CustomAPIError } = require("../errors/customErrors");

const errorHandlerMiddleware = function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ msg: err.message }).render(err);
  }

  res
    .status(err.status || 500)
    .json({ msg: err.message })
    .render(err);
  //   res.render("error");
};

module.exports = errorHandlerMiddleware;
