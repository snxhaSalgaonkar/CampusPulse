const BaseModel = require('./base.model');
const { isRequired, isValidEmail, isValidEnum } = require('../utils/validators');

class User extends BaseModel {
    static ROLES = ['student', 'faculty', 'admin'];

    constructor(data = {}) {
        super(data);
        this.uid = data.uid || this.generateId();
        this.fullName = data.fullName || '';
        this.email = data.email || '';
        this.phone = data.phone || '';
        this.department = data.department || '';
        this.role = data.role || 'student';
        this.profileImage = data.profileImage || '';
        this.isVerified = data.isVerified || false;
        this.deviceToken = data.deviceToken || '';
    }

    validate() {
        const errors = [];
        if (!isRequired(this.uid)) errors.push('uid is required');
        if (!isRequired(this.fullName)) errors.push('fullName is required');
        if (!isRequired(this.email)) errors.push('email is required');
        if (!isValidEmail(this.email)) errors.push('email must be valid');
        if (!isRequired(this.role)) errors.push('role is required');
        if (!isValidEnum(this.role, User.ROLES)) errors.push('Invalid role');
        return errors;
    }

    sanitize(data) {
        const allowedFields = [
            'uid', 'fullName', 'email', 'phone', 'department',
            'role', 'profileImage', 'isVerified', 'deviceToken',
            'createdAt', 'updatedAt'
        ];
        return super.sanitize(data, allowedFields);
    }

    toJSON() {
        return {
            uid: this.uid,
            fullName: this.fullName,
            email: this.email,
            phone: this.phone,
            department: this.department,
            role: this.role,
            profileImage: this.profileImage,
            isVerified: this.isVerified,
            deviceToken: this.deviceToken,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }
}

module.exports = User;
