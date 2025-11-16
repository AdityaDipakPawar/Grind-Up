const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', collegeController.registerCollege);
router.post('/login', collegeController.loginCollege);
router.get('/', collegeController.getAllColleges);
router.get('/:id', collegeController.getCollegeById);

// Protected routes
router.get('/profile/me', auth, collegeController.getCurrentCollege);
router.put('/:id', auth, collegeController.updateCollege);
router.delete('/:id', auth, collegeController.deleteCollege);

module.exports = router;


