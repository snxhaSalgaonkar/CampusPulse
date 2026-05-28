import 'package:dio/dio.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import 'api_constants.dart';
import 'auth_interceptor.dart';

part 'api_client.g.dart';

@riverpod
Dio apiClient(ApiClientRef ref) {
  final authInterceptor = ref.watch(authInterceptorProvider);

  final dio = Dio(
    BaseOptions(
      baseUrl: ApiConstants.baseUrl,
      connectTimeout: const Duration(seconds: 15),
      receiveTimeout: const Duration(seconds: 15),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    ),
  );

  dio.interceptors.add(authInterceptor);
  dio.interceptors.add(LogInterceptor(responseBody: true, requestBody: true));

  return dio;
}
