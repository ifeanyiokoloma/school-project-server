const { createCustomErr } = require("../errors/customErrors");
const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const searchStudent = asyncWrapper(async (req, res, next) => {
  const { name } = req.query;
  const student = await Student.find({
    $or: [
      { fname: { $regex: name, $options: "i" } },
      { mname: { $regex: name, $options: "i" } },
      { sname: { $regex: name, $options: "i" } },
    ],
  });
  if (!student) {
    const error = createCustomErr(
      `No such student exists: ${req.params.faceID}`,
      404
    );

    return next(error);
  }
  res.status(200).json(student);
});

module.exports = searchStudent;
