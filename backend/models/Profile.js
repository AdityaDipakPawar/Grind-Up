const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  collegeName: { type: String, required: true },
  collegeCity: String,
  grade: String,
  tpoName: String,
  mobile: String,
  email: String,
  universityAffiliation: String,
  courses: String,
  numStudents: Number,
  highestCGPA: String,
  avgCTC: String,
  avgPlaced: Number,
  placementPercent: String,
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema); 