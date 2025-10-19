const express = require('express');
const router = express.Router();
const inviteController = require('../controllers/inviteController');
const auth = require('../middleware/auth');

// Get invites for college
router.get('/college', auth, inviteController.getCollegeInvites);

// Get invites sent by company
router.get('/company', auth, inviteController.getCompanyInvites);

// Accept/decline invite
router.post('/:id/accept', auth, inviteController.acceptInvite);
router.post('/:id/decline', auth, inviteController.declineInvite);

// Get invite by ID
router.get('/:id', auth, inviteController.getInviteById);

// Delete invite (company only)
router.delete('/:id', auth, inviteController.deleteInvite);

module.exports = router; 