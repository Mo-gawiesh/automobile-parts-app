// models/part.js
const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  // Define the fields with their types and validation requirements here
  // For example:
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  manufacturer: { type: String },
  inStock: { type: Number, required: true }
});

const Part = mongoose.model('Part', partSchema);

module.exports = Part;
