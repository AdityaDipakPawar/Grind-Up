const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const auth = require('../middleware/auth');

router.post('/', auth, profileController.createProfile);
router.get('/me', auth, profileController.getMyProfile);
router.put('/', auth, profileController.updateProfile);
router.delete('/', auth, profileController.deleteProfile);

module.exports = router; 