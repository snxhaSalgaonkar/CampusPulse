const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => {
    return emailRegex.test(email);
};

const isValidEnum = (value, enumArray) => {
    return enumArray.includes(value);
};

const isRequired = (value) => {
    return value !== undefined && value !== null && value !== '';
};

const isValidLength = (value, min, max) => {
    if (typeof value !== 'string') return false;
    return value.length >= min && value.length <= max;
};

const isValidCoordinates = (lat, lng) => {
    if (typeof lat !== 'number' || typeof lng !== 'number') return false;
    return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
};

module.exports = {
    isValidEmail,
    isValidEnum,
    isRequired,
    isValidLength,
    isValidCoordinates,
};
