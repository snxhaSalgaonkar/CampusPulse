import 'package:json_annotation/json_annotation.dart';

enum Role {
  @JsonValue('user')
  user,
  @JsonValue('officer')
  officer,
  @JsonValue('admin')
  admin,
}

enum IssueStatus {
  @JsonValue('reported')
  reported,
  @JsonValue('in_progress')
  inProgress,
  @JsonValue('resolved')
  resolved,
  @JsonValue('rejected')
  rejected,
}

enum Urgency {
  @JsonValue('low')
  low,
  @JsonValue('medium')
  medium,
  @JsonValue('high')
  high,
  @JsonValue('critical')
  critical,
}
