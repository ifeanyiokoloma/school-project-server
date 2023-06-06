const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const createStudent = asyncWrapper(async (req, res, next) => {
  const data = await Student.create(req.body);
  res.status(201).json(data);
});

module.exports = createStudent;
