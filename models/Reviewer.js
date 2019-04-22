const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const ReviewerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  yearsOfExperience: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

module.exports = Reviewer = mongoose.model("Reviewer", ReviewerSchema);
