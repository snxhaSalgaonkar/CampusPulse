const asyncHandler = require('../utils/asyncHandler');
const { successResponse } = require('../utils/apiResponse');

exports.getNotifications = asyncHandler(async (req, res) => {
    const notifications = await req.app.locals.repositories.notification.findByUserId(req.user.id);
    return successResponse(res, 'Notifications retrieved', notifications);
});

exports.markAsRead = asyncHandler(async (req, res) => {
    const notification = await req.app.locals.repositories.notification.markAsRead(req.params.notificationId);
    return successResponse(res, 'Notification marked as read', notification);
});

exports.markAllAsRead = asyncHandler(async (req, res) => {
    await req.app.locals.repositories.notification.markAllAsRead(req.user.id);
    return successResponse(res, 'All notifications marked as read');
});
