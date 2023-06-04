const { Student } = require("../models/studentSchema");

const createStudent = async (req, res, next) => {
  try {
    const data = await Student.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};

module.exports = createStudent;
