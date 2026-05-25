const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location.controller');
const { authenticate, authorizeRoles } = require('../middleware/auth.middleware');

router.get('/', locationController.getLocations);

router.use(authenticate);
router.use(authorizeRoles('admin'));

router.post('/', locationController.createLocation);
router.route('/:locationId')
    .patch(locationController.updateLocation)
    .delete(locationController.deleteLocation);

module.exports = router;
