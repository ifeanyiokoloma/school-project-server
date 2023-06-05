const { Student } = require("../models/studentSchema");

const deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.findOneAndDelete({ regno: req.params.regno });
    if (!student) {
      return res.status(404).json({
        msg: `No student with the registration number: ${req.params.regno}`,
      });
    }
    res.status(200).json({task: null, status: "success"});
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = deleteStudent;
