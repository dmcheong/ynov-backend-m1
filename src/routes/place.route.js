const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller');

router.get('/places', placeController.getPlaces);
router.get('/', placeController.getOnePlace);
router.put('/', placeController.updatePlace);
router.delete('/:id', placeController.deleteOnePlace)

module.exports = router;