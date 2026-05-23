const express = require('express');
const router = express.Router();
const { successResponse } = require('../utils/apiResponse');

// Example route
router.post('/login', (req, res) => {
    successResponse(res, 200, 'Login route placeholder');
});

module.exports = router;
