module.exports = {
    getCurrentTimestamp: () => new Date().toISOString(),
    differenceInHours: (date1, date2) => {
        return Math.abs(new Date(date1) - new Date(date2)) / 36e5;
    }
};
