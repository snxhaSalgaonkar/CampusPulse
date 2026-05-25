const BaseService = require('./base.service');
const Roles = require('../utils/constants/roles');

class AuthService extends BaseService {
    async registerUser(userData, userRepository) {
        this.validateRequiredFields(userData, ['email', 'password', 'role']);

        if (!this.verifyUserRole(userData.role)) throw new Error('Invalid role specified.');

        const existingUser = await userRepository.findByEmail(userData.email);
        if (existingUser) throw new Error('Email is already in use.');

        if (!this.validatePasswordStrength(userData.password)) {
            throw new Error('Password does not meet strength requirements.');
        }

        return await userRepository.create({
            ...userData,
            isVerified: false,
            isBlocked: false,
            createdAt: this.getCurrentTimestamp()
        });
    }

    async loginUser(email, password, userRepository) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('Invalid credentials.');
        if (user.isBlocked) throw new Error('User is blocked and cannot login.');

        const isValidPassword = await userRepository.verifyPassword(email, password);
        if (!isValidPassword) throw new Error('Invalid credentials.');

        if (!user.isVerified && user.role !== Roles.ADMIN) {
            throw new Error('Unverified users have restricted access.');
        }

        return this.createJwtPayload(user);
    }

    validatePasswordStrength(password) {
        return password && password.length >= 8;
    }

    createJwtPayload(user) {
        return { userId: user.id, email: user.email, role: user.role };
    }

    verifyUserRole(role) {
        return Object.values(Roles).includes(role);
    }
}

module.exports = AuthService;
