const mongoose = require('mongoose');

const placementSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  role: { type: String, required: true },
  vacancies: { type: Number, required: true },
  location: String,
  employmentType: String,
  salary: String,
  mustHaveSkills: String,
  goodToHaveSkills: String,
  jobDescription: String,
  applicationEndDate: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Placement', placementSchema); 