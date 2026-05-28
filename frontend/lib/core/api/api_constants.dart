class ApiConstants {
  // Use 10.0.2.2 for Android Emulator, localhost for iOS/Web, or actual IP for physical device.
  // We'll default to localhost as standard for now, but this should ideally be in an .env file
  static const String baseUrl = 'http://localhost:5000/api/v1';

  // Auth Endpoints
  static const String login = '/auth/login';
  static const String register = '/auth/register';
  static const String profile = '/auth/me';

  // Issues Endpoints
  static const String issues = '/issues';
  static String issueDetails(String id) => '/issues/$id';
  static String updateIssueStatus(String id) => '/issues/$id/status';
  static String issuesByAuthority(String authorityId) => '/issues/authority/$authorityId';

  // Categories & Authorities Endpoints
  static const String categories = '/categories';
  static const String authorities = '/authorities';
}
