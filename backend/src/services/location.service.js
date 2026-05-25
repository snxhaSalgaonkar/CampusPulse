const BaseService = require('./base.service');

class LocationService extends BaseService {
    validateCoordinates(latitude, longitude) {
        if (latitude < -90 || latitude > 90) throw new Error('Invalid latitude.');
        if (longitude < -180 || longitude > 180) throw new Error('Invalid longitude.');
        return true;
    }

    isInsideCampus(latitude, longitude, campusGeofence) {
        // Basic mock implementation of geofence bounding box check
        return (
            latitude >= campusGeofence.minLat &&
            latitude <= campusGeofence.maxLat &&
            longitude >= campusGeofence.minLng &&
            longitude <= campusGeofence.maxLng
        );
    }

    normalizeLocation(locationData) {
        return {
            buildingName: locationData.buildingName?.trim().toUpperCase(),
            roomNumber: locationData.roomNumber?.trim(),
            latitude: parseFloat(locationData.latitude),
            longitude: parseFloat(locationData.longitude)
        };
    }
}

module.exports = LocationService;
