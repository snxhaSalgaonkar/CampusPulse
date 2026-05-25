module.exports = {
    sanitizeText: (text) => text.replace(/[<>]/g, '').trim()
};
