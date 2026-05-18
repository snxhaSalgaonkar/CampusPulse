class UserModel {
  final String id;
  final String fullName;
  final String email;
  final String role;
  final String department;

  UserModel({
    required this.id,
    required this.fullName,
    required this.email,
    required this.role,
    required this.department,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] as String,
      fullName: json['fullName'] as String,
      email: json['email'] as String,
      role: json['role'] as String,
      department: json['department'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'fullName': fullName,
      'email': email,
      'role': role,
      'department': department,
    };
  }
}
