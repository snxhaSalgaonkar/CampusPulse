const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');

exports.getLocations = asyncHandler(async (req, res) => {
    const locations = await req.app.locals.repositories.location.findAll();
    return successResponse(res, 'Locations retrieved', locations);
});

exports.createLocation = asyncHandler(async (req, res) => {
    const location = await req.app.locals.repositories.location.create(req.body);
    return successResponse(res, 'Location created successfully', location, 201);
});

exports.updateLocation = asyncHandler(async (req, res) => {
    const location = await req.app.locals.repositories.location.update(req.params.locationId, req.body);
    return successResponse(res, 'Location updated successfully', location);
});

exports.deleteLocation = asyncHandler(async (req, res) => {
    await req.app.locals.repositories.location.delete(req.params.locationId);
    return successResponse(res, 'Location deleted successfully');
});
