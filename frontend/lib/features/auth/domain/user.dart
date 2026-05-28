import 'package:freezed_annotation/freezed_annotation.dart';
import '../../../core/models/enums.dart';

part 'user.freezed.dart';
part 'user.g.dart';

@freezed
class User with _$User {
  const factory User({
    required String id,
    required String name,
    required String email,
    required Role role,
    @JsonKey(name: 'profileImage') String? profileImage,
    @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp)
    DateTime? createdAt,
  }) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}

DateTime? _dateTimeFromTimestamp(dynamic timestamp) {
  if (timestamp == null) return null;
  if (timestamp is int) {
    // Check if it's seconds or milliseconds
    return DateTime.fromMillisecondsSinceEpoch(
        timestamp > 9999999999 ? timestamp : timestamp * 1000);
  }
  if (timestamp is String) {
    return DateTime.tryParse(timestamp);
  }
  return null;
}

int? _dateTimeToTimestamp(DateTime? date) {
  if (date == null) return null;
  return date.millisecondsSinceEpoch;
}
