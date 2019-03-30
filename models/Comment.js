const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const commentSchema = new Schema({
 // id: {
   // type: String,
   // required:true
  //},
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    required:true
  }
 
});

module.exports = form = mongoose.model('form', commentSchema);