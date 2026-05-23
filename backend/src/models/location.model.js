const BaseModel = require('./base.model');
const { isRequired, isValidCoordinates } = require('../utils/validators');

class Location extends BaseModel {
    constructor(data = {}) {
        super(data);
        this.locationId = data.locationId || this.generateId();
        this.name = data.name || '';
        this.latitude = data.latitude || null;
        this.longitude = data.longitude || null;
        this.type = data.type || ''; // e.g., 'building', 'facility'
    }

    validate() {
        const errors = [];
        if (!isRequired(this.locationId)) errors.push('locationId is required');
        if (!isRequired(this.name)) errors.push('name is required');
        if (this.latitude !== null && this.longitude !== null) {
            if (!isValidCoordinates(this.latitude, this.longitude)) {
                errors.push('Invalid coordinates');
            }
        }
        return errors;
    }

    toJSON() {
        return {
            locationId: this.locationId,
            name: this.name,
            latitude: this.latitude,
            longitude: this.longitude,
            type: this.type
        };
    }
}

module.exports = Location;
