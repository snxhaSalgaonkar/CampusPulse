const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');
const AuthService = require('../services/auth.service');

const authService = new AuthService();

exports.register = asyncHandler(async (req, res) => {
    const user = await authService.registerUser(req.body, req.app.locals.repositories.user);
    return successResponse(res, 'Registration successful', user, 201);
});

exports.login = asyncHandler(async (req, res) => {
    const token = await authService.loginUser(req.body.email, req.body.password, req.app.locals.repositories.user);
    return successResponse(res, 'Login successful', { token });
});

exports.getMe = asyncHandler(async (req, res) => {
    return successResponse(res, 'User profile retrieved', req.user);
});
