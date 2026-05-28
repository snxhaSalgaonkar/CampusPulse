class ApiError implements Exception {
  final int statusCode;
  final String message;
  final Map<String, dynamic>? errors;

  ApiError({
    required this.statusCode,
    required this.message,
    this.errors,
  });

  factory ApiError.fromJson(Map<String, dynamic> json, int statusCode) {
    return ApiError(
      statusCode: statusCode,
      message: json['message'] as String? ?? 'An unexpected error occurred',
      errors: json['errors'] as Map<String, dynamic>?,
    );
  }

  @override
  String toString() {
    return 'ApiError: $statusCode - $message\nErrors: $errors';
  }
}
