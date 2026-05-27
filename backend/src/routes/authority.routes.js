const express = require('express');
const router = express.Router();
const authorityController = require('../controllers/authority.controller');

// Authorities are strictly predefined, so we only expose GET routes
router.get('/', authorityController.getAuthorities);
router.get('/:authorityId', authorityController.getAuthorityById);
router.get('/:authorityId/issues', authorityController.getAuthorityIssues);

module.exports = router;
