const express = require('express');
const router = express.Router();
const jobApplicationController = require('../controllers/jobApplicationController');
const auth = require('../middleware/auth');

// Protected routes
router.post('/apply/:jobId', auth, jobApplicationController.applyForJob);
router.get('/job/:jobId', auth, jobApplicationController.getJobApplications);
router.get('/college/:collegeId', auth, jobApplicationController.getCollegeApplications);
router.get('/stats', auth, jobApplicationController.getApplicationStats);
router.get('/:applicationId', auth, jobApplicationController.getApplicationById);
router.put('/:applicationId/status', auth, jobApplicationController.updateApplicationStatus);
router.put('/:applicationId/withdraw', auth, jobApplicationController.withdrawApplication);

module.exports = router;
