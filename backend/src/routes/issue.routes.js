const express = require('express');
const router = express.Router();
const { successResponse } = require('../utils/apiResponse');

router.get('/', (req, res) => {
    successResponse(res, 200, 'Issues list placeholder');
});

module.exports = router;
