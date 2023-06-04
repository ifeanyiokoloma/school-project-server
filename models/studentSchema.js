const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  sname: { type: String, required: true, trim: true },
  mname: { type: String, required: true, trim: true },
  imgSrc: { type: String, required: true },
  studentClass: { type: String, required: true },
  hostel: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  regno: { type: String, required: true, trim: true },
  regdate: { type: Date, required: true, default: new Date() },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = {
  Student,
};
