const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const getStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOne({ regno: req.params.regno });
  if (!student) {
    const error = createCustomErr(
      `No student with the registration number: ${req.params.regno}`,
      404
    );

    return next(error);
  }
  res.status(200).json(student);
});

module.exports = getStudent;
