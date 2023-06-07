const { default: mongoose } = require("mongoose");

const studentSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  sname: { type: String, required: true, trim: true },
  mname: { type: String, required: true, trim: true },
  imgSrc: { type: String, required: true },
  studentClass: {
    type: String,
    required: true,
    enum: {
      values: [
        "JS1 A",
        "JS1 B",
        "JS1 C",
        "JS1 D",
        "JS1 E",
        "JS1 F",
        "JS1 G",
        "JS1 H",
        "JS2 A",
        "JS2 B",
        "JS2 C",
        "JS2 D",
        "JS2 E",
        "JS2 F",
        "JS2 G",
        "JS2 H",
        "JS3 A",
        "JS3 B",
        "JS3 C",
        "JS3 D",
        "JS3 E",
        "JS3 F",
        "JS3 G",
        "JS3 H",
        "SS1 A",
        "SS1 B",
        "SS1 C",
        "SS1 D",
        "SS2 A",
        "SS2 B",
        "SS2 C",
        "SS2 D",
        "SS3 A",
        "SS3 B",
        "SS3 C",
        "SS3 D",
      ],
      message: "{VALUE} is not supported",
    },
  },
  hostel: {
    type: String,
    required: true,
    values: ["Ezeuzu", "Enukorah", "Borishade", "Governor", "Unity"],
    message: "{VALUE} is not supported",
  },
  gender: {
    type: String,
    required: true,
    enum: { values: ["male", "female"], message: "{VALUE} is not supported" },
  },
  regno: { type: String, required: true, trim: true },
  regdate: { type: Date, required: true, default: new Date() },
  present: { type: Boolean, required: true, default: false },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = {
  Student,
};
