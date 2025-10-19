const mongoose = require('mongoose');

const providerProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: String,
  companyDescription: String,
  contact: String,
  website: String,
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('ProviderProfile', providerProfileSchema); 