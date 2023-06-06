// var createError = require("http-errors");
const express = require("express");
// require("express-async-errors");
const cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet")

const list = require("./routes/list");
const register = require("./routes/register");
const students = require("./routes/students");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
const options = require("./config/options");
const credentials = require("./middleware/credentials");

// const notFound = require("./middleware/not-found");
require("dotenv").config()

const app = express();

// Add security headers
app.use(helmet());

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials)

// Enable CORS
app.use(cors(options));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", list);
app.use("/", register);
app.use("/", students);

app.use(notFound);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(errorHandlerMiddleware);


module.exports = app;
