import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../domain/models/user_model.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

final authRepositoryProvider = Provider<AuthRepository>((ref) {
  return AuthRepository(const FlutterSecureStorage());
});

class AuthRepository {
  final FlutterSecureStorage _storage;
  
  AuthRepository(this._storage);

  Future<UserModel> login(String email, String password) async {
    // Simulate network delay
    await Future.delayed(const Duration(seconds: 1));
    
    if (email == 'admin@college.edu' && password == 'password') {
      final user = UserModel(
        id: '1',
        fullName: 'Admin User',
        email: email,
        role: 'Admin',
        department: 'Maintenance',
      );
      await _storage.write(key: 'jwt', value: 'mock_jwt_token');
      return user;
    } else if (email == 'student@college.edu' && password == 'password') {
      final user = UserModel(
        id: '2',
        fullName: 'Jane Student',
        email: email,
        role: 'Student',
        department: 'Computer Science',
      );
      await _storage.write(key: 'jwt', value: 'mock_jwt_token');
      return user;
    }
    
    throw Exception('Invalid email or password');
  }

  Future<void> logout() async {
    await Future.delayed(const Duration(milliseconds: 500));
    await _storage.delete(key: 'jwt');
  }

  Future<bool> isAuthenticated() async {
    final token = await _storage.read(key: 'jwt');
    return token != null;
  }
}
