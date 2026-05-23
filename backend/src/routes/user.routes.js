const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const { successResponse } = require('../utils/apiResponse');

router.use(protect); // Protect all user routes

router.get('/profile', (req, res) => {
    successResponse(res, 200, 'User profile placeholder');
});

module.exports = router;
