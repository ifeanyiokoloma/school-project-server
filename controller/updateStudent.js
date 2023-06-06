const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const updateStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOneAndUpdate(
    { regno: req.params.regno },
    req.body,
    { new: true, runValidators: true }
  );
  if (!student) {
    const error = createCustomErr(
      `No student with the registration number: ${req.params.regno}`,
      404
    );
    return next(error);
  }
  res.status(200).json(student);
});

module.exports = updateStudent;
