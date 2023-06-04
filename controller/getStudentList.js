const { Student } = require("../models/studentSchema");

const getStudentsList = async (req, res, next) => {
  try {
    const list = await Student.find({});
    res.status(200).json({ list });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getStudentsList,
};
