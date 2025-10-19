const express = require('express');
const router = express.Router();
const jobPostsController = require('../controllers/jobPostsController');
const auth = require('../middleware/auth');

// Public routes
router.get('/', jobPostsController.getAllJobPosts);
router.get('/search', jobPostsController.searchJobPosts);
router.get('/:id', jobPostsController.getJobPostById);

// Protected routes
router.post('/', auth, jobPostsController.createJobPost);
router.put('/:id', auth, jobPostsController.updateJobPost);
router.delete('/:id', auth, jobPostsController.deleteJobPost);
router.get('/company/:companyId', auth, jobPostsController.getJobPostsByCompany);

module.exports = router;
