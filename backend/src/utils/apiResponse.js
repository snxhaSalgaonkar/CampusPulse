// const successResponse = (res, statusCode, message, data = {}) => {
//     return res.status(statusCode).json({
//         success: true,
//         message,
//         data,
//     });
// };

// const errorResponse = (res, statusCode, message, errors = []) => {
//     return res.status(statusCode).json({
//         success: false,
//         message,
//         errors,
//     });
// };

// const paginatedResponse = (res, statusCode, message, data, page, limit, total) => {
//     return res.status(statusCode).json({
//         success: true,
//         message,
//         data,
//         meta: {
//             page: parseInt(page, 10),
//             limit: parseInt(limit, 10),
//             total,
//             totalPages: Math.ceil(total / limit),
//         },
//     });
// };

// module.exports = {
//     successResponse,
//     errorResponse,
//     paginatedResponse,
// };
exports.successResponse = (res, message, data = {}, statusCode = 200, pagination = null) => {
    const response = { success: true, message, data };
    if (pagination) response.pagination = pagination;
    return res.status(statusCode).json(response);
};

exports.errorResponse = (res, message, errors = [], statusCode = 400) => {
    return res.status(statusCode).json({ success: false, message, errors });
};
