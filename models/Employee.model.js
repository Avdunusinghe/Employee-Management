const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: String,
  position: String,
  salary: String,
});

module.exports = Employee = mongoose.model("Employee", employeeSchema);
