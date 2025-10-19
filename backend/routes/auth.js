const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Registration routes
router.post('/register/college', authController.registerCollege);
router.post('/register/company', authController.registerCompany);

// Authentication routes
router.post('/login', authController.login);
router.post('/logout', auth, authController.logout);

// User info route
router.get('/me', auth, authController.getMe);

module.exports = router;

