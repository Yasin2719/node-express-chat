const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
  userId: {type: String, required: true},
  text: { type: String, required: true },
  date: { type: Date, required: true },
  pseudo: {type: String, required: true},
  number: { type: Number, required: true },
});

module.exports = mongoose.model('test', testSchema);