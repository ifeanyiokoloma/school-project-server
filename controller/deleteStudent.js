const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const deleteStudent = asyncWrapper(async (req, res, next) => {
  const student = await Student.findOneAndDelete({ regno: req.params.faceID });
  if (!student) {
    const error = createCustomErr(
      `No such student exists: ${req.params.faceID}`,
      404
    );

    return next(error);
  }
  res.status(200).json({ task: null, status: "success" });
});

module.exports = deleteStudent;
