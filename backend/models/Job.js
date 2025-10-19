const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  location: { type: String, required: true },
  salary: { type: String },
  employmentType: { type: String, enum: ['full-time', 'part-time', 'contract', 'internship'], default: 'full-time' },
  experience: { type: String },
  skills: [{ type: String }],
  requirements: { type: String },
  benefits: { type: String },
  applicationDeadline: { type: Date },
  isActive: { type: Boolean, default: true },
  vacancies: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);

