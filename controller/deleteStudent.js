const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const deleteStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOneAndDelete({ regno: req.params.regno });
  if (!student) {
    const error = createCustomErr(
      `No student with the registration number: ${req.params.regno}`,
      404
    );

    return next(error);
  }
  res.status(200).json({ task: null, status: "success" });
});

module.exports = deleteStudent;
