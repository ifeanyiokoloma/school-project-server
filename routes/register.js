var express = require("express");
const createStudent = require("../controller/createStudent");
var router = express.Router();

/* POST students info. */
router.post("/register", createStudent);

module.exports = router;