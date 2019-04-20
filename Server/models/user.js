const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: false
  }
});

module.exports = Users = mongoose.model("Users", userSchema);
