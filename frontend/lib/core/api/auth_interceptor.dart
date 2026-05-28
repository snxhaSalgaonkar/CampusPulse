import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../storage/secure_storage_provider.dart';

part 'auth_interceptor.g.dart';

@riverpod
AuthInterceptor authInterceptor(AuthInterceptorRef ref) {
  final storage = ref.watch(secureStorageProvider);
  return AuthInterceptor(storage);
}

class AuthInterceptor extends Interceptor {
  final FlutterSecureStorage _storage;

  AuthInterceptor(this._storage);

  @override
  Future<void> onRequest(RequestOptions options, RequestInterceptorHandler handler) async {
    final token = await _storage.read(key: 'jwt_token');
    if (token != null) {
      options.headers['Authorization'] = 'Bearer $token';
    }
    handler.next(options);
  }

  @override
  void onError(DioException err, ErrorInterceptorHandler handler) {
    // If we get a 401 Unauthorized, we might want to clear the token or trigger a logout.
    // For now, we'll just pass the error along. The AuthController can handle it.
    if (err.response?.statusCode == 401) {
      _storage.delete(key: 'jwt_token');
    }
    handler.next(err);
  }
}
