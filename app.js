const { connectDB } = require("./DB/connect");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var index = require("./routes/index");
var list = require("./routes/list");
const register = require("./routes/register");
var students = require("./routes/students");
var search = require("./routes/search");
require("dotenv").config()

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", index);
app.use("/", list);
app.use("/", register);
app.use("/", students);
app.use("/query", search);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});


const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
}

start()

module.exports = app;
