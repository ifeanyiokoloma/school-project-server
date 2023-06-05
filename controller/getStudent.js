const { Student } = require("../models/studentSchema");


const getStudent = async (req, res, next) => {
  try {
    const student = await Student.findOne({ regno: req.params.regno });
    if (!student) {
      return res.status(404).json({
        msg: `No student with the registration number: ${req.params.regno}`,
      });
    }
    res.status(200).json( student );
  } catch (err) {
    res.status(500).json({ msg: err });
  }
}

module.exports = getStudent