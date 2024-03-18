// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes whitespace from both ends of the string
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // ensures email is stored in lowercase
    match: [/.+\@.+\..+/, 'Please fill a valid email address'] // regex for validation
  },
  password: {
    type: String,
    required: true
  },
  // Include any additional fields relevant to your user, such as role or profile information
});

// Indexes this schema in 2dsphere format (useful for location-based searching if needed)
// userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
