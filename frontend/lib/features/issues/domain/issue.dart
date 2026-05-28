import 'package:freezed_annotation/freezed_annotation.dart';
import '../../../core/models/enums.dart';
import 'authority.dart';

part 'issue.freezed.dart';
part 'issue.g.dart';

@freezed
class Issue with _$Issue {
  const factory Issue({
    @JsonKey(name: 'issueId') required String id,
    required String title,
    required String description,
    required String categoryId,
    required IssueStatus status,
    required Urgency urgency,
    Authority? assignedAuthority,
    @Default([]) List<String> imageUrls,
    UserSummary? createdBy,
    @JsonKey(fromJson: _dateTimeFromTimestamp, toJson: _dateTimeToTimestamp)
    DateTime? createdAt,
  }) = _Issue;

  factory Issue.fromJson(Map<String, dynamic> json) => _$IssueFromJson(json);
}

@freezed
class UserSummary with _$UserSummary {
  const factory UserSummary({
    @JsonKey(name: 'userId') String? id,
    String? name,
    String? email,
  }) = _UserSummary;

  factory UserSummary.fromJson(Map<String, dynamic> json) =>
      _$UserSummaryFromJson(json);
}

DateTime? _dateTimeFromTimestamp(dynamic timestamp) {
  if (timestamp == null) return null;
  if (timestamp is int) {
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
