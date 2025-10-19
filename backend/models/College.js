const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  // Basic Information
  collegeName: { 
    type: String, 
    required: true, 
    unique: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  
  // Contact Information
  contactNo: { 
    type: String, 
    required: true,
    trim: true 
  },
  
  
  
  
  // // Address Information
  // address: {
  //   street: { type: String, required: true },
  //   city: { type: String, required: true },
  //   state: { type: String, required: true },
  //   pincode: { type: String, required: true },
  //   country: { type: String, default: 'India' }
  // },
  
  // Academic Information
  // universityAffiliation: { 
  //   type: String, 
  //   required: true 
  // },
  // accreditation: [{ 
  //   type: String 
  // }],
  // establishmentYear: { 
  //   type: Number 
  // },
  
  // Courses Offered
  // courses: [{
  //   courseName: { type: String, required: true },
  //   duration: { type: String, required: true },
  //   level: { type: String, enum: ['diploma', 'bachelor', 'master', 'phd'], required: true },
  //   specialization: [{ type: String }],
  //   intake: { type: Number, default: 0 }
  // }],
  
  // Student Information
  // totalStudents: { 
  //   type: Number, 
  //   default: 0 
  // },
  // totalFaculty: { 
  //   type: Number, 
  //   default: 0 
  // },
  
  // Placement Statistics
  // placementStats: {
  //   highestCGPA: { type: String },
  //   averageCGPA: { type: String },
  //   averageCTC: { type: String },
  //   highestCTC: { type: String },
  //   averagePlaced: { type: Number, default: 0 },
  //   placementPercentage: { type: String },
  //   lastYearPlacements: { type: Number, default: 0 }
  // },
  
  // // TPO Information
  // tpoDetails: {
  //   name: { type: String, required: true },
  //   email: { type: String, required: true },
  //   contactNo: { type: String, required: true },
  //   designation: { type: String, default: 'Training & Placement Officer' }
  // },
  
  // Infrastructure
  // infrastructure: {
  //   campusSize: { type: String },
  //   hostels: { type: Boolean, default: false },
  //   library: { type: Boolean, default: true },
  //   labs: [{ type: String }],
  //   auditorium: { type: Boolean, default: false },
  //   sportsFacilities: [{ type: String }]
  // },
  
  // Verification Status
  // isVerified: { 
  //   type: Boolean, 
  //   default: false 
  // },
  // verificationDocuments: [{
  //   documentType: { type: String },
  //   documentUrl: { type: String },
  //   uploadedAt: { type: Date, default: Date.now }
  // }],
  
  // Status
  // isActive: { 
  //   type: Boolean, 
  //   default: true 
  // },
  
  // Social Media
  // socialMedia: {
  //   linkedin: { type: String },
  //   facebook: { type: String },
  //   twitter: { type: String },
  //   instagram: { type: String }
  // }
}, { 
  timestamps: true 
});

// Index for better query performance (email and collegeName already have unique indexes)
// collegeSchema.index({ 'address.city': 1 });
// collegeSchema.index({ 'address.state': 1 });
// collegeSchema.index({ universityAffiliation: 1 });

module.exports = mongoose.model('College', collegeSchema);
