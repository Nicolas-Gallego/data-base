const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
})

const studentsModel = mongoose.model("students", studentsSchema);
  
module.exports = studentsModel;