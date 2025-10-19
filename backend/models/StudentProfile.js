const mongoose = require('mongoose');

const studentProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: String,
  education: String,
  skills: String,
  resumeUrl: String,
  contact: String,
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('StudentProfile', studentProfileSchema); 