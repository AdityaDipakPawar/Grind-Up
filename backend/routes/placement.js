const express = require('express');
const router = express.Router();
const placementController = require('../controllers/placementController');
const auth = require('../middleware/auth');

router.post('/', auth, placementController.createPlacement);
router.get('/', placementController.getAllPlacements);
router.get('/:id', placementController.getPlacement);
router.put('/:id', auth, placementController.updatePlacement);
router.delete('/:id', auth, placementController.deletePlacement);

module.exports = router; 