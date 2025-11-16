const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', companyController.registerCompany);
router.post('/login', companyController.loginCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getCompanyById);

// Protected routes
router.get('/profile/me', auth, companyController.getCurrentCompany);
router.put('/:id', auth, companyController.updateCompany);
router.delete('/:id', auth, companyController.deleteCompany);

module.exports = router;


