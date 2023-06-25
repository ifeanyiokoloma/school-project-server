const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const getStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOne({ faceID: req.params.faceID });
  if (!student) {
    const error = createCustomErr(
      `No such student exist: ${req.params.faceID}`,
      404
    );

    return next(error);
  }
  res.status(200).json(student);
});

module.exports = getStudent;
