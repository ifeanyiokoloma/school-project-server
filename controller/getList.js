const asyncWrapper = require("../middleware/asyncWrapper");
const { Student } = require("../models/studentSchema");

const getList = asyncWrapper(async (req, res, next) => {
  const { name } = req.query;
  if (name) {
    const list = await Student.find({
      $or: [
        { fname: { $regex: name, $options: "i" } },
        { mname: { $regex: name, $options: "i" } },
        { sname: { $regex: name, $options: "i" } },
      ],
    });
    return res.status(200).json(list);
  }

  const list = await Student.find({});
  res.status(200).json(list);
});

module.exports = {
  getList,
};
