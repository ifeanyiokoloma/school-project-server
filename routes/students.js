var express = require("express");
const { Student } = require("../models/studentSchema");
const getStudent = require("../controller/getStudent");
const deleteStudent = require("../controller/deleteStudent");
var router = express.Router();

/* GET student */
router.route("/students/:regno").get(getStudent).delete(deleteStudent);

module.exports = router;
